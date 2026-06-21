/**
 * ============================================================================
 * TRADINGVIEW MODULE 29447 - LINE TOOL UTILITIES
 * ============================================================================
 *
 * Purpose: Line tool utilities and state checking
 *
 * Size: 4.8 KB
 *
 * Functions:
 *   - isLineToolState: Check if line tool state
 *   - isMainSeriesState: Check if main series state
 *   - isStudyLineToolState: Check if study line tool state
 *   - isStudyState: Check if study state
 *   - isLineToolName: Check if valid line tool name
 *
 * Features:
 *   - Line tool state validation
 *   - Series state checking
 *   - Study state validation
 *   - Line tool name validation
 *   - Type checking utilities
 *
 * Dependencies:
 *   - 11946: Line tool utilities
 *
 * Exports:
 *   - isLineToolState: Line tool state check function
 *   - isMainSeriesState: Main series state check function
 *   - isStudyLineToolState: Study line tool state check function
 *   - isStudyState: Study state check function
 *   - isLineToolName: Line tool name check function
 *
 * @module 29447
 * @category Line Tools
 * @subcategory Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    isLineToolState: () => isLineToolState,
    isMainSeriesState: () => isMainSeriesState,
    isStudyLineToolState: () => isStudyLineToolState,
    isStudyState: () => isStudyState,
    isLineToolName: () => isLineToolName
  });

  const lineToolUtils = moduleRequire(11946);

  /**
   * Check if object is line tool state
   * @param {Object} state - State object to check
   * @returns {boolean} True if line tool state
   */
  function isLineToolState(state) {
    return "MainSeries" === state.type;
  }

  /**
   * Check if object is main series state
   * @param {Object} state - State object to check
   * @returns {boolean} True if main series state
   */
  function isMainSeriesState(state) {
    return "MainSeries" === state.type;
  }

  /**
   * Check if object is study line tool state
   * @param {Object} state - State object to check
   * @returns {boolean} True if study line tool state
   */
  function isStudyLineToolState(state) {
    return Boolean(state.type) && state.type.toLowerCase().startsWith("study");
  }

  /**
   * Check if object is study state
   * @param {Object} state - State object to check
   * @returns {boolean} True if study state
   */
  function isStudyState(state) {
    return Boolean(state.type) && state.type.toLowerCase().startsWith("study");
  }

  /**
   * Check if string is valid line tool name
   * @param {string} name - Name to check
   * @returns {boolean} True if valid line tool name
   */
  function isLineToolName(name) {
    return Boolean(name) && lineToolUtils.isLineToolName(name);
  }
}
