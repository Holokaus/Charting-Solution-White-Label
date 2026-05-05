/**
 * Apply Round 3 High-Confidence Modules
 * Apply semantic variable renaming to 4 high-confidence (65%+) modules from Round 3 discovery
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const ROUND3_ANALYSIS = './pattern-discovery-round3-analysis.json';
const OUTPUT_DIR = './round3-high-confidence-applied';
const REPORT_FILE = './round3-high-applications-report.md';

// Semantic variable mappings
const SEMANTIC_MAPPING = {
  'watchedValue': {
    'e': 'watchedValue', 's': 'state', 'n': 'nextValue', 'o': 'options',
    't': 'type', 'a': 'arguments', 'r': 'result', 'c': 'callback'
  },
  'series': {
    'e': 'series', 's': 'seriesData', 'n': 'newData', 't': 'type',
    'd': 'data', 'i': 'index', 'v': 'value'
  },
  'dataSource': {
    'e': 'dataSource', 'd': 'data', 's': 'source', 'c': 'config',
    'f': 'fetch', 'r': 'result', 'v': 'value'
  },
  'priceDataSource': {
    'e': 'priceDataSource', 'p': 'price', 'd': 'data', 's': 'source',
    'c': 'config', 'f': 'fetch', 't': 'time'
  },
  'tier3_high': {
    'e': 'exports', 's': 'state', 'n': 'nextValue', 'a': 'array',
    't': 'module', 'o': 'object', 'r': 'result', 'l': 'logger',
    'i': 'require', 'c': 'config', 'h': 'handler', 'd': 'data',
    'u': 'utility', 'p': 'parameter', 'm': 'method', 'g': 'getter',
    'f': 'function', 'v': 'value', 'b': 'boolean', 'w': 'watcher',
    'x': 'context', 'k': 'key', 'z': 'callback', 'j': 'job'
  }
};

const DEFAULT_MAPPING = {
  'e': 'exports', 's': 'state', 'n': 'nextValue', 'a': 'array',
  't': 'module', 'o': 'object', 'r': 'result', 'l': 'logger',
  'i': 'require', 'c': 'config', 'h': 'handler', 'd': 'data',
  'u': 'utility', 'p': 'parameter', 'm': 'method', 'g': 'getter',
  'f': 'function', 'v': 'value', 'b': 'boolean', 'w': 'watcher',
  'x': 'context', 'k': 'key', 'z': 'callback', 'j': 'job',
  'y': 'yValue', 'q': 'query'
};

/**
 * Apply semantic variable renaming
 */
function applySemanticsToContent(content, semanticName) {
  let updated = content;
  const mapping = SEMANTIC_MAPPING[semanticName] || DEFAULT_MAPPING;
  let replacements = 0;

  for (const [oldVar, newVar] of Object.entries(mapping)) {
    if (oldVar === newVar) continue;

    // Pattern-based replacement
    const patterns = [
      { pattern: new RegExp(`\\b${oldVar}\\s*=\\s*`, 'g'), context: 'assignment' },
      { pattern: new RegExp(`\\(${oldVar}[,)]`, 'g'), context: 'param' },
      { pattern: new RegExp(`\\b${oldVar}\\.`, 'g'), context: 'property' },
      { pattern: new RegExp(`\\s+${oldVar}[;,}]`, 'g'), context: 'statement_end' },
      { pattern: new RegExp(`\\b${oldVar}\\b`, 'g'), context: 'identifier' }
    ];

    for (const { pattern } of patterns) {
      if (pattern.test(updated)) {
        updated = updated.replace(pattern, (match) => {
          replacements++;
          return match.replace(new RegExp(`\\b${oldVar}\\b`), newVar);
        });
      }
    }
  }

  return { updated, replacements };
}

/**
 * Main application
 */
