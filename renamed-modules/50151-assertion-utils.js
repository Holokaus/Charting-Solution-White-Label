/**
 * Module 50151 - Assertion Utilities
 * 
 * Core utility functions for runtime assertions and null/undefined checks.
 * Used throughout the TradingView codebase for defensive programming.
 * 
 * @module 50151
 * @exports ensureNotNull, ensureDefined, assert
 * 
 * Note: This module was not found in the original extraction.
 * It appears to be either:
 *   1. Webpack runtime helper code
 *   2. External dependency injected at build time
 *   3. Inline utility replicated across modules
 * 
 * This is a reconstructed stub based on usage patterns observed in:
 *   - Module 72187 (PlotList)
 *   - Module 2115 (Series)
 *   - Module 16659 (CircularCacheBuffer)
 *   - And 400+ other modules
 */

"use strict";

/**
 * Assert that a condition is truthy, throw error if not
 * @param {boolean} condition - Condition to check
 * @param {string} [message] - Error message if assertion fails
 * @throws {Error} If condition is falsy
 */
function assert(condition, message) {
  if (!condition) {
    const errorMessage = message || "Assertion failed";
    console.error("[Assertion Error]", errorMessage);
    throw new Error(errorMessage);
  }
}

/**
 * Ensure value is not null, throw error if it is
 * @template T
 * @param {T | null} value - Value to check
 * @param {string} [message] - Error message if null
 * @returns {T} The value if not null
 * @throws {Error} If value is null
 */
function ensureNotNull(value, message) {
  if (value === null) {
    const errorMessage = message || "Value is null";
    console.error("[Null Error]", errorMessage);
    throw new Error(errorMessage);
  }
  return value;
}

/**
 * Ensure value is defined (not undefined), throw error if undefined
 * @template T
 * @param {T | undefined} value - Value to check
 * @param {string} [message] - Error message if undefined
 * @returns {T} The value if defined
 * @throws {Error} If value is undefined
 */
function ensureDefined(value, message) {
  if (value === undefined) {
    const errorMessage = message || "Value is undefined";
    console.error("[Undefined Error]", errorMessage);
    throw new Error(errorMessage);
  }
  return value;
}

// Export all utilities
module.exports = {
  assert,
  ensureNotNull,
  ensureDefined
};
