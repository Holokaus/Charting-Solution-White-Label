/**
 * Module 11751 - Watched Value from Getter and Subscriptions
 * 
 * Creates a watched value that aggregates multiple subscription sources.
 * Updates when any of the subscription sources change.
 * 
 * @module WatchedValueFromSubscriptions
 * @see Watched value module (22613)
 */

import { WatchedValue } from './22613-watched-value.js';

/**
 * Create watched value from getter and multiple subscriptions
 * @param {Function} getter - Function to get current value
 * @param {Array} subscriptions - Array of subscription objects
 * @returns {WatchedValue} New watched value instance
 */
export function createWVFromGetterAndSubscriptions(getter, subscriptions) {
  const watchedValue = new WatchedValue(getter());
  const subscriptionToken = {};
  
  subscriptions.forEach(subscription => {
    subscription.subscribe(subscriptionToken, () => {
      watchedValue.setValue(getter());
    });
  });
  
  return watchedValue.readonly().spawn(() => {
    subscriptions.forEach(subscription => subscription.unsubscribeAll(subscriptionToken));
  });
}

export default createWVFromGetterAndSubscriptions;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → getter (parameter function)
// - t → subscriptions (array parameter)
// - i → watchedValue (WatchedValue instance)
// - s → WatchedValueClass (WatchedValue class)
// - o → subscriptionToken (empty object for subscription identity)
// - n → createWVFromGetterAndSubscriptions (exported function)
// ============================================================================