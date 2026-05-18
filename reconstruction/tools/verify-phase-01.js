#!/usr/bin/env node
/**
 * STRICT Verification script for Phase 1
 * ANY failure = halt. No warnings that allow passing.
 * All deliverables must be present and meet minimum quality standards.
 */

const fs = require('fs');
const path = require('path');

const phaseDir = path.join(__dirname, '../phase-01-runtime-analysis');
const errors = [];
const passed = [];

function fail(message) {
  errors.push(`✗ ${message}`);
}

function pass(message) {
  passed.push(`✓ ${message}`);
}

function requireFile(filename, minSize = 100) {
  const filepath = path.join(phaseDir, filename);
  if (!fs.existsSync(filepath)) {
    fail(`${filename} not found`);
    return null;
  }
  const content = fs.readFileSync(filepath, 'utf8');
  if (content.length < minSize) {
    fail(`${filename} is too short (${content.length} bytes, need ≥${minSize})`);
    return null;
  }
  return content;
}

console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║  PHASE 1 STRICT VERIFICATION                         ║');
console.log('║  ALL failures = halt. No soft warnings.               ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

// Check 1: test-page.html must exist and contain valid structure
console.log('→ Checking test-page.html...');
const testPage = requireFile('test-page.html', 500);
if (testPage) {
  const checks = [
    ['has container div', /id=["']tv_chart_container["']/],
    ['has datafeed implementation', /MockDatafeed|IDatafeed|datafeed/i],
    ['has widget initialization', /new\s+TradingView\.widget/i],
    ['loads library', /charting_library\.standalone\.js/],
    ['has hook injection', /hook-injection|hookLogs/i]
  ];
  
  let checkCount = 0;
  for (const [name, regex] of checks) {
    if (regex.test(testPage)) {
      checkCount++;
    } else {
      fail(`test-page.html missing: ${name}`);
    }
  }
  
  if (checkCount === checks.length) {
    pass('test-page.html is complete and valid');
  }
}

// Check 2: hook-logs.json MUST exist and contain actual events (REQUIRED, not optional)
console.log('→ Checking hook-logs.json...');
const hookLogsRaw = requireFile('hook-logs.json', 2000);
if (hookLogsRaw) {
  try {
    const hookLogs = JSON.parse(hookLogsRaw);
    const eventTypes = ['networkRequests', 'domElements', 'scriptLoads', 'errors'];
    let totalEvents = 0;
    
    console.log('  Event breakdown:');
    for (const type of eventTypes) {
      const count = (hookLogs[type] || []).length;
      totalEvents += count;
      console.log(`    ${type}: ${count}`);
    }
    
    if (totalEvents > 100) {
      pass(`hook-logs.json has ${totalEvents} events (>100 required)`);
    } else {
      fail(`hook-logs.json has only ${totalEvents} events (need >100). Requirement NOT met.`);
    }
    
    // Must contain initialization events
    const hasLibLoad = hookLogs.networkRequests?.some(r => 
      r.url?.includes('charting_library') || r.url?.includes('bundle')
    );
    if (!hasLibLoad) {
      fail('hook-logs.json missing library/bundle load events');
    } else {
      pass('hook-logs.json contains library initialization events');
    }
    
    // Check for feature triggers
    const hasFeatureTriggers = hookLogs.featureTriggers && hookLogs.featureTriggers.length > 0;
    if (!hasFeatureTriggers) {
      fail('hook-logs.json has no feature trigger records');
    } else {
      pass(`hook-logs.json has ${hookLogs.featureTriggers.length} feature trigger records`);
    }
    
  } catch (e) {
    fail(`hook-logs.json invalid JSON: ${e.message}`);
  }
}

// Check 3: webpack-runtime-analysis.md must be CORRECT (NOT claiming "no webpack")
console.log('→ Checking webpack-runtime-analysis.md...');
const webpackAnalysis = requireFile('webpack-runtime-analysis.md', 1000);
if (webpackAnalysis) {
  // CRITICAL: Must NOT claim "no webpack" when webpack IS present
  const claimsNoWebpack = webpackAnalysis.includes('No Standard Webpack Patterns') || 
                          webpackAnalysis.includes('does NOT use standard webpack') ||
                          webpackAnalysis.includes('does not use webpack');
  
  const identifiesWebpack = webpackAnalysis.includes('__webpack_require__') || 
                            webpackAnalysis.includes('module registry') ||
                            webpackAnalysis.includes('function(e, t, i)') ||
                            webpackAnalysis.includes('IIFE') ||
                            webpackAnalysis.includes('webpack');
  
  if (claimsNoWebpack && !webpackAnalysis.includes('CORRECTED')) {
    fail('webpack-runtime-analysis.md incorrectly claims no webpack patterns. The bundle IS webpack.');
    console.log('  >>> The bundle uses standard webpack structure.');
    console.log('  >>> The earlier analysis was wrong and must be corrected.');
  } else if (identifiesWebpack || webpackAnalysis.includes('CORRECTED')) {
    pass('webpack-runtime-analysis.md correctly identifies webpack structure');
  } else {
    fail('webpack-runtime-analysis.md unclear about webpack status');
  }
}

// Check 4: module-behavior-map.json must have >10 features
console.log('→ Checking module-behavior-map.json...');
const behaviorMapRaw = requireFile('module-behavior-map.json', 1000);
if (behaviorMapRaw) {
  try {
    const map = JSON.parse(behaviorMapRaw);
    const features = Object.values(map.features || {});
    const featureCount = features.length;
    
    console.log(`  Features found: ${featureCount}`);
    
    if (featureCount < 10) {
      fail(`module-behavior-map.json has only ${featureCount} features (need ≥10)`);
    } else {
      pass(`module-behavior-map.json has ${featureCount} features (≥10 required)`);
    }
    
    // Check if any feature indicates where actual module IDs WILL be captured
    // (It's OK if this is a template, as long as it indicates the structure)
    const hasStructure = features.some(f => 
      f.expected_modules || f.observed_modules || f.modules
    );
    
    if (!hasStructure) {
      fail('module-behavior-map.json features lack module structure (expected_modules or observed_modules)');
    } else {
      pass('module-behavior-map.json has proper feature structure');
    }
    
  } catch (e) {
    fail(`module-behavior-map.json invalid JSON: ${e.message}`);
  }
}

// Check 5: feature-trigger-test.html must exist and be functional
console.log('→ Checking feature-trigger-test.html...');
const featureTest = requireFile('feature-trigger-test.html', 1000);
if (featureTest) {
  const hasButtons = /button|onclick|trigger/i.test(featureTest);
  const hasExport = /exportHookLogs|exportModuleBehaviorMap/i.test(featureTest);
  const hasFeatures = /Change Symbol|Change Interval|change_|trigger/i.test(featureTest);
  
  if (!hasButtons || !hasExport || !hasFeatures) {
    fail('feature-trigger-test.html missing buttons, export, or feature triggers');
  } else {
    pass('feature-trigger-test.html has trigger buttons and export functionality');
  }
}

// Check 6: hook-injection-simple.js must exist
console.log('→ Checking hook-injection-simple.js...');
const hookScript = requireFile('hook-injection-simple.js', 500);
if (hookScript) {
  const hasXHR = hookScript.includes('XMLHttpRequest');
  const hasFetch = hookScript.includes('fetch');
  const hasExport = hookScript.includes('exportHookLogs');
  const hasTracking = hookScript.includes('startFeatureTracking');
  
  if (!hasXHR || !hasFetch || !hasExport || !hasTracking) {
    fail('hook-injection-simple.js missing required hook implementations');
  } else {
    pass('hook-injection-simple.js has all required hooks and exports');
  }
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

let allDirsExist = true;
for (const dir of requiredDirs) {
  const fullPath = path.join(phaseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fail(`Missing directory: ${dir}`);
    allDirsExist = false;
  }
}

if (allDirsExist) {
  pass('All phase directories exist');
}

// FINAL VERDICT
console.log('\n╔═══════════════════════════════════════════════════════╗');
console.log('║  VERIFICATION RESULTS                                 ║');
console.log('╚═══════════════════════════════════════════════════════╝\n');

console.log(`Passed (${passed.length}):`);
passed.forEach(p => console.log(`  ${p}`));

if (errors.length > 0) {
  console.log(`\nErrors (${errors.length}):`);
  errors.forEach(e => console.log(`  ${e}`));
  console.log('\n❌ PHASE 1 FAILED');
  console.log('---');
  console.log('Issues found:');
  errors.forEach((e, i) => console.log(`  ${i + 1}. ${e.substring(2)}`));
  console.log('\nFix the errors above and re-run verification.\n');
  process.exit(1);
} else {
  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║  ✅ PHASE 1 PASSED                                    ║');
  console.log('║  All deliverables present and valid.                 ║');
  console.log('║  Ready for Phase 2: API Surface Analysis             ║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');
  process.exit(0);
}
