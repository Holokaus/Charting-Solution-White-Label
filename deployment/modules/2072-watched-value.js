/**
 * Module 2072 - WatchedValue Reactive State System
 * 
 * Provides reactive state management with observer pattern.
 * Used throughout TradingView for alerts, IDs, and watched properties.
 * 
 * @module 2072
 */

"use strict";

// Import logger
const { getLogger } = require('./9343-logger');
const logger = getLogger("Common.WatchedValue");

/**
 * Log errors from callbacks
 * @param {Error} error - Error to log
 */
function logCallbackError(error) {
    if (error) {
        logger.logError(error.stack || error.message);
    }
}

/**
 * WatchedValue - Reactive state primitive with observer pattern
 * 
 * Features:
 * - Subscribe/unsubscribe to value changes
 * - One-time subscriptions
 * - Call with last value on subscribe
 * - Read-only instances
 * - Ownership and spawning
 */
class WatchedValue {
    /**
     * Create a WatchedValue instance
     * @param {*} initialValue - Initial value (optional)
     */
    constructor(initialValue) {
        this._listeners = [];
        if (arguments.length > 0) {
            this._value = initialValue;
        } else {
            delete this._value;
        }
    }

    /**
     * Destroy the watched value and unsubscribe all listeners
     */
    destroy() {
        this.unsubscribe();
    }

    /**
     * Get current value
     * @returns {*} Current value
     */
    value() {
        return this._owner ? this._owner._value : this._value;
    }

    /**
     * Set new value and notify listeners
     * @param {*} newValue - New value
     * @param {boolean} force - Force update even if value unchanged
     */
    setValue(newValue, force) {
        const target = this._owner ? this._owner : this;
        
        // Check write lock
        if (target.writeLock) {
            return;
        }

        // Check if value actually changed
        const isUnchanged = newValue === target._value || 
                           (Number.isNaN(target._value) && Number.isNaN(newValue));
        
        if (!force && isUnchanged && target.hasOwnProperty("_value")) {
            return;
        }

        target._value = newValue;
        
        // Copy listeners array before iteration
        const listenersCopy = target._listeners.slice();
        let removedCount = 0;
        
        // Notify all listeners
        for (let i = 0; i < listenersCopy.length; i++) {
            const listener = listenersCopy[i];
            
            // Handle one-time listeners
            if (listener.once) {
                target._listeners.splice(i - removedCount, 1);
                removedCount++;
            }
            
            try {
                listener.cb(newValue);
            } catch (error) {
                logCallbackError(error);
            }
        }
    }

    /**
     * Delete value (set to undefined)
     */
    deleteValue() {
        this.setValue(undefined);
    }

    /**
     * Subscribe to value changes
     * @param {Function} callback - Callback function
     * @param {Object} options - Subscription options
     * @param {boolean} options.once - Fire only once
     * @param {boolean} options.callWithLast - Call immediately with current value
     */
    subscribe(callback, options) {
        if (typeof callback !== "function") {
            throw new TypeError("callback must be a function");
        }

        const isOnce = options && !!options.once;
        const callWithLast = options && !!options.callWithLast;
        const target = this._owner ? this._owner : this;

        // Call with last value if requested
        if (callWithLast && target.hasOwnProperty("_value")) {
            try {
                callback(target._value);
            } catch (error) {
                logCallbackError(error);
            }
            if (isOnce) {
                return;
            }
        }

        target._listeners.push({
            cb: callback,
            owner: this,
            once: isOnce
        });
    }

    /**
     * Unsubscribe from value changes
     * @param {Function} callback - Specific callback to remove (optional)
     */
    unsubscribe(callback) {
        const target = this._owner ? this._owner : this;
        
        if (callback === undefined) {
            callback = null;
        }

        const listeners = target._listeners;
        
        for (let i = listeners.length - 1; i >= 0; i--) {
            const listener = listeners[i];
            const shouldRemove = (listener.owner !== this && target !== this) ||
                                (listener.cb !== callback && callback !== null);
            
            if (shouldRemove) {
                listeners.splice(i, 1);
            }
        }
    }

    /**
     * Create read-only instance
     * @returns {Object} Read-only interface
     */
    readonly() {
        if (this._readonlyInstance) {
            return this._readonlyInstance;
        }

        const readonlyInterface = {
            subscribe: this.subscribe.bind(this),
            unsubscribe: this.unsubscribe.bind(this),
            value: this.value.bind(this),
            when: this.when.bind(this),
            ownership: this.ownership.bind(this),
            spawnOwnership: this.spawnOwnership.bind(this),
            weakReference: this.weakReference.bind(this),
            spawn: (val) => this.spawn(val).readonly(),
            destroy: this.destroy.bind(this)
        };

        this._readonlyInstance = readonlyInterface;
        return readonlyInterface;
    }

    /**
     * Spawn a new watched value with same owner
     * @param {*} initialValue - Initial value
     * @returns {WatchedValue} New instance
     */
    spawn(initialValue) {
        return this._spawn(initialValue);
    }

    /**
     * Execute callback when value becomes truthy
     * @param {Function} callback - Callback to execute
     */
    when(callback) {
        const self = this;
        
        function checkAndExecute(value) {
            if (callback(value)) {
                return;
            }
            
            const onValueChange = (newValue) => {
                if (callback(newValue)) {
                    self.unsubscribe(onValueChange);
                    callback(newValue);
                }
            };
            
            self.subscribe(onValueChange, { callWithLast: true });
        }
        
        checkAndExecute(self.value());
    }

    /**
     * Assert no subscriptions (debug)
     */
    assertNoSubscriptions() {
        // Debug assertion - no-op in production
    }

    /**
     * Get ownership reference
     * @returns {WatchedValue} Self
     */
    ownership() {
        return this;
    }

    /**
     * Release/destruct
     */
    release() {
        this.destroy();
    }

    /**
     * Spawn ownership
     * @returns {WatchedValue} Spawned instance
     */
    spawnOwnership() {
        return this._spawn();
    }

    /**
     * Create weak reference
     * @returns {WatchedValue} Weak reference instance
     */
    weakReference() {
        return this._spawn(undefined, true);
    }

    /**
     * Internal spawn implementation
     * @private
     */
    _spawn(initialValue, isWeak) {
        return new SpawnedWatchedValue(this._owner || this, initialValue, isWeak);
    }
}

/**
 * SpawnedWatchedValue - WatchedValue with owner reference
 */
class SpawnedWatchedValue extends WatchedValue {
    /**
     * Create spawned instance
     * @param {WatchedValue} owner - Owner watched value
     * @param {*} initialValue - Initial value
     * @param {boolean} isWeak - Weak reference flag
     */
    constructor(owner, initialValue, isWeak) {
        super(initialValue);
        
        delete this._listeners;
        this._owner = owner;
        this._onDestroy = null;
        this._weakReference = !!isWeak;
    }

    /**
     * Destroy and cleanup
     */
    destroy() {
        try {
            if (this._onDestroy) {
                this._onDestroy();
            }
        } catch (error) {
            logCallbackError(error);
        }
        super.destroy();
    }

    /**
     * Create read-only spawned instance
     * @returns {Object} Read-only interface
     */
    readonly() {
        if (!this._readonlySpawnInstance) {
            this._readonlySpawnInstance = {
                ...super.readonly(),
                destroy: () => this.destroy(),
                readonly: () => this
            };
        }
        return this._readonlySpawnInstance;
    }

    /**
     * Release with weak reference check
     */
    release() {
        if (!this._weakReference) {
            super.release();
        }
    }
}

// Export
module.exports = {
    WatchedValue
};

