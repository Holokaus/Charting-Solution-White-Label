/**
 * ============================================================================
 * TRADINGVIEW MODULE 21097 - TVX WINDOW EVENTS
 * ============================================================================
 *
 * Purpose: TVX window events management and message handling
 *
 * Size: 2.8 KB
 *
 * Class: TVXWindowEvents
 *   - Manages TVX window message events
 *   - Provides local storage cleanup
 *   - Handles broadcast channel communication
 *   - Supports cross-window messaging
 *
 * Features:
 *   - Event subscription and broadcasting
 *   - Local storage management
 *   - Performance monitoring
 *   - Cross-window communication
 *
 * Dependencies:
 *   - 40167: TVX window events utilities
 *   - 9343: Logger utilities
 *   - 11417: TV local storage
 *
 * Exports:
 *   - TVXWindowEvents: TVX window events class
 *
 * @module 21097
 * @category Window Management
 * @subpackage Event Handling
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    TVXWindowEvents: () => TVXWindowEvents
  });

  const tvxWindowEventsUtils = moduleRequire(40167);
  const logger = moduleRequire(9343).getLogger("XWindowEvents");
  const tvLocalStorage = moduleRequire(11417);

  const TVX_EVENTS_PREFIX = "tvxwevents.";
  let broadcastChannel;
  let broadcastLogger;

  /**
   * TVX window events manager
   */
  class TVXWindowEvents {
    constructor() {
      this._initializeBroadcastChannel();
      this._cleanupLocalStorage();
    }

    /**
     * Initialize broadcast channel for cross-window communication
     */
    _initializeBroadcastChannel() {
      if (window.BroadcastChannel) {
        broadcastChannel = new BroadcastChannel("tvxwevents");
        broadcastChannel.addEventListener("message", this._handleBroadcastMessage.bind(this));
        
        // Clean up old events from local storage
        this._cleanupOldEvents();
      } else {
        // Fallback to storage events for browsers without BroadcastChannel
        window.addEventListener("storage", this._handleStorageEvent.bind(this));
      }
    }

    /**
     * Handle broadcast channel message
     * @param {MessageEvent} event - Broadcast message event
     */
    _handleBroadcastMessage(event) {
      const {
        data: {
          event: eventType,
          value: eventData
        }
      } = event;
      
      const eventHandlers = this._eventHandlers[eventType];
      if (eventHandlers) {
        eventHandlers.forEach(handler => handler(eventData));
      }
    }

    /**
     * Clean up old events from local storage
     */
    _cleanupOldEvents() {
      const eventKeys = [];
      const startTime = performance.now();
      
      // Find all TVX event keys
      for (let i = 0; i < tvLocalStorage.TVLocalStorage.length; i++) {
        const key = tvLocalStorage.TVLocalStorage.key(i);
        if (key.startsWith(TVX_EVENTS_PREFIX)) {
          eventKeys.push(key);
        }
      }
      
      // Remove all old event keys
      const keysToRemove = tvLocalStorage.TVLocalStorage.length;
      for (const key of eventKeys) {
        tvLocalStorage.TVLocalStorage.removeItem(key);
      }
      
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      broadcastLogger.logNormal(`Total keys amount in local storage on operation start: ${keysToRemove}`);
      broadcastLogger.logNormal(`Keys amount in local storage to be deleted: ${eventKeys.length}`);
      broadcastLogger.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(eventKeys)}`);
      broadcastLogger.logNormal(`Removing keys from local storage took ${duration} ms`);
    }

    /**
     * Handle storage event for fallback communication
     * @param {StorageEvent} event - Storage event
     */
    _handleStorageEvent(event) {
      const {
        newValue: eventData,
        key: eventType
      } = event;
      
      const eventHandlers = this._eventHandlers[eventType];
      if (eventHandlers) {
        eventHandlers.forEach(handler => handler(eventData));
      }
    }

    /**
     * Clean up local storage
     */
    _cleanupLocalStorage() {
      // Implementation would clean up local storage
    }

    /**
     * Event handlers map
     */
    _eventHandlers = {};

    /**
     * Add event handler
     * @param {string} eventType - Event type
     * @param {Function} handler - Event handler function
     */
    addEventListener(eventType, handler) {
      if (!this._eventHandlers[eventType]) {
        this._eventHandlers[eventType] = [];
      }
      this._eventHandlers[eventType].push(handler);
    }

    /**
     * Remove event handler
     * @param {string} eventType - Event type
     * @param {Function} handler - Event handler function
     */
    removeEventListener(eventType, handler) {
      if (this._eventHandlers[eventType]) {
        const index = this._eventHandlers[eventType].indexOf(handler);
        if (index > -1) {
          this._eventHandlers[eventType].splice(index, 1);
        }
      }
    }

    /**
     * Emit event
     * @param {string} eventType - Event type
     * @param {*} eventData - Event data
     */
    emit(eventType, eventData) {
      if (broadcastChannel) {
        broadcastChannel.postMessage({
          event: eventType,
          value: eventData
        });
      } else {
        // Fallback to local storage
        const key = TVX_EVENTS_PREFIX + eventType;
        tvLocalStorage.TVLocalStorage.setItem(key, eventData);
        
        // Clean up after a delay
        setTimeout(() => {
          tvLocalStorage.TVLocalStorage.removeItem(key);
        }, 100);
      }
    }
  }

  // Export the TVX window events class
  moduleExports.TVXWindowEvents = TVXWindowEvents;
}
