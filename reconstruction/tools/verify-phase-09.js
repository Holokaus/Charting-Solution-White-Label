const fs = require('fs');
const path = require('path');

const SRC = 'reconstruction/phase-09-studies-indicators/src';
const errors = [];
const passed = [];

function fail(msg) { errors.push('✗ ' + msg); }
function pass(msg) { passed.push('✓ ' + msg); }

// CHECK 1: Registry
if (fs.existsSync(path.join(SRC, 'StudyRegistry.js'))) pass('StudyRegistry.js');
else fail('StudyRegistry.js missing');

// CHECK 2: Studies
const studies = ['MovingAverage.js', 'RSI.js', 'MACD.js', 'BollingerBands.js', 'Volume.js'];
for (const f of studies) {
  if (fs.existsSync(path.join(SRC, 'studies', f))) pass(`studies/${f}`);
  else fail(`studies/${f} missing`);
}

// CHECK 3: Renderers
const renderers = ['StudyRenderer.js', 'HistogramRenderer.js', 'LineRenderer.js', 'BandRenderer.js'];
for (const f of renderers) {
  if (fs.existsSync(path.join(SRC, 'renderers', f))) pass(`renderers/${f}`);
  else fail(`renderers/${f} missing`);
}

// CHECK 4: No webpack
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
  console.log('\n❌ PHASE 9 FAILED');
  process.exit(1);
} else {
  console.log('\n✅ PHASE 9 PASSED');
  process.exit(0);
}
