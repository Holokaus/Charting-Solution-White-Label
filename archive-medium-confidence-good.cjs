/**
 * Archive Medium-Confidence GOOD Modules for Production
 * Moves 24 GOOD quality (75-90%) modules to production output directory
 */
const fs = require('fs');
const path = require('path');

const VALIDATION_FILE = './validation-medium-confidence-tier-three-details.json';
const SOURCE_DIR = './medium-confidence-tier-three-modules';
const ARCHIVE_DIR = './tier-three-medium-confidence-approved';
const MANIFEST_FILE = './medium-confidence-approved-manifest.json';

const GOOD_MODULES = [
  '95772', '4745', '8811', '19334', '26867', '32544', '32925', '39527',
  '39612', '48961', '49251', '50470', '51052', '52706', '55014', '56186',
  '57340', '64971', '68659', '72104', '84696', '87163', '94194', '95322'
];

async function archiveGoodModules() {
  try {
    console.log('📦 Archiving Medium-Confidence GOOD Modules\n');

    // Load validation data
    const validation = JSON.parse(fs.readFileSync(VALIDATION_FILE, 'utf-8'));
    
    // Create archive directory
    console.log(`📁 Creating archive directory: ${ARCHIVE_DIR}\n`);
    if (!fs.existsSync(ARCHIVE_DIR)) {
      fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
    }

    // Archive each GOOD module
    console.log('🔄 Archiving 24 GOOD quality modules...\n');
    let archivedCount = 0;
    const manifest = [];

    for (const moduleId of GOOD_MODULES) {
      const sourceFile = path.join(SOURCE_DIR, `${moduleId}.js`);
      const archiveFile = path.join(ARCHIVE_DIR, `${moduleId}.js`);

      if (!fs.existsSync(sourceFile)) {
        console.log(`⚠️  Source file not found: ${moduleId}.js`);
        continue;
      }

      // Copy file
      fs.copyFileSync(sourceFile, archiveFile);

      // Get validation data
      const validationResult = validation.allResults.find(r => r.moduleId === moduleId);
      
      manifest.push({
        moduleId,
        semanticName: validationResult?.details?.semanticNameValid?.value || 'unknown',
        confidence: validationResult?.confidence || 'unknown',
        validationScore: validationResult?.score || 'unknown',
        quality: validationResult?.quality || 'GOOD',
        checksPasseed: validationResult?.passed,
        archived: new Date().toISOString(),
      });

      archivedCount++;
      
      if ((archivedCount) % 6 === 0 || archivedCount === GOOD_MODULES.length) {
        console.log(`  [${String(archivedCount).padStart(2, ' ')}/${GOOD_MODULES.length}] Archived`);
      }
    }

    console.log(`✓ Archived ${archivedCount} modules\n`);

    // Write manifest
    fs.writeFileSync(MANIFEST_FILE, JSON.stringify({
      timestamp: new Date().toISOString(),
      totalArchived: archivedCount,
      quality: 'GOOD (75-90%)',
      modules: manifest,
      outputDirectory: ARCHIVE_DIR,
    }, null, 2));

    // Summary
    console.log('═══════════════════════════════════════════════════════════');
    console.log('✅ ARCHIVAL COMPLETE - READY FOR PRODUCTION');
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`\nArchived: ${archivedCount} modules`);
    console.log(`Quality: GOOD (75-90%)`);
    console.log(`Archive Directory: ${ARCHIVE_DIR}/`);
    console.log(`\nProduction Coverage Update:`);
    console.log(`  Previous: 330 modules (70.8%)`);
    console.log(`  + GOOD Approved: +${archivedCount}`);
    console.log(`  = New Total: ${330 + archivedCount} modules (${((330 + archivedCount)/466*100).toFixed(1)}%)`);
    console.log(`\nManifest: ${MANIFEST_FILE}`);
    console.log(`\n✅ Ready for production deployment!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

archiveGoodModules();
