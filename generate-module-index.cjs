/**
 * Create comprehensive module index
 * Lists all 466 modules with metadata and classification
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const OUTPUT_FILE = './MODULE_INDEX_COMPLETE.md';
const OUTPUT_JSON = './module-index.json';

// Known semantic mappings
const KNOWN_MODULES = {
  '2072': { name: 'watchedValue', category: 'Core Infrastructure' },
  '2115': { name: 'series', category: 'Core Infrastructure' },
  '9343': { name: 'logger', category: 'Utilities' },
  '27714': { name: 'canvasRendering', category: 'Rendering' },
  '48096': { name: 'delegate', category: 'Core Infrastructure' },
  '52746': { name: 'seriesData', category: 'Core Infrastructure' },
  '67135': { name: 'priceDataSource', category: 'Data Source' },
  '72207': { name: 'dataSource', category: 'Data Source' },
  '1765': { name: 'settingsAdapter', category: 'Settings' },
  '11542': { name: 'context', category: 'Settings' },
  '52959': { name: 'features', category: 'Configuration' },
  '81251': { name: 'settings', category: 'Settings' },
  '60973': { name: 'chartConfig', category: 'Configuration' },
  '38881': { name: 'chunkLoaderModule', category: 'Utilities' },
  '9753': { name: 'constants', category: 'Utilities' },
  '72877': { name: 'cssClasses', category: 'Rendering' },
  '3615': { name: 'dialogManager', category: 'UI/Dialog' },
  '84617': { name: 'chartManager', category: 'Core Infrastructure' },
  '55308': { name: 'drawingToolbarState', category: 'UI/Toolbar' },
  '34840': { name: 'chartDataManager', category: 'Data Management' },
  '29803': { name: 'linkingManager', category: 'UI Management' },
  '71846': { name: 'chartSaver', category: 'Storage' },
  '81593': { name: 'backendService', category: 'Network' },
  '46082': { name: 'timeInterval', category: 'Utilities' },
  '11946': { name: 'lineToolUtils', category: 'Drawing Tools' },
  '78861': { name: 'lineToolManager', category: 'Drawing Tools' },
  '37150': { name: 'mainInitialization', category: 'Initialization' },
  '10307': { name: 'bitmapCoordinatesPane', category: 'Rendering' },
  '17776': { name: 'seriesBarFunction', category: 'Series' },
  '92848': { name: 'clipboardData', category: 'Utilities' },
  '89947': { name: 'deleteLockedLineTools', category: 'Drawing Tools' },
};

/**
 * Classify unknown modules by analyzing content
 */
function classifyModule(content, moduleId) {
  if (KNOWN_MODULES[moduleId]) {
    return KNOWN_MODULES[moduleId].category;
  }

  // Heuristic classification
  const lowerContent = content.toLowerCase();
  
  if (lowerContent.includes('class') && lowerContent.includes('render')) return 'Rendering';
  if (lowerContent.includes('storage') || lowerContent.includes('localstorage')) return 'Storage';
  if (lowerContent.includes('network') || lowerContent.includes('xhr') || lowerContent.includes('fetch')) return 'Network';
  if (lowerContent.includes('dialog') || lowerContent.includes('modal')) return 'UI/Dialog';
  if (lowerContent.includes('canvas') || lowerContent.includes('svg')) return 'Rendering';
  if (lowerContent.includes('event') || lowerContent.includes('listener')) return 'Events';
  if (lowerContent.includes('chart')) return 'Chart Management';
  if (lowerContent.includes('series')) return 'Series';
  if (lowerContent.includes('config') || lowerContent.includes('settings')) return 'Configuration';
  if (lowerContent.includes('tool')) return 'Tools';
  if (lowerContent.includes('data')) return 'Data Source';
  if (lowerContent.includes('css') || lowerContent.includes('style')) return 'Styling';
  if (lowerContent.includes('constant') || lowerContent.includes('enum')) return 'Constants';
  
  return 'Utilities';
}

/**
 * Extract module information
 */
function extractModuleInfo(content, filename) {
  const moduleId = filename.replace('.js', '');
  const semanticName = KNOWN_MODULES[moduleId]?.name || `unknown_${moduleId}`;
  const category = classifyModule(content, moduleId);
  
  // Extract exports count
  const exportsMatch = content.match(/i\.d\(t,\s*{([^}]+)}\)/);
  const exportCount = exportsMatch ? exportsMatch[1].split(',').length : 0;
  
  // Extract imports (dependencies)
  const importPattern = /i\((\d+)\)/g;
  const depSet = new Set();
  let match;
  while ((match = importPattern.exec(content)) !== null) {
    depSet.add(match[1]);
  }
  
  // Extract classes
  const classPattern = /class\s+(\w+)/g;
  const classes = [];
  while ((match = classPattern.exec(content)) !== null) {
    classes.push(match[1]);
  }
  
  return {
    moduleId,
    semanticName,
    category,
    fileSize: content.length,
    lineCount: content.split('\n').length,
    exportCount,
    dependencies: Array.from(depSet),
    classes,
  };
}

/**
 * Generate markdown index
 */
