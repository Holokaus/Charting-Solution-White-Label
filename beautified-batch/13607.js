/**
 * Module 13607 - Quote Session Multiplexer
 * 
 * Manages multiple quote data subscriptions for TradingView charts.
 * Provides real-time market data multiplexing with throttling, caching,
 * and efficient symbol subscription management.
 * 
 * @module QuoteSessionMultiplexer
 * @version 1.0.0
 * @see Throttle utilities (module 20057)
 * @see Debounce utilities (module 90484)
 * @see Price formatter (module 67563)
 * @see Array utilities (module 53470)
 * @see Guid generator (module 4168)
 * @see Update mode normalizer (module 52706)
 * @see Deep extend utility (module 39527)
 * @see Quote fields constants (module 30947)
 * @see Event delegate (module 48096)
 * @see Previous close mode (module 98422)
 * @see Quote session API (module 76220)
 */

import { default as throttle } from './20057-throttle-utilities';
import { default as debounce } from './90484-debounce-utilities';
import { PriceFormatter } from './67563-price-formatter';
import { uniq as uniqueArray } from './53470-array-utilities';
import { guid as generateGuid } from './4168-guid-generator';
import { normalizeUpdateMode } from './52706-update-mode-normalizer';
import { deepExtend } from './39527-object-utilities';
import { QUOTE_FIELDS_CACHE, QUOTE_FIELDS } from './30947-quote-fields';
import { Delegate } from './48096-delegate';
import { getNewPeveCloseMode } from './98422-previous-close-mode';
import { QuoteSession } from './76220-quote-session';

/**
 * Field definitions for different quote data types
 * @type {Object<string, string[]>}
 */
const TYPE_FIELDS = {
  // Basic quote fields for simple displays
  simple: [
    "base-currency-logoid", "ch", "chp", "currency-logoid", "currency_code",
    "currency_id", "base_currency_id", "current_session", "description",
    "exchange", "format", "fractional", "is_tradable", "language",
    "local_description", "listed_exchange", "logoid", "lp", "lp_time",
    "minmov", "minmove2", "original_name", "pricescale", "pro_name",
    "short_name", "type", "typespecs", "update_mode", "volume",
    "variable_tick_size", "value_unit_id", "unit_id", "measure"
  ],
  
  // Extended fields for detailed views
  simpleDetailed: [],
  
  // Full quote data
  full: [],
  
  // Watchlist-specific fields
  watchlist: [],
  
  // Portfolio fields
  portfolio: [
    "pro_name", "short_name", "exchange", "listed_exchange", "description",
    "local_description", "language", "sector", "type", "typespecs", "industry",
    "currency_code", "currency_id", "ch", "chp", "logoid", "currency-logoid",
    "base-currency-logoid", "earnings_per_share_forecast_next_fq",
    "earnings_release_next_date", "earnings_release_date", "earnings_per_share_fq",
    "lp", "fractional", "minmov", "minmove2", "pricescale", "volume",
    "average_volume", "market_cap_calc", "market_cap_basic", "total_revenue",
    "earnings_per_share_basic_ttm", "price_earnings_ttm", "beta_1_year",
    "dps_common_stock_prim_issue_fy", "dividends_yield", "fundamental_currency_code",
    "rates_mc", "rates_fy", "rates_ttm", "format", "value_unit_id", "unit_id", "measure"
  ],
  
  // Notes fields
  notes: [
    "short_name", "pro_name", "logoid", "currency-logoid",
    "base-currency-logoid", "symbol-primaryname", "type", "typespecs"
  ],
  
  // Earnings estimates fields
  estimates: [
    "fundamental_data", "type", "typespecs",
    "earnings_per_share_forecast_next_symbol_currency_fq",
    "earnings_release_next_aligned_date", "earnings_release_next_calendar_date",
    "earnings_release_next_date"
  ],
  
  // Economic data fields
  economic: [
    "reference-last-period", "lp", "currency_code", "value_unit_id", "unit_id", "measure"
  ],
  
  // Options-specific fields
  options: ["ask", "bid", "lp", "volume"]
};

// Build extended field lists by combining base fields
TYPE_FIELDS.simpleDetailed = [...TYPE_FIELDS.simple, 
  "ask", "bid", "fundamentals", "high_price", "is_tradable", "low_price",
  "open_price", "prev_close_price", "rch", "rchp", "rtc", "rtc_time",
  "status", "basic_eps_net_income", "beta_1_year", "earnings_per_share_basic_ttm",
  "industry", "market_cap_basic", "price_earnings_ttm", "sector", "volume", "dividends_yield", "timezone"
];

