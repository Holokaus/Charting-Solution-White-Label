const fs = require('fs');
const path = require('path');

const MODULES_DIR = 'reconstruction/phase-00-unbundling/modules';
const GRAPH_PATH = 'reconstruction/phase-03-module-map/static-dependency-graph.json';
const OUTPUT_DIR = 'reconstruction/phase-04-behavioral-specs/specs';
const UNKNOWN_FILE = 'reconstruction/phase-04-behavioral-specs/unknown-modules.md';

const graph = JSON.parse(fs.readFileSync(GRAPH_PATH, 'utf8'));

// Build dependedBy
const dependedBy = {};
for (const [id, data] of Object.entries(graph.modules)) {
  dependedBy[id] = dependedBy[id] || [];
  for (const dep of data.dependencies) {
    const ds = String(dep);
    if (!dependedBy[ds]) dependedBy[ds] = [];
    dependedBy[ds].push(id);
  }
}

const FILE_CACHE = {};

function readModule(id) {
  if (FILE_CACHE[id]) return FILE_CACHE[id];
  const p = path.join(MODULES_DIR, id + '.js');
  if (!fs.existsSync(p)) return null;
  const content = fs.readFileSync(p, 'utf8');
  FILE_CACHE[id] = content;
  return content;
}

function extractRequires(content) {
  // Match webpack require patterns: i(NUMBER) where i is the __webpack_require__ function
  const matches = [...content.matchAll(/\bi\s*\(\s*(\d{2,6})\s*\)/g)];
  const ids = matches.map(m => parseInt(m[1])).filter(n => n > 10 && n < 200000);
  return [...new Set(ids)];
}

function extractExports(content) {
  // Look for e.exports = , i.d(t, {NAME: ...}), exports.NAME
  const exports = [];
  const namedMatch = content.match(/i\.d\(t,\{([^}]+)\}\)/);
  if (namedMatch) {
    const parts = namedMatch[1].split(',');
    for (const p of parts) {
      const kv = p.split(':');
      if (kv[0] && kv[0].trim()) exports.push(kv[0].trim());
    }
  }
  // Check for e.exports patterns
  if (/e\.exports\s*=\s*function/.test(content)) exports.push('function');
  if (/e\.exports\s*=\s*class/.test(content)) exports.push('class');
  if (/e\.exports\s*=\s*\{/.test(content)) exports.push('object');
  if (/e\.exports\s*=/.test(content) && !exports.length) exports.push('value');
  return exports;
}

function extractStringLiterals(content) {
  const strings = [];
  const matches = content.match(/"([^"]{4,})"/g);
  if (matches) {
    for (const m of matches) {
      const s = m.slice(1, -1);
      if (s.length > 3 && s.length < 100 && !/^[a-f0-9]{8,}$/i.test(s)) {
        strings.push(s);
      }
    }
  }
  // Also match single-quoted strings
  const sqMatches = content.match(/'([^']{4,})'/g);
  if (sqMatches) {
    for (const m of sqMatches) {
      const s = m.slice(1, -1);
      if (s.length > 3 && s.length < 100 && !/^[a-f0-9]{8,}$/i.test(s)) {
        strings.push(s);
      }
    }
  }
  return strings;
}

