/**
 * Module 67135 - PriceDataSource
 * 
 * Parent class for all price-based data sources including Series and indicators.
 * Extends DataSource (module 72207) with price-specific functionality.
 * 
 * @module 67135
 * @exports PriceDataSource, isPriceDataSource
 * 
 * Dependencies:
 *   - 50151: Assertion utilities (ensureNotNull)
 *   - 2072: WatchedValue (reactive state)
 *   - 72207: DataSource (base class)
 *   - 48096: Delegate (event system)
 *   - 22455: Symbol source utilities
 * 
 * Key Features:
 *   1. Price formatting (formatter, priceStep)
 *   2. Currency/unit change notifications
 *   3. Price range management
 *   4. Data range updates (partial/invalidation)
 *   5. Signature tracking (via WatchedValue)
 */

"use strict";

// Import dependencies
const assertionUtils = require('./50151-assertion-utils');
const { WatchedValue } = require('./2072-watched-value');
const { DataSource } = require('./72207-data-source');
const { Delegate } = require('./48096-delegate');
const symbolSourceUtils = require('./22455-symbol-source-utils');

/**
 * Check if an object is a PriceDataSource instance
 * @param {*} obj - Object to check
 * @returns {boolean} True if instance of PriceDataSource
 */
function isPriceDataSource(obj) {
  return obj instanceof PriceDataSource;
}

/**
 * PriceDataSource - Base class for price-based chart data sources
 * 
 * Extends DataSource with:
 * - Price formatting and step management
 * - Currency and unit change events
 * - Price range calculation hooks
 * - Data range update notifications
 * - Signature tracking for reactive updates
 * 
 * @class PriceDataSource
 * @extends DataSource
 */
class PriceDataSource extends DataSource {
  
  /**
   * Create a PriceDataSource instance
   * @param {Object} model - Chart model reference
   * @param {*} id - Source identifier
   */
  constructor(model, id) {
    super(id);
    
    // Event delegates for various changes
    this._formatterChanged = new Delegate();
    this._priceStepChanged = new Delegate();
    this._currencyChanged = new Delegate();
    this._unitChanged = new Delegate();
    this._priceRangeReadyChanged = new Delegate();
    this._dataRangeUpdated = new Delegate();
    
    // Price step for formatting (null = auto)
    this._priceStep = null;
    
    // Signature for reactive tracking
    this._signature = new WatchedValue(null);
    
    // Price range readiness flag
    this._priceRangeReady = true;
    
    // Reference to chart model
    this._model = model;
  }
  
  /**
   * Get base value for calculations
   * @returns {number} Always returns 0
   */
  base() {
    return 0;
  }
  
  /**
   * Get the chart model reference
   * @returns {Object} Chart model
   */
  model() {
    return this._model;
  }
  
  /**
   * Get currency change event delegate
   * @returns {Delegate} Currency changed event
   */
  currencyChanged() {
    return this._currencyChanged;
  }
  
  /**
   * Check if this source acts as currency source
   * @returns {boolean} Always true for PriceDataSource
   */
  isCurrencySource() {
    return true;
  }
  
  /**
   * Check if displayed in legend
   * @returns {boolean} Always true
   */
  isDisplayedInLegend() {
    return true;
  }
  
  /**
   * Get unit change event delegate
   * @returns {Delegate} Unit changed event
   */
  unitChanged() {
    return this._unitChanged;
  }
  
  /**
   * Check if this source acts as unit source
   * @returns {boolean} Always true for PriceDataSource
   */
  isUnitSource() {
    return true;
  }
  
  /**
   * Get signature watched value
   * @returns {WatchedValue} Readonly signature
   */
  signature() {
    return this._signature.readonly();
  }
  
  /**
   * Calculate price range for given bars
   * @param {number} firstBar - First bar index
   * @param {number} lastBar - Last bar index
   * @param {number} [inverted] - Inversion flag
   * @returns {null} Override in subclasses
   */
  priceRange(firstBar, lastBar, inverted) {
    return null;
  }
  
  /**
   * Check if draggable on chart
   * @returns {boolean} Always true
   */
  isDraggable() {
    return true;
  }
  
  /**
   * Get price line color for given bar
   * @param {*} bar - Bar data
   * @returns {*} Same as input (override in subclasses)
   */
  priceLineColor(bar) {
    return bar;
  }
  
  /**
   * Get formatter change event delegate
   * @returns {Delegate} Formatter changed event
   */
  formatterChanged() {
    return this._formatterChanged;
  }
  
  /**
   * Get or set price step
   * @param {number} [value] - New price step (optional)
   * @returns {number|null} Current price step
   */
  priceStep(value) {
    return this._priceStep;
  }
  
  /**
   * Get price step change event delegate
   * @returns {Delegate} Price step changed event
   */
  priceStepChanged() {
    return this._priceStepChanged;
  }
  
  /**
   * Check if included in auto-scale calculation
   * @returns {boolean} Always true
   */
  isIncludedInAutoScale() {
    return true;
  }
  
