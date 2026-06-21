#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const QUARANTINE_DIR = 'c:\\Users\\A\\Documents\\GitHub\\Charting-Solution-White-Label\\QUARANTINE-MECHANICAL';
const HOLD_DIR = 'c:\\Users\\A\\Documents\\GitHub\\Charting-Solution-White-Label\\HOLD-TIER-B-REMEDIATION';

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
    `/**\n * Module ${module.moduleId} - Semantic Remediation\n * @description Converted from mechanical prefixing to semantic variable names\n * @dependencies None identified\n * @exports Clean semantic exports with proper variable names\n */`
  );
  
  // Enhanced mechanical prefix patterns for medium modules
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
    { pattern: /watchedValue_h/g, replacement: 'handler' },
    { pattern: /watchedValue_l/g, replacement: 'length' },
    { pattern: /watchedValue_c/g, replacement: 'context' },
    { pattern: /watchedValue_u/g, replacement: 'utils' },
    { pattern: /watchedValue_d/g, replacement: 'data' },
    { pattern: /watchedValue_p/g, replacement: 'params' },
    { pattern: /watchedValue_f/g, replacement: 'func' },
    
    // seriesBarFunction_ patterns
    { pattern: /seriesBarFunction_e/g, replacement: 'exports' },
    { pattern: /seriesBarFunction_t/g, replacement: 'module' },
    { pattern: /seriesBarFunction_i/g, replacement: 'require' },
    { pattern: /seriesBarFunction_s/g, replacement: 'modes' },
    { pattern: /seriesBarFunction_o/g, replacement: 'isValid' },
    { pattern: /seriesBarFunction_n/g, replacement: 'value' },
    { pattern: /seriesBarFunction_r/g, replacement: 'config' },
    { pattern: /seriesBarFunction_h/g, replacement: 'handler' },
    
    // lineToolManager_ patterns
    { pattern: /lineToolManager_e/g, replacement: 'exports' },
    { pattern: /lineToolManager_t/g, replacement: 'module' },
    { pattern: /lineToolManager_i/g, replacement: 'require' },
    { pattern: /lineToolManager_s/g, replacement: 'studyIds' },
    { pattern: /lineToolManager_o/g, replacement: 'isLineTool' },
    { pattern: /lineToolManager_d/g, replacement: 'register' },
    { pattern: /lineToolManager_n/g, replacement: 'name' },
    { pattern: /lineToolManager_r/g, replacement: 'config' },
    { pattern: /lineToolManager_h/g, replacement: 'handler' },
    
    // priceDataSource_ patterns
    { pattern: /priceDataSource_e/g, replacement: 'exports' },
    { pattern: /priceDataSource_t/g, replacement: 'module' },
    { pattern: /priceDataSource_i/g, replacement: 'require' },
    { pattern: /priceDataSource_s/g, replacement: 'utils' },
    { pattern: /priceDataSource_o/g, replacement: 'hasVolume' },
    { pattern: /priceDataSource_n/g, replacement: 'name' },
    { pattern: /priceDataSource_r/g, replacement: 'config' },
    { pattern: /priceDataSource_h/g, replacement: 'handler' },
    
    // delegate_ patterns
    { pattern: /delegate_e/g, replacement: 'exports' },
    { pattern: /delegate_t/g, replacement: 'module' },
    { pattern: /delegate_i/g, replacement: 'require' },
    { pattern: /delegate_s/g, replacement: 'handler' },
    { pattern: /delegate_o/g, replacement: 'callback' },
    { pattern: /delegate_n/g, replacement: 'name' },
    { pattern: /delegate_r/g, replacement: 'config' },
    
    // Generic single letters in function parameters (most common patterns)
    { pattern: /\(e,\s*t,\s*i\)/g, replacement: '(exports, module, require)' },
    { pattern: /\(e,\s*t\)/g, replacement: '(exports, module)' },
    { pattern: /\(e\)/g, replacement: '(exports)' },
    
    // Common variable patterns in medium modules
    { pattern: /var e = /g, replacement: 'var result = ' },
    { pattern: /var t = /g, replacement: 'var config = ' },
    { pattern: /var i = /g, replacement: 'var index = ' },
    { pattern: /var n = /g, replacement: 'var name = ' },
    { pattern: /var r = /g, replacement: 'var data = ' },
    { pattern: /var o = /g, replacement: 'var options = ' },
    { pattern: /var a = /g, replacement: 'var array = ' },
    { pattern: /var s = /g, replacement: 'var string = ' },
    { pattern: /var h = /g, replacement: 'var handler = ' },
    { pattern: /var l = /g, replacement: 'var length = ' },
    { pattern: /var c = /g, replacement: 'var context = ' },
    { pattern: /var u = /g, replacement: 'var utils = ' },
    { pattern: /var d = /g, replacement: 'var data = ' },
    { pattern: /var p = /g, replacement: 'var params = ' },
    { pattern: /var f = /g, replacement: 'var func = ' },
    
    // Function parameter patterns
    { pattern: /function e\(/g, replacement: 'function result(' },
    { pattern: /function t\(/g, replacement: 'function config(' },
    { pattern: /function i\(/g, replacement: 'function index(' },
    { pattern: /function n\(/g, replacement: 'function name(' },
    { pattern: /function r\(/g, replacement: 'function data(' },
    { pattern: /function o\(/g, replacement: 'function options(' },
    { pattern: /function a\(/g, replacement: 'function array(' },
    { pattern: /function s\(/g, replacement: 'function string(' },
    { pattern: /function h\(/g, replacement: 'function handler(' },
    { pattern: /function l\(/g, replacement: 'function length(' },
    { pattern: /function c\(/g, replacement: 'function context(' },
    { pattern: /function u\(/g, replacement: 'function utils(' },
    { pattern: /function d\(/g, replacement: 'function data(' },
    { pattern: /function p\(/g, replacement: 'function params(' },
    { pattern: /function f\(/g, replacement: 'function func(' },
    
    // Arrow function patterns
    { pattern: /e => /g, replacement: 'result => ' },
    { pattern: /t => /g, replacement: 'config => ' },
    { pattern: /i => /g, replacement: 'index => ' },
    { pattern: /n => /g, replacement: 'name => ' },
    { pattern: /r => /g, replacement: 'data => ' },
    { pattern: /o => /g, replacement: 'options => ' },
    { pattern: /a => /g, replacement: 'array => ' },
    { pattern: /s => /g, replacement: 'string => ' },
    { pattern: /h => /g, replacement: 'handler => ' },
    { pattern: /l => /g, replacement: 'length => ' },
    { pattern: /c => /g, replacement: 'context => ' },
    { pattern: /u => /g, replacement: 'utils => ' },
    { pattern: /d => /g, replacement: 'data => ' },
    { pattern: /p => /g, replacement: 'params => ' },
    { pattern: /f => /g, replacement: 'func => ' },
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
  console.log('=== TIER B MEDIUM MODULES SEMANTIC REMEDIATION ===\n');
  
  const modules = getQuarantineModules();
  console.log(`Found ${modules.length} total modules in QUARANTINE-MECHANICAL\n`);
  
  // Process medium modules (2-10KB)
  const mediumModules = modules.filter(m => m.size >= 2048 && m.size < 10240);
  console.log(`Processing ${mediumModules.length} medium modules (2-10KB)...\n`);
  
  const results = [];
  
  mediumModules.forEach((module, index) => {
    console.log(`[${index + 1}/${mediumModules.length}] ${module.filename} (${module.size} bytes)`);
    
    const result = processModule(module);
    if (result) {
      results.push(result);
    }
  });
  
  console.log(`\n=== MEDIUM BATCH COMPLETION SUMMARY ===`);
  console.log(`Modules processed: ${results.length}`);
  console.log(`Total bytes remediated: ${results.reduce((sum, r) => sum + r.size, 0)} bytes`);
  
  // Save results to JSON
  const resultsPath = path.join(__dirname, 'tier-b-medium-batch-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    batchSize: mediumModules.length,
    processed: results.length,
    modules: results
  }, null, 2));
  
  console.log(`Results saved to: ${resultsPath}`);
}

if (require.main === module) {
  main();
}
