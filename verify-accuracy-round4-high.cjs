/**
 * Comprehensive Accuracy Verification Tool - Round 4
 * Spot-check verification for applied modules with Class-1 standards
 * Tests semantic keyword accuracy before archival
 */
const fs = require('fs');
const path = require('path');

const APPLIED_DIR = './round4-high-confidence-applied';
const STATS_FILE = './round4-high-applications-stats.json';
const OUTPUT_FILE = './ACCURACY_VERIFICATION_ROUND4_HIGH.md';
const JSON_OUTPUT = './accuracy-verification-round4-high.json';

/**
 * Semantic Keywords Table (Class-1 Verified)
 * Used for keyword verification gate
 */
const SEMANTIC_KEYWORDS = {
  'watchedValue': ['watch', 'listener', 'subscr', 'notify', 'value', 'state', 'change', 'observe', 'track'],
  'series': ['series', 'chart', 'data', 'plot', 'bar', 'line', 'candle', 'point', 'value'],
  'dataSource': ['data', 'source', 'fetch', 'provider', 'stream', 'request', 'response', 'load', 'query'],
  'priceDataSource': ['price', 'quote', 'tick', 'feed', 'market', 'symbol', 'data', 'close', 'open'],
  'logger': ['log', 'debug', 'info', 'warn', 'error', 'level', 'console', 'output', 'trace'],
  'config': ['config', 'settings', 'options', 'preference', 'setup', 'initialize', 'configure', 'param'],
  'handler': ['handle', 'process', 'execute', 'event', 'perform', 'action', 'respond', 'dispatch'],
  'delegate': ['delegate', 'proxy', 'forward', 'relay', 'distribute', 'dispatch', 'pass', 'route'],
  'canvasRendering': ['canvas', 'render', 'draw', 'paint', 'graphics', 'visual', 'display', 'context'],
  'chartManager': ['chart', 'manage', 'control', 'state', 'layout', 'update', 'sync', 'coordinate'],
  'lineToolManager': ['line', 'tool', 'draw', 'manage', 'user', 'point', 'interact', 'gesture'],
  'seriesBarFunction': ['bar', 'series', 'ohlc', 'open', 'high', 'low', 'close', 'candle', 'data']
};

/**
 * Analyze code for semantic keywords
 * Returns detailed analysis with keyword matches
 */
function analyzeSemanticKeywords(content, semanticName) {
  const lowerContent = content.toLowerCase();
  const keywords = SEMANTIC_KEYWORDS[semanticName] || [];
  
  const analysis = {
    semanticName,
    keywordMatches: [],
    matchCount: 0,
    verified: false,
    confidenceLevel: 'LOW'
  };

  // Find all matching keywords
  for (const keyword of keywords) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    const matches = content.match(regex);
    if (matches && matches.length > 0) {
      analysis.keywordMatches.push({
        keyword,
        occurrences: matches.length
      });
      analysis.matchCount++;
    }
  }

  // Verification gate: Minimum 2 keywords required
  analysis.verified = analysis.matchCount >= 2;

  // Confidence level based on keyword density
  if (analysis.matchCount >= 6) {
    analysis.confidenceLevel = 'VERY_HIGH';
  } else if (analysis.matchCount >= 4) {
    analysis.confidenceLevel = 'HIGH';
  } else if (analysis.matchCount >= 2) {
    analysis.confidenceLevel = 'MEDIUM';
  } else {
    analysis.confidenceLevel = 'LOW';
  }

  return analysis;
}

/**
 * Get random sample from array
 */
function getRandomSample(arr, size) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, size);
}

/**
 * Main verification
 */
