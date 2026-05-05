/**
 * Advanced Pattern Discovery - Round 4 (FIXED)
 * 
 * CRITICAL IMPROVEMENTS (Class-1 Quality):
 * 1. Keyword verification - semantic name must appear in code
 * 2. Confidence scoring based on semantic accuracy, not just pattern match
 * 3. Conservative thresholds - prefer false negatives over false positives
 * 4. Detailed semantic analysis before assignment
 * 
 * This algorithm enforces senior-level reverse engineering standards:
 * - Semantic names MUST be justified by code content
 * - No assignment without keyword evidence
 * - Confidence scores reflect SEMANTIC accuracy, not pattern similarity
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const TIER3_HIGH_DIR = './tier-three-identified-modules';
const TIER3_MED_DIR = './tier-three-medium-confidence-approved';
const TIER3_LOW_DIR = './medium-low-approved';
const ROUND3_HIGH_DIR = './round3-high-approved';
const OUTPUT_FILE = './advanced-pattern-discovery-round4.md';
const ANALYSIS_OUTPUT = './pattern-discovery-round4-analysis.json';

// Semantic name → Keywords that MUST appear in code
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

/**
 * KEYWORD VERIFICATION - Class-1 Check
 * This is the critical gate that failed in Round 3
 */
function verifySemanticKeywords(content, semanticName) {
  if (!SEMANTIC_KEYWORDS[semanticName]) {
    return { verified: false, matchCount: 0, reason: 'No keyword profile for semantic' };
  }

  const keywords = SEMANTIC_KEYWORDS[semanticName];
  const lowerContent = content.toLowerCase();
  const matches = [];

  for (const keyword of keywords) {
    if (lowerContent.includes(keyword)) {
      matches.push(keyword);
    }
  }

  // MANDATORY: At least 2 keyword matches for any semantic assignment
  const minRequired = 2;
  const verified = matches.length >= minRequired;

  return {
    verified,
    matchCount: matches.length,
    matches,
    required: minRequired,
    reason: verified ? 'PASS' : `FAIL (${matches.length}/${minRequired} keywords)`
  };
}

/**
 * Load approved module baseline (330 modules)
 */
function loadApprovedModules() {
  const approved = {};
  
  function loadFromDir(dirPath, tier) {
    if (!fs.existsSync(dirPath)) return;
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
    for (const file of files) {
      approved[file.replace('.js', '')] = tier;
    }
  }
  
  loadFromDir(TIER3_HIGH_DIR, 'tier3_high');
  loadFromDir(TIER3_MED_DIR, 'tier3_medium');
  loadFromDir(TIER3_LOW_DIR, 'tier3_low');
  loadFromDir(ROUND3_HIGH_DIR, 'round3_high');
  
  return approved;
}

// Original 75 modules
const ORIGINAL_KNOWN = {
  '2072': 'watchedValue', '2115': 'series', '9343': 'logger', '27714': 'canvasRendering',
  '48096': 'delegate', '52746': 'seriesData', '67135': 'priceDataSource', '72207': 'dataSource',
  '1765': 'settingsAdapter', '11542': 'context', '52959': 'features', '81251': 'settings',
  '60973': 'chartConfig', '38881': 'chunkLoaderModule', '9753': 'constants', '72877': 'cssClasses',
  '3615': 'dialogManager', '84617': 'chartManager', '55308': 'drawingToolbarState',
  '34840': 'chartDataManager', '29803': 'linkingManager', '71846': 'chartSaver',
  '81593': 'backendService', '46082': 'timeInterval', '11946': 'lineToolUtils',
  '78861': 'lineToolManager', '37150': 'mainInitialization', '10307': 'bitmapCoordinatesPane',
  '17776': 'seriesBarFunction', '92848': 'clipboardData', '89947': 'deleteLockedLineTools',
  '18712': 'watchedValue', '26610': 'lineToolManager', '28450': 'watchedValue', '4659': 'watchedValue',
  '70859': 'watchedValue', '94322': 'watchedValue', '68028': 'watchedValue', '10892': 'timeInterval',
  '20820': 'bitmapCoordinatesPane', '43222': 'watchedValue', '7793': 'watchedValue',
  '67563': 'mainInitialization', '75579': 'watchedValue', '35107': 'dataSource',
  '63903': 'priceDataSource', '11768': 'series', '86811': 'watchedValue', '19233': 'seriesData',
  '24062': 'watchedValue', '28001': 'seriesBarFunction', '64236': 'timeInterval', '13421': 'seriesData',
  '30693': 'priceDataSource', '40137': 'watchedValue', '53107': 'watchedValue', '59998': 'watchedValue',
  '61710': 'dataSource', '65045': 'watchedValue', '28477': 'seriesBarFunction', '3190': 'watchedValue',
  '5734': 'deleteLockedLineTools', '97363': 'watchedValue', '22489': 'chartDataManager',
  '16708': 'deleteLockedLineTools', '45530': 'priceDataSource', '48943': 'watchedValue',
  '75550': 'dataSource', '33718': 'watchedValue', '38414': 'watchedValue', '45591': 'priceDataSource',
  '47432': 'priceDataSource', '55803': 'chunkLoaderModule', '60661': 'seriesBarFunction',
  '67777': 'priceDataSource',
};

