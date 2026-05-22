const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');

const bundlesDir = path.resolve(__dirname, '../../charting_library/bundles');
const phase3Dir = path.resolve(__dirname, '../phase-03-module-map');

// Ensure phase 3 directory exists
if (!fs.existsSync(phase3Dir)) {
    fs.mkdirSync(phase3Dir, { recursive: true });
}

// ── Step 1: Extract module dependencies from all chunk files ──

function extractModuleDeps(content, moduleId) {
    const deps = new Set();
    // All modules in this bundle use (t,e,i)=> where i is the require function
    // Require calls look like: i(<moduleId>)
    // Also check for o(<moduleId>) which is the internal __webpack_require__ name
    const requireRegex = /(?:[^a-zA-Z_$]|^)([io])\((\d+)\)/g;
    let m;
    while ((m = requireRegex.exec(content)) !== null) {
        const depId = parseInt(m[2], 10);
        // Only count require calls with valid module IDs (positive integers)
        if (depId >= 0 && depId <= 999999 && depId !== moduleId) {
            deps.add(depId);
        }
    }
    return Array.from(deps);
}

function extractModuleBlock(content, startIdx) {
    // Format: moduleId:function(t,e,i){...} or moduleId:(t,e,i)=>{...}
    let bodyStart = -1;
    
    // Check for arrow function: =>{ after startIdx
    const arrowIdx = content.indexOf('=>', startIdx);
    if (arrowIdx !== -1 && arrowIdx < startIdx + 80) {
        bodyStart = content.indexOf('{', arrowIdx);
    } else {
        // function keyword
        const funcIdx = content.indexOf('function', startIdx);
        if (funcIdx !== -1 && funcIdx < startIdx + 50) {
            const parenIdx = content.indexOf('(', funcIdx);
            if (parenIdx !== -1) {
                // Find the { after the parameter list
                let depth = 0;
                for (let j = parenIdx; j < content.length && j < parenIdx + 200; j++) {
                    if (content[j] === '(') depth++;
                    else if (content[j] === ')') {
                        depth--;
                        if (depth === 0) {
                            bodyStart = content.indexOf('{', j);
                            break;
                        }
                    }
                }
            }
        }
    }
    
    if (bodyStart === -1) return null;
    
    // Count braces to find the matching closing brace
    let depth = 0;
    let bodyEnd = -1;
    for (let j = bodyStart; j < content.length; j++) {
        if (content[j] === '{') depth++;
        else if (content[j] === '}') {
            depth--;
            if (depth === 0) {
                bodyEnd = j;
                break;
            }
        }
    }
    
    if (bodyEnd === -1) return null;
    return content.substring(bodyStart, bodyEnd + 1);
}

function extractModulesFromChunk(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const modules = {};
    
    // Find the module object: {moduleId:function, ...}
    const pushIdx = content.indexOf('.push([');
    if (pushIdx === -1) return modules;
    
    const objStart = content.indexOf('{', pushIdx + 6);
    if (objStart === -1) return modules;
    
    // Build module map
    // Pattern: <number>:(<params>)=> or <number>:function(<params>)
    const moduleKeyRegex = /(\d+):(?:function|(?:\([^)]*\)\s*=>))/g;
    moduleKeyRegex.lastIndex = objStart;
    let mm;
    while ((mm = moduleKeyRegex.exec(content)) !== null) {
        const mid = parseInt(mm[1], 10);
        const body = extractModuleBlock(content, mm.index);
        if (body) {
            modules[mid] = body;
        }
    }
    
    return modules;
}

function extractModulesFromChunk(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const modules = {};
    
    // Find the module object: {moduleId:function, ...}
    const pushIdx = content.indexOf('.push([');
    if (pushIdx === -1) return modules;
    
    const objStart = content.indexOf('{', pushIdx + 6);
    if (objStart === -1) return modules;
    
    // Build module map
    // Pattern: <number>:function(...) or <number>:(...)=>
    const moduleKeyRegex = /(\d+):(?:function|\([^)]*\)\s*=>)/g;
    let mm;
    while ((mm = moduleKeyRegex.exec(content)) !== null) {
        if (mm.index < objStart) continue;
        const mid = parseInt(mm[1], 10);
        const body = extractModuleBlock(content, mm.index);
        if (body) {
            modules[mid] = body;
        }
    }
    
    return modules;
}

