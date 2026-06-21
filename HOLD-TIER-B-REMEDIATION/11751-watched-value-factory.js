/**
 * ============================================================================
 * TRADINGVIEW MODULE 11751 - WATCHED VALUE FACTORY
 * ============================================================================
 *
 * Purpose: Watched value factory implementation
 *
 * Size: 0.8 KB
 *
 * Functions:
 *   - createWVFromGetterAndSubscriptions: Create watched value from getter and subscriptions
 *
 * Features:
 *   - Watched value creation
 *   - Subscription management
 *   - Value change tracking
 *   - Readonly support
 *
 * Dependencies:
 *   - 22613: Watched value utilities
 *
 * Exports:
 *   - createWVFromGetterAndSubscriptions: Watched value factory function
 *
 * @module 11751
 * @category Data Management
 * @subpackage Watched Values
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_d(moduleConfig, {
    createWVFromGetterAndSubscriptions: () => createWVFromGetterAndSubscriptions
  });

  const WatchedValueUtils = moduleRequire(22613);

  /**
   * Create watched value from getter and subscriptions
   * @param {Function} getter - Value getter function
   * @param {Array} subscriptions - Subscription array
   * @returns {Object} Watched value object
   */
  function createWVFromGetterAndSubscriptions(getter, subscriptions) {
    const watchedValue = new WatchedValueUtils.WatchedValue(getter());
    const subscriptionMap = {};
    
    subscriptions.forEach(subscription => {
      subscription.subscribe(subscriptionMap, () => {
        WatchedValueUtils.setValue(getter());
      });
    });
    
    return WatchedValueUtils.readonly().spawn(() => {
      subscriptions.forEach(subscription => {
        subscription.unsubscribeAll(subscriptionMap);
      });
    });
  }
}
