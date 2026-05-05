/**
 * Archive Round 3 High-Confidence GOOD Modules
 * Move validated GOOD modules to production-ready directory
 */
const fs = require('fs');
const path = require('path');

const APPLIED_DIR = './round3-high-confidence-applied';
const ARCHIVE_DIR = './round3-high-approved';
const DETAILS_FILE = './validation-round3-high-confidence-details.json';
const MANIFEST_FILE = './round3-high-approved-manifest.json';

/**
 * Archive GOOD modules
 */
async function archiveRound3High() {
  try {
    console.log('📦 Archiving Round 3 High-Confidence GOOD Modules\n');

    // Load validation details
    console.log('📂 Loading validation results...');
    const details = JSON.parse(fs.readFileSync(DETAILS_FILE, 'utf-8'));
    const goodModules = details.results.filter(r => r.quality === 'GOOD');
    console.log(`✓ Found ${goodModules.length} GOOD modules\n`);

    // Create archive directory
    if (!fs.existsSync(ARCHIVE_DIR)) {
      fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
    }

    // Archive GOOD modules
    console.log('📋 Archiving modules...');
    const manifest = {};
    let archived = 0;

    for (const module of goodModules) {
      const { moduleId, semantic, score } = module;
      const sourceFile = path.join(APPLIED_DIR, `${moduleId}.js`);

      if (fs.existsSync(sourceFile)) {
        const content = fs.readFileSync(sourceFile, 'utf-8');
        fs.writeFileSync(path.join(ARCHIVE_DIR, `${moduleId}.js`), content);

        manifest[moduleId] = {
          semanticName: semantic,
          quality: 'GOOD',
          score: score.toFixed(1),
          source: 'round3-high',
          archived: new Date().toISOString()
        };

        archived++;
      }
    }

    console.log(`✓ Archived ${archived} modules\n`);

    // Save manifest
    console.log('📄 Generating manifest...');
    fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));

    // Display summary
    const newTotal = 326 + archived;
    console.log('═══════════════════════════════════════');
    console.log('✅ ARCHIVAL COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`Archived: ${archived} GOOD modules`);
    console.log(`Archive Directory: ${ARCHIVE_DIR}`);
    console.log(`\nCoverage Update:`);
    console.log(`  Previous: 326 modules (70.0%)`);
    console.log(`  Current: ${newTotal} modules (${(newTotal / 466 * 100).toFixed(1)}%)`);
    console.log(`\n✅ Ready for deployment!`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

archiveRound3High();
