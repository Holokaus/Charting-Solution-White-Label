/**
 * ============================================================================
 * TRADINGVIEW MODULE 23752 - TIME AXIS VIEW
 * ============================================================================
 *
 * Purpose: Time axis view rendering and text drawing
 *
 * Size: 3.7 KB
 *
 * Class: TimeAxisView
 *   - Renders time axis text labels
 *   - Handles text measurement and positioning
 *   - Manages background and border drawing
 *   - Supports coordinate calculations
 *
 * Features:
 *   - Text rendering with background
 *   - Arc drawing for time indicators
 *   - Coordinate system calculations
 *   - Padding and sizing management
 *
 * Dependencies:
 *   - 52859: Line tool manager utilities
 *   - 33350: Text measurement utilities
 *
 * Exports:
 *   - TimeAxisView: Time axis view class
 *
 * @module 23752
 * @category Chart Rendering
 * @subpackage Time Axis
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    TimeAxisView: () => TimeAxisView
  });

  const textUtils = moduleRequire(52859),
    coordinateUtils = moduleRequire(33350);

  /**
   * Time axis view renderer
   */
  class TimeAxisView {
    constructor() {
      this._data = null;
    }

    /**
     * Set data for rendering
     * @param {Object} data - Time axis data
     */
    setData(data) {
      this._data = data;
    }

    /**
     * Draw time axis text
     * @param {CanvasRenderingContext2D} ctx - Canvas context
     * @param {Object} textData - Text data object
     * @param {Object} coordinateData - Coordinate data
     */
    draw(ctx, textData, coordinateData) {
      if (null === this._data || !this._data.visible || 0 === this._data.text.length) {
        return;
      }

      const data = this._data;
      ctx.font = textData.font;
      
      const textWidth = Math.round(coordinateUtils.widthCache.measureText(data.text, data.text));
      if (textWidth <= 0) {
        return;
      }

      ctx.save();
      
      const padding = coordinateUtils.paddingHorizontal;
      const totalWidth = textWidth + 2 * padding;
      const halfWidth = totalWidth / 2;
      
      let coordinate = data.coordinate;
      const verticalOffset = Math.floor(coordinate - halfWidth) + 0.5;
      
      if (data.alwaysInViewPort) {
        const canvasWidth = data.width;
        const rightEdge = verticalOffset + textWidth + coordinateUtils.borderSize + coordinateUtils.offsetSize + coordinateUtils.paddingTop + coordinateUtils.fontSize + coordinateUtils.paddingBottom;
        
        if (verticalOffset < 0) {
          coordinate += Math.abs(0 - verticalOffset);
          verticalOffset = Math.floor(coordinate - halfWidth) + 0.5;
        } else if (rightEdge > canvasWidth) {
          coordinate -= Math.abs(rightEdge - (verticalOffset + textWidth));
          verticalOffset = Math.floor(coordinate - halfWidth) + 0.5;
        }
      }

      const bottomEdge = verticalOffset + totalWidth;
      const leftEdge = verticalOffset;
      const rightEdge = verticalOffset + textWidth;
      
      const {
        horizontalPixelRatio: hRatio,
        verticalPixelRatio: vRatio
      } = coordinateData;

      const x = Math.round(coordinate * hRatio);
      const y = Math.round(0 * vRatio);
      const width = Math.round(bottomEdge * hRatio);
      const height = Math.round((coordinateUtils.borderSize + coordinateUtils.offsetSize + coordinateUtils.paddingTop + coordinateUtils.fontSize + coordinateUtils.paddingBottom) * vRatio);
      const radius = Math.round(2 * hRatio);
      const arcY = Math.round((verticalOffset + textWidth) * hRatio);
      const arcHeight = Math.round(height * vRatio);

      ctx.fillStyle = data.background;
      ctx.beginPath();
      ctx.moveTo(x, y - arcHeight);
      ctx.lineTo(x, y + arcHeight);
      ctx.arcTo(x + radius, y + arcHeight, x + radius, y, x + radius, y);
      ctx.lineTo(x - radius, y);
      ctx.arcTo(x - radius, y, x - radius, y + arcHeight, x - radius, y + arcHeight);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }
  }

  // Export the TimeAxisView class
  moduleExports.TimeAxisView = TimeAxisView;
}
