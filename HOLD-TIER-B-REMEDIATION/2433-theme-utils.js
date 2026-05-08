/**
 * ============================================================================
 * TRADINGVIEW MODULE 2433 - THEME UTILITIES
 * ============================================================================
 *
 * Purpose: Theme utilities and color management
 *
 * Size: 10.7 KB
 *
 * Functions:
 *   - light: Light theme getter
 *
 * Features:
 *   - Theme color definitions
 *   - Light theme configuration
 *   - Color palette management
 *
 * Dependencies:
 *   - 49156: Theme utilities
 *   - 93201: Theme utilities
 *
 * Exports:
 *   - light: Light theme function
 *
 * @module 2433
 * @category Theme System
 * @subpackage Theme Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    light: () => light
  });

  const themeUtils = moduleRequire(49156),
    themeUtils2 = moduleRequire(93201);

  // Light theme color palette
  const lightThemeColors = {
    colorWhite: "#ffffff",
    colorBlack: "#000000",
    colorColdGray150: "#969696",
    colorColdGray300: "#d4d4d4",
    colorColdGray400: "#bdbdbd",
    colorColdGray450: "#ababab",
    colorColdGray800Alpha0: "#8e8e8e00",
    colorColdGray800Alpha6: "#8e8e8e0f",
    colorColdGray900: "#636363",
    colorGrapesPurpleA400: "#9c27b0",
    colorGrapesPurpleA200Alpha15: "#9c27b026",
    colorMintyGreen200: "#a7f3d0",
    colorMintyGreen400: "#00d084",
    colorMintyGreen500: "#00b874",
    colorMintyGreen600: "#00a86b",
    colorMintyGreen800: "#009658",
    colorMintyGreen500Alpha5: "#00b8740d",
    colorMintyGreen500Alpha28: "#00b87447",
    colorMintyGreen500Alpha50: "#00b87480",
    colorRipeRed200: "#ff4757",
    colorRipeRed400: "#ff3838",
    colorRipeRed500: "#e34234",
    colorRipeRed600: "#c62828",
    colorRipeRedA700: "#9a0036",
    colorRipeRed500Alpha5: "#ff38380d",
    colorRipeRed500Alpha28: "#ff383847",
    colorRipeRed500Alpha50: "#ff383880",
    colorDeepBlueA700: "#1976d2",
    colorBerryPink500: "#e91e63",
    colorBerryPink500Alpha25: "#e91e6340",
    colorBerryPink400Alpha50: "#e91e6380",
    colorBerryPink400Alpha75: "#e91e6340",
    colorIguanaGreenA700: "#00c853",
    colorSkyBlue400Alpha5: "#38bdf8",
    colorSkyBlue400Alpha50: "#38bdf880",
    colorSkyBlue400Alpha75: "#38bdf8cc"
  };

  /**
   * Get light theme configuration
   * @returns {Object} Light theme configuration
   */
  function light() {
    return themeUtils.clone(lightThemeColors);
  }
}
