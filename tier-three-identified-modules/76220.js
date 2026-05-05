/**
 * Module: 76220
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.988Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 76220 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

76220: (exports, module, i) => {
    "use strict";
    require.r(module), require.d(module, {
      QuoteSession: () => o
    });
    var state = i(4226);
    class o {
      constructor(exports, module = (0, state.randomHash)()) {
        this._sessionstarted = !1, this._globalHandler = null, this._chartApi = exports, this._sessionid = "qs_" + t
      }
      destroy() {
        this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionstarted = !1)
      }
      connected() {
        return this._chartApi.connected()
      }
      connect(exports) {
        this._globalHandler = exports, this._chartApi.createSession(this._sessionid, this), this._chartApi.connect()
      }
      disconnect() {
        this._chartApi.disconnect()
      }
      quoteAddSymbols(exports) {
        this._chartApi.quoteAddSymbols(this._sessionid, e)
      }
      quoteRemoveSymbols(exports) {
        this._chartApi.quoteRemoveSymbols(this._sessionid, e)
      }
      quoteFastSymbols(exports) {
        this._chartApi.quoteFastSymbols(this._sessionid, e)
      }
      quoteSetFields(exports) {
        this._chartApi.quoteSetFields(this._sessionid, e)
      }
      onMessage(exports) {
        switch (exports.method) {
          case "connected":
            this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
            break;
          case "disconnected":
            this._sessionstarted = !1
        }
        this._globalHandler?.(exports)
      }
      quoteHibernateAll() {
        this._chartApi.quoteHibernateAll(this._sessionid)
      }
    }