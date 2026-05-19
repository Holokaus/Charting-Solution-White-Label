#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const phaseDir = path.join(__dirname, '../phase-02-api-surface');
const errors = [];
const passed = [];

function fail(msg) { errors.push(`✗ ${msg}`); }
function pass(msg) { passed.push(`✓ ${msg}`); }

function requireFile(f, minSize = 100) {
  const fp = path.join(phaseDir, f);
  if (!fs.existsSync(fp)) { fail(`${f} not found`); return null; }
  const c = fs.readFileSync(fp, 'utf8');
  if (c.length < minSize) { fail(`${f} too short (${c.length} bytes)`); return null; }
  return c;
}

console.log('=== PHASE 2 STRICT VERIFICATION ===\n');

// ============================================
// CHECK 1: Global API Inventory
// ============================================
console.log('Checking: tradingview-global-api.json');
const apiJson = requireFile('tradingview-global-api.json', 2000);
if (apiJson) {
  try {
    const api = JSON.parse(apiJson);
    
    // Verify structure
    if (!api.metadata) {
      fail('API inventory missing metadata object');
    } else {
      pass('API inventory has metadata');
      
      if (api.metadata.source !== 'Runtime inspection via DevTools console on test-page.html') {
        fail('API metadata missing or incorrect source');
      } else {
        pass('API metadata has correct runtime source');
      }
    }
    
    // Count properties
    const props = Object.keys(api.properties || {});
    if (props.length < 10) {
      fail(`Only ${props.length} properties documented (need ≥10)`);
    } else {
      pass(`API inventory: ${props.length} properties documented`);
    }
    
    // Check for key properties
    const required = ['widget', 'version', 'ChartStyle'];
    for (const req of required) {
      if (!api.properties[req]) {
        fail(`Missing required property: ${req}`);
      } else {
        pass(`Found property: ${req}`);
      }
    }
    
    // Check no module references
    if (JSON.stringify(api).includes('moduleId') || JSON.stringify(api).includes('webpack')) {
      fail('API inventory contains module ID references');
    } else {
      pass('API inventory free of module ID references');
    }
  } catch (e) {
    fail(`Invalid JSON in API inventory: ${e.message}`);
  }
}

// ============================================
// CHECK 2: Widget Options Schema
// ============================================
console.log('\nChecking: widget-options-schema.md');
const schema = requireFile('widget-options-schema.md', 3000);
if (schema) {
  // Count table rows (rough estimate of options)
  const optionMatches = schema.match(/^\|.*\|.*\|.*\|$/gm) || [];
  const tableDataRows = optionMatches.filter(row => !row.includes('-----') && !row.includes('Option'));
  
  if (tableDataRows.length < 40) {
    fail(`Only ~${tableDataRows.length} options documented (need ≥40 rows)`);
  } else {
    pass(`Options schema: ~${tableDataRows.length} options documented`);
  }
  
  // Check structure
  const hasRequired = schema.includes('Required Options');
  const hasOptional = schema.includes('Optional Options');
  
  if (!hasRequired) {
    fail('Schema missing "Required Options" section');
  } else {
    pass('Schema has Required Options section');
  }
  
  if (!hasOptional) {
    fail('Schema missing "Optional Options" section');
  } else {
    pass('Schema has Optional Options section');
  }
  
  // Check for descriptions
  if (schema.match(/\| Description \|/i)) {
    pass('Schema includes description columns');
  } else {
    fail('Schema may be missing descriptions');
  }
  
  // Check examples
  if (schema.includes('Example') || schema.includes('```javascript')) {
    pass('Schema includes examples');
  }
  
  // Check validation info
  if (schema.includes('Validation') || schema.includes('Error')) {
    pass('Schema documents validation/error behavior');
  }
}

