/**
 * STAGING DEPLOYMENT SCRIPT
 * Deploys 63 verified modules to staging environment
 */

const fs = require('fs');
const path = require('path');

// Deployment configuration
const config = {
    sourceDir: path.join(__dirname, 'renamed-modules'),
    stagingDir: path.join(__dirname, 'staging-deployment'),
    timestamp: new Date().toISOString(),
    deploymentId: `STAGING-2026-05-06-${Date.now()}`
};

// Get all modules to deploy
function getModulesList() {
    const files = fs.readdirSync(config.sourceDir)
        .filter(f => f.endsWith('.js'))
        .filter(f => !f.includes('partial'));
    return files;
}

// Create staging directory if not exists
function createStagingDirectory() {
    if (!fs.existsSync(config.stagingDir)) {
        fs.mkdirSync(config.stagingDir, { recursive: true });
        console.log(`✅ Created staging directory: ${config.stagingDir}`);
    }
}

// Deploy modules to staging
function deployToStaging() {
    console.log('\n╔═════════════════════════════════════════════╗');
    console.log('║  STAGING DEPLOYMENT - Phase 1/3             ║');
    console.log('╚═════════════════════════════════════════════╝\n');
    
    const modules = getModulesList();
    let successCount = 0;
    let failureCount = 0;
    
    console.log(`📋 Deploying ${modules.length} modules to staging...\n`);
    
    modules.forEach((module, index) => {
        try {
            const sourcePath = path.join(config.sourceDir, module);
            const destPath = path.join(config.stagingDir, module);
            
            // Read source and write to staging
            const content = fs.readFileSync(sourcePath, 'utf8');
            fs.writeFileSync(destPath, content);
            
            successCount++;
            
            // Show progress every 10 modules
            if ((index + 1) % 10 === 0) {
                console.log(`   ✅ ${index + 1}/${modules.length} modules deployed`);
            }
        } catch (error) {
            failureCount++;
            console.log(`   ❌ Failed: ${module}`);
        }
    });
    
    console.log(`\n✅ Deployment complete:`);
    console.log(`   Successful: ${successCount}/${modules.length}`);
    console.log(`   Failed: ${failureCount}/${modules.length}`);
    
    if (failureCount === 0) {
        console.log(`\n✅ ALL MODULES DEPLOYED SUCCESSFULLY\n`);
    }
    
    return { successCount, failureCount, totalModules: modules.length };
}

// Verify deployment
function verifyDeployment(result) {
    console.log(`\n🔍 DEPLOYMENT VERIFICATION:\n`);
    
    const deployedFiles = fs.readdirSync(config.stagingDir)
        .filter(f => f.endsWith('.js')).length;
    
    console.log(`   ✅ Files in staging: ${deployedFiles}`);
    console.log(`   ✅ Deployment ID: ${config.deploymentId}`);
    console.log(`   ✅ Timestamp: ${config.timestamp}`);
    
    // Check file integrity
    const sourceModules = getModulesList();
    let integrityOk = true;
    
    sourceModules.forEach(module => {
        const sourcePath = path.join(config.sourceDir, module);
        const destPath = path.join(config.stagingDir, module);
        
        const sourceSize = fs.statSync(sourcePath).size;
        const destSize = fs.statSync(destPath).size;
        
        if (sourceSize !== destSize) {
            console.log(`   ⚠️  Integrity check failed: ${module}`);
            integrityOk = false;
        }
    });
    
    if (integrityOk) {
        console.log(`   ✅ File integrity verified\n`);
    }
    
    return integrityOk;
}

// Main execution
console.log('🚀 STAGING DEPLOYMENT INITIALIZED\n');

createStagingDirectory();
const deployResult = deployToStaging();
const verificationOk = verifyDeployment(deployResult);

if (deployResult.failureCount === 0 && verificationOk) {
    console.log(`\n📊 STAGING DEPLOYMENT STATUS: ✅ SUCCESS`);
    console.log(`\n🎯 READY FOR SMOKE TESTS\n`);
} else {
    console.log(`\n📊 STAGING DEPLOYMENT STATUS: ❌ ISSUES DETECTED`);
}

module.exports = { config, deployToStaging, getModulesList };
