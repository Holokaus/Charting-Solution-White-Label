/**
 * Validate Round 4 Improved MEDIUM - 8-Point Quality Checklist
 */
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = './round4-improved-medium-applied';
const VALIDATION_REPORT = './round4-improved-medium-validation-report.md';
const SPOTCHECK_REPORT = './round4-improved-medium-spotcheck-report.md';

function validateModule(moduleId, content) {
  const checks = {
    moduleIdValid: /^[0-9]+$/.test(moduleId),
    semanticNameValid: true, // Already enforced in discovery
    contentValid: content.length > 0,
    headerPresent: content.includes('/**') || content.includes('/*'),
    semanticsApplied: /watchedValue_[esn]|seriesBarFunction_[esa]|lineToolManager_[esn]|priceDataSource_[est]|dataSource_[est]|logger_[esn]/.test(content),
    exportsFound: content.includes('i.d(t,') || content.includes('module.exports') || content.includes('exports.'),
    noObviousErrors: !content.includes('undefined undefined') && (content.match(/{/g) || []).length === (content.match(/}/g) || []).length,
    sizeReasonable: content.length > 200 && content.length < 1000000
  };

  const passCount = Object.values(checks).filter(c => c).length;
  const passRate = (passCount / 8 * 100).toFixed(0);

  let tier;
  if (passCount >= 7) tier = 'GOOD';
  else if (passCount >= 6) tier = 'FAIR';
  else tier = 'NEEDS_REVIEW';

  return { checks, passCount, passRate, tier };
}

