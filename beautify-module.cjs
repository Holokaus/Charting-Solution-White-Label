const fs = require('fs');

const moduleId = process.argv[2];
const code = fs.readFileSync(`modules-v2/${moduleId}.js`, 'utf8');

// Extract the module body
const match = code.match(/(\d+):\((\w),(\w),(\w)\)=>\{\"use strict\";(.+)\}/s);
if (!match) {
  console.error('Failed to parse module');
  process.exit(1);
}

let [, , e, t, i, body] = match;

// Remove export definitions
body = body.replace(/i\.d\([^)]+\);/g, '');

// Extract imports
const importMatch = body.match(/var (\w+)=i\((\d+)\)(?:,(\w+)=i\((\d+)\))?(?:,(\w+)=i\((\d+)\))?(?:,(\w+)=i\((\d+)\))?(?:,(\w+)=i\((\d+)\))?;/);
if (importMatch) {
  let imports = 'const ';
  const deps = [];
  
  // Parse each import
  for (let j = 1; j < importMatch.length; j += 2) {
    if (importMatch[j] && importMatch[j+1]) {
      const varName = importMatch[j];
      const depId = importMatch[j+1];
      deps.push(`${depId}`);
    }
  }
  
  // Replace with named imports based on usage
  body = body.replace(importMatch[0], '// Dependencies: ' + deps.join(', '));
}

console.log(body);
