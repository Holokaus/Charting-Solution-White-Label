const fs = require('fs');
const path = require('path');

const SRC_DIR = 'reconstruction/phase-05-public-api-reconstruction/src';
const errors = [];
const passed = [];

function fail(msg) { errors.push('\u2717 ' + msg); }
function pass(msg) { passed.push('\u2713 ' + msg); }

function fileExists(p) {
  return fs.existsSync(path.join(SRC_DIR, p));
}

function readFile(p) {
  return fs.readFileSync(path.join(SRC_DIR, p), 'utf8');
}

console.log('=== Phase 5 STRICT Verification ===\n');

// CHECK 1: Core files exist
const requiredFiles = [
  'api/TradingView.js',
  'api/Widget.js',
  'api/ChartAPI.js',
  'datafeed/IDatafeed.js',
  'datafeed/MockDatafeed.js',
  'utils/EventEmitter.js',
  'utils/Validator.js',
  'iframe/IFrameHost.js'
];
for (const f of requiredFiles) {
  if (fileExists(f)) pass(`${f} exists`);
  else fail(`${f} missing`);
}

// CHECK 2: No webpack patterns in source
let webpackPatterns = 0;
function scanForWebpack(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanForWebpack(fullPath);
    } else if (entry.name.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('__webpack_require__') || 
          content.includes('__webpack_modules__') ||
          /function\s*\(\s*e\s*,\s*t\s*,\s*i\s*\)/.test(content)) {
        webpackPatterns++;
        console.log(`  Webpack pattern in ${entry.name}`);
      }
    }
  }
}
scanForWebpack(SRC_DIR);
if (webpackPatterns === 0) pass('No webpack patterns in reconstructed source');
else fail(`${webpackPatterns} files contain webpack patterns`);

// CHECK 3: TradingView.js exports namespace with required properties
if (fileExists('api/TradingView.js')) {
  const content = readFile('api/TradingView.js');
  const requiredExports = ['ChartStyle', 'CrosshairMode', 'PriceScaleMode', 'LineStyle', 'LineStudyPlotStyle', 'StudyPlotType', 'version'];
  let missingExports = 0;
  for (const exp of requiredExports) {
    if (content.includes(exp)) pass(`TradingView has ${exp}`);
    else { fail(`TradingView missing ${exp}`); missingExports++; }
  }
  if (content.includes('widget:') || content.includes('Widget')) pass('TradingView.widget is exported');
  else fail('TradingView.widget not found');
}

// CHECK 4: Widget.js has required methods
if (fileExists('api/Widget.js')) {
  const content = readFile('api/Widget.js');
  const requiredMethods = [
    'save(', 'load(', 'setSymbol(', 'chart(', 'remove(', 'symbolInterval(', 'getIntervals(',
    'setTimeFrame(', 'getStudiesList(', 'getStudyInputs(', 'layout(', 'setLayout(',
    'changeTheme(', 'getTheme(', 'activeChart(', 'chartsCount(', 'setActiveChart(',
    'selectLineTool(', 'undo(', 'redo(', 'clearUndoHistory(', 'undoRedoState(',
    'subscribe(', 'unsubscribe('
  ];
  let missingMethods = 0;
  for (const method of requiredMethods) {
    if (content.includes(method)) pass(`Widget has method: ${method.replace('(', '')}`);
    else { fail(`Widget missing method: ${method.replace('(', '')}`); missingMethods++; }
  }
}

// CHECK 5: Datafeed interface is abstract
if (fileExists('datafeed/IDatafeed.js')) {
  const content = readFile('datafeed/IDatafeed.js');
  const methods = ['onReady(', 'resolveSymbol(', 'getBars(', 'subscribeBars(', 'unsubscribeBars(', 'searchSymbols('];
  let missingMethods = 0;
  for (const method of methods) {
    if (content.includes(method)) pass(`IDatafeed has method: ${method.replace('(', '')}`);
    else { fail(`IDatafeed missing method: ${method.replace('(', '')}`); missingMethods++; }
  }
  if (content.includes('throw new Error')) pass('IDatafeed methods throw (abstract)');
  else fail('IDatafeed methods do not throw');
}

// CHECK 6: EventEmitter supports subscribe/unsubscribe
if (fileExists('utils/EventEmitter.js')) {
  const content = readFile('utils/EventEmitter.js');
  if (content.includes('on(') && content.includes('off(') && content.includes('emit(')) {
    pass('EventEmitter has on/off/emit');
  } else {
    fail('EventEmitter missing on/off/emit');
  }
}

// CHECK 7: package.json uses ES modules
const pkgPath = 'reconstruction/phase-05-public-api-reconstruction/package.json';
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (pkg.type === 'module') pass('package.json uses ES modules');
  else fail('package.json missing "type": "module"');
} else {
  fail('package.json not found');
}

// CHECK 8: Demo page exists
const demoPath = 'reconstruction/phase-05-public-api-reconstruction/demo/index.html';
if (fs.existsSync(demoPath)) {
  const content = fs.readFileSync(demoPath, 'utf8');
  if (content.includes('TradingView.widget')) pass('Demo page references TradingView.widget');
  else fail('Demo page missing TradingView.widget reference');
} else {
  fail('demo/index.html not found');
}

// FINAL REPORT
console.log(`\nPassed (${passed.length}):`);
passed.forEach(p => console.log(`  ${p}`));

if (errors.length > 0) {
  console.log(`\nErrors (${errors.length}):`);
  errors.forEach(e => console.log(`  ${e}`));
  console.log('\n\u274C PHASE 5 FAILED');
  process.exit(1);
} else {
  console.log('\n\u2705 PHASE 5 PASSED');
  process.exit(0);
}
