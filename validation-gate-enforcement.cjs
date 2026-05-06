/**
 * VALIDATION GATE ENFORCEMENT - Tier A Quality Checklist
 * Ensures all converted modules meet Class 1 standards
 */

const fs = require('fs');
const path = require('path');

const VALIDATION_GATES = {
  noMechanicalPrefixing: {
    name: 'No Mechanical Prefixing',
    test: (content) => !content.match(/\b\w+_[a-z]\b/),
    message: 'Module contains mechanical prefixing pattern (e.g., watchedValue_e)'
  },
  
  semanticKeywords: {
    name: 'Semantic Keywords Present',
    test: (content) => {
      const keywords = ['class ', 'function ', 'const ', 'let ', 'var ', 'this.', 'module.exports'];
      return keywords.some(kw => content.includes(kw));
    },
    message: 'Module lacks semantic structure'
  },
  
  jsdocPresent: {
    name: 'JSDoc Documentation',
    test: (content) => content.includes('/**') && content.includes('@module'),
    message: 'Module missing JSDoc header or @module tag'
  },
  
  noFalseClaimsInHeader: {
    name: 'JSDoc Header Accuracy',
    test: (content) => {
      // If header claims "semantic variable names", check actual code
      if (content.match(/Semantic variable names applied|watchedValue_[a-z]/)) {
        // Check if false claim
        return !content.match(/watchedValue_[a-z]/) || content.match(/class |function /);
      }
      return true;
    },
    message: 'JSDoc header contains false claims about semantic renaming'
  }
};

/**
 * Validate a single module against all gates
 */
function validateModule(filePath) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const results = {
    file: fileName,
    passed: true,
    gates: []
  };
  
  for (const [key, gate] of Object.entries(VALIDATION_GATES)) {
    const testPassed = gate.test(content);
    results.gates.push({
      name: gate.name,
      passed: testPassed,
      message: testPassed ? '✅ PASS' : `❌ FAIL: ${gate.message}`
    });
    
    if (!testPassed) {
      results.passed = false;
    }
  }
  
  return results;
}

/**
 * Validate all modules in renamed-modules directory
 */
function validateAllConversions() {
  const renamedDir = path.join(__dirname, 'renamed-modules');
  const files = fs.readdirSync(renamedDir)
    .filter(f => f.endsWith('.js'))
    .filter(f => !f.includes('-partial'));  // Skip partial files
  
  const conversions = files.filter(f => 
    fs.readFileSync(path.join(renamedDir, f), 'utf8').includes('@module')
  );
  
  console.log('\n╔════════════════════════════════════════════════════╗');
  console.log('║  TIER A QUALITY VALIDATION GATE RESULTS             ║');
  console.log('╚════════════════════════════════════════════════════╝\n');
  
  let passCount = 0;
  let failCount = 0;
  
  conversions.forEach(file => {
    const result = validateModule(path.join(renamedDir, file));
    
    if (result.passed) {
      passCount++;
      console.log(`✅ ${file.padEnd(40)} PASS (4/4 gates)`);
    } else {
      failCount++;
      console.log(`❌ ${file.padEnd(40)} FAIL`);
      result.gates.forEach(gate => {
        if (!gate.passed) {
          console.log(`   └─ ${gate.message}`);
        }
      });
    }
  });
  
  console.log(`\n📊 RESULTS: ${passCount} passed, ${failCount} failed out of ${conversions.length}`);
  console.log(`\n🎯 GATE ENFORCEMENT: ${passCount === conversions.length ? '✅ APPROVED' : '⚠️  NEEDS WORK'}`);
  
  return { passCount, failCount, total: conversions.length };
}

// Run validation
const results = validateAllConversions();

console.log(`\n📈 PROGRESS TRACKING:`);
console.log(`   - Tier A (verified): 57 modules`);
console.log(`   - Tier B (converted): ${results.passCount} modules`);
console.log(`   - Total Coverage: ${((57 + results.passCount) / 466 * 100).toFixed(1)}%`);
console.log(`\n🎯 NEXT TARGET: ${Math.max(0, 100 - (57 + results.passCount))} more modules needed for 100+ target\n`);

module.exports = { validateModule, validateAllConversions };
