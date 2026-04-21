#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

try {
  require.resolve('js-beautify');
} catch (e) {
  console.log('Installing js-beautify...');
  const { execSync } = require('child_process');
  execSync('npm install --save-dev js-beautify', { stdio: 'inherit' });
}

const js_beautify = require('js-beautify').js;

const modulesDir = path.join(__dirname, 'modules-v2');
const outputDir = path.join(__dirname, 'beautified-rendering');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Modules to beautify (from scan results - top rendering modules not yet processed)
const modulesToBeautify = [
  { id: 36281, name: '36281.js', purpose: 'Renderer core - render/draw/hitTest' },
  { id: 60876, name: '60876.js', purpose: 'Hit testing and fragment shaders' },
  { id: 33350, name: '33350.js', purpose: 'Canvas bitmap/pixel operations' },
  { id: 12362, name: '12362.js', purpose: 'ChartWidget drawing' },
  { id: 22033, name: '22033.js', purpose: 'Projection matrices' },
  { id: 24437, name: '24437.js', purpose: 'WebGL operations' },
  { id: 69555, name: '69555.js', purpose: 'Render pipeline' },
  { id: 94602, name: '94602.js', purpose: 'Render utilities' },
  { id: 79268, name: '79268.js', purpose: 'Pixel manipulation' },
  { id: 86228, name: '86228.js', purpose: 'Hit test renderer' }
];

console.log('🎨 Beautifying Rendering Engine modules...\n');

let successCount = 0;
const analysis = [];

for (const mod of modulesToBeautify) {
  const inputPath = path.join(modulesDir, mod.name);
  const outputPath = path.join(outputDir, mod.name);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Module ${mod.id} not found, skipping...`);
    continue;
  }
  
  const content = fs.readFileSync(inputPath, 'utf8');
  const size = fs.statSync(inputPath).size;
  
  console.log(`Processing module ${mod.id} (${(size/1024).toFixed(1)} KB) - ${mod.purpose}...`);
  
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
    
    const finalContent = `// Module ${mod.id} - Rendering Engine Component
// Purpose: ${mod.purpose}
// Original file: ${mod.name}
// Size: ${(size/1024).toFixed(1)} KB
// Auto-extracted from TradingView library

${beautified}`;
    
    fs.writeFileSync(outputPath, finalContent);
    successCount++;
    
    // Analyze
    const classes = (beautified.match(/class\s+(\w+)/g) || []).map(c => c.replace('class ', ''));
    const functions = (beautified.match(/function\s+(\w+)/g) || []).map(f => f.replace('function ', ''));
    const methods = (beautified.match(/(\w+)\s*\([^)]*\)\s*{/g) || [])
      .map(m => m.replace(/\s*\([^)]*\)\s*{/, ''))
      .filter(m => !['if', 'for', 'while', 'switch', 'catch', 'function', 'class'].includes(m))
      .slice(0, 15);
    const webglCalls = (beautified.match(/gl\.\w+/g) || []).length;
    const canvasCalls = (beautified.match(/(getContext|fillRect|strokeRect|beginPath|moveTo|lineTo|arc)/g) || []).length;
    
    analysis.push({
      id: mod.id,
      purpose: mod.purpose,
      size,
      classes,
      functions,
      methods: [...new Set(methods)],
      webglCalls,
      canvasCalls,
      type: webglCalls > canvasCalls ? 'WebGL' : (canvasCalls > 0 ? 'Canvas' : 'Other')
    });
    
    console.log(`  ✓ Success - ${classes.length} classes, ${webglCalls} WebGL calls, ${canvasCalls} Canvas calls\n`);
    
  } catch (error) {
    console.log(`  ⚠ Could not fully beautify: ${error.message}\n`);
    
    // Fallback
    const fallback = codeWithoutPrefix
      .replace(/;/g, ';\n')
      .replace(/{/g, '{\n')
      .replace(/}/g, '\n}')
      .replace(/=>/g, ' => ');
    
    fs.writeFileSync(outputPath, `// Module ${mod.id}\n// Partial formatting\n\n${fallback}`);
  }
}

// Generate report
const report = `# Rendering Engine Modules - Beautification Report

## Summary
- **Modules Processed:** ${modulesToBeautify.length}
- **Successfully Beautified:** ${successCount}
- **Output Directory:** \`beautified-rendering/\`

## Module Analysis

${analysis.map(m => `
### Module ${m.id} - ${m.purpose}
**Type:** ${m.type} Renderer
**Size:** ${(m.size/1024).toFixed(1)} KB

**Classes:** ${m.classes.length > 0 ? m.classes.join(', ') : 'None detected'}

**Functions:** ${m.functions.length > 0 ? m.functions.join(', ') : 'None detected'}

**Key Methods:**
${m.methods.slice(0, 10).map(method => `- \`${method}\``).join('\n')}

**Graphics API Usage:**
- WebGL calls: ${m.webglCalls}
- Canvas calls: ${m.canvasCalls}

---
`).join('\n')}

## Rendering Architecture Insights

### WebGL Pipeline Modules
${analysis.filter(m => m.type === 'WebGL').map(m => `- Module ${m.id}: ${m.purpose}`).join('\n') || 'None identified'}

### Canvas Rendering Modules
${analysis.filter(m => m.type === 'Canvas').map(m => `- Module ${m.id}: ${m.purpose}`).join('\n') || 'None identified'}

### Hit Testing & Interaction
${analysis.filter(m => m.methods.some(method => method.toLowerCase().includes('hit') || method.toLowerCase().includes('test'))).map(m => `- Module ${m.id}: ${m.purpose}`).join('\n') || 'None identified'}

## Variable Renaming Recommendations

Based on the analysis, here are recommended variable renames for rendering modules:

### Common Patterns
- \`e\` → \`exports\`
- \`t\` → \`module\`  
- \`i\` → \`require\`
- \`n\`, \`r\`, \`a\`, \`s\`, \`o\` → context-specific names

### Rendering-Specific Variables
- Variables holding \`gl\` context → \`glContext\` or \`webgl\`
- Variables with \`canvas\` → \`canvasElement\`
- Variables with \`getContext\` → \`renderingContext\`
- Variables calling \`draw\` methods → \`renderer\` or \`drawer\`
- Variables with \`hitTest\` → \`hitTester\`
- Variables with \`projection\` → \`projectionMatrix\`

### Class Naming Strategy
- Classes with \`render\` methods → \`*Renderer\`
- Classes with \`draw\` methods → \`*Drawer\` or \`*Painter\`
- Classes with \`hitTest\` → \`*HitTester\`
- Classes managing \`paneview\` → \`PaneViewManager\`

## Next Steps

1. **Review beautified modules** in \`beautified-rendering/\` directory
2. **Apply variable renaming** using patterns above
3. **Map class hierarchies** across modules
4. **Document data flow**: Series Data → Pane Views → Renderers → Canvas/WebGL
5. **Create integration diagram** showing module relationships

## Files Generated

- \`beautified-rendering/*.js\` - Formatted rendering modules
- \`RENDERING_BEAUTIFICATION_REPORT.md\` - This analysis
`;

fs.writeFileSync(path.join(outputDir, 'RENDERING_BEAUTIFICATION_REPORT.md'), report);

console.log('✅ Complete!');
console.log(`\n📊 Results:`);
console.log(`   Successfully beautified: ${successCount}/${modulesToBeautify.length} modules`);
console.log(`\n📄 Output:`);
console.log(`   - beautified-rendering/`);
console.log(`   - beautified-rendering/RENDERING_BEAUTIFICATION_REPORT.md`);
