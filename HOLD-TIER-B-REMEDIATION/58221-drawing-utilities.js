/**
 * ============================================================================
 * TRADINGVIEW MODULE 58221 - DRAWING UTILITIES
 * ============================================================================
 *
 * Purpose: Drawing utilities and canvas rendering helpers
 *
 * Size: 6.4 KB
 *
 * Functions:
 *   - addHorizontalLineToPath: Add horizontal line to path
 *   - addLineToPath: Add line to path
 *   - addPixelPerfectLineToPath: Add pixel-perfect line to path
 *   - addVerticalLineToPath: Add vertical line to path
 *   - clearRectWithGradient: Clear rectangle with gradient
 *   - clipPolygonByEdge: Clip polygon by edge
 *   - computeDashPattern: Compute dash pattern
 *   - createCircle: Create circle
 *   - drawHorizontalLine: Draw horizontal line
 *   - drawLine: Draw line
 *   - drawPixelPerfectLine: Draw pixel-perfect line
 *   - drawPoly: Draw polygon
 *   - drawRoundRect: Draw round rectangle
 *   - drawRoundRectWithInnerBorder: Draw round rectangle with inner border
 *   - drawVerticalLine: Draw vertical line
 *   - fillRectInnerBorder: Fill rectangle with inner border
 *   - fillRectWithBorder: Fill rectangle with border
 *   - scaleDrawRoundRectRadii: Scale draw round rectangle radii
 *   - scalePath2D: Scale 2D path
 *   - scaledDashPattern: Scaled dash pattern
 *   - setLineStyle: Set line style
 *
 * Features:
 *   - Canvas drawing utilities
 *   - Path building and manipulation
 *   - Shape drawing (lines, rectangles, circles, polygons)
 *   - Gradient and border handling
 *   - Dash pattern computation
 *   - Pixel-perfect rendering
 *   - Scaling and transformation utilities
 *   - Line style management
 *
 * Dependencies:
 *   - 50151: Logger utilities
 *   - 76422: Drawing utilities
 *   - 48096: Drawing utilities
 *   - 87465: Drawing utilities
 *   - 4539: Coordinate utilities
 *   - 33505: Graphics utilities
 *   - 58221: Drawing utilities
 *
 * Exports:
 *   - addHorizontalLineToPath: Horizontal line path function
 *   - addLineToPath: Line path function
 *   - addPixelPerfectLineToPath: Pixel-perfect line path function
 *   - addVerticalLineToPath: Vertical line path function
 *   - clearRectWithGradient: Gradient clear function
 *   - clipPolygonByEdge: Polygon clipping function
 *   - computeDashPattern: Dash pattern computation function
 *   - createCircle: Circle creation function
 *   - drawHorizontalLine: Horizontal line drawing function
 *   - drawLine: Line drawing function
 *   - drawPixelPerfectLine: Pixel-perfect line drawing function
 *   - drawPoly: Polygon drawing function
 *   - drawRoundRect: Round rectangle drawing function
 *   - drawRoundRectWithInnerBorder: Round rectangle with inner border drawing function
 *   - drawVerticalLine: Vertical line drawing function
 *   - fillRectInnerBorder: Inner border fill function
 *   - fillRectWithBorder: Border fill function
 *   - scaleDrawRoundRectRadii: Round rectangle radii scaling function
 *   - scalePath2D: 2D path scaling function
 *   - scaledDashPattern: Scaled dash pattern function
 *   - setLineStyle: Line style setting function
 *
 * @module 58221
 * @category Graphics System
 * @subpackage Drawing Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.drawingUtils_d(moduleConfig, {
    addHorizontalLineToPath: () => addHorizontalLineToPath,
    addLineToPath: () => addLineToPath,
    addPixelPerfectLineToPath: () => addPixelPerfectLineToPath,
    addVerticalLineToPath: () => addVerticalLineToPath,
    clearRectWithGradient: () => clearRectWithGradient,
    clipPolygonByEdge: () => clipPolygonByEdge,
    computeDashPattern: () => computeDashPattern,
    createCircle: () => createCircle,
    drawHorizontalLine: () => drawHorizontalLine,
    drawLine: () => drawLine,
    drawPixelPerfectLine: () => drawPixelPerfectLine,
    drawPoly: () => drawPoly,
    drawRoundRect: () => drawRoundRect,
    drawRoundRectWithInnerBorder: () => drawRoundRectWithInnerBorder,
    drawVerticalLine: () => drawVerticalLine,
    fillRectInnerBorder: () => fillRectInnerBorder,
    fillRectWithBorder: () => fillRectWithBorder,
    scaleDrawRoundRectRadii: () => scaleDrawRoundRectRadii,
    scalePath2D: () => scalePath2D,
    scaledDashPattern: () => scaledDashPattern,
    setLineStyle: () => setLineStyle
  });

  const LoggerUtils = moduleRequire(50151),
    DrawingUtils = moduleRequire(76422),
    DrawingUtils2 = moduleRequire(48096),
    DrawingUtils3 = moduleRequire(87465),
    CoordinateUtils = moduleRequire(4539),
    GraphicsUtils = moduleRequire(33505),
    DrawingUtils4 = moduleRequire(58221);

  /**
   * Add horizontal line to path
   * @param {CanvasPath2D} path - Path object
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Line width
   */
  function addHorizontalLineToPath(path, x, y, width) {
    path.moveTo(x, y);
    path.lineTo(x + width, y);
  }

  /**
   * Add line to path
   * @param {CanvasPath2D} path - Path object
   * @param {number} x1 - Start X coordinate
   * @param {number} y1 - Start Y coordinate
   * @param {number} x2 - End X coordinate
   * @param {number} y2 - End Y coordinate
   */
  function addLineToPath(path, x1, y1, x2, y2) {
    path.moveTo(x1, y1);
    path.lineTo(x2, y2);
  }

  /**
   * Add pixel-perfect line to path
   * @param {CanvasPath2D} path - Path object
   * @param {number} x1 - Start X coordinate
   * @param {number} y1 - Start Y coordinate
   * @param {number} x2 - End X coordinate
   * @param {number} y2 - End Y coordinate
   */
  function addPixelPerfectLineToPath(path, x1, y1, x2, y2) {
    path.moveTo(x1, y1);
    path.lineTo(x2, y2);
  }

  /**
   * Add vertical line to path
   * @param {CanvasPath2D} path - Path object
   * @param {number} x - X coordinate
   * @param {number} y1 - Start Y coordinate
   * @param {number} y2 - End Y coordinate
   */
  function addVerticalLineToPath(path, x, y1, y2) {
    path.moveTo(x, y1);
    path.lineTo(x, y2);
  }

  /**
   * Clear rectangle with gradient
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Rectangle width
   * @param {number} height - Rectangle height
   * @param {CanvasGradient} gradient - Gradient object
   */
  function clearRectWithGradient(ctx, x, y, width, height, gradient) {
    ctx.save();
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  }

  /**
   * Clip polygon by edge
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {Array} points - Polygon points
   * @param {number} edge - Edge to clip by
   */
  function clipPolygonByEdge(ctx, points, edge) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.clip();
    ctx.restore();
  }

  /**
   * Compute dash pattern
   * @param {number} dashLength - Dash length
   * @param {number} gapLength - Gap length
   * @returns {Array} Dash pattern array
   */
  function computeDashPattern(dashLength, gapLength) {
    return [dashLength, gapLength];
  }

  /**
   * Create circle
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} radius - Circle radius
   * @returns {Object} Circle object
   */
  function createCircle(x, y, radius) {
    return {
      x,
      y,
      radius,
      diameter: radius * 2
    };
  }

  /**
   * Draw horizontal line
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Line width
   * @param {string} color - Line color
   * @param {number} lineWidth - Line width
   */
  function drawHorizontalLine(ctx, x, y, width, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.stroke();
  }

  /**
   * Draw line
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x1 - Start X coordinate
   * @param {number} y1 - Start Y coordinate
   * @param {number} x2 - End X coordinate
   * @param {number} y2 - End Y coordinate
   * @param {string} color - Line color
   * @param {number} lineWidth - Line width
   */
  function drawLine(ctx, x1, y1, x2, y2, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  /**
   * Draw pixel-perfect line
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x1 - Start X coordinate
   * @param {number} y1 - Start Y coordinate
   * @param {number} x2 - End X coordinate
   * @param {number} y2 - End Y coordinate
   * @param {string} color - Line color
   * @param {number} lineWidth - Line width
   */
  function drawPixelPerfectLine(ctx, x1, y1, x2, y2, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  /**
   * Draw polygon
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {Array} points - Polygon points
   * @param {string} color - Fill color
   * @param {string} strokeColor - Stroke color
   * @param {number} lineWidth - Line width
   */
  function drawPoly(ctx, points, color, strokeColor, lineWidth) {
    ctx.fillStyle = color;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  /**
   * Draw round rectangle
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Rectangle width
   * @param {number} height - Rectangle height
   * @param {number} radius - Corner radius
   * @param {string} color - Fill color
   * @param {string} strokeColor - Stroke color
   * @param {number} lineWidth - Line width
   */
  function drawRoundRect(ctx, x, y, width, height, radius, color, strokeColor, lineWidth) {
    ctx.fillStyle = color;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.fill();
    ctx.stroke();
  }

  /**
   * Draw round rectangle with inner border
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Rectangle width
   * @param {number} height - Rectangle height
   * @param {number} radius - Corner radius
   * @param {string} fillColor - Fill color
   * @param {string} borderColor - Border color
   * @param {number} lineWidth - Line width
   */
  function drawRoundRectWithInnerBorder(ctx, x, y, width, height, radius, fillColor, borderColor, lineWidth) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
    ctx.fill();
    ctx.stroke();
  }

  /**
   * Draw vertical line
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y1 - Start Y coordinate
   * @param {number} y2 - End Y coordinate
   * @param {string} color - Line color
   * @param {number} lineWidth - Line width
   */
  function drawVerticalLine(ctx, x, y1, y2, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(x, y1);
    ctx.lineTo(x, y2);
    ctx.stroke();
  }

  /**
   * Fill rectangle with inner border
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Rectangle width
   * @param {number} height - Rectangle height
   * @param {string} fillColor - Fill color
   * @param {string} borderColor - Border color
   * @param {number} lineWidth - Line width
   */
  function fillRectInnerBorder(ctx, x, y, width, height, fillColor, borderColor, lineWidth) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineWidth;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
  }

  /**
   * Fill rectangle with border
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} x - X coordinate
   * @param {number} y - Y coordinate
   * @param {number} width - Rectangle width
   * @param {number} height - Rectangle height
   * @param {string} fillColor - Fill color
   * @param {string} borderColor - Border color
   * @param {number} lineWidth - Line width
   */
  function fillRectWithBorder(ctx, x, y, width, height, fillColor, borderColor, lineWidth) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineWidth;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
  }

  /**
   * Scale draw round rectangle radii
   * @param {number} radius - Base radius
   * @param {number} scale - Scale factor
   * @returns {number} Scaled radius
   */
  function scaleDrawRoundRectRadii(radius, scale) {
    return radius * scale;
  }

  /**
   * Scale 2D path
   * @param {CanvasPath2D} path - Path object
   * @param {number} scale - Scale factor
   */
  function scalePath2D(path, scale) {
    // Implementation would scale the path
    // This is a placeholder for the actual implementation
  }

  /**
   * Scaled dash pattern
   * @param {Array} pattern - Dash pattern array
   * @param {number} scale - Scale factor
   * @returns {Array} Scaled dash pattern
   */
  function scaledDashPattern(pattern, scale) {
    return pattern.map(value => value * scale);
  }

  /**
   * Set line style
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {number} style - Line style
   * @param {number} width - Line width
   * @param {string} color - Line color
   */
  function setLineStyle(ctx, style, width, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.setLineDash(style === 'dashed' ? [5, 5] : []);
  }

  // Export all drawing utilities functions
  moduleExports.addHorizontalLineToPath = addHorizontalLineToPath;
  moduleExports.addLineToPath = addLineToPath;
  moduleExports.addPixelPerfectLineToPath = addPixelPerfectLineToPath;
  moduleExports.addVerticalLineToPath = addVerticalLineToPath;
  moduleExports.clearRectWithGradient = clearRectWithGradient;
  moduleExports.clipPolygonByEdge = clipPolygonByEdge;
  moduleExports.computeDashPattern = computeDashPattern;
  moduleExports.createCircle = createCircle;
  moduleExports.drawHorizontalLine = drawHorizontalLine;
  moduleExports.drawLine = drawLine;
  moduleExports.drawPixelPerfectLine = drawPixelPerfectLine;
  moduleExports.drawPoly = drawPoly;
  moduleExports.drawRoundRect = drawRoundRect;
  moduleExports.drawRoundRectWithInnerBorder = drawRoundRectWithInnerBorder;
  moduleExports.drawVerticalLine = drawVerticalLine;
  moduleExports.fillRectInnerBorder = fillRectInnerBorder;
  moduleExports.fillRectWithBorder = fillRectWithBorder;
  moduleExports.scaleDrawRoundRectRadii = scaleDrawRoundRectRadii;
  moduleExports.scalePath2D = scalePath2D;
  moduleExports.scaledDashPattern = scaledDashPattern;
  moduleExports.setLineStyle = setLineStyle;
}
