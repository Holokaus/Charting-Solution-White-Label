#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');

const phaseDir = path.join(__dirname, '../phase-00-unbundling');
const modulesDir = path.join(phaseDir, 'modules');
const errors = [];
const passed = [];

function fail(msg) { errors.push(`✗ ${msg}`); }
function pass(msg) { passed.push(`✓ ${msg}`); }

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║  PHASE 0 STRICT VERIFICATION                         ║');
console.log('║  Webpack Bundle Unbundling                           ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

// ============================================
// CHECK 1: modules/ directory exists
// ============================================
console.log('→ Checking modules directory...');
if (!fs.existsSync(modulesDir)) {
    fail('modules/ directory not found');
} else {
    pass('modules/ directory exists');
}

// ============================================
// CHECK 2: manifest.json exists and valid
// ============================================
console.log('\n→ Checking manifest.json...');
const manifestPath = path.join(phaseDir, 'manifest.json');
if (!fs.existsSync(manifestPath)) {
    fail('manifest.json not found');
} else {
    try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        if (!manifest.metadata || !manifest.chunks) {
            fail('manifest.json missing metadata or chunks');
        } else {
            pass('manifest.json exists with metadata and chunks');
            console.log(`  Total modules: ${manifest.metadata.totalModules}`);
            console.log(`  Total chunks: ${manifest.metadata.totalChunks}`);
            
            if (manifest.metadata.totalModules >= 500) {
                pass(`manifest.json reports ${manifest.metadata.totalModules} modules (≥500 required)`);
            } else {
                fail(`Only ${manifest.metadata.totalModules} modules in manifest (need ≥500)`);
            }
            
            if (manifest.metadata.extractionMethod === 'ast-based') {
                pass('Extraction method is AST-based (not regex)');
            } else {
                fail('Extraction method is NOT AST-based');
            }
        }
    } catch (e) {
        fail(`manifest.json invalid JSON: ${e.message}`);
    }
}

// ============================================
// CHECK 3: Module files exist
// ============================================
console.log('\n→ Checking module files...');
const moduleFiles = fs.readdirSync(modulesDir).filter(f => f.endsWith('.js'));
const moduleCount = moduleFiles.length;
console.log(`  Module files: ${moduleCount}`);

if (moduleCount >= 500) {
    pass(`${moduleCount} module .js files extracted (≥500 required)`);
} else {
    fail(`Only ${moduleCount} module files (need ≥500)`);
}

// Check naming convention (numeric filenames)
let allNumeric = true;
for (const f of moduleFiles.slice(0, 100)) {
    const name = path.basename(f, '.js');
    if (!/^\d+$/.test(name)) {
        allNumeric = false;
        fail(`Non-numeric module file: ${f}`);
        break;
    }
}
if (allNumeric) {
    pass('Module files use numeric naming convention');
}

// ============================================
// CHECK 4: Sample 20 modules, verify parsable
// ============================================
console.log('\n→ Validating module parseability...');
const sampleSize = Math.min(20, moduleFiles.length);
const shuffled = [...moduleFiles].sort(() => Math.random() - 0.5);
let validCount = 0;
let invalidCount = 0;

for (let i = 0; i < sampleSize; i++) {
    const code = fs.readFileSync(path.join(modulesDir, shuffled[i]), 'utf8');
    try {
        parser.parse(code, { sourceType: 'script', errorRecovery: true });
        validCount++;
    } catch (e) {
        invalidCount++;
        console.log(`  INVALID: ${shuffled[i]}: ${e.message}`);
    }
}

if (invalidCount === 0) {
    pass(`All ${sampleSize} sampled modules are valid JavaScript (parseable by @babel/parser)`);
} else {
    fail(`${invalidCount}/${sampleSize} sampled modules failed parsing`);
}

// ============================================
// CHECK 5: Module size distribution
// ============================================
console.log('\n→ Checking module size distribution...');
const sizes = moduleFiles.map(f => fs.statSync(path.join(modulesDir, f)).size);
sizes.sort((a, b) => a - b);

if (sizes.length > 0) {
    const min = sizes[0];
    const max = sizes[sizes.length - 1];
    const median = sizes[Math.floor(sizes.length / 2)];
    console.log(`  Size range: ${min} bytes - ${max} bytes`);
    console.log(`  Median size: ${median} bytes`);
    
    // Check that we have both small and large modules (not all tiny stubs)
    const smallCount = sizes.filter(s => s < 50).length;
    const largeCount = sizes.filter(s => s > 1000).length;
    console.log(`  Modules <50 bytes: ${smallCount}`);
    console.log(`  Modules >1000 bytes: ${largeCount}`);
    
    if (largeCount > 10) {
        pass(`Module size distribution shows ${largeCount} substantial modules (>1KB)`);
    } else {
        fail(`Only ${largeCount} modules >1KB (suspicious — may be all stubs)`);
    }
}

// ============================================
// CHECK 6: Verify unbundle.js uses @babel/parser
// ============================================
console.log('\n→ Checking unbundle.js implementation...');
const unbundlePath = path.join(__dirname, 'unbundle.js');
if (!fs.existsSync(unbundlePath)) {
    fail('unbundle.js not found');
} else {
    const source = fs.readFileSync(unbundlePath, 'utf8');
    if (source.includes('@babel/parser')) {
        pass('unbundle.js uses @babel/parser');
    } else {
        fail('unbundle.js does NOT use @babel/parser');
    }
}

// ============================================
// FINAL REPORT
// ============================================
console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║  VERIFICATION RESULTS                                 ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

console.log(`Passed (${passed.length}):`);
passed.forEach(p => console.log(`  ${p}`));

if (errors.length > 0) {
    console.log(`\nErrors (${errors.length}):`);
    errors.forEach(e => console.log(`  ${e}`));
    console.log('\n❌ PHASE 0 FAILED');
    process.exit(1);
} else {
    console.log('\n╔═══════════════════════════════════════════════════════╗');
    console.log('║  ✅ PHASE 0 PASSED                                    ║');
    console.log('╚═══════════════════════════════════════════════════════╝\n');
    process.exit(0);
}
