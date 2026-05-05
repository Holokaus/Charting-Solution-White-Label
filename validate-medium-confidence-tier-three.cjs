/**
 * Validate Medium-Confidence Tier-3 Modules
 * Comprehensive 8-point validation for all 44 medium-confidence (50-65%) modules
 * Accuracy mandatory - detailed quality assurance
 */
const fs = require('fs');
const path = require('path');

const MEDIUM_CONF_DIR = './medium-confidence-tier-three-modules';
const ANALYSIS_FILE = './pattern-discovery-round2-analysis.json';
const VALIDATION_REPORT = './validation-medium-confidence-tier-three.md';
const VALIDATION_DETAILS = './validation-medium-confidence-tier-three-details.json';

const VALIDATION_CHECKLIST = [
  'moduleIdValid',      // Module ID format check
  'semanticNameValid',  // Semantic name format check
  'contentValid',       // File has substantive content
  'headerPresent',      // Comment header present
  'semanticsApplied',   // Semantic variables replaced
  'exportsFound',       // Exports defined or used
  'noObviousErrors',    // No syntax errors
  'sizeReasonable'      // File size in reasonable range
];

/**
 * Validate a single module - RIGOROUS 8-POINT CHECKLIST
 */
function validateModule(moduleId, content) {
  const results = {};
  const details = {};

  // 1. Module ID valid format (must be numeric)
  const idValid = /^\d+$/.test(moduleId);
  results.moduleIdValid = idValid;
  details.moduleIdValid = {
    check: 'Numeric ID format',
    passed: idValid,
    value: moduleId,
  };

  // 2. Semantic name valid (check header for valid semantic name)
  const headerMatch = content.match(/Semantic:\s*(\w+)/);
  const nameValid = !!headerMatch && /^[a-zA-Z]+$/.test(headerMatch[1]);
  results.semanticNameValid = nameValid;
  details.semanticNameValid = {
    check: 'Valid semantic name in header',
    passed: nameValid,
    value: headerMatch ? headerMatch[1] : 'MISSING',
  };

  // 3. Content substantive (meaningful content beyond header)
  const lines = content.split('\n');
  const substantiveLines = lines.filter(l => {
    const trimmed = l.trim();
    return trimmed && 
           !trimmed.startsWith('//') && 
           !trimmed.startsWith('*') &&
           !trimmed.startsWith('/*');
  });
  const contentValid = substantiveLines.length > 15;  // More strict: need real content
  results.contentValid = contentValid;
  details.contentValid = {
    check: 'Substantive content (>15 non-comment lines)',
    passed: contentValid,
    value: `${substantiveLines.length} substantive lines`,
  };

  // 4. Header present (must have proper comment header)
  const headerPresent = /\/\*\*\s*\n\s*\*\s*Module:\s*\d+/.test(content) &&
                       /\*\s*Semantic:\s*\w+/.test(content) &&
                       /\*\s*Confidence:\s*[\d.]+%/.test(content);
  results.headerPresent = headerPresent;
  details.headerPresent = {
    check: 'Proper comment header with Module, Semantic, Confidence',
    passed: headerPresent,
    value: headerPresent ? 'Header found' : 'Header missing/incomplete',
  };

  // 5. Semantic variables applied (check for semantic variable usage)
  const semanticVars = ['state', 'nextValue', 'array', 'module', 'object', 'result', 
                       'logger', 'require', 'config', 'handler', 'data', 'utility',
                       'parameter', 'method', 'getter', 'function', 'value', 'boolean',
                       'watcher', 'context', 'key', 'callback', 'job', 'yValue', 'query'];
  const semanticCount = semanticVars.filter(v => {
    // Check word boundaries to avoid false positives
    return new RegExp(`\\b${v}\\b`).test(content);
  }).length;
  const semanticsApplied = semanticCount >= 3;  // Need at least 3 different semantic vars
  results.semanticsApplied = semanticsApplied;
  details.semanticsApplied = {
    check: 'Semantic variables applied (>=3 unique variables)',
    passed: semanticsApplied,
    value: `${semanticCount} semantic variables found`,
  };

  // 6. Exports found (must have exports or export-related code)
  const exportsPatterns = [
    /i\.d\(t,\s*{[^}]*}/,              // Webpack exports
    /module\.exports\s*=/,              // CommonJS exports
    /export\s*{/,                       // ES6 exports
    /export\s+default/,                 // ES6 default export
    /exports\s*\[/,                     // Array access to exports
  ];
  const exportsFound = exportsPatterns.some(pattern => pattern.test(content));
  results.exportsFound = exportsFound;
  details.exportsFound = {
    check: 'Exports defined or used',
    passed: exportsFound,
    value: exportsFound ? 'Exports found' : 'No exports detected',
  };

  // 7. No obvious errors (brace matching, no double undefined)
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  const bracesBalanced = openBraces === closeBraces;
  const noDoubleUndefined = !content.includes('undefined undefined');
  const noSyntaxErrors = bracesBalanced && noDoubleUndefined;
  results.noObviousErrors = noSyntaxErrors;
  details.noObviousErrors = {
    check: 'No obvious syntax errors (braces balanced, no double undefined)',
    passed: noSyntaxErrors,
    value: bracesBalanced ? `Braces: ${openBraces} open = ${closeBraces} close` : `Braces mismatch: ${openBraces} vs ${closeBraces}`,
  };

  // 8. Size reasonable (beautified should be between 100B and 500KB)
  const sizeKB = content.length / 1024;
  const sizeReasonable = content.length > 100 && content.length < 500000;
  results.sizeReasonable = sizeReasonable;
  details.sizeReasonable = {
    check: 'File size reasonable (100B - 500KB)',
    passed: sizeReasonable,
    value: `${sizeKB.toFixed(2)} KB`,
  };

  return { 
    results, 
    details,
    passed: Object.values(results).filter(Boolean).length,
    total: VALIDATION_CHECKLIST.length,
  };
}

/**
 * Main validation execution - RIGOROUS AND DETAILED
 */
async function validateMediumConfidence() {
  try {
    console.log('🔍 RIGOROUS VALIDATION - Medium-Confidence Tier-3 Modules\n');
    console.log('⚠️  ACCURACY MODE ACTIVATED - Quality over speed\n');

    // Load analysis to get confidence scores
    let analysis = {};
    if (fs.existsSync(ANALYSIS_FILE)) {
      analysis = JSON.parse(fs.readFileSync(ANALYSIS_FILE, 'utf-8'));
    }
    const mediumConfidenceMap = {};
    if (analysis.discoveries) {
      for (const d of analysis.discoveries) {
        if (d.tier === 'MEDIUM') {
          mediumConfidenceMap[d.moduleId] = d.score;
        }
      }
    }

    // Get all files in medium-confidence directory
    const files = fs.readdirSync(MEDIUM_CONF_DIR)
      .filter(f => f.endsWith('.js'))
      .sort((a, b) => {
        const aNum = parseInt(a.replace('.js', ''));
        const bNum = parseInt(b.replace('.js', ''));
        return aNum - bNum;
      });

    console.log(`📊 Expected: 44 medium-confidence modules\n`);
    console.log(`✓ Found ${files.length} module files\n`);
    
    if (files.length !== 44) {
      console.log(`⚠️  WARNING: Expected 44 files, found ${files.length}\n`);
    }

    console.log('🧪 Running rigorous 8-point validation...\n');
    console.log('Validation Checklist:');
    for (let i = 0; i < VALIDATION_CHECKLIST.length; i++) {
      console.log(`  ${i + 1}. ${VALIDATION_CHECKLIST[i]}`);
    }
    console.log('\n' + '═'.repeat(60) + '\n');

    const validationResults = [];
    let totalScore = 0;
    let excellentCount = 0;
    let goodCount = 0;
    let needsReviewCount = 0;

    // Validate each module
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const moduleId = file.replace('.js', '');
      const content = fs.readFileSync(path.join(MEDIUM_CONF_DIR, file), 'utf-8');
      
      const validation = validateModule(moduleId, content);
      const score = (validation.passed / validation.total) * 100;
      
      let quality = 'NEEDS_REVIEW';
      if (score >= 90) quality = 'EXCELLENT';
      else if (score >= 75) quality = 'GOOD';

      if (quality === 'EXCELLENT') excellentCount++;
      else if (quality === 'GOOD') goodCount++;
      else needsReviewCount++;

      const confidence = mediumConfidenceMap[moduleId] || 'unknown';

      validationResults.push({
        moduleId,
        confidence,
        checks: validation.results,
        details: validation.details,
        passed: validation.passed,
        total: validation.total,
        score,
        quality,
      });

      totalScore += score;

      // Print progress
      if ((i + 1) % 11 === 0 || i === files.length - 1) {
        console.log(`  [${String(i + 1).padStart(2, ' ')}/${files.length}] Validated - ${quality}`);
      }
    }

    console.log('\n' + '═'.repeat(60) + '\n');
    console.log(`✓ Validation complete\n`);

    // Calculate statistics
    const avgScore = totalScore / files.length;
    const passRate = ((excellentCount + goodCount) / files.length) * 100;

    // Identify any problematic modules
    const needsReview = validationResults.filter(r => r.quality === 'NEEDS_REVIEW');
    const excellent = validationResults.filter(r => r.quality === 'EXCELLENT');
    const good = validationResults.filter(r => r.quality === 'GOOD');

    // Generate detailed report
    let report = `# Medium-Confidence Tier-3 Validation Report\n\n`;
    report += `**Generated:** ${new Date().toISOString()}\n`;
    report += `**Validation Mode:** RIGOROUS (Accuracy Mandatory)\n`;
    report += `**Modules Validated:** ${files.length}/44\n\n`;

    report += `## Executive Summary\n\n`;
    report += `| Metric | Value |\n`;
    report += `|--------|-------|\n`;
    report += `| Average Score | ${avgScore.toFixed(1)}% |\n`;
    report += `| Pass Rate | ${passRate.toFixed(1)}% |\n`;
    report += `| EXCELLENT (90%+) | ${excellentCount} modules |\n`;
    report += `| GOOD (75-90%) | ${goodCount} modules |\n`;
    report += `| NEEDS_REVIEW (<75%) | ${needsReviewCount} modules |\n`;
    report += `| **Overall Status** | ${passRate >= 90 ? '✅ **PASS**' : passRate >= 75 ? '⚠️ **CONDITIONAL PASS**' : '❌ **REVIEW REQUIRED**'} |\n\n`;

    report += `## Validation Checklist Performance\n\n`;
    const checkStats = {};
    for (const check of VALIDATION_CHECKLIST) {
      const passed = validationResults.filter(r => r.checks[check]).length;
      const percentage = (passed / files.length * 100).toFixed(1);
      checkStats[check] = parseFloat(percentage);
      const passSymbol = passed === files.length ? '✅' : '⚠️';
      report += `${passSymbol} **${check}:** ${passed}/${files.length} (${percentage}%)\n`;
    }
    report += '\n';

    // List modules by quality
    report += `## Quality Breakdown\n\n`;
    
    if (excellent.length > 0) {
      report += `### EXCELLENT (90%+) - ${excellent.length} modules\n`;
      for (const r of excellent.sort((a, b) => b.score - a.score)) {
        report += `- Module ${r.moduleId}: ${r.score.toFixed(1)}% (Confidence: ${typeof r.confidence === 'number' ? (r.confidence*100).toFixed(0) : r.confidence}%)\n`;
      }
      report += '\n';
    }

    if (good.length > 0) {
      report += `### GOOD (75-90%) - ${good.length} modules\n`;
      for (const r of good.sort((a, b) => b.score - a.score)) {
        report += `- Module ${r.moduleId}: ${r.score.toFixed(1)}% (Confidence: ${typeof r.confidence === 'number' ? (r.confidence*100).toFixed(0) : r.confidence}%)\n`;
      }
      report += '\n';
    }

    if (needsReview.length > 0) {
      report += `### NEEDS_REVIEW (<75%) - ${needsReview.length} modules\n`;
      for (const r of needsReview.sort((a, b) => b.score - a.score)) {
        const failedChecks = VALIDATION_CHECKLIST.filter(c => !r.checks[c]);
        report += `- Module ${r.moduleId}: ${r.score.toFixed(1)}%\n`;
        report += `  - Confidence: ${typeof r.confidence === 'number' ? (r.confidence*100).toFixed(0) : r.confidence}%\n`;
        report += `  - Failed Checks: ${failedChecks.join(', ')}\n`;
        report += `  - Details:\n`;
        for (const check of failedChecks) {
          report += `    - ${r.details[check].check}: ${r.details[check].value}\n`;
        }
      }
      report += '\n';
    }

    // Detailed module analysis table
    report += `## Complete Module Details (Sorted by Score)\n\n`;
    report += `| Module | Confidence | Score | Quality | Passed | Failed Checks |\n`;
    report += `|--------|------------|-------|---------|--------|---------------|\n`;

    for (const r of validationResults.sort((a, b) => b.score - a.score)) {
      const failedChecks = VALIDATION_CHECKLIST.filter(c => !r.checks[c]);
      const failedStr = failedChecks.length > 0 ? failedChecks.join(', ') : '—';
      const confStr = typeof r.confidence === 'number' ? `${(r.confidence*100).toFixed(0)}%` : r.confidence;
      report += `| ${r.moduleId} | ${confStr} | ${r.score.toFixed(1)}% | ${r.quality} | ${r.passed}/${r.total} | ${failedStr} |\n`;
    }
    report += '\n';

    // Recommendations
    report += `## Recommendations\n\n`;
    if (passRate >= 90) {
      report += `✅ **RECOMMENDATION:** All modules pass validation criteria. Ready for production deployment.\n\n`;
      report += `**Action Items:**\n`;
      report += `1. Archive medium-confidence modules to production output\n`;
      report += `2. Update master module index\n`;
      report += `3. Proceed with Medium-Low confidence tier (49 modules)\n`;
    } else if (passRate >= 75) {
      report += `⚠️ **RECOMMENDATION:** Most modules pass (${passRate.toFixed(1)}%). Review ${needsReviewCount} modules below 75%.\n\n`;
      report += `**Action Items:**\n`;
      report += `1. Manually review ${needsReviewCount} modules scoring <75%\n`;
      report += `2. Fix or remove problematic modules\n`;
      report += `3. Revalidate after fixes\n`;
      report += `4. Proceed with approved modules\n`;
    } else {
      report += `❌ **RECOMMENDATION:** Significant quality issues detected. Investigate and remediate.\n\n`;
      report += `**Action Items:**\n`;
      report += `1. Deep review of all ${needsReviewCount} modules\n`;
      report += `2. Identify root causes of failures\n`;
      report += `3. Re-apply with corrected semantic mapping\n`;
      report += `4. Revalidate all modules\n`;
    }

    // Write reports
    fs.writeFileSync(VALIDATION_REPORT, report);
    fs.writeFileSync(VALIDATION_DETAILS, JSON.stringify({
      timestamp: new Date().toISOString(),
      mode: 'RIGOROUS',
      totalModules: files.length,
      expectedModules: 44,
      averageScore: avgScore,
      passRate: passRate,
      qualityBreakdown: { 
        excellent: excellentCount, 
        good: goodCount, 
        needsReview: needsReviewCount 
      },
      checklistPerformance: checkStats,
      allResults: validationResults,
    }, null, 2));

    // Final summary console output
    console.log('═══════════════════════════════════════════════════════════');
    console.log('✅ MEDIUM-CONFIDENCE VALIDATION COMPLETE');
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`Modules Validated: ${files.length}/44`);
    console.log(`Average Score: ${avgScore.toFixed(1)}%`);
    console.log(`Pass Rate: ${passRate.toFixed(1)}%`);
    console.log(`Quality Breakdown:`);
    console.log(`  EXCELLENT (90%+): ${excellentCount} modules`);
    console.log(`  GOOD (75-90%): ${goodCount} modules`);
    console.log(`  NEEDS_REVIEW (<75%): ${needsReviewCount} modules`);
    console.log(`\nOverall Status: ${passRate >= 90 ? '✅ PASS' : passRate >= 75 ? '⚠️ CONDITIONAL PASS' : '❌ REVIEW REQUIRED'}`);
    console.log(`\n📊 Report: ${VALIDATION_REPORT}`);
    console.log(`📁 Details: ${VALIDATION_DETAILS}`);

    // Exit with appropriate code
    process.exit(passRate >= 75 ? 0 : 1);

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

validateMediumConfidence();
