/**
 * ============================================================================
 * TRADINGVIEW MODULE 13607 - QUOTE SESSION MULTIPLEXER
 * ============================================================================
 *
 * Purpose: Quote session multiplexer for real-time data streaming
 *
 * Size: 8.5 KB
 *
 * Class: QuoteSessionMultiplexer
 *   - Manages quote session connections and subscriptions
 *   - Handles symbol data updates and formatting
 *   - Provides throttled updates for fast symbols
 *   - Manages formatter creation and caching
 *
 * Features:
 *   - Real-time quote streaming
 *   - Symbol subscription management
 *   - Data field configuration (simple, detailed, etc.)
 *   - Throttled updates for performance
 *   - Formatter creation and caching
 *   - Snapshot functionality
 *
 * Dependencies:
 *   - 20057: NMD module
 *   - 90484: Throttling utilities
 *   - 67563: Price formatter
 *   - 53470: Unique utilities
 *   - 4168: UUID generator
 *   - 52706: Update mode utilities
 *   - 39527: Deep extend utilities
 *   - 30947: Quote field constants
 *   - 48096: Delegate class
 *   - 98422: Quote session utilities
 *   - 76220: Quote session class
 *
 * Exports:
 *   - QuoteSessionMultiplexer: Quote session multiplexer class
 *
 * @module 13607
 * @category Real-time Data
 * @subcategory Quote Session
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleExports = moduleRequire.nmd(moduleExports);

  const throttleUtils = moduleRequire(90484).default,
    PriceFormatter = moduleRequire(67563),
    { uniq } = moduleRequire(53470),
    uuidGenerator = moduleRequire(4168),
    { normalizeUpdateMode } = moduleRequire(52706),
    deepExtend = moduleRequire(39527),
    { QUOTE_FIELDS_CACHE, QUOTE_FIELDS } = moduleRequire(30947),
    Delegate = moduleRequire(48096),
    { getNewPeveCloseMode } = moduleRequire(98422),
    QuoteSession = moduleRequire(76220);

  /**
   * Quote session multiplexer for managing multiple quote streams
   */
  class QuoteSessionMultiplexer {
    /**
     * @param {string} type - Quote session type
     * @param {Object} options - Connection options
     */
    constructor(type, options) {
      this.options = Object.assign({
        throttleTimeout: 125
      }, options);
      
      this._connected = false;
      this._symbol_data = {};
      this._subscriptions = {};
      this.onConnect = new Delegate.Delegate();
      this.onDisconnect = new Delegate.Delegate();
      this._quoteApi = new QuoteSession(window.ChartApiInstance);
      this._type = type || "full";
      this._delayUpdateFastSymbols = throttleUtils(this._updateFastSymbols, 250);
      this._throttledSymbolData = {};
      this._formatterValuesCache = {};
      this._waitingForFormatters = {};
      this._snapshotValuesCache = {};
      this._waitingForSnapshot = {};
      this.connect();
    }

    /**
     * Destroy quote session and cleanup resources
     */
    destroy() {
      this._quoteApi.destroy();
      this._quoteApi = null;
      this._connected = false;
      this.onDisconnect.fire();
    }

    /**
     * Type field definitions for different data levels
     */
    typeFields = {
      simple: ["base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code", "currency_id", 
                "base_currency_id", "current_session", "description", "exchange", "format", "fractional", 
                "is_tradable", "language", "local_description", "listed_exchange", "logoid", "lp", 
                "lp_time", "minmov", "minmove2", "original_name", "pricescale", "pro_name", 
                "short_name", "type", "typespecs", "update_mode", "volume", "variable_tick_size", 
                "value_unit_id", "unit_id", "measure"],
      
      simpleDetailed: [].concat(this.typeFields.simple, ["ask", "bid", "fundamentals", 
                "high_price", "is_tradable", "low_price", "open_price", "prev_close_price", "rch", "rchp", 
                "rtc", "rtc_time", "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm", 
                "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", 
                "timezone"]),
      
      full: [],
      watchlist: [].concat(this.typeFields.simple, ["rchp", "rtc", "country_code", "provider_id", 
                "dividends_availability", "financials_availability"]),
      
      portfolio: ["pro_name", "short_name", "exchange", "listed_exchange", "description", 
                "local_description", "language", "sector", "type", "typespecs", "industry", "currency_code", 
                "currency_id", "ch", "chp", "logoid", "base-currency-logoid", "earnings_per_share_forecast_next_fq", 
                "earnings_release_next_date", "earnings_per_share_fq", "lp", "fractional", "minmov", 
                "minmove2", "pricescale", "volume", "average_volume", "market_cap_calc", "market_cap_basic", 
                "total_revenue", "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year", 
                "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code", "rates_mc", 
                "rates_fy", "rates_ttm", "format", "value_unit_id", "unit_id", "measure"],
      
      notes: ["short_name", "pro_name", "logoid", "currency-logoid", "base-currency-logoid", 
                "symbol-primaryname", "type", "typespecs"],
      
      estimates: ["fundamental_data", "type", "typespecs", "earnings_per_share_forecast_next_symbol_currency_fq", 
                "earnings_release_next_aligned_date", "earnings_release_next_date"],
      
      economic: ["reference-last-period", "lp", "currency_code", "value_unit_id", "unit_id", "measure"],
      
      options: ["ask", "bid", "lp", "volume"]
    };

    /**
     * Connect to quote API
     * @param {Object} options - Connection options
     */
    connect(options) {
      this._quoteApi.connect(this.quoteHandler.bind(this));
    }

    /**
     * Handle quote API events
     * @param {Object} event - Quote event data
     */
    quoteHandler(event) {
      const method = event.method;
      const params = event.params;
      
      switch (method) {
        case "connected":
          if (!this._connected) {
            this._connected = true;
            this.onConnected();
          }
          break;
          
        case "quote_list_fields":
          break;
          
        case "quote_symbol_data":
          if (this._connected) {
            this.onSymbolData(params[0]);
          }
          break;
          
        case "quote_completed":
          if (this._connected) {
            this.onSymbolData({
              symbolname: params[0],
              complete: performance.now(),
              values: {}
            });
          }
          break;
          
        case "disconnected":
          if (this._connected) {
            this._connected = false;
            this.onDisconnect.fire();
          }
          break;
      }
    }

    /**
     * Handle successful connection
     */
    onConnected() {
      this.setFields();
      const symbols = Object.keys(this._symbol_data);
      
      if (symbols.length) {
        this._quoteApi.quoteAddSymbols(symbols);
        this._delayUpdateFastSymbols();
      }
      
      this.onConnect.fire();
    }

    /**
     * Set quote fields based on session type
     */
    setFields() {
      const fields = this.typeFields[this._type];
      fields && fields.length && this._quoteApi.quoteSetFields(fields);
    }

    /**
     * Handle symbol data updates
     * @param {Object} data - Symbol data
     */
    onSymbolData(data) {
      try {
        data.status && QUOTE_FIELDS_CACHE.update(data, QUOTE_FIELDS, true);
      } catch (error) {
        // Handle field update errors silently
      }
      
      const symbolname = data.symbolname;
      const throttledData = this._throttledSymbolData[symbolname];
      
      // Update previous close price if available
      if (throttledData) {
        delete data.values.prev_close_price;
        if (void 0 !== data.values.regular_close) {
          data.values.prev_close_price = data.values.regular_close;
        }
      }
      
      // Update cache and dispatch
      const cache = throttledData || (this._throttledSymbolData[symbolname] = {
        fnDispatch: throttleUtils(this.dipatchSymbolData.bind(this), this.options.throttleTimeout)
      });
      
      if (cache.cache) {
        deepExtend(cache.cache, data);
      } else {
        cache.cache = data;
      }
      
      cache.fnDispatch(symbolname);
    }

    /**
     * Parse and normalize update mode
     * @param {Object} data - Update data
     */
    _parseUpdateMode(data) {
      normalizeUpdateMode(data);
    }

    /**
     * Dispatch symbol data to subscribers
     * @param {string} symbolname - Symbol name
     * @param {Object} data - Symbol data
     */
    dipatchSymbolData(symbolname, data) {
      const symbolData = this._symbol_data[symbolname];
      const throttledData = this._throttledSymbolData[symbolname];
      
      if (delete this._throttledSymbolData[symbolname].cache, this._symbol_data[symbolname]) {
        for (const field in deepExtend(throttledData.cache, data)) {
          if (this._subscriptions) {
            const subscriptions = this._subscriptions[field];
            subscriptions && [...subscriptions].forEach(callback => {
              callback(data);
            });
          }
        }
      }
    }

    /**
     * Subscribe to symbol data updates
     * @param {string} symbolname - Symbol name
     * @param {Array} fields - Fields to subscribe to
     * @param {Function} callback - Data update callback
     */
    subscribe(symbolname, fields, callback) {
      this._subscriptions[symbolname] = this._subscriptions[symbolname] || new Map();
      const subscriptionMap = this._subscriptions[symbolname];
      
      const allFields = [].concat(fields);
      const callbacks = [];
      
      allFields.forEach(field => {
        this._symbol_data[symbolname] ? 
          subscriptionMap && subscriptionMap.has(field) || this._symbol_data[symbolname].subscribers_count++ : 
          (this._symbol_data[symbolname] = {
            subscribers_count: 1
          }), 
          subscriptionMap && subscriptionMap.get(field) && subscriptionMap.get(field).push(callback), 
          subscriptionMap.has(field) || subscriptionMap.set(field, []), 
          subscriptionMap.get(field).push(callback);
      });
      
      if (callbacks.length && this._connected) {
        this._quoteApi.quoteAddSymbols(callbacks);
        this._delayUpdateFastSymbols();
      }
    }

    /**
     * Unsubscribe from symbol data updates
     * @param {string} symbolname - Symbol name
     * @param {Array} fields - Fields to unsubscribe from
     * @param {Function} callback - Callback to remove
     */
    unsubscribe(symbolname, fields, callback) {
      const allFields = [].concat(fields);
      const subscriptionMap = this._subscriptions[symbolname];
      
      for (let i = 0; i < allFields.length; i++) {
        const field = allFields[i];
        if (subscriptionMap) {
          if (subscriptionMap.has(field) && callback) {
            const callbackIndex = subscriptionMap.get(field).indexOf(callback);
            ~callbackIndex && subscriptionMap.get(field).splice(callbackIndex, 1);
          } else {
            subscriptionMap.delete(field);
          }
        }
        
        subscriptionMap && 0 === subscriptionMap.size && delete this._subscriptions[symbolname];
        
        if (this._symbol_data.hasOwnProperty(field)) {
          if (subscriptionMap && !subscriptionMap.has(field) && 
              this._symbol_data[field].subscribers_count--, 
              this._symbol_data[field].subscribers_count || (delete this._symbol_data[field])) {
            const callbacksToRemove = [];
            subscriptionMap.forEach((callbacks, fieldName) => {
              callbacksToRemove.push(callback);
            });
            callbacksToRemove.forEach(cb => cb(field, this._symbol_data[field]));
          }
        }
      }
      
      if (callbacks.length && this._connected) {
        this._quoteApi.quoteRemoveSymbols(callbacks);
        this._delayUpdateFastSymbols();
      }
    }

    /**
     * Set fast symbols for throttled updates
     * @param {string} symbolname - Symbol name
     * @param {boolean} isFast - Whether symbol should be fast
     */
    setFastSymbols(symbolname, isFast) {
      if (this._subscriptions[symbolname]) {
        const subscriptionMap = this._subscriptions[symbolname];
        const symbolKeys = Array.from(subscriptionMap.keys());
        
        for (let i = 0; i < symbolKeys.length; i++) {
          const fieldName = symbolKeys[i];
          subscriptionMap.get(fieldName).fast = -1 !== isFast.indexOf(fieldName);
        }
        
        this._delayUpdateFastSymbols();
      }
    }

    /**
     * Update fast symbols with throttling
     */
    _updateFastSymbols() {
      if (this._connected) {
        const fastSymbols = this._fastSymbols();
        0 === fastSymbols.length ? 
          this._quoteApi.quoteHibernateAll() : 
          this._quoteApi.quoteFastSymbols(fastSymbols);
      }
    }

    /**
     * Get array of fast symbols
     * @returns {Array} Array of fast symbol names
     */
    _fastSymbols() {
      const fastSymbols = [];
      
      for (const symbolname in this._subscriptions) {
        const subscriptionMap = this._subscriptions[symbolname];
        const symbolKeys = Array.from(subscriptionMap.keys());
        
        for (let i = 0; i < symbolKeys.length; i++) {
          const fieldName = symbolKeys[i];
          if (subscriptionMap.get(fieldName).fast) {
            fastSymbols.push(fieldName);
          }
        }
      }
      
      return uniq(fastSymbols);
    }

    /**
     * Create price formatter for symbol
     * @param {Object} symbolData - Symbol data
     * @param {Function} callback - Formatter callback
     */
    formatter(symbolData, callback) {
      const multiplexer = this;
      
      if (this._waitingForFormatters[symbolData]) {
        return this._waitingForFormatters[symbolData];
      }

      const createFormatter = (symbolData) => {
        const minMove = callback && !symbolData.fractional ? 1 : symbolData.minmov;
        return new PriceFormatter({
          priceScale: symbolData.pricescale,
          minMove: minMove,
          fractional: symbolData.fractional,
          minMove2: symbolData.minmove2
        });
      };

      const formatterPromise = new Promise((resolve, reject) => {
        if (this._formatterValuesCache[symbolData]) {
          resolve(createFormatter(this._formatterValuesCache[symbolData]));
        } else {
          const formatterId = uuidGenerator.guid();
          
          multiplexer.subscribe(formatterId, [symbolData], (result => {
            if ("error" === result.status) {
              multiplexer._waitingForFormatters[symbolData] = null;
              reject("Quotes snapshot is not received");
            }
            
            const values = result.values;
            if (values && values.minmov && values.pricescale) {
              multiplexer._waitingForFormatters[symbolData] = null;
              multiplexer._formatterValuesCache[symbolData] = values;
              resolve(createFormatter(values));
            }
          }));
        }
      });
      
      return this._waitingForFormatters[symbolData] = formatterPromise, formatterPromise;
    }

    /**
     * Get symbol snapshot
     * @param {string} symbolname - Symbol name
     * @returns {Promise<Object>} Promise resolving to snapshot data
     */
    snapshot(symbolname) {
      const multiplexer = this;
      
      if (this._waitingForSnapshot[symbolname]) {
        return this._waitingForSnapshot[symbolname];
      }

      const snapshotPromise = new Promise((resolve, reject) => {
        if (this._snapshotValuesCache[symbolname]) {
          resolve(this._snapshotValuesCache[symbolname]);
        } else {
          const snapshotId = uuidGenerator.guid();
          
          multiplexer.subscribe(snapshotId, [symbolname], (result => {
            if ("error" === result.status) {
              multiplexer._waitingForSnapshot[symbolname] = null;
              reject("Quotes snapshot is not received");
            }
            
            const snapshotData = result.values;
            if (snapshotData && snapshotData.minmov && snapshotData.pricescale) {
              multiplexer._waitingForSnapshot[symbolname] = null;
              multiplexer._snapshotValuesCache[symbolname] = snapshotData;
              resolve(snapshotData);
              multiplexer.unsubscribe(snapshotId, symbolname);
            }
          }));
        }
      });
      
      return this._waitingForSnapshot[symbolname] = snapshotPromise, snapshotPromise;
    }
  }

  // Export the QuoteSessionMultiplexer
  window.TradingView = window.TradingView || {};
  window.TradingView.QuoteSessionMultiplexer = QuoteSessionMultiplexer;
  
  if (moduleExports && moduleExports.exports) {
    moduleExports.exports = QuoteSessionMultiplexer;
  }
}
