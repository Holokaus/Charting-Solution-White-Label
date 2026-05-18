const fs = require('fs');
const path = require('path');

// Read the charting_library.standalone.js file
const filePath = path.join(__dirname, '../../charting_library/charting_library.standalone.js');
const content = fs.readFileSync(filePath, 'utf-8');

console.log('File size:', content.length);
console.log('First 5000 characters:');
console.log(content.substring(0, 5000));
console.log('\n---\n');

// Search for webpack runtime patterns
const patterns = [
    '__webpack_require__',
    '__webpack_modules__',
    '__webpack_chunk_load__',
    '__webpack_public_path__',
    'module.exports',
    'e.exports',
    'function(e)',
    'function(t)',
    'return e',
    'installedModules',
    'moduleId'
];

console.log('Searching for webpack patterns:');
patterns.forEach(pattern => {
    const count = (content.match(new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    console.log(`${pattern}: ${count} occurrences`);
});

console.log('\n---\n');

// Try to find the module registry structure
const moduleRegistryPatterns = [
    /\{[\s\S]{0,500}function\(e\)/g,
    /\{[\s\S]{0,500}e\.exports/g,
    /var\s+\w+\s*=\s*\{[\s\S]{0,1000}\}/g
];

console.log('Searching for module registry structures:');
moduleRegistryPatterns.forEach((pattern, index) => {
    const matches = content.match(pattern);
    if (matches) {
        console.log(`Pattern ${index}: Found ${matches.length} matches`);
        console.log('First match:', matches[0].substring(0, 200));
    }
});

console.log('\n---\n');

// Look for the bootstrap/runtime section (typically at the beginning)
const firstFunctionMatch = content.match(/function\s*\([^)]*\)\s*\{/);
if (firstFunctionMatch) {
    console.log('First function definition:', firstFunctionMatch[0]);
}

// Look for array/object that might be the module registry
const arrayMatch = content.match(/\[[\s\S]{0,1000}function/);
if (arrayMatch) {
    console.log('Possible module array start:', arrayMatch[0].substring(0, 200));
}

const objectMatch = content.match(/\{[\s\S]{0,1000}function/);
if (objectMatch) {
    console.log('Possible module object start:', objectMatch[0].substring(0, 200));
}

// Save analysis to file
const analysis = {
    fileSize: content.length,
    patterns: patterns.reduce((acc, pattern) => {
        const count = (content.match(new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        acc[pattern] = count;
        return acc;
    }, {}),
    first5000Chars: content.substring(0, 5000)
};

fs.writeFileSync(
    path.join(__dirname, '../phase-01-runtime-analysis/webpack-runtime-raw.json'),
    JSON.stringify(analysis, null, 2)
);

console.log('\nAnalysis saved to webpack-runtime-raw.json');
