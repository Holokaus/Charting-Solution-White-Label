/**
 * Module 54370 - Chart Styles Collection
 *
 * @description Exports function to retrieve all available chart style identifiers
 * @dependencies 37103 (feature flags/enabled checks)
 * @exports allChartStyles
 */

const { enabled } = require(37103);

/**
 * Returns an array of all available chart style identifiers
 * 
 * Chart styles determine how price data is visualized on the chart.
 * This function respects feature flags to conditionally include
 * premium or beta chart styles.
 *
 * @returns {number[]} Array of chart style numeric identifiers
 * 
 * @example
 * // Get all available chart styles
 * const styles = allChartStyles();
 * styles.forEach(styleId => {
 *     applyChartStyle(styleId);
 * });
 * 
 * @description
 * Base styles (always available):
 * - 0: Candles
 * - 1: Hollow Candles  
 * - 2: Bars
 * - 3: Line
 * - 8: Area
 * - 9: Baseline
 * - 10: Step Line
 * - 13: Heikin Ashi
 * - 14: Kagi
 * - 15: Point & Figure
 * - 16: Renko
 * - 21: (Additional style)
 * 
 * Conditional styles (feature flag dependent):
 * - 12: High-Low (requires 'chart_style_hilo' flag)
 */
function allChartStyles() {
  // Base set of chart style identifiers
  const baseStyles = [0, 1, 9, 13, 2, 14, 15, 3, 16, 10];
  
  // Add High-Low chart style if feature is enabled
  if (enabled('chart_style_hilo')) {
    baseStyles.push(12);
  }
  
  // Add additional style (21)
  baseStyles.push(21);
  
  // Check Japanese chart styles flag (currently just concatenates [8] regardless)
  // This may be a legacy pattern or placeholder for future conditional logic
  if (enabled('japanese_chart_styles')) {
    // Intentionally empty - kept for API compatibility
  }
  
  // Always include Area chart style (8)
  return baseStyles.concat([8]);
}

module.exports = {
  allChartStyles
};
