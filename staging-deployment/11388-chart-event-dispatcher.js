/**
 * Module 11388: Chart Event Dispatcher
 * 
 * Central event management system for the chart widget.
 * Handles registration, triggering, and cleanup of chart events
 * such as click, hover, zoom, pan, and data updates.
 * 
 * @module 11388
 * @namespace ChartEventDispatcher
 */

/**
 * Enumeration of supported chart event types.
 * @enum {string}
 */
export const ChartEventType = {
    CLICK: 'chart_click',
    DOUBLE_CLICK: 'chart_double_click',
    RIGHT_CLICK: 'chart_right_click',
    HOVER: 'chart_hover',
    ZOOM: 'chart_zoom',
    PAN: 'chart_pan',
    SCROLL: 'chart_scroll',
    DATA_UPDATE: 'data_update',
    SYMBOL_CHANGE: 'symbol_change',
    INTERVAL_CHANGE: 'interval_change',
    STUDY_ADDED: 'study_added',
    STUDY_REMOVED: 'study_removed',
    DRAWING_ADDED: 'drawing_added',
    DRAWING_REMOVED: 'drawing_removed',
    VISIBILITY_RANGE_CHANGE: 'visibility_range_change'
};

/**
 * Represents a registered event listener.
 * @typedef {Object} EventListener
 * @property {string} eventType - Type of event.
 * @property {Function} callback - The callback function.
 * @property {Object} context - Execution context (this).
 * @property {boolean} once - Whether to auto-remove after first trigger.
 */

/**
 * Main event dispatcher class for the chart.
 * @class
 */
export class ChartEventDispatcher {
    constructor() {
        /** @private */
        this._listeners = new Map();
        
        /** @private */
        this._eventQueue = [];
        
        /** @private */
        this._isSuspended = false;
        
        /** @private */
        this._maxQueueSize = 1000;
    }

    /**
     * Registers an event listener for a specific event type.
     * 
     * @param {string} eventType - One of ChartEventType.
     * @param {Function} callback - Function to call when event fires.
     * @param {Object} [context] - Optional context for 'this' binding.
     * @param {boolean} [once=false] - If true, listener is removed after first trigger.
     */
    subscribe(eventType, callback, context, once = false) {
        if (!eventType || typeof callback !== 'function') {
            console.error('Invalid event subscription:', eventType);
            return;
        }

        if (!this._listeners.has(eventType)) {
            this._listeners.set(eventType, []);
        }

        const listener = {
            eventType,
            callback,
            context: context || null,
            once
        };

        this._listeners.get(eventType).push(listener);
    }

    /**
     * Removes an event listener.
     * 
     * @param {string} eventType - Type of event.
     * @param {Function} callback - The callback to remove.
     */
    unsubscribe(eventType, callback) {
        if (!this._listeners.has(eventType)) return;

        const listeners = this._listeners.get(eventType);
        const filtered = listeners.filter(l => l.callback !== callback);
        
        this._listeners.set(eventType, filtered);
        
        // Clean up empty arrays
        if (filtered.length === 0) {
            this._listeners.delete(eventType);
        }
    }

    /**
     * Triggers an event, calling all registered listeners.
     * 
     * @param {string} eventType - Type of event to fire.
     * @param {*} [data] - Optional data payload.
     */
    fireEvent(eventType, data) {
        if (this._isSuspended) {
            // Queue event for later processing
            this._queueEvent(eventType, data);
            return;
        }

        if (!this._listeners.has(eventType)) return;

        const listeners = this._listeners.get(eventType);
        const toRemove = [];

        // Create a copy to allow modification during iteration
        [...listeners].forEach((listener, index) => {
            try {
                const context = listener.context || this;
                listener.callback.call(context, data);
                
                if (listener.once) {
                    toRemove.push(index);
                }
            } catch (error) {
                console.error(`Error in event listener for ${eventType}:`, error);
            }
        });

        // Remove 'once' listeners
        if (toRemove.length > 0) {
            const remaining = listeners.filter((_, idx) => !toRemove.includes(idx));
            this._listeners.set(eventType, remaining);
        }
    }

    /**
     * Queues an event when dispatcher is suspended.
     * @private
     */
    _queueEvent(eventType, data) {
        if (this._eventQueue.length >= this._maxQueueSize) {
            this._eventQueue.shift(); // Remove oldest
        }
        
        this._eventQueue.push({ eventType, data, timestamp: Date.now() });
    }

    /**
     * Flushes all queued events.
     */
    flushQueue() {
        while (this._eventQueue.length > 0 && !this._isSuspended) {
            const event = this._eventQueue.shift();
            this.fireEvent(event.eventType, event.data);
        }
    }

    /**
     * Suspends event firing (events are queued instead).
     */
    suspend() {
        this._isSuspended = true;
    }

    /**
     * Resumes event firing and processes queued events.
     */
    resume() {
        this._isSuspended = false;
        this.flushQueue();
    }

    /**
     * Checks if event firing is currently suspended.
     * @returns {boolean}
     */
    isSuspended() {
        return this._isSuspended;
    }

    /**
     * Gets the count of listeners for a specific event type.
     * @param {string} eventType
     * @returns {number}
     */
    getListenerCount(eventType) {
        if (!this._listeners.has(eventType)) return 0;
        return this._listeners.get(eventType).length;
    }

    /**
     * Clears all event listeners.
     */
    clearAll() {
        this._listeners.clear();
        this._eventQueue = [];
    }

    /**
     * Creates a convenience method for common chart actions.
     * @param {string} actionName
     * @returns {Function}
     */
    createAction(actionName) {
        return (data) => this.fireEvent(actionName, data);
    }
}

/**
 * Mixin for adding event capabilities to any class.
 * @mixin
 */
export const EventMixin = {
    /**
     * Initialize event system on target object.
     * @param {Object} target
     */
    install(target) {
        const dispatcher = new ChartEventDispatcher();
        
        target.on = function(eventType, callback, context) {
            dispatcher.subscribe(eventType, callback, context);
            return this;
        };
        
        target.off = function(eventType, callback) {
            dispatcher.unsubscribe(eventType, callback);
            return this;
        };
        
        target.trigger = function(eventType, data) {
            dispatcher.fireEvent(eventType, data);
            return this;
        };
        
        target.once = function(eventType, callback, context) {
            dispatcher.subscribe(eventType, callback, context, true);
            return this;
        };
    }
};

/**
 * Factory function to create a specialized event emitter.
 * 
 * @param {string[]} allowedEvents - List of allowed event names.
 * @returns {ChartEventDispatcher}
 */
export function createTypedEventEmitter(allowedEvents) {
    const emitter = new ChartEventDispatcher();
    
    const originalSubscribe = emitter.subscribe.bind(emitter);
    
    emitter.subscribe = function(eventType, callback, context, once) {
        if (allowedEvents && !allowedEvents.includes(eventType)) {
            console.warn(`Event type "${eventType}" is not in allowed list:`, allowedEvents);
        }
        originalSubscribe(eventType, callback, context, once);
    };
    
    return emitter;
}

export default {
    ChartEventType,
    ChartEventDispatcher,
    EventMixin,
    createTypedEventEmitter
};
