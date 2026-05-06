/**
 * Module 51101 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51101: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.r(watchedValue_t), i.d(watchedValue_t, {
      SessionInfo: () => r.SessionInfo,
      alignExchangeTimeToSessionStartAndReturnUTC: () => E,
      alignPeriodsBackForDataRequest: () => I,
      alignPeriodsBackForVisibleRange: () => A,
      getPeriodsBetweenDates: () => k,
      isTradingNow: () => D,
      newBarBuilder: () => M
    });
    var watchedValue_s = i(37236),
      o = i(10892),
      watchedValue_n = i(77914),
      r = i(47312),
      watchedValue_a = i(51829);
    class l extends r.BarBuilderBase {
      constructor(watchedValue_e, watchedValue_t) {
        super(), this._sessionStartMs = -Number.MAX_VALUE, this._sessionEndMs = -Number.MAX_VALUE, this._periodSec =
          watchedValue_e, this._session = watchedValue_t
      }
      alignTimeIfPossible(watchedValue_e) {
        const watchedValue_t = this.alignTime(watchedValue_e);
        return isNaN(watchedValue_t) ? watchedValue_e : watchedValue_t
      }
      indexOfBar(watchedValue_e) {
        return watchedValue_e < this._sessionStartMs ? watchedValue_a.SessionStage.PRE_SESSION : watchedValue_e >= this._sessionEndMs ? watchedValue_a.SessionStage
          .POST_SESSION : (0, watchedValue_n.toInt)((0, watchedValue_s.time_seconds_diff)(watchedValue_e, this._sessionStartMs) / this._periodSec)
      }
      startOfBar(watchedValue_e) {
        if (watchedValue_e === watchedValue_a.SessionStage.PRE_SESSION) {
          const watchedValue_e = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._session.timezone, this._sessionStartMs - 1),
            watchedValue_t = this._session.spec.alignToNearestSessionEnd(watchedValue_e, -1);
          return (0, watchedValue_s.cal_to_utc)(this._session.timezone, watchedValue_t)
        }
        if (watchedValue_e === watchedValue_a.SessionStage.POST_SESSION) return this._sessionEndMs;
        if (watchedValue_e < 0) throw new Error("Negative offset is not supported");
        return this._sessionStartMs + (0, watchedValue_s.time_seconds)(this._periodSec * watchedValue_e)
      }
      endOfBar(watchedValue_e) {
        if (watchedValue_e < 0) throw new Error("Index cannot be negative");
        const watchedValue_t = this.startOfBar(watchedValue_e) + 1e3 * this._periodSec;
        return watchedValue_t > this._sessionEndMs ? this._sessionEndMs : watchedValue_t
      }
      isLastBar(watchedValue_e, watchedValue_t) {
        return watchedValue_t >= this._sessionStartMs + (0, watchedValue_s.time_seconds)(this._periodSec * (watchedValue_e + 1) - 1)
      }
      moveTo(watchedValue_e) {
        const watchedValue_t = this._session.timezone,
          i = (0, watchedValue_s.utc_to_cal)(watchedValue_t, watchedValue_e),
          o = this._session.spec.alignToSessionStart(i);
        this._sessionStartMs = (0, watchedValue_s.cal_to_utc)(watchedValue_t, i), (0, watchedValue_s.add_minutes)(i, o), this._sessionEndMs = (0, watchedValue_s
          .cal_to_utc)(watchedValue_t, i)
      }
      indexOfLastBarInSession() {
        return (0, watchedValue_n.toInt)((this._sessionEndMs - 1 - this._sessionStartMs) / 1e3 / this._periodSec)
      }
      moveNext() {
        this.moveTo(this._sessionEndMs)
      }
      static minutes(watchedValue_e, watchedValue_t) {
        return new l(60 * watchedValue_e, watchedValue_t)
      }
      static seconds(watchedValue_e, watchedValue_t) {
        return new l(watchedValue_e, watchedValue_t)
      }
    }
    var c = i(50151),
      h = i(71149);
    const d = (0,
      watchedValue_s.get_timezone)("Etc/UTC");

    function u(watchedValue_e, watchedValue_t, i) {
      const o = (0, watchedValue_s.clone)(watchedValue_t),
        watchedValue_n = watchedValue_e.businessDaysToCalendarDays(o, 1);
      watchedValue_n > 1 && (0, watchedValue_s.add_date)(o, watchedValue_n - 1);
      const r = watchedValue_e.leftBorderOfDailyBar(o);
      if (null === r) throw new Error("Cannot calculate left border of daily bar");
      return (0, watchedValue_s.cal_to_utc)(i, r, !0)
    }
    class _ {
      constructor(watchedValue_e, watchedValue_t) {
        this.from = watchedValue_e, this.to = watchedValue_t
      }
      toString() {
        return `${this.from.toString()} - ${this.to.toString()}`
      }
    }
    class p extends r.BarBuilderBase {
      constructor(watchedValue_e, watchedValue_t, i, watchedValue_s, o = !1) {
        super(), this._periodStart = -Number.MAX_VALUE, this._periodEnd = -Number.MAX_VALUE, this
          ._periodLastBarStart = -Number.MAX_VALUE, this._periodStartDay = new h.BusinessDay(0, 0, 0), this
          ._periodEndDay = new h.BusinessDay(0, 0, 0), this._period = i, this._sessionTgt = watchedValue_e, this._builder = watchedValue_s,
          this._useBusinessDays = o, o ? ((0, c.assert)(null === watchedValue_t,
              "useBusinessDays and sessionSrc are mutually exclusive arguments"), this._sessionSrc = new r
            .SessionInfo("Etc/UTC", "24x7")) : this._sessionSrc = watchedValue_t || watchedValue_e
      }
      builder() {
        return this._builder
      }
      alignTimeIfPossible(watchedValue_e) {
        return this.tradingDayToSessionStart(watchedValue_e)
      }
      tradingDayToSessionStart(watchedValue_e) {
        return this.moveTo(watchedValue_e), this.startOfBar(0)
      }
      indexOfBar(watchedValue_e) {
        if (this._useBusinessDays) {
          const watchedValue_t = h.BusinessDay.fromCalendar((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, watchedValue_e));
          return watchedValue_t.before(this._periodStartDay) ? watchedValue_a.SessionStage.PRE_SESSION : this._periodEndDay.before(watchedValue_t) ? watchedValue_a
            .SessionStage.POST_SESSION : 0
        }
        return watchedValue_e < this._periodStart ? watchedValue_a.SessionStage.PRE_SESSION : watchedValue_e >= this._periodEnd ? watchedValue_a.SessionStage
          .POST_SESSION : 0
      }
      startOfBar(watchedValue_e) {
        if (watchedValue_e === watchedValue_a.SessionStage.PRE_SESSION) {
          const watchedValue_e = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionTgt.timezone, this._periodStart - 1),
            watchedValue_t = this._sessionTgt.spec.alignToNearestSessionEnd(watchedValue_e, -1);
          return (0, watchedValue_s.cal_to_utc)(this._sessionTgt.timezone, watchedValue_t) - 1
        }
        return watchedValue_e === watchedValue_a.SessionStage.POST_SESSION || watchedValue_e > 0 ? this._periodEnd : watchedValue_e === watchedValue_a.SessionStage.LASTBAR_SESSION ?
          this._periodLastBarStart : this._periodStart
      }
      moveTo(watchedValue_e) {
        let watchedValue_t = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, watchedValue_e);
        watchedValue_t = this._sessionSrc.spec.correctTradingDay(watchedValue_t);
        const i = (0, watchedValue_s.get_year)(watchedValue_t),
          o = this._indexOfPeriodInYear(watchedValue_t),
          watchedValue_n = o + this._period,
          r = this._sessionTgt.spec,
          watchedValue_a = this._sessionTgt.timezone,
          l = this._builder.startOfPeriod(o, i);
        this._periodStart = u(r, l, watchedValue_a);
        const c = r.businessDaysToCalendarDays(l, 1);
        c > 1 && (0, watchedValue_s.add_date)(l, c - 1), this._periodStartDay = h.BusinessDay.fromCalendar(l);
        let d = this._builder.startOfPeriod(watchedValue_n, i);
        this._periodEnd = u(r, d, watchedValue_a);
        const _ = (0, watchedValue_s.clone)(d);
        for ((0, watchedValue_s.add_date)(_, -1); r.isCalWeekEnd(_);)(0, watchedValue_s.add_date)(_, -1);
        this._periodEndDay = h.BusinessDay.fromCalendar(_), (0, watchedValue_s.add_date)(d, -1), d = function(watchedValue_e, watchedValue_t) {
          const i = (0, watchedValue_s.clone)(watchedValue_t);
          for (; watchedValue_e.isCalWeekEnd(i);)(0, watchedValue_s.add_date)(i, -1);
          return i
        }(this._sessionTgt.spec, d), this._periodLastBarStart = u(r, d, watchedValue_a), (this._periodLastBarStart < this
          ._periodStart || this._periodLastBarStart === this._periodEnd) && (this._periodLastBarStart = this
          ._periodStart)
      }
      endOfBar(watchedValue_e) {
        return watchedValue_e === watchedValue_a.SessionStage.LAST_SESSION_END ? this._getZonedDateTimeOfBorder(watchedValue_a.SessionStage
          .LAST_SESSION_END).getTime() + 1e3 : ((0, c.assert)(0 === watchedValue_e), this._periodEnd)
      }
      isLastBar(watchedValue_e, watchedValue_t) {
        if (0 !== watchedValue_e) throw new Error("index should be 0");
        return watchedValue_t >= this._periodLastBarStart
      }
      moveBarsForward(watchedValue_e, watchedValue_t) {
        (0, c.assert)(watchedValue_t > 0);
        const i = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionTgt.timezone, watchedValue_e);
        let o = this._sessionTgt.spec.correctTradingDay(i);
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t; watchedValue_e++) {
          const watchedValue_e = this._period + this._builder.indexOfPeriod(o);
          o = this._builder.startOfPeriod(watchedValue_e, (0, watchedValue_s.get_year)(o)), o = this._sessionTgt.spec.correctTradingDay(o)
        }
        return this.moveTo((0, watchedValue_s.cal_to_utc)(this._sessionTgt.timezone, o)), this.startOfBar(0)
      }
      currentRange() {
        return new _(this._periodStartDay, this._periodEndDay)
      }
      indexOfBarInYear(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, watchedValue_e),
          i = (0, watchedValue_s.get_year)(watchedValue_t),
          o = this._builder.indexOfPeriod(watchedValue_t),
          r = this._sessionTgt.timezone;
        let watchedValue_a = this._builder.startOfPeriod(o, i),
          l = u(this._sessionTgt.spec, watchedValue_a, r);
        return watchedValue_a = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(d, l), i < (0, watchedValue_s.get_year)(watchedValue_a) ? (watchedValue_a = this._builder
          .startOfPeriod(o - 1, i), l = u(this._sessionTgt.spec, watchedValue_a, r), {
            index: (o - 1) / this._period,
            time: l
          }) : {
          index: (0, watchedValue_n.toInt)(o / this._period),
          time: l
        }
      }
      sessionSrc() {
        return this._sessionSrc
      }
      sessionTgt() {
        return this._sessionTgt
      }
      static days(watchedValue_e, watchedValue_t, i) {
        return new p(watchedValue_t, i, watchedValue_e, new S(watchedValue_t), !1)
      }
      static weeks(watchedValue_e, watchedValue_t, i) {
        return new p(watchedValue_t, i, watchedValue_e, new C(watchedValue_t), !1)
      }
      static months(watchedValue_e, watchedValue_t, i) {
        return new p(watchedValue_t, i, watchedValue_e, new T(watchedValue_t), !1)
      }
      static daysFromBusinessDays(watchedValue_e, watchedValue_t) {
        return new p(watchedValue_t, null, watchedValue_e, new S(watchedValue_t), !0)
      }
      static weeksFromBusinessDays(watchedValue_e, watchedValue_t) {
        return new p(watchedValue_t, null, watchedValue_e, new C(watchedValue_t), !0)
      }
      static monthsFromBusinessDays(watchedValue_e, watchedValue_t) {
        return new p(watchedValue_t, null, watchedValue_e, new T(watchedValue_t), !0)
      }
      _getZonedDateTimeOfBorder(watchedValue_e) {
        (0, c.assert)(watchedValue_e === watchedValue_a.SessionStage.FIRST_SESSION_START || watchedValue_e === watchedValue_a.SessionStage.LAST_SESSION_END);
        const watchedValue_t = this._sessionTgt.spec.timezoneObj();
        if (watchedValue_e === watchedValue_a.SessionStage.FIRST_SESSION_START) {
          const watchedValue_e = this.currentRange().from.toCalendar(watchedValue_t);
          return (0, c.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(watchedValue_e)).from
        } {
          const watchedValue_e = this.currentRange().to.toCalendar(watchedValue_t);
          return (0, c.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(watchedValue_e)).to
        }
      }
      _indexOfPeriodInYear(watchedValue_e) {
        const watchedValue_t = this._builder.indexOfPeriod(watchedValue_e);
        let i = (0, watchedValue_n.toInt)(watchedValue_t / this._period) * this._period;
        return -1 === watchedValue_t && (i = -this._period), i
      }
    }

    function m(watchedValue_e, watchedValue_t) {
      const i = watchedValue_e.getWeekIndex(watchedValue_t),
        o = (0, watchedValue_s.get_day_of_week)(watchedValue_t) - watchedValue_e.getEntriesForWeek(i).firstDayOfWeek();
      return o < 0 ? o + 7 : o
    }

    function g(watchedValue_e, watchedValue_t) {
      const i = (0, watchedValue_s.get_day_of_year)(watchedValue_t) - 1;
      let o = m(watchedValue_e, watchedValue_t) - i % 7;
      return 0 === o ? (0, watchedValue_n.toInt)(i / 7) : (o >= 0 && (o -= 7), (0, watchedValue_n.toInt)((o + i) / 7))
    }
    class f {
      indexOfPeriod(watchedValue_e) {
        return (0, watchedValue_s.get_day_of_year)(watchedValue_e) - 1
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        const i = (0, watchedValue_s.days_per_year)(watchedValue_t);
        return (0, watchedValue_s.get_cal)(d, watchedValue_t, watchedValue_s.JANUARY, 1 + Math.min(watchedValue_e, i))
      }
    }
    class y extends f {
      constructor(watchedValue_e) {
        super(), this._sessionsSpec = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        return super.indexOfPeriod(watchedValue_e) - function(watchedValue_e, watchedValue_t) {
          const i = g(watchedValue_e, watchedValue_t),
            o = (0, watchedValue_s.get_cal)(d, (0, watchedValue_s.get_year)(watchedValue_t), watchedValue_s.JANUARY, 1);
          (0, watchedValue_s.add_date)(o, 7 * i);
          const watchedValue_n = i * watchedValue_e.weekEndsCountForSingleSession() + watchedValue_e.holidaysFromYearStart(o),
            r = (0, watchedValue_s.get_day_of_year)(watchedValue_t) - (0, watchedValue_s.get_day_of_year)(o);
          return watchedValue_n + r - watchedValue_e.calendarDaysToBusinessDays(o, r)
        }(this._sessionsSpec, watchedValue_e)
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        const i = 7 - this._sessionsSpec.weekEndsCountForSingleSession(),
          o = Math.max(0, Math.trunc(watchedValue_e / i) - 1),
          watchedValue_n = (0, watchedValue_s.get_cal)(d, watchedValue_t, watchedValue_s.JANUARY, 1),
          r = (0, watchedValue_s.days_per_year)(watchedValue_t);
        if ((0, watchedValue_s.add_date)(watchedValue_n, 7 * o), (watchedValue_e -= i * o - this._sessionsSpec.holidaysFromYearStart(watchedValue_n)) > 0) {
          const watchedValue_t = this._sessionsSpec.businessDaysToCalendarDays(watchedValue_n, watchedValue_e);
          (0, watchedValue_s.add_date)(watchedValue_n, watchedValue_t)
        }
        let watchedValue_a = (0, watchedValue_s.get_day_of_year)(watchedValue_n) - 1;
        return watchedValue_t < (0, watchedValue_s.get_year)(watchedValue_n) && (watchedValue_a += r), super.startOfPeriod(watchedValue_a, watchedValue_t)
      }
    }
    class v extends f {
      constructor(watchedValue_e) {
        super(), this._sessionsSpec = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        return super.indexOfPeriod(watchedValue_e) - this._sessionsSpec.daysOffFromYearStart(watchedValue_e)
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        const i = (0, watchedValue_s.get_cal)(d, watchedValue_t, watchedValue_s.JANUARY, 1);
        (0, watchedValue_s.add_date)(i, watchedValue_e);
        const o = this._sessionsSpec.daysOffFromYearStart(i);
        (0, watchedValue_s.add_date)(i, o);
        const watchedValue_n = this._sessionsSpec.daysOffFromYearStart(i) - o;
        if (watchedValue_n > 0) {
          const watchedValue_e = this._sessionsSpec.businessDaysToCalendarDays(i, watchedValue_n);
          (0, watchedValue_s.add_date)(i, watchedValue_e)
        }
        let r = (0, watchedValue_s.get_day_of_year)(i) - 1;
        if (watchedValue_t < (0, watchedValue_s.get_year)(i)) {
          r += (0, watchedValue_s.days_per_year)(watchedValue_t)
        }
        return super.startOfPeriod(r, watchedValue_t)
      }
    }
    class S {
      constructor(watchedValue_e) {
        this._builder = null, this._initialized = !1, this._session = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        return this._getBuilder().indexOfPeriod(watchedValue_e)
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        return this._getBuilder().startOfPeriod(watchedValue_e, watchedValue_t)
      }
      _getBuilder() {
        return null !== this._builder && this._initialized || (this._session.spec.hasWeekEnds() ? this._builder = this
          ._session.spec.hasHistoryCorrections() ? new v(this._session.spec) : new y(this._session.spec) : this
          ._builder = this._session.spec.hasHistoryCorrections() ? new v(this._session.spec) : new f, this
          ._initialized = !0), this._builder
      }
    }
    class b {
      constructor(watchedValue_e) {
        this._spec = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        let watchedValue_t = g(this._spec, watchedValue_e);
        return 0 === watchedValue_t && watchedValue_e.getTime() < this.startOfPeriod(0, (0, watchedValue_s.get_year)(watchedValue_e)).getTime() && (watchedValue_t = -1), watchedValue_t
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        if (watchedValue_e < 0) {
          watchedValue_t--;
          const i = (0, watchedValue_s.get_cal)(d, watchedValue_t, watchedValue_s.DECEMBER, 31, 23, 59, 59),
            o = this.indexOfPeriod(i),
            watchedValue_n = -1 * watchedValue_e,
            r = Math.trunc(o / watchedValue_n) * watchedValue_n;
          return this.startOfPeriod(r, watchedValue_t)
        }
        const i = (0, watchedValue_s.get_cal)(d, watchedValue_t, watchedValue_s.JANUARY, 1),
          o = m(this._spec, i),
          watchedValue_n = 0 === o ? 7 * watchedValue_e : 7 * (watchedValue_e + 1) - o;
        return watchedValue_n > (0, watchedValue_s.days_per_year)((0, watchedValue_s.get_year)(i)) ? this.startOfPeriod(0, watchedValue_t + 1) : ((0, watchedValue_s.add_date)(i, watchedValue_n),
          i)
      }
    }
    class w {
      constructor(watchedValue_e) {
        this._yearStartDataHash = new Map, this._spec = watchedValue_e
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        if (watchedValue_e < 0) {
          watchedValue_t--;
          const i = (0, watchedValue_s.get_cal)(d, watchedValue_t, watchedValue_s.DECEMBER, 31, 23, 59, 59),
            o = this.indexOfPeriod(i),
            watchedValue_n = -1 * watchedValue_e,
            r = Math.trunc(o / watchedValue_n) * watchedValue_n;
          return this.startOfPeriod(r, watchedValue_t)
        }
        const i = this._spec.getWeekIndicesWithAdditionalWeekBars(watchedValue_t),
          o = this._getStartOfYearData(watchedValue_t, i),
          watchedValue_n = this._moveToWeekIndexAccountingAdditional(o.firstWeekIndex, i, watchedValue_e),
          r = 7 * (watchedValue_n - o.firstWeekIndex);
        let watchedValue_a = (0, watchedValue_s.clone)((0, c.ensureNotNull)(o.startOfFirstBarInYear));
        if ((0, watchedValue_s.add_date)(watchedValue_a, r), (0, watchedValue_s.get_year)(watchedValue_a) > watchedValue_t) {
          const watchedValue_e = watchedValue_t + 1,
            i = this._spec.getWeekIndicesWithAdditionalWeekBars(watchedValue_e),
            watchedValue_s = this._getStartOfYearData(watchedValue_e, i);
          if (watchedValue_a.getTime() >= (0, c.ensureNotNull)(watchedValue_s.startOfFirstBarInYear).getTime()) return this.startOfPeriod(0, watchedValue_e)
        }
        return watchedValue_a = this._calculateBarWeekStart(watchedValue_a, i, watchedValue_n, watchedValue_e), watchedValue_a
      }
      indexOfPeriod(watchedValue_e) {
        const watchedValue_t = this._spec.getWeekIndex(watchedValue_e),
          i = this._spec.getWeekIndicesWithAdditionalWeekBars((0, watchedValue_s.get_year)(watchedValue_e)),
          o = this._getStartOfYearData((0, watchedValue_s.get_year)(watchedValue_e), i);
        if (watchedValue_e.getTime() < (0, c.ensureNotNull)(o.startOfFirstBarInYear).getTime()) return -1;
        if (0 === watchedValue_t && w.isOnFirstCalendarWeekOfYear(watchedValue_e) || 0 !== watchedValue_t && watchedValue_t === o.firstWeekIndex) return this
          ._calculateLastWeek(watchedValue_e, watchedValue_t, i, o.firstWeekbarsCount) - 1;
        let watchedValue_n = this._numberOfCalendarWeeks(watchedValue_e);
        return watchedValue_n += o.firstWeekbarsCount - o.fullWeeksAdjustment, watchedValue_n += this._calculateWeeksWithExtraBar(watchedValue_t, i, o
            .firstWeekIndex),
          watchedValue_n += this._calculateLastWeek(watchedValue_e, watchedValue_t, i, w.fullWeekOfAdditionalBarsCount) - 1, watchedValue_n
      }
      static isOnFirstCalendarWeekOfYear(watchedValue_e) {
        if ((0, watchedValue_s.get_day_of_year)(watchedValue_e) > watchedValue_s.LAST_DAY_OF_WEEK) return !1;
        const watchedValue_t = (0, watchedValue_s.get_cal)(d, (0, watchedValue_s.get_year)(watchedValue_e), watchedValue_s.JANUARY, 1, 0, 0),
          i = (0, watchedValue_s.clone)(watchedValue_t);
        return (0, watchedValue_s.add_date)(i, watchedValue_s.LAST_DAY_OF_WEEK - (0, watchedValue_s.get_day_of_week)(watchedValue_t)), watchedValue_e.getTime() < i.getTime()
      }
      _moveToWeekIndexAccountingAdditional(watchedValue_e, watchedValue_t, i) {
        let watchedValue_s = watchedValue_e + i;
        for (const i of watchedValue_t)
          if (!(i.weekIndex < watchedValue_e)) {
            if (i.weekIndex >= watchedValue_s) break;
            watchedValue_s--
          } return watchedValue_s
      }
      _calculateBarWeekStart(watchedValue_e, watchedValue_t, i, o) {
        const watchedValue_n = this._getIndexOfWeekWithExtraBarIfExists(watchedValue_t, i);
        if (null === watchedValue_n) {
          const watchedValue_t = this._spec.getEntriesForWeek(i).firstDayOfWeek() - (0, watchedValue_s.get_day_of_week)(watchedValue_e),
            o = (0, watchedValue_s.clone)(watchedValue_e);
          return (0, watchedValue_s.add_date)(o, watchedValue_t), o
        }
        const r = this._spec.getHistoryByIndex(watchedValue_n.entryIndex);
        if (this.indexOfPeriod((0, c.ensureNotNull)(r.getStartDay())) === o) return (0, watchedValue_s.clone)((0, c.ensureNotNull)(
          r.getStartDay()));
        const watchedValue_a = this._spec.getHistoryByIndex(watchedValue_n.entryIndex - 1).getEntries().firstDayOfWeek() - (0, watchedValue_s
            .get_day_of_week)(watchedValue_e),
          l = (0, watchedValue_s.clone)(watchedValue_e);
        return (0, watchedValue_s.add_date)(l, watchedValue_a), l
      }
      _numberOfCalendarWeeks(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_s.get_day_of_year)(watchedValue_e),
          i = (0, watchedValue_s.get_day_of_week)(watchedValue_e);
        return Math.trunc((watchedValue_t - i) / 7)
      }
      _getStartOfYearData(watchedValue_e, watchedValue_t) {
        let i = this._yearStartDataHash.get(watchedValue_e);
        if (void 0 !== i) return i;
        let o = (0, watchedValue_s.get_cal)(d, watchedValue_e, watchedValue_s.JANUARY, 1, 0, 0),
          watchedValue_n = this._spec.getWeekIndex(o),
          r = 0;
        for ((0, watchedValue_s.get_day_of_week)(o) === watchedValue_s.FIRST_DAY_OF_WEEK && (r = 1), i = this._getYearStartDataFromWeek(watchedValue_t, watchedValue_n,
          o); null === i.startOfFirstBarInYear;) watchedValue_n++, r++, o = this._moveToNextCalendarWeekStart(o), i = this
          ._getYearStartDataFromWeek(watchedValue_t, watchedValue_n, o);
        return i.fullWeeksAdjustment = r, this._yearStartDataHash.set(watchedValue_e, i), i
      }
      _moveToNextCalendarWeekStart(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_s.get_day_of_week)(watchedValue_e),
          i = (0, watchedValue_s.clone)(watchedValue_e);
        return (0, watchedValue_s.add_date)(i, watchedValue_s.LAST_DAY_OF_WEEK - watchedValue_t + 1), i
      }
      _getYearStartDataFromWeek(watchedValue_e, watchedValue_t, i) {
        const o = (0, watchedValue_s.get_day_of_week)(i);
        let watchedValue_n = null,
          r = 0;
        const watchedValue_a = this._getIndexOfWeekWithExtraBarIfExists(watchedValue_e, watchedValue_t);
        if (null !== watchedValue_a) {
          let watchedValue_e = this._spec.getHistoryByIndex(watchedValue_a.entryIndex - 1).getEntries().firstDayOfWeek() - o;
          if (watchedValue_e >= 0) watchedValue_n = (0, watchedValue_s.clone)(i), (0, watchedValue_s.add_date)(watchedValue_n, watchedValue_e), r = 2;
          else {
            const watchedValue_t = this._spec.getHistoryByIndex(watchedValue_a.entryIndex);
            watchedValue_e = watchedValue_t.getEntries().firstDayOfWeek() - o, watchedValue_e >= 0 && (watchedValue_n = watchedValue_t.getStartDay(), watchedValue_n && (watchedValue_n = (0, watchedValue_s.clone)(watchedValue_n)), r =
              1)
          }
        } else {
          const watchedValue_e = this._spec.getEntriesForWeek(watchedValue_t),
            watchedValue_a = watchedValue_e.firstDayOfWeek() - o;
          watchedValue_a >= 0 && (this._hasWorkingDays(watchedValue_e) || this._hasWorkingDaysNextWeek(watchedValue_t + 1)) && (watchedValue_n = (0, watchedValue_s.clone)(i), (0, watchedValue_s
            .add_date)(watchedValue_n, watchedValue_a), r = 1)
        }
        return {
          startOfFirstBarInYear: watchedValue_n,
          firstWeekIndex: watchedValue_t,
          firstWeekbarsCount: r,
          fullWeeksAdjustment: 0
        }
      }
      _hasWorkingDays(watchedValue_e) {
        if (0 === watchedValue_e.entriesByDay().size) return !1;
        for (let watchedValue_t = watchedValue_e.firstDayOfWeek(); watchedValue_t <= watchedValue_s.LAST_DAY_OF_WEEK; watchedValue_t++)
          if (void 0 !== watchedValue_e.entriesByDay().get(watchedValue_t)) return !0;
        return !1
      }
      _hasWorkingDaysNextWeek(watchedValue_e) {
        const watchedValue_t = this._spec.getEntriesForWeek(watchedValue_e);
        for (let watchedValue_e = 1; watchedValue_e < watchedValue_t.firstDayOfWeek(); watchedValue_e++)
          if (void 0 !== watchedValue_t.entriesByDay().get(watchedValue_e)) return !0;
        return !1
      }
      _calculateWeeksWithExtraBar(watchedValue_e, watchedValue_t, i) {
        let watchedValue_s = 0;
        for (const o of watchedValue_t) {
          if (o.weekIndex >= watchedValue_e) break;
          o.weekIndex > i && watchedValue_s++
        }
        return watchedValue_s
      }
      _calculateLastWeek(watchedValue_e, watchedValue_t, i, o) {
        const watchedValue_n = (0, watchedValue_s.get_day_of_week)(watchedValue_e),
          r = this._getIndexOfWeekWithExtraBarIfExists(i, watchedValue_t);
        if (null === r) {
          return watchedValue_n - this._spec.getEntriesForWeek(watchedValue_t).firstDayOfWeek() >= 0 ? 1 : 0
        }
        const watchedValue_a = this._positionInsideWeekWithSeveralBars(r, watchedValue_n);
        return watchedValue_a === w.IsInNewSession ? o : watchedValue_a === w.IsInMidSession ? o - 1 : 0
      }
      _getIndexOfWeekWithExtraBarIfExists(watchedValue_e, watchedValue_t) {
        for (const i of watchedValue_e) {
          if (i.weekIndex === watchedValue_t) return i;
          if (i.weekIndex > watchedValue_t) break
        }
        return null
      }
      _positionInsideWeekWithSeveralBars(watchedValue_e, watchedValue_t) {
        let i = this._spec.getHistoryByIndex(watchedValue_e.entryIndex).getEntries().firstDayOfWeek() - watchedValue_t;
        if (i <= 0) return w.IsInNewSession;
        return i = this._spec.getHistoryByIndex(watchedValue_e.entryIndex - 1).getEntries().firstDayOfWeek() - watchedValue_t, i <= 0 ? w
          .IsInMidSession : w.IsBeforeAnySession
      }
    }
    w.IsBeforeAnySession = -1, w.IsInMidSession = 0, w.IsInNewSession = 1, w.fullWeekOfAdditionalBarsCount = 2;
    class C {
      constructor(watchedValue_e) {
        this._builder = null, this._session = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        return this._getBuilder().indexOfPeriod(watchedValue_e)
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        return this._getBuilder().startOfPeriod(watchedValue_e, watchedValue_t)
      }
      _getBuilder() {
        return null == this._builder && (this._builder = this._session.spec.hasHistoryCorrections() ? new w(this
          ._session.spec) : new b(this._session.spec)), this._builder
      }
    }
    class T {
      constructor(watchedValue_e) {
        this._session = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        return (0, watchedValue_s.get_month)(watchedValue_e)
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        if (watchedValue_e < 0) {
          const i = (0, watchedValue_n.toInt)((11 - watchedValue_e) / 12);
          watchedValue_t -= i, watchedValue_e += 12 * i
        } else watchedValue_e > watchedValue_s.DECEMBER && (watchedValue_t++, watchedValue_e = watchedValue_s.JANUARY);
        return (0, watchedValue_s.get_cal)(d, watchedValue_t, watchedValue_e, 1)
      }
    }
    var P, x;

    function M(watchedValue_e, watchedValue_t, i, watchedValue_s = !1) {
      const watchedValue_n = o.Interval.parse(watchedValue_e),
        r = watchedValue_n.multiplier();
      return watchedValue_n.isMinutes() ? l.minutes(r, watchedValue_t) : watchedValue_n.isSeconds() ? l.seconds(r, watchedValue_t) : watchedValue_n.isTicks() ? new l(1, watchedValue_t) : watchedValue_n
      .isRange() ? new l(60 * r, watchedValue_t) : new p(watchedValue_t, i ?? null, r, function(watchedValue_e, watchedValue_t) {
          switch (watchedValue_e) {
            case o.ResolutionKind.Days:
              return new S(watchedValue_t);
            case o.ResolutionKind.Weeks:
              return new C(watchedValue_t);
            case o.ResolutionKind.Months:
              return new T(watchedValue_t)
          }
          throw new Error(`Unknown dwm resolution: ${watchedValue_e}`)
        }(watchedValue_n.kind(), watchedValue_t), watchedValue_s)
    }

    function I(watchedValue_e, watchedValue_t, i, watchedValue_s, o, watchedValue_n, r) {
      return L(watchedValue_e, watchedValue_t, i, watchedValue_s, o, watchedValue_n, r, 0)
    }

    function A(watchedValue_e, watchedValue_t, i, watchedValue_s, o, watchedValue_n, r) {
      return L(watchedValue_e, watchedValue_t, i, watchedValue_s, o, watchedValue_n, r, 1)
    }

    function L(watchedValue_e, watchedValue_t, i, watchedValue_n, watchedValue_a, l, c, h) {
      const d = o.Interval.parse(watchedValue_a + watchedValue_n);
      if (d.isMonths()) {
        const watchedValue_e = new Date(c);
        return 0 === h && watchedValue_e.setUTCDate(1),
          function(watchedValue_e, watchedValue_t) {
            B(watchedValue_e, Math.floor(watchedValue_t / 12));
            let i = watchedValue_e.getUTCMonth() - watchedValue_t % 12;
            i < 0 && (B(watchedValue_e, 1), i += 12);
            watchedValue_e.setUTCMonth(i);
            for (; watchedValue_e.getUTCMonth() !== i;) V(watchedValue_e, 1)
          }(watchedValue_e, l * d.multiplier()), watchedValue_e.getTime()
      }
      const u = new r.SessionInfo("Etc/UTC", watchedValue_e, watchedValue_t, i),
        _ = d.inMilliseconds(),
        p = d.isDWM();
      let m;
      if (p) m = 864e5;
      else {
        const watchedValue_e = u.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(u.timezone, c));
        m = 60 * u.spec.getEntriesForWeek(watchedValue_e).maxTradingDayLength() * 1e3
      }
      let g = 0;
      if (d.isWeeks()) g = 7;
      else {
        const watchedValue_e = u.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(u.timezone, c));
        g = 7 - u.spec.getEntriesForWeek(watchedValue_e).weekEndsCount()
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

    function k(watchedValue_e, watchedValue_t, i, watchedValue_n, watchedValue_a, l, c) {
      const h = o.Interval.parse(watchedValue_a + watchedValue_n);
      if (h.isMonths()) {
        const watchedValue_e = new Date(l),
          watchedValue_t = new Date(c);
        let i = 12 * (watchedValue_t.getUTCFullYear() - watchedValue_e.getUTCFullYear());
        return i += watchedValue_t.getUTCMonth() - watchedValue_e.getUTCMonth(), Math.ceil(i / h.multiplier())
      }
      const d = new r.SessionInfo("Etc/UTC", watchedValue_e, watchedValue_t, i),
        u = h.inMilliseconds();
      let _;
      if (h.isDWM()) _ = 864e5;
      else {
        const watchedValue_e = d.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(d.timezone, c));
        _ = 60 * d.spec.getEntriesForWeek(watchedValue_e).maxTradingDayLength() * 1e3
      }
      let p = 0;
      if (h.isWeeks()) p = 7;
      else {
        const watchedValue_e = d.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(d.timezone, c));
        p = 7 - d.spec.getEntriesForWeek(watchedValue_e).weekEndsCount()
      }
      const m = c - l,
        g = _ / u,
        f = p * g;
      let y = m / 864e5 * g;
      y >= f && (y = m / 6048e5 * f);
      return y % 1 <= Number.EPSILON * Math.ceil(y) ? Math.round(y) : Math.ceil(y)
    }

    function E(watchedValue_e, watchedValue_t) {
      const i = (0, watchedValue_s.clone)(watchedValue_t);
      return watchedValue_e.alignToSessionStart(i), (0, watchedValue_s.cal_to_utc)((0, watchedValue_s.get_timezone)(watchedValue_e.timezone()), i)
    }

    function D(watchedValue_e, watchedValue_t) {
      const i = (0, watchedValue_s.utc_to_cal)(watchedValue_t.timezone, +watchedValue_e);
      let o = (0, watchedValue_s.get_day_of_week)(i),
        watchedValue_n = (0, watchedValue_s.get_minutes_from_midnight)(i);
      const r = watchedValue_t.spec.findSession(watchedValue_t.spec.getWeekIndex(i), o, watchedValue_n).getEntry();
      return r.isOvernight() && watchedValue_n > r.startOffset() + r.length() && o === r.dayOfWeek() - 1 && (o++, watchedValue_n -= 1440), o === r
        .dayOfWeek() && watchedValue_n >= r.startOffset() && watchedValue_n < r.startOffset() + r.length()
    }

    function B(watchedValue_e, watchedValue_t) {
      const i = watchedValue_e.getUTCMonth();
      watchedValue_e.setUTCFullYear(watchedValue_e.getUTCFullYear() - watchedValue_t), watchedValue_e.getUTCMonth() !== i && V(watchedValue_e, 1)
    }

    function V(watchedValue_e, watchedValue_t) {
      watchedValue_e.setTime(watchedValue_e.getTime() - 864e5 * watchedValue_t)
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.AlignToFirstDay = 0] = "AlignToFirstDay", watchedValue_e[watchedValue_e.AlignToClosestDay = 1] = "AlignToClosestDay"
    }(P || (P = {})),
    function(watchedValue_e) {
      watchedValue_e[watchedValue_e.D = 864e5] = "D", watchedValue_e[watchedValue_e.W = 6048e5] = "W"
    }(x || (x = {}))