/**
 * ============================================================================
 * TRADINGVIEW MODULE 30947 - QUOTE CACHE
 * ============================================================================
 *
 * Purpose: Quote data caching with field management
 *
 * Size: 6.2 KB
 *
 * Class: QuoteCache
 *   - Manages quote data caching
 *   - Handles field updates
 *   - Provides time-based caching
 *   - Supports multiple quote fields
 *
 * Features:
 *   - Time-based cache management
 *   - Field validation and caching
 *   - Cache hit/miss tracking
 *   - Quote data structure management
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 50151: Quote utilities
 *
 * Exports:
 *   - QUOTE_FIELDS: Quote fields constant
 *   - QUOTE_FIELDS_CACHE: Quote fields cache function
 *   - QuoteCache: Quote cache class
 *
 * @module 30947
 * @category Data Management
 * @subpackage Quote Caching
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    QUOTE_FIELDS: () => QUOTE_FIELDS,
    QUOTE_FIELDS_CACHE: () => QUOTE_FIELDS_CACHE,
    QuoteCache: () => QuoteCache
  });

  const assertionUtils = moduleRequire(50151),
    quoteUtils = moduleRequire(50151);

  /**
   * Quote fields constant
   */
  const QUOTE_FIELDS = new Set([
    "pro_name", "base_name", "logoid", "currency-logoid", "source-logoid",
    "short_name", "web_site_url", "pro_perm", "timezone", "current_session", "last_price", "lp_time",
    "subsessions", "prev_close_price", "open_price", "high_price", "low_price", "price_52_week_high",
    "price_52_week_low", "ask", "ask_size", "bid", "bid_size", "rch", "rchp", "rtc", "rtc_time", "data_frequency",
    "reference-last-period-start", "business_description", "web_site_url", "figi", "number_of_employees",
    "float_shares_outstanding", "earnings_release_next_calendar_date", "root", "description", "exchange",
    "listed_exchange", "type", "country_code", "provider_id", "sector", "typespecs", "visible-plots-set",
    "industry", "currency_id", "last_price", "fractional", "minmov", "minmove2", "pricescale"
  ]);

  /**
   * Quote fields cache function
   * @returns {Set} Quote fields set
   */
  function QUOTE_FIELDS_CACHE() {
    return QUOTE_FIELDS;
  }

  /**
   * Quote cache implementation
   */
  class QuoteCache {
    /**
     * @param {Array} fields - Array of field names
     */
    constructor(fields) {
      this._cache = new Map();
      this._times = new Map();
      this._fields = [...fields];
    }

    /**
     * Update cache with quote data
     * @param {Object} quoteData - Quote data object
     * @param {Array} fields - Fields to update
     * @param {Function} callback - Optional callback function
     */
    update(quoteData, fields, callback) {
      const symbolName = (0, assertionUtils.ensureDefined)(quoteData.symbolname);
      const timestamp = Date.now();
      
      if (this._cache.has(symbolName) || this._times.has(symbolName)) {
        if ("error" === quoteData.status) {
          return;
        }
      }
      
      // Update cache entry
      this._cache.set(symbolName, {
        symbolname: symbolName,
        status: quoteData.status,
        values: {}
      });
      
      this._times.set(symbolName, new Map());
      
      // Update fields
      for (const field of this._fields) {
        if (fields && fields.has(field) && void 0 !== quoteData.values[field]) {
          this._cache.get(symbolName).values[field] = quoteData.values[field];
          this._times.get(symbolName).set(field, timestamp);
        }
      }
      
      // Call callback if provided
      if (callback) {
        callback();
      }
    }

    /**
     * Get cached quote data
     * @param {string} symbolName - Symbol name
     * @returns {Object|null} Cached quote data or null
     */
    get(symbolName) {
      return this._cache.get(symbolName) || null;
    }

    /**
     * Get cached field times
     * @param {string} symbolName - Symbol name
     * @returns {Map|null} Field times map or null
     */
    getTimes(symbolName) {
      return this._times.get(symbolName) || null;
    }

    /**
     * Get all fields
     * @returns {Array} Array of field names
     */
    fields() {
      return this._fields;
    }

    /**
     * Clear cache for symbol
     * @param {string} symbolName - Symbol name to clear
     */
    clear(symbolName) {
      this._cache.delete(symbolName);
      this._times.delete(symbolName);
    }

    /**
     * Clear entire cache
     */
    clearAll() {
      this._cache.clear();
      this._times.clear();
    }
  }

  // Export the quote cache components
  moduleExports.QuoteCache = QuoteCache;
}
