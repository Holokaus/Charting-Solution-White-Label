const fs = require('fs');
const path = require('path');

const phaseDir = path.join(__dirname, '../phase-03-module-map');
const errors = [];
const passed = [];

function fail(msg) { errors.push(`✗ ${msg}`); }
function pass(msg) { passed.push(`✓ ${msg}`); }

function requireFile(f, minSize = 100) {
  const fp = path.join(phaseDir, f);
  if (!fs.existsSync(fp)) { fail(`${f} not found`); return null; }
  const c = fs.readFileSync(fp, 'utf8');
  if (c.length < minSize) { fail(`${f} too short (${c.length} bytes)`); return null; }
  return c;
}

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║  PHASE 3 STRICT VERIFICATION                         ║');
console.log('║  AST-based Module Dependency Graph                    ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

// ============================================
// CHECK 1: dependency-graph.json exists and is valid
// ============================================
console.log('→ Checking dependency-graph.json...');
const raw = requireFile('dependency-graph.json', 5000);
if (raw) {
  try {
    const graph = JSON.parse(raw);

    if (!graph.metadata || !graph.modules) {
      fail('dependency-graph.json missing metadata or modules');
    } else {
      pass('dependency-graph.json has metadata and modules');
    }

    const moduleCount = Object.keys(graph.modules).length;
    const edgeCount = Object.values(graph.modules).reduce((s, v) => s + (v.dependencies ? v.dependencies.length : 0), 0);

    console.log(`  Modules in graph: ${moduleCount}`);
    console.log(`  Dependency edges: ${edgeCount}`);

    // [1] At least 1000 modules extracted
    if (moduleCount >= 1000) {
      pass(`Graph contains ${moduleCount} modules (≥1000 required)`);
    } else {
      fail(`Only ${moduleCount} modules (need ≥1000)`);
    }

    // [2] At least 1000 dependency edges
    if (edgeCount >= 1000) {
      pass(`Graph has ${edgeCount} dependency edges (≥1000 required)`);
    } else {
      fail(`Only ${edgeCount} edges (need ≥1000)`);
    }

    // [3] Every module has a dependencies array
    let validModules = 0;
    let zeroDep = 0;
    for (const [mid, data] of Object.entries(graph.modules)) {
      if (Array.isArray(data.dependencies)) {
        validModules++;
        if (data.dependencies.length === 0) zeroDep++;
      }
    }
    if (validModules === moduleCount) {
      pass('All modules have dependencies array');
    } else {
      fail(`Only ${validModules}/${moduleCount} modules have dependencies array`);
    }

    // [4] Zero-dependency rate < 90% (at least 10% have deps)
    const zeroDepRate = (zeroDep / moduleCount * 100).toFixed(1);
    console.log(`  Zero-dependency modules: ${zeroDep} (${zeroDepRate}%)`);
    if (zeroDepRate < 90) {
      pass(`Zero-dependency rate ${zeroDepRate}% (<90% threshold)`);
    } else {
      fail(`Zero-dependency rate ${zeroDepRate}% (≥90% — too many leaf modules)`);
    }

    // [5] Extraction method recorded
    if (graph.metadata.extractionMethod === 'ast-based') {
      pass('Extraction method recorded as ast-based');
    } else {
      fail(`Unknown extraction method: ${graph.metadata.extractionMethod}`);
    }

    // [6] All dependency targets exist in the graph
    let missingTargets = 0;
    for (const [mid, data] of Object.entries(graph.modules)) {
      for (const dep of data.dependencies) {
        if (!graph.modules[dep]) missingTargets++;
      }
    }
    if (missingTargets === 0) {
      pass('All dependency targets exist in module manifest');
    } else {
      fail(`${missingTargets} dependency targets not in manifest`);
    }

    // [7] Every dependency count matches array length
    let countMismatch = 0;
    for (const [mid, data] of Object.entries(graph.modules)) {
      if (data.dependencyCount !== data.dependencies.length) {
        countMismatch++;
      }
    }
    if (countMismatch === 0) {
      pass('All dependencyCount values match dependencies array length');
    } else {
      fail(`${countMismatch} modules have mismatched dependencyCount`);
    }

    // [8] No self-referencing dependencies
    let selfRefs = 0;
    for (const [mid, data] of Object.entries(graph.modules)) {
      if (data.dependencies.includes(parseInt(mid))) selfRefs++;
    }
    if (selfRefs === 0) {
      pass('No self-referencing dependencies');
    } else {
      fail(`${selfRefs} modules reference themselves`);
    }

    // [9] Module 45 has at least 5 dependencies (known study module)
    const m45 = graph.modules[45];
    if (m45 && m45.dependencyCount >= 5) {
      pass(`Module 45 has ${m45.dependencyCount} dependencies (known hub module)`);
    } else if (m45) {
      fail(`Module 45 has only ${m45.dependencyCount} dependencies (expected ≥5)`);
    } else {
      fail('Module 45 not found in graph');
    }

  } catch (e) {
    fail(`dependency-graph.json invalid JSON: ${e.message}`);
  }
}

// ============================================
// CHECK 2: No old/deleted files remain
// ============================================
console.log('\n→ Checking for stale files...');
for (const stale of ['static-dependency-graph.json', 'verified-dependency-graph.json']) {
  const fp = path.join(phaseDir, stale);
  if (fs.existsSync(fp)) {
    fail(`Stale file still present: ${stale} (should have been deleted)`);
  } else {
    pass(`Stale file ${stale} is gone`);
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
  console.log('\n❌ PHASE 3 FAILED');
  process.exit(1);
} else {
  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║  ✅ PHASE 3 PASSED                                    ║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');
  process.exit(0);
}
