/**
 * ============================================================================
 * TRADINGVIEW MODULE 69455 - FAVORITE DRAWING TOOLBAR
 * ============================================================================
 *
 * Purpose: Factory function to create favorite drawing toolbar with async loading
 *
 * Size: 2.4 KB
 *
 * Function: createFavoriteDrawingToolbar(toolbar)
 *   - Creates favorite drawing toolbar instance
 *   - Loads all drawing tool modules asynchronously
 *   - Positions toolbar at top of expanded header
 *   - Returns toolbar instance
 *
 * Drawing Tools Loaded:
 *   - 7617: Line drawing tools
 *   - 8185: Trend line tools
 *   - 1681: Rectangle drawing tools
 *   - 3439: Polygon drawing tools
 *   - 8933: Pattern drawing tools
 *   - 6032: Volume profile tools
 *   - 3672: Arrow drawing tools
 *   - 3359: Pitchfork drawing tools
 *   - 2537: Ellipse drawing tools
 *   - 3290: Text/label drawing tools
 *
 * Dependencies:
 *   - 9753: Favorite drawing toolbar class
 *   - 63027: Header toolbar height constants
 *
 * Exports:
 *   - createFavoriteDrawingToolbar: Factory function
 *
 * @module 69455
 * @category Drawing Tools
 * @subcategory Toolbar Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    createFavoriteDrawingToolbar: () => createFavoriteDrawingToolbar
  });

  const FavoriteDrawingToolbar = moduleRequire(9753),
    headerConstants = moduleRequire(63027);

  let favoriteToolbarInstance = null;

  /**
   * Create favorite drawing toolbar instance
   * @param {Object} toolbar - Toolbar element to attach to
   * @returns {Promise<FavoriteDrawingToolbar>} Promise resolving to toolbar instance
   */
  function createFavoriteDrawingToolbar(toolbar) {
    if (favoriteToolbarInstance) {
      return Promise.resolve(favoriteToolbarInstance);
    }

    // Create new toolbar instance
    favoriteToolbarInstance = new FavoriteDrawingToolbar(toolbar);

    // Load all drawing tool modules asynchronously
    return Promise.all([
      moduleRequire(7617),  // Line tools
      moduleRequire(8185),  // Trend line tools
      moduleRequire(1681),  // Rectangle tools
      moduleRequire(3439),  // Polygon tools
      moduleRequire(8933),  // Pattern tools
      moduleRequire(6032),  // Volume profile tools
      moduleRequire(3672),  // Arrow tools
      moduleRequire(3359),  // Pitchfork tools
      moduleRequire(2537)   // Ellipse tools
      // Note: 3290 (text tools) is already loaded by default
    ]).then(([
      lineTools,
      trendLineTools,
      rectangleTools,
      polygonTools,
      patternTools,
      volumeProfileTools,
      arrowTools,
      pitchforkTools,
      ellipseTools
    ]) => {
      // Configure toolbar with loaded drawing tools
      favoriteToolbarInstance.setLineTools(lineTools);
      favoriteToolbarInstance.setTrendLineTools(trendLineTools);
      favoriteToolbarInstance.setRectangleTools(rectangleTools);
      favoriteToolbarInstance.setPolygonTools(polygonTools);
      favoriteToolbarInstance.setPatternTools(patternTools);
      favoriteToolbarInstance.setVolumeProfileTools(volumeProfileTools);
      favoriteToolbarInstance.setArrowTools(arrowTools);
      favoriteToolbarInstance.setPitchforkTools(pitchforkTools);
      favoriteToolbarInstance.setEllipseTools(ellipseTools);

      // Position toolbar at top of expanded header
      const toolbarElement = toolbar.parentElement;
      if (toolbarElement) {
        toolbarElement.style.top = `${headerConstants.HEADER_TOOLBAR_HEIGHT_EXPANDED + 61}px`;
      }

      return favoriteToolbarInstance;
    });
  }
}
