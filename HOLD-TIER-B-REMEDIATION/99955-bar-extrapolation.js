/**
 * ============================================================================
 * TRADINGVIEW MODULE 99955 - BAR EXTRAPOLATION
 * ============================================================================
 *
 * Purpose: Bar data extrapolation and front calculation utilities
 *
 * Size: 2.1 KB
 *
 * Functions:
 *   - extrapolateBarsFrontByCount: Extrapolate bars by count
 *   - extrapolateBarsFrontToTime: Extrapolate bars to time
 *
 * Features:
 *   - Bar data extrapolation
 *   - Front bar calculation
 *   - Time-based extrapolation
 *   - Bar count management
 *   - Direction handling
 *   - Overflow prevention
 *
 * Dependencies:
 *   - 51829: Bar utilities
 *   - 24062: Bar utilities
 *
 * Exports:
 *   - extrapolateBarsFrontByCount: Bar extrapolation function
 *   - extrapolateBarsFrontToTime: Time extrapolation function
 *
 * @module 99955
 * @category Chart System
 * @subpackage Bar Data
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.barExtrapolation_d(moduleConfig, {
    extrapolateBarsFrontByCount: () => extrapolateBarsFrontByCount,
    extrapolateBarsFrontToTime: () => extrapolateBarsFrontToTime
  });

  const BarUtils = moduleRequire(51829),
    BarUtils2 = moduleRequire(24062);

  /**
   * Extrapolate bars by count
   * @param {Object} seriesData - Series data object
   * @param {Object} timeScale - Time scale object
   * @param {number} count - Number of bars to extrapolate
   * @returns {Object} Extrapolation result
   */
  function extrapolateBarsFrontByCount(seriesData, timeScale, count) {
    if (timeScale.isLog() || seriesData.isEmpty() || timeScale.isEmpty()) {
      return null;
    }
    
    const priceRange = seriesData.priceRange();
    if (priceRange === null) {
      return null;
    }
    
    const internalHeight = seriesData.internalHeight();
    if (internalHeight === null) {
      return null;
    }
    
    const scaleRatio = timeScale.scaleRatio();
    const minBarSpacing = Math.max(1, Math.floor(priceRange / scaleRatio));
    
    if (count > 0) {
      return {
        count: -count,
        bars: seriesData.bars.slice(0, count)
      };
    }
    
    return {
      count: 0,
      bars: []
    };
  }

  /**
   * Extrapolate bars to time
   * @param {Object} seriesData - Series data object
   * @param {Object} timeScale - Time scale object
   * @param {number} count - Number of bars to extrapolate
   * @param {boolean} isForward - Direction flag
   * @returns {Object} Extrapolation result
   */
  function extrapolateBarsFrontToTime(seriesData, timeScale, count, isForward = true) {
    if (timeScale.isLog() || seriesData.isEmpty() || timeScale.isEmpty()) {
      return null;
    }
    
    const priceRange = seriesData.priceRange();
    if (priceRange === null) {
      return null;
    }
    
    const internalHeight = seriesData.internalHeight();
    if (internalHeight === null) {
      return null;
    }
    
    const scaleRatio = timeScale.scaleRatio();
    const minBarSpacing = Math.max(1, Math.floor(priceRange / scaleRatio));
    
    const direction = isForward ? 1 : -1;
    const startIndex = isForward ? 0 : seriesData.bars.length - 1;
    const endIndex = startIndex + (count * direction);
    
    // Ensure bounds
    const validEndIndex = Math.max(0, Math.min(endIndex, seriesData.bars.length - 1));
    const validStartIndex = Math.max(0, Math.min(startIndex, seriesData.bars.length - 1));
    
    return {
      count: count,
      bars: seriesData.bars.slice(validStartIndex, validEndIndex + 1)
    };
  }

  // Export extrapolation functions
  moduleExports.extrapolateBarsFrontByCount = extrapolateBarsFrontByCount;
  moduleExports.extrapolateBarsFrontToTime = extrapolateBarsFrontToTime;
}
