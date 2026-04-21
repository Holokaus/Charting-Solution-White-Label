#!/usr/bin/env node

/**
 * Rename variables in beautified TradingView modules
 * Focus on Module 37150 (main initialization) - 1.5MB beautified
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'beautified-modules-manual/37150.js');
const outputFile = path.join(__dirname, 'renamed-modules/37150-renamed.js');

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');

console.log('🔍 Analyzing and renaming variables in Module 37150...\n');

// Extract the module header
const headerMatch = content.match(/^\/\/ Module.*?\n\n/);
const header = headerMatch ? headerMatch[0] : '';
const code = content.replace(header, '');

// Identify single-letter variables with high confidence based on context
const renamings = [
  // Webpack standard parameters (100% confidence)
  { old: /\b(e)\s*,\s*(t)\s*,\s*(i)\s*=>/g, new: '(exports, module, require) =>', type: 'function-params' },
  
  // Feature flags module (l is used for features throughout)
  { old: /\bl\.setEnabled/g, new: 'features.setEnabled', type: 'method' },
  { old: /\bl\.enabled\(/g, new: 'features.enabled(', type: 'method' },
  
  // Global context getter (r is consistently used for this)
  { old: /\(0,\s*r\.getChartingLibraryGlobalContext\)/g, new: '(0, context.getChartingLibraryGlobalContext)', type: 'function' },
  { old: /\(0,\s*r\.getChartingLibraryOwner\)/g, new: '(0, context.getChartingLibraryOwner)', type: 'function' },
  
  // Settings adapter (d is used for settings)
  { old: /d\.setSettingsAdapter/g, new: 'settings.setSettingsAdapter', type: 'method' },
  { old: /d\.sync\(\)/g, new: 'settings.sync()', type: 'method' },
  
  // ChunkLoader base class (f is the import containing ChunkLoader)
  { old: /f\.ChunkLoader/g, new: 'chunkLoaderModule.ChunkLoader', type: 'class' },
  
  // CSS classes module (w contains container classes)
  { old: /w\.container/g, new: 'cssClasses.container', type: 'property' },
  { old: /w\.inner/g, new: 'cssClasses.inner', type: 'property' },
  
  // Resizer constants (b contains height constants)
  { old: /b\.HEADER_TOOLBAR_HEIGHT_EXPANDED/g, new: 'toolbarConstants.HEADER_TOOLBAR_HEIGHT_EXPANDED', type: 'constant' },
  
  // Drawing toolbar constants (x contains width constants)
  { old: /x\.TOOLBAR_WIDTH_EXPANDED/g, new: 'toolbarConstants.TOOLBAR_WIDTH_EXPANDED', type: 'constant' },
];

console.log('Applying high-confidence renamings...\n');

let renamedCode = code;
let renameCount = 0;

// Apply renamings
for (const { old, new: newName, type } of renamings) {
  const matches = (renamedCode.match(old) || []).length;
  if (matches > 0) {
    renamedCode = renamedCode.replace(old, newName);
    console.log(`✓ ${type}: ${matches} occurrences renamed`);
    renameCount += matches;
  }
}

// Now let's identify and document key classes without renaming them yet
console.log('\n📋 Key Classes Identified:\n');

const classMatches = [...renamedCode.matchAll(/class\s+(\w+)\s+extends\s+[^{]+{/g)];
classMatches.forEach((match, index) => {
  const className = match[1];
  const startPos = match.index;
  
  // Find the end of the class by counting braces
  let braceCount = 0;
  let inString = false;
  let escapeNext = false;
  let endPos = startPos;
  
  for (let i = startPos; i < renamedCode.length; i++) {
    const char = renamedCode[i];
    
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
          endPos = i + 1;
          break;
        }
      }
    }
  }
  
  const classBody = renamedCode.substring(startPos, endPos);
  const methods = [...classBody.matchAll(/(\w+)\s*\([^)]*\)\s*{/g)]
    .map(m => m[1])
    .filter(m => !['if', 'for', 'while', 'switch', 'catch', 'constructor'].includes(m))
    .slice(0, 5);
  
  console.log(`${index + 1}. Class \`${className}\``);
  console.log(`   Methods: ${methods.join(', ') || 'constructor only'}`);
  console.log(`   Size: ~${(classBody.length / 1024).toFixed(1)} KB\n`);
});

// Add comprehensive comments to the code
const commentedCode = `// ============================================================================
// TRADINGVIEW MODULE 37150 - MAIN INITIALIZATION & CHUNK LOADING
// ============================================================================
// Original size: 1112.2 KB (minified) → 1.5 MB (beautified)
// This is the CORE module that handles:
//   - Library initialization
//   - Feature flag configuration
//   - Settings management
//   - Toolbar rendering
//   - Async chunk loading for lazy-loaded features
//
// Renamed Variables (High Confidence):
//   - e, t, i → exports, module, require (webpack standard params)
//   - l → features (feature flags manager)
//   - r → context (global context utilities)
//   - d → settings (settings adapter)
//   - f → chunkLoaderModule (base ChunkLoader class)
//   - w → cssClasses (CSS class names)
//   - b, x → toolbarConstants (toolbar dimensions)
// ============================================================================

${header}${renamedCode}`;

fs.writeFileSync(outputFile, commentedCode);

console.log(`\n✅ Renaming complete!`);
console.log(`\n📄 Output: ${outputFile}`);
console.log(`📊 Total renamings applied: ${renameCount}`);
console.log(`\n💡 Next Steps:`);
console.log(`   1. Review the renamed file to verify correctness`);
console.log(`   2. Manually rename class names (y→Initialization, T→HeaderToolbar, etc.)`);
console.log(`   3. Add detailed JSDoc comments to key methods`);
console.log(`   4. Map inter-module dependencies (621 imports found)`);
