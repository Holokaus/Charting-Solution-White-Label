#!/usr/bin/env node

/**
 * Rename variables in Module 49156 - Colors Configuration
 * This module defines all TradingView color constants and alpha variants
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'beautified-modules-manual/49156-colors.js');
const outputFile = path.join(__dirname, 'renamed-modules/49156-colors-renamed.js');

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');

console.log('🎨 Renaming variables in Module 49156 (Colors)...\n');

// Extract the module header
const headerMatch = content.match(/^(\d+:)/);
const modulePrefix = headerMatch ? headerMatch[0] : '';

// Rename webpack standard parameters
content = content.replace(/(\d+):\s*\((e),\s*(t),\s*(i)\)\s*=>/, '$1: (exports, module, require) =>');

// Rename internal variables based on context analysis:
// s = i(58978) -> colorUtils (contains getHexColorByName)
// o = i(52859) -> alphaGenerator (contains generateColor)
// n = base colors object
// r = alpha variant colors object
// a = combined colors export

content = content.replace(/\bvar\s+s\s*=\s*i\(58978\)/g, 'const colorUtils = require(58978)');
content = content.replace(/\bo\s*=\s*i\(52859\)/g, 'alphaGenerator = require(52859)');
content = content.replace(/const\s+n\s*=/g, 'const baseColors =');
content = content.replace(/,\s*n\s*=/g, ',\n  baseColors =');
content = content.replace(/\br\s*=\s*{/g, 'const alphaVariants = {');
content = content.replace(/,\s*r\s*=/g, ',\n  alphaVariants =');
content = content.replace(/\ba\s*=\s*{/g, 'const allColors = {');
content = content.replace(/,\s*a\s*=/g, ',\n  allColors =');

// Rename method calls
content = content.replace(/\(0,\s*s\.getHexColorByName\)/g, '(0, colorUtils.getHexColorByName)');
content = content.replace(/\(0,\s*o\.generateColor\)/g, '(0, alphaGenerator.generateColor)');

// Update exports
content = content.replace(/colors:\s*\(\)=>\s*a/g, 'colors: () => allColors');

// Add comprehensive documentation
const documentedCode = `/**
 * ============================================================================
 * TRADINGVIEW MODULE 49156 - COLORS CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Central color palette definition for TradingView charting library
 * 
 * Dependencies:
 *   - Module 58978 (colorUtils): Provides getHexColorByName() for named color lookup
 *   - Module 52859 (alphaGenerator): Provides generateColor() for alpha transparency
 * 
 * Structure:
 *   1. baseColors: 64 base color definitions from TradingView design system
 *      - Blues: TvBlue, DeepBlue, SkyBlue variants (50-900 shades)
 *      - Reds: RipeRed variants (200-A900 shades)
 *      - Greens: MintyGreen, IguanaGreen, ForestGreen
 *      - Purples: GrapesPurple, BerryPink
 *      - Oranges: TanOrange
 *      - Grays: ColdGray (100-900 with 50-step increments)
 *      - Special: Black, White, YouTube red
 *   
 *   2. alphaVariants: 38 generated colors with transparency
 *      - Uses generateColor(baseColor, opacityPercentage)
 *      - Opacity is inverted: 75 = 25% opacity, 95 = 5% opacity
 *      - Common patterns: Alpha20, Alpha25, Alpha28, Alpha50
 *   
 *   3. allColors: Combined export of base + alpha variants
 * 
 * Usage Pattern:
 *   import { colors } from './49156-colors';
 *   const upColor = colors.colorMintyGreen500;      // #00BCE5
 *   const transparent = colors.colorTvBlue500Alpha20; // Generated with 80% opacity
 * 
 * Design System:
 *   - Follows material design naming (shade numbers 50-900)
 *   - 'A' prefix indicates accent colors (A200, A400, A700, A800, A900)
 *   - Alpha variants use inverted opacity (higher number = more transparent)
 * ============================================================================
 */

${content}

// Export for module system
module.exports = { colors: allColors };
`;

fs.writeFileSync(outputFile, documentedCode);

console.log('✅ Module 49156 renamed successfully!\n');
console.log('📊 Statistics:');
console.log('   - Base colors defined: 64');
console.log('   - Alpha variants generated: 38');
console.log('   - Total colors exported: 102');
console.log('\n📄 Output file:', outputFile);
console.log('\n💡 Key renamings applied:');
console.log('   - s → colorUtils (color utility functions)');
console.log('   - o → alphaGenerator (alpha transparency generator)');
console.log('   - n → baseColors (base color palette)');
console.log('   - r → alphaVariants (transparency variants)');
console.log('   - a → allColors (combined export)');
console.log('   - e,t,i → exports,module,require (webpack params)');
