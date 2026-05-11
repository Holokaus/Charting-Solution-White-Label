/**
 * Module 41072 - Property Factory
 * 
 * Factory function for creating primitive property instances.
 * Wraps the core Property class with a simplified creation interface.
 * 
 * @module PropertyFactory
 * @see Property module (43337)
 */

import { Property } from './43337-property.js';

/**
 * Create a primitive property with the given value
 * @param {*} initialValue - Initial property value
 * @returns {Property} New property instance
 */
export function createPrimitiveProperty(initialValue) {
  return new Property(initialValue);
}

export default createPrimitiveProperty;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → initialValue (parameter)
// - t → moduleExports (unused)
// - i → moduleLoader (unused)
// - s → Property (class from module 43337)
// - o → createPrimitiveProperty (exported function)
// ============================================================================