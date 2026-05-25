const fs = require('fs');
const path = require('path');

const PHASE_DIR = path.join(__dirname, '../phase-03-module-map');
const errors = [];
const passed = [];

function fail(msg) { errors.push(`✗ ${msg}`); }
function pass(msg) { passed.push(`✓ ${msg}`); }

function requireJSON(f) {
    const fp = path.join(PHASE_DIR, f);
    if (!fs.existsSync(fp)) { fail(`${f} not found`); return null; }
    try { return JSON.parse(fs.readFileSync(fp, 'utf8')); } 
    catch(e) { fail(`${f} invalid JSON: ${e.message}`); return null; }
}

console.log('=== Phase 3 STRICT Verification ===\n');

// CHECK 1: Static graph covers >80% of modules
const staticGraph = requireJSON('static-dependency-graph.json');
if (staticGraph) {
    const total = staticGraph.metadata?.total_modules || 0;
    const covered = Object.keys(staticGraph.modules || {}).length;
    const coverage = total > 0 ? (covered / total) * 100 : 0;
    console.log(`Module coverage: ${covered}/${total} (${coverage.toFixed(1)}%)`);
    if (coverage >= 80) pass(`Coverage ${coverage.toFixed(1)}% ≥ 80%`);
    else fail(`Coverage ${coverage.toFixed(1)}% < 80%`);
}

// CHECK 2: Verified graph exists with honest runtime flags
const verifiedGraph = requireJSON('verified-dependency-graph.json');
if (verifiedGraph) {
    let observed = 0, totalDeps = 0;
    for (const [modId, data] of Object.entries(verifiedGraph.modules || {})) {
        const deps = data.dependencies || [];
        totalDeps += deps.length;
        if (data.runtime_observed === true) observed += deps.length;
    }
    const rate = totalDeps > 0 ? (observed / totalDeps) * 100 : 0;
    console.log(`Runtime-confirmed deps: ${observed}/${totalDeps} (${rate.toFixed(1)}%)`);
    if (rate >= 60) pass(`Runtime rate ${rate.toFixed(1)}% ≥ 60%`);
    else fail(`Runtime rate ${rate.toFixed(1)}% < 60%`);
    
    // CHECK 3: Honest discrepancies documented
    const disc = verifiedGraph.metadata?.discrepancies;
    if (disc && disc.unverified_modules > 1000) {
        pass(`Discrepancies documented: ${disc.unverified_modules} unverified modules`);
    } else {
        fail('Missing honest discrepancies (need >1000 unverified_modules documented)');
    }
}

// CHECK 4: Entry points have actual numeric module IDs, no placeholders
const entryPath = path.join(PHASE_DIR, 'entry-points.md');
if (fs.existsSync(entryPath)) {
    const content = fs.readFileSync(entryPath, 'utf8');
    const hasPlaceholder = /see chunk manifest for related chunks/i.test(content);
    const hasNumeric = /\|\s*\d+\s*\|.*\|.*(widget|chart|study|draw|symbol|theme|save)/i.test(content);
    
    if (hasPlaceholder) fail('entry-points.md still contains placeholder text');
    else pass('No placeholder text in entry-points.md');
    
    if (hasNumeric) pass('entry-points.md contains numeric module ID mappings');
    else fail('entry-points.md missing numeric module ID to API feature mappings');
} else {
    fail('entry-points.md not found');
}

// CHECK 5: Chunk manifest has ≥50 chunks
const chunkManifest = requireJSON('chunk-manifest.json');
if (chunkManifest) {
    const chunkCount = Object.keys(chunkManifest.chunks || {}).length;
    console.log(`Chunks documented: ${chunkCount}`);
    if (chunkCount >= 50) pass(`${chunkCount} chunks ≥ 50`);
    else fail(`${chunkCount} chunks < 50`);
}

// FINAL REPORT
console.log(`\nPassed (${passed.length}):`);
passed.forEach(p => console.log(`  ${p}`));

if (errors.length > 0) {
    console.log(`\nErrors (${errors.length}):`);
    errors.forEach(e => console.log(`  ${e}`));
    console.log('\n❌ PHASE 3 FAILED');
    process.exit(1);
} else {
    console.log('\n✅ PHASE 3 PASSED');
    process.exit(0);
}
