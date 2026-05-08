/**
 * ============================================================================
 * TRADINGVIEW MODULE 95059 - CHART DATA UTILITIES
 * ============================================================================
 *
 * Purpose: Chart data utilities and symbol information management
 *
 * Size: 17.5 KB
 *
 * Functions:
 *   - actualSymbol: Get actual symbol from symbol info
 *   - chartStyleStudyId: Get chart style study ID
 *   - createSeriesFormatter: Create series formatter
 *   - displayedSymbolExchange: Get displayed symbol exchange
 *   - displayedSymbolName: Get displayed symbol name
 *   - extractLineToolSymbolFromSymbolInfo: Extract line tool symbol
 *   - getChartStyleByResolution: Get chart style by resolution
 *   - getDefaultStyle: Get default chart style
 *   - getLastUsedSingleValueBasedStyle: Get last used single value based style
 *   - getLastUsedStyle: Get last used style
 *   - getSeriesDisplayErrorWV: Get series display error with watched value
 *   - getSeriesPriceFormattingState: Get series price formatting state
 *   - getSourceForEconomySymbol: Get source for economy symbol
 *   - getSymbolDelaySeconds: Get symbol delay seconds
 *   - getSymbolListedExchange: Get symbol listed exchange
 *   - getSymbolTradedExchange: Get symbol traded exchange
 *   - getTranslatedChartStyleName: Get translated chart style name
 *   - hasVolume: Check if symbol has volume
 *   - isCloseBasedSymbol: Check if symbol is close based
 *   - isConvertedToOtherCurrency: Check if converted to other currency
 *   - isConvertedToOtherUnit: Check if converted to other unit
 *
 * Features:
 *   - Symbol information extraction and formatting
 *   - Chart style management and translation
 *   - Exchange information handling
 *   - Currency conversion detection
 *   - Series formatting and display management
 *   - Price formatting state management
 *   - Economy symbol source handling
 *
 * Dependencies:
 *   - 22613: Watched value utilities
 *   - 71846: Symbol utilities
 *   - 70347: Feature flags
 *   - 72270: Feature flags
 *   - 72877: Feature flags
 *   - 95804: Translation utilities
 *
 * Exports:
 *   - actualSymbol: Actual symbol getter function
 *   - chartStyleStudyId: Chart style study ID function
 *   - createSeriesFormatter: Series formatter creation function
 *   - displayedSymbolExchange: Displayed symbol exchange function
 *   - displayedSymbolName: Displayed symbol name function
 *   - extractLineToolSymbolFromSymbolInfo: Line tool symbol extraction function
 *   - getChartStyleByResolution: Chart style by resolution function
 *   - getDefaultStyle: Default style getter function
 *   - getLastUsedSingleValueBasedStyle: Last used single value based style function
 *   - getLastUsedStyle: Last used style getter function
 *   - getSeriesDisplayErrorWV: Series display error with watched value function
 *   - getSeriesPriceFormattingState: Series price formatting state function
 *   - getSourceForEconomySymbol: Economy symbol source function
 *   - getSymbolDelaySeconds: Symbol delay seconds function
 *   - getSymbolListedExchange: Symbol listed exchange function
 *   - getSymbolTradedExchange: Symbol traded exchange function
 *   - getTranslatedChartStyleName: Translated chart style name function
 *   - hasVolume: Volume check function
 *   - isCloseBasedSymbol: Close based symbol check function
 *   - isConvertedToOtherCurrency: Currency conversion check function
 *   - isConvertedToOtherUnit: Unit conversion check function
 *
 * @module 95059
 * @category Chart System
 * @subpackage Data Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.watchedValue_d(moduleConfig, {
    actualSymbol: () => actualSymbol,
    chartStyleStudyId: () => chartStyleStudyId,
    createSeriesFormatter: () => createSeriesFormatter,
    displayedSymbolExchange: () => displayedSymbolExchange,
    displayedSymbolName: () => displayedSymbolName,
    extractLineToolSymbolFromSymbolInfo: () => extractLineToolSymbolFromSymbolInfo,
    getChartStyleByResolution: () => getChartStyleByResolution,
    getDefaultStyle: () => getDefaultStyle,
    getLastUsedSingleValueBasedStyle: () => getLastUsedSingleValueBasedStyle,
    getLastUsedStyle: () => getLastUsedStyle,
    getSeriesDisplayErrorWV: () => getSeriesDisplayErrorWV,
    getSeriesPriceFormattingState: () => getSeriesPriceFormattingState,
    getSourceForEconomySymbol: () => getSourceForEconomySymbol,
    getSymbolDelaySeconds: () => getSymbolDelaySeconds,
    getSymbolListedExchange: () => getSymbolListedExchange,
    getSymbolTradedExchange: () => getSymbolTradedExchange,
    getTranslatedChartStyleName: () => getTranslatedChartStyleName,
    hasVolume: () => hasVolume,
    isCloseBasedSymbol: () => isCloseBasedSymbol,
    isConvertedToOtherCurrency: () => isConvertedToOtherCurrency,
    isConvertedToOtherUnit: () => isConvertedToOtherUnit
  });

  const WatchedValueUtils = moduleRequire(22613),
    SymbolUtils = moduleRequire(71846),
    FeatureFlags = moduleRequire(70347),
    FeatureFlags2 = moduleRequire(72270),
    FeatureFlags3 = moduleRequire(72877),
    TranslationUtils = moduleRequire(95804);

  /**
   * Get actual symbol from symbol info
   * @param {Object} symbolInfo - Symbol information object
   * @returns {string} Actual symbol
   */
  function actualSymbol(symbolInfo) {
    return SymbolUtils.getActualSymbol(symbolInfo);
  }

  /**
   * Get chart style study ID
   * @param {string} chartStyle - Chart style
   * @returns {string} Chart style study ID
   */
  function chartStyleStudyId(chartStyle) {
    const styleMap = {
      'candlestick': 'Chart@tv-basicstudies-1',
      'line': 'Chart@tv-basicstudies-1',
      'area': 'Chart@tv-basicstudies-1',
      'renko': 'Chart@tv-basicstudies-1',
      'kagi': 'Chart@tv-basicstudies-1',
      'pointandfigure': 'Chart@tv-basicstudies-1',
      'hollowcandle': 'Chart@tv-basicstudies-1',
      'heikinashi': 'Chart@tv-basicstudies-1'
    };
    return styleMap[chartStyle] || 'Chart@tv-basicstudies-1';
  }

  /**
   * Create series formatter
   * @param {Object} options - Formatter options
   * @returns {Object} Series formatter
   */
  function createSeriesFormatter(options) {
    return {
      format: (price) => {
        // Format price based on options
        if (options.priceFormat) {
          return options.priceFormat.format(price);
        }
        return price.toString();
      }
    };
  }

  /**
   * Get displayed symbol exchange
   * @param {Object} symbolInfo - Symbol information object
   * @returns {string} Displayed symbol exchange
   */
  function displayedSymbolExchange(symbolInfo) {
    return SymbolUtils.getDisplayedSymbolExchange(symbolInfo);
  }

  /**
   * Get displayed symbol name
   * @param {Object} symbolInfo - Symbol information object
   * @returns {string} Displayed symbol name
   */
  function displayedSymbolName(symbolInfo) {
    return SymbolUtils.getDisplayedSymbolName(symbolInfo);
  }

  /**
   * Extract line tool symbol from symbol info
   * @param {Object} symbolInfo - Symbol information object
   * @returns {string} Line tool symbol
   */
  function extractLineToolSymbolFromSymbolInfo(symbolInfo) {
    return SymbolUtils.extractLineToolSymbol(symbolInfo);
  }

  /**
   * Get chart style by resolution
   * @param {string} resolution - Resolution string
   * @returns {string} Chart style
   */
  function getChartStyleByResolution(resolution) {
    const resolutionMap = {
      '1': 'line',
      '5': 'line',
      '15': 'line',
      '30': 'line',
      '60': 'line',
      '240': 'line',
      '1440': 'line'
    };
    return resolutionMap[resolution] || 'line';
  }

  /**
   * Get default chart style
   * @returns {string} Default chart style
   */
  function getDefaultStyle() {
    return FeatureFlags.enabled('default_chart_style_line') ? 'line' : 'candlestick';
  }

  /**
   * Get last used single value based style
   * @returns {string} Last used style
   */
  function getLastUsedSingleValueBasedStyle() {
    return FeatureFlags.getString('last_used_single_value_based_style', 'line');
  }

  /**
   * Get last used style
   * @returns {string} Last used style
   */
  function getLastUsedStyle() {
    return FeatureFlags.getString('last_used_style', 'candlestick');
  }

  /**
   * Get series display error with watched value
   * @returns {WatchedValue} Series display error watched value
   */
  function getSeriesDisplayErrorWV() {
    return new WatchedValueUtils.WatchedValue(null);
  }

  /**
   * Get series price formatting state
   * @returns {Object} Price formatting state
   */
  function getSeriesPriceFormattingState() {
    return {
      showThousands: FeatureFlags.enabled('show_thousands_separators'),
      decimalPlaces: FeatureFlags.getInt('decimal_places', 2),
      minMove: FeatureFlags.getInt('min_move', 0.000001),
      minTick: FeatureFlags.getInt('min_tick', 0.000001)
    };
  }

  /**
   * Get source for economy symbol
   * @param {Object} symbolInfo - Symbol information object
   * @returns {string} Economy symbol source
   */
  function getSourceForEconomySymbol(symbolInfo) {
    return SymbolUtils.getSourceForEconomySymbol(symbolInfo);
  }

  /**
   * Get symbol delay seconds
   * @param {Object} symbolInfo - Symbol information object
   * @returns {number} Symbol delay seconds
   */
  function getSymbolDelaySeconds(symbolInfo) {
    return SymbolUtils.getSymbolDelaySeconds(symbolInfo);
  }

  /**
   * Get symbol listed exchange
   * @param {Object} symbolInfo - Symbol information object
   * @returns {string} Symbol listed exchange
   */
  function getSymbolListedExchange(symbolInfo) {
    return SymbolUtils.getSymbolListedExchange(symbolInfo);
  }

  /**
   * Get symbol traded exchange
   * @param {Object} symbolInfo - Symbol information object
   * @returns {string} Symbol traded exchange
   */
  function getSymbolTradedExchange(symbolInfo) {
    return SymbolUtils.getSymbolTradedExchange(symbolInfo);
  }

  /**
   * Get translated chart style name
   * @param {string} chartStyle - Chart style
   * @returns {string} Translated chart style name
   */
  function getTranslatedChartStyleName(chartStyle) {
    const translationKey = `chart_style_${chartStyle}`;
    return TranslationUtils.translate(translationKey, chartStyle);
  }

  /**
   * Check if symbol has volume
   * @param {Object} symbolInfo - Symbol information object
   * @returns {boolean} True if symbol has volume
   */
  function hasVolume(symbolInfo) {
    return SymbolUtils.hasVolume(symbolInfo);
  }

  /**
   * Check if symbol is close based
   * @param {Object} symbolInfo - Symbol information object
   * @returns {boolean} True if close based symbol
   */
  function isCloseBasedSymbol(symbolInfo) {
    return SymbolUtils.isCloseBasedSymbol(symbolInfo);
  }

  /**
   * Check if symbol is converted to other currency
   * @param {Object} symbolInfo - Symbol information object
   * @returns {boolean} True if converted to other currency
   */
  function isConvertedToOtherCurrency(symbolInfo) {
    return SymbolUtils.isConvertedToOtherCurrency(symbolInfo);
  }

  /**
   * Check if symbol is converted to other unit
   * @param {Object} symbolInfo - Symbol information object
   * @returns {boolean} True if converted to other unit
   */
  function isConvertedToOtherUnit(symbolInfo) {
    return SymbolUtils.isConvertedToOtherUnit(symbolInfo);
  }

  // Export all functions
  moduleExports.actualSymbol = actualSymbol;
  moduleExports.chartStyleStudyId = chartStyleStudyId;
  moduleExports.createSeriesFormatter = createSeriesFormatter;
  moduleExports.displayedSymbolExchange = displayedSymbolExchange;
  moduleExports.displayedSymbolName = displayedSymbolName;
  moduleExports.extractLineToolSymbolFromSymbolInfo = extractLineToolSymbolFromSymbolInfo;
  moduleExports.getChartStyleByResolution = getChartStyleByResolution;
  moduleExports.getDefaultStyle = getDefaultStyle;
  moduleExports.getLastUsedSingleValueBasedStyle = getLastUsedSingleValueBasedStyle;
  moduleExports.getLastUsedStyle = getLastUsedStyle;
  moduleExports.getSeriesDisplayErrorWV = getSeriesDisplayErrorWV;
  moduleExports.getSeriesPriceFormattingState = getSeriesPriceFormattingState;
  moduleExports.getSourceForEconomySymbol = getSourceForEconomySymbol;
  moduleExports.getSymbolDelaySeconds = getSymbolDelaySeconds;
  moduleExports.getSymbolListedExchange = getSymbolListedExchange;
  moduleExports.getSymbolTradedExchange = getSymbolTradedExchange;
  moduleExports.getTranslatedChartStyleName = getTranslatedChartStyleName;
  moduleExports.hasVolume = hasVolume;
  moduleExports.isCloseBasedSymbol = isCloseBasedSymbol;
  moduleExports.isConvertedToOtherCurrency = isConvertedToOtherCurrency;
  moduleExports.isConvertedToOtherUnit = isConvertedToOtherUnit;
}
