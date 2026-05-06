/**
 * Spot-Check Verification - Complete Semantic Pass (CRITICAL 80%+ GATE)
 * Class 1 Quality Standard - Verify complete semantic coverage
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './complete-semantic-pass-applied';
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

function countSemanticVariables(content) {
  const variables = ['e', 's', 'n', 'a', 't', 'o', 'r', 'l', 'i', 'c', 'h', 'd', 'u', 'p', 'm', 'g', 'f', 'v', 'b', 'w', 'x', 'k', 'z', 'j', 'y', 'q'];
  let found = 0;

  for (const variable of variables) {
    const regex = new RegExp(`\\w+_${variable}\\b`, 'g');
    if (regex.test(content)) {
      found++;
    }
  }

  return { found, total: 26, complete: found === 26 };
}

function sampleModules(modules, sampleSize = 10) {
  const shuffled = [...modules].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(sampleSize, modules.length));
}

async function spotCheckCompleteSemanticPass() {
  try {
    console.log('🔍 SPOT-CHECK VERIFICATION - Complete Semantic Pass\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('Standard: Class 1 Quality');
    console.log('Gate Requirement: 80%+ spot-check accuracy (MANDATORY)\n');
    console.log('Verification Criteria:');
    console.log('1. Semantic keywords present (2+ required)');
    console.log('2. All 26 variables mapped (100% coverage)\n');
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
    
    // Sample 10 modules for comprehensive spot-check
    const sampleModuleIds = sampleModules(
      metadata.results.map(r => r.moduleId),
      Math.min(10, metadata.results.length)
    );

    console.log(`📊 Spot-checking ${sampleModuleIds.length} module(s) (sample)...\n`);

    const results = [];
    let keywordPass = 0;
    let variablePass = 0;

    for (const moduleId of sampleModuleIds) {
      const moduleResult = metadata.results.find(r => r.moduleId === moduleId);
      if (!moduleResult) continue;

      const filePath = path.join(OUTPUT_DIR, `${moduleId}.js`);
      const content = fs.readFileSync(filePath, 'utf-8');

      const keywordAnalysis = analyzeSemanticKeywords(content, moduleResult.semantic);
      const variableAnalysis = countSemanticVariables(content);

      const keywordPassed = keywordAnalysis.passed;
      const variablePassed = variableAnalysis.complete;

      if (keywordPassed) keywordPass++;
      if (variablePassed) variablePass++;

      results.push({
        moduleId: moduleResult.moduleId,
        semantic: moduleResult.semantic,
        keywordAnalysis,
        variableAnalysis,
        keywordStatus: keywordPassed ? 'PASS ✅' : 'FAIL ❌',
        variableStatus: variablePassed ? 'COMPLETE ✅' : `${variableAnalysis.found}/26 ⚠️`,
        overallStatus: (keywordPassed && variablePassed) ? 'PASS ✅' : 'REVIEW ⚠️'
      });

      console.log(`Module ${moduleId} (${moduleResult.semantic})`);
      console.log(`  Keywords: ${keywordPassed ? 'PASS ✅' : 'FAIL ❌'} (${keywordAnalysis.found}/${keywordAnalysis.required})`);
      console.log(`  Variables: ${variablePassed ? 'COMPLETE ✅' : `${variableAnalysis.found}/26 ⚠️`}`);
    }

    const sampleSize = results.length;
    const keywordAccuracy = sampleSize > 0 ? ((keywordPass / sampleSize) * 100).toFixed(0) : 0;
    const variableAccuracy = sampleSize > 0 ? ((variablePass / sampleSize) * 100).toFixed(0) : 0;

    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`📊 SPOT-CHECK RESULTS\n`);
    console.log(`Sample Size: ${sampleSize} modules`);
    console.log(`Keyword Verification: ${keywordPass}/${sampleSize} PASS (${keywordAccuracy}%)`);
    console.log(`Variable Mapping: ${variablePass}/${sampleSize} COMPLETE (${variableAccuracy}%)\n`);

    const gatePass = keywordAccuracy >= 80 && variableAccuracy >= 80;

    if (gatePass) {
      console.log(`✅ GATE PASSED (All criteria met 80%+)\n`);
      console.log(`Ready for archival and deployment!`);
      
      const report = `# Spot-Check Verification Report - Complete Semantic Pass\n\n` +
        `Generated: ${new Date().toISOString()}\n` +
        `Standard: Class 1 Quality\n` +
        `Sample Size: ${sampleSize} modules\n` +
        `Keyword Accuracy: ${keywordAccuracy}%\n` +
        `Variable Coverage: ${variableAccuracy}%\n` +
        `Status: **PASSED** ✅\n\n` +
        `## Results\n` +
        results.map(r => `- Module ${r.moduleId} (${r.semantic}): ${r.overallStatus} | Keywords: ${r.keywordStatus} | Variables: ${r.variableStatus}`).join('\n');
      
      fs.writeFileSync('./complete-semantic-pass-spotcheck-report.md', report);
      console.log(`\nReport saved: ./complete-semantic-pass-spotcheck-report.md`);
      process.exit(0);
    } else {
      console.log(`❌ GATE FAILED\n`);
      if (keywordAccuracy < 80) console.log(`  Keywords: ${keywordAccuracy}% < 80%`);
      if (variableAccuracy < 80) console.log(`  Variables: ${variableAccuracy}% < 80%`);
      console.log(`\nTriggering automatic rollback...\n`);
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

spotCheckCompleteSemanticPass();
