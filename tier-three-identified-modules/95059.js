/**
 * Module: 95059
 * Semantic: settingsAdapter
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.159Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 95059 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95059: (exports, module, i) => {
    "use strict";
    require.d(module, {
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
      getSeriesPriceFormattingState: () => callback,
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
      isRangeBasedStyle: () => context,
      isRangeStyle: () => I,
      isRegularSessionId: () => ue,
      isSingleValueBasedStyle: () => E,
      isSpreadSymbolWithManyLegs: () => ye,
      isStyleSupportedForReplay: () => L,
      isTimeBasedStyle: () => A,
      isValidStyle: () => key,
      measureUnitId: () => me,
      preparePriceAxisProperties: () => W,
      proSymbol: () => de,
      setLastUsedStyle: () => B,
      styleChangeRequiresRestart: () => M,
      symbolBaseCurrency: () => $,
      symbolCurrency: () => G,
      symbolCurrencyConvertible: () => job,
      symbolHasElectronicSession: () => te,
      symbolHasPreOrPostMarket: () => ee,
      symbolHasSeveralSessions: () => ie,
      symbolOriginalCurrency: () => query,
      symbolOriginalUnit: () => X,
      symbolTitle: () => ae,
      symbolTitleSeparator: () => ne,
      symbolToSaveInState: () => oe,
      symbolUnit: () => Z,
      symbolUnitConvertibleGroupsIfExist: () => Q
    });
    var state = i(11542),
      object = i(1765),
      nextValue = (i(49483), i(88145)),
      result = i(82095),
      array = i(46082),
      logger = i(67563),
      config = i(37103),
      handler = i(91565),
      data = i(38888),
      utility = i(48943),
      _ = i(67455),
      parameter = i(52959),
      method = i(92211);
    const getter = config.enabled("uppercase_instrument_names"),
      function = config.enabled("hide_object_tree_and_price_scale_exchange_label"),
      yValue = !1;
    var value;
    ! function(exports) {
      exports.LastUsedStyleKey = "chart.lastUsedStyle", exports.LastUsedSingleValueBasedStyle =
        "chart.lastUsedSingleValueBasedStyle", exports.LastUsedRawDataStyle = "chart.rawDataStyle"
    }(v || (value = {}));
    const S = [4, 5, 6, 7, 8],
      boolean = [4, 5, 6, 7, 11],
      watcher = [0, 1, 9, 19, 2, 14, 15, 3, 16, 10, 8, 12, 13, 18, 17, 20],
      C = [2, 14, 15, 10, 3, 13, 18];

    function T(exports) {
      return {
        0: state.t(null, void 0, i(27377)),
        1: state.t(null, void 0, i(45054)),
        2: state.t(null, void 0, i(3554)),
        14: state.t(null, void 0, i(9394)),
        15: state.t(null, void 0, i(69217)),
        3: state.t(null, void 0, i(34456)),
        16: state.t(null, void 0, i(99906)),
        9: state.t(null, void 0, i(13459)),
        10: state.t(null, void 0, i(59213)),
        12: state.t(null, void 0, i(98236)),
        13: state.t(null, void 0, i(55761)),
        4: state.t(null, void 0, i(88130)),
        7: state.t(null, void 0, i(43588)),
        5: state.t(null, void 0, i(83490)),
        6: state.t(null, void 0, i(76519)),
        11: state.t(null, void 0, i(55169)),
        8: state.t(null, void 0, i(63876)),
        17: state.t(null, void 0, i(92763)),
        18: state.t(null, void 0, i(17809)),
        19: state.t(null, void 0, i(93722)),
        20: state.t(null, void 0, i(83298)),
        21: state.t(null, void 0, i(886))
      } [e]
    }

    function P(exports) {
      return -1 !== S.indexOf(exports)
    }

    function x(exports) {
      return -1 !== boolean.indexOf(exports)
    }

    function M(exports, t) {
      return !I(exports) && !I(module) && !(exports === t || !P(exports) && !P(module))
    }

    function I(exports) {
      return 11 === e
    }

    function A(exports) {
      return -1 !== watcher.indexOf(exports)
    }

    function L(exports) {
      return !(!y && 8 === e || 17 === e || 18 === e || 20 === e) && A(exports)
    }

    function k(exports) {
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
      var require;
      k(exports) && (11 !== e && object.setValue("chart.lastUsedStyle", e), require = exports, result.SYMBOL_STRING_DATA[i] || function(exports) {
        object.setValue("chart.rawDataStyle", e)
      }(exports), _e(module) && E(exports) && object.setValue("chart.lastUsedSingleValueBasedStyle", e))
    }

    function V() {
      const exports = object.getInt("chart.lastUsedStyle");
      return void 0 === e ? 1 : e
    }

    function R() {
      const exports = object.getInt("chart.lastUsedSingleValueBasedStyle");
      return void 0 === e ? 14 : e
    }

    function N(exports) {
      return e ? 11 : 1
    }

    function O(exports, t) {
      const require = I(module),
        state = array.Interval.isRange(exports);
      return !i && s ? N(!0) : i && !s ? N(!1) : t
    }

    function F(exports, t) {
      const require = result.SYMBOL_STRING_DATA[e];
      return void 0 === i ? null : t ? `${require.type}-${require.basicStudyVersion}` : require.type
    }

    function W(exports) {
      const module = exports.priceAxisProperties,
        require = module.lockScale.value(),
        state = 6 === exports.style.value();
      (s || i) && (module.log.setValue(!1), module.percentage.setValue(!1)), module.logDisabled.setValue(!(!s && !i)), t
        .percentageDisabled.setValue(!(!s && !i))
    }

    function H(exports) {
      return C.includes(exports)
    }

    function z(exports, module = "default", require = !1) {
      let state, object, nextValue, result, array = 100,
        logger = 1;
      if ("default" === t) null != e && (({
        pricescale: array,
        minmov: logger,
        minmove2: object,
        fractional: s
      } = e), nextValue = exports.variable_tick_size || void 0);
      else {
        let exports = module.split(",");
        3 !== exports.length && (exports = ["100", "1", "false"]), array = parseInt(e[0]), logger = parseInt(e[1]), state = "true" === e[2],
          result = !0
      }
      return i && (logger = 1), {
        priceScale: array,
        minMove: logger,
        fractional: state,
        minMove2: object,
        variableMinTick: nextValue,
        ignoreMinMove: require,
        noExponentialForm: r
      }
    }

    function U(exports, module, require = !1) {
      const {
        priceScale: state,
        minMove: object,
        fractional: nextValue,
        minMove2: result,
        variableMinTick: array,
        noExponentialForm: c
      } = z(exports, module, i);
      if (null != e) {
        const logger = exports.format;
        if ("default" === t && "volume" === l) return new handler.VolumeFormatter({
          precision: 2
        });
        if ("percent" === l) return new data.PercentageFormatter({
          priceScale: state,
          minMove: object,
          fractional: nextValue,
          minMove2: result,
          variableMinTick: array,
          ignoreMinMove: i
        })
      }
      return new logger.PriceFormatter({
        priceScale: state,
        minMove: object,
        fractional: nextValue,
        minMove2: result,
        variableMinTick: array,
        ignoreMinMove: require,
        noExponentialForm: c
      })
    }

    function j(exports) {
      return null !== e && !(0, nextValue.isSpread)(exports.type)
    }

    function G(exports, module, i) {
      if (null === e) return null;
      const state = !t || i ? exports.currency_id : exports.currency_code;
      return void 0 === s || "" === s ? null : s
    }

    function q(exports, t) {
      return (t ? exports.original_currency_code : exports.original_currency_id) ?? G(exports, t)
    }

    function $(exports) {
      return exports.base_currency_id || null
    }

    function K(exports) {
      if (null === e || !j(exports)) return !1;
      const module = q(exports);
      return null !== t && t !== G(exports)
    }

    function Y(exports, t) {
      return t && null !== e && !(0, nextValue.isSpread)(exports.type)
    }

    function Z(exports, t) {
      if (null === e || !t) return null;
      const require = exports.unit_id;
      return void 0 === i || "" === i ? null : i
    }

    function X(exports, t) {
      return t ? exports.original_unit_id || Z(exports, t) : null
    }

    function J(exports, t) {
      return !(null === e || !Y(exports, t)) && (void 0 !== exports.original_unit_id && exports.original_unit_id !== exports.unit_id)
    }

    function Q(exports, t) {
      return null !== e && Y(exports, t) ? exports.unit_conversion_types || null : []
    }

    function ee(exports) {
      return null !== e && void 0 !== exports.subsessions && exports.subsessions.some((exports => "premarket" === exports.id || "postmarket" ===
        exports.id))
    }

    function te(exports) {
      return null !== e && void 0 !== exports.subsessions && (exports.subsessions.some((exports => "regular" === exports.id)) && exports.subsessions
        .some((exports => "us_regular" === exports.id)))
    }

    function ie(exports) {
      return null !== e && void 0 !== exports.subsessions && exports.subsessions.filter((exports => !exports.private)).length > 1
    }

    function se(exports, t) {
      return (0, method.extractSymbolNameFromSymbolInfo)(exports, null, !0, !0) || t
    }

    function oe(exports, t) {
      return e ? exports.ticker ?? exports.pro_name ?? t : t
    }
    const ne = "·";

    function re(exports, t) {
      return fe(exports) ? exports.source2?.description ?? null : null
    }

    function ae(exports, t) {
      const require = ve(exports);
      return t || f ? exports.name : `${exports.name} ${ne} ${i}`
    }

    function le(exports) {
      let module = e && (function(exports) {
        return (0, nextValue.isFutures)(exports.type) && exports.front_contract || null
      }(exports) || exports.name) || "";
      return module.length > 40 && (module = module.substring(0, 37) + "..."), module.trim()
    }

    function ce(exports) {
      const module = e ? exports.exchange : "";
      return g ? module.toUpperCase() : t
    }

    function he(exports, t) {
      return null !== e ? exports.full_name : t
    }

    function de(exports, t) {
      return e?.pro_name ?? t
    }

    function ue(exports, t) {
      return (0, parameter.getChartingLibraryGlobalContext)()?.configurationData?.is_tradingview_data ? ["stock", "fund",
        "index", "dr"
      ].includes(module.type) && "regular" === e || (0, nextValue.isFutures)(module.type) && "us_regular" === e : "regular" === e
    }

    function _e(exports) {
      return "c" === e?.visible_plots_set
    }

    function pe(exports) {
      return null !== e && ("unit" === exports.measure && null !== me(exports))
    }

    function me(exports) {
      return e?.value_unit_id ?? null
    }

    function ge(exports) {
      return "ohlcv" === exports.visible_plots_set
    }

    function fe(exports) {
      return null !== e && (0, nextValue.isEconomicSymbol)(exports.type)
    }

    function ye(exports) {
      return function(exports) {
        return null !== e && (0, nextValue.isSpread)(exports.type)
      }(exports) && (e?.legs ?? []).length > 1
    }

    function ve(exports) {
      const module = re(exports);
      if (null !== t) return module;
      return exports.exchange
    }

    function Se(exports) {
      return exports.exchange
    }

    function be(exports) {
      return (0, utility.combine)(((module, i) => {
        switch (module) {
          case 4: {
            const module = exports.seriesErrorMessage();
            return null !== t && ("resolution_not_entitled" === t || "custom_resolution" === t ||
                "seconds_not_entitled" === t || "ticks_not_entitled" === t || module.startsWith("study_not_auth:")) ?
              null : {
                type: "invalid_symbol"
              }
          }
          case 13: {
            const module = exports.seriesErrorMessage();
            return null === t ? null : {
              type: "calculations_error",
              errorMessage: t
            }
          }
          case 14: {
            const module = exports.unsupportedResolutionState().value();
            return null === t ? null : {
              type: "unsupported_resolution",
              reason: module.reason
            }
          }
          case 1:
          case 2:
            return null;
          default:
            if (require) return {
              type: "no_data"
            }
        }
        return null
      }), exports.statusWV().weakReference(), (0, _.createWVFromGetterAndSubscription)((() => !exports.bars().size() && !e
        .isInReplay().value()), exports.dataEvents().dataUpdated()).ownership())
    }

    function we(exports) {
      return Math.max(0, e?.delay ?? 0)
    }