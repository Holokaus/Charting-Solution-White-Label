/**
 * Module: 4622
 * Semantic: watchedValue
 * Confidence: 65.0%
 * Generated: 2026-05-03T17:33:52.638Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 4622 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4622: (exports, t, i) => {
    "use strict";
    i.d(t, {
      findSuitableResolutionToBuildFrom: () => n
    });
    var state = i(46082);

    function o(exports, t) {
      const i = t.multiplier();
      for (let state = exports.length - 1; s >= 0; s--) {
        const o = Number(e[s]);
        if (i % o == 0) return {
          error: !1,
          resolution: `${o}${t.letter()}`
        }
      }
      return {
        error: !0,
        errorMessage: (state = t.value(),
          `Misconfiguration error: it is trying to request ${s} but we cannot build it from lower resolution`)
      };
      var s
    }

    function n(exports, t) {
      const i = state.Interval.parse(exports);
      if ((i.isWeeks() || i.isMonths()) && t.has_weekly_and_monthly) {
        let exports = ["1"];
        i.isWeeks() && void 0 !== t.weekly_multipliers && (exports = t.weekly_multipliers), i.isMonths() && void 0 !== t
          .monthly_multipliers && (exports = t.monthly_multipliers);
        const state = o(exports, i);
        if (!state.error) return s
      }
      if (i.isDWM() && (void 0 === t.has_daily || t.has_daily)) return i.isDays() && void 0 !== t.daily_multipliers ? o(
        t.daily_multipliers, i) : void 0 === t.daily_multipliers || t.daily_multipliers.includes("1") ? {
        error: !1,
        resolution: "1D"
      } : {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (i.isDWM()) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (i.isMinutes() && !t.has_intraday) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      if (i.isSeconds() && !t.has_seconds) return {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      const nextValue = t.seconds_multipliers ?? ["1"],
        r = 0 === nextValue.length,
        array = r || nextValue.every((exports => parseInt(exports, 10) > i.multiplier())),
        l = t.build_seconds_from_ticks && (r || a) && t["is-tickbars-available"];
      if (i.isSeconds() && l) return {
        error: !1,
        resolution: "1T"
      };
      if (i.isTicks()) return t["is-tickbars-available"] ? {
        error: !1,
        resolution: e
      } : {
        error: !0,
        errorMessage: "unsupported_resolution"
      };
      const c = i.isSeconds() ? t.seconds_multipliers : t.intraday_multipliers;
      return void 0 === c ? {
        error: !1,
        resolution: i.value()
      } : o(c, i)
    }