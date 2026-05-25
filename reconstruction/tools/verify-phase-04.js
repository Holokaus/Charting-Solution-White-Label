const fs = require('fs');
const path = require('path');

const SPECS_DIR = 'reconstruction/phase-04-behavioral-specs/specs';
const errors = [];
const passed = [];

function fail(msg) { errors.push(`\u2717 ${msg}`); }
function pass(msg) { passed.push(`\u2713 ${msg}`); }

console.log('=== Phase 4 STRICT Verification ===\n');

// CHECK 1: At least 100 spec files
const specFiles = fs.readdirSync(SPECS_DIR).filter(f => f.endsWith('.md'));
console.log(`Spec files: ${specFiles.length}`);
if (specFiles.length >= 100) pass(`${specFiles.length} specs \u2265 100`);
else fail(`Only ${specFiles.length} specs (need \u2265 100)`);

// CHECK 2: Every spec has a confidence marker
let missingConfidence = 0;
for (const file of specFiles.slice(0, 20)) { // Sample 20
    const content = fs.readFileSync(path.join(SPECS_DIR, file), 'utf8');
    if (!/\[CERTAIN\]|\[LIKELY\]|\[UNCERTAIN\]|\[UNKNOWN\]/.test(content)) {
        missingConfidence++;
    }
}
if (missingConfidence === 0) pass('All sampled specs have confidence markers');
else fail(`${missingConfidence}/20 sampled specs missing confidence markers`);

// CHECK 3: No spec claims runtime observation
let runtimeClaims = 0;
for (const file of specFiles.slice(0, 20)) {
    const content = fs.readFileSync(path.join(SPECS_DIR, file), 'utf8').toLowerCase();
    if (content.includes('runtime') || content.includes('observed') || content.includes('executed') || content.includes('tested')) {
        runtimeClaims++;
    }
}
if (runtimeClaims === 0) pass('No sampled specs claim runtime observation');
else fail(`${runtimeClaims}/20 sampled specs falsely claim runtime observation`);

// CHECK 4: unknown-modules.md exists with counts
const unknownPath = 'reconstruction/phase-04-behavioral-specs/unknown-modules.md';
if (fs.existsSync(unknownPath)) {
    const content = fs.readFileSync(unknownPath, 'utf8');
    const rows = content.split('\n').filter(l => l.startsWith('|') && !l.includes('Module ID'));
    if (rows.length >= 50) pass(`${rows.length} unknown modules documented`);
    else fail(`Only ${rows.length} unknown module rows (need \u2265 50)`);
} else {
    fail('unknown-modules.md not found');
}

// CHECK 5: confidence-stats.md exists
const statsPath = 'reconstruction/phase-04-behavioral-specs/confidence-stats.md';
if (fs.existsSync(statsPath)) {
    const content = fs.readFileSync(statsPath, 'utf8');
    if (content.includes('[CERTAIN]') && content.includes('[LIKELY]')) {
        pass('confidence-stats.md has distribution table');
    } else {
        fail('confidence-stats.md missing confidence distribution');
    }
} else {
    fail('confidence-stats.md not found');
}

// CHECK 6: No module_descriptions or fabricated claims
let fabricated = 0;
for (const file of specFiles.slice(0, 20)) {
    const content = fs.readFileSync(path.join(SPECS_DIR, file), 'utf8');
    if (content.includes('definitely') || content.includes('certainly does') || content.includes('is known to')) {
        fabricated++;
    }
}
if (fabricated === 0) pass('No sampled specs use unqualified certainty language');
else fail(`${fabricated}/20 sampled specs use unqualified certainty language`);

// CHECK 7: module-groups.json exists and passes
const groupsPath = 'reconstruction/phase-04-behavioral-specs/groups/module-groups.json';
if (fs.existsSync(groupsPath)) {
    const groups = JSON.parse(fs.readFileSync(groupsPath, 'utf8'));
    const ids = new Set();
    let total = 0;
    let hasDup = false;
    for (const [name, data] of Object.entries(groups.groups)) {
        for (const id of data.module_ids) {
            if (ids.has(id)) { hasDup = true; break; }
            ids.add(id);
        }
        total += data.module_ids.length;
    }
    if (Object.keys(groups.groups).length >= 10) pass(`Groups: ${Object.keys(groups.groups).length} (\u2265 10)`);
    else fail(`Only ${Object.keys(groups.groups).length} groups (need \u2265 10)`);
    if (total >= 500) pass(`Modules assigned: ${total} (\u2265 500)`);
    else fail(`Only ${total} modules assigned (need \u2265 500)`);
    if (!hasDup) pass('No duplicate module IDs across groups');
    else fail('Duplicate module IDs found');
} else {
    fail('module-groups.json not found');
}

// CHECK 8: Three architecture docs exist
const docFiles = ['rendering-pipeline.md', 'dataflow-architecture.md', 'study-system.md'];
let docsFound = 0;
for (const doc of docFiles) {
    const docPath = `reconstruction/phase-04-behavioral-specs/docs/${doc}`;
    if (fs.existsSync(docPath)) {
        docsFound++;
        const content = fs.readFileSync(docPath, 'utf8');
        if (content.includes('[CERTAIN]') || content.includes('[LIKELY]') || content.includes('[UNCERTAIN]')) {
            pass(`${doc} has confidence markers`);
        } else {
            fail(`${doc} missing confidence markers`);
        }
    }
}
if (docsFound === 3) pass('All 3 architecture docs exist');
else fail(`Only ${docsFound}/3 architecture docs found`);

// FINAL REPORT
console.log(`\nPassed (${passed.length}):`);
passed.forEach(p => console.log(`  ${p}`));

if (errors.length > 0) {
    console.log(`\nErrors (${errors.length}):`);
    errors.forEach(e => console.log(`  ${e}`));
    console.log('\n\u274C PHASE 4 FAILED');
    process.exit(1);
} else {
    console.log('\n\u2705 PHASE 4 PASSED');
    process.exit(0);
}
