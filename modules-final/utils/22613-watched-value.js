/**
 * ============================================================================
 * TRADINGVIEW MODULE 22613 - WATCHED VALUE
 * ============================================================================
 *
 * Purpose: Watched value implementation for reactive programming
 *
 * Size: 0.4 KB
 *
 * Class: WatchedValue
 *   - Implements watched value pattern
 *   - Provides value change notifications
 *   - Supports value subscription
 *   - Manages value state
 *
 * Features:
 *   - Value watching and change detection
 *   - Subscription management
 *   - Value getter/setter
 *   - Change notification system
 *
 * Dependencies:
 *   - 52499: Watched value utilities
 *
 * Exports:
 *   - WatchedValue: Watched value class
 *
 * @module 22613
 * @category Reactive Programming
 * @subcategory Value Watching
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    WatchedValue: () => WatchedValue
  });

  const watchedValueUtils = moduleRequire(52499);

  /**
   * Watched value implementation
   */
  class WatchedValue {
    /**
     * @param {*} initialValue - Initial value
     */
    constructor(initialValue = null) {
      this._value = initialValue;
      this._subscribers = [];
    }

    /**
     * Get current value
     * @returns {*} Current value
     */
    getValue() {
      return this._value;
    }

    /**
     * Set new value and notify subscribers
     * @param {*} newValue - New value to set
     */
    setValue(newValue) {
      if (this._value !== newValue) {
        const oldValue = this._value;
        this._value = newValue;
        this._notifySubscribers(oldValue, newValue);
      }
    }

    /**
     * Subscribe to value changes
     * @param {Function} callback - Callback function
     * @returns {Function} Unsubscribe function
     */
    subscribe(callback) {
      this._subscribers.push(callback);
      
      // Return unsubscribe function
      return () => {
        const index = this._subscribers.indexOf(callback);
        if (index > -1) {
          this._subscribers.splice(index, 1);
        }
      };
    }

    /**
     * Notify all subscribers of value change
     * @param {*} oldValue - Previous value
     * @param {*} newValue - New value
     */
    _notifySubscribers(oldValue, newValue) {
      for (const callback of this._subscribers) {
        try {
          callback(newValue, oldValue);
        } catch (error) {
          console.error('Error in watched value subscriber:', error);
        }
      }
    }
  }

  // Export the WatchedValue class
  moduleExports.WatchedValue = WatchedValue;
}
