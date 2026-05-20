const fs = require('fs');
const path = require('path');

// Read the hook logs
const logsPath = path.join(__dirname, '../phase-01-runtime-analysis/hook-logs-v2.json');

if (!fs.existsSync(logsPath)) {
    console.error(`ERROR: ${logsPath} not found. Run the feature-trigger-test.html first to capture logs.`);
    process.exit(1);
}

let logs;
try {
    logs = JSON.parse(fs.readFileSync(logsPath, 'utf8'));
} catch (e) {
    console.error(`ERROR: Failed to parse hook-logs-v2.json: ${e.message}`);
    process.exit(1);
}

// Extract module IDs per feature
const featureModules = {};
const executions = logs.moduleExecutions || [];

if (!executions || executions.length === 0) {
    console.warn('WARNING: No module executions found in hook-logs-v2.json');
}

for (const exec of executions) {
    const feature = exec.feature || 'unknown';
    const id = exec.moduleId;
    
    // Skip invalid IDs
    if (id === 'unknown' || id === undefined || id === null) continue;
    if (typeof id !== 'number') continue;
    if (!Number.isInteger(id)) continue;
    
    if (!featureModules[feature]) {
        featureModules[feature] = new Set();
    }
    featureModules[feature].add(id);
}

// Build output document
const output = {
    metadata: {
        version: "2.0",
        phase: "01-runtime-analysis",
        generated: new Date().toISOString(),
        note: "ACTUAL module IDs captured from Function.prototype.call hook (sampling-based)",
        source: "Runtime execution logs from hook-logs-v2.json",
        total_executions_logged: executions.length,
        total_unique_modules: new Set([...Object.values(featureModules)].map(s => [...s]).flat()).size,
        extraction_timestamp: Date.now()
    },
    features: {}
};

// Sort features alphabetically
const sortedFeatures = Object.keys(featureModules).sort();

for (const feature of sortedFeatures) {
    const ids = featureModules[feature];
    const idArray = Array.from(ids).sort((a, b) => a - b);
    output.features[feature] = {
        description: feature,
        observed_modules: idArray,
        module_count: idArray.length,
        status: "observed",
        execution_count: executions.filter(e => e.feature === feature).length
    };
}

// Write output
const outputPath = path.join(__dirname, '../phase-01-runtime-analysis/module-behavior-map.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log('\n✓ Module behavior map extracted successfully!');
console.log(`✓ Output: ${outputPath}`);
console.log(`\n📊 Summary:`);
console.log(`   Total features: ${sortedFeatures.length}`);
console.log(`   Total unique modules: ${output.metadata.total_unique_modules}`);
console.log(`   Total executions logged: ${executions.length}`);

// Print features with their modules
console.log('\n📋 Features:');
for (const [feature, data] of Object.entries(output.features)) {
    const ids = data.observed_modules;
    const sample = ids.length > 5 ? `[${ids.slice(0, 5).join(', ')}, ...]` : `[${ids.join(', ')}]`;
    console.log(`   ${feature}:`);
    console.log(`      Modules: ${sample}`);
    console.log(`      Module count: ${data.module_count}`);
    console.log(`      Execution count: ${data.execution_count}`);
}
