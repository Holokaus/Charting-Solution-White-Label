/**
 * ============================================================================
 * TRADINGVIEW MODULE 42516 - STATE AFFECTING SOURCES CHECK
 * ============================================================================
 *
 * Purpose: Check if any sources affect chart state (excluding line tools)
 *
 * Size: 0.7 KB
 *
 * Function: sourcesAffectState(sources)
 *   - Checks array of sources for state effects
 *   - Excludes line tools from state affecting check
 *   - Returns true if any source affects state
 *
 * Dependencies:
 *   - 97217: Line tool identification utilities
 *   - 13896: Chart invalidation constants
 *
 * Exports:
 *   - sourcesAffectState: Function to check state-affecting sources
 *
 * @module 42516
 * @category State Management
 * @subpackage Source Effects
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    sourcesAffectState: () => sourcesAffectState
  });

  const lineToolUtils = moduleRequire(97217),
    chartInvalidationConstants = moduleRequire(13896);

  /**
   * Check if any sources affect chart state
   * @param {Array} sources - Array of source objects
   * @returns {boolean} True if any source affects state
   */
  function sourcesAffectState(sources) {
    return !chartInvalidationConstants.lineToolsDoNotAffectChartInvalidation || 
           sources.some((source => !(0, lineToolUtils.isLineTool)(source)));
  }
}
