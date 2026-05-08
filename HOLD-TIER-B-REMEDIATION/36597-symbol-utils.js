/**
 * ============================================================================
 * TRADINGVIEW MODULE 36597 - SYMBOL UTILS
 * ============================================================================
 *
 * Purpose: Symbol comparison and parameter utilities
 *
 * Size: 2.2 KB
 *
 * Functions:
 *   - areEqualSymbols: Check if symbols are equal
 *   - compareSymbolParams: Compare symbol parameters
 *   - symbolParams: Get symbol parameters
 *   - symbolSameAsCurrent: Check if symbol matches current
 *
 * Features:
 *   - Symbol comparison utilities
 *   - Parameter matching
 *   - Currency and instrument handling
 *   - Case-insensitive comparison
 *
 * Dependencies:
 *   - 37103: Symbol utilities
 *   - 95059: Symbol utilities
 *   - 46082: Symbol utilities
 *
 * Exports:
 *   - areEqualSymbols: Symbol equality check function
 *   - compareSymbolParams: Symbol parameter comparison function
 *   - symbolParams: Symbol parameter getter function
 *   - symbolSameAsCurrent: Symbol current comparison function
 *
 * @module 36597
 * @category Data Management
 * @subpackage Symbol Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.priceDataSource_d(moduleConfig, {
    areEqualSymbols: () => areEqualSymbols,
    compareSymbolParams: () => compareSymbolParams,
    symbolParams: () => symbolParams,
    symbolSameAsCurrent: () => symbolSameAsCurrent
  });

  const SymbolUtils = moduleRequire(37103),
    SymbolParams = moduleRequire(95059),
    SymbolUtils2 = moduleRequire(46082);

  /**
   * Check if two symbols are equal
   * @param {string} symbol1 - First symbol
   * @param {string} symbol2 - Second symbol
   * @returns {boolean} True if symbols are equal
   */
  function areEqualSymbols(symbol1, symbol2) {
    return SymbolUtils.areEqualSymbols(symbol1, symbol2);
  }

  /**
   * Compare symbol parameters
   * @param {string} symbol1 - First symbol
   * @param {string} symbol2 - Second symbol
   * @returns {boolean} True if parameters match
   */
  function compareSymbolParams(symbol1, symbol2) {
    return SymbolParams.compare(symbol1, symbol2);
  }

  /**
   * Get symbol parameters
   * @param {string} symbol - Symbol to analyze
   * @returns {Object} Symbol parameters object
   */
  function symbolParams(symbol) {
    return SymbolParams.getSymbolParams(symbol);
  }

  /**
   * Check if symbol matches current symbol
   * @param {string} symbol - Symbol to check
   * @returns {boolean} True if matches current symbol
   */
  function symbolSameAsCurrent(symbol) {
    return SymbolUtils2.symbolSameAsCurrent(symbol);
  }
}
