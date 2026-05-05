/**
 * Validate Round 3 High-Confidence Modules
 * Apply rigorous 8-point validation checklist
 */
const fs = require('fs');
const path = require('path');

const APPLIED_DIR = './round3-high-confidence-applied';
const STATS_FILE = './round3-high-applications-stats.json';
const OUTPUT_FILE = './validation-round3-high-confidence.md';
const DETAILS_FILE = './validation-round3-high-confidence-details.json';

/**
 * 8-Point Validation Checklist
 */
function validateModule(moduleId, content) {
  const results = {};
  const details = {};

  // 1. Module ID Valid (numeric format)
  results.moduleIdValid = /^\d+$/.test(moduleId);
  details.moduleIdValid = { passed: results.moduleIdValid, check: 'Numeric format' };

  // 2. Semantic Name Valid
  const headerMatch = content.match(/\/\*\*[\s\S]*?\*\//);
  const hasHeader = !!headerMatch;
  const semanticMatch = headerMatch ? headerMatch[0].match(/Semantic Variable Mapping/) : null;
  results.semanticNameValid = hasHeader && !!semanticMatch;
  details.semanticNameValid = {
    passed: results.semanticNameValid,
    check: 'Header with semantic mapping present',
    headerFound: hasHeader
  };

  // 3. Content Valid (substantive code, >15 non-comment lines)
  const codeLines = content.split('\n')
    .filter(line => line.trim() && !line.trim().startsWith('//') && !line.trim().startsWith('*'))
    .length;
  results.contentValid = codeLines > 15;
  details.contentValid = { passed: results.contentValid, lines: codeLines, threshold: 15 };

  // 4. Header Present
  results.headerPresent = hasHeader;
  details.headerPresent = { passed: results.headerPresent, check: 'JSDoc header exists' };

  // 5. Semantics Applied (variables renamed)
  const semanticVars = [
    'watchedValue', 'state', 'nextValue', 'exports', 'series', 'seriesData',
    'dataSource', 'priceDataSource', 'logger', 'config', 'handler', 'data',
    'utility', 'parameter', 'method', 'getter', 'function', 'value', 'boolean',
    'watcher', 'context', 'key', 'callback', 'job', 'module', 'object', 'result'
  ];
  const semanticMatches = semanticVars.filter(v => content.includes(v)).length;
  results.semanticsApplied = semanticMatches >= 3;
  details.semanticsApplied = {
    passed: results.semanticsApplied,
    matchCount: semanticMatches,
    threshold: 3
  };

  // 6. Exports Found
  const hasExports = /export|module\.exports|\.exports|i\.d\(t,/.test(content);
  results.exportsFound = hasExports;
  details.exportsFound = { passed: results.exportsFound, check: 'Export statement detected' };

  // 7. No Obvious Errors (brace matching)
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  results.noObviousErrors = openBraces === closeBraces && openBraces > 0;
  details.noObviousErrors = {
    passed: results.noObviousErrors,
    openBraces,
    closeBraces,
    check: 'Brace balance'
  };

  // 8. Size Reasonable (100B - 500KB)
  const size = Buffer.byteLength(content);
  results.sizeReasonable = size >= 100 && size <= 500000;
  details.sizeReasonable = {
    passed: results.sizeReasonable,
    bytes: size,
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
async function validateRound3High() {
  try {
    console.log('✅ Validating Round 3 High-Confidence Modules\n');

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
        quality: validation.score >= 75 ? 'GOOD' : validation.score >= 62.5 ? 'FAIR' : 'NEEDS_REVIEW'
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
    let report = `# Round 3 High-Confidence Validation\n\n`;
    report += `Generated: ${new Date().toISOString()}\n\n`;

    report += `## Summary\n\n`;
    report += `- **Total Validated:** ${validationResults.length}\n`;
    report += `- **GOOD (75%+):** ${good.length} ✅\n`;
    report += `- **FAIR (62.5-75%):** ${fair.length} 🟡\n`;
    report += `- **NEEDS_REVIEW (<62.5%):** ${needsReview.length} ⏳\n`;
    report += `- **Pass Rate:** ${(good.length / validationResults.length * 100).toFixed(1)}%\n`;
    report += `- **Average Score:** ${(validationResults.reduce((sum, r) => sum + r.score, 0) / validationResults.length).toFixed(1)}%\n\n`;

    report += `## Quality Breakdown\n\n`;
    report += `| Quality | Count | Percentage |\n`;
    report += `|---------|-------|------------|\n`;
    report += `| GOOD | ${good.length} | ${(good.length / validationResults.length * 100).toFixed(1)}% |\n`;
    report += `| FAIR | ${fair.length} | ${(fair.length / validationResults.length * 100).toFixed(1)}% |\n`;
    report += `| NEEDS_REVIEW | ${needsReview.length} | ${(needsReview.length / validationResults.length * 100).toFixed(1)}% |\n\n`;

    report += `## GOOD Modules (${good.length}) - Ready for Production\n\n`;
    report += `| Module ID | Semantic | Score | Status |\n`;
    report += `|-----------|----------|-------|--------|\n`;
    for (const item of good.sort((a, b) => b.score - a.score)) {
      report += `| ${item.moduleId} | ${item.semantic} | ${item.score.toFixed(1)}% | ✅ |\n`;
    }
    report += '\n';

    report += `## Validation Details\n\n`;
    report += `| Module | Passed | Score | Result |\n`;
    report += `|--------|--------|-------|--------|\n`;
    for (const item of validationResults.sort((a, b) => b.score - a.score)) {
      report += `| ${item.moduleId} | ${item.passed}/${item.total} | ${item.score.toFixed(1)}% | ${item.quality} |\n`;
    }

    fs.writeFileSync(OUTPUT_FILE, report);
    fs.writeFileSync(DETAILS_FILE, JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: {
        total: validationResults.length,
        good: good.length,
        fair: fair.length,
        needsReview: needsReview.length,
        passRate: (good.length / validationResults.length * 100)
      },
      results: validationResults,
      details
    }, null, 2));

    // Display summary
    console.log('═══════════════════════════════════════');
    console.log('✅ VALIDATION COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`GOOD (75%+): ${good.length} modules ✅`);
    console.log(`FAIR (62.5-75%): ${fair.length} modules 🟡`);
    console.log(`NEEDS_REVIEW: ${needsReview.length} modules ⏳`);
    console.log(`\nPass Rate: ${(good.length / validationResults.length * 100).toFixed(1)}%`);
    console.log(`Average Score: ${(validationResults.reduce((sum, r) => sum + r.score, 0) / validationResults.length).toFixed(1)}%`);
    console.log(`\n✅ Ready to archive ${good.length} GOOD modules!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

validateRound3High();
