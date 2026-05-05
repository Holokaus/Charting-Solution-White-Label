/**
 * Apply Round 4 Improved (V2) - HIGH Confidence Modules
 * Applies semantic variable renaming to 1 HIGH-confidence module
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const OUTPUT_DIR = './round4-improved-applied';
const ANALYSIS_FILE = './pattern-discovery-round4-improved-analysis.json';

// Semantic mapping table
const SEMANTIC_MAPPING = {
  'watchedValue': [
    { from: /\be\b/g, to: 'watchedValue_e' },
    { from: /\bs\b/g, to: 'watchedValue_s' },
    { from: /\bn\b/g, to: 'watchedValue_n' },
  ],
  'series': [
    { from: /\be\b/g, to: 'series_e' },
    { from: /\bs\b/g, to: 'series_s' },
    { from: /\ba\b/g, to: 'series_a' },
  ],
  'dataSource': [
    { from: /\be\b/g, to: 'dataSource_e' },
    { from: /\bs\b/g, to: 'dataSource_s' },
    { from: /\bt\b/g, to: 'dataSource_t' },
  ],
  'priceDataSource': [
    { from: /\be\b/g, to: 'priceDataSource_e' },
    { from: /\bs\b/g, to: 'priceDataSource_s' },
    { from: /\bt\b/g, to: 'priceDataSource_t' },
  ],
  'logger': [
    { from: /\be\b/g, to: 'logger_e' },
    { from: /\bs\b/g, to: 'logger_s' },
    { from: /\bn\b/g, to: 'logger_n' },
  ],
  'config': [
    { from: /\be\b/g, to: 'config_e' },
    { from: /\bs\b/g, to: 'config_s' },
    { from: /\bt\b/g, to: 'config_t' },
  ],
  'handler': [
    { from: /\be\b/g, to: 'handler_e' },
    { from: /\bs\b/g, to: 'handler_s' },
    { from: /\ba\b/g, to: 'handler_a' },
  ],
  'delegate': [
    { from: /\be\b/g, to: 'delegate_e' },
    { from: /\bs\b/g, to: 'delegate_s' },
    { from: /\bt\b/g, to: 'delegate_t' },
  ],
  'canvasRendering': [
    { from: /\be\b/g, to: 'canvasRendering_e' },
    { from: /\bs\b/g, to: 'canvasRendering_s' },
    { from: /\bt\b/g, to: 'canvasRendering_t' },
  ],
  'chartManager': [
    { from: /\be\b/g, to: 'chartManager_e' },
    { from: /\bs\b/g, to: 'chartManager_s' },
    { from: /\ba\b/g, to: 'chartManager_a' },
  ],
  'lineToolManager': [
    { from: /\be\b/g, to: 'lineToolManager_e' },
    { from: /\bs\b/g, to: 'lineToolManager_s' },
    { from: /\bn\b/g, to: 'lineToolManager_n' },
  ],
  'bitmapCoordinatesPane': [
    { from: /\be\b/g, to: 'bitmapCoordinatesPane_e' },
    { from: /\bs\b/g, to: 'bitmapCoordinatesPane_s' },
    { from: /\bt\b/g, to: 'bitmapCoordinatesPane_t' },
  ],
  'seriesBarFunction': [
    { from: /\be\b/g, to: 'seriesBarFunction_e' },
    { from: /\bs\b/g, to: 'seriesBarFunction_s' },
    { from: /\ba\b/g, to: 'seriesBarFunction_a' },
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
    const count = (newResult.match(mapping.to) || []).length;
    replacements += count;
    result = newResult;
  }

  return { content: result, replacements };
}

/**
 * Apply semantics to HIGH-confidence modules
 */
async function applyRound4Improved() {
  try {
    console.log('📝 APPLYING ROUND 4 IMPROVED (V2) - HIGH CONFIDENCE MODULES\n');

    // Load analysis
    if (!fs.existsSync(ANALYSIS_FILE)) {
      console.error('❌ Analysis file not found. Run discovery first.');
      process.exit(1);
    }

    const analysis = JSON.parse(fs.readFileSync(ANALYSIS_FILE, 'utf-8'));
    const highModules = analysis.discoveries.filter(d => d.tier === 'HIGH');

    console.log(`📊 Found ${highModules.length} HIGH-confidence modules to apply\n`);

    if (highModules.length === 0) {
      console.log('ℹ️  No HIGH-confidence modules to apply');
      process.exit(0);
    }

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let totalReplacements = 0;
    const results = [];

    for (let i = 0; i < highModules.length; i++) {
      const module = highModules[i];
      const inputFile = path.join(BEAUTIFIED_DIR, `${module.moduleId}.js`);

      if (!fs.existsSync(inputFile)) {
        console.log(`⚠️  Skipped ${module.moduleId} (file not found)`);
        continue;
      }

      try {
        const content = fs.readFileSync(inputFile, 'utf-8');
        const { content: applied, replacements } = applySemanticsToContent(content, module.suggested);

        // Write output
        const outputFile = path.join(OUTPUT_DIR, `${module.moduleId}.js`);
        fs.writeFileSync(outputFile, applied);

        totalReplacements += replacements;
        results.push({
          moduleId: module.moduleId,
          semantic: module.suggested,
          score: module.score,
          keywords: module.keywords,
          replacements,
          status: 'APPLIED'
        });

        console.log(`✅ Applied: Module ${module.moduleId} → ${module.suggested} (${replacements} replacements)`);

      } catch (e) {
        console.log(`❌ Failed: Module ${module.moduleId} - ${e.message}`);
      }
    }

    // Save metadata
    const metadata = {
      timestamp: new Date().toISOString(),
      version: 'Round 4 Improved V2',
      applied: results.length,
      totalReplacements,
      results
    };

    fs.writeFileSync(path.join(OUTPUT_DIR, 'metadata.json'), JSON.stringify(metadata, null, 2));

    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`✅ APPLICATION COMPLETE\n`);
    console.log(`Modules Applied: ${results.length}`);
    console.log(`Total Replacements: ${totalReplacements}`);
    console.log(`Output: ${OUTPUT_DIR}\n`);
    console.log(`Coverage Update: 330 → ${330 + results.length}`);
    console.log(`Coverage: ${((330 + results.length) / 466 * 100).toFixed(1)}%\n`);
    console.log(`Next: Run validation and spot-check verification`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

applyRound4Improved();