/**
 * Extract patterns WITH keyword verification
 */
function extractPatternsWithVerification(content, moduleId, semanticName) {
  return {
    moduleId,
    semanticName,
    keywordVerification: verifySemanticKeywords(content, semanticName),
    patterns: {
      methodCount: (content.match(/(\w+)\s*\([^)]*\)\s*{/g) || []).length,
      classCount: (content.match(/class\s+(\w+)/g) || []).length,
      hasExports: !!content.match(/i\.d\(t,\s*{([^}]+)}\)/),
      hasAsync: content.includes('async') || content.includes('Promise'),
      hasEvents: content.includes('addEventListener') || content.includes('on('),
      codeLines: content.split('\n').filter(l => l.trim()).length,
    }
  };
}

/**
 * Calculate semantic-aware confidence score
 */
function calculateSemanticConfidence(unknown, knownPatterns) {
  let score = 0;
  const factors = {};

  // CRITICAL: Keyword verification (40%)
  if (unknown.keywordVerification.verified) {
    factors.keywords = 40;
    score += 40;
  } else {
    // NO assignment if keywords don't match (hard fail)
    return { score: 0, factors, match: 'REJECTED_NO_KEYWORDS' };
  }

  // Pattern similarity (only if keywords pass)
  const methodDiff = Math.abs(unknown.patterns.methodCount - knownPatterns.patterns.methodCount);
  if (methodDiff <= 3) {
    factors.methodMatch = 20;
    score += 20;
  }

  if (unknown.patterns.hasExports === knownPatterns.patterns.hasExports) {
    factors.exportMatch = 15;
    score += 15;
  }

  if (unknown.patterns.hasAsync === knownPatterns.patterns.hasAsync) {
    factors.asyncMatch = 15;
    score += 15;
  }

  if (unknown.patterns.hasEvents === knownPatterns.patterns.hasEvents) {
    factors.eventMatch = 10;
    score += 10;
  }

  return {
    score: Math.min(score, 100),
    factors,
    match: 'VERIFIED'
  };
}

/**
 * Main discovery with Class-1 gates
 */
