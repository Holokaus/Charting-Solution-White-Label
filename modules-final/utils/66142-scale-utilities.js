/**
 * ============================================================================
 * TRADINGVIEW MODULE 66142 - SCALE UTILITIES
 * ============================================================================
 *
 * Purpose: Scale ratio and bar spacing utilities
 *
 * Size: 1.8 KB
 *
 * Functions:
 *   - barSpacingByScaleRatio: Get bar spacing by scale ratio
 *   - priceRangeByScaleRatio: Get price range by scale ratio
 *   - scaleRatio: Get scale ratio
 *
 * Features:
 *   - Scale ratio calculation and management
 *   - Bar spacing optimization
 *   - Price range calculation
 *   - Log scale support
 *   - Empty data handling
 *   - Price scale integration
 *
 * Dependencies:
 *   - 24062: Scale utilities
 *   - 1e-10: Math constants
 *
 * Exports:
 *   - barSpacingByScaleRatio: Bar spacing function
 *   - priceRangeByScaleRatio: Price range function
 *   - scaleRatio: Scale ratio function
 *
 * @module 66142
 * @category Chart System
 * @subpackage Scale Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.scaleUtils_d(moduleConfig, {
    barSpacingByScaleRatio: () => barSpacingByScaleRatio,
    priceRangeByScaleRatio: () => priceRangeByScaleRatio,
    scaleRatio: () => scaleRatio
  });

  const ScaleUtils = moduleRequire(24062),
    MATH_CONSTANTS = moduleRequire(1e-10);

  /**
   * Get bar spacing by scale ratio
   * @param {Object} seriesData - Series data object
   * @param {Object} timeScale - Time scale object
   * @returns {number|null} Bar spacing or null
   */
  function barSpacingByScaleRatio(seriesData, timeScale) {
    if (timeScale.isLog() || seriesData.isEmpty() || timeScale.isEmpty()) {
      return null;
    }
    
    const priceRange = seriesData.priceRange();
    if (priceRange === null) {
      return null;
    }
    
    const scaleRatio = timeScale.scaleRatio();
    const minBarSpacing = Math.max(1, Math.floor(priceRange / scaleRatio));
    
    return minBarSpacing;
  }

  /**
   * Get price range by scale ratio
   * @param {Object} seriesData - Series data object
   * @param {Object} timeScale - Time scale object
   * @returns {number|null} Price range or null
   */
  function priceRangeByScaleRatio(seriesData, timeScale) {
    if (timeScale.isLog() || seriesData.isEmpty() || timeScale.isEmpty()) {
      return null;
    }
    
    const internalHeight = seriesData.internalHeight();
    if (internalHeight === null) {
      return null;
    }
    
    const scaleRatio = timeScale.scaleRatio();
    return internalHeight / scaleRatio;
  }

  /**
   * Get scale ratio
   * @param {Object} timeScale - Time scale object
   * @returns {number} Scale ratio
   */
  function scaleRatio(timeScale) {
    return timeScale.scaleRatio();
  }

  // Export scale utilities functions
  moduleExports.barSpacingByScaleRatio = barSpacingByScaleRatio;
  moduleExports.priceRangeByScaleRatio = priceRangeByScaleRatio;
  moduleExports.scaleRatio = scaleRatio;
}
