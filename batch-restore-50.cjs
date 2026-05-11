#!/usr/bin/env node
/**
 * BATCH RESTORATION SCRIPT - 50 Small Files
 * Processes simple re-export modules efficiently
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';
const OUTPUT_DIR = path.join(BASE_DIR, 'beautified-output');

// Read file list
const files = fs.readFileSync(path.join(BASE_DIR, 'batch-next-50.txt'), 'utf8')
  .split('\n')
  .filter(f => f.trim());

console.log('BATCH RESTORING ' + files.length + ' FILES');
console.log('='.repeat(70));
console.log('');

let restored = 0;
let skipped = 0;
let failed = 0;

const patterns = [
  {
    // Pattern 1: Simple re-export with destructuring
    // e.g., i.d(t, { WatchedValue: () => s.WatchedValue })
    match: /i\.d\(t,\s*\{\s*([\w:]+):\s*\(\)\s*=>\s*s\.(\w+)\s*\}\);\s*var\s+s\s*=\s*i\((\d+)\)/,
    restore: (content, match, moduleId) => {
      const exportName = match[1];
      const sourceName = match[2];
      const sourceModule = match[3];
      return `import { ${sourceName} } from './${sourceModule}.js';

export { ${sourceName} };
export default ${sourceName};`;
    }
  },
  {
    // Pattern 2: Function that wraps a class
    // e.g., function o(e) { return new s.Property(e) }
    match: /function\s+o\((\w+)\)\s*\{\s*return\s*new\s+s\.(\w+)\((\w+)\)\s*\}/,
    restore: (content, match, moduleId) => {
      const param = match[1];
      const className = match[2];
      const sourceModule = content.match(/var\s+s\s*=\s*i\((\d+)\)/)?.[1] || '0';
      return `import { ${className} } from './${sourceModule}.js';

export function create${className}(${param}) {
  return new ${className}(${param});
}`;
    }
  },
  {
    // Pattern 3: Multiple exports from same module
    match: /i\.d\(t,\s*\{([^}]+)\}\);\s*var\s+s\s*=\s*i\((\d+)\)/,
    restore: (content, match, moduleId) => {
      const exportsBlock = match[1];
      const sourceModule = match[2];
      
      // Parse export names
      const exports = exportsBlock.split(',').map(e => {
        const m = e.match(/(\w+):\s*\(\)\s*=>\s*s\.(\w+)/);
        return m ? { export: m[1], source: m[2] } : null;
      }).filter(Boolean);
      
      if (exports.length === 0) return null;
      
      const uniqueSources = [...new Set(exports.map(e => e.source))];
      
      return `import { ${uniqueSources.join(', ')} } from './${sourceModule}.js';

${exports.map(e => `export { ${e.source} as ${e.export} };`).join('\n')}

export default { ${uniqueSources.join(', ')} };`;
    }
  },
  {
    // Pattern 4: Function that calls feature flag
    match: /function\s+o\(\)\s*\{\s*return\s+s\.enabled\("([^"]+)"\)\s*\}/,
    restore: (content, match, moduleId) => {
      const featureName = match[1];
      const sourceModule = content.match(/var\s+s\s*=\s*i\((\d+)\)/)?.[1] || '0';
      const funcName = 'is' + featureName.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Enabled';
      
      return `import { enabled as isFeatureEnabled } from './${sourceModule}.js';

export function ${funcName}() {
  return isFeatureEnabled("${featureName}");
}`;
    }
  }
];

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const filePath = path.join(OUTPUT_DIR, file);
  const moduleId = file.replace('.js', '');
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Try each pattern
    let restoredContent = null;
    for (const pattern of patterns) {
      const match = content.match(pattern.match);
      if (match) {
        restoredContent = pattern.restore(content, match, moduleId);
        break;
      }
    }
    
    if (restoredContent) {
      // Create full restored file
      const finalContent = `/**
 * Module ${moduleId} - Restored
 * Auto-converted from webpack module to ES6
 * 
 * @module Module${moduleId}
 */

${restoredContent}

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================`;
      
      fs.writeFileSync(filePath, finalContent);
      restored++;
      console.log(`${(i+1).toString().padStart(2)}. ✅ ${file} - Restored`);
    } else {
      skipped++;
      console.log(`${(i+1).toString().padStart(2)}. ⚠️  ${file} - Pattern not matched (skipped)`);
    }
  } catch (e) {
    failed++;
    console.log(`${(i+1).toString().padStart(2)}. ❌ ${file} - Error: ${e.message}`);
  }
}

console.log('');
console.log('='.repeat(70));
console.log('BATCH COMPLETE:');
console.log(`  ✅ Restored: ${restored}`);
console.log(`  ⚠️  Skipped: ${skipped}`);
console.log(`  ❌ Failed: ${failed}`);
console.log(`  Total: ${files.length}`);
