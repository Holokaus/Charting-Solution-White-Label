/**
 * ============================================================================
 * TRADINGVIEW MODULE 72755 - AXIS LABEL BACKGROUND
 * ============================================================================
 *
 * Purpose: Axis label background color management
 *
 * Size: 2.2 KB
 *
 * Functions:
 *   - axisLabelBackgroundColor: Get axis label background color
 *
 * Features:
 *   - Axis label background color management
 *   - Color palette integration
 *   - Active and common color states
 *   - Color switching capabilities
 *
 * Dependencies:
 *   - 58978: Color utilities
 *
 * Exports:
 *   - axisLabelBackgroundColor: Axis label background color function
 *
 * @module 72755
 * @category UI System
 * @subpackage Axis Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.axisLabelBackground_d(moduleConfig, {
    axisLabelBackgroundColor: () => axisLabelBackgroundColor
  });

  const ColorUtils = moduleRequire(58978);

  /**
   * Axis label background colors configuration
   */
  const AXIS_LABEL_COLORS = {
    common: ColorUtils.colorsPalette["color-tv-blue-500"],
    active: ColorUtils.colorsPalette["color-tv-blue-800"]
  };

  /**
   * Get axis label background color
   * @param {string} colorType - Color type ('common' or 'active')
   * @returns {string} Color value
   */
  function axisLabelBackgroundColor(colorType) {
    return AXIS_LABEL_COLORS[colorType] || AXIS_LABEL_COLORS.common;
  }

  // Export axis label background color function
  moduleExports.axisLabelBackgroundColor = axisLabelBackgroundColor;
}
