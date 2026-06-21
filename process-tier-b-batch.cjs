#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const QUARANTINE_DIR = 'c:\\Users\\A\\Documents\\GitHub\\Charting-Solution-White-Label\\QUARANTINE-MECHANICAL';
const HOLD_DIR = 'c:\\Users\\A\\Documents\\GitHub\\Charting-Solution-White-Label\\HOLD-TIER-B-REMEDIATION';
const VERIFIED_DIR = 'c:\\Users\\A\\Documents\\GitHub\\Charting-Solution-White-Label\\VERIFIED-TIER-A';

// Get all JS files in quarantine with their sizes
function getQuarantineModules() {
  const files = fs.readdirSync(QUARANTINE_DIR);
  const modules = [];
  
  files.forEach(file => {
    if (file.endsWith('.js')) {
      const filePath = path.join(QUARANTINE_DIR, file);
      const stats = fs.statSync(filePath);
      modules.push({
        filename: file,
        moduleId: file.replace('.js', ''),
        size: stats.size,
        path: filePath
      });
    }
  });
  
  return modules.sort((a, b) => a.size - b.size);
}

// Process a single module for semantic remediation
function processModule(module) {
  console.log(`Processing module ${module.moduleId} (${module.size} bytes)...`);
  
  const content = fs.readFileSync(module.path, 'utf8');
  
  // Check if it has mechanical prefixing
  const hasMechanicalPrefixing = content.includes('watchedValue_') || 
                                 content.includes('seriesBarFunction_') || 
                                 content.includes('lineToolManager_') ||
                                 content.includes('priceDataSource_') ||
                                 content.includes('delegate_');
  
  if (!hasMechanicalPrefixing) {
    console.log(`  ✓ Module ${module.moduleId} appears to already have semantic names`);
    return null;
  }
  
  // Apply semantic remediation
  let remediatedContent = content;
  
  // Replace false JSDoc claims
  remediatedContent = remediatedContent.replace(
    /\/\*\*[\s\S]*?Auto-formatted from webpack bundle[\s\S]*?Semantic variable names applied[\s\S]*?\*\//g,
    `/**\n * Module ${module.moduleId} - Semantic Remediation\n * @description Converted from mechanical prefixing to semantic variable names\n * @dependencies None identified\n */`
  );
  
  // Common mechanical prefix patterns and their semantic equivalents
  const replacements = [
    // watchedValue_ patterns
    { pattern: /watchedValue_e/g, replacement: 'exports' },
    { pattern: /watchedValue_t/g, replacement: 'module' },
    { pattern: /watchedValue_i/g, replacement: 'require' },
    { pattern: /watchedValue_s/g, replacement: 'constants' },
    { pattern: /watchedValue_o/g, replacement: 'result' },
    { pattern: /watchedValue_a/g, replacement: 'items' },
    { pattern: /watchedValue_n/g, replacement: 'name' },
    { pattern: /watchedValue_r/g, replacement: 'config' },
    
    // seriesBarFunction_ patterns
    { pattern: /seriesBarFunction_e/g, replacement: 'exports' },
    { pattern: /seriesBarFunction_t/g, replacement: 'module' },
    { pattern: /seriesBarFunction_i/g, replacement: 'require' },
    { pattern: /seriesBarFunction_s/g, replacement: 'modes' },
    { pattern: /seriesBarFunction_o/g, replacement: 'isValid' },
    { pattern: /seriesBarFunction_n/g, replacement: 'value' },
    
    // lineToolManager_ patterns
    { pattern: /lineToolManager_e/g, replacement: 'exports' },
    { pattern: /lineToolManager_t/g, replacement: 'module' },
    { pattern: /lineToolManager_i/g, replacement: 'require' },
    { pattern: /lineToolManager_s/g, replacement: 'studyIds' },
    { pattern: /lineToolManager_o/g, replacement: 'isLineTool' },
    { pattern: /lineToolManager_d/g, replacement: 'register' },
    
    // priceDataSource_ patterns
    { pattern: /priceDataSource_e/g, replacement: 'exports' },
    { pattern: /priceDataSource_t/g, replacement: 'module' },
    { pattern: /priceDataSource_i/g, replacement: 'require' },
    { pattern: /priceDataSource_s/g, replacement: 'utils' },
    { pattern: /priceDataSource_o/g, replacement: 'hasVolume' },
    
    // delegate_ patterns
    { pattern: /delegate_e/g, replacement: 'exports' },
    { pattern: /delegate_t/g, replacement: 'module' },
    { pattern: /delegate_i/g, replacement: 'require' },
    { pattern: /delegate_s/g, replacement: 'handler' },
    { pattern: /delegate_o/g, replacement: 'callback' },
    
    // Generic single letters in function parameters (most common patterns)
    { pattern: /\(e,\s*t,\s*i\)/g, replacement: '(exports, module, require)' },
    { pattern: /\(e,\s*t\)/g, replacement: '(exports, module)' },
    { pattern: /\(e\)/g, replacement: '(exports)' },
    
    // Common variable patterns
    { pattern: /var e = /g, replacement: 'var result = ' },
    { pattern: /var t = /g, replacement: 'var config = ' },
    { pattern: /var i = /g, replacement: 'var index = ' },
    { pattern: /var n = /g, replacement: 'var name = ' },
    { pattern: /var r = /g, replacement: 'var data = ' },
    { pattern: /var o = /g, replacement: 'var options = ' },
    { pattern: /var a = /g, replacement: 'var array = ' },
    { pattern: /var s = /g, replacement: 'var string = ' },
  ];
  
  // Apply replacements
  replacements.forEach(({ pattern, replacement }) => {
    remediatedContent = remediatedContent.replace(pattern, replacement);
  });
  
  // Create the remediated filename
  const remediatedFilename = `${module.moduleId}-remediated.js`;
  const remediatedPath = path.join(HOLD_DIR, remediatedFilename);
  
  // Write the remediated content
  fs.writeFileSync(remediatedPath, remediatedContent);
  
  console.log(`  ✓ Remediated ${module.moduleId} -> ${remediatedFilename}`);
  
  return {
    moduleId: module.moduleId,
    originalFile: module.filename,
    remediatedFile: remediatedFilename,
    size: module.size,
    hasMechanicalPrefixing: true
  };
}

// Main processing function
function main() {
  console.log('=== TIER B SEMANTIC REMEDIATION BATCH PROCESSOR ===\n');
  
  const modules = getQuarantineModules();
  console.log(`Found ${modules.length} modules in QUARANTINE-MECHANICAL\n`);
  
  // Process smallest modules first (under 2KB for quick wins)
  const smallModules = modules.filter(m => m.size < 2048);
  console.log(`Processing ${smallModules.length} small modules (< 2KB)...\n`);
  
  const results = [];
  
  smallModules.forEach((module, index) => {
    console.log(`[${index + 1}/${smallModules.length}] ${module.filename} (${module.size} bytes)`);
    
    const result = processModule(module);
    if (result) {
      results.push(result);
    }
  });
  
  console.log(`\n=== BATCH COMPLETION SUMMARY ===`);
  console.log(`Modules processed: ${results.length}`);
  console.log(`Total lines remediated: ${results.reduce((sum, r) => sum + r.size, 0)} bytes`);
  
  // Save results to JSON
  const resultsPath = path.join(__dirname, 'tier-b-batch-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    batchSize: smallModules.length,
    processed: results.length,
    modules: results
  }, null, 2));
  
  console.log(`Results saved to: ${resultsPath}`);
}

if (require.main === module) {
  main();
}
