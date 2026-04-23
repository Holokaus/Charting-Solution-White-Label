/**
 * Module 48096 - Delegate Event System
 * 
 * Implements a delegate/listener pattern for pub/sub event handling.
 * Used throughout the charting library for event dispatching.
 * 
 * @module 48096-delegate
 */

"use strict";

// Import logger utility
const { getLogger } = require('./9343-logger');
const logger = getLogger("Common.Delegate");

/**
 * Filter function to keep only non-singleShot listeners
 * @param {Object} listener - The listener object
 * @returns {boolean} True if listener should be kept (not singleShot)
 */
function isNotSingleShot(listener) {
    return !listener.singleShot;
}

/**
 * Delegate class - Implements event subscription and firing mechanism
 * @class Delegate
 */
class Delegate {
    constructor() {
        // Bind fire method to this instance
        this.fire = this._fireImpl.bind(this);
        // Array to store all subscribed listeners
        this._listeners = [];
    }

    /**
     * Subscribe to an event
     * @param {Object} object - The context object for the callback
     * @param {Function} member - The callback function to invoke
     * @param {boolean} [singleShot=false] - If true, listener is removed after first fire
     */
    subscribe(object, member, singleShot) {
        this._listeners.push({
            object: object,
            member: member,
            singleShot: !!singleShot,
            skip: false
        });
    }

    /**
     * Unsubscribe a specific listener from the event
     * @param {Object} object - The context object of the listener
     * @param {Function} member - The callback function to remove
     */
    unsubscribe(object, member) {
        for (let i = 0; i < this._listeners.length; ++i) {
            const listener = this._listeners[i];
            if (listener.object === object && listener.member === member) {
                listener.skip = true;
                this._listeners.splice(i, 1);
                break;
            }
        }
    }

    /**
     * Unsubscribe all listeners for a specific object
     * @param {Object} object - The context object to remove all listeners for
     */
    unsubscribeAll(object) {
        for (let i = this._listeners.length - 1; i >= 0; --i) {
            const listener = this._listeners[i];
            if (listener.object === object) {
                listener.skip = true;
                this._listeners.splice(i, 1);
            }
        }
    }

    /**
     * Destroy the delegate - removes all listeners
     */
    destroy() {
        this._listeners = [];
    }

    /**
     * Internal implementation of firing an event
     * Invokes all subscribed listeners with provided arguments
     * @param {...any} args - Arguments to pass to each listener
     * @private
     */
    _fireImpl(...args) {
        // Get current listeners array
        const currentListeners = this._listeners;
        
        // Filter out singleShot listeners for next fire
        this._listeners = this._listeners.filter(isNotSingleShot);
        
        // Fire all current listeners
        const listenerCount = currentListeners.length;
        for (let i = 0; i < listenerCount; ++i) {
            const listener = currentListeners[i];
            
            // Skip if marked for removal
            if (!listener.skip) {
                try {
                    // Invoke the listener callback
                    listener.member.apply(listener.object || null, args);
                } catch (error) {
                    // Log any errors that occur during listener execution
                    logger.logError(`${error && (error.stack || error.message)}`);
                }
            }
        }
    }
}

module.exports = {
    Delegate: Delegate
};
