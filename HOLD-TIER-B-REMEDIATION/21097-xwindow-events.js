/**
 * ============================================================================
 * TRADINGVIEW MODULE 21097 - XWINDOW EVENTS
 * ============================================================================
 *
 * Purpose: XWindow events management and broadcasting
 *
 * Size: 2.1 KB
 *
 * Class: TVXWindowEvents
 *   - Manages XWindow events
 *   - Handles event broadcasting
 *   - Provides local storage integration
 *   - Supports event listeners
 *
 * Features:
 *   - Event broadcasting via BroadcastChannel
 *   - Local storage event handling
 *   - Performance monitoring
 *   - Event cleanup and management
 *   - Cross-window communication
 *
 * Dependencies:
 *   - 40167: XWindow events
 *   - 9343: XWindow events
 *   - 11417: XWindow events
 *
 * Exports:
 *   - TVXWindowEvents: XWindow events class
 *
 * @module 21097
 * @category Event System
 * @subpackage XWindow Events
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_d(moduleConfig, {
    TVXWindowEvents: () => TVXWindowEvents
  });

  moduleRequire(40167);

  const logger = moduleRequire(9343),
    localStorageUtils = moduleRequire(11417);

  const loggerInstance = logger.getLogger("XWindowEvents");
  let eventHandlers;

  /**
   * Initialize event system
   */
  function initializeEventSystem() {
    const eventPrefix = "tvxwevents.";
    eventHandlers = {};
    
    if (window.BroadcastChannel) {
      const broadcastChannel = new BroadcastChannel("tvxwevents");
      broadcastChannel.addEventListener("message", (event => {
        const { data: { event: eventType, value: eventData } } = event;
        if (eventHandlers[eventType]) {
          eventHandlers[eventType].forEach(handler => handler(eventData));
        }
      }));
      
      // Initialize local storage cleanup
      initializeLocalStorageCleanup(eventPrefix);
    } else {
      // Fallback to window storage events
      window.addEventListener("storage", handleStorageEvent);
    }
  }

  /**
   * Initialize local storage cleanup
   * @param {string} eventPrefix - Event prefix
   */
  function initializeLocalStorageCleanup(eventPrefix) {
    const startTime = performance.now();
    const keysToDelete = [];
    
    for (let i = 0; i < localStorageUtils.TVLocalStorage.length; i++) {
      const key = localStorageUtils.TVLocalStorage.key(i);
      if (key.startsWith(eventPrefix)) {
        keysToDelete.push(key);
      }
    }
    
    const totalKeys = localStorageUtils.TVLocalStorage.length;
    for (const key of keysToDelete) {
      localStorageUtils.TVLocalStorage.removeItem(key);
    }
    
    const cleanupTime = performance.now() - startTime;
    loggerInstance.logNormal(`Total keys amount in local storage on operation start: ${totalKeys}`);
    loggerInstance.logNormal(`Keys amount in local storage to be deleted: ${keysToDelete.length}`);
    loggerInstance.logNormal(`Keys to be deleted from local storage: ${JSON.stringify(keysToDelete)}`);
    loggerInstance.logNormal(`Removing keys from local storage took ${cleanupTime} ms`);
  }

  /**
   * Handle storage event
   * @param {StorageEvent} event - Storage event
   */
  function handleStorageEvent(event) {
    const { newValue: eventData, key: eventKey } = event;
    if (eventHandlers[eventKey]) {
      eventHandlers[eventKey].forEach(handler => handler(eventData));
    }
  }

  /**
   * XWindow events class
   */
  class TVXWindowEvents {
    constructor() {
      initializeEventSystem();
    }

    /**
     * Add event listener
     * @param {string} eventType - Event type
     * @param {Function} handler - Event handler
     */
    addEventListener(eventType, handler) {
      if (!eventHandlers[eventType]) {
        eventHandlers[eventType] = [];
      }
      eventHandlers[eventType].push(handler);
    }

    /**
     * Remove event listener
     * @param {string} eventType - Event type
     * @param {Function} handler - Event handler
     */
    removeEventListener(eventType, handler) {
      if (eventHandlers[eventType]) {
        const index = eventHandlers[eventType].indexOf(handler);
        if (index > -1) {
          eventHandlers[eventType].splice(index, 1);
        }
      }
    }

    /**
     * Emit event
     * @param {string} eventType - Event type
     * @param {*} eventData - Event data
     */
    emit(eventType, eventData) {
      if (window.BroadcastChannel) {
        const broadcastChannel = new BroadcastChannel("tvxwevents");
        broadcastChannel.postMessage({
          event: eventType,
          value: eventData
        });
      }
    }
  }

  // Initialize the event system
  initializeEventSystem();

  // Export the TVXWindowEvents class
  moduleExports.TVXWindowEvents = TVXWindowEvents;
}
