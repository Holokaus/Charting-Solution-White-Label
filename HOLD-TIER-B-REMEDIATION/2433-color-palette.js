/**
 * ============================================================================
 * TRADINGVIEW MODULE 2433 - COLOR PALETTE
 * ============================================================================
 *
 * Purpose: Color palette definitions for light theme
 *
 * Size: 6.6 KB
 *
 * Functions:
 *   - light: Light theme color palette
 *
 * Features:
 *   - Comprehensive color palette for light theme
 *   - Color definitions with alpha variations
 *   - Standardized color naming
 *   - Color value constants
 *   - Theme-specific color management
 *
 * Dependencies:
 *   - 49156: Color palette utilities
 *   - 93201: Color palette utilities
 *
 * Exports:
 *   - light: Light theme color palette function
 *
 * @module 2433
 * @category Theme System
 * @subpackage Color Palette
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    light: () => light
  });

  const ColorPaletteUtils = moduleRequire(49156),
    ColorPaletteUtils2 = moduleRequire(93201);

  /**
   * Light theme color palette
   */
  const lightColorPalette = {
    colorWhite: "#ffffff",
    colorBlack: "#000000",
    colorColdGray150: "#f5f5f5",
    colorColdGray300: "#e5e5e5",
    colorColdGray400: "#d4d4d4",
    colorColdGray450: "#a3a3a3",
    colorColdGray800Alpha0: "#4a4a4a",
    colorColdGray800Alpha6: "#4a4a4a99",
    colorColdGray900: "#2d2d2d",
    colorGrapesPurpleA400: "#6b46c1",
    colorGrapesPurpleA200Alpha15: "#6b46c126",
    colorMintyGreen200: "#dcfce7",
    colorMintyGreen400: "#4ade80",
    colorMintyGreen500: "#22c55e",
    colorMintyGreen600: "#16a34a",
    colorMintyGreen800: "#15803d",
    colorMintyGreen500Alpha5: "#16a34a0d",
    colorMintyGreen500Alpha28: "#16a34a47",
    colorMintyGreen500Alpha50: "#16a34a80",
    colorRipeRed200: "#fecaca",
    colorRipeRed400: "#ef4444",
    colorRipeRed500: "#f87171",
    colorRipeRed600: "#dc2626",
    colorRipeRedA700: "#b91c1c",
    colorRipeRed500Alpha5: "#f871710d",
    colorRipeRed500Alpha28: "#f8717147",
    colorRipeRed500Alpha50: "#f8717180",
    colorDeepBlueA700: "#1d4ed8",
    colorBerryPink500: "#ec4899",
    colorBerryPink500Alpha25: "#ec489940",
    colorBerryPink400Alpha50: "#f9a8d480",
    colorBerryPink400Alpha75: "#f9a8d4bf",
    colorIguanaGreenA700: "#059669",
    colorSkyBlue400Alpha5: "#38bdf80d",
    colorSkyBlue400Alpha50: "#38bdf880",
    colorSkyBlue400Alpha75: "#38bdf8bf"
  };

  /**
   * Get light theme color palette
   * @returns {Object} Light theme color palette
   */
  function light() {
    return {
      ...lightColorPalette,
      name: "Light",
      type: "light"
    };
  }
}
