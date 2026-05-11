/**
 * Module 51101 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

51101: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_r(watchedValue_t), watchedValue_i.watchedValue_d(watchedValue_t, {
      SessionInfo: () => watchedValue_r.SessionInfo,
      alignExchangeTimeToSessionStartAndReturnUTC: () => E,
      alignPeriodsBackForDataRequest: () => I,
      alignPeriodsBackForVisibleRange: () => A,
      getPeriodsBetweenDates: () => watchedValue_k,
      isTradingNow: () => D,
      newBarBuilder: () => M
    });
    var watchedValue_s = watchedValue_i(37236),
      watchedValue_o = watchedValue_i(10892),
      watchedValue_n = watchedValue_i(77914),
      watchedValue_r = watchedValue_i(47312),
      watchedValue_a = watchedValue_i(51829);
    class watchedValue_l extends watchedValue_r.BarBuilderBase {
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
          watchedValue_i = (0, watchedValue_s.utc_to_cal)(watchedValue_t, watchedValue_e),
          watchedValue_o = this._session.spec.alignToSessionStart(watchedValue_i);
        this._sessionStartMs = (0, watchedValue_s.cal_to_utc)(watchedValue_t, watchedValue_i), (0, watchedValue_s.add_minutes)(watchedValue_i, watchedValue_o), this._sessionEndMs = (0, watchedValue_s
          .cal_to_utc)(watchedValue_t, watchedValue_i)
      }
      indexOfLastBarInSession() {
        return (0, watchedValue_n.toInt)((this._sessionEndMs - 1 - this._sessionStartMs) / 1e3 / this._periodSec)
      }
      moveNext() {
        this.moveTo(this._sessionEndMs)
      }
      static minutes(watchedValue_e, watchedValue_t) {
        return new watchedValue_l(60 * watchedValue_e, watchedValue_t)
      }
      static seconds(watchedValue_e, watchedValue_t) {
        return new watchedValue_l(watchedValue_e, watchedValue_t)
      }
    }
    var watchedValue_c = watchedValue_i(50151),
      watchedValue_h = watchedValue_i(71149);
    const watchedValue_d = (0,
      watchedValue_s.get_timezone)("Etc/UTC");

    function watchedValue_u(watchedValue_e, watchedValue_t, watchedValue_i) {
      const watchedValue_o = (0, watchedValue_s.clone)(watchedValue_t),
        watchedValue_n = watchedValue_e.businessDaysToCalendarDays(watchedValue_o, 1);
      watchedValue_n > 1 && (0, watchedValue_s.add_date)(watchedValue_o, watchedValue_n - 1);
      const watchedValue_r = watchedValue_e.leftBorderOfDailyBar(watchedValue_o);
      if (null === watchedValue_r) throw new Error("Cannot calculate left border of daily bar");
      return (0, watchedValue_s.cal_to_utc)(watchedValue_i, watchedValue_r, !0)
    }
    class _ {
      constructor(watchedValue_e, watchedValue_t) {
        this.from = watchedValue_e, this.to = watchedValue_t
      }
      toString() {
        return `${this.from.toString()} - ${this.to.toString()}`
      }
    }
    class watchedValue_p extends watchedValue_r.BarBuilderBase {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o = !1) {
        super(), this._periodStart = -Number.MAX_VALUE, this._periodEnd = -Number.MAX_VALUE, this
          ._periodLastBarStart = -Number.MAX_VALUE, this._periodStartDay = new watchedValue_h.BusinessDay(0, 0, 0), this
          ._periodEndDay = new watchedValue_h.BusinessDay(0, 0, 0), this._period = watchedValue_i, this._sessionTgt = watchedValue_e, this._builder = watchedValue_s,
          this._useBusinessDays = watchedValue_o, watchedValue_o ? ((0, watchedValue_c.assert)(null === watchedValue_t,
              "useBusinessDays and sessionSrc are mutually exclusive arguments"), this._sessionSrc = new watchedValue_r
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
          const watchedValue_t = watchedValue_h.BusinessDay.fromCalendar((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, watchedValue_e));
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
        const watchedValue_i = (0, watchedValue_s.get_year)(watchedValue_t),
          watchedValue_o = this._indexOfPeriodInYear(watchedValue_t),
          watchedValue_n = watchedValue_o + this._period,
          watchedValue_r = this._sessionTgt.spec,
          watchedValue_a = this._sessionTgt.timezone,
          watchedValue_l = this._builder.startOfPeriod(watchedValue_o, watchedValue_i);
        this._periodStart = watchedValue_u(watchedValue_r, watchedValue_l, watchedValue_a);
        const watchedValue_c = watchedValue_r.businessDaysToCalendarDays(watchedValue_l, 1);
        watchedValue_c > 1 && (0, watchedValue_s.add_date)(watchedValue_l, watchedValue_c - 1), this._periodStartDay = watchedValue_h.BusinessDay.fromCalendar(watchedValue_l);
        let watchedValue_d = this._builder.startOfPeriod(watchedValue_n, watchedValue_i);
        this._periodEnd = watchedValue_u(watchedValue_r, watchedValue_d, watchedValue_a);
        const _ = (0, watchedValue_s.clone)(watchedValue_d);
        for ((0, watchedValue_s.add_date)(_, -1); watchedValue_r.isCalWeekEnd(_);)(0, watchedValue_s.add_date)(_, -1);
        this._periodEndDay = watchedValue_h.BusinessDay.fromCalendar(_), (0, watchedValue_s.add_date)(watchedValue_d, -1), watchedValue_d = function(watchedValue_e, watchedValue_t) {
          const watchedValue_i = (0, watchedValue_s.clone)(watchedValue_t);
          for (; watchedValue_e.isCalWeekEnd(watchedValue_i);)(0, watchedValue_s.add_date)(watchedValue_i, -1);
          return watchedValue_i
        }(this._sessionTgt.spec, watchedValue_d), this._periodLastBarStart = watchedValue_u(watchedValue_r, watchedValue_d, watchedValue_a), (this._periodLastBarStart < this
          ._periodStart || this._periodLastBarStart === this._periodEnd) && (this._periodLastBarStart = this
          ._periodStart)
      }
      endOfBar(watchedValue_e) {
        return watchedValue_e === watchedValue_a.SessionStage.LAST_SESSION_END ? this._getZonedDateTimeOfBorder(watchedValue_a.SessionStage
          .LAST_SESSION_END).getTime() + 1e3 : ((0, watchedValue_c.assert)(0 === watchedValue_e), this._periodEnd)
      }
      isLastBar(watchedValue_e, watchedValue_t) {
        if (0 !== watchedValue_e) throw new Error("index should be 0");
        return watchedValue_t >= this._periodLastBarStart
      }
      moveBarsForward(watchedValue_e, watchedValue_t) {
        (0, watchedValue_c.assert)(watchedValue_t > 0);
        const watchedValue_i = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionTgt.timezone, watchedValue_e);
        let watchedValue_o = this._sessionTgt.spec.correctTradingDay(watchedValue_i);
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t; watchedValue_e++) {
          const watchedValue_e = this._period + this._builder.indexOfPeriod(watchedValue_o);
          watchedValue_o = this._builder.startOfPeriod(watchedValue_e, (0, watchedValue_s.get_year)(watchedValue_o)), watchedValue_o = this._sessionTgt.spec.correctTradingDay(watchedValue_o)
        }
        return this.moveTo((0, watchedValue_s.cal_to_utc)(this._sessionTgt.timezone, watchedValue_o)), this.startOfBar(0)
      }
      currentRange() {
        return new _(this._periodStartDay, this._periodEndDay)
      }
      indexOfBarInYear(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, watchedValue_e),
          watchedValue_i = (0, watchedValue_s.get_year)(watchedValue_t),
          watchedValue_o = this._builder.indexOfPeriod(watchedValue_t),
          watchedValue_r = this._sessionTgt.timezone;
        let watchedValue_a = this._builder.startOfPeriod(watchedValue_o, watchedValue_i),
          watchedValue_l = watchedValue_u(this._sessionTgt.spec, watchedValue_a, watchedValue_r);
        return watchedValue_a = (0, watchedValue_s.get_cal_from_unix_timestamp_ms)(watchedValue_d, watchedValue_l), watchedValue_i < (0, watchedValue_s.get_year)(watchedValue_a) ? (watchedValue_a = this._builder
          .startOfPeriod(watchedValue_o - 1, watchedValue_i), watchedValue_l = watchedValue_u(this._sessionTgt.spec, watchedValue_a, watchedValue_r), {
            index: (watchedValue_o - 1) / this._period,
            time: watchedValue_l
          }) : {
          index: (0, watchedValue_n.toInt)(watchedValue_o / this._period),
          time: watchedValue_l
        }
      }
      sessionSrc() {
        return this._sessionSrc
      }
      sessionTgt() {
        return this._sessionTgt
      }
      static days(watchedValue_e, watchedValue_t, watchedValue_i) {
        return new watchedValue_p(watchedValue_t, watchedValue_i, watchedValue_e, new S(watchedValue_t), !1)
      }
      static weeks(watchedValue_e, watchedValue_t, watchedValue_i) {
        return new watchedValue_p(watchedValue_t, watchedValue_i, watchedValue_e, new C(watchedValue_t), !1)
      }
      static months(watchedValue_e, watchedValue_t, watchedValue_i) {
        return new watchedValue_p(watchedValue_t, watchedValue_i, watchedValue_e, new T(watchedValue_t), !1)
      }
      static daysFromBusinessDays(watchedValue_e, watchedValue_t) {
        return new watchedValue_p(watchedValue_t, null, watchedValue_e, new S(watchedValue_t), !0)
      }
      static weeksFromBusinessDays(watchedValue_e, watchedValue_t) {
        return new watchedValue_p(watchedValue_t, null, watchedValue_e, new C(watchedValue_t), !0)
      }
      static monthsFromBusinessDays(watchedValue_e, watchedValue_t) {
        return new watchedValue_p(watchedValue_t, null, watchedValue_e, new T(watchedValue_t), !0)
      }
      _getZonedDateTimeOfBorder(watchedValue_e) {
        (0, watchedValue_c.assert)(watchedValue_e === watchedValue_a.SessionStage.FIRST_SESSION_START || watchedValue_e === watchedValue_a.SessionStage.LAST_SESSION_END);
        const watchedValue_t = this._sessionTgt.spec.timezoneObj();
        if (watchedValue_e === watchedValue_a.SessionStage.FIRST_SESSION_START) {
          const watchedValue_e = this.currentRange().from.toCalendar(watchedValue_t);
          return (0, watchedValue_c.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(watchedValue_e)).from
        } {
          const watchedValue_e = this.currentRange().to.toCalendar(watchedValue_t);
          return (0, watchedValue_c.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(watchedValue_e)).to
        }
      }
      _indexOfPeriodInYear(watchedValue_e) {
        const watchedValue_t = this._builder.indexOfPeriod(watchedValue_e);
        let watchedValue_i = (0, watchedValue_n.toInt)(watchedValue_t / this._period) * this._period;
        return -1 === watchedValue_t && (watchedValue_i = -this._period), watchedValue_i
      }
    }

    function watchedValue_m(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_e.getWeekIndex(watchedValue_t),
        watchedValue_o = (0, watchedValue_s.get_day_of_week)(watchedValue_t) - watchedValue_e.getEntriesForWeek(watchedValue_i).firstDayOfWeek();
      return watchedValue_o < 0 ? watchedValue_o + 7 : watchedValue_o
    }

    function watchedValue_g(watchedValue_e, watchedValue_t) {
      const watchedValue_i = (0, watchedValue_s.get_day_of_year)(watchedValue_t) - 1;
      let watchedValue_o = watchedValue_m(watchedValue_e, watchedValue_t) - watchedValue_i % 7;
      return 0 === watchedValue_o ? (0, watchedValue_n.toInt)(watchedValue_i / 7) : (watchedValue_o >= 0 && (watchedValue_o -= 7), (0, watchedValue_n.toInt)((watchedValue_o + watchedValue_i) / 7))
    }
    class watchedValue_f {
      indexOfPeriod(watchedValue_e) {
        return (0, watchedValue_s.get_day_of_year)(watchedValue_e) - 1
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        const watchedValue_i = (0, watchedValue_s.days_per_year)(watchedValue_t);
        return (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_t, watchedValue_s.JANUARY, 1 + Math.min(watchedValue_e, watchedValue_i))
      }
    }
    class watchedValue_y extends watchedValue_f {
      constructor(watchedValue_e) {
        super(), this._sessionsSpec = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        return super.indexOfPeriod(watchedValue_e) - function(watchedValue_e, watchedValue_t) {
          const watchedValue_i = watchedValue_g(watchedValue_e, watchedValue_t),
            watchedValue_o = (0, watchedValue_s.get_cal)(watchedValue_d, (0, watchedValue_s.get_year)(watchedValue_t), watchedValue_s.JANUARY, 1);
          (0, watchedValue_s.add_date)(watchedValue_o, 7 * watchedValue_i);
          const watchedValue_n = watchedValue_i * watchedValue_e.weekEndsCountForSingleSession() + watchedValue_e.holidaysFromYearStart(watchedValue_o),
            watchedValue_r = (0, watchedValue_s.get_day_of_year)(watchedValue_t) - (0, watchedValue_s.get_day_of_year)(watchedValue_o);
          return watchedValue_n + watchedValue_r - watchedValue_e.calendarDaysToBusinessDays(watchedValue_o, watchedValue_r)
        }(this._sessionsSpec, watchedValue_e)
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        const watchedValue_i = 7 - this._sessionsSpec.weekEndsCountForSingleSession(),
          watchedValue_o = Math.max(0, Math.trunc(watchedValue_e / watchedValue_i) - 1),
          watchedValue_n = (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_t, watchedValue_s.JANUARY, 1),
          watchedValue_r = (0, watchedValue_s.days_per_year)(watchedValue_t);
        if ((0, watchedValue_s.add_date)(watchedValue_n, 7 * watchedValue_o), (watchedValue_e -= watchedValue_i * watchedValue_o - this._sessionsSpec.holidaysFromYearStart(watchedValue_n)) > 0) {
          const watchedValue_t = this._sessionsSpec.businessDaysToCalendarDays(watchedValue_n, watchedValue_e);
          (0, watchedValue_s.add_date)(watchedValue_n, watchedValue_t)
        }
        let watchedValue_a = (0, watchedValue_s.get_day_of_year)(watchedValue_n) - 1;
        return watchedValue_t < (0, watchedValue_s.get_year)(watchedValue_n) && (watchedValue_a += watchedValue_r), super.startOfPeriod(watchedValue_a, watchedValue_t)
      }
    }
    class watchedValue_v extends watchedValue_f {
      constructor(watchedValue_e) {
        super(), this._sessionsSpec = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        return super.indexOfPeriod(watchedValue_e) - this._sessionsSpec.daysOffFromYearStart(watchedValue_e)
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        const watchedValue_i = (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_t, watchedValue_s.JANUARY, 1);
        (0, watchedValue_s.add_date)(watchedValue_i, watchedValue_e);
        const watchedValue_o = this._sessionsSpec.daysOffFromYearStart(watchedValue_i);
        (0, watchedValue_s.add_date)(watchedValue_i, watchedValue_o);
        const watchedValue_n = this._sessionsSpec.daysOffFromYearStart(watchedValue_i) - watchedValue_o;
        if (watchedValue_n > 0) {
          const watchedValue_e = this._sessionsSpec.businessDaysToCalendarDays(watchedValue_i, watchedValue_n);
          (0, watchedValue_s.add_date)(watchedValue_i, watchedValue_e)
        }
        let watchedValue_r = (0, watchedValue_s.get_day_of_year)(watchedValue_i) - 1;
        if (watchedValue_t < (0, watchedValue_s.get_year)(watchedValue_i)) {
          watchedValue_r += (0, watchedValue_s.days_per_year)(watchedValue_t)
        }
        return super.startOfPeriod(watchedValue_r, watchedValue_t)
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
          ._session.spec.hasHistoryCorrections() ? new watchedValue_v(this._session.spec) : new watchedValue_y(this._session.spec) : this
          ._builder = this._session.spec.hasHistoryCorrections() ? new watchedValue_v(this._session.spec) : new watchedValue_f, this
          ._initialized = !0), this._builder
      }
    }
    class watchedValue_b {
      constructor(watchedValue_e) {
        this._spec = watchedValue_e
      }
      indexOfPeriod(watchedValue_e) {
        let watchedValue_t = watchedValue_g(this._spec, watchedValue_e);
        return 0 === watchedValue_t && watchedValue_e.getTime() < this.startOfPeriod(0, (0, watchedValue_s.get_year)(watchedValue_e)).getTime() && (watchedValue_t = -1), watchedValue_t
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        if (watchedValue_e < 0) {
          watchedValue_t--;
          const watchedValue_i = (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_t, watchedValue_s.DECEMBER, 31, 23, 59, 59),
            watchedValue_o = this.indexOfPeriod(watchedValue_i),
            watchedValue_n = -1 * watchedValue_e,
            watchedValue_r = Math.trunc(watchedValue_o / watchedValue_n) * watchedValue_n;
          return this.startOfPeriod(watchedValue_r, watchedValue_t)
        }
        const watchedValue_i = (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_t, watchedValue_s.JANUARY, 1),
          watchedValue_o = watchedValue_m(this._spec, watchedValue_i),
          watchedValue_n = 0 === watchedValue_o ? 7 * watchedValue_e : 7 * (watchedValue_e + 1) - watchedValue_o;
        return watchedValue_n > (0, watchedValue_s.days_per_year)((0, watchedValue_s.get_year)(watchedValue_i)) ? this.startOfPeriod(0, watchedValue_t + 1) : ((0, watchedValue_s.add_date)(watchedValue_i, watchedValue_n),
          watchedValue_i)
      }
    }
    class watchedValue_w {
      constructor(watchedValue_e) {
        this._yearStartDataHash = new Map, this._spec = watchedValue_e
      }
      startOfPeriod(watchedValue_e, watchedValue_t) {
        if (watchedValue_e < 0) {
          watchedValue_t--;
          const watchedValue_i = (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_t, watchedValue_s.DECEMBER, 31, 23, 59, 59),
            watchedValue_o = this.indexOfPeriod(watchedValue_i),
            watchedValue_n = -1 * watchedValue_e,
            watchedValue_r = Math.trunc(watchedValue_o / watchedValue_n) * watchedValue_n;
          return this.startOfPeriod(watchedValue_r, watchedValue_t)
        }
        const watchedValue_i = this._spec.getWeekIndicesWithAdditionalWeekBars(watchedValue_t),
          watchedValue_o = this._getStartOfYearData(watchedValue_t, watchedValue_i),
          watchedValue_n = this._moveToWeekIndexAccountingAdditional(watchedValue_o.firstWeekIndex, watchedValue_i, watchedValue_e),
          watchedValue_r = 7 * (watchedValue_n - watchedValue_o.firstWeekIndex);
        let watchedValue_a = (0, watchedValue_s.clone)((0, watchedValue_c.ensureNotNull)(watchedValue_o.startOfFirstBarInYear));
        if ((0, watchedValue_s.add_date)(watchedValue_a, watchedValue_r), (0, watchedValue_s.get_year)(watchedValue_a) > watchedValue_t) {
          const watchedValue_e = watchedValue_t + 1,
            watchedValue_i = this._spec.getWeekIndicesWithAdditionalWeekBars(watchedValue_e),
            watchedValue_s = this._getStartOfYearData(watchedValue_e, watchedValue_i);
          if (watchedValue_a.getTime() >= (0, watchedValue_c.ensureNotNull)(watchedValue_s.startOfFirstBarInYear).getTime()) return this.startOfPeriod(0, watchedValue_e)
        }
        return watchedValue_a = this._calculateBarWeekStart(watchedValue_a, watchedValue_i, watchedValue_n, watchedValue_e), watchedValue_a
      }
      indexOfPeriod(watchedValue_e) {
        const watchedValue_t = this._spec.getWeekIndex(watchedValue_e),
          watchedValue_i = this._spec.getWeekIndicesWithAdditionalWeekBars((0, watchedValue_s.get_year)(watchedValue_e)),
          watchedValue_o = this._getStartOfYearData((0, watchedValue_s.get_year)(watchedValue_e), watchedValue_i);
        if (watchedValue_e.getTime() < (0, watchedValue_c.ensureNotNull)(watchedValue_o.startOfFirstBarInYear).getTime()) return -1;
        if (0 === watchedValue_t && watchedValue_w.isOnFirstCalendarWeekOfYear(watchedValue_e) || 0 !== watchedValue_t && watchedValue_t === watchedValue_o.firstWeekIndex) return this
          ._calculateLastWeek(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_o.firstWeekbarsCount) - 1;
        let watchedValue_n = this._numberOfCalendarWeeks(watchedValue_e);
        return watchedValue_n += watchedValue_o.firstWeekbarsCount - watchedValue_o.fullWeeksAdjustment, watchedValue_n += this._calculateWeeksWithExtraBar(watchedValue_t, watchedValue_i, watchedValue_o
            .firstWeekIndex),
          watchedValue_n += this._calculateLastWeek(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_w.fullWeekOfAdditionalBarsCount) - 1, watchedValue_n
      }
      static isOnFirstCalendarWeekOfYear(watchedValue_e) {
        if ((0, watchedValue_s.get_day_of_year)(watchedValue_e) > watchedValue_s.LAST_DAY_OF_WEEK) return !1;
        const watchedValue_t = (0, watchedValue_s.get_cal)(watchedValue_d, (0, watchedValue_s.get_year)(watchedValue_e), watchedValue_s.JANUARY, 1, 0, 0),
          watchedValue_i = (0, watchedValue_s.clone)(watchedValue_t);
        return (0, watchedValue_s.add_date)(watchedValue_i, watchedValue_s.LAST_DAY_OF_WEEK - (0, watchedValue_s.get_day_of_week)(watchedValue_t)), watchedValue_e.getTime() < watchedValue_i.getTime()
      }
      _moveToWeekIndexAccountingAdditional(watchedValue_e, watchedValue_t, watchedValue_i) {
        let watchedValue_s = watchedValue_e + watchedValue_i;
        for (const watchedValue_i of watchedValue_t)
          if (!(watchedValue_i.weekIndex < watchedValue_e)) {
            if (watchedValue_i.weekIndex >= watchedValue_s) break;
            watchedValue_s--
          } return watchedValue_s
      }
      _calculateBarWeekStart(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_o) {
        const watchedValue_n = this._getIndexOfWeekWithExtraBarIfExists(watchedValue_t, watchedValue_i);
        if (null === watchedValue_n) {
          const watchedValue_t = this._spec.getEntriesForWeek(watchedValue_i).firstDayOfWeek() - (0, watchedValue_s.get_day_of_week)(watchedValue_e),
            watchedValue_o = (0, watchedValue_s.clone)(watchedValue_e);
          return (0, watchedValue_s.add_date)(watchedValue_o, watchedValue_t), watchedValue_o
        }
        const watchedValue_r = this._spec.getHistoryByIndex(watchedValue_n.entryIndex);
        if (this.indexOfPeriod((0, watchedValue_c.ensureNotNull)(watchedValue_r.getStartDay())) === watchedValue_o) return (0, watchedValue_s.clone)((0, watchedValue_c.ensureNotNull)(
          watchedValue_r.getStartDay()));
        const watchedValue_a = this._spec.getHistoryByIndex(watchedValue_n.entryIndex - 1).getEntries().firstDayOfWeek() - (0, watchedValue_s
            .get_day_of_week)(watchedValue_e),
          watchedValue_l = (0, watchedValue_s.clone)(watchedValue_e);
        return (0, watchedValue_s.add_date)(watchedValue_l, watchedValue_a), watchedValue_l
      }
      _numberOfCalendarWeeks(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_s.get_day_of_year)(watchedValue_e),
          watchedValue_i = (0, watchedValue_s.get_day_of_week)(watchedValue_e);
        return Math.trunc((watchedValue_t - watchedValue_i) / 7)
      }
      _getStartOfYearData(watchedValue_e, watchedValue_t) {
        let watchedValue_i = this._yearStartDataHash.get(watchedValue_e);
        if (void 0 !== watchedValue_i) return watchedValue_i;
        let watchedValue_o = (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_e, watchedValue_s.JANUARY, 1, 0, 0),
          watchedValue_n = this._spec.getWeekIndex(watchedValue_o),
          watchedValue_r = 0;
        for ((0, watchedValue_s.get_day_of_week)(watchedValue_o) === watchedValue_s.FIRST_DAY_OF_WEEK && (watchedValue_r = 1), watchedValue_i = this._getYearStartDataFromWeek(watchedValue_t, watchedValue_n,
          watchedValue_o); null === watchedValue_i.startOfFirstBarInYear;) watchedValue_n++, watchedValue_r++, watchedValue_o = this._moveToNextCalendarWeekStart(watchedValue_o), watchedValue_i = this
          ._getYearStartDataFromWeek(watchedValue_t, watchedValue_n, watchedValue_o);
        return watchedValue_i.fullWeeksAdjustment = watchedValue_r, this._yearStartDataHash.set(watchedValue_e, watchedValue_i), watchedValue_i
      }
      _moveToNextCalendarWeekStart(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_s.get_day_of_week)(watchedValue_e),
          watchedValue_i = (0, watchedValue_s.clone)(watchedValue_e);
        return (0, watchedValue_s.add_date)(watchedValue_i, watchedValue_s.LAST_DAY_OF_WEEK - watchedValue_t + 1), watchedValue_i
      }
      _getYearStartDataFromWeek(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_o = (0, watchedValue_s.get_day_of_week)(watchedValue_i);
        let watchedValue_n = null,
          watchedValue_r = 0;
        const watchedValue_a = this._getIndexOfWeekWithExtraBarIfExists(watchedValue_e, watchedValue_t);
        if (null !== watchedValue_a) {
          let watchedValue_e = this._spec.getHistoryByIndex(watchedValue_a.entryIndex - 1).getEntries().firstDayOfWeek() - watchedValue_o;
          if (watchedValue_e >= 0) watchedValue_n = (0, watchedValue_s.clone)(watchedValue_i), (0, watchedValue_s.add_date)(watchedValue_n, watchedValue_e), watchedValue_r = 2;
          else {
            const watchedValue_t = this._spec.getHistoryByIndex(watchedValue_a.entryIndex);
            watchedValue_e = watchedValue_t.getEntries().firstDayOfWeek() - watchedValue_o, watchedValue_e >= 0 && (watchedValue_n = watchedValue_t.getStartDay(), watchedValue_n && (watchedValue_n = (0, watchedValue_s.clone)(watchedValue_n)), watchedValue_r =
              1)
          }
        } else {
          const watchedValue_e = this._spec.getEntriesForWeek(watchedValue_t),
            watchedValue_a = watchedValue_e.firstDayOfWeek() - watchedValue_o;
          watchedValue_a >= 0 && (this._hasWorkingDays(watchedValue_e) || this._hasWorkingDaysNextWeek(watchedValue_t + 1)) && (watchedValue_n = (0, watchedValue_s.clone)(watchedValue_i), (0, watchedValue_s
            .add_date)(watchedValue_n, watchedValue_a), watchedValue_r = 1)
        }
        return {
          startOfFirstBarInYear: watchedValue_n,
          firstWeekIndex: watchedValue_t,
          firstWeekbarsCount: watchedValue_r,
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
      _calculateWeeksWithExtraBar(watchedValue_e, watchedValue_t, watchedValue_i) {
        let watchedValue_s = 0;
        for (const watchedValue_o of watchedValue_t) {
          if (watchedValue_o.weekIndex >= watchedValue_e) break;
          watchedValue_o.weekIndex > watchedValue_i && watchedValue_s++
        }
        return watchedValue_s
      }
      _calculateLastWeek(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_o) {
        const watchedValue_n = (0, watchedValue_s.get_day_of_week)(watchedValue_e),
          watchedValue_r = this._getIndexOfWeekWithExtraBarIfExists(watchedValue_i, watchedValue_t);
        if (null === watchedValue_r) {
          return watchedValue_n - this._spec.getEntriesForWeek(watchedValue_t).firstDayOfWeek() >= 0 ? 1 : 0
        }
        const watchedValue_a = this._positionInsideWeekWithSeveralBars(watchedValue_r, watchedValue_n);
        return watchedValue_a === watchedValue_w.IsInNewSession ? watchedValue_o : watchedValue_a === watchedValue_w.IsInMidSession ? watchedValue_o - 1 : 0
      }
      _getIndexOfWeekWithExtraBarIfExists(watchedValue_e, watchedValue_t) {
        for (const watchedValue_i of watchedValue_e) {
          if (watchedValue_i.weekIndex === watchedValue_t) return watchedValue_i;
          if (watchedValue_i.weekIndex > watchedValue_t) break
        }
        return null
      }
      _positionInsideWeekWithSeveralBars(watchedValue_e, watchedValue_t) {
        let watchedValue_i = this._spec.getHistoryByIndex(watchedValue_e.entryIndex).getEntries().firstDayOfWeek() - watchedValue_t;
        if (watchedValue_i <= 0) return watchedValue_w.IsInNewSession;
        return watchedValue_i = this._spec.getHistoryByIndex(watchedValue_e.entryIndex - 1).getEntries().firstDayOfWeek() - watchedValue_t, watchedValue_i <= 0 ? watchedValue_w
          .IsInMidSession : watchedValue_w.IsBeforeAnySession
      }
    }
    watchedValue_w.IsBeforeAnySession = -1, watchedValue_w.IsInMidSession = 0, watchedValue_w.IsInNewSession = 1, watchedValue_w.fullWeekOfAdditionalBarsCount = 2;
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
        return null == this._builder && (this._builder = this._session.spec.hasHistoryCorrections() ? new watchedValue_w(this
          ._session.spec) : new watchedValue_b(this._session.spec)), this._builder
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
          const watchedValue_i = (0, watchedValue_n.toInt)((11 - watchedValue_e) / 12);
          watchedValue_t -= watchedValue_i, watchedValue_e += 12 * watchedValue_i
        } else watchedValue_e > watchedValue_s.DECEMBER && (watchedValue_t++, watchedValue_e = watchedValue_s.JANUARY);
        return (0, watchedValue_s.get_cal)(watchedValue_d, watchedValue_t, watchedValue_e, 1)
      }
    }
    var P, watchedValue_x;

    function M(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s = !1) {
      const watchedValue_n = watchedValue_o.Interval.parse(watchedValue_e),
        watchedValue_r = watchedValue_n.multiplier();
      return watchedValue_n.isMinutes() ? watchedValue_l.minutes(watchedValue_r, watchedValue_t) : watchedValue_n.isSeconds() ? watchedValue_l.seconds(watchedValue_r, watchedValue_t) : watchedValue_n.isTicks() ? new watchedValue_l(1, watchedValue_t) : watchedValue_n
      .isRange() ? new watchedValue_l(60 * watchedValue_r, watchedValue_t) : new watchedValue_p(watchedValue_t, watchedValue_i ?? null, watchedValue_r, function(watchedValue_e, watchedValue_t) {
          switch (watchedValue_e) {
            case watchedValue_o.ResolutionKind.Days:
              return new S(watchedValue_t);
            case watchedValue_o.ResolutionKind.Weeks:
              return new C(watchedValue_t);
            case watchedValue_o.ResolutionKind.Months:
              return new T(watchedValue_t)
          }
          throw new Error(`Unknown dwm resolution: ${watchedValue_e}`)
        }(watchedValue_n.kind(), watchedValue_t), watchedValue_s)
    }

    function I(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o, watchedValue_n, watchedValue_r) {
      return L(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o, watchedValue_n, watchedValue_r, 0)
    }

    function A(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o, watchedValue_n, watchedValue_r) {
      return L(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o, watchedValue_n, watchedValue_r, 1)
    }

    function L(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_n, watchedValue_a, watchedValue_l, watchedValue_c, watchedValue_h) {
      const watchedValue_d = watchedValue_o.Interval.parse(watchedValue_a + watchedValue_n);
      if (watchedValue_d.isMonths()) {
        const watchedValue_e = new Date(watchedValue_c);
        return 0 === watchedValue_h && watchedValue_e.setUTCDate(1),
          function(watchedValue_e, watchedValue_t) {
            B(watchedValue_e, Math.floor(watchedValue_t / 12));
            let watchedValue_i = watchedValue_e.getUTCMonth() - watchedValue_t % 12;
            watchedValue_i < 0 && (B(watchedValue_e, 1), watchedValue_i += 12);
            watchedValue_e.setUTCMonth(watchedValue_i);
            for (; watchedValue_e.getUTCMonth() !== watchedValue_i;) V(watchedValue_e, 1)
          }(watchedValue_e, watchedValue_l * watchedValue_d.multiplier()), watchedValue_e.getTime()
      }
      const watchedValue_u = new watchedValue_r.SessionInfo("Etc/UTC", watchedValue_e, watchedValue_t, watchedValue_i),
        _ = watchedValue_d.inMilliseconds(),
        watchedValue_p = watchedValue_d.isDWM();
      let watchedValue_m;
      if (watchedValue_p) watchedValue_m = 864e5;
      else {
        const watchedValue_e = watchedValue_u.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(watchedValue_u.timezone, watchedValue_c));
        watchedValue_m = 60 * watchedValue_u.spec.getEntriesForWeek(watchedValue_e).maxTradingDayLength() * 1e3
      }
      let watchedValue_g = 0;
      if (watchedValue_d.isWeeks()) watchedValue_g = 7;
      else {
        const watchedValue_e = watchedValue_u.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(watchedValue_u.timezone, watchedValue_c));
        watchedValue_g = 7 - watchedValue_u.spec.getEntriesForWeek(watchedValue_e).weekEndsCount()
      }
      const watchedValue_f = watchedValue_m / _,
        watchedValue_y = watchedValue_g * watchedValue_f;
      let watchedValue_v;
      if (watchedValue_l < watchedValue_y) watchedValue_v = watchedValue_l / watchedValue_f;
      else {
        watchedValue_v = 7 * (watchedValue_l / watchedValue_y)
      }
      return watchedValue_p && (watchedValue_v = Math.floor(watchedValue_v)), watchedValue_c - 864e5 * watchedValue_v
    }

    function watchedValue_k(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_n, watchedValue_a, watchedValue_l, watchedValue_c) {
      const watchedValue_h = watchedValue_o.Interval.parse(watchedValue_a + watchedValue_n);
      if (watchedValue_h.isMonths()) {
        const watchedValue_e = new Date(watchedValue_l),
          watchedValue_t = new Date(watchedValue_c);
        let watchedValue_i = 12 * (watchedValue_t.getUTCFullYear() - watchedValue_e.getUTCFullYear());
        return watchedValue_i += watchedValue_t.getUTCMonth() - watchedValue_e.getUTCMonth(), Math.ceil(watchedValue_i / watchedValue_h.multiplier())
      }
      const watchedValue_d = new watchedValue_r.SessionInfo("Etc/UTC", watchedValue_e, watchedValue_t, watchedValue_i),
        watchedValue_u = watchedValue_h.inMilliseconds();
      let _;
      if (watchedValue_h.isDWM()) _ = 864e5;
      else {
        const watchedValue_e = watchedValue_d.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(watchedValue_d.timezone, watchedValue_c));
        _ = 60 * watchedValue_d.spec.getEntriesForWeek(watchedValue_e).maxTradingDayLength() * 1e3
      }
      let watchedValue_p = 0;
      if (watchedValue_h.isWeeks()) watchedValue_p = 7;
      else {
        const watchedValue_e = watchedValue_d.spec.getWeekIndex((0, watchedValue_s.get_cal_from_unix_timestamp_ms)(watchedValue_d.timezone, watchedValue_c));
        watchedValue_p = 7 - watchedValue_d.spec.getEntriesForWeek(watchedValue_e).weekEndsCount()
      }
      const watchedValue_m = watchedValue_c - watchedValue_l,
        watchedValue_g = _ / watchedValue_u,
        watchedValue_f = watchedValue_p * watchedValue_g;
      let watchedValue_y = watchedValue_m / 864e5 * watchedValue_g;
      watchedValue_y >= watchedValue_f && (watchedValue_y = watchedValue_m / 6048e5 * watchedValue_f);
      return watchedValue_y % 1 <= Number.EPSILON * Math.ceil(watchedValue_y) ? Math.round(watchedValue_y) : Math.ceil(watchedValue_y)
    }

    function E(watchedValue_e, watchedValue_t) {
      const watchedValue_i = (0, watchedValue_s.clone)(watchedValue_t);
      return watchedValue_e.alignToSessionStart(watchedValue_i), (0, watchedValue_s.cal_to_utc)((0, watchedValue_s.get_timezone)(watchedValue_e.timezone()), watchedValue_i)
    }

    function D(watchedValue_e, watchedValue_t) {
      const watchedValue_i = (0, watchedValue_s.utc_to_cal)(watchedValue_t.timezone, +watchedValue_e);
      let watchedValue_o = (0, watchedValue_s.get_day_of_week)(watchedValue_i),
        watchedValue_n = (0, watchedValue_s.get_minutes_from_midnight)(watchedValue_i);
      const watchedValue_r = watchedValue_t.spec.findSession(watchedValue_t.spec.getWeekIndex(watchedValue_i), watchedValue_o, watchedValue_n).getEntry();
      return watchedValue_r.isOvernight() && watchedValue_n > watchedValue_r.startOffset() + watchedValue_r.length() && watchedValue_o === watchedValue_r.dayOfWeek() - 1 && (watchedValue_o++, watchedValue_n -= 1440), watchedValue_o === watchedValue_r
        .dayOfWeek() && watchedValue_n >= watchedValue_r.startOffset() && watchedValue_n < watchedValue_r.startOffset() + watchedValue_r.length()
    }

    function B(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_e.getUTCMonth();
      watchedValue_e.setUTCFullYear(watchedValue_e.getUTCFullYear() - watchedValue_t), watchedValue_e.getUTCMonth() !== watchedValue_i && V(watchedValue_e, 1)
    }

    function V(watchedValue_e, watchedValue_t) {
      watchedValue_e.setTime(watchedValue_e.getTime() - 864e5 * watchedValue_t)
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.AlignToFirstDay = 0] = "AlignToFirstDay", watchedValue_e[watchedValue_e.AlignToClosestDay = 1] = "AlignToClosestDay"
    }(P || (P = {})),
    function(watchedValue_e) {
      watchedValue_e[watchedValue_e.D = 864e5] = "D", watchedValue_e[watchedValue_e.W = 6048e5] = "W"
    }(watchedValue_x || (watchedValue_x = {}))
}
