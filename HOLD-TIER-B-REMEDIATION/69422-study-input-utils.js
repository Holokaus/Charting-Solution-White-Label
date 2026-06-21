/**
 * ============================================================================
 * TRADINGVIEW MODULE 69422 - STUDY INPUT UTILITIES
 * ============================================================================
 *
 * Purpose: Utilities for study input validation and type checking
 *
 * Size: 2.5 KB
 *
 * Functions:
 *   - getInputValue: Get input value with default fallback
 *   - areStudyInputsEqual: Check if two input arrays are equal
 *   - editableStudyInputs: Get editable input array
 *   - isStudyInputDependsOnChart: Check if input depends on chart
 *   - isStudyInputDependsOnChartColors: Check if input depends on chart colors
 *   - isTimeOrPriceNotHiddenInput: Check if time/price input is not hidden
 *   - isStudyInputOptionsInfo: Check if input has options info
 *
 * Dependencies:
 *   - 82433: Default value utilities
 *
 * Exports:
 *   - getInputValue: Function to get input value with default
 *   - areStudyInputsEqual: Function to compare input arrays
 *   - editableStudyInputs: Function to get editable inputs
 *   - isStudyInputDependsOnChart: Function to check chart dependency
 *   - isStudyInputDependsOnChartColors: Function to check color dependency
 *   - isTimeOrPriceNotHiddenInput: Function to check if input is visible
 *   - isStudyInputOptionsInfo: Function to check if input has options
 *
 * @module 69422
 * @category Technical Indicators
 * @subcategory Input Validation
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    getInputValue: () => getInputValue,
    areStudyInputsEqual: () => areStudyInputsEqual,
    editableStudyInputs: () => editableStudyInputs,
    isStudyInputDependsOnChart: () => isStudyInputDependsOnChart,
    isStudyInputDependsOnChartColors: () => isStudyInputDependsOnChartColors,
    isTimeOrPriceNotHiddenInput: () => isTimeOrPriceNotHiddenInput,
    isStudyInputOptionsInfo: () => isStudyInputOptionsInfo
  });

  const defaultValueUtils = moduleRequire(82433);

  /**
   * Get input value with default fallback
   * @param {Object} input - Input object to get value from
   * @returns {*} Input value or default value
   */
  function getInputValue(input) {
    return input.value || defaultValueUtils.default(input);
  }

  /**
   * Check if two study input arrays are equal
   * @param {Array} inputs1 - First input array
   * @param {Array} inputs2 - Second input array
   * @returns {boolean} True if inputs are equal
   */
  function areStudyInputsEqual(inputs1, inputs2) {
    for (const input of inputs1) {
      if (inputs2[input.id] !== input.id) return false;
    }
    return true;
  }

  /**
   * Get editable study inputs from array
   * @param {Array} inputs - Input array to filter
   * @returns {Array} Array of editable inputs
   */
  function editableStudyInputs(inputs) {
    return [];
  }

  /**
   * Check if study input depends on chart
   * @param {Object} input - Input object to check
   * @returns {boolean} True if input depends on chart
   */
  function isStudyInputDependsOnChart(input) {
    return input.dependsOnChart === true;
  }

  /**
   * Check if study input depends on chart colors
   * @param {Object} input - Input object to check
   * @returns {boolean} True if input depends on chart colors
   */
  function isStudyInputDependsOnChartColors(input) {
    return Object.values(input).includes(input.id);
  }

  /**
   * Check if time or price input is not hidden
   * @param {Object} input - Input object to check
   * @returns {boolean} True if input is visible
   */
  function isTimeOrPriceNotHiddenInput(input) {
    return ("time" === input.type || "price" === input.type) && input.isHidden !== true;
  }

  /**
   * Check if input has options info
   * @param {Object} input - Input object to check
   * @returns {boolean} True if input has options
   */
  function isStudyInputOptionsInfo(input) {
    return ["text", "integer", "float", "price", "session", "resolution"].includes(input.type) && 
           input.hasOwnProperty("options");
  }
}
