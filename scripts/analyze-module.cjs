const fs = require('fs');
const path = require('path');

const moduleId = process.argv[2];
if (!moduleId) {
  console.error('Usage: node analyze-module.cjs <module-id>');
  process.exit(1);
}

const inputPath = path.join(__dirname, '..', 'modules-v2', `${moduleId}.js`);
const content = fs.readFileSync(inputPath, 'utf8').trim();

// Extract module code - handle newline at end
const match = content.match(/^\d+:\(e,t,i\)=>\{\"use strict\";([\s\S]+?)\n?$/);
if (!match) {
  // Try alternate pattern
  const lines = content.split('\n');
  const firstLine = lines[0];
  const codeStart = firstLine.indexOf('\"use strict\";');
  if (codeStart === -1) {
    console.error('Could not find module start');
    process.exit(1);
  }
  var code = content.substring(firstLine.indexOf(';') + 1);
} else {
  var code = match[1];
}

// Count keywords
const keywords = {
  'TradingView.defaultProperties': (code.match(/TradingView\.defaultProperties/g) || []).length,
  'linetool': (code.match(/linetool/g) || []).length,
  'study_': (code.match(/study_/g) || []).length,
  'color': (code.match(/color/g) || []).length,
  'linewidth': (code.match(/linewidth/g) || []).length,
  'linestyle': (code.match(/linestyle/g) || []).length,
  'fillBackground': (code.match(/fillBackground/g) || []).length,
  'transparency': (code.match(/transparency/g) || []).length,
  'function': (code.match(/function/g) || []).length,
  'const': (code.match(/const/g) || []).length,
  'var': (code.match(/\bvar\b/g) || []).length,
  'return': (code.match(/\breturn\b/g) || []).length,
};

console.log(`\n=== Module ${moduleId} Analysis ===`);
console.log(`Size: ${(code.length / 1024).toFixed(2)} KB`);
console.log(`Lines: ${code.split('\n').length}`);
console.log('\nKeyword Counts:');
Object.entries(keywords).forEach(([key, count]) => {
  if (count > 0) console.log(`  ${key}: ${count}`);
});

// Extract function names
const functions = code.match(/function\s+(\w+)/g) || [];
console.log(`\nFunctions found: ${functions.length}`);
functions.slice(0, 10).forEach(f => console.log(`  - ${f.replace('function ', '')}`));

// Extract dependencies
const deps = code.match(/i\((\d+)\)/g) || [];
const uniqueDeps = [...new Set(deps.map(d => d.match(/\d+/)[0]))];
console.log(`\nDependencies: ${uniqueDeps.length} unique modules`);
console.log(uniqueDeps.slice(0, 15).join(', '));
