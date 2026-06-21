/**
 * ============================================================================
 * TRADINGVIEW MODULE 24317 - THEME MANAGER
 * ============================================================================
 *
 * Purpose: Theme management and color scheme handling
 *
 * Size: 12.4 KB
 *
 * Functions:
 *   - darkTheme: Dark theme configuration
 *   - getStdChartTheme: Get standard chart theme
 *   - getStdThemeNames: Get standard theme names
 *   - lightTheme: Light theme configuration
 *   - overrideStdTheme: Override standard theme
 *   - restoreStdThemes: Restore standard themes
 *   - translateThemeName: Translate theme name
 *
 * Features:
 *   - Dark and light theme definitions
 *   - Standard theme management
 *   - Color palette definitions
 *   - Theme name translation
 *   - Theme override and restoration
 *
 * Dependencies:
 *   - 11542: Theme utilities
 *   - 87465: Object cloning
 *   - 2433: Theme utilities
 *   - 93201: Theme utilities
 *   - 49156: Theme utilities
 *
 * Exports:
 *   - darkTheme: Dark theme function
 *   - getStdChartTheme: Standard chart theme function
 *   - getStdThemeNames: Standard theme names function
 *   - lightTheme: Light theme function
 *   - overrideStdTheme: Override theme function
 *   - restoreStdThemes: Restore themes function
 *   - translateThemeName: Theme name translation function
 *
 * @module 24317
 * @category Theme System
 * @subpackage Theme Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    darkTheme: () => darkTheme,
    getStdChartTheme: () => getStdChartTheme,
    getStdThemeNames: () => getStdThemeNames,
    lightTheme: () => lightTheme,
    overrideStdTheme: () => overrideStdTheme,
    restoreStdThemes: () => restoreStdThemes,
    translateThemeName: () => translateThemeName
  });

  const themeUtils = moduleRequire(11542),
    objectClone = moduleRequire(87465),
    themeUtils2 = moduleRequire(2433),
    themeUtils3 = moduleRequire(93201),
    themeUtils4 = moduleRequire(49156);

  // Dark theme color palette
  const darkThemeColors = {
    colorWhite: "#ffffff",
    colorColdGray100Alpha0: "#ffffff00",
    colorColdGray100Alpha6: "#ffffff0f",
    colorColdGray200: "#f0f0f0",
    colorColdGray300: "#e0e0e0",
    colorColdGray400: "#d0d0d0",
    colorColdGray450: "#c0c0c0",
    colorColdGray600: "#b0b0b0",
    colorColdGray800: "#a0a0a0",
    colorColdGray850: "#909090",
    colorColdGray900: "#808080",
    colorDeepBlueA200: "#e3f2fd",
    colorGrapesPurpleA400: "#9c27b0",
    colorGrapesPurpleA200Alpha15: "#9c27b026",
    colorMintyGreen400: "#00d084",
    colorMintyGreen500: "#00b874",
    colorMintyGreen600: "#00a86b",
    colorMintyGreen800: "#009658",
    colorMintyGreen500Alpha5: "#00b8740d",
    colorMintyGreen500Alpha28: "#00b87447",
    colorMintyGreen500Alpha50: "#00b87480",
    colorMintyGreenA900: "#004d40",
    colorRipeRed400: "#ff4757",
    colorRipeRed500: "#ff3838",
    colorRipeRed600: "#e34234",
    colorRipeRed800: "#c62828",
    colorRipeRed500Alpha5: "#ff38380d",
    colorRipeRed500Alpha28: "#ff383847",
    colorRipeRed500Alpha50: "#ff383880"
  };

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
   * Create dark theme
   * @returns {Object} Dark theme configuration
   */
  function darkTheme() {
    return objectClone.clone(darkThemeColors);
  }

  /**
   * Create light theme
   * @returns {Object} Light theme configuration
   */
  function lightTheme() {
    return objectClone.clone(lightThemeColors);
  }

  /**
   * Get standard chart theme
   * @param {string} themeName - Theme name
   * @returns {Object} Theme configuration
   */
  function getStdChartTheme(themeName) {
    return themeUtils2.getTheme(themeName);
  }

  /**
   * Get standard theme names
   * @returns {Array} Array of standard theme names
   */
  function getStdThemeNames() {
    return themeUtils3.getStdThemeNames();
  }

  /**
   * Override standard theme
   * @param {string} themeName - Theme name to override
   * @param {Object} themeConfig - Theme configuration
   */
  function overrideStdTheme(themeName, themeConfig) {
    themeUtils4.overrideStdTheme(themeName, themeConfig);
  }

  /**
   * Restore standard themes
   */
  function restoreStdThemes() {
    themeUtils4.restoreStdThemes();
  }

  /**
   * Translate theme name
   * @param {string} themeName - Theme name to translate
   * @returns {string} Translated theme name
   */
  function translateThemeName(themeName) {
    return themeUtils.translateThemeName(themeName);
  }
}
