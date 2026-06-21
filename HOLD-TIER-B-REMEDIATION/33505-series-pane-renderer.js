/**
 * ============================================================================
 * TRADINGVIEW MODULE 33505 - SERIES PANE RENDERER
 * ============================================================================
 *
 * Purpose: Series pane rendering implementation
 *
 * Size: 2.3 KB
 *
 * Class: PaneRendererSeriesBase
 *   - Base class for series pane rendering
 *   - Handles bar management
 *   - Provides hit testing
 *   - Supports bar range detection
 *
 * Features:
 *   - Bar data management
 *   - Hit testing with tolerance
 *   - Bar range validation
 *   - Index-based bar access
 *   - Performance optimization
 *
 * Dependencies:
 *   - 2383: Series pane base
 *   - 10307: Font utilities
 *
 * Exports:
 *   - PaneRendererSeriesBase: Series pane renderer base class
 *
 * @module 33505
 * @category Chart Rendering
 * @subpackage Series Renderer
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    PaneRendererSeriesBase: () => PaneRendererSeriesBase
  });

  const SeriesBarsPaneView = moduleRequire(2383).SeriesBarsPaneView,
    fontUtils = moduleRequire(10307);

  /**
   * Series pane renderer base class
   */
  class PaneRendererSeriesBase extends SeriesBarsPaneView {
    constructor() {
      super(...arguments);
      this._bars = [];
    }

    /**
     * Get tolerance for hit testing
     * @returns {number} Tolerance value
     */
    _getTolerance() {
      return 1;
    }

    /**
     * Check if point is at bar
     * @param {Object} bar - Bar object
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @returns {boolean} True if point is at bar
     */
    _isPointAtBar(bar, x, y) {
      const tolerance = this._getTolerance();
      return x >= bar.left - tolerance && 
             x <= bar.right + tolerance && 
             y >= bar.top - tolerance && 
             y <= bar.bottom + tolerance;
    }

    /**
     * Hit test implementation
     * @param {Object} hitTest - Hit test object
     * @returns {Object|null} Hit test result or null
     */
    hitTest(hitTest) {
      const bars = this._bars;
      
      if (bars.length === 0) {
        return null;
      }

      const firstBar = bars[0];
      const lastBar = bars[bars.length - 1];
      
      if (hitTest.x < firstBar.left || hitTest.x > lastBar.right) {
        return null;
      }

      let startIndex = -1;
      let endIndex = -1;
      
      for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        
        if (this._isPointAtBar(bar, hitTest.x, hitTest.y)) {
          if (startIndex === -1) {
            startIndex = i;
          }
          endIndex = i;
        }
      }
      
      if (startIndex !== -1 && endIndex !== -1) {
        return {
          barIndex: startIndex,
          hitTarget: hitTest.hitTarget
        };
      }
      
      return null;
    }

    /**
     * Add bar to renderer
     * @param {Object} bar - Bar object to add
     */
    addBar(bar) {
      this._bars.push(bar);
    }

    /**
     * Remove bar from renderer
     * @param {Object} bar - Bar object to remove
     */
    removeBar(bar) {
      const index = this._bars.indexOf(bar);
      if (index > -1) {
        this._bars.splice(index, 1);
      }
    }

    /**
     * Clear all bars
     */
    clearBars() {
      this._bars = [];
    }

    /**
     * Get all bars
     * @returns {Array} Array of bars
     */
    getBars() {
      return this._bars;
    }
  }

  // Export the PaneRendererSeriesBase class
  moduleExports.PaneRendererSeriesBase = PaneRendererSeriesBase;
}
