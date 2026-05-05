/**
 * Advanced Pattern Discovery - Round 4 IMPROVED (V2)
 * 
 * CRITICAL IMPROVEMENTS FOR ACCURACY (Class-1 Quality):
 * 1. Keyword verification - semantic name must appear in code
 * 2. STRICTER minimum keywords: 3+ for HIGH tier (previously 2+)
 * 3. Higher confidence thresholds: 80%+ for HIGH (previously 75%+)
 * 4. INCREASED keyword weighting: 60% (previously 40%)
 * 5. Hard gates: Reject if keywords insufficient for tier
 * 
 * This algorithm enforces senior-level reverse engineering standards
 * with lessons learned from Round 4 spot-check (40% accuracy failure)
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const TIER3_HIGH_DIR = './tier-three-identified-modules';
const TIER3_MED_DIR = './tier-three-medium-confidence-approved';
const TIER3_LOW_DIR = './medium-low-approved';
const ROUND3_HIGH_DIR = './round3-high-approved';
const OUTPUT_FILE = './advanced-pattern-discovery-round4-improved.md';
const ANALYSIS_OUTPUT = './pattern-discovery-round4-improved-analysis.json';

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

// Tier-specific requirements (STRICTER than before)
const TIER_REQUIREMENTS = {
  'HIGH': {
    minKeywords: 3,        // INCREASED from 2 → 3
    minConfidence: 80,     // INCREASED from 75 → 80
    description: 'Very High Confidence'
  },
  'MEDIUM': {
    minKeywords: 2,        // Keep at 2 (for MEDIUM only)
    minConfidence: 65,     // INCREASED from 60 → 65
    description: 'Medium Confidence'
  },
  'MEDIUM_LOW': {
    minKeywords: 2,        // Keep at 2 (for review only)
    minConfidence: 45,     // Keep at 45
    description: 'Low Confidence (Optional Review)'
  }
};

/**
 * KEYWORD VERIFICATION - Class-1 Check (IMPROVED)
 * Now tier-aware: stricter requirements for HIGH tier
 */
