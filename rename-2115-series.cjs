#!/usr/bin/env node

/**
 * Rename variables in Module 2115 - Series (Chart Model Core)
 * This is the main Series class managing chart data, symbol resolution, and state
 */

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'beautified-modules-manual/2115.js');
const outputFile = path.join(__dirname, 'renamed-modules/2115-series.js');

if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');

console.log('📊 Renaming variables in Module 2115 (Series - Chart Model Core)...\n');

// Extract module header info
const headerMatch = content.match(/^(\/\/ Module \d+\n\/\/.*?\n\n)/s);
const moduleHeader = headerMatch ? headerMatch[1] : '';

// Remove old header for replacement
content = content.replace(/^(\/\/ Module \d+\n\/\/.*?\n\n)/s, '');

// Rename webpack standard parameters (e, t, i) => (exports, module, require)
content = content.replace(/(\d+):\s*\((e),\s*(t),\s*(i)\)\s*=>/, '$1: (exports, module, require) =>');

// Rename key imports based on dependency analysis
const importRenames = [
  ['var s = i(50279)', 'const defaultCompare = require(50279)'],
  ['o = i(50151)', 'assertionUtils = require(50151)'],
  ['n = i(9343)', 'loggerModule = require(9343)'],
  ['r = i(51768)', 'eventEmitter = require(51768)'],
  ['a = i(76422)', 'globalEmitter = require(76422)'],
  ['l = i(88723)', 'promiseUtils = require(88723)'],
  ['c = i(67135)', 'priceDataSource = require(67135)'],
  ['h = i(86572)', 'recalcReasons = require(86572)'],
  ['d = i(52746)', 'seriesData = require(52746)'],
  ['u = i(72187)', 'plotRowSearch = require(72187)'],
  ['_ = i(5471)', 'searchMode = require(5471)'],
  ['p = i(24062)', 'priceRange = require(24062)'],
  ['m = i(43337)', 'propertyModule = require(43337)'],
  ['g = i(95059)', 'symbolUtils = require(95059)'],
  ['f = i(92211)', 'symbolNameUtils = require(92211)'],
  ['y = i(30342)', 'priceFormatter = require(30342)'],
  ['v = i(67563)', 'intervalModule = require(67563)'],
  ['S = i(82095)', 'styleConstants = require(82095)'],
  ['b = i(13651)', 'statusViewBase = require(13651)'],
  ['w = i(11542)', 'i18n = require(11542)'],
  ['C = i(37103)', 'featureFlags = require(37103)'],
  ['T = i(19e3)', 'symbolDescription = require(19000)'],
  ['P = i(52479)', 'statusProviderBase = require(52479)'],
  ['x = i(75641)', 'intervalStrings = require(75641)'],
];

