/**
 * ============================================================================
 * TRADINGVIEW MODULE 12362 - CHART SAVER ENHANCED
 * ============================================================================
 *
 * Purpose: Enhanced chart saving with line tools synchronization and state management
 *
 * Size: 4.5 KB
 *
 * Classes:
 *   - ChartSaverEnhanced: Enhanced chart saver with advanced features
 *
 * Features:
 *   - Chart state management and saving
 *   - Line tools synchronization
 *   - Save state tracking
 *   - Event delegation for save operations
 *   - Size limit handling
 *   - Error management and recovery
 *   - Widget collection integration
 *   - Token-based save operations
 *
 * Dependencies:
 *   - 50279: Chart widget utilities
 *   - 50151: Translation utilities
 *   - 11542: Translation utilities
 *   - 14411: Chart changes utilities
 *   - 23024: Save utilities
 *   - 48096: Delegate utilities
 *   - 37103: Save utilities
 *   - 81593: Save utilities
 *
 * Exports:
 *   - ChartSaverEnhanced: Enhanced chart saver class
 *
 * @module 12362
 * @category Chart System
 * @subpackage Save Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.chartSaverEnhanced_d(moduleConfig, {
    ChartSaverEnhanced: () => ChartSaverEnhanced
  });

  const ChartWidgetUtils = moduleRequire(50279),
    TranslationUtils = moduleRequire(50151),
    TranslationUtils2 = moduleRequire(11542),
    ChartChangesUtils = moduleRequire(14411),
    SaveUtils = moduleRequire(23024),
    DelegateUtils = moduleRequire(48096),
    SaveUtils2 = moduleRequire(37103),
    SaveUtils3 = moduleRequire(81593);

  /**
   * Enhanced chart saver class
   */
  class ChartSaverEnhanced {
    constructor(chartWidgetCollection) {
      this._prevChartState = null;
      this._chartSavedDelegate = new DelegateUtils.Delegate();
      this._chartAboutToBeSavedDelegate = new DelegateUtils.Delegate();
      this._chartSizeLimitExceededDelegate = new DelegateUtils.Delegate();
      this._isSaveInProcess = false;
      this._savingToken = null;
      this._chartWidgetCollection = chartWidgetCollection;
    }

    /**
     * Get previous chart state
     * @returns {Object|null} Previous chart state
     */
    getPrevChartState() {
      return this._prevChartState;
    }

    /**
     * Set previous chart state
     * @param {Object} state - Chart state to set
     */
    setPrevChartState(state) {
      this._prevChartState = state;
    }

    /**
     * Get chart saved delegate
     * @returns {Delegate} Chart saved delegate
     */
    getChartSavedDelegate() {
      return this._chartSavedDelegate;
    }

    /**
     * Get chart about to be saved delegate
     * @returns {Delegate} Chart about to be saved delegate
     */
    getChartAboutToBeSavedDelegate() {
      return this._chartAboutToBeSavedDelegate;
    }

    /**
     * Get chart size limit exceeded delegate
     * @returns {Delegate} Chart size limit exceeded delegate
     */
    getChartSizeLimitExceededDelegate() {
      return this._chartSizeLimitExceededDelegate;
    }

    /**
     * Check if save is in process
     * @returns {boolean} True if save is in process
     */
    isSaveInProcess() {
      return this._isSaveInProcess;
    }

    /**
     * Get saving token
     * @returns {string|null} Current saving token
     */
    getSavingToken() {
      return this._savingToken;
    }

    /**
     * Get chart widget collection
     * @returns {Object} Chart widget collection
     */
    getChartWidgetCollection() {
      return this._chartWidgetCollection;
    }

    /**
     * Save chart data
     * @param {Object} chartData - Chart data to save
     * @returns {Promise} Save promise
     */
    async saveChart(chartData) {
      if (this._isSaveInProcess) {
        throw new Error('Save already in process');
      }

      this._isSaveInProcess = true;
      this._savingToken = this._generateSavingToken();

      try {
        // Notify about to be saved
        this._chartAboutToBeSavedDelegate.fire(chartData);

        // Prepare save data
        const saveData = this._prepareSaveData(chartData);

        // Perform save operation
        const result = await this._performSave(saveData);

        // Update previous state
        this._prevChartState = chartData;

        // Notify save completed
        this._chartSavedDelegate.fire(result);

        return result;
      } catch (error) {
        // Handle save error
        this._handleSaveError(error);
        throw error;
      } finally {
        this._isSaveInProcess = false;
        this._savingToken = null;
      }
    }

    /**
     * Save chart line tools
     * @param {Object} chartData - Chart data
     * @param {Array} lineTools - Line tools array
     * @param {Object} options - Save options
     * @returns {Promise} Save promise
     */
    async saveChartLineTools(chartData, lineTools, options) {
      if (!lineTools || lineTools.length === 0) {
        return Promise.resolve({ success: true, message: 'No line tools to save' });
      }

      try {
        const lineToolsData = {
          chartData,
          lineTools,
          options: {
            ...options,
            timestamp: Date.now()
          }
        };

        const result = await SaveUtils2.saveLineTools(lineToolsData);
        return result;
      } catch (error) {
        this._handleSaveError(error);
        throw error;
      }
    }

    /**
     * Check if chart size exceeds limits
     * @param {Object} chartData - Chart data to check
     * @returns {boolean} True if size exceeded
     */
    isChartSizeExceeded(chartData) {
      const maxSize = SaveUtils3.getMaxChartSize();
      const currentSize = this._calculateChartSize(chartData);
      return currentSize > maxSize;
    }

    /**
     * Generate saving token
     * @returns {string} Unique saving token
     */
    _generateSavingToken() {
      return `save_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Prepare save data
     * @param {Object} chartData - Raw chart data
     * @returns {Object} Prepared save data
     */
    _prepareSaveData(chartData) {
      return {
        ...chartData,
        metadata: {
          saveTime: new Date().toISOString(),
          version: '1.0',
          source: 'ChartSaverEnhanced'
        }
      };
    }

    /**
     * Perform save operation
     * @param {Object} saveData - Prepared save data
     * @returns {Promise} Save result
     */
    async _performSave(saveData) {
      return SaveUtils.performSave(saveData);
    }

    /**
     * Handle save error
     * @param {Error} error - Save error
     */
    _handleSaveError(error) {
      console.error('Chart save error:', error);
      
      // Check if it's a size limit error
      if (error.message.includes('size limit')) {
        this._chartSizeLimitExceededDelegate.fire(error);
      }
    }

    /**
     * Calculate chart size
     * @param {Object} chartData - Chart data
     * @returns {number} Calculated size in bytes
     */
    _calculateChartSize(chartData) {
      return JSON.stringify(chartData).length * 2; // Rough estimate
    }

    /**
     * Destroy chart saver
     */
    destroy() {
      this._chartSavedDelegate.removeAllListeners();
      this._chartAboutToBeSavedDelegate.removeAllListeners();
      this._chartSizeLimitExceededDelegate.removeAllListeners();
      this._prevChartState = null;
      this._chartWidgetCollection = null;
    }
  }

  // Export enhanced chart saver class
  moduleExports.ChartSaverEnhanced = ChartSaverEnhanced;
}
