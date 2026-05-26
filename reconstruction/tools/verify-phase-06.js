const fs = require('fs');
const path = require('path');

const SRC = 'reconstruction/phase-06-widget-core/src';
const errors = [];
const passed = [];

function fail(msg) { errors.push('✗ ' + msg); }
function pass(msg) { passed.push('✓ ' + msg); }

function hasMethod(file, method) {
  const content = fs.readFileSync(path.join(SRC, file), 'utf8');
  return content.includes(method);
}

// CHECK 1: All files exist
const files = ['StateMachine.js', 'MessageBridge.js', 'ThemeManager.js', 'LayoutManager.js', 'CrossFrameSync.js'];
for (const f of files) {
  if (fs.existsSync(path.join(SRC, f))) pass(`${f} exists`);
  else fail(`${f} missing`);
}

// CHECK 2: StateMachine has required methods
if (hasMethod('StateMachine.js', 'transition(')) pass('StateMachine.transition()');
else fail('StateMachine missing transition()');
if (hasMethod('StateMachine.js', 'UNINITIALIZED')) pass('StateMachine has UNINITIALIZED');
else fail('StateMachine missing UNINITIALIZED');

// CHECK 3: MessageBridge has Promise-based send
if (hasMethod('MessageBridge.js', 'postMessage')) pass('MessageBridge uses postMessage');
else fail('MessageBridge missing postMessage');
if (hasMethod('MessageBridge.js', 'Promise')) pass('MessageBridge uses Promise');
else fail('MessageBridge missing Promise');

// CHECK 4: ThemeManager applies CSS variables
if (hasMethod('ThemeManager.js', '--tv-color')) pass('ThemeManager uses CSS vars');
else fail('ThemeManager missing CSS variables');

// CHECK 5: LayoutManager serializes
if (hasMethod('LayoutManager.js', 'save(')) pass('LayoutManager.save()');
else fail('LayoutManager missing save()');
if (hasMethod('LayoutManager.js', 'load(')) pass('LayoutManager.load()');
else fail('LayoutManager missing load()');

// CHECK 6: No webpack patterns
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
  console.log('\n❌ PHASE 6 FAILED');
  process.exit(1);
} else {
  console.log('\n✅ PHASE 6 PASSED');
  process.exit(0);
}
