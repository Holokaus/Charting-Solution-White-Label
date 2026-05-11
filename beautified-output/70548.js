/**
 * Module 70548 - Watched Value from Property
 * 
 * Creates a watched value from a property object.
 * Wraps property values with reactive observation capabilities.
 * 
 * @module WatchedValueFromProperty
 * @see WV factory module (8811)
 */

import { createWVFromGetterAndSubscription } from './8811-wv-factory.js';

/**
 * Create watched value from property
 * @param {Object} property - Property object with value() method
 * @returns {WatchedValue} New watched value instance
 */
export function createWVFromProperty(property) {
  return createWVFromGetterAndSubscription(() => property.value(), property);
}

export default createWVFromProperty;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → property (parameter)
// - t → unused
// - i → unused
// - s → wvFactory (createWVFromGetterAndSubscription function)
// - o → createWVFromProperty (exported function)
// ============================================================================