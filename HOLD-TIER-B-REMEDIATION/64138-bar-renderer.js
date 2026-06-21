/**
 * ============================================================================
 * TRADINGVIEW MODULE 64138 - BAR RENDERER
 * ============================================================================
 *
 * Purpose: Bar rendering utilities and pane renderer
 *
 * Size: 2.2 KB
 *
 * Classes:
 *   - PaneRendererBars: Bar pane renderer implementation
 *
 * Features:
 *   - Bar data rendering and display
 *   - Bar width calculation and optimization
 *   - Open/close bar handling
 *   - Thin bar support
 *   - Pixel ratio management
 *   - Canvas context handling
 *   - Horizontal and vertical pixel scaling
 *
 * Dependencies:
 *   - 4539: Coordinate utilities
 *   - 33505: Graphics utilities
 *
 * Exports:
 *   - PaneRendererBars: Bar pane renderer function
 *
 * @module 64138
 * @category Chart System
 * @subpackage Rendering
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.barRenderer_d(moduleConfig, {
    PaneRendererBars: () => PaneRendererBars
  });

  const CoordinateUtils = moduleRequire(4539),
    GraphicsUtils = moduleRequire(33505);

  /**
   * Bar pane renderer class
   */
  class PaneRendererBars extends GraphicsUtils.PaneRendererSeriesBase {
    constructor(barData) {
      super();
      this._bars = barData.bars;
      this._dontDrawOpen = barData.dontDrawOpen;
      this._thinBars = barData.thinBars;
    }

    /**
     * Draw implementation
     * @param {Object} renderData - Render data object
     */
    _drawImpl(renderData) {
      const context = renderData.context;
      const horizontalPixelRatio = renderData.horizontalPixelRatio;
      const verticalPixelRatio = renderData.verticalPixelRatio;
      
      context.save();
      
      try {
        for (const bar of this._bars) {
          const realBarWidth = this._calcRealBarWidth(
            bar.right - bar.left,
            horizontalPixelRatio
          );
          
          if (realBarWidth >= 2) {
            // Adjust for even bar width
            Math.max(1, Math.floor(horizontalPixelRatio)) % 2 !== realBarWidth % 2 && realBarWidth--;
          }
          
          const barWidth = Math.max(1, Math.floor(horizontalPixelRatio));
          
          // Draw bar
          context.fillStyle = bar.color || '#000000';
          context.fillRect(
            bar.left * horizontalPixelRatio,
            bar.open * verticalPixelRatio,
            barWidth,
            bar.close * verticalPixelRatio - bar.open * verticalPixelRatio
          );
          
          // Draw open line if needed
          if (!this._dontDrawOpen) {
            context.strokeStyle = bar.lineColor || '#666666';
            context.lineWidth = this._thinBars ? 1 : 2;
            context.beginPath();
            context.moveTo(
              (bar.left + barWidth / 2) * horizontalPixelRatio,
              bar.open * verticalPixelRatio
            );
            context.lineTo(
              (bar.left + barWidth / 2) * horizontalPixelRatio,
              bar.close * verticalPixelRatio
            );
            context.stroke();
          }
        }
      } finally {
        context.restore();
      }
    }

    /**
     * Calculate real bar width
     * @param {number} barWidth - Bar width
     * @param {number} horizontalPixelRatio - Horizontal pixel ratio
     * @returns {number} Real bar width
     */
    _calcRealBarWidth(barWidth, horizontalPixelRatio) {
      return Math.floor(barWidth * horizontalPixelRatio);
    }
  }

  // Export bar pane renderer function
  moduleExports.PaneRendererBars = PaneRendererBars;
}
