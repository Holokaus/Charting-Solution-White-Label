/**
 * SMOKE TESTS - Validates deployed modules in staging
 */

const fs = require('fs');
const path = require('path');

// Test configuration
const config = {
    stagingDir: path.join(__dirname, 'staging-deployment'),
    testsToRun: 5,  // Test 5 random modules
    timestamp: new Date().toISOString()
};

// Get random modules for smoke testing
function getRandomModules(directory, count) {
    const allFiles = fs.readdirSync(directory)
        .filter(f => f.endsWith('.js'));
    
    const shuffled = allFiles.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Run smoke test on a single module
function runSmokeTest(filePath) {
    const results = {
        file: path.basename(filePath),
        passed: true,
        tests: []
    };
    
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Test 1: File exists and is readable
        results.tests.push({
            name: 'File readable',
            passed: true
        });
        
        // Test 2: Valid JavaScript syntax (basic check)
        const hasFunctionOrClass = content.includes('function') || 
                                   content.includes('class') || 
                                   content.includes('const') ||
                                   content.includes('module.exports');
        results.tests.push({
            name: 'Valid JS structure',
            passed: hasFunctionOrClass
        });
        
        // Test 3: No mechanical prefixing
        const hasMechanicalPrefixing = content.match(/\b\w+_[a-z]\b/);
        results.tests.push({
            name: 'No mechanical prefixing',
            passed: !hasMechanicalPrefixing
        });
        
        // Test 4: JSDoc present
        const hasJSDoc = content.includes('/**') && content.includes('*/');
        results.tests.push({
            name: 'JSDoc documented',
            passed: hasJSDoc
        });
        
        // Test 5: Module exports present
        const hasExports = content.includes('module.exports') || 
                          content.includes('export');
        results.tests.push({
            name: 'Module exports',
            passed: hasExports
        });
        
        // Overall result
        results.passed = results.tests.every(t => t.passed);
        
    } catch (error) {
        results.passed = false;
        results.error = error.message;
    }
    
    return results;
}

// Execute smoke tests
function executeSmokePtests() {
    console.log('\n╔═════════════════════════════════════════════╗');
    console.log('║  SMOKE TESTS - Phase 2/3                    ║');
    console.log('╚═════════════════════════════════════════════╝\n');
    
    if (!fs.existsSync(config.stagingDir)) {
        console.log(`❌ Staging directory not found: ${config.stagingDir}`);
        return { passed: 0, failed: 5, total: 5 };
    }
    
    const testModules = getRandomModules(config.stagingDir, config.testsToRun);
    console.log(`🧪 Running smoke tests on ${config.testsToRun} random modules:\n`);
    
    let passedTests = 0;
    let failedTests = 0;
    const results = [];
    
    testModules.forEach((module, index) => {
        const filePath = path.join(config.stagingDir, module);
        const testResult = runSmokeTest(filePath);
        results.push(testResult);
        
        console.log(`${index + 1}. ${module.padEnd(45)}`);
        
        testResult.tests.forEach(test => {
            console.log(`   ${test.passed ? '✅' : '❌'} ${test.name}`);
        });
        
        if (testResult.passed) {
            passedTests++;
            console.log(`   📊 Result: ✅ PASS\n`);
        } else {
            failedTests++;
            console.log(`   📊 Result: ❌ FAIL\n`);
        }
    });
    
    return { passed: passedTests, failed: failedTests, total: config.testsToRun, results };
}

// Print smoke test summary
function printSmokeTestSummary(results) {
    console.log(`\n╔═════════════════════════════════════════════╗`);
    console.log(`║  SMOKE TEST RESULTS SUMMARY                 ║`);
    console.log(`╚═════════════════════════════════════════════╝\n`);
    
    console.log(`📊 Test Results:`);
    console.log(`   ✅ Passed: ${results.passed}/${results.total}`);
    console.log(`   ❌ Failed: ${results.failed}/${results.total}`);
    
    const passPercentage = ((results.passed / results.total) * 100).toFixed(1);
    console.log(`   📈 Pass Rate: ${passPercentage}%\n`);
    
    // Required: 80%+ pass rate
    const requiredPassRate = 80;
    const meetsGate = (results.passed / results.total) * 100 >= requiredPassRate;
    
    if (meetsGate) {
        console.log(`✅ SMOKE TESTS PASSED - Gate requirement met (${requiredPassRate}%+)`);
        console.log(`\n🎯 READY FOR PRODUCTION DEPLOYMENT\n`);
    } else {
        console.log(`❌ SMOKE TESTS FAILED - Below ${requiredPassRate}% requirement`);
        console.log(`\n🛑 HOLD - Do not proceed to production\n`);
    }
}

// Main execution
console.log('🚀 SMOKE TESTS INITIALIZED\n');

const testResults = executeSmokePtests();
printSmokeTestSummary(testResults);

module.exports = { runSmokeTest, executeSmokePtests };
