/**
 * Module 57025 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57025: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      QuotesProvider: () => watchedValue_r
    });
    var watchedValue_s = watchedValue_i(32544),
      watchedValue_o = watchedValue_i(48096),
      watchedValue_n = watchedValue_i(4226);
    class watchedValue_r {
      constructor(watchedValue_e = "full", watchedValue_t) {
        this._quotes = null, this._quoteSessionSymbol = null, this._quoteSessionClientId = "", this
          ._pausedQuoteSessionSymbol = null, this._quotesUpdate = new watchedValue_o.Delegate, this._quoteSymbolChanged = new watchedValue_o
          .Delegate, this._multiplexerType = watchedValue_e, this._hibernated = watchedValue_t, this._hibernated?.subscribe((watchedValue_e => {
            watchedValue_e ? this.pause() : this.resume()
          }))
      }
      setQuotesSessionSymbol(watchedValue_e) {
        this._quoteSessionSymbol !== watchedValue_e && (this._pausedQuoteSessionSymbol = null, this._quoteSessionClientId || (this
            ._quoteSessionClientId = "series-" + (0, watchedValue_n.guid)()), this._unsubscribeQuoteSession(), this
          ._quoteSessionSymbol = watchedValue_e, this._quoteSymbolChanged.fire(), watchedValue_e && this._subscribeQuoteSession(watchedValue_e))
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
      async quotesSnapshot(watchedValue_e) {
        return (0, watchedValue_s.getQuoteSessionInstance)("simple").snapshot(watchedValue_e)
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
      _onUpdate(watchedValue_e, watchedValue_t) {
        this._quotes = watchedValue_e && watchedValue_e.values || null, watchedValue_t && watchedValue_t.values && this._quotesUpdate.fire(watchedValue_e, watchedValue_t)
      }
      _subscribeQuoteSession(watchedValue_e) {
        this._quoteSessionSymbol = watchedValue_e, (0, watchedValue_s.getQuoteSessionInstance)(this._multiplexerType).subscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol, this._onUpdate.bind(this))
      }
      _unsubscribeQuoteSession() {
        this._quoteSessionSymbol && ((0, watchedValue_s.getQuoteSessionInstance)(this._multiplexerType).unsubscribe(this
          ._quoteSessionClientId, this._quoteSessionSymbol), this._quoteSessionSymbol = null, this._quotes = null)
      }
    }