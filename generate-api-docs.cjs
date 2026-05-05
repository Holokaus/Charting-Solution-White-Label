/**
 * Generate API Documentation from beautified modules
 * Extracts function signatures, classes, and exports
 */
const fs = require('fs');
const path = require('path');

const BEAUTIFIED_DIR = './beautified-output';
const OUTPUT_FILE = './API_DOCUMENTATION.md';

// Known semantic mappings for core modules
const KNOWN_MODULES = {
  '2072': 'watchedValue',
  '2115': 'series',
  '9343': 'logger',
  '27714': 'canvasRendering',
  '48096': 'delegate',
  '52746': 'seriesData',
  '67135': 'priceDataSource',
  '72207': 'dataSource',
  '1765': 'settingsAdapter',
  '11542': 'context',
  '52959': 'features',
  '81251': 'settings',
  '60973': 'chartConfig',
  '38881': 'chunkLoaderModule',
  '9753': 'constants',
  '72877': 'cssClasses',
  '3615': 'dialogManager',
  '84617': 'chartManager',
  '55308': 'drawingToolbarState',
  '34840': 'chartDataManager',
  '29803': 'linkingManager',
  '71846': 'chartSaver',
  '81593': 'backendService',
  '46082': 'timeInterval',
  '11946': 'lineToolUtils',
  '78861': 'lineToolManager',
  '37150': 'mainInitialization',
  '10307': 'bitmapCoordinatesPane',
  '17776': 'seriesBarFunction',
  '92848': 'clipboardData',
  '89947': 'deleteLockedLineTools',
};

/**
 * Extract module metadata
 */
