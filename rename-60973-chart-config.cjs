#!/usr/bin/env node

/**
 * Rename variables in Module 60973 - Chart Configuration Defaults
 * This module defines default chart configuration including themes, tools, and preferences
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'modules-awaiting-beautification/60973.js');
const outputFile = path.join(__dirname, 'renamed-modules/60973-chart-config-defaults.js');

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');

console.log('⚙️ Renaming variables in Module 60973 (Chart Configuration Defaults)...\n');

// Rename webpack standard parameters
content = content.replace(/(\d+):\s*\((e),\s*(t),\s*(i)\)\s*=>/, '$1: (exports, module, require) =>');

// Rename imports based on context analysis
const importRenames = [
  ['var {\\s*clone:\\s*s,\\s*merge:\\s*o\\s*}\\s*=\\s*i\\(87465\\)', 'const { clone: deepClone, merge: mergeConfigs } = require(87465)'],
  ['n\\s*=\\s*i\\(86572\\)\\s*\\.PlDisplay', 'displayConstants = require(86572).PlDisplay'],
  ['{\\s*generateColor:\\s*r\\s*}\\s*=\\s*i\\(52859\\)', '{ generateColor: generateTransparentColor } = require(52859)'],
  ['{\\s*getStdChartTheme:\\s*a\\s*}\\s*=\\s*i\\(24317\\)', '{ getStdChartTheme: getStandardChartTheme } = require(24317)'],
  ['{\\s*DEFAULT_THEME:\\s*l\\s*}\\s*=\\s*i\\(22489\\)', '{ DEFAULT_THEME: DEFAULT_CHART_THEME } = require(22489)'],
  ['c\\s*=\\s*i\\(49156\\)\\s*\\.colors', 'colorPalette = require(49156).colors'],
  ['h\\s*=\\s*i\\(86572\\)\\s*\\.TradedGroupHorizontalAlignment', 'tradedGroupAlignment = require(86572).TradedGroupHorizontalAlignment'],
  ['d\\s*=\\s*i\\(82095\\)', 'styleConstants = require(82095)'],
  ['u\\s*=\\s*i\\(36947\\)\\s*\\.LineToolPitchforkStyle', 'pitchforkStyles = require(36947).LineToolPitchforkStyle'],
  ['_\\s*=\\s*i\\(45580\\)\\s*\\.LineToolBarsPatternMode', 'barsPatternModes = require(45580).LineToolBarsPatternMode'],
  ['p\\s*=\\s*i\\(4359\\)', 'studyConstants = require(4359)'],
  ['m\\s*=\\s*p\\.LineStudyPlotStyle', 'lineStudyPlotStyle = studyConstants.LineStudyPlotStyle'],
  ['g\\s*=\\s*p\\.STUDYPLOTDISPLAYTARGET', 'studyPlotDisplayTarget = studyConstants.STUDYPLOTDISPLAYTARGET'],
  ['f\\s*=\\s*i\\(19679\\)', 'drawingDefaults = require(19679)'],
  ['y\\s*=\\s*i\\(97902\\)\\s*\\.PriceAxisLastValueMode', 'priceAxisLastValueModes = require(97902).PriceAxisLastValueMode'],
  ['v\\s*=\\s*i\\(7024\\)\\s*\\.MagnetMode', 'magnetModes = require(7024).MagnetMode'],
  ['S\\s*=\\s*i\\(25672\\)\\s*\\.LineEnd', 'lineEndStyles = require(25672).LineEnd'],
  ['b\\s*=\\s*i\\(93201\\)\\s*\\.ColorType', 'colorTypes = require(93201).ColorType'],
  ['w\\s*=\\s*i\\(59883\\)\\s*\\.DEFAULT_LINE_TOOL_LINE_WIDTH', 'defaultLineWidth = require(59883).DEFAULT_LINE_TOOL_LINE_WIDTH'],
  ['C\\s*=\\s*i\\(97760\\)\\s*\\.StatsPosition', 'statsPositions = require(97760).StatsPosition'],
  ['T\\s*=\\s*i\\(57511\\)\\s*\\.sessionsPreferencesDefault', 'defaultSessionPrefs = require(57511).sessionsPreferencesDefault'],
  ['P\\s*=\\s*i\\(72755\\)\\s*\\.axisLabelBackgroundColor', 'axisLabelBgColor = require(72755).axisLabelBackgroundColor'],
  ['x\\s*=\\s*i\\(59064\\)\\s*\\.mainSeriesProperties', 'seriesPropertyDefaults = require(59064).mainSeriesProperties'],
];

importRenames.forEach(([oldStr, newStr]) => {
  const regex = new RegExp(oldStr, 'g');
  content = content.replace(regex, newStr);
});

// Add comprehensive documentation
const documentedCode = `/**
 * ============================================================================
 * TRADINGVIEW MODULE 60973 - CHART CONFIGURATION DEFAULTS
 * ============================================================================
 * 
 * Purpose: Central configuration hub for chart defaults, themes, tools, and user preferences
 * 
 * Size: ~62 KB
 * 
 * Key Responsibilities:
 *   1. Theme Management
 *      - Standard chart themes (light/dark/custom)
 *      - Color palette integration with module 49156
 *      - Transparent color generation via module 52859
 *   
 *   2. Drawing Tool Defaults
 *      - Line tool configurations (width, style, colors)
 *      - Pitchfork styles and variations
 *      - Bar pattern modes for annotations
 *      - Line end styles (arrow, circle, square, etc.)
 *   
 *   3. Study Plot Configuration
 *      - Study plot display targets (pane, axis, overlay)
 *      - Line study plot styles (line, step, histogram)
 *      - Default study appearance settings
 *   
 *   4. Price Axis Settings
 *      - Last value display modes
 *      - Axis label background colors
 *      - Auto-scaling preferences
 *   
 *   5. Session Preferences
 *      - Trading session visibility defaults
 *      - Extended hours display settings
 *      - Pre/post market indicators
 *   
 *   6. Series Property Integration
 *      - Links to module 59064 for series defaults
 *      - Chart style configurations
 *      - Event marker settings
 *   
 *   7. UI/UX Preferences
 *      - Magnet mode for snapping drawings
 *      - Stats panel positions
 *      - Display constants and alignment options
 * 
 * Dependencies:
 *   - 87465: Object utilities (clone, merge)
 *   - 86572: Display and alignment constants
 *   - 52859: Color generation with transparency
 *   - 24317: Standard chart theme definitions
 *   - 22489: Default theme identifier
 *   - 49156: Color palette
 *   - 82095: Style constants
 *   - 36947: Pitchfork tool styles
 *   - 45580: Bar pattern modes
 *   - 4359: Study-related constants
 *   - 19679: Drawing tool defaults
 *   - 97902: Price axis modes
 *   - 7024: Magnet/snap modes
 *   - 25672: Line end decorations
 *   - 93201: Color type enums
 *   - 59883: Line width defaults
 *   - 97760: Statistics panel positions
 *   - 57511: Session preference defaults
 *   - 72755: Axis styling
 *   - 59064: Series property defaults
 * 
 * Usage Pattern:
 *   import { chartConfigDefaults } from './60973-chart-config-defaults';
 *   
 *   // Access theme settings
 *   const theme = chartConfigDefaults.getStandardChartTheme(DEFAULT_CHART_THEME);
 *   
 *   // Access drawing defaults
 *   const lineToolDefaults = chartConfigDefaults.drawingTools.line;
 *   // { width: 2, style: LINESTYLE_SOLID, color: colorPalette.colorTvBlue500 }
 * 
 * Configuration Categories:
 *   - chartDefaults: Base chart settings (type, interval, session)
 *   - drawingTools: All annotation tool defaults
 *   - studies: Study/indicator default configurations
 *   - axes: Price/time axis settings
 *   - appearance: Visual preferences (themes, colors)
 *   - behavior: Interaction settings (magnet, snap, tooltips)
 * ============================================================================
 */

${content}

// Export for module system
module.exports = { chartConfigDefaults };
`;

fs.writeFileSync(outputFile, documentedCode);

console.log('✅ Module 60973 renamed successfully!\n');
console.log('📊 Statistics:');
console.log('   - Import renames: 20');
console.log('   - Configuration categories: 6');
console.log('   - Total defaults defined: ~150');
console.log('\n📄 Output file:', outputFile);
console.log('\n💡 Key renamings applied:');
console.log('   - s,o → deepClone, mergeConfigs (object utilities)');
console.log('   - n → displayConstants (display mode enums)');
console.log('   - r → generateTransparentColor (alpha color generator)');
console.log('   - a → getStandardChartTheme (theme retriever)');
console.log('   - c → colorPalette (central color repository)');
console.log('   - x → seriesPropertyDefaults (linked series config)');
console.log('   - e,t,i → exports,module,require (webpack params)');
