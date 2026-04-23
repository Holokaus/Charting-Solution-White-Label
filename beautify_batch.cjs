#!/usr/bin/env node

/**
 * Batch Beautification Script for TradingView Webpack Modules
 * 
 * Processes all modules from modules-v2/ and outputs beautified versions to beautified-batch/
 * 
 * Features:
 * - Extracts code from webpack wrapper format: ID:(e,t,i)=>{...}
 * - Applies js-beautify formatting
 * - Adds module header comments
 * - Preserves require() calls for dependency tracking
 */

const fs = require('fs');
const path = require('path');

// Simple beautifier (since we may not have js-beautify installed)
function simpleBeautify(code, indent = '  ') {
    let result = '';
    let currentIndent = 0;
    let inString = false;
    let stringChar = '';
    let i = 0;
    
    while (i < code.length) {
        const char = code[i];
        const nextChar = code[i + 1] || '';
        
        // Handle strings
        if ((char === '"' || char === "'" || char === '`') && code[i - 1] !== '\\') {
            if (!inString) {
                inString = true;
                stringChar = char;
            } else if (char === stringChar) {
                inString = false;
            }
            result += char;
            i++;
            continue;
        }
        
        if (inString) {
            result += char;
            i++;
            continue;
        }
        
        // Handle opening braces/brackets/parens
        if (char === '{' || char === '[' || char === '(') {
            result += char;
            if (nextChar && nextChar !== '}' && nextChar !== ']' && nextChar !== ')' && nextChar !== ',' && nextChar !== ';') {
                result += '\n' + indent.repeat(currentIndent + 1);
            }
            currentIndent++;
            i++;
            continue;
        }
        
        // Handle closing braces/brackets/parens
        if (char === '}' || char === ']' || char === ')') {
            currentIndent = Math.max(0, currentIndent - 1);
            if (result[result.length - 1] === '\n') {
                result = result.slice(0, result.length - indent.length - 1);
            }
            result += '\n' + indent.repeat(currentIndent) + char;
            if (nextChar && nextChar !== ',' && nextChar !== ';' && nextChar !== '.' && nextChar !== ')' && nextChar !== '}' && nextChar !== ']' && nextChar !== '\n') {
                result += '\n' + indent.repeat(currentIndent);
            }
            i++;
            continue;
        }
        
        // Handle semicolons and commas
        if (char === ';' || char === ',') {
            result += char;
            if (nextChar && nextChar !== '}' && nextChar !== ']' && nextChar !== ')' && nextChar !== '\n') {
                result += '\n' + indent.repeat(currentIndent);
            }
            i++;
            continue;
        }
        
        result += char;
        i++;
    }
    
    // Clean up excessive newlines
    return result.replace(/\n\s*\n\s*\n/g, '\n\n').trim();
}

function extractModuleContent(content, moduleId) {
    // Pattern 1: MODULE_ID: (e, t, i) => { ... }
    const pattern1 = new RegExp(`${moduleId}\\s*:\\s*\\([^)]+\\)\\s*=>\\s*\\{([\\s\\S]*)\\}`);
    
    // Pattern 2: (e, t, i) => { "use strict"; ... } (without module ID prefix)
    const pattern2 = /^\s*\([^)]+\)\s*=>\s*\{([\s\S]*)\}\s*$/m;
    
    let match = content.match(pattern1);
    if (match) {
        return match[1].trim();
    }
    
    match = content.match(pattern2);
    if (match) {
        return match[1].trim();
    }
    
    // If no pattern matches, return original (might already be extracted)
    return content;
}

function generateHeader(moduleId, size, dependencies = []) {
    const date = new Date().toISOString().split('T')[0];
    return `/**
 * Module ${moduleId} - Auto-beautified from TradingView webpack bundle
 * 
 * @module ${moduleId}
 * @date ${date}
 * @size ${size} bytes
 * 
 * Status: Beautified (variable renaming pending)
 * 
 * Dependencies: ${dependencies.length > 0 ? dependencies.join(', ') : 'None detected'}
 * 
 * Next Steps:
 *   1. Identify exported symbols from i.d(t, {...}) calls
 *   2. Rename single-letter variables to semantic names
 *   3. Add JSDoc comments for classes/functions
 *   4. Map dependency relationships
 */

`;
}

function extractDependencies(content) {
    const deps = [];
    const patterns = [
        /require\((\d+)\)/g,
        /i\((\d+)\)/g,
        /import.*from.*['"](\d+)['"]/g
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
    // Match i.d(t, { ExportName: () => variable })
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
        const extractedCode = extractModuleContent(content, moduleId);
        
        // Extract metadata
        const dependencies = extractDependencies(extractedCode);
        const exports = extractExports(extractedCode);
        
        // Generate header with metadata
        let header = generateHeader(moduleId, stats.size, dependencies);
        
        if (exports.length > 0) {
            header += ` * Exports:\n`;
            exports.forEach(exp => {
                header += ` *   - ${exp.exportedName} (internal: ${exp.internalName})\n`;
            });
            header += ` */\n\n`;
        }
        
        // Simple beautification
        const beautifiedCode = simpleBeautify(extractedCode);
        
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

console.log('🔧 TradingView Module Batch Beautifier');
console.log('======================================\n');

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

// Process first 50 modules as a test batch
const testBatch = files.slice(0, 50);

testBatch.forEach((file, index) => {
    const moduleId = path.basename(file, '.js');
    const inputPath = path.join(modulesDir, file);
    const outputPath = path.join(outputDir, `${moduleId}.js`);
    
    const result = processModule(inputPath, outputPath, moduleId);
    
    if (result.success) {
        results.success++;
        results.totalInputSize += result.inputSize;
        results.totalOutputSize += result.outputSize;
        console.log(`✅ [${index + 1}/${testBatch.length}] Module ${moduleId}: ${result.dependencies} deps, ${result.exports} exports`);
    } else {
        results.failed++;
        console.log(`❌ [${index + 1}/${testBatch.length}] Module ${moduleId}: ${result.error}`);
    }
});

console.log('\n======================================');
console.log('📊 Summary:');
console.log(`   Processed: ${results.success + results.failed} modules`);
console.log(`   Successful: ${results.success}`);
console.log(`   Failed: ${results.failed}`);
console.log(`   Input size: ${(results.totalInputSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Output size: ${(results.totalOutputSize / 1024 / 1024).toFixed(2)} MB`);
console.log('\n✨ First batch complete! Run again without slice() to process all modules.');
