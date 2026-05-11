#!/usr/bin/env node
/**
 * PROJECT DEDUPLICATION SCRIPT
 * Removes duplicate files to reduce work and save space
 * 
 * Strategy:
 * 1. DEPLOYMENT-READY is the canonical source
 * 2. Remove duplicates from other directories
 * 3. Report what was removed
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';

// Directories that can have duplicates removed
const DUPLICATE_DIRS = [
  'deployment-staging',
  'modules-awaiting-beautification',
  'beautified-batch',
  'beautified-output',
  'round5-high-applied',
  'round5-medium-applied'
];

// Canonical source (keep these)
const CANONICAL_DIRS = ['DEPLOYMENT-READY', 'VERIFIED-TIER-A'];

console.log('╔═══════════════════════════════════════════════════════════════════════════╗');
console.log('║                    PROJECT DEDUPLICATION SCRIPT                           ║');
console.log('╚═══════════════════════════════════════════════════════════════════════════╝');
console.log('');

function getFileHash(filePath) {
  try {
    const content = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(content).digest('hex');
  } catch (e) {
    return null;
  }
}

function getAllFiles(dirPath) {
  const files = [];
  try {
    const entries = fs.readdirSync(dirPath);
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isFile() && entry.endsWith('.js')) {
        files.push(entry);
      }
    }
  } catch (e) {
    console.log('  ⚠️  Cannot read directory: ' + dirPath);
  }
  return files;
}

// Step 1: Build hash database from canonical sources
console.log('STEP 1: Building canonical file database...');
console.log('-'.repeat(70));

const canonicalHashes = new Map(); // hash -> {file, dir, size}

for (const dir of CANONICAL_DIRS) {
  const dirPath = path.join(BASE_DIR, dir);
  if (!fs.existsSync(dirPath)) continue;
  
  const files = getAllFiles(dirPath);
  console.log(dir + ': ' + files.length + ' files');
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const hash = getFileHash(filePath);
    if (hash) {
      const size = fs.statSync(filePath).size;
      canonicalHashes.set(hash, {file, dir, size, hash});
    }
  }
}

console.log('  Canonical files indexed: ' + canonicalHashes.size);
console.log('');

// Step 2: Find and remove duplicates
console.log('STEP 2: Finding and removing duplicates...');
console.log('-'.repeat(70));

let totalRemoved = 0;
let totalSaved = 0;
const removedFiles = [];

for (const dupDir of DUPLICATE_DIRS) {
  const dirPath = path.join(BASE_DIR, dupDir);
  if (!fs.existsSync(dirPath)) {
    console.log(dupDir + ': Directory not found, skipping');
    continue;
  }
  
  const files = getAllFiles(dirPath);
  let dirRemoved = 0;
  let dirSaved = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const hash = getFileHash(filePath);
    
    if (hash && canonicalHashes.has(hash)) {
      const canonical = canonicalHashes.get(hash);
      const size = fs.statSync(filePath).size;
      
      // Remove duplicate
      try {
        fs.unlinkSync(filePath);
        dirRemoved++;
        dirSaved += size;
        removedFiles.push({
          removed: path.join(dupDir, file),
          kept: path.join(canonical.dir, canonical.file),
          size: size
        });
      } catch (e) {
        console.log('  ❌ Failed to remove: ' + file);
      }
    }
  }
  
  totalRemoved += dirRemoved;
  totalSaved += dirSaved;
  
  if (dirRemoved > 0) {
    console.log(dupDir + ':');
    console.log('  ✅ Removed: ' + dirRemoved + ' duplicates');
    console.log('  💾 Saved: ' + (dirSaved / 1024).toFixed(2) + ' KB');
  }
}

console.log('');
console.log('-'.repeat(70));
console.log('DEDUPLICATION SUMMARY:');
console.log('  Total files removed: ' + totalRemoved);
console.log('  Space saved: ' + (totalSaved / 1024).toFixed(2) + ' KB');
console.log('');

// Step 3: Create report
console.log('STEP 3: Creating removal report...');
const report = `# DEDUPLICATION REPORT

**Date:** ${new Date().toISOString()}
**Action:** Removed duplicate JavaScript files from project

## Summary

- **Files Removed:** ${totalRemoved}
- **Space Saved:** ${(totalSaved / 1024).toFixed(2)} KB
- **Canonical Source:** DEPLOYMENT-READY, VERIFIED-TIER-A

## Removed Files

| Removed From | Kept In | Size (bytes) |
|--------------|---------|--------------|
${removedFiles.map(r => `| ${r.removed} | ${r.kept} | ${r.size} |`).join('\n')}

## Directories Cleaned

${DUPLICATE_DIRS.filter(d => fs.existsSync(path.join(BASE_DIR, d))).map(d => `- ${d}`).join('\n')}

## Impact

- Reduced workspace size by ${(totalSaved / 1024).toFixed(2)} KB
- Eliminated ${totalRemoved} duplicate files
- Clarified canonical source locations
- Reduced future restoration work

## Notes

- Files were verified by MD5 hash before removal
- Canonical versions in DEPLOYMENT-READY were preserved
- No data loss - only exact duplicates removed
`;

fs.writeFileSync(path.join(BASE_DIR, 'DEDUPLICATION_REPORT.md'), report);
console.log('  Report saved: DEDUPLICATION_REPORT.md');
console.log('');

console.log('✅ DEDUPLICATION COMPLETE');
console.log('');