TYPE_FIELDS.watchlist = [...TYPE_FIELDS.simple,
  "rchp", "rtc", "country_code", "provider_id", "dividends_availability",
  "financials_availability", "earnings_availability"
];

/**
 * Quote Session Multiplexer
 * Manages multiple symbol subscriptions with efficient data distribution
 * 
 * @class QuoteSessionMultiplexer
 */
class QuoteSessionMultiplexer {
  /**
   * Create a new QuoteSessionMultiplexer instance
   * 
   * @param {string} connectionType - Type of connection ("full", "simple", etc.)
   * @param {Object} options - Configuration options
   * @param {number} options.throttleTimeout - Throttle delay in ms (default: 125)
   */
  constructor(connectionType, options) {
    this.options = Object.assign({
      throttleTimeout: 125
    }, options);
    
    this._connected = false;
    this._symbolData = {};
    this._subscriptions = {};
    
    // Event delegates
    this.onConnect = new Delegate();
    this.onDisconnect = new Delegate();
    
    // Initialize quote API
    this._quoteApi = new QuoteSession(window.ChartApiInstance);
    this._connectionType = connectionType || "full";
    
    // Throttled update function
    this._delayUpdateFastSymbols = debounce(
      this._updateFastSymbols.bind(this), 
      250
    );
    
    // Data caches
    this._throttledSymbolData = {};
    this._formatterValuesCache = {};
    this._waitingForFormatters = {};
    this._snapshotValuesCache = {};
    this._waitingForSnapshot = {};
    
    // Connect immediately
    this.connect();
  }
  
  /**
   * Destroy the multiplexer and cleanup resources
   */
  destroy() {
    this._quoteApi.destroy();
    this._quoteApi = null;
    this._connected = false;
    this.onDisconnect.fire();
  }
  
  /**
   * Connect to the quote data source
   * @param {string} connectionEndpoint - API endpoint (optional)
   */
  connect(connectionEndpoint) {
    this._quoteApi.connect(this.quoteHandler.bind(this));
  }
  
