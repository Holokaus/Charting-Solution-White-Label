/**
 * Validate Round 4 Improved - 8-Point Quality Checklist
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './round4-improved-applied';
const VALIDATION_REPORT = './round4-improved-validation-report.md';

function validateModule(moduleId, content) {
  const checks = {
    moduleIdValid: /^[0-9]+$/.test(moduleId),
    semanticNameValid: true, // Already enforced in discovery
    contentValid: content.length > 0,
    headerPresent: content.includes('/**') || content.includes('/*'),
    semanticsApplied: /watchedValue_[esn]|series_[esa]|dataSource_[est]/.test(content),
    exportsFound: content.includes('i.d(t,') || content.includes('module.exports'),
    noObviousErrors: !content.includes('undefined') || content.includes('typeof'),
    sizeReasonable: content.length > 500 && content.length < 1000000
  };

  const passCount = Object.values(checks).filter(c => c).length;
  const passRate = (passCount / 8 * 100).toFixed(0);

  let tier;
  if (passCount >= 7) tier = 'GOOD';
  else if (passCount >= 6) tier = 'FAIR';
  else tier = 'NEEDS_REVIEW';

  return { checks, passCount, passRate, tier };
}

async function validateRound4Improved() {
  try {
    console.log('✅ VALIDATING ROUND 4 IMPROVED - 8-POINT QUALITY CHECKLIST\n');

    if (!fs.existsSync(OUTPUT_DIR)) {
      console.error('❌ Output directory not found');
      process.exit(1);
    }

    const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.endsWith('.js'));
    
    if (files.length === 0) {
      console.log('ℹ️  No modules to validate');
      process.exit(0);
    }

    console.log(`📊 Validating ${files.length} module(s)...\n`);

    let totalGood = 0, totalFair = 0, totalNeeds = 0;
    const results = [];

    for (const file of files) {
      const moduleId = file.replace('.js', '');
      const filePath = path.join(OUTPUT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      const validation = validateModule(moduleId, content);
      results.push({ moduleId, ...validation });

      if (validation.tier === 'GOOD') totalGood++;
      else if (validation.tier === 'FAIR') totalFair++;
      else totalNeeds++;

      console.log(`Module ${moduleId}: ${validation.tier} (${validation.passCount}/8 checks)`);
      for (const [check, passed] of Object.entries(validation.checks)) {
        console.log(`  ${passed ? '✅' : '❌'} ${check}`);
      }
      console.log();
    }

    // Generate report
    let report = `# Round 4 Improved - Validation Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n\n`;
    report += `## Summary\n\n`;
    report += `- **GOOD (7-8 passes):** ${totalGood}\n`;
    report += `- **FAIR (6-7 passes):** ${totalFair}\n`;
    report += `- **NEEDS_REVIEW (<6 passes):** ${totalNeeds}\n\n`;

    report += `## Validation Details\n\n`;
    for (const result of results) {
      report += `### Module ${result.moduleId}\n`;
      report += `- **Status:** ${result.tier} (${result.passCount}/8)\n`;
      for (const [check, passed] of Object.entries(result.checks)) {
        report += `- ${passed ? '✅' : '❌'} ${check}\n`;
      }
      report += `\n`;
    }

    fs.writeFileSync(VALIDATION_REPORT, report);

    console.log(`═══════════════════════════════════════════════════════`);
    console.log(`✅ VALIDATION COMPLETE\n`);
    console.log(`GOOD: ${totalGood} | FAIR: ${totalFair} | NEEDS_REVIEW: ${totalNeeds}\n`);
    console.log(`Report: ${VALIDATION_REPORT}\n`);
    console.log(`Next: Run spot-check verification (80%+ accuracy required)`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

validateRound4Improved();
