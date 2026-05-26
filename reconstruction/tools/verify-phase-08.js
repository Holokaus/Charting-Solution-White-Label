const fs = require('fs');
const path = require('path');

const SRC = 'reconstruction/phase-08-drawing-tools/src';
const errors = [];
const passed = [];

function fail(msg) { errors.push('✗ ' + msg); }
function pass(msg) { passed.push('✓ ' + msg); }

// CHECK 1: ToolRegistry exists
if (fs.existsSync(path.join(SRC, 'ToolRegistry.js'))) pass('ToolRegistry.js');
else fail('ToolRegistry.js missing');

// CHECK 2: Basic tools
const basic = ['TrendLine.js', 'HorizontalLine.js', 'VerticalLine.js', 'Rectangle.js', 'Text.js'];
for (const f of basic) {
  if (fs.existsSync(path.join(SRC, 'tools', f))) pass(`tools/${f}`);
  else fail(`tools/${f} missing`);
}

// CHECK 3: Fibonacci tools
const fib = ['FibonacciRetracement.js', 'FibonacciExtension.js', 'FibonacciFan.js'];
for (const f of fib) {
  if (fs.existsSync(path.join(SRC, 'tools', f))) pass(`tools/${f}`);
  else fail(`tools/${f} missing`);
}

// CHECK 4: Persistence
if (fs.existsSync(path.join(SRC, 'persistence/DrawingState.js'))) pass('DrawingState.js');
else fail('DrawingState.js missing');

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
  console.log('\n❌ PHASE 8 FAILED');
  process.exit(1);
} else {
  console.log('\n✅ PHASE 8 PASSED');
  process.exit(0);
}
