const fs = require('fs');
const path = require('path');

// This script verifies Phase 0 unbundling output
// Checks: >500 modules extracted, valid JavaScript, contains exports pattern

console.log('╔════════════════════════════════════════════════════╗');
console.log('║  PHASE 0 UNBUNDLING VERIFICATION                   ║');
console.log('╚════════════════════════════════════════════════════╝\n');

const modulesDir = 'reconstruction/phase-00-unbundling/modules';

if (!fs.existsSync(modulesDir)) {
    console.error('❌ FAIL: Modules directory does not exist');
    console.error(`   Expected: ${modulesDir}`);
    console.error('   Run: node reconstruction/phase-00-unbundling/tools/unbundle.js');
    process.exit(1);
}

const files = fs.readdirSync(modulesDir).filter(f => f.endsWith('.js'));

console.log(`→ Found ${files.length} .js files in ${modulesDir}`);

if (files.length < 500) {
    console.error(`\n❌ FAIL: Too few modules extracted`);
    console.error(`   Expected: >500 modules`);
    console.error(`   Got: ${files.length} modules`);
    console.error(`   Likely cause: Webpack regex pattern not matching correctly`);
    process.exit(1);
}

console.log(`✓ Module count is adequate: ${files.length} modules`);

// Sample and validate 20 random modules
const sampleSize = Math.min(20, files.length);
const sampleIndices = [];
for (let i = 0; i < sampleSize; i++) {
    sampleIndices.push(Math.floor(Math.random() * files.length));
}

let validCount = 0;
let invalidCount = 0;
let hasExportsCount = 0;
const invalidFiles = [];

for (const idx of sampleIndices) {
    const file = files[idx];
    const filePath = path.join(modulesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's valid JavaScript (basic check: can we parse it?)
    try {
        // Use Function constructor as a parser (simpler than importing acorn)
        new Function(content);
        validCount++;
        
        if (content.includes('exports') || content.includes('.exports') || content.includes('module')) {
            hasExportsCount++;
        }
    } catch (e) {
        invalidCount++;
        invalidFiles.push({
            file: file,
            error: e.message.substring(0, 100)
        });
    }
}

console.log(`\n→ Sample validation (${sampleSize} random modules):`);
console.log(`  Valid JavaScript:     ${validCount}/${sampleSize}`);
console.log(`  Invalid JavaScript:   ${invalidCount}/${sampleSize}`);
console.log(`  Contains exports:     ${hasExportsCount}/${sampleSize}`);

if (invalidCount > 0) {
    console.log(`\n  Invalid files:`);
    for (const inv of invalidFiles) {
        console.log(`    - ${inv.file}: ${inv.error}`);
    }
}

// Assess quality
let isValid = true;
const issues = [];

if (validCount < 15) {
    issues.push(`Most sampled modules are invalid JavaScript (${validCount}/20 valid)`);
    isValid = false;
}

if (hasExportsCount < 10) {
    issues.push(`Few modules contain exports pattern (${hasExportsCount}/20)`);
    // This is a warning, not a fatal failure
}

if (issues.length === 0) {
    console.log('\n╔════════════════════════════════════════════════════╗');
    console.log('║  ✅ PHASE 0 VERIFICATION PASSED                    ║');
    console.log('╚════════════════════════════════════════════════════╝');
    console.log(`\nSummary:`);
    console.log(`  Total modules extracted:  ${files.length}`);
    console.log(`  Sample validation:        ${validCount}/${sampleSize} valid`);
    console.log(`  Exports pattern:         ${hasExportsCount}/${sampleSize} found`);
    process.exit(0);
} else {
    console.log('\n❌ FAIL: Phase 0 verification failed');
    console.log('Issues:');
    for (const issue of issues) {
        console.log(`  - ${issue}`);
    }
    process.exit(1);
}
