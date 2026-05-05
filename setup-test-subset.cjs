#!/usr/bin/env node

/**
 * Setup Test Subset - Create 50 module sample for testing
 */

const fs = require('fs');
const path = require('path');

const sourceDir = './modules-v2';
const testDir = './test-subset-50';

// Create test directory
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
  console.log(`✓ Created directory: ${testDir}`);
}

// Get all JS files
const files = fs.readdirSync(sourceDir)
  .filter(f => f.endsWith('.js'))
  .sort();

console.log(`\nTotal modules available: ${files.length}`);

// Select every ~9th file to get a distributed sample of ~50
const step = Math.ceil(files.length / 50);
const selectedFiles = [];
for (let i = 0; i < files.length; i += step) {
  if (selectedFiles.length < 50) {
    selectedFiles.push(files[i]);
  }
}

console.log(`Selected ${selectedFiles.length} modules for testing:\n`);

// Copy files
selectedFiles.forEach((file, idx) => {
  const src = path.join(sourceDir, file);
  const dest = path.join(testDir, file);
  fs.copyFileSync(src, dest);
  if ((idx + 1) % 10 === 0) {
    console.log(`  [${idx + 1}/${selectedFiles.length}] Copied`);
  }
});

console.log(`\n✓ Test subset ready: ${selectedFiles.length} modules in ${testDir}/`);
console.log(`\nNext step: Run batch processing`);
console.log(`Command: node automated-rename-tool-production.cjs batch ./${testDir}`);
