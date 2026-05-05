/**
 * Analyze Module 37150 beautified output to extract semantic variable names
 * and generate comprehensive renaming strategy
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_FILE = './beautified-output/37150.js';
const OUTPUT_FILE = './37150-semantic-analysis.json';

/**
 * Extract semantic names from beautified code
 */
function extractSemanticNames(content) {
  const patterns = {
    // Class definitions
    classes: /class\s+(\w+)\s*(?:extends|{)/g,
    // Function declarations
    functions: /(?:function|\.|\s)(\w+)\s*\(/g,
    // Constructor parameters and assignments
    assignments: /(?:this\.|const|let|var)\s+(\w+)\s*=/g,
    // Object properties being set
    properties: /\.(\w+)\s*=/g,
    // Method definitions
    methods: /(\w+)\s*\([^)]*\)\s*{/g,
    // Callback/handler functions
    handlers: /(\w+Handler|\w+Callback|\w+Listener)\s*=/g,
    // Watchers and observers
    watchers: /(\w+Watched|\w+Observable|\w+Subject)\s*=/g,
  };

  const semantics = {
    classes: new Set(),
    functions: new Set(),
    assignments: new Set(),
    properties: new Set(),
    methods: new Set(),
    handlers: new Set(),
    watchers: new Set(),
  };

  for (const [key, pattern] of Object.entries(patterns)) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const name = match[1];
      // Filter out common noise
      if (name.length > 2 && !/^[a-z]$/.test(name) && !name.startsWith('_internal')) {
        semantics[key].add(name);
      }
    }
  }

  return semantics;
}

/**
 * Identify minified variable patterns to replace
 */
function analyzeMinifiedPatterns(content) {
  const patterns = {
    // Single letter variables: e, t, i, s, n, a, o, r, c, l
    singleLetterVars: new Set(),
    // Double letter vars: ee, te, ie, etc
    doubleLetterVars: new Set(),
    // Common patterns in webpack bundles
    moduleImports: [],
    closureParameters: [],
  };

  // Extract common single-letter variables
  const singleLetterPattern = /\b([a-z])\s*[=,;:)]/g;
  let match;
  while ((match = singleLetterPattern.exec(content)) !== null) {
    patterns.singleLetterVars.add(match[1]);
  }

  // Extract module imports
  const importPattern = /var\s+(\w+)\s*=\s*i\(\d+\)/g;
  while ((match = importPattern.exec(content)) !== null) {
    patterns.moduleImports.push({
      varName: match[1],
      pattern: match[0],
    });
  }

  // Find closure parameters
  const closurePattern = /\(\w+,\s*\w+,\s*\w+\)\s*=>\s*{/g;
  match = closurePattern.exec(content);
  if (match) {
    const paramMatch = /\((\w+),\s*(\w+),\s*(\w+)\)/.exec(match[0]);
    if (paramMatch) {
      patterns.closureParameters = [
        { original: paramMatch[1], suggested: 'exports' },
        { original: paramMatch[2], suggested: 'module' },
        { original: paramMatch[3], suggested: 'require' },
      ];
    }
  }

  return patterns;
}

/**
 * Create semantic variable mapping strategy
 */
function generateSemanticMappings(semantics, patterns) {
  const mappings = {
    classToSemanticName: {},
    minifiedToSemantic: {},
    functionNameMap: {},
    propertyNameMap: {},
    handlerMap: {},
  };

  // Map minified single-letter variables to semantics
  const commonMappings = {
    e: 'exports',
    t: 'temp',
    i: 'require',
    s: 'state',
    n: 'next',
    a: 'array',
    o: 'object',
    r: 'result',
    c: 'config',
    l: 'logger',
  };

  for (const [minified, semantic] of Object.entries(commonMappings)) {
    if (patterns.singleLetterVars.has(minified)) {
      mappings.minifiedToSemantic[minified] = semantic;
    }
  }

  // Create class mappings
  for (const className of semantics.classes) {
    mappings.classToSemanticName[className] = className; // Keep semantic class names
  }

  // Create handler mappings
  for (const handler of semantics.handlers) {
    mappings.handlerMap[handler] = handler; // Keep semantic handler names
  }

  return mappings;
}

/**
 * Generate statistics and recommendations
 */
