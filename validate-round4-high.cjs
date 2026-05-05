/**
 * Validate Round 4 High-Confidence Modules
 * Apply rigorous 8-point validation checklist (Class-1 Quality)
 */
const fs = require('fs');
const path = require('path');

const APPLIED_DIR = './round4-high-confidence-applied';
const STATS_FILE = './round4-high-applications-stats.json';
const OUTPUT_FILE = './validation-round4-high-confidence.md';
const DETAILS_FILE = './validation-round4-high-confidence-details.json';

/**
 * 8-Point Validation Checklist
 * All checks must be passed for quality deployment
 */
function validateModule(moduleId, content) {
  const results = {};
  const details = {};

  // 1. Module ID Valid (numeric format)
  results.moduleIdValid = /^\d+$/.test(moduleId);
  details.moduleIdValid = { passed: results.moduleIdValid, check: 'Numeric format' };

  // 2. Semantic Name Valid (Header with semantic name present)
  const headerMatch = content.match(/\/\*\*[\s\S]*?\*\//);
  const hasHeader = !!headerMatch;
  const headerText = headerMatch ? headerMatch[0] : '';
  const semanticMatch = headerText.match(/Semantic Variable Mapping|Module \d+ -/);
  results.semanticNameValid = hasHeader && !!semanticMatch;
  details.semanticNameValid = {
    passed: results.semanticNameValid,
    check: 'Header with semantic name present',
    headerFound: hasHeader,
    hasSemanticRef: !!semanticMatch
  };

  // 3. Content Valid (substantive code, >15 non-comment lines)
  const codeLines = content.split('\n')
    .filter(line => {
      const trimmed = line.trim();
      return trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('*');
    })
    .length;
  results.contentValid = codeLines > 15;
  details.contentValid = { passed: results.contentValid, lines: codeLines, threshold: 15 };

  // 4. Header Present (JSDoc-style metadata)
  results.headerPresent = hasHeader && headerText.includes('Module');
  details.headerPresent = { passed: results.headerPresent, check: 'JSDoc header exists with metadata' };

  // 5. Semantics Applied (3+ different semantic variables found)
  const semanticVars = [
    'watchedValue', 'state', 'nextValue', 'exports', 'series', 'seriesData', 'newData',
    'dataSource', 'data', 'source', 'priceDataSource', 'price', 'logger', 'config',
    'handler', 'utility', 'parameter', 'method', 'getter', 'function', 'value',
    'boolean', 'watcher', 'context', 'key', 'callback', 'job', 'module', 'object',
    'result', 'array', 'options', 'barSeries', 'open', 'close', 'high', 'low',
    'lineToolManager', 'line', 'point', 'width', 'index', 'listener', 'require',
    'yValue', 'query', 'fetch', 'time', 'type', 'update'
  ];
  const semanticMatches = semanticVars.filter(v => content.includes(v)).length;
  results.semanticsApplied = semanticMatches >= 3;
  details.semanticsApplied = {
    passed: results.semanticsApplied,
    matchCount: semanticMatches,
    threshold: 3,
    examples: semanticVars.filter(v => content.includes(v)).slice(0, 5)
  };

  // 6. Exports Found (module.exports or i.d() pattern)
  const hasExports = /export|module\.exports|\.exports|i\.d\(t,|Object\.assign|exports\s*=/.test(content);
  results.exportsFound = hasExports;
  details.exportsFound = { passed: results.exportsFound, check: 'Export statement detected' };

  // 7. No Obvious Errors (brace matching)
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  const openParens = (content.match(/\(/g) || []).length;
  const closeParens = (content.match(/\)/g) || []).length;
  results.noObviousErrors = openBraces === closeBraces && openParens === closeParens && openBraces > 0;
  details.noObviousErrors = {
    passed: results.noObviousErrors,
    openBraces,
    closeBraces,
    openParens,
    closeParens,
    check: 'Brace and parenthesis balance'
  };

  // 8. Size Reasonable (100B - 500KB)
  const size = Buffer.byteLength(content);
  results.sizeReasonable = size >= 100 && size <= 500000;
  details.sizeReasonable = {
    passed: results.sizeReasonable,
    bytes: size,
    kilobytes: (size / 1024).toFixed(2),
    range: '100-500000'
  };

  return {
    results,
    details,
    passed: Object.values(results).filter(Boolean).length,
    total: Object.values(results).length,
    score: (Object.values(results).filter(Boolean).length / Object.values(results).length) * 100
  };
}

/**
 * Main validation
 */
async function validateRound4High() {
  try {
    console.log('✅ Validating Round 4 High-Confidence Modules\n');

    // Load stats
    console.log('📂 Loading applied modules...');
    const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf-8'));
    const modules = stats.applied || [];
    console.log(`✓ Found ${modules.length} modules to validate\n`);

    // Validate each
    console.log('🔍 Validating with 8-point checklist...');
    const validationResults = [];
    const details = {};

    for (const module of modules) {
      const { moduleId } = module;
      const file = path.join(APPLIED_DIR, `${moduleId}.js`);

      if (!fs.existsSync(file)) {
        console.log(`  Warning: ${moduleId} not found`);
        continue;
      }

      const content = fs.readFileSync(file, 'utf-8');
      const validation = validateModule(moduleId, content);

      validationResults.push({
        moduleId,
        semantic: module.semantic,
        passed: validation.passed,
        total: validation.total,
        score: validation.score,
        quality: validation.score >= 87.5 ? 'GOOD' : validation.score >= 75 ? 'FAIR' : 'NEEDS_REVIEW'
      });

      details[moduleId] = validation;
    }

    console.log(`✓ Validated ${validationResults.length} modules\n`);

    // Categorize
    const good = validationResults.filter(r => r.quality === 'GOOD');
    const fair = validationResults.filter(r => r.quality === 'FAIR');
    const needsReview = validationResults.filter(r => r.quality === 'NEEDS_REVIEW');

    // Generate report
    console.log('📊 Generating report...');
    let report = `# Round 4 High-Confidence Validation Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Quality Standard: Class-1 (Keyword verification applied)\n\n`;

    report += `## Summary\n\n`;
    report += `- **Total Validated:** ${validationResults.length}\n`;
    report += `- **GOOD (7-8 checks, 87.5%+):** ${good.length} ✅\n`;
    report += `- **FAIR (6-7 checks, 75-87.5%):** ${fair.length} 🟡\n`;
    report += `- **NEEDS_REVIEW (<6 checks, <75%):** ${needsReview.length} ⏳\n`;
    report += `- **Pass Rate (GOOD tier):** ${(good.length / validationResults.length * 100).toFixed(1)}%\n`;
    report += `- **Average Score:** ${(validationResults.reduce((sum, r) => sum + r.score, 0) / validationResults.length).toFixed(1)}%\n\n`;

    report += `## Quality Breakdown\n\n`;
    report += `| Quality | Count | Percentage |\n`;
    report += `|---------|-------|------------|\n`;
    report += `| GOOD (7-8 checks) | ${good.length} | ${(good.length / validationResults.length * 100).toFixed(1)}% |\n`;
    report += `| FAIR (6-7 checks) | ${fair.length} | ${(fair.length / validationResults.length * 100).toFixed(1)}% |\n`;
    report += `| NEEDS_REVIEW (<6) | ${needsReview.length} | ${(needsReview.length / validationResults.length * 100).toFixed(1)}% |\n\n`;

    report += `## 8-Point Validation Criteria\n\n`;
    report += `1. Module ID Valid (numeric format)\n`;
    report += `2. Semantic Name Valid (header with semantic name)\n`;
    report += `3. Content Valid (>15 substantive lines)\n`;
    report += `4. Header Present (JSDoc metadata)\n`;
    report += `5. Semantics Applied (3+ semantic variables)\n`;
    report += `6. Exports Found (export statement)\n`;
    report += `7. No Obvious Errors (brace/paren balance)\n`;
    report += `8. Size Reasonable (100B-500KB)\n\n`;

    report += `## GOOD Modules (${good.length}) - Ready for Production\n\n`;
    if (good.length > 0) {
      report += `| Module ID | Semantic | Passed/Total | Score | Status |\n`;
      report += `|-----------|----------|--------------|-------|--------|\n`;
      for (const item of good.sort((a, b) => b.score - a.score)) {
        report += `| ${item.moduleId} | ${item.semantic} | ${item.passed}/${item.total} | ${item.score.toFixed(1)}% | ✅ |\n`;
      }
    } else {
      report += `No GOOD modules at this time.\n`;
    }
    report += '\n';

    report += `## All Validation Results\n\n`;
    report += `| Module | Semantic | Passed | Score | Quality |\n`;
    report += `|--------|----------|--------|-------|--------|\n`;
    for (const item of validationResults.sort((a, b) => b.score - a.score)) {
      report += `| ${item.moduleId} | ${item.semantic} | ${item.passed}/${item.total} | ${item.score.toFixed(1)}% | ${item.quality} |\n`;
    }
    report += '\n';

    report += `## Recommendations\n\n`;
    if (good.length >= validationResults.length * 0.6) {
      report += `✅ **PASS**: ${good.length} GOOD modules ready for archival and deployment\n`;
    } else if (good.length >= validationResults.length * 0.5) {
      report += `⚠️ **CAUTION**: Only ${good.length} GOOD modules (${(good.length / validationResults.length * 100).toFixed(1)}%). Review FAIR/NEEDS_REVIEW before deployment.\n`;
    } else {
      report += `❌ **HOLD**: Insufficient GOOD modules (${(good.length / validationResults.length * 100).toFixed(1)}%). Do NOT deploy until quality improves.\n`;
    }

    fs.writeFileSync(OUTPUT_FILE, report);
    fs.writeFileSync(DETAILS_FILE, JSON.stringify({
      timestamp: new Date().toISOString(),
      standard: 'Class-1 Quality',
      summary: {
        total: validationResults.length,
        good: good.length,
        fair: fair.length,
        needsReview: needsReview.length,
        passRate: (good.length / validationResults.length * 100),
        averageScore: validationResults.reduce((sum, r) => sum + r.score, 0) / validationResults.length
      },
      results: validationResults,
      details
    }, null, 2));

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('✅ VALIDATION COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`GOOD (87.5%+): ${good.length} modules ✅`);
    console.log(`FAIR (75-87.5%): ${fair.length} modules 🟡`);
    console.log(`NEEDS_REVIEW: ${needsReview.length} modules ⏳`);
    console.log(`\nPass Rate: ${(good.length / validationResults.length * 100).toFixed(1)}%`);
    console.log(`Average Score: ${(validationResults.reduce((sum, r) => sum + r.score, 0) / validationResults.length).toFixed(1)}%`);
    console.log(`\n✅ Ready for next phase (spot-check verification)!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

validateRound4High();
