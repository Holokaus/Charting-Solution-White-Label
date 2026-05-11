/**
 * Module 76220 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

76220: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";
    priceDataSource_i.priceDataSource_r(priceDataSource_t), priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      QuoteSession: () => priceDataSource_o
    });
    var priceDataSource_s = priceDataSource_i(4226);
    class priceDataSource_o {
      constructor(priceDataSource_e, priceDataSource_t = (0, priceDataSource_s.randomHash)()) {
        this._sessionstarted = !1, this._globalHandler = null, this._chartApi = priceDataSource_e, this._sessionid = "qs_" + priceDataSource_t
      }
      destroy() {
        this._sessionstarted && (this._chartApi.quoteDeleteSession(this._sessionid), this._sessionstarted = !1)
      }
      connected() {
        return this._chartApi.connected()
      }
      connect(priceDataSource_e) {
        this._globalHandler = priceDataSource_e, this._chartApi.createSession(this._sessionid, this), this._chartApi.connect()
      }
      disconnect() {
        this._chartApi.disconnect()
      }
      quoteAddSymbols(priceDataSource_e) {
        this._chartApi.quoteAddSymbols(this._sessionid, priceDataSource_e)
      }
      quoteRemoveSymbols(priceDataSource_e) {
        this._chartApi.quoteRemoveSymbols(this._sessionid, priceDataSource_e)
      }
      quoteFastSymbols(priceDataSource_e) {
        this._chartApi.quoteFastSymbols(this._sessionid, priceDataSource_e)
      }
      quoteSetFields(priceDataSource_e) {
        this._chartApi.quoteSetFields(this._sessionid, priceDataSource_e)
      }
      onMessage(priceDataSource_e) {
        switch (priceDataSource_e.method) {
          case "connected":
            this._sessionstarted || (this._chartApi.quoteCreateSession(this._sessionid), this._sessionstarted = !0);
            break;
          case "disconnected":
            this._sessionstarted = !1
        }
        this._globalHandler?.(priceDataSource_e)
      }
      quoteHibernateAll() {
        this._chartApi.quoteHibernateAll(this._sessionid)
      }
    }
}
