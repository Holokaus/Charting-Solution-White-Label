/**
 * ============================================================================
 * TRADINGVIEW MODULE 32112 - SELECTION API
 * ============================================================================
 *
 * Purpose: Selection API for chart data sources
 *
 * Size: 2.4 KB
 *
 * Class: SelectionApi
 *   - Manages chart selection operations
 *   - Handles source addition/removal
 *   - Provides selection state checking
 *   - Supports macro operations
 *
 * Features:
 *   - Selection management
 *   - Source validation
 *   - Macro operation support
 *   - Selection state tracking
 *
 * Dependencies:
 *   - 12217: Collection utilities
 *   - 41706: Selection utilities
 *   - 87713: Selection utilities
 *
 * Exports:
 *   - SelectionApi: Selection API class
 *
 * @module 32112
 * @category Chart Selection
 * @subpackage Selection API
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    SelectionApi: () => SelectionApi
  });

  const collectionUtils = moduleRequire(12217),
    selectionUtils = moduleRequire(41706),
    selectionUtils2 = moduleRequire(87713);

  /**
   * Selection API implementation
   */
  class SelectionApi {
    /**
     * @param {Object} model - Chart model
     */
    constructor(model) {
      this._model = model;
    }

    /**
     * Add source to selection
     * @param {Object} source - Data source to add
     */
    add(source) {
      if (Array.isArray(source)) {
        this._model.selectionMacro(item => {
          item.map(item => this.addSourceToSelection(item));
          item.forEach(item => this.addSourceToSelection(item));
        });
      } else {
        this.add([source]);
      }
    }

    /**
     * Add single source to selection
     * @param {Object} source - Data source to add
     */
    addSourceToSelection(source) {
      this._model.selection().addSourceToSelection(source);
    }

    /**
     * Set selection to sources
     * @param {Array} sources - Array of data sources
     */
    set(sources) {
      this._model.selectionMacro(item => {
        item.clearSelection();
        item.map(item => this.addSourceToSelection(item));
        item.forEach(item => this.addSourceToSelection(item));
      });
    }

    /**
     * Remove source from selection
     * @param {Object} source - Data source to remove
     */
    remove(source) {
      if (Array.isArray(source)) {
        this._model.selectionMacro(item => {
          item.map(item => this.removeSourceFromSelection(item));
          item.forEach(item => this.removeSourceFromSelection(item));
        });
      } else {
        this.remove([source]);
      }
    }

    /**
     * Remove single source from selection
     * @param {Object} source - Data source to remove
     */
    removeSourceFromSelection(source) {
      this._model.selection().removeSourceFromSelection(source);
    }

    /**
     * Check if source can be added to selection
     * @param {Object} source - Data source to check
     * @returns {boolean} True if can be added
     */
    canBeAddedToSelection(source) {
      const sourceItem = this.getDataSource(source);
      return this._model.selection().canBeAddedToSelection(sourceItem);
    }

    /**
     * Check if source is selected
     * @param {Object} source - Data source to check
     * @returns {boolean} True if selected
     */
    contains(source) {
      const sourceItem = this.getDataSource(source);
      return this._model.selection().isSelected(sourceItem);
    }

    /**
     * Get all data sources
     * @returns {Array} Array of all data sources
     */
    allSources() {
      return this._model.selection().dataSources().map(source => source.id());
    }

    /**
     * Check if selection is empty
     * @returns {boolean} True if empty
     */
    isEmpty() {
      return this._model.selection().isEmpty();
    }

    /**
     * Get data source by ID
     * @param {string} sourceId - Source ID
     * @returns {Object|null} Data source or null
     */
    getDataSource(sourceId) {
      const source = this._model.dataSourceForId(sourceId);
      if (source === null) {
        throw new Error(`Chart has no study or shape with id "${sourceId}"`);
      }
      return source;
    }
  }

  // Export the SelectionApi class
  moduleExports.SelectionApi = SelectionApi;
}
