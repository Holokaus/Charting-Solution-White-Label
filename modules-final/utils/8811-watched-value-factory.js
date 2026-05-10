/**
 * ============================================================================
 * TRADINGVIEW MODULE 8811 - WATCHED VALUE FACTORY
 * ============================================================================
 *
 * Purpose: Factory function to create WatchedValue from getter and subscription
 *
 * Size: 0.8 KB
 *
 * Function: createWVFromGetterAndSubscription(getterFn, subscriptionSource)
 *   - Creates WatchedValue from getter function
 *   - Subscribes to subscription source for automatic updates
 *   - Updates WatchedValue when subscription fires
 *   - Returns readonly WatchedValue with cleanup on destroy
 *
 * Dependencies:
 *   - 22613: WatchedValue class
 *
 * Exports:
 *   - createWVFromGetterAndSubscription: Factory function
 *
 * @module 8811
 * @category Reactive Programming
 * @subcategory WatchedValue Factory
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.d(moduleConfig, {
    createWVFromGetterAndSubscription: () => createWatchedValueFromGetterAndSubscription
  });

  const WatchedValue = moduleRequire(22613);

  /**
   * Create WatchedValue from getter function and subscription source
   * @param {Function} getterFn - Function that returns current value
   * @param {WatchedValue} subscriptionSource - WatchedValue to subscribe to
   * @returns {ReadonlyWatchedValue} Readonly WatchedValue with cleanup
   */
  function createWatchedValueFromGetterAndSubscription(getterFn, subscriptionSource) {
    const sourceWatchedValue = new WatchedValue.WatchedValue(getterFn());
    const subscriptionContext = {};
    
    // Subscribe to source and update WatchedValue when values change
    subscriptionSource.subscribe(subscriptionContext, (() => {
      sourceWatchedValue.setValue(getterFn(sourceWatchedValue.value()));
    }));
    
    // Return readonly WatchedValue with cleanup on destroy
    return sourceWatchedValue.readonly().spawn((() => {
      subscriptionSource.unsubscribeAll(subscriptionContext);
    }));
  }
}