function generateReport(semantics, patterns, mappings) {
  return {
    summary: {
      totalClasses: semantics.classes.size,
      totalFunctions: semantics.functions.size,
      totalAssignments: semantics.assignments.size,
      totalProperties: semantics.properties.size,
      totalMethods: semantics.methods.size,
      totalHandlers: semantics.handlers.size,
      totalWatchers: semantics.watchers.size,
      totalSemanticNames: Array.from(Object.values(semantics)).reduce((sum, set) => sum + set.size, 0),
    },
    minifiedAnalysis: {
      singleLetterVars: Array.from(patterns.singleLetterVars),
      moduleImports: patterns.moduleImports.length,
      closureParameters: patterns.closureParameters,
    },
    semanticNames: {
      classes: Array.from(semantics.classes).slice(0, 20),
      functions: Array.from(semantics.functions).slice(0, 20),
      handlers: Array.from(semantics.handlers).slice(0, 20),
      watchers: Array.from(semantics.watchers).slice(0, 20),
    },
    mappingStrategy: {
      totalMappingsGenerated: Object.keys(mappings.minifiedToSemantic).length,
      minifiedToSemanticMap: mappings.minifiedToSemantic,
    },
    recommendations: [
      '1. Apply minified-to-semantic mappings for single-letter variables',
      '2. Keep all semantic class names and handlers intact',
      '3. Map object properties to camelCase semantic names where possible',
      '4. Validate closure parameters align with webpack module format',
      '5. Extract and document all public API methods and properties',
    ],
  };
}

/**
 * Main analysis
 */
async function analyzeModule37150() {
  try {
    console.log('📊 Analyzing Module 37150 for semantic variable extraction...\n');

    // Read beautified file
    if (!fs.existsSync(BEAUTIFIED_FILE)) {
      console.error('❌ Beautified file not found:', BEAUTIFIED_FILE);
      process.exit(1);
    }

    console.log(`📖 Reading beautified module (${BEAUTIFIED_FILE})...`);
    const content = fs.readFileSync(BEAUTIFIED_FILE, 'utf-8');
    console.log(`✓ Read ${content.length} bytes, ${content.split('\n').length} lines\n`);

    // Extract semantic information
    console.log('🔍 Extracting semantic names...');
    const semantics = extractSemanticNames(content);
    console.log('✓ Semantic names extracted\n');

    // Analyze minified patterns
    console.log('🔎 Analyzing minified variable patterns...');
    const patterns = analyzeMinifiedPatterns(content);
    console.log('✓ Pattern analysis complete\n');

    // Generate mappings
    console.log('🗺️ Generating semantic variable mappings...');
    const mappings = generateSemanticMappings(semantics, patterns);
    console.log('✓ Mappings generated\n');

    // Create report
    console.log('📋 Creating analysis report...');
    const report = generateReport(semantics, patterns, mappings);

    // Save report
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2));
    console.log(`✓ Report saved to ${OUTPUT_FILE}\n`);

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('📊 ANALYSIS SUMMARY');
    console.log('═══════════════════════════════════════');
    console.log(`Total Semantic Names: ${report.summary.totalSemanticNames}`);
    console.log(`  - Classes: ${report.summary.totalClasses}`);
    console.log(`  - Functions: ${report.summary.totalFunctions}`);
    console.log(`  - Methods: ${report.summary.totalMethods}`);
    console.log(`  - Handlers: ${report.summary.totalHandlers}`);
    console.log(`  - Watchers: ${report.summary.totalWatchers}`);
    console.log(`\nMinified Variables:`);
    console.log(`  - Single Letter Vars: ${report.minifiedAnalysis.singleLetterVars.join(', ')}`);
    console.log(`  - Module Imports: ${report.minifiedAnalysis.moduleImports}`);
    console.log(`\nMappings Strategy:`);
    console.log(`  - Total Mappings: ${report.mappingStrategy.totalMappingsGenerated}`);
    console.log(`  - Sample Mappings: ${JSON.stringify(report.mappingStrategy.minifiedToSemanticMap)}`);
    console.log(`\n📝 Top 5 Recommendations:`);
    report.recommendations.forEach((rec) => console.log(`   ${rec}`));
    console.log('\n✅ Analysis complete!');
  } catch (error) {
    console.error('❌ Error during analysis:', error.message);
    process.exit(1);
  }
}

analyzeModule37150();
