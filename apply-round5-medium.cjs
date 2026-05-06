/**
 * Apply-Round5-Medium - Apply semantic variable renaming to 129 MEDIUM-confidence modules
 * Part of Round 5 Phase 2 deployment pipeline
 */
const fs = require('fs');
const path = require('path');

const ANALYSIS_FILE = './pattern-discovery-round5-analysis.json';
const ARCHIVE_DIR = './beautified-output';
const OUTPUT_DIR = './round5-medium-applied';

const SEMANTIC_MAPPING = {
  'watchedValue': [
    { from: /\be\b/g, to: 'watchedValue_e' },
    { from: /\bs\b/g, to: 'watchedValue_s' },
    { from: /\bn\b/g, to: 'watchedValue_n' },
    { from: /\ba\b/g, to: 'watchedValue_a' },
    { from: /\bt\b/g, to: 'watchedValue_t' },
  ],
  'series': [
    { from: /\be\b/g, to: 'series_e' },
    { from: /\bs\b/g, to: 'series_s' },
    { from: /\bn\b/g, to: 'series_n' },
    { from: /\ba\b/g, to: 'series_a' },
    { from: /\bt\b/g, to: 'series_t' },
  ],
  'dataSource': [
    { from: /\bo\b/g, to: 'dataSource_o' },
    { from: /\br\b/g, to: 'dataSource_r' },
    { from: /\bl\b/g, to: 'dataSource_l' },
    { from: /\bi\b/g, to: 'dataSource_i' },
    { from: /\bc\b/g, to: 'dataSource_c' },
  ],
  'priceDataSource': [
    { from: /\bu\b/g, to: 'priceDataSource_u' },
    { from: /\bp\b/g, to: 'priceDataSource_p' },
    { from: /\bm\b/g, to: 'priceDataSource_m' },
    { from: /\bg\b/g, to: 'priceDataSource_g' },
    { from: /\bf\b/g, to: 'priceDataSource_f' },
  ],
  'logger': [
    { from: /\bv\b/g, to: 'logger_v' },
    { from: /\bb\b/g, to: 'logger_b' },
    { from: /\bw\b/g, to: 'logger_w' },
    { from: /\bx\b/g, to: 'logger_x' },
    { from: /\bk\b/g, to: 'logger_k' },
  ],
  'config': [
    { from: /\bz\b/g, to: 'config_z' },
    { from: /\bj\b/g, to: 'config_j' },
    { from: /\by\b/g, to: 'config_y' },
    { from: /\bq\b/g, to: 'config_q' },
    { from: /\bh\b/g, to: 'config_h' },
  ],
  'handler': [
    { from: /\bd\b/g, to: 'handler_d' },
    { from: /\bu\b/g, to: 'handler_u' },
    { from: /\bp\b/g, to: 'handler_p' },
    { from: /\bm\b/g, to: 'handler_m' },
    { from: /\bg\b/g, to: 'handler_g' },
  ],
  'delegate': [
    { from: /\bf\b/g, to: 'delegate_f' },
    { from: /\bv\b/g, to: 'delegate_v' },
    { from: /\bb\b/g, to: 'delegate_b' },
    { from: /\bw\b/g, to: 'delegate_w' },
  ],
  'canvasRendering': [
    { from: /\bx\b/g, to: 'canvasRendering_x' },
    { from: /\bk\b/g, to: 'canvasRendering_k' },
    { from: /\bz\b/g, to: 'canvasRendering_z' },
    { from: /\bj\b/g, to: 'canvasRendering_j' },
    { from: /\by\b/g, to: 'canvasRendering_y' },
  ],
  'chartManager': [
    { from: /\bq\b/g, to: 'chartManager_q' },
    { from: /\bh\b/g, to: 'chartManager_h' },
    { from: /\bd\b/g, to: 'chartManager_d' },
    { from: /\bu\b/g, to: 'chartManager_u' },
  ],
  'lineToolManager': [
    { from: /\bp\b/g, to: 'lineToolManager_p' },
    { from: /\bm\b/g, to: 'lineToolManager_m' },
    { from: /\bg\b/g, to: 'lineToolManager_g' },
    { from: /\bf\b/g, to: 'lineToolManager_f' },
  ],
  'bitmapCoordinatesPane': [
    { from: /\bv\b/g, to: 'bitmapCoordinatesPane_v' },
    { from: /\bb\b/g, to: 'bitmapCoordinatesPane_b' },
    { from: /\bw\b/g, to: 'bitmapCoordinatesPane_w' },
    { from: /\bx\b/g, to: 'bitmapCoordinatesPane_x' },
  ],
  'seriesBarFunction': [
    { from: /\bk\b/g, to: 'seriesBarFunction_k' },
    { from: /\bz\b/g, to: 'seriesBarFunction_z' },
    { from: /\bj\b/g, to: 'seriesBarFunction_j' },
    { from: /\by\b/g, to: 'seriesBarFunction_y' },
  ],
};

