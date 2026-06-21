/**
 * ============================================================================
 * TRADINGVIEW MODULE 4622 - RESOLUTION BUILDER
 * ============================================================================
 *
 * Purpose: Resolution building and validation utilities
 *
 * Size: 2.0 KB
 *
 * Functions:
 *   - findSuitableResolutionToBuildFrom: Find suitable resolution to build from
 *
 * Features:
 *   - Resolution validation and building
 *   - Multiplier compatibility checking
 *   - Error handling and reporting
 *   - Resolution letter management
 *   - Build configuration support
 *
 * Dependencies:
 *   - 46082: Resolution utilities
 *
 * Exports:
 *   - findSuitableResolutionToBuildFrom: Resolution builder function
 *
 * @module 4622
 * @category Chart System
 * @subpackage Resolution Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.resolutionBuilder_d(moduleConfig, {
    findSuitableResolutionToBuildFrom: () => findSuitableResolutionToBuildFrom
  });

  const ResolutionUtils = moduleRequire(46082);

  /**
   * Find suitable resolution to build from
   * @param {Object} resolutionData - Resolution data object
   * @returns {Object} Resolution build result
   */
  function findSuitableResolutionToBuildFrom(resolutionData) {
    const multiplier = resolutionData.multiplier();
    
    // Validate multiplier compatibility
    if (multiplier % 1 !== 0) {
      return {
        error: true,
        errorMessage: `Misconfiguration error: it is trying to request ${resolutionData.value()} but we cannot build it from lower resolution`,
        resolution: `${resolutionData.value()}${resolutionData.letter()}`
      };
    }
    
    return {
      error: false,
      resolution: resolutionData.value(),
      errorMessage: null
    };
  }

  // Export resolution builder function
  moduleExports.findSuitableResolutionToBuildFrom = findSuitableResolutionToBuildFrom;
}
