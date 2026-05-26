const fs = require('fs');
const path = require('path');

const SRC = 'reconstruction/phase-07-chart-engine/src';
const errors = [];
const passed = [];

function fail(msg) { errors.push('✗ ' + msg); }
function pass(msg) { passed.push('✓ ' + msg); }

function hasMethod(file, method) {
  return fs.readFileSync(path.join(SRC, file), 'utf8').includes(method);
}

// CHECK 1: Core files
const core = ['core/CanvasRenderer.js', 'core/Viewport.js', 'scales/PriceScale.js', 'scales/TimeScale.js'];
for (const f of core) {
  if (fs.existsSync(path.join(SRC, f))) pass(`${f} exists`);
  else fail(`${f} missing`);
}

// CHECK 2: Series renderers
const series = ['series/CandlestickRenderer.js', 'series/BarRenderer.js', 'series/LineRenderer.js', 'series/AreaRenderer.js', 'series/BaselineRenderer.js'];
let seriesCount = 0;
for (const f of series) {
  if (fs.existsSync(path.join(SRC, f))) { pass(`${f} exists`); seriesCount++; }
  else fail(`${f} missing`);
}
if (seriesCount >= 3) pass(`${seriesCount}/5 series renderers`);

// CHECK 3: Overlays
if (hasMethod('overlay/Crosshair.js', 'move')) pass('Crosshair tracks mouse');
else fail('Crosshair missing mouse tracking');

// CHECK 4: Canvas API usage
let canvasApi = 0;
function scanCanvasApi(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) scanCanvasApi(p);
    else if (entry.name.endsWith('.js')) {
      const c = fs.readFileSync(p, 'utf8');
      if (c.includes('getContext(') || c.includes('fillRect') || c.includes('clearRect') || c.includes('lineTo')) canvasApi++;
    }
  }
}
scanCanvasApi(SRC);
if (canvasApi >= 2) pass(`Canvas API used in ${canvasApi} files`);

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

// REPORT
console.log(`\nPassed (${passed.length}):`);
passed.forEach(p => console.log('  ' + p));
if (errors.length > 0) {
  console.log(`\nErrors (${errors.length}):`);
  errors.forEach(e => console.log('  ' + e));
  console.log('\n❌ PHASE 7 FAILED');
  process.exit(1);
} else {
  console.log('\n✅ PHASE 7 PASSED');
  process.exit(0);
}
