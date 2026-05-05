/**
 * Pattern-Based Module Identifier
 * Uses known modules to build pattern database, then identifies unknown modules
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const OUTPUT_FILE = './module-pattern-analysis.json';
const IDENTIFICATION_REPORT = './module-identification-report.md';

// Known semantic mappings - our training data
const KNOWN_MODULES = {
  '2072': 'watchedValue',
  '2115': 'series',
  '9343': 'logger',
  '27714': 'canvasRendering',
  '48096': 'delegate',
  '52746': 'seriesData',
  '67135': 'priceDataSource',
  '72207': 'dataSource',
  '1765': 'settingsAdapter',
  '11542': 'context',
  '52959': 'features',
  '81251': 'settings',
  '60973': 'chartConfig',
  '38881': 'chunkLoaderModule',
  '9753': 'constants',
  '72877': 'cssClasses',
  '3615': 'dialogManager',
  '84617': 'chartManager',
  '55308': 'drawingToolbarState',
  '34840': 'chartDataManager',
  '29803': 'linkingManager',
  '71846': 'chartSaver',
  '81593': 'backendService',
  '46082': 'timeInterval',
  '11946': 'lineToolUtils',
  '78861': 'lineToolManager',
  '37150': 'mainInitialization',
  '10307': 'bitmapCoordinatesPane',
  '17776': 'seriesBarFunction',
  '92848': 'clipboardData',
  '89947': 'deleteLockedLineTools',
};

/**
 * Extract characteristic patterns from known module
 */
