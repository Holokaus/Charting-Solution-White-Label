const fs = require('fs');
const path = require('path');

const SRC = 'reconstruction/phase-10-integration/src';
const errors = [];
const passed = [];

function fail(msg) { errors.push('✗ ' + msg); }
function pass(msg) { passed.push('✓ ' + msg); }

// CHECK 1: Entry point
if (fs.existsSync(path.join(SRC, 'index.js'))) pass('src/index.js exists');
else fail('src/index.js missing');

// CHECK 2: Vite config
if (fs.existsSync('reconstruction/phase-10-integration/vite.config.js')) pass('vite.config.js');
else fail('vite.config.js missing');

// CHECK 3: Demo page
if (fs.existsSync('reconstruction/phase-10-integration/demo/index.html')) pass('demo/index.html');
else fail('demo/index.html missing');

// CHECK 4: package.json has scripts
const pkgPath = 'reconstruction/phase-10-integration/package.json';
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg.scripts?.dev && pkg.scripts?.build) pass('package.json has dev+build scripts');
  else fail('package.json missing scripts');
} else {
  fail('package.json missing');
}

// CHECK 5: No webpack
let webpack = 0;
function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) scan(p);
    else if (entry.name.endsWith('.js')) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.includes('__webpack_require__') || /function\s*\(\s*e\s*,\s*t\s*,\s*i\s*\)/.test(c)) webpack++;
    }
  }
}
scan(SRC);
if (webpack === 0) pass('No webpack patterns');
else fail(`${webpack} files with webpack patterns`);

// REPORT
console.log(`\nPassed (${passed.length}):`);
passed.forEach(p => console.log('  ' + p));
if (errors.length > 0) {
  console.log(`\nErrors (${errors.length}):`);
  errors.forEach(e => console.log('  ' + e));
  console.log('\n❌ PHASE 10 FAILED');
  process.exit(1);
} else {
  console.log('\n✅ PHASE 10 PASSED');
  process.exit(0);
}
