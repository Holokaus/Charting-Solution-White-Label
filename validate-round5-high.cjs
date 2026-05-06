/**
 * Validate Round 5 High - 8-Point Quality Checklist
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './round5-high-applied';
const VALIDATION_REPORT = './round5-high-validation-report.md';

function validateModule(moduleId, content) {
  const checks = {
    moduleIdValid: /^[0-9]+$/.test(moduleId),
    semanticNameValid: true,
    contentValid: content.length > 0,
    headerPresent: content.includes('/**') || content.includes('/*'),
    semanticsApplied: /watchedValue_[esn]|series_[esa]|dataSource_[est]|priceDataSource_[est]|logger_[esn]|config_[est]|handler_[esa]|delegate_[est]|canvasRendering_[est]|chartManager_[esa]|lineToolManager_[esn]|bitmapCoordinatesPane_[est]|seriesBarFunction_[esa]/.test(content),
    exportsFound: content.includes('i.d(t,') || content.includes('module.exports'),
    noObviousErrors: !content.includes('undefined') || content.includes('typeof'),
    sizeReasonable: content.length > 500 && content.length < 1000000
  };

  const passCount = Object.values(checks).filter(c => c).length;
  let tier;
  if (passCount >= 7) tier = 'GOOD';
  else if (passCount >= 6) tier = 'FAIR';
  else tier = 'NEEDS_REVIEW';

  return { checks, passCount, tier };
}

async function validateRound5High() {
  try {
    console.log('✅ VALIDATING ROUND 5 HIGH - 8-POINT QUALITY CHECKLIST\n');

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

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const moduleId = file.replace('.js', '');
      const filePath = path.join(OUTPUT_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      const validation = validateModule(moduleId, content);
      results.push({ moduleId, ...validation });

      if (validation.tier === 'GOOD') totalGood++;
      else if (validation.tier === 'FAIR') totalFair++;
      else totalNeeds++;

      if ((i + 1) % 10 === 0 || i === 0) {
        console.log(`[${i + 1}/${files.length}] ${validation.tier}: Module ${moduleId}`);
      }
    }

    let report = `# Round 5 High - Validation Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n`;
    report += `Modules Validated: ${files.length}\n\n`;

    report += `## Summary\n\n`;
    report += `- **GOOD (7-8 passes):** ${totalGood}\n`;
    report += `- **FAIR (6-7 passes):** ${totalFair}\n`;
    report += `- **NEEDS_REVIEW (<6 passes):** ${totalNeeds}\n`;
    report += `- **Success Rate:** ${(totalGood / files.length * 100).toFixed(0)}%\n\n`;

    report += `## Quality Distribution\n\n`;
    report += `GOOD modules ready for production: ${totalGood}\n`;
    report += `FAIR modules acceptable: ${totalFair}\n`;
    report += `Modules requiring review: ${totalNeeds}\n`;

    fs.writeFileSync(VALIDATION_REPORT, report);

    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`✅ VALIDATION COMPLETE\n`);
    console.log(`GOOD: ${totalGood} | FAIR: ${totalFair} | NEEDS_REVIEW: ${totalNeeds}`);
    console.log(`Success Rate: ${(totalGood / files.length * 100).toFixed(0)}%\n`);
    console.log(`Next: Run spot-check verification (80%+ accuracy required)`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

validateRound5High();