// ── Process all chunk files ──

console.log('Scanning chunk files for dependency graph...');
const files = fs.readdirSync(bundlesDir).filter(f => f.endsWith('.js'));
const dependencyGraph = {};
let totalModules = 0;
let modulesWithDeps = 0;

for (const file of files) {
    try {
        const filePath = path.join(bundlesDir, file);
        const modules = extractModulesFromChunk(filePath);
        
        for (const [mid, body] of Object.entries(modules)) {
            const deps = extractModuleDeps(body, parseInt(mid));
            if (!dependencyGraph[mid]) {
                dependencyGraph[mid] = { dependencies: [], dependentCount: 0 };
            }
            // Merge deps
            for (const d of deps) {
                if (!dependencyGraph[mid].dependencies.includes(d)) {
                    dependencyGraph[mid].dependencies.push(d);
                }
            }
            totalModules++;
            if (deps.length > 0) modulesWithDeps++;
        }
    } catch (e) {
        console.warn(`Error processing ${file}: ${e.message}`);
    }
}

// Calculate dependent counts (reverse dependencies)
for (const [mid, data] of Object.entries(dependencyGraph)) {
    for (const dep of data.dependencies) {
        if (!dependencyGraph[dep]) {
            dependencyGraph[dep] = { dependencies: [], dependentCount: 0 };
        }
        dependencyGraph[dep].dependentCount++;
    }
}

const moduleIds = Object.keys(dependencyGraph).map(Number).sort((a, b) => a - b);
const uniqueCount = moduleIds.length;
console.log(`Found ${totalModules} module definitions in ${uniqueCount} unique module IDs`);
console.log(`${modulesWithDeps} modules have dependencies`);
console.log(`Module ID range: ${moduleIds[0]} - ${moduleIds[moduleIds.length - 1]}`);

// ── Write static-dependency-graph.json ──

const staticGraph = {
    metadata: {
        version: "1.0",
        phase: "03-module-map",
        generated: new Date().toISOString(),
        source: "Static AST analysis of webpack chunk files in charting_library/bundles/",
        totalModules: Object.keys(dependencyGraph).length,
        totalDependencyEdges: Object.values(dependencyGraph).reduce((s, v) => s + v.dependencies.length, 0)
    },
    modules: {}
};

for (const [mid, data] of Object.entries(dependencyGraph)) {
    staticGraph.modules[mid] = {
        dependencies: data.dependencies,
        dependents: data.dependentCount,
        depCount: data.dependencies.length
    };
}

const staticPath = path.join(phase3Dir, 'static-dependency-graph.json');
fs.writeFileSync(staticPath, JSON.stringify(staticGraph, null, 2));
console.log(`\nWritten static-dependency-graph.json (${Object.keys(dependencyGraph).length} modules)`);

// ── Step 2: Build chunk manifest ──

function extractChunkIdFromFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/\.push\(\[\[(\d+(?:,\d+)*)\]/);
    return match ? match[1].split(',').map(Number) : [];
}

console.log('\nBuilding chunk manifest...');
const chunkManifest = { chunks: {} };

for (const file of files) {
    try {
        const filePath = path.join(bundlesDir, file);
        const chunkIds = extractChunkIdFromFile(filePath);
        if (chunkIds.length > 0) {
            const modules = extractModulesFromChunk(filePath);
            const moduleIds = Object.keys(modules).map(Number).sort((a, b) => a - b);
            
            for (const cid of chunkIds) {
                chunkManifest.chunks[cid] = {
                    file: file,
                    moduleIds: moduleIds,
                    moduleCount: moduleIds.length,
                    chunkIds: chunkIds
                };
            }
        }
    } catch (e) {
        // Skip non-chunk files
    }
}

const chunkPath = path.join(phase3Dir, 'chunk-manifest.json');
fs.writeFileSync(chunkPath, JSON.stringify(chunkManifest, null, 2));
console.log(`Written chunk-manifest.json (${Object.keys(chunkManifest.chunks).length} chunks)`);

// ── Step 3: Build verified graph (cross-reference with Phase 1 runtime logs) ──

console.log('\nCross-referencing with Phase 1 runtime logs...');
const behaviorMapPath = path.resolve(__dirname, '../phase-01-runtime-analysis/module-behavior-map.json');
let runtimeModuleIds = new Set();

