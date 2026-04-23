#!/usr/bin/env node

/**
 * Batch Beautification Script using js-beautify
 * 
 * Processes ALL modules from modules-v2/ and outputs properly beautified versions to beautified-batch/
 */

const fs = require('fs');
const path = require('path');
const js_beautify = require('js-beautify').js;

function extractModuleContent(content, moduleId) {
    // Pattern 1: MODULE_ID: (e, t, i) => { ... }
    const pattern1 = new RegExp(moduleId + '\\s*:\\s*\\(([^)]+)\\)\\s*=>\\s*\\{([\\s\\S]*?)\\}\\s*(?:,\\s*\\n\\s*})?$');
    
    // Pattern 2: (e, t, i) => { "use strict"; ... } (without module ID prefix)
    const pattern2 = /^\s*\(([^)]+)\)\s*=>\s*\{([\s\S]*)\}\s*$/m;
    
    let match = content.match(pattern1);
    if (match) {
        return { code: match[2].trim(), params: match[1] };
    }
    
    match = content.match(pattern2);
    if (match) {
        return { code: match[2].trim(), params: match[1] };
    }
    
    return { code: content.trim(), params: 'e, t, i' };
}

function generateHeader(moduleId, size, dependencies, exports) {
    const date = new Date().toISOString().split('T')[0];
    let header = `/**
 * Module ${moduleId} - Auto-beautified from TradingView webpack bundle
 *
 * @module ${moduleId}
 * @date ${date}
 * @size ${size} bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: ${dependencies.length > 0 ? dependencies.join(', ') : 'None detected'}
`;
    
    if (exports.length > 0) {
        header += ' *\n * Exports:\n';
        exports.forEach(exp => {
            header += ` *   - ${exp.exportedName} (internal: ${exp.internalName})\n`;
        });
    }
    
    header += ` *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

`;
    return header;
}

function extractDependencies(content) {
    const deps = [];
    const patterns = [
        /require\((\d+)\)/g,
        /i\((\d+)\)/g
    ];
    
    for (const pattern of patterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
            if (!deps.includes(match[1])) {
                deps.push(match[1]);
            }
        }
    }
    
    return deps.sort((a, b) => parseInt(a) - parseInt(b));
}

function extractExports(content) {
    const exports = [];
    const pattern = /(?:i\.d|require\.d)\([^,]+,\s*\{([^}]+)\}/;
    const match = content.match(pattern);
    
    if (match) {
        const exportBlock = match[1];
        const exportPattern = /(\w+)\s*:\s*\(\s*\)\s*=>\s*(\w+)/g;
        let exportMatch;
        while ((exportMatch = exportPattern.exec(exportBlock)) !== null) {
            exports.push({
                exportedName: exportMatch[1],
                internalName: exportMatch[2]
            });
        }
    }
    
    return exports;
}

function processModule(inputPath, outputPath, moduleId) {
    try {
        const content = fs.readFileSync(inputPath, 'utf8');
        const stats = fs.statSync(inputPath);
        
        // Extract module content from webpack wrapper
        const { code: extractedCode, params } = extractModuleContent(content, moduleId);
        
        // Extract metadata
        const dependencies = extractDependencies(extractedCode);
        const exports = extractExports(extractedCode);
        
        // Generate header with metadata
        const header = generateHeader(moduleId, stats.size, dependencies, exports);
        
        // Use js-beautify for proper formatting
        const beautifiedCode = js_beautify(extractedCode, {
            indent_size: 2,
            indent_char: ' ',
            max_preserve_newlines: 2,
            preserve_newlines: true,
            keep_array_indentation: true,
            break_chained_methods: false,
            space_in_paren: false,
            space_before_conditional: true,
            unescape_strings: false,
            jslint_happy: false,
            end_with_newline: true,
            wrap_line_length: 0,
            indent_inner_function: false,
            comma_first: false,
            e4x: true,
            indent_empty_lines: false
        });
        
        // Write output
        const output = header + beautifiedCode;
        fs.writeFileSync(outputPath, output, 'utf8');
        
        return {
            success: true,
            moduleId,
            inputSize: stats.size,
            outputSize: Buffer.byteLength(output, 'utf8'),
            dependencies: dependencies.length,
            exports: exports.length
        };
    } catch (error) {
        return {
            success: false,
            moduleId,
            error: error.message
        };
    }
}

// Main execution
const modulesDir = path.join(__dirname, 'modules-v2');
const outputDir = path.join(__dirname, 'beautified-batch');

console.log('🔧 TradingView Module Batch Beautifier (with js-beautify)');
console.log('=========================================================\n');

// Get all JS files
const files = fs.readdirSync(modulesDir)
    .filter(f => f.endsWith('.js'))
    .sort((a, b) => {
        const aId = parseInt(path.basename(a, '.js'));
        const bId = parseInt(path.basename(b, '.js'));
        return aId - bId;
    });

console.log(`Found ${files.length} modules to process\n`);

const results = {
    success: 0,
    failed: 0,
    totalInputSize: 0,
    totalOutputSize: 0
};

// Process ALL modules
files.forEach((file, index) => {
    const moduleId = path.basename(file, '.js');
    const inputPath = path.join(modulesDir, file);
    const outputPath = path.join(outputDir, `${moduleId}.js`);
    
    const result = processModule(inputPath, outputPath, moduleId);
    
    if (result.success) {
        results.success++;
        results.totalInputSize += result.inputSize;
        results.totalOutputSize += result.outputSize;
        if ((index + 1) % 50 === 0 || index === 0) {
            console.log(`✅ [${index + 1}/${files.length}] Module ${moduleId}: ${result.dependencies} deps, ${result.exports} exports`);
        }
    } else {
        results.failed++;
        console.log(`❌ [${index + 1}/${files.length}] Module ${moduleId}: ${result.error}`);
    }
});

console.log('\n=========================================================');
console.log('📊 Final Summary:');
console.log(`   Processed: ${results.success + results.failed} modules`);
console.log(`   Successful: ${results.success}`);
console.log(`   Failed: ${results.failed}`);
console.log(`   Input size: ${(results.totalInputSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Output size: ${(results.totalOutputSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Expansion ratio: ${((results.totalOutputSize / results.totalInputSize) * 100).toFixed(1)}%`);
console.log('\n✨ All modules beautified! Ready for variable renaming phase.');
