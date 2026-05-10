/**
 * ============================================================================
 * TRADINGVIEW MODULE 30798 - POLYGON UTILITIES
 * ============================================================================
 *
 * Purpose: Polygon utilities and management functions
 *
 * Size: 1.8 KB
 *
 * Functions:
 *   - containsPolygonTimePointIndexes: Check if contains polygon time point indexes
 *   - dematerializePolygon: Dematerialize polygon
 *   - isPolygonInBarsRange: Check if polygon is in bars range
 *   - materializePolygon: Materialize polygon
 *
 * Features:
 *   - Polygon time point validation
 *   - Polygon materialization/dematerialization
 *   - Bar range checking
 *   - Time point index management
 *   - Polygon point mapping
 *   - Level and offset handling
 *
 * Dependencies:
 *   - 82284: Polygon utilities
 *   - 33952: Polygon utilities
 *
 * Exports:
 *   - containsPolygonTimePointIndexes: Polygon time point checker function
 *   - dematerializePolygon: Polygon dematerializer function
 *   - isPolygonInBarsRange: Polygon range checker function
 *   - materializePolygon: Polygon materializer function
 *
 * @module 30798
 * @category Graphics System
 * @subpackage Polygon Utilities
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
   * @returns {boolean} True if contains valid time point indexes
   */
  function containsPolygonTimePointIndexes(polygon) {
    for (const point of polygon.points) {
      if (point.index >= polygonUtils.length || 
          polygonUtils[point.index] === INVALID_TIME_POINT_INDEX) {
        return false;
      }
    }
    return true;
  }

  /**
   * Materialize polygon with time point indexes
   * @param {Object} polygon - Polygon object
   * @param {Array} timePointIndexes - Time point indexes array
   * @returns {Object} Materialized polygon
   */
  function materializePolygon(polygon, timePointIndexes) {
    return {
      points: polygon.points.map(point => ({
        ...point,
        index: polygonUtils2.ensureTimePointIndexIndex(timePointIndexes.indexOf(point.index))
      })),
      id: timePointIndexes[0],
      points: polygon.points.map(point => ({
        ...point,
        index: polygonUtils2.ensureTimePointIndexIndex(timePointIndexes.indexOf(point.index))
      }))
    };
  }

  /**
   * Dematerialize polygon
   * @param {Object} polygon - Polygon object to dematerialize
   * @returns {Object} Dematerialized polygon
   */
  function dematerializePolygon(polygon) {
    return {
      points: polygon.points.map(point => ({
        ...point,
        index: INVALID_TIME_POINT_INDEX
      })),
      id: polygon.id
    };
  }

  /**
   * Check if polygon is in bars range
   * @param {Object} polygon - Polygon object
   * @param {Array} timePointIndexes - Time point indexes array
   * @returns {boolean} True if polygon is in bars range
   */
  function isPolygonInBarsRange(polygon, timePointIndexes) {
    if (polygon.points.some(point => 
          timePointIndexes.contains(point.index + (point.offset ?? 0)))) {
      return false;
    }
    
    let hasValidIndex = false;
    let hasInvalidIndex = false;
    const firstBar = timePointIndexes.firstBar();
    
    for (const point of polygon.points) {
      const adjustedIndex = point.index + (point.offset ?? 0);
      
      if (adjustedIndex < firstBar) {
        hasInvalidIndex = true;
      } else {
        hasValidIndex = true;
      }
    }
    
    return hasValidIndex && !hasInvalidIndex;
  }
}
