/**
 * ============================================================================
 * TRADINGVIEW MODULE 45345 - THEME MANAGER
 * ============================================================================
 *
 * Purpose: Global theme management with reactive watched value
 *
 * Size: 1.2 KB
 *
 * Features:
 *   - setTheme(themeName): Set the active theme
 *   - watchedTheme: WatchedValue that notifies on theme changes
 *   - Automatic DOM class management (theme-{name} classes)
 *   - HTML data-theme attribute synchronization
 *
 * Constants:
 *   - ThemeClassPrefix: "theme-" (CSS class prefix)
 *
 * Dependencies:
 *   - 22613: WatchedValue class
 *
 * Exports:
 *   - setTheme: (themeName) => void
 *   - watchedTheme: WatchedValue<string>
 *
 * @module 45345
 * @category UI System
 * @subcategory Theme Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.d(moduleConfig, {
    setTheme: () => setTheme,
    watchedTheme: () => watchedTheme
  });

  var ThemeConstants;
  const WatchedValue = moduleRequire(22613);

  // Theme CSS class prefix constant
  !function(ThemeConstants) {
    ThemeConstants.ThemeClassPrefix = "theme-";
  }(ThemeConstants || (ThemeConstants = {}));

  // Global watched theme value
  const watchedTheme = new WatchedValue.WatchedValue;

  /**
   * Set the active theme
   * @param {string} themeName - Name of the theme to activate
   */
  function setTheme(themeName) {
    watchedTheme.setValue(themeName);
  }

  // Subscribe to theme changes and update DOM
  watchedTheme.subscribe((newThemeName => {
    applyThemeToDOM(newThemeName, window);
  }));

  /**
   * Apply theme to document DOM
   * @param {string} themeName - Theme name
   * @param {Window} targetWindow - Window object (default: global window)
   */
  function applyThemeToDOM(themeName, targetWindow = window) {
    const themeClass = "theme-" + themeName;
    const htmlClassList = targetWindow.document.documentElement.classList;

    // Remove all existing theme classes
    for (const existingClass of Array.from(htmlClassList)) {
      if (existingClass.startsWith("theme-") && existingClass !== themeClass) {
        htmlClassList.remove(existingClass);
      }
    }

    // Add new theme class and data attribute
    htmlClassList.add(themeClass);
    targetWindow.document.documentElement.dataset.theme = themeName;
  }
}