async function applyRound3High() {
  try {
    console.log('🔄 Applying Round 3 High-Confidence Modules\n');

    // Load analysis
    console.log('📂 Loading Round 3 analysis...');
    const analysis = JSON.parse(fs.readFileSync(ROUND3_ANALYSIS, 'utf-8'));
    const highConf = analysis.discoveries.filter(d => d.tier === 'HIGH');
    console.log(`✓ Found ${highConf.length} high-confidence modules\n`);

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Apply semantics
    console.log('✏️ Applying semantic variable renaming...');
    const stats = {
      modules: 0,
      totalReplacements: 0,
      byCategory: {},
      errors: [],
      applied: []
    };

    for (const discovery of highConf) {
      const { moduleId, suggested } = discovery;
      const inputFile = path.join(BEAUTIFIED_DIR, `${moduleId}.js`);

      if (!fs.existsSync(inputFile)) {
        stats.errors.push(`Module ${moduleId} not found`);
        continue;
      }

      try {
        const content = fs.readFileSync(inputFile, 'utf-8');
        const { updated, replacements } = applySemanticsToContent(content, suggested);

        // Add header comment
        const header = `/**
 * Module ${moduleId} - ${suggested}
 * Identified: Round 3 Discovery (65%+ confidence)
 * Semantic Variable Mapping Applied
 * Replacements: ${replacements}
 */\n`;

        const finalContent = header + updated;

        // Write output
        fs.writeFileSync(path.join(OUTPUT_DIR, `${moduleId}.js`), finalContent);

        stats.modules++;
        stats.totalReplacements += replacements;
        
        if (!stats.byCategory[suggested]) {
          stats.byCategory[suggested] = { modules: 0, replacements: 0 };
        }
        stats.byCategory[suggested].modules++;
        stats.byCategory[suggested].replacements += replacements;

        stats.applied.push({
          moduleId,
          semantic: suggested,
          replacements
        });

      } catch (error) {
        stats.errors.push(`Error processing ${moduleId}: ${error.message}`);
      }
    }

    console.log(`✓ Applied to ${stats.modules} modules\n`);

    // Generate report
    console.log('📊 Generating report...');
    let report = `# Round 3 High-Confidence Module Applications\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Modules Applied: ${stats.modules}\n\n`;

    report += `## Summary\n\n`;
    report += `- **Modules Applied:** ${stats.modules}\n`;
    report += `- **Total Replacements:** ${stats.totalReplacements}\n`;
    report += `- **Average Replacements/Module:** ${(stats.totalReplacements / stats.modules).toFixed(1)}\n\n`;

    report += `## By Semantic Category\n\n`;
    report += `| Semantic | Modules | Replacements | Avg/Module |\n`;
    report += `|----------|---------|--------------|------------|\n`;
    for (const [semantic, data] of Object.entries(stats.byCategory)) {
      report += `| ${semantic} | ${data.modules} | ${data.replacements} | ${(data.replacements / data.modules).toFixed(1)} |\n`;
    }
    report += '\n';

    report += `## Applied Modules\n\n`;
    report += `| Module ID | Semantic | Replacements |\n`;
    report += `|-----------|----------|---------------|\n`;
    for (const item of stats.applied) {
      report += `| ${item.moduleId} | ${item.semantic} | ${item.replacements} |\n`;
    }
    report += '\n';

    if (stats.errors.length > 0) {
      report += `## Errors\n\n`;
      for (const error of stats.errors) {
        report += `- ${error}\n`;
      }
    }

    fs.writeFileSync(REPORT_FILE, report);

    // Save stats
    fs.writeFileSync('./round3-high-applications-stats.json', JSON.stringify(stats, null, 2));

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('✅ APPLICATION COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`Modules Applied: ${stats.modules}`);
    console.log(`Total Replacements: ${stats.totalReplacements}`);
    console.log(`Output Directory: ${OUTPUT_DIR}`);
    console.log(`\nCoverage Update: 326 → ${326 + stats.modules} modules`);
    console.log(`Coverage: ${((326 + stats.modules) / 466 * 100).toFixed(1)}%`);
    console.log('\n✅ Ready for validation!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

applyRound3High();
