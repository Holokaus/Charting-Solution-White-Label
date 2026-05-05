/**
 * Module 95059 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95059: (e, t, i) => {
    "use strict";
    i.d(t, {
      actualSymbol: () => he,
      chartStyleStudyId: () => F,
      createSeriesFormatter: () => U,
      displayedSymbolExchange: () => ce,
      displayedSymbolName: () => le,
      extractLineToolSymbolFromSymbolInfo: () => se,
      getChartStyleByResolution: () => O,
      getDefaultStyle: () => N,
      getLastUsedSingleValueBasedStyle: () => R,
      getLastUsedStyle: () => V,
      getSeriesDisplayErrorWV: () => be,
      getSeriesPriceFormattingState: () => z,
      getSourceForEconomySymbol: () => re,
      getSymbolDelaySeconds: () => we,
      getSymbolListedExchange: () => ve,
      getSymbolTradedExchange: () => Se,
      getTranslatedChartStyleName: () => T,
      hasVolume: () => ge,
      isCloseBasedSymbol: () => _e,
      isConvertedToOtherCurrency: () => K,
      isConvertedToOtherUnit: () => J,
      isEconomicSymbol: () => fe,
      isHLCBasedStyle: () => D,
      isMeasureUnitSymbol: () => pe,
      isPriceSourceStyle: () => H,
      isRangeBasedStyle: () => x,
      isRangeStyle: () => I,
      isRegularSessionId: () => ue,
      isSingleValueBasedStyle: () => E,
      isSpreadSymbolWithManyLegs: () => ye,
      isStyleSupportedForReplay: () => L,
      isTimeBasedStyle: () => A,
      isValidStyle: () => k,
      measureUnitId: () => me,
      preparePriceAxisProperties: () => W,
      proSymbol: () => de,
      setLastUsedStyle: () => B,
      styleChangeRequiresRestart: () => M,
      symbolBaseCurrency: () => $,
      symbolCurrency: () => G,
      symbolCurrencyConvertible: () => j,
      symbolHasElectronicSession: () => te,
      symbolHasPreOrPostMarket: () => ee,
      symbolHasSeveralSessions: () => ie,
      symbolOriginalCurrency: () => q,
      symbolOriginalUnit: () => X,
      symbolTitle: () => ae,
      symbolTitleSeparator: () => ne,
      symbolToSaveInState: () => oe,
      symbolUnit: () => Z,
      symbolUnitConvertibleGroupsIfExist: () => Q
    });
    var s = i(11542),
      o = i(1765),
      n = (i(49483), i(88145)),
      r = i(82095),
      a = i(46082),
      l = i(67563),
      c = i(37103),
      h = i(91565),
      d = i(38888),
      u = i(48943),
      _ = i(67455),
      p = i(52959),
      m = i(92211);
    const g = c.enabled("uppercase_instrument_names"),
      f = c.enabled("hide_object_tree_and_price_scale_exchange_label"),
      y = !1;
    var v;
    ! function(e) {
      e.LastUsedStyleKey = "chart.lastUsedStyle", e.LastUsedSingleValueBasedStyle =
        "chart.lastUsedSingleValueBasedStyle", e.LastUsedRawDataStyle = "chart.rawDataStyle"
    }(v || (v = {}));
    const S = [4, 5, 6, 7, 8],
      b = [4, 5, 6, 7, 11],
      w = [0, 1, 9, 19, 2, 14, 15, 3, 16, 10, 8, 12, 13, 18, 17, 20],
      C = [2, 14, 15, 10, 3, 13, 18];

    function T(e) {
      return {
        0: s.t(null, void 0, i(27377)),
        1: s.t(null, void 0, i(45054)),
        2: s.t(null, void 0, i(3554)),
        14: s.t(null, void 0, i(9394)),
        15: s.t(null, void 0, i(69217)),
        3: s.t(null, void 0, i(34456)),
        16: s.t(null, void 0, i(99906)),
        9: s.t(null, void 0, i(13459)),
        10: s.t(null, void 0, i(59213)),
        12: s.t(null, void 0, i(98236)),
        13: s.t(null, void 0, i(55761)),
        4: s.t(null, void 0, i(88130)),
        7: s.t(null, void 0, i(43588)),
        5: s.t(null, void 0, i(83490)),
        6: s.t(null, void 0, i(76519)),
        11: s.t(null, void 0, i(55169)),
        8: s.t(null, void 0, i(63876)),
        17: s.t(null, void 0, i(92763)),
        18: s.t(null, void 0, i(17809)),
        19: s.t(null, void 0, i(93722)),
        20: s.t(null, void 0, i(83298)),
        21: s.t(null, void 0, i(886))
      } [e]
    }

    function P(e) {
      return -1 !== S.indexOf(e)
    }

    function x(e) {
      return -1 !== b.indexOf(e)
    }

    function M(e, t) {
      return !I(e) && !I(t) && !(e === t || !P(e) && !P(t))
    }

    function I(e) {
      return 11 === e
    }

    function A(e) {
      return -1 !== w.indexOf(e)
    }

    function L(e) {
      return !(!y && 8 === e || 17 === e || 18 === e || 20 === e) && A(e)
    }

    function k(e) {
      return x(e) || A(e)
    }

    function E(e) {
      switch (e) {
        case 3:
        case 10:
        case 2:
        case 14:
        case 15:
        case 13:
          return !0;
        default:
          return !1
      }
    }

    function D(e) {
      switch (e) {
        case 16:
        case 21:
          return !0;
        default:
          return !1
      }
    }

    function B(e, t) {
      var i;
      k(e) && (11 !== e && o.setValue("chart.lastUsedStyle", e), i = e, r.SYMBOL_STRING_DATA[i] || function(e) {
        o.setValue("chart.rawDataStyle", e)
      }(e), _e(t) && E(e) && o.setValue("chart.lastUsedSingleValueBasedStyle", e))
    }

    function V() {
      const e = o.getInt("chart.lastUsedStyle");
      return void 0 === e ? 1 : e
    }

    function R() {
      const e = o.getInt("chart.lastUsedSingleValueBasedStyle");
      return void 0 === e ? 14 : e
    }

    function N(e) {
      return e ? 11 : 1
    }

    function O(e, t) {
      const i = I(t),
        s = a.Interval.isRange(e);
      return !i && s ? N(!0) : i && !s ? N(!1) : t
    }

    function F(e, t) {
      const i = r.SYMBOL_STRING_DATA[e];
      return void 0 === i ? null : t ? `${i.type}-${i.basicStudyVersion}` : i.type
    }

    function W(e) {
      const t = e.priceAxisProperties,
        i = t.lockScale.value(),
        s = 6 === e.style.value();
      (s || i) && (t.log.setValue(!1), t.percentage.setValue(!1)), t.logDisabled.setValue(!(!s && !i)), t
        .percentageDisabled.setValue(!(!s && !i))
    }

    function H(e) {
      return C.includes(e)
    }

    function z(e, t = "default", i = !1) {
      let s, o, n, r, a = 100,
        l = 1;
      if ("default" === t) null != e && (({
        pricescale: a,
        minmov: l,
        minmove2: o,
        fractional: s
      } = e), n = e.variable_tick_size || void 0);
      else {
        let e = t.split(",");
        3 !== e.length && (e = ["100", "1", "false"]), a = parseInt(e[0]), l = parseInt(e[1]), s = "true" === e[2],
          r = !0
      }
      return i && (l = 1), {
        priceScale: a,
        minMove: l,
        fractional: s,
        minMove2: o,
        variableMinTick: n,
        ignoreMinMove: i,
        noExponentialForm: r
      }
    }

    function U(e, t, i = !1) {
      const {
        priceScale: s,
        minMove: o,
        fractional: n,
        minMove2: r,
        variableMinTick: a,
        noExponentialForm: c
      } = z(e, t, i);
      if (null != e) {
        const l = e.format;
        if ("default" === t && "volume" === l) return new h.VolumeFormatter({
          precision: 2
        });
        if ("percent" === l) return new d.PercentageFormatter({
          priceScale: s,
          minMove: o,
          fractional: n,
          minMove2: r,
          variableMinTick: a,
          ignoreMinMove: i
        })
      }
      return new l.PriceFormatter({
        priceScale: s,
        minMove: o,
        fractional: n,
        minMove2: r,
        variableMinTick: a,
        ignoreMinMove: i,
        noExponentialForm: c
      })
    }

    function j(e) {
      return null !== e && !(0, n.isSpread)(e.type)
    }

    function G(e, t, i) {
      if (null === e) return null;
      const s = !t || i ? e.currency_id : e.currency_code;
      return void 0 === s || "" === s ? null : s
    }

    function q(e, t) {
      return (t ? e.original_currency_code : e.original_currency_id) ?? G(e, t)
    }

    function $(e) {
      return e.base_currency_id || null
    }

    function K(e) {
      if (null === e || !j(e)) return !1;
      const t = q(e);
      return null !== t && t !== G(e)
    }

    function Y(e, t) {
      return t && null !== e && !(0, n.isSpread)(e.type)
    }

    function Z(e, t) {
      if (null === e || !t) return null;
      const i = e.unit_id;
      return void 0 === i || "" === i ? null : i
    }

    function X(e, t) {
      return t ? e.original_unit_id || Z(e, t) : null
    }

    function J(e, t) {
      return !(null === e || !Y(e, t)) && (void 0 !== e.original_unit_id && e.original_unit_id !== e.unit_id)
    }

    function Q(e, t) {
      return null !== e && Y(e, t) ? e.unit_conversion_types || null : []
    }

    function ee(e) {
      return null !== e && void 0 !== e.subsessions && e.subsessions.some((e => "premarket" === e.id || "postmarket" ===
        e.id))
    }

    function te(e) {
      return null !== e && void 0 !== e.subsessions && (e.subsessions.some((e => "regular" === e.id)) && e.subsessions
        .some((e => "us_regular" === e.id)))
    }

    function ie(e) {
      return null !== e && void 0 !== e.subsessions && e.subsessions.filter((e => !e.private)).length > 1
    }

    function se(e, t) {
      return (0, m.extractSymbolNameFromSymbolInfo)(e, null, !0, !0) || t
    }

    function oe(e, t) {
      return e ? e.ticker ?? e.pro_name ?? t : t
    }
    const ne = "·";

    function re(e, t) {
      return fe(e) ? e.source2?.description ?? null : null
    }

    function ae(e, t) {
      const i = ve(e);
      return t || f ? e.name : `${e.name} ${ne} ${i}`
    }

    function le(e) {
      let t = e && (function(e) {
        return (0, n.isFutures)(e.type) && e.front_contract || null
      }(e) || e.name) || "";
      return t.length > 40 && (t = t.substring(0, 37) + "..."), t.trim()
    }

    function ce(e) {
      const t = e ? e.exchange : "";
      return g ? t.toUpperCase() : t
    }

    function he(e, t) {
      return null !== e ? e.full_name : t
    }

    function de(e, t) {
      return e?.pro_name ?? t
    }

    function ue(e, t) {
      return (0, p.getChartingLibraryGlobalContext)()?.configurationData?.is_tradingview_data ? ["stock", "fund",
        "index", "dr"
      ].includes(t.type) && "regular" === e || (0, n.isFutures)(t.type) && "us_regular" === e : "regular" === e
    }

    function _e(e) {
      return "c" === e?.visible_plots_set
    }

    function pe(e) {
      return null !== e && ("unit" === e.measure && null !== me(e))
    }

    function me(e) {
      return e?.value_unit_id ?? null
    }

    function ge(e) {
      return "ohlcv" === e.visible_plots_set
    }

    function fe(e) {
      return null !== e && (0, n.isEconomicSymbol)(e.type)
    }

    function ye(e) {
      return function(e) {
        return null !== e && (0, n.isSpread)(e.type)
      }(e) && (e?.legs ?? []).length > 1
    }

    function ve(e) {
      const t = re(e);
      if (null !== t) return t;
      return e.exchange
    }

    function Se(e) {
      return e.exchange
    }

    function be(e) {
      return (0, u.combine)(((t, i) => {
        switch (t) {
          case 4: {
            const t = e.seriesErrorMessage();
            return null !== t && ("resolution_not_entitled" === t || "custom_resolution" === t ||
                "seconds_not_entitled" === t || "ticks_not_entitled" === t || t.startsWith("study_not_auth:")) ?
              null : {
                type: "invalid_symbol"
              }
          }
          case 13: {
            const t = e.seriesErrorMessage();
            return null === t ? null : {
              type: "calculations_error",
              errorMessage: t
            }
          }
          case 14: {
            const t = e.unsupportedResolutionState().value();
            return null === t ? null : {
              type: "unsupported_resolution",
              reason: t.reason
            }
          }
          case 1:
          case 2:
            return null;
          default:
            if (i) return {
              type: "no_data"
            }
        }
        return null
      }), e.statusWV().weakReference(), (0, _.createWVFromGetterAndSubscription)((() => !e.bars().size() && !e
        .isInReplay().value()), e.dataEvents().dataUpdated()).ownership())
    }

    function we(e) {
      return Math.max(0, e?.delay ?? 0)
    }