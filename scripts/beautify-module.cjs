const fs = require('fs');
const path = require('path');

const moduleId = process.argv[2];
if (!moduleId) {
  console.error('Usage: node beautify-module.cjs <module-id>');
  process.exit(1);
}

const inputPath = path.join(__dirname, '..', 'modules-v2', `${moduleId}.js`);
const outputPath = path.join(__dirname, '..', 'beautified-modules-manual', `${moduleId}.js`);

if (!fs.existsSync(inputPath)) {
  console.error(`Module ${moduleId} not found in modules-v2/`);
  process.exit(1);
}

const content = fs.readFileSync(inputPath, 'utf8');

// Extract the module code (remove webpack wrapper) - handle multi-line
const match = content.match(/^\d+:\(e,t,i\)=>\{\"use strict\";([\s\S]+)\}$/);
if (!match) {
  console.error('Could not extract module code');
  process.exit(1);
}

let code = match[1];

// Write output
fs.writeFileSync(outputPath, code);
console.log(`Beautified module ${moduleId} -> ${outputPath}`);
console.log(`Size: ${(code.length / 1024).toFixed(2)} KB, Lines: ${code.split('\n').length}`);
