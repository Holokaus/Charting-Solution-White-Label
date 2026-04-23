const fs = require('fs');
const path = require('path');
const { js_beautify } = require('js-beautify');

function extractModuleContent(content) {
    content = content.trim();
    
    // Handle multi-line webpack format by joining into single line first for matching
    const singleLine = content.replace(/\s+/g, ' ');
    
    // Try webpack format: 12345:(e,t,i)=>{...} (no spaces)
    let numberedMatch = singleLine.match(/^\d+:\(e,t,i\)=>\{([\s\S]*)\}\s*;?\s*$/);
    if (numberedMatch) {
        // Extract from original preserving some structure
        const startIdx = content.indexOf('(e,t,i)=>{');
        if (startIdx !== -1) {
            return content.substring(startIdx + '(e,t,i)=>{'.length, content.lastIndexOf('}'));
        }
    }
    
    // Try webpack format with spaces: 12345: (e, t, i) => { ... }
    numberedMatch = singleLine.match(/^\d+\s*:\s*\(e,\s*t,\s*i\)\s*=>\s*\{([\s\S]*)\}\s*;?\s*$/);
    if (numberedMatch) {
        const startIdx = content.match(/\(e,\s*t,\s*i\)\s*=>\s*\{/);
        if (startIdx) {
            const idx = content.indexOf(startIdx[0]);
            return content.substring(idx + startIdx[0].length, content.lastIndexOf('}'));
        }
    }
    
    // Try arrow format: (e, t, i) => { ... }
    const arrowMatch = singleLine.match(/^\(e,\s*t,\s*i\)\s*=>\s*\{([\s\S]*)\}\s*;?\s*$/);
    if (arrowMatch) {
        const startIdx = content.match(/\(e,\s*t,\s*i\)\s*=>\s*\{/);
        if (startIdx) {
            const idx = content.indexOf(startIdx[0]);
            return content.substring(idx + startIdx[0].length, content.lastIndexOf('}'));
        }
    }
    
    return content;
}

function beautifyFile(inputPath, outputPath, moduleName = null, moduleDescription = '') {
    let content = fs.readFileSync(inputPath, 'utf8');
    
    // Extract module body
    let code = extractModuleContent(content);
    
    // Beautify
    const beautified = js_beautify(code, {
        indent_size: 2,
        space_in_empty_paren: false,
        preserve_newlines: true,
        max_preserve_newlines: 2
    });
    
    // Build output with header
    const name = moduleName || path.basename(inputPath, '.js');
    let output = `/**\n`;
    output += ` * Module ${name}${moduleDescription ? ' - ' + moduleDescription : ''}\n`;
    output += ` *\n`;
    output += ` * Auto-beautified from minified webpack source.\n`;
    output += ` * Variable renaming still needed.\n`;
    output += ` *\n`;
    output += ` * @module ${name}\n`;
    output += ` */\n\n`;
    output += beautified;
    
    fs.writeFileSync(outputPath, output);
    console.log(`Beautified: ${inputPath} -> ${outputPath}`);
}

if (process.argv.length > 2) {
    const inputFile = process.argv[2];
    const outputFile = process.argv[3];
    const moduleName = process.argv[4] || null;
    const moduleDesc = process.argv[5] || '';
    beautifyFile(inputFile, outputFile, moduleName, moduleDesc);
}
