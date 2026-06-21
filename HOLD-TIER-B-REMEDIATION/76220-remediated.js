/**
 * Module 76220 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

76220: (exports, module, require) => {
    "use strict";
    require.config(module), require.priceDataSource_d(module, {
      QuoteSession: () => hasVolume
    });
    var utils = require(4226);
    class hasVolume {
      constructor(exports, module = (0, utils.randomHash)()) {
        this._sessionstarted = !1, this._globalHandler = null, this._chartApi = exports, this._sessionid = "qs_" + module
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
        this._chartApi.quoteAddSymbols(this._sessionid, exports)
      }
      quoteRemoveSymbols(exports) {
        this._chartApi.quoteRemoveSymbols(this._sessionid, exports)
      }
      quoteFastSymbols(exports) {
        this._chartApi.quoteFastSymbols(this._sessionid, exports)
      }
      quoteSetFields(exports) {
        this._chartApi.quoteSetFields(this._sessionid, exports)
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