function extractModuleMetadata(content, filename) {
  const moduleId = filename.replace('.js', '');
  const semanticName = KNOWN_MODULES[moduleId] || `module_${moduleId}`;
  
  const metadata = {
    id: moduleId,
    semanticName: semanticName,
    filename: filename,
    fileSize: content.length,
    lineCount: content.split('\n').length,
    exports: [],
    classes: [],
    functions: [],
    dependencies: [],
  };

  // Extract exports
  const exportsMatch = content.match(/i\.d\(t,\s*{([^}]+)}\)/);
  if (exportsMatch) {
    const exportsStr = exportsMatch[1];
    const exports = exportsStr.split(',').map(e => {
      const match = e.match(/(\w+):/);
      return match ? match[1] : null;
    }).filter(Boolean);
    metadata.exports = exports;
  }

  // Extract class definitions
  const classPattern = /class\s+(\w+)(?:\s+extends\s+(\w+))?\s*{/g;
  let match;
  while ((match = classPattern.exec(content)) !== null) {
    metadata.classes.push({
      name: match[1],
      extends: match[2] || null,
    });
  }

  // Extract function declarations
  const funcPattern = /function\s+(\w+)\s*\(/g;
  while ((match = funcPattern.exec(content)) !== null) {
    const name = match[1];
    if (!metadata.functions.includes(name)) {
      metadata.functions.push(name);
    }
  }

  // Extract dependencies (module imports)
  const importPattern = /i\((\d+)\)/g;
  const depSet = new Set();
  while ((match = importPattern.exec(content)) !== null) {
    depSet.add(match[1]);
  }
  metadata.dependencies = Array.from(depSet).map(id => ({
    id: id,
    semanticName: KNOWN_MODULES[id] || `module_${id}`,
  }));

  return metadata;
}

/**
 * Format metadata for markdown
 */
function formatModuleDoc(metadata) {
  let doc = `### Module ${metadata.id} - ${metadata.semanticName}\n\n`;
  
  if (metadata.exports.length > 0) {
    doc += `**Exports:** ${metadata.exports.join(', ')}\n\n`;
  }

  if (metadata.classes.length > 0) {
    doc += `**Classes:**\n`;
    for (const cls of metadata.classes) {
      const ext = cls.extends ? ` extends ${cls.extends}` : '';
      doc += `- \`${cls.name}\`${ext}\n`;
    }
    doc += '\n';
  }

  if (metadata.functions.length > 0) {
    doc += `**Functions:** ${metadata.functions.slice(0, 10).join(', ')}`;
    if (metadata.functions.length > 10) {
      doc += ` ... and ${metadata.functions.length - 10} more`;
    }
    doc += '\n\n';
  }

  if (metadata.dependencies.length > 0) {
    doc += `**Dependencies (${metadata.dependencies.length}}):**\n`;
    for (const dep of metadata.dependencies.slice(0, 10)) {
      doc += `- Module ${dep.id} (${dep.semanticName})\n`;
    }
    if (metadata.dependencies.length > 10) {
      doc += `- ... and ${metadata.dependencies.length - 10} more\n`;
    }
    doc += '\n';
  }

  doc += `**Stats:** ${metadata.fileSize} bytes, ${metadata.lineCount} lines\n\n`;
  doc += '---\n\n';

  return doc;
}

/**
 * Generate comprehensive API documentation
 */
async function generateAPIDocumentation() {
  try {
    console.log('📚 Generating API Documentation...\n');

    if (!fs.existsSync(BEAUTIFIED_DIR)) {
      console.error('❌ Beautified directory not found:', BEAUTIFIED_DIR);
      process.exit(1);
    }

    // Read all beautified files
    console.log('📖 Scanning beautified modules...');
    const files = fs.readdirSync(BEAUTIFIED_DIR).filter(f => f.endsWith('.js'));
    console.log(`✓ Found ${files.length} modules\n`);

    // Extract metadata from each file
    console.log('🔍 Extracting metadata...');
    const allMetadata = [];
    let processed = 0;

    for (const file of files) {
      const content = fs.readFileSync(path.join(BEAUTIFIED_DIR, file), 'utf-8');
      const metadata = extractModuleMetadata(content, file);
      allMetadata.push(metadata);

      processed++;
      if (processed % 100 === 0) {
        console.log(`  [${processed}/${files.length}] Extracted`);
      }
    }
    console.log(`✓ Metadata extraction complete\n`);

    // Generate documentation
    console.log('✍️ Generating documentation...');

    let doc = `# TradingView Charting Library - API Documentation\n\n`;
    doc += `Generated: ${new Date().toISOString()}\n\n`;
    doc += `## Overview\n\n`;
    doc += `This documentation covers ${files.length} modules from the TradingView charting library.\n`;
    doc += `${allMetadata.filter(m => Object.values(KNOWN_MODULES).includes(m.semanticName)).length} modules have been semantically identified.\n\n`;

    // Core modules section
    doc += `## Core Modules (${Object.keys(KNOWN_MODULES).length})\n\n`;
    const coreModules = allMetadata.filter(m => Object.keys(KNOWN_MODULES).includes(m.id));
    for (const mod of coreModules.sort((a, b) => parseInt(a.id) - parseInt(b.id))) {
      doc += formatModuleDoc(mod);
    }

    // Statistics
    doc += `## Statistics\n\n`;
    doc += `- **Total Modules:** ${files.length}\n`;
    doc += `- **Identified Modules:** ${coreModules.length}\n`;
    doc += `- **Total Exports:** ${allMetadata.reduce((sum, m) => sum + m.exports.length, 0)}\n`;
    doc += `- **Total Classes:** ${allMetadata.reduce((sum, m) => sum + m.classes.length, 0)}\n`;
    doc += `- **Total Functions:** ${allMetadata.reduce((sum, m) => sum + m.functions.length, 0)}\n`;
    const totalDeps = new Set(allMetadata.flatMap(m => m.dependencies.map(d => d.id))).size;
    doc += `- **Total Unique Dependencies:** ${totalDeps}\n\n`;

    // Top exports
    doc += `## Top Exports by Module\n\n`;
    const topExports = allMetadata
      .filter(m => m.exports.length > 0)
      .sort((a, b) => b.exports.length - a.exports.length)
      .slice(0, 10);
    for (const mod of topExports) {
      doc += `- **Module ${mod.id}** (${mod.semanticName}): ${mod.exports.length} exports - ${mod.exports.join(', ')}\n`;
    }
    doc += '\n';

    // Save documentation
    console.log(`💾 Saving to ${OUTPUT_FILE}...`);
    fs.writeFileSync(OUTPUT_FILE, doc);
    console.log('✓ Documentation saved\n');

    console.log('═══════════════════════════════════════');
    console.log('✅ API DOCUMENTATION GENERATED');
    console.log('═══════════════════════════════════════');
    console.log(`Total Modules: ${files.length}`);
    console.log(`Identified Modules: ${coreModules.length}`);
    console.log(`Total Exports: ${allMetadata.reduce((sum, m) => sum + m.exports.length, 0)}`);
    console.log(`Total Classes: ${allMetadata.reduce((sum, m) => sum + m.classes.length, 0)}`);
    console.log(`Output: ${OUTPUT_FILE}`);
    console.log('\n✅ Documentation ready for review!');

  } catch (error) {
    console.error('❌ Error generating documentation:', error.message);
    process.exit(1);
  }
}

generateAPIDocumentation();
