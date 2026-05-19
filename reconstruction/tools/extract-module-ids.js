const fs = require('fs');

// This script extracts REAL module IDs from hook-logs-v2.json
// and populates module-behavior-map.json with observed_modules

const logsPath = 'reconstruction/phase-01-runtime-analysis/hook-logs-v2.json';
const mapPath = 'reconstruction/phase-01-runtime-analysis/module-behavior-map.json';

if (!fs.existsSync(logsPath)) {
    console.error('ERROR: hook-logs-v2.json not found at', logsPath);
    console.error('You must run the test page and export the logs first.');
    process.exit(1);
}

const logs = JSON.parse(fs.readFileSync(logsPath, 'utf8'));

if (!logs.moduleExecutions || logs.moduleExecutions.length === 0) {
    console.error('ERROR: No moduleExecutions found in logs');
    console.error('The Function.prototype.call hook did not capture any module calls.');
    console.error('Check that hook-injection-simple.js is loaded BEFORE charting_library.standalone.js');
    process.exit(1);
}

console.log(`Total module executions captured: ${logs.moduleExecutions.length}`);

// Group module IDs by feature
const featureModules = {};

for (const exec of logs.moduleExecutions) {
    const feature = exec.feature || 'unknown';
    const id = exec.moduleId;
    
    if (id === 'unknown' || id === undefined || id === null) {
        continue;
    }
    
    if (!featureModules[feature]) {
        featureModules[feature] = new Set();
    }
    featureModules[feature].add(id);
}

// Convert to the exact format required
const output = {
    metadata: {
        version: "2.0",
        phase: "01-runtime-analysis",
        task: "1.4-module-id-to-behavior-mapping",
        generated: new Date().toISOString(),
        note: "ACTUAL module IDs captured from Function.prototype.call hook during runtime execution",
        source: "Runtime hook logs - NOT estimated"
    },
    features: {}
};

let totalModules = 0;

for (const [feature, ids] of Object.entries(featureModules)) {
    const idArray = Array.from(ids).sort((a, b) => a - b);
    totalModules += idArray.length;
    
    output.features[feature] = {
        description: feature,
        observed_modules: idArray,
        module_count: idArray.length,
        status: "observed"
    };
}

output.summary = {
    features_mapped: Object.keys(featureModules).length,
    total_unique_modules: totalModules
};

// Write the updated map
fs.writeFileSync(mapPath, JSON.stringify(output, null, 2));

console.log('\n=== EXTRACTION COMPLETE ===');
console.log(`Features captured: ${Object.keys(featureModules).length}`);
console.log(`Total unique modules: ${totalModules}`);
console.log(`\nModules per feature:`);

for (const [feature, ids] of Object.entries(featureModules).sort()) {
    const idArray = Array.from(ids).sort((a, b) => a - b);
    const preview = idArray.slice(0, 5).join(', ') + (idArray.length > 5 ? '...' : '');
    console.log(`  ${feature}: ${idArray.length} modules [${preview}]`);
}

console.log(`\n✓ module-behavior-map.json updated at: ${mapPath}`);