function extractModulePatterns(content, moduleId, semanticName) {
  const patterns = {
    moduleId,
    semanticName,
    keywords: [],
    classNames: [],
    exportedNames: [],
    functionPatterns: [],
    imports: [],
    characteristicStrings: [],
  };

  // Extract keywords from semantic name
  const nameWords = semanticName.split(/(?=[A-Z])/).map(w => w.toLowerCase());
  patterns.keywords = nameWords;

  // Extract class names
  const classPattern = /class\s+(\w+)/g;
  let match;
  while ((match = classPattern.exec(content)) !== null) {
    patterns.classNames.push(match[1]);
  }

  // Extract exports
  const exportsMatch = content.match(/i\.d\(t,\s*{([^}]+)}\)/);
  if (exportsMatch) {
    const exportsStr = exportsMatch[1];
    const exports = exportsStr.split(',').map(e => {
      const m = e.match(/(\w+):/);
      return m ? m[1] : null;
    }).filter(Boolean);
    patterns.exportedNames = exports;
  }

  // Extract characteristic strings/methods
  const charStrings = content.match(/["']([a-zA-Z_]\w+)["']\s*:/g) || [];
  patterns.characteristicStrings = charStrings
    .map(s => s.replace(/["':]/g, ''))
    .slice(0, 20); // Top 20

  // Extract imports
  const importPattern = /var\s+(\w+)\s*=\s*i\((\d+)\)/g;
  while ((match = importPattern.exec(content)) !== null) {
    patterns.imports.push({
      varName: match[1],
      moduleId: match[2],
    });
  }

  // Extract function patterns - names that appear in definitions
  const funcPattern = /(?:function\s+|\.(\w+)\s*=\s*function|\b(\w+)\s*\()/g;
  const funcNames = new Set();
  while ((match = funcPattern.exec(content)) !== null) {
    if (match[1]) funcNames.add(match[1]);
    if (match[2]) funcNames.add(match[2]);
  }
  patterns.functionPatterns = Array.from(funcNames).slice(0, 20);

  return patterns;
}

/**
 * Calculate similarity score between unknown module and known patterns
 */
function calculateSimilarity(unknownContent, unknownId, knownPatterns) {
  let score = 0;
  const scores = [];

  // Extract patterns from unknown module
  const unknownExports = unknownContent.match(/i\.d\(t,\s*{([^}]+)}\)/);
  const unknownClasses = (unknownContent.match(/class\s+(\w+)/g) || []).map(c => c.replace(/class\s+/, ''));
  const unknownStrings = (unknownContent.match(/["']([a-zA-Z_]\w+)["']\s*:/g) || [])
    .map(s => s.replace(/["':]/g, ''))
    .slice(0, 20);
  const unknownImports = (unknownContent.match(/var\s+(\w+)\s*=\s*i\((\d+)\)/g) || []);

  // Score 1: Export name matching
  if (unknownExports) {
    const exportsStr = unknownExports[1];
    for (const keyword of knownPatterns.keywords) {
      if (exportsStr.toLowerCase().includes(keyword)) {
        scores.push({ type: 'export_keyword', value: 0.15 });
      }
    }
    for (const expName of knownPatterns.exportedNames) {
      if (exportsStr.includes(expName)) {
        scores.push({ type: 'export_exact', value: 0.20 });
      }
    }
  }

  // Score 2: Class name matching
  for (const className of unknownClasses) {
    for (const keyword of knownPatterns.keywords) {
      if (className.toLowerCase().includes(keyword)) {
        scores.push({ type: 'class_keyword', value: 0.12 });
      }
    }
    for (const knownClass of knownPatterns.classNames) {
      if (className === knownClass || className.includes(knownClass)) {
        scores.push({ type: 'class_exact', value: 0.25 });
      }
    }
  }

  // Score 3: Characteristic strings matching
  for (const str of unknownStrings) {
    if (knownPatterns.characteristicStrings.includes(str)) {
      scores.push({ type: 'string_exact', value: 0.18 });
    }
    for (const keyword of knownPatterns.keywords) {
      if (str.toLowerCase().includes(keyword)) {
        scores.push({ type: 'string_keyword', value: 0.10 });
      }
    }
  }

  // Score 4: Import dependency matching
  if (knownPatterns.imports.length > 0) {
    for (const import1 of unknownImports) {
      const match1 = import1.match(/i\((\d+)\)/);
      if (match1) {
        for (const imp of knownPatterns.imports) {
          if (imp.moduleId === match1[1]) {
            scores.push({ type: 'import_exact', value: 0.20 });
          }
        }
      }
    }
  }

  // Score 5: Function pattern matching
  const unknownFuncs = (unknownContent.match(/(?:function\s+|\.(\w+)\s*=\s*function|\b(\w+)\s*\()/g) || [])
    .map(f => f.replace(/function|\.|\s|=/g, ''))
    .filter(Boolean)
    .slice(0, 20);
  for (const func of unknownFuncs) {
    for (const keyword of knownPatterns.keywords) {
      if (func.toLowerCase().includes(keyword)) {
        scores.push({ type: 'function_keyword', value: 0.10 });
      }
    }
    if (knownPatterns.functionPatterns.includes(func)) {
      scores.push({ type: 'function_exact', value: 0.15 });
    }
  }

  // Calculate total score
  score = scores.reduce((sum, s) => sum + s.value, 0);
  score = Math.min(score, 1.0); // Cap at 100%

  return {
    totalScore: score,
    breakdown: scores,
    confidence: score >= 0.6 ? 'HIGH' : score >= 0.4 ? 'MEDIUM' : 'LOW',
  };
}

/**
 * Main analysis
 */
async function analyzeModulePatterns() {
  try {
    console.log('🔍 Building pattern database from known modules...\n');

    if (!fs.existsSync(BEAUTIFIED_DIR)) {
      console.error('❌ Beautified directory not found');
      process.exit(1);
    }

    // Step 1: Extract patterns from known modules
    console.log('📚 Extracting patterns from known modules...');
    const patternDatabase = {};
    let processed = 0;

    for (const [moduleId, semanticName] of Object.entries(KNOWN_MODULES)) {
      const file = path.join(BEAUTIFIED_DIR, `${moduleId}.js`);
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf-8');
        patternDatabase[semanticName] = extractModulePatterns(content, moduleId, semanticName);
        processed++;
      }
    }
    console.log(`✓ Extracted patterns from ${processed} known modules\n`);

    // Step 2: Analyze all modules
    console.log('🔎 Analyzing all 466 modules...');
    const files = fs.readdirSync(BEAUTIFIED_DIR).filter(f => f.endsWith('.js'));
    const identifications = [];
    const candidates = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const moduleId = file.replace('.js', '');

      // Skip if already known
      if (KNOWN_MODULES[moduleId]) {
        continue;
      }

      const content = fs.readFileSync(path.join(BEAUTIFIED_DIR, file), 'utf-8');
      
      // Compare against all known patterns
      const matches = [];
      for (const [semanticName, patterns] of Object.entries(patternDatabase)) {
        const similarity = calculateSimilarity(content, moduleId, patterns);
        if (similarity.totalScore > 0) {
          matches.push({
            semantic: semanticName,
            moduleId: patterns.moduleId,
            score: similarity.totalScore,
            confidence: similarity.confidence,
            breakdown: similarity.breakdown,
          });
        }
      }

      // Sort by score
      matches.sort((a, b) => b.score - a.score);

      if (matches.length > 0) {
        const topMatch = matches[0];
        if (topMatch.score >= 0.6) {
          identifications.push({
            moduleId,
            suggestedName: topMatch.semantic,
            matchedTo: topMatch.moduleId,
            score: topMatch.score,
            confidence: topMatch.confidence,
          });
        } else if (topMatch.score >= 0.4) {
          candidates.push({
            moduleId,
            suggestedName: topMatch.semantic,
            score: topMatch.score,
            confidence: topMatch.confidence,
            otherMatches: matches.slice(1, 3),
          });
        }
      }

      if ((i + 1) % 100 === 0) {
        console.log(`  [${i + 1}/${files.length}] Analyzed`);
      }
    }

    console.log(`✓ Analysis complete\n`);

    // Step 3: Generate report
    console.log('📋 Generating identification report...');
    let report = `# Module Identification Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Analysis Date: Pattern-based semantic identification\n\n`;

    report += `## Summary\n\n`;
    report += `- **Total Modules Analyzed:** ${files.length}\n`;
    report += `- **Known Modules:** ${Object.keys(KNOWN_MODULES).length}\n`;
    report += `- **High-Confidence Identifications:** ${identifications.length}\n`;
    report += `- **Medium-Confidence Candidates:** ${candidates.length}\n`;
    report += `- **Unidentified Modules:** ${files.length - Object.keys(KNOWN_MODULES).length - identifications.length - candidates.length}\n\n`;

    report += `## High-Confidence Identifications (${identifications.length})\n\n`;
    report += `These modules have 60%+ pattern similarity to known modules:\n\n`;
    report += `| Module ID | Suggested Name | Score | Confidence |\n`;
    report += `|-----------|----------------|-------|------------|\n`;
    for (const id of identifications.sort((a, b) => b.score - a.score)) {
      report += `| ${id.moduleId} | ${id.suggestedName} | ${(id.score * 100).toFixed(0)}% | ${id.confidence} |\n`;
    }
    report += '\n';

    report += `## Medium-Confidence Candidates (${candidates.length})\n\n`;
    report += `These modules have 40-60% pattern similarity - review recommended:\n\n`;
    report += `| Module ID | Top Match | Score | Other Options |\n`;
    report += `|-----------|-----------|-------|---------------|\n`;
    for (const cand of candidates.sort((a, b) => b.score - a.score).slice(0, 20)) {
      const others = cand.otherMatches ? cand.otherMatches.map(m => `${m.semantic} (${(m.score*100).toFixed(0)}%)`).join(', ') : 'None';
      report += `| ${cand.moduleId} | ${cand.suggestedName} | ${(cand.score * 100).toFixed(0)}% | ${others} |\n`;
    }
    if (candidates.length > 20) {
      report += `\n... and ${candidates.length - 20} more candidates\n`;
    }
    report += '\n';

    report += `## Statistics\n\n`;
    report += `- **Pattern Database:** ${Object.keys(patternDatabase).length} known patterns\n`;
    report += `- **High-Confidence Rate:** ${(identifications.length / (files.length - Object.keys(KNOWN_MODULES).length) * 100).toFixed(1)}%\n`;
    report += `- **Average Highest Match Score:** ${(identifications.reduce((sum, id) => sum + id.score, 0) / identifications.length * 100).toFixed(0)}%\n`;

    fs.writeFileSync(IDENTIFICATION_REPORT, report);
    console.log(`✓ Report saved to ${IDENTIFICATION_REPORT}\n`);

    // Save analysis data
    const analysisData = {
      timestamp: new Date().toISOString(),
      summary: {
        totalModules: files.length,
        knownModules: Object.keys(KNOWN_MODULES).length,
        highConfidenceIdentifications: identifications.length,
        mediumConfidenceCandidates: candidates.length,
      },
      highConfidenceIdentifications: identifications,
      mediumConfidenceCandidates: candidates,
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysisData, null, 2));
    console.log(`✓ Data saved to ${OUTPUT_FILE}\n`);

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('📊 PATTERN ANALYSIS COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`Known Modules: ${Object.keys(KNOWN_MODULES).length}`);
    console.log(`High-Confidence Identifications: ${identifications.length}`);
    console.log(`Medium-Confidence Candidates: ${candidates.length}`);
    console.log(`Unidentified Remaining: ${files.length - Object.keys(KNOWN_MODULES).length - identifications.length - candidates.length}`);
    console.log(`\n✅ Ready for next phase: Apply high-confidence identifications`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

analyzeModulePatterns();
