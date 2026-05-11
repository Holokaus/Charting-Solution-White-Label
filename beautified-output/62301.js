/**
 * Module 62301 - Step Alignment Utility
 * 
 * Aligns a value to a given step size using decimal precision.
 * Used for price and value rounding in chart scales.
 * 
 * @module StepAlignment
 * @see Decimal utilities (60521)
 */

import Decimal from './60521-decimal.js';

/**
 * Align value to nearest step
 * @param {number} value - Value to align
 * @param {number} stepSize - Step size for alignment
 * @returns {number} Aligned value
 */
export function alignToStep(value, stepSize) {
  return Decimal(value)
    .div(stepSize)
    .round(0, Decimal.roundHalfUp)
    .mul(stepSize)
    .toNumber();
}

export default alignToStep;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → value (first parameter)
// - t → stepSize (second parameter)
// - i → unused
// - s → Decimal (decimal library)
// - o → DecimalFactory (decimal instance creator)
// - n → alignToStep (exported function)
// ============================================================================