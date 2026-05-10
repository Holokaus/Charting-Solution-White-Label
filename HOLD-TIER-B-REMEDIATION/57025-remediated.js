/**
 * Module 57025 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

57025: (exports, t, i) => {
    "use strict";
    i.d(t, {
      QuotesProvider: () => r
    });
    var constants = i(32544),
      o = i(48096),
      name = i(4226);
    class r {
      constructor(exports = "full", t) {
        this._quotes = null, this._quoteSessionSymbol = null, this._quoteSessionClientId = "", this
          ._pausedQuoteSessionSymbol = null, this._quotesUpdate = new o.Delegate, this._quoteSymbolChanged = new o
          .Delegate, this._multiplexerType = exports, this._hibernated = t, this._hibernated?.subscribe((exportstring => {
            exports ? this.pause() : this.resume()
          }))
      }
      setQuotesSessionSymbol(exports) {
        this._quoteSessionSymbol !== exports && (this._pausedQuoteSessionSymbol = null, this._quoteSessionClientId || (this
            ._quoteSessionClientId = "series-" + (0, name.guid)()), this._unsubscribeQuoteSession(), this
          ._quoteSessionSymbol = exports, this._quoteSymbolChanged.fire(), exports && this._subscribeQuoteSession(exports))
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
        return (0, constants.getQuoteSessionInstance)("simple").snapshot(exports)
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
        this._quotes = exports && exports.values || null, t && t.values && this._quotesUpdate.fire(exports, t)
      }
      _subscribeQuoteSession(exports) {
        this._quoteSessionSymbol = exports, (0, constants.getQuoteSessionInstance)(this._multiplexerType).subscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol, this._onUpdate.bind(this))
      }
      _unsubscribeQuoteSession() {
        this._quoteSessionSymbol && ((0, constants.getQuoteSessionInstance)(this._multiplexerType).unsubscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol), this._quoteSessionSymbol = null, this._quotes = null)
      }
    }