// ============================================
// CHECK 3: Methods & Events
// ============================================
console.log('\nChecking: widget-methods-events.md');
const methods = requireFile('widget-methods-events.md', 4000);
if (methods) {
  // Count methods (look for ### method_name pattern)
  const methodMatches = methods.match(/^### [a-zA-Z_]+\(/gm) || [];
  const methodCount = methodMatches.length;
  
  if (methodCount < 20) {
    fail(`Only ${methodCount} methods documented (need ≥20)`);
  } else {
    pass(`Methods documented: ${methodCount}`);
  }
  
  // Count events
  const eventMatches = methods.match(/^### on[a-zA-Z]+/gm) || [];
  if (eventMatches.length < 10) {
    fail(`Only ${eventMatches.length} events documented (need ≥10)`);
  } else {
    pass(`Events documented: ${eventMatches.length}`);
  }
  
  // Check method documentation structure
  if (methods.includes('Arguments:') && methods.includes('Returns:')) {
    pass('Methods have full documentation structure');
  }
  
  if (methods.includes('Side effects:')) {
    pass('Methods document side effects');
  }
  
  if (methods.includes('Async:')) {
    pass('Methods document async behavior');
  }
  
  // Check for example code
  const exampleMatches = methods.match(/```javascript/g) || [];
  if (exampleMatches.length >= 20) {
    pass(`Methods have ${Math.floor(exampleMatches.length / 2)} code examples`);
  } else {
    fail(`Only ${Math.floor(exampleMatches.length / 2)} method examples (need more)`);
  }
  
  // Check payload documentation
  if (methods.includes('Payload sample:') || methods.includes('Payload:')) {
    pass('Event payloads are documented');
  } else {
    fail('Missing event payload documentation');
  }
}

// ============================================
// CHECK 4: Events Reference
// ============================================
console.log('\nChecking: events-reference.md');
const eventsRef = requireFile('events-reference.md', 3000);
if (eventsRef) {
  // Count event sections
  const eventSections = eventsRef.match(/^### on[a-zA-Z]+/gm) || [];
  if (eventSections.length < 15) {
    fail(`Only ${eventSections.length} events documented (need ≥15)`);
  } else {
    pass(`Events reference: ${eventSections.length} events`);
  }
  
  // Check payload examples
  const payloadExamples = eventsRef.match(/Payload sample:/gi) || [];
  if (payloadExamples.length < 10) {
    fail(`Only ${payloadExamples.length} payload examples (need ≥10)`);
  } else {
    pass(`${payloadExamples.length} payload examples provided`);
  }
  
  // Check JSON examples
  const jsonBlocks = eventsRef.match(/```json/g) || [];
  if (jsonBlocks.length < 10) {
    fail(`Only ${jsonBlocks.length} JSON payload samples`);
  } else {
    pass(`${jsonBlocks.length} JSON payload samples`);
  }
  
  // Check trigger documentation
  if (eventsRef.includes('Trigger:')) {
    pass('Events document when they trigger');
  }
  
  // Check use cases
  if (eventsRef.includes('Use Cases:')) {
    pass('Events document use cases');
  }
}

// ============================================
// CHECK 5: No Module Contamination
// ============================================
console.log('\nChecking: Module ID references');
const allFiles = [apiJson, schema, methods, eventsRef].filter(Boolean).join(' ');
const moduleTests = [
  { name: 'moduleId', found: allFiles.includes('moduleId') },
  { name: 'webpack', found: allFiles.includes('webpack') },
  { name: 'observed_modules', found: allFiles.includes('observed_modules') },
  { name: 'bundle chunk', found: /bundle\s+\d{4}\.\w+/.test(allFiles) }
];

let contaminated = false;
for (const test of moduleTests) {
  if (test.found) {
    fail(`Phase 2 contains "${test.name}" references`);
    contaminated = true;
  }
}
if (!contaminated) {
  pass('No module ID contamination in Phase 2');
}

// ============================================
// CHECK 6: Gaps Documentation
// ============================================
console.log('\nChecking: Gaps documentation');
const gapsPath = path.join(phaseDir, '../gaps.md');
if (fs.existsSync(gapsPath)) {
  const gapsContent = fs.readFileSync(gapsPath, 'utf8');
  if (gapsContent.length > 100) {
    pass('gaps.md exists and contains content');
  }
} else {
  // gaps.md is optional
  console.log('  (gaps.md not found - optional)');
}

// ============================================
// FINAL REPORT
// ============================================
console.log('\n' + '='.repeat(50));
console.log('VERIFICATION RESULTS');
console.log('='.repeat(50));

console.log(`\nPassed: ${passed.length}`);
if (passed.length > 0) {
  passed.forEach(p => console.log(`  ${p}`));
}

if (errors.length > 0) {
  console.log(`\nErrors: ${errors.length}`);
  errors.forEach(e => console.log(`  ${e}`));
  console.log('\n❌ PHASE 2 FAILED');
  console.log('Fix the errors above and rerun verification.');
  process.exit(1);
} else {
  console.log('\n✅ PHASE 2 PASSED');
  console.log('All phase 2 deliverables verified successfully!');
  process.exit(0);
}
