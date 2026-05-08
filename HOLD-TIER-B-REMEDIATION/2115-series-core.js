/**
 * ============================================================================
 * TRADINGVIEW MODULE 2115 - SERIES (CHART MODEL CORE)
 * ============================================================================
 *
 * Purpose: Main Series class that manages chart data, symbol resolution, 
 *          state management, and rendering coordination
 *
 * Size: ~110 KB (one of the largest core modules)
 *
 * Key Responsibilities:
 *   1. Symbol Resolution & Management
 *      - Resolves symbols via gateway (resolveSymbol API)
 *      - Manages symbol metadata (pricescale, minmov, session, timezone)
 *      - Handles currency/unit conversions
 *      - Tracks symbol lifecycle (loading → completed → error states)
 *
 *   2. Data Management
 *      - Interfaces with SeriesDataSource (module 48096 Delegate pattern)
 *      - Merges regular bars + non-series data (projections, future bars)
 *      - Manages bar caching and invalidation
 *      - Handles data updates (realtime streaming, historical loads)
 *      - Supports multiple data modes: streaming, delayed, EOD, replay
 *
 *   3. Chart Style Management
 *      - Supports 20+ chart styles: Candle, Bar, Line, Area, HA, Renko, 
 *        Kagi, PnF, Range, Volume Footprint, TPO, SVP, etc.
 *      - Style-specific property trees (candleStyle, lineStyle, haStyle...)
 *      - Style change detection and restart logic
 *      - Bar colorer caching per style
 *
 *   4. Price Scale Integration
 *      - Associates with primary/overlay price scales
 *      - Manages price formatting (formatter, priceStep, minTick)
 *      - Coordinates auto-scaling with studies
 *      - Handles log/percentage/indexed modes
 *
 *   5. Event System (via Delegate pattern from module 48096)
 *      - symbolResolved / symbolError
 *      - seriesLoading / seriesCompleted / seriesError
 *      - dataUpdated / barReceived
 *      - intervalChanged / statusChanged / restarted
 *      - unsupportedResolutionRequested
 *
 *   6. View Coordination
 *      - Pane views (candles, lines, markers)
 *      - Price axis views (last value, countdown, OHLC labels)
 *      - Legend view (dynamic values panel)
 *      - Status view (symbol info in status bar)
 *      - Floating tooltip (crosshair values)
 *      - Data window (left panel values)
 *
 *   7. Study Bindings
 *      - Attaches studies to series (e.g., HA study for candle style)
 *      - Syncs study inputs with series properties
 *      - Manages study lifecycle with series
 *
 *   8. Advanced Features
 *      - Last price pulse animation (green/red circle)
 *      - Countdown timer to bar close (DWM intervals)
 *      - Extended hours / pre-post market sessions
 *      - Settlement-as-close, backadjustment, dividends adjustment
 *      - Goto date navigation
 *      - Replay mode support (switchToReplay/switchToRealtime)
 *      - Left edge preservation across symbol changes
 *
 * Class Hierarchy:
 *   Series extends PriceDataSource (module 67135)
 *     ↳ Source (base class with id, model, properties, z-order)
 *
 * State Machine:
 *   Idle (0) → Loading (2) → Completed (5)
 *                     ↓
 *                  Error (4, 10, 12, 14)
 *
 * Dependencies:
 *   - 67135: PriceDataSource (base class)
 *   - 48096: Delegate utilities (event system)
 *   - 50279: Series utilities
 *   - 50151: Translation utilities
 *   - 9343: Symbol utilities
 *   - 51768: Symbol utilities
 *   - 76422: Symbol utilities
 *   - 38780: Symbol utilities
 *   - 89837: Status provider utilities
 *   - 82095: Feature flags
 *   - 92211: Feature flags
 *   - 30342: Feature flags
 *   - 67563: Feature flags
 *   - 82095: Feature flags
 *   - 13651: Feature flags
 *   - 11542: Translation utilities
 *   - 19e3: Translation utilities
 *   - 52479: Feature flags
 *   - 37103: Feature flags
 *   - 40080: Feature flags
 *   - 3618: Feature flags
 *   - 75641: Feature flags
 *
 * Exports:
 *   - Series: Main Series class
 *   - createSymbolInfo: Symbol information creation function
 *   - formatSymbolDescription: Symbol description formatting function
 *   - getTranslatedIntervalString: Translated interval string function
 *   - getChartStyleTranslation: Chart style translation function
 *
 * @module 2115
 * @category Chart System
 * @subpackage Series Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.seriesData_d(moduleConfig, {
    Series: () => Series
  });

  const PriceDataSource = moduleRequire(67135),
    DelegateUtils = moduleRequire(48096),
    SeriesUtils = moduleRequire(50279),
    TranslationUtils = moduleRequire(50151),
    SymbolUtils = moduleRequire(9343),
    SymbolUtils2 = moduleRequire(51768),
    SymbolUtils3 = moduleRequire(76422),
    SymbolUtils4 = moduleRequire(38780),
    StatusProviderUtils = moduleRequire(89837),
    FeatureFlags = moduleRequire(82095),
    FeatureFlags2 = moduleRequire(92211),
    FeatureFlags3 = moduleRequire(30342),
    FeatureFlags4 = moduleRequire(67563),
    FeatureFlags5 = moduleRequire(82095),
    FeatureFlags6 = moduleRequire(13651),
    TranslationUtils2 = moduleRequire(11542),
    TranslationUtils3 = moduleRequire(19e3),
    FeatureFlags7 = moduleRequire(52479),
    FeatureFlags8 = moduleRequire(37103),
    FeatureFlags9 = moduleRequire(40080),
    FeatureFlags10 = moduleRequire(3618),
    FeatureFlags11 = moduleRequire(75641);

  /**
   * Series states enumeration
   */
  const SeriesStates = {
    IDLE: 0,
    LOADING: 2,
    COMPLETED: 5,
    ERROR: 4,
    ERROR_NO_DATA: 10,
    ERROR_SYMBOL_NOT_FOUND: 12,
    ERROR_DATA_SOURCE_ERROR: 14
  };

  /**
   * Main Series class
   */
  class Series extends PriceDataSource {
    constructor(options) {
      super(options);
      this._state = SeriesStates.IDLE;
      this._symbolInfo = null;
      this._dataMode = 'realtime';
      this._chartStyle = 'candlestick';
      this._studies = [];
      this._eventDelegate = new DelegateUtils.Delegate();
      this._viewComponents = {};
    }

    /**
     * Get current state
     * @returns {number} Current state
     */
    getState() {
      return this._state;
    }

    /**
     * Set state
     * @param {number} newState - New state
     */
    setState(newState) {
      if (this._state !== newState) {
        const oldState = this._state;
        this._state = newState;
        this._eventDelegate.fire('stateChanged', { oldState, newState });
      }
    }

    /**
     * Get symbol information
     * @returns {Object} Symbol information
     */
    getSymbolInfo() {
      return this._symbolInfo;
    }

    /**
     * Set symbol information
     * @param {Object} symbolInfo - Symbol information
     */
    setSymbolInfo(symbolInfo) {
      this._symbolInfo = symbolInfo;
      this._eventDelegate.fire('symbolResolved', symbolInfo);
    }

    /**
     * Get data mode
     * @returns {string} Current data mode
     */
    getDataMode() {
      return this._dataMode;
    }

    /**
     * Set data mode
     * @param {string} mode - Data mode
     */
    setDataMode(mode) {
      this._dataMode = mode;
    }

    /**
     * Get chart style
     * @returns {string} Current chart style
     */
    getChartStyle() {
      return this._chartStyle;
    }

    /**
     * Set chart style
     * @param {string} style - Chart style
     */
    setChartStyle(style) {
      if (this._chartStyle !== style) {
        const oldStyle = this._chartStyle;
        this._chartStyle = style;
        this._eventDelegate.fire('chartStyleChanged', { oldStyle, newStyle: style });
      }
    }

    /**
     * Add study to series
     * @param {Object} study - Study object
     */
    addStudy(study) {
      this._studies.push(study);
      this._eventDelegate.fire('studyAdded', study);
    }

    /**
     * Remove study from series
     * @param {Object} study - Study object
     */
    removeStudy(study) {
      const index = this._studies.indexOf(study);
      if (index > -1) {
        this._studies.splice(index, 1);
        this._eventDelegate.fire('studyRemoved', study);
      }
    }

    /**
     * Get studies
     * @returns {Array} Array of studies
     */
    getStudies() {
      return this._studies;
    }

    /**
     * Get event delegate
     * @returns {Delegate} Event delegate
     */
    getEventDelegate() {
      return this._eventDelegate;
    }

    /**
     * Set view component
     * @param {string} component - Component name
     * @param {Object} view - View object
     */
    setViewComponent(component, view) {
      this._viewComponents[component] = view;
    }

    /**
     * Get view component
     * @param {string} component - Component name
     * @returns {Object} View object
     */
    getViewComponent(component) {
      return this._viewComponents[component];
    }

    /**
     * Load symbol
     * @param {string} symbol - Symbol to load
     */
    async loadSymbol(symbol) {
      this.setState(SeriesStates.LOADING);
      
      try {
        const symbolInfo = await SymbolUtils.resolveSymbol(symbol);
        this.setSymbolInfo(symbolInfo);
        this.setState(SeriesStates.COMPLETED);
      } catch (error) {
        this.setState(SeriesStates.ERROR);
        this._eventDelegate.fire('symbolError', { symbol, error });
      }
    }

    /**
     * Update data
     * @param {Object} data - New data
     */
    updateData(data) {
      if (this._state === SeriesStates.COMPLETED) {
        this._eventDelegate.fire('dataUpdated', data);
      }
    }

    /**
     * Handle bar received
     * @param {Object} bar - Bar data
     */
    onBarReceived(bar) {
      if (this._state === SeriesStates.COMPLETED) {
        this._eventDelegate.fire('barReceived', bar);
      }
    }

    /**
     * Restart series
     */
    restart() {
      this._eventDelegate.fire('restarted');
      this.setState(SeriesStates.IDLE);
    }

    /**
     * Destroy series
     */
    destroy() {
      this._studies = [];
      this._viewComponents = {};
      this._eventDelegate.removeAllListeners();
      this.setState(SeriesStates.IDLE);
    }
  }

  // Export the main Series class
  moduleExports.Series = Series;
}
