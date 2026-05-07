/**
 * Module 8811 - WatchedValue Factory from Getter and Subscription
 *
 * @description Creates a readonly WatchedValue that automatically updates from a source subscription
 * @dependencies 22613 (WatchedValue core implementation)
 * @exports createWVFromGetterAndSubscription
 */

const { WatchedValue } = require(22613);

/**
 * Creates a readonly WatchedValue that derives its value from a getter function
 * and automatically updates when a source subscription notifies changes.
 * 
 * This is useful for creating reactive values that depend on external data sources
 * without directly managing the subscription lifecycle.
 *
 * @param {Function} getter - Function that returns the current value
 * @param {Object} subscription - Object with subscribe/unsubscribe methods (event emitter pattern)
 * @returns {WatchedValue} A readonly WatchedValue that updates automatically
 * 
 * @example
 * // Create a watched value from a data store getter
 * const priceWV = createWVFromGetterAndSubscription(
 *   () => dataStore.getCurrentPrice(),
 *   dataStore.priceChangeSubscription
 * );
 * 
 * priceWV.subscribe((price) => {
 *   updatePriceDisplay(price);
 * });
 * 
 * @example
 * // Create from settings getter
 * const themeWV = createWVFromGetterAndSubscription(
 *   () => settings.getTheme(),
 *   settings.themeChangeEmitter
 * );
 */
function createWVFromGetterAndSubscription(getter, subscription) {
  // Create initial WatchedValue with current value from getter
  const watchedValue = new WatchedValue(getter());
  
  // Storage for unsubscribe callback
  const unsubscribeToken = {};
  
  // Subscribe to source changes
  subscription.subscribe(unsubscribeToken, () => {
    // When source changes, get new value and update WatchedValue
    // Pass current value to getter for potential optimization
    watchedValue.setValue(getter(watchedValue.value()));
  });
  
  // Return readonly version that auto-cleanup on dispose
  return watchedValue.readonly().spawn(() => {
    // Cleanup: unsubscribe when WatchedValue is disposed
    subscription.unsubscribeAll(unsubscribeToken);
  });
}

module.exports = {
  createWVFromGetterAndSubscription
};
