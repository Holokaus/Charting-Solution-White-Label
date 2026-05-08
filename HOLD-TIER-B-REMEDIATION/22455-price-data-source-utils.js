/**
 * ============================================================================
 * TRADINGVIEW MODULE 22455 - PRICE DATA SOURCE UTILITIES
 * ============================================================================
 *
 * Purpose: Price data source utilities and validation functions
 *
 * Size: 1.0 KB
 *
 * Functions:
 *   - isActingAsSymbolSource: Check if acting as symbol source
 *   - isSymbolSource: Check if symbol source
 *   - isSymbolSourceWithQuotesProvider: Check if symbol source with quotes provider
 *
 * Features:
 *   - Price data source validation
 *   - Symbol source detection
 *   - Quotes provider validation
 *   - Data source type checking
 *   - Symbol source behavior analysis
 *
 * Dependencies:
 *   - None (standalone module)
 *
 * Exports:
 *   - isActingAsSymbolSource: Acting as symbol source check function
 *   - isSymbolSource: Symbol source check function
 *   - isSymbolSourceWithQuotesProvider: Symbol source with quotes provider check function
 *
 * @module 22455
 * @category Data Management
 * @subpackage Price Data Source
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.priceDataSource_d(moduleConfig, {
    isActingAsSymbolSource: () => isActingAsSymbolSource,
    isSymbolSource: () => isSymbolSource,
    isSymbolSourceWithQuotesProvider: () => isSymbolSourceWithQuotesProvider
  });

  /**
   * Check if acting as symbol source
   * @param {Object} priceDataSource - Price data source object
   * @returns {boolean} True if acting as symbol source
   */
  function isActingAsSymbolSource(priceDataSource) {
    return priceDataSource?.symbolSource && 
           priceDataSource.symbolSource() === priceDataSource || 
           void 0 !== priceDataSource?.isActingAsSymbolSource;
  }

  /**
   * Check if symbol source
   * @param {Object} priceDataSource - Price data source object
   * @returns {boolean} True if symbol source
   */
  function isSymbolSource(priceDataSource) {
    return isActingAsSymbolSource(priceDataSource) && 
           "quotesProvider" in priceDataSource;
  }

  /**
   * Check if symbol source with quotes provider
   * @param {Object} priceDataSource - Price data source object
   * @returns {boolean} True if symbol source with quotes provider
   */
  function isSymbolSourceWithQuotesProvider(priceDataSource) {
    return isActingAsSymbolSource(priceDataSource) && 
           priceDataSource.isActingAsSymbolSource().value();
  }
}
