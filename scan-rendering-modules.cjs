#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, 'modules-v2');
const outputDir = path.join(__dirname, 'rendering-modules-analysis');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🔍 Scanning for Rendering Engine modules...\n');

// Read all modules
const moduleFiles = fs.readdirSync(modulesDir)
  .filter(f => f.endsWith('.js') && f !== 'index.js')
  .map(f => {
    const filePath = path.join(modulesDir, f);
    return {
      name: f,
      id: parseInt(f.replace('.js', '')),
      size: fs.statSync(filePath).size,
      path: filePath
    };
  })
  .sort((a, b) => b.size - a.size);

// Rendering-related keywords
const renderingKeywords = [
  'canvas', 'webgl', 'gl.', 'getContext', 'render', 'draw', 'paint',
  'raster', 'bitmap', 'imageData', 'pixel', 'shader', 'vertex', 'fragment',
  'buffer', 'texture', 'framebuffer', 'viewport', 'projection',
  'paneview', 'chartwidget', 'coordinator', 'magnet', 'hitTest',
  'TextRenderer', 'CanvasRenderer', 'WebGLRenderer', 'Drawer'
];

const results = [];

for (const module of moduleFiles) {
  const content = fs.readFileSync(module.path, 'utf8');
  const matches = [];
  
  for (const keyword of renderingKeywords) {
    const regex = new RegExp(keyword, 'gi');
    const found = content.match(regex);
    if (found) {
      matches.push({ keyword, count: found.length });
    }
  }
  
  if (matches.length > 0) {
    const totalMatches = matches.reduce((sum, m) => sum + m.count, 0);
    results.push({
      ...module,
      matches,
      totalMatches,
      relevanceScore: totalMatches * Math.log(module.size)
    });
  }
}

// Sort by relevance
results.sort((a, b) => b.relevanceScore - a.relevanceScore);

console.log(`Found ${results.length} rendering-related modules\n`);
console.log('Top 20 Rendering Modules:\n');
console.log('ID'.padEnd(8) + 'Size'.padEnd(12) + 'Score'.padEnd(10) + 'Key Keywords\n');
console.log('─'.repeat(70));

for (const mod of results.slice(0, 20)) {
  const topKeywords = mod.matches
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map(m => `${m.keyword}(${m.count})`)
    .join(', ');
  
  console.log(
    mod.id.toString().padEnd(8) +
    `${(mod.size/1024).toFixed(1)} KB`.padEnd(12) +
    mod.relevanceScore.toFixed(0).padEnd(10) +
    topKeywords
  );
}

// Generate detailed report
const report = `# TradingView Rendering Engine Modules Analysis

## Summary
- **Total modules scanned:** ${moduleFiles.length}
- **Rendering-related modules found:** ${results.length}
- **Analysis date:** ${new Date().toISOString()}

## Top Rendering Modules (Priority Order)

${results.slice(0, 20).map((mod, i) => `
### ${i+1}. Module ${mod.id} (${(mod.size/1024).toFixed(1)} KB)
**Relevance Score:** ${mod.relevanceScore.toFixed(0)}

**Keyword Matches:**
${mod.matches.sort((a,b) => b.count - a.count).map(m => `- \`${m.keyword}\`: ${m.count} occurrences`).join('\n')}

**File:** \`modules-v2/${mod.name}\`
**Beautified:** ${fs.existsSync(path.join(__dirname, 'beautified-modules-manual', mod.name)) ? '✅ Yes' : '❌ No'}
`).join('\n---\n')}

## Categorization

### Canvas-based Rendering
${results.filter(m => m.matches.some(k => ['canvas', 'getContext', '2d'].includes(k.keyword.toLowerCase()))).map(m => `- Module ${m.id}`).join('\n') || 'None identified'}

### WebGL Rendering
${results.filter(m => m.matches.some(k => ['webgl', 'gl.', 'shader', 'vertex', 'fragment'].includes(k.keyword.toLowerCase()))).map(m => `- Module ${m.id}`).join('\n') || 'None identified'}

### Text Rendering
${results.filter(m => m.matches.some(k => ['text', 'font', 'TextRenderer'].includes(k.keyword.toLowerCase()))).map(m => `- Module ${m.id}`).join('\n') || 'None identified'}

### Drawing Tools
${results.filter(m => m.matches.some(k => ['draw', 'paint', 'linetool', 'shape'].includes(k.keyword.toLowerCase()))).map(m => `- Module ${m.id}`).join('\n') || 'None identified'}

### Pane/Chart Views
${results.filter(m => m.matches.some(k => ['paneview', 'chartwidget', 'coordinator'].includes(k.keyword.toLowerCase()))).map(m => `- Module ${m.id}`).join('\n') || 'None identified'}

## Recommended Processing Order

1. **Module 37150** (1.1 MB) - Main initialization, likely creates renderers
2. **Module 2115** (112 KB) - Series data, feeds into rendering pipeline
3. **Module 41414** (40 KB) - Line tool data source
4. **Module 60973** (37 KB) - Chart defaults/configuration
5. **Module 4753** (15 KB) - Text rendering
6. **Module 95779** (13 KB) - Feature flags
7. **Module 22489** (11 KB) - Theme system

## Next Steps

1. Beautify top 5 rendering modules not yet processed
2. Create variable renaming map for rendering-specific terms
3. Document renderer class hierarchies
4. Map data flow from series → pane views → canvas/webgl
`;

fs.writeFileSync(path.join(outputDir, 'RENDERING_MODULES_ANALYSIS.md'), report);

// List modules to beautify
const toBeautify = results
  .filter(m => !fs.existsSync(path.join(__dirname, 'beautified-modules-manual', m.name)))
  .slice(0, 10);

console.log('\n\n📋 Modules recommended for immediate beautification:\n');
toBeautify.forEach(m => {
  console.log(`  - ${m.name} (${(m.size/1024).toFixed(1)} KB)`);
});

fs.writeFileSync(
  path.join(outputDir, 'to-beautify.json'),
  JSON.stringify(toBeautify.map(m => ({ id: m.id, name: m.name, size: m.size })), null, 2)
);

console.log(`\n✅ Report saved to: ${outputDir}/RENDERING_MODULES_ANALYSIS.md`);
