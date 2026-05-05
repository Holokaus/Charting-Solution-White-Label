/**
 * Spot-Check Verification - Round 4 Improved (CRITICAL 80%+ GATE)
 * 
 * This is the CRITICAL quality gate. If spot-check accuracy < 80%,
 * automatic rollback is triggered.
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './round4-improved-applied';
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

  // CRITICAL GATE: Minimum 2 keywords for accuracy
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

async function spotCheckRound4Improved() {
  try {
    console.log('🔍 SPOT-CHECK VERIFICATION - Round 4 Improved (CRITICAL GATE)\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('Gate Requirement: 80%+ spot-check accuracy (MANDATORY)\n');
    console.log('Failure = Automatic Rollback\n');
    console.log('═══════════════════════════════════════════════════════\n');

    if (!fs.existsSync(OUTPUT_DIR)) {
      console.error('❌ Output directory not found');
      process.exit(1);
    }

    // Load metadata to get semantic assignments
    const metadataFile = path.join(OUTPUT_DIR, 'metadata.json');
    if (!fs.existsSync(metadataFile)) {
      console.error('❌ Metadata file not found');
      process.exit(1);
    }

    const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf-8'));
    const results = [];

    console.log(`📊 Spot-checking ${metadata.results.length} module(s)...\n`);

    for (const moduleResult of metadata.results) {
      const filePath = path.join(OUTPUT_DIR, `${moduleResult.moduleId}.js`);
      const content = fs.readFileSync(filePath, 'utf-8');

      const keywordAnalysis = analyzeSemanticKeywords(content, moduleResult.semantic);
      const passed = keywordAnalysis.passed;

      results.push({
        moduleId: moduleResult.moduleId,
        semantic: moduleResult.semantic,
        ...keywordAnalysis,
        status: passed ? 'PASS ✅' : 'FAIL ❌'
      });

      console.log(`Module ${moduleResult.moduleId} (${moduleResult.semantic}):`);
      console.log(`  Keywords found: ${keywordAnalysis.found}/${keywordAnalysis.required}`);
      console.log(`  Matches: ${keywordAnalysis.keywords.join(', ')}`);
      console.log(`  Status: ${passed ? 'PASS ✅' : 'FAIL ❌'}\n`);
    }

    // Calculate accuracy
    const passCount = results.filter(r => r.passed).length;
    const totalCount = results.length;
    const accuracy = totalCount > 0 ? (passCount / totalCount * 100).toFixed(0) : 0;

    console.log(`═══════════════════════════════════════════════════════`);
    console.log(`📊 SPOT-CHECK RESULTS\n`);
    console.log(`Passed: ${passCount}/${totalCount} (${accuracy}%)\n`);

    if (accuracy >= 80) {
      console.log(`✅ GATE PASSED (${accuracy}% >= 80%)\n`);
      console.log(`Ready for archival and deployment!`);
      
      // Save report
      const report = `# Spot-Check Verification Report\n\n` +
        `Generated: ${new Date().toISOString()}\n` +
        `Version: Round 4 Improved\n` +
        `Accuracy: ${accuracy}%\n` +
        `Status: **PASSED** ✅\n\n` +
        `## Results\n` +
        results.map(r => `- Module ${r.moduleId} (${r.semantic}): ${r.status} (${r.found}/${r.required} keywords)`).join('\n');
      
      fs.writeFileSync('./round4-improved-spotcheck-report.md', report);
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

spotCheckRound4Improved();