importRenames.forEach(([oldStr, newStr]) => {
  const regex = new RegExp(`\\b${oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
  content = content.replace(regex, newStr);
});

// Rename core class: wi -> Series
content = content.replace(/\bclass\s+wi\s+extends\s+c\.PriceDataSource/g, 'class Series extends priceDataSource.PriceDataSource');
content = content.replace(/\bSeries:\s*\(\)=>\s*wi/g, 'Series: () => Series');

// Rename key properties in Series constructor
const propertyRenames = [
  ['this\\._seriesSource', 'this._dataSource'],
  ['this\\._symbolInfo', 'this._symbolInfoWatched'],
  ['this\\._properties', 'this._seriesProperties'],
  ['this\\._model', 'this._chartModel'],
  ['this\\._priceScale', 'this._associatedPriceScale'],
  ['this\\._paneView', 'this._mainPaneView'],
  ['this\\._dataWindowView', 'this._legendDataWindowView'],
  ['this\\._legendView', 'this._seriesLegendView'],
  ['this\\._statusView', 'this._seriesStatusView'],
  ['this\\._barColorerCache', 'this._cachedBarColorer'],
  ['this\\._formatter', 'this._activePriceFormatter'],
  ['this\\._defaultFormatter', 'this._defaultPriceFormatter'],
  ['this\\._quotesProvider', 'this._quotesDataProvider'],
  ['this\\._marketStatusModel', 'this._marketStatusTracker'],
  ['this\\._studyBindings', 'this._attachedStudyBindings'],
  ['this\\._lastPriceAnimationActive', 'this._pulseAnimationActive'],
  ['this\\._seriesLoaded', 'this._dataLoadComplete'],
  ['this\\._seriesCompleted', 'this._seriesInitializationComplete'],
  ['this\\._seriesErrorMessage', 'this._resolutionErrorMessage'],
  ['this\\._unsupportedResolutionState', 'this._unsupportedResolutionInfo'],
];

propertyRenames.forEach(([oldProp, newProp]) => {
  const regex = new RegExp(oldProp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  content = content.replace(regex, newProp);
});

// Rename key methods
const methodRenames = [
  ['\\b_onSymbolResolved\\b', '_onSymbolDataResolved'],
  ['\\b_onSymbolError\\b', '_onSymbolResolveError'],
  ['\\b_onSeriesLoading\\b', '_onSeriesDataLoading'],
  ['\\b_onSeriesCompleted\\b', '_onSeriesDataCompleted'],
  ['\\b_onDataUpdated\\b', '_onSeriesDataUpdated'],
  ['\\b_onBarReceived\\b', '_onNewBarReceived'],
  ['\\b_requestMoreData\\b', '_requestDataFromServer'],
  ['\\bisNeedRestart\\b', 'requiresRestartForStyleChange'],
  ['\\bonChartStyleChanged\\b', 'handleChartStyleChange'],
  ['\\bsetSymbolParams\\b', 'applySymbolParameters'],
  ['\\bupdateAllViews\\b', 'refreshAllComponentViews'],
  ['\\blastValueData\\b', 'getLatestPriceValue'],
  ['\\bpriceScale\\b', 'getPriceScale'],
  ['\\bbars\\b', 'getBarData'],
  ['\\bdata\\b', 'getSeriesData'],
  ['\\bsymbolInfo\\b', 'getSymbolMetadata'],
  ['\\binterval\\b', 'getCurrentInterval'],
  ['\\bstyle\\b', 'getChartStyle'],
  ['\\bproperties\\b', 'getSeriesProperties'],
  ['\\bmodel\\b', 'getChartModel'],
  ['\\bid\\b', 'getSourceId'],
  ['\\bisVisible\\b', 'isSourceVisible'],
  ['\\bfirstValue\\b', 'getFirstPriceValue'],
  ['\\bnearestIndex\\b', 'findNearestBarIndex'],
  ['\\bclearData\\b', 'clearCachedData'],
  ['\\brestart\\b', 'restartDataStream'],
  ['\\binvalidateBarStylesCache\\b', 'invalidateCachedBarStyles'],
];

methodRenames.forEach(([oldMethod, newMethod]) => {
  // Replace method definitions
  const defRegex = new RegExp(`(${oldMethod})\\s*\\(`, 'g');
  content = content.replace(defRegex, `${newMethod}(`);
  
  // Replace method calls (this.method or object.method)
  const callRegex = new RegExp(`(\\.\\s*)${oldMethod}\\s*\\(`, 'g');
  content = content.replace(callRegex, `$1${newMethod}(`);
});

// Rename event delegates
const delegateRenames = [
  ['this\\._onRestarted', 'this._seriesRestartedDelegate'],
  ['this\\._onStatusChanged', 'this._seriesStatusChangedDelegate'],
  ['this\\._symbolIntervalChanged', 'this._symbolOrIntervalChangedDelegate'],
  ['this\\._intervalChanged', 'this._intervalChangedDelegate'],
  ['this\\._onStyleChanged', 'this._chartStyleChangedDelegate'],
  ['this\\._tagsChanged', 'this._seriesTagsChangedDelegate'],
  ['this\\._sessionIdChanged', 'this._sessionChangedDelegate'],
  ['this\\._currencyChanged', 'this._currencyChangedDelegate'],
  ['this\\._unitChanged', 'this._unitChangedDelegate'],
  ['this\\._formatterChanged', 'this._formatterChangedDelegate'],
  ['this\\._priceStepChanged', 'this._priceStepChangedDelegate'],
  ['this\\._dataRangeUpdated', 'this._dataRangeUpdatedDelegate'],
];

delegateRenames.forEach(([oldDel, newDel]) => {
  const regex = new RegExp(oldDel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  content = content.replace(regex, newDel);
});

// Add comprehensive documentation at the top
const documentation = `/**
 * ============================================================================
 * TRADINGVIEW MODULE 2115 - SERIES (CHART MODEL CORE)
 * ============================================================================
 *
 * Purpose: Main Series class that manages chart data, symbol resolution, 
 *          state management, and rendering coordination
 *
 * Size: ~110 KB (one of the largest core modules)
 * 
 * Key Responsibilities:
 *   1. Symbol Resolution & Management
 *      - Resolves symbols via gateway (resolveSymbol API)
 *      - Manages symbol metadata (pricescale, minmov, session, timezone)
 *      - Handles currency/unit conversions
 *      - Tracks symbol lifecycle (loading → completed → error states)
 *
 *   2. Data Management
 *      - Interfaces with SeriesDataSource (module 48096 Delegate pattern)
 *      - Merges regular bars + non-series data (projections, future bars)
 *      - Manages bar caching and invalidation
 *      - Handles data updates (realtime streaming, historical loads)
 *      - Supports multiple data modes: streaming, delayed, EOD, replay
 *
 *   3. Chart Style Management
 *      - Supports 20+ chart styles: Candle, Bar, Line, Area, HA, Renko, 
 *        Kagi, PnF, Range, Volume Footprint, TPO, SVP, etc.
 *      - Style-specific property trees (candleStyle, lineStyle, haStyle...)
 *      - Style change detection and restart logic
 *      - Bar colorer caching per style
 *
 *   4. Price Scale Integration
 *      - Associates with primary/overlay price scales
 *      - Manages price formatting (formatter, priceStep, minTick)
 *      - Coordinates auto-scaling with studies
 *      - Handles log/percentage/indexed modes
 *
 *   5. Event System (via Delegate pattern from module 48096)
 *      - symbolResolved / symbolError
 *      - seriesLoading / seriesCompleted / seriesError
 *      - dataUpdated / barReceived
 *      - intervalChanged / statusChanged / restarted
 *      - unsupportedResolutionRequested
 *
 *   6. View Coordination
 *      - Pane views (candles, lines, markers)
 *      - Price axis views (last value, countdown, OHLC labels)
 *      - Legend view (dynamic values panel)
 *      - Status view (symbol info in status bar)
 *      - Floating tooltip (crosshair values)
 *      - Data window (left panel values)
 *
 *   7. Study Bindings
 *      - Attaches studies to series (e.g., HA study for candle style)
 *      - Syncs study inputs with series properties
 *      - Manages study lifecycle with series
 *
 *   8. Advanced Features
 *      - Last price pulse animation (green/red circle)
 *      - Countdown timer to bar close (DWM intervals)
 *      - Extended hours / pre-post market sessions
 *      - Settlement-as-close, backadjustment, dividends adjustment
 *      - Goto date navigation
 *      - Replay mode support (switchToReplay/switchToRealtime)
 *      - Left edge preservation across symbol changes
 *
 * Class Hierarchy:
 *   Series extends PriceDataSource (module 67135)
 *     ↳ Source (base class with id, model, properties, z-order)
 *
 * State Machine:
 *   Idle (0) → Loading (2) → Completed (5)
 *                     ↓
 *                  Error (4, 10, 12, 14)
 *   
 *   Status codes:
 *   - 0: Idle/Unknown
 *   - 1: Applying changes
 *   - 2: Loading data
 *   - 3: Streaming (realtime)
 *   - 4: Symbol error
 *   - 5: Completed (historical loaded)
 *   - 6: End of day
 *   - 8: Delayed
 *   - 9: Delayed + streaming
 *   - 10: Unknown symbol
 *   - 11: Replay mode
 *   - 12: General error
 *   - 14: Unsupported resolution
 *
 * Dependencies (Key Modules):
 *   - 48096: Delegate (event system)
 *   - 52746: SeriesData (bar storage)
 *   - 50279: Default compare utility
 *   - 50151: Assertion utilities
 *   - 9343: Logger
 *   - 37103: Feature flags (enabled())
 *   - 11542: i18n translations
 *   - 95059: Symbol utilities
 *   - 30342: Price formatter
 *   - 67563: Interval parsing
 *
 * Thread Safety:
 *   - All operations on main UI thread
 *   - Async operations via Promises (symbol resolution, data fetch)
 *   - Event delegation ensures decoupled updates
 *
 * Performance Optimizations:
 *   - Bar colorer cache (WeakMap)
 *   - Precomputed bar styles cache
 *   - Gradient color cache for last price
 *   - High/Low/Average price caches
 *   - Lazy view initialization
 *   - Batched invalidations
 *
 * @module 2115
 * @class Series
 * @extends PriceDataSource
 */

`;

// Combine header + documentation + code
const finalContent = moduleHeader + documentation + '\n' + content;

// Write output file
fs.writeFileSync(outputFile, finalContent, 'utf8');

console.log('✅ Successfully renamed Module 2115');
console.log(`📄 Output: ${outputFile}`);
console.log('\n📊 Key renames applied:');
console.log('   • Class: wi → Series');
console.log('   • Properties: _seriesSource → _dataSource, _symbolInfo → _symbolInfoWatched, etc.');
console.log('   • Methods: _onSymbolResolved → _onSymbolDataResolved, requestMoreData → _requestDataFromServer, etc.');
console.log('   • Delegates: _onRestarted → _seriesRestartedDelegate, etc.');
console.log('\n💡 Next steps:');
console.log('   1. Review the renamed file for accuracy');
console.log('   2. Test integration with dependent modules');
console.log('   3. Update dependency documentation');
