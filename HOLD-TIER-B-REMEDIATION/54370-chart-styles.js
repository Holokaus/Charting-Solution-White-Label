/**
 * ============================================================================
 * TRADINGVIEW MODULE 54370 - CHART STYLES CONFIGURATION
 * ============================================================================
 *
 * Purpose: Configuration for available chart styles and their enabling
 *
 * Size: 0.8 KB
 *
 * Function: allChartStyles()
 *   - Returns array of available chart style IDs
 *   - Includes standard styles and conditional Japanese styles
 *
 * Chart Styles:
 *   - 0: Line
 *   - 1: Bar
 *   - 9: Candlestick
 *   - 13: Hollow Candlestick
 *   - 2: Area
 *   - 14: Area with Lines
 *   - 15: Baseline
 *   - 3: Column
 *   - 16: Column with Lines
 *   - 10: Volume
 *   - 21: Volume with Lines
 *   - 12: Heikin Ashi
 *   - 8: HLC Bar
 *
 * Dependencies:
 *   - 37103: Feature flags for enabling styles
 *
 * Exports:
 *   - allChartStyles: Function returning available chart styles
 *
 * @module 54370
 * @category Chart Display
 * @subpackage Chart Styles
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    allChartStyles: () => allChartStyles
  });

  const featureFlags = moduleRequire(37103);

  /**
   * Get all available chart styles
   * @returns {Function} Function that returns array of chart style IDs
   */
  function allChartStyles() {
    return function() {
      // Base chart styles always available
      const baseStyles = [0, 1, 9, 13, 2, 14, 15, 3, 16, 10, 21, 12, 8];
      
      // Add Japanese chart styles if enabled
      return featureFlags.enabled("japanese_chart_styles") ? 
             baseStyles.concat([8]) : 
             baseStyles;
    };
  }
}
