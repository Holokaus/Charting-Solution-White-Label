/**
 * ============================================================================
 * TRADINGVIEW MODULE 26352 - CSS VALUES
 * ============================================================================
 *
 * Purpose: CSS value constants for chart controls
 *
 * Size: 0.3 KB
 *
 * Constants:
 *   - CSS_VALUE_CHART_CONTROLS_BAR_HEIGHT_WITH_BORDER: Height with border
 *   - CSS_VALUE_CHART_CONTROLS_BAR_BORDER: Border width
 *
 * Features:
 *   - CSS value definitions
 *   - Chart control styling constants
 *   - Border and height specifications
 *
 * Exports:
 *   - CSS_VALUE_CHART_CONTROLS_BAR_HEIGHT_WITH_BORDER: Height constant
 *   - CSS_VALUE_CHART_CONTROLS_BAR_BORDER: Border constant
 *
 * @module 26352
 * @category UI System
 * @subcategory CSS Constants
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    CSS_VALUE_CHART_CONTROLS_BAR_HEIGHT_WITH_BORDER: () => CSS_VALUE_CHART_CONTROLS_BAR_HEIGHT_WITH_BORDER,
    CSS_VALUE_CHART_CONTROLS_BAR_BORDER: () => CSS_VALUE_CHART_CONTROLS_BAR_BORDER
  });

  /**
   * CSS value for chart controls bar height with border
   */
  const CSS_VALUE_CHART_CONTROLS_BAR_HEIGHT_WITH_BORDER = "39px";

  /**
   * CSS value for chart controls bar border
   */
  const CSS_VALUE_CHART_CONTROLS_BAR_BORDER = "1px";
}
