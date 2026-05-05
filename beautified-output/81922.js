/**
 * Module 81922 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

81922: (e, t, i) => {
    "use strict";
    i.d(t, {
      getIntervalsVisibilitiesForMode: () => _,
      isActualInterval: () => d,
      makeIntervalsVisibilitiesVisibleAtInterval: () => c,
      mergeIntervalVisibilitiesDefaults: () => u
    });
    var s, o = i(16738),
      n = i(90054),
      r = i(50151),
      a = i(46082),
      l = i(37293);

    function c(e, t) {
      let i = t.multiplier();
      if (t.isTicks() && (e.ticks = !0), t.isSeconds() && (i < 60 ? (e.seconds = !0, e.secondsFrom = Math.min(e
          .secondsFrom, i), e.secondsTo = Math.max(e.secondsTo, i)) : (i = Math.floor(i / 60), t = new a.Interval(a
          .ResolutionKind.Minutes, i))), t.isMinutes())
        if (i < 60) e.minutes = !0, e.minutesFrom = Math.min(e.minutesFrom, i), e.minutesTo = Math.max(e.minutesTo, i);
        else {
          const t = Math.floor(i / 60);
          e.hours = !0, e.hoursFrom = Math.min(e.hoursFrom, t), e.hoursTo = Math.max(e.hoursTo, t)
        } t.isDays() && (e.days = !0, e.daysFrom = Math.min(e.daysFrom, i), e.daysTo = Math.max(e.daysTo, i)), t
        .isWeeks() && (e.weeks = !0, e.weeksFrom = Math.min(e.weeksFrom, i), e.weeksTo = Math.max(e.weeksTo, i)), t
        .isMonths() && (e.months = !0, e.monthsFrom = Math.min(e.monthsFrom, i), e.monthsTo = Math.max(e.monthsTo, i)),
        t.isRange() && (e.ranges = !0)
    }

    function h(e, t, i, s) {
      return e && s >= t && s <= i
    }

    function d(e, t) {
      const i = t.childs();
      switch (e.kind()) {
        case a.ResolutionKind.Ticks:
          return i.ticks.value();
        case a.ResolutionKind.Seconds:
          if (e.multiplier() < 60) return h(i.seconds.value(), i.secondsFrom.value(), i.secondsTo.value(), e
          .multiplier());
          {
            const t = Math.floor(e.multiplier() / 60);
            return h(i.minutes.value(), i.minutesFrom.value(), i.minutesTo.value(), t)
          }
        case a.ResolutionKind.Minutes:
          if (e.multiplier() < 60) return h(i.minutes.value(), i.minutesFrom.value(), i.minutesTo.value(), e
          .multiplier());
          {
            const t = Math.floor(e.multiplier() / 60);
            return h(i.hours.value(), i.hoursFrom.value(), i.hoursTo.value(), t)
          }
        case a.ResolutionKind.Days:
          return h(i.days.value(), i.daysFrom.value(), i.daysTo.value(), e.multiplier());
        case a.ResolutionKind.Weeks:
          return h(i.weeks.value(), i.weeksFrom.value(), i.weeksTo.value(), e.multiplier());
        case a.ResolutionKind.Months:
          return h(i.months.value(), i.monthsFrom.value(), i.monthsTo.value(), e.multiplier());
        case a.ResolutionKind.Range:
          return i.ranges.value()
      }
      return (0, r.assert)(!1, `Unsupported resolution: ${e.value()}`), !1
    }

    function u(e) {
      return (0, o.default)((0, n.default)(l.intervalsVisibilitiesDefaults), e ?? {})
    }

    function _(e, t) {
      if (0 === t || e.isTicks() && 3 === t || e.isRange() && 2 === t) return u();
      let i = !1;
      const s = {
          ticks: !1,
          seconds: !1,
          minutes: !1,
          hours: !1,
          days: !1,
          weeks: !1,
          months: !1,
          ranges: !1
        },
        o = e => e.multiplier();
      return [{
        checker: e => e.isTicks(),
        getIntervalMultiplier: o,
        markIntervalAsVisible: (e, t) => {
          s.ticks = !0
        }
      }, {
        checker: e => e.isSeconds() && e.multiplier() < 60,
        getIntervalMultiplier: o,
        markIntervalAsVisible: (e, t) => {
          s.seconds = !0, s.secondsFrom = e, s.secondsTo = t
        }
      }, {
        checker: e => e.isSeconds() && e.multiplier() >= 60,
        getIntervalMultiplier: e => Math.floor(e.multiplier() / 60),
        markIntervalAsVisible: (e, t) => {
          s.minutes = !0, s.minutesFrom = e, s.minutesTo = t
        }
      }, {
        checker: e => e.isMinutes() && e.multiplier() < 60,
        getIntervalMultiplier: o,
        markIntervalAsVisible: (e, t) => {
          s.minutes = !0, s.minutesFrom = e, s.minutesTo = t
        }
      }, {
        checker: e => e.isMinutes() && e.multiplier() >= 60,
        getIntervalMultiplier: e => Math.floor(e.multiplier() / 60),
        markIntervalAsVisible: (e, t) => {
          s.hours = !0, s.hoursFrom = e, s.hoursTo = t
        }
      }, {
        checker: e => e.isDays(),
        getIntervalMultiplier: o,
        markIntervalAsVisible: (e, t) => {
          s.days = !0, s.daysFrom = e, s.daysTo = t
        }
      }, {
        checker: e => e.isWeeks(),
        getIntervalMultiplier: o,
        markIntervalAsVisible: (e, t) => {
          s.weeks = !0, s.weeksFrom = e, s.weeksTo = t
        }
      }, {
        checker: e => e.isMonths(),
        getIntervalMultiplier: o,
        markIntervalAsVisible: (e, t) => {
          s.months = !0, s.monthsFrom = e, s.monthsTo = t
        }
      }, {
        checker: e => e.isRange(),
        getIntervalMultiplier: o,
        markIntervalAsVisible: (e, t) => {
          s.ranges = !0
        }
      }].forEach((s => {
        if (s.checker(e)) {
          i = !0;
          const o = s.getIntervalMultiplier(e);
          1 === t ? s.markIntervalAsVisible(o, o) : 3 === t ? s.markIntervalAsVisible(o, void 0) : s
            .markIntervalAsVisible(void 0, o)
        } else(!i && 2 === t || i && 3 === t) && s.markIntervalAsVisible(void 0, void 0)
      })), u(s)
    }! function(e) {
      e[e.All = 0] = "All", e[e.OnlyCurrent = 1] = "OnlyCurrent", e[e.CurrentAndBelow = 2] = "CurrentAndBelow", e[e
        .CurrentAndAbove = 3] = "CurrentAndAbove"
    }(s || (s = {}))