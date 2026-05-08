/**
 * ============================================================================
 * TRADINGVIEW MODULE 24317 - THEME MANAGEMENT
 * ============================================================================
 *
 * Purpose: Theme management and configuration utilities
 *
 * Size: 8.0 KB
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
 *   - Dark and light theme configurations
 *   - Standard theme management
 *   - Theme override and restoration
 *   - Theme name translation
 *   - Color palette management
 *   - Theme switching utilities
 *
 * Dependencies:
 *   - 11542: Theme utilities
 *   - 87465: Theme utilities
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
 * @subpackage Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.r(moduleConfig, {
    darkTheme: () => darkTheme,
    getStdChartTheme: () => getStdChartTheme,
    getStdThemeNames: () => getStdThemeNames,
    lightTheme: () => lightTheme,
    overrideStdTheme: () => overrideStdTheme,
    restoreStdThemes: () => restoreStdThemes,
    translateThemeName: () => translateThemeName
  });

  const ThemeUtils = moduleRequire(11542),
    ThemeUtils2 = moduleRequire(87465),
    ThemeUtils3 = moduleRequire(2433),
    ThemeUtils4 = moduleRequire(93201),
    ThemeUtils5 = moduleRequire(49156);

  /**
   * Color palette for dark theme
   */
  const darkColorPalette = {
    colorWhite: "#ffffff",
    colorColdGray100Alpha0: "#f0f0f0",
    colorColdGray100Alpha6: "#f0f0f6",
    colorColdGray200: "#e5e5e5",
    colorColdGray300: "#d4d4d4",
    colorColdGray400: "#a3a3a3",
    colorColdGray450: "#8d8d8d",
    colorColdGray600: "#737373",
    colorColdGray800: "#4a4a4a",
    colorColdGray850: "#2d2d2d",
    colorColdGray900: "#1a1a1a",
    colorDeepBlueA200: "#c7d2e8",
    colorGrapesPurpleA400: "#6b46c1",
    colorGrapesPurpleA200Alpha15: "#6b46c126",
    colorMintyGreen400: "#4ade80",
    colorMintyGreen500: "#22c55e",
    colorMintyGreen600: "#16a34a",
    colorMintyGreen800: "#15803d",
    colorMintyGreen500Alpha5: "#16a34a0d",
    colorMintyGreen500Alpha28: "#16a34a47",
    colorMintyGreen500Alpha50: "#16a34a80",
    colorMintyGreenA900: "#064e3b",
    colorRipeRed400: "#ef4444",
    colorRipeRed500: "#f87171",
    colorRipeRed600: "#dc2626",
    colorRipeRed800: "#b91c1c",
    colorRipeRed500Alpha5: "#f871710d",
    colorRipeRed500Alpha28: "#f8717147",
    colorRipeRed500Alpha50: "#f8717180"
  };

  /**
   * Color palette for light theme
   */
  const lightColorPalette = {
    colorWhite: "#ffffff",
    colorColdGray100Alpha0: "#f0f0f0",
    colorColdGray100Alpha6: "#f0f0f6",
    colorColdGray200: "#e5e5e5",
    colorColdGray300: "#d4d4d4",
    colorColdGray400: "#a3a3a3",
    colorColdGray450: "#8d8d8d",
    colorColdGray600: "#737373",
    colorColdGray800: "#4a4a4a",
    colorColdGray850: "#2d2d2d",
    colorColdGray900: "#1a1a1a",
    colorDeepBlueA200: "#c7d2e8",
    colorGrapesPurpleA400: "#6b46c1",
    colorGrapesPurpleA200Alpha15: "#6b46c126",
    colorMintyGreen400: "#4ade80",
    colorMintyGreen500: "#22c55e",
    colorMintyGreen600: "#16a34a",
    colorMintyGreen800: "#15803d",
    colorMintyGreen500Alpha5: "#16a34a0d",
    colorMintyGreen500Alpha28: "#16a34a47",
    colorMintyGreen500Alpha50: "#16a34a80",
    colorMintyGreenA900: "#064e3b",
    colorRipeRed400: "#ef4444",
    colorRipeRed500: "#f87171",
    colorRipeRed600: "#dc2626",
    colorRipeRed800: "#b91c1c",
    colorRipeRed500Alpha5: "#f871710d",
    colorRipeRed500Alpha28: "#f8717147",
    colorRipeRed500Alpha50: "#f8717180"
  };

  /**
   * Get dark theme configuration
   * @returns {Object} Dark theme configuration
   */
  function darkTheme() {
    return {
      ...darkColorPalette,
      name: "Dark",
      type: "dark"
    };
  }

  /**
   * Get light theme configuration
   * @returns {Object} Light theme configuration
   */
  function lightTheme() {
    return {
      ...lightColorPalette,
      name: "Light",
      type: "light"
    };
  }

  /**
   * Get standard chart theme
   * @param {string} themeName - Theme name
   * @returns {Object} Standard chart theme
   */
  function getStdChartTheme(themeName) {
    return ThemeUtils4.getStdChartTheme(themeName);
  }

  /**
   * Get standard theme names
   * @returns {Array} Array of standard theme names
   */
  function getStdThemeNames() {
    return ThemeUtils4.getStdThemeNames();
  }

  /**
   * Override standard theme
   * @param {string} themeName - Theme name
   * @param {Object} themeConfig - Theme configuration
   */
  function overrideStdTheme(themeName, themeConfig) {
    ThemeUtils4.overrideStdTheme(themeName, themeConfig);
  }

  /**
   * Restore standard themes
   */
  function restoreStdThemes() {
    ThemeUtils4.restoreStdThemes();
  }

  /**
   * Translate theme name
   * @param {string} themeName - Theme name to translate
   * @returns {string} Translated theme name
   */
  function translateThemeName(themeName) {
    return ThemeUtils4.translateThemeName(themeName);
  }
}