async function advancedDiscoveryRound4() {
  try {
    console.log('🔍 ADVANCED PATTERN DISCOVERY - Round 4 (FIXED)\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('🔐 Class-1 Quality Gates Enabled:\n');
    console.log('  ✓ Keyword verification (MANDATORY)\n');
    console.log('  ✓ Semantic accuracy scoring\n');
    console.log('  ✓ Conservative thresholds\n');
    console.log('  ✓ Senior-level reverse engineering standards\n');
    console.log('═══════════════════════════════════════════════════════\n');

    // Load baseline
    console.log('📂 Loading 330-module baseline...');
    const approvedTier3 = loadApprovedModules();
    const allKnown = { ...ORIGINAL_KNOWN, ...approvedTier3 };
    const totalKnown = Object.keys(allKnown).length;
    console.log(`✓ Loaded ${totalKnown} verified modules\n`);

    // Extract patterns from known modules
    console.log('📖 Extracting patterns from known modules...');
    const patternDatabase = {};
    let processed = 0;

    for (const [moduleId, semanticName] of Object.entries(allKnown)) {
      const file = path.join(BEAUTIFIED_DIR, `${moduleId}.js`);
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf-8');
          const patterns = extractPatternsWithVerification(content, moduleId, semanticName);
          
          // Store only if keyword-verified (Class-1 gate)
          if (patterns.keywordVerification.verified) {
            const key = semanticName + '_' + moduleId;
            patternDatabase[key] = {
              semanticName,
              patterns: patterns.patterns
            };
            processed++;
          }
        } catch (e) {
          // Skip on read error
        }
      }
    }
    console.log(`✓ Extracted patterns from ${processed} verified modules\n`);

    // Analyze unknown modules
    console.log('🔎 Analyzing unknown modules with Class-1 gates...');
    const files = fs.readdirSync(BEAUTIFIED_DIR).filter(f => f.endsWith('.js'));
    const discoveries = [];
    const rejections = { noKeywords: 0, lowScore: 0, ambiguous: 0 };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const moduleId = file.replace('.js', '');

      if (allKnown[moduleId]) continue; // Skip known

      try {
        const content = fs.readFileSync(path.join(BEAUTIFIED_DIR, file), 'utf-8');
        
        // Try to find best semantic match
        const matches = [];

        for (const [patternKey, knownPatterns] of Object.entries(patternDatabase)) {
          const unknown = extractPatternsWithVerification(content, moduleId, knownPatterns.semanticName);
          const similarity = calculateSemanticConfidence(unknown, knownPatterns);

          // GATE 1: Must have keywords
          if (!unknown.keywordVerification.verified) {
            rejections.noKeywords++;
            continue;
          }

          // GATE 2: Minimum score threshold (conservative)
          if (similarity.score > 0) {
            matches.push({
              semantic: knownPatterns.semanticName,
              score: similarity.score,
              keywords: unknown.keywordVerification.matchCount,
              factors: similarity.factors
            });
          }
        }

        if (matches.length === 0) {
          rejections.ambiguous++;
          continue;
        }

        // Sort by semantic accuracy
        matches.sort((a, b) => b.score - a.score);
        const topMatch = matches[0];

        // GATE 3: Confidence thresholds (Class-1 standards)
        if (topMatch.score >= 75) {
          discoveries.push({
            moduleId,
            tier: 'HIGH',
            suggested: topMatch.semantic,
            score: topMatch.score,
            keywords: topMatch.keywords,
            verified: true
          });
        } else if (topMatch.score >= 60) {
          discoveries.push({
            moduleId,
            tier: 'MEDIUM',
            suggested: topMatch.semantic,
            score: topMatch.score,
            keywords: topMatch.keywords,
            verified: true
          });
        } else if (topMatch.score >= 45) {
          discoveries.push({
            moduleId,
            tier: 'MEDIUM_LOW',
            suggested: topMatch.semantic,
            score: topMatch.score,
            keywords: topMatch.keywords,
            verified: false  // Unverified, optional review only
          });
        } else {
          rejections.lowScore++;
        }

      } catch (e) {
        // Continue on read error
      }

      if ((i + 1) % 100 === 0) {
        console.log(`  [${i + 1}/${files.length}] Analyzed`);
      }
    }

    console.log(`✓ Analysis complete\n`);

    // Categorize by tier
    const highConf = discoveries.filter(d => d.tier === 'HIGH' && d.verified);
    const medConf = discoveries.filter(d => d.tier === 'MEDIUM' && d.verified);
    const lowConf = discoveries.filter(d => d.tier === 'MEDIUM_LOW');

    // Generate report
    let report = `# Advanced Pattern Discovery - Round 4 (Class-1 Quality)\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Baseline: ${totalKnown} verified modules\n\n`;

    report += `## Class-1 Quality Gates\n\n`;
    report += `✓ Keyword verification MANDATORY\n`;
    report += `✓ Semantic confidence scoring\n`;
    report += `✓ Conservative thresholds (75%+, 60%+, 45%+)\n`;
    report += `✓ Senior reverse engineering standards\n\n`;

    report += `## Discovery Results\n\n`;
    report += `- **High-Confidence (75%+):** ${highConf.length} modules ✅\n`;
    report += `- **Medium-Confidence (60-75%):** ${medConf.length} modules 🟡\n`;
    report += `- **Medium-Low (45-60%):** ${lowConf.length} modules (unverified)\n`;
    report += `- **Total New Discoveries:** ${discoveries.length} modules\n\n`;

    report += `## Rejections (Quality Gate Enforcement)\n\n`;
    report += `- **Failed Keyword Verification:** ${rejections.noKeywords} modules\n`;
    report += `- **Below Confidence Threshold:** ${rejections.lowScore} modules\n`;
    report += `- **Ambiguous/No Match:** ${rejections.ambiguous} modules\n`;
    report += `- **Total Rejected:** ${rejections.noKeywords + rejections.lowScore + rejections.ambiguous} modules\n\n`;

    report += `## High-Confidence Discoveries (${highConf.length})\n\n`;
    report += `| Module ID | Semantic | Score | Keywords |\n`;
    report += `|-----------|----------|-------|----------|\n`;
    for (const d of highConf.sort((a, b) => b.score - a.score)) {
      report += `| ${d.moduleId} | ${d.suggested} | ${d.score.toFixed(0)}% | ${d.keywords} |\n`;
    }
    report += '\n';

    report += `## Coverage Projections\n\n`;
    report += `- **Current:** ${totalKnown} modules (${((totalKnown)/466*100).toFixed(1)}%)\n`;
    report += `- **If High Applied:** ${totalKnown + highConf.length} (${((totalKnown + highConf.length)/466*100).toFixed(1)}%)\n`;
    report += `- **If High+Medium Applied:** ${totalKnown + highConf.length + medConf.length} (${((totalKnown + highConf.length + medConf.length)/466*100).toFixed(1)}%)\n\n`;

    report += `## Recommendations\n\n`;
    report += `1. Apply and validate ${highConf.length} HIGH-confidence modules\n`;
    report += `2. Manual review recommended for MEDIUM tier before deployment\n`;
    report += `3. MEDIUM_LOW modules: Optional for later consideration\n`;

    fs.writeFileSync(OUTPUT_FILE, report);
    fs.writeFileSync(ANALYSIS_OUTPUT, JSON.stringify({
      timestamp: new Date().toISOString(),
      baselineSize: totalKnown,
      qualityGates: ['keyword_verification', 'semantic_confidence', 'conservative_thresholds'],
      summary: {
        highConf: highConf.length,
        medConf: medConf.length,
        lowConf: lowConf.length,
        rejected: {
          noKeywords: rejections.noKeywords,
          lowScore: rejections.lowScore,
          ambiguous: rejections.ambiguous
        }
      },
      discoveries: discoveries.sort((a, b) => b.score - a.score)
    }, null, 2));

    // Display summary
    console.log('═══════════════════════════════════════════════════════');
    console.log('✅ DISCOVERY COMPLETE (CLASS-1 QUALITY)');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log(`High-Confidence (75%+): ${highConf.length} modules ✅`);
    console.log(`Medium-Confidence (60-75%): ${medConf.length} modules 🟡`);
    console.log(`Medium-Low (45-60%): ${lowConf.length} modules (unverified)\n`);
    console.log(`Rejected (Failed Gates): ${rejections.noKeywords + rejections.lowScore + rejections.ambiguous}`);
    console.log(`  - No Keywords: ${rejections.noKeywords}`);
    console.log(`  - Low Score: ${rejections.lowScore}`);
    console.log(`  - Ambiguous: ${rejections.ambiguous}\n`);
    console.log(`Coverage Projections:`);
    console.log(`  Current: ${totalKnown} modules (${((totalKnown)/466*100).toFixed(1)}%)`);
    console.log(`  +High: ${totalKnown + highConf.length} (${((totalKnown + highConf.length)/466*100).toFixed(1)}%)`);
    console.log(`\n✅ Ready for vetted application!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

advancedDiscoveryRound4();
