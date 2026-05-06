/**
 * Module 95059 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

95059: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
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
      getSeriesPriceFormattingState: () => watchedValue_z,
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
      isRangeBasedStyle: () => watchedValue_x,
      isRangeStyle: () => I,
      isRegularSessionId: () => ue,
      isSingleValueBasedStyle: () => E,
      isSpreadSymbolWithManyLegs: () => ye,
      isStyleSupportedForReplay: () => L,
      isTimeBasedStyle: () => A,
      isValidStyle: () => watchedValue_k,
      measureUnitId: () => me,
      preparePriceAxisProperties: () => W,
      proSymbol: () => de,
      setLastUsedStyle: () => B,
      styleChangeRequiresRestart: () => M,
      symbolBaseCurrency: () => $,
      symbolCurrency: () => G,
      symbolCurrencyConvertible: () => watchedValue_j,
      symbolHasElectronicSession: () => te,
      symbolHasPreOrPostMarket: () => ee,
      symbolHasSeveralSessions: () => ie,
      symbolOriginalCurrency: () => watchedValue_q,
      symbolOriginalUnit: () => X,
      symbolTitle: () => ae,
      symbolTitleSeparator: () => ne,
      symbolToSaveInState: () => oe,
      symbolUnit: () => Z,
      symbolUnitConvertibleGroupsIfExist: () => Q
    });
    var watchedValue_s = watchedValue_i(11542),
      watchedValue_o = watchedValue_i(1765),
      watchedValue_n = (watchedValue_i(49483), watchedValue_i(88145)),
      watchedValue_r = watchedValue_i(82095),
      watchedValue_a = watchedValue_i(46082),
      watchedValue_l = watchedValue_i(67563),
      watchedValue_c = watchedValue_i(37103),
      watchedValue_h = watchedValue_i(91565),
      watchedValue_d = watchedValue_i(38888),
      watchedValue_u = watchedValue_i(48943),
      _ = watchedValue_i(67455),
      watchedValue_p = watchedValue_i(52959),
      watchedValue_m = watchedValue_i(92211);
    const watchedValue_g = watchedValue_c.enabled("uppercase_instrument_names"),
      watchedValue_f = watchedValue_c.enabled("hide_object_tree_and_price_scale_exchange_label"),
      watchedValue_y = !1;
    var watchedValue_v;
    ! function(watchedValue_e) {
      watchedValue_e.LastUsedStyleKey = "chart.lastUsedStyle", watchedValue_e.LastUsedSingleValueBasedStyle =
        "chart.lastUsedSingleValueBasedStyle", watchedValue_e.LastUsedRawDataStyle = "chart.rawDataStyle"
    }(watchedValue_v || (watchedValue_v = {}));
    const S = [4, 5, 6, 7, 8],
      watchedValue_b = [4, 5, 6, 7, 11],
      watchedValue_w = [0, 1, 9, 19, 2, 14, 15, 3, 16, 10, 8, 12, 13, 18, 17, 20],
      C = [2, 14, 15, 10, 3, 13, 18];

    function T(watchedValue_e) {
      return {
        0: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(27377)),
        1: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(45054)),
        2: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(3554)),
        14: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(9394)),
        15: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(69217)),
        3: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(34456)),
        16: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(99906)),
        9: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(13459)),
        10: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(59213)),
        12: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(98236)),
        13: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(55761)),
        4: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(88130)),
        7: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(43588)),
        5: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(83490)),
        6: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(76519)),
        11: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(55169)),
        8: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(63876)),
        17: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(92763)),
        18: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(17809)),
        19: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(93722)),
        20: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(83298)),
        21: watchedValue_s.watchedValue_t(null, void 0, watchedValue_i(886))
      } [watchedValue_e]
    }

    function P(watchedValue_e) {
      return -1 !== S.indexOf(watchedValue_e)
    }

    function watchedValue_x(watchedValue_e) {
      return -1 !== watchedValue_b.indexOf(watchedValue_e)
    }

    function M(watchedValue_e, watchedValue_t) {
      return !I(watchedValue_e) && !I(watchedValue_t) && !(watchedValue_e === watchedValue_t || !P(watchedValue_e) && !P(watchedValue_t))
    }

    function I(watchedValue_e) {
      return 11 === watchedValue_e
    }

    function A(watchedValue_e) {
      return -1 !== watchedValue_w.indexOf(watchedValue_e)
    }

    function L(watchedValue_e) {
      return !(!watchedValue_y && 8 === watchedValue_e || 17 === watchedValue_e || 18 === watchedValue_e || 20 === watchedValue_e) && A(watchedValue_e)
    }

    function watchedValue_k(watchedValue_e) {
      return watchedValue_x(watchedValue_e) || A(watchedValue_e)
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

    function B(watchedValue_e, watchedValue_t) {
      var watchedValue_i;
      watchedValue_k(watchedValue_e) && (11 !== watchedValue_e && watchedValue_o.setValue("chart.lastUsedStyle", watchedValue_e), watchedValue_i = watchedValue_e, watchedValue_r.SYMBOL_STRING_DATA[watchedValue_i] || function(watchedValue_e) {
        watchedValue_o.setValue("chart.rawDataStyle", watchedValue_e)
      }(watchedValue_e), _e(watchedValue_t) && E(watchedValue_e) && watchedValue_o.setValue("chart.lastUsedSingleValueBasedStyle", watchedValue_e))
    }

    function V() {
      const watchedValue_e = watchedValue_o.getInt("chart.lastUsedStyle");
      return void 0 === watchedValue_e ? 1 : watchedValue_e
    }

    function R() {
      const watchedValue_e = watchedValue_o.getInt("chart.lastUsedSingleValueBasedStyle");
      return void 0 === watchedValue_e ? 14 : watchedValue_e
    }

    function N(watchedValue_e) {
      return watchedValue_e ? 11 : 1
    }

    function O(watchedValue_e, watchedValue_t) {
      const watchedValue_i = I(watchedValue_t),
        watchedValue_s = watchedValue_a.Interval.isRange(watchedValue_e);
      return !watchedValue_i && watchedValue_s ? N(!0) : watchedValue_i && !watchedValue_s ? N(!1) : watchedValue_t
    }

    function F(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_r.SYMBOL_STRING_DATA[watchedValue_e];
      return void 0 === watchedValue_i ? null : watchedValue_t ? `${watchedValue_i.type}-${watchedValue_i.basicStudyVersion}` : watchedValue_i.type
    }

    function W(watchedValue_e) {
      const watchedValue_t = watchedValue_e.priceAxisProperties,
        watchedValue_i = watchedValue_t.lockScale.value(),
        watchedValue_s = 6 === watchedValue_e.style.value();
      (watchedValue_s || watchedValue_i) && (watchedValue_t.log.setValue(!1), watchedValue_t.percentage.setValue(!1)), watchedValue_t.logDisabled.setValue(!(!watchedValue_s && !watchedValue_i)), watchedValue_t
        .percentageDisabled.setValue(!(!watchedValue_s && !watchedValue_i))
    }

    function H(watchedValue_e) {
      return C.includes(watchedValue_e)
    }

    function watchedValue_z(watchedValue_e, watchedValue_t = "default", watchedValue_i = !1) {
      let watchedValue_s, watchedValue_o, watchedValue_n, watchedValue_r, watchedValue_a = 100,
        watchedValue_l = 1;
      if ("default" === watchedValue_t) null != watchedValue_e && (({
        pricescale: watchedValue_a,
        minmov: watchedValue_l,
        minmove2: watchedValue_o,
        fractional: watchedValue_s
      } = watchedValue_e), watchedValue_n = watchedValue_e.variable_tick_size || void 0);
      else {
        let watchedValue_e = watchedValue_t.split(",");
        3 !== watchedValue_e.length && (watchedValue_e = ["100", "1", "false"]), watchedValue_a = parseInt(watchedValue_e[0]), watchedValue_l = parseInt(watchedValue_e[1]), watchedValue_s = "true" === watchedValue_e[2],
          watchedValue_r = !0
      }
      return watchedValue_i && (watchedValue_l = 1), {
        priceScale: watchedValue_a,
        minMove: watchedValue_l,
        fractional: watchedValue_s,
        minMove2: watchedValue_o,
        variableMinTick: watchedValue_n,
        ignoreMinMove: watchedValue_i,
        noExponentialForm: watchedValue_r
      }
    }

    function U(watchedValue_e, watchedValue_t, watchedValue_i = !1) {
      const {
        priceScale: watchedValue_s,
        minMove: watchedValue_o,
        fractional: watchedValue_n,
        minMove2: watchedValue_r,
        variableMinTick: watchedValue_a,
        noExponentialForm: watchedValue_c
      } = watchedValue_z(watchedValue_e, watchedValue_t, watchedValue_i);
      if (null != watchedValue_e) {
        const watchedValue_l = watchedValue_e.format;
        if ("default" === watchedValue_t && "volume" === watchedValue_l) return new watchedValue_h.VolumeFormatter({
          precision: 2
        });
        if ("percent" === watchedValue_l) return new watchedValue_d.PercentageFormatter({
          priceScale: watchedValue_s,
          minMove: watchedValue_o,
          fractional: watchedValue_n,
          minMove2: watchedValue_r,
          variableMinTick: watchedValue_a,
          ignoreMinMove: watchedValue_i
        })
      }
      return new watchedValue_l.PriceFormatter({
        priceScale: watchedValue_s,
        minMove: watchedValue_o,
        fractional: watchedValue_n,
        minMove2: watchedValue_r,
        variableMinTick: watchedValue_a,
        ignoreMinMove: watchedValue_i,
        noExponentialForm: watchedValue_c
      })
    }

    function watchedValue_j(watchedValue_e) {
      return null !== watchedValue_e && !(0, watchedValue_n.isSpread)(watchedValue_e.type)
    }

    function G(watchedValue_e, watchedValue_t, watchedValue_i) {
      if (null === watchedValue_e) return null;
      const watchedValue_s = !watchedValue_t || watchedValue_i ? watchedValue_e.currency_id : watchedValue_e.currency_code;
      return void 0 === watchedValue_s || "" === watchedValue_s ? null : watchedValue_s
    }

    function watchedValue_q(watchedValue_e, watchedValue_t) {
      return (watchedValue_t ? watchedValue_e.original_currency_code : watchedValue_e.original_currency_id) ?? G(watchedValue_e, watchedValue_t)
    }

    function $(watchedValue_e) {
      return watchedValue_e.base_currency_id || null
    }

    function K(watchedValue_e) {
      if (null === watchedValue_e || !watchedValue_j(watchedValue_e)) return !1;
      const watchedValue_t = watchedValue_q(watchedValue_e);
      return null !== watchedValue_t && watchedValue_t !== G(watchedValue_e)
    }

    function Y(watchedValue_e, watchedValue_t) {
      return watchedValue_t && null !== watchedValue_e && !(0, watchedValue_n.isSpread)(watchedValue_e.type)
    }

    function Z(watchedValue_e, watchedValue_t) {
      if (null === watchedValue_e || !watchedValue_t) return null;
      const watchedValue_i = watchedValue_e.unit_id;
      return void 0 === watchedValue_i || "" === watchedValue_i ? null : watchedValue_i
    }

    function X(watchedValue_e, watchedValue_t) {
      return watchedValue_t ? watchedValue_e.original_unit_id || Z(watchedValue_e, watchedValue_t) : null
    }

    function J(watchedValue_e, watchedValue_t) {
      return !(null === watchedValue_e || !Y(watchedValue_e, watchedValue_t)) && (void 0 !== watchedValue_e.original_unit_id && watchedValue_e.original_unit_id !== watchedValue_e.unit_id)
    }

    function Q(watchedValue_e, watchedValue_t) {
      return null !== watchedValue_e && Y(watchedValue_e, watchedValue_t) ? watchedValue_e.unit_conversion_types || null : []
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

    function se(watchedValue_e, watchedValue_t) {
      return (0, watchedValue_m.extractSymbolNameFromSymbolInfo)(watchedValue_e, null, !0, !0) || watchedValue_t
    }

    function oe(watchedValue_e, watchedValue_t) {
      return watchedValue_e ? watchedValue_e.ticker ?? watchedValue_e.pro_name ?? watchedValue_t : watchedValue_t
    }
    const ne = "·";

    function re(watchedValue_e, watchedValue_t) {
      return fe(watchedValue_e) ? watchedValue_e.source2?.description ?? null : null
    }

    function ae(watchedValue_e, watchedValue_t) {
      const watchedValue_i = ve(watchedValue_e);
      return watchedValue_t || watchedValue_f ? watchedValue_e.name : `${watchedValue_e.name} ${ne} ${watchedValue_i}`
    }

    function le(watchedValue_e) {
      let watchedValue_t = watchedValue_e && (function(watchedValue_e) {
        return (0, watchedValue_n.isFutures)(watchedValue_e.type) && watchedValue_e.front_contract || null
      }(watchedValue_e) || watchedValue_e.name) || "";
      return watchedValue_t.length > 40 && (watchedValue_t = watchedValue_t.substring(0, 37) + "..."), watchedValue_t.trim()
    }

    function ce(watchedValue_e) {
      const watchedValue_t = watchedValue_e ? watchedValue_e.exchange : "";
      return watchedValue_g ? watchedValue_t.toUpperCase() : watchedValue_t
    }

    function he(watchedValue_e, watchedValue_t) {
      return null !== watchedValue_e ? watchedValue_e.full_name : watchedValue_t
    }

    function de(watchedValue_e, watchedValue_t) {
      return watchedValue_e?.pro_name ?? watchedValue_t
    }

    function ue(watchedValue_e, watchedValue_t) {
      return (0, watchedValue_p.getChartingLibraryGlobalContext)()?.configurationData?.is_tradingview_data ? ["stock", "fund",
        "index", "dr"
      ].includes(watchedValue_t.type) && "regular" === watchedValue_e || (0, watchedValue_n.isFutures)(watchedValue_t.type) && "us_regular" === watchedValue_e : "regular" === watchedValue_e
    }

    function _e(watchedValue_e) {
      return "watchedValue_c" === watchedValue_e?.visible_plots_set
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
      const watchedValue_t = re(watchedValue_e);
      if (null !== watchedValue_t) return watchedValue_t;
      return watchedValue_e.exchange
    }

    function Se(watchedValue_e) {
      return watchedValue_e.exchange
    }

    function be(watchedValue_e) {
      return (0, watchedValue_u.combine)(((watchedValue_t, watchedValue_i) => {
        switch (watchedValue_t) {
          case 4: {
            const watchedValue_t = watchedValue_e.seriesErrorMessage();
            return null !== watchedValue_t && ("resolution_not_entitled" === watchedValue_t || "custom_resolution" === watchedValue_t ||
                "seconds_not_entitled" === watchedValue_t || "ticks_not_entitled" === watchedValue_t || watchedValue_t.startsWith("study_not_auth:")) ?
              null : {
                type: "invalid_symbol"
              }
          }
          case 13: {
            const watchedValue_t = watchedValue_e.seriesErrorMessage();
            return null === watchedValue_t ? null : {
              type: "calculations_error",
              errorMessage: watchedValue_t
            }
          }
          case 14: {
            const watchedValue_t = watchedValue_e.unsupportedResolutionState().value();
            return null === watchedValue_t ? null : {
              type: "unsupported_resolution",
              reason: watchedValue_t.reason
            }
          }
          case 1:
          case 2:
            return null;
          default:
            if (watchedValue_i) return {
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