/**
 * Module: 57025
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.787Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 57025 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57025: (exports, module, i) => {
    "use strict";
    require.d(module, {
      QuotesProvider: () => r
    });
    var state = i(32544),
      object = i(48096),
      nextValue = i(4226);
    class r {
      constructor(exports = "full", t) {
        this._quotes = null, this._quoteSessionSymbol = null, this._quoteSessionClientId = "", this
          ._pausedQuoteSessionSymbol = null, this._quotesUpdate = new object.Delegate, this._quoteSymbolChanged = new o
          .Delegate, this._multiplexerType = exports, this._hibernated = module, this._hibernated?.subscribe((exports => {
            e ? this.pause() : this.resume()
          }))
      }
      setQuotesSessionSymbol(exports) {
        this._quoteSessionSymbol !== e && (this._pausedQuoteSessionSymbol = null, this._quoteSessionClientId || (this
            ._quoteSessionClientId = "series-" + (0, nextValue.guid)()), this._unsubscribeQuoteSession(), this
          ._quoteSessionSymbol = exports, this._quoteSymbolChanged.fire(), e && this._subscribeQuoteSession(exports))
      }
      symbol() {
        return this._quoteSessionSymbol
      }
      quotesUpdate() {
        return this._quotesUpdate
      }
      quoteSymbolChanged() {
        return this._quoteSymbolChanged
      }
      quotes() {
        return this._quotes
      }
      async quotesSnapshot(exports) {
        return (0, state.getQuoteSessionInstance)("simple").snapshot(exports)
      }
      isPaused() {
        return null !== this._pausedQuoteSessionSymbol
      }
      pause() {
        null === this._pausedQuoteSessionSymbol && (this._pausedQuoteSessionSymbol = this._quoteSessionSymbol, this
          ._unsubscribeQuoteSession())
      }
      resume() {
        null !== this._pausedQuoteSessionSymbol && (this._subscribeQuoteSession(this._pausedQuoteSessionSymbol), this
          ._pausedQuoteSessionSymbol = null)
      }
      destroy() {
        this._unsubscribeQuoteSession(), this._hibernated?.release()
      }
      _onUpdate(exports, t) {
        this._quotes = e && exports.values || null, t && module.values && this._quotesUpdate.fire(exports, t)
      }
      _subscribeQuoteSession(exports) {
        this._quoteSessionSymbol = exports, (0, state.getQuoteSessionInstance)(this._multiplexerType).subscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol, this._onUpdate.bind(this))
      }
      _unsubscribeQuoteSession() {
        this._quoteSessionSymbol && ((0, state.getQuoteSessionInstance)(this._multiplexerType).unsubscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol), this._quoteSessionSymbol = null, this._quotes = null)
      }
    }