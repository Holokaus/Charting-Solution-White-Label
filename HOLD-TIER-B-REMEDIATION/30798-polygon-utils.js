/**
 * ============================================================================
 * TRADINGVIEW MODULE 30798 - POLYGON UTILITIES
 * ============================================================================
 *
 * Purpose: Polygon utilities for chart rendering
 *
 * Size: 2.4 KB
 *
 * Functions:
 *   - containsPolygonTimePointIndexes: Check if polygon contains time point indexes
 *   - dematerializePolygon: Dematerialize polygon data
 *   - isPolygonInBarsRange: Check if polygon is in bars range
 *   - materializePolygon: Materialize polygon data
 *
 * Features:
 *   - Polygon time point validation
 *   - Polygon data transformation
 *   - Range checking utilities
 *   - Materialization/dematerialization
 *
 * Dependencies:
 *   - 82284: Polygon utilities
 *   - 33952: Polygon utilities
 *
 * Exports:
 *   - containsPolygonTimePointIndexes: Time point index check function
 *   - dematerializePolygon: Dematerialization function
 *   - isPolygonInBarsRange: Bars range check function
 *   - materializePolygon: Materialization function
 *
 * @module 30798
 * @category Chart Rendering
 * @subcategory Polygon Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    containsPolygonTimePointIndexes: () => containsPolygonTimePointIndexes,
    dematerializePolygon: () => dematerializePolygon,
    isPolygonInBarsRange: () => isPolygonInBarsRange,
    materializePolygon: () => materializePolygon
  });

  const polygonUtils = moduleRequire(82284),
    polygonUtils2 = moduleRequire(33952);

  const INVALID_TIME_POINT_INDEX = -1;

  /**
   * Check if polygon contains time point indexes
   * @param {Object} polygon - Polygon object
   * @param {Array} timePoints - Time points array
   * @returns {boolean} True if contains valid time point indexes
   */
  function containsPolygonTimePointIndexes(polygon, timePoints) {
    for (const point of polygon.points) {
      if (point.index >= timePoints.length) {
        return false;
      }
      
      if (timePoints[point.index] === INVALID_TIME_POINT_INDEX) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Dematerialize polygon data
   * @param {Object} polygon - Polygon object
   * @param {Array} timePoints - Time points array
   * @returns {Object} Dematerialized polygon object
   */
  function dematerializePolygon(polygon, timePoints) {
    return {
      id: polygon.id,
      points: polygon.points.map(point => ({
        index: (0, polygonUtils2.ensureTimePointIndexIndex)(timePoints.indexOf(point.index)),
        offset: point.offset,
        level: point.level
      }))
    };
  }

  /**
   * Check if polygon is in bars range
   * @param {Object} polygon - Polygon object
   * @param {Array} timePoints - Time points array
   * @returns {boolean} True if polygon is in bars range
   */
  function isPolygonInBarsRange(polygon, timePoints) {
    if (polygon.points.some(point => 
        point.index >= timePoints.length || 
        timePoints[point.index] === INVALID_TIME_POINT_INDEX
      )) {
      return false;
    }
    
    const firstBar = timePoints.firstBar();
    const lastBar = timePoints.lastBar();
    
    return polygon.points.some(point => 
        point.index + (point.offset || 0) >= firstBar && 
        point.index + (point.offset || 0) <= lastBar
      );
  }

  /**
   * Materialize polygon data
   * @param {Object} polygon - Polygon object
   * @param {Array} timePoints - Time points array
   * @returns {Object} Materialized polygon object
   */
  function materializePolygon(polygon, timePoints) {
    return {
      id: polygon.id,
      points: polygon.points.map(point => ({
        ...point,
        index: (0, polygonUtils2.ensureTimePointIndexIndex)(timePoints.indexOf(point.index))
      }))
    };
  }
}
