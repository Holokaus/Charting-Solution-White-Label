/**
 * ============================================================================
 * TRADINGVIEW MODULE 7543 - DATA SOURCE VISIBILITY UTILITIES
 * ============================================================================
 *
 * Purpose: Utility functions for data source visibility in object tree
 *
 * Size: 0.4 KB
 *
 * Functions:
 *   - isDataSource: Check if data source should show in object tree
 *
 * Used by:
 *   - Object tree navigation
 *   - Data source filtering
 *   - UI visibility controls
 *
 * Exports:
 *   - isDataSource: (dataSource) => boolean
 *
 * @module 7543
 * @category Data Sources
 * @subcategory Visibility
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";

  /**
   * Check if a data source should be displayed in object tree
   * @param {Object} dataSource - Data source to check
   * @returns {boolean} True if source should show in object tree
   */
  function isDataSource(dataSource) {
    return Boolean(dataSource.showInObjectTree);
  }

  moduleRequire.moduleRequire_d(moduleConfig, {
    isDataSource: () => isDataSource
  });
}
