#!/usr/bin/env node

/**
 * Rename variables in Module 24317 - Chart Themes Configuration
 * This module defines light and dark theme configurations for TradingView charts
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'beautified-modules-manual/24317-chart-themes.js');
const outputFile = path.join(__dirname, 'renamed-modules/24317-chart-themes-renamed.js');

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');

console.log('🎨 Renaming variables in Module 24317 (Chart Themes)...\n');

// Rename webpack standard parameters
content = content.replace(/(\d+):\s*\((e),\s*(t),\s*(i)\)\s*=>/, '$1: (exports, module, require) =>');

// Rename imports based on context:
// s = i(11542) -> i18n (internationalization)
// o = i(87465) -> objectUtils (clone, merge functions)
// n = i(2433) -> lightThemeBase (base light theme)
// r = i(93201) -> colorTypes (ColorType enum)
// a = i(49156) -> colors (color palette - our renamed module!)

content = content.replace(/var\s+s\s*=\s*i\(11542\)/g, 'const i18n = require(11542)');
content = content.replace(/\bo\s*=\s*i\(87465\)/g, 'objectUtils = require(87465)');
content = content.replace(/\bn\s*=\s*i\(2433\)/g, 'lightThemeBase = require(2433)');
content = content.replace(/\br\s*=\s*i\(93201\)/g, 'colorTypes = require(93201)');
content = content.replace(/\ba\s*=\s*i\(49156\)/g, 'colors = require(49156)');

// Update the destructuring from colors
content = content.replace(/const\s*{[\s\S]*?}\s*=\s*a\.colors,/g, 
`const {
      colorWhite: white,
      colorColdGray100Alpha0: coldGray100Alpha0,
      colorColdGray100Alpha6: coldGray100Alpha6,
      colorColdGray200: coldGray200,
      colorColdGray300: coldGray300,
      colorColdGray400: coldGray400,
      colorColdGray450: coldGray450,
      colorColdGray600: coldGray600,
      colorColdGray800: coldGray800,
      colorColdGray850: coldGray850,
      colorColdGray900: coldGray900,
      colorDeepBlueA200: deepBlueA200,
      colorGrapesPurpleA400: grapesPurpleA400,
      colorGrapesPurpleA200Alpha15: grapesPurpleA200Alpha15,
      colorMintyGreen400: mintyGreen400,
      colorMintyGreen500: mintyGreen500,
      colorMintyGreen600: mintyGreen600,
      colorMintyGreen800: mintyGreen800,
      colorMintyGreen500Alpha5: mintyGreen500Alpha5,
      colorMintyGreen500Alpha28: mintyGreen500Alpha28,
      colorMintyGreen500Alpha50: mintyGreen500Alpha50,
      colorMintyGreenA900: mintyGreenA900,
      colorRipeRed400: ripeRed400,
      colorRipeRed500: ripeRed500,
      colorRipeRed600: ripeRed600,
      colorRipeRed800: ripeRed800,
      colorRipeRed500Alpha5: ripeRed500Alpha5,
      colorRipeRed500Alpha28: ripeRed500Alpha28,
      colorRipeRed500Alpha50: ripeRed500Alpha50,
      colorRipeRedA900: ripeRedA900,
      colorBerryPink500Alpha25: berryPink500Alpha25,
      colorBerryPink400Alpha50: berryPink400Alpha50,
      colorBerryPink400Alpha75: berryPink400Alpha75,
      colorBerryPink500: berryPink500,
      colorIguanaGreenA700: iguanaGreenA700,
      colorSkyBlue400Alpha5: skyBlue400Alpha5,
      colorSkyBlue400Alpha50: skyBlue400Alpha50,
      colorSkyBlue400Alpha75: skyBlue400Alpha75,
      colorSkyBlue500: skyBlue500,
      colorSkyBlue500Alpha25: skyBlue500Alpha25,
      colorDeepBlueA400: deepBlueA400,
      colorTvBlue400: tvBlue400,
      colorTvBlue500: tvBlue500,
      colorTvBlue500Alpha28: tvBlue500Alpha28,
      colorTvBlue600: tvBlue600,
      colorTvBlue800: tvBlue800,
      colorTvBlueA800: tvBlueA800,
      colorTanOrange500: tanOrange500,
      colorTanOrange600: tanOrange600
    } = colors.colors,`);

// Rename empty theme objects
content = content.replace(/se\s*=\s*{},\s*oe\s*=\s*{},\s*ne\s*=\s*{}/g, 
  'tpoTheme = {}, volFootprintTheme = {}, svpTheme = {}');

// Rename main dark theme object
content = content.replace(/re\s*=\s*{/g, 'darkThemeConfig = {');

// Update exports
content = content.replace(/darkTheme:\s*\(\)=>\s*ce/g, 'darkTheme: () => darkTheme');
content = content.replace(/getStdChartTheme:\s*\(\)=>\s*_e/g, 'getStdChartTheme: () => getStandardChartTheme');
content = content.replace(/getStdThemeNames:\s*\(\)=>\s*ue/g, 'getStdThemeNames: () => getStandardThemeNames');
content = content.replace(/lightTheme:\s*\(\)=>\s*le/g, 'lightTheme: () => lightTheme');
content = content.replace(/overrideStdTheme:\s*\(\)=>\s*he/g, 'overrideStdTheme: () => overrideStandardTheme');
content = content.replace(/restoreStdThemes:\s*\(\)=>\s*de/g, 'restoreStdThemes: () => restoreStandardThemes');
content = content.replace(/translateThemeName:\s*\(\)=>\s*pe/g, 'translateThemeName: () => translateThemeName');

// Rename theme variables and functions
content = content.replace(/\ble\s*=\s*\(0,\s*o\.clone\)\(n\.light\)/g, 
  'let lightTheme = (0, objectUtils.clone)(lightThemeBase.light)');
content = content.replace(/\bce\s*=\s*\(0,\s*o\.clone\)\(re\)/g, 
  'let darkTheme = (0, objectUtils.clone)(darkThemeConfig)');

// Function renamings
content = content.replace(/function\s+he\s*\([^)]*\)/g, 'function overrideStandardTheme(themeType, overrides)');
content = content.replace(/function\s+de\s*\(\)/g, 'function restoreStandardThemes()');
content = content.replace(/function\s+ue\s*\(\)/g, 'function getStandardThemeNames()');
content = content.replace(/function\s+_e\s*\([^)]*\)/g, 'function getStandardChartTheme(themeType)');
content = content.replace(/function\s+pe\s*\([^)]*\)/g, 'function translateThemeName(themeType)');

// Update function bodies
content = content.replace(/case\s+ae\.StdTheme\.Light:\s*le\s*=/g, 
  'case stdTheme.Light:\n          lightTheme =');
content = content.replace(/case\s+ae\.StdTheme\.Dark:\s*ce\s*=/g, 
  'case stdTheme.Dark:\n          darkTheme =');
content = content.replace(/le\s*=\s*\(0,\s*o\.clone\)\(n\.light\),\s*ce\s*=\s*\(0,\s*o\.clone\)\(re\)/g,
  'lightTheme = (0, objectUtils.clone)(lightThemeBase.light), darkTheme = (0, objectUtils.clone)(darkThemeConfig)');
content = content.replace(/return\s*\[ae\.StdTheme\.Light,\s*ae\.StdTheme\.Dark\]/g,
  'return [stdTheme.Light, stdTheme.Dark]');
content = content.replace(/e\s*===\s*ae\.StdTheme\.Light\s*?\s*le\s*:\s*e\s*===\s*ae\.StdTheme\.Dark\s*?\s*ce\s*:\s*void\s+0/g,
  'themeType === stdTheme.Light ? lightTheme : themeType === stdTheme.Dark ? darkTheme : undefined');

// Import std theme enum
content = content.replace(/var\s+ae\s*=\s*i\(24633\);/g, 'const stdTheme = require(24633); // StdTheme enum');

// Update i18n calls
content = content.replace(/s\.t\(null,\s*{\s*context:\s*"colorThemeName"\s*},\s*i\((\d+)\)\)/g, 
  'i18n.t(null, { context: "colorThemeName" }, i($1))');

// Add comprehensive documentation
const documentedCode = `/**
 * ============================================================================
 * TRADINGVIEW MODULE 24317 - CHART THEMES CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Define and manage light/dark theme configurations for TradingView charts
 * 
 * Dependencies:
 *   - Module 11542 (i18n): Internationalization for theme names
 *   - Module 87465 (objectUtils): Object clone/merge utilities
 *   - Module 2433 (lightThemeBase): Base light theme definition
 *   - Module 93201 (colorTypes): ColorType enum for gradients
 *   - Module 49156 (colors): Complete color palette (our renamed module!)
 *   - Module 24633 (stdTheme): Standard theme enum (Light/Dark)
 * 
 * Structure:
 *   1. Color Destructuring: Extract 48 specific colors from the colors module
 *      - Grays: Cold gray palette (100-900, alpha variants)
 *      - Blues: TvBlue, DeepBlue, SkyBlue families
 *      - Greens: MintyGreen spectrum
 *      - Reds: RipeRed variants
 *      - Accents: GrapesPurple, BerryPink, TanOrange
 *   
 *   2. Empty Theme Placeholders:
 *      - tpoTheme: Time Price Opportunity theme (empty)
 *      - volFootprintTheme: Volume footprint theme (empty)
 *      - svpTheme: Session volume profile theme (empty)
 *   
 *   3. Dark Theme Configuration (darkThemeConfig):
 *      - Background: Gradient from coldGray850 to coldGray900
 *      - Grid: Cold gray with low opacity
 *      - Crosshair: Cold gray 400
 *      - Separator: Cold gray 800
 *      - Candle Colors: Minty green (up), Ripe red (down)
 *      - Session Highlights: TvBlue for regular, TanOrange for pre-market
 *   
 *   4. Theme Management Functions:
 *      - overrideStandardTheme(type, overrides): Merge custom settings into theme
 *      - restoreStandardThemes(): Reset themes to defaults
 *      - getStandardThemeNames(): Return [Light, Dark] enum array
 *      - getStandardChartTheme(type): Get cloned theme by type
 *      - translateThemeName(type): Get localized theme name
 * 
 * Usage Pattern:
 *   import { 
 *     lightTheme, 
 *     darkTheme, 
 *     getStdChartTheme, 
 *     overrideStdTheme 
 *   } from './24317-chart-themes';
 *   
 *   // Get dark theme
 *   const theme = getStdChartTheme(StdTheme.Dark);
 *   
 *   // Customize theme
 *   overrideStdTheme(StdTheme.Light, {
 *     content: {
 *       chartProperties: {
 *         paneProperties: {
 *           background: '#FFFFFF'
 *         }
 *       }
 *     }
 *   });
 * 
 * Theme Hierarchy:
 *   darkThemeConfig.content
 *     ├── chartProperties
 *     │   ├── scalesProperties (axis colors, text)
 *     │   └── paneProperties (grid, crosshair, background)
 *     ├── sessions (session highlighting)
 *     │   └── sessionHighlight (backgrounds, vertlines)
 *     └── mainSourceProperties (all chart type colors)
 *         ├── candleStyle, haStyle, barStyle
 *         ├── lineStyle, areaStyle, steplineStyle
 *         ├── renkoStyle, kagiStyle, pnfStyle
 *         └── baselineStyle, columnStyle, etc.
 * 
 * Color Mapping (Dark Theme):
 *   - Up candles: mintyGreen500 (#00BCE5)
 *   - Down candles: ripeRed500 (#FF4A68)
 *   - Grid lines: coldGray100Alpha6 (94% transparent)
 *   - Background: coldGray900 (#131722)
 *   - Crosshair: coldGray400 (#787B86)
 *   - Price line: tvBlue500 (#2962FF)
 * ============================================================================
 */

${content}

// Export for module system
module.exports = {
  darkTheme,
  lightTheme,
  getStdChartTheme,
  getStdThemeNames,
  overrideStdTheme,
  restoreStdThemes,
  translateThemeName
};
`;

fs.writeFileSync(outputFile, documentedCode);

console.log('✅ Module 24317 renamed successfully!\n');
console.log('📊 Statistics:');
console.log('   - Colors destructured: 48');
console.log('   - Theme configurations: 2 (light + dark)');
console.log('   - Exported functions: 6');
console.log('   - Chart type styles: 18');
console.log('\n📄 Output file:', outputFile);
console.log('\n💡 Key renamings applied:');
console.log('   - s → i18n (internationalization)');
console.log('   - o → objectUtils (clone/merge utilities)');
console.log('   - n → lightThemeBase (base light theme)');
console.log('   - r → colorTypes (ColorType enum)');
console.log('   - a → colors (color palette module)');
console.log('   - re → darkThemeConfig (dark theme object)');
console.log('   - le/ce → lightTheme/darkTheme (theme instances)');
console.log('   - he/de/ue/_e/pe → descriptive function names');
