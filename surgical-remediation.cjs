#!/usr/bin/env node
/**
 * Surgical Remediation Engine v1.0
 * Principal Reverse-Engineering Architect - Intelligent Repair Strategy
 * 
 * Philosophy: Preserve intentional work, repair accidental corruption
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'c:/Users/A/Documents/GitHub/Charting-Solution-White-Label';
const SOURCE_TRUTH = path.join(BASE_DIR, 'Charting-Solution-White-Label-master/Charting-Solution-White-Label-master').replace(/\\/g, '/');

// Remediation tracking
const remediationLog = {
  fixed: [],
  manualReview: [],
  sourceRestored: [],
  errors: [],
  startTime: new Date().toISOString()
};

/**
 * Analyze file ending to determine if it's genuinely truncated
 */
function analyzeEnding(content) {
  const last500 = content.slice(-500);
  const lastLine = content.trim().split('\n').pop();
  
  // Patterns that indicate genuine truncation (incomplete statements)
  const truncationPatterns = [
    { pattern: /[=+\-*/]$/, severity: 'high', desc: 'Ends with operator' },
    { pattern: /\.$/, severity: 'high', desc: 'Ends with property access' },
    { pattern: /,$/, severity: 'medium', desc: 'Ends with comma' },
    { pattern: /\($/, severity: 'high', desc: 'Ends with opening paren' },
    { pattern: /\[$/, severity: 'high', desc: 'Ends with opening bracket' },
    { pattern: /\{$/, severity: 'high', desc: 'Ends with opening brace' },
    { pattern: /return\s+[^;]*$/, severity: 'high', desc: 'Incomplete return' },
    { pattern: /new\s+\w*$/, severity: 'high', desc: 'Incomplete new' },
    { pattern: /await\s+\w*$/, severity: 'high', desc: 'Incomplete await' },
    { pattern: /if\s*\([^)]*$/, severity: 'high', desc: 'Incomplete if' },
    { pattern: /function\s*\w*\s*\([^)]*$/, severity: 'high', desc: 'Incomplete function' }
  ];
  
  for (const { pattern, severity, desc } of truncationPatterns) {
    if (pattern.test(lastLine)) {
      return { isTruncated: true, severity, desc, lastLine: lastLine.slice(-50) };
    }
  }
  
  return { isTruncated: false };
}

/**
 * Calculate brace balance and identify location of mismatch
 */
function analyzeBraceBalance(content) {
  const lines = content.split('\n');
  let depth = 0;
  let maxDepth = 0;
  let inString = false;
  let stringChar = null;
  let inComment = false;
  let commentType = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      const nextChar = line[j + 1] || '';
      
      // Handle strings
      if (!inComment && !inString && (char === '"' || char === "'" || char === '`')) {
        inString = true;
        stringChar = char;
        continue;
      }
      if (inString && char === stringChar && line[j - 1] !== '\\') {
        inString = false;
        stringChar = null;
        continue;
      }
      
      // Handle comments
      if (!inString && !inComment && char === '/' && nextChar === '/') {
        break; // Rest of line is comment
      }
      if (!inString && !inComment && char === '/' && nextChar === '*') {
        inComment = true;
        commentType = 'block';
        j++;
        continue;
      }
      if (inComment && commentType === 'block' && char === '*' && nextChar === '/') {
        inComment = false;
        commentType = null;
        j++;
        continue;
      }
      
      // Count braces only when not in string or comment
      if (!inString && !inComment) {
        if (char === '{') depth++;
        if (char === '}') depth--;
        if (depth > maxDepth) maxDepth = depth;
        if (depth < 0) {
          return { balanced: false, issue: 'negative', line: i + 1, depth };
        }
      }
    }
  }
  
  return { 
    balanced: depth === 0, 
    depth, 
    maxDepth,
    issue: depth !== 0 ? 'unclosed' : null,
    missingClosings: depth
  };
}

/**
 * Find corresponding source file in bundle directory
 */
function findSourceFile(moduleId) {
  const bundleDir = path.join(SOURCE_TRUTH, 'charting_library/bundles').replace(/\\/g, '/');
  if (!fs.existsSync(bundleDir)) return null;
  
  const files = fs.readdirSync(bundleDir);
  const match = files.find(f => f.startsWith(moduleId + '.'));
  return match ? path.join(bundleDir, match).replace(/\\/g, '/') : null;
}

/**
 * Extract module from webpack bundle
 */
function extractModuleFromBundle(bundlePath, moduleId) {
  try {
    const content = fs.readFileSync(bundlePath, 'utf-8');
    
    // Look for webpack module pattern: 12345:(e,t,i)=>{...}
    const modulePattern = new RegExp(moduleId + ':(\\([^)]*\\))=>\\{', 'g');
    const match = modulePattern.exec(content);
    
    if (!match) return null;
    
    // Find the complete module by tracking brace depth
    const startIdx = match.index;
    let depth = 1;
    let idx = content.indexOf('{', startIdx) + 1;
    
    while (depth > 0 && idx < content.length) {
      if (content[idx] === '{') depth++;
      if (content[idx] === '}') depth--;
      idx++;
    }
    
    const moduleContent = content.slice(startIdx, idx);
    return moduleContent;
  } catch (e) {
    return null;
  }
}

/**
 * Attempt to fix a file based on its specific issue
 */
function remediateFile(filePath, issue) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  const moduleId = fileName.replace(/-.*$/, '').replace('.js', '');
  
  // Strategy 1: If truncated, try to restore from source
  if (issue.type === 'truncation') {
    const sourcePath = findSourceFile(moduleId);
    if (sourcePath) {
      const extracted = extractModuleFromBundle(sourcePath, moduleId);
      if (extracted) {
        // Don't overwrite - this is a webpack format, not ES6
        // Just log that we found it
        remediationLog.manualReview.push({
          file: filePath,
          reason: 'Truncated but source exists - manual conversion needed',
          moduleId,
          sourcePath
        });
        return { action: 'logged', reason: 'Source available but format differs' };
      }
    }
  }
  
  // Strategy 2: Fix unbalanced braces by adding closing braces
  if (issue.type === 'unbalanced_braces' && issue.missingClosings > 0 && issue.missingClosings <= 3) {
    // Add missing closing braces at end
    const fixedContent = content + '\n' + '}'.repeat(issue.missingClosings) + '\n';
    
    // Verify the fix
    const verify = analyzeBraceBalance(fixedContent);
    if (verify.balanced) {
      fs.writeFileSync(filePath, fixedContent, 'utf-8');
      remediationLog.fixed.push({
        file: filePath,
        fix: `Added ${issue.missingClosings} closing brace(s)`,
        originalIssue: issue
      });
      return { action: 'fixed', fix: `Added ${issue.missingClosings} closing brace(s)` };
    }
  }
  
  // Strategy 3: Complete truncated exports
  if (issue.type === 'truncation' && content.includes('export')) {
    // Try to complete common export patterns
    const lastLine = content.trim().split('\n').pop();
    
    if (/export\s+class\s+\w+/.test(content) && !content.includes('}')) {
      // Missing class closing
      const fixedContent = content + '\n}\n';
      fs.writeFileSync(filePath, fixedContent, 'utf-8');
      remediationLog.fixed.push({
        file: filePath,
        fix: 'Added missing class closing brace',
        originalIssue: issue
      });
      return { action: 'fixed', fix: 'Added missing class closing brace' };
    }
  }
  
  // Fallback: Log for manual review
  remediationLog.manualReview.push({
    file: filePath,
    reason: 'Could not auto-fix',
    issue
  });
  return { action: 'manual_review', reason: 'Auto-fix not available for this issue type' };
}

