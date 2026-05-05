#!/usr/bin/env node

/**
 * Production Beautification Tool for Renamed Modules
 * 
 * Processes all modules in modules-v2/ and applies code formatting
 * Creates readable versions while preserving semantic variable names
 */

const fs = require('fs');
const path = require('path');

// Try to use js-beautify if available, fallback to simple beautifier
let beautify;
try {
  beautify = require('js-beautify').js;
  console.log('✓ Using js-beautify library');
} catch (e) {
  console.log('⚠ js-beautify not found, using simple beautifier');
  beautify = null;
}

const sourceDir = './modules-v2';
const outputDir = './beautified-output';
const reportFile = './beautification-report.md';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✓ Created output directory: ${outputDir}`);
}

/**
 * Simple beautifier fallback - adds indentation and formatting
 */
function simpleBeautify(code) {
  let result = '';
  let indent = 0;
  const indentStr = '  ';
  let inString = false;
  let stringChar = '';
  let i = 0;

  while (i < code.length) {
    const char = code[i];
    const prevChar = i > 0 ? code[i - 1] : '';
    const nextChar = i < code.length - 1 ? code[i + 1] : '';

    // Handle strings
    if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (char === stringChar && nextChar !== '\\') {
        inString = false;
      }
    }

    // Handle closing braces before adding indent
    if (!inString && char === '}') {
      indent = Math.max(0, indent - 1);
    }

    // Skip extra spaces outside strings
    if (!inString && (char === ' ' || char === '\n' || char === '\t')) {
      if (prevChar !== ' ' && prevChar !== '\n' && result[result.length - 1] !== '\n') {
        result += ' ';
      }
      i++;
      continue;
    }

    // Add character
    result += char;

    // Handle line breaks for readability
    if (!inString && (char === ';' || char === '{' || char === '}')) {
      if (char === '{') {
        indent++;
        if (nextChar !== '}') {
          result += '\n' + indentStr.repeat(indent);
        }
      } else if (char === '}') {
        if (prevChar !== '{') {
          result += '\n' + indentStr.repeat(indent);
        }
      } else if (char === ';' && nextChar !== '}') {
        result += '\n' + indentStr.repeat(indent);
      }
    }

    i++;
  }

  return result;
}

/**
 * Extract and beautify a module
 */
function beautifyModule(inputPath, outputPath, moduleId) {
  try {
    let content = fs.readFileSync(inputPath, 'utf8');

    // Apply beautification
    if (beautify) {
      content = beautify(content, {
        indent_size: 2,
        preserve_newlines: true,
        max_preserve_newlines: 2,
        jslint_happy: false,
        brace_style: 'collapse',
        wrap_line_length: 120
      });
    } else {
      content = simpleBeautify(content);
    }

    // Add header comment with module info
    const header = `/**\n * Module ${moduleId} - Beautified\n * Auto-formatted from webpack bundle\n * Semantic variable names applied\n */\n\n`;
    content = header + content;

    // Write output
    fs.writeFileSync(outputPath, content);
    return true;
  } catch (error) {
    console.error(`Error beautifying ${path.basename(inputPath)}: ${error.message}`);
    return false;
  }
}

/**
 * Main processing
 */
console.log('Starting beautification process...\n');

const startTime = Date.now();
const files = fs.readdirSync(sourceDir)
  .filter(f => f.endsWith('.js'))
  .sort();

console.log(`Found ${files.length} modules to beautify\n`);

let successful = 0;
let failed = 0;
const results = [];

files.forEach((file, idx) => {
  const modulePath = path.join(sourceDir, file);
  const outputPath = path.join(outputDir, file);
  const moduleId = file.replace('.js', '');

  if (beautifyModule(modulePath, outputPath, moduleId)) {
    successful++;
    results.push({ file, status: 'SUCCESS', moduleId });
    
    if ((idx + 1) % 50 === 0) {
      console.log(`  [${idx + 1}/${files.length}] Processed`);
    }
  } else {
    failed++;
    results.push({ file, status: 'FAILED', moduleId });
  }
});

const duration = ((Date.now() - startTime) / 1000).toFixed(2);

console.log(`\n✓ Beautification complete in ${duration}s`);
console.log(`  - Successful: ${successful}`);
console.log(`  - Failed: ${failed}`);
console.log(`  - Total: ${files.length}`);

// Generate report
const report = `# Beautification Report
Generated: ${new Date().toISOString()}

## Summary
- Total Files Processed: ${files.length}
- Successful: ${successful}
- Failed: ${failed}
- Duration: ${duration}s
- Average per file: ${(parseFloat(duration) / files.length * 1000).toFixed(2)}ms

## Status
${failed === 0 ? '✅ ALL FILES BEAUTIFIED SUCCESSFULLY' : `⚠ ${failed} files had issues`}

## Details
${results.slice(0, 30).map(r => `- ${r.file}: ${r.status}`).join('\n')}
${results.length > 30 ? `\n... and ${results.length - 30} more files` : ''}

## Output Directory
All beautified files saved to: ${outputDir}/

## Next Steps
1. Review beautified output
2. Compare with originals if needed
3. Proceed with validation
`;

fs.writeFileSync(reportFile, report);
console.log(`\n📋 Report saved to: ${reportFile}`);
console.log(`📁 Output saved to: ${outputDir}/`);
