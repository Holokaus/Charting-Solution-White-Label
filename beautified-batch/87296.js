/**
 * Module 87296 - Auto-beautified from TradingView webpack bundle
 *
 * @module 87296
 * @date 2026-04-23
 * @size 6188 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 7408, 11542, 11913, 15574, 29803, 33232, 37103, 38048, 38691, 41807, 42328, 46082, 48898, 53470, 68430, 68823, 77995, 78318, 82901, 87465, 89937, 93934, 95059, 98393
 *
 * Exports:
 *   - compareResolutions (internal: m)
 *   - convertResolutionsFromSettings (internal: P)
 *   - getApplicableIntervalForFrequency (internal: g)
 *   - getCustomResolutions (internal: I)
 *   - getMaxResolutionValue (internal: T)
 *   - getResolutionByChartStyle (internal: b)
 *   - getTranslatedResolution (internal: A)
 *   - getTranslatedResolutionModel (internal: L)
 *   - intervalIsSupported (internal: V)
 *   - isAvailable (internal: v)
 *   - isIntervalEnabled (internal: B)
 *   - isResolutionMultiplierValid (internal: w)
 *   - isSecondsEnabled (internal: E)
 *   - mergeResolutions (internal: x)
 *   - normalizeIntervalString (internal: y)
 *   - setLastUsedResolution (internal: S)
 *   - sortResolutions (internal: M)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

87296: (e, t, i) => {
    "use strict";
    i.d(t, {
      compareResolutions: () => m,
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
      l = i(29803),
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

    function p(e) {
      const t = n.Interval.parse(e),
        i = t.multiplier() || 1;
      return t.isMinuteHours() ? [n.SpecialResolutionKind.Hours, i / 60] : [t.kind(), i]
    }

    function m(e, t) {
      if (e === t) return 0;
      const [i, s] = p(e), [o, n] = p(t);
      return i !== o ? _[i] - _[o] : s - n
    }

    function g(e, t) {
      return m(t, e) >= 0 ? t : e
    }
    var f;

    function y(e) {
      return n.Interval.parse(e).value()
    }

    function v(e) {
      const t = n.Interval.parse(e);
      if (!E() && t.isSeconds()) return !1;
      if (!(0, d.isTicksEnabled)() && t.isTicks()) return !1;
      const i = t.value(),
        s = l.linking.dataFrequencyResolution.value();
      if (void 0 !== s && m(i, s) < 0) return !1;
      const o = l.linking.supportedResolutions.value();
      return void 0 !== o ? void 0 !== o.find((e => y(e) === i)) : t.isSeconds() ? Boolean(l.linking.seconds.value()) : t.isTicks() ? Boolean(l.linking.ticks.value()) : t.isIntraday() ? Boolean(l.linking.intraday.value()) : t.isDWM()
    }

    function S(e) {
      n.Interval.isValid(e) && (n.Interval.isRange(e) ? a.setValue("chart.lastUsedRangeResolution", e) : a.setValue("chart.lastUsedTimeBasedResolution", e))
    }

    function b(e, t, i) {
      const s = r.isRangeStyle(e),
        o = n.Interval.isRange(t);
      return !s && o ? function(e) {
        const t = a.getValue("chart.lastUsedTimeBasedResolution");
        if (void 0 !== t && n.Interval.isTimeBased(t)) return t;
        let i = "1D";
        for (const t of e) {
          const e = n.Interval.parse(t);
          if (e.isTimeBased()) {
            const t = e.value();
            if ("1D" === t) return t;
            i = t
          }
        }
        return i
      }(i) : s && !o ? function(e) {
        const t = a.getValue("chart.lastUsedRangeResolution");
        if (void 0 !== t && n.Interval.isRange(t)) return t;
        let i = "100R";
        for (const t of e) {
          const e = n.Interval.parse(t);
          if (e.isRange()) {
            const t = e.value();
            if ("100R" === t) return t;
            i = t
          }
        }
        return i
      }(i) : t
    }

    function w(e) {
      const {
        interval: t,
        guiResolutionKind: i
      } = n.Interval.parseExt(e);
      if (!t.isValid()) return !1;
      const s = t.multiplier();
      if ((0, d.isTicksEnabled)() && i === n.ResolutionKind.Ticks) return !0;
      return (i === n.SpecialResolutionKind.Hours ? s / 60 : s) <= C(i)
    }

    function C(e) {
      const t = u[e];
      return Number.isNaN(t) ? 1 : t
    }

    function T(e) {
      return C(n.Interval.parseExt(e).guiResolutionKind)
    }

    function P(e) {
      return Array.isArray(e) ? e : Object.keys(e).map(n.Interval.normalize).filter(s.notNull)
    }

    function x(...e) {
      let t = [].concat(...e);
      return t = (0, c.uniq)(t.filter(w).map(y)), M(t)
    }

    function M(e) {
      return e.sort(m)
    }

    function I() {
      return []
    }

    function A(e) {
      const {
        multiplier: t,
        shortKind: i
      } = L(e);
      return `${t}${i}`
    }

    function L(e, t) {
      const i = n.Interval.parse(e);
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

    function k(e, t) {
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
      switch (e) {
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

    function D(e) {
      return !(!E() && e.isSeconds() || !(0, d.isTicksEnabled)() && e.isTicks()) && !(!(0, d.isTicksEnabled)() && e.isTicks())
    }

    function B(e) {
      return D(n.Interval.parse(e))
    }

    function V(e) {
      if (h.enabled("allow_supported_resolutions_set_only")) {
        const t = n.Interval.normalize(e);
        return null !== t && v(t)
      } {
        const t = n.Interval.parse(e);
        if (!t.isValid() || !D(t)) return !1;
        if (!h.enabled("custom_resolutions")) {
          const t = n.Interval.normalize(e),
            i = window.ChartApiInstance.defaultResolutions().filter(B);
          if (!t || -1 === i.indexOf(t)) return !1
        }
        const i = l.linking.dataFrequencyResolution.value();
        if (void 0 !== i && g(i, t.value()) !== t.value()) return !1;
        if (t.isTicks()) return l.linking.ticks.value();
        if (t.isIntraday()) return l.linking.intraday.value();
        {
          const e = l.linking.supportedResolutions.value();
          return !e || e.includes(t.value())
        }
      }
    }! function(e) {
      e.CustomUserResolutionsKey = "IntervalWidget.intervals", e.LastUsedRangeResolutionKey = "chart.lastUsedRangeResolution", e.LastUsedTimeBasedResolutionKey = "chart.lastUsedTimeBasedResolution",
        e.DefaultRangeResolution = "100R", e.DefaultTimeBasedResolution = "1D"
    }(f || (f = {}))