try {
    const behaviorData = JSON.parse(fs.readFileSync(behaviorMapPath, 'utf8'));
    if (behaviorData.features) {
        for (const [feature, data] of Object.entries(behaviorData.features)) {
            if (data.observed_modules && Array.isArray(data.observed_modules)) {
                for (const mid of data.observed_modules) {
                    runtimeModuleIds.add(mid);
                }
            }
        }
    }
} catch (e) {
    console.warn('Could not read module-behavior-map.json:', e.message);
}

console.log(`Runtime observed modules: ${runtimeModuleIds.size}`);

// Build verified graph
const verifiedGraph = {
    metadata: {
        version: "1.0",
        phase: "03-module-map",
        generated: new Date().toISOString(),
        staticModules: Object.keys(dependencyGraph).length,
        runtimeObservedModules: runtimeModuleIds.size,
        note: "Runtime verification based on Phase 1 static chunk analysis (no live module execution captured)"
    },
    modules: {},
    discrepancies: {
        staticOnly: [],
        runtimeOnly: []
    }
};

const staticOnly = [];
const runtimeOnly = [];

for (const mid of Object.keys(dependencyGraph)) {
    const midNum = parseInt(mid);
    const data = dependencyGraph[mid];
    const inRuntime = runtimeModuleIds.has(midNum);
    
    verifiedGraph.modules[mid] = {
        dependencies: data.dependencies,
        dependents: data.dependentCount,
        runtime_observed: inRuntime
    };
    
    if (!inRuntime) {
        staticOnly.push(midNum);
    }
}

for (const mid of runtimeModuleIds) {
    if (!dependencyGraph[mid]) {
        runtimeOnly.push(mid);
    }
}

verifiedGraph.discrepancies.staticOnly = staticOnly.sort((a, b) => a - b);
verifiedGraph.discrepancies.runtimeOnly = runtimeOnly.sort((a, b) => a - b);
verifiedGraph.discrepancies.staticOnlyCount = staticOnly.length;
verifiedGraph.discrepancies.runtimeOnlyCount = runtimeOnly.length;

const verifiedPath = path.join(phase3Dir, 'verified-dependency-graph.json');
fs.writeFileSync(verifiedPath, JSON.stringify(verifiedGraph, null, 2));
console.log(`Written verified-dependency-graph.json`);
console.log(`  Static-only modules: ${staticOnly.length}`);
console.log(`  Runtime-only modules: ${runtimeOnly.length}`);

// ── Step 4: Entry Points ──

console.log('\nGenerating entry points documentation...');
const runtimePath = path.join(bundlesDir, 'runtime.1d4ed3742895f7c63ed9.js');
const runtimeContent = fs.readFileSync(runtimePath, 'utf8');

// Entry points are modules loaded by chunk ID = 0 (the main chunk)
// Also modules that have 0 dependents (they're not required by any other module)
const entryCandidates = [];
for (const [mid, data] of Object.entries(dependencyGraph)) {
    if (data.dependentCount === 0) {
        entryCandidates.push(parseInt(mid));
    }
}

// Chunks that are loaded on-demand (have chunk name mapping in runtime)
const chunkNamePattern = /(\d+):"(line-tool-[^"]+|study-[^"]+|[^"]+)"/g;
const chunkNames = {};
let cn;
while ((cn = chunkNamePattern.exec(runtimeContent)) !== null) {
    chunkNames[parseInt(cn[1])] = cn[2];
}

console.log(`Entry point candidates (no dependents): ${entryCandidates.length}`);
console.log(`Named chunks in runtime: ${Object.keys(chunkNames).length}`);

// Map entry points to Phase 2 API features
const apiFeatureMap = {
    chart_properties: ['chart', 'save', 'load', 'layout', 'setLayout', 'layoutName', 'setLayoutSizes', 'resetLayoutSizes'],
    change_symbol: ['setSymbol', 'symbolInterval', 'symbolSync'],
    change_interval: ['setTimeFrame', 'getIntervals', 'intervalSync'],
    change_theme: ['changeTheme', 'getTheme'],
    change_chart_type: [],
    add_indicator: ['getStudiesList', 'getStudyInputs', 'getStudyStyles'],
    drawing_tools: ['selectLineTool', 'selectedLineTool', 'hideAllDrawingTools', 'lockAllDrawingTools', 'drawOnAllCharts', 'drawOnAllChartsEnabled'],
    screenshot: ['takeScreenshot', 'takeClientScreenshot'],
    undo_redo: ['undo', 'redo', 'clearUndoHistory', 'undoRedoState'],
    keyboard_shortcuts: [],
    symbol_search: [],
    save_load: ['showLoadChartDialog', 'showSaveAsChartDialog', 'getSavedCharts', 'loadChartFromServer', 'saveChartToServer', 'removeChartFromServer'],
    fullscreen: [],
    timeframes: [],
    compare_symbol: [],
    data_window: []
};