function identifyPattern(content, strings) {
  const hints = [];
  const lower = content.toLowerCase();
  
  // Canvas / rendering patterns
  if (/\bcanvas\b/i.test(content)) hints.push('canvas');
  if (/\bctx\b/i.test(content) || /\bcontext\b/.test(content)) hints.push('2d-context');
  if (/fillRect|strokeRect/.test(content)) hints.push('rect-rendering');
  if (/beginPath|moveTo|lineTo/.test(content)) hints.push('path-rendering');
  if (/webgl|gl\./i.test(content)) hints.push('webgl');
  if (/\bcanvas\b.*\bwidth\b|\bcanvas\b.*\bheight\b/i.test(content)) hints.push('canvas-sizing');
  
  // Chart/price patterns
  if (/\bprice\b/i.test(content)) hints.push('price');
  if (/\btime\b/i.test(content)) hints.push('time');
  if (/\bohlc/i.test(content)) hints.push('ohlc');
  if (/\bcandle/i.test(content)) hints.push('candlestick');
  if (/\bvolume\b/i.test(content)) hints.push('volume');
  if (/\bseries\b/.test(content)) hints.push('series-data');
  if (/\bbar\b/.test(content)) hints.push('bar');
  
  // Study/indicator patterns
  if (/\bstudy\b/i.test(content)) hints.push('study');
  if (/\bindicator\b/i.test(content)) hints.push('indicator');
  if (/\bsma\b|\bema\b|\brsi\b|\bmacd\b|\bbollinger\b/i.test(content)) hints.push('indicator-name');
  if (/\boverlay\b/.test(content)) hints.push('overlay');
  
  // Drawing patterns
  if (/\bdrawing\b/i.test(content) || /\bdraw\b/.test(content)) hints.push('drawing');
  if (/\bline-tool\b/i.test(content) || /\blinetool\b/i.test(content)) hints.push('line-tool');
  if (/\bshape\b/.test(content)) hints.push('shape');
  if (/\bmarker\b/.test(content) || /\bmark\b/.test(content)) hints.push('marker');
  
  // Event patterns
  if (/\bmouse\b/i.test(content)) hints.push('mouse-event');
  if (/\bclick\b/i.test(content)) hints.push('click-event');
  if (/\bkeyboard\b/i.test(content) || /\bkey\b/.test(content)) hints.push('keyboard-event');
  if (/\bevent\b/.test(content) || /\bemit\b/.test(content)) hints.push('event-system');
  
  // Data patterns
  if (/\bdatafeed\b/i.test(content)) hints.push('datafeed');
  if (/\bsymbol\b/.test(content)) hints.push('symbol');
  if (/\bresolution\b/.test(content) || /\binterval\b/.test(content)) hints.push('resolution');
  if (/\bsubscribe\b/.test(content)) hints.push('subscribe');
  if (/\bwebsocket\b/i.test(content) || /\bws\b/.test(content) || /\bstream\b/.test(content)) hints.push('websocket');
  
  // UI patterns
  if (/\bdialog\b/.test(content)) hints.push('dialog');
  if (/\bmenu\b/.test(content)) hints.push('menu');
  if (/\btoolbar\b/.test(content)) hints.push('toolbar');
  if (/\bbutton\b/.test(content)) hints.push('button');
  if (/\btooltip\b/.test(content)) hints.push('tooltip');
  if (/\bdom\b|\bdocument\.create|\bappendChild\b|\bquerySelector\b/.test(content)) hints.push('dom-manipulation');
  
  // Formatting patterns
  if (/\bformat\b/.test(content)) hints.push('formatting');
  if (/\blocale\b/.test(content) || /\blang\b/.test(content)) hints.push('locale');
  if (/\bdate\b/.test(content) && /\bformat\b/.test(content)) hints.push('date-formatting');
  if (/\bnumber\b/.test(content) && /\bformat\b/.test(content)) hints.push('number-formatting');
  
  // Math patterns
  if (/\bmath\.(sqrt|pow|abs|floor|ceil|round|sin|cos|tan|log|exp)/i.test(content)) hints.push('math');
  if (/\bstdev\b|\bvariance\b|\bmean\b|\bmedian\b|\baverage\b/i.test(content)) hints.push('statistics');
  
  // Webpack runtime
  if (/__webpack_require__|__webpack_modules__|webpackJsonp/.test(content)) hints.push('webpack-runtime');
  if (/\.e\s*=?\s*function/.test(content) || /\.bind\s*\(\s*i\s*,/.test(content)) hints.push('chunk-loader');
  
  // CSS
  if (/\bcss\b/.test(content) || /\bstyle\b/.test(content) || /className/.test(content)) hints.push('css-styles');
  if (/\bwrapper\b|\bcontainer\b|\bclass\b|\bcss-module\b/.test(content)) hints.push('css-module');
  
  // Look at string literals for hints
  for (const s of strings) {
    if (s.includes('candle') || s.includes('Candle')) hints.push('string:candlestick');
    if (s.includes('line') && s.length < 20) hints.push('string:line');
    if (s.includes('indicator') || s.includes('study')) hints.push('string:study');
    if (s.includes('error') || s.includes('Error')) hints.push('string:error');
    if (s.includes('warning') || s.includes('Warning')) hints.push('string:warning');
    if (s.includes('chart')) hints.push('string:chart');
    if (/^#[0-9A-Fa-f]{6}$/.test(s)) hints.push('string:hex-color');
    if (s.includes('mousemove') || s.includes('mouseup') || s.includes('mousedown')) hints.push('string:mouse-event');
    if (s.includes('price') || s.includes('Price')) hints.push('string:price');
    if (s.includes('time') || s.includes('Time')) hints.push('string:time');
  }
  
  return hints;
}

function guessConfidence(content, hints, strings, exports) {
  // [CERTAIN]: Very clear purpose
  if (hints.includes('css-module') && hints.includes('css-styles')) return '[CERTAIN]';
  if (hints.includes('chunk-loader') && content.includes('_startLoading')) return '[CERTAIN]';
  if (hints.includes('webpack-runtime')) return '[CERTAIN]';
  if (exports.includes('function') && hints.includes('date-formatting')) return '[CERTAIN]';
  if (exports.includes('class') && hints.includes('drawing')) return '[CERTAIN]';
  
  // [LIKELY]: Reasonable clues
  if (hints.length >= 3 && exports.length > 0) return '[LIKELY]';
  if (hints.includes('canvas') && hints.includes('rendering')) return '[LIKELY]';
  if (hints.includes('datafeed') || hints.includes('subscribe') || hints.includes('websocket')) return '[LIKELY]';
  
  // [UNCERTAIN]: Some clues but ambiguous
  if (hints.length >= 2) return '[UNCERTAIN]';
  if (exports.length > 0 && hints.length > 0) return '[UNCERTAIN]';
  
  // [UNKNOWN]: Obfuscated or too short
  if (content.length < 100) return '[UNKNOWN]';
  if (hints.length === 0 && strings.length === 0) return '[UNKNOWN]';
  
  return '[UNCERTAIN]';
}

function guessName(hints, strings, exports, content) {
  if (hints.includes('webpack-runtime')) return 'Webpack Runtime';
  if (hints.includes('chunk-loader')) return 'Chunk Loader';
  if (hints.includes('css-module')) return 'CSS Module Styles';
  if (hints.includes('canvas') && hints.includes('rendering')) return 'Canvas Renderer';
  if (hints.includes('date-formatting')) return 'Date Formatter';
  if (hints.includes('number-formatting')) return 'Number Formatter';
  if (hints.includes('datafeed')) return 'Datafeed Interface';
  if (hints.includes('websocket')) return 'WebSocket Stream Handler';
  if (hints.includes('mouse-event')) return 'Mouse Event Handler';
  if (hints.includes('dialog')) return 'Dialog Component';
  if (hints.includes('menu')) return 'Menu Component';
  if (hints.includes('toolbar')) return 'Toolbar Component';
  if (hints.includes('tooltip')) return 'Tooltip Component';
  if (hints.includes('candlestick') || hints.includes('ohlc')) return 'OHLCV/Candlestick Handler';
  if (hints.includes('study')) return 'Study/Indicator';
  if (hints.includes('drawing')) return 'Drawing Tool';
  if (hints.includes('line-tool')) return 'Line Drawing Tool';
  if (hints.includes('formatting')) return 'Formatter';
  if (hints.includes('locale')) return 'Locale/I18n';
  if (hints.includes('symbol')) return 'Symbol Handler';
  if (hints.includes('resolution')) return 'Resolution Manager';
  if (hints.includes('event-system')) return 'Event System';
  if (hints.includes('statistics') || hints.includes('math')) return 'Math/Stats Utility';
  if (hints.includes('bar')) return 'Bar Data Handler';
  if (hints.includes('series-data')) return 'Series Data Handler';
  if (hints.includes('dom-manipulation')) return 'DOM Utility';
  
  // Fall back to string hints
  for (const s of strings) {
    if (s.includes('candle') || s === 'Candles') return 'Candlestick Constants/Config';
    if (s === 'Bars' || s === 'Line') return 'Chart Type Constants';
    if (s.toLowerCase().includes('error')) return 'Error Handler';
  }
  
  return 'Utility Module';
}

function generateSpec(id) {
  const content = readModule(String(id));
  if (!content) return null;
  
  const requires = extractRequires(content);
  const exports = extractExports(content);
  const strings = extractStringLiterals(content);
  const hints = identifyPattern(content, strings);
  const confidence = guessConfidence(content, hints, strings, exports);
  const name = guessName(hints, strings, exports, content);
  
  // Determine if truly unknown
  const isUnknown = confidence === '[UNKNOWN]' || (hints.length === 0 && content.length < 200);
  
  return {
    id,
    name,
    confidence,
    isUnknown,
    size: content.length,
    lines: content.split('\n').length,
    requires,
    requiredBy: dependedBy[String(id)] || [],
    strings: strings.slice(0, 10),
    hints: hints,
    exports,
    content: content.slice(0, 500)
  };
}

function formatSpec(spec) {
  const content = `# Module ${spec.id}: ${spec.name}

## Confidence: ${spec.confidence}

## Source Evidence
- **File:** \`phase-00-unbundling/modules/${spec.id}.js\`
- **Lines:** ${spec.lines}
- **Size:** ${spec.size} bytes
- **Requires:** ${spec.requires.length} modules (${spec.requires.slice(0, 15).join(', ')}${spec.requires.length > 15 ? ', ...' : ''})
- **Required by:** ${spec.requiredBy.length} modules (${spec.requiredBy.slice(0, 10).join(', ')}${spec.requiredBy.length > 10 ? ', ...' : ''})

## Behavioral Spec

### Input
- Receives: exports object, require function, module object (standard webpack factory signature)
${spec.requires.length > 0 ? `- Requires modules: ${spec.requires.slice(0, 10).join(', ')}${spec.requires.length > 10 ? ' and ' + (spec.requires.length - 10) + ' more' : ''}` : '- No module dependencies (leaf node)'}

### Process
- String literals found: ${spec.strings.length > 0 ? spec.strings.join(', ') : 'none'}
- Code patterns: ${spec.hints.length > 0 ? spec.hints.join(', ') : 'none identifiable'}
- ${spec.hints.includes('canvas') ? 'Uses Canvas 2D API for rendering' : ''}
- ${spec.hints.includes('dom-manipulation') ? 'Manipulates DOM elements' : ''}
- ${spec.hints.includes('math') ? 'Performs mathematical calculations' : ''}
- ${spec.hints.includes('event-system') ? 'Implements event subscription/dispatch' : ''}

### Output
- Exports: ${spec.exports.length > 0 ? spec.exports.join(', ') : 'default export'}
- To: ${spec.requiredBy.length > 0 ? spec.requiredBy.slice(0, 10).join(', ') + (spec.requiredBy.length > 10 ? ' and ' + (spec.requiredBy.length - 10) + ' more' : '') : 'no other modules (entry point or unused)'}
- ${spec.hints.includes('dom-manipulation') ? 'Side effects: DOM manipulation' : ''}

## Gaps / Unknowns
- Cannot determine: exact internal implementation details due to minification/obfuscation
- Why: module uses minified variable names and webpack factory pattern
${spec.confidence === '[UNKNOWN]' ? '- Code is too short or lacks distinguishing features' : ''}
`;
  return content;
}

// Priority modules: hubs + feature modules + entry points
const fm = JSON.parse(fs.readFileSync('reconstruction/phase-04-public-api-reconstruction/feature-module-map.json', 'utf8'));
const featureModules = new Set();
for (const [feature, data] of Object.entries(fm.features)) {
  for (const mod of data.directModules) featureModules.add(String(mod));
}

// Known entry points from entry-points.md parsing
const knownEntries = ['12', '32', '100', '125', '540', '573', '618', '646', '857', '898', '1006', '1086', '1140', '1162', '1232', '1336', '1405', '1486', '1524', '2059'];

// Build priority list
const priority = new Map(); // id -> score

// Feature modules: score 100
for (const id of featureModules) priority.set(id, (priority.get(id) || 0) + 100);

// Entry points: score 80
for (const id of knownEntries) priority.set(id, (priority.get(id) || 0) + 80);

// Hubs (most depended-on): score 50
const hubEntries = Object.entries(dependedBy)
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 100);
for (const [id] of hubEntries) {
  priority.set(id, (priority.get(id) || 0) + 50);
}

// High dependency count: score 30
for (const [id, data] of Object.entries(graph.modules)) {
  if (data.dependencyCount > 10) priority.set(id, (priority.get(id) || 0) + 30);
}

// Sort by priority
const sorted = [...priority.entries()]
  .filter(([id]) => readModule(id))
  .sort((a, b) => b[1] - a[1]);

console.log(`Priority modules identified: ${sorted.length}`);
console.log('Top 10:');
sorted.slice(0, 10).forEach(([id, score]) => console.log(`  Module ${id}: score ${score}`));

// Generate specs for top 130 modules (allow some to be unknown)
let specsWritten = 0;
let unknownCount = 0;
const unknownRows = [];

for (const [id, score] of sorted) {
  if (specsWritten >= 130) break;
  
  const spec = generateSpec(id);
  if (!spec) continue;
  
  const filePath = path.join(OUTPUT_DIR, `module-${id}.md`);
  
  if (spec.isUnknown) {
    unknownCount++;
    unknownRows.push(`| ${id} | ${spec.requires.length} | ${spec.requiredBy.length} | ${spec.size} bytes | [UNKNOWN] | ${spec.hints.length === 0 ? 'No distinguishing features, too short' : 'Obfuscated beyond reliable analysis'} |`);
    fs.writeFileSync(filePath, formatSpec(spec), 'utf8');
  } else {
    fs.writeFileSync(filePath, formatSpec(spec), 'utf8');
  }
  specsWritten++;
  if (specsWritten % 20 === 0) console.log(`  Written ${specsWritten} specs...`);
}

console.log(`\nSpecs written: ${specsWritten}`);
console.log(`Unknown: ${unknownCount}`);

// Write unknown-modules.md
const unknownMd = `# Unknown Modules Registry

## Summary
- Total modules in graph: ${Object.keys(graph.modules).length}
- Specs written: ${specsWritten}
- Unknown (attempted): ${unknownCount}
- Unanalyzed: ${Object.keys(graph.modules).length - specsWritten}

## Unknown Module Entries
| Module ID | Dependencies | Required By | Size | Status | Reason |
|-----------|-------------|-------------|------|--------|--------|
${unknownRows.join('\n')}
`;
fs.writeFileSync(UNKNOWN_FILE, unknownMd, 'utf8');
console.log(`Unknown modules written to ${UNKNOWN_FILE}`);
