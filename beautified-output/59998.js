/**
 * Module 59998 - WatchedObject Class
 * 
 * Extended WatchedValue with deep equality comparison.
 * Only triggers updates when object contents actually change.
 * 
 * @module WatchedObject
 * @see Deep equality module (87465)
 * @see WatchedValue base class (2072)
 */

import { deepEquals } from './87465-deep-equality.js';
import { WatchedValue } from './2072-watched-value.js';

/**
 * Default comparator function using deep equality
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if values are deeply equal
 */
function defaultComparator(a, b) {
  return deepEquals(a, b)[0];
}

/**
 * Watched object with deep equality comparison
 * @class WatchedObject
 * @extends WatchedValue
 */
export class WatchedObject extends WatchedValue {
  /**
   * Create watched object
   * @param {*} initialValue - Initial object value
   * @param {Function} comparator - Equality comparator function
   */
  constructor(initialValue, comparator = defaultComparator) {
    super(initialValue);
    this._comparator = comparator;
  }

  /**
   * Set value with comparison check
   * @param {*} newValue - New value to set
   * @param {boolean} force - Force update even if equal
   */
  setValue(newValue, force) {
    if (!force && this._comparator(this.value(), newValue)) {
      return;
    }
    super.setValue(newValue, force);
  }
}

export default WatchedObject;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → initialValue (constructor param)
// - t → comparator (constructor param)
// - s → deepEquality (deepEquals function)
// - o → WatchedValueClass (WatchedValue)
// - n → defaultComparator (helper function)
// - r → WatchedObject (exported class)
// ============================================================================