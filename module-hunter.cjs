#!/usr/bin/env node
/**
* Module Hunter
* Scans a file to find usage patterns of unknown modules.
* Helps identify what a module does based on the methods called on it.
*/
const fs = require('fs');
const filePath = process.argv[2];
if (!filePath) {
console.log('Usage: node module-hunter.cjs <file-path>');
process.exit(1);
}
const content = fs.readFileSync(filePath, 'utf8');
// 1. Find all module imports: var x = i(123)
const importRegex = /(?:var|const|let)\s+(\w+)\s*=\s*i\((\d+)\)/g;
const imports = {};
let match;
while ((match = importRegex.exec(content)) !== null) {
const varName = match[1];
const moduleId = match[2];
// Store: { variableName: moduleId }
imports[varName] = moduleId;
}
// 2. Find usage of those variables: varName.methodName(
// Looks for patterns like: t.createStudy(), e.log(), etc.
const usageStats = {};
Object.keys(imports).forEach(varName => {
// Regex to find: variableName.someFunctionName
// It captures the method name
const usageRegex = new RegExp(`\\b${varName}\\.(\\w+)\\b`, 'g');
const methods = new Set();
let usageMatch;
while ((usageMatch = usageRegex.exec(content)) !== null) {
methods.add(usageMatch[1]);
}
if (methods.size > 0) {
const moduleId = imports[varName];
if (!usageStats[moduleId]) {
usageStats[moduleId] = {
variableNames: new Set(),
methods: new Set()
};
}
usageStats[moduleId].variableNames.add(varName);
methods.forEach(m => usageStats[moduleId].methods.add(m));
}
});
// 3. Output Report
console.log("\n=== Module Usage Analysis ===\n");
// Sort by Module ID for easier reading
Object.keys(usageStats).sort((a, b) => parseInt(a) - parseInt(b)).forEach(moduleId => {
const data = usageStats[moduleId];
const varList = Array.from(data.variableNames).join(', ');
const methodList = Array.from(data.methods).join(', ');
console.log(`Module ID: ${moduleId}`);
console.log(`  Assigned to vars: ${varList}`);
console.log(`  Methods called  : ${methodList}`);
console.log('---');
});
// 4. Search for specific strings to find "Smoking Guns"
console.log("\n=== String 'Smoking Guns' ===\n");
const stringRegex = /['"]((?:Error|Invalid|Failed|Warning|Debug|Warning|Info)[^'"]*)['"]/g;
let stringMatch;
const foundStrings = [];
while ((stringMatch = stringRegex.exec(content)) !== null) {
// Get a snippet of code around the string
const start = Math.max(0, stringMatch.index - 100);
const snippet = content.substring(start, stringMatch.index + stringMatch[0].length + 50);
// Check if this snippet uses one of our imported variables
Object.keys(imports).forEach(varName => {
if (snippet.includes(varName)) {
foundStrings.push({
moduleId: imports[varName],
varName: varName,
string: stringMatch[1]
});
}
});
}
foundStrings.forEach(s => {
console.log(`Module ${s.moduleId} (var: ${s.varName}) contains string: "${s.string}"`);
});
