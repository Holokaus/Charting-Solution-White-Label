#!/usr/bin/env node
/**
 * Verification script for Phase 1: Runtime Analysis & Module Mapping
 * Usage: node verify-phase-01.js
 */

const fs = require('fs');
const path = require('path');

const phaseDir = path.join(__dirname, '../phase-01-runtime-analysis');
const errors = [];
const warnings = [];
const passed = [];

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║  Phase 1 Verification: Runtime Analysis & Mapping    ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

// Helper: Check file exists
function checkFile(filename, description, required = true) {
    const filepath = path.join(phaseDir, filename);
    if (fs.existsSync(filepath)) {
        return { exists: true, path: filepath, content: fs.readFileSync(filepath, 'utf8') };
    } else {
        if (required) {
            errors.push(`✗ ${filename} not found`);
        } else {
            warnings.push(`⚠ ${filename} not found (optional)`);
        }
        return { exists: false, path: filepath, content: '' };
    }
}

// Check 1: test-page.html
console.log('→ Checking test-page.html...');
const testPage = checkFile('test-page.html', 'Basic test page');
if (testPage.exists) {
    const hasContainer = testPage.content.includes('tv_chart_container');
    const hasDatafeed = testPage.content.includes('MockDatafeed');
    const hasInit = testPage.content.includes('new TradingView.widget');
    
    if (hasContainer && hasDatafeed && hasInit) {
        passed.push('✓ test-page.html has widget container, mock datafeed, and initialization');
    } else {
        errors.push('✗ test-page.html missing required components');
    }
}

// Check 2: hook-injection scripts
console.log('→ Checking hook injection scripts...');
const hookSimple = checkFile('hook-injection-simple.js', 'Simple hook injection', false);
if (hookSimple.exists) {
    const hasXHR = hookSimple.content.includes('XMLHttpRequest');
    const hasFetch = hookSimple.content.includes('fetch');
    const hasExport = hookSimple.content.includes('exportHookLogs');
    
    if (hasXHR && hasFetch && hasExport) {
        passed.push('✓ hook-injection-simple.js has XMLHttpRequest, fetch, and export hooks');
    }
} else {
    const hookLegacy = checkFile('hook-injection.js', 'Hook injection', false);
    if (hookLegacy.exists) {
        const hasXHR = hookLegacy.content.includes('XMLHttpRequest');
        const hasFetch = hookLegacy.content.includes('fetch');
        if (hasXHR && hasFetch) {
            passed.push('✓ hook-injection.js has basic hooks implemented');
        }
    } else {
        errors.push('✗ No hook injection script found (need hook-injection-simple.js or hook-injection.js)');
    }
}

// Check 3: feature-trigger-test.html
console.log('→ Checking feature-trigger-test.html...');
const featureTest = checkFile('feature-trigger-test.html', 'Feature trigger test page', false);
if (featureTest.exists) {
    const hasButtons = featureTest.content.includes('Change Symbol') || 
                       featureTest.content.includes('triggerSymbolChange');
    const hasExport = featureTest.content.includes('exportHookLogs') || 
                      featureTest.content.includes('Export Logs');
    if (hasButtons && hasExport) {
        passed.push('✓ feature-trigger-test.html has feature triggers and export buttons');
    }
}

// Check 4: webpack-runtime-analysis.md
console.log('→ Checking webpack-runtime-analysis.md...');
const webpackAnalysis = checkFile('webpack-runtime-analysis.md', 'Webpack runtime analysis');
if (webpackAnalysis.exists) {
    if (webpackAnalysis.content.length > 200) {
        passed.push('✓ webpack-runtime-analysis.md exists with detailed content');
    } else {
        warnings.push('⚠ webpack-runtime-analysis.md is short (consider adding more detail)');
    }
}

