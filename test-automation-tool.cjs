#!/usr/bin/env node

/**
 * Test script for production automation tool
 */

const { analyzeFile, applySuggestionsToFile, KNOWN_MODULES } = require('./automated-rename-tool-production.cjs');
const fs = require('fs');
const path = require('path');

console.log('='.repeat(70));
console.log('TESTING: Production Automation Tool');
console.log('='.repeat(70));

// Test 1: Analyze a module
console.log('\n[TEST 1] Analyzing module 10307.js...');
const analysis1 = analyzeFile('./modules-v2/10307.js', 10307);
if (analysis1) {
  console.log(`✓ Found ${analysis1.suggestions.length} suggestions`);
  console.log(`  - Imports detected: ${Object.keys(analysis1.imports).length}`);
  console.log(`  - Classes detected: ${analysis1.patterns.classes?.length || 0}`);
  analysis1.suggestions.forEach(s => {
    console.log(`  → ${s.oldName} → ${s.newName} (${(s.confidence * 100).toFixed(0)}%)`);
  });
} else {
  console.log('✗ Analysis failed');
}

// Test 2: Analyze another module
console.log('\n[TEST 2] Analyzing module 72207.js (dataSource)...');
const analysis2 = analyzeFile('./modules-v2/72207.js', 72207);
if (analysis2) {
  console.log(`✓ Found ${analysis2.suggestions.length} suggestions`);
  if (analysis2.suggestions.length > 0) {
    analysis2.suggestions.slice(0, 3).forEach(s => {
      console.log(`  → ${s.oldName} → ${s.newName} (${(s.confidence * 100).toFixed(0)}%)`);
    });
  }
} else {
  console.log('✗ Analysis failed');
}

// Test 3: Verify KNOWN_MODULES
console.log('\n[TEST 3] Module mappings verification...');
console.log(`✓ Total known modules: ${Object.keys(KNOWN_MODULES).length}`);
console.log('  Sample mappings:');
const samples = Object.entries(KNOWN_MODULES).slice(0, 5);
samples.forEach(([id, name]) => {
  console.log(`  → ${id}: ${name}`);
});

// Test 4: Try applying suggestions on a test copy
console.log('\n[TEST 4] Testing suggestion application (dry run)...');
const testFile = './modules-v2/10307.js';
const backupTestFile = './test-rename-backup.js';
if (fs.existsSync(testFile)) {
  const originalContent = fs.readFileSync(testFile, 'utf8');
  fs.writeFileSync(backupTestFile, originalContent);
  
  const analysis = analyzeFile(testFile, 10307);
  if (analysis && analysis.suggestions.length > 0) {
    const result = applySuggestionsToFile(backupTestFile, analysis.suggestions);
    console.log(`✓ Applied ${result.appliedCount} renames`);
    if (result.conflicts && result.conflicts.length > 0) {
      console.log(`⚠ Conflicts found: ${result.conflicts.length}`);
    }
    
    // Cleanup
    fs.unlinkSync(backupTestFile);
    if (fs.existsSync(backupTestFile + '.backup')) {
      fs.unlinkSync(backupTestFile + '.backup');
    }
  }
}

console.log('\n' + '='.repeat(70));
console.log('TESTS COMPLETE');
console.log('='.repeat(70));
