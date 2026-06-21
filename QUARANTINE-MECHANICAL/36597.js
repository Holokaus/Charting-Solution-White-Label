/**
 * Module 36597 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

36597: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";
    priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      areEqualSymbols: () => priceDataSource_a,
      compareSymbolParams: () => priceDataSource_d,
      symbolParams: () => priceDataSource_h,
      symbolSameAsCurrent: () => priceDataSource_c
    });
    var priceDataSource_s = priceDataSource_i(37103),
      priceDataSource_o = priceDataSource_i(95059),
      priceDataSource_n = priceDataSource_i(46082);
    const priceDataSource_r = priceDataSource_s.enabled("uppercase_instrument_names");

    function priceDataSource_a(priceDataSource_e, priceDataSource_t) {
      return void 0 === priceDataSource_e ? void 0 === priceDataSource_t : void 0 !== priceDataSource_t && (priceDataSource_r ? priceDataSource_e.toUpperCase() === priceDataSource_t.toUpperCase() : priceDataSource_e === priceDataSource_t)
    }

    function priceDataSource_l(priceDataSource_e, priceDataSource_t) {
      return priceDataSource_e.some((priceDataSource_e => priceDataSource_a(priceDataSource_t, priceDataSource_e)))
    }

    function priceDataSource_c(priceDataSource_e, priceDataSource_t) {
      if (null === priceDataSource_t) return !1;
      if (priceDataSource_t) {
        if (priceDataSource_a(priceDataSource_t.full_name, priceDataSource_e) || priceDataSource_a(priceDataSource_t.pro_name, priceDataSource_e)) return !0;
        if (priceDataSource_a(priceDataSource_t.ticker, priceDataSource_e)) return !0;
        if (priceDataSource_t.aliases && priceDataSource_l(priceDataSource_t.aliases, priceDataSource_e)) return !0;
        if (priceDataSource_t.alternatives && priceDataSource_l(priceDataSource_t.alternatives, priceDataSource_e)) return !0;
        if (0 === priceDataSource_e.indexOf("FRA:") && priceDataSource_a(priceDataSource_t.pro_name, priceDataSource_e.replace("FRA:", "FWB:"))) return !0
      }
      return !1
    }

    function priceDataSource_h(priceDataSource_e) {
      return {
        symbol: priceDataSource_e.symbol(),
        currency: priceDataSource_e.currency(),
        unit: priceDataSource_e.unit(),
        interval: priceDataSource_e.interval(),
        style: priceDataSource_e.style()
      }
    }

    function priceDataSource_d(priceDataSource_e, priceDataSource_t, priceDataSource_i) {
      const {
        symbol: priceDataSource_s,
        currency: priceDataSource_r,
        unit: priceDataSource_a,
        style: priceDataSource_l,
        interval: priceDataSource_c
      } = priceDataSource_t, priceDataSource_h = void 0 !== priceDataSource_s && !priceDataSource_e.symbolSameAsResolved(priceDataSource_s);
      let priceDataSource_d, priceDataSource_u;
      const _ = priceDataSource_e.symbolInfo();
      null !== _ ? (priceDataSource_d = void 0 !== priceDataSource_r && ! function(priceDataSource_e, priceDataSource_t) {
        return null === priceDataSource_e && !(0, priceDataSource_o.isConvertedToOtherCurrency)(priceDataSource_t) || priceDataSource_e === (0, priceDataSource_o.symbolCurrency)(priceDataSource_t)
      }(priceDataSource_r, _), priceDataSource_u = void 0 !== priceDataSource_a && ! function(priceDataSource_e, priceDataSource_t, priceDataSource_i) {
        return null === priceDataSource_e && !(0, priceDataSource_o.isConvertedToOtherUnit)(priceDataSource_t, priceDataSource_i) || priceDataSource_e === (0, priceDataSource_o.symbolUnit)(priceDataSource_t, priceDataSource_i)
      }(priceDataSource_a, _, priceDataSource_i)) : (priceDataSource_d = void 0 !== priceDataSource_r && priceDataSource_r !== priceDataSource_e.currency(), priceDataSource_u = void 0 !== priceDataSource_a && priceDataSource_a !== priceDataSource_e.unit());
      return {
        symbolChanged: priceDataSource_h,
        intervalChanged: void 0 !== priceDataSource_c && !priceDataSource_n.Interval.isEqual(priceDataSource_e.interval(), priceDataSource_c),
        currencyChanged: priceDataSource_d,
        unitChanged: priceDataSource_u,
        styleChanged: void 0 !== priceDataSource_l && priceDataSource_l !== priceDataSource_e.style(),
        styleChangeRequiresRestart: void 0 !== priceDataSource_l && (0, priceDataSource_o.styleChangeRequiresRestart)(priceDataSource_l, priceDataSource_e.style())
      }
    }