// Check 5: module-behavior-map.json
console.log('→ Checking module-behavior-map.json...');
const behaviorMap = checkFile('module-behavior-map.json', 'Module behavior map');
if (behaviorMap.exists) {
    try {
        const map = JSON.parse(behaviorMap.content);
        const features = Object.keys(map.features);
        const featureCount = features.length;
        
        if (featureCount >= 10) {
            passed.push(`✓ module-behavior-map.json has ${featureCount} features (≥10 required)`);
            console.log(`  Features: ${features.slice(0, 5).join(', ')}${featureCount > 5 ? ', ...' : ''}`);
        } else {
            errors.push(`✗ module-behavior-map.json has ${featureCount} features (need ≥10)`);
        }
    } catch (e) {
        errors.push(`✗ module-behavior-map.json invalid JSON: ${e.message}`);
    }
}

// Check 6: hook-logs.json (optional - generated during testing)
console.log('→ Checking hook-logs.json (optional)...');
const hookLogs = checkFile('hook-logs.json', 'Runtime hook logs', false);
if (hookLogs.exists) {
    try {
        const logs = JSON.parse(hookLogs.content);
        const networkReqs = (logs.networkRequests || []).length;
        const domElems = (logs.domElements || []).length;
        const errors_count = (logs.errors || []).length;
        const scriptLoads = (logs.scriptLoads || []).length;
        const totalEvents = networkReqs + domElems + errors_count + scriptLoads;
        
        console.log(`  Network requests: ${networkReqs}`);
        console.log(`  DOM elements: ${domElems}`);
        console.log(`  Errors: ${errors_count}`);
        console.log(`  Script loads: ${scriptLoads}`);
        
        if (totalEvents > 100) {
            passed.push(`✓ hook-logs.json has ${totalEvents} total events (>100 required)`);
        } else {
            warnings.push(`⚠ hook-logs.json has ${totalEvents} events (need >100) - run feature tests to generate more`);
        }
    } catch (e) {
        warnings.push(`⚠ hook-logs.json exists but invalid JSON`);
    }
} else {
    warnings.push('⚠ hook-logs.json not found - requires manual testing (open feature-trigger-test.html and export)');
}

// Check 7: Verify directory structure
console.log('→ Checking directory structure...');
const requiredDirs = [
    '../phase-02-api-surface',
    '../phase-03-module-map',
    '../phase-04-public-api-reconstruction',
    '../phase-05-datafeed-protocol',
    '../phase-06-widget-core',
    '../phase-07-chart-engine',
    '../phase-08-drawing-tools',
    '../phase-09-studies-indicators',
    '../phase-10-integration-tests',
    '../tools',
    '../docs'
];

let missingDirs = [];
requiredDirs.forEach(dir => {
    const fullPath = path.join(phaseDir, dir);
    if (!fs.existsSync(fullPath)) {
        missingDirs.push(dir);
    }
});

if (missingDirs.length === 0) {
    passed.push('✓ All phase directories exist');
} else {
    warnings.push(`⚠ Missing directories: ${missingDirs.join(', ')}`);
}

// Summary
console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║  Verification Results                                 ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

console.log(`Passed (${passed.length}):`);
passed.forEach(p => console.log(`  ${p}`));

if (warnings.length > 0) {
    console.log(`\nWarnings (${warnings.length}):`);
    warnings.forEach(w => console.log(`  ${w}`));
}

if (errors.length > 0) {
    console.log(`\nErrors (${errors.length}):`);
    errors.forEach(e => console.log(`  ${e}`));
    console.log('\n✗ Phase 1 verification FAILED. Fix the errors above and retry.\n');
    process.exit(1);
} else {
    console.log('\n╔═══════════════════════════════════════════════════════╗');
    console.log('║  ✓ Phase 1 Verification PASSED!                       ║');
    console.log('║  Ready for Phase 2: API Surface Analysis              ║');
    console.log('╚═══════════════════════════════════════════════════════╝\n');
    
    console.log('Next Steps:');
    console.log('  1. Review hook-logs.json for initialization events');
    console.log('  2. Analyze module-behavior-map.json for feature patterns');
    console.log('  3. Begin Phase 2: API Surface Analysis\n');
    process.exit(0);
}
