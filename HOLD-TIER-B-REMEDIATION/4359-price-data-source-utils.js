/**
 * ============================================================================
 * TRADINGVIEW MODULE 4359 - PRICE DATA SOURCE UTILITIES
 * ============================================================================
 *
 * Purpose: Price data source type checking and validation
 *
 * Size: 5.0 KB
 *
 * Functions:
 *   - isLineDataSource: Check if data source is line type
 *   - isShapesDataSource: Check if data source is shapes type
 *   - isCharsDataSource: Check if data source is chars type
 *   - isArrowsDataSource: Check if data source is arrows type
 *   - isDataDataSource: Check if data source is data type
 *
 * Features:
 *   - Data source type validation
 *   - Type checking utilities
 *   - Price data source classification
 *   - Shape and arrow data source support
 *   - Character data source support
 *
 * Dependencies:
 *   - None (standalone utilities)
 *
 * Exports:
 *   - isLineDataSource: Line data source checker function
 *   - isShapesDataSource: Shapes data source checker function
 *   - isCharsDataSource: Chars data source checker function
 *   - isArrowsDataSource: Arrows data source checker function
 *   - isDataDataSource: Data data source checker function
 *
 * @module 4359
 * @category Data Management
 * @subpackage Price Data Source
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.priceDataSource_d(moduleConfig, {
    isLineDataSource: () => isLineDataSource,
    isShapesDataSource: () => isShapesDataSource,
    isCharsDataSource: () => isCharsDataSource,
    isArrowsDataSource: () => isArrowsDataSource,
    isDataDataSource: () => isDataDataSource
  });

  /**
   * Check if data source is line type
   * @param {Object} dataSource - Data source object
   * @returns {boolean} True if line data source
   */
  function isLineDataSource(dataSource) {
    return dataSource && dataSource.type === 'line';
  }

  /**
   * Check if data source is shapes type
   * @param {Object} dataSource - Data source object
   * @returns {boolean} True if shapes data source
   */
  function isShapesDataSource(dataSource) {
    return dataSource && dataSource.type === 'shapes';
  }

  /**
   * Check if data source is chars type
   * @param {Object} dataSource - Data source object
   * @returns {boolean} True if chars data source
   */
  function isCharsDataSource(dataSource) {
    return dataSource && dataSource.type === 'chars';
  }

  /**
   * Check if data source is arrows type
   * @param {Object} dataSource - Data source object
   * @returns {boolean} True if arrows data source
   */
  function isArrowsDataSource(dataSource) {
    return dataSource && dataSource.type === 'arrows';
  }

  /**
   * Check if data source is data type
   * @param {Object} dataSource - Data source object
   * @returns {boolean} True if data data source
   */
  function isDataDataSource(dataSource) {
    return dataSource && dataSource.type === 'data';
  }

  // Export all functions
  moduleExports.isLineDataSource = isLineDataSource;
  moduleExports.isShapesDataSource = isShapesDataSource;
  moduleExports.isCharsDataSource = isCharsDataSource;
  moduleExports.isArrowsDataSource = isArrowsDataSource;
  moduleExports.isDataDataSource = isDataDataSource;
}
