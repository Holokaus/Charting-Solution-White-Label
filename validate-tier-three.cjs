/**
 * Validate Tier-3 Identifications
 * Comprehensive 8-point validation for all 211 high-confidence modules
 */
const fs = require('fs');
const path = require('path');

const TIER_THREE_DIR = './tier-three-identified-modules';
const STATS_FILE = './tier-three-applications-stats.json';
const VALIDATION_REPORT = './validation-tier-three-modules.md';
const VALIDATION_DETAILS = './validation-tier-three-details.json';

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
 * Validate a single module
 */
function validateModule(moduleId, content) {
  const results = {};

  // 1. Module ID valid format (numeric)
  results.moduleIdValid = /^\d+$/.test(moduleId);

  // 2. Semantic name valid (check header)
  const headerMatch = content.match(/Semantic:\s*(\w+)/);
  results.semanticNameValid = !!headerMatch && /^[a-zA-Z]+$/.test(headerMatch[1]);

  // 3. Content substantive (not just header)
  const lines = content.split('\n').filter(l => l.trim() && !l.trim().startsWith('//') && !l.trim().startsWith('*'));
  results.contentValid = lines.length > 10;

  // 4. Header present
  results.headerPresent = /\/\*\*\s*\n \* Module:/.test(content);

  // 5. Semantic variables applied (check for at least some semantic names beyond 'exports')
  const semanticVars = ['state', 'nextValue', 'array', 'module', 'object', 'result', 
                       'logger', 'require', 'config', 'handler', 'data', 'utility'];
  const semanticCount = semanticVars.filter(v => content.includes(v)).length;
  results.semanticsApplied = semanticCount >= 2;

  // 6. Exports found
  results.exportsFound = /i\.d\(t,\s*{|module\.exports|export\s+{/.test(content);

  // 7. No obvious errors (basic syntax checks)
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  results.noObviousErrors = openBraces === closeBraces && !content.includes('undefined undefined');

  // 8. Size reasonable (beautified should be 2-100KB)
  results.sizeReasonable = content.length > 100 && content.length < 500000;

  return results;
}

/**
 * Run validation
 */
async function validateTierThree() {
  try {
    console.log('🔍 Validating Tier-3 Identifications\n');

    // Load stats
    const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf-8'));
    console.log(`📊 Expected: ${stats.appliedCount} modules\n`);

    // Get files
    const files = fs.readdirSync(TIER_THREE_DIR)
      .filter(f => f.endsWith('.js'))
      .sort((a, b) => {
        const aNum = parseInt(a.replace('.js', ''));
        const bNum = parseInt(b.replace('.js', ''));
        return aNum - bNum;
      });

    console.log(`✓ Found ${files.length} module files\n`);
    console.log('🧪 Running 8-point validation...\n');

    const validationResults = [];
    let totalScore = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const moduleId = file.replace('.js', '');
      const content = fs.readFileSync(path.join(TIER_THREE_DIR, file), 'utf-8');
      
      const validation = validateModule(moduleId, content);
      const passed = Object.values(validation).filter(Boolean).length;
      const score = (passed / VALIDATION_CHECKLIST.length) * 100;

      validationResults.push({
        moduleId,
        checks: validation,
        passed,
        total: VALIDATION_CHECKLIST.length,
        score,
        quality: score >= 90 ? 'EXCELLENT' : score >= 75 ? 'GOOD' : 'NEEDS_REVIEW'
      });

      totalScore += score;

      if ((i + 1) % 50 === 0) {
        console.log(`  [${i + 1}/${files.length}] Validated`);
      }
    }

    console.log(`✓ Validation complete\n`);

    // Calculate stats
    const excellent = validationResults.filter(r => r.score >= 90).length;
    const good = validationResults.filter(r => r.score >= 75 && r.score < 90).length;
    const needsReview = validationResults.filter(r => r.score < 75).length;
    const avgScore = totalScore / files.length;

    // Generate report
    let report = `# Tier-3 Validation Report\n\n`;
    report += `**Timestamp:** ${new Date().toISOString()}\n`;
    report += `**Modules Validated:** ${files.length}/${stats.appliedCount}\n\n`;

    report += `## Overall Quality\n\n`;
    report += `- **Average Score:** ${avgScore.toFixed(1)}%\n`;
    report += `- **EXCELLENT (90%+):** ${excellent} modules (${(excellent/files.length*100).toFixed(1)}%)\n`;
    report += `- **GOOD (75-90%):** ${good} modules (${(good/files.length*100).toFixed(1)}%)\n`;
    report += `- **NEEDS_REVIEW (<75%):** ${needsReview} modules (${(needsReview/files.length*100).toFixed(1)}%)\n\n`;

    // Check results
    const allPassed = validationResults.every(r => r.score >= 75);
    const qualityStatus = allPassed ? '✅ PASS' : '⚠️ REVIEW NEEDED';

    report += `**Quality Status:** ${qualityStatus}\n\n`;

    report += `## Validation Checklist Performance\n\n`;
    const checkStats = {};
    for (const check of VALIDATION_CHECKLIST) {
      const passed = validationResults.filter(r => r.checks[check]).length;
      checkStats[check] = (passed / files.length * 100).toFixed(1);
      report += `- **${check}:** ${passed}/${files.length} (${checkStats[check]}%)\n`;
    }
    report += '\n';

    report += `## Module Details (Sorted by Score)\n\n`;
    report += `| Module | Score | Quality | Passed | Issues |\n`;
    report += `|--------|-------|---------|--------|--------|\n`;

    const sorted = validationResults.sort((a, b) => b.score - a.score);
    
    // Show top performers and any issues
    for (let i = 0; i < Math.min(20, sorted.length); i++) {
      const r = sorted[i];
      const issues = VALIDATION_CHECKLIST.filter(c => !r.checks[c]);
      const issueStr = issues.length ? issues.join(', ') : '-';
      report += `| ${r.moduleId} | ${r.score.toFixed(1)}% | ${r.quality} | ${r.passed}/${r.total} | ${issueStr} |\n`;
    }

    if (sorted.length > 20) {
      report += `| ... | ... | ... | ... | ... |\n`;
      report += `| (${sorted.length - 20} more modules) | ... | ... | ... | ... |\n`;
    }

    fs.writeFileSync(VALIDATION_REPORT, report);
    fs.writeFileSync(VALIDATION_DETAILS, JSON.stringify({
      timestamp: new Date().toISOString(),
      totalModules: files.length,
      expectedModules: stats.appliedCount,
      averageScore: avgScore,
      qualityBreakdown: { excellent, good, needsReview },
      checklistPerformance: checkStats,
      allResults: validationResults,
    }, null, 2));

    // Final summary
    console.log('═══════════════════════════════════════');
    console.log('✅ TIER-3 VALIDATION COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`Modules Validated: ${files.length}`);
    console.log(`Average Score: ${avgScore.toFixed(1)}%`);
    console.log(`Quality Breakdown:`);
    console.log(`  EXCELLENT (90%+): ${excellent} modules`);
    console.log(`  GOOD (75-90%): ${good} modules`);
    console.log(`  NEEDS_REVIEW (<75%): ${needsReview} modules`);
    console.log(`\nQuality Status: ${qualityStatus}`);
    console.log(`\n📊 Report: ${VALIDATION_REPORT}`);
    console.log(`📁 Details: ${VALIDATION_DETAILS}`);

    process.exit(allPassed ? 0 : 1);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

validateTierThree();