function applySemanticsToContent(content, semanticName) {
  if (!SEMANTIC_MAPPING[semanticName]) {
    return { content, replacements: 0 };
  }

  let result = content;
  let replacements = 0;

  for (const mapping of SEMANTIC_MAPPING[semanticName]) {
    const newResult = result.replace(mapping.from, mapping.to);
    const count = (newResult.match(new RegExp(mapping.to.replace(/\$/g, '\\$'), 'g')) || []).length;
    replacements += count;
    result = newResult;
  }

  return { content: result, replacements };
}

async function applyRound5Medium() {
  try {
    console.log('🔧 APPLYING SEMANTICS - Round 5 Medium (129 modules)\n');
    console.log('═══════════════════════════════════════════════════════\n');

    if (!fs.existsSync(ANALYSIS_FILE)) {
      console.error('❌ Analysis file not found');
      process.exit(1);
    }

    const analysis = JSON.parse(fs.readFileSync(ANALYSIS_FILE, 'utf-8'));
    const allDiscoveries = analysis.discoveries || [];
    const mediumModules = allDiscoveries.filter(d => d.tier === 'MEDIUM');

    if (mediumModules.length === 0) {
      console.log('ℹ️  No MEDIUM-confidence modules found');
      process.exit(0);
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log(`📊 Processing ${mediumModules.length} MEDIUM-confidence modules...\n`);

    let applied = 0;
    let totalReplacements = 0;
    const results = [];

    for (const moduleInfo of mediumModules) {
      const moduleId = moduleInfo.moduleId;
      const semanticName = moduleInfo.suggested;

      const filePath = path.join(ARCHIVE_DIR, `${moduleId}.js`);
      if (!fs.existsSync(filePath)) {
        continue;
      }

      const content = fs.readFileSync(filePath, 'utf-8');
      const { content: newContent, replacements } = applySemanticsToContent(content, semanticName);

      const outputPath = path.join(OUTPUT_DIR, `${moduleId}.js`);
      fs.writeFileSync(outputPath, newContent);

      applied++;
      totalReplacements += replacements;
      results.push({
        moduleId,
        semantic: semanticName,
        replacements,
        status: 'applied'
      });

      if (applied % 20 === 0 || applied === 1) {
        console.log(`[${applied}/${mediumModules.length}] Applied ${moduleId} (${semanticName}) - ${replacements} replacements`);
      }
    }

    const metadata = {
      timestamp: new Date().toISOString(),
      version: 'Round 5 Medium',
      applied: applied,
      totalReplacements,
      coverageIncrease: `381 → ${381 + applied}`,
      coveragePercent: `${((381 + applied) / 466 * 100).toFixed(1)}%`,
      results
    };

    fs.writeFileSync(path.join(OUTPUT_DIR, 'metadata.json'), JSON.stringify(metadata, null, 2));

    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`✅ APPLICATION COMPLETE\n`);
    console.log(`Modules Applied: ${applied}`);
    console.log(`Total Replacements: ${totalReplacements}`);
    console.log(`Coverage Update: 381 → ${381 + applied} (${((381 + applied) / 466 * 100).toFixed(1)}%)\n`);
    console.log(`Next: Validation phase`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

applyRound5Medium();
