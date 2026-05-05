/**
 * Rollback Round 4 HIGH Deployment
 * Triggered by spot-check verification failure (40% accuracy, <80% required)
 * Removes applied modules and resets system to verified baseline
 */
const fs = require('fs');
const path = require('path');

const APPLIED_DIR = './round4-high-confidence-applied';
const APPROVED_DIR = './round4-high-approved';
const STATS_FILE = './round4-high-applications-stats.json';
const VALIDATION_REPORT = './validation-round4-high-confidence.md';
const VALIDATION_JSON = './validation-round4-high-confidence-details.json';
const ACCURACY_REPORT = './ACCURACY_VERIFICATION_ROUND4_HIGH.md';
const ACCURACY_JSON = './accuracy-verification-round4-high.json';
const APPLICATION_REPORT = './round4-high-applications-report.md';

const ROLLBACK_LOG_FILE = './rollback-round4-high-log.json';
const ROLLBACK_REASON_FILE = './ROLLBACK_REASON_ROUND4_HIGH.md';

/**
 * Delete directory recursively
 */
function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        deleteDirectory(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    });
    fs.rmdirSync(dirPath);
    return true;
  }
  return false;
}

/**
 * Main rollback
 */
async function rollback() {
  try {
    console.log('⚠️ ROLLING BACK ROUND 4 HIGH DEPLOYMENT\n');
    console.log('═════════════════════════════════════════');
    console.log('Reason: Spot-check accuracy failed (40% < 80% required)\n');

    const rollbackLog = {
      timestamp: new Date().toISOString(),
      reason: 'Spot-check verification failure - 40% accuracy, 80% required',
      trigger: 'AUTOMATIC_HALT_ON_ACCURACY_FAILURE',
      status: 'IN_PROGRESS',
      deletedDirectories: [],
      deletedFiles: []
    };

    // Delete applied directory
    console.log('🗑️ Deleting applied directory...');
    if (deleteDirectory(APPLIED_DIR)) {
      console.log(`✓ Deleted: ${APPLIED_DIR}`);
      rollbackLog.deletedDirectories.push(APPLIED_DIR);
    } else {
      console.log(`⚠️ Directory not found: ${APPLIED_DIR}`);
    }

    // Delete approved directory (if exists)
    console.log('🗑️ Deleting approved directory...');
    if (deleteDirectory(APPROVED_DIR)) {
      console.log(`✓ Deleted: ${APPROVED_DIR}`);
      rollbackLog.deletedDirectories.push(APPROVED_DIR);
    } else {
      console.log(`⚠️ Directory not found: ${APPROVED_DIR} (expected)`);
    }

    // Delete related files
    console.log('🗑️ Deleting related files...');
    const filesToDelete = [
      STATS_FILE,
      VALIDATION_REPORT,
      VALIDATION_JSON,
      APPLICATION_REPORT
    ];

    for (const file of filesToDelete) {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`✓ Deleted: ${file}`);
        rollbackLog.deletedFiles.push(file);
      } else {
        console.log(`⚠️ File not found: ${file}`);
      }
    }

    // Create rollback reason document
    let reasonDoc = `# Round 4 HIGH Deployment - ROLLBACK EXECUTED\n\n`;
    reasonDoc += `**Date:** ${new Date().toISOString()}\n`;
    reasonDoc += `**Reason:** Automatic rollback triggered by accuracy verification failure\n\n`;

    reasonDoc += `## Issue Details\n\n`;
    reasonDoc += `- **Phase:** Round 4 HIGH-Confidence Modules\n`;
    reasonDoc += `- **Trigger:** Spot-check verification gate failure\n`;
    reasonDoc += `- **Accuracy Rate:** 2/5 modules (40.0%)\n`;
    reasonDoc += `- **Required Threshold:** 80.0%\n`;
    reasonDoc += `- **Status:** BELOW THRESHOLD - AUTOMATIC ROLLBACK\n\n`;

    reasonDoc += `## What Was Rolled Back\n\n`;
    reasonDoc += `**Directories Deleted:**\n`;
    for (const dir of rollbackLog.deletedDirectories) {
      reasonDoc += `- ${dir}\n`;
    }

    reasonDoc += `\n**Files Deleted:**\n`;
    for (const file of rollbackLog.deletedFiles) {
      reasonDoc += `- ${file}\n`;
    }

    reasonDoc += `\n## Spot-Check Results\n\n`;
    reasonDoc += `### Passed Modules (2):\n`;
    reasonDoc += `- Module 7543 (dataSource): 2 keywords found\n`;
    reasonDoc += `- Module 13896 (series): 2 keywords found\n\n`;

    reasonDoc += `### Failed Modules (3):\n`;
    reasonDoc += `- Module 52499 (watchedValue): 0 keywords found ❌\n`;
    reasonDoc += `- Module 35727 (priceDataSource): 1 keyword found ❌\n`;
    reasonDoc += `- Module 36947 (lineToolManager): 0 keywords found ❌\n\n`;

    reasonDoc += `## Root Cause Analysis\n\n`;
    reasonDoc += `The Round 4 discovery algorithm used keyword verification gates, which is correct.\n`;
    reasonDoc += `However, the accuracy spot-check reveals:\n\n`;
    reasonDoc += `1. **Some modules lack sufficient semantic keywords** (3/5 failed)\n`;
    reasonDoc += `2. **Keyword thresholds may be too permissive** (assigned 75%+ confidence but failed spot-check)\n`;
    reasonDoc += `3. **Discovery algorithm may still be catching false positives**\n\n`;

    reasonDoc += `The pattern is clear:\n`;
    reasonDoc += `- Modules 7543 and 13896 have clear semantic keywords (PASS)\n`;
    reasonDoc += `- Modules 52499, 35727, 36947 lack keywords or have insufficient matches (FAIL)\n\n`;

    reasonDoc += `## Recommendations\n\n`;
    reasonDoc += `1. **Lower confidence thresholds** - Currently 75%+ is too aggressive\n`;
    reasonDoc += `   - Recommend: 80%+ for HIGH tier (very conservative)\n`;
    reasonDoc += `   - Recommend: 65%+ for MEDIUM tier (only after HIGH proves stable)\n\n`;

    reasonDoc += `2. **Strengthen keyword verification**\n`;
    reasonDoc += `   - Increase minimum keywords from 2 to 3 for HIGH tier\n`;
    reasonDoc += `   - Only deploy modules with 3+ confirmed keywords\n\n`;

    reasonDoc += `3. **Manual review required**\n`;
    reasonDoc += `   - Check why modules 52499, 35727, 36947 were scored 75%+ if they lack keywords\n`;
    reasonDoc += `   - Review discovery algorithm confidence scoring formula\n`;
    reasonDoc += `   - Validate keyword extraction is working correctly\n\n`;

    reasonDoc += `## System Status After Rollback\n\n`;
    reasonDoc += `- **Baseline Coverage:** 330 modules (70.8%) - RESTORED\n`;
    reasonDoc += `- **Round 4 HIGH:** 15 modules - DELETED\n`;
    reasonDoc += `- **All deployed modules:** Verified and safe\n`;
    reasonDoc += `- **Next steps:** Fix algorithm and retry with more conservative thresholds\n\n`;

    reasonDoc += `## Decision Gate Status\n\n`;
    reasonDoc += `❌ **HALT CURRENT PHASE**\n`;
    reasonDoc += `- Accuracy gate failed (40% < 80%)\n`;
    reasonDoc += `- No deployment until algorithm improved\n`;
    reasonDoc += `- Manual investigation required\n`;
    reasonDoc += `- Recommend conservative approach: 3+ keywords minimum, 80%+ confidence\n`;

    fs.writeFileSync(ROLLBACK_REASON_FILE, reasonDoc);

    // Log rollback
    rollbackLog.status = 'COMPLETE';
    fs.writeFileSync(ROLLBACK_LOG_FILE, JSON.stringify(rollbackLog, null, 2));

    // Summary
    console.log('\n═════════════════════════════════════════');
    console.log('✅ ROLLBACK COMPLETE\n');
    console.log(`Directories Deleted: ${rollbackLog.deletedDirectories.length}`);
    console.log(`Files Deleted: ${rollbackLog.deletedFiles.length}`);
    console.log('\nSystem Status:');
    console.log(`Coverage: 330 modules (70.8%) - RESTORED TO BASELINE`);
    console.log('\n📋 Review ROLLBACK_REASON_ROUND4_HIGH.md for details');
    console.log('⚠️ Algorithm requires investigation before retry\n');

  } catch (error) {
    console.error('❌ Error during rollback:', error.message);
    process.exit(1);
  }
}

rollback();