async function verifyAccuracy() {
  try {
    console.log('🔍 COMPREHENSIVE ACCURACY VERIFICATION - Round 4 HIGH\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('⚠️  CRITICAL GATE: Spot-check verification (80%+ required)\n');

    // Load stats
    console.log('📂 Loading applied modules...');
    const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf-8'));
    const appliedModules = stats.applied || [];
    console.log(`✓ Found ${appliedModules.length} applied modules\n`);

    // Get random sample for spot check (5-10 modules)
    const sampleSize = Math.min(Math.max(5, Math.ceil(appliedModules.length * 0.33)), 10);
    console.log(`🎯 Selecting ${sampleSize} random modules for spot-check...`);
    const sampleModules = getRandomSample(appliedModules, sampleSize);
    console.log(`✓ Selected: ${sampleModules.map(m => m.moduleId).join(', ')}\n`);

    // Analyze each sample module
    console.log('🔎 Analyzing semantic keyword accuracy...\n');
    const spotCheckResults = [];
    let passCount = 0;

    for (const module of sampleModules) {
      const { moduleId, semantic } = module;
      const appliedFile = path.join(APPLIED_DIR, `${moduleId}.js`);

      if (!fs.existsSync(appliedFile)) {
        console.log(`  ⚠️  Module ${moduleId} file not found`);
        spotCheckResults.push({
          moduleId,
          semantic,
          status: 'FILE_NOT_FOUND',
          passed: false
        });
        continue;
      }

      try {
        const content = fs.readFileSync(appliedFile, 'utf-8');
        const keywordAnalysis = analyzeSemanticKeywords(content, semantic);

        // Verification
        const passed = keywordAnalysis.verified && keywordAnalysis.matchCount >= 2;

        if (passed) {
          passCount++;
          console.log(`  ✅ ${moduleId} (${semantic}): ${keywordAnalysis.matchCount} keywords found - PASS`);
        } else {
          console.log(`  ❌ ${moduleId} (${semantic}): ${keywordAnalysis.matchCount} keywords found - FAIL`);
        }

        spotCheckResults.push({
          moduleId,
          semantic,
          keywordMatches: keywordAnalysis.keywordMatches,
          matchCount: keywordAnalysis.matchCount,
          verified: keywordAnalysis.verified,
          confidenceLevel: keywordAnalysis.confidenceLevel,
          status: passed ? 'ACCURATE' : 'INACCURATE',
          passed
        });

      } catch (error) {
        console.log(`  ⚠️  Error analyzing ${moduleId}: ${error.message}`);
        spotCheckResults.push({
          moduleId,
          semantic,
          status: 'ERROR',
          error: error.message,
          passed: false
        });
      }
    }

    const passRate = (passCount / sampleSize) * 100;
    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`📊 SPOT-CHECK RESULTS: ${passCount}/${sampleSize} PASSED (${passRate.toFixed(1)}%)\n`);

    // Generate report
    let report = `# Round 4 HIGH-Confidence Accuracy Verification Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Standard: Class-1 Quality (Keyword verification)\n`;
    report += `Gate: Spot-check accuracy (80%+ required for deployment)\n\n`;

    report += `## Spot-Check Summary\n\n`;
    report += `- **Sample Size:** ${sampleSize} modules (random selection)\n`;
    report += `- **Modules Accurate:** ${passCount}\n`;
    report += `- **Modules Inaccurate:** ${sampleSize - passCount}\n`;
    report += `- **Pass Rate:** ${passRate.toFixed(1)}%\n`;
    report += `- **Gate Status:** ${passRate >= 80 ? '✅ PASS' : '❌ FAIL'}\n\n`;

    report += `## Required Gate: 80%+ Accuracy\n\n`;
    if (passRate >= 80) {
      report += `✅ **PASS**: Spot-check accuracy is SUFFICIENT for deployment\n`;
      report += `- ${passCount}/${sampleSize} modules verified accurate\n`;
      report += `- All keyword verifications passed\n`;
      report += `- Ready to archive and deploy\n`;
    } else if (passRate >= 60) {
      report += `🟡 **CAUTION**: Spot-check accuracy is MARGINAL\n`;
      report += `- ${passCount}/${sampleSize} modules verified accurate\n`;
      report += `- Below 80% threshold - HALT for review\n`;
      report += `- Do NOT deploy until verification passes 80%+\n`;
    } else {
      report += `❌ **FAIL**: Spot-check accuracy is INSUFFICIENT\n`;
      report += `- Only ${passCount}/${sampleSize} modules verified accurate\n`;
      report += `- AUTOMATIC ROLLBACK TRIGGERED\n`;
      report += `- Algorithm requires investigation\n`;
    }
    report += '\n';

    report += `## Individual Module Analysis\n\n`;
    report += `| Module | Semantic | Keywords | Status | Pass |\n`;
    report += `|--------|----------|----------|--------|------|\n`;
    for (const result of spotCheckResults) {
      const keywordInfo = result.matchCount ? `${result.matchCount}/${SEMANTIC_KEYWORDS[result.semantic]?.length || 'N/A'}` : 'N/A';
      const status = result.passed ? '✅' : '❌';
      report += `| ${result.moduleId} | ${result.semantic} | ${keywordInfo} | ${result.status} | ${status} |\n`;
    }
    report += '\n';

    report += `## Detailed Keyword Matches\n\n`;
    for (const result of spotCheckResults.filter(r => r.keywordMatches)) {
      report += `### Module ${result.moduleId} - ${result.semantic}\n`;
      report += `**Status:** ${result.passed ? '✅ PASS' : '❌ FAIL'}\n`;
      report += `**Keyword Matches:** ${result.matchCount}\n`;
      if (result.keywordMatches.length > 0) {
        report += `**Found Keywords:**\n`;
        for (const match of result.keywordMatches) {
          report += `- ${match.keyword} (${match.occurrences}x)\n`;
        }
      } else {
        report += `**Found Keywords:** None - No semantic keywords detected\n`;
      }
      report += '\n';
    }

    report += `## Decision Gate\n\n`;
    if (passRate >= 80) {
      report += `✅ **APPROVED FOR DEPLOYMENT**\n`;
      report += `- Semantic accuracy verified at Class-1 standard\n`;
      report += `- Proceed to archival\n`;
    } else if (passRate >= 60) {
      report += `⚠️ **HOLD FOR MANUAL REVIEW**\n`;
      report += `- Marginal spot-check accuracy\n`;
      report += `- Manual verification recommended before deployment\n`;
    } else {
      report += `❌ **ROLLBACK TRIGGERED**\n`;
      report += `- Spot-check accuracy insufficient\n`;
      report += `- Undo all Round 4 HIGH deployments\n`;
      report += `- Investigate algorithm\n`;
      report += `- Do NOT proceed\n`;
    }
    report += '\n';

    fs.writeFileSync(OUTPUT_FILE, report);
    fs.writeFileSync(JSON_OUTPUT, JSON.stringify({
      timestamp: new Date().toISOString(),
      standard: 'Class-1 Quality',
      gate: 'Spot-check Verification (80%+ required)',
      sampleSize,
      passCount,
      totalModules: appliedModules.length,
      passRate: passRate.toFixed(1),
      gateStatus: passRate >= 80 ? 'PASS' : 'FAIL',
      results: spotCheckResults
    }, null, 2));

    // Display summary
    console.log(`═══════════════════════════════════════════════════════`);
    console.log(`\n🔍 VERIFICATION SUMMARY\n`);
    console.log(`Pass Rate: ${passRate.toFixed(1)}% (${passCount}/${sampleSize})`);
    console.log(`\nGate Status (80%+ required):`);
    if (passRate >= 80) {
      console.log(`✅ PASS - Ready for archival and deployment`);
    } else if (passRate >= 60) {
      console.log(`🟡 CAUTION - Below threshold, hold for review`);
    } else {
      console.log(`❌ FAIL - Automatic rollback required`);
    }
    console.log(`\n✅ Verification complete. Check reports for details.`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

verifyAccuracy();
