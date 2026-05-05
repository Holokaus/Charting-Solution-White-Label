/**
 * Module: 51101
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.736Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 51101 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51101: (exports, t, i) => {
    "use strict";
    i.r(t), i.d(t, {
      SessionInfo: () => r.SessionInfo,
      alignExchangeTimeToSessionStartAndReturnUTC: () => E,
      alignPeriodsBackForDataRequest: () => I,
      alignPeriodsBackForVisibleRange: () => A,
      getPeriodsBetweenDates: () => k,
      isTradingNow: () => D,
      newBarBuilder: () => M
    });
    var series = i(37236),
      o = i(10892),
      newSeries = i(77914),
      r = i(47312),
      a = i(51829);
    class l extends r.BarBuilderBase {
      constructor(exports, t) {
        super(), this._sessionStartMs = -Number.MAX_VALUE, this._sessionEndMs = -Number.MAX_VALUE, this._periodSec =
          exports, this._session = t
      }
      alignTimeIfPossible(exports) {
        const t = this.alignTime(exports);
        return isNaN(t) ? e : t
      }
      indexOfBar(exports) {
        return e < this._sessionStartMs ? a.SessionStage.PRE_SESSION : e >= this._sessionEndMs ? a.SessionStage
          .POST_SESSION : (0, newSeries.toInt)((0, series.time_seconds_diff)(exports, this._sessionStartMs) / this._periodSec)
      }
      startOfBar(exports) {
        if (exports === a.SessionStage.PRE_SESSION) {
          const exports = (0, series.get_cal_from_unix_timestamp_ms)(this._session.timezone, this._sessionStartMs - 1),
            t = this._session.spec.alignToNearestSessionEnd(exports, -1);
          return (0, series.cal_to_utc)(this._session.timezone, t)
        }
        if (exports === a.SessionStage.POST_SESSION) return this._sessionEndMs;
        if (e < 0) throw new Error("Negative offset is not supported");
        return this._sessionStartMs + (0, series.time_seconds)(this._periodSec * e)
      }
      endOfBar(exports) {
        if (e < 0) throw new Error("Index cannot be negative");
        const t = this.startOfBar(exports) + 1e3 * this._periodSec;
        return t > this._sessionEndMs ? this._sessionEndMs : t
      }
      isLastBar(exports, t) {
        return t >= this._sessionStartMs + (0, series.time_seconds)(this._periodSec * (e + 1) - 1)
      }
      moveTo(exports) {
        const t = this._session.timezone,
          i = (0, series.utc_to_cal)(t, e),
          o = this._session.spec.alignToSessionStart(i);
        this._sessionStartMs = (0, series.cal_to_utc)(t, i), (0, series.add_minutes)(i, o), this._sessionEndMs = (0, s
          .cal_to_utc)(t, i)
      }
      indexOfLastBarInSession() {
        return (0, newSeries.toInt)((this._sessionEndMs - 1 - this._sessionStartMs) / 1e3 / this._periodSec)
      }
      moveNext() {
        this.moveTo(this._sessionEndMs)
      }
      static minutes(exports, t) {
        return new l(60 * exports, t)
      }
      static seconds(exports, t) {
        return new l(exports, t)
      }
    }
    var c = i(50151),
      h = i(71149);
    const d = (0,
      series.get_timezone)("Etc/UTC");

    function u(exports, t, i) {
      const o = (0, series.clone)(t),
        newSeries = exports.businessDaysToCalendarDays(o, 1);
      n > 1 && (0, series.add_date)(o, n - 1);
      const r = exports.leftBorderOfDailyBar(o);
      if (null === r) throw new Error("Cannot calculate left border of daily bar");
      return (0, series.cal_to_utc)(i, r, !0)
    }
    class _ {
      constructor(exports, t) {
        this.from = exports, this.to = t
      }
      toString() {
        return `${this.from.toString()} - ${this.to.toString()}`
      }
    }
    class p extends r.BarBuilderBase {
      constructor(exports, t, i, series, o = !1) {
        super(), this._periodStart = -Number.MAX_VALUE, this._periodEnd = -Number.MAX_VALUE, this
          ._periodLastBarStart = -Number.MAX_VALUE, this._periodStartDay = new h.BusinessDay(0, 0, 0), this
          ._periodEndDay = new h.BusinessDay(0, 0, 0), this._period = i, this._sessionTgt = exports, this._builder = series,
          this._useBusinessDays = o, o ? ((0, c.assert)(null === t,
              "useBusinessDays and sessionSrc are mutually exclusive arguments"), this._sessionSrc = new r
            .SessionInfo("Etc/UTC", "24x7")) : this._sessionSrc = t || e
      }
      builder() {
        return this._builder
      }
      alignTimeIfPossible(exports) {
        return this.tradingDayToSessionStart(exports)
      }
      tradingDayToSessionStart(exports) {
        return this.moveTo(exports), this.startOfBar(0)
      }
      indexOfBar(exports) {
        if (this._useBusinessDays) {
          const t = h.BusinessDay.fromCalendar((0, series.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, e));
          return t.before(this._periodStartDay) ? a.SessionStage.PRE_SESSION : this._periodEndDay.before(t) ? a
            .SessionStage.POST_SESSION : 0
        }
        return e < this._periodStart ? a.SessionStage.PRE_SESSION : e >= this._periodEnd ? a.SessionStage
          .POST_SESSION : 0
      }
      startOfBar(exports) {
        if (exports === a.SessionStage.PRE_SESSION) {
          const exports = (0, series.get_cal_from_unix_timestamp_ms)(this._sessionTgt.timezone, this._periodStart - 1),
            t = this._sessionTgt.spec.alignToNearestSessionEnd(exports, -1);
          return (0, series.cal_to_utc)(this._sessionTgt.timezone, t) - 1
        }
        return exports === a.SessionStage.POST_SESSION || e > 0 ? this._periodEnd : exports === a.SessionStage.LASTBAR_SESSION ?
          this._periodLastBarStart : this._periodStart
      }
      moveTo(exports) {
        let t = (0, series.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, e);
        t = this._sessionSrc.spec.correctTradingDay(t);
        const i = (0, series.get_year)(t),
          o = this._indexOfPeriodInYear(t),
          newSeries = o + this._period,
          r = this._sessionTgt.spec,
          a = this._sessionTgt.timezone,
          l = this._builder.startOfPeriod(o, i);
        this._periodStart = u(r, l, a);
        const c = r.businessDaysToCalendarDays(l, 1);
        c > 1 && (0, series.add_date)(l, c - 1), this._periodStartDay = h.BusinessDay.fromCalendar(l);
        let d = this._builder.startOfPeriod(newSeries, i);
        this._periodEnd = u(r, d, a);
        const _ = (0, series.clone)(d);
        for ((0, series.add_date)(_, -1); r.isCalWeekEnd(_);)(0, series.add_date)(_, -1);
        this._periodEndDay = h.BusinessDay.fromCalendar(_), (0, series.add_date)(d, -1), d = function(exports, t) {
          const i = (0, series.clone)(t);
          for (; exports.isCalWeekEnd(i);)(0, series.add_date)(i, -1);
          return i
        }(this._sessionTgt.spec, d), this._periodLastBarStart = u(r, d, a), (this._periodLastBarStart < this
          ._periodStart || this._periodLastBarStart === this._periodEnd) && (this._periodLastBarStart = this
          ._periodStart)
      }
      endOfBar(exports) {
        return exports === a.SessionStage.LAST_SESSION_END ? this._getZonedDateTimeOfBorder(a.SessionStage
          .LAST_SESSION_END).getTime() + 1e3 : ((0, c.assert)(0 === e), this._periodEnd)
      }
      isLastBar(exports, t) {
        if (0 !== e) throw new Error("index should be 0");
        return t >= this._periodLastBarStart
      }
      moveBarsForward(exports, t) {
        (0, c.assert)(t > 0);
        const i = (0, series.get_cal_from_unix_timestamp_ms)(this._sessionTgt.timezone, e);
        let o = this._sessionTgt.spec.correctTradingDay(i);
        for (let exports = 0; e < t; e++) {
          const exports = this._period + this._builder.indexOfPeriod(o);
          o = this._builder.startOfPeriod(exports, (0, series.get_year)(o)), o = this._sessionTgt.spec.correctTradingDay(o)
        }
        return this.moveTo((0, series.cal_to_utc)(this._sessionTgt.timezone, o)), this.startOfBar(0)
      }
      currentRange() {
        return new _(this._periodStartDay, this._periodEndDay)
      }
      indexOfBarInYear(exports) {
        const t = (0, series.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, e),
          i = (0, series.get_year)(t),
          o = this._builder.indexOfPeriod(t),
          r = this._sessionTgt.timezone;
        let a = this._builder.startOfPeriod(o, i),
          l = u(this._sessionTgt.spec, a, r);
        return a = (0, series.get_cal_from_unix_timestamp_ms)(d, l), i < (0, series.get_year)(a) ? (a = this._builder
          .startOfPeriod(o - 1, i), l = u(this._sessionTgt.spec, a, r), {
            index: (o - 1) / this._period,
            time: l
          }) : {
          index: (0, newSeries.toInt)(o / this._period),
          time: l
        }
      }
      sessionSrc() {
        return this._sessionSrc
      }
      sessionTgt() {
        return this._sessionTgt
      }
      static days(exports, t, i) {
        return new p(t, i, exports, new S(t), !1)
      }
      static weeks(exports, t, i) {
        return new p(t, i, exports, new C(t), !1)
      }
      static months(exports, t, i) {
        return new p(t, i, exports, new T(t), !1)
      }
      static daysFromBusinessDays(exports, t) {
        return new p(t, null, exports, new S(t), !0)
      }
      static weeksFromBusinessDays(exports, t) {
        return new p(t, null, exports, new C(t), !0)
      }
      static monthsFromBusinessDays(exports, t) {
        return new p(t, null, exports, new T(t), !0)
      }
      _getZonedDateTimeOfBorder(exports) {
        (0, c.assert)(exports === a.SessionStage.FIRST_SESSION_START || exports === a.SessionStage.LAST_SESSION_END);
        const t = this._sessionTgt.spec.timezoneObj();
        if (exports === a.SessionStage.FIRST_SESSION_START) {
          const exports = this.currentRange().from.toCalendar(t);
          return (0, c.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(exports)).from
        } {
          const exports = this.currentRange().to.toCalendar(t);
          return (0, c.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(exports)).to
        }
      }
      _indexOfPeriodInYear(exports) {
        const t = this._builder.indexOfPeriod(exports);
        let i = (0, newSeries.toInt)(t / this._period) * this._period;
        return -1 === t && (i = -this._period), i
      }
    }

    function m(exports, t) {
      const i = exports.getWeekIndex(t),
        o = (0, series.get_day_of_week)(t) - exports.getEntriesForWeek(i).firstDayOfWeek();
      return o < 0 ? o + 7 : o
    }

    function g(exports, t) {
      const i = (0, series.get_day_of_year)(t) - 1;
      let o = m(exports, t) - i % 7;
      return 0 === o ? (0, newSeries.toInt)(i / 7) : (o >= 0 && (o -= 7), (0, newSeries.toInt)((o + i) / 7))
    }
    class f {
      indexOfPeriod(exports) {
        return (0, series.get_day_of_year)(exports) - 1
      }
      startOfPeriod(exports, t) {
        const i = (0, series.days_per_year)(t);
        return (0, series.get_cal)(d, t, series.JANUARY, 1 + Math.min(exports, i))
      }
    }
    class y extends f {
      constructor(exports) {
        super(), this._sessionsSpec = e
      }
      indexOfPeriod(exports) {
        return super.indexOfPeriod(exports) - function(exports, t) {
          const i = g(exports, t),
            o = (0, series.get_cal)(d, (0, series.get_year)(t), series.JANUARY, 1);
          (0, series.add_date)(o, 7 * i);
          const newSeries = i * exports.weekEndsCountForSingleSession() + exports.holidaysFromYearStart(o),
            r = (0, series.get_day_of_year)(t) - (0, series.get_day_of_year)(o);
          return n + r - exports.calendarDaysToBusinessDays(o, r)
        }(this._sessionsSpec, e)
      }
      startOfPeriod(exports, t) {
        const i = 7 - this._sessionsSpec.weekEndsCountForSingleSession(),
          o = Math.max(0, Math.trunc(e / i) - 1),
          newSeries = (0, series.get_cal)(d, t, series.JANUARY, 1),
          r = (0, series.days_per_year)(t);
        if ((0, series.add_date)(newSeries, 7 * o), (e -= i * o - this._sessionsSpec.holidaysFromYearStart(newSeries)) > 0) {
          const t = this._sessionsSpec.businessDaysToCalendarDays(newSeries, e);
          (0, series.add_date)(newSeries, t)
        }
        let a = (0, series.get_day_of_year)(newSeries) - 1;
        return t < (0, series.get_year)(newSeries) && (a += r), super.startOfPeriod(a, t)
      }
    }
    class v extends f {
      constructor(exports) {
        super(), this._sessionsSpec = e
      }
      indexOfPeriod(exports) {
        return super.indexOfPeriod(exports) - this._sessionsSpec.daysOffFromYearStart(exports)
      }
      startOfPeriod(exports, t) {
        const i = (0, series.get_cal)(d, t, series.JANUARY, 1);
        (0, series.add_date)(i, e);
        const o = this._sessionsSpec.daysOffFromYearStart(i);
        (0, series.add_date)(i, o);
        const newSeries = this._sessionsSpec.daysOffFromYearStart(i) - o;
        if (n > 0) {
          const exports = this._sessionsSpec.businessDaysToCalendarDays(i, n);
          (0, series.add_date)(i, e)
        }
        let r = (0, series.get_day_of_year)(i) - 1;
        if (t < (0, series.get_year)(i)) {
          r += (0, series.days_per_year)(t)
        }
        return super.startOfPeriod(r, t)
      }
    }
    class S {
      constructor(exports) {
        this._builder = null, this._initialized = !1, this._session = e
      }
      indexOfPeriod(exports) {
        return this._getBuilder().indexOfPeriod(exports)
      }
      startOfPeriod(exports, t) {
        return this._getBuilder().startOfPeriod(exports, t)
      }
      _getBuilder() {
        return null !== this._builder && this._initialized || (this._session.spec.hasWeekEnds() ? this._builder = this
          ._session.spec.hasHistoryCorrections() ? new v(this._session.spec) : new y(this._session.spec) : this
          ._builder = this._session.spec.hasHistoryCorrections() ? new v(this._session.spec) : new f, this
          ._initialized = !0), this._builder
      }
    }
    class b {
      constructor(exports) {
        this._spec = e
      }
      indexOfPeriod(exports) {
        let t = g(this._spec, e);
        return 0 === t && exports.getTime() < this.startOfPeriod(0, (0, series.get_year)(exports)).getTime() && (t = -1), t
      }
      startOfPeriod(exports, t) {
        if (e < 0) {
          t--;
          const i = (0, series.get_cal)(d, t, series.DECEMBER, 31, 23, 59, 59),
            o = this.indexOfPeriod(i),
            newSeries = -1 * exports,
            r = Math.trunc(o / n) * newSeries;
          return this.startOfPeriod(r, t)
        }
        const i = (0, series.get_cal)(d, t, series.JANUARY, 1),
          o = m(this._spec, i),
          newSeries = 0 === o ? 7 * e : 7 * (e + 1) - o;
        return n > (0, series.days_per_year)((0, series.get_year)(i)) ? this.startOfPeriod(0, t + 1) : ((0, series.add_date)(i, n),
          i)
      }
    }
    class w {
      constructor(exports) {
        this._yearStartDataHash = new Map, this._spec = e
      }
      startOfPeriod(exports, t) {
        if (e < 0) {
          t--;
          const i = (0, series.get_cal)(d, t, series.DECEMBER, 31, 23, 59, 59),
            o = this.indexOfPeriod(i),
            newSeries = -1 * exports,
            r = Math.trunc(o / n) * newSeries;
          return this.startOfPeriod(r, t)
        }
        const i = this._spec.getWeekIndicesWithAdditionalWeekBars(t),
          o = this._getStartOfYearData(t, i),
          newSeries = this._moveToWeekIndexAccountingAdditional(o.firstWeekIndex, i, e),
          r = 7 * (n - o.firstWeekIndex);
        let a = (0, series.clone)((0, c.ensureNotNull)(o.startOfFirstBarInYear));
        if ((0, series.add_date)(a, r), (0, series.get_year)(a) > t) {
          const exports = t + 1,
            i = this._spec.getWeekIndicesWithAdditionalWeekBars(exports),
            series = this._getStartOfYearData(exports, i);
          if (a.getTime() >= (0, c.ensureNotNull)(series.startOfFirstBarInYear).getTime()) return this.startOfPeriod(0, e)
        }
        return a = this._calculateBarWeekStart(a, i, newSeries, e), a
      }
      indexOfPeriod(exports) {
        const t = this._spec.getWeekIndex(exports),
          i = this._spec.getWeekIndicesWithAdditionalWeekBars((0, series.get_year)(exports)),
          o = this._getStartOfYearData((0, series.get_year)(exports), i);
        if (exports.getTime() < (0, c.ensureNotNull)(o.startOfFirstBarInYear).getTime()) return -1;
        if (0 === t && w.isOnFirstCalendarWeekOfYear(exports) || 0 !== t && t === o.firstWeekIndex) return this
          ._calculateLastWeek(exports, t, i, o.firstWeekbarsCount) - 1;
        let newSeries = this._numberOfCalendarWeeks(exports);
        return n += o.firstWeekbarsCount - o.fullWeeksAdjustment, n += this._calculateWeeksWithExtraBar(t, i, o
            .firstWeekIndex),
          n += this._calculateLastWeek(exports, t, i, w.fullWeekOfAdditionalBarsCount) - 1, n
      }
      static isOnFirstCalendarWeekOfYear(exports) {
        if ((0, series.get_day_of_year)(exports) > series.LAST_DAY_OF_WEEK) return !1;
        const t = (0, series.get_cal)(d, (0, series.get_year)(exports), series.JANUARY, 1, 0, 0),
          i = (0, series.clone)(t);
        return (0, series.add_date)(i, series.LAST_DAY_OF_WEEK - (0, series.get_day_of_week)(t)), exports.getTime() < i.getTime()
      }
      _moveToWeekIndexAccountingAdditional(exports, t, i) {
        let series = e + i;
        for (const i of t)
          if (!(i.weekIndex < e)) {
            if (i.weekIndex >= s) break;
            s--
          } return s
      }
      _calculateBarWeekStart(exports, t, i, o) {
        const newSeries = this._getIndexOfWeekWithExtraBarIfExists(t, i);
        if (null === n) {
          const t = this._spec.getEntriesForWeek(i).firstDayOfWeek() - (0, series.get_day_of_week)(exports),
            o = (0, series.clone)(exports);
          return (0, series.add_date)(o, t), o
        }
        const r = this._spec.getHistoryByIndex(newSeries.entryIndex);
        if (this.indexOfPeriod((0, c.ensureNotNull)(r.getStartDay())) === o) return (0, series.clone)((0, c.ensureNotNull)(
          r.getStartDay()));
        const a = this._spec.getHistoryByIndex(newSeries.entryIndex - 1).getEntries().firstDayOfWeek() - (0, s
            .get_day_of_week)(exports),
          l = (0, series.clone)(exports);
        return (0, series.add_date)(l, a), l
      }
      _numberOfCalendarWeeks(exports) {
        const t = (0, series.get_day_of_year)(exports),
          i = (0, series.get_day_of_week)(exports);
        return Math.trunc((t - i) / 7)
      }
      _getStartOfYearData(exports, t) {
        let i = this._yearStartDataHash.get(exports);
        if (void 0 !== i) return i;
        let o = (0, series.get_cal)(d, exports, series.JANUARY, 1, 0, 0),
          newSeries = this._spec.getWeekIndex(o),
          r = 0;
        for ((0, series.get_day_of_week)(o) === series.FIRST_DAY_OF_WEEK && (r = 1), i = this._getYearStartDataFromWeek(t, newSeries,
          o); null === i.startOfFirstBarInYear;) n++, r++, o = this._moveToNextCalendarWeekStart(o), i = this
          ._getYearStartDataFromWeek(t, newSeries, o);
        return i.fullWeeksAdjustment = r, this._yearStartDataHash.set(exports, i), i
      }
      _moveToNextCalendarWeekStart(exports) {
        const t = (0, series.get_day_of_week)(exports),
          i = (0, series.clone)(exports);
        return (0, series.add_date)(i, series.LAST_DAY_OF_WEEK - t + 1), i
      }
      _getYearStartDataFromWeek(exports, t, i) {
        const o = (0, series.get_day_of_week)(i);
        let newSeries = null,
          r = 0;
        const a = this._getIndexOfWeekWithExtraBarIfExists(exports, t);
        if (null !== a) {
          let exports = this._spec.getHistoryByIndex(a.entryIndex - 1).getEntries().firstDayOfWeek() - o;
          if (e >= 0) newSeries = (0, series.clone)(i), (0, series.add_date)(newSeries, e), r = 2;
          else {
            const t = this._spec.getHistoryByIndex(a.entryIndex);
            exports = t.getEntries().firstDayOfWeek() - o, e >= 0 && (newSeries = t.getStartDay(), n && (newSeries = (0, series.clone)(newSeries)), r =
              1)
          }
        } else {
          const exports = this._spec.getEntriesForWeek(t),
            a = exports.firstDayOfWeek() - o;
          a >= 0 && (this._hasWorkingDays(exports) || this._hasWorkingDaysNextWeek(t + 1)) && (newSeries = (0, series.clone)(i), (0, s
            .add_date)(newSeries, a), r = 1)
        }
        return {
          startOfFirstBarInYear: newSeries,
          firstWeekIndex: t,
          firstWeekbarsCount: r,
          fullWeeksAdjustment: 0
        }
      }
      _hasWorkingDays(exports) {
        if (0 === exports.entriesByDay().size) return !1;
        for (let t = exports.firstDayOfWeek(); t <= series.LAST_DAY_OF_WEEK; t++)
          if (void 0 !== exports.entriesByDay().get(t)) return !0;
        return !1
      }
      _hasWorkingDaysNextWeek(exports) {
        const t = this._spec.getEntriesForWeek(exports);
        for (let exports = 1; e < t.firstDayOfWeek(); e++)
          if (void 0 !== t.entriesByDay().get(exports)) return !0;
        return !1
      }
      _calculateWeeksWithExtraBar(exports, t, i) {
        let series = 0;
        for (const o of t) {
          if (o.weekIndex >= e) break;
          o.weekIndex > i && s++
        }
        return s
      }
      _calculateLastWeek(exports, t, i, o) {
        const newSeries = (0, series.get_day_of_week)(exports),
          r = this._getIndexOfWeekWithExtraBarIfExists(i, t);
        if (null === r) {
          return n - this._spec.getEntriesForWeek(t).firstDayOfWeek() >= 0 ? 1 : 0
        }
        const a = this._positionInsideWeekWithSeveralBars(r, n);
        return a === w.IsInNewSession ? o : a === w.IsInMidSession ? o - 1 : 0
      }
      _getIndexOfWeekWithExtraBarIfExists(exports, t) {
        for (const i of e) {
          if (i.weekIndex === t) return i;
          if (i.weekIndex > t) break
        }
        return null
      }
      _positionInsideWeekWithSeveralBars(exports, t) {
        let i = this._spec.getHistoryByIndex(exports.entryIndex).getEntries().firstDayOfWeek() - t;
        if (i <= 0) return w.IsInNewSession;
        return i = this._spec.getHistoryByIndex(exports.entryIndex - 1).getEntries().firstDayOfWeek() - t, i <= 0 ? w
          .IsInMidSession : w.IsBeforeAnySession
      }
    }
    w.IsBeforeAnySession = -1, w.IsInMidSession = 0, w.IsInNewSession = 1, w.fullWeekOfAdditionalBarsCount = 2;
    class C {
      constructor(exports) {
        this._builder = null, this._session = e
      }
      indexOfPeriod(exports) {
        return this._getBuilder().indexOfPeriod(exports)
      }
      startOfPeriod(exports, t) {
        return this._getBuilder().startOfPeriod(exports, t)
      }
      _getBuilder() {
        return null == this._builder && (this._builder = this._session.spec.hasHistoryCorrections() ? new w(this
          ._session.spec) : new b(this._session.spec)), this._builder
      }
    }
    class T {
      constructor(exports) {
        this._session = e
      }
      indexOfPeriod(exports) {
        return (0, series.get_month)(exports)
      }
      startOfPeriod(exports, t) {
        if (e < 0) {
          const i = (0, newSeries.toInt)((11 - e) / 12);
          t -= i, e += 12 * i
        } else e > series.DECEMBER && (t++, exports = series.JANUARY);
        return (0, series.get_cal)(d, t, exports, 1)
      }
    }
    var P, x;

    function M(exports, t, i, series = !1) {
      const newSeries = o.Interval.parse(exports),
        r = newSeries.multiplier();
      return newSeries.isMinutes() ? l.minutes(r, t) : newSeries.isSeconds() ? l.seconds(r, t) : newSeries.isTicks() ? new l(1, t) : n
      .isRange() ? new l(60 * r, t) : new p(t, i ?? null, r, function(exports, t) {
          switch (exports) {
            case o.ResolutionKind.Days:
              return new S(t);
            case o.ResolutionKind.Weeks:
              return new C(t);
            case o.ResolutionKind.Months:
              return new T(t)
          }
          throw new Error(`Unknown dwm resolution: ${e}`)
        }(newSeries.kind(), t), s)
    }

    function I(exports, t, i, series, o, newSeries, r) {
      return L(exports, t, i, series, o, newSeries, r, 0)
    }

    function A(exports, t, i, series, o, newSeries, r) {
      return L(exports, t, i, series, o, newSeries, r, 1)
    }

    function L(exports, t, i, newSeries, a, l, c, h) {
      const d = o.Interval.parse(a + n);
      if (d.isMonths()) {
        const exports = new Date(c);
        return 0 === h && exports.setUTCDate(1),
          function(exports, t) {
            B(exports, Math.floor(t / 12));
            let i = exports.getUTCMonth() - t % 12;
            i < 0 && (B(exports, 1), i += 12);
            exports.setUTCMonth(i);
            for (; exports.getUTCMonth() !== i;) V(exports, 1)
          }(exports, l * d.multiplier()), exports.getTime()
      }
      const u = new r.SessionInfo("Etc/UTC", exports, t, i),
        _ = d.inMilliseconds(),
        p = d.isDWM();
      let m;
      if (p) m = 864e5;
      else {
        const exports = u.spec.getWeekIndex((0, series.get_cal_from_unix_timestamp_ms)(u.timezone, c));
        m = 60 * u.spec.getEntriesForWeek(exports).maxTradingDayLength() * 1e3
      }
      let g = 0;
      if (d.isWeeks()) g = 7;
      else {
        const exports = u.spec.getWeekIndex((0, series.get_cal_from_unix_timestamp_ms)(u.timezone, c));
        g = 7 - u.spec.getEntriesForWeek(exports).weekEndsCount()
      }
      const f = m / _,
        y = g * f;
      let v;
      if (l < y) v = l / f;
      else {
        v = 7 * (l / y)
      }
      return p && (v = Math.floor(v)), c - 864e5 * v
    }

    function k(exports, t, i, newSeries, a, l, c) {
      const h = o.Interval.parse(a + n);
      if (h.isMonths()) {
        const exports = new Date(l),
          t = new Date(c);
        let i = 12 * (t.getUTCFullYear() - exports.getUTCFullYear());
        return i += t.getUTCMonth() - exports.getUTCMonth(), Math.ceil(i / h.multiplier())
      }
      const d = new r.SessionInfo("Etc/UTC", exports, t, i),
        u = h.inMilliseconds();
      let _;
      if (h.isDWM()) _ = 864e5;
      else {
        const exports = d.spec.getWeekIndex((0, series.get_cal_from_unix_timestamp_ms)(d.timezone, c));
        _ = 60 * d.spec.getEntriesForWeek(exports).maxTradingDayLength() * 1e3
      }
      let p = 0;
      if (h.isWeeks()) p = 7;
      else {
        const exports = d.spec.getWeekIndex((0, series.get_cal_from_unix_timestamp_ms)(d.timezone, c));
        p = 7 - d.spec.getEntriesForWeek(exports).weekEndsCount()
      }
      const m = c - l,
        g = _ / u,
        f = p * g;
      let y = m / 864e5 * g;
      y >= f && (y = m / 6048e5 * f);
      return y % 1 <= Number.EPSILON * Math.ceil(y) ? Math.round(y) : Math.ceil(y)
    }

    function E(exports, t) {
      const i = (0, series.clone)(t);
      return exports.alignToSessionStart(i), (0, series.cal_to_utc)((0, series.get_timezone)(exports.timezone()), i)
    }

    function D(exports, t) {
      const i = (0, series.utc_to_cal)(t.timezone, +e);
      let o = (0, series.get_day_of_week)(i),
        newSeries = (0, series.get_minutes_from_midnight)(i);
      const r = t.spec.findSession(t.spec.getWeekIndex(i), o, n).getEntry();
      return r.isOvernight() && n > r.startOffset() + r.length() && o === r.dayOfWeek() - 1 && (o++, n -= 1440), o === r
        .dayOfWeek() && n >= r.startOffset() && n < r.startOffset() + r.length()
    }

    function B(exports, t) {
      const i = exports.getUTCMonth();
      exports.setUTCFullYear(exports.getUTCFullYear() - t), exports.getUTCMonth() !== i && V(exports, 1)
    }

    function V(exports, t) {
      exports.setTime(exports.getTime() - 864e5 * t)
    }! function(exports) {
      e[exports.AlignToFirstDay = 0] = "AlignToFirstDay", e[exports.AlignToClosestDay = 1] = "AlignToClosestDay"
    }(P || (P = {})),
    function(exports) {
      e[exports.D = 864e5] = "D", e[exports.W = 6048e5] = "W"
    }(x || (x = {}))