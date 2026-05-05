/**
 * Advanced Pattern Discovery - Round 2
 * Uses 75 validated modules to identify 50-100+ additional modules
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const OUTPUT_FILE = './advanced-pattern-discovery-round2.md';
const ANALYSIS_OUTPUT = './pattern-discovery-round2-analysis.json';

// Initial 31 + newly identified 44 = 75 modules
const EXPANDED_KNOWN = {
  // Original 31
  '2072': 'watchedValue', '2115': 'series', '9343': 'logger', '27714': 'canvasRendering',
  '48096': 'delegate', '52746': 'seriesData', '67135': 'priceDataSource', '72207': 'dataSource',
  '1765': 'settingsAdapter', '11542': 'context', '52959': 'features', '81251': 'settings',
  '60973': 'chartConfig', '38881': 'chunkLoaderModule', '9753': 'constants', '72877': 'cssClasses',
  '3615': 'dialogManager', '84617': 'chartManager', '55308': 'drawingToolbarState',
  '34840': 'chartDataManager', '29803': 'linkingManager', '71846': 'chartSaver',
  '81593': 'backendService', '46082': 'timeInterval', '11946': 'lineToolUtils',
  '78861': 'lineToolManager', '37150': 'mainInitialization', '10307': 'bitmapCoordinatesPane',
  '17776': 'seriesBarFunction', '92848': 'clipboardData', '89947': 'deleteLockedLineTools',
  
  // Tier 1: 37 new
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
  '75550': 'dataSource',

  // Tier 2: 7 new
  '33718': 'watchedValue', '38414': 'watchedValue', '45591': 'priceDataSource', '47432': 'priceDataSource',
  '55803': 'chunkLoaderModule', '60661': 'seriesBarFunction', '67777': 'priceDataSource',
};

/**
 * Extract rich patterns from known modules
 */
function extractAdvancedPatterns(content, moduleId, semanticName) {
  const patterns = {
    moduleId,
    semanticName,
    // Text patterns
    textKeywords: new Set(),
    classNames: new Set(),
    methodNames: new Set(),
    propertyNames: new Set(),
    exportedNames: [],
    // Structural patterns
    hasClasses: false,
    functionCount: 0,
    propertyCount: 0,
    exportCount: 0,
    // Semantic indicators
    semanticSignatures: [],
  };

  // Extract text keywords related to semantic name
  const nameWords = semanticName.split(/(?=[A-Z])/).map(w => w.toLowerCase());
  for (const word of nameWords) {
    if (word.length > 2 && content.toLowerCase().includes(word)) {
      patterns.textKeywords.add(word);
    }
  }

  // Extract classes
  const classPattern = /class\s+(\w+)/g;
  let match;
  while ((match = classPattern.exec(content)) !== null) {
    patterns.classNames.add(match[1]);
    patterns.hasClasses = true;
  }

  // Extract methods
  const methodPattern = /(\w+)\s*\([^)]*\)\s*{/g;
  const methodNames = new Set();
  while ((match = methodPattern.exec(content)) !== null) {
    methodNames.add(match[1]);
    patterns.functionCount++;
  }
  patterns.methodNames = methodNames;

  // Extract exports
  const exportsMatch = content.match(/i\.d\(t,\s*{([^}]+)}\)/);
  if (exportsMatch) {
    patterns.exportedNames = exportsMatch[1].split(',').map(e => {
      const m = e.match(/(\w+):/);
      return m ? m[1] : null;
    }).filter(Boolean);
    patterns.exportCount = patterns.exportedNames.length;
  }

  // Extract property names
  const propPattern = /["']([a-zA-Z_]\w+)["']\s*:/g;
  while ((match = propPattern.exec(content)) !== null) {
    patterns.propertyNames.add(match[1]);
    patterns.propertyCount++;
  }

  // Semantic signatures - unique combinations
  if (patterns.hasClasses) patterns.semanticSignatures.push('has_classes');
  if (patterns.functionCount > 10) patterns.semanticSignatures.push('many_functions');
  if (patterns.exportCount > 0) patterns.semanticSignatures.push('has_exports');
  if (patterns.propertyCount > 20) patterns.semanticSignatures.push('many_properties');
  if (content.includes('extends')) patterns.semanticSignatures.push('uses_inheritance');
  if (content.includes('addEventListener')) patterns.semanticSignatures.push('event_handling');
  if (content.includes('Promise')) patterns.semanticSignatures.push('async_operations');
  if (content.includes('requestAnimationFrame')) patterns.semanticSignatures.push('animation');

  return patterns;
}

