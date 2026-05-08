/**
 * ============================================================================
 * TRADINGVIEW MODULE 29447 - STATE TYPE CHECKERS
 * ============================================================================
 *
 * Purpose: State type checking utilities for different entities
 *
 * Size: 1.2 KB
 *
 * Functions:
 *   - isLineToolState: Check if line tool state
 *   - isMainSeriesState: Check if main series state
 *   - isStudyLineToolState: Check if study line tool state
 *   - isStudyState: Check if study state
 *
 * Features:
 *   - State type validation
 *   - Line tool state checking
 *   - Main series state detection
 *   - Study state validation
 *   - Study line tool state checking
 *   - Type-based state classification
 *
 * Dependencies:
 *   - 11946: Line tool utilities
 *
 * Exports:
 *   - isLineToolState: Line tool state checker function
 *   - isMainSeriesState: Main series state checker function
 *   - isStudyLineToolState: Study line tool state checker function
 *   - isStudyState: Study state checker function
 *
 * @module 29447
 * @category State Management
 * @subpackage Type Checkers
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    isLineToolState: () => isLineToolState,
    isMainSeriesState: () => isMainSeriesState,
    isStudyLineToolState: () => isStudyLineToolState,
    isStudyState: () => isStudyState
  });

  const lineToolUtils = moduleRequire(11946);

  /**
   * Check if state is main series state
   * @param {Object} state - State object to check
   * @returns {boolean} True if main series state
   */
  function isMainSeriesState(state) {
    return "MainSeries" === state.type;
  }

  /**
   * Check if state is study state
   * @param {Object} state - State object to check
   * @returns {boolean} True if study state
   */
  function isStudyState(state) {
    return Boolean(state.type) && 
           state.type.toLowerCase().startsWith("study");
  }

  /**
   * Check if state is line tool state
   * @param {Object} state - State object to check
   * @returns {boolean} True if line tool state
   */
  function isLineToolState(state) {
    return Boolean(state.type) && 
           lineToolUtils.isLineToolName(state.type);
  }

  /**
   * Check if state is study line tool state
   * @param {Object} state - State object to check
   * @returns {boolean} True if study line tool state
   */
  function isStudyLineToolState(state) {
    return Boolean(state.type) && 
           lineToolUtils.isStudyLineToolName(state.type);
  }
}
