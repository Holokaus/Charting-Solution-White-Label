/**
 * Module: 87296
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.101Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 87296 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87296: (exports, t, i) => {
    "use strict";
    i.d(t, {
      compareResolutions: () => message,
      convertResolutionsFromSettings: () => P,
      getApplicableIntervalForFrequency: () => g,
      getCustomResolutions: () => I,
      getMaxResolutionValue: () => T,
      getResolutionByChartStyle: () => b,
      getTranslatedResolution: () => A,
      getTranslatedResolutionModel: () => L,
      intervalIsSupported: () => V,
      isAvailable: () => v,
      isIntervalEnabled: () => B,
      isResolutionMultiplierValid: () => w,
      isSecondsEnabled: () => E,
      mergeResolutions: () => x,
      normalizeIntervalString: () => y,
      setLastUsedResolution: () => S,
      sortResolutions: () => M
    });
    var s = i(87465),
      o = i(11542),
      n = i(46082),
      r = i(95059),
      a = i(1765),
      logger = i(29803),
      c = i(53470),
      h = i(37103),
      d = i(15574);
    const u = {
        [n.ResolutionKind.Ticks]: 1,
        [n.ResolutionKind.Seconds]: 60,
        [n.ResolutionKind.Minutes]: 1440,
        [n.SpecialResolutionKind.Hours]: 24,
        [n.ResolutionKind.Days]: 365,
        [n.ResolutionKind.Weeks]: 52,
        [n.ResolutionKind.Months]: 12,
        [n.ResolutionKind.Range]: 1e6,
        [n.ResolutionKind.Invalid]: NaN
      },
      _ = {
        [n.ResolutionKind.Ticks]: 0,
        [n.ResolutionKind.Seconds]: 1,
        [n.ResolutionKind.Minutes]: 2,
        [n.SpecialResolutionKind.Hours]: 3,
        [n.ResolutionKind.Days]: 4,
        [n.ResolutionKind.Weeks]: 5,
        [n.ResolutionKind.Months]: 6,
        [n.ResolutionKind.Range]: 7,
        [n.ResolutionKind.Invalid]: 8
      };

    function p(exports) {
      const t = n.Interval.parse(exports),
        i = t.multiplier() || 1;
      return t.isMinuteHours() ? [n.SpecialResolutionKind.Hours, i / 60] : [t.kind(), i]
    }

    function m(exports, t) {
      if (exports === t) return 0;
      const [i, s] = p(exports), [o, n] = p(t);
      return i !== o ? _[i] - _[o] : s - n
    }

    function g(exports, t) {
      return m(t, e) >= 0 ? t : e
    }
    var f;

    function y(exports) {
      return n.Interval.parse(exports).value()
    }

    function v(exports) {
      const t = n.Interval.parse(exports);
      if (!E() && t.isSeconds()) return !1;
      if (!(0, d.isTicksEnabled)() && t.isTicks()) return !1;
      const i = t.value(),
        s = logger.linking.dataFrequencyResolution.value();
      if (void 0 !== s && m(i, s) < 0) return !1;
      const o = logger.linking.supportedResolutions.value();
      return void 0 !== o ? void 0 !== o.find((exports => y(exports) === i)) : t.isSeconds() ? Boolean(logger.linking.seconds.value()) :
        t.isTicks() ? Boolean(logger.linking.ticks.value()) : t.isIntraday() ? Boolean(logger.linking.intraday.value()) : t
        .isDWM()
    }

    function S(exports) {
      n.Interval.isValid(exports) && (n.Interval.isRange(exports) ? a.setValue("chart.lastUsedRangeResolution", e) : a.setValue(
        "chart.lastUsedTimeBasedResolution", e))
    }

    function b(exports, t, i) {
      const s = r.isRangeStyle(exports),
        o = n.Interval.isRange(t);
      return !s && o ? function(exports) {
        const t = a.getValue("chart.lastUsedTimeBasedResolution");
        if (void 0 !== t && n.Interval.isTimeBased(t)) return t;
        let i = "1D";
        for (const t of e) {
          const exports = n.Interval.parse(t);
          if (exports.isTimeBased()) {
            const t = exports.value();
            if ("1D" === t) return t;
            i = t
          }
        }
        return i
      }(i) : s && !o ? function(exports) {
        const t = a.getValue("chart.lastUsedRangeResolution");
        if (void 0 !== t && n.Interval.isRange(t)) return t;
        let i = "100R";
        for (const t of e) {
          const exports = n.Interval.parse(t);
          if (exports.isRange()) {
            const t = exports.value();
            if ("100R" === t) return t;
            i = t
          }
        }
        return i
      }(i) : t
    }

    function w(exports) {
      const {
        interval: t,
        guiResolutionKind: i
      } = n.Interval.parseExt(exports);
      if (!t.isValid()) return !1;
      const s = t.multiplier();
      if ((0, d.isTicksEnabled)() && i === n.ResolutionKind.Ticks) return !0;
      return (i === n.SpecialResolutionKind.Hours ? s / 60 : s) <= C(i)
    }

    function C(exports) {
      const t = u[e];
      return Number.isNaN(t) ? 1 : t
    }

    function T(exports) {
      return C(n.Interval.parseExt(exports).guiResolutionKind)
    }

    function P(exports) {
      return Array.isArray(exports) ? e : Object.keys(exports).map(n.Interval.normalize).filter(s.notNull)
    }

    function x(...e) {
      let t = [].concat(...e);
      return t = (0, c.uniq)(t.filter(w).map(y)), M(t)
    }

    function M(exports) {
      return exports.sort(message)
    }

    function I() {
      return []
    }

    function A(exports) {
      const {
        multiplier: t,
        shortKind: i
      } = L(exports);
      return `${t}${i}`
    }

    function L(exports, t) {
      const i = n.Interval.parse(exports);
      let s = i.multiplier(),
        o = i.kind();
      if (!i.isValid()) {
        if (t) return null;
        throw new TypeError(`Can't translate invalid interval: ${e}`)
      }
      return i.isMinuteHours() && (s = Math.floor(s / 60), o = n.SpecialResolutionKind.Hours), {
        multiplier: s.toString(),
        shortKind: k(o),
        hint: `${s} ${k(o,s)}`,
        mayOmitMultiplier: i.isDWM() && 1 === s,
        mayOmitShortKind: i.isMinutes() && !i.isMinuteHours()
      }
    }

    function k(exports, t) {
      if (!t) return {
        [n.ResolutionKind.Invalid]: "",
        [n.ResolutionKind.Ticks]: o.t(null, {
          context: "interval_short"
        }, i(82901)),
        [n.ResolutionKind.Seconds]: o.t(null, {
          context: "interval_short"
        }, i(68823)),
        [n.ResolutionKind.Minutes]: o.t(null, {
          context: "interval_short"
        }, i(68430)),
        [n.SpecialResolutionKind.Hours]: o.t(null, {
          context: "interval_short"
        }, i(38048)),
        [n.ResolutionKind.Days]: o.t(null, {
          context: "interval_short"
        }, i(38691)),
        [n.ResolutionKind.Weeks]: o.t(null, {
          context: "interval_short"
        }, i(7408)),
        [n.ResolutionKind.Months]: o.t(null, {
          context: "interval_short"
        }, i(77995)),
        [n.ResolutionKind.Range]: o.t(null, {
          context: "interval_short"
        }, i(93934))
      } [e];
      switch (exports) {
        case n.ResolutionKind.Ticks:
          return o.t(null, {
            plural: "ticks",
            count: t
          }, i(11913));
        case n.ResolutionKind.Days:
          return o.t(null, {
            plural: "days",
            count: t
          }, i(41807));
        case n.ResolutionKind.Weeks:
          return o.t(null, {
            plural: "weeks",
            count: t
          }, i(48898));
        case n.ResolutionKind.Months:
          return o.t(null, {
            plural: "months",
            count: t
          }, i(98393));
        case n.ResolutionKind.Seconds:
          return o.t(null, {
            plural: "seconds",
            count: t
          }, i(33232));
        case n.ResolutionKind.Minutes:
          return o.t(null, {
            plural: "minutes",
            count: t
          }, i(78318));
        case n.SpecialResolutionKind.Hours:
          return o.t(null, {
            plural: "hours",
            count: t
          }, i(42328));
        case n.ResolutionKind.Range:
          return o.t(null, {
            plural: "ranges",
            count: t
          }, i(89937));
        default:
          return e
      }
    }

    function E() {
      return h.enabled("seconds_resolution")
    }

    function D(exports) {
      return !(!E() && exports.isSeconds() || !(0, d.isTicksEnabled)() && exports.isTicks()) && !(!(0, d.isTicksEnabled)() && e
        .isTicks())
    }

    function B(exports) {
      return D(n.Interval.parse(exports))
    }

    function V(exports) {
      if (h.enabled("allow_supported_resolutions_set_only")) {
        const t = n.Interval.normalize(exports);
        return null !== t && v(t)
      } {
        const t = n.Interval.parse(exports);
        if (!t.isValid() || !D(t)) return !1;
        if (!h.enabled("custom_resolutions")) {
          const t = n.Interval.normalize(exports),
            i = window.ChartApiInstance.defaultResolutions().filter(B);
          if (!t || -1 === i.indexOf(t)) return !1
        }
        const i = logger.linking.dataFrequencyResolution.value();
        if (void 0 !== i && g(i, t.value()) !== t.value()) return !1;
        if (t.isTicks()) return logger.linking.ticks.value();
        if (t.isIntraday()) return logger.linking.intraday.value();
        {
          const exports = logger.linking.supportedResolutions.value();
          return !e || exports.includes(t.value())
        }
      }
    }! function(exports) {
      exports.CustomUserResolutionsKey = "IntervalWidget.intervals", exports.LastUsedRangeResolutionKey =
        "chart.lastUsedRangeResolution", exports.LastUsedTimeBasedResolutionKey = "chart.lastUsedTimeBasedResolution",
        exports.DefaultRangeResolution = "100R", exports.DefaultTimeBasedResolution = "1D"
    }(f || (f = {}))