/**
 * Main remediation execution
 */
async function executeRemediation() {
  console.log('');
  console.log('🔧 SURGICAL REMEDIATION ENGINE v1.0');
  console.log('='.repeat(70));
  console.log('');
  console.log('Strategy: Preserve intentional work, repair accidental corruption');
  console.log('');
  
  // Files known to have issues from audit
  const problematicFiles = [
    { path: 'DEPLOYMENT-READY/60973-chart-config-defaults.js', type: 'truncation' },
    { path: 'DEPLOYMENT-READY/10307-bitmap-coordinates-pane-renderer.js', type: 'truncation' },
    { path: 'VERIFIED-TIER-A/60973-chart-config-defaults.js', type: 'truncation' },
    { path: 'VERIFIED-TIER-A/10307-bitmap-coordinates-pane-renderer.js', type: 'truncation' },
    { path: 'round5-high-applied/10544.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/12362.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/13823.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/14411.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/19136.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/2088.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/2258.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/23502.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/23752.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/24317.js', type: 'unbalanced_braces' },
    { path: 'round5-high-applied/27593.js', type: 'unbalanced_braces' }
  ];
  
  console.log('📋 Phase 1: Analyzing ' + problematicFiles.length + ' flagged files...\n');
  
  let processed = 0;
  let fixed = 0;
  let manual = 0;
  
  for (const item of problematicFiles) {
    const fullPath = path.join(BASE_DIR, item.path).replace(/\\/g, '/');
    
    if (!fs.existsSync(fullPath)) {
      console.log('⚠️  File not found: ' + item.path);
      continue;
    }
    
    const content = fs.readFileSync(fullPath, 'utf-8');
    
    // Analyze the specific issue
    let issue = { type: item.type };
    
    if (item.type === 'unbalanced_braces') {
      const balance = analyzeBraceBalance(content);
      issue = { ...issue, ...balance };
    } else if (item.type === 'truncation') {
      const ending = analyzeEnding(content);
      issue = { ...issue, ...ending };
    }
    
    console.log('🔍 ' + path.basename(fullPath));
    
    // Attempt remediation
    const result = remediateFile(fullPath, issue);
    
    if (result.action === 'fixed') {
      console.log('   ✅ FIXED: ' + result.fix);
      fixed++;
    } else if (result.action === 'manual_review') {
      console.log('   ⚠️  MANUAL REVIEW NEEDED: ' + result.reason);
      manual++;
    } else {
      console.log('   ℹ️  ' + result.reason);
    }
    
    processed++;
  }
  
  console.log('');
  console.log('📊 Phase 2: Generating Remediation Report...\n');
  
  generateRemediationReport(processed, fixed, manual);
  
  console.log('');
  console.log('='.repeat(70));
  console.log('✅ Remediation Complete');
  console.log('   Processed: ' + processed);
  console.log('   Fixed: ' + fixed);
  console.log('   Manual Review: ' + manual);
  console.log('='.repeat(70));
}

