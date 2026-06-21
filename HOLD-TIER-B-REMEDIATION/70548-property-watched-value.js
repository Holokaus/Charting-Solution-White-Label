/**
 * ============================================================================
 * TRADINGVIEW MODULE 70548 - PROPERTY WATCHED VALUE FACTORY
 * ============================================================================
 *
 * Purpose: Factory function to create WatchedValue from property
 *
 * Size: 0.5 KB
 *
 * Function: createWVFromProperty(property)
 *   - Takes a property object
 *   - Creates WatchedValue that tracks property value
 *   - Returns WatchedValue with getter function
 *
 * Dependencies:
 *   - 8811: WatchedValue factory with subscription support
 *
 * Exports:
 *   - createWVFromProperty: Factory function
 *
 * @module 70548
 * @category Reactive Programming
 * @subpackage Property WatchedValue
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    createWVFromProperty: () => createWatchedValueFromProperty
  });

  const watchedValueFactory = moduleRequire(8811);

  /**
   * Create WatchedValue from property
   * @param {Property} property - Property to watch
   * @returns {WatchedValue} WatchedValue tracking property value
   */
  function createWatchedValueFromProperty(property) {
    return watchedValueFactory.createWVFromGetterAndSubscription(
      () => property.value(),
      property
    );
  }
}
