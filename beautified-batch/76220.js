/**
 * Module 76220 - Auto-beautified from TradingView webpack bundle
 *
 * @module 76220
 * @date 2026-04-23
 * @size 1089 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 4226
 *
 * Exports:
 *   - QuoteSession (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.r(t), i.d(t, {
  QuoteSession: () => o
});
var s = i(4226);
class o {
  constructor(e, t = (0, s.randomHash)()) {
    this._sessionstarted = !1, this._globalHandler = null, this._chartApi = e, this._sessionid = "qs_" + t
  }
  destroy() {
    this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionstarted = !1)
  }
  connected() {
    return this._chartApi.connected()
  }
  connect(e) {
    this._globalHandler = e, this._chartApi.createSession(this._sessionid, this), this._chartApi.connect()
  }
  disconnect() {
    this._chartApi.disconnect()
  }
  quoteAddSymbols(e) {
    this._chartApi.quoteAddSymbols(this._sessionid, e)
  }
  quoteRemoveSymbols(e) {
    this._chartApi.quoteRemoveSymbols(this._sessionid, e)
  }
  quoteFastSymbols(e) {
    this._chartApi.quoteFastSymbols(this._sessionid, e)
  }
  quoteSetFields(e) {
    this._chartApi.quoteSetFields(this._sessionid, e)
  }
  onMessage(e) {
    switch (e.method) {
      case "connected":
        this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
        break;
      case "disconnected":
        this._sessionstarted = !1
    }
    this._globalHandler?.(e)
  }
  quoteHibernateAll() {
    this._chartApi.quoteHibernateAll(this._sessionid)
  }
