/**
 * Module 89959 - Combine Property
 * 
 * Combines multiple properties into a single computed property.
 * Automatically updates when any source property changes.
 * 
 * @module CombineProperty
 * @see Property factory (41072)
 */

import { createPrimitiveProperty } from './41072-property-factory.js';

/**
 * Combine multiple properties using a combiner function
 * @param {Function} combiner - Function to combine property values
 * @param {...Property} properties - Source properties to combine
 * @returns {Property} Combined property
 */
export function combineProperty(combiner, ...properties) {
  const getCombinedValue = () => combiner(...properties.map(p => p.value()));
  const combinedProperty = createPrimitiveProperty(getCombinedValue());
  const updateValue = () => combinedProperty.setValue(getCombinedValue());
  const subscriptionToken = {};
  
  for (const property of properties) {
    property.subscribe(subscriptionToken, updateValue);
  }
  
  combinedProperty.destroy = () => {
    properties.forEach(p => p.unsubscribeAll(subscriptionToken));
    properties.forEach(p => p.release());
  };
  
  return combinedProperty;
}

export default combineProperty;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → combiner (function parameter)
// - t → properties (rest parameters)
// - i → getCombinedValue (computed value function)
// - s → propertyFactory (createPrimitiveProperty)
// - o → combinedProperty (result)
// - n → updateValue (update callback)
// - r → subscriptionToken (object for subscriptions)
// ============================================================================