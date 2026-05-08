/**
 * ============================================================================
 * TRADINGVIEW MODULE 14411 - CHART CHANGES ENHANCED
 * ============================================================================
 *
 * Purpose: Enhanced chart changes watching and event management
 *
 * Size: 2.1 KB
 *
 * Classes:
 *   - ChartChangesEnhanced: Enhanced chart changes watcher
 *
 * Features:
 *   - Chart change detection and tracking
 *   - Undo history management
 *   - Line tools synchronization
 *   - Layout name change handling
 *   - Event delegation and broadcasting
 *   - Change mask management
 *   - Widget collection integration
 *
 * Dependencies:
 *   - 67455: Chart utilities
 *   - 48096: Delegate utilities
 *
 * Exports:
 *   - ChartChangesEnhanced: Enhanced chart changes class
 *   - changedAll: Global change detection function
 *
 * @module 14411
 * @category Chart System
 * @subpackage Change Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.chartChangesEnhanced_d(moduleConfig, {
    ChartChangesEnhanced: () => ChartChangesEnhanced,
    changedAll: () => changedAll
  });

  const ChartUtils = moduleRequire(67455),
    DelegateUtils = moduleRequire(48096);

  /**
   * Chart change types enumeration
   */
  const ChartChangeTypes = {
    NothingChanged: 0,
    ContentChanged: 1,
    LineToolsChanged: 2
  };

  /**
   * Chart change type labels
   */
  const ChartChangeTypeLabels = {
    [ChartChangeTypes.NothingChanged]: "NothingChanged",
    [ChartChangeTypes.ContentChanged]: "ContentChanged",
    [ChartChangeTypes.LineToolsChanged]: "LineToolsChanged"
  };

  /**
   * Initialize chart change defaults
   * @param {Object} config - Configuration object
   */
  function initializeChartChangeDefaults(config) {
    return {
      ...config,
      changeTypes: ChartChangeTypes,
      changeLabels: ChartChangeTypeLabels
    };
  }

  /**
   * Enhanced chart changes watcher class
   */
  class ChartChangesEnhanced {
    constructor(chartWidgetCollection, undoHistory, lineToolsSynchronizer, chartSaver, globalEvents) {
      this._undoHistoryHasChanges = true;
      this._changesMask = 0;
      this._handleLayoutNameChanged = () => {
        this._changesMask = 1 | this._changesMask;
      };
      this._recalculateHaveChanges = () => {
        const undoHistoryChanges = this._undoHistoryHasChanges ? 1 : 0;
        const lineToolsChanges = this._lineToolsHaveChanges.value() ? 2 : 0;
        const newChangesMask = undoHistoryChanges | lineToolsChanges;
        this._changesMask = newChangesMask;
        
        if (newChangesMask !== this._changesMask) {
          this._onValueChanged.fire(newChangesMask);
        }
      };
      
      this._chartWidgetCollection = chartWidgetCollection;
      this._undoHistory = undoHistory;
      this._lineToolsHaveChanges = lineToolsSynchronizer;
      this._chartSaver = chartSaver;
      this._globalEvents = globalEvents;
      this._onValueChanged = new DelegateUtils.Delegate();
    }

    /**
     * Get undo history has changes
     * @returns {boolean} True if undo history has changes
     */
    getUndoHistoryHasChanges() {
      return this._undoHistoryHasChanges;
    }

    /**
     * Set undo history has changes
     * @param {boolean} hasChanges - Whether undo history has changes
     */
    setUndoHistoryHasChanges(hasChanges) {
      this._undoHistoryHasChanges = hasChanges;
    }

    /**
     * Get changes mask
     * @returns {number} Current changes mask
     */
    getChangesMask() {
      return this._changesMask;
    }

    /**
     * Set changes mask
     * @param {number} mask - Changes mask to set
     */
    setChangesMask(mask) {
      this._changesMask = mask;
    }

    /**
     * Get layout name changed handler
     * @returns {Function} Layout name changed handler
     */
    getLayoutNameChangedHandler() {
      return this._handleLayoutNameChanged;
    }

    /**
     * Get recalculate have changes handler
     * @returns {Function} Recalculate have changes handler
     */
    getRecalculateHaveChangesHandler() {
      return this._recalculateHaveChanges;
    }

    /**
     * Get chart widget collection
     * @returns {Object} Chart widget collection
     */
    getChartWidgetCollection() {
      return this._chartWidgetCollection;
    }

    /**
     * Get undo history
     * @returns {Object} Undo history object
     */
    getUndoHistory() {
      return this._undoHistory;
    }

    /**
     * Get line tools have changes
     * @returns {Object} Line tools have changes object
     */
    getLineToolsHaveChanges() {
      return this._lineToolsHaveChanges;
    }

    /**
     * Get chart saver
     * @returns {Object} Chart saver object
     */
    getChartSaver() {
      return this._chartSaver;
    }

    /**
     * Get global events
     * @returns {Object} Global events object
     */
    getGlobalEvents() {
      return this._globalEvents;
    }

    /**
     * Get value changed delegate
     * @returns {Delegate} Value changed delegate
     */
    getValueChangedDelegate() {
      return this._onValueChanged;
    }

    /**
     * Handle value change
     * @param {number} changeMask - Change mask
     */
    handleValueChange(changeMask) {
      if (changeMask !== this._changesMask) {
        this._changesMask = changeMask;
        this._onValueChanged.fire(changeMask);
      }
    }

    /**
     * Check if all changes occurred
     * @returns {boolean} True if all change types are active
     */
    hasAllChanges() {
      return this._changesMask === (ChartChangeTypes.ContentChanged | ChartChangeTypes.LineToolsChanged);
    }

    /**
     * Check if content changed
     * @returns {boolean} True if content changed
     */
    hasContentChanged() {
      return (this._changesMask & ChartChangeTypes.ContentChanged) !== 0;
    }

    /**
     * Check if line tools changed
     * @returns {boolean} True if line tools changed
     */
    hasLineToolsChanged() {
      return (this._changesMask & ChartChangeTypes.LineToolsChanged) !== 0;
    }

    /**
     * Reset changes
     */
    resetChanges() {
      this._changesMask = 0;
      this._undoHistoryHasChanges = false;
    }

    /**
     * Destroy chart changes watcher
     */
    destroy() {
      this._onValueChanged.removeAllListeners();
      this._undoHistoryHasChanges = false;
      this._changesMask = 0;
      this._chartWidgetCollection = null;
      this._undoHistory = null;
      this._lineToolsHaveChanges = null;
      this._chartSaver = null;
      this._globalEvents = null;
    }
  }

  /**
   * Check if all changes occurred globally
   * @param {Object} changeData - Change data object
   * @returns {boolean} True if all changes occurred
   */
  function changedAll(changeData) {
    return changeData && 
           changeData.contentChanged && 
           changeData.lineToolsChanged;
  }

  // Export enhanced chart changes class and functions
  moduleExports.ChartChangesEnhanced = ChartChangesEnhanced;
  moduleExports.changedAll = changedAll;
  moduleExports.ChartChangeTypes = ChartChangeTypes;
  moduleExports.ChartChangeTypeLabels = ChartChangeTypeLabels;
}
