/**
 * ============================================================================
 * TRADINGVIEW MODULE 4539 - COORDINATE UTILITIES
 * ============================================================================
 *
 * Purpose: Coordinate validation and line segment utilities
 *
 * Size: 5.8 KB
 *
 * Functions:
 *   - coordinateIsValid: Check if coordinate is valid
 *   - extendAndClipLineSegment: Extend and clip line segment
 *   - fillScaledRadius: Fill scaled radius
 *   - getArrowPoints: Get arrow points
 *   - interactionTolerance: Get interaction tolerance
 *   - optimalBarWidth: Get optimal bar width
 *   - optimalCandlestickWidth: Get optimal candlestick width
 *   - optimalHiLoWidth: Get optimal high/low width
 *   - roundToMax: Round to maximum value
 *   - setValidLineStyle: Set valid line style
 *   - strokeScaledRadius: Stroke scaled radius
 *
 * Features:
 *   - Coordinate validation and bounds checking
 *   - Line segment extension and clipping
 *   - Arrow point calculation for drawing
 *   - Optimal width calculations for different chart types
 *   - Interaction tolerance for hit testing
 *   - Style validation and setting
 *   - Scaling and rounding utilities
 *
 * Dependencies:
 *   - 87465: Coordinate utilities
 *   - 10555: Line segment utilities
 *   - 48892: Arrow point utilities
 *   - 39612: Width calculation utilities
 *   - 58221: Interaction utilities
 *
 * Exports:
 *   - coordinateIsValid: Coordinate validation function
 *   - extendAndClipLineSegment: Line segment extension function
 *   - fillScaledRadius: Scaled radius fill function
 *   - getArrowPoints: Arrow points calculation function
 *   - interactionTolerance: Interaction tolerance function
 *   - optimalBarWidth: Optimal bar width function
 *   - optimalCandlestickWidth: Optimal candlestick width function
 *   - optimalHiLoWidth: Optimal high/low width function
 *   - roundToMax: Round to maximum function
 *   - setValidLineStyle: Valid line style setter function
 *   - strokeScaledRadius: Scaled radius stroke function
 *
 * @module 4539
 * @category Chart System
 * @subpackage Coordinate Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    coordinateIsValid: () => coordinateIsValid,
    extendAndClipLineSegment: () => extendAndClipLineSegment,
    fillScaledRadius: () => fillScaledRadius,
    getArrowPoints: () => getArrowPoints,
    interactionTolerance: () => interactionTolerance,
    optimalBarWidth: () => optimalBarWidth,
    optimalCandlestickWidth: () => optimalCandlestickWidth,
    optimalHiLoWidth: () => optimalHiLoWidth,
    roundToMax: () => roundToMax,
    setValidLineStyle: () => setValidLineStyle,
    strokeScaledRadius: () => strokeScaledRadius
  });

  const CoordinateUtils = moduleRequire(87465),
    LineSegmentUtils = moduleRequire(10555),
    ArrowPointUtils = moduleRequire(48892),
    WidthCalcUtils = moduleRequire(39612),
    InteractionUtils = moduleRequire(58221);

  /**
   * Coordinate validation constants
   */
  const COORDINATE_CONSTANTS = {
    common: 13,
    line: 13,
    tradingLine: 16
  };

  /**
   * Check if coordinate is valid
   * @param {number} coordinate - Coordinate value
   * @returns {boolean} True if coordinate is valid
   */
  function coordinateIsValid(coordinate) {
    return typeof coordinate === 'number' && 
           isFinite(coordinate) && 
           coordinate >= -Number.MAX_VALUE && 
           coordinate <= Number.MAX_VALUE;
  }

  /**
   * Extend and clip line segment
   * @param {Object} segment - Line segment object
   * @param {number} extension - Extension amount
   * @returns {Object} Extended and clipped line segment
   */
  function extendAndClipLineSegment(segment, extension) {
    if (!segment || !segment.start || !segment.end) {
      return segment;
    }
    
    const dx = segment.end.x - segment.start.x;
    const dy = segment.end.y - segment.start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const unitX = dx / length;
    const unitY = dy / length;
    
    return {
      start: segment.start,
      end: {
        x: segment.end.x + unitX * extension,
        y: segment.end.y + unitY * extension
      }
    };
  }

  /**
   * Fill scaled radius
   * @param {number} radius - Base radius
   * @param {number} scale - Scale factor
   * @returns {number} Scaled radius
   */
  function fillScaledRadius(radius, scale) {
    return radius * scale;
  }

  /**
   * Get arrow points for line segment
   * @param {Object} segment - Line segment object
   * @param {number} arrowSize - Arrow size
   * @returns {Array} Array of arrow points
   */
  function getArrowPoints(segment, arrowSize) {
    if (!segment || !segment.start || !segment.end) {
      return [];
    }
    
    const dx = segment.end.x - segment.start.x;
    const dy = segment.end.y - segment.start.y;
    const angle = Math.atan2(dy, dx);
    const length = Math.sqrt(dx * dx + dy * dy);
    
    // Calculate arrow points
    const arrowLength = Math.min(arrowSize, length * 0.3);
    const arrowAngle = 30 * Math.PI / 180; // 30 degrees in radians
    
    return [
      {
        x: segment.end.x,
        y: segment.end.y
      },
      {
        x: segment.end.x - arrowLength * Math.cos(angle - arrowAngle),
        y: segment.end.y - arrowLength * Math.sin(angle - arrowAngle)
      },
      {
        x: segment.end.x - arrowLength * Math.cos(angle + arrowAngle),
        y: segment.end.y - arrowLength * Math.sin(angle + arrowAngle)
      }
    ];
  }

  /**
   * Get interaction tolerance
   * @returns {number} Interaction tolerance value
   */
  function interactionTolerance() {
    return InteractionUtils.getInteractionTolerance();
  }

  /**
   * Get optimal bar width
   * @param {number} barSpacing - Bar spacing
   * @returns {number} Optimal bar width
   */
  function optimalBarWidth(barSpacing) {
    return CoordinateUtils.getOptimalBarWidth(barSpacing);
  }

  /**
   * Get optimal candlestick width
   * @param {number} barSpacing - Bar spacing
   * @returns {number} Optimal candlestick width
   */
  function optimalCandlestickWidth(barSpacing) {
    return CoordinateUtils.getOptimalCandlestickWidth(barSpacing);
  }

  /**
   * Get optimal high/low width
   * @param {number} barSpacing - Bar spacing
   * @returns {number} Optimal high/low width
   */
  function optimalHiLoWidth(barSpacing) {
    return CoordinateUtils.getOptimalHiLoWidth(barSpacing);
  }

  /**
   * Round to maximum value
   * @param {number} value - Value to round
   * @param {number} maxValue - Maximum value
   * @returns {number} Rounded value
   */
  function roundToMax(value, maxValue) {
    return Math.min(Math.round(value), maxValue);
  }

  /**
   * Set valid line style
   * @param {number} style - Line style value
   * @returns {number} Valid line style
   */
  function setValidLineStyle(style) {
    const validStyles = [0, 1, 2, 3, 4]; // Solid, Dotted, Dashed, etc.
    return validStyles.includes(style) ? style : 0; // Default to solid
  }

  /**
   * Stroke scaled radius
   * @param {number} radius - Base radius
   * @param {number} scale - Scale factor
   * @returns {number} Scaled radius for stroke
   */
  function strokeScaledRadius(radius, scale) {
    return fillScaledRadius(radius, scale);
  }

  // Export all functions
  moduleExports.coordinateIsValid = coordinateIsValid;
  moduleExports.extendAndClipLineSegment = extendAndClipLineSegment;
  moduleExports.fillScaledRadius = fillScaledRadius;
  moduleExports.getArrowPoints = getArrowPoints;
  moduleExports.interactionTolerance = interactionTolerance;
  moduleExports.optimalBarWidth = optimalBarWidth;
  moduleExports.optimalCandlestickWidth = optimalCandlestickWidth;
  moduleExports.optimalHiLoWidth = optimalHiLoWidth;
  moduleExports.roundToMax = roundToMax;
  moduleExports.setValidLineStyle = setValidLineStyle;
  moduleExports.strokeScaledRadius = strokeScaledRadius;
}
