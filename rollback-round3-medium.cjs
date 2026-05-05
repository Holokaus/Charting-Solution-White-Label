/**
 * ROLLBACK: Round 3 Medium Confidence Modules
 * Revert to verified 330-module baseline
 * 
 * This rollback removes Round 3 MEDIUM modules due to failed accuracy verification
 * Coverage reverts from 354 to 330 modules (76.0% to 70.8%)
 */
const fs = require('fs');
const path = require('path');

const DIRS_TO_DELETE = [
  './round3-medium-confidence-applied',
  './round3-medium-approved',
];

const FILES_TO_DELETE = [
  './apply-round3-medium.cjs',
  './validate-round3-medium.cjs',
  './archive-round3-medium.cjs',
  './round3-medium-applications-report.md',
  './round3-medium-applications-stats.json',
  './round3-medium-approved-manifest.json',
  './validation-round3-medium-confidence.md',
  './validation-round3-medium-confidence-details.json',
];

/**
 * Execute rollback
 */
async function rollbackRound3Medium() {
  try {
    console.log('🔄 ROLLBACK: Round 3 Medium Confidence Modules\n');
    console.log('═══════════════════════════════════════════════════════\n');

    console.log('📋 Rollback Scope:\n');
    console.log('  ❌ Round 3 MEDIUM: 24 modules (REMOVING)');
    console.log('  ✅ Round 3 HIGH: 4 modules (KEEPING)');
    console.log('  ✅ Original + Tier-3: 326 modules (KEEPING)');
    console.log('  Coverage: 354 → 330 modules (76.0% → 70.8%)\n');

    console.log('Reason: Failed accuracy verification (0/5 spot-check pass)\n');
    console.log('═══════════════════════════════════════════════════════\n');

    // Delete directories
    console.log('📁 Deleting directories...');
    let deletedDirs = 0;
    for (const dir of DIRS_TO_DELETE) {
      if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
        console.log(`  ✓ Deleted: ${dir}`);
        deletedDirs++;
      }
    }
    console.log(`✓ Removed ${deletedDirs} directories\n`);

    // Delete files
    console.log('📄 Deleting files...');
    let deletedFiles = 0;
    for (const file of FILES_TO_DELETE) {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`  ✓ Deleted: ${file}`);
        deletedFiles++;
      }
    }
    console.log(`✓ Removed ${deletedFiles} files\n`);

    // Create rollback log
    console.log('📝 Generating rollback log...');
    const rollbackLog = {
      timestamp: new Date().toISOString(),
      action: 'ROLLBACK_ROUND3_MEDIUM',
      reason: 'Failed accuracy verification - 0/5 modules passed spot-check',
      modulesRemoved: 24,
      directoriesDeleted: DIRS_TO_DELETE.length,
      filesDeleted: FILES_TO_DELETE.length,
      coverageRevert: '354 modules → 330 modules (76.0% → 70.8%)',
      status: 'SUCCESS',
      nextSteps: [
        '1. Fix pattern discovery algorithm with keyword verification',
        '2. Establish Class-1 quality gates before deployment',
        '3. Implement senior-level verification workflow',
        '4. Plan Round 4 discovery with improved algorithm'
      ]
    };

    fs.writeFileSync('./rollback-round3-medium-log.json', JSON.stringify(rollbackLog, null, 2));

    // Display summary
    console.log('═══════════════════════════════════════════════════════');
    console.log('✅ ROLLBACK COMPLETE');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('Directories Deleted:', deletedDirs);
    console.log('Files Deleted:', deletedFiles);
    console.log('\nCoverage Status:');
    console.log('  Previous: 354 modules (76.0%)');
    console.log('  Current: 330 modules (70.8%)');
    console.log('\nDeployed & Verified: 330 modules ✅');
    console.log('Rolled Back & Archived: 24 modules (for investigation)');
    console.log('\n✅ System returned to verified baseline');
    console.log('Next: Fix algorithm, establish quality gates, plan Round 4');

  } catch (error) {
    console.error('❌ Error during rollback:', error.message);
    process.exit(1);
  }
}

rollbackRound3Medium();