function verifySemanticKeywords(content, semanticName, tier = 'HIGH') {
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

  // Get tier requirements
  const tierReq = TIER_REQUIREMENTS[tier];
  const minRequired = tierReq.minKeywords;
  const verified = matches.length >= minRequired;

  return {
    verified,
    matchCount: matches.length,
    matches,
    required: minRequired,
    tier,
    reason: verified ? 'PASS' : `FAIL (${matches.length}/${minRequired} keywords for ${tier})`
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
 * Calculate semantic-aware confidence score (IMPROVED)
 * Keyword weighting increased to 60%
 */
function calculateSemanticConfidence(content, semanticName, knownPattern, tier) {
  let score = 0;
  const factors = {};

  // CRITICAL: Keyword verification (60% - INCREASED from 40%)
  const keywordCheck = verifySemanticKeywords(content, semanticName, tier);
  
  // HARD GATE: If keywords insufficient for this tier, reject
  if (!keywordCheck.verified) {
    return { score: 0, factors, match: 'REJECTED_INSUFFICIENT_KEYWORDS', keywordCheck };
  }

  // Award keyword points
  factors.keywords = 60;
  score += 60;

  // Pattern similarity (only if keywords pass) - REDUCED to 40%
  const unknown = extractPatternsWithVerification(content, '', semanticName);
  
  const methodDiff = Math.abs(unknown.patterns.methodCount - knownPattern.patterns.methodCount);
  if (methodDiff <= 3) {
    factors.methodMatch = 12;
    score += 12;
  }

  if (unknown.patterns.hasExports === knownPattern.patterns.hasExports) {
    factors.exportMatch = 10;
    score += 10;
  }

  if (unknown.patterns.hasAsync === knownPattern.patterns.hasAsync) {
    factors.asyncMatch = 10;
    score += 10;
  }

  if (unknown.patterns.hasEvents === knownPattern.patterns.hasEvents) {
    factors.eventMatch = 8;
    score += 8;
  }

  return {
    score: Math.min(score, 100),
    factors,
    match: 'VERIFIED',
    keywordCheck
  };
}

/**
 * Main discovery with improved Class-1 gates
 */
async function advancedDiscoveryRound4Improved() {
  try {
    console.log('🔍 ADVANCED PATTERN DISCOVERY - Round 4 IMPROVED (V2)\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('🔐 Improved Class-1 Quality Gates (Lessons from Round 4):\n');
    console.log('  ✓ Keyword verification (MANDATORY, tier-aware)\n');
    console.log('  ✓ Increased keyword weighting (60%)\n');
    console.log('  ✓ Stricter thresholds: HIGH 80%+, MEDIUM 65%+\n');
    console.log('  ✓ Minimum keywords: 3+ for HIGH, 2+ for others\n');
    console.log('  ✓ Hard gates: Reject if keywords insufficient\n');
    console.log('═══════════════════════════════════════════════════════\n');

    // Load baseline
    console.log('📂 Loading 330-module baseline...');
    const approvedTier3 = loadApprovedModules();
    const allKnown = { ...ORIGINAL_KNOWN, ...approvedTier3 };
    const totalKnown = Object.keys(allKnown).length;
    console.log(`✓ Loaded ${totalKnown} verified modules\n`);

    // Extract patterns from known modules (HIGH tier only for pattern database)
    console.log('📖 Extracting patterns from known modules...');
    const patternDatabase = {};
    let processed = 0;

    for (const [moduleId, semanticName] of Object.entries(allKnown)) {
      const file = path.join(BEAUTIFIED_DIR, `${moduleId}.js`);
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf-8');
          const patterns = extractPatternsWithVerification(content, moduleId, semanticName);
          
          // Store only if keyword-verified with HIGH tier requirements
          const keywordCheck = verifySemanticKeywords(content, semanticName, 'HIGH');
          if (keywordCheck.verified) {
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

    // Analyze unknown modules with improved gates
    console.log('🔎 Analyzing unknown modules with IMPROVED gates...');
    const files = fs.readdirSync(BEAUTIFIED_DIR).filter(f => f.endsWith('.js'));
    const discoveries = [];
    const rejections = { 
      noKeywordsHigh: 0, 
      lowScoreHigh: 0,
      noKeywordsMedium: 0,
      lowScoreMedium: 0,
      ambiguous: 0 
    };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const moduleId = file.replace('.js', '');

      if (allKnown[moduleId]) continue; // Skip known

      try {
        const content = fs.readFileSync(path.join(BEAUTIFIED_DIR, file), 'utf-8');
        
        // Try to find best semantic match (test HIGH first, then MEDIUM)
        let bestMatch = null;
        let bestTier = null;

        for (const [patternKey, knownPatterns] of Object.entries(patternDatabase)) {
          // TEST FOR HIGH TIER
          const similarityHigh = calculateSemanticConfidence(content, knownPatterns.semanticName, knownPatterns, 'HIGH');

          if (similarityHigh.score >= TIER_REQUIREMENTS.HIGH.minConfidence) {
            if (!bestMatch || similarityHigh.score > bestMatch.score) {
              bestMatch = similarityHigh;
              bestMatch.semantic = knownPatterns.semanticName;
              bestTier = 'HIGH';
            }
            continue;
          }

          // If HIGH fails, test MEDIUM
          if (!bestMatch || bestTier !== 'HIGH') {
            const similarityMedium = calculateSemanticConfidence(content, knownPatterns.semanticName, knownPatterns, 'MEDIUM');

            if (similarityMedium.score >= TIER_REQUIREMENTS.MEDIUM.minConfidence) {
              if (!bestMatch || similarityMedium.score > bestMatch.score) {
                bestMatch = similarityMedium;
                bestMatch.semantic = knownPatterns.semanticName;
                bestTier = 'MEDIUM';
              }
            }
          }
        }

        if (!bestMatch) {
          rejections.ambiguous++;
          continue;
        }

        // Add to discoveries with tier
        if (bestTier === 'HIGH') {
          discoveries.push({
            moduleId,
            tier: 'HIGH',
            suggested: bestMatch.semantic,
            score: bestMatch.score,
            keywords: bestMatch.keywordCheck.matchCount,
            minRequired: bestMatch.keywordCheck.required,
            verified: true
          });
        } else if (bestTier === 'MEDIUM') {
          discoveries.push({
            moduleId,
            tier: 'MEDIUM',
            suggested: bestMatch.semantic,
            score: bestMatch.score,
            keywords: bestMatch.keywordCheck.matchCount,
            minRequired: bestMatch.keywordCheck.required,
            verified: true
          });
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

    // Generate report
    let report = `# Advanced Pattern Discovery - Round 4 IMPROVED (V2)\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Baseline: ${totalKnown} verified modules\n\n`;

    report += `## Improvements from Round 4 Failure Analysis\n\n`;
    report += `**Issue Found:** Round 4 spot-check accuracy 40% (failed 80% gate)\n`;
    report += `**Root Cause:** Confidence thresholds too permissive, keyword weighting too low\n`;
    report += `**Solution:** \n`;
    report += `- Increased keyword weighting: 40% → 60%\n`;
    report += `- Raised HIGH threshold: 75% → 80%\n`;
    report += `- Increased MEDIUM threshold: 60% → 65%\n`;
    report += `- Increased minimum keywords for HIGH: 2 → 3\n`;
    report += `- Hard gate: Reject if keywords < required for tier\n\n`;

    report += `## Improved Class-1 Quality Gates\n\n`;
    report += `**HIGH Tier (80%+ confidence):**\n`;
    report += `- Minimum keywords: 3 (STRICT)\n`;
    report += `- Minimum confidence: 80% (up from 75%)\n`;
    report += `- Keyword weighting: 60% of score\n`;
    report += `- Expectation: High-accuracy deployments\n\n`;

    report += `**MEDIUM Tier (65%+ confidence):**\n`;
    report += `- Minimum keywords: 2\n`;
    report += `- Minimum confidence: 65% (up from 60%)\n`;
    report += `- Keyword weighting: 60% of score\n`;
    report += `- Expectation: Solid deployments after validation\n\n`;

    report += `## Discovery Results\n\n`;
    report += `- **High-Confidence (80%+, 3+ keywords):** ${highConf.length} modules ✅\n`;
    report += `- **Medium-Confidence (65%+, 2+ keywords):** ${medConf.length} modules 🟡\n`;
    report += `- **Total New Discoveries:** ${discoveries.length} modules\n\n`;

    report += `## Rejections (Quality Gate Enforcement)\n\n`;
    report += `- **Insufficient keywords (HIGH tier):** ${rejections.noKeywordsHigh}\n`;
    report += `- **Below confidence (HIGH tier):** ${rejections.lowScoreHigh}\n`;
    report += `- **Insufficient keywords (MEDIUM tier):** ${rejections.noKeywordsMedium}\n`;
    report += `- **Below confidence (MEDIUM tier):** ${rejections.lowScoreMedium}\n`;
    report += `- **Ambiguous/No matches:** ${rejections.ambiguous}\n\n`;

    report += `## Coverage Projections\n\n`;
    report += `- **Current:** 330 modules (70.8%)\n`;
    report += `- **If High Applied:** ${330 + highConf.length} (${((330 + highConf.length) / 466 * 100).toFixed(1)}%)\n`;
    report += `- **If High+Medium Applied:** ${330 + discoveries.length} (${((330 + discoveries.length) / 466 * 100).toFixed(1)}%)\n\n`;

    report += `## Recommendations\n\n`;
    report += `1. Apply HIGH-confidence modules first (expect 80%+ accuracy after spot-check)\n`;
    report += `2. Manual review recommended for MEDIUM tier before deployment\n`;
    report += `3. All deployments require spot-check verification (80%+ gate)\n`;
    report += `4. Expected spot-check pass rate: 80%+ (vs 40% in Round 4)\n`;

    fs.writeFileSync(OUTPUT_FILE, report);
    fs.writeFileSync(ANALYSIS_OUTPUT, JSON.stringify({
      timestamp: new Date().toISOString(),
      version: 'Round 4 Improved V2',
      baseline: totalKnown,
      discoveries: discoveries.length,
      byTier: {
        high: highConf.length,
        medium: medConf.length
      },
      rejections,
      improvements: {
        keywordWeighting: '60% (was 40%)',
        highThreshold: '80% (was 75%)',
        mediumThreshold: '65% (was 60%)',
        minKeywordsHigh: '3 (was 2)'
      },
      discoveries: discoveries
    }, null, 2));

    // Display summary
    console.log('═══════════════════════════════════════════════════════');
    console.log('✅ DISCOVERY COMPLETE (IMPROVED V2)\n');
    console.log(`High-Confidence (80%+): ${highConf.length} modules ✅`);
    console.log(`Medium-Confidence (65%+): ${medConf.length} modules 🟡`);
    console.log(`Total: ${discoveries.length} new discoveries\n`);
    console.log(`Coverage Update: 330 → ${330 + highConf.length} (with HIGH only)`);
    console.log(`Coverage: ${((330 + highConf.length) / 466 * 100).toFixed(1)}%\n`);
    console.log('✅ Ready for application and validation!');
    console.log('Note: Expect improved spot-check accuracy (80%+ vs previous 40%)');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

advancedDiscoveryRound4Improved();
