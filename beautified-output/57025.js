/**
 * Module 57025 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57025: (e, t, i) => {
    "use strict";
    i.d(t, {
      QuotesProvider: () => r
    });
    var s = i(32544),
      o = i(48096),
      n = i(4226);
    class r {
      constructor(e = "full", t) {
        this._quotes = null, this._quoteSessionSymbol = null, this._quoteSessionClientId = "", this
          ._pausedQuoteSessionSymbol = null, this._quotesUpdate = new o.Delegate, this._quoteSymbolChanged = new o
          .Delegate, this._multiplexerType = e, this._hibernated = t, this._hibernated?.subscribe((e => {
            e ? this.pause() : this.resume()
          }))
      }
      setQuotesSessionSymbol(e) {
        this._quoteSessionSymbol !== e && (this._pausedQuoteSessionSymbol = null, this._quoteSessionClientId || (this
            ._quoteSessionClientId = "series-" + (0, n.guid)()), this._unsubscribeQuoteSession(), this
          ._quoteSessionSymbol = e, this._quoteSymbolChanged.fire(), e && this._subscribeQuoteSession(e))
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
      async quotesSnapshot(e) {
        return (0, s.getQuoteSessionInstance)("simple").snapshot(e)
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
      _onUpdate(e, t) {
        this._quotes = e && e.values || null, t && t.values && this._quotesUpdate.fire(e, t)
      }
      _subscribeQuoteSession(e) {
        this._quoteSessionSymbol = e, (0, s.getQuoteSessionInstance)(this._multiplexerType).subscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol, this._onUpdate.bind(this))
      }
      _unsubscribeQuoteSession() {
        this._quoteSessionSymbol && ((0, s.getQuoteSessionInstance)(this._multiplexerType).unsubscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol), this._quoteSessionSymbol = null, this._quotes = null)
      }
    }