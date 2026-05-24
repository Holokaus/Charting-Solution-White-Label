const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const modulesDir = path.resolve(__dirname, '../phase-00-unbundling/modules');
const manifestPath = path.resolve(__dirname, '../phase-00-unbundling/manifest.json');
const phase3Dir = path.resolve(__dirname, '../phase-03-module-map');

if (!fs.existsSync(phase3Dir)) {
    fs.mkdirSync(phase3Dir, { recursive: true });
}

let manifest;
try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
} catch (e) {
    console.error('Could not read manifest.json. Run Phase 0 unbundling first.');
    process.exit(1);
}

const chunkModules = new Map();
for (const [cid, chunkInfo] of Object.entries(manifest.chunks || {})) {
    for (const mid of (chunkInfo.moduleIds || [])) {
        if (!chunkModules.has(mid)) chunkModules.set(mid, []);
        chunkModules.get(mid).push(parseInt(cid));
    }
}

// ── Extract dependencies from a single module ──

function extractDeps(moduleId, source) {
    const wrapped = 'var __mod__ = ' + source;
    let ast;
    try {
        ast = parser.parse(wrapped, { sourceType: 'script', errorRecovery: true });
    } catch (e) {
        console.warn(`  Parse error for module ${moduleId}: ${e.message.substring(0, 80)}`);
        return [];
    }

    let requireParam = null;

    // Identify the require param by convention:
    // Webpack calls module factories with (module, exports, __webpack_require__).
    // In (e,t,i), the 3rd param (index 2) is always __webpack_require__.
    traverse(ast, {
        FunctionExpression(p) {
            if (requireParam) return;
            const params = p.node.params.map(n => n.type === 'Identifier' ? n.name : null).filter(Boolean);
            if (params.length >= 3) requireParam = params[2];
        },
        ArrowFunctionExpression(p) {
            if (requireParam) return;
            const params = p.node.params.map(n => n.type === 'Identifier' ? n.name : null).filter(Boolean);
            if (params.length >= 3) requireParam = params[2];
        }
    });

    if (!requireParam) return [];

    // Extract all require calls, skipping nested function scopes
    // that shadow the requireParam variable name.
    // The key insight: the immediate containing function of a require call
    // at the module's top level IS the module factory itself.
    // If we're inside a nested function (which has a function parent),
    // AND that nested function has requireParam as a parameter, then
    // requireParam is shadowed — we must skip.
    const deps = new Set();
    traverse(ast, {
        CallExpression(p) {
            const callee = p.node.callee;
            if (callee.type !== 'Identifier' || callee.name !== requireParam) return;
            if (p.node.arguments.length !== 1 || p.node.arguments[0].type !== 'NumericLiteral') return;

            // Find the immediate enclosing function
            const container = p.findParent(parent => parent.isFunction());
            if (container) {
                // Check if there's an enclosing function above container
                const grandparent = container.findParent(parent => parent.isFunction());
                if (grandparent) {
                    // Container is nested inside another function.
                    // If container has requireParam as a parameter, it shadows it.
                    const containerParams = container.node.params
                        .map(n => n.type === 'Identifier' ? n.name : null)
                        .filter(Boolean);
                    if (containerParams.includes(requireParam)) {
                        return; // Shadowed by nested function parameter
                    }
                }
            }

            const depId = p.node.arguments[0].value;
            if (depId !== moduleId) {
                deps.add(depId);
            }
        }
    });

    return Array.from(deps);
}

// ── Process all modules ──

console.log('Phase 3: AST-based Dependency Graph Extraction');
console.log('===============================================\n');

const moduleFiles = fs.readdirSync(modulesDir).filter(f => f.endsWith('.js'));
console.log(`Reading ${moduleFiles.length} module files...`);

const dependencyGraph = {};
let totalEdges = 0;
let modulesWithDeps = 0;
let parseErrors = 0;