  /**
   * Handle incoming quote data messages
   * @param {Object} message - Quote data message from API
   */
  quoteHandler(message) {
    const method = message.method;
    const params = message.params;
    
    switch (method) {
      case "connected":
        if (!this._connected) {
          this._connected = true;
          this.onConnected();
        }
        break;
        
      case "quote_list_fields":
        // List fields response - no action needed
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
    
    // Re-subscribe to existing symbols
    const symbolKeys = Object.keys(this._symbolData);
    if (symbolKeys.length) {
      this._quoteApi.quoteAddSymbols(symbolKeys);
      this._delayUpdateFastSymbols();
    }
    
    this.onConnect.fire();
  }
  
  /**
   * Set the quote fields for this connection type
   */
  setFields() {
    const fields = TYPE_FIELDS[this._connectionType];
    if (fields && fields.length) {
      this._quoteApi.quoteSetFields(fields);
    }
  }
  
  /**
   * Handle incoming symbol data
   * @param {Object} symbolData - Data for a specific symbol
   */
  onSymbolData(symbolData) {
    // Update quote fields cache
    try {
      if (symbolData.status) {
        QUOTE_FIELDS_CACHE.update(symbolData, QUOTE_FIELDS, false);
      }
    } catch (error) {
      // Silently ignore cache update errors
    }
    
    const symbolName = symbolData.symbolname;
    let throttledData = this._throttledSymbolData[symbolName];
    
    // Handle previous close price adjustments
    if (getNewPeveCloseMode()) {
      delete symbolData.values.prev_close_price;
      if (symbolData.values.regular_close !== undefined) {
        symbolData.values.prev_close_price = symbolData.values.regular_close;
      }
    }
    
    // Create throttled entry if needed
    if (!throttledData) {
      throttledData = this._throttledSymbolData[symbolName] = {
        fnDispatch: throttle(
          this.dispatchSymbolData.bind(this), 
          this.options.throttleTimeout
        )
      };
    }
    
    // Merge or create cache
    if (throttledData.cache) {
      deepExtend(throttledData.cache, symbolData);
    } else {
      throttledData.cache = symbolData;
    }
    
    throttledData.fnDispatch(symbolName);
  }
  
  /**
   * Parse update mode from symbol values
   * @param {Object} values - Symbol values object
   */
  _parseUpdateMode(values) {
    normalizeUpdateMode(values);
  }
  
  /**
   * Dispatch symbol data to subscribers
   * @param {string} symbolName - Symbol identifier
   */
  dispatchSymbolData(symbolName) {
    const symbolData = this._symbolData[symbolName];
    const cachedData = this._throttledSymbolData[symbolName].cache;
    
    delete this._throttledSymbolData[symbolName].cache;
    
    if (!this._symbolData[symbolName]) return;
    
    // Merge cached data
    deepExtend(symbolData, cachedData);
    
    // Parse update mode if values exist
    if (symbolData.values) {
      this._parseUpdateMode(symbolData.values);
    }
    
    // Notify all subscribers
    for (const subscriptionId in this._subscriptions) {
      const subscription = this._subscriptions[subscriptionId];
      if (subscription.has(symbolName)) {
        const callbacks = [...subscription.get(symbolName)];
        callbacks.forEach(callback => callback(symbolData, cachedData));
      }
    }
  }
  
  /**
   * Subscribe to quote data for symbols
   * @param {string} subscriptionId - Unique subscription identifier
   * @param {string|string[]} symbols - Symbol(s) to subscribe to
   * @param {Function} callback - Data callback function
   */
  subscribe(subscriptionId, symbols, callback) {
    this._subscriptions[subscriptionId] = this._subscriptions[subscriptionId] || new Map();
    const subscription = this._subscriptions[subscriptionId];
    
    // Normalize symbols to array
    const symbolList = [].concat(symbols);
    const newSymbols = [];
    
    symbolList.forEach(symbol => {
      if (this._symbolData[symbol]) {
        if (!subscription || !subscription.has(symbol)) {
          this._symbolData[symbol].subscribers_count++;
        }
      } else {
        this._symbolData[symbol] = { subscribers_count: 1 };
        newSymbols.push(symbol);
      }
      
      if (!subscription.has(symbol)) {
        subscription.set(symbol, []);
      }
      subscription.get(symbol).push(callback);
      subscription.get(symbol).fast = true;
      
      // Send cached data immediately if available
      if (this._symbolData[symbol] && this._symbolData[symbol].values) {
        callback(this._symbolData[symbol], this._symbolData[symbol]);
      }
    }, this);
    
    // Add new symbols to API if connected
    if (newSymbols.length && this._connected) {
      this._quoteApi.quoteAddSymbols(newSymbols);
      this._delayUpdateFastSymbols();
    }
  }
  
  /**
   * Unsubscribe from quote data
   * @param {string} subscriptionId - Subscription identifier
   * @param {string|string[]} symbols - Symbol(s) to unsubscribe from
   * @param {Function} [callback] - Specific callback to remove (optional)
   */
  unsubscribe(subscriptionId, symbols, callback) {
    const symbolList = [].concat(symbols);
    const removedSymbols = [];
    const subscription = this._subscriptions[subscriptionId];
    
    for (let i = 0; i < symbolList.length; i++) {
      const symbol = symbolList[i];
      
      if (subscription) {
        if (subscription.has(symbol) && callback) {
          const index = subscription.get(symbol).indexOf(callback);
          if (~index) {
            subscription.get(symbol).splice(index, 1);
          }
          if (!subscription.get(symbol).length) {
            subscription.delete(symbol);
          }
        } else {
          subscription.delete(symbol);
        }
      }
      
      // Clean up empty subscription
      if (subscription && subscription.size === 0) {
        delete this._subscriptions[subscriptionId];
      }
      
      // Update subscriber counts
      if (this._symbolData.hasOwnProperty(symbol)) {
        if (subscription && !subscription.has(symbol)) {
          this._symbolData[symbol].subscribers_count--;
        }
        
        // Remove symbol if no more subscribers
        if (!this._symbolData[symbol].subscribers_count) {
          delete this._symbolData[symbol];
          removedSymbols.push(symbol);
        }
      }
    }
    
    // Remove symbols from API if connected
    if (removedSymbols.length && this._connected) {
      this._quoteApi.quoteRemoveSymbols(removedSymbols);
      this._delayUpdateFastSymbols();
    }
  }
  
  /**
   * Set fast symbol flags for a subscription
   * @param {string} subscriptionId - Subscription identifier
   * @param {string[]} fastSymbols - Symbols to mark as fast
   */
  setFastSymbols(subscriptionId, fastSymbols) {
    if (!this._subscriptions[subscriptionId]) return;
    
    const subscription = this._subscriptions[subscriptionId];
    const symbols = Array.from(subscription.keys());
    
    for (let i = 0; i < symbols.length; i++) {
      const symbol = symbols[i];
      subscription.get(symbol).fast = fastSymbols.indexOf(symbol) !== -1;
    }
    
    this._delayUpdateFastSymbols();
  }
  
  /**
   * Update fast symbols in the API
   * @private
   */
  _updateFastSymbols() {
    if (!this._connected) return;
    
    const fastSymbols = this._getFastSymbols();
    if (fastSymbols.length === 0) {
      this._quoteApi.quoteHibernateAll();
    } else {
      this._quoteApi.quoteFastSymbols(fastSymbols);
    }
  }
  
  /**
   * Get list of symbols marked as fast
   * @returns {string[]} Array of fast symbol names
   * @private
   */
  _getFastSymbols() {
    let fastSymbols = [];
    
    for (const subscriptionId in this._subscriptions) {
      const subscription = this._subscriptions[subscriptionId];
      const symbols = Array.from(subscription.keys());
      
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        if (subscription.get(symbol).fast) {
          fastSymbols.push(symbol);
        }
      }
    }
    
    return uniqueArray(fastSymbols);
  }
  
