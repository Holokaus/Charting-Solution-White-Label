/**
 * ROLLBACK - Remove incomplete semantic pass from production
 * This moves deployed modules back to storage for re-processing
 * 
 * Class 1 Quality Standard: Complete semantic pass required
 * Previous deployment had only 5/26 variables mapped (incomplete)
 */
const fs = require('fs');
const path = require('path');

const DEPLOYED_DIR = './deployed-modules';
const ROLLBACK_ARCHIVE = './rollback-incomplete-semantics';

async function rollbackDeployment() {
  try {
    console.log('🔄 ROLLBACK - Incomplete Semantic Pass\n');
    console.log('═══════════════════════════════════════════════════════\n');
    console.log('Reason: Previous deployment had partial semantic mapping');
    console.log('Coverage: Only 5/26 variables mapped (19% coverage)');
    console.log('Standard: Class 1 requires 100% complete semantic mapping\n');
    console.log('═══════════════════════════════════════════════════════\n');

    if (!fs.existsSync(DEPLOYED_DIR)) {
      console.error('❌ Deployed directory not found');
      process.exit(1);
    }

    const files = fs.readdirSync(DEPLOYED_DIR).filter(f => f.endsWith('.js'));
    
    if (files.length === 0) {
      console.log('ℹ️  No modules to rollback');
      process.exit(0);
    }

    // Create rollback archive directory
    if (!fs.existsSync(ROLLBACK_ARCHIVE)) {
      fs.mkdirSync(ROLLBACK_ARCHIVE, { recursive: true });
    }

    console.log(`📊 Rolling back ${files.length} modules...\n`);

    let rolledBack = 0;
    for (const file of files) {
      if (file === 'metadata.json') continue;
      
      const srcFile = path.join(DEPLOYED_DIR, file);
      const destFile = path.join(ROLLBACK_ARCHIVE, file);
      
      fs.copyFileSync(srcFile, destFile);
      fs.unlinkSync(srcFile);
      rolledBack++;

      if (rolledBack % 50 === 0 || rolledBack === 1) {
        console.log(`[${rolledBack}/${files.length}] Rolled back: ${file}`);
      }
    }

    // Remove metadata files from deployed directory
    const metadataFile = path.join(DEPLOYED_DIR, 'metadata.json');
    if (fs.existsSync(metadataFile)) {
      fs.copyFileSync(metadataFile, path.join(ROLLBACK_ARCHIVE, 'deployment-metadata.json'));
      fs.unlinkSync(metadataFile);
    }

    const rollbackMetadata = {
      timestamp: new Date().toISOString(),
      action: 'ROLLBACK',
      reason: 'Incomplete semantic mapping (5/26 variables)',
      modulesRolledBack: rolledBack,
      status: 'ROLLED BACK - READY FOR COMPLETE SEMANTIC PASS',
      nextPhase: 'Apply complete semantic mapping with all 26 variables'
    };

    fs.writeFileSync(path.join(ROLLBACK_ARCHIVE, 'rollback-metadata.json'), JSON.stringify(rollbackMetadata, null, 2));

    console.log(`\n═══════════════════════════════════════════════════════`);
    console.log(`✅ ROLLBACK COMPLETE\n`);
    console.log(`Modules Rolled Back: ${rolledBack}`);
    console.log(`Archive Dir: ${ROLLBACK_ARCHIVE}`);
    console.log(`Deployed Dir: NOW EMPTY (ready for fresh deployment)\n`);
    console.log(`Next: Execute complete semantic pass with all 26 variables`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

rollbackDeployment();
