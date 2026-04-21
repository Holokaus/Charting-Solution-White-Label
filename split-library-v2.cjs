#!/usr/bin/env node

/**
 * Split TradingView library bundle into individual webpack modules
 * Improved regex to catch all module patterns: ,MODULE_ID:(e,t,i)=>{ or ,MODULE_ID:e=>{
 */

const fs = require('fs');
const path = require('path');

// Find the library bundle
const bundlesDir = path.join(__dirname, 'bundles');
const libraryFile = fs.readdirSync(bundlesDir).find(f => f.startsWith('library.') && f.endsWith('.js'));

if (!libraryFile) {
  console.error('Library bundle not found!');
  process.exit(1);
}

const libraryPath = path.join(bundlesDir, libraryFile);
const outputDir = path.join(__dirname, 'modules-v2');
const content = fs.readFileSync(libraryPath, 'utf8');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log(`Processing ${libraryFile}...`);

// Improved regex to match all module patterns
// Matches: ,12345:(e,t,i)=>{ or ,12345:e=>{
const modulePattern = /,(\d+):(?:\([^)]*\)|[a-zA-Z_$]+)=>\{/g;

const modules = [];
let match;

// Find all module start positions
while ((match = modulePattern.exec(content)) !== null) {
  const moduleId = match[1];
  const startPos = match.index;
  modules.push({ id: moduleId, start: startPos });
}

console.log(`Found ${modules.length} modules`);

// Extract each module by finding the matching closing brace
for (let i = 0; i < modules.length; i++) {
  const current = modules[i];
  const next = modules[i + 1];
  
  // Determine end position
  let endPos;
  if (next) {
    // Go back a bit from next module to avoid including the comma
    endPos = next.start - 1;
  } else {
    // Last module - find the closing of the push array
    const remainingContent = content.substring(current.start);
    let braceCount = 0;
    let inString = false;
    let escapeNext = false;
    
    for (let j = 0; j < remainingContent.length; j++) {
      const char = remainingContent[j];
      
      if (escapeNext) {
        escapeNext = false;
        continue;
      }
      
      if (char === '\\') {
        escapeNext = true;
        continue;
      }
      
      if ((char === '"' || char === "'" || char === '`') && !inString) {
        inString = char;
      } else if (char === inString) {
        inString = false;
      }
      
      if (!inString) {
        if (char === '{') braceCount++;
        if (char === '}') {
          braceCount--;
          if (braceCount === 0) {
            endPos = current.start + j + 1;
            break;
          }
        }
      }
    }
    
    if (!endPos) {
      endPos = content.length;
    }
  }
  
  // Extract module content
  let moduleContent = content.substring(current.start, endPos).trim();
  
  // Remove leading comma if present
  if (moduleContent.startsWith(',')) {
    moduleContent = moduleContent.substring(1);
  }
  
  // Write module to file
  const outputPath = path.join(outputDir, `${current.id}.js`);
  fs.writeFileSync(outputPath, moduleContent);
  
  // Log progress for first few and last few modules
  if (i < 5 || i >= modules.length - 5) {
    console.log(`  Module ${current.id}: ${moduleContent.length} bytes`);
  } else if (i === 5) {
    console.log(`  ... (${modules.length - 10} more modules)`);
  }
}

// Create index file
const indexContent = `// TradingView Library Modules - Auto-generated
// Total modules: ${modules.length}
// Source: ${libraryFile}

${modules.map(m => `export { default as module${m.id} } from './${m.id}.js';`).join('\n')}
`;

fs.writeFileSync(path.join(outputDir, 'index.js'), indexContent);
console.log(`\n✅ Successfully extracted ${modules.length} modules to ${outputDir}/`);
console.log(`Created index.js for easy importing`);
