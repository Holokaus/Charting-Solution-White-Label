const fs = require('fs');

function manualBeautify(inputFile, outputFile) {
    const content = fs.readFileSync(inputFile, 'utf8').trim();
    
    // Extract module code
    const match = content.match(/^\d+:\(e,t,i\)=>\{\"use strict\";(.*?)\},?\s*$/s);
    if (!match) {
        console.log(`No wrapper found, copying ${inputFile}`);
        fs.writeFileSync(outputFile, content);
        return;
    }
    
    let code = match[1];
    
    // Step-by-step beautification
    code = code.replace(/\n/g, ' ');  // Remove newlines
    
    // Add semicolons after statements
    code = code.replace(/(!function\([^)]*\)\{[^}]*\})\((\w+)\|\|\((\w+)={}\)\)/g, '$1($2||($3={}));');
    code = code.replace(/(return [^;]+)}(\s*)([A-Z])/g, '$1;}$2$3');
    code = code.replace(/(return [^;]+)}(\s*)!/g, '$1;}!');
    code = code.replace(/}\s*!function/g, '}; !function');
    
    // Split into lines for readability  
    let result = '';
    let indent = 0;
    let i = 0;
    
    while (i < code.length) {
        const char = code[i];
        
        // Handle opening braces
        if (char === '{') {
            result += ' {\n';
            indent++;
            result += '    '.repeat(indent);
            i++;
            continue;
        }
        
        // Handle closing braces
        if (char === '}') {
            result = result.trimEnd() + '\n';
            indent = Math.max(0, indent - 1);
            result += '    '.repeat(indent) + '}';
            i++;
            // Check what comes after
            if (i < code.length && code[i] === '(') {
                // IIFE call continues
                while (i < code.length && code[i] !== ';') {
                    result += code[i];
                    i++;
                }
                if (i < code.length && code[i] === ';') {
                    result += ';\n';
                    result += '    '.repeat(indent);
                    i++;
                }
            } else if (i < code.length && (code[i] === ';' || code[i] === ',')) {
                result += code[i] + '\n';
                result += '    '.repeat(indent);
                i++;
            }
            continue;
        }
        
        // Handle semicolons
        if (char === ';') {
            result += ';\n';
            result += '    '.repeat(indent);
            i++;
            continue;
        }
        
        result += char;
        i++;
    }
    
    fs.writeFileSync(outputFile, result);
    console.log(`✓ Manually beautified: ${outputFile}`);
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
    console.error('Usage: node manual-beautify.cjs <input> <output>');
    process.exit(1);
}

manualBeautify(inputFile, outputFile);