/**
 * Calculate advanced similarity score
 */
function calculateAdvancedSimilarity(unknownContent, knownPatterns) {
  let score = 0;
  const matches = [];

  // Text keyword matching
  const unknownText = unknownContent.toLowerCase();
  for (const keyword of knownPatterns.textKeywords) {
    if (unknownText.includes(keyword)) {
      score += 0.15;
      matches.push({ type: 'keyword', value: keyword, weight: 0.15 });
    }
  }

  // Class matching
  const unknownClasses = (unknownContent.match(/class\s+(\w+)/g) || []).map(c => c.replace(/class\s+/, ''));
  for (const cls of unknownClasses) {
    for (const knownClass of knownPatterns.classNames) {
      if (cls === knownClass || cls.includes(knownClass) || knownClass.includes(cls)) {
        score += 0.25;
        matches.push({ type: 'class_match', value: cls, weight: 0.25 });
      }
    }
  }

  // Method/function matching
  const unknownFuncs = (unknownContent.match(/(\w+)\s*\([^)]*\)\s*{/g) || [])
    .map(f => f.replace(/\s*\([^)]*\)\s*{/, ''));
  for (const func of unknownFuncs.slice(0, 10)) {
    for (const knownFunc of Array.from(knownPatterns.methodNames).slice(0, 10)) {
      if (func === knownFunc) {
        score += 0.20;
        matches.push({ type: 'method_exact', value: func, weight: 0.20 });
      }
    }
  }

  // Export matching
  const unknownExports = unknownContent.match(/i\.d\(t,\s*{([^}]+)}\)/);
  if (unknownExports && knownPatterns.exportCount > 0) {
    const exportList = unknownExports[1];
    for (const knownExport of knownPatterns.exportedNames.slice(0, 5)) {
      if (exportList.includes(knownExport)) {
        score += 0.20;
        matches.push({ type: 'export_match', value: knownExport, weight: 0.20 });
      }
    }
  }

  // Semantic signature matching
  const unknownSigs = [];
  if (unknownContent.includes('class')) unknownSigs.push('has_classes');
  if ((unknownContent.match(/(\w+)\s*\([^)]*\)\s*{/g) || []).length > 10) unknownSigs.push('many_functions');
  if (unknownContent.match(/i\.d\(t,\s*{([^}]+)}\)/)) unknownSigs.push('has_exports');
  if ((unknownContent.match(/["']\w+["']\s*:/g) || []).length > 20) unknownSigs.push('many_properties');

  for (const sig of unknownSigs) {
    if (knownPatterns.semanticSignatures.includes(sig)) {
      score += 0.10;
      matches.push({ type: 'signature_match', value: sig, weight: 0.10 });
    }
  }

  score = Math.min(score, 1.0);
  return { score, matches };
}

/**
 * Main discovery
 */
async function advancedDiscovery() {
  try {
    console.log('🔍 Advanced Pattern Discovery - Round 2\n');
    console.log(`📚 Building pattern database from ${Object.keys(EXPANDED_KNOWN).length} known modules...\n`);

    // Step 1: Extract patterns
    console.log('📖 Extracting advanced patterns...');
    const patternDatabase = {};
    let processed = 0;

    for (const [moduleId, semanticName] of Object.entries(EXPANDED_KNOWN)) {
      const file = path.join(BEAUTIFIED_DIR, `${moduleId}.js`);
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf-8');
        patternDatabase[semanticName + '_' + moduleId] = extractAdvancedPatterns(content, moduleId, semanticName);
        processed++;
      }
    }
    console.log(`✓ Extracted patterns from ${processed} modules\n`);

    // Step 2: Analyze all modules
    console.log('🔎 Analyzing all 466 modules with advanced matching...');
    const files = fs.readdirSync(BEAUTIFIED_DIR).filter(f => f.endsWith('.js'));
    const discoveries = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const moduleId = file.replace('.js', '');

      if (EXPANDED_KNOWN[moduleId]) {
        continue; // Skip already known
      }

      const content = fs.readFileSync(path.join(BEAUTIFIED_DIR, file), 'utf-8');
      const matches = [];

      // Compare against all patterns
      for (const [patternKey, patterns] of Object.entries(patternDatabase)) {
        const similarity = calculateAdvancedSimilarity(content, patterns);
        if (similarity.score > 0) {
          matches.push({
            semantic: patterns.semanticName,
            matchedTo: patterns.moduleId,
            score: similarity.score,
            matchCount: similarity.matches.length,
          });
        }
      }

      matches.sort((a, b) => b.score - a.score);

      if (matches.length > 0) {
        const topMatch = matches[0];
        
        // Filter by confidence levels
        if (topMatch.score >= 0.65) {
          discoveries.push({
            moduleId,
            tier: 'HIGH',
            suggested: topMatch.semantic,
            matchedTo: topMatch.matchedTo,
            score: topMatch.score,
            matches: matches.slice(0, 3),
          });
        } else if (topMatch.score >= 0.50) {
          discoveries.push({
            moduleId,
            tier: 'MEDIUM',
            suggested: topMatch.semantic,
            score: topMatch.score,
            matches: matches.slice(0, 3),
          });
        } else if (topMatch.score >= 0.35) {
          discoveries.push({
            moduleId,
            tier: 'MEDIUM_LOW',
            suggested: topMatch.semantic,
            score: topMatch.score,
          });
        }
      }

      if ((i + 1) % 100 === 0) {
        console.log(`  [${i + 1}/${files.length}] Analyzed`);
      }
    }

    console.log(`✓ Analysis complete\n`);

    // Step 3: Generate report
    const highConf = discoveries.filter(d => d.tier === 'HIGH');
    const medConf = discoveries.filter(d => d.tier === 'MEDIUM');
    const lowConf = discoveries.filter(d => d.tier === 'MEDIUM_LOW');

    console.log('📊 Generating report...');
    let report = `# Advanced Pattern Discovery - Round 2\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Pattern Database: ${Object.keys(EXPANDED_KNOWN).length} known modules\n\n`;

    report += `## Summary\n\n`;
    report += `- **High-Confidence (65%+):** ${highConf.length} modules\n`;
    report += `- **Medium-Confidence (50-65%):** ${medConf.length} modules\n`;
    report += `- **Medium-Low (35-50%):** ${lowConf.length} modules\n`;
    report += `- **Total New Discoveries:** ${discoveries.length} modules\n\n`;

    report += `## High-Confidence Discoveries (${highConf.length})\n\n`;
    report += `| Module ID | Suggested Name | Score | |\n`;
    report += `|-----------|----------------|-------|---|\n`;
    for (const d of highConf.sort((a, b) => b.score - a.score)) {
      report += `| ${d.moduleId} | ${d.suggested} | ${(d.score*100).toFixed(0)}% | ✅ |\n`;
    }
    report += '\n';

    report += `## Medium-Confidence Discoveries (${medConf.length})\n\n`;
    report += `| Module ID | Top Match | Score |\n`;
    report += `|-----------|-----------|-------|\n`;
    for (const d of medConf.sort((a, b) => b.score - a.score).slice(0, 30)) {
      report += `| ${d.moduleId} | ${d.suggested} | ${(d.score*100).toFixed(0)}% |\n`;
    }
    if (medConf.length > 30) {
      report += `| ... | ... | ... |\n`;
    }
    report += '\n';

    report += `## Projections\n\n`;
    report += `- **If High-Conf applied:** ${75 + highConf.length} modules identified (${((75 + highConf.length)/466*100).toFixed(1)}%)\n`;
    report += `- **If High+Med applied:** ${75 + highConf.length + medConf.length} modules identified (${((75 + highConf.length + medConf.length)/466*100).toFixed(1)}%)\n`;
    report += `- **Recommended Next:** Apply ${highConf.length} high-confidence discoveries\n`;

    fs.writeFileSync(OUTPUT_FILE, report);
    fs.writeFileSync(ANALYSIS_OUTPUT, JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: { highConf: highConf.length, medConf: medConf.length, lowConf: lowConf.length },
      discoveries: discoveries,
    }, null, 2));

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('🎯 DISCOVERY COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`High-Confidence (65%+): ${highConf.length} modules`);
    console.log(`Medium-Confidence (50-65%): ${medConf.length} modules`);
    console.log(`Medium-Low (35-50%): ${lowConf.length} modules`);
    console.log(`\nTotal New Discoveries: ${discoveries.length}`);
    console.log(`\nProjected Expansion:`);
    console.log(`  Current: 75 modules (16.1%)`);
    console.log(`  +High: ${75 + highConf.length} (${((75 + highConf.length)/466*100).toFixed(1)}%)`);
    console.log(`  +Med: ${75 + highConf.length + medConf.length} (${((75 + highConf.length + medConf.length)/466*100).toFixed(1)}%)`);
    console.log(`\n✅ Ready for application!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

advancedDiscovery();
