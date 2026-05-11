/**
 * Module 18712 - Property to WatchedValue Converter
 * 
 * Converts a Property to a bidirectionally synchronized WatchedValue.
 * Changes in either direction are automatically propagated.
 * 
 * @module PropertyToWatchedValueConverter
 * @see Watched value module (22613)
 */

import { WatchedValue } from './22613-watched-value.js';

/**
 * Convert property to watched value with bidirectional sync
 * @param {Property} property - Source property
 * @returns {WatchedValue} Synchronized watched value
 */
export function convertPropertyToWatchedValue(property) {
  const watchedValue = new WatchedValue(property.value());
  let isUpdating = false;
  
  // Sync property changes to watched value
  property.subscribe(watchedValue, () => {
    if (!isUpdating) {
      isUpdating = true;
      watchedValue.setValue(property.value());
      isUpdating = false;
    }
  });
  
  // Sync watched value changes back to property
  const updateProperty = () => {
    if (!isUpdating) {
      isUpdating = true;
      property.setValue(watchedValue.value());
      isUpdating = false;
    }
  };
  
  watchedValue.subscribe(updateProperty);
  
  return watchedValue.spawn(() => {
    property.unsubscribeAll(watchedValue);
    watchedValue.unsubscribe(updateProperty);
  });
}

export default convertPropertyToWatchedValue;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → property (parameter)
// - t → watchedValue (WatchedValue instance)
// - i → isUpdating (flag to prevent circular updates)
// - s → WatchedValueClass (WatchedValue)
// - o → updateProperty (callback function)
// - n → convertPropertyToWatchedValue (exported function)
// ============================================================================