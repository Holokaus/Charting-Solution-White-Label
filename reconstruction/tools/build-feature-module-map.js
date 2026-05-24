const fs = require('fs');
const path = require('path');

const modulesDir = path.resolve(__dirname, '../phase-00-unbundling/modules');
const phase2Dir = path.resolve(__dirname, '../phase-02-api-surface');
const phase3Graph = path.resolve(__dirname, '../phase-03-module-map/dependency-graph.json');
const phase1Captured = path.resolve(__dirname, '../phase-01-runtime-analysis/captured-module-loads.json');
const manifestPath = path.resolve(__dirname, '../phase-00-unbundling/manifest.json');
const outputPath = path.resolve(__dirname, '../phase-04-public-api-reconstruction/feature-module-map.json');
const phase4Dir = path.dirname(outputPath);

if (!fs.existsSync(phase4Dir)) {
    fs.mkdirSync(phase4Dir, { recursive: true });
}

// ── Parse Phase 2 method names from widget-methods-events.md ──
const methodsMd = fs.readFileSync(path.join(phase2Dir, 'widget-methods-events.md'), 'utf8');
const methodPattern = /^###\s+(\w+)\(/gm;
const methods = new Set();
let m;
while ((m = methodPattern.exec(methodsMd)) !== null) {
    methods.add(m[1]);
}
console.log(`Parsed ${methods.size} API methods from widget-methods-events.md`);

// ── Load dependency graph ──
const depGraph = JSON.parse(fs.readFileSync(phase3Graph, 'utf8'));
const deps = depGraph.modules || {};

// ── Load captured module loads (runtime) ──
let capturedModules = new Set();
try {
    const cap = JSON.parse(fs.readFileSync(phase1Captured, 'utf8'));
    if (cap.modulePhases) {
        capturedModules = new Set(Object.keys(cap.modulePhases).map(Number));
    } else if (cap.capturedChunks) {
        for (const [cid, info] of Object.entries(cap.capturedChunks)) {
            if (info.moduleIds) info.moduleIds.forEach(m => capturedModules.add(m));
        }
    }
    console.log(`Runtime-captured modules: ${capturedModules.size}`);
} catch (e) {
    console.warn('No runtime capture data found, using only static analysis');
}

// ── Load manifest for chunk-to-module mapping ──
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const chunkModules = {};
for (const [cid, info] of Object.entries(manifest.chunks || {})) {
    const cidNum = parseInt(cid);
    chunkModules[cidNum] = { file: info.file, moduleIds: info.moduleIds || [] };
}

// ── Search modules for method implementations ──
const moduleIds = fs.readdirSync(modulesDir)
    .filter(f => f.endsWith('.js'))
    .map(f => parseInt(path.basename(f, '.js')));

console.log(`Searching ${moduleIds.length} module files for method references...`);

const methodToModules = {};
let modulesSearched = 0;

for (const mid of moduleIds) {
    const fp = path.join(modulesDir, mid + '.js');
    try {
        const src = fs.readFileSync(fp, 'utf8');
        if (src.length > 10000) continue; // Skip very large utility modules
        for (const methodName of methods) {
            // Search for method name as a string literal or property name
            // In minified code, method names appear as string literals: ".methodName" or "'methodName'"
            // or during object assignment
            const safeName = methodName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const pattern = new RegExp(`["'\`]${safeName}["'\`]|\\b${safeName}\\s*[=(]|[.]${safeName}\\s*[=(]`);
            if (pattern.test(src)) {
                if (!methodToModules[methodName]) methodToModules[methodName] = [];
                if (!methodToModules[methodName].includes(mid)) {
                    methodToModules[methodName].push(mid);
                }
            }
        }
        modulesSearched++;
    } catch (e) {
        // skip
    }
    if (modulesSearched % 1000 === 0) {
        console.log(`  Searched ${modulesSearched}/${moduleIds.length} modules...`);
    }
}

console.log(`\nFound ${Object.keys(methodToModules).length} methods with module references`);

// ── Build feature-module map ──
const featureMap = {};

for (const [methodName, modIds] of Object.entries(methodToModules)) {
    // Find which chunks contain these modules
    const containingChunks = {};
    let runtimeObserved = false;
    for (const mid of modIds) {
        if (capturedModules.has(mid)) runtimeObserved = true;
        for (const [cid, info] of Object.entries(chunkModules)) {
            if (info.moduleIds.includes(mid)) {
                containingChunks[cid] = info.file;
            }
        }
    }

    // Get transitive dependencies from these modules
    const transitiveDeps = new Set(modIds);
    const queue = [...modIds];
    const visited = new Set();
    while (queue.length > 0) {
        const mid = queue.shift();
        if (visited.has(mid)) continue;
        visited.add(mid);
        const moduleData = deps[mid];
        if (moduleData && moduleData.dependencies) {
            for (const dep of moduleData.dependencies) {
                if (!visited.has(dep) && !transitiveDeps.has(dep)) {
                    transitiveDeps.add(dep);
                    queue.push(dep);
                }
            }
        }
    }

    featureMap[methodName] = {
        directModules: modIds.sort((a, b) => a - b),
        transitiveModuleCount: transitiveDeps.size,
        containingChunks: Object.keys(containingChunks).map(Number).sort((a, b) => a - b),
        chunkFiles: Object.fromEntries(Object.entries(containingChunks).map(([k, v]) => [k, v])),
        runtimeObserved: runtimeObserved,
    };
}

// ── Write output ──
const output = {
    metadata: {
        generated: new Date().toISOString(),
        methodsFound: Object.keys(featureMap).length,
        methodsTotal: methods.size,
        modulesSearched: modulesSearched,
        methodToModuleCounts: Object.fromEntries(
            Object.entries(featureMap).map(([k, v]) => [k, v.directModules.length])
        ),
    },
    features: featureMap,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`\nWritten: ${outputPath}`);
console.log(`Methods mapped: ${Object.keys(featureMap).length}/${methods.size}`);
console.log(`Top methods by module count:`);
const sorted = Object.entries(featureMap).sort((a, b) => b[1].directModules.length - a[1].directModules.length);
for (const [name, info] of sorted.slice(0, 15)) {
    console.log(`  ${name}: ${info.directModules.length} modules, ${info.transitiveModuleCount} transitive, ${info.containingChunks.length} chunks`);
}
console.log('\nDone.');
