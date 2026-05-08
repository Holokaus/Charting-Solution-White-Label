/**
 * ============================================================================
 * TRADINGVIEW MODULE 82130 - PRIMITIVE NAMES AND UTILITIES
 * ============================================================================
 *
 * Purpose: Constants and utilities for chart graphics primitives
 *
 * Size: 2.4 KB
 *
 * Functions:
 *   - groupedPrimitiveNames: Array of grouped primitive names
 *   - hasForceOverlayPrimitives: Check if graphics has force overlay
 *   - isRegularPrimitiveName: Check if primitive name is regular
 *   - isStudyGraphicsEmpty: Check if study graphics is empty
 *   - primitiveNames: Array of all primitive names
 *   - primitivesZOrders: Z-order mapping for primitives
 *   - regularPrimitiveNames: Array of regular primitive names
 *   - splitHHistsByTimePointIndex: Split histograms by time point
 *
 * Primitive Categories:
 *   - Drawing primitives: dwglines, dwgboxes, dwglabels, dwgpolylines, dwgtables
 *   - Regular primitives: horizlines, vertlines, lines, hlines, textmarks, etc.
 *   - Grouped primitives: tpoBlockSets, tpoLevels, tpoVolumeRows, tpoSummaryInfo
 *
 * @module 82130
 * @category Chart Graphics
 * @subcategory Primitive Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    groupedPrimitiveNames: () => groupedPrimitiveNames,
    hasForceOverlayPrimitives: () => hasForceOverlayPrimitives,
    isRegularPrimitiveName: () => isRegularPrimitiveName,
    isStudyGraphicsEmpty: () => isStudyGraphicsEmpty,
    primitiveNames: () => primitiveNames,
    primitivesZOrders: () => primitivesZOrders,
    regularPrimitiveNames: () => regularPrimitiveNames,
    splitHHistsByTimePointIndex: () => splitHHistsByTimePointIndex
  });

  // Drawing primitives (force overlay)
  const drawingPrimitives = ["dwglines", "dwgboxes", "dwglabels", "dwgpolylines", "dwgtables"];

  // Regular primitives
  const regularPrimitives = [
    "horizlines", "vertlines", "lines", "hlines", "textmarks", "shapemarks", 
    "backgrounds", "polygons", "trendchannels", "hhists", "dwgtablecells", 
    "dwglinefills", "tpos", "logs", "performance", "footprints", "footprintLevels"
  ];

  // Grouped primitives
  const groupedPrimitives = drawingPrimitives.concat([
    "tpoBlockSets", "tpoLevels", "tpoVolumeRows", "tpoSummaryInfo"
  ]);

  // All primitive names
  const primitiveNames = regularPrimitives.concat(groupedPrimitives);

  // Z-order mapping for rendering layers
  const primitivesZOrders = new Map([
    ["logs", -4],
    ["performance", -4],
    ["polygons", -4],
    ["trendchannels", -3],
    ["textmarks", -2],
    ["shapemarks", -2],
    ["backgrounds", -1],
    ["footprints", 1],
    ["footprintLevels", 1],
    ["hlines", 1],
    ["horizlines", 1],
    ["hhists", 1],
    ["dwglinefills", 2],
    ["vertlines", 3],
    ["lines", 3],
    ["dwglines", 3],
    ["dwgpolylines", 3],
    ["dwgboxes", 4],
    ["dwglabels", 5],
    ["dwgtables", 6],
    ["dwgtablecells", 6],
    ["tpos", 7],
    ["tpoBlockSets", 7],
    ["tpoLevels", 7],
    ["tpoVolumeRows", 7],
    ["tpoSummaryInfo", 1]
  ]);

  /**
   * Check if primitive name is regular
   * @param {string} primitiveName - Name to check
   * @returns {boolean} True if regular primitive
   */
  function isRegularPrimitiveName(primitiveName) {
    return regularPrimitives.includes(primitiveName);
  }

  /**
   * Check if study graphics is empty
   * @param {Object} graphics - Graphics object to check
   * @returns {boolean} True if graphics is empty
   */
  function isStudyGraphicsEmpty(graphics) {
    return !primitiveNames.some((primitiveType => {
      const primitiveData = graphics[primitiveType]();
      for (const [, primitive] of primitiveData) {
        if (primitive.size > 0) return true;
      }
      return false;
    }));
  }

  /**
   * Check if graphics has force overlay primitives
   * @param {Object} graphics - Graphics object to check
   * @returns {boolean} True if has force overlay primitives
   */
  function hasForceOverlayPrimitives(graphics) {
    return !!(graphics.dwglines || graphics.dwgboxes || graphics.dwglabels || 
             graphics.dwgpolylines || graphics.dwgtables);
  }

  /**
   * Split histograms by time point index
   * @param {Object} graphics - Graphics object containing histograms
   * @returns {Map} Map of time points to histogram data
   */
  function splitHHistsByTimePointIndex(graphics) {
    const timePointMap = new Map();
    
    graphics.forEach((graphicData, styleId) => {
      graphicData.forEach((histogram) => {
        const histogramData = {
          ...histogram,
          styleId: styleId
        };
        const firstBarTime = histogram.firstBarTime;
        
        let timePointSet = timePointMap.get(firstBarTime);
        if (void 0 === timePointSet) {
          timePointSet = new Set();
          timePointMap.set(firstBarTime, timePointSet);
        }
        timePointSet.add(histogramData);
      });
    }));
    
    return timePointMap;
  }
}
