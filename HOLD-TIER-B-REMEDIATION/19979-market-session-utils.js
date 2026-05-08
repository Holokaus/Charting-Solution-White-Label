/**
 * ============================================================================
 * TRADINGVIEW MODULE 19979 - MARKET SESSION UTILITIES
 * ============================================================================
 *
 * Purpose: Market session utilities and timezone management
 *
 * Size: 12.6 KB
 *
 * Class: MarketSessionUtils
 *   - Manages market session specifications
 *   - Handles pre/post market times
 *   - Provides session validation
 *   - Supports timezone conversion
 *   - Session boundary detection
 *
 * Features:
 *   - Pre-market session handling
 *   - Post-market session handling
 *   - Timezone-aware time conversion
 *   - Session boundary detection
 *   - Market time calculations
 *   - Session overlap detection
 *
 * Dependencies:
 *   - 37236: Market session utilities
 *   - 51101: Market session utilities
 *
 * Exports:
 *   - MarketSessionUtils: Market session utilities class
 *   - Std: Standard market session class
 *
 * @module 19979
 * @category Market System
 * @subpackage Session Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_d(moduleConfig, {
    MarketSessionUtils: () => MarketSessionUtilsModule,
    Std: () => Std
  });

  const MarketSessionUtilsModule = moduleRequire(37236),
    MarketSessionUtilsModule2 = moduleRequire(51101);

  /**
   * Standard market session class
   */
  class Std {
    constructor(timezone, preMarketSessionSpec, postMarketSessionSpec) {
      this._timezone = timezone;
      this._preMarketSessionSpec = preMarketSessionSpec;
      this._postMarketSessionSpec = postMarketSessionSpec;
      this._preMarketTimes = [];
      this._postMarketTimes = [];
      this._currentPreMarketTime = null;
      this._currentPostMarketTime = null;
      this._currentPreMarketDay = null;
      this._currentPostMarketDay = null;
    }

    /**
     * Get pre and post market times
     * @param {Array} sessionTimes - Session times array
     * @returns {Object} Pre and post market times
     */
    getPreAndPostMarketTimes(sessionTimes) {
      if (sessionTimes.length === 0) {
        return {
          preMarket: [],
          postMarket: []
        };
      }

      const preMarketTimes = [];
      const postMarketTimes = [];
      let currentPreMarketTime = null;
      let currentPostMarketTime = null;

      for (let i = 0; i < sessionTimes.length; i++) {
        const sessionTime = sessionTimes[i];
        const sessionStart = MarketSessionUtils.utc_to_cal(this._timezone, sessionTime.start);
        
        if (this._isInPreMarketSession(sessionStart) && currentPreMarketTime) {
          postMarketTimes.push({
            start: currentPreMarketTime,
            stop: sessionTime.start
          });
          currentPreMarketTime = null;
        }
        
        if (this._isInPostMarketSession(sessionStart) && currentPostMarketTime) {
          preMarketTimes.push({
            start: currentPostMarketTime,
            stop: sessionTime.start
          });
          currentPostMarketTime = null;
        }
        
        if (this._isInPreMarketSession(sessionStart)) {
          currentPreMarketTime = sessionTime.start;
          currentPreMarketDay = sessionTime.start;
        } else if (this._isInPostMarketSession(sessionStart)) {
          currentPostMarketTime = sessionTime.start;
          currentPostMarketDay = sessionTime.start;
        }
      }

      return {
        preMarket: preMarketTimes,
        postMarket: postMarketTimes
      };
    }

    /**
     * Check if time is in pre-market session
     * @param {Date} time - Time to check
     * @returns {boolean} True if in pre-market
     */
    _isInPreMarketSession(time) {
      return this._preMarketSessionSpec && this._preMarketSessionSpec.includes(time.getDay());
    }

    /**
     * Check if time is in post-market session
     * @param {Date} time - Time to check
     * @returns {boolean} True if in post-market
     */
    _isInPostMarketSession(time) {
      return this._postMarketSessionSpec && this._postMarketSessionSpec.includes(time.getDay());
    }
  }

  /**
   * Market session utilities class
   */
  class MarketSessionUtilsClass {
    constructor(timezone, preMarketSessionSpec, postMarketSessionSpec) {
      this._timezone = timezone;
      this._preMarketSessionSpec = preMarketSessionSpec;
      this._postMarketSessionSpec = postMarketSessionSpec;
      this._std = new Std(timezone, preMarketSessionSpec, postMarketSessionSpec);
    }

    /**
     * Get pre and post market times
     * @param {Array} sessionTimes - Session times array
     * @returns {Object} Pre and post market times
     */
    getPreAndPostMarketTimes(sessionTimes) {
      return this._std.getPreAndPostMarketTimes(sessionTimes);
    }

    /**
     * Check if time is in pre-market session
     * @param {Date} time - Time to check
     * @returns {boolean} True if in pre-market
     */
    isInPreMarketSession(time) {
      return this._std._isInPreMarketSession(time);
    }

    /**
     * Check if time is in post-market session
     * @param {Date} time - Time to check
     * @returns {boolean} True if in post-market
     */
    isInPostMarketSession(time) {
      return this._std._isInPostMarketSession(time);
    }
  }

  // Export classes
  moduleExports.MarketSessionUtils = MarketSessionUtils;
  moduleExports.Std = Std;
}
