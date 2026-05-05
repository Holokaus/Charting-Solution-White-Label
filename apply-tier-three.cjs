/**
 * Apply Round 2 High-Confidence Discoveries
 * Applies 211 high-confidence (65%+) module identifications with semantic variable renaming
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const ANALYSIS_FILE = './pattern-discovery-round2-analysis.json';
const OUTPUT_DIR = './tier-three-identified-modules';
const REPORT_FILE = './tier-three-applications-report.md';

const SEMANTIC_MAPPING = {
  watchedValue: { e: 'exports', s: 'state', n: 'nextValue', a: 'array' },
  series: { e: 'exports', s: 'series', n: 'newSeries' },
  logger: { e: 'exports', l: 'logger', m: 'message' },
  dataSource: { e: 'exports', d: 'data', s: 'source' },
  priceDataSource: { e: 'exports', p: 'price', d: 'data' },
  // Add other mappings as needed...
};

const DEFAULT_MAPPING = {
  e: 'exports', s: 'state', n: 'nextValue', a: 'array', t: 'module',
  o: 'object', r: 'result', l: 'logger', i: 'require', c: 'config',
  h: 'handler', d: 'data', u: 'utility', p: 'parameter', m: 'method',
  g: 'getter', f: 'function', v: 'value', b: 'boolean', w: 'watcher',
  x: 'context', k: 'key', z: 'callback', j: 'job', y: 'yValue', q: 'query'
};

/**
 * Apply semantic variable renaming
 */
function applySemanticsToContent(content, semanticName) {
  let updated = content;
  const mapping = SEMANTIC_MAPPING[semanticName] || DEFAULT_MAPPING;
  let replacements = 0;

  for (const [oldVar, newVar] of Object.entries(mapping)) {
    // Single letter variable replacements (careful about context)
    const patterns = [
      new RegExp(`\\b${oldVar}\\s*=\\s*`, 'g'),
      new RegExp(`\\(${oldVar}[,)]`, 'g'),
      new RegExp(`\\b${oldVar}\\.`, 'g'),
      new RegExp(`\\s+${oldVar}[;,}]`, 'g'),
    ];

    for (const pattern of patterns) {
      const count = (updated.match(pattern) || []).length;
      if (count > 0) {
        updated = updated.replace(pattern, (match) => match.replace(oldVar, newVar));
        replacements += count;
      }
    }
  }

  return { updated, replacements };
}

/**
 * Generate module header
 */
function generateHeader(moduleId, semanticName, confidence) {
  const timestamp = new Date().toISOString();
  return `/**
 * Module: ${moduleId}
 * Semantic: ${semanticName}
 * Confidence: ${(confidence * 100).toFixed(1)}%
 * Generated: ${timestamp}
 * Category: Tier-3 (Advanced Pattern Discovery)
 */\n\n`;
}

/**
 * Apply high-confidence identifications
 */
async function applyTierThreeDiscoveries() {
  try {
    console.log('🚀 Applying Tier-3 High-Confidence Discoveries\n');

    // Load analysis
    const analysis = JSON.parse(fs.readFileSync(ANALYSIS_FILE, 'utf-8'));
    const discoveries = analysis.discoveries.filter(d => d.tier === 'HIGH');

    console.log(`📝 Found ${discoveries.length} high-confidence discoveries (65%+)\n`);
    console.log(`📁 Creating output directory: ${OUTPUT_DIR}\n`);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let totalReplacements = 0;
    let appliedCount = 0;
    const appliedModules = [];

    console.log('⚙️  Applying semantic variable renaming...\n');

    for (let i = 0; i < discoveries.length; i++) {
      const discovery = discoveries[i];
      const file = path.join(BEAUTIFIED_DIR, `${discovery.moduleId}.js`);

      if (!fs.existsSync(file)) {
        console.log(`⚠️  File not found: ${discovery.moduleId}`);
        continue;
      }

      const content = fs.readFileSync(file, 'utf-8');
      const result = applySemanticsToContent(content, discovery.suggested);
      
      // Generate new file with header
      const header = generateHeader(discovery.moduleId, discovery.suggested, discovery.score);
      const newContent = header + result.updated;

      const outputFile = path.join(OUTPUT_DIR, `${discovery.moduleId}.js`);
      fs.writeFileSync(outputFile, newContent);

      totalReplacements += result.replacements;
      appliedCount++;
      appliedModules.push({
        moduleId: discovery.moduleId,
        semanticName: discovery.suggested,
        confidence: discovery.score,
        replacements: result.replacements,
      });

      if ((i + 1) % 50 === 0) {
        console.log(`  [${i + 1}/${discoveries.length}] Applied`);
      }
    }

    console.log(`✓ Applied ${appliedCount} modules\n`);

    // Group by semantic name for report
    const byName = {};
    for (const module of appliedModules) {
      if (!byName[module.semanticName]) {
        byName[module.semanticName] = [];
      }
      byName[module.semanticName].push(module);
    }

    // Generate report
    let report = `# Tier-3 Applications Report\n\n`;
    report += `**Timestamp:** ${new Date().toISOString()}\n`;
    report += `**Confidence Level:** 65%+\n\n`;

    report += `## Summary\n\n`;
    report += `- **Modules Applied:** ${appliedCount}\n`;
    report += `- **Total Replacements:** ${totalReplacements.toLocaleString()}\n`;
    report += `- **Average per Module:** ${(totalReplacements/appliedCount).toFixed(0)}\n`;
    report += `- **Confidence Range:** ${Math.min(...appliedModules.map(m => m.confidence)).toFixed(2)} - ${Math.max(...appliedModules.map(m => m.confidence)).toFixed(2)}\n`;
    report += `- **Output Directory:** ${OUTPUT_DIR}/\n\n`;

    report += `## Breakdown by Semantic Name\n\n`;
    for (const [name, modules] of Object.entries(byName).sort()) {
      const total = modules.reduce((sum, m) => sum + m.replacements, 0);
      report += `### ${name} (${modules.length} modules, ${total.toLocaleString()} replacements)\n`;
      report += `- Average confidence: ${(modules.reduce((s, m) => s + m.confidence, 0) / modules.length).toFixed(2)}\n`;
      report += `- Modules: ${modules.map(m => m.moduleId).join(', ')}\n\n`;
    }

    fs.writeFileSync(REPORT_FILE, report);

    console.log('═══════════════════════════════════════');
    console.log('✅ TIER-3 APPLICATION COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`Applied: ${appliedCount} modules`);
    console.log(`Replacements: ${totalReplacements.toLocaleString()} (avg ${(totalReplacements/appliedCount).toFixed(0)}/module)`);
    console.log(`Confidence: ${Math.min(...appliedModules.map(m => m.confidence)).toFixed(2)} - ${Math.max(...appliedModules.map(m => m.confidence)).toFixed(2)}`);
    console.log(`Identified Semantic Categories: ${Object.keys(byName).length}`);
    console.log(`\n📊 Report: ${REPORT_FILE}`);
    console.log(`📁 Output: ${OUTPUT_DIR}/`);

    // Save summary stats
    fs.writeFileSync('./tier-three-applications-stats.json', JSON.stringify({
      timestamp: new Date().toISOString(),
      appliedCount,
      totalReplacements,
      averageReplacements: totalReplacements / appliedCount,
      semanticCategories: Object.keys(byName).length,
      appliedModules,
    }, null, 2));

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

applyTierThreeDiscoveries();
