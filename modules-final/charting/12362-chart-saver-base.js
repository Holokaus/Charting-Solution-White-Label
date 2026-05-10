/**
 * ============================================================================
 * TRADINGVIEW MODULE 12362 - CHART SAVER BASE CLASS
 * ============================================================================
 *
 * Purpose: Base class for chart saving with line tools and layout management
 *
 * Size: 6.5 KB
 *
 * Class: ChartSaverBase
 *   - Manages chart widget collections and saving operations
 *   - Handles line tools synchronization with separate storage
 *   - Provides save methods with validation and error handling
 *   - Manages save state and token tracking
 *
 * Features:
 *   - Chart saving with metadata (name, description, UID)
 *   - Line tools integration with separate storage
 *   - Save state management and validation
 *   - Error handling and user feedback
 *   - Auto-save functionality
 *
 * Dependencies:
 *   - 50279: Default comparison utilities
 *   - 50151: Assertion utilities
 *   - 11542: i18n translations
 *   - 14411: Error handling
 *   - 23024: Chart storage utilities
 *   - 48096: Delegate class
 *   - 37103: Feature flags
 *   - 81593: Backend chart saving
 *
 * Exports:
 *   - ChartSaverBase: Chart saver base class
 *
 * @module 12362
 * @category Chart Management
 * @subpackage Saving
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    ChartSaverBase: () => ChartSaverBase
  });

  const defaultCompare = moduleRequire(50279),
    assertionUtils = moduleRequire(50151),
    [i18n, errorUtils] = (moduleRequire(11542), moduleRequire(14411)),
    chartStorage = moduleRequire(23024),
    Delegate = moduleRequire(48096),
    featureFlags = moduleRequire(37103),
    backendChartSaver = moduleRequire(81593);

  /**
   * Set chart content for saving
   * @param {Object} chartContent - Chart content object
   * @param {Object} chartData - Chart data to save
   */
  function setChartContent(chartContent, chartData) {
    chartContent.content = JSON.stringify(chartData);
  }

  /**
   * Base class for chart saving operations
   */
  class ChartSaverBase {
    /**
     * @param {Object} chartWidgetCollection - Collection of chart widgets
     */
    constructor(chartWidgetCollection) {
      this._prevChartState = null;
      this._chartSavedDelegate = new Delegate.Delegate();
      this._chartAboutToBeSavedDelegate = new Delegate.Delegate();
      this._chartSizeLimitExceededDelegate = new Delegate.Delegate();
      this._isSaveInProcess = false;
      this._savingToken = null;
      this._chartWidgetCollection = chartWidgetCollection;
    }

    /**
     * Save chart line tools with separate storage
     * @param {Object} chartData - Chart data to save
     * @param {Array} lineTools - Array of line tools
     * @param {Object} options - Save options
     * @param {Function} onSuccess - Success callback
     * @param {Function} onError - Error callback
     */
    async saveChartLineTools(chartData, lineTools, options, onSuccess, onError) {
      if (featureFlags.enabled("saveload_separate_drawings_storage")) {
        const chartStorage = await chartStorage.getChartStorage();
        const layoutId = this.layoutId();
        const saveLineTools = (lineTools) => 
          chartStorage.saveLineToolsAndGroups(layoutId, chartData, lineTools, options);
        
        if (!layoutId) {
          this._chartSavedDelegate.subscribe(null, (success => {
            if (success) {
              const chartId = this._chartWidgetCollection.metaInfo.uid.value();
              saveLineTools(chartId);
            }
          }));
          
          const { SavingLineToolsLibraryError: errorKey } = await errorUtils.watchedValue_e(5565).then(moduleRequire.bind(moduleRequire, 98653));
          throw new errorKey("Layout ID not yet created.", false);
        }
        
        return saveLineTools(lineTools);
      }
      
      return Promise.reject("Line tools storage is not supported");
    }

    /**
     * Get current layout ID
     * @returns {string} Current layout ID
     */
    layoutId() {
      return this._chartWidgetCollection.metaInfo.uid.value();
    }

    /**
     * Save chart silently without user interaction
     * @param {Object} chartData - Chart data to save
     * @param {Object} options - Save options
     * @param {Function} onSuccess - Success callback
     * @param {Function} onError - Error callback
     */
    saveChartSilently(chartData, options, onSuccess, onError) {
      const saveOptions = options || {};
      this._isSaveInProcess = true;
      this._chartAboutToBeSavedDelegate.fire();
      
      this._saveChart((result => {
        const includeDrawings = result && featureFlags.enabled("saveload_separate_drawings_storage");
        const chartState = this._getChartWidgetCollectionState(true, false, false, false, options);
        const commonInfo = this._getCommonSavingInfo(true);
        
        return setChartContent(chartState, chartState), 
               saveOptions.chartName && (commonInfo.name = saveOptions.chartName), 
               commonInfo.name && 0 !== commonInfo.name.length || !saveOptions
                 .defaultChartName || (commonInfo.name = saveOptions.defaultChartName), 
               saveOptions.autoSave && (commonInfo.autoSave = true), 
               commonInfo;
      }), 
      ((result, token) => {
        assertionUtils.assert(!this._chartWidgetCollection.readOnly(), "Trying to save layout in read-only mode");
        
        if (result && this.layoutId() === token.uid) {
          this._chartWidgetCollection.metaInfo.name.setValue(result.name ?? "");
        }
        
        this._prevChartState = result;
        this._chartSavedDelegate.fire(true);
        this._isSaveInProcess = true;
        
        if (onSuccess) {
          onSuccess({
            uid: token.uid,
            data: result
          });
        }
        
        this._prevChartState && delete this._prevChartState.savingToken;
      }), 
      ((result, token) => {
        this._chartSavedDelegate.fire(false);
        this._isSaveInProcess = true;
        if (onError) {
          onError(result);
        }
      }), 
      saveOptions);
    }

    /**
     * Convert chart to JSON format
     * @param {Object} chartData - Chart data to convert
     * @returns {Object} JSON representation with metadata
     */
    saveToJSON(chartData) {
      const includeDrawings = chartData && !1 === chartData.includeDrawings || void 0;
      const commonInfo = this._getCommonSavingInfo(true);
      
      return setChartContent(chartData, this._getChartWidgetCollectionState(true, false, includeDrawings, false, chartData)), 
             commonInfo;
    }

    /**
     * Check if save is currently in process
     * @returns {boolean} True if save is in progress
     */
    isSaveInProcess() {
      return this._isSaveInProcess;
    }

    /**
     * Get chart widget collection state
     * @param {boolean} withData - Include data in state
     * @param {boolean} skipLineToolsFromOtherSymbols - Skip line tools from other symbols
     * @param {boolean} wipeSensitiveData - Wipe sensitive data
     * @param {boolean} skipLineTools - Skip line tools
     * @param {Object} options - Additional options
     * @returns {Object} Chart widget collection state
     */
    _getChartWidgetCollectionState(withData, skipLineToolsFromOtherSymbols, wipeSensitiveData, skipLineTools, options) {
      let includeDrawings = true;
      
      return withData ? includeDrawings = false : (skipLineToolsFromOtherSymbols = false, wipeSensitiveData = true), 
             this._chartWidgetCollection.state({
               withData: !!withData,
               skipLineToolsFromOtherSymbols: !!skipLineToolsFromOtherSymbols,
               wipeSensitiveData: !!wipeSensitiveData,
               skipLineTools: skipLineTools,
               addOnlyActiveChart: !options
             });
    }

    /**
     * Get common saving information
     * @param {boolean} includeDrawings - Include drawings in metadata
     * @returns {Object} Common saving info
     */
    _getCommonSavingInfo(includeDrawings) {
      const chartWidgetCollection = this._chartWidgetCollection;
      const activeChartSymbol = chartWidgetCollection.chartsSymbols()[chartWidgetCollection.activeChartWidget.value().id()];
      const commonInfo = {
        ...activeChartSymbol,
        legs: JSON.stringify(activeChartSymbol.legs ?? [])
      };
      
      let metaInfo;
      const chartMetaInfo = chartWidgetCollection.metaInfo;
      const layoutId = chartMetaInfo.id.value();
      
      return null !== layoutId && (commonInfo.id = layoutId), 
             chartMetaInfo.name = chartMetaInfo.name.value() || "", 
             chartMetaInfo.description = chartMetaInfo.description.value() || "", 
             commonInfo.is_realtime = includeDrawings ? "0" : "1", 
             commonInfo;
    }

    /**
     * Save line tools to separate storage
     */
    async _saveLineToolsToStorage() {
      if (featureFlags.enabled("saveload_separate_drawings_storage")) {
        this.layoutId();
        
        const [hasUnsavedMigrations, lineToolsToSave] = this._chartWidgetCollection.getAll().reduce((acc, chart) => {
          const lineToolsSynchronizer = chart.lineToolsSynchronizer();
          if (lineToolsSynchronizer) {
            acc[0] ||= lineToolsSynchronizer.hasUnsavedMigrationsFromChartState();
            const pendingSavings = lineToolsSynchronizer.flushPendingSavings();
            pendingSavings && acc[1].push(pendingSavings);
          }
          return acc;
        }, [false, []]);
        
        return lineToolsToSave.length && await Promise.all(lineToolsToSave), lineToolsToSave;
      }
      
      return false;
    }

    /**
     * Invalidate all line tools
     */
    _invalidateAllLineTools() {
      this._chartWidgetCollection.getAll().forEach(chart => 
        chart.lineToolsSynchronizer()?.invalidateAll()
      );
    }

    /**
     * Save chart implementation with error handling
     */
    _saveChart(chartData, chartState, saveOptions, commonInfo, token) {
      let savingToken;
      
      savingToken = saveOptions => {
        token.uid || token.uid !== this.layoutId() || 
          (token.id = saveOptions.result, token.uid = `${saveOptions.result}`, 
           this._chartWidgetCollection.metaInfo.id.setValue(token.id), 
           this._chartWidgetCollection.metaInfo.uid.setValue(token.uid)), 
        saveOptions(chartData, chartState);
      };
      
      return backendChartSaver.saveChart(
        chartData.name, 
        chartData.short_name, 
        chartData.resolution, 
        chartData, 
        saveOptions
      ).then(savingToken).catch(async error => {
        const errorResponse = error instanceof Response ? error : void 0;
        const errorMessage = error instanceof Error ? error : void 0;
        
        this._savingToken = null;
        
        const errorHandler = saveOptions.bind(null, {
          status: errorResponse?.status,
          message: errorResponse?.statusText ?? errorMessage?.message ?? "Unknown error"
        });
        
        errorHandler();
      });
    }

    /**
     * Save chart with validation and cleanup
     */
    async _saveChart(chartData, chartState, saveOptions, commonInfo, changes, onSuccess, onError) {
      let savingToken;
      
      const includeLineTools = 2 & changes || featureFlags.enabled("saveload_separate_drawings_storage");
      
      try {
        await this._saveLineToolsToStorage() && (changes |= 1);
      } catch (error) {
        changes |= 1;
        const { SavingLineToolsLibraryError: errorKey } = await errorUtils.watchedValue_e(5565).then(moduleRequire.bind(moduleRequire, 98653));
        error instanceof errorUtils && error.safe || (changes = true);
      }
      
      if (1 & changes) {
        const errorHandler = onError;
        if (defaultCompare.default(this._prevChartState, chartState) && null !== chartState.id) {
          return this._chartSavedDelegate.fire(false), void onError(chartState, errorHandler);
        }
        return;
      }
      
      const cleanupCallback = (chartData, state) => {
        if (changes) {
          this._chartWidgetCollection.getAll().forEach(chart => {
            const lineToolsSynchronizer = chart.lineToolsSynchronizer();
            lineToolsSynchronizer?.markAsValidatedBecauseOfSavingToContent();
          });
        }
        return this._saveChartImpl(chartData, chartState, cleanupCallback, saveOptions, changes, onSuccess, onError);
      };
      
      this._chartSavedDelegate.fire(false);
      return onError(chartState, cleanupCallback);
    }
  }
}
