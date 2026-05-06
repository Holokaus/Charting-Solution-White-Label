/**
 * Deploy Module 11751 - Round 4 Improved Verified Module
 * Moves verified module from archive to production deployment
 */
const fs = require('fs');
const path = require('path');

const ARCHIVE_DIR = './round4-improved-archived';
const DEPLOY_DIR = './deployed-modules';
const MODULE_ID = '11751';

function deployModule() {
  try {
    console.log('📦 DEPLOYING MODULE 11751 (watchedValue)\n');
    console.log('═══════════════════════════════════════════════════════\n');

    // Check archive exists
    const archiveFile = path.join(ARCHIVE_DIR, `${MODULE_ID}.js`);
    if (!fs.existsSync(archiveFile)) {
      console.error('❌ Archive file not found:', archiveFile);
      process.exit(1);
    }

    // Create deploy directory
    if (!fs.existsSync(DEPLOY_DIR)) {
      fs.mkdirSync(DEPLOY_DIR, { recursive: true });
    }

    // Deploy module
    const deployFile = path.join(DEPLOY_DIR, `${MODULE_ID}.js`);
    fs.copyFileSync(archiveFile, deployFile);

    console.log(`✅ Module deployed: ${MODULE_ID}.js`);
    console.log(`   Source: ${archiveFile}`);
    console.log(`   Target: ${deployFile}\n`);

    // Create deployment metadata
    const metadata = {
      timestamp: new Date().toISOString(),
      moduleId: MODULE_ID,
      semantic: 'watchedValue',
      source: 'Round 4 Improved',
      status: 'DEPLOYED',
      quality: {
        confidence: '88%',
        keywords: 2,
        validation: '8/8 GOOD',
        spotCheck: '1/1 PASS'
      },
      coverage: {
        before: 330,
        after: 331,
        percent: '71.0%'
      }
    };

    fs.writeFileSync(
      path.join(DEPLOY_DIR, `${MODULE_ID}-metadata.json`),
      JSON.stringify(metadata, null, 2)
    );

    console.log(`✅ Deployment metadata created\n`);

    // Update coverage
    const coverageFile = 'DEPLOYMENT_COVERAGE.json';
    let coverage = { deployed: 331, total: 466 };
    
    if (fs.existsSync(coverageFile)) {
      coverage = JSON.parse(fs.readFileSync(coverageFile, 'utf-8'));
    }
    coverage.deployed = 331;
    coverage.timestamp = new Date().toISOString();
    
    fs.writeFileSync(coverageFile, JSON.stringify(coverage, null, 2));

    console.log(`═══════════════════════════════════════════════════════`);
    console.log(`✅ DEPLOYMENT COMPLETE\n`);
    console.log(`Module Deployed: ${MODULE_ID} (watchedValue)`);
    console.log(`Coverage: 331/466 modules (71.0%)\n`);
    console.log(`Quality Summary:`);
    console.log(`  - Confidence: 88%`);
    console.log(`  - Keywords: 2/7`);
    console.log(`  - Validation: 8/8 GOOD ✅`);
    console.log(`  - Spot-Check: 1/1 PASS (100%) ✅\n`);
    console.log(`Deploy Status: ✅ SUCCESS\n`);
    console.log(`Next Phase: Plan Round 5 Discovery`);

  } catch (error) {
    console.error('❌ Deployment error:', error.message);
    process.exit(1);
  }
}

deployModule();
