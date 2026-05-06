/**
 * Module 87296 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87296: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      compareResolutions: () => seriesBarFunction_m,
      convertResolutionsFromSettings: () => P,
      getApplicableIntervalForFrequency: () => seriesBarFunction_g,
      getCustomResolutions: () => I,
      getMaxResolutionValue: () => T,
      getResolutionByChartStyle: () => seriesBarFunction_b,
      getTranslatedResolution: () => A,
      getTranslatedResolutionModel: () => L,
      intervalIsSupported: () => V,
      isAvailable: () => seriesBarFunction_v,
      isIntervalEnabled: () => B,
      isResolutionMultiplierValid: () => seriesBarFunction_w,
      isSecondsEnabled: () => E,
      mergeResolutions: () => seriesBarFunction_x,
      normalizeIntervalString: () => seriesBarFunction_y,
      setLastUsedResolution: () => S,
      sortResolutions: () => M
    });
    var seriesBarFunction_s = seriesBarFunction_i(87465),
      seriesBarFunction_o = seriesBarFunction_i(11542),
      seriesBarFunction_n = seriesBarFunction_i(46082),
      seriesBarFunction_r = seriesBarFunction_i(95059),
      seriesBarFunction_a = seriesBarFunction_i(1765),
      seriesBarFunction_l = seriesBarFunction_i(29803),
      seriesBarFunction_c = seriesBarFunction_i(53470),
      seriesBarFunction_h = seriesBarFunction_i(37103),
      seriesBarFunction_d = seriesBarFunction_i(15574);
    const seriesBarFunction_u = {
        [seriesBarFunction_n.ResolutionKind.Ticks]: 1,
        [seriesBarFunction_n.ResolutionKind.Seconds]: 60,
        [seriesBarFunction_n.ResolutionKind.Minutes]: 1440,
        [seriesBarFunction_n.SpecialResolutionKind.Hours]: 24,
        [seriesBarFunction_n.ResolutionKind.Days]: 365,
        [seriesBarFunction_n.ResolutionKind.Weeks]: 52,
        [seriesBarFunction_n.ResolutionKind.Months]: 12,
        [seriesBarFunction_n.ResolutionKind.Range]: 1e6,
        [seriesBarFunction_n.ResolutionKind.Invalid]: NaN
      },
      _ = {
        [seriesBarFunction_n.ResolutionKind.Ticks]: 0,
        [seriesBarFunction_n.ResolutionKind.Seconds]: 1,
        [seriesBarFunction_n.ResolutionKind.Minutes]: 2,
        [seriesBarFunction_n.SpecialResolutionKind.Hours]: 3,
        [seriesBarFunction_n.ResolutionKind.Days]: 4,
        [seriesBarFunction_n.ResolutionKind.Weeks]: 5,
        [seriesBarFunction_n.ResolutionKind.Months]: 6,
        [seriesBarFunction_n.ResolutionKind.Range]: 7,
        [seriesBarFunction_n.ResolutionKind.Invalid]: 8
      };

    function seriesBarFunction_p(seriesBarFunction_e) {
      const seriesBarFunction_t = seriesBarFunction_n.Interval.parse(seriesBarFunction_e),
        seriesBarFunction_i = seriesBarFunction_t.multiplier() || 1;
      return seriesBarFunction_t.isMinuteHours() ? [seriesBarFunction_n.SpecialResolutionKind.Hours, seriesBarFunction_i / 60] : [seriesBarFunction_t.kind(), seriesBarFunction_i]
    }

    function seriesBarFunction_m(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_e === seriesBarFunction_t) return 0;
      const [seriesBarFunction_i, seriesBarFunction_s] = seriesBarFunction_p(seriesBarFunction_e), [seriesBarFunction_o, seriesBarFunction_n] = seriesBarFunction_p(seriesBarFunction_t);
      return seriesBarFunction_i !== seriesBarFunction_o ? _[seriesBarFunction_i] - _[seriesBarFunction_o] : seriesBarFunction_s - seriesBarFunction_n
    }

    function seriesBarFunction_g(seriesBarFunction_e, seriesBarFunction_t) {
      return seriesBarFunction_m(seriesBarFunction_t, seriesBarFunction_e) >= 0 ? seriesBarFunction_t : seriesBarFunction_e
    }
    var seriesBarFunction_f;

    function seriesBarFunction_y(seriesBarFunction_e) {
      return seriesBarFunction_n.Interval.parse(seriesBarFunction_e).value()
    }

    function seriesBarFunction_v(seriesBarFunction_e) {
      const seriesBarFunction_t = seriesBarFunction_n.Interval.parse(seriesBarFunction_e);
      if (!E() && seriesBarFunction_t.isSeconds()) return !1;
      if (!(0, seriesBarFunction_d.isTicksEnabled)() && seriesBarFunction_t.isTicks()) return !1;
      const seriesBarFunction_i = seriesBarFunction_t.value(),
        seriesBarFunction_s = seriesBarFunction_l.linking.dataFrequencyResolution.value();
      if (void 0 !== seriesBarFunction_s && seriesBarFunction_m(seriesBarFunction_i, seriesBarFunction_s) < 0) return !1;
      const seriesBarFunction_o = seriesBarFunction_l.linking.supportedResolutions.value();
      return void 0 !== seriesBarFunction_o ? void 0 !== seriesBarFunction_o.find((seriesBarFunction_e => seriesBarFunction_y(seriesBarFunction_e) === seriesBarFunction_i)) : seriesBarFunction_t.isSeconds() ? Boolean(seriesBarFunction_l.linking.seconds.value()) :
        seriesBarFunction_t.isTicks() ? Boolean(seriesBarFunction_l.linking.ticks.value()) : seriesBarFunction_t.isIntraday() ? Boolean(seriesBarFunction_l.linking.intraday.value()) : seriesBarFunction_t
        .isDWM()
    }

    function S(seriesBarFunction_e) {
      seriesBarFunction_n.Interval.isValid(seriesBarFunction_e) && (seriesBarFunction_n.Interval.isRange(seriesBarFunction_e) ? seriesBarFunction_a.setValue("chart.lastUsedRangeResolution", seriesBarFunction_e) : seriesBarFunction_a.setValue(
        "chart.lastUsedTimeBasedResolution", seriesBarFunction_e))
    }

    function seriesBarFunction_b(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
      const seriesBarFunction_s = seriesBarFunction_r.isRangeStyle(seriesBarFunction_e),
        seriesBarFunction_o = seriesBarFunction_n.Interval.isRange(seriesBarFunction_t);
      return !seriesBarFunction_s && seriesBarFunction_o ? function(seriesBarFunction_e) {
        const seriesBarFunction_t = seriesBarFunction_a.getValue("chart.lastUsedTimeBasedResolution");
        if (void 0 !== seriesBarFunction_t && seriesBarFunction_n.Interval.isTimeBased(seriesBarFunction_t)) return seriesBarFunction_t;
        let seriesBarFunction_i = "1D";
        for (const seriesBarFunction_t of seriesBarFunction_e) {
          const seriesBarFunction_e = seriesBarFunction_n.Interval.parse(seriesBarFunction_t);
          if (seriesBarFunction_e.isTimeBased()) {
            const seriesBarFunction_t = seriesBarFunction_e.value();
            if ("1D" === seriesBarFunction_t) return seriesBarFunction_t;
            seriesBarFunction_i = seriesBarFunction_t
          }
        }
        return seriesBarFunction_i
      }(seriesBarFunction_i) : seriesBarFunction_s && !seriesBarFunction_o ? function(seriesBarFunction_e) {
        const seriesBarFunction_t = seriesBarFunction_a.getValue("chart.lastUsedRangeResolution");
        if (void 0 !== seriesBarFunction_t && seriesBarFunction_n.Interval.isRange(seriesBarFunction_t)) return seriesBarFunction_t;
        let seriesBarFunction_i = "100R";
        for (const seriesBarFunction_t of seriesBarFunction_e) {
          const seriesBarFunction_e = seriesBarFunction_n.Interval.parse(seriesBarFunction_t);
          if (seriesBarFunction_e.isRange()) {
            const seriesBarFunction_t = seriesBarFunction_e.value();
            if ("100R" === seriesBarFunction_t) return seriesBarFunction_t;
            seriesBarFunction_i = seriesBarFunction_t
          }
        }
        return seriesBarFunction_i
      }(seriesBarFunction_i) : seriesBarFunction_t
    }

    function seriesBarFunction_w(seriesBarFunction_e) {
      const {
        interval: seriesBarFunction_t,
        guiResolutionKind: seriesBarFunction_i
      } = seriesBarFunction_n.Interval.parseExt(seriesBarFunction_e);
      if (!seriesBarFunction_t.isValid()) return !1;
      const seriesBarFunction_s = seriesBarFunction_t.multiplier();
      if ((0, seriesBarFunction_d.isTicksEnabled)() && seriesBarFunction_i === seriesBarFunction_n.ResolutionKind.Ticks) return !0;
      return (seriesBarFunction_i === seriesBarFunction_n.SpecialResolutionKind.Hours ? seriesBarFunction_s / 60 : seriesBarFunction_s) <= C(seriesBarFunction_i)
    }

    function C(seriesBarFunction_e) {
      const seriesBarFunction_t = seriesBarFunction_u[seriesBarFunction_e];
      return Number.isNaN(seriesBarFunction_t) ? 1 : seriesBarFunction_t
    }

    function T(seriesBarFunction_e) {
      return C(seriesBarFunction_n.Interval.parseExt(seriesBarFunction_e).guiResolutionKind)
    }

    function P(seriesBarFunction_e) {
      return Array.isArray(seriesBarFunction_e) ? seriesBarFunction_e : Object.keys(seriesBarFunction_e).map(seriesBarFunction_n.Interval.normalize).filter(seriesBarFunction_s.notNull)
    }

    function seriesBarFunction_x(...seriesBarFunction_e) {
      let seriesBarFunction_t = [].concat(...seriesBarFunction_e);
      return seriesBarFunction_t = (0, seriesBarFunction_c.uniq)(seriesBarFunction_t.filter(seriesBarFunction_w).map(seriesBarFunction_y)), M(seriesBarFunction_t)
    }

    function M(seriesBarFunction_e) {
      return seriesBarFunction_e.sort(seriesBarFunction_m)
    }

    function I() {
      return []
    }

    function A(seriesBarFunction_e) {
      const {
        multiplier: seriesBarFunction_t,
        shortKind: seriesBarFunction_i
      } = L(seriesBarFunction_e);
      return `${seriesBarFunction_t}${seriesBarFunction_i}`
    }

    function L(seriesBarFunction_e, seriesBarFunction_t) {
      const seriesBarFunction_i = seriesBarFunction_n.Interval.parse(seriesBarFunction_e);
      let seriesBarFunction_s = seriesBarFunction_i.multiplier(),
        seriesBarFunction_o = seriesBarFunction_i.kind();
      if (!seriesBarFunction_i.isValid()) {
        if (seriesBarFunction_t) return null;
        throw new TypeError(`Can'seriesBarFunction_t translate invalid interval: ${seriesBarFunction_e}`)
      }
      return seriesBarFunction_i.isMinuteHours() && (seriesBarFunction_s = Math.floor(seriesBarFunction_s / 60), seriesBarFunction_o = seriesBarFunction_n.SpecialResolutionKind.Hours), {
        multiplier: seriesBarFunction_s.toString(),
        shortKind: seriesBarFunction_k(seriesBarFunction_o),
        hint: `${seriesBarFunction_s} ${seriesBarFunction_k(seriesBarFunction_o,seriesBarFunction_s)}`,
        mayOmitMultiplier: seriesBarFunction_i.isDWM() && 1 === seriesBarFunction_s,
        mayOmitShortKind: seriesBarFunction_i.isMinutes() && !seriesBarFunction_i.isMinuteHours()
      }
    }

    function seriesBarFunction_k(seriesBarFunction_e, seriesBarFunction_t) {
      if (!seriesBarFunction_t) return {
        [seriesBarFunction_n.ResolutionKind.Invalid]: "",
        [seriesBarFunction_n.ResolutionKind.Ticks]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(82901)),
        [seriesBarFunction_n.ResolutionKind.Seconds]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(68823)),
        [seriesBarFunction_n.ResolutionKind.Minutes]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(68430)),
        [seriesBarFunction_n.SpecialResolutionKind.Hours]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(38048)),
        [seriesBarFunction_n.ResolutionKind.Days]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(38691)),
        [seriesBarFunction_n.ResolutionKind.Weeks]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(7408)),
        [seriesBarFunction_n.ResolutionKind.Months]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(77995)),
        [seriesBarFunction_n.ResolutionKind.Range]: seriesBarFunction_o.seriesBarFunction_t(null, {
          context: "interval_short"
        }, seriesBarFunction_i(93934))
      } [seriesBarFunction_e];
      switch (seriesBarFunction_e) {
        case seriesBarFunction_n.ResolutionKind.Ticks:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "ticks",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(11913));
        case seriesBarFunction_n.ResolutionKind.Days:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "days",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(41807));
        case seriesBarFunction_n.ResolutionKind.Weeks:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "weeks",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(48898));
        case seriesBarFunction_n.ResolutionKind.Months:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "months",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(98393));
        case seriesBarFunction_n.ResolutionKind.Seconds:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "seconds",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(33232));
        case seriesBarFunction_n.ResolutionKind.Minutes:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "minutes",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(78318));
        case seriesBarFunction_n.SpecialResolutionKind.Hours:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "hours",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(42328));
        case seriesBarFunction_n.ResolutionKind.Range:
          return seriesBarFunction_o.seriesBarFunction_t(null, {
            plural: "ranges",
            count: seriesBarFunction_t
          }, seriesBarFunction_i(89937));
        default:
          return seriesBarFunction_e
      }
    }

    function E() {
      return seriesBarFunction_h.enabled("seconds_resolution")
    }

    function D(seriesBarFunction_e) {
      return !(!E() && seriesBarFunction_e.isSeconds() || !(0, seriesBarFunction_d.isTicksEnabled)() && seriesBarFunction_e.isTicks()) && !(!(0, seriesBarFunction_d.isTicksEnabled)() && seriesBarFunction_e
        .isTicks())
    }

    function B(seriesBarFunction_e) {
      return D(seriesBarFunction_n.Interval.parse(seriesBarFunction_e))
    }

    function V(seriesBarFunction_e) {
      if (seriesBarFunction_h.enabled("allow_supported_resolutions_set_only")) {
        const seriesBarFunction_t = seriesBarFunction_n.Interval.normalize(seriesBarFunction_e);
        return null !== seriesBarFunction_t && seriesBarFunction_v(seriesBarFunction_t)
      } {
        const seriesBarFunction_t = seriesBarFunction_n.Interval.parse(seriesBarFunction_e);
        if (!seriesBarFunction_t.isValid() || !D(seriesBarFunction_t)) return !1;
        if (!seriesBarFunction_h.enabled("custom_resolutions")) {
          const seriesBarFunction_t = seriesBarFunction_n.Interval.normalize(seriesBarFunction_e),
            seriesBarFunction_i = window.ChartApiInstance.defaultResolutions().filter(B);
          if (!seriesBarFunction_t || -1 === seriesBarFunction_i.indexOf(seriesBarFunction_t)) return !1
        }
        const seriesBarFunction_i = seriesBarFunction_l.linking.dataFrequencyResolution.value();
        if (void 0 !== seriesBarFunction_i && seriesBarFunction_g(seriesBarFunction_i, seriesBarFunction_t.value()) !== seriesBarFunction_t.value()) return !1;
        if (seriesBarFunction_t.isTicks()) return seriesBarFunction_l.linking.ticks.value();
        if (seriesBarFunction_t.isIntraday()) return seriesBarFunction_l.linking.intraday.value();
        {
          const seriesBarFunction_e = seriesBarFunction_l.linking.supportedResolutions.value();
          return !seriesBarFunction_e || seriesBarFunction_e.includes(seriesBarFunction_t.value())
        }
      }
    }! function(seriesBarFunction_e) {
      seriesBarFunction_e.CustomUserResolutionsKey = "IntervalWidget.intervals", seriesBarFunction_e.LastUsedRangeResolutionKey =
        "chart.lastUsedRangeResolution", seriesBarFunction_e.LastUsedTimeBasedResolutionKey = "chart.lastUsedTimeBasedResolution",
        seriesBarFunction_e.DefaultRangeResolution = "100R", seriesBarFunction_e.DefaultTimeBasedResolution = "1D"
    }(seriesBarFunction_f || (seriesBarFunction_f = {}))