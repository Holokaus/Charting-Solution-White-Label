/**
 * Module 16329 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16329: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      SessionsSpec: () => T
    });
    var watchedValue_s, watchedValue_o = watchedValue_i(50151),
      watchedValue_n = watchedValue_i(37236),
      watchedValue_r = watchedValue_i(16879),
      watchedValue_a = watchedValue_i(71149);

    function watchedValue_l(watchedValue_e, watchedValue_t) {
      return watchedValue_e.compareTo(watchedValue_t)
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.LeftFirst = -1] = "LeftFirst", watchedValue_e[watchedValue_e.Unchanged = 0] = "Unchanged", watchedValue_e[watchedValue_e.RightFirst = 1] = "RightFirst"
    }(watchedValue_s || (watchedValue_s = {}));
    class watchedValue_c {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i) {
        (0, watchedValue_o.assert)(Number.isFinite(watchedValue_e) && Number.isFinite(watchedValue_t) && Number.isFinite(watchedValue_i), "Invalid arguments"), this
          ._dayOfWeek = watchedValue_e, this._start = watchedValue_t, this._length = watchedValue_i
      }
      start() {
        return this._start + watchedValue_n.minutesPerDay * this.sessionStartDaysOffset()
      }
      startOffset() {
        return this._start
      }
      sessionStartDaysOffset() {
        return this._start >= 0 ? 0 : this._start % watchedValue_n.minutesPerDay == 0 ? -Math.ceil(this._start / watchedValue_n.minutesPerDay) :
          -Math.floor(this._start / watchedValue_n.minutesPerDay)
      }
      isOvernight() {
        return this._start < 0
      }
      dayOfWeek() {
        return this._dayOfWeek
      }
      sessionStartDayOfWeek() {
        let watchedValue_e = this._dayOfWeek - this.sessionStartDaysOffset();
        return watchedValue_e < watchedValue_n.SUNDAY && (watchedValue_e += 7), watchedValue_e
      }
      length() {
        return this._length
      }
      compareTo(watchedValue_e) {
        const watchedValue_t = this._weight(),
          watchedValue_i = watchedValue_t + this._length,
          watchedValue_s = watchedValue_e._weight(),
          watchedValue_o = watchedValue_s + watchedValue_e._length;
        return watchedValue_t <= watchedValue_s && watchedValue_s < watchedValue_i || watchedValue_s <= watchedValue_t && watchedValue_t < watchedValue_o ? 0 : watchedValue_t > watchedValue_s ? 1 : -1
      }
      contains(watchedValue_e) {
        return this._contains((0, watchedValue_n.get_minutes_with_hours)(watchedValue_e), (0, watchedValue_n.get_day_of_week)(watchedValue_e))
      }
      _weight() {
        return this._dayOfWeek * watchedValue_n.minutesPerDay + this._start
      }
      _contains(watchedValue_e, watchedValue_t) {
        let watchedValue_i = watchedValue_t - this._dayOfWeek;
        watchedValue_i > 0 && (watchedValue_i -= 7);
        const watchedValue_s = watchedValue_i * watchedValue_n.minutesPerDay + watchedValue_e;
        return watchedValue_s >= this._start && watchedValue_s < this._start + this._length
      }
    }
    class watchedValue_h {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i) {
        this.weekIndex = watchedValue_e, this.entryIndex = watchedValue_t, this.entries = watchedValue_i
      }
      getEntry() {
        return this.entries[this.entryIndex]
      }
    }
    class watchedValue_d {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        this._maxTradingDayLength = null, this._list = watchedValue_e, this._entriesByDay = watchedValue_t, this._firstDayOfWeek = watchedValue_i, this
          ._weekEndsCount = watchedValue_s
      }
      firstDayOfWeek() {
        return this._firstDayOfWeek
      }
      entriesByDay() {
        return this._entriesByDay
      }
      list() {
        return this._list
      }
      isWeekEnd(watchedValue_e) {
        return !this._entriesByDay.has(watchedValue_e)
      }
      weekEndsCount() {
        return this._weekEndsCount
      }
      longestSessionLength() {
        return 0 === this._list.length ? 0 : Math.max(...this._list.map((watchedValue_e => watchedValue_e.length())))
      }
      maxTradingDayLength() {
        if (null == this._maxTradingDayLength) {
          const watchedValue_e = new Map;
          for (const watchedValue_t of this._list) {
            const watchedValue_i = watchedValue_t.dayOfWeek();
            watchedValue_e.set(watchedValue_i, watchedValue_t.length() + (watchedValue_e.get(watchedValue_i) ?? 0))
          }
          let watchedValue_t = 0;
          watchedValue_e.forEach((watchedValue_e => {
            watchedValue_t = Math.max(watchedValue_t, watchedValue_e)
          })), this._maxTradingDayLength = watchedValue_t
        }
        return this._maxTradingDayLength
      }
    }
    class watchedValue_u {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i) {
        this._startDay = watchedValue_e, this._entries = watchedValue_i, this._specEndDay = watchedValue_t
      }
      getEntries() {
        return this._entries
      }
      getStartDay() {
        return this._startDay
      }
      getSpecEndDay() {
        return this._specEndDay
      }
      isOpenEnded() {
        return null == this._specEndDay
      }
    }
    const _ = [watchedValue_n.MONDAY, watchedValue_n.TUESDAY, watchedValue_n.WEDNESDAY, watchedValue_n.THURSDAY, watchedValue_n.FRIDAY],
      watchedValue_p = [watchedValue_n.SUNDAY, watchedValue_n.MONDAY, watchedValue_n.TUESDAY, watchedValue_n.WEDNESDAY, watchedValue_n.THURSDAY, watchedValue_n.FRIDAY, watchedValue_n.SATURDAY];

    function watchedValue_m(watchedValue_e) {
      return watchedValue_e >= 48 && watchedValue_e <= 57
    }
    const watchedValue_g = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    class watchedValue_f extends Map {
      constructor() {
        super(...arguments), this._keyStringsToKey = new Map
      }
      get(watchedValue_e) {
        const watchedValue_t = this._keyStringsToKey.get(watchedValue_e.toString());
        return watchedValue_t && super.get(watchedValue_t)
      }
      set(watchedValue_e, watchedValue_t) {
        const watchedValue_i = watchedValue_e.toString(),
          watchedValue_s = this._keyStringsToKey.get(watchedValue_i);
        return void 0 !== watchedValue_s && super.delete(watchedValue_s), this._keyStringsToKey.set(watchedValue_i, watchedValue_e), super.set(watchedValue_e, watchedValue_t)
      }
      has(watchedValue_e) {
        return this._keyStringsToKey.has(watchedValue_e.toString())
      }
    }

    function watchedValue_y(watchedValue_e) {
      return watchedValue_e.length > 0
    }
    class watchedValue_v {
      constructor() {
        this.historyEntries = [], this.timezone = "", this.adjustSessionsIndexes = null
      }
      parseSessions(watchedValue_e, watchedValue_t) {
        this._parseHistoryEntries(watchedValue_e, watchedValue_t, !1)
      }
      parseSessionsAndValidateDateTime(watchedValue_e, watchedValue_t) {
        this._parseHistoryEntries(watchedValue_e, watchedValue_t, !0)
      }
      static parseHolidaysAndCorrections(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        return this._parseHolidaysAndCorrectionsImpl(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s)
      }
      static parseHolidaysAndCorrectionsAndValidateDateTime(watchedValue_e, watchedValue_t, watchedValue_i) {
        return this._parseHolidaysAndCorrectionsImpl(watchedValue_e, watchedValue_t, watchedValue_i, !0)
      }
      _clearAll() {
        this.timezone = "", this.historyEntries = [], this.adjustSessionsIndexes = []
      }
      _parseHistoryEntries(watchedValue_e, watchedValue_t, watchedValue_i) {
        this._clearAll();
        const watchedValue_s = watchedValue_t.split("/");
        let watchedValue_o = null,
          watchedValue_n = null;
        this.hasHistoryCorrections = watchedValue_s.length > 1;
        for (let watchedValue_t = 0; watchedValue_t < watchedValue_s.length; watchedValue_t++) {
          const watchedValue_r = watchedValue_s[watchedValue_t].split("#");
          let watchedValue_a = null;
          if (watchedValue_t !== watchedValue_s.length - 1) {
            if (2 !== watchedValue_r.length) throw new Error(`bad session history entry definition: ${watchedValue_s[watchedValue_t]}`);
            watchedValue_a = watchedValue_v._parseDay(watchedValue_r[1], "session history entry end", watchedValue_i).toCalendar()
          } else {
            if (1 !== watchedValue_r.length) throw new Error(`bad session history entry definition: ${watchedValue_s[watchedValue_t]}`);
            watchedValue_a = null
          }
          if (null !== watchedValue_n && null !== watchedValue_a && watchedValue_a.getTime() < watchedValue_n.getTime()) throw new Error(
            `history sessions are not listed in ascending order (${watchedValue_n} -> ${watchedValue_a}`);
          const watchedValue_l = this._parseSessionsImpl(watchedValue_e, watchedValue_r[0], watchedValue_i);
          watchedValue_o = this._adjustStartToPreviousSession(watchedValue_l.firstDayOfWeek());
          const watchedValue_c = new watchedValue_u(watchedValue_o, watchedValue_a, watchedValue_l);
          this.historyEntries.push(watchedValue_c), watchedValue_n = watchedValue_a
        }
      }
      _parseSessionsImpl(watchedValue_e, watchedValue_t, watchedValue_i) {
        this.timezone = watchedValue_e, watchedValue_t = this._parseFirstDayOfWeek(watchedValue_t);
        const watchedValue_s = new Map,
          watchedValue_o = [];
        if ("24x7" === watchedValue_t.toLowerCase())
          for (const watchedValue_e of watchedValue_p) {
            const watchedValue_t = watchedValue_v._createSessionEntry(watchedValue_e, 0, 0, 0, 0);
            watchedValue_o.push(watchedValue_t);
            const watchedValue_i = [];
            watchedValue_i.push(watchedValue_t), watchedValue_s.set(watchedValue_e, watchedValue_i)
          } else {
            let watchedValue_e = !1;
            const watchedValue_n = new Map;
            for (const watchedValue_i of watchedValue_t.split("|")) {
              const watchedValue_t = watchedValue_i.split(":").filter(watchedValue_y);
              if (1 !== watchedValue_t.length && 2 !== watchedValue_t.length) throw new Error(`bad session section: ${watchedValue_i}`);
              const watchedValue_s = 1 === watchedValue_t.length;
              if (watchedValue_s) {
                if (watchedValue_e) throw new Error(`duplicated default section: ${watchedValue_i}`);
                watchedValue_e = !0
              }
              const watchedValue_o = watchedValue_s ? _ : watchedValue_v._parseWorkingDays(watchedValue_t[1]);
              for (const watchedValue_e of watchedValue_o) watchedValue_s && watchedValue_n.has(watchedValue_e) || watchedValue_n.set(watchedValue_e, watchedValue_t[0])
            }
            for (const watchedValue_e of watchedValue_p) {
              const watchedValue_t = watchedValue_n.get(watchedValue_e);
              if (void 0 !== watchedValue_t)
                for (const watchedValue_n of watchedValue_t.split(",").filter(watchedValue_y)) {
                  const watchedValue_t = watchedValue_v._parseSessionEntry(watchedValue_e, watchedValue_n, watchedValue_i);
                  let watchedValue_r = watchedValue_s.get(watchedValue_e);
                  void 0 === watchedValue_r && (watchedValue_r = []), watchedValue_r.push(watchedValue_t), watchedValue_o.push(watchedValue_t), watchedValue_s.set(watchedValue_e, watchedValue_r)
                }
            }
          }
        watchedValue_o.sort(watchedValue_l);
        const watchedValue_n = new Set;
        for (const watchedValue_e of watchedValue_o) watchedValue_n.add(watchedValue_e.dayOfWeek());
        const watchedValue_r = 7 - watchedValue_n.size;
        return new watchedValue_d(watchedValue_o, watchedValue_s, this._firstDayOfWeek, watchedValue_r)
      }
      _parseFirstDayOfWeek(watchedValue_e) {
        const watchedValue_t = watchedValue_e.split(";");
        if (this._firstDayOfWeek = watchedValue_n.MONDAY, watchedValue_t.length > 2) throw new Error(`bad sessions spec: ${watchedValue_e}`);
        if (1 === watchedValue_t.length) return watchedValue_e;
        let watchedValue_i = 1;
        let watchedValue_s = watchedValue_t[0].indexOf("-") >= 0 ? NaN : parseInt(watchedValue_t[0]);
        if (isNaN(watchedValue_s) && (watchedValue_i = 0, watchedValue_s = parseInt(watchedValue_t[1])), watchedValue_s < watchedValue_n.SUNDAY || watchedValue_s > watchedValue_n.SATURDAY) throw new Error(
          `bad sessions spec: ${watchedValue_e}`);
        return this._firstDayOfWeek = watchedValue_s, watchedValue_t[watchedValue_i]
      }
      _adjustStartToPreviousSession(watchedValue_e) {
        if (0 === this.historyEntries.length) return null;
        const watchedValue_t = (0, watchedValue_o.ensureNotNull)(this.historyEntries[this.historyEntries.length - 1].getSpecEndDay()),
          watchedValue_i = watchedValue_e - (0, watchedValue_n.get_day_of_week)(watchedValue_t);
        if (0 === watchedValue_i) return watchedValue_t;
        const watchedValue_s = (0, watchedValue_n.clone)(watchedValue_t);
        return (0,
          watchedValue_n.add_date)(watchedValue_s, watchedValue_i), watchedValue_t.getTime() < watchedValue_s.getTime() || (0, watchedValue_n.add_date)(watchedValue_s, 7), watchedValue_s
      }
      static _parseSessionEntry(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = watchedValue_t.split("-");
        if (2 !== watchedValue_s.length) throw new Error(`bad session entry: ${watchedValue_t}`);
        let watchedValue_o = 0,
          watchedValue_n = watchedValue_s[0];
        if (watchedValue_n.includes("F")) {
          const watchedValue_e = watchedValue_n.split("F");
          watchedValue_n = watchedValue_e[0], watchedValue_o = "" !== watchedValue_e[1] ? parseInt(watchedValue_e[1]) : 1
        }
        let watchedValue_r = 0,
          watchedValue_a = watchedValue_s[1];
        if (watchedValue_a.includes("F")) {
          const watchedValue_e = watchedValue_a.split("F");
          watchedValue_a = watchedValue_e[0], watchedValue_r = "" !== watchedValue_e[1] ? parseInt(watchedValue_e[1]) : 1
        }
        const watchedValue_l = this._minutesFromHHMM(watchedValue_n, watchedValue_t, watchedValue_i),
          watchedValue_c = this._minutesFromHHMM(watchedValue_a, watchedValue_t, watchedValue_i);
        return this._createSessionEntry(watchedValue_e, watchedValue_l, watchedValue_c, watchedValue_o, watchedValue_r)
      }
      static _minutesFromHHMM(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (4 === watchedValue_e.length && watchedValue_m(watchedValue_e.charCodeAt(0)) && watchedValue_m(watchedValue_e.charCodeAt(1)) && watchedValue_m(watchedValue_e.charCodeAt(2)) && watchedValue_m(watchedValue_e.charCodeAt(3))) {
          const watchedValue_t = parseInt(watchedValue_e),
            watchedValue_s = Math.trunc(watchedValue_t / 100),
            watchedValue_o = watchedValue_t % 100;
          if (!watchedValue_i || watchedValue_s < 24 && watchedValue_o < 60) return watchedValue_o + 60 * watchedValue_s
        }
        throw new Error(`incorrect entry syntax: ${watchedValue_t}`)
      }
      static _parseDay(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (8 === watchedValue_e.length && watchedValue_m(watchedValue_e.charCodeAt(0)) && watchedValue_m(watchedValue_e.charCodeAt(1)) && watchedValue_m(watchedValue_e.charCodeAt(2)) && watchedValue_m(watchedValue_e.charCodeAt(3)) &&
          watchedValue_m(watchedValue_e.charCodeAt(4)) && watchedValue_m(watchedValue_e.charCodeAt(5)) && watchedValue_m(watchedValue_e.charCodeAt(6)) && watchedValue_m(watchedValue_e.charCodeAt(7))) {
          const watchedValue_t = parseInt(watchedValue_e.substring(0, 4)),
            watchedValue_s = parseInt(watchedValue_e.substring(4, 6)),
            watchedValue_o = parseInt(watchedValue_e.substring(6, 8));
          if (!watchedValue_i || this._isValidDayOfMonth(watchedValue_o, watchedValue_s, watchedValue_t)) return new watchedValue_a.BusinessDay(watchedValue_t, watchedValue_s, watchedValue_o)
        }
        throw new Error(`bad ${watchedValue_t} date: ${watchedValue_e}`)
      }
      static _isValidDayOfMonth(watchedValue_e, watchedValue_t, watchedValue_i) {
        return !(watchedValue_t < 1 || watchedValue_t > 12) && (!(watchedValue_e < 1 || watchedValue_e > watchedValue_g[watchedValue_t]) || !(2 !== watchedValue_t || 29 !== watchedValue_e || !(0, watchedValue_n.is_leap_year)(watchedValue_i)))
      }
      static _parseWorkingDays(watchedValue_e) {
        const watchedValue_t = [];
        for (let watchedValue_i = 0; watchedValue_i < watchedValue_e.length; watchedValue_i++) {
          const watchedValue_s = watchedValue_e.charCodeAt(watchedValue_i) - 48;
          if (watchedValue_s < 1 || watchedValue_s > 7) throw new Error(`Invalid days specification: ${watchedValue_e}`);
          watchedValue_t.includes(watchedValue_s) || watchedValue_t.push(watchedValue_s)
        }
        return watchedValue_t
      }
      static _createSessionEntry(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_r) {
        (0, watchedValue_o.assert)(watchedValue_s >= 0 && watchedValue_s < 7), (0, watchedValue_o.assert)(watchedValue_r >= 0 && watchedValue_r < 7), 0 === watchedValue_i && (watchedValue_i = watchedValue_n.minutesPerDay), watchedValue_s === watchedValue_r &&
          watchedValue_i <= watchedValue_t && (watchedValue_s += 1), (0, watchedValue_o.assert)(watchedValue_s >= watchedValue_r), watchedValue_s > 0 && (watchedValue_t -= watchedValue_s * watchedValue_n.minutesPerDay), watchedValue_r > 0 && (watchedValue_i -= watchedValue_r * watchedValue_n
            .minutesPerDay);
        const watchedValue_a = watchedValue_i - watchedValue_t;
        return (0, watchedValue_o.assert)(watchedValue_e >= watchedValue_n.SUNDAY && watchedValue_e <= watchedValue_n.SATURDAY), (0, watchedValue_o.assert)(watchedValue_t < watchedValue_n.minutesPerDay), (0, watchedValue_o.assert)(watchedValue_a >
          0), new watchedValue_c(watchedValue_e, watchedValue_t, watchedValue_a)
      }
      static _parseHolidaysAndCorrectionsImpl(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        const watchedValue_o = new watchedValue_f;
        if ("" !== watchedValue_t) {
          const watchedValue_e = [];
          for (const watchedValue_i of watchedValue_t.split(",")) {
            const watchedValue_t = this._parseDay(watchedValue_i, "holiday", watchedValue_s);
            watchedValue_o.set(watchedValue_t, watchedValue_e)
          }
        }
        if ("" === watchedValue_i) return watchedValue_o;
        for (const watchedValue_e of watchedValue_i.split(";")) {
          const watchedValue_t = watchedValue_e.split(":");
          if (2 !== watchedValue_t.length) throw new Error(`bad correction section: ${watchedValue_e}`);
          const watchedValue_i = [];
          if ("dayoff" !== watchedValue_t[0])
            for (const watchedValue_e of watchedValue_t[0].split(",")) watchedValue_i.push(this._parseSessionEntry(1, watchedValue_e, watchedValue_s));
          for (const watchedValue_e of watchedValue_t[1].split(",")) {
            const watchedValue_t = this._parseDay(watchedValue_e, "correction", watchedValue_s),
              watchedValue_r = (0, watchedValue_n.get_day_of_week)(watchedValue_t.toCalendar()),
              watchedValue_a = [];
            for (let watchedValue_e = 0; watchedValue_e < watchedValue_i.length; watchedValue_e++) {
              const watchedValue_t = watchedValue_i[watchedValue_e];
              watchedValue_a.push(new watchedValue_c(watchedValue_r, watchedValue_t.startOffset(), watchedValue_t.length()))
            }
            watchedValue_o.set(watchedValue_t, watchedValue_a)
          }
        }
        return watchedValue_o
      }
    }

    function S(watchedValue_e, watchedValue_t) {
      return watchedValue_e.compareTo(watchedValue_t) < 0
    }
    const watchedValue_b = (0, watchedValue_n.get_timezone)("Etc/UTC");
    var watchedValue_w;
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.Closest = 0] = "Closest", watchedValue_e[watchedValue_e.FirstInDay = -1] = "FirstInDay", watchedValue_e[watchedValue_e.LastInDay = 1] = "LastInDay"
    }(watchedValue_w || (watchedValue_w = {}));
    class C {
      constructor(watchedValue_e) {
        this._value = watchedValue_e
      }
      get() {
        return this._value
      }
      set(watchedValue_e) {
        this._value = watchedValue_e
      }
    }
    class T {
      constructor(watchedValue_e = "Etc/UTC", watchedValue_t = "0000-0000", watchedValue_i = "", watchedValue_s = "", watchedValue_o = !1) {
        const watchedValue_r = new watchedValue_v;
        watchedValue_o ? watchedValue_r.parseSessionsAndValidateDateTime(watchedValue_e, watchedValue_t) : watchedValue_r.parseSessions(watchedValue_e, watchedValue_t), this._entries = watchedValue_r.historyEntries, this
          ._hasHistoryCorrections = watchedValue_r.hasHistoryCorrections, this._presentHistoryEntry = watchedValue_r.historyEntries[watchedValue_r
            .historyEntries.length - 1], this._timezone = watchedValue_r.timezone, this._timezoneObj = (0, watchedValue_n.get_timezone)(watchedValue_r
            .timezone),
          this._holidayAndCorrectionMap = watchedValue_o ? watchedValue_v.parseHolidaysAndCorrectionsAndValidateDateTime(watchedValue_e, watchedValue_i, watchedValue_s) : watchedValue_v
          .parseHolidaysAndCorrections(watchedValue_e, watchedValue_i, watchedValue_s, watchedValue_o);
        const watchedValue_a = this._holidayAndCorrectionMap.keys();
        this._entriesHash = new Map;
        const watchedValue_l = this._prepareSessionsBorderParams();
        this._borderWeeksIndicesHash = watchedValue_l.borderWeeksIndicesHash, this._yearToWeeksIndicesHash = watchedValue_l
          .yearToWeeksIndicesHash, this._weekIndicesOfLastHistoryWeek = watchedValue_l.weekIndicesOfLastHistoryWeek, this
          ._presentStartWeekIndex = watchedValue_l.startPresentSessionWeekIndex, this._yearToCalculatedAddedWeekIndicesHash =
          new Map, "" === watchedValue_i && "" === watchedValue_s && null === this._weekIndicesOfLastHistoryWeek ? this._isThereCorrections = !
          1 : this._isThereCorrections = !0;
        for (const watchedValue_e of watchedValue_a) {
          const watchedValue_t = this.getWeekIndex(watchedValue_e.toCalendar());
          this._entriesHash.set(watchedValue_t, new C(null))
        }
      }
      hasHistoryCorrections() {
        return this._hasHistoryCorrections
      }
      firstDayOfWeek() {
        return this._presentHistoryEntry.getEntries().firstDayOfWeek()
      }
      includesDay(watchedValue_e) {
        return this._getEntriesForDay(watchedValue_e).length > 0
      }
      getEntriesForWeek(watchedValue_e) {
        if (!this._isThereCorrections) return this._presentHistoryEntry.getEntries();
        (0, watchedValue_o.assert)(watchedValue_e >= 0);
        const watchedValue_t = watchedValue_e,
          watchedValue_i = this._entriesHash.get(watchedValue_t);
        if (void 0 === watchedValue_i) {
          return this._getHistoryAndIndexForWeek(watchedValue_t).getEntries()
        }
        let watchedValue_s = watchedValue_i.get();
        if (null !== watchedValue_s) return watchedValue_s;
        let watchedValue_r = null;
        const watchedValue_c = this._borderWeeksIndicesHash.get(watchedValue_t);
        watchedValue_r = void 0 === watchedValue_c ? this._getHistoryAndIndexForWeek(watchedValue_t).getEntries() : this._prepareBorderWeekHistory(watchedValue_c);
        const watchedValue_h = new Map(watchedValue_r.entriesByDay());
        let watchedValue_u = [...watchedValue_r.list()];
        const _ = this._weekIndexToLocalDateTime(watchedValue_e),
          watchedValue_m = this._weekIndexToLocalDateTime(watchedValue_e + 1),
          watchedValue_g = watchedValue_a.BusinessDay.fromCalendar(_),
          watchedValue_f = watchedValue_a.BusinessDay.fromCalendar(watchedValue_m);
        for (const [watchedValue_e, watchedValue_t] of this._selectHolidays(watchedValue_g, watchedValue_f)) {
          const watchedValue_i = (0, watchedValue_n.get_day_of_week)(watchedValue_e.toCalendar());
          watchedValue_u = watchedValue_u.filter((watchedValue_e => watchedValue_e.dayOfWeek() !== watchedValue_i)), watchedValue_u.push(...watchedValue_t), 0 === watchedValue_t.length ? watchedValue_h.delete(watchedValue_i) : watchedValue_h.set(watchedValue_i, watchedValue_t)
        }
        watchedValue_u.sort(watchedValue_l);
        const watchedValue_y = watchedValue_p.length - watchedValue_h.size;
        return watchedValue_s = new watchedValue_d(watchedValue_u, watchedValue_h, watchedValue_r.firstDayOfWeek(), watchedValue_y), watchedValue_i.set(watchedValue_s), watchedValue_s
      }
      getHistoryByIndex(watchedValue_e) {
        return this._entries[watchedValue_e]
      }
      timezone() {
        return this._timezone
      }
      timezoneObj() {
        return this._timezoneObj
      }
      longestSessionLength() {
        let watchedValue_e = this._presentHistoryEntry.getEntries().longestSessionLength();
        for (let watchedValue_t = 0; watchedValue_t < this._entries.length - 1; watchedValue_t++) {
          const watchedValue_i = this._entries[watchedValue_t].getEntries().longestSessionLength();
          watchedValue_e = Math.max(watchedValue_e, watchedValue_i)
        }
        let watchedValue_t = -1 / 0;
        for (const watchedValue_e of this._holidayAndCorrectionMap.values()) watchedValue_t = Math.max(watchedValue_t, ...watchedValue_e.map((watchedValue_e => watchedValue_e.length())));
        return Math.max(watchedValue_t, watchedValue_e)
      }
      isWeekEnd(watchedValue_e) {
        const watchedValue_t = this.getWeekIndex(watchedValue_e);
        let watchedValue_i;
        return watchedValue_i = void 0 === this._borderWeeksIndicesHash.get(watchedValue_t) ? this._getHistoryAndIndexForWeek(watchedValue_t).getEntries() :
          this.getEntriesForWeek(watchedValue_t), watchedValue_i.isWeekEnd((0, watchedValue_n.get_day_of_week)(watchedValue_e))
      }
      isCalWeekEnd(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_n.get_day_of_week)(watchedValue_e);
        if (!this._isThereCorrections) return this._presentHistoryEntry.getEntries().isWeekEnd(watchedValue_t);
        const watchedValue_i = this.getWeekIndex(watchedValue_e),
          watchedValue_s = this.getEntriesForWeek(watchedValue_i),
          watchedValue_o = watchedValue_a.BusinessDay.fromCalendar(watchedValue_e),
          watchedValue_r = this._holidayAndCorrectionMap.get(watchedValue_o);
        return void 0 === watchedValue_r ? watchedValue_s.isWeekEnd(watchedValue_t) : 0 === watchedValue_r.length
      }
      holidaysFromYearStart(watchedValue_e) {
        const watchedValue_t = watchedValue_e instanceof watchedValue_a.BusinessDay ? watchedValue_e : watchedValue_a.BusinessDay.fromCalendar(watchedValue_e);
        return this._holidaysFromYearStart(watchedValue_t)
      }
      daysOffFromYearStart(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_n.get_cal)(watchedValue_b, (0, watchedValue_n.get_year)(watchedValue_e), watchedValue_n.JANUARY, 1),
          watchedValue_i = this.getWeekIndex(watchedValue_t),
          watchedValue_s = (0, watchedValue_n.get_day_of_week)(watchedValue_t),
          watchedValue_o = (0, watchedValue_n.get_day_of_week)(watchedValue_e) - 1;
        if ((0,
            watchedValue_n.get_day_of_year)(watchedValue_e) + watchedValue_s <= watchedValue_n.LAST_DAY_OF_WEEK + watchedValue_n.FIRST_DAY_OF_WEEK) return this
          ._getDaysOffForWeekInBorders(watchedValue_i, watchedValue_s, watchedValue_o);
        const watchedValue_r = this.getWeekIndex(watchedValue_e);
        let watchedValue_a = this._getDaysOffForWeekInBorders(watchedValue_i, watchedValue_s, watchedValue_n.LAST_DAY_OF_WEEK);
        for (let watchedValue_e = watchedValue_i + 1; watchedValue_e < watchedValue_r; watchedValue_e++) {
          watchedValue_a += this.getEntriesForWeek(watchedValue_e).weekEndsCount()
        }
        return watchedValue_a += this._getDaysOffForWeekInBorders(watchedValue_r, watchedValue_n.FIRST_DAY_OF_WEEK, watchedValue_o), watchedValue_a
      }
      weekEndsCountForSingleSession() {
        return (0, watchedValue_o.assert)(!this.hasHistoryCorrections()), this._presentHistoryEntry.getEntries().weekEndsCount()
      }
      intradayCanBeBuiltFrom24x7(watchedValue_e) {
        for (const watchedValue_t of this._entries)
          if (!watchedValue_t.getEntries().list().every((watchedValue_t => watchedValue_t.start() % watchedValue_e == 0 && watchedValue_t.length() % watchedValue_e == 0))) return !1;
        return !0
      }
      intradayCanBeBuiltFrom24x7Seconds(watchedValue_e) {
        for (const watchedValue_t of this._entries)
          if (!watchedValue_t.getEntries().list().every((watchedValue_t => 60 * watchedValue_t.start() % watchedValue_e == 0 && 60 * watchedValue_t.length() % watchedValue_e == 0))) return !1;
        return !0
      }
      indexOfSession(watchedValue_e, watchedValue_t, watchedValue_i) {
        (0, watchedValue_o.assert)(watchedValue_t >= watchedValue_n.SUNDAY && watchedValue_t <= watchedValue_n.SATURDAY), (0, watchedValue_o.assert)(watchedValue_i >= 0 && watchedValue_i < watchedValue_n.minutesPerDay);
        const watchedValue_s = this.getEntriesForWeek(watchedValue_e),
          watchedValue_a = watchedValue_s.list();
        let watchedValue_l = (0, watchedValue_r.lowerbound)(watchedValue_a, new watchedValue_c(watchedValue_t, watchedValue_i, 0), S);
        if (watchedValue_l < watchedValue_a.length) return new watchedValue_h(watchedValue_e, watchedValue_l, [...watchedValue_a]);
        let watchedValue_d = watchedValue_e + 1,
          watchedValue_u = this.getEntriesForWeek(watchedValue_d);
        if (0 !== watchedValue_u.list().length) {
          const watchedValue_e = 7 - watchedValue_t + watchedValue_u.firstDayOfWeek() - 1;
          if (watchedValue_i = -(watchedValue_n.minutesPerDay - watchedValue_i + watchedValue_e * watchedValue_n.minutesPerDay), watchedValue_l = (0, watchedValue_r.lowerbound)(watchedValue_u.list(), new watchedValue_c(watchedValue_u
              .firstDayOfWeek(), watchedValue_i, 0), S), watchedValue_l < watchedValue_u.list().length) return new watchedValue_h(watchedValue_d, watchedValue_l, [...watchedValue_u.list()])
        }
        for (;;)
          if (watchedValue_d++, watchedValue_i -= watchedValue_n.minutesPerWeek, watchedValue_u = this.getEntriesForWeek(watchedValue_d), 0 !== watchedValue_u.list().length && (watchedValue_l = (0, watchedValue_r
              .lowerbound)(watchedValue_u.list(), new watchedValue_c(watchedValue_s.firstDayOfWeek(), watchedValue_i, 0), S), !(watchedValue_l >= watchedValue_u.list().length))) return new watchedValue_h(watchedValue_d, watchedValue_l,
            [...watchedValue_u.list()])
      }
      findSession(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s = 0) {
        const watchedValue_o = this.indexOfSession(watchedValue_e, watchedValue_t, watchedValue_i),
          watchedValue_n = watchedValue_o.entries;
        let watchedValue_r = watchedValue_o.entryIndex;
        if (0 !== watchedValue_s) {
          const watchedValue_e = watchedValue_n[watchedValue_r].dayOfWeek(),
            watchedValue_t = watchedValue_s > 0 ? 1 : -1;
          for (;;) {
            const watchedValue_i = watchedValue_r + watchedValue_t;
            if (watchedValue_i < 0 || watchedValue_i >= watchedValue_n.length || watchedValue_n[watchedValue_i].dayOfWeek() !== watchedValue_e) break;
            watchedValue_r = watchedValue_i
          }
        }
        return new watchedValue_h(watchedValue_o.weekIndex, watchedValue_r, watchedValue_n)
      }
      getWeekIndex(watchedValue_e) {
        return this._isThereCorrections ? T._getWeekIndexImpl(watchedValue_e) : 0
      }
      correctTradingDay(watchedValue_e) {
        const watchedValue_t = this._correctTradingDay(this.getWeekIndex(watchedValue_e), (0, watchedValue_n.get_day_of_week)(watchedValue_e), (0, watchedValue_n
            .get_minutes_with_hours)(watchedValue_e)),
          watchedValue_i = (0, watchedValue_n.clone)(watchedValue_e);
        return (0, watchedValue_n.add_date)(watchedValue_i, watchedValue_t), watchedValue_i
      }
      alignToSessionStart(watchedValue_e, watchedValue_t = 0) {
        const watchedValue_i = (0, watchedValue_n.get_day_of_week)(watchedValue_e),
          watchedValue_s = (0, watchedValue_n.get_minutes_from_midnight)(watchedValue_e),
          watchedValue_o = this.getWeekIndex(watchedValue_e),
          watchedValue_r = this.findSession(watchedValue_o, watchedValue_i, watchedValue_s, watchedValue_t),
          watchedValue_a = watchedValue_r.getEntry(),
          watchedValue_l = watchedValue_a.dayOfWeek() - watchedValue_i + 7 * Math.trunc(watchedValue_r.weekIndex - watchedValue_o);
        0 !== watchedValue_l && (0, watchedValue_n.add_date)(watchedValue_e, watchedValue_l);
        const watchedValue_c = watchedValue_a.startOffset();
        return (0, watchedValue_n.set_hms)(watchedValue_e, Math.trunc(watchedValue_c / 60), watchedValue_c % 60, 0, 0), watchedValue_a.length()
      }
      businessDaysToCalendarDays(watchedValue_e, watchedValue_t) {
        return this._businessDaysToCalendarDays(this.getWeekIndex(watchedValue_e), (0, watchedValue_n.get_day_of_week)(watchedValue_e), watchedValue_t)
      }
      calendarDaysToBusinessDays(watchedValue_e, watchedValue_t) {
        return this._calendarDaysToBusinessDays(this.getWeekIndex(watchedValue_e), (0, watchedValue_n.get_day_of_week)(watchedValue_e), watchedValue_t)
      }
      alignToNearestSessionStart(watchedValue_e, watchedValue_t) {
        return this._alignToNearestSessionValue(watchedValue_e, watchedValue_t, this._entrySessionStart.bind(this))
      }
      alignToNearestSessionEnd(watchedValue_e, watchedValue_t) {
        return this._alignToNearestSessionValue(watchedValue_e, watchedValue_t, this._entrySessionEnd.bind(this))
      }
      bordersOfDailyBar(watchedValue_e) {
        const watchedValue_t = this._getEntriesForDay(watchedValue_e);
        if (0 === watchedValue_t.length) return null;
        const watchedValue_i = watchedValue_t.slice();
        watchedValue_i.sort(watchedValue_l);
        const watchedValue_s = this._getLeftEntryBorder(watchedValue_e, watchedValue_i[0]),
          watchedValue_o = watchedValue_i[watchedValue_i.length - 1],
          watchedValue_r = 60 * (watchedValue_o.startOffset() + watchedValue_o.length()) - 1,
          watchedValue_a = (0, watchedValue_n.clone)(watchedValue_e);
        return (0, watchedValue_n.set_seconds)(watchedValue_a, watchedValue_r), {
          from: watchedValue_s,
          to: watchedValue_a
        }
      }
      leftBorderOfDailyBar(watchedValue_e) {
        const watchedValue_t = this._getEntriesForDay(watchedValue_e);
        if (0 === watchedValue_t.length) return null;
        const watchedValue_i = watchedValue_t.slice();
        return watchedValue_i.sort(watchedValue_l), this._getLeftEntryBorder(watchedValue_e, watchedValue_i[0])
      }
      checkSession() {
        return this._checkEachHistorySession() && this._checkSpecialEntries() && this._checkTooManyCorrectionsOnWeek()
      }
      inSession(watchedValue_e) {
        watchedValue_e = new Date(1e3 * Math.floor(watchedValue_e.getTime() / 1e3));
        const watchedValue_t = this.alignToNearestSessionStart(watchedValue_e, -1),
          watchedValue_i = this.alignToNearestSessionEnd(watchedValue_t, 1);
        return !(watchedValue_e.getTime() > watchedValue_i.getTime())
      }
      hasWeekEnds() {
        for (const watchedValue_e of this._entries)
          if (0 !== watchedValue_e.getEntries().weekEndsCount()) return !0;
        return !1
      }
      getWeekIndicesWithAdditionalWeekBars(watchedValue_e) {
        let watchedValue_t = this._yearToCalculatedAddedWeekIndicesHash.get(watchedValue_e);
        return void 0 === watchedValue_t && (watchedValue_t = this._calculateAddedIndices(watchedValue_e), this._yearToCalculatedAddedWeekIndicesHash.set(watchedValue_e,
          watchedValue_t)), watchedValue_t
      }
      _prepareSessionsBorderParams() {
        const watchedValue_e = new Map,
          watchedValue_t = new Map;
        let watchedValue_i = null;
        this._entries.length > 1 && (watchedValue_i = Array.from({
          length: this._entries.length - 1
        }, (() => 0)));
        let watchedValue_s = 0;
        for (let watchedValue_n = 0; watchedValue_n < this._entries.length - 1; watchedValue_n++) {
          const watchedValue_r = this._entries[watchedValue_n + 1],
            watchedValue_a = (0, watchedValue_o.ensureNotNull)(watchedValue_r.getStartDay());
          watchedValue_s = T._getWeekIndexImpl(watchedValue_a), watchedValue_e.set(watchedValue_s, watchedValue_n + 1), this._addToYearHash(watchedValue_t, watchedValue_a, watchedValue_s), this._entriesHash.set(watchedValue_s, new C(
            null)), (0, watchedValue_o.ensureNotNull)(watchedValue_i)[watchedValue_n] = watchedValue_s
        }
        return {
          borderWeeksIndicesHash: watchedValue_e,
          yearToWeeksIndicesHash: watchedValue_t,
          startPresentSessionWeekIndex: watchedValue_s,
          weekIndicesOfLastHistoryWeek: watchedValue_i
        }
      }
      _addToYearHash(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = (0, watchedValue_n.get_year)(watchedValue_t);
        let watchedValue_o = watchedValue_e.get(watchedValue_s);
        void 0 === watchedValue_o && (watchedValue_o = [], watchedValue_e.set(watchedValue_s, watchedValue_o)), watchedValue_o.push(watchedValue_i)
      }
      _getHistoryAndIndexForWeek(watchedValue_e) {
        if (this._presentStartWeekIndex <= watchedValue_e) return this._presentHistoryEntry;
        const watchedValue_t = this._getIndexOfHistoryEntry(watchedValue_e);
        return this._entries[watchedValue_t]
      }
      _getIndexOfHistoryEntry(watchedValue_e) {
        let watchedValue_t = 0,
          watchedValue_i = this._entries.length - 1,
          watchedValue_s = Math.floor((watchedValue_t + watchedValue_i) / 2);
        for ((0, watchedValue_o.assert)(null !== this._weekIndicesOfLastHistoryWeek);;) {
          if (this._weekIndicesOfLastHistoryWeek[watchedValue_s] >= watchedValue_e) {
            if (watchedValue_i = watchedValue_s - 1, watchedValue_i < watchedValue_t) return watchedValue_s
          } else if (watchedValue_t = watchedValue_s + 1, watchedValue_i < watchedValue_t) return watchedValue_s + 1;
          watchedValue_s = Math.floor((watchedValue_t + watchedValue_i) / 2)
        }
      }
      _selectHolidays(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new Set;
        for (const [watchedValue_s, watchedValue_o] of this._holidayAndCorrectionMap) watchedValue_s.compareTo(watchedValue_e) >= 0 && watchedValue_s.compareTo(watchedValue_t) < 0 && watchedValue_i.add([watchedValue_s,
        watchedValue_o]);
        return watchedValue_i
      }
      _prepareBorderWeekHistory(watchedValue_e) {
        const watchedValue_t = this._entries[watchedValue_e - 1],
          watchedValue_i = this._entries[watchedValue_e],
          watchedValue_s = new Map,
          watchedValue_r = [],
          watchedValue_a = (0, watchedValue_n.get_day_of_week)((0, watchedValue_o.ensureNotNull)(watchedValue_i.getStartDay()));
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_p.length; watchedValue_e++) {
          const watchedValue_o = watchedValue_p[watchedValue_e];
          if (watchedValue_o < watchedValue_a) {
            const watchedValue_e = watchedValue_t.getEntries().entriesByDay().get(watchedValue_o);
            void 0 !== watchedValue_e && (watchedValue_r.push(...watchedValue_e), watchedValue_s.set(watchedValue_o, watchedValue_e))
          } else {
            const watchedValue_e = watchedValue_i.getEntries().entriesByDay().get(watchedValue_o);
            void 0 !== watchedValue_e && (watchedValue_r.push(...watchedValue_e), watchedValue_s.set(watchedValue_o, watchedValue_e))
          }
        }
        return new watchedValue_d(watchedValue_r, watchedValue_s, watchedValue_i.getEntries().firstDayOfWeek(), 0)
      }
      _holidaysFromYearStart(watchedValue_e) {
        if (!this._isThereCorrections) return 0;
        (0, watchedValue_o.assert)(!this.hasHistoryCorrections());
        const watchedValue_t = watchedValue_e.firstDayOfYear();
        let watchedValue_i = 0;
        for (const [watchedValue_s, watchedValue_o] of this._selectHolidays(watchedValue_t, watchedValue_e)) {
          const watchedValue_e = watchedValue_s.getDayOfWeek(),
            watchedValue_t = 0 === watchedValue_o.length;
          this._presentHistoryEntry.getEntries().isWeekEnd(watchedValue_e) ? watchedValue_i += watchedValue_t ? 0 : -1 : watchedValue_i += watchedValue_t ? 1 : 0
        }
        return watchedValue_i
      }
      _getDaysOffForWeekInBorders(watchedValue_e, watchedValue_t, watchedValue_i) {
        let watchedValue_s = 0;
        const watchedValue_o = this.getEntriesForWeek(watchedValue_e);
        for (let watchedValue_e = watchedValue_t; watchedValue_e <= watchedValue_i; watchedValue_e++) watchedValue_o.entriesByDay().has(watchedValue_e) || watchedValue_s++;
        return watchedValue_s
      }
      _weekIndexToLocalDateTime(watchedValue_e) {
        const watchedValue_t = Math.floor(86400 * watchedValue_e * 7 + 86400 - 62167219200),
          watchedValue_i = (0, watchedValue_n.get_cal_from_unix_timestamp_ms)(watchedValue_b, 1e3 * watchedValue_t);
        return (0, watchedValue_n.set_hms)(watchedValue_i, 0, 0, 0, 0), watchedValue_i
      }
      _correctTradingDay(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = this.findSession(watchedValue_e, watchedValue_t, watchedValue_i, 0);
        return watchedValue_s.getEntry().dayOfWeek() - watchedValue_t + 7 * Math.trunc(watchedValue_s.weekIndex - watchedValue_e)
      }
      _entrySessionValue(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        watchedValue_t = (0, watchedValue_n.clone)(watchedValue_t);
        let watchedValue_o = (0, watchedValue_n.get_day_of_week)(watchedValue_t);
        const watchedValue_r = watchedValue_e.getEntry();
        let watchedValue_a = watchedValue_r.dayOfWeek() - watchedValue_r.sessionStartDaysOffset();
        const watchedValue_l = this.getWeekIndex(watchedValue_t);
        let watchedValue_c = Math.trunc(watchedValue_e.weekIndex - watchedValue_l),
          watchedValue_h = !1;
        if (watchedValue_a < watchedValue_n.SUNDAY && (watchedValue_c <= 0 ? watchedValue_h = !0 : watchedValue_c--, watchedValue_a += 7), (watchedValue_c > 0 && watchedValue_i >= 0 || watchedValue_c < 0 && watchedValue_i < 0) && (0, watchedValue_n.add_date)(watchedValue_t,
            7 * watchedValue_c), !watchedValue_r.contains(watchedValue_t)) {
          let watchedValue_e = watchedValue_a - watchedValue_o;
          watchedValue_h && watchedValue_i < 0 && (watchedValue_e = -(7 - watchedValue_a + watchedValue_o)), (0, watchedValue_n.add_date)(watchedValue_t, watchedValue_e), watchedValue_o = (0, watchedValue_n.get_day_of_week)(watchedValue_t)
        }
        if (watchedValue_r.isOvernight()) {
          const watchedValue_e = watchedValue_r.sessionStartDaysOffset(),
            watchedValue_i = (watchedValue_o - (watchedValue_r.dayOfWeek() - watchedValue_e) + 7) % 7;
          0 !== watchedValue_i && (0, watchedValue_n.add_date)(watchedValue_t, -watchedValue_i)
        }
        const watchedValue_d = watchedValue_s(watchedValue_r);
        return (0, watchedValue_n.set_seconds)(watchedValue_t, watchedValue_d), watchedValue_t
      }
      _businessDaysToCalendarDays(watchedValue_e, watchedValue_t, watchedValue_i) {
        let watchedValue_s = 0,
          watchedValue_o = 0;
        for (; watchedValue_o < watchedValue_i;) {
          const watchedValue_r = this.getEntriesForWeek(watchedValue_e);
          for (let watchedValue_e = watchedValue_t; watchedValue_e <= watchedValue_n.SATURDAY; watchedValue_e++)
            if (watchedValue_s++, void 0 !== watchedValue_r.entriesByDay().get(watchedValue_e) && watchedValue_o++, watchedValue_o >= watchedValue_i) return watchedValue_s;
          watchedValue_e++, watchedValue_t = watchedValue_n.SUNDAY
        }
        return watchedValue_s
      }
      _calendarDaysToBusinessDays(watchedValue_e, watchedValue_t, watchedValue_i) {
        let watchedValue_s = 0,
          watchedValue_o = 0;
        for (; watchedValue_s < watchedValue_i;) {
          const watchedValue_r = this.getEntriesForWeek(watchedValue_e);
          for (let watchedValue_e = watchedValue_t; watchedValue_e <= watchedValue_n.SATURDAY; watchedValue_e++)
            if (watchedValue_s++, void 0 !== watchedValue_r.entriesByDay().get(watchedValue_e) && watchedValue_o++, watchedValue_s >= watchedValue_i) return watchedValue_o;
          watchedValue_e++, watchedValue_t = watchedValue_n.SUNDAY
        }
        return watchedValue_o
      }
      _entrySessionStart(watchedValue_e, watchedValue_t, watchedValue_i) {
        return this._entrySessionValue(watchedValue_e, watchedValue_t, watchedValue_i, (watchedValue_e => 60 * watchedValue_e.start()))
      }
      _entrySessionEnd(watchedValue_e, watchedValue_t, watchedValue_i) {
        return this._entrySessionValue(watchedValue_e, watchedValue_t, watchedValue_i, (watchedValue_e => 60 * (watchedValue_e.start() + watchedValue_e.length()) - 1))
      }
      _alignToNearestSessionValue(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = (0, watchedValue_n.get_day_of_week)(watchedValue_e),
          watchedValue_o = (0, watchedValue_n.get_minutes_with_hours)(watchedValue_e),
          watchedValue_r = this.getWeekIndex(watchedValue_e);
        let watchedValue_a = this.findSession(watchedValue_r, watchedValue_s, watchedValue_o);
        if (1 === watchedValue_t) return watchedValue_i(watchedValue_a, watchedValue_e, watchedValue_t);
        const watchedValue_l = watchedValue_a.getEntry(),
          watchedValue_c = watchedValue_l.contains(watchedValue_e),
          watchedValue_d = watchedValue_r === watchedValue_a.weekIndex,
          watchedValue_u = watchedValue_l.sessionStartDaysOffset() - watchedValue_l.dayOfWeek() >= 0;
        if (watchedValue_c && (watchedValue_d || watchedValue_u)) return watchedValue_i(watchedValue_a, watchedValue_e, watchedValue_t);
        let _ = watchedValue_a.entryIndex - 1;
        if (_ < 0) {
          let watchedValue_e = watchedValue_a.weekIndex,
            watchedValue_t = watchedValue_a.entries;
          if (0 === watchedValue_e) watchedValue_e--, _ += watchedValue_t.length;
          else
            for (; _ < 0;) watchedValue_e--, watchedValue_t = this.getEntriesForWeek(watchedValue_e).list(), _ += watchedValue_t.length;
          watchedValue_a = new watchedValue_h(watchedValue_e, _, watchedValue_t)
        } else watchedValue_a = new watchedValue_h(watchedValue_a.weekIndex, _, watchedValue_a.entries);
        return watchedValue_i(watchedValue_a, watchedValue_e, watchedValue_t)
      }
      _getEntriesForDay(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_n.get_day_of_week)(watchedValue_e),
          watchedValue_i = this.getEntriesForWeek(this.getWeekIndex(watchedValue_e)).entriesByDay().get(watchedValue_t);
        return void 0 !== watchedValue_i ? watchedValue_i : []
      }
      _getLeftEntryBorder(watchedValue_e, watchedValue_t) {
        let watchedValue_i = watchedValue_t.startOffset();
        const watchedValue_s = -Math.trunc((watchedValue_i - 1439) / 1440);
        watchedValue_i += 1440 * watchedValue_s;
        const watchedValue_o = (0, watchedValue_n.get_cal)(watchedValue_b, (0, watchedValue_n.get_year)(watchedValue_e), (0, watchedValue_n.get_month)(watchedValue_e), (0, watchedValue_n.get_day_of_month)(watchedValue_e), Math.trunc(
          watchedValue_i / 60), watchedValue_i % 60, 0);
        return (0, watchedValue_n.add_date)(watchedValue_o, -watchedValue_s), watchedValue_o
      }
      _checkEachHistorySession() {
        for (const watchedValue_e of this._entries) {
          const watchedValue_t = watchedValue_e.getEntries().list();
          if (!this._checkEntriesForIntersections(watchedValue_t, watchedValue_t, watchedValue_t)) return !1
        }
        return !0
      }
      _checkEntriesForIntersections(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = this._buildTestEntries(watchedValue_e, watchedValue_t, watchedValue_i);
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_s.length - 1; watchedValue_e++)
          for (let watchedValue_t = watchedValue_e + 1; watchedValue_t < watchedValue_s.length; watchedValue_t++)
            if (0 === watchedValue_s[watchedValue_e].compareTo(watchedValue_s[watchedValue_t])) return !1;
        return !0
      }
      _buildTestEntries(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = [];
        for (let watchedValue_t = 0; watchedValue_t < watchedValue_e.length; watchedValue_t++) {
          const watchedValue_i = watchedValue_e[watchedValue_t],
            watchedValue_o = new watchedValue_c(watchedValue_i.dayOfWeek(), watchedValue_i.startOffset(), watchedValue_i.length());
          watchedValue_s.push(watchedValue_o)
        }
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t.length; watchedValue_e++) {
          const watchedValue_i = watchedValue_t[watchedValue_e],
            watchedValue_o = new watchedValue_c(watchedValue_i.dayOfWeek() + 7, watchedValue_i.startOffset(), watchedValue_i.length());
          watchedValue_s.push(watchedValue_o)
        }
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_i.length; watchedValue_e++) {
          const watchedValue_t = watchedValue_i[watchedValue_e],
            watchedValue_o = new watchedValue_c(watchedValue_t.dayOfWeek() + 14, watchedValue_t.startOffset(), watchedValue_t.length());
          watchedValue_s.push(watchedValue_o)
        }
        return watchedValue_s
      }
      _checkSpecialEntries() {
        for (const [watchedValue_e] of this._entriesHash) {
          const watchedValue_t = this.getEntriesForWeek(watchedValue_e).list(),
            watchedValue_i = this.getEntriesForWeek(watchedValue_e - 1).list(),
            watchedValue_s = this.getEntriesForWeek(watchedValue_e + 1).list();
          if (!this._checkEntriesForIntersections(watchedValue_i, watchedValue_t, watchedValue_s)) return !1
        }
        return !0
      }
      _checkTooManyCorrectionsOnWeek() {
        if (this._entries.length < 2) return !0;
        for (let watchedValue_e = 0; watchedValue_e < this._entries.length - 2; watchedValue_e++) {
          const watchedValue_t = this._entries[watchedValue_e],
            watchedValue_i = this._entries[watchedValue_e + 1];
          if (this.getWeekIndex((0, watchedValue_o.ensureNotNull)(watchedValue_t.getSpecEndDay())) === this.getWeekIndex((0, watchedValue_o.ensureNotNull)(watchedValue_i
              .getSpecEndDay()))) return !1
        }
        return !0
      }
      _calculateAddedIndices(watchedValue_e) {
        const watchedValue_t = [],
          watchedValue_i = this._yearToWeeksIndicesHash.get(watchedValue_e);
        if (void 0 === watchedValue_i) return watchedValue_t;
        for (const watchedValue_e of watchedValue_i) {
          const watchedValue_i = (0, watchedValue_o.ensureDefined)(this._borderWeeksIndicesHash.get(watchedValue_e)),
            watchedValue_s = this._entries[watchedValue_i],
            watchedValue_r = this._entries[watchedValue_i - 1];
          let watchedValue_a = watchedValue_s.getEntries().firstDayOfWeek() - watchedValue_r.getEntries().firstDayOfWeek();
          for (; watchedValue_a > 0;) {
            const watchedValue_r = (0, watchedValue_n.clone)((0, watchedValue_o.ensureNotNull)(watchedValue_s.getStartDay()));
            if ((0, watchedValue_n.add_date)(watchedValue_r, -watchedValue_a), !this.isCalWeekEnd(watchedValue_r)) {
              const watchedValue_s = {
                entryIndex: watchedValue_i,
                weekIndex: watchedValue_e
              };
              watchedValue_t.push(watchedValue_s);
              break
            }
            watchedValue_a--
          }
        }
        return watchedValue_t
      }
      static _getWeekIndexImpl(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_n.get_cal_utc)((0, watchedValue_n.get_year)(watchedValue_e), (0, watchedValue_n.get_month)(watchedValue_e), 1);
        (0, watchedValue_n.add_date)(watchedValue_t, (0, watchedValue_n.get_day_of_month)(watchedValue_e) - (0, watchedValue_n.get_day_of_week)(watchedValue_e));
        const watchedValue_i = watchedValue_t.getTime() / 1e3;
        return (0, watchedValue_o.assert)((watchedValue_i + 62167219200) % 86400 == 0), Math.trunc((watchedValue_i + 62167219200) / 86400 / 7)
      }
    }