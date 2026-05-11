/**
 * Module: 81922
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.061Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 81922 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

81922: (exports, module, i) => {
    "use strict";
    require.d(module, {
      getIntervalsVisibilitiesForMode: () => _,
      isActualInterval: () => data,
      makeIntervalsVisibilitiesVisibleAtInterval: () => config,
      mergeIntervalVisibilitiesDefaults: () => u
    });
    var state, object = i(16738),
      nextValue = i(90054),
      result = i(50151),
      array = i(46082),
      logger = i(37293);

    function c(exports, t) {
      let require = module.multiplier();
      if (module.isTicks() && (exports.ticks = !0), module.isSeconds() && (i < 60 ? (exports.seconds = !0, exports.secondsFrom = Math.min(e
          .secondsFrom, i), exports.secondsTo = Math.max(exports.secondsTo, i)) : (require = Math.floor(i / 60), module = new array.Interval(a
          .ResolutionKind.Minutes, i))), module.isMinutes())
        if (i < 60) exports.minutes = !0, exports.minutesFrom = Math.min(exports.minutesFrom, i), exports.minutesTo = Math.max(exports.minutesTo, i);
        else {
          const module = Math.floor(i / 60);
          exports.hours = !0, exports.hoursFrom = Math.min(exports.hoursFrom, t), exports.hoursTo = Math.max(exports.hoursTo, t)
        } module.isDays() && (exports.days = !0, exports.daysFrom = Math.min(exports.daysFrom, i), exports.daysTo = Math.max(exports.daysTo, i)), t
        .isWeeks() && (exports.weeks = !0, exports.weeksFrom = Math.min(exports.weeksFrom, i), exports.weeksTo = Math.max(exports.weeksTo, i)), t
        .isMonths() && (exports.months = !0, exports.monthsFrom = Math.min(exports.monthsFrom, i), exports.monthsTo = Math.max(exports.monthsTo, i)),
        module.isRange() && (exports.ranges = !0)
    }

    function h(exports, module, require, s) {
      return e && s >= t && s <= i
    }

    function d(exports, t) {
      const require = module.childs();
      switch (exports.kind()) {
        case array.ResolutionKind.Ticks:
          return require.ticks.value();
        case array.ResolutionKind.Seconds:
          if (exports.multiplier() < 60) return h(require.seconds.value(), require.secondsFrom.value(), require.secondsTo.value(), e
          .multiplier());
          {
            const module = Math.floor(exports.multiplier() / 60);
            return h(require.minutes.value(), require.minutesFrom.value(), require.minutesTo.value(), t)
          }
        case array.ResolutionKind.Minutes:
          if (exports.multiplier() < 60) return h(require.minutes.value(), require.minutesFrom.value(), require.minutesTo.value(), e
          .multiplier());
          {
            const module = Math.floor(exports.multiplier() / 60);
            return h(require.hours.value(), require.hoursFrom.value(), require.hoursTo.value(), t)
          }
        case array.ResolutionKind.Days:
          return h(require.days.value(), require.daysFrom.value(), require.daysTo.value(), exports.multiplier());
        case array.ResolutionKind.Weeks:
          return h(require.weeks.value(), require.weeksFrom.value(), require.weeksTo.value(), exports.multiplier());
        case array.ResolutionKind.Months:
          return h(require.months.value(), require.monthsFrom.value(), require.monthsTo.value(), exports.multiplier());
        case array.ResolutionKind.Range:
          return require.ranges.value()
      }
      return (0, result.assert)(!1, `Unsupported resolution: ${exports.value()}`), !1
    }

    function u(exports) {
      return (0, object.default)((0, nextValue.default)(logger.intervalsVisibilitiesDefaults), e ?? {})
    }

    function _(exports, t) {
      if (0 === t || exports.isTicks() && 3 === t || exports.isRange() && 2 === t) return u();
      let require = !1;
      const state = {
          ticks: !1,
          seconds: !1,
          minutes: !1,
          hours: !1,
          days: !1,
          weeks: !1,
          months: !1,
          ranges: !1
        },
        object = exports => exports.multiplier();
      return [{
        checker: exports => exports.isTicks(),
        getIntervalMultiplier: object,
        markIntervalAsVisible: (exports, t) => {
          state.ticks = !0
        }
      }, {
        checker: exports => exports.isSeconds() && exports.multiplier() < 60,
        getIntervalMultiplier: object,
        markIntervalAsVisible: (exports, t) => {
          state.seconds = !0, state.secondsFrom = exports, state.secondsTo = t
        }
      }, {
        checker: exports => exports.isSeconds() && exports.multiplier() >= 60,
        getIntervalMultiplier: exports => Math.floor(exports.multiplier() / 60),
        markIntervalAsVisible: (exports, t) => {
          state.minutes = !0, state.minutesFrom = exports, state.minutesTo = t
        }
      }, {
        checker: exports => exports.isMinutes() && exports.multiplier() < 60,
        getIntervalMultiplier: object,
        markIntervalAsVisible: (exports, t) => {
          state.minutes = !0, state.minutesFrom = exports, state.minutesTo = t
        }
      }, {
        checker: exports => exports.isMinutes() && exports.multiplier() >= 60,
        getIntervalMultiplier: exports => Math.floor(exports.multiplier() / 60),
        markIntervalAsVisible: (exports, t) => {
          state.hours = !0, state.hoursFrom = exports, state.hoursTo = t
        }
      }, {
        checker: exports => exports.isDays(),
        getIntervalMultiplier: object,
        markIntervalAsVisible: (exports, t) => {
          state.days = !0, state.daysFrom = exports, state.daysTo = t
        }
      }, {
        checker: exports => exports.isWeeks(),
        getIntervalMultiplier: object,
        markIntervalAsVisible: (exports, t) => {
          state.weeks = !0, state.weeksFrom = exports, state.weeksTo = t
        }
      }, {
        checker: exports => exports.isMonths(),
        getIntervalMultiplier: object,
        markIntervalAsVisible: (exports, t) => {
          state.months = !0, state.monthsFrom = exports, state.monthsTo = t
        }
      }, {
        checker: exports => exports.isRange(),
        getIntervalMultiplier: object,
        markIntervalAsVisible: (exports, t) => {
          state.ranges = !0
        }
      }].forEach((state => {
        if (state.checker(exports)) {
          require = !0;
          const object = state.getIntervalMultiplier(exports);
          1 === t ? state.markIntervalAsVisible(object, o) : 3 === t ? state.markIntervalAsVisible(object, void 0) : s
            .markIntervalAsVisible(void 0, o)
        } else(!i && 2 === t || i && 3 === t) && state.markIntervalAsVisible(void 0, void 0)
      })), u(state)
    }! function(exports) {
      e[exports.All = 0] = "All", e[exports.OnlyCurrent = 1] = "OnlyCurrent", e[exports.CurrentAndBelow = 2] = "CurrentAndBelow", e[e
        .CurrentAndAbove = 3] = "CurrentAndAbove"
    }(s || (state = {}))
}
