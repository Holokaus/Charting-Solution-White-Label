/**
 * ============================================================================
 * TRADINGVIEW MODULE 97217 - LINE TOOL UTILITY FUNCTIONS
 * ============================================================================
 *
 * Purpose: Utility functions for line tool identification and validation
 *
 * Size: 0.6 KB
 *
 * Functions:
 *   - isLineTool: Check if object is a line tool
 *
 * Line tools are drawing tools that create lines, rays, or segments
 * on the chart. This utility helps identify them programmatically.
 *
 * Dependencies:
 *   - 30551: Object type checking utilities
 *
 * Exports:
 *   - isLineTool: (obj) => boolean
 *
 * @module 97217
 * @category Drawing Tools
 * @subcategory Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    isLineTool: () => isLineTool
  });

  const objectUtils = moduleRequire(30551);

  /**
   * Check if an object is a line tool
   * @param {Object} obj - Object to check
   * @returns {boolean} True if object is a line tool
   */
  function isLineTool(obj) {
    return (0, objectUtils.isObject)(obj) && 
           "isLineTool" in obj && 
           obj.isLineTool;
  }
}
