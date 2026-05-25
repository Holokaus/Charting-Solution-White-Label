const fs = require('fs');

const staticGraph = JSON.parse(fs.readFileSync('reconstruction/phase-03-module-map/static-dependency-graph.json', 'utf8'));
const chunkManifest = JSON.parse(fs.readFileSync('reconstruction/phase-03-module-map/chunk-manifest.json', 'utf8'));

// Collect module IDs that were actually observed (from chunk loading only)
const observed = new Set();
for (const chunk of Object.values(chunkManifest.chunks || {})) {
    for (const id of (chunk.modules || [])) {
        observed.add(String(id));
    }
}

// Also add Phase 1 module IDs if they exist
try {
    const phase1 = JSON.parse(fs.readFileSync('reconstruction/phase-01-runtime-analysis/module-behavior-map.json', 'utf8'));
    for (const feature of Object.values(phase1.features || {})) {
        for (const id of (feature.observed_modules || [])) {
            observed.add(String(id));
        }
    }
} catch(e) { /* Phase 1 data missing is OK */ }

const totalModules = Object.keys(staticGraph.modules || {}).length;
let unverifiedCount = 0;

const verified = {
    metadata: {
        version: "3.0-honest",
        generated: new Date().toISOString(),
        total_modules: totalModules,
        observed_modules: observed.size,
        note: "runtime_observed=true ONLY for modules found in chunk manifest or Phase 1 logs",
        discrepancies: {
            unverified_modules: 0,
            message: "These modules were not loaded in any captured chunk or feature test"
        }
    },
    modules: {}
};

for (const [modId, data] of Object.entries(staticGraph.modules || {})) {
    const isObserved = observed.has(modId);
    if (!isObserved) unverifiedCount++;
    
    verified.modules[modId] = {
        dependencies: data.dependencies || [],
        dependents: data.dependents || [],
        runtime_observed: isObserved,
        source: isObserved ? "chunk-manifest or phase-1" : "NOT OBSERVED"
    };
}

verified.metadata.discrepancies.unverified_modules = unverifiedCount;

fs.writeFileSync(
    'reconstruction/phase-03-module-map/verified-dependency-graph.json',
    JSON.stringify(verified, null, 2)
);

console.log(`Total modules: ${totalModules}`);
console.log(`Observed modules: ${observed.size}`);
console.log(`Unverified modules: ${unverifiedCount}`);
console.log(`Honest verification graph written.`);
