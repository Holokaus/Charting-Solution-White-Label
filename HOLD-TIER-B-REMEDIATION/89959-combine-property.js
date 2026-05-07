/**
 * ============================================================================
 * TRADINGVIEW MODULE 89959 - COMBINED PROPERTY UTILITY
 * ============================================================================
 *
 * Purpose: Combines multiple watched properties into a single derived property
 *
 * Size: 1.0 KB
 *
 * Function: combineProperty(combinerFn, ...sourceProperties)
 *   - Takes a combiner function and multiple watched properties
 *   - Creates a new primitive property with combined value
 *   - Subscribes to all source properties for automatic updates
 *   - Provides destroy() method for cleanup
 *
 * Dependencies:
 *   - 41072: createPrimitiveProperty utility
 *
 * Exports:
 *   - combineProperty: Function for creating combined properties
 *
 * @module 89959
 * @category Property System
 * @subcategory Reactive Properties
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    combineProperty: () => combineProperty
  });

  const propertyUtils = moduleRequire(41072);

  /**
   * Combine multiple watched properties into a single derived property
   * @param {Function} combinerFn - Function that combines property values
   * @param {...WatchedValue} sourceProperties - Source properties to watch
   * @returns {PrimitiveProperty} Combined property with destroy() method
   */
  function combineProperty(combinerFn, ...sourceProperties) {
    // Calculate initial combined value
    const calculateValue = () => combinerFn(...sourceProperties.map((prop => prop.value())));

    // Create the combined property
    const combinedProperty = propertyUtils.createPrimitiveProperty(calculateValue());

    // Update function to recalculate on source changes
    const updateCombinedValue = () => combinedProperty.setValue(calculateValue());

    // Subscribe to all source properties
    const subscriptionContext = {};
    for (const sourceProp of sourceProperties) {
      sourceProp.subscribe(subscriptionContext, updateCombinedValue);
    }

    // Add cleanup method
    combinedProperty.destroy = () => {
      sourceProperties.forEach((prop => prop.unsubscribeAll(subscriptionContext)));
      sourceProperties.forEach((prop => prop.release()));
    };

    return combinedProperty;
  }
}
