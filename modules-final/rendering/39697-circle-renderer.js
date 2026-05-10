/**
 * ============================================================================
 * TRADINGVIEW MODULE 39697 - CIRCLE RENDERER
 * ============================================================================
 *
 * Purpose: Circle rendering for line tools
 *
 * Size: 2.4 KB
 *
 * Class: CircleRenderer
 *   - Renders circles for line tools
 *   - Handles hit testing
 *   - Supports styling options
 *   - Provides coordinate calculations
 *
 * Features:
 *   - Circle drawing
 *   - Hit testing with tolerance
 *   - Style management
 *   - Coordinate conversion
 *   - Background color support
 *
 * Dependencies:
 *   - 6453: Line tool utilities
 *   - 2383: Line tool utilities
 *   - 4539: Line tool utilities
 *
 * Exports:
 *   - CircleRenderer: Circle renderer class
 *
 * @module 39697
 * @category Chart Rendering
 * @subpackage Shape Rendering
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.lineToolManager_d(moduleConfig, {
    CircleRenderer: () => CircleRenderer
  });

  const LineToolUtils = moduleRequire(6453),
    LineToolUtils2 = moduleRequire(2383),
    LineToolUtils3 = moduleRequire(4539);

  /**
   * Circle renderer implementation
   */
  class CircleRenderer {
    constructor(data) {
      this._data = data ?? null;
    }

    /**
     * Set data for rendering
     * @param {Object} data - Circle data object
     */
    setData(data) {
      this._data = data;
    }

    /**
     * Draw circle
     * @param {Object} ctx - Canvas context
     * @param {Object} renderData - Render data object
     */
    draw(ctx, renderData) {
      if (this._data === null) {
        return;
      }

      const {
        center: { x: centerX, y: centerY },
        radius: circleRadius,
        lineWidth: lineWidth,
        color: lineColor,
        backColor: backgroundColor
      } = this._data;

      const {
        horizontalPixelRatio: hPixelRatio,
        verticalPixelRatio: vPixelRatio
      } = renderData;

      // Calculate pixel coordinates
      const pixelRadius = Math.max(1, Math.floor(lineWidth * hPixelRatio));
      const pixelCenterX = Math.round(centerX * hPixelRatio);
      const pixelCenterY = Math.round(centerY * vPixelRatio);
      const pixelRadius = Math.round(circleRadius * hPixelRatio);

      ctx.save();
      
      // Draw background circle if specified
      if (backgroundColor) {
        ctx.fillStyle = backgroundColor;
        ctx.beginPath();
        ctx.arc(pixelCenterX, pixelCenterY, pixelRadius, 0, 2 * Math.PI, true);
        ctx.fill();
      }

      // Draw circle outline
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = pixelRadius;
      ctx.beginPath();
      ctx.arc(pixelCenterX, pixelCenterY, pixelRadius, 0, 2 * Math.PI, true);
      ctx.stroke();
      
      ctx.restore();
    }

    /**
     * Hit test for circle
     * @param {Object} point - Point to test
     * @returns {Object|null} Hit test result
     */
    hitTest(point) {
      if (this._data === null || this._data.disableInteractions) {
        return null;
      }

      const {
        center: { x: centerX, y: centerY },
        radius: circleRadius,
        backgroundHitTarget: hitTarget
      } = this._data;

      const distance = Math.sqrt(
        Math.pow(point.x - centerX, 2) + Math.pow(point.y - centerY, 2)
      );

      const tolerance = LineToolUtils3.actionTolerance();
      
      if (distance > circleRadius + tolerance) {
        return null;
      }

      return {
        hitTarget: hitTarget || LineToolUtils2.HitTarget.MovePointBackground
      };
    }
  }

  // Export the CircleRenderer class
  moduleExports.CircleRenderer = CircleRenderer;
}