  /**
   * Provide values for table view
   * @returns {null} Override in subclasses
   */
  tableViewValuesProvider() {
    return null;
  }
  
  /**
   * Provide values for floating tooltip
   * @returns {*} Values from valuesProvider()
   */
  chartFloatingTooltipValuesProvider() {
    return this.valuesProvider();
  }
  
  /**
   * Correct scale margins
   * @param {Object} margins - Input margins
   * @returns {Object} Same margins (override to modify)
   */
  correctScaleMargins(margins) {
    return margins;
  }
  
  /**
   * Check if price range is ready
   * @returns {boolean} Price range ready state
   */
  priceRangeReady() {
    return this._priceRangeReady;
  }
  
  /**
   * Get price range ready change event
   * @returns {Delegate} Price range ready changed event
   */
  priceRangeReadyChanged() {
    return this._priceRangeReadyChanged;
  }
  
  /**
   * Disable price range ready state
   * 
   * Called when price range becomes invalid.
   * Triggers recalculation if on autoscale.
   */
  disablePriceRangeReady() {
    const priceScale = this.priceScale();
    
    // If not autoscale or not main source, skip recalculation
    if (priceScale === null || !priceScale.isAutoScale() || priceScale.mainSource() !== this) {
      return;
    }
    
    // Mark as not ready and schedule recalculation
    this._priceRangeReady = false;
    priceScale.recalculatePriceRangeOnce();
    
    // Fire event
    this._priceRangeReadyChanged.fire(false);
  }
  
  /**
   * Get status view (for status bar)
   * @returns {null} Override in subclasses
   */
  statusView() {
    return null;
  }
  
  /**
   * Get legend view
   * @returns {null} Override in subclasses
   */
  legendView() {
    return null;
  }
  
  /**
   * Get market status model
   * @returns {null} Override in subclasses
   */
  marketStatusModel() {
    return null;
  }
  
  /**
   * Get data updated mode model
   * @returns {null} Override in subclasses
   */
  dataUpdatedModeModel() {
    return null;
  }
  
  /**
   * Get data problem model
   * @returns {null} Override in subclasses
   */
  dataProblemModel() {
    return null;
  }
  
  /**
   * Get alert source model
   * @returns {null} Override in subclasses
   */
  alertSourceModel() {
    return null;
  }
  
  /**
   * Check if alerts can be set on line tools
   * @returns {boolean} Always true
   */
  canHasAlertOnLineTools() {
    return true;
  }
  
  /**
   * Get data range updated event delegate
   * @returns {Delegate} Data range updated event
   */
  dataRangeUpdated() {
    return this._dataRangeUpdated;
  }
  
  /**
   * Handle partial index diffs application
   * 
   * Fires data range update event with affected range.
   * 
   * @private
   * @param {Array} diffs - Array of diff objects with old/new indices
   */
  _onIndexDiffsApplied(diffs) {
    const [plotsFirstBar, plotsLastBar] = assertionUtils.ensureNotNull(this._plotsDataRange());
    
    let minIndex = Infinity;
    let maxIndex = -Infinity;
    
    // Find min/max affected indices
    for (const diff of diffs) {
      minIndex = Math.min(minIndex, diff.old, diff.new);
      maxIndex = Math.max(maxIndex, diff.old, diff.new);
    }
    
    // Fire partial update event
    this._dataRangeUpdated.fire({
      type: "partial",
      startIndex: Math.max(minIndex, plotsFirstBar),
      endIndex: Math.min(maxIndex, plotsLastBar)
    });
  }
  
  /**
   * Get plots data range
   * @returns {null} Override in subclasses to return [firstBar, lastBar]
   */
  _plotsDataRange() {
    return null;
  }
  
  /**
   * Enable price range ready state
   * 
   * Called when price range becomes valid again.
   */
  _enablePriceRangeReady() {
    this._priceRangeReady = true;
    this._priceRangeReadyChanged.fire(true);
  }
  
  /**
   * Handle source currency change
   * 
   * Fires currency changed event unless acting as symbol source.
   * 
   * @private
   */
  _onSourceCurrencyChanged() {
    if (!symbolSourceUtils.isActingAsSymbolSource(this)) {
      this._currencyChanged.fire();
    }
  }
  
  /**
   * Handle source unit change
   * 
   * Fires unit changed event unless acting as symbol source.
   * 
   * @private
   */
  _onSourceUnitChanged() {
    if (!symbolSourceUtils.isActingAsSymbolSource(this)) {
      this._unitChanged.fire();
    }
  }
  
  /**
   * Handle source price range ready change
   * 
   * Disables local price range ready if source reports not ready.
   * 
   * @private
   * @param {boolean} isReady - Price range ready state from source
   */
  _onSourcePriceRangeReadyChanged(isReady) {
    if (!symbolSourceUtils.isActingAsSymbolSource(this) && !isReady) {
      this.disablePriceRangeReady();
    }
  }
}

// Export public API
module.exports = {
  PriceDataSource,
  isPriceDataSource
};
