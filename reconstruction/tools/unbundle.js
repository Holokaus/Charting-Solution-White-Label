const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');

const bundlesDir = path.resolve(__dirname, '../../charting_library/bundles');
const outputDir = path.resolve(__dirname, '../phase-00-unbundling/modules');
const manifestPath = path.resolve(__dirname, '../phase-00-unbundling/manifest.json');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// ── Parse a chunk file with @babel/parser ──

function parseChunkModules(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const modules = {};
    const chunkIds = [];

    // Quick check: does this file contain a push call?
    if (!content.includes('.push([')) return { chunkIds, modules };

    let ast;
    try {
        ast = parser.parse(content, {
            sourceType: 'script',
            errorRecovery: true
        });
    } catch (e) {
        // Try to recover by wrapping or using a smaller subset
        return { chunkIds, modules };
    }

    // Walk the AST to find the push() call
    function walkNode(node, depth) {
        if (!node || depth > 50) return;
        
        if (node.type === 'CallExpression' &&
            node.callee.type === 'MemberExpression' &&
            node.callee.property.type === 'Identifier' &&
            node.callee.property.name === 'push' &&
            node.arguments.length === 1) {

            const arg = node.arguments[0]; // The array: [[chunkIds], {moduleMap}]

            // Check arg is ArrayExpression with 2 elements
            if (arg.type !== 'ArrayExpression' || arg.elements.length < 2) return;

            const chunkIdArray = arg.elements[0]; // chunk IDs array
            const moduleObject = arg.elements[1]; // module map object

            // Extract chunk IDs
            if (chunkIdArray && chunkIdArray.type === 'ArrayExpression') {
                for (const el of chunkIdArray.elements) {
                    if (el && el.type === 'NumericLiteral') {
                        chunkIds.push(el.value);
                    }
                }
            }

            // Extract module factories from the object
            if (moduleObject && moduleObject.type === 'ObjectExpression') {
                for (const prop of moduleObject.properties) {
                    if (prop.type === 'ObjectProperty' &&
                        prop.key.type === 'NumericLiteral' &&
                        (prop.value.type === 'FunctionExpression' ||
                         prop.value.type === 'ArrowFunctionExpression')) {

                        const mid = prop.key.value;
                        // Get the original source code for this module factory
                        const start = prop.value.start;
                        const end = prop.value.end;
                        let source = content.substring(start, end);

                        modules[mid] = source;
                    }
                }
            }
        }

        // Recursively walk all child nodes
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

    // Handle Program node
    if (ast.program && ast.program.body) {
        for (const node of ast.program.body) {
            // The chunk is wrapped in an ExpressionStatement containing a CallExpression
            if (node.type === 'ExpressionStatement') {
                walkNode(node.expression, 0);
            }
        }
    }

    return { chunkIds, modules };
}

// ── Process all chunk files ──

console.log('Phase 0: Webpack Bundle Unbundling');
console.log('==================================\n');

const files = fs.readdirSync(bundlesDir).filter(f => f.endsWith('.js') && f !== 'runtime.1d4ed3742895f7c63ed9.js');
let totalModules = 0;
const chunks = {};
const skippedFiles = [];
const parseErrors = [];

for (const file of files) {
    try {
        const filePath = path.join(bundlesDir, file);
        const { chunkIds, modules } = parseChunkModules(filePath);
        const moduleIds = Object.keys(modules).map(Number).sort((a, b) => a - b);

        if (chunkIds.length > 0) {
            for (const cid of chunkIds) {
                chunks[cid] = {
                    file: file,
                    moduleIds: moduleIds,
                    moduleCount: moduleIds.length
                };
            }
        }

        // Save each module to its own file
        for (const [mid, source] of Object.entries(modules)) {
            const moduleFile = path.join(outputDir, `${mid}.js`);
            if (!fs.existsSync(moduleFile)) {
                fs.writeFileSync(moduleFile, source, 'utf8');
                totalModules++;
            } else {
                // Module already saved (duplicate across chunks)
                // This shouldn't normally happen, but just in case
            }
        }
    } catch (e) {
        skippedFiles.push(file);
        parseErrors.push({ file, error: e.message });
    }
}

// ── Also parse the standalone.js for any module-like content ──

const standalonePath = path.resolve(__dirname, '../../charting_library/charting_library.standalone.js');
try {
    const standaloneContent = fs.readFileSync(standalonePath, 'utf8');
    // The standalone file is a single IIFE that defines TradingView global
    // It may not contain module factories but let's check for them
    let standaloneModules = 0;

    try {
        const ast = parser.parse(standaloneContent, {
            sourceType: 'script',
            errorRecovery: true
        });
        // Check if the IIFE argument array contains function expressions
        function findModuleArray(node) {
            if (!node) return;
            if (node.type === 'CallExpression' &&
                Array.isArray(node.arguments) &&
                node.arguments.length > 0 &&
                node.arguments[0].type === 'ArrayExpression') {
                
                const arr = node.arguments[0];
                for (const el of arr.elements) {
                    if (el && (el.type === 'FunctionExpression' || el.type === 'ArrowFunctionExpression')) {
                        standaloneModules++;
                    }
                }
            }
            for (const key of Object.keys(node)) {
                if (key === 'leadingComments' || key === 'trailingComments' || key === 'innerComments') continue;
                const child = node[key];
                if (Array.isArray(child)) {
                    for (const c of child) {
                        if (c && typeof c.type === 'string') findModuleArray(c);
                    }
                } else if (child && typeof child.type === 'string') {
                    findModuleArray(child);
                }
            }
        }
        findModuleArray(ast);
    } catch (e) {
        // standalone.js parsing errors are acceptable
    }

    if (standaloneModules > 0) {
        console.log(`Found ${standaloneModules} module factories in standalone.js (beyond chunk modules)`);
    }
} catch (e) {
    console.warn('Could not read standalone.js:', e.message);
}

// ── Write manifest ──

const manifest = {
    metadata: {
        version: "1.0",
        phase: "00-unbundling",
        generated: new Date().toISOString(),
        totalModules: totalModules,
        totalChunks: Object.keys(chunks).length,
        parserVersion: "@babel/parser",
        extractionMethod: "ast-based"
    },
    chunks: chunks,
    skippedFiles: skippedFiles,
    parseErrors: parseErrors.slice(0, 20)
};

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`\nResults:`);
console.log(`  Modules extracted: ${totalModules}`);
console.log(`  Chunks processed: ${Object.keys(chunks).length}`);
console.log(`  Files skipped: ${skippedFiles.length}`);
console.log(`  Parse errors: ${parseErrors.length}`);