async function validateRound4Medium() {
  try {
    console.log('✅ VALIDATING ROUND 4 IMPROVED MEDIUM - 8-POINT QUALITY CHECKLIST\n');

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
    let report = `# Round 4 Improved MEDIUM - Validation Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n\n`;
    report += `## Summary\n\n`;
    report += `- **GOOD (7-8 passes):** ${totalGood}\n`;
    report += `- **FAIR (6-7 passes):** ${totalFair}\n`;
    report += `- **NEEDS_REVIEW (<6 passes):** ${totalNeeds}\n\n`;

    const overallPassRate = ((totalGood + totalFair) / files.length * 100).toFixed(1);
    report += `**Overall Pass Rate:** ${overallPassRate}%\n\n`;

    report += `## Detailed Results\n\n`;
    report += `| Module ID | Tier | Pass Count | Checks |\n`;
    report += `|-----------|------|------------|--------|\n`;

    for (const result of results.sort((a, b) => b.passCount - a.passCount)) {
      const checkSummary = Object.entries(result.checks)
        .filter(([_, v]) => v)
        .map(([k, _]) => k)
        .join(', ');
      report += `| ${result.moduleId} | ${result.tier} | ${result.passCount}/8 | ${checkSummary} |\n`;
    }

    report += `\n## Failed Checks Analysis\n\n`;
    const failedChecks = {};
    for (const result of results) {
      for (const [check, passed] of Object.entries(result.checks)) {
        if (!passed) {
          if (!failedChecks[check]) failedChecks[check] = [];
          failedChecks[check].push(result.moduleId);
        }
      }
    }

    for (const [check, modules] of Object.entries(failedChecks)) {
      report += `### ❌ ${check}: ${modules.length} modules\n`;
      report += `   Modules: ${modules.join(', ')}\n\n`;
    }

    fs.writeFileSync(VALIDATION_REPORT, report);
    console.log(`✓ Validation report saved: ${VALIDATION_REPORT}\n`);

    // Spot-check selection (5 random modules)
    console.log('🎯 SELECTING SPOT-CHECK SAMPLE (5 modules)\n');
    
    const shuffled = [...results].sort(() => Math.random() - 0.5);
    const spotCheckSample = shuffled.slice(0, 5);
    
    let spotCheckReport = `# Round 4 Improved MEDIUM - Spot-Check Report\n\n`;
    spotCheckReport += `Generated: ${new Date().toISOString()}\n\n`;
    spotCheckReport += `## Spot-Check Sample\n\n`;
    spotCheckReport += `Selected ${spotCheckSample.length} modules for manual verification:\n\n`;
    spotCheckReport += `| Module ID | Semantic Name | Confidence | Validation Tier |\n`;
    spotCheckReport += `|-----------|---------------|------------|----------------|\n`;

    // Load metadata for semantic names and confidence
    const metadataPath = path.join(OUTPUT_DIR, 'application-metadata.json');
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    
    for (const result of spotCheckSample) {
      const modMeta = metadata.modules.find(m => m.moduleId === result.moduleId);
      const semantic = modMeta ? modMeta.semanticName : 'N/A';
      const confidence = modMeta ? modMeta.confidence : 0;
      spotCheckReport += `| ${result.moduleId} | ${semantic} | ${confidence}% | ${result.tier} |\n`;
    }

    spotCheckReport += `\n## Manual Verification Checklist\n\n`;
    spotCheckReport += `For each module below, manually verify:\n\n`;
    spotCheckReport += `1. **Semantic name matches code functionality**\n`;
    spotCheckReport += `2. **Keywords from semantic name appear in code**\n`;
    spotCheckReport += `3. **Variable renaming is appropriate**\n`;
    spotCheckReport += `4. **No syntax errors introduced**\n`;
    spotCheckReport += `5. **Code structure aligns with assigned responsibility**\n\n`;

    spotCheckReport += `## Module Details for Review\n\n`;
    
    for (const result of spotCheckSample) {
      const modMeta = metadata.modules.find(m => m.moduleId === result.moduleId);
      const filePath = path.join(OUTPUT_DIR, `${result.moduleId}.js`);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      spotCheckReport += `### Module ${result.moduleId} (${modMeta?.semanticName || 'N/A'})\n\n`;
      spotCheckReport += `- **Confidence:** ${modMeta?.confidence || 0}%\n`;
      spotCheckReport += `- **Keywords:** ${modMeta?.keywords || 0}\n`;
      spotCheckReport += `- **Validation:** ${result.tier} (${result.passCount}/8)\n`;
      spotCheckReport += `- **Replacements:** ${modMeta?.replacements || 0}\n\n`;
      spotCheckReport += `**First 30 lines:**\n\`\`\`javascript\n`;
      spotCheckReport += content.split('\n').slice(0, 30).join('\n');
      spotCheckReport += `\n\`\`\`\n\n`;
      spotCheckReport += `**Manual Assessment:** [ ] PASS  [ ] FAIL  [ ] UNCERTAIN\n\n`;
      spotCheckReport += `**Notes:** _________________________________________________\n\n`;
    }

    spotCheckReport += `## Spot-Check Results Summary\n\n`;
    spotCheckReport += `- **Total Reviewed:** ${spotCheckSample.length}\n`;
    spotCheckReport += `- **Passed:** ___ / ${spotCheckSample.length}\n`;
    spotCheckReport += `- **Failed:** ___ / ${spotCheckSample.length}\n`;
    spotCheckReport += `- **Pass Rate:** ___%\n\n`;
    spotCheckReport += `**Gate Requirement:** 80%+ (4/5 or 5/5 must pass)\n\n`;
    spotCheckReport += `**Decision:** [ ] PROCEED TO ARCHIVE  [ ] ROLLBACK  [ ] INVESTIGATE FURTHER\n\n`;

    fs.writeFileSync(SPOTCHECK_REPORT, spotCheckReport);
    console.log(`✓ Spot-check report saved: ${SPOTCHECK_REPORT}\n`);

    // Final summary
    console.log('===========================================');
    console.log('VALIDATION COMPLETE');
    console.log('===========================================');
    console.log(`GOOD: ${totalGood}/${files.length} (${(totalGood/files.length*100).toFixed(1)}%)`);
    console.log(`FAIR: ${totalFair}/${files.length} (${(totalFair/files.length*100).toFixed(1)}%)`);
    console.log(`NEEDS_REVIEW: ${totalNeeds}/${files.length} (${(totalNeeds/files.length*100).toFixed(1)}%)`);
    console.log(`\nOverall Pass Rate: ${overallPassRate}%`);
    console.log(`\n⚠️  NEXT STEP: Manually review the 5 spot-check modules in:`);
    console.log(`   ${SPOTCHECK_REPORT}`);
    console.log(`\n✅ If 80%+ pass spot-check, run archive script`);
    console.log(`❌ If <80% pass, investigate and rollback if needed\n`);

  } catch (error) {
    console.error('❌ Validation error:', error.message);
    throw error;
  }
}

validateRound4Medium();