  /**
   * Get a price formatter for a symbol
   * @param {string} symbol - Symbol name
   * @param {boolean} useDefaults - Whether to use default formatting
   * @returns {Promise<PriceFormatter>} Promise resolving to price formatter
   */
  formatter(symbol, useDefaults) {
    if (this._waitingForFormatters[symbol]) {
      return this._waitingForFormatters[symbol];
    }
    
    const self = this;
    
    function createFormatter(symbolInfo) {
      const minMove = useDefaults && !symbolInfo.fractional ? 1 : symbolInfo.minmov;
      return new PriceFormatter({
        priceScale: symbolInfo.pricescale,
        minMove: minMove,
        fractional: symbolInfo.fractional,
        minMove2: symbolInfo.minmove2
      });
    }
    
    const formatterPromise = new Promise((resolve, reject) => {
      if (self._formatterValuesCache[symbol]) {
        resolve(createFormatter(self._formatterValuesCache[symbol]));
      } else {
        const tempSubscriptionId = generateGuid();
        
        self.subscribe(tempSubscriptionId, [symbol], (symbolData) => {
          if (symbolData.status === "error") {
            self._waitingForFormatters[symbol] = null;
            reject("Quotes snapshot is not received");
            return;
          }
          
          const values = symbolData.values;
          if (values && values.pricescale != null && values.minmov != null) {
            self._waitingForFormatters[symbol] = null;
            self._formatterValuesCache[symbol] = values;
            resolve(createFormatter(values));
            self.unsubscribe(tempSubscriptionId, symbol);
          }
        });
      }
    });
    
    this._waitingForFormatters[symbol] = formatterPromise;
    return formatterPromise;
  }
  
  /**
   * Get a snapshot of symbol data
   * @param {string} symbol - Symbol name
   * @returns {Promise<Object>} Promise resolving to symbol data
   */
  snapshot(symbol) {
    if (this._waitingForSnapshot[symbol]) {
      return this._waitingForSnapshot[symbol];
    }
    
    const self = this;
    
    const snapshotPromise = new Promise((resolve, reject) => {
      if (self._snapshotValuesCache[symbol]) {
        resolve(self._snapshotValuesCache[symbol]);
      } else {
        const tempSubscriptionId = generateGuid();
        
        self.subscribe(tempSubscriptionId, [symbol], (symbolData) => {
          if (symbolData.status === "error") {
            self._waitingForSnapshot[symbol] = null;
            reject("Quotes snapshot is not received");
            return;
          }
          
          const values = symbolData.values;
          if (values && values.minmov && values.pricescale) {
            self._waitingForSnapshot[symbol] = null;
            self._snapshotValuesCache[symbol] = values;
            resolve(values);
            self.unsubscribe(tempSubscriptionId, symbol);
          }
        });
      }
    });
    
    this._waitingForSnapshot[symbol] = snapshotPromise;
    return snapshotPromise;
  }
}

// Register with TradingView global namespace
window.TradingView = window.TradingView || {};
window.TradingView.QuoteSessionMultiplexer = QuoteSessionMultiplexer;

// Export for module systems
export { QuoteSessionMultiplexer };
export default QuoteSessionMultiplexer;

// CommonJS compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuoteSessionMultiplexer;
}

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Original: Minified webpack module with single-letter variables
// Restored: Full semantic class with complete documentation
//
// Variable mappings (s → semantic):
// s → throttle (throttle utility function)
// o → debounce (debounce utility function)
// n → PriceFormatter (price formatting class)
// r → uniqueArray (array unique function)
// a → generateGuid (GUID generator)
// l → normalizeUpdateMode (update mode normalizer)
// c → deepExtend (object deep extend utility)
// h → QUOTE_FIELDS_CACHE (quote fields cache constant)
// d → QUOTE_FIELDS (quote fields constant)
// u → Delegate (event delegate class)
// _ → getNewPeveCloseMode (previous close mode getter)
// p → QuoteSession (quote session API class)
// m → QuoteSessionMultiplexer (main class)
// e → connectionType (constructor parameter)
// t → options (constructor parameter)
// i → params (handler parameter)
// ============================================================================
