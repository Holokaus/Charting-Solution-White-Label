/**
 * ============================================================================
 * TRADINGVIEW MODULE 48227 - CANDLE RENDERER
 * ============================================================================
 *
 * Purpose: Candle rendering utilities and pane renderer
 *
 * Size: 4.5 KB
 *
 * Functions:
 *   - PaneRendererCandles: Create candle pane renderer
 *
 * Features:
 *   - Candle data rendering
 *   - Bar width optimization
 *   - Spacing calculation
 *   - Color management
 *   - Hit testing support
 *   - Canvas context management
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 2383: Coordinate utilities
 *   - 58221: Interaction utilities
 *   - 4539: Coordinate utilities
 *   - 33505: Graphics utilities
 *
 * Exports:
 *   - PaneRendererCandles: Candle pane renderer function
 *
 * @module 48227
 * @category Chart System
 * @subpackage Rendering
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    PaneRendererCandles: () => PaneRendererCandles
  });

  const AssertionUtils = moduleRequire(50151),
    CoordinateUtils = moduleRequire(2383),
    InteractionUtils = moduleRequire(58221),
    CoordinateUtils2 = moduleRequire(4539),
    GraphicsUtils = moduleRequire(33505);

  /**
   * Create candle pane renderer
   * @param {Object} candleData - Candle data object
   * @param {Object} timeScale - Time scale object
   * @param {Object} ctx - Canvas context
   * @returns {Object} Candle pane renderer
   */
  function PaneRendererCandles(candleData, timeScale, ctx) {
    const barSpacing = timeScale.barSpacing();
    const right = candleData.right;
    const left = candleData.left;
    
    return {
      data: candleData,
      barSpacing: barSpacing,
      right: right,
      left: left,
      
      /**
       * Calculate optimal bar positions
       * @param {Object} e - Event object
       * @returns {Array} Bar positions
       */
      barPositions: (e) => {
        const optimalWidth = CoordinateUtils2.optimalCandlestickWidth(barSpacing);
        const barWidth = Math.floor((right - left) * barSpacing);
        const barCount = Math.floor(barWidth / optimalWidth);
        
        let optimalBarCount = barCount;
        if (optimalBarCount >= 2 && optimalBarCount % 2 !== 0) {
          optimalBarCount--;
        }
        
        const positions = [];
        for (let i = 0; i < optimalBarCount; i++) {
          const x = left + (i * optimalWidth) + (optimalWidth / 2);
          positions.push({
            x: x,
            width: optimalWidth
          });
        }
        
        return positions;
      },
      
      /**
       * Draw candle data
       * @param {Object} ctx - Canvas context
       */
      draw: (ctx) => {
        if (!candleData || !ctx) return;
        
        const positions = this.barPositions();
        positions.forEach(position => {
          // Draw candle body
          ctx.fillStyle = candleData.bodyColor || '#000000';
          ctx.fillRect(position.x, candleData.open, position.width, candleData.close - candleData.open);
          
          // Draw candle wicks
          ctx.strokeStyle = candleData.wickColor || '#666666';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(position.x + position.width / 2, candleData.high);
          ctx.lineTo(position.x + position.width / 2, candleData.low);
          ctx.stroke();
        });
      },
      
      /**
       * Hit test for candle data
       * @param {number} x - X coordinate
       * @param {number} y - Y coordinate
       * @returns {boolean} True if hit
       */
      hitTest: (x, y) => {
        const positions = this.barPositions();
        return positions.some(position => 
          x >= position.x && 
          x <= position.x + position.width &&
          y >= Math.min(candleData.open, candleData.close) &&
          y <= Math.max(candleData.open, candleData.close)
        );
      }
    };
  }

  // Export the candle pane renderer function
  moduleExports.PaneRendererCandles = PaneRendererCandles;
}
