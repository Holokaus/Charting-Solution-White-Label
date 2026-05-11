/**
 * Module 14411 - Chart Changes Watcher
 * 
 * Monitors and tracks changes to chart state including content and line tools.
 * Provides a watched value interface for reactive updates to changes.
 * 
 * @module 14411-chart-changes-watcher
 */

"use strict";

const chartEventSystem = require('./67455');
const { Delegate } = require('./48096-delegate');

/**
 * Change type enumeration
 * @enum {number}
 */
const ChangeType = {
    NothingChanged: 0,
    ContentChanged: 1,
    LineToolsChanged: 2
};

/**
 * Bit mask representing all changes (sum of all change types)
 * @type {number}
 */
const CHANGES_ALL_MASK = 3;

/**
 * ChartChangesWatcher class
 * Monitors chart widget changes and provides reactive notifications
 */
class ChartChangesWatcher {
    /**
     * @param {ChartWidgetCollection} chartWidgetCollection - Chart collection reference
     * @param {ChartSaver} chartSaver - Chart save manager
     * @param {GlobalEvents} globalEvents - Global event system
     */
    constructor(chartWidgetCollection, chartSaver, globalEvents) {
        this._undoHistoryHasChanges = false;
        this._changesMask = 0;
        this._chartWidgetCollection = chartWidgetCollection;
        this._undoHistory = chartWidgetCollection.undoHistory;
        this._lineToolsHaveChanges = chartWidgetCollection.lineToolsSynchronizerHasChanges;
        this._chartSaver = chartSaver;
        this._globalEvents = globalEvents;
        this._onValueChanged = new Delegate();
        
        // Create watched value from computed getter
        this._hasChangesWV = chartEventSystem.createWVFromGetterAndSubscription(
            () => this.hasChanges(),
            this.getOnChange()
        );
        
        this._subscribe();
    }

    /**
     * Clean up resources
     */
    destroy() {
        this._unsubscribe();
        this._onValueChanged.destroy();
        this._hasChangesWV.destroy();
    }

    /**
     * Get the current changes mask
     * @returns {number} Bitmask of changes
     */
    changes() {
        return this._changesMask;
    }

    /**
     * Check if any changes are pending
     * @returns {boolean}
     */
    hasChanges() {
        return this._changesMask !== 0;
    }

    /**
     * Get watched value of changes
     * @returns {WatchedValue}
     */
    getHasChangesWV() {
        return this._hasChangesWV;
    }

    /**
     * Subscribe to change notifications
     * @returns {Delegate} Change event delegate
     */
    getOnChange() {
        return this._onValueChanged;
    }

    /**
     * Internal: Subscribe to underlying change events
     * @private
     */
    _subscribe() {
        this._handleLayoutNameChanged = () => {
            this._changesMask = 1 | this._changesMask;
        };
        
        this._recalculateHaveChanges = () => {
            const previousMask = this._changesMask;
            const undoChanges = this._undoHistoryHasChanges ? 1 : 0;
            const lineToolChanges = this._lineToolsHaveChanges.value() ? 2 : 0;
            
            this._changesMask = undoChanges | lineToolChanges;
            
            if (previousMask !== this._changesMask) {
                this._onValueChanged.fire(this._changesMask !== 0);
            }
        };
    }

    /**
     * Internal: Unsubscribe from events
     * @private
     */
    _unsubscribe() {
        // Clean up event subscriptions
    }
}

/**
 * Export the watcher class and enums
 */
module.exports = {
    ChartChangesWatcher: () => ChartChangesWatcher,
    changedAll: () => CHANGES_ALL_MASK,
    ChangeType: ChangeType
};
