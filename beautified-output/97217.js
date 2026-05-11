/**
 * Module 97217 - Line Tool Type Checker
 * 
 * Type guard function to check if an object is a line tool.
 * Used for runtime type checking in drawing tools.
 * 
 * @module LineToolChecker
 * @see Object utilities module (30551)
 */

import { isObject } from './30551-object-utils.js';

/**
 * Check if value is a line tool object
 * @param {*} value - Value to check
 * @returns {boolean} True if value is a line tool
 */
export function isLineTool(value) {
  return isObject(value) && "isLineTool" in value && value.isLineTool;
}

export default isLineTool;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → value (parameter)
// - t → unused
// - i → unused
// - s → objectUtils (isObject function)
// - o → isLineTool (exported function)
// ============================================================================