function generateMarkdownIndex(modules) {
  let md = `# TradingView Module Index - Complete Reference\n\n`;
  md += `Generated: ${new Date().toISOString()}\n`;
  md += `Total Modules: ${modules.length}\n\n`;

  // Table of contents by category
  const categories = [...new Set(modules.map(m => m.category))].sort();
  md += `## Table of Contents\n\n`;
  for (const cat of categories) {
    const count = modules.filter(m => m.category === cat).length;
    md += `- [${cat}](#${cat.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}) (${count})\n`;
  }
  md += '\n---\n\n';

  // Modules by category
  for (const category of categories) {
    const categoryModules = modules.filter(m => m.category === category).sort((a, b) => parseInt(a.moduleId) - parseInt(b.moduleId));
    md += `## ${category}\n\n`;
    md += `| Module ID | Semantic Name | Exports | Dependencies | Classes | Size |\n`;
    md += `|-----------|---------------|---------|--------------|---------|------|\n`;
    
    for (const mod of categoryModules) {
      const depList = mod.dependencies.length > 0 ? mod.dependencies.slice(0, 3).join(', ') + (mod.dependencies.length > 3 ? '...' : '') : 'None';
      const classList = mod.classes.length > 0 ? mod.classes.slice(0, 2).join(', ') + (mod.classes.length > 2 ? '...' : '') : 'None';
      md += `| ${mod.moduleId} | ${mod.semanticName} | ${mod.exportCount} | ${depList} | ${classList} | ${(mod.fileSize / 1024).toFixed(1)}KB |\n`;
    }
    md += '\n';
  }

  // Statistics
  md += `## Statistics\n\n`;
  md += `- **Total Modules:** ${modules.length}\n`;
  md += `- **Total Size:** ${(modules.reduce((sum, m) => sum + m.fileSize, 0) / 1024 / 1024).toFixed(2)}MB\n`;
  md += `- **Identified Modules:** ${modules.filter(m => Object.values(KNOWN_MODULES).some(km => km.name === m.semanticName)).length}\n`;
  md += `- **Average Module Size:** ${(modules.reduce((sum, m) => sum + m.fileSize, 0) / modules.length / 1024).toFixed(1)}KB\n`;
  md += `- **Categories:** ${categories.length}\n\n`;

  // Top modules by size
  const topBySize = modules.sort((a, b) => b.fileSize - a.fileSize).slice(0, 10);
  md += `## Largest Modules\n\n`;
  md += `| Rank | Module ID | Semantic Name | Size | Category |\n`;
  md += `|------|-----------|---------------|------|----------|\n`;
  for (let i = 0; i < topBySize.length; i++) {
    const mod = topBySize[i];
    md += `| ${i + 1} | ${mod.moduleId} | ${mod.semanticName} | ${(mod.fileSize / 1024).toFixed(1)}KB | ${mod.category} |\n`;
  }

  return md;
}

/**
 * Generate JSON index
 */
function generateJsonIndex(modules) {
  return {
    timestamp: new Date().toISOString(),
    summary: {
      totalModules: modules.length,
      totalSize: modules.reduce((sum, m) => sum + m.fileSize, 0),
      categories: [...new Set(modules.map(m => m.category))].length,
      identifiedModules: modules.filter(m => Object.values(KNOWN_MODULES).some(km => km.name === m.semanticName)).length,
    },
    modules: modules.sort((a, b) => parseInt(a.moduleId) - parseInt(b.moduleId)),
  };
}

/**
 * Main generation
 */
async function generateModuleIndex() {
  try {
    console.log('📇 Generating complete module index...\n');

    if (!fs.existsSync(BEAUTIFIED_DIR)) {
      console.error('❌ Beautified directory not found:', BEAUTIFIED_DIR);
      process.exit(1);
    }

    // Read all modules
    console.log('📖 Scanning modules...');
    const files = fs.readdirSync(BEAUTIFIED_DIR).filter(f => f.endsWith('.js'));
    console.log(`✓ Found ${files.length} modules\n`);

    // Extract information
    console.log('🔍 Extracting module information...');
    const modules = [];
    let processed = 0;

    for (const file of files) {
      const content = fs.readFileSync(path.join(BEAUTIFIED_DIR, file), 'utf-8');
      const info = extractModuleInfo(content, file);
      modules.push(info);

      processed++;
      if (processed % 100 === 0) {
        console.log(`  [${processed}/${files.length}] Analyzed`);
      }
    }
    console.log(`✓ Analysis complete\n`);

    // Generate markdown
    console.log('✍️ Generating markdown index...');
    const mdContent = generateMarkdownIndex(modules);
    fs.writeFileSync(OUTPUT_FILE, mdContent);
    console.log(`✓ Saved to ${OUTPUT_FILE}\n`);

    // Generate JSON
    console.log('📝 Generating JSON index...');
    const jsonContent = generateJsonIndex(modules);
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(jsonContent, null, 2));
    console.log(`✓ Saved to ${OUTPUT_JSON}\n`);

    // Display summary
    const categories = [...new Set(modules.map(m => m.category))].sort();
    console.log('═══════════════════════════════════════');
    console.log('✅ MODULE INDEX COMPLETE');
    console.log('═══════════════════════════════════════');
    console.log(`Total Modules: ${modules.length}`);
    console.log(`Total Size: ${(modules.reduce((sum, m) => sum + m.fileSize, 0) / 1024 / 1024).toFixed(2)}MB`);
    console.log(`Categories: ${categories.length}`);
    console.log(`Identified: ${modules.filter(m => Object.values(KNOWN_MODULES).some(km => km.name === m.semanticName)).length}`);
    console.log('\nTop 5 Categories:');
    const topCats = categories.map(cat => ({
      cat,
      count: modules.filter(m => m.category === cat).length,
    })).sort((a, b) => b.count - a.count).slice(0, 5);
    for (const tc of topCats) {
      console.log(`  - ${tc.cat}: ${tc.count} modules`);
    }
    console.log('\n✅ Both markdown and JSON indexes ready!');

  } catch (error) {
    console.error('❌ Error generating index:', error.message);
    process.exit(1);
  }
}

generateModuleIndex();
