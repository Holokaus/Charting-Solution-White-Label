#!/usr/bin/env node

/**
 * Automated Variable Renaming Tool for TradingView Modules (Accuracy-Focused)
 * Only applies renames when confidence is very high and patterns
#!/usr/bin/env node

/**
 * Automated Variable Renaming Tool for TradingView Modules (Accuracy-Focused)
 * Only applies renames when confidence is very high and patterns are specific.
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

  // New mappings from Module Hunter
  3615: 'dialogManager',
  84617: 'chartManager',
  55308: 'drawingToolbarState',
  34840: 'chartDataManager',
  29803: 'linkingManager',
  71846: 'chartSaver',
  81593: 'backendService',
  46082: 'timeInterval',
  11946: 'lineToolUtils',
  78861: 'lineToolManager',

  // Add more as discovered
};

// High-confidence patterns (only these will be applied)
const HIGH_CONFIDENCE_PATTERNS = [
  {
    name: 'getChartingLibraryGlobalContext',
    suggestedName: 'globalContext',
    pattern: /getChartingLibraryGlobalContext\(\)/
  },
  {
    name: 'getChartingLibraryOwner',
    suggestedName: 'libraryOwner',
    pattern: /getChartingLibraryOwner\(\)/
  },
];

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const suggestions = [];

  // Find require statements: var x = i(moduleId) or const x = i(moduleId) or let x = i(moduleId)
  const requireRegex = /(?:var|const|let)\s+(\w+)\s*=\s*i\((\d+)\)/g;
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

  // Find variable declarations with high-confidence patterns
  const varRegex = /(?:var|const|let)\s+(\w+)\s*=\s*([^;]+)/g;
  while ((match = varRegex.exec(content)) !== null) {
    const varName = match[1];
    const assignment = match[2];

    // Check for high-confidence patterns
    for (const pattern of HIGH_CONFIDENCE_PATTERNS) {
      if (pattern.pattern.test(assignment)) {
        suggestions.push({
          type: 'context_var',
          variable: varName,
          suggestedName: pattern.suggestedName,
          confidence: 'high'
        });
        break; // Only one suggestion per variable
      }
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

  // Apply only high-confidence suggestions
  Object.keys(varMap).forEach(varName => {
    const highConfSuggestions = varMap[varName].filter(s => s.confidence === 'high');
    if (highConfSuggestions.length > 0) {
      const bestSugg = highConfSuggestions[0];
      const newName = bestSugg.suggestedName;

      // Optimization: Skip if the new name is the same as the current name
      if (newName === varName) {
        return;
      }

      // Safety check: Ensure newName exists and is different
      if (newName && newName !== varName) {
        // Replace variable declarations: var oldName = , const oldName =, let oldName =
        // Logic: Use 'const' for module imports (best practice), 'var' for others
        const declRegex = new RegExp(`\\b(?:var|const|let)\\s+${varName}\\b`, 'g');
        content = content.replace(declRegex, `${bestSugg.type.includes('module_import') ? 'const' : 'var'} ${newName}`);

        // Replace parameter declarations: function(oldName)
        const paramRegex = new RegExp(`\\bfunction\\s*\\(\\s*${varName}\\s*\\)`, 'g');
        content = content.replace(paramRegex, `function(${newName})`);

        // Replace in object destructuring: { oldName }
        const destructRegex = new RegExp(`\\{\\s*${varName}\\s*\\}`, 'g');
        content = content.replace(destructRegex, `{ ${newName} }`);
      }
    }
  });

  fs.writeFileSync(filePath, content);
  console.log(`Applied ${Object.keys(varMap).length} variable renames to ${filePath}`);
}

// CLI usage
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    console.log('Usage: node automated-rename-tool-accurate.cjs <file-path>');
    process.exit(1);
  }

  const suggestions = analyzeFile(filePath);
  console.log(`Found ${suggestions.length} suggestions:`);
  suggestions.forEach(s => {
    console.log(`  ${s.variable} -> ${s.suggestedName} (${s.confidence})`);
  });

  if (suggestions.length > 0) {
    applySuggestions(filePath, suggestions);
  }
}

module.exports = { analyzeFile, applySuggestions, KNOWN_MODULES };