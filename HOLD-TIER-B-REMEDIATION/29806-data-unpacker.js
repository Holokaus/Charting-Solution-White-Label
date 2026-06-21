/**
 * ============================================================================
 * TRADINGVIEW MODULE 29806 - DATA UNPACKER
 * ============================================================================
 *
 * Purpose: Data unpacking utilities for study data
 *
 * Size: 2.2 KB
 *
 * Functions:
 *   - unpackNonSeriesData: Unpack non-series data
 *   - unpackStudyData: Unpack study data
 *   - unpackStudyDataToStudyState: Unpack study data to state
 *
 * Features:
 *   - Non-series data unpacking
 *   - Study data unpacking
 *   - State reconstruction
 *   - Data validation
 *   - Error handling
 *
 * Dependencies:
 *   - 30551: Study utilities
 *   - 50151: Assertion utilities
 *
 * Exports:
 *   - unpackNonSeriesData: Non-series data unpacking function
 *   - unpackStudyData: Study data unpacking function
 *   - unpackStudyDataToStudyState: Study state unpacking function
 *
 * @module 29806
 * @category Data Processing
 * @subpackage Unpacking
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    unpackNonSeriesData: () => unpackNonSeriesData,
    unpackStudyData: () => unpackStudyData,
    unpackStudyDataToStudyState: () => unpackStudyDataToStudyState
  });

  const studyUtils = moduleRequire(30551),
    assertionUtils = moduleRequire(50151);

  /**
   * Unpack non-series data
   * @param {Object} data - Data to unpack
   * @returns {Object} Unpacked data object
   */
  function unpackNonSeriesData(data) {
    if (!data) {
      return {};
    }

    const unpackedData = {};
    
    // Unpack graphics commands if present
    if (data.graphicsCmds) {
      unpackedData.graphicsCmds = data.graphicsCmds;
    }
    
    // Unpack indexes if present
    if (data.indexes) {
      unpackedData.indexes = data.indexes;
    }
    
    return unpackedData;
  }

  /**
   * Unpack study data
   * @param {Object} data - Data to unpack
   * @returns {Object} Unpacked study data
   */
  function unpackStudyData(data) {
    if (!data) {
      return {};
    }

    const unpackedData = {};
    
    // Validate data structure
    assertionUtils.assert((0, studyUtils.isObject)(data), "Study data should be an object");
    
    // Unpack graphics commands
    if (data.graphicsCmds) {
      unpackedData.graphicsCmds = data.graphicsCmds;
    }
    
    // Unpack indexes
    if (data.indexes) {
      unpackedData.indexes = data.indexes;
    }
    
    return unpackedData;
  }

  /**
   * Unpack study data to study state
   * @param {Object} data - Data to unpack
   * @returns {Object} Study state object
   */
  function unpackStudyDataToStudyState(data) {
    if (!data) {
      return {};
    }

    const unpackedData = {};
    
    // Validate data structure
    assertionUtils.assert((0, studyUtils.isObject)(data), "Study data should be an object");
    
    // Unpack graphics commands
    if (data.graphicsCmds) {
      unpackedData.graphicsCmds = data.graphicsCmds;
    }
    
    // Unpack indexes
    if (data.indexes) {
      unpackedData.indexes = data.indexes;
    }
    
    return unpackedData;
  }

  // Export the unpacking functions
  moduleExports.unpackNonSeriesData = unpackNonSeriesData;
  moduleExports.unpackStudyData = unpackStudyData;
  moduleExports.unpackStudyDataToStudyState = unpackStudyDataToStudyState;
}
