/**
 * ============================================================================
 * TRADINGVIEW MODULE 11751 - MULTI-SUBSCRIPTION WATCHED VALUE
 * ============================================================================
 *
 * Purpose: Factory function to create WatchedValue from getter and multiple subscriptions
 *
 * Size: 0.6 KB
 *
 * Function: createWVFromGetterAndSubscriptions(getterFn, subscriptionSources)
 *   - Takes a getter function and array of subscription sources
 *   - Creates WatchedValue that updates when any subscription fires
 *   - Manages multiple subscription cleanup on destroy
 *
 * Dependencies:
 *   - 22613: WatchedValue class
 *
 * Exports:
 *   - createWVFromGetterAndSubscriptions: Factory function
 *
 * @module 11751
 * @category Reactive Programming
 * @subcategory WatchedValue Factory
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.d(moduleConfig, {
    createWVFromGetterAndSubscriptions: () => createWatchedValueFromGetterAndSubscriptions
  });

  const WatchedValue = moduleRequire(22613);

  /**
   * Create WatchedValue from getter function and multiple subscription sources
   * @param {Function} getterFn - Function that returns current value
   * @param {Array} subscriptionSources - Array of WatchedValue objects to subscribe to
   * @returns {ReadonlyWatchedValue} Readonly WatchedValue with cleanup
   */
  function createWatchedValueFromGetterAndSubscriptions(getterFn, subscriptionSources) {
    const sourceWatchedValue = new WatchedValue.WatchedValue(getterFn());
    const subscriptionContext = {};
    
    // Subscribe to all provided sources
    subscriptionSources.forEach((source => {
      source.subscribe(subscriptionContext, (() => {
        sourceWatchedValue.setValue(getterFn());
      }));
    }));
    
    // Return readonly WatchedValue with cleanup function
    return sourceWatchedValue.readonly().spawn((() => {
      subscriptionSources.forEach((source => {
        source.unsubscribeAll(subscriptionContext);
      }));
    }));
  }
}
