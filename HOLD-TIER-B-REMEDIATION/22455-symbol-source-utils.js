/**
 * ============================================================================
 * TRADINGVIEW MODULE 22455 - SYMBOL SOURCE UTILITY FUNCTIONS
 * ============================================================================
 *
 * Purpose: Utility functions for detecting symbol source capabilities
 *
 * Size: 1.0 KB
 *
 * Functions:
 *   - isSymbolSource: Checks if source provides symbol data
 *   - isActingAsSymbolSource: Checks if source is currently acting as symbol source
 *   - isSymbolSourceWithQuotesProvider: Checks if source has quotes provider capability
 *
 * Exports:
 *   - isSymbolSource: (source) => boolean
 *   - isActingAsSymbolSource: (source) => boolean
 *   - isSymbolSourceWithQuotesProvider: (source) => boolean
 *
 * @module 22455
 * @category Data Sources
 * @subcategory Symbol Resolution
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";

  /**
   * Check if a data source is a symbol source
   * @param {PriceDataSource} dataSource - The data source to check
   * @returns {boolean} True if source provides symbol data
   */
  function isSymbolSource(dataSource) {
    return dataSource?.symbolSource && dataSource.symbolSource() === dataSource ||
           void 0 !== dataSource?.isActingAsSymbolSource;
  }

  /**
   * Check if a data source has quotes provider capability
   * @param {PriceDataSource} dataSource - The data source to check
   * @returns {boolean} True if source has quotes provider
   */
  function isSymbolSourceWithQuotesProvider(dataSource) {
    return isSymbolSource(dataSource) && "quotesProvider" in dataSource;
  }

  /**
   * Check if a data source is currently acting as symbol source
   * @param {PriceDataSource} dataSource - The data source to check
   * @returns {boolean} True if actively acting as symbol source
   */
  function isActingAsSymbolSource(dataSource) {
    return isSymbolSource(dataSource) && dataSource.isActingAsSymbolSource().value();
  }

  moduleRequire.moduleRequire_d(moduleConfig, {
    isActingAsSymbolSource: () => isActingAsSymbolSource,
    isSymbolSource: () => isSymbolSource,
    isSymbolSourceWithQuotesProvider: () => isSymbolSourceWithQuotesProvider
  });
}
