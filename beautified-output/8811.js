/**
 * Module 8811 - Watched Value from Getter and Subscription
 * 
 * Creates a watched value from a getter function and single subscription source.
 * Updates when the subscription source changes, using getter to retrieve current value.
 * 
 * @module WatchedValueFromSubscription
 * @see Watched value module (22613)
 */

import { WatchedValue } from './22613-watched-value.js';

/**
 * Create watched value from getter and subscription
 * @param {Function} getter - Function to get current value
 * @param {Object} subscription - Subscription object with subscribe/unsubscribe methods
 * @returns {WatchedValue} New watched value instance
 */
export function createWVFromGetterAndSubscription(getter, subscription) {
  const watchedValue = new WatchedValue(getter());
  const subscriptionToken = {};
  
  subscription.subscribe(subscriptionToken, () => {
    watchedValue.setValue(getter(watchedValue.value()));
  });
  
  return watchedValue.readonly().spawn(() => subscription.unsubscribeAll(subscriptionToken));
}

export default createWVFromGetterAndSubscription;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → getter (parameter function)
// - t → subscription (subscription object)
// - i → watchedValue (WatchedValue instance)
// - s → WatchedValueClass (WatchedValue class)
// - o → subscriptionToken (empty object for subscription identity)
// ============================================================================