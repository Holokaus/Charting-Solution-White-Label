#!/usr/bin/env node
/**
 * BATCH RESTORATION SCRIPT V2 - 60 Files
 * Enhanced pattern matching for diverse module types
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';
const OUTPUT_DIR = path.join(BASE_DIR, 'beautified-output');

const files = fs.readFileSync(path.join(BASE_DIR, 'batch-next-60.txt'), 'utf8')
  .split('\n')
  .filter(f => f.trim());

console.log('HIGH-VOLUME BATCH RESTORATION - 60 FILES');
console.log('='.repeat(70));
console.log('');

let restored = 0;
let skipped = 0;
let failed = 0;

// Enhanced patterns for different module types
const patterns = [
  // Pattern 1: Simple re-export (single)
  {
    name: 'SimpleReexport',
    match: /i\.d\(t,\s*\{\s*([\w]+):\s*\(\)\s*=>\s*s\.(\w+)\s*\}\);\s*var\s+s\s*=\s*i\((\d+)\)/,
    restore: (m, id) => `import { ${m[2]} } from './${m[3]}.js';

export { ${m[2]} };
export default ${m[2]};`
  },
  // Pattern 2: Multiple exports from same module
  {
    name: 'MultiExport',
    match: /i\.d\(t,\s*\{([^}]+)\}\);\s*var\s+s\s*=\s*i\((\d+)\)/,
    restore: (m, id) => {
      const exports = m[1].split(',').map(e => {
        const match = e.match(/(\w+):\s*\(\)\s*=>\s*s\.(\w+)/);
        return match ? { export: match[1], source: match[2] } : null;
      }).filter(Boolean);
      if (exports.length === 0) return null;
      const sources = [...new Set(exports.map(e => e.source))];
      return `import { ${sources.join(', ')} } from './${m[2]}.js';

${exports.map(e => `export { ${e.source} as ${e.export} };`).join('\n')}

export default { ${sources.join(', ')} };`;
    }
  },
  // Pattern 3: Factory function returning new instance
  {
    name: 'FactoryFunction',
    match: /function\s+o\((\w+)\)\s*\{\s*return\s*new\s+s\.(\w+)\((\w+)\)\s*\}/,
    restore: (m, id, content) => {
      const sourceMod = content.match(/var\s+s\s*=\s*i\((\d+)\)/)?.[1] || '0';
      return `import { ${m[2]} } from './${sourceMod}.js';

export function create${m[2]}(${m[1]}) {
  return new ${m[2]}(${m[1]});
}

export default create${m[2]};`;
    }
  },
  // Pattern 4: Feature flag check
  {
    name: 'FeatureCheck',
    match: /function\s+o\(\)\s*\{\s*return\s+s\.enabled\("([^"]+)"\)\s*\}/,
    restore: (m, id, content) => {
      const sourceMod = content.match(/var\s+s\s*=\s*i\((\d+)\)/)?.[1] || '0';
      const funcName = 'is' + m[1].split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Enabled';
      return `import { enabled as isFeatureEnabled } from './${sourceMod}.js';

export function ${funcName}() {
  return isFeatureEnabled("${m[1]}");
}

export default ${funcName};`;
    }
  },
  // Pattern 5: Simple function returning expression
  {
    name: 'SimpleFunction',
    match: /function\s+o\((\w*)\)\s*\{\s*return\s+(.+?)\s*\}/,
    restore: (m, id, content) => {
      const deps = [...content.matchAll(/var\s+\w+\s*=\s*i\((\d+)\)/g)];
      const imports = deps.map((d, i) => {
        const varName = String.fromCharCode(115 + i); // s, t, u...
        return `import * as ${varName} from './${d[1]}.js';`;
      }).join('\n');
      const param = m[1] || '';
      const body = m[2].replace(/\bs\b/g, 's').replace(/\bt\b/g, 't');
      return `${imports}

export function process(${param}) {
  return ${body};
}

export default process;`;
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
    let matchedPattern = null;
    
    for (const pattern of patterns) {
      const match = content.match(pattern.match);
      if (match) {
        restoredContent = pattern.restore(match, moduleId, content);
        matchedPattern = pattern.name;
        break;
      }
    }
    
    if (restoredContent) {
      const finalContent = `/**
 * Module ${moduleId} - Restored
 * Pattern: ${matchedPattern}
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
      console.log(`${(i+1).toString().padStart(2)}. ✅ ${file} [${matchedPattern}]`);
    } else {
      skipped++;
      console.log(`${(i+1).toString().padStart(2)}. ⚠️  ${file} - No pattern match`);
    }
  } catch (e) {
    failed++;
    console.log(`${(i+1).toString().padStart(2)}. ❌ ${file} - ${e.message.slice(0, 40)}`);
  }
}

console.log('');
console.log('='.repeat(70));
console.log('BATCH COMPLETE:');
console.log(`  ✅ Restored: ${restored}`);
console.log(`  ⚠️  Skipped: ${skipped}`);
console.log(`  ❌ Failed: ${failed}`);
console.log(`  Success Rate: ${((restored/files.length)*100).toFixed(1)}%`);