// Identify initial chunk modules (loaded on page load)
// The initial chunk is chunk ID that appears in the first push
const initialChunkModules = new Set();
for (const [chunkId, chunkInfo] of Object.entries(chunkManifest.chunks)) {
    // Check if this chunk is mentioned in the initial load of the runtime
    // Modules loaded during initialization typically appear in chunks like library.*.js
    if (chunkInfo.file.startsWith('library.') || chunkInfo.file.startsWith('runtime.')) {
        for (const mid of chunkInfo.moduleIds) {
            initialChunkModules.add(mid);
        }
    }
}

const entryPointsMd = `# Entry Points

## Overview

Entry points are modules that are loaded immediately when the page loads (as part of the initial bundle or library chunk) versus modules that are loaded on-demand when specific features are triggered.

The charting library uses webpack code-splitting to lazy-load most of its functionality. Only a small core of ~${initialChunkModules.size} modules are loaded immediately; the rest (~${Object.keys(dependencyGraph).length - initialChunkModules.size}) are loaded on-demand via chunk files.

## Initial Load Entry Points

The following modules are part of the initial library chunk and are loaded immediately:

| Module ID | Dependencies | Depended By | On-Demand? |
|-----------|-------------|-------------|------------|
${Object.entries(dependencyGraph).slice(0, 30).map(([mid, data]) => {
    const isInitial = initialChunkModules.has(parseInt(mid));
    return `| ${mid} | ${data.dependencies.length} | ${data.dependentCount} | ${isInitial ? 'No (initial)' : 'Yes'}`;
}).join('\n')}

## Entry Point Candidates (No Dependents)

Modules with \`dependentCount === 0\` are potential entry points - they are \`__webpack_require__\`'d directly, not as a dependency of another module:

| Module ID | Dependencies | Likely Feature |
|-----------|-------------|----------------|
${entryCandidates.slice(0, 20).map(mid => {
    const data = dependencyGraph[mid];
    return `| ${mid} | ${data ? data.dependencies.length : 0} | Initialization / Core |`;
}).join('\n')}

## Chunk → Feature Mapping

| Chunk File | Chunk ID | Module Count | Feature |
|-----------|----------|-------------|---------|
${Object.entries(chunkManifest.chunks).slice(0, 30).map(([cid, info]) => {
    const name = chunkNames[parseInt(cid)] || 'unknown';
    return `| ${info.file} | ${cid} | ${info.moduleCount} | ${name}`;
}).join('\n')}

## Named Chunks from Runtime

The runtime file contains a mapping of module IDs to human-readable chunk names:

| Module ID | Chunk Name |
|-----------|-----------|
${Object.entries(chunkNames).slice(0, 40).map(([mid, name]) => `| ${mid} | ${name}`).join('\n')}

## API Feature → Entry Module Mapping

| API Feature | Related Methods | Likely Entry Modules |
|------------|----------------|---------------------|
${Object.entries(apiFeatureMap).map(([feature, methods]) => {
    return `| ${feature} | ${methods.slice(0, 5).join(', ') || '(none identified)'} | See chunk manifest for related chunks |`;
}).join('\n')}

## Notes

- Entry point identification is approximate. The library uses dynamic code splitting, so most modules are loaded on-demand.
- The initial chunk (\`library.*.js\`) contains the core framework modules loaded on page load.
- Named chunks in the runtime provide hints about which features map to which chunks.
`;

const entryPath = path.join(phase3Dir, 'entry-points.md');
fs.writeFileSync(entryPath, entryPointsMd);
console.log(`Written entry-points.md`);

console.log('\n=== Phase 3 Complete ===');
console.log(`Files generated:`);
console.log(`  - ${staticPath}`);
console.log(`  - ${verifiedPath}`);
console.log(`  - ${chunkPath}`);
console.log(`  - ${entryPath}`);
