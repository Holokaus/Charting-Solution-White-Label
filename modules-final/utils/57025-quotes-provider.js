/**
 * ============================================================================
 * TRADINGVIEW MODULE 57025 - QUOTES PROVIDER
 * ============================================================================
 *
 * Purpose: Real-time quotes provider with session management and symbol tracking
 *
 * Size: 2.6 KB
 *
 * Class: QuotesProvider
 *   - Manages quote sessions and symbol subscriptions
 *   - Handles quote updates and symbol changes
 *   - Supports pause/resume functionality
 *   - Provides quotes snapshot capabilities
 *
 * Features:
 *   - Real-time quote streaming
 *   - Symbol session management
 *   - Quote update event delegation
 *   - Client ID generation for sessions
 *   - Pause/resume quote sessions
 *
 * Dependencies:
 *   - 32544: Quote session management
 *   - 48096: Delegate class for events
 *   - 4226: UUID generation
 *
 * Exports:
 *   - QuotesProvider: Quotes provider class
 *
 * @module 57025
 * @category Real-time Data
 * @subcategory Quotes Provider
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.d(moduleConfig, {
    QuotesProvider: () => QuotesProvider
  });

  const quoteSessionManager = moduleRequire(32544),
    Delegate = moduleRequire(48096),
    uuidGenerator = moduleRequire(4226);

  /**
   * Real-time quotes provider with session management
   */
  class QuotesProvider {
    /**
     * @param {string} multiplexerType - Type of quote multiplexer
     * @param {Object} hibernated - Hibernation state manager
     */
    constructor(multiplexerType, hibernated) {
      this._quotes = null;
      this._quoteSessionSymbol = null;
      this._quoteSessionClientId = "";
      this._pausedQuoteSessionSymbol = null;
      this._quotesUpdate = new Delegate.Delegate();
      this._quoteSymbolChanged = new Delegate.Delegate();
      this._multiplexerType = multiplexerType;
      this._hibernated = hibernated;
      this._hibernated?.subscribe((shouldPause => {
        shouldPause ? this.pause() : this.resume();
      }));
    }

    /**
     * Set the symbol for quote session
     * @param {string} symbol - Symbol to subscribe to
     */
    setQuotesSessionSymbol(symbol) {
      if (this._quoteSessionSymbol !== symbol) {
        this._pausedQuoteSessionSymbol = null;
        this._quoteSessionClientId = this._quoteSessionClientId || 
          ("series-" + uuidGenerator.guid());
        this._unsubscribeQuoteSession();
        this._quoteSessionSymbol = symbol;
        this._quoteSymbolChanged.fire();
        symbol && this._subscribeQuoteSession(symbol);
      }
    }

    /**
     * @returns {string} Current quote session symbol
     */
    symbol() {
      return this._quoteSessionSymbol;
    }

    /**
     * @returns {Delegate} Quotes update event delegate
     */
    quotesUpdate() {
      return this._quotesUpdate;
    }

    /**
     * @returns {Delegate} Quote symbol changed event delegate
     */
    quoteSymbolChanged() {
      return this._quoteSymbolChanged;
    }

    /**
     * @returns {Array|null} Current quotes or null if paused
     */
    async quotesSnapshot(symbol) {
      return quoteSessionManager.getQuoteSessionInstance("simple").snapshot(symbol);
    }

    /**
     * @returns {boolean} True if quote session is paused
     */
    isPaused() {
      return null !== this._pausedQuoteSessionSymbol;
    }

    /**
     * Pause quote session
     */
    pause() {
      if (null === this._pausedQuoteSessionSymbol) {
        this._pausedQuoteSessionSymbol = this._quoteSessionSymbol;
        this._unsubscribeQuoteSession();
      }
    }

    /**
     * Resume quote session
     */
    resume() {
      if (null !== this._pausedQuoteSessionSymbol) {
        this._subscribeQuoteSession(this._pausedQuoteSessionSymbol);
        this._pausedQuoteSessionSymbol = null;
      }
    }

    /**
     * Cleanup and destroy provider
     */
    destroy() {
      this._unsubscribeQuoteSession();
      this._hibernated?.release();
    }

    /**
     * Handle quotes update event
     * @param {Array|null} quotes - Updated quotes data
     * @param {Object} metadata - Update metadata
     */
    _onUpdate(quotes, metadata) {
      this._quotes = quotes && quotes.values || null;
      metadata && this._quotesUpdate.fire(quotes, metadata);
    }

    /**
     * Subscribe to quote session
     * @param {string} symbol - Symbol to subscribe to
     */
    _subscribeQuoteSession(symbol) {
      this._quoteSessionSymbol = symbol;
      quoteSessionManager.getQuoteSessionInstance(this._multiplexerType).subscribe(
        this._quoteSessionClientId,
        this._quoteSessionSymbol,
        this._onUpdate.bind(this)
      );
    }

    /**
     * Unsubscribe from current quote session
     */
    _unsubscribeQuoteSession() {
      if (this._quoteSessionSymbol) {
        quoteSessionManager.getQuoteSessionInstance(this._multiplexerType).unsubscribe(
          this._quoteSessionClientId,
          this._quoteSessionSymbol
        );
        this._quoteSessionSymbol = null;
        this._quotes = null;
      }
    }
  }
}