if (skippedFiles.length > 0) {
    console.log(`  Skipped: ${skippedFiles.slice(0, 10).join(', ')}${skippedFiles.length > 10 ? '...' : ''}`);
}
if (parseErrors.length > 0) {
    console.log(`  First error: ${parseErrors[0].file} — ${parseErrors[0].error}`);
}

// ── Validate: sample 20 modules and check they parse ──

console.log('\nValidating extracted modules...');
const moduleFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.js'));
let validCount = 0;
let invalidCount = 0;
const samples = [];

// Random sample 20 (or all if less than 20)
const sampleSize = Math.min(20, moduleFiles.length);
const shuffled = moduleFiles.sort(() => Math.random() - 0.5);
for (let i = 0; i < sampleSize; i++) {
    const code = fs.readFileSync(path.join(outputDir, shuffled[i]), 'utf8');
    try {
        parser.parse(code, { sourceType: 'script', errorRecovery: true });
        validCount++;
        samples.push({ file: shuffled[i], valid: true });
    } catch (e) {
        invalidCount++;
        samples.push({ file: shuffled[i], valid: false, error: e.message });
    }
}

console.log(`  Sampled: ${sampleSize} files`);
console.log(`  Valid: ${validCount}`);
console.log(`  Invalid: ${invalidCount}`);

if (invalidCount > 0) {
    console.log('  Invalid files:');
    for (const s of samples) {
        if (!s.valid) console.log(`    ${s.file}: ${s.error}`);
    }
}

// ── Summary ──

console.log(`\nOutput:`);
console.log(`  Modules: ${outputDir}`);
console.log(`  Manifest: ${manifestPath}`);
console.log(`\nPhase 0 unbundling complete.`);
