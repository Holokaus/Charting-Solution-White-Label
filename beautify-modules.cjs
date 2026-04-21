#!/usr/bin/env node

/**
 * Beautify and analyze TradingView webpack modules
 * Processes extracted modules, formats them, and identifies key logic
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const modulesDir = path.join(__dirname, 'modules-v2');
const outputDir = path.join(__dirname, 'beautified-modules');
const analysisFile = path.join(__dirname, 'MODULE_ANALYSIS.md');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🔍 Analyzing TradingView modules...\n');

// Get all module files sorted by size (largest first)
const moduleFiles = fs.readdirSync(modulesDir)
  .filter(f => f.endsWith('.js') && f !== 'index.js')
  .map(f => ({
    name: f,
    id: parseInt(f.replace('.js', '')),
    size: fs.statSync(path.join(modulesDir, f)).size
  }))
  .sort((a, b) => b.size - a.size);

console.log(`Found ${moduleFiles.length} modules\n`);

// Analysis results
const analysis = {
  totalModules: moduleFiles.length,
  totalSize: moduleFiles.reduce((sum, m) => sum + m.size, 0),
  topModules: [],
  keyClasses: [],
  keyFunctions: [],
  dependencies: {}
};

// Process top 20 largest modules
const topModules = moduleFiles.slice(0, 20);
let processedCount = 0;

for (const module of topModules) {
  const inputPath = path.join(modulesDir, module.name);
  const outputPath = path.join(outputDir, module.name);
  let content = fs.readFileSync(inputPath, 'utf8');
  
  console.log(`Processing module ${module.id} (${(module.size/1024).toFixed(1)} KB)...`);
  
  // Extract module ID prefix
  const match = content.match(/^(\d+):/);
  const moduleId = match ? match[1] : module.id.toString();
  
  // Remove the module ID prefix for beautification
  let codeWithoutPrefix = content.replace(/^\d+:/, '');
  
  // Try to beautify with prettier via command line
  try {
    const tempFile = path.join(outputDir, `temp_${module.name}`);
    fs.writeFileSync(tempFile, codeWithoutPrefix);
    
    execSync(`npx prettier --write "${tempFile}" 2>/dev/null`, { stdio: 'pipe' });
    
    let beautified = fs.readFileSync(tempFile, 'utf8');
    fs.unlinkSync(tempFile);
    
    // Add back module wrapper as comment
    const finalContent = `// Module ${moduleId}\n// Original: ${module.name}\n// Size: ${(module.size/1024).toFixed(1)} KB\n\n${beautified}`;
    
    fs.writeFileSync(outputPath, finalContent);
    processedCount++;
    
    // Analyze content for key patterns
    const classes = (beautified.match(/class\s+(\w+)/g) || []).map(c => c.replace('class ', ''));
    const functions = (beautified.match(/function\s+(\w+)/g) || []).map(f => f.replace('function ', ''));
    const imports = (beautified.match(/i\(\d+\)/g) || []).length;
    
    if (classes.length > 0 || functions.length > 0) {
      analysis.topModules.push({
        id: moduleId,
        size: module.size,
        classes: classes.slice(0, 5),
        functions: functions.slice(0, 5),
        imports
      });
      
      analysis.keyClasses.push(...classes.map(c => ({ name: c, module: moduleId })));
      analysis.keyFunctions.push(...functions.map(f => ({ name: f, module: moduleId })));
    }
    
    console.log(`  ✓ Found ${classes.length} classes, ${functions.length} functions, ${imports} imports\n`);
    
  } catch (error) {
    // If prettier fails, just copy with formatting notes
    const fallbackContent = `// Module ${moduleId}\n// Original: ${module.name}\n// Size: ${(module.size/1024).toFixed(1)} KB\n// Note: Could not be auto-formatted due to syntax complexity\n\n${codeWithoutPrefix}`;
    fs.writeFileSync(outputPath, fallbackContent);
    console.log(`  ⚠ Could not format (complex syntax)\n`);
  }
}

// Generate analysis report
const report = `# TradingView Module Analysis Report

## Overview
- **Total Modules:** ${analysis.totalModules}
- **Total Size:** ${(analysis.totalSize / 1024 / 1024).toFixed(2)} MB
- **Processed:** ${processedCount} top modules

## Top 10 Largest Modules

| Module ID | Size (KB) | Classes | Functions | Imports |
|-----------|-----------|---------|-----------|---------|
${analysis.topModules.slice(0, 10).map(m => 
  `| ${m.id} | ${(m.size/1024).toFixed(1)} | ${m.classes.length} | ${m.functions.length} | ${m.imports} |`
).join('\n')}

## Key Classes Discovered

${analysis.keyClasses.slice(0, 20).map(c => `- \`${c.name}\` in module ${c.module}`).join('\n')}

## Key Functions Discovered

${analysis.keyFunctions.slice(0, 20).map(f => `- \`${f.name}\` in module ${f.module}`).join('\n')}

## Module Dependencies

The modules use webpack's internal require function \`i(moduleId)\` to import dependencies.
Each module follows the pattern: \`MODULE_ID:(e,t,i)=>{...}\` where:
- \`e\` = exports object
- \`t\` = module object  
- \`i\` = require function

## Next Steps

1. **Priority Modules to Analyze:**
   - Module 37150: Main initialization and chunk loading
   - Module 4783: Study/indicator library definitions
   - Module 2115: Series data handling
   - Module 87453: Timezone data

2. **Rename Variables:** Focus on modules with high class/function counts

3. **Map Dependencies:** Track inter-module relationships

## Files Generated

- \`beautified-modules/\` - Formatted versions of top 20 modules
- \`MODULE_ANALYSIS.md\` - This analysis report
`;

fs.writeFileSync(analysisFile, report);

console.log('✅ Analysis complete!');
console.log(`\n📄 Generated files:`);
console.log(`   - ${outputDir}/ (${processedCount} beautified modules)`);
console.log(`   - ${analysisFile}`);
console.log(`\n📊 Summary:`);
console.log(`   - Total modules: ${analysis.totalModules}`);
console.log(`   - Top module size: ${(moduleFiles[0].size/1024/1024).toFixed(2)} MB (Module ${moduleFiles[0].id})`);
console.log(`   - Key classes found: ${analysis.keyClasses.length}`);
console.log(`   - Key functions found: ${analysis.keyFunctions.length}`);
