/**
 * ============================================================================
 * TRADINGVIEW MODULE 99481 - HISTOGRAM HISTORY CONSTANTS
 * ============================================================================
 *
 * Purpose: Constants for histogram history analysis and display
 *
 * Size: 2.4 KB
 *
 * Exports:
 *   - HHistDirection: Enum for histogram direction (left_to_right, right_to_left)
 *   - HHistLocation: Enum for histogram location (relative, absolute)
 *   - HHistVolumeMode: Enum for volume mode (Up/Down, Total, Delta)
 *   - containsHHistTimePointIndexes: Function to check if histogram contains time points
 *   - dematerializeHHist: Function to dematerialize histogram
 *   - isHHistInBarsRange: Function to check if histogram is in bars range
 *   - materializeHHist: Function to materialize histogram
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 33952: Time point index utilities
 *
 * @module 99481
 * @category Technical Indicators
 * @subcategory Histogram Analysis
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    HHistDirection: () => HHistDirection,
    HHistLocation: () => HHistLocation,
    HHistVolumeMode: () => HHistVolumeMode,
    containsHHistTimePointIndexes: () => containsHHistTimePointIndexes,
    dematerializeHHist: () => dematerializeHHist,
    isHHistInBarsRange: () => isHHistInBarsRange,
    materializeHHist: () => materializeHHist
  });

  var HHistDirection, HHistLocation, HHistVolumeMode;
  const assertionUtils = moduleRequire(50151),
    timePointUtils = moduleRequire(33952);

  // Histogram direction enumeration
  !function(HHistDirection) {
    HHistDirection[HHistDirection.LeftToRight = "left_to_right"] = "LeftToRight";
    HHistDirection[HHistDirection.RightToLeft = "right_to_left"] = "RightToLeft";
  }(HHistDirection || (HHistDirection = {}));

  // Histogram location enumeration
  !function(HHistLocation) {
    HHistLocation[HHistLocation.Relative = "relative"] = "Relative";
    HHistLocation[HHistLocation.Absolute = "absolute"] = "Absolute";
  }(HHistLocation || (HHistLocation = {}));

  // Histogram volume mode enumeration
  !function(HHistVolumeMode) {
    HHistVolumeMode[HHistVolumeMode.UpDown = "Up/Down"] = "UpDown";
    HHistVolumeMode[HHistVolumeMode.Total = "Total"] = "Total";
    HHistVolumeMode[HHistVolumeMode.Delta = "Delta"] = "Delta";
  }(HHistVolumeMode || (HHistVolumeMode = {}));

  const containsTimePoints = false;

  /**
   * Materialize histogram with time range validation
   * @param {Object} histogramData - Histogram data with time and price ranges
   * @param {Array} timePointIndexes - Array of time point indexes
   * @returns {Object|null} Materialized histogram or null if invalid
   */
  function materializeHHist(histogramData, timePointIndexes) {
    if (histogramData.lastBarTime >= timePointIndexes.length) return null;
    
    const firstTimeIndex = timePointIndexes[histogramData.firstBarTime],
      lastTimeIndex = timePointIndexes[histogramData.lastBarTime];
      
    return (0, assertionUtils.assert)(firstTimeIndex <= lastTimeIndex,
      "firstBarTime should not exceed lastBarTime"), 
      (0, assertionUtils.assert)(histogramData.priceLow <= histogramData.priceHigh,
        "priceLow should not exceed priceHigh"), {
        firstBarTime: firstTimeIndex === timePointUtils.INVALID_TIME_POINT_INDEX ? null : firstTimeIndex,
        lastBarTime: lastTimeIndex,
        rate: histogramData.rate,
        priceHigh: histogramData.priceHigh,
        priceLow: histogramData.priceLow
      };
  }

  /**
   * Dematerialize histogram for storage/transmission
   * @param {string} histogramId - Histogram identifier
   * @param {Object} histogramData - Histogram data
   * @param {Array} timePointIndexes - Array of time point indexes
   * @returns {Object} Dematerialized histogram
   */
  function dematerializeHHist(histogramId, histogramData, timePointIndexes) {
    const firstTimeIndex = (0, timePointUtils.ensureTimePointIndexIndex)(timePointIndexes.indexOf(histogramData.firstBarTime ?? timePointUtils.INVALID_TIME_POINT_INDEX)),
      lastTimeIndex = (0, timePointUtils.ensureTimePointIndexIndex)(timePointIndexes.indexOf(histogramData.lastBarTime));
      
    return {
      id: histogramId,
      ...histogramData,
      firstBarTime: firstTimeIndex,
      lastBarTime: lastTimeIndex
    };
  }

  /**
   * Check if histogram time range overlaps with bars range
   * @param {Object} histogramData - Histogram data with time range
   * @param {Array} timePointIndexes - Array of time point indexes
   * @returns {boolean} True if histogram overlaps with bars
   */
  function isHHistInBarsRange(histogramData, timePointIndexes) {
    const firstTimeIndex = Math.min(histogramData.firstBarTime ?? timePointUtils.INVALID_TIME_POINT_INDEX, histogramData.lastBarTime),
      lastTimeIndex = Math.max(histogramData.firstBarTime ?? timePointUtils.INVALID_TIME_POINT_INDEX, histogramData.lastBarTime);
      
    return timePointIndexes.contains(firstTimeIndex) || 
           timePointIndexes.contains(lastTimeIndex) || 
           firstTimeIndex < timePointIndexes.firstBar() && 
           lastTimeIndex > timePointIndexes.lastBar();
  }

  /**
   * Check if histograms contain time point indexes
   * @returns {boolean} True if time points are contained
   */
  function containsHHistTimePointIndexes() {
    return containsTimePoints;
  }
}
