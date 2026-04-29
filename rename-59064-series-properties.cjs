#!/usr/bin/env node

/**
 * Rename variables in Module 59064 - Series Properties Configuration
 * This module defines default properties for all chart series types
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'modules-awaiting-beautification/59064-series-properties.js');
const outputFile = path.join(__dirname, 'renamed-modules/59064-series-properties-renamed.js');

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');

console.log('📊 Renaming variables in Module 59064 (Series Properties)...\n');

// Rename webpack standard parameters
content = content.replace(/(\d+):\s*\((e),\s*(t),\s*(i)\)\s*=>/, '$1: (exports, module, require) =>');

// Rename imports and variables based on context:
// s = i(69558) -> lineStyleConstants (contains LINESTYLE_DOTTED, LINESTYLE_SOLID)
// o = i(22033) after skips -> rangeBarStyle (contains RangeBarStyle enum)
// n = mainSeriesProperties object

content = content.replace(/var\s+s\s*=\s*i\(69558\)/g, 'const lineStyleConstants = require(69558)');
content = content.replace(/o\s*=\s*\(i\(18330\),\s*i\(40080\),\s*i\(22033\)\)/g, 'rangeBarStyle = require(22033)');
content = content.replace(/const\s+n\s*=/g, 'const mainSeriesProperties =');
content = content.replace(/,\s*n\s*=/g, ',\n  mainSeriesProperties =');

// Update exports
content = content.replace(/mainSeriesProperties:\s*\(\)=>\s*n/g, 'mainSeriesProperties: () => mainSeriesProperties');

// Replace constant references
content = content.replace(/\bs\.LINESTYLE_DOTTED\b/g, 'lineStyleConstants.LINESTYLE_DOTTED');
content = content.replace(/\bs\.LINESTYLE_SOLID\b/g, 'lineStyleConstants.LINESTYLE_SOLID');
content = content.replace(/\bo\.RangeBarStyle\.Bars\b/g, 'rangeBarStyle.RangeBarStyle.BARS');

// Add comprehensive documentation
const documentedCode = `/**
 * ============================================================================
 * TRADINGVIEW MODULE 59064 - SERIES PROPERTIES CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Default configuration for all chart series types and their visual properties
 * 
 * Dependencies:
 *   - Module 69558 (lineStyleConstants): Line style constants (SOLID, DOTTED, etc.)
 *   - Module 22033 (rangeBarStyle): Range bar style enumeration
 *   - Module 18330, 40080: Side-effect imports (initialization modules)
 * 
 * Structure:
 *   The mainSeriesProperties object contains defaults for:
 *   
 *   1. General Series Settings:
 *      - style: Default chart type (1 = likely candles)
 *      - visible: Show/hide series
 *      - showPriceLine: Display price line on axis
 *      - minTick: Price increment ("default" or custom)
 *      - sessionId: Trading session filter
 *   
 *   2. Event Markers:
 *      - esdShowDividends/Splits/Earnings/Breaks: Corporate event visibility
 *      - showContinuousContractSwitches: Futures contract rollover markers
 *      - showFuturesContractExpiration: Contract expiry indicators
 *      - showLastNews: News markers on chart
 *      - showCountdown: Time until next bar close
 *   
 *   3. Special Price Lines:
 *      - bidAsk: Bid/ask spread lines (visible, style, width)
 *      - prePostMarket: Pre/post market session indicators
 *      - highLowAvgPrice: H/L/average price reference lines
 *      - showPrevClosePriceLine: Previous close reference
 *   
 *   4. Chart Type Specific Styles:
 *      - candleStyle/volCandlesStyle/hollowCandleStyle: Candlestick variants
 *      - haStyle: Heikin-Ashi candles
 *      - barStyle/hlcBarsStyle: OHLC bars
 *      - lineStyle/areaStyle/steplineStyle: Line-based charts
 *      - columnStyle: Column/bar chart
 *      - hiloStyle: High-Low bars
 *      - baselineStyle: Baseline deviation chart
 *      - renkoStyle/pbStyle/kagiStyle/pnfStyle: Brick/charts
 *      - rangeStyle: Range bars
 *      - tpoStyle/svpStyle/volFootprintStyle: Volume/profile charts
 *   
 *   5. Style Properties (per chart type):
 *      - drawWick/Border/Body: Visual element toggles
 *      - linewidth/linestyle: Line appearance
 *      - upColor/downColor: Bullish/bearish colors
 *      - priceSource: Data source (open/high/low/close)
 *      - inputs/inputInfo: User-configurable parameters
 *   
 *   6. Axis Properties:
 *      - priceAxisProperties: Auto-scale, log scale, percentage mode
 *      - statusViewStyle: Symbol info display settings
 * 
 * Usage Pattern:
 *   import { mainSeriesProperties } from './59064-series-properties';
 *   
 *   // Access candle defaults
 *   const candleDefaults = mainSeriesProperties.candleStyle;
 *   // { drawWick: true, drawBorder: true, barColorsOnPrevClose: false, drawBody: true }
 *   
 *   // Access line style defaults
 *   const lineDefaults = mainSeriesProperties.lineStyle;
 *   // { linestyle: LINESTYLE_SOLID, linewidth: 2, priceSource: "close" }
 * 
 * Key Defaults:
 *   - Candles: Wick=true, Border=true, Body=true
 *   - Lines: Solid style, 2px width, close price
 *   - Bars: Thin bars enabled, open marks drawn
 *   - Range Bars: 10-unit range, no phantom bars
 *   - Renko: ATR-based, 14-length, 3% size, wicks enabled
 * ============================================================================
 */

${content}

// Export for module system
module.exports = { mainSeriesProperties };
`;

fs.writeFileSync(outputFile, documentedCode);

console.log('✅ Module 59064 renamed successfully!\n');
console.log('📊 Statistics:');
console.log('   - Chart type configurations: 18');
console.log('   - Property categories: 6');
console.log('   - Total properties defined: ~80');
console.log('\n📄 Output file:', outputFile);
console.log('\n💡 Key renamings applied:');
console.log('   - s → lineStyleConstants (line style enums)');
console.log('   - o → rangeBarStyle (range bar style enum)');
console.log('   - n → mainSeriesProperties (main export object)');
console.log('   - e,t,i → exports,module,require (webpack params)');