function generateRemediationReport(processed, fixed, manual) {
  const reportPath = path.join(BASE_DIR, 'SURGICAL_REMEDIATION_REPORT.md').replace(/\\/g, '/');
  
  let report = '# Surgical Remediation Report\n\n';
  report += '**Generated:** ' + new Date().toISOString() + '\n';
  report += '**Architect:** Principal Reverse-Engineering Architect\n';
  report += '**Strategy:** Preserve intentional work, repair accidental corruption\n\n';
  report += '---\n\n';
  
  report += '## Executive Summary\n\n';
  report += '| Metric | Value |\n';
  report += '|--------|-------|\n';
  report += '| **Files Processed** | ' + processed + ' |\n';
  report += '| **Auto-Fixed** | ' + fixed + ' |\n';
  report += '| **Manual Review Required** | ' + manual + ' |\n';
  report += '| **Success Rate** | ' + ((fixed / processed) * 100).toFixed(1) + '% |\n\n';
  
  // Fixed files
  if (remediationLog.fixed.length > 0) {
    report += '## Successfully Repaired Files\n\n';
    for (const item of remediationLog.fixed) {
      report += '### ' + path.basename(item.file) + '\n';
      report += '- **File:** `' + item.file + '`\n';
      report += '- **Fix Applied:** ' + item.fix + '\n';
      if (item.originalIssue) {
        report += '- **Original Issue:** ' + JSON.stringify(item.originalIssue) + '\n';
      }
      report += '\n';
    }
  }
  
  // Manual review files
  if (remediationLog.manualReview.length > 0) {
    report += '## Files Requiring Manual Review\n\n';
    for (const item of remediationLog.manualReview) {
      report += '### ' + path.basename(item.file) + '\n';
      report += '- **File:** `' + item.file + '`\n';
      report += '- **Reason:** ' + item.reason + '\n';
      if (item.sourcePath) {
        report += '- **Source Available:** `' + item.sourcePath + '`\n';
        report += '- **Action:** Compare with source and manually merge\n';
      }
      report += '\n';
    }
  }
  
  // Errors
  if (remediationLog.errors.length > 0) {
    report += '## Errors During Remediation\n\n';
    for (const err of remediationLog.errors) {
      report += '- **' + err.file + ':** ' + err.error + '\n';
    }
    report += '\n';
  }
  
  report += '---\n\n';
  report += '## Recommended Next Steps\n\n';
  
  if (manual > 0) {
    report += '### Immediate Actions\n';
    report += '1. **Manual Review Required:** ' + manual + ' files need expert review\n';
    report += '2. **Source Comparison:** For truncated files, compare with original bundles\n';
    report += '3. **Verification:** Re-run integrity audit after manual fixes\n\n';
  }
  
  report += '### Prevention Measures\n';
  report += '- Implement pre-commit syntax validation\n';
  report += '- Add automated brace-balance checking to build pipeline\n';
  report += '- Create backup snapshots before bulk operations\n\n';
  
  report += '---\n';
  report += '*Report generated by Surgical Remediation Engine v1.0*\n';
  
  fs.writeFileSync(reportPath, report, 'utf-8');
  console.log('   Report written to: ' + reportPath);
}

// Execute
executeRemediation().catch(err => {
  console.error('Remediation failed:', err);
  process.exit(1);
});
