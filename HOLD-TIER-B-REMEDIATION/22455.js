/**
 * Module 22455 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

22455: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";

    function priceDataSource_s(priceDataSource_e) {
      return priceDataSource_e?.symbolSource && priceDataSource_e.symbolSource() === priceDataSource_e || void 0 !== priceDataSource_e?.isActingAsSymbolSource
    }

    function priceDataSource_o(priceDataSource_e) {
      return priceDataSource_s(priceDataSource_e) && "quotesProvider" in priceDataSource_e
    }

    function priceDataSource_n(priceDataSource_e) {
      return priceDataSource_s(priceDataSource_e) && priceDataSource_e.isActingAsSymbolSource().value()
    }
    priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      isActingAsSymbolSource: () => priceDataSource_n,
      isSymbolSource: () => priceDataSource_s,
      isSymbolSourceWithQuotesProvider: () => priceDataSource_o
    })