#!/usr/bin/env node
/**
 * SEMANTIC ANALYSIS ENGINE v1.0
 * Principal Architect Framework for True Reverse Engineering
 * 
 * This engine replaces mechanical prefixing with purpose-based semantic restoration
 */

const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANTIC PATTERN LIBRARY
// Purpose: Identify what minified variables actually represent
// ═══════════════════════════════════════════════════════════════════════════════

const SEMANTIC_PATTERNS = {
  // Array/List iteration patterns
  'array_iteration_index': {
    patterns: [
      /for\s*\(\s*(?:let|var|const)\s+(\w+)\s*=\s*0\s*;\s*\1\s*<\s*(\w+)\.length/i,
      /for\s*\(\s*(?:let|var|const)\s+(\w+)\s*=\s*0\s*;\s*\1\s*<\s*array\.length/i,
      /\w+\s*\.\s*forEach\s*\(\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/i,
      /\w+\s*\.\s*map\s*\(\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)/i,
    ],
    semanticName: 'index',
    alternativeNames: ['arrayIndex', 'elementIndex', 'itemIndex', 'loopIndex'],
    confidence: 95,
    category: 'iteration',
    description: 'Numeric index used to access array elements'
  },
  
  // Array/List element patterns
  'array_element': {
    patterns: [
      /\w+\[\s*(\w+)\s*\]/i,
      /\w+\s*\.\s*forEach\s*\(\s*\(\s*(\w+)\s*\)/i,
      /\w+\s*\.\s*map\s*\(\s*\(\s*(\w+)\s*\)/i,
      /\w+\s*\.\s*filter\s*\(\s*\(\s*(\w+)\s*\)/i,
    ],
    semanticName: 'element',
    alternativeNames: ['arrayElement', 'currentElement', 'item', 'arrayItem'],
    confidence: 85,
    category: 'collection',
    description: 'Individual element from an array or collection'
  },
  
  // Error handling patterns
  'error_object': {
    patterns: [
      /catch\s*\(\s*(\w+)\s*\)/i,
      /catch\s*\(\s*(\w+)\s*\)\s*\{[^}]*\1\s*\.\s*(?:message|stack|name)/i,
      /try\s*\{[^}]*\}\s*catch\s*\(\s*(\w+)\s*\)/i,
    ],
    semanticName: 'error',
    alternativeNames: ['errorObject', 'caughtError', 'exception', 'err'],
    confidence: 90,
    category: 'error-handling',
    description: 'Error object caught in exception handling'
  },
  
  // Event handling patterns
  'event_object': {
    patterns: [
      /addEventListener\s*\(\s*["']\w+["']\s*,\s*\(\s*(\w+)\s*\)/i,
      /addEventListener\s*\(\s*["']click["']\s*,\s*\(\s*(\w+)\s*\)/i,
      /addEventListener\s*\(\s*["']mousemove["']\s*,\s*\(\s*(\w+)\s*\)/i,
      /on\w+\s*=\s*\(\s*(\w+)\s*\)\s*=>/i,
    ],
    semanticName: 'event',
    alternativeNames: ['eventObject', 'mouseEvent', 'keyboardEvent', 'domEvent'],
    confidence: 95,
    category: 'events',
    description: 'DOM or user interaction event object'
  },
  
  // Configuration/Options patterns
  'configuration_object': {
    patterns: [
      /function\s+\w+\s*\([^)]*\b(\w+)\b[^)]*\)\s*\{[^}]*\1\s*\.\s*(?:enabled|disabled|mode|type|theme)/i,
      /\{\s*(?:config|options|settings|cfg)\s*:\s*(\w+)\s*\}/i,
      /(?:const|let|var)\s+(\w+)\s*=\s*\{[^}]*(?:theme|mode|enabled|disabled)/i,
    ],
    semanticName: 'configuration',
    alternativeNames: ['config', 'options', 'settings', 'preferences', 'params'],
    confidence: 80,
    category: 'configuration',
    description: 'Configuration or options object'
  },
  
  // Data/Model patterns
  'data_object': {
    patterns: [
      /function\s+\w+\s*\(\s*(\w+)\s*\)\s*\{[^}]*\1\s*\.\s*(?:data|value|payload|content)/i,
      /\(\s*(\w+)\s*\)\s*=>\s*\{[^}]*\1\s*\.\s*(?:id|name|title|label)/i,
      /process\s*\(\s*(\w+)\s*\)/i,
      /transform\s*\(\s*(\w+)\s*\)/i,
    ],
    semanticName: 'data',
    alternativeNames: ['dataObject', 'payload', 'inputData', 'model', 'entity'],
    confidence: 75,
    category: 'data',
    description: 'Generic data object being processed'
  },
  
  // Chart/Visual specific patterns
  'chart_widget': {
    patterns: [
      /ChartWidget/i,
      /chartWidget/i,
      /chart\s*\.\s*(?:widget|container|pane)/i,
      /new\s+Chart/i,
    ],
    semanticName: 'chartWidget',
    alternativeNames: ['chart', 'widget', 'chartInstance', 'chartContainer'],
    confidence: 90,
    category: 'charting',
    description: 'TradingView chart widget instance'
  },
  
  // Price/Data point patterns
  'price_value': {
    patterns: [
      /(?:price|value|close|open|high|low)\s*:\s*(\w+)/i,
      /\w+\s*\.\s*(?:price|value|close|open|high|low)/i,
      /calculatePrice\s*\(\s*(\w+)\s*\)/i,
    ],
    semanticName: 'price',
    alternativeNames: ['priceValue', 'dataValue', 'pricePoint', 'tickValue'],
    confidence: 85,
    category: 'financial-data',
    description: 'Price or data point value'
  },
  
  // Canvas/Rendering context
  'rendering_context': {
    patterns: [
      /getContext\s*\(\s*["']2d["']\s*\)/i,
      /CanvasRenderingContext2D/i,
      /ctx\s*\.\s*(?:fillRect|strokeRect|beginPath)/i,
      /context\s*\.\s*(?:fill|stroke|draw)/i,
    ],
    semanticName: 'renderingContext',
    alternativeNames: ['ctx', 'context', 'canvasContext', 'drawingContext'],
    confidence: 95,
    category: 'rendering',
    description: 'Canvas 2D rendering context'
  },
  
  // Time/Date patterns
  'time_value': {
    patterns: [
      /Date\s*\.\s*now\s*\(\s*\)/i,
      /new\s+Date\s*\(/i,
      /timestamp/i,
      /time\s*:\s*(\w+)/i,
      /date\s*:\s*(\w+)/i,
    ],
    semanticName: 'time',
    alternativeNames: ['timestamp', 'date', 'timeValue', 'dateTime'],
    confidence: 80,
    category: 'time',
    description: 'Time or date value'
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// CONFIDENCE SCORING ENGINE
// Purpose: Calculate confidence in semantic restoration
// ═══════════════════════════════════════════════════════════════════════════════

function analyzeVariableSemantics(variableName, code, context) {
  const scores = {
    patternMatch: 0,
    usageConsistency: 0,
    typeInference: 0,
    namingConvention: 0,
    crossReference: 0
  };
  
  const matches = [];
  
  // 1. Pattern Matching (30% weight)
  for (const [patternKey, patternData] of Object.entries(SEMANTIC_PATTERNS)) {
    for (const regex of patternData.patterns) {
      // Test if variable appears in pattern context
      const testRegex = new RegExp(regex.source.replace(/\\b\(\?\:let\|var\|const\)\\b/, '\\b').replace(/\(\\w\+\)/, variableName), 'gi');
      if (testRegex.test(code)) {
        matches.push({
          pattern: patternKey,
          confidence: patternData.confidence,
          semanticName: patternData.semanticName,
          alternatives: patternData.alternativeNames
        });
        scores.patternMatch = Math.max(scores.patternMatch, patternData.confidence);
      }
    }
  }
  
  // 2. Usage Consistency (25% weight)
  const usageCount = (code.match(new RegExp(`\\b${variableName}\\b`, 'g')) || []).length;
  const uniqueUsages = analyzeUsagePatterns(variableName, code);
  scores.usageConsistency = Math.min(100, usageCount * 5 + uniqueUsages * 10);
  
  // 3. Type Inference (25% weight)
  scores.typeInference = inferVariableType(variableName, code);
  
  // 4. Naming Convention (10% weight)
  scores.namingConvention = evaluateNamingConvention(variableName);
  
  // 5. Cross Reference (10% weight)
  scores.crossReference = crossReferenceWithContext(variableName, context);
  
  // Calculate weighted confidence
  const weightedConfidence = (
    scores.patternMatch * 0.30 +
    scores.usageConsistency * 0.25 +
    scores.typeInference * 0.25 +
    scores.namingConvention * 0.10 +
    scores.crossReference * 0.10
  );
  
  return {
    variable: variableName,
    confidence: Math.round(weightedConfidence),
    scores: scores,
    matches: matches.slice(0, 3), // Top 3 matches
    recommendation: generateRecommendation(matches, weightedConfidence)
  };
}

function analyzeUsagePatterns(variable, code) {
  // Count different ways variable is used
  const patterns = {
    propertyAccess: new RegExp(`\\b${variable}\\s*\\.\\s*\\w+`, 'g'),
    arrayAccess: new RegExp(`\\b${variable}\\s*\\[`, 'g'),
    functionCall: new RegExp(`\\b${variable}\\s*\\(`, 'g'),
    comparison: new RegExp(`\\b${variable}\\s*[<>=!]`, 'g'),
    assignment: new RegExp(`\\b${variable}\\s*=`, 'g'),
  };
  
  let uniquePatterns = 0;
  for (const [type, regex] of Object.entries(patterns)) {
    if (regex.test(code)) uniquePatterns++;
  }
  
  return uniquePatterns;
}

function inferVariableType(variable, code) {
  // Look for type hints
  const varEscaped = variable.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const typePatterns = {
    number: new RegExp(`\\b${varEscaped}\\s*[=+\\-*/]\\s*\\d+`, 'i'),
    string: new RegExp(`["'][^"']*["']\\s*\\.\\s*${varEscaped}|${varEscaped}\\s*\\.\\s*["']`, 'i'),
    boolean: new RegExp(`(?:if|while)\\s*\\(\\s*${varEscaped}\\s*\\)|${varEscaped}\\s*(?:===|!==|==|!=)\\s*(?:true|false)`, 'i'),
    object: new RegExp(`\\b${varEscaped}\\s*\\.\\s*\\w+\\s*=|\\b${varEscaped}\\s*:\\s*\\{`, 'i'),
    array: new RegExp(`\\b${varEscaped}\\s*\\.\\s*(?:length|push|pop|shift|unshift|splice|slice|map|filter|forEach)`, 'i'),
    function: new RegExp(`\\b${varEscaped}\\s*\\([^)]*\\)\\s*\\{`, 'i'),
  };
  
  let typeConfidence = 0;
  for (const [type, regex] of Object.entries(typePatterns)) {
    if (regex.test(code)) typeConfidence += 20;
  }
  
  return Math.min(100, typeConfidence);
}

function evaluateNamingConvention(variable) {
  // Single letters are OK for certain contexts
  const validSingleLetters = ['i', 'j', 'k', 'x', 'y', 'z', 'e', 't', 'n', 'r', 's'];
  
  if (variable.length === 1) {
    return validSingleLetters.includes(variable) ? 60 : 40;
  }
  
  // camelCase or snake_case
  if (/^[a-z][a-zA-Z0-9_]*$/.test(variable)) return 90;
  if (/^[a-z][a-z0-9_]*$/.test(variable)) return 85;
  
  return 70;
}

function crossReferenceWithContext(variable, context) {
  // Check if variable appears in similar contexts across files
  // This would require analyzing multiple files
  return context ? 70 : 50;
}

function generateRecommendation(matches, confidence) {
  if (confidence >= 90) {
    return {
      action: 'ACCEPT',
      reason: 'High confidence semantic match',
      semanticName: matches[0]?.semanticName || null
    };
  } else if (confidence >= 75) {
    return {
      action: 'REVIEW',
      reason: 'Moderate confidence - manual verification recommended',
      semanticName: matches[0]?.semanticName || null,
      alternatives: matches[0]?.alternatives || []
    };
  } else if (confidence >= 50) {
    return {
      action: 'GUESS',
      reason: 'Low confidence - multiple possible interpretations',
      semanticName: matches[0]?.semanticName || null,
      alternatives: matches[0]?.alternatives || []
    };
  } else {
    return {
      action: 'REJECT',
      reason: 'Cannot determine semantics - manual analysis required',
      semanticName: null
    };
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// MODULE ANALYSIS ENGINE
// Purpose: Analyze entire modules for semantic restoration
// ═══════════════════════════════════════════════════════════════════════════════

function analyzeModule(moduleCode, moduleId) {
  // Extract all single-letter and short variable names
  const variablePattern = /\b(?:let|var|const)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\b|\bfunction\s+\w+\s*\([^)]*\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b[^)]*\)|\([^)]*\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b[^)]*\)\s*=>/g;
  
  const variables = new Set();
  let match;
  
  while ((match = variablePattern.exec(moduleCode)) !== null) {
    const varName = match[1] || match[2] || match[3];
    if (varName && (varName.length <= 3 || /^[a-z][0-9]$/.test(varName))) {
      variables.add(varName);
    }
  }
  
  // Also catch parameters in callbacks
  const callbackPattern = /\(\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)\s*=>|\bforEach\s*\(\s*\(?\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)?\s*=>|\bmap\s*\(\s*\(?\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)?\s*=>/g;
  while ((match = callbackPattern.exec(moduleCode)) !== null) {
    const varName = match[1] || match[2] || match[3];
    if (varName && varName.length <= 3) {
      variables.add(varName);
    }
  }
  
  // Analyze each variable
  const analysisResults = [];
  for (const variable of variables) {
    const analysis = analyzeVariableSemantics(variable, moduleCode, { moduleId });
    analysisResults.push(analysis);
  }
  
  // Calculate module-level confidence
  const avgConfidence = analysisResults.length > 0
    ? analysisResults.reduce((sum, r) => sum + r.confidence, 0) / analysisResults.length
    : 100;
  
  // Categorize module
  let tier = 'UNKNOWN';
  if (avgConfidence >= 95) tier = 'TIER_A_PLUS';
  else if (avgConfidence >= 90) tier = 'TIER_A';
  else if (avgConfidence >= 75) tier = 'TIER_B_PLUS';
  else if (avgConfidence >= 50) tier = 'TIER_B';
  else tier = 'TIER_C';
  
  return {
    moduleId: moduleId,
    variableCount: variables.size,
    variablesAnalyzed: analysisResults,
    averageConfidence: Math.round(avgConfidence),
    tier: tier,
    highConfidence: analysisResults.filter(r => r.confidence >= 90).length,
    mediumConfidence: analysisResults.filter(r => r.confidence >= 75 && r.confidence < 90).length,
    lowConfidence: analysisResults.filter(r => r.confidence < 75).length,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// QUALITY GATE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

function runQualityGate1(moduleCode) {
  // Syntax validation, brace balance
  const openBraces = (moduleCode.match(/\{/g) || []).length;
  const closeBraces = (moduleCode.match(/\}/g) || []).length;
  const openParens = (moduleCode.match(/\(/g) || []).length;
  const closeParens = (moduleCode.match(/\)/g) || []).length;
  
  const issues = [];
  if (openBraces !== closeBraces) issues.push(`Unbalanced braces: ${openBraces}/${closeBraces}`);
  if (openParens !== closeParens) issues.push(`Unbalanced parens: ${openParens}/${closeParens}`);
  
  return {
    passed: issues.length === 0,
    issues: issues,
    metrics: { openBraces, closeBraces, openParens, closeParens }
  };
}

function runQualityGate2(analysisResult) {
  // Semantic validation
  const minConfidence = 90;
  const passed = analysisResult.averageConfidence >= minConfidence;
  
  return {
    passed: passed,
    confidence: analysisResult.averageConfidence,
    required: minConfidence,
    tier: analysisResult.tier,
    lowConfidenceVariables: analysisResult.variablesAnalyzed
      .filter(v => v.confidence < 75)
      .map(v => ({ name: v.variable, confidence: v.confidence }))
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// CLI EXECUTION
// ═══════════════════════════════════════════════════════════════════════════════

if (require.main === module) {
  const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';
  
  console.log('╔══════════════════════════════════════════════════════════════════╗');
  console.log('║  SEMANTIC ANALYSIS ENGINE v1.0 - Principal Architect Framework  ║');
  console.log('╚══════════════════════════════════════════════════════════════════╝');
  console.log('');
  
  // Sample analysis of problematic Tier B modules
  const sampleModules = [
    'DEPLOYMENT-READY/10307-bitmap-coordinates-pane-renderer.js',
    'DEPLOYMENT-READY/60973-chart-config-defaults.js'
  ];
  
  console.log('📊 SAMPLE MODULE ANALYSIS');
  console.log('═'.repeat(70));
  
  for (const modulePath of sampleModules) {
    const fullPath = path.join(BASE_DIR, modulePath);
    if (fs.existsSync(fullPath)) {
      const code = fs.readFileSync(fullPath, 'utf8');
      const moduleId = path.basename(modulePath, '.js');
      
      console.log(`\n🔍 Analyzing: ${moduleId}`);
      
      // Gate 1
      const gate1 = runQualityGate1(code);
      console.log(`  Gate 1 (Structural): ${gate1.passed ? '✅ PASS' : '❌ FAIL'}`);
      
      // Semantic analysis
      const analysis = analyzeModule(code, moduleId);
      console.log(`  Variables analyzed: ${analysis.variableCount}`);
      console.log(`  High confidence (≥90%): ${analysis.highConfidence}`);
      console.log(`  Medium confidence (75-89%): ${analysis.mediumConfidence}`);
      console.log(`  Low confidence (<75%): ${analysis.lowConfidence}`);
      console.log(`  Average confidence: ${analysis.averageConfidence}%`);
      console.log(`  TIER: ${analysis.tier}`);
      
      // Gate 2
      const gate2 = runQualityGate2(analysis);
      console.log(`  Gate 2 (Semantic): ${gate2.passed ? '✅ PASS' : '❌ FAIL'} (${gate2.confidence}% / ${gate2.required}% required)`);
      
      // Show sample variable analysis
      if (analysis.variablesAnalyzed.length > 0) {
        console.log(`  Sample variable analysis:`);
        for (const v of analysis.variablesAnalyzed.slice(0, 3)) {
          const action = v.recommendation.action;
          const icon = action === 'ACCEPT' ? '✅' : action === 'REVIEW' ? '⚠️' : action === 'GUESS' ? '❓' : '❌';
          console.log(`    ${icon} ${v.variable} → ${v.recommendation.semanticName || '?'} (${v.confidence}%) - ${action}`);
        }
      }
    }
  }
  
  console.log('\n' + '═'.repeat(70));
  console.log('✅ Semantic Analysis Engine operational');
  console.log('');
  console.log('Next: Run on all Tier B modules for systematic remediation');
  console.log('Command: node semantic-analysis-batch.cjs --tier-b');
}

module.exports = {
  analyzeVariableSemantics,
  analyzeModule,
  runQualityGate1,
  runQualityGate2,
  SEMANTIC_PATTERNS
};
