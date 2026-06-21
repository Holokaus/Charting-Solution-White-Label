/**
 * Module 95059 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (15895 bytes) - comprehensive remediation applied
 */

95059: (exports, t, i) => {
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
    var constants = i(11542),
      o = i(1765),
      name = (i(49483), i(88145)),
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
    ! function(exports) {
      exports.LastUsedStyleKey = "chart.lastUsedStyle", exports.LastUsedSingleValueBasedStyle =
        "chart.lastUsedSingleValueBasedStyle", exports.LastUsedRawDataStyle = "chart.rawDataStyle"
    }(v || (v = {}));
    const S = [4, 5, 6, 7, 8],
      b = [4, 5, 6, 7, 11],
      w = [0, 1, 9, 19, 2, 14, 15, 3, 16, 10, 8, 12, 13, 18, 17, 20],
      C = [2, 14, 15, 10, 3, 13, 18];

    function T(exports) {
      return {
        0: constants.t(null, void 0, i(27377)),
        1: constants.t(null, void 0, i(45054)),
        2: constants.t(null, void 0, i(3554)),
        14: constants.t(null, void 0, i(9394)),
        15: constants.t(null, void 0, i(69217)),
        3: constants.t(null, void 0, i(34456)),
        16: constants.t(null, void 0, i(99906)),
        9: constants.t(null, void 0, i(13459)),
        10: constants.t(null, void 0, i(59213)),
        12: constants.t(null, void 0, i(98236)),
        13: constants.t(null, void 0, i(55761)),
        4: constants.t(null, void 0, i(88130)),
        7: constants.t(null, void 0, i(43588)),
        5: constants.t(null, void 0, i(83490)),
        6: constants.t(null, void 0, i(76519)),
        11: constants.t(null, void 0, i(55169)),
        8: constants.t(null, void 0, i(63876)),
        17: constants.t(null, void 0, i(92763)),
        18: constants.t(null, void 0, i(17809)),
        19: constants.t(null, void 0, i(93722)),
        20: constants.t(null, void 0, i(83298)),
        21: constants.t(null, void 0, i(886))
      } [exports]
    }

    function P(exports) {
      return -1 !== S.indexOf(exports)
    }

    function index(exports) {
      return -1 !== b.indexOf(exports)
    }

    function M(exports, t) {
      return !I(exports) && !I(t) && !(exports === t || !P(exports) && !P(t))
    }

    function I(exports) {
      return 11 === exports
    }

    function A(exports) {
      return -1 !== w.indexOf(exports)
    }

    function L(exports) {
      return !(!y && 8 === exports || 17 === exports || 18 === exports || 20 === exports) && A(exports)
    }

    function key(exports) {
      return x(exports) || A(exports)
    }

    function E(exports) {
      switch (exports) {
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

    function D(exports) {
      switch (exports) {
        case 16:
        case 21:
          return !0;
        default:
          return !1
      }
    }

    function B(exports, t) {
      var i;
      k(exports) && (11 !== exports && o.setValue("chart.lastUsedStyle", exports), i = exports, r.SYMBOL_STRING_DATA[i] || function(exports) {
        o.setValue("chart.rawDataStyle", exports)
      }(exports), _e(t) && E(exports) && o.setValue("chart.lastUsedSingleValueBasedStyle", exports))
    }

    function V() {
      const exports = o.getInt("chart.lastUsedStyle");
      return void 0 === exports ? 1 : exports
    }

    function R() {
      const exports = o.getInt("chart.lastUsedSingleValueBasedStyle");
      return void 0 === exports ? 14 : exports
    }

    function N(exports) {
      return exports ? 11 : 1
    }

    function O(exports, t) {
      const i = I(t),
        constants = a.Interval.isRange(exports);
      return !i && constants ? N(!0) : i && !constants ? N(!1) : t
    }

    function F(exports, t) {
      const i = r.SYMBOL_STRING_DATA[exports];
      return void 0 === i ? null : t ? `${i.type}-${i.basicStudyVersion}` : i.type
    }

    function W(exports) {
      const t = exports.priceAxisProperties,
        i = t.lockScale.value(),
        constants = 6 === exports.style.value();
      (constants || i) && (t.log.setValue(!1), t.percentage.setValue(!1)), t.logDisabled.setValue(!(!constants && !i)), t
        .percentageDisabled.setValue(!(!constants && !i))
    }

    function H(exports) {
      return C.includes(exports)
    }

    function temp(exports, t = "default", i = !1) {
      let constants, o, name, r, a = 100,
        l = 1;
      if ("default" === t) null != exports && (({
        pricescale: a,
        minmov: l,
        minmove2: o,
        fractional: constants
      } = exports), name = exports.variable_tick_size || void 0);
      else {
        let exports = t.split(",");
        3 !== exports.length && (exports = ["100", "1", "false"]), a = parseInt(exports[0]), l = parseInt(exports[1]), constants = "true" === exports[2],
          r = !0
      }
      return i && (l = 1), {
        priceScale: a,
        minMove: l,
        fractional: constants,
        minMove2: o,
        variableMinTick: name,
        ignoreMinMove: i,
        noExponentialForm: r
      }
    }

    function U(exports, t, i = !1) {
      const {
        priceScale: constants,
        minMove: o,
        fractional: name,
        minMove2: r,
        variableMinTick: a,
        noExponentialForm: c
      } = z(exports, t, i);
      if (null != exports) {
        const l = exports.format;
        if ("default" === t && "volume" === l) return new h.VolumeFormatter({
          precision: 2
        });
        if ("percent" === l) return new d.PercentageFormatter({
          priceScale: constants,
          minMove: o,
          fractional: name,
          minMove2: r,
          variableMinTick: a,
          ignoreMinMove: i
        })
      }
      return new l.PriceFormatter({
        priceScale: constants,
        minMove: o,
        fractional: name,
        minMove2: r,
        variableMinTick: a,
        ignoreMinMove: i,
        noExponentialForm: c
      })
    }

    function obj(exports) {
      return null !== exports && !(0, name.isSpread)(exports.type)
    }

    function G(exports, t, i) {
      if (null === exports) return null;
      const constants = !t || i ? exports.currency_id : exports.currency_code;
      return void 0 === constants || "" === constants ? null : constants
    }

    function q(exports, t) {
      return (t ? exports.original_currency_code : exports.original_currency_id) ?? G(exports, t)
    }

    function $(exports) {
      return exports.base_currency_id || null
    }

    function K(exports) {
      if (null === exports || !j(exports)) return !1;
      const t = q(exports);
      return null !== t && t !== G(exports)
    }

    function Y(exports, t) {
      return t && null !== exports && !(0, name.isSpread)(exports.type)
    }

    function Z(exports, t) {
      if (null === exports || !t) return null;
      const i = exports.unit_id;
      return void 0 === i || "" === i ? null : i
    }

    function X(exports, t) {
      return t ? exports.original_unit_id || Z(exports, t) : null
    }

    function J(exports, t) {
      return !(null === exports || !Y(exports, t)) && (void 0 !== exports.original_unit_id && exports.original_unit_id !== exports.unit_id)
    }

    function Q(exports, t) {
      return null !== exports && Y(exports, t) ? exports.unit_conversion_types || null : []
    }

    function ee(exports) {
      return null !== exports && void 0 !== exports.subsessions && exports.subsessions.some((exportstrinflag => "premarket" === exports.id || "postmarket" ===
        exports.id))
    }

    function te(exports) {
      return null !== exports && void 0 !== exports.subsessions && (exports.subsessions.some((exportstrinflag => "regular" === exports.id)) && exports.subsessions
        .some((exportstrinflag => "us_regular" === exports.id)))
    }

    function ie(exports) {
      return null !== exports && void 0 !== exports.subsessions && exports.subsessions.filter((exportstrinflag => !exports.private)).length > 1
    }

    function se(exports, t) {
      return (0, m.extractSymbolNameFromSymbolInfo)(exports, null, !0, !0) || t
    }

    function oe(exports, t) {
      return exports ? exports.ticker ?? exports.pro_name ?? t : t
    }
    const ne = "·";

    function re(exports, t) {
      return fe(exports) ? exports.source2?.description ?? null : null
    }

    function ae(exports, t) {
      const i = ve(exports);
      return t || f ? exports.name : `${exports.name} ${ne} ${i}`
    }

    function le(exports) {
      let t = exports && (function(exports) {
        return (0, name.isFutures)(exports.type) && exports.front_contract || null
      }(exports) || exports.name) || "";
      return t.length > 40 && (t = t.substring(0, 37) + "..."), t.trim()
    }

    function ce(exports) {
      const t = exports ? exports.exchange : "";
      return g ? t.toUpperCase() : t
    }

    function he(exports, t) {
      return null !== exports ? exports.full_name : t
    }

    function de(exports, t) {
      return exports?.pro_name ?? t
    }

    function ue(exports, t) {
      return (0, p.getChartingLibraryGlobalContext)()?.configurationData?.is_tradingview_data ? ["stock", "fund",
        "index", "dr"
      ].includes(t.type) && "regular" === exports || (0, name.isFutures)(t.type) && "us_regular" === exports : "regular" === exports
    }

    function _e(exports) {
      return "c" === exports?.visible_plots_set
    }

    function pe(exports) {
      return null !== exports && ("unit" === exports.measure && null !== me(exports))
    }

    function me(exports) {
      return exports?.value_unit_id ?? null
    }

    function ge(exports) {
      return "ohlcv" === exports.visible_plots_set
    }

    function fe(exports) {
      return null !== exports && (0, name.isEconomicSymbol)(exports.type)
    }

    function ye(exports) {
      return function(exports) {
        return null !== exports && (0, name.isSpread)(exports.type)
      }(exports) && (exports?.legs ?? []).length > 1
    }

    function ve(exports) {
      const t = re(exports);
      if (null !== t) return t;
      return exports.exchange
    }

    function Se(exports) {
      return exports.exchange
    }

    function be(exports) {
      return (0, u.combine)(((t, i) => {
        switch (t) {
          case 4: {
            const t = exports.seriesErrorMessage();
            return null !== t && ("resolution_not_entitled" === t || "custom_resolution" === t ||
                "seconds_not_entitled" === t || "ticks_not_entitled" === t || t.startsWith("study_not_auth:")) ?
              null : {
                type: "invalid_symbol"
              }
          }
          case 13: {
            const t = exports.seriesErrorMessage();
            return null === t ? null : {
              type: "calculations_error",
              errorMessage: t
            }
          }
          case 14: {
            const t = exports.unsupportedResolutionState().value();
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
      }), exports.statusWV().weakReference(), (0, _.createWVFromGetterAndSubscription)((() => !exports.bars().size() && !exports
        .isInReplay().value()), exports.dataEvents().dataUpdated()).ownership())
    }

    function we(exports) {
      return Math.max(0, exports?.delay ?? 0)
    }