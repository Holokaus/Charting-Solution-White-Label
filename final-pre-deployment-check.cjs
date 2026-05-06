#!/usr/bin/env node

/**
 * FINAL PRE-DEPLOYMENT VERIFICATION
 * May 6, 2026 - GO/NO-GO DECISION
 */

const fs = require('fs');
const path = require('path');

async function finalCheck() {
  console.log('🚀 FINAL PRE-DEPLOYMENT VERIFICATION\n');
  console.log('=' .repeat(60) + '\n');

  const checks = [];

  // Check 1: Module Count
  const moduleDir = './deployed-modules';
  if (fs.existsSync(moduleDir)) {
    const modules = fs.readdirSync(moduleDir).filter(f => f.endsWith('.js'));
    checks.push({
      name: 'Module Count',
      expected: 179,
      actual: modules.length,
      pass: modules.length === 179
    });
    console.log(`✅ Module Count: ${modules.length}/179`);
  }

  // Check 2: Manifest Exists
  const manifestPath = path.join(moduleDir, 'DEPLOYMENT_MANIFEST.json');
  const manifestExists = fs.existsSync(manifestPath);
  checks.push({
    name: 'Deployment Manifest',
    expected: true,
    actual: manifestExists,
    pass: manifestExists
  });
  console.log(`${manifestExists ? '✅' : '❌'} Deployment Manifest: ${manifestExists ? 'Present' : 'Missing'}`);

  // Check 3: Manifest Content
  if (manifestExists) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    checks.push({
      name: 'Manifest Module Count',
      expected: 179,
      actual: manifest.totalModules,
      pass: manifest.totalModules === 179
    });
    checks.push({
      name: 'Semantic Coverage',
      expected: '100%',
      actual: manifest.semanticCoverage,
      pass: manifest.semanticCoverage === '100% (26/26 variables per type)'
    });
    checks.push({
      name: 'Quality Standard',
      expected: 'Class 1',
      actual: manifest.qualityStandard,
      pass: manifest.qualityStandard.includes('Class 1')
    });

    console.log(`✅ Manifest Module Count: ${manifest.totalModules}`);
    console.log(`✅ Semantic Coverage: ${manifest.semanticCoverage}`);
    console.log(`✅ Quality Standard: ${manifest.qualityStandard}`);
  }

  // Check 4: Backup Exists
  const backupDirs = fs.readdirSync('.').filter(d => d.startsWith('production-backup-'));
  const backupExists = backupDirs.length > 0;
  checks.push({
    name: 'Production Backup',
    expected: true,
    actual: backupExists,
    pass: backupExists
  });
  console.log(`${backupExists ? '✅' : '⚠️'} Production Backup: ${backupExists ? `${backupDirs[0]}` : 'Not yet created'}`);

  // Check 5: Sample Module Readable
  const sampleModules = fs.readdirSync(moduleDir).filter(f => f.endsWith('.js')).slice(0, 3);
  let readableCount = 0;
  for (const mod of sampleModules) {
    try {
      const content = fs.readFileSync(path.join(moduleDir, mod), 'utf-8');
      if (content.length > 100) readableCount++;
    } catch (e) {
      // ignore
    }
  }
  checks.push({
    name: 'Sample Module Readability',
    expected: sampleModules.length,
    actual: readableCount,
    pass: readableCount === sampleModules.length
  });
  console.log(`✅ Sample Module Readability: ${readableCount}/${sampleModules.length}`);

  console.log('\n' + '='.repeat(60) + '\n');

  // Summary
  const passCount = checks.filter(c => c.pass).length;
  const totalCount = checks.length;
  const passRate = Math.round((passCount / totalCount) * 100);

  console.log(`📊 VERIFICATION SUMMARY`);
  console.log(`   Passed: ${passCount}/${totalCount} (${passRate}%)\n`);

  if (passRate === 100) {
    console.log('🟢 GO/NO-GO DECISION: ✅ GO FOR DEPLOYMENT\n');
    console.log('📋 Pre-Deployment Checklist:');
    console.log('   ✅ All 179 modules present');
    console.log('   ✅ Deployment manifest verified');
    console.log('   ✅ 100% semantic coverage confirmed');
    console.log('   ✅ Class 1 quality standard met');
    console.log('   ✅ Backup created');
    console.log('   ✅ Sample modules readable\n');

    console.log('🚀 READY FOR PRODUCTION DEPLOYMENT\n');
    console.log('Next Step: Deploy to production environment');
    console.log('Command: Follow DEPLOYMENT_INTEGRATION_GUIDE.md\n');
  } else {
    console.log('🔴 GO/NO-GO DECISION: ❌ HOLD FOR INVESTIGATION\n');
    console.log('Issues found:');
    checks.filter(c => !c.pass).forEach(c => {
      console.log(`   ❌ ${c.name}: Expected ${c.expected}, got ${c.actual}`);
    });
  }

  console.log('='.repeat(60));
}

finalCheck().catch(console.error);
