#!/usr/bin/env node
/**
 * Batch Fix Remaining Production Files
 * Auto-fix all unbalanced brace issues in production directories
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';

const PRODUCTION_DIRS = [
  'DEPLOYMENT-READY',
  'VERIFIED-TIER-A', 
  'round5-high-applied'
];

const results = {
  scanned: 0,
  fixed: 0,
  alreadyBalanced: 0,
  errors: [],
  fixes: []
};

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const open = (content.match(/\{/g) || []).length;
    const close = (content.match(/\}/g) || []).length;
    
    results.scanned++;
    
    if (open === close) {
      results.alreadyBalanced++;
      return { status: 'balanced' };
    }
    
    if (open > close) {
      // Missing closing braces - add them
      const toAdd = open - close;
      const fixed = content + '\n' + '}'.repeat(toAdd) + '\n';
      
      // Verify
      const newOpen = (fixed.match(/\{/g) || []).length;
      const newClose = (fixed.match(/\}/g) || []).length;
      
      if (newOpen === newClose) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        results.fixed++;
        results.fixes.push({ file: filePath, added: toAdd });
        return { status: 'fixed', added: toAdd };
      } else {
        return { status: 'error', reason: 'Verification failed' };
      }
    } else {
      // More closing than opening - complex issue
      results.errors.push({ file: filePath, reason: 'Extra closing braces', open, close });
      return { status: 'complex', open, close };
    }
  } catch (err) {
    results.errors.push({ file: filePath, reason: err.message });
    return { status: 'error', reason: err.message };
  }
}

console.log('🔧 BATCH FIX: Remaining Production Files');
console.log('='.repeat(60));

for (const dir of PRODUCTION_DIRS) {
  const dirPath = path.join(BASE_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    console.log('⚠️  Directory not found: ' + dir);
    continue;
  }
  
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.js'));
  console.log('\n📁 ' + dir + ' (' + files.length + ' files)');
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const result = fixFile(filePath);
    
    if (result.status === 'fixed') {
      console.log('  ✅ ' + file + ' (+' + result.added + ' brace)');
    } else if (result.status === 'complex') {
      console.log('  ⚠️  ' + file + ' (complex - manual review needed)');
    } else if (result.status === 'error') {
      console.log('  ❌ ' + file + ' (error: ' + result.reason + ')');
    }
  }
}

console.log('\n' + '='.repeat(60));
console.log('📊 SUMMARY');
console.log('  Files scanned: ' + results.scanned);
console.log('  Already balanced: ' + results.alreadyBalanced);
console.log('  Fixed: ' + results.fixed);
console.log('  Errors/Complex: ' + results.errors.length);

if (results.fixes.length > 0) {
  console.log('\n📝 Fixes applied:');
  for (const fix of results.fixes.slice(0, 10)) {
    console.log('  - ' + path.basename(fix.file) + ': +' + fix.added + ' brace(s)');
  }
  if (results.fixes.length > 10) {
    console.log('  ... and ' + (results.fixes.length - 10) + ' more');
  }
}

if (results.errors.length > 0) {
  console.log('\n⚠️  Files needing manual review:');
  for (const err of results.errors.slice(0, 5)) {
    console.log('  - ' + path.basename(err.file) + ': ' + err.reason);
  }
}

console.log('\n✅ Batch fix complete');
