#!/usr/bin/env node

/**
 * Automated Variable Renaming Tool for TradingView Modules
 * Analyzes minified webpack modules and suggests semantic variable names
 */

const fs = require('fs');
const path = require('path');

// Known module mappings (from completed reverse engineering)
const KNOWN_MODULES = {
  // Core infrastructure
  50151: 'assertionUtils',
  9343: 'logger',
  2072: 'watchedValue',
  48096: 'delegate',
  72207: 'dataSource',
  67135: 'priceDataSource',
  52746: 'seriesData',
  2115: 'series',

  // Common utilities
  11542: 'context',
  52959: 'features',
  81251: 'settings',
  60973: 'chartConfig',
  1765: 'settingsAdapter',

  // Rendering
  38881: 'chunkLoaderModule',
  9753: 'constants',
  72877: 'cssClasses',

  // Add more as discovered
};

// Common variable name patterns
const VARIABLE_PATTERNS = {
  // Function parameters
  'e': ['event', 'element', 'error', 'entity'],
  't': ['target', 'type', 'time', 'text'],
  'i': ['index', 'id', 'item', 'input'],
  's': ['source', 'state', 'settings', 'string'],
  'o': ['options', 'object', 'owner', 'output'],
  'n': ['name', 'number', 'node', 'newValue'],
  'r': ['result', 'renderer', 'reference', 'response'],
  'a': ['args', 'array', 'action', 'async'],
  'l': ['list', 'length', 'loader', 'logger'],
  'c': ['context', 'config', 'callback', 'class'],
  'h': ['handler', 'helper', 'height', 'hash'],
  'd': ['data', 'default', 'delegate', 'duration'],
  'u': ['url', 'user', 'utils', 'update'],
  '_': ['private', 'internal', 'underscore'],
  'p': ['props', 'parent', 'promise', 'params'],
  'm': ['model', 'method', 'module', 'message'],
  'g': ['global', 'group', 'generator'],
  'f': ['function', 'flag', 'file', 'format'],
  'y': ['type', 'year', 'yield'],
  'v': ['value', 'version', 'variable'],
  'S': ['State', 'Service', 'Settings'],
  'b': ['boolean', 'buffer', 'base'],
  'w': ['width', 'window', 'wrapper'],
  'C': ['Class', 'Component', 'Constant'],
  'T': ['Type', 'Template', 'Tool'],
  'P': ['Props', 'Promise', 'Provider'],
  'x': ['x', 'xml', 'export'],
  'I': ['Interface', 'Instance', 'Id'],
  'M': ['Model', 'Module', 'Manager'],
};

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const suggestions = [];

  // Find require statements: var x = i(moduleId)
  const requireRegex = /var\s+(\w+)\s*=\s*i\((\d+)\)/g;
  let match;
  while ((match = requireRegex.exec(content)) !== null) {
    const varName = match[1];
    const moduleId = parseInt(match[2]);

    if (KNOWN_MODULES[moduleId]) {
      suggestions.push({
        type: 'module_import',
        variable: varName,
        moduleId: moduleId,
        suggestedName: KNOWN_MODULES[moduleId],
        confidence: 'high'
      });
    }
  }

  // Find function parameters in common patterns
  const functionRegex = /function\s*\(\s*(\w+)\s*\)/g;
  while ((match = functionRegex.exec(content)) !== null) {
    const param = match[1];
    if (VARIABLE_PATTERNS[param]) {
      suggestions.push({
        type: 'function_param',
        variable: param,
        suggestedNames: VARIABLE_PATTERNS[param],
        confidence: 'medium'
      });
    }
  }

  // Find variable declarations with context clues
  const varRegex = /var\s+(\w+)\s*=\s*([^;]+)/g;
  while ((match = varRegex.exec(content)) !== null) {
    const varName = match[1];
    const assignment = match[2];

    // Check for common patterns
    if (assignment.includes('getChartingLibraryGlobalContext')) {
      suggestions.push({
        type: 'context_var',
        variable: varName,
        suggestedName: 'globalContext',
        confidence: 'high'
      });
    } else if (assignment.includes('getChartingLibraryOwner')) {
      suggestions.push({
        type: 'context_var',
        variable: varName,
        suggestedName: 'libraryOwner',
        confidence: 'high'
      });
    } else if (assignment.includes('createElement')) {
      suggestions.push({
        type: 'dom_var',
        variable: varName,
        suggestedName: 'element',
        confidence: 'medium'
      });
    }
  }

  return suggestions;
}

function applySuggestions(filePath, suggestions) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Group suggestions by variable
  const varMap = {};
  suggestions.forEach(sugg => {
    if (!varMap[sugg.variable]) varMap[sugg.variable] = [];
    varMap[sugg.variable].push(sugg);
  });

  // Apply high confidence suggestions first
  Object.keys(varMap).forEach(varName => {
    const suggs = varMap[varName].filter(s => s.confidence === 'high');
    if (suggs.length > 0) {
      const bestSugg = suggs[0];
      const newName = bestSugg.suggestedName;

      // Replace variable declarations: var oldName = 
      const declRegex = new RegExp(`\\bvar\\s+${varName}\\b`, 'g');
      content = content.replace(declRegex, `var ${newName}`);

      // Replace parameter declarations: function(oldName)
      const paramRegex = new RegExp(`\\bfunction\\s*\\(\\s*${varName}\\s*\\)`, 'g');
      content = content.replace(paramRegex, `function(${newName})`);

      // Replace in object destructuring: { oldName }
      const destructRegex = new RegExp(`\\{\\s*${varName}\\s*\\}`, 'g');
      content = content.replace(destructRegex, `{ ${newName} }`);

      // Replace other uses, but carefully
      // For now, skip general replacements to avoid breaking code
    }
  });

  fs.writeFileSync(filePath, content);
  console.log(`Applied ${Object.keys(varMap).length} variable renames to ${filePath}`);
}

// CLI usage
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    console.log('Usage: node rename-tool.js <file-path>');
    process.exit(1);
  }

  const suggestions = analyzeFile(filePath);
  console.log(`Found ${suggestions.length} suggestions:`);
  suggestions.forEach(s => {
    console.log(`  ${s.variable} -> ${s.suggestedName || s.suggestedNames?.[0]} (${s.confidence})`);
  });

  if (suggestions.length > 0) {
    applySuggestions(filePath, suggestions);
  }
}

module.exports = { analyzeFile, applySuggestions, KNOWN_MODULES };