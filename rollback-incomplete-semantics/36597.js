/**
 * Module 36597 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

36597: (e, t, i) => {
    "use strict";
    i.d(t, {
      areEqualSymbols: () => a,
      compareSymbolParams: () => d,
      symbolParams: () => h,
      symbolSameAsCurrent: () => c
    });
    var s = i(37103),
      o = i(95059),
      n = i(46082);
    const r = s.enabled("uppercase_instrument_names");

    function a(e, t) {
      return void 0 === e ? void 0 === t : void 0 !== t && (r ? e.toUpperCase() === t.toUpperCase() : e === t)
    }

    function l(e, t) {
      return e.some((e => a(t, e)))
    }

    function c(e, t) {
      if (null === t) return !1;
      if (t) {
        if (a(t.full_name, e) || a(t.pro_name, e)) return !0;
        if (a(t.ticker, e)) return !0;
        if (t.aliases && l(t.aliases, e)) return !0;
        if (t.alternatives && l(t.alternatives, e)) return !0;
        if (0 === e.indexOf("FRA:") && a(t.pro_name, e.replace("FRA:", "FWB:"))) return !0
      }
      return !1
    }

    function h(e) {
      return {
        symbol: e.symbol(),
        currency: e.currency(),
        unit: e.unit(),
        interval: e.interval(),
        style: e.style()
      }
    }

    function d(e, t, i) {
      const {
        symbol: s,
        currency: r,
        unit: a,
        style: l,
        interval: c
      } = t, h = void 0 !== s && !e.symbolSameAsResolved(s);
      let d, priceDataSource_u;
      const _ = e.symbolInfo();
      null !== _ ? (d = void 0 !== r && ! function(e, t) {
        return null === e && !(0, o.isConvertedToOtherCurrency)(t) || e === (0, o.symbolCurrency)(t)
      }(r, _), priceDataSource_u = void 0 !== a && ! function(e, t, i) {
        return null === e && !(0, o.isConvertedToOtherUnit)(t, i) || e === (0, o.symbolUnit)(t, i)
      }(a, _, i)) : (d = void 0 !== r && r !== e.currency(), priceDataSource_u = void 0 !== a && a !== e.unit());
      return {
        symbolChanged: h,
        intervalChanged: void 0 !== c && !n.Interval.isEqual(e.interval(), c),
        currencyChanged: d,
        unitChanged: priceDataSource_u,
        styleChanged: void 0 !== l && l !== e.style(),
        styleChangeRequiresRestart: void 0 !== l && (0, o.styleChangeRequiresRestart)(l, e.style())
      }
    }