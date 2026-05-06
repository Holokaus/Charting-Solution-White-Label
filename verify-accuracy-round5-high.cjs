/**
 * Spot-Check Verification - Round 5 High (CRITICAL 80%+ GATE)
 * 
 * This is the CRITICAL quality gate. If accuracy < 80%,
 * automatic rollback is triggered.
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './round5-high-applied';
const SEMANTIC_KEYWORDS = {
  'watchedValue': ['watch', 'listener', 'subscr', 'notify', 'value', 'state', 'change'],
  'series': ['series', 'chart', 'data', 'plot', 'bar', 'line', 'candle'],
  'dataSource': ['data', 'source', 'fetch', 'provider', 'stream', 'request', 'response'],
  'priceDataSource': ['price', 'quote', 'tick', 'feed', 'market', 'symbol', 'data'],
  'logger': ['log', 'debug', 'info', 'warn', 'error', 'level', 'console'],
  'config': ['config', 'settings', 'options', 'preference', 'setup', 'initialize'],
  'handler': ['handle', 'process', 'execute', 'event', 'perform', 'action'],
  'delegate': ['delegate', 'proxy', 'forward', 'relay', 'distribute'],
  'canvasRendering': ['canvas', 'render', 'draw', 'paint', 'graphics', 'bitmap'],
  'chartManager': ['chart', 'manage', 'control', 'state', 'layout'],
  'lineToolManager': ['line', 'tool', 'draw', 'manage', 'user'],
  'bitmapCoordinatesPane': ['bitmap', 'coordinate', 'position', 'pane', 'view'],
  'seriesBarFunction': ['series', 'bar', 'function', 'chart', 'calculate'],
};

function analyzeSemanticKeywords(content, semanticName) {
  if (!SEMANTIC_KEYWORDS[semanticName]) {
    return { found: 0, required: 0, passed: false };
  }

  const keywords = SEMANTIC_KEYWORDS[semanticName];
  const lowerContent = content.toLowerCase();
  const matches = [];

  for (const keyword of keywords) {
    if (lowerContent.includes(keyword)) {
      matches.push(keyword);
    }
  }

  const minRequired = 2;
  const passed = matches.length >= minRequired;

  return {
    found: matches.length,
    required: minRequired,
    keywords: matches,
    passed,
    semanticName
  };
}

// Sample 5 random modules for spot-check
function sampleModules(modules, sampleSize = 5) {
  const shuffled = [...modules].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(sampleSize, modules.length));
}

async function spotCheckRound5High() {
  try {
    console.log('🔍 SPOT-CHECK VERIFICATION - Round 5 High (CRITICAL GATE)\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('Gate Requirement: 80%+ spot-check accuracy (MANDATORY)\n');
    console.log('Failure = Automatic Rollback\n');
    console.log('═══════════════════════════════════════════════════════\n');

    if (!fs.existsSync(OUTPUT_DIR)) {
      console.error('❌ Output directory not found');
      process.exit(1);
    }

    const metadataFile = path.join(OUTPUT_DIR, 'metadata.json');
    if (!fs.existsSync(metadataFile)) {
      console.error('❌ Metadata file not found');
      process.exit(1);
    }

    const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf-8'));
    
    // Sample 5 modules for spot-check
    const sampleModuleIds = sampleModules(
      metadata.results.map(r => r.moduleId),
      Math.min(5, metadata.results.length)
    );

    console.log(`📊 Spot-checking ${sampleModuleIds.length} module(s) (sample)...\n`);

    const results = [];
    for (const moduleId of sampleModuleIds) {
      const moduleResult = metadata.results.find(r => r.moduleId === moduleId);
      if (!moduleResult) continue;

      const filePath = path.join(OUTPUT_DIR, `${moduleId}.js`);
      const content = fs.readFileSync(filePath, 'utf-8');

      const keywordAnalysis = analyzeSemanticKeywords(content, moduleResult.semantic);
      const passed = keywordAnalysis.passed;

      results.push({
        moduleId: moduleResult.moduleId,
        semantic: moduleResult.semantic,
        ...keywordAnalysis,
        status: passed ? 'PASS ✅' : 'FAIL ❌'
      });

      console.log(`Module ${moduleId} (${moduleResult.semantic}): ${passed ? 'PASS ✅' : 'FAIL ❌'}`);
    }

    const passCount = results.filter(r => r.passed).length;
    const totalCount = results.length;
    const accuracy = totalCount > 0 ? (passCount / totalCount * 100).toFixed(0) : 0;

    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`📊 SPOT-CHECK RESULTS\n`);
    console.log(`Sampled: ${passCount}/${totalCount} PASS (${accuracy}%)\n`);

    if (accuracy >= 80) {
      console.log(`✅ GATE PASSED (${accuracy}% >= 80%)\n`);
      console.log(`Ready for archival and deployment!`);
      
      const report = `# Spot-Check Verification Report - Round 5 High\n\n` +
        `Generated: ${new Date().toISOString()}\n` +
        `Sample Size: ${totalCount} modules\n` +
        `Accuracy: ${accuracy}%\n` +
        `Status: **PASSED** ✅\n\n` +
        `## Results\n` +
        results.map(r => `- Module ${r.moduleId} (${r.semantic}): ${r.status} (${r.found}/${r.required} keywords)`).join('\n');
      
      fs.writeFileSync('./round5-high-spotcheck-report.md', report);
      process.exit(0);
    } else {
      console.log(`❌ GATE FAILED (${accuracy}% < 80%)\n`);
      console.log(`Triggering automatic rollback...\n`);
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

spotCheckRound5High();
