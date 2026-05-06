/**
 * Module 16329 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16329: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      SessionsSpec: () => T
    });
    var watchedValue_s, o = i(50151),
      watchedValue_n = i(37236),
      r = i(16879),
      watchedValue_a = i(71149);

    function l(watchedValue_e, watchedValue_t) {
      return watchedValue_e.compareTo(watchedValue_t)
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.LeftFirst = -1] = "LeftFirst", watchedValue_e[watchedValue_e.Unchanged = 0] = "Unchanged", watchedValue_e[watchedValue_e.RightFirst = 1] = "RightFirst"
    }(watchedValue_s || (watchedValue_s = {}));
    class c {
      constructor(watchedValue_e, watchedValue_t, i) {
        (0, o.assert)(Number.isFinite(watchedValue_e) && Number.isFinite(watchedValue_t) && Number.isFinite(i), "Invalid arguments"), this
          ._dayOfWeek = watchedValue_e, this._start = watchedValue_t, this._length = i
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
          i = watchedValue_t + this._length,
          watchedValue_s = watchedValue_e._weight(),
          o = watchedValue_s + watchedValue_e._length;
        return watchedValue_t <= watchedValue_s && watchedValue_s < i || watchedValue_s <= watchedValue_t && watchedValue_t < o ? 0 : watchedValue_t > watchedValue_s ? 1 : -1
      }
      contains(watchedValue_e) {
        return this._contains((0, watchedValue_n.get_minutes_with_hours)(watchedValue_e), (0, watchedValue_n.get_day_of_week)(watchedValue_e))
      }
      _weight() {
        return this._dayOfWeek * watchedValue_n.minutesPerDay + this._start
      }
      _contains(watchedValue_e, watchedValue_t) {
        let i = watchedValue_t - this._dayOfWeek;
        i > 0 && (i -= 7);
        const watchedValue_s = i * watchedValue_n.minutesPerDay + watchedValue_e;
        return watchedValue_s >= this._start && watchedValue_s < this._start + this._length
      }
    }
    class h {
      constructor(watchedValue_e, watchedValue_t, i) {
        this.weekIndex = watchedValue_e, this.entryIndex = watchedValue_t, this.entries = i
      }
      getEntry() {
        return this.entries[this.entryIndex]
      }
    }
    class d {
      constructor(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        this._maxTradingDayLength = null, this._list = watchedValue_e, this._entriesByDay = watchedValue_t, this._firstDayOfWeek = i, this
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
            const i = watchedValue_t.dayOfWeek();
            watchedValue_e.set(i, watchedValue_t.length() + (watchedValue_e.get(i) ?? 0))
          }
          let watchedValue_t = 0;
          watchedValue_e.forEach((watchedValue_e => {
            watchedValue_t = Math.max(watchedValue_t, watchedValue_e)
          })), this._maxTradingDayLength = watchedValue_t
        }
        return this._maxTradingDayLength
      }
    }
    class u {
      constructor(watchedValue_e, watchedValue_t, i) {
        this._startDay = watchedValue_e, this._entries = i, this._specEndDay = watchedValue_t
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
      p = [watchedValue_n.SUNDAY, watchedValue_n.MONDAY, watchedValue_n.TUESDAY, watchedValue_n.WEDNESDAY, watchedValue_n.THURSDAY, watchedValue_n.FRIDAY, watchedValue_n.SATURDAY];

    function m(watchedValue_e) {
      return watchedValue_e >= 48 && watchedValue_e <= 57
    }
    const g = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    class f extends Map {
      constructor() {
        super(...arguments), this._keyStringsToKey = new Map
      }
      get(watchedValue_e) {
        const watchedValue_t = this._keyStringsToKey.get(watchedValue_e.toString());
        return watchedValue_t && super.get(watchedValue_t)
      }
      set(watchedValue_e, watchedValue_t) {
        const i = watchedValue_e.toString(),
          watchedValue_s = this._keyStringsToKey.get(i);
        return void 0 !== watchedValue_s && super.delete(watchedValue_s), this._keyStringsToKey.set(i, watchedValue_e), super.set(watchedValue_e, watchedValue_t)
      }
      has(watchedValue_e) {
        return this._keyStringsToKey.has(watchedValue_e.toString())
      }
    }

    function y(watchedValue_e) {
      return watchedValue_e.length > 0
    }
    class v {
      constructor() {
        this.historyEntries = [], this.timezone = "", this.adjustSessionsIndexes = null
      }
      parseSessions(watchedValue_e, watchedValue_t) {
        this._parseHistoryEntries(watchedValue_e, watchedValue_t, !1)
      }
      parseSessionsAndValidateDateTime(watchedValue_e, watchedValue_t) {
        this._parseHistoryEntries(watchedValue_e, watchedValue_t, !0)
      }
      static parseHolidaysAndCorrections(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        return this._parseHolidaysAndCorrectionsImpl(watchedValue_e, watchedValue_t, i, watchedValue_s)
      }
      static parseHolidaysAndCorrectionsAndValidateDateTime(watchedValue_e, watchedValue_t, i) {
        return this._parseHolidaysAndCorrectionsImpl(watchedValue_e, watchedValue_t, i, !0)
      }
      _clearAll() {
        this.timezone = "", this.historyEntries = [], this.adjustSessionsIndexes = []
      }
      _parseHistoryEntries(watchedValue_e, watchedValue_t, i) {
        this._clearAll();
        const watchedValue_s = watchedValue_t.split("/");
        let o = null,
          watchedValue_n = null;
        this.hasHistoryCorrections = watchedValue_s.length > 1;
        for (let watchedValue_t = 0; watchedValue_t < watchedValue_s.length; watchedValue_t++) {
          const r = watchedValue_s[watchedValue_t].split("#");
          let watchedValue_a = null;
          if (watchedValue_t !== watchedValue_s.length - 1) {
            if (2 !== r.length) throw new Error(`bad session history entry definition: ${watchedValue_s[watchedValue_t]}`);
            watchedValue_a = v._parseDay(r[1], "session history entry end", i).toCalendar()
          } else {
            if (1 !== r.length) throw new Error(`bad session history entry definition: ${watchedValue_s[watchedValue_t]}`);
            watchedValue_a = null
          }
          if (null !== watchedValue_n && null !== watchedValue_a && watchedValue_a.getTime() < watchedValue_n.getTime()) throw new Error(
            `history sessions are not listed in ascending order (${watchedValue_n} -> ${watchedValue_a}`);
          const l = this._parseSessionsImpl(watchedValue_e, r[0], i);
          o = this._adjustStartToPreviousSession(l.firstDayOfWeek());
          const c = new u(o, watchedValue_a, l);
          this.historyEntries.push(c), watchedValue_n = watchedValue_a
        }
      }
      _parseSessionsImpl(watchedValue_e, watchedValue_t, i) {
        this.timezone = watchedValue_e, watchedValue_t = this._parseFirstDayOfWeek(watchedValue_t);
        const watchedValue_s = new Map,
          o = [];
        if ("24x7" === watchedValue_t.toLowerCase())
          for (const watchedValue_e of p) {
            const watchedValue_t = v._createSessionEntry(watchedValue_e, 0, 0, 0, 0);
            o.push(watchedValue_t);
            const i = [];
            i.push(watchedValue_t), watchedValue_s.set(watchedValue_e, i)
          } else {
            let watchedValue_e = !1;
            const watchedValue_n = new Map;
            for (const i of watchedValue_t.split("|")) {
              const watchedValue_t = i.split(":").filter(y);
              if (1 !== watchedValue_t.length && 2 !== watchedValue_t.length) throw new Error(`bad session section: ${i}`);
              const watchedValue_s = 1 === watchedValue_t.length;
              if (watchedValue_s) {
                if (watchedValue_e) throw new Error(`duplicated default section: ${i}`);
                watchedValue_e = !0
              }
              const o = watchedValue_s ? _ : v._parseWorkingDays(watchedValue_t[1]);
              for (const watchedValue_e of o) watchedValue_s && watchedValue_n.has(watchedValue_e) || watchedValue_n.set(watchedValue_e, watchedValue_t[0])
            }
            for (const watchedValue_e of p) {
              const watchedValue_t = watchedValue_n.get(watchedValue_e);
              if (void 0 !== watchedValue_t)
                for (const watchedValue_n of watchedValue_t.split(",").filter(y)) {
                  const watchedValue_t = v._parseSessionEntry(watchedValue_e, watchedValue_n, i);
                  let r = watchedValue_s.get(watchedValue_e);
                  void 0 === r && (r = []), r.push(watchedValue_t), o.push(watchedValue_t), watchedValue_s.set(watchedValue_e, r)
                }
            }
          }
        o.sort(l);
        const watchedValue_n = new Set;
        for (const watchedValue_e of o) watchedValue_n.add(watchedValue_e.dayOfWeek());
        const r = 7 - watchedValue_n.size;
        return new d(o, watchedValue_s, this._firstDayOfWeek, r)
      }
      _parseFirstDayOfWeek(watchedValue_e) {
        const watchedValue_t = watchedValue_e.split(";");
        if (this._firstDayOfWeek = watchedValue_n.MONDAY, watchedValue_t.length > 2) throw new Error(`bad sessions spec: ${watchedValue_e}`);
        if (1 === watchedValue_t.length) return watchedValue_e;
        let i = 1;
        let watchedValue_s = watchedValue_t[0].indexOf("-") >= 0 ? NaN : parseInt(watchedValue_t[0]);
        if (isNaN(watchedValue_s) && (i = 0, watchedValue_s = parseInt(watchedValue_t[1])), watchedValue_s < watchedValue_n.SUNDAY || watchedValue_s > watchedValue_n.SATURDAY) throw new Error(
          `bad sessions spec: ${watchedValue_e}`);
        return this._firstDayOfWeek = watchedValue_s, watchedValue_t[i]
      }
      _adjustStartToPreviousSession(watchedValue_e) {
        if (0 === this.historyEntries.length) return null;
        const watchedValue_t = (0, o.ensureNotNull)(this.historyEntries[this.historyEntries.length - 1].getSpecEndDay()),
          i = watchedValue_e - (0, watchedValue_n.get_day_of_week)(watchedValue_t);
        if (0 === i) return watchedValue_t;
        const watchedValue_s = (0, watchedValue_n.clone)(watchedValue_t);
        return (0,
          watchedValue_n.add_date)(watchedValue_s, i), watchedValue_t.getTime() < watchedValue_s.getTime() || (0, watchedValue_n.add_date)(watchedValue_s, 7), watchedValue_s
      }
      static _parseSessionEntry(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = watchedValue_t.split("-");
        if (2 !== watchedValue_s.length) throw new Error(`bad session entry: ${watchedValue_t}`);
        let o = 0,
          watchedValue_n = watchedValue_s[0];
        if (watchedValue_n.includes("F")) {
          const watchedValue_e = watchedValue_n.split("F");
          watchedValue_n = watchedValue_e[0], o = "" !== watchedValue_e[1] ? parseInt(watchedValue_e[1]) : 1
        }
        let r = 0,
          watchedValue_a = watchedValue_s[1];
        if (watchedValue_a.includes("F")) {
          const watchedValue_e = watchedValue_a.split("F");
          watchedValue_a = watchedValue_e[0], r = "" !== watchedValue_e[1] ? parseInt(watchedValue_e[1]) : 1
        }
        const l = this._minutesFromHHMM(watchedValue_n, watchedValue_t, i),
          c = this._minutesFromHHMM(watchedValue_a, watchedValue_t, i);
        return this._createSessionEntry(watchedValue_e, l, c, o, r)
      }
      static _minutesFromHHMM(watchedValue_e, watchedValue_t, i) {
        if (4 === watchedValue_e.length && m(watchedValue_e.charCodeAt(0)) && m(watchedValue_e.charCodeAt(1)) && m(watchedValue_e.charCodeAt(2)) && m(watchedValue_e.charCodeAt(3))) {
          const watchedValue_t = parseInt(watchedValue_e),
            watchedValue_s = Math.trunc(watchedValue_t / 100),
            o = watchedValue_t % 100;
          if (!i || watchedValue_s < 24 && o < 60) return o + 60 * watchedValue_s
        }
        throw new Error(`incorrect entry syntax: ${watchedValue_t}`)
      }
      static _parseDay(watchedValue_e, watchedValue_t, i) {
        if (8 === watchedValue_e.length && m(watchedValue_e.charCodeAt(0)) && m(watchedValue_e.charCodeAt(1)) && m(watchedValue_e.charCodeAt(2)) && m(watchedValue_e.charCodeAt(3)) &&
          m(watchedValue_e.charCodeAt(4)) && m(watchedValue_e.charCodeAt(5)) && m(watchedValue_e.charCodeAt(6)) && m(watchedValue_e.charCodeAt(7))) {
          const watchedValue_t = parseInt(watchedValue_e.substring(0, 4)),
            watchedValue_s = parseInt(watchedValue_e.substring(4, 6)),
            o = parseInt(watchedValue_e.substring(6, 8));
          if (!i || this._isValidDayOfMonth(o, watchedValue_s, watchedValue_t)) return new watchedValue_a.BusinessDay(watchedValue_t, watchedValue_s, o)
        }
        throw new Error(`bad ${watchedValue_t} date: ${watchedValue_e}`)
      }
      static _isValidDayOfMonth(watchedValue_e, watchedValue_t, i) {
        return !(watchedValue_t < 1 || watchedValue_t > 12) && (!(watchedValue_e < 1 || watchedValue_e > g[watchedValue_t]) || !(2 !== watchedValue_t || 29 !== watchedValue_e || !(0, watchedValue_n.is_leap_year)(i)))
      }
      static _parseWorkingDays(watchedValue_e) {
        const watchedValue_t = [];
        for (let i = 0; i < watchedValue_e.length; i++) {
          const watchedValue_s = watchedValue_e.charCodeAt(i) - 48;
          if (watchedValue_s < 1 || watchedValue_s > 7) throw new Error(`Invalid days specification: ${watchedValue_e}`);
          watchedValue_t.includes(watchedValue_s) || watchedValue_t.push(watchedValue_s)
        }
        return watchedValue_t
      }
      static _createSessionEntry(watchedValue_e, watchedValue_t, i, watchedValue_s, r) {
        (0, o.assert)(watchedValue_s >= 0 && watchedValue_s < 7), (0, o.assert)(r >= 0 && r < 7), 0 === i && (i = watchedValue_n.minutesPerDay), watchedValue_s === r &&
          i <= watchedValue_t && (watchedValue_s += 1), (0, o.assert)(watchedValue_s >= r), watchedValue_s > 0 && (watchedValue_t -= watchedValue_s * watchedValue_n.minutesPerDay), r > 0 && (i -= r * watchedValue_n
            .minutesPerDay);
        const watchedValue_a = i - watchedValue_t;
        return (0, o.assert)(watchedValue_e >= watchedValue_n.SUNDAY && watchedValue_e <= watchedValue_n.SATURDAY), (0, o.assert)(watchedValue_t < watchedValue_n.minutesPerDay), (0, o.assert)(watchedValue_a >
          0), new c(watchedValue_e, watchedValue_t, watchedValue_a)
      }
      static _parseHolidaysAndCorrectionsImpl(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        const o = new f;
        if ("" !== watchedValue_t) {
          const watchedValue_e = [];
          for (const i of watchedValue_t.split(",")) {
            const watchedValue_t = this._parseDay(i, "holiday", watchedValue_s);
            o.set(watchedValue_t, watchedValue_e)
          }
        }
        if ("" === i) return o;
        for (const watchedValue_e of i.split(";")) {
          const watchedValue_t = watchedValue_e.split(":");
          if (2 !== watchedValue_t.length) throw new Error(`bad correction section: ${watchedValue_e}`);
          const i = [];
          if ("dayoff" !== watchedValue_t[0])
            for (const watchedValue_e of watchedValue_t[0].split(",")) i.push(this._parseSessionEntry(1, watchedValue_e, watchedValue_s));
          for (const watchedValue_e of watchedValue_t[1].split(",")) {
            const watchedValue_t = this._parseDay(watchedValue_e, "correction", watchedValue_s),
              r = (0, watchedValue_n.get_day_of_week)(watchedValue_t.toCalendar()),
              watchedValue_a = [];
            for (let watchedValue_e = 0; watchedValue_e < i.length; watchedValue_e++) {
              const watchedValue_t = i[watchedValue_e];
              watchedValue_a.push(new c(r, watchedValue_t.startOffset(), watchedValue_t.length()))
            }
            o.set(watchedValue_t, watchedValue_a)
          }
        }
        return o
      }
    }

    function S(watchedValue_e, watchedValue_t) {
      return watchedValue_e.compareTo(watchedValue_t) < 0
    }
    const b = (0, watchedValue_n.get_timezone)("Etc/UTC");
    var w;
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.Closest = 0] = "Closest", watchedValue_e[watchedValue_e.FirstInDay = -1] = "FirstInDay", watchedValue_e[watchedValue_e.LastInDay = 1] = "LastInDay"
    }(w || (w = {}));
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
      constructor(watchedValue_e = "Etc/UTC", watchedValue_t = "0000-0000", i = "", watchedValue_s = "", o = !1) {
        const r = new v;
        o ? r.parseSessionsAndValidateDateTime(watchedValue_e, watchedValue_t) : r.parseSessions(watchedValue_e, watchedValue_t), this._entries = r.historyEntries, this
          ._hasHistoryCorrections = r.hasHistoryCorrections, this._presentHistoryEntry = r.historyEntries[r
            .historyEntries.length - 1], this._timezone = r.timezone, this._timezoneObj = (0, watchedValue_n.get_timezone)(r
            .timezone),
          this._holidayAndCorrectionMap = o ? v.parseHolidaysAndCorrectionsAndValidateDateTime(watchedValue_e, i, watchedValue_s) : v
          .parseHolidaysAndCorrections(watchedValue_e, i, watchedValue_s, o);
        const watchedValue_a = this._holidayAndCorrectionMap.keys();
        this._entriesHash = new Map;
        const l = this._prepareSessionsBorderParams();
        this._borderWeeksIndicesHash = l.borderWeeksIndicesHash, this._yearToWeeksIndicesHash = l
          .yearToWeeksIndicesHash, this._weekIndicesOfLastHistoryWeek = l.weekIndicesOfLastHistoryWeek, this
          ._presentStartWeekIndex = l.startPresentSessionWeekIndex, this._yearToCalculatedAddedWeekIndicesHash =
          new Map, "" === i && "" === watchedValue_s && null === this._weekIndicesOfLastHistoryWeek ? this._isThereCorrections = !
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
        (0, o.assert)(watchedValue_e >= 0);
        const watchedValue_t = watchedValue_e,
          i = this._entriesHash.get(watchedValue_t);
        if (void 0 === i) {
          return this._getHistoryAndIndexForWeek(watchedValue_t).getEntries()
        }
        let watchedValue_s = i.get();
        if (null !== watchedValue_s) return watchedValue_s;
        let r = null;
        const c = this._borderWeeksIndicesHash.get(watchedValue_t);
        r = void 0 === c ? this._getHistoryAndIndexForWeek(watchedValue_t).getEntries() : this._prepareBorderWeekHistory(c);
        const h = new Map(r.entriesByDay());
        let u = [...r.list()];
        const _ = this._weekIndexToLocalDateTime(watchedValue_e),
          m = this._weekIndexToLocalDateTime(watchedValue_e + 1),
          g = watchedValue_a.BusinessDay.fromCalendar(_),
          f = watchedValue_a.BusinessDay.fromCalendar(m);
        for (const [watchedValue_e, watchedValue_t] of this._selectHolidays(g, f)) {
          const i = (0, watchedValue_n.get_day_of_week)(watchedValue_e.toCalendar());
          u = u.filter((watchedValue_e => watchedValue_e.dayOfWeek() !== i)), u.push(...watchedValue_t), 0 === watchedValue_t.length ? h.delete(i) : h.set(i, watchedValue_t)
        }
        u.sort(l);
        const y = p.length - h.size;
        return watchedValue_s = new d(u, h, r.firstDayOfWeek(), y), i.set(watchedValue_s), watchedValue_s
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
          const i = this._entries[watchedValue_t].getEntries().longestSessionLength();
          watchedValue_e = Math.max(watchedValue_e, i)
        }
        let watchedValue_t = -1 / 0;
        for (const watchedValue_e of this._holidayAndCorrectionMap.values()) watchedValue_t = Math.max(watchedValue_t, ...watchedValue_e.map((watchedValue_e => watchedValue_e.length())));
        return Math.max(watchedValue_t, watchedValue_e)
      }
      isWeekEnd(watchedValue_e) {
        const watchedValue_t = this.getWeekIndex(watchedValue_e);
        let i;
        return i = void 0 === this._borderWeeksIndicesHash.get(watchedValue_t) ? this._getHistoryAndIndexForWeek(watchedValue_t).getEntries() :
          this.getEntriesForWeek(watchedValue_t), i.isWeekEnd((0, watchedValue_n.get_day_of_week)(watchedValue_e))
      }
      isCalWeekEnd(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_n.get_day_of_week)(watchedValue_e);
        if (!this._isThereCorrections) return this._presentHistoryEntry.getEntries().isWeekEnd(watchedValue_t);
        const i = this.getWeekIndex(watchedValue_e),
          watchedValue_s = this.getEntriesForWeek(i),
          o = watchedValue_a.BusinessDay.fromCalendar(watchedValue_e),
          r = this._holidayAndCorrectionMap.get(o);
        return void 0 === r ? watchedValue_s.isWeekEnd(watchedValue_t) : 0 === r.length
      }
      holidaysFromYearStart(watchedValue_e) {
        const watchedValue_t = watchedValue_e instanceof watchedValue_a.BusinessDay ? watchedValue_e : watchedValue_a.BusinessDay.fromCalendar(watchedValue_e);
        return this._holidaysFromYearStart(watchedValue_t)
      }
      daysOffFromYearStart(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_n.get_cal)(b, (0, watchedValue_n.get_year)(watchedValue_e), watchedValue_n.JANUARY, 1),
          i = this.getWeekIndex(watchedValue_t),
          watchedValue_s = (0, watchedValue_n.get_day_of_week)(watchedValue_t),
          o = (0, watchedValue_n.get_day_of_week)(watchedValue_e) - 1;
        if ((0,
            watchedValue_n.get_day_of_year)(watchedValue_e) + watchedValue_s <= watchedValue_n.LAST_DAY_OF_WEEK + watchedValue_n.FIRST_DAY_OF_WEEK) return this
          ._getDaysOffForWeekInBorders(i, watchedValue_s, o);
        const r = this.getWeekIndex(watchedValue_e);
        let watchedValue_a = this._getDaysOffForWeekInBorders(i, watchedValue_s, watchedValue_n.LAST_DAY_OF_WEEK);
        for (let watchedValue_e = i + 1; watchedValue_e < r; watchedValue_e++) {
          watchedValue_a += this.getEntriesForWeek(watchedValue_e).weekEndsCount()
        }
        return watchedValue_a += this._getDaysOffForWeekInBorders(r, watchedValue_n.FIRST_DAY_OF_WEEK, o), watchedValue_a
      }
      weekEndsCountForSingleSession() {
        return (0, o.assert)(!this.hasHistoryCorrections()), this._presentHistoryEntry.getEntries().weekEndsCount()
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
      indexOfSession(watchedValue_e, watchedValue_t, i) {
        (0, o.assert)(watchedValue_t >= watchedValue_n.SUNDAY && watchedValue_t <= watchedValue_n.SATURDAY), (0, o.assert)(i >= 0 && i < watchedValue_n.minutesPerDay);
        const watchedValue_s = this.getEntriesForWeek(watchedValue_e),
          watchedValue_a = watchedValue_s.list();
        let l = (0, r.lowerbound)(watchedValue_a, new c(watchedValue_t, i, 0), S);
        if (l < watchedValue_a.length) return new h(watchedValue_e, l, [...watchedValue_a]);
        let d = watchedValue_e + 1,
          u = this.getEntriesForWeek(d);
        if (0 !== u.list().length) {
          const watchedValue_e = 7 - watchedValue_t + u.firstDayOfWeek() - 1;
          if (i = -(watchedValue_n.minutesPerDay - i + watchedValue_e * watchedValue_n.minutesPerDay), l = (0, r.lowerbound)(u.list(), new c(u
              .firstDayOfWeek(), i, 0), S), l < u.list().length) return new h(d, l, [...u.list()])
        }
        for (;;)
          if (d++, i -= watchedValue_n.minutesPerWeek, u = this.getEntriesForWeek(d), 0 !== u.list().length && (l = (0, r
              .lowerbound)(u.list(), new c(watchedValue_s.firstDayOfWeek(), i, 0), S), !(l >= u.list().length))) return new h(d, l,
            [...u.list()])
      }
      findSession(watchedValue_e, watchedValue_t, i, watchedValue_s = 0) {
        const o = this.indexOfSession(watchedValue_e, watchedValue_t, i),
          watchedValue_n = o.entries;
        let r = o.entryIndex;
        if (0 !== watchedValue_s) {
          const watchedValue_e = watchedValue_n[r].dayOfWeek(),
            watchedValue_t = watchedValue_s > 0 ? 1 : -1;
          for (;;) {
            const i = r + watchedValue_t;
            if (i < 0 || i >= watchedValue_n.length || watchedValue_n[i].dayOfWeek() !== watchedValue_e) break;
            r = i
          }
        }
        return new h(o.weekIndex, r, watchedValue_n)
      }
      getWeekIndex(watchedValue_e) {
        return this._isThereCorrections ? T._getWeekIndexImpl(watchedValue_e) : 0
      }
      correctTradingDay(watchedValue_e) {
        const watchedValue_t = this._correctTradingDay(this.getWeekIndex(watchedValue_e), (0, watchedValue_n.get_day_of_week)(watchedValue_e), (0, watchedValue_n
            .get_minutes_with_hours)(watchedValue_e)),
          i = (0, watchedValue_n.clone)(watchedValue_e);
        return (0, watchedValue_n.add_date)(i, watchedValue_t), i
      }
      alignToSessionStart(watchedValue_e, watchedValue_t = 0) {
        const i = (0, watchedValue_n.get_day_of_week)(watchedValue_e),
          watchedValue_s = (0, watchedValue_n.get_minutes_from_midnight)(watchedValue_e),
          o = this.getWeekIndex(watchedValue_e),
          r = this.findSession(o, i, watchedValue_s, watchedValue_t),
          watchedValue_a = r.getEntry(),
          l = watchedValue_a.dayOfWeek() - i + 7 * Math.trunc(r.weekIndex - o);
        0 !== l && (0, watchedValue_n.add_date)(watchedValue_e, l);
        const c = watchedValue_a.startOffset();
        return (0, watchedValue_n.set_hms)(watchedValue_e, Math.trunc(c / 60), c % 60, 0, 0), watchedValue_a.length()
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
        const i = watchedValue_t.slice();
        i.sort(l);
        const watchedValue_s = this._getLeftEntryBorder(watchedValue_e, i[0]),
          o = i[i.length - 1],
          r = 60 * (o.startOffset() + o.length()) - 1,
          watchedValue_a = (0, watchedValue_n.clone)(watchedValue_e);
        return (0, watchedValue_n.set_seconds)(watchedValue_a, r), {
          from: watchedValue_s,
          to: watchedValue_a
        }
      }
      leftBorderOfDailyBar(watchedValue_e) {
        const watchedValue_t = this._getEntriesForDay(watchedValue_e);
        if (0 === watchedValue_t.length) return null;
        const i = watchedValue_t.slice();
        return i.sort(l), this._getLeftEntryBorder(watchedValue_e, i[0])
      }
      checkSession() {
        return this._checkEachHistorySession() && this._checkSpecialEntries() && this._checkTooManyCorrectionsOnWeek()
      }
      inSession(watchedValue_e) {
        watchedValue_e = new Date(1e3 * Math.floor(watchedValue_e.getTime() / 1e3));
        const watchedValue_t = this.alignToNearestSessionStart(watchedValue_e, -1),
          i = this.alignToNearestSessionEnd(watchedValue_t, 1);
        return !(watchedValue_e.getTime() > i.getTime())
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
        let i = null;
        this._entries.length > 1 && (i = Array.from({
          length: this._entries.length - 1
        }, (() => 0)));
        let watchedValue_s = 0;
        for (let watchedValue_n = 0; watchedValue_n < this._entries.length - 1; watchedValue_n++) {
          const r = this._entries[watchedValue_n + 1],
            watchedValue_a = (0, o.ensureNotNull)(r.getStartDay());
          watchedValue_s = T._getWeekIndexImpl(watchedValue_a), watchedValue_e.set(watchedValue_s, watchedValue_n + 1), this._addToYearHash(watchedValue_t, watchedValue_a, watchedValue_s), this._entriesHash.set(watchedValue_s, new C(
            null)), (0, o.ensureNotNull)(i)[watchedValue_n] = watchedValue_s
        }
        return {
          borderWeeksIndicesHash: watchedValue_e,
          yearToWeeksIndicesHash: watchedValue_t,
          startPresentSessionWeekIndex: watchedValue_s,
          weekIndicesOfLastHistoryWeek: i
        }
      }
      _addToYearHash(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = (0, watchedValue_n.get_year)(watchedValue_t);
        let o = watchedValue_e.get(watchedValue_s);
        void 0 === o && (o = [], watchedValue_e.set(watchedValue_s, o)), o.push(i)
      }
      _getHistoryAndIndexForWeek(watchedValue_e) {
        if (this._presentStartWeekIndex <= watchedValue_e) return this._presentHistoryEntry;
        const watchedValue_t = this._getIndexOfHistoryEntry(watchedValue_e);
        return this._entries[watchedValue_t]
      }
      _getIndexOfHistoryEntry(watchedValue_e) {
        let watchedValue_t = 0,
          i = this._entries.length - 1,
          watchedValue_s = Math.floor((watchedValue_t + i) / 2);
        for ((0, o.assert)(null !== this._weekIndicesOfLastHistoryWeek);;) {
          if (this._weekIndicesOfLastHistoryWeek[watchedValue_s] >= watchedValue_e) {
            if (i = watchedValue_s - 1, i < watchedValue_t) return watchedValue_s
          } else if (watchedValue_t = watchedValue_s + 1, i < watchedValue_t) return watchedValue_s + 1;
          watchedValue_s = Math.floor((watchedValue_t + i) / 2)
        }
      }
      _selectHolidays(watchedValue_e, watchedValue_t) {
        const i = new Set;
        for (const [watchedValue_s, o] of this._holidayAndCorrectionMap) watchedValue_s.compareTo(watchedValue_e) >= 0 && watchedValue_s.compareTo(watchedValue_t) < 0 && i.add([watchedValue_s,
        o]);
        return i
      }
      _prepareBorderWeekHistory(watchedValue_e) {
        const watchedValue_t = this._entries[watchedValue_e - 1],
          i = this._entries[watchedValue_e],
          watchedValue_s = new Map,
          r = [],
          watchedValue_a = (0, watchedValue_n.get_day_of_week)((0, o.ensureNotNull)(i.getStartDay()));
        for (let watchedValue_e = 0; watchedValue_e < p.length; watchedValue_e++) {
          const o = p[watchedValue_e];
          if (o < watchedValue_a) {
            const watchedValue_e = watchedValue_t.getEntries().entriesByDay().get(o);
            void 0 !== watchedValue_e && (r.push(...watchedValue_e), watchedValue_s.set(o, watchedValue_e))
          } else {
            const watchedValue_e = i.getEntries().entriesByDay().get(o);
            void 0 !== watchedValue_e && (r.push(...watchedValue_e), watchedValue_s.set(o, watchedValue_e))
          }
        }
        return new d(r, watchedValue_s, i.getEntries().firstDayOfWeek(), 0)
      }
      _holidaysFromYearStart(watchedValue_e) {
        if (!this._isThereCorrections) return 0;
        (0, o.assert)(!this.hasHistoryCorrections());
        const watchedValue_t = watchedValue_e.firstDayOfYear();
        let i = 0;
        for (const [watchedValue_s, o] of this._selectHolidays(watchedValue_t, watchedValue_e)) {
          const watchedValue_e = watchedValue_s.getDayOfWeek(),
            watchedValue_t = 0 === o.length;
          this._presentHistoryEntry.getEntries().isWeekEnd(watchedValue_e) ? i += watchedValue_t ? 0 : -1 : i += watchedValue_t ? 1 : 0
        }
        return i
      }
      _getDaysOffForWeekInBorders(watchedValue_e, watchedValue_t, i) {
        let watchedValue_s = 0;
        const o = this.getEntriesForWeek(watchedValue_e);
        for (let watchedValue_e = watchedValue_t; watchedValue_e <= i; watchedValue_e++) o.entriesByDay().has(watchedValue_e) || watchedValue_s++;
        return watchedValue_s
      }
      _weekIndexToLocalDateTime(watchedValue_e) {
        const watchedValue_t = Math.floor(86400 * watchedValue_e * 7 + 86400 - 62167219200),
          i = (0, watchedValue_n.get_cal_from_unix_timestamp_ms)(b, 1e3 * watchedValue_t);
        return (0, watchedValue_n.set_hms)(i, 0, 0, 0, 0), i
      }
      _correctTradingDay(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = this.findSession(watchedValue_e, watchedValue_t, i, 0);
        return watchedValue_s.getEntry().dayOfWeek() - watchedValue_t + 7 * Math.trunc(watchedValue_s.weekIndex - watchedValue_e)
      }
      _entrySessionValue(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        watchedValue_t = (0, watchedValue_n.clone)(watchedValue_t);
        let o = (0, watchedValue_n.get_day_of_week)(watchedValue_t);
        const r = watchedValue_e.getEntry();
        let watchedValue_a = r.dayOfWeek() - r.sessionStartDaysOffset();
        const l = this.getWeekIndex(watchedValue_t);
        let c = Math.trunc(watchedValue_e.weekIndex - l),
          h = !1;
        if (watchedValue_a < watchedValue_n.SUNDAY && (c <= 0 ? h = !0 : c--, watchedValue_a += 7), (c > 0 && i >= 0 || c < 0 && i < 0) && (0, watchedValue_n.add_date)(watchedValue_t,
            7 * c), !r.contains(watchedValue_t)) {
          let watchedValue_e = watchedValue_a - o;
          h && i < 0 && (watchedValue_e = -(7 - watchedValue_a + o)), (0, watchedValue_n.add_date)(watchedValue_t, watchedValue_e), o = (0, watchedValue_n.get_day_of_week)(watchedValue_t)
        }
        if (r.isOvernight()) {
          const watchedValue_e = r.sessionStartDaysOffset(),
            i = (o - (r.dayOfWeek() - watchedValue_e) + 7) % 7;
          0 !== i && (0, watchedValue_n.add_date)(watchedValue_t, -i)
        }
        const d = watchedValue_s(r);
        return (0, watchedValue_n.set_seconds)(watchedValue_t, d), watchedValue_t
      }
      _businessDaysToCalendarDays(watchedValue_e, watchedValue_t, i) {
        let watchedValue_s = 0,
          o = 0;
        for (; o < i;) {
          const r = this.getEntriesForWeek(watchedValue_e);
          for (let watchedValue_e = watchedValue_t; watchedValue_e <= watchedValue_n.SATURDAY; watchedValue_e++)
            if (watchedValue_s++, void 0 !== r.entriesByDay().get(watchedValue_e) && o++, o >= i) return watchedValue_s;
          watchedValue_e++, watchedValue_t = watchedValue_n.SUNDAY
        }
        return watchedValue_s
      }
      _calendarDaysToBusinessDays(watchedValue_e, watchedValue_t, i) {
        let watchedValue_s = 0,
          o = 0;
        for (; watchedValue_s < i;) {
          const r = this.getEntriesForWeek(watchedValue_e);
          for (let watchedValue_e = watchedValue_t; watchedValue_e <= watchedValue_n.SATURDAY; watchedValue_e++)
            if (watchedValue_s++, void 0 !== r.entriesByDay().get(watchedValue_e) && o++, watchedValue_s >= i) return o;
          watchedValue_e++, watchedValue_t = watchedValue_n.SUNDAY
        }
        return o
      }
      _entrySessionStart(watchedValue_e, watchedValue_t, i) {
        return this._entrySessionValue(watchedValue_e, watchedValue_t, i, (watchedValue_e => 60 * watchedValue_e.start()))
      }
      _entrySessionEnd(watchedValue_e, watchedValue_t, i) {
        return this._entrySessionValue(watchedValue_e, watchedValue_t, i, (watchedValue_e => 60 * (watchedValue_e.start() + watchedValue_e.length()) - 1))
      }
      _alignToNearestSessionValue(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = (0, watchedValue_n.get_day_of_week)(watchedValue_e),
          o = (0, watchedValue_n.get_minutes_with_hours)(watchedValue_e),
          r = this.getWeekIndex(watchedValue_e);
        let watchedValue_a = this.findSession(r, watchedValue_s, o);
        if (1 === watchedValue_t) return i(watchedValue_a, watchedValue_e, watchedValue_t);
        const l = watchedValue_a.getEntry(),
          c = l.contains(watchedValue_e),
          d = r === watchedValue_a.weekIndex,
          u = l.sessionStartDaysOffset() - l.dayOfWeek() >= 0;
        if (c && (d || u)) return i(watchedValue_a, watchedValue_e, watchedValue_t);
        let _ = watchedValue_a.entryIndex - 1;
        if (_ < 0) {
          let watchedValue_e = watchedValue_a.weekIndex,
            watchedValue_t = watchedValue_a.entries;
          if (0 === watchedValue_e) watchedValue_e--, _ += watchedValue_t.length;
          else
            for (; _ < 0;) watchedValue_e--, watchedValue_t = this.getEntriesForWeek(watchedValue_e).list(), _ += watchedValue_t.length;
          watchedValue_a = new h(watchedValue_e, _, watchedValue_t)
        } else watchedValue_a = new h(watchedValue_a.weekIndex, _, watchedValue_a.entries);
        return i(watchedValue_a, watchedValue_e, watchedValue_t)
      }
      _getEntriesForDay(watchedValue_e) {
        const watchedValue_t = (0, watchedValue_n.get_day_of_week)(watchedValue_e),
          i = this.getEntriesForWeek(this.getWeekIndex(watchedValue_e)).entriesByDay().get(watchedValue_t);
        return void 0 !== i ? i : []
      }
      _getLeftEntryBorder(watchedValue_e, watchedValue_t) {
        let i = watchedValue_t.startOffset();
        const watchedValue_s = -Math.trunc((i - 1439) / 1440);
        i += 1440 * watchedValue_s;
        const o = (0, watchedValue_n.get_cal)(b, (0, watchedValue_n.get_year)(watchedValue_e), (0, watchedValue_n.get_month)(watchedValue_e), (0, watchedValue_n.get_day_of_month)(watchedValue_e), Math.trunc(
          i / 60), i % 60, 0);
        return (0, watchedValue_n.add_date)(o, -watchedValue_s), o
      }
      _checkEachHistorySession() {
        for (const watchedValue_e of this._entries) {
          const watchedValue_t = watchedValue_e.getEntries().list();
          if (!this._checkEntriesForIntersections(watchedValue_t, watchedValue_t, watchedValue_t)) return !1
        }
        return !0
      }
      _checkEntriesForIntersections(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = this._buildTestEntries(watchedValue_e, watchedValue_t, i);
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_s.length - 1; watchedValue_e++)
          for (let watchedValue_t = watchedValue_e + 1; watchedValue_t < watchedValue_s.length; watchedValue_t++)
            if (0 === watchedValue_s[watchedValue_e].compareTo(watchedValue_s[watchedValue_t])) return !1;
        return !0
      }
      _buildTestEntries(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = [];
        for (let watchedValue_t = 0; watchedValue_t < watchedValue_e.length; watchedValue_t++) {
          const i = watchedValue_e[watchedValue_t],
            o = new c(i.dayOfWeek(), i.startOffset(), i.length());
          watchedValue_s.push(o)
        }
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_t.length; watchedValue_e++) {
          const i = watchedValue_t[watchedValue_e],
            o = new c(i.dayOfWeek() + 7, i.startOffset(), i.length());
          watchedValue_s.push(o)
        }
        for (let watchedValue_e = 0; watchedValue_e < i.length; watchedValue_e++) {
          const watchedValue_t = i[watchedValue_e],
            o = new c(watchedValue_t.dayOfWeek() + 14, watchedValue_t.startOffset(), watchedValue_t.length());
          watchedValue_s.push(o)
        }
        return watchedValue_s
      }
      _checkSpecialEntries() {
        for (const [watchedValue_e] of this._entriesHash) {
          const watchedValue_t = this.getEntriesForWeek(watchedValue_e).list(),
            i = this.getEntriesForWeek(watchedValue_e - 1).list(),
            watchedValue_s = this.getEntriesForWeek(watchedValue_e + 1).list();
          if (!this._checkEntriesForIntersections(i, watchedValue_t, watchedValue_s)) return !1
        }
        return !0
      }
      _checkTooManyCorrectionsOnWeek() {
        if (this._entries.length < 2) return !0;
        for (let watchedValue_e = 0; watchedValue_e < this._entries.length - 2; watchedValue_e++) {
          const watchedValue_t = this._entries[watchedValue_e],
            i = this._entries[watchedValue_e + 1];
          if (this.getWeekIndex((0, o.ensureNotNull)(watchedValue_t.getSpecEndDay())) === this.getWeekIndex((0, o.ensureNotNull)(i
              .getSpecEndDay()))) return !1
        }
        return !0
      }
      _calculateAddedIndices(watchedValue_e) {
        const watchedValue_t = [],
          i = this._yearToWeeksIndicesHash.get(watchedValue_e);
        if (void 0 === i) return watchedValue_t;
        for (const watchedValue_e of i) {
          const i = (0, o.ensureDefined)(this._borderWeeksIndicesHash.get(watchedValue_e)),
            watchedValue_s = this._entries[i],
            r = this._entries[i - 1];
          let watchedValue_a = watchedValue_s.getEntries().firstDayOfWeek() - r.getEntries().firstDayOfWeek();
          for (; watchedValue_a > 0;) {
            const r = (0, watchedValue_n.clone)((0, o.ensureNotNull)(watchedValue_s.getStartDay()));
            if ((0, watchedValue_n.add_date)(r, -watchedValue_a), !this.isCalWeekEnd(r)) {
              const watchedValue_s = {
                entryIndex: i,
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
        const i = watchedValue_t.getTime() / 1e3;
        return (0, o.assert)((i + 62167219200) % 86400 == 0), Math.trunc((i + 62167219200) / 86400 / 7)
      }
    }