for (const file of moduleFiles) {
    const moduleId = parseInt(path.basename(file, '.js'));
    const filePath = path.join(modulesDir, file);

    try {
        const source = fs.readFileSync(filePath, 'utf8');
        const deps = extractDeps(moduleId, source);

        const chunkRef = chunkModules.has(moduleId)
            ? `chunk:${chunkModules.get(moduleId).join(',')}`
            : 'unknown';

        dependencyGraph[moduleId] = {
            source: chunkRef,
            dependencies: deps,
            dependencyCount: deps.length
        };

        totalEdges += deps.length;
        if (deps.length > 0) modulesWithDeps++;

    } catch (e) {
        parseErrors++;
        console.warn(`  Error processing module ${moduleId}: ${e.message.substring(0, 100)}`);
        dependencyGraph[moduleId] = {
            source: 'unknown',
            dependencies: [],
            dependencyCount: 0
        };
    }
}

// ── Statistics ──

const totalModules = Object.keys(dependencyGraph).length;
const zeroDepModules = Object.values(dependencyGraph).filter(v => v.dependencyCount === 0).length;
const zeroDepRate = (zeroDepModules / totalModules * 100).toFixed(1);

console.log(`\nResults:`);
console.log(`  Total modules in graph: ${totalModules}`);
console.log(`  Total dependency edges: ${totalEdges}`);
console.log(`  Modules with dependencies: ${modulesWithDeps}`);
console.log(`  Zero-dependency modules: ${zeroDepModules} (${zeroDepRate}%)`);
console.log(`  Errors: ${parseErrors}`);

// Validate: all dependency targets exist
console.log(`\nValidating dependency targets...`);
let missingTargets = 0;
for (const [mid, data] of Object.entries(dependencyGraph)) {
    for (const dep of data.dependencies) {
        if (!dependencyGraph[dep]) {
            missingTargets++;
            if (missingTargets <= 5) {
                console.log(`  Missing target: module ${dep} (required by ${mid})`);
            }
        }
    }
}
if (missingTargets === 0) {
    console.log(`  All dependency targets exist in module manifest ✓`);
} else {
    console.log(`  ${missingTargets} dependency targets not in manifest ✗`);
}

// Write output
const outputGraph = {
    metadata: {
        totalModules: totalModules,
        totalEdges: totalEdges,
        zeroDependencyRate: parseFloat(zeroDepRate),
        extractionMethod: 'ast-based',
        parserVersion: '@babel/parser',
        extractionTimestamp: new Date().toISOString()
    },
    modules: {}
};

const sortedIds = Object.keys(dependencyGraph).map(Number).sort((a, b) => a - b);
for (const id of sortedIds) {
    outputGraph.modules[id] = dependencyGraph[id];
}

const outputPath = path.join(phase3Dir, 'dependency-graph.json');
fs.writeFileSync(outputPath, JSON.stringify(outputGraph, null, 2));
console.log(`\nWritten: ${outputPath}`);

for (const old of ['verified-dependency-graph.json', 'static-dependency-graph.json']) {
    const p = path.join(phase3Dir, old);
    if (fs.existsSync(p)) { fs.unlinkSync(p); console.log(`Deleted: ${p}`); }
}

// Spot-check
console.log(`\nSpot-check (first 10 modules with dependencies):`);
let checkCount = 0;
for (const id of sortedIds) {
    if (checkCount >= 10) break;
    const data = dependencyGraph[id];
    if (data.dependencyCount > 0) {
        console.log(`  Module ${id}: ${data.dependencies.slice(0, 15).join(', ')}${data.dependencies.length > 15 ? '...' : ''} (${data.source})`);
        checkCount++;
    }
}

// Also verify module 45 specifically (known to have many deps)
const m45 = dependencyGraph[45];
if (m45) {
    console.log(`\nModule 45 verification:`);
    console.log(`  Reported deps: ${m45.dependencies.join(', ')}`);
    console.log(`  Dep count: ${m45.dependencyCount}`);
}

console.log(`\nDone.`);
