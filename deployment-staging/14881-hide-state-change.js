/**
 * Module 14881 - Hide State Change Event Handler
 * 
 * Provides event handling for visibility/hide state changes in chart objects.
 * Uses the Delegate pattern to manage subscribers to state changes.
 * 
 * @module 14881-hide-state-change
 */

"use strict";

// Import the Delegate event system
const { Delegate } = require('./48096-delegate');

/**
 * Enumeration of object types that can have hide state changes
 * 
 * Defines what kinds of chart objects can trigger hide state events:
 * - Drawings: Drawing tools and line tools
 * - Indicators: Technical indicators and studies
 * - Positions: Trading positions and orders
 * - All: Any of the above
 * 
 * @enum {string}
 */
const HideStateChangeObjectType = {
    /**
     * Drawing tools and line tools
     * @type {string}
     */
    Drawings: "drawings",
    
    /**
     * Technical indicators and studies
     * @type {string}
     */
    Indicators: "indicators",
    
    /**
     * Trading positions and orders
     * @type {string}
     */
    Positions: "positions",
    
    /**
     * Any type of chart object
     * @type {string}
     */
    All: "all"
};

/**
 * Delegate instance for hiding state change events
 * 
 * Subscribers to this delegate will be notified when an object's visibility changes.
 * 
 * Usage:
 * ```javascript
 * hideStateChange.subscribe(this, (objectType, objectId, isHidden) => {
 *     console.log(`${objectType} ${objectId} is now ${isHidden ? 'hidden' : 'visible'}`);
 * });
 * ```
 * 
 * @type {Delegate}
 */
const hideStateChange = new Delegate();

/**
 * Export the event handler and object type enum
 */
module.exports = {
    hideStateChange: () => hideStateChange,
    HideStateChangeObjectType: HideStateChangeObjectType
};
