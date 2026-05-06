/**
 * Corrected Spot-Check Verification - Complete Semantic Pass
 * CLASS 1 QUALITY - Verify complete semantic coverage for ASSIGNED semantic types
 * 
 * Correct Logic:
 * - Each module should have ALL variables from its ASSIGNED semantic type fully mapped
 * - Example: "watchedValue" module should have watchedValue_e through watchedValue_q
 * - No unmapped single-letter variables should remain (e, t, i, etc. standalone)
 * - Semantic keywords should be present
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './deployed-modules';
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

const ALL_VARIABLES = ['e', 's', 'n', 'a', 't', 'o', 'r', 'l', 'i', 'c', 'h', 'd', 'u', 'p', 'm', 'g', 'f', 'v', 'b', 'w', 'x', 'k', 'z', 'j', 'y', 'q'];

function analyzeMappingCoverage(content, semanticName) {
  // Count how many of the 26 variables are present for this semantic type
  let mappedCount = 0;
  
  for (const variable of ALL_VARIABLES) {
    const regex = new RegExp(`${semanticName}_${variable}\\b`, 'g');
    if (regex.test(content)) {
      mappedCount++;
    }
  }
  
  return { mappedCount, total: 26, percentage: ((mappedCount / 26) * 100).toFixed(1) };
}

function hasUnmappedVariables(content) {
  // Check if there are still standalone single-letter variables (word boundary required)
  const unmappedPattern = /\b[a-z]\b(?![\w_])/g;
  const matches = content.match(unmappedPattern);
  return matches ? matches.length > 0 : false;
}

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
    passed
  };
}

function sampleModules(modules, sampleSize = 10) {
  const shuffled = [...modules].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(sampleSize, modules.length));
}

async function spotCheckCompleteSemanticPassCorrected() {
  try {
    console.log('🔍 CORRECTED SPOT-CHECK - Complete Semantic Pass\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('Standard: Class 1 Quality');
    console.log('Gate Requirement: 80%+ spot-check accuracy (MANDATORY)\n');
    console.log('Verification Criteria:');
    console.log('1. ASSIGNED semantic type: ALL 26 variables mapped (100%)');
    console.log('2. No unmapped single-letter variables remain');
    console.log('3. Semantic keywords present (2+ required)\n');
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
    
    // Get all module IDs from deployed
    const allModuleIds = fs.readdirSync(OUTPUT_DIR)
      .filter(f => f.endsWith('.js'))
      .map(f => f.replace('.js', ''));

    if (allModuleIds.length === 0) {
      console.log('ℹ️  No modules found');
      process.exit(1);
    }

    // Sample for verification
    const sampleModuleIds = sampleModules(allModuleIds, Math.min(10, allModuleIds.length));

    console.log(`📊 Spot-checking ${sampleModuleIds.length} module(s) from ${allModuleIds.length} total...\n`);

    const results = [];
    let coveragePass = 0;
    let noUnmappedPass = 0;
    let keywordPass = 0;

    for (const moduleId of sampleModuleIds) {
      const filePath = path.join(OUTPUT_DIR, `${moduleId}.js`);
      const content = fs.readFileSync(filePath, 'utf-8');

      // Extract semantic type from first variable found
      let semanticType = 'unknown';
      for (const [semType, vars] of Object.entries(SEMANTIC_KEYWORDS)) {
        if (content.includes(`${semType}_`)) {
          semanticType = semType;
          break;
        }
      }

      const coverage = analyzeMappingCoverage(content, semanticType);
      const hasUnmapped = hasUnmappedVariables(content);
      const keywords = analyzeSemanticKeywords(content, semanticType);

      // All three criteria must pass
      const coveragePassed = parseInt(coverage.percentage) === 100;
      const unmappedPassed = !hasUnmapped;
      const keywordPassed = keywords.passed;
      const overallPassed = coveragePassed && unmappedPassed && keywordPassed;

      if (coveragePassed) coveragePass++;
      if (unmappedPassed) noUnmappedPass++;
      if (keywordPassed) keywordPass++;

      results.push({
        moduleId,
        semanticType,
        coverage,
        hasUnmapped,
        keywords,
        coverageStatus: coveragePassed ? 'PASS ✅' : `${coverage.percentage}% ⚠️`,
        unmappedStatus: unmappedPassed ? 'CLEAN ✅' : 'HAS UNMAPPED ❌',
        keywordStatus: keywordPassed ? 'PASS ✅' : 'FAIL ❌',
        overallStatus: overallPassed ? 'PASS ✅' : 'REVIEW ⚠️'
      });

      console.log(`Module ${moduleId} (${semanticType}): ${overallPassed ? 'PASS ✅' : 'REVIEW ⚠️'}`);
      console.log(`  Coverage: ${coverage.percentage}% (${coverage.mappedCount}/${coverage.total}) - ${coverageStatus}`);
      console.log(`  Unmapped: ${unmappedStatus}`);
      console.log(`  Keywords: ${keywordStatus}\n`);
    }

    const sampleSize = results.length;
    const coverageAccuracy = sampleSize > 0 ? ((coveragePass / sampleSize) * 100).toFixed(0) : 0;
    const unmappedAccuracy = sampleSize > 0 ? ((noUnmappedPass / sampleSize) * 100).toFixed(0) : 0;
    const keywordAccuracy = sampleSize > 0 ? ((keywordPass / sampleSize) * 100).toFixed(0) : 0;
    const overallAccuracy = Math.min(coverageAccuracy, unmappedAccuracy, keywordAccuracy);

    console.log(`═══════════════════════════════════════════════════════`);
    console.log(`📊 CORRECTED SPOT-CHECK RESULTS\n`);
    console.log(`Sample Size: ${sampleSize} modules (from ${allModuleIds.length} total)`);
    console.log(`Variable Coverage: ${coveragePass}/${sampleSize} COMPLETE (${coverageAccuracy}%)`);
    console.log(`No Unmapped Variables: ${noUnmappedPass}/${sampleSize} CLEAN (${unmappedAccuracy}%)`);
    console.log(`Keyword Verification: ${keywordPass}/${sampleSize} PASS (${keywordAccuracy}%)`);
    console.log(`Overall Accuracy: ${overallAccuracy}%\n`);

    const gatePass = overallAccuracy >= 80;

    if (gatePass) {
      console.log(`✅ GATE PASSED (${overallAccuracy}% >= 80%)\n`);
      console.log(`Production Status: ✅ READY FOR DEPLOYMENT`);
      console.log(`Class 1 Quality Standard: ✅ MET\n`);
      
      const report = `# Spot-Check Verification Report - Complete Semantic Pass (CORRECTED)\n\n` +
        `Generated: ${new Date().toISOString()}\n` +
        `Standard: Class 1 Quality\n` +
        `Total Deployed: ${allModuleIds.length}\n` +
        `Sample Size: ${sampleSize} modules\n` +
        `Variable Coverage: ${coverageAccuracy}%\n` +
        `Clean (No Unmapped): ${unmappedAccuracy}%\n` +
        `Keyword Verification: ${keywordAccuracy}%\n` +
        `Overall Accuracy: ${overallAccuracy}%\n` +
        `Status: **PASSED** ✅\n\n` +
        `## Verification Criteria\n` +
        `- ✅ ASSIGNED semantic type fully mapped (26/26 variables)\n` +
        `- ✅ No unmapped single-letter variables\n` +
        `- ✅ Semantic keywords present (2+)\n\n` +
        `## Sample Results\n` +
        results.map(r => `- Module ${r.moduleId} (${r.semanticType}): ${r.overallStatus} | Coverage: ${r.coverageStatus} | Clean: ${r.unmappedStatus} | Keywords: ${r.keywordStatus}`).join('\n');
      
      fs.writeFileSync('./complete-semantic-pass-spotcheck-report-CORRECTED.md', report);
      console.log(`Report saved: ./complete-semantic-pass-spotcheck-report-CORRECTED.md`);
      process.exit(0);
    } else {
      console.log(`❌ GATE FAILED (${overallAccuracy}% < 80%)\n`);
      console.log(`Issues found: See detailed results above`);
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

spotCheckCompleteSemanticPassCorrected();
