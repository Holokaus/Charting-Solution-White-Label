/**
 * ============================================================================
 * TRADINGVIEW MODULE 14411 - CHART CHANGES WATCHER
 * ============================================================================
 *
 * Purpose: Watch for chart changes and manage undo history
 *
 * Size: 3.0 KB
 *
 * Class: ChartChangesWatcher
 *   - Monitors chart state changes
 *   - Tracks undo history modifications
 *   - Manages line tools changes
 *   - Provides change event notifications
 *
 * Features:
 *   - Change mask tracking (content, line tools)
 *   - Undo history management
 *   - Global event subscription
 *   - Change detection and notification
 *
 * Dependencies:
 *   - 67455: Undo history utilities
 *   - 48096: Delegate class
 *
 * Exports:
 *   - ChartChangesWatcher: Chart changes watcher class
 *   - changedAll: All changes mask constant
 *
 * @module 14411
 * @category Chart Management
 * @subpackage Change Detection
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    ChartChangesWatcher: () => ChartChangesWatcher,
    changedAll: () => changedAll
  });

  const undoHistory = moduleRequire(67455),
    Delegate = moduleRequire(48096);

  // Change type enumeration
  !function(ChangeType) {
    ChangeType[ChangeType.NothingChanged = 0] = "NothingChanged";
    ChangeType[ChangeType.ContentChanged = 1] = "ContentChanged";
    ChangeType[ChangeType.LineToolsChanged = 2] = "LineToolsChanged";
  }(ChangeType || (ChangeType = {}));

  const CHANGED_ALL = 3;

  /**
   * Chart changes watcher for monitoring state changes
   */
  class ChartChangesWatcher {
    /**
     * @param {Object} chartWidgetCollection - Chart widget collection
     * @param {Object} undoHistory - Undo history manager
     * @param {Object} chartSaver - Chart saver instance
     * @param {Object} globalEvents - Global event manager
     */
    constructor(chartWidgetCollection, undoHistory, chartSaver, globalEvents) {
      this._undoHistoryHasChanges = true;
      this._changesMask = 0;
      this._handleLayoutNameChanged = () => {
        this._changesMask = CHANGED_ALL;
      };
      this._recalculateHaveChanges = () => {
        const changesMask = this._changesMask;
        const undoHistoryHasChanges = this._undoHistoryHasChanges ? 1 : 0;
        const lineToolsHaveChanges = this._lineToolsHaveChanges.value() ? 2 : 0;
        const newChangesMask = undoHistoryHasChanges | lineToolsHaveChanges;
        this._changesMask = newChangesMask;
        if (this._changesMask !== newChangesMask) {
          this._onValueChanged.fire(0 !== newChangesMask);
        }
      };
      
      this._chartWidgetCollection = chartWidgetCollection;
      this._undoHistory = undoHistory.undoHistory;
      this._lineToolsHaveChanges = chartWidgetCollection.lineToolsSynchronizerHasChanges;
      this._chartSaver = chartSaver;
      this._globalEvents = globalEvents;
      this._onValueChanged = new Delegate.Delegate();
      this._hasChangesWV = new Delegate.WatchedValueFromGetterAndSubscription(
        () => this.hasChanges(),
        this.getOnChange()
      );
      
      this._subscribe();
    }

    /**
     * Destroy watcher and cleanup subscriptions
     */
    destroy() {
      this._unsubscribe();
      this._onValueChanged.destroy();
      this._hasChangesWV.destroy();
    }

    /**
     * Get current changes mask
     * @returns {number} Changes mask
     */
    changes() {
      return this._changesMask;
    }

    /**
     * Check if there are any changes
     * @returns {boolean} True if changes exist
     */
    hasChanges() {
      return this._changesMask > 0;
    }

    /**
     * Check if there are changes in watched value
     * @returns {boolean} True if changes exist in watched value
     */
    hasChangesWV() {
      return this._hasChangesWV;
    }

    /**
     * Get change event delegate
     * @returns {Delegate} Change event delegate
     */
    getOnChange() {
      return this._onValueChanged;
    }

    /**
     * Subscribe to global events and chart state changes
     */
    _subscribe() {
      this._globalEvents.subscribe("chart_loaded", this._handleChartLoaded, this);
      this._globalEvents.subscribe("layout_loaded", this._handleLayoutLoaded, this);
      this._globalEvents.subscribe("chart_migrated", this._handleChartMigrated, this);
      this._globalEvents.subscribe("lineToolsResavedFromContent", this._handleChartMigrated, this);
      this._undoHistory.undoStack().onChange().subscribe(this, this._handleUndoHistoryChange);
      this._chartSaver?.chartSaved().subscribe(this, this._handleChartSaved);
      this._lineToolsHaveChanges.subscribe(this, this._recalculateHaveChanges);
      this._chartWidgetCollection.metaInfo.name.subscribe(this._handleLayoutNameChanged);
    }

    /**
     * Unsubscribe from global events and chart state changes
     */
    _unsubscribe() {
      this._globalEvents.unsubscribe("chart_loaded", this._handleChartLoaded, this);
      this._globalEvents.unsubscribe("layout_loaded", this._handleLayoutLoaded, this);
      this._globalEvents.unsubscribe("chart_migrated", this._handleChartMigrated, this);
      this._globalEvents.unsubscribe("lineToolsResavedFromContent", this._handleChartMigrated, this);
      this._undoHistory.undoStack().onChange().unsubscribe(this, this._handleUndoHistoryChange);
      this._chartSaver?.chartSaved().unsubscribe(this, this._handleChartSaved);
      this._lineToolsHaveChanges.unsubscribe(this, this._recalculateHaveChanges);
      this._chartWidgetCollection.metaInfo.name.unsubscribe(this._handleLayoutNameChanged);
    }

    /**
     * Set undo history changes flag
     * @param {boolean} hasChanges - Whether undo history has changes
     */
    _setUndoHistoryHasChanges(hasChanges) {
      this._undoHistoryHasChanges = hasChanges;
      this._recalculateHaveChanges();
    }

    /**
     * Handle chart loaded event
     */
    _handleChartLoaded() {
      this._setUndoHistoryHasChanges(true);
    }

    /**
     * Handle layout loaded event
     */
    _handleLayoutLoaded() {
      this._setUndoHistoryHasChanges(true);
    }

    /**
     * Handle undo history change event
     * @param {Object} event - Undo history event
     */
    _handleUndoHistoryChange(event) {
      event?.affectsState() && this._setUndoHistoryHasChanges(false);
    }

    /**
     * Handle chart migrated event
     */
    _handleChartMigrated() {
      this._setUndoHistoryHasChanges(false);
    }

    /**
     * Handle chart saved event
     * @param {Object} event - Chart saved event
     */
    _handleChartSaved(event) {
      event && this._setUndoHistoryHasChanges(true);
    }
  }

  // Export constants
  const changedAll = CHANGED_ALL;
}
