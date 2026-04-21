#!/usr/bin/env node
/**
 * Beautification script for Module 2115 (Series Data Handler)
 * TradingView Charting Library Reverse Engineering Project
 * 
 * Usage: node scripts/beautify-2115.cjs
 */

const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const INPUT_FILE = path.join(__dirname, '../beautified-modules-manual/2115.js');
const OUTPUT_FILE = path.join(__dirname, '../renamed-modules/2115-series-data.js');

async function beautify() {
  try {
    console.log('Reading Module 2115...');
    const code = fs.readFileSync(INPUT_FILE, 'utf8');
    
    console.log('Formatting with Prettier...');
    const formatted = await prettier.format(code, {
      parser: 'babel',
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      printWidth: 100,
      tabWidth: 2
    });
    
    console.log('Writing output...');
    fs.writeFileSync(OUTPUT_FILE, formatted);
    
    console.log(`✅ Success! Output: ${OUTPUT_FILE}`);
    console.log(`   Size: ${(formatted.length / 1024).toFixed(2)} KB`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

beautify();
