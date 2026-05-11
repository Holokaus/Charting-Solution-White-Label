/**
 * Module 12178 - Server Interval Utilities
 * 
 * Provides interval conversion utilities for server communication.
 * Handles range-based interval detection and normalization.
 * 
 * @module ServerIntervalUtilities
 * @see Interval module (46082)
 */

import { Interval } from './46082-interval.js';

/**
 * Get server-compatible interval string
 * @param {string} interval - Raw interval value
 * @returns {string} Server interval ("1" for ranges, original otherwise)
 */
export function getServerInterval(interval) {
  return Interval.isRange(interval) ? "1" : interval;
}

export default getServerInterval;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → interval (parameter)
// - t → unused
// - i → unused
// - s → Interval (class with isRange method)
// - o → getServerInterval (exported function)
// ============================================================================