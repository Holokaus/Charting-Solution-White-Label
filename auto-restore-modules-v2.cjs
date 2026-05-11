#!/usr/bin/env node
/**
 * AUTO-RESTORE SCRIPT
 * Copies restored files from DEPLOYMENT-READY to modules-v2
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';
const DEPLOYMENT_DIR = path.join(BASE_DIR, 'DEPLOYMENT-READY');
const MODULES_V2_DIR = path.join(BASE_DIR, 'modules-v2');

console.log('AUTO-RESTORING MODULES FROM DEPLOYMENT-READY');
console.log('='.repeat(70));

// Get deployment files
const deploymentFiles = fs.readdirSync(DEPLOYMENT_DIR).filter(f => f.endsWith('.js'));

// Map by module ID
const deploymentMap = new Map();
for (const file of deploymentFiles) {
  const match = file.match(/^(\d+)[-_]/);
  if (match) {
    deploymentMap.set(match[1], file);
  }
}

let restored = 0;
let failed = 0;

for (const [moduleId, depFile] of deploymentMap) {
  const v2File = moduleId + '.js';
  const v2Path = path.join(MODULES_V2_DIR, v2File);
  const depPath = path.join(DEPLOYMENT_DIR, depFile);
  
  // Check if modules-v2 file exists and is minified
  if (fs.existsSync(v2Path)) {
    const v2Content = fs.readFileSync(v2Path, 'utf8');
    const isMinified = /\(e,t,i\)\s*=>/.test(v2Content) || /^\d+:\s*\(/.test(v2Content);
    
    if (isMinified) {
      try {
        // Copy restored version
        fs.copyFileSync(depPath, v2Path);
        restored++;
        console.log('✅ ' + moduleId + ': Restored from ' + depFile);
      } catch (e) {
        failed++;
        console.log('❌ ' + moduleId + ': Failed - ' + e.message);
      }
    }
  }
}

console.log('');
console.log('='.repeat(70));
console.log('AUTO-RESTORATION COMPLETE:');
console.log('  ✅ Restored: ' + restored + ' modules');
console.log('  ❌ Failed:   ' + failed + ' modules');
console.log('');
console.log('Next: Manual restoration of remaining modules without DEPLOYMENT-READY versions');
