const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const bundlesDir = path.resolve(__dirname, '../../charting_library/bundles');
const phase3Dir = path.resolve(__dirname, '../phase-03-module-map');

if (!fs.existsSync(phase3Dir)) {
    fs.mkdirSync(phase3Dir, { recursive: true });
}

const moduleSources = {};

function extractModuleFactory(sourceCode, start, end, offset) {
    return sourceCode.substring(start, end);
}

function parseChunkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('.push([')) return;

    let ast;
    try {
        ast = parser.parse(content, {
            sourceType: 'script',
            errorRecovery: true
        });
    } catch (e) {
        return;
    }

    function walkNode(node, depth) {
        if (!node || depth > 50) return;

        if (node.type === 'CallExpression' &&
            node.callee.type === 'MemberExpression' &&
            node.callee.property.type === 'Identifier' &&
            node.callee.property.name === 'push' &&
            node.arguments.length === 1) {

            const arg = node.arguments[0];
            if (arg.type !== 'ArrayExpression' || arg.elements.length < 2) return;

            const moduleObject = arg.elements[1];
            if (!moduleObject || moduleObject.type !== 'ObjectExpression') return;

            for (const prop of moduleObject.properties) {
                if (prop.type === 'ObjectProperty' &&
                    prop.key.type === 'NumericLiteral' &&
                    (prop.value.type === 'FunctionExpression' ||
                     prop.value.type === 'ArrowFunctionExpression')) {

                    const mid = prop.key.value;
                    const start = prop.value.start;
                    const end = prop.value.end;
                    const source = content.substring(start, end);

                    if (!moduleSources[mid]) {
                        moduleSources[mid] = source;
                    }
                }
            }
        }

        for (const key of Object.keys(node)) {
            if (key === 'leadingComments' || key === 'trailingComments' || key === 'innerComments') continue;
            const child = node[key];
            if (Array.isArray(child)) {
                for (const c of child) {
                    if (c && typeof c.type === 'string') walkNode(c, depth + 1);
                }
            } else if (child && typeof child.type === 'string') {
                walkNode(child, depth + 1);
            }
        }
    }

    if (ast.program && ast.program.body) {
        for (const node of ast.program.body) {
            if (node.type === 'ExpressionStatement') {
                walkNode(node.expression, 0);
            }
        }
    }
}

function extractDependencies(moduleId, source) {
    const wrapped = 'var __mod__ = ' + source;
    let ast;
    try {
        ast = parser.parse(wrapped, { sourceType: 'script', errorRecovery: true });
    } catch (e) {
        console.warn(`  Parse error for module ${moduleId}: ${e.message.substring(0, 80)}`);
        return [];
    }

    let requireParam = null;

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

    const deps = new Set();
    traverse(ast, {
        CallExpression(p) {
            const callee = p.node.callee;
            if (callee.type !== 'Identifier' || callee.name !== requireParam) return;
            if (p.node.arguments.length !== 1 || p.node.arguments[0].type !== 'NumericLiteral') return;

            const container = p.findParent(parent => parent.isFunction());
            if (container) {
                const grandparent = container.findParent(parent => parent.isFunction());
                if (grandparent) {
                    const containerParams = container.node.params
                        .map(n => n.type === 'Identifier' ? n.name : null)
                        .filter(Boolean);
                    if (containerParams.includes(requireParam)) {
                        return;
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

console.log('Phase 3: AST-based Dependency Graph Extraction (from chunk files)');
console.log('=================================================================\n');

const files = fs.readdirSync(bundlesDir).filter(f => f.endsWith('.js'));
console.log(`Reading ${files.length} chunk files...`);

for (const file of files) {
    const filePath = path.join(bundlesDir, file);
    try {
        parseChunkFile(filePath);
    } catch (e) {
        console.warn(`  Error processing ${file}: ${e.message.substring(0, 80)}`);
    }
}

console.log(`Found ${Object.keys(moduleSources).length} module factories\n`);
console.log('Extracting dependencies...\n');

const dependencyGraph = {};
let totalEdges = 0;
let modulesWithDeps = 0;
let parseErrors = 0;

const sortedIds = Object.keys(moduleSources).map(Number).sort((a, b) => a - b);

for (const moduleId of sortedIds) {
    const source = moduleSources[moduleId];
    try {
        const deps = extractDependencies(moduleId, source);
        dependencyGraph[moduleId] = {
            dependencies: deps,
            dependencyCount: deps.length
        };
        totalEdges += deps.length;
        if (deps.length > 0) modulesWithDeps++;
    } catch (e) {
        parseErrors++;
        console.warn(`  Error processing module ${moduleId}: ${e.message.substring(0, 100)}`);
        dependencyGraph[moduleId] = {
            dependencies: [],
            dependencyCount: 0
        };
    }
}

const totalModules = Object.keys(dependencyGraph).length;
const zeroDepModules = Object.values(dependencyGraph).filter(v => v.dependencyCount === 0).length;
const zeroDepRate = (zeroDepModules / totalModules * 100).toFixed(1);

console.log(`Results:`);
console.log(`  Total modules in graph: ${totalModules}`);
console.log(`  Total dependency edges: ${totalEdges}`);
console.log(`  Modules with dependencies: ${modulesWithDeps}`);
console.log(`  Zero-dependency modules: ${zeroDepModules} (${zeroDepRate}%)`);
console.log(`  Errors: ${parseErrors}`);

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

const outputGraph = {
    metadata: {
        totalModules: totalModules,
        totalEdges: totalEdges,
        zeroDependencyRate: parseFloat(zeroDepRate),
        extractionMethod: 'ast-based',
        source: 'charting_library/bundles/*.js chunk files',
        parserVersion: '@babel/parser',
        extractionTimestamp: new Date().toISOString()
    },
    modules: {}
};

for (const id of sortedIds) {
    outputGraph.modules[id] = dependencyGraph[id];
}

const outputPath = path.join(phase3Dir, 'static-dependency-graph.json');
fs.writeFileSync(outputPath, JSON.stringify(outputGraph, null, 2));
console.log(`\nWritten: ${outputPath}`);

console.log(`\nSpot-check (first 10 modules with dependencies):`);
let checkCount = 0;
for (const id of sortedIds) {
    if (checkCount >= 10) break;
    const data = dependencyGraph[id];
    if (data.dependencyCount > 0) {
        console.log(`  Module ${id}: ${data.dependencies.slice(0, 20).join(', ')}${data.dependencies.length > 20 ? '...' : ''}`);
        checkCount++;
    }
}

console.log(`\nDone.`);
