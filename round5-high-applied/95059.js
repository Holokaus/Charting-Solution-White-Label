/**
 * Module 95059 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95059: (watchedValue_e, t, i) => {
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
    var watchedValue_s = i(11542),
      o = i(1765),
      watchedValue_n = (i(49483), i(88145)),
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
    ! function(watchedValue_e) {
      watchedValue_e.LastUsedStyleKey = "chart.lastUsedStyle", watchedValue_e.LastUsedSingleValueBasedStyle =
        "chart.lastUsedSingleValueBasedStyle", watchedValue_e.LastUsedRawDataStyle = "chart.rawDataStyle"
    }(v || (v = {}));
    const S = [4, 5, 6, 7, 8],
      b = [4, 5, 6, 7, 11],
      w = [0, 1, 9, 19, 2, 14, 15, 3, 16, 10, 8, 12, 13, 18, 17, 20],
      C = [2, 14, 15, 10, 3, 13, 18];

    function T(watchedValue_e) {
      return {
        0: watchedValue_s.t(null, void 0, i(27377)),
        1: watchedValue_s.t(null, void 0, i(45054)),
        2: watchedValue_s.t(null, void 0, i(3554)),
        14: watchedValue_s.t(null, void 0, i(9394)),
        15: watchedValue_s.t(null, void 0, i(69217)),
        3: watchedValue_s.t(null, void 0, i(34456)),
        16: watchedValue_s.t(null, void 0, i(99906)),
        9: watchedValue_s.t(null, void 0, i(13459)),
        10: watchedValue_s.t(null, void 0, i(59213)),
        12: watchedValue_s.t(null, void 0, i(98236)),
        13: watchedValue_s.t(null, void 0, i(55761)),
        4: watchedValue_s.t(null, void 0, i(88130)),
        7: watchedValue_s.t(null, void 0, i(43588)),
        5: watchedValue_s.t(null, void 0, i(83490)),
        6: watchedValue_s.t(null, void 0, i(76519)),
        11: watchedValue_s.t(null, void 0, i(55169)),
        8: watchedValue_s.t(null, void 0, i(63876)),
        17: watchedValue_s.t(null, void 0, i(92763)),
        18: watchedValue_s.t(null, void 0, i(17809)),
        19: watchedValue_s.t(null, void 0, i(93722)),
        20: watchedValue_s.t(null, void 0, i(83298)),
        21: watchedValue_s.t(null, void 0, i(886))
      } [watchedValue_e]
    }

    function P(watchedValue_e) {
      return -1 !== S.indexOf(watchedValue_e)
    }

    function x(watchedValue_e) {
      return -1 !== b.indexOf(watchedValue_e)
    }

    function M(watchedValue_e, t) {
      return !I(watchedValue_e) && !I(t) && !(watchedValue_e === t || !P(watchedValue_e) && !P(t))
    }

    function I(watchedValue_e) {
      return 11 === watchedValue_e
    }

    function A(watchedValue_e) {
      return -1 !== w.indexOf(watchedValue_e)
    }

    function L(watchedValue_e) {
      return !(!y && 8 === watchedValue_e || 17 === watchedValue_e || 18 === watchedValue_e || 20 === watchedValue_e) && A(watchedValue_e)
    }

    function k(watchedValue_e) {
      return x(watchedValue_e) || A(watchedValue_e)
    }

    function E(watchedValue_e) {
      switch (watchedValue_e) {
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

    function D(watchedValue_e) {
      switch (watchedValue_e) {
        case 16:
        case 21:
          return !0;
        default:
          return !1
      }
    }

    function B(watchedValue_e, t) {
      var i;
      k(watchedValue_e) && (11 !== watchedValue_e && o.setValue("chart.lastUsedStyle", watchedValue_e), i = watchedValue_e, r.SYMBOL_STRING_DATA[i] || function(watchedValue_e) {
        o.setValue("chart.rawDataStyle", watchedValue_e)
      }(watchedValue_e), _e(t) && E(watchedValue_e) && o.setValue("chart.lastUsedSingleValueBasedStyle", watchedValue_e))
    }

    function V() {
      const watchedValue_e = o.getInt("chart.lastUsedStyle");
      return void 0 === watchedValue_e ? 1 : watchedValue_e
    }

    function R() {
      const watchedValue_e = o.getInt("chart.lastUsedSingleValueBasedStyle");
      return void 0 === watchedValue_e ? 14 : watchedValue_e
    }

    function N(watchedValue_e) {
      return watchedValue_e ? 11 : 1
    }

    function O(watchedValue_e, t) {
      const i = I(t),
        watchedValue_s = a.Interval.isRange(watchedValue_e);
      return !i && watchedValue_s ? N(!0) : i && !watchedValue_s ? N(!1) : t
    }

    function F(watchedValue_e, t) {
      const i = r.SYMBOL_STRING_DATA[watchedValue_e];
      return void 0 === i ? null : t ? `${i.type}-${i.basicStudyVersion}` : i.type
    }

    function W(watchedValue_e) {
      const t = watchedValue_e.priceAxisProperties,
        i = t.lockScale.value(),
        watchedValue_s = 6 === watchedValue_e.style.value();
      (watchedValue_s || i) && (t.log.setValue(!1), t.percentage.setValue(!1)), t.logDisabled.setValue(!(!watchedValue_s && !i)), t
        .percentageDisabled.setValue(!(!watchedValue_s && !i))
    }

    function H(watchedValue_e) {
      return C.includes(watchedValue_e)
    }

    function z(watchedValue_e, t = "default", i = !1) {
      let watchedValue_s, o, watchedValue_n, r, a = 100,
        l = 1;
      if ("default" === t) null != watchedValue_e && (({
        pricescale: a,
        minmov: l,
        minmove2: o,
        fractional: watchedValue_s
      } = watchedValue_e), watchedValue_n = watchedValue_e.variable_tick_size || void 0);
      else {
        let watchedValue_e = t.split(",");
        3 !== watchedValue_e.length && (watchedValue_e = ["100", "1", "false"]), a = parseInt(watchedValue_e[0]), l = parseInt(watchedValue_e[1]), watchedValue_s = "true" === watchedValue_e[2],
          r = !0
      }
      return i && (l = 1), {
        priceScale: a,
        minMove: l,
        fractional: watchedValue_s,
        minMove2: o,
        variableMinTick: watchedValue_n,
        ignoreMinMove: i,
        noExponentialForm: r
      }
    }

    function U(watchedValue_e, t, i = !1) {
      const {
        priceScale: watchedValue_s,
        minMove: o,
        fractional: watchedValue_n,
        minMove2: r,
        variableMinTick: a,
        noExponentialForm: c
      } = z(watchedValue_e, t, i);
      if (null != watchedValue_e) {
        const l = watchedValue_e.format;
        if ("default" === t && "volume" === l) return new h.VolumeFormatter({
          precision: 2
        });
        if ("percent" === l) return new d.PercentageFormatter({
          priceScale: watchedValue_s,
          minMove: o,
          fractional: watchedValue_n,
          minMove2: r,
          variableMinTick: a,
          ignoreMinMove: i
        })
      }
      return new l.PriceFormatter({
        priceScale: watchedValue_s,
        minMove: o,
        fractional: watchedValue_n,
        minMove2: r,
        variableMinTick: a,
        ignoreMinMove: i,
        noExponentialForm: c
      })
    }

    function j(watchedValue_e) {
      return null !== watchedValue_e && !(0, watchedValue_n.isSpread)(watchedValue_e.type)
    }

    function G(watchedValue_e, t, i) {
      if (null === watchedValue_e) return null;
      const watchedValue_s = !t || i ? watchedValue_e.currency_id : watchedValue_e.currency_code;
      return void 0 === watchedValue_s || "" === watchedValue_s ? null : watchedValue_s
    }

    function q(watchedValue_e, t) {
      return (t ? watchedValue_e.original_currency_code : watchedValue_e.original_currency_id) ?? G(watchedValue_e, t)
    }

    function $(watchedValue_e) {
      return watchedValue_e.base_currency_id || null
    }

    function K(watchedValue_e) {
      if (null === watchedValue_e || !j(watchedValue_e)) return !1;
      const t = q(watchedValue_e);
      return null !== t && t !== G(watchedValue_e)
    }

    function Y(watchedValue_e, t) {
      return t && null !== watchedValue_e && !(0, watchedValue_n.isSpread)(watchedValue_e.type)
    }

    function Z(watchedValue_e, t) {
      if (null === watchedValue_e || !t) return null;
      const i = watchedValue_e.unit_id;
      return void 0 === i || "" === i ? null : i
    }

    function X(watchedValue_e, t) {
      return t ? watchedValue_e.original_unit_id || Z(watchedValue_e, t) : null
    }

    function J(watchedValue_e, t) {
      return !(null === watchedValue_e || !Y(watchedValue_e, t)) && (void 0 !== watchedValue_e.original_unit_id && watchedValue_e.original_unit_id !== watchedValue_e.unit_id)
    }

    function Q(watchedValue_e, t) {
      return null !== watchedValue_e && Y(watchedValue_e, t) ? watchedValue_e.unit_conversion_types || null : []
    }

    function ee(watchedValue_e) {
      return null !== watchedValue_e && void 0 !== watchedValue_e.subsessions && watchedValue_e.subsessions.some((watchedValue_e => "premarket" === watchedValue_e.id || "postmarket" ===
        watchedValue_e.id))
    }

    function te(watchedValue_e) {
      return null !== watchedValue_e && void 0 !== watchedValue_e.subsessions && (watchedValue_e.subsessions.some((watchedValue_e => "regular" === watchedValue_e.id)) && watchedValue_e.subsessions
        .some((watchedValue_e => "us_regular" === watchedValue_e.id)))
    }

    function ie(watchedValue_e) {
      return null !== watchedValue_e && void 0 !== watchedValue_e.subsessions && watchedValue_e.subsessions.filter((watchedValue_e => !watchedValue_e.private)).length > 1
    }

    function se(watchedValue_e, t) {
      return (0, m.extractSymbolNameFromSymbolInfo)(watchedValue_e, null, !0, !0) || t
    }

    function oe(watchedValue_e, t) {
      return watchedValue_e ? watchedValue_e.ticker ?? watchedValue_e.pro_name ?? t : t
    }
    const ne = "·";

    function re(watchedValue_e, t) {
      return fe(watchedValue_e) ? watchedValue_e.source2?.description ?? null : null
    }

    function ae(watchedValue_e, t) {
      const i = ve(watchedValue_e);
      return t || f ? watchedValue_e.name : `${watchedValue_e.name} ${ne} ${i}`
    }

    function le(watchedValue_e) {
      let t = watchedValue_e && (function(watchedValue_e) {
        return (0, watchedValue_n.isFutures)(watchedValue_e.type) && watchedValue_e.front_contract || null
      }(watchedValue_e) || watchedValue_e.name) || "";
      return t.length > 40 && (t = t.substring(0, 37) + "..."), t.trim()
    }

    function ce(watchedValue_e) {
      const t = watchedValue_e ? watchedValue_e.exchange : "";
      return g ? t.toUpperCase() : t
    }

    function he(watchedValue_e, t) {
      return null !== watchedValue_e ? watchedValue_e.full_name : t
    }

    function de(watchedValue_e, t) {
      return watchedValue_e?.pro_name ?? t
    }

    function ue(watchedValue_e, t) {
      return (0, p.getChartingLibraryGlobalContext)()?.configurationData?.is_tradingview_data ? ["stock", "fund",
        "index", "dr"
      ].includes(t.type) && "regular" === watchedValue_e || (0, watchedValue_n.isFutures)(t.type) && "us_regular" === watchedValue_e : "regular" === watchedValue_e
    }

    function _e(watchedValue_e) {
      return "c" === watchedValue_e?.visible_plots_set
    }

    function pe(watchedValue_e) {
      return null !== watchedValue_e && ("unit" === watchedValue_e.measure && null !== me(watchedValue_e))
    }

    function me(watchedValue_e) {
      return watchedValue_e?.value_unit_id ?? null
    }

    function ge(watchedValue_e) {
      return "ohlcv" === watchedValue_e.visible_plots_set
    }

    function fe(watchedValue_e) {
      return null !== watchedValue_e && (0, watchedValue_n.isEconomicSymbol)(watchedValue_e.type)
    }

    function ye(watchedValue_e) {
      return function(watchedValue_e) {
        return null !== watchedValue_e && (0, watchedValue_n.isSpread)(watchedValue_e.type)
      }(watchedValue_e) && (watchedValue_e?.legs ?? []).length > 1
    }

    function ve(watchedValue_e) {
      const t = re(watchedValue_e);
      if (null !== t) return t;
      return watchedValue_e.exchange
    }

    function Se(watchedValue_e) {
      return watchedValue_e.exchange
    }

    function be(watchedValue_e) {
      return (0, u.combine)(((t, i) => {
        switch (t) {
          case 4: {
            const t = watchedValue_e.seriesErrorMessage();
            return null !== t && ("resolution_not_entitled" === t || "custom_resolution" === t ||
                "seconds_not_entitled" === t || "ticks_not_entitled" === t || t.startsWith("study_not_auth:")) ?
              null : {
                type: "invalid_symbol"
              }
          }
          case 13: {
            const t = watchedValue_e.seriesErrorMessage();
            return null === t ? null : {
              type: "calculations_error",
              errorMessage: t
            }
          }
          case 14: {
            const t = watchedValue_e.unsupportedResolutionState().value();
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
      }), watchedValue_e.statusWV().weakReference(), (0, _.createWVFromGetterAndSubscription)((() => !watchedValue_e.bars().size() && !watchedValue_e
        .isInReplay().value()), watchedValue_e.dataEvents().dataUpdated()).ownership())
    }

    function we(watchedValue_e) {
      return Math.max(0, watchedValue_e?.delay ?? 0)
    }
}
