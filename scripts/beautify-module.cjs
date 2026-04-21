const fs = require('fs');
const prettier = require('prettier');

async function beautifyModule(inputFile, outputFile) {
    const content = fs.readFileSync(inputFile, 'utf8').trim();
    
    // Extract module code (remove webpack wrapper: 2383:(e,t,i)=>{"use strict";...})
    const match = content.match(/^\d+:\(e,t,i\)=>\{\"use strict\";(.*?)\},?\s*$/s);
    if (!match) {
        console.log(`No module wrapper found in ${inputFile}, copying as-is`);
        fs.writeFileSync(outputFile, content);
        return;
    }
    
    let moduleCode = match[1];
    
    // Fix newline issues and common patterns
    moduleCode = moduleCode.replace(/\n/g, ' ');
    
    // Critical fix: Properly handle IIFEs like !function(e){...}(s||(s={}))
    moduleCode = moduleCode.replace(/}\s*!function\s*\(/g, '}; (function(');
    moduleCode = moduleCode.replace(/\)\s*\(\s*(\w+)\s*\|\|\s*\(\s*\1\s*=\s*\{\}\s*\)\s*\)/g, '))($1||($1={}))');
    moduleCode = moduleCode.replace(/return\s+([^;}]+)}/g, 'return $1;}');
    
    try {
        const formatted = await prettier.format(moduleCode, {
            parser: 'babel',
            singleQuote: true,
            trailingComma: 'es5',
            printWidth: 100,
            tabWidth: 4,
            useTabs: false,
            semi: true,
            bracketSpacing: true,
            arrowParens: 'avoid'
        });
        
        fs.writeFileSync(outputFile, formatted);
        console.log(`✓ Beautified: ${outputFile}`);
    } catch (error) {
        console.error(`✗ Error beautifying ${inputFile}:`, error.message);
        // Fallback: write unformatted but cleaned code
        fs.writeFileSync(outputFile, moduleCode);
        console.log(`⚠ Wrote unformatted version to ${outputFile}`);
    }
}

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
    console.error('Usage: node beautify-module.cjs <input> <output>');
    process.exit(1);
}

beautifyModule(inputFile, outputFile);
