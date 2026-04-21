#!/usr/bin/env node

/**
 * Manual beautifier for TradingView webpack modules
 * Uses js-beautify which is more tolerant of complex/minified code
 */

const fs = require('fs');
const path = require('path');

// Install js-beautify if not available
try {
  require.resolve('js-beautify');
} catch (e) {
  console.log('Installing js-beautify...');
  const { execSync } = require('child_process');
  execSync('npm install --save-dev js-beautify', { stdio: 'inherit' });
}

const js_beautify = require('js-beautify').js;

const modulesDir = path.join(__dirname, 'modules-v2');
const outputDir = path.join(__dirname, 'beautified-modules-manual');
const analysisFile = path.join(__dirname, 'MODULE_ANALYSIS_MANUAL.md');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🔧 Beautifying TradingView modules with js-beautify...\n');

const moduleFiles = fs.readdirSync(modulesDir)
  .filter(f => f.endsWith('.js') && f !== 'index.js')
  .map(f => ({
    name: f,
    id: parseInt(f.replace('.js', '')),
    size: fs.statSync(path.join(modulesDir, f)).size
  }))
  .sort((a, b) => b.size - a.size);

const topModules = moduleFiles.slice(0, 20);
const analysis = {
  totalProcessed: 0,
  successfullyBeautified: 0,
  modules: []
};

for (const module of topModules) {
  const inputPath = path.join(modulesDir, module.name);
  const outputPath = path.join(outputDir, module.name);
  let content = fs.readFileSync(inputPath, 'utf8');
  
  console.log(`Processing module ${module.id} (${(module.size/1024).toFixed(1)} KB)...`);
  
  const match = content.match(/^(\d+):/);
  const moduleId = match ? match[1] : module.id.toString();
  let codeWithoutPrefix = content.replace(/^\d+:/, '');
  
  try {
    const beautified = js_beautify(codeWithoutPrefix, {
      indent_size: 2,
      indent_char: ' ',
      max_preserve_newlines: 2,
      preserve_newlines: true,
      keep_array_indentation: true,
      break_chained_methods: true,
      space_in_paren: false,
      space_before_conditional: true,
      unescape_strings: true,
      wrap_line_length: 120,
      e4x: false,
      comma_first: false,
      end_with_newline: true
    });
    
    const finalContent = `// Module ${moduleId}
// Original file: ${module.name}
// Size: ${(module.size/1024).toFixed(1)} KB
// Purpose: Auto-extracted webpack module from TradingView library

${beautified}`;
    
    fs.writeFileSync(outputPath, finalContent);
    analysis.successfullyBeautified++;
    
    // Analyze patterns
    const classes = (beautified.match(/class\s+(\w+)/g) || []).map(c => c.replace('class ', ''));
    const functions = (beautified.match(/function\s+(\w+)/g) || []).map(f => f.replace('function ', ''));
    const methods = (beautified.match(/(\w+)\s*\([^)]*\)\s*{/g) || [])
      .map(m => m.replace(/\s*\([^)]*\)\s*{/, ''))
      .filter(m => !['if', 'for', 'while', 'switch', 'catch', 'function', 'class'].includes(m))
      .slice(0, 10);
    const imports = (beautified.match(/i\(\d+\)/g) || []).length;
    
    analysis.modules.push({
      id: moduleId,
      size: module.size,
      classes,
      functions,
      methods: [...new Set(methods)],
      imports
    });
    
    console.log(`  ✓ Beautified successfully`);
    console.log(`    Classes: ${classes.length}, Functions: ${functions.length}, Imports: ${imports}\n`);
    
    analysis.totalProcessed++;
    
  } catch (error) {
    console.log(`  ⚠ Could not beautify: ${error.message}\n`);
    
    // Fallback: add basic line breaks
    const fallback = codeWithoutPrefix
      .replace(/;/g, ';\n')
      .replace(/{/g, '{\n')
      .replace(/}/g, '\n}')
      .replace(/=>/g, ' => ');
    
    fs.writeFileSync(outputPath, `// Module ${moduleId}\n// Could not be fully beautified\n\n${fallback}`);
  }
}

// Generate report
const report = `# TradingView Module Analysis (Manual Beautification)

## Summary
- **Modules Processed:** ${analysis.totalProcessed}
- **Successfully Beautified:** ${analysis.successfullyBeautified}
- **Output Directory:** \`beautified-modules-manual/\`

## Top Modules Analysis

${analysis.modules.map(m => `
### Module ${m.id} (${(m.size/1024).toFixed(1)} KB)

**Classes:** ${m.classes.length > 0 ? m.classes.join(', ') : 'None detected'}

**Functions:** ${m.functions.length > 0 ? m.functions.join(', ') : 'None detected'}

**Key Methods:** ${m.methods.slice(0, 5).join(', ')}

**Dependencies:** ${m.imports} internal module imports

---
`).join('\n')}

## Key Findings

### Largest Modules
${analysis.modules.slice(0, 5).map(m => 
  `1. **Module ${m.id}** - ${(m.size/1024).toFixed(1)} KB - ${m.classes.length} classes`
).join('\n')}

### Most Complex Modules (by imports)
${analysis.modules.sort((a,b) => b.imports - a.imports).slice(0, 5).map(m => 
  `- Module ${m.id}: ${m.imports} imports`
).join('\n')}

### Common Patterns Observed

1. **Webpack Module Pattern:** All modules follow \`(e,t,i)=>{...}\` where:
   - \`e\` = exports
   - \`t\` = module metadata
   - \`i\` = require function for dependencies

2. **Class Structure:** Heavy use of ES6 classes with private fields (\`_fieldName\`)

3. **Dependency Injection:** Modules import via \`i(MODULE_ID)\` pattern

4. **Chunk Loading:** Async chunk loading via \`Promise.all([i.e(chunkId), ...])\`

## Next Steps for Reverse Engineering

1. **Priority Modules to Study:**
   - Module 37150: Main initialization logic
   - Module 2115: Series data handling
   - Module 4783: Technical indicators library
   - Module 60973: Unknown (large module)

2. **Variable Renaming Strategy:**
   - Rename \`e\` → \`exports\`, \`t\` → \`module\`, \`i\` → \`require\`
   - Identify and rename key classes based on their methods
   - Track variable usage across modules

3. **Documentation Goals:**
   - Map class hierarchies
   - Document public APIs
   - Identify data flow patterns

## Files Generated

- \`beautified-modules-manual/*.js\` - Formatted module files
- \`MODULE_ANALYSIS_MANUAL.md\` - This analysis report
`;

fs.writeFileSync(analysisFile, report);

console.log('✅ Complete!');
console.log(`\n📊 Results:`);
console.log(`   Successfully beautified: ${analysis.successfullyBeautified}/${analysis.totalProcessed} modules`);
console.log(`\n📄 Output:`);
console.log(`   - beautified-modules-manual/`);
console.log(`   - MODULE_ANALYSIS_MANUAL.md`);
