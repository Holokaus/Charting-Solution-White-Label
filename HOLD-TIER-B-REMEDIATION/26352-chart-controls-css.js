/**
 * ============================================================================
 * TRADINGVIEW MODULE 26352 - CHART CONTROLS CSS
 * ============================================================================
 *
 * Purpose: Chart controls CSS value definitions
 *
 * Size: 0.3 KB
 *
 * Features:
 *   - Chart controls bar height with border
 *   - Chart controls bar border definition
 *   - CSS value management
 *   - Style constants for chart controls
 *
 * Dependencies:
 *   - None (standalone module)
 *
 * Exports:
 *   - Chart controls CSS values object
 *
 * @module 26352
 * @category UI System
 * @subpackage CSS Values
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  /**
   * Chart controls CSS values
   */
  const chartControlsCSS = {
    "css-value-chart-controls-bar-height-with-border": "39px",
    "css-value-chart-controls-bar-border": "1px"
  };

  // Export the CSS values
  moduleExports.chartControlsCSS = chartControlsCSS;
}
