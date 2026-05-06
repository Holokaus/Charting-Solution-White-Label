/**
 * Validate-Round5-Medium - 8-point quality validation for 129 MEDIUM modules
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './round5-medium-applied';

function validateModule(moduleId, content) {
  const checks = {
    moduleIdValid: String(moduleId).length > 0,
    semanticNameValid: content.includes('_') && content.length > 100,
    contentValid: content.includes('function') || content.includes('=') || content.includes('class'),
    headerPresent: content.includes('/*') || content.includes('//'),
    semanticsApplied: /\w+_[a-z]/.test(content),
    exportsFound: content.includes('module.exports') || content.includes('export'),
    noObviousErrors: !content.includes('undefined') && !content.includes('null null'),
    sizeReasonable: content.length > 500 && content.length < 1000000
  };

  const passCount = Object.values(checks).filter(v => v).length;
  let tier = 'NEEDS_REVIEW';

  if (passCount >= 7) tier = 'GOOD';
  else if (passCount >= 6) tier = 'FAIR';

  return { checks, passCount, tier };
}

async function validateRound5Medium() {
  try {
    console.log('✔️  VALIDATING MODULES - Round 5 Medium\n');
    console.log('═══════════════════════════════════════════════════════\n');

    if (!fs.existsSync(OUTPUT_DIR)) {
      console.error('❌ Output directory not found');
      process.exit(1);
    }

    const metadataFile = path.join(OUTPUT_DIR, 'metadata.json');
    if (!fs.existsSync(metadataFile)) {
      console.error('❌ Metadata file not found');
      process.exit(1);
    }

    const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf-8'));
    const modules = metadata.results || [];

    if (modules.length === 0) {
      console.log('ℹ️  No modules to validate');
      process.exit(0);
    }

    console.log(`📊 Validating ${modules.length} modules...\n`);

    const tiers = { GOOD: 0, FAIR: 0, NEEDS_REVIEW: 0 };
    const results = [];

    for (let i = 0; i < modules.length; i++) {
      const moduleId = modules[i].moduleId;
      const filePath = path.join(OUTPUT_DIR, `${moduleId}.js`);

      if (!fs.existsSync(filePath)) continue;

      const content = fs.readFileSync(filePath, 'utf-8');
      const validation = validateModule(moduleId, content);

      tiers[validation.tier]++;
      results.push({
        moduleId,
        ...validation
      });

      if ((i + 1) % 20 === 0 || i === 0) {
        console.log(`[${i + 1}/${modules.length}] ${moduleId}: ${validation.tier} (${validation.passCount}/8)`);
      }
    }

    const passRate = ((tiers.GOOD / modules.length) * 100).toFixed(1);

    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`📋 VALIDATION RESULTS\n`);
    console.log(`Total Validated: ${modules.length}`);
    console.log(`GOOD (7-8): ${tiers.GOOD}`);
    console.log(`FAIR (6): ${tiers.FAIR}`);
    console.log(`NEEDS_REVIEW (<6): ${tiers.NEEDS_REVIEW}`);
    console.log(`Pass Rate: ${passRate}%\n`);

    const report = `# Validation Report - Round 5 Medium\n\n` +
      `Generated: ${new Date().toISOString()}\n` +
      `Total Modules: ${modules.length}\n` +
      `GOOD Tier: ${tiers.GOOD} (${((tiers.GOOD/modules.length)*100).toFixed(1)}%)\n` +
      `FAIR Tier: ${tiers.FAIR} (${((tiers.FAIR/modules.length)*100).toFixed(1)}%)\n` +
      `NEEDS_REVIEW: ${tiers.NEEDS_REVIEW} (${((tiers.NEEDS_REVIEW/modules.length)*100).toFixed(1)}%)\n\n` +
      `## Status\n${passRate >= 70 ? '✅ PASSED (70%+ GOOD tier)' : '⚠️ REVIEW NEEDED (<70% GOOD tier)'}`;

    fs.writeFileSync('./round5-medium-validation-report.md', report);
    console.log(`Report: ./round5-medium-validation-report.md`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

validateRound5Medium();
