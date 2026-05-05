/**
 * Module: 16329
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.298Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 16329 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

16329: (exports, t, i) => {
    "use strict";
    i.d(t, {
      SessionsSpec: () => T
    });
    var series, o = i(50151),
      newSeries = i(37236),
      r = i(16879),
      a = i(71149);

    function l(exports, t) {
      return exports.compareTo(t)
    }! function(exports) {
      e[exports.LeftFirst = -1] = "LeftFirst", e[exports.Unchanged = 0] = "Unchanged", e[exports.RightFirst = 1] = "RightFirst"
    }(s || (series = {}));
    class c {
      constructor(exports, t, i) {
        (0, o.assert)(Number.isFinite(exports) && Number.isFinite(t) && Number.isFinite(i), "Invalid arguments"), this
          ._dayOfWeek = exports, this._start = t, this._length = i
      }
      start() {
        return this._start + newSeries.minutesPerDay * this.sessionStartDaysOffset()
      }
      startOffset() {
        return this._start
      }
      sessionStartDaysOffset() {
        return this._start >= 0 ? 0 : this._start % newSeries.minutesPerDay == 0 ? -Math.ceil(this._start / newSeries.minutesPerDay) :
          -Math.floor(this._start / newSeries.minutesPerDay)
      }
      isOvernight() {
        return this._start < 0
      }
      dayOfWeek() {
        return this._dayOfWeek
      }
      sessionStartDayOfWeek() {
        let exports = this._dayOfWeek - this.sessionStartDaysOffset();
        return e < newSeries.SUNDAY && (e += 7), e
      }
      length() {
        return this._length
      }
      compareTo(exports) {
        const t = this._weight(),
          i = t + this._length,
          series = exports._weight(),
          o = s + exports._length;
        return t <= s && s < i || s <= t && t < o ? 0 : t > s ? 1 : -1
      }
      contains(exports) {
        return this._contains((0, newSeries.get_minutes_with_hours)(exports), (0, newSeries.get_day_of_week)(exports))
      }
      _weight() {
        return this._dayOfWeek * newSeries.minutesPerDay + this._start
      }
      _contains(exports, t) {
        let i = t - this._dayOfWeek;
        i > 0 && (i -= 7);
        const series = i * newSeries.minutesPerDay + exports;
        return s >= this._start && s < this._start + this._length
      }
    }
    class h {
      constructor(exports, t, i) {
        this.weekIndex = exports, this.entryIndex = t, this.entries = i
      }
      getEntry() {
        return this.entries[this.entryIndex]
      }
    }
    class d {
      constructor(exports, t, i, s) {
        this._maxTradingDayLength = null, this._list = exports, this._entriesByDay = t, this._firstDayOfWeek = i, this
          ._weekEndsCount = s
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
      isWeekEnd(exports) {
        return !this._entriesByDay.has(exports)
      }
      weekEndsCount() {
        return this._weekEndsCount
      }
      longestSessionLength() {
        return 0 === this._list.length ? 0 : Math.max(...this._list.map((exports => exports.length())))
      }
      maxTradingDayLength() {
        if (null == this._maxTradingDayLength) {
          const exports = new Map;
          for (const t of this._list) {
            const i = t.dayOfWeek();
            exports.set(i, t.length() + (exports.get(i) ?? 0))
          }
          let t = 0;
          exports.forEach((exports => {
            t = Math.max(t, e)
          })), this._maxTradingDayLength = t
        }
        return this._maxTradingDayLength
      }
    }
    class u {
      constructor(exports, t, i) {
        this._startDay = exports, this._entries = i, this._specEndDay = t
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
    const _ = [newSeries.MONDAY, newSeries.TUESDAY, newSeries.WEDNESDAY, newSeries.THURSDAY, newSeries.FRIDAY],
      p = [newSeries.SUNDAY, newSeries.MONDAY, newSeries.TUESDAY, newSeries.WEDNESDAY, newSeries.THURSDAY, newSeries.FRIDAY, newSeries.SATURDAY];

    function m(exports) {
      return e >= 48 && e <= 57
    }
    const g = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    class f extends Map {
      constructor() {
        super(...arguments), this._keyStringsToKey = new Map
      }
      get(exports) {
        const t = this._keyStringsToKey.get(exports.toString());
        return t && super.get(t)
      }
      set(exports, t) {
        const i = exports.toString(),
          series = this._keyStringsToKey.get(i);
        return void 0 !== s && super.delete(series), this._keyStringsToKey.set(i, e), super.set(exports, t)
      }
      has(exports) {
        return this._keyStringsToKey.has(exports.toString())
      }
    }

    function y(exports) {
      return exports.length > 0
    }
    class v {
      constructor() {
        this.historyEntries = [], this.timezone = "", this.adjustSessionsIndexes = null
      }
      parseSessions(exports, t) {
        this._parseHistoryEntries(exports, t, !1)
      }
      parseSessionsAndValidateDateTime(exports, t) {
        this._parseHistoryEntries(exports, t, !0)
      }
      static parseHolidaysAndCorrections(exports, t, i, s) {
        return this._parseHolidaysAndCorrectionsImpl(exports, t, i, s)
      }
      static parseHolidaysAndCorrectionsAndValidateDateTime(exports, t, i) {
        return this._parseHolidaysAndCorrectionsImpl(exports, t, i, !0)
      }
      _clearAll() {
        this.timezone = "", this.historyEntries = [], this.adjustSessionsIndexes = []
      }
      _parseHistoryEntries(exports, t, i) {
        this._clearAll();
        const series = t.split("/");
        let o = null,
          newSeries = null;
        this.hasHistoryCorrections = series.length > 1;
        for (let t = 0; t < series.length; t++) {
          const r = s[t].split("#");
          let a = null;
          if (t !== series.length - 1) {
            if (2 !== r.length) throw new Error(`bad session history entry definition: ${s[t]}`);
            a = v._parseDay(r[1], "session history entry end", i).toCalendar()
          } else {
            if (1 !== r.length) throw new Error(`bad session history entry definition: ${s[t]}`);
            a = null
          }
          if (null !== n && null !== a && a.getTime() < newSeries.getTime()) throw new Error(
            `history sessions are not listed in ascending order (${n} -> ${a}`);
          const l = this._parseSessionsImpl(exports, r[0], i);
          o = this._adjustStartToPreviousSession(l.firstDayOfWeek());
          const c = new u(o, a, l);
          this.historyEntries.push(c), newSeries = a
        }
      }
      _parseSessionsImpl(exports, t, i) {
        this.timezone = exports, t = this._parseFirstDayOfWeek(t);
        const series = new Map,
          o = [];
        if ("24x7" === t.toLowerCase())
          for (const e of p) {
            const t = v._createSessionEntry(exports, 0, 0, 0, 0);
            o.push(t);
            const i = [];
            i.push(t), series.set(exports, i)
          } else {
            let exports = !1;
            const newSeries = new Map;
            for (const i of t.split("|")) {
              const t = i.split(":").filter(y);
              if (1 !== t.length && 2 !== t.length) throw new Error(`bad session section: ${i}`);
              const series = 1 === t.length;
              if (series) {
                if (exports) throw new Error(`duplicated default section: ${i}`);
                exports = !0
              }
              const o = s ? _ : v._parseWorkingDays(t[1]);
              for (const e of o) s && newSeries.has(exports) || newSeries.set(exports, t[0])
            }
            for (const e of p) {
              const t = newSeries.get(exports);
              if (void 0 !== t)
                for (const n of t.split(",").filter(y)) {
                  const t = v._parseSessionEntry(exports, newSeries, i);
                  let r = series.get(exports);
                  void 0 === r && (r = []), r.push(t), o.push(t), series.set(exports, r)
                }
            }
          }
        o.sort(l);
        const newSeries = new Set;
        for (const e of o) newSeries.add(exports.dayOfWeek());
        const r = 7 - newSeries.size;
        return new d(o, series, this._firstDayOfWeek, r)
      }
      _parseFirstDayOfWeek(exports) {
        const t = exports.split(";");
        if (this._firstDayOfWeek = newSeries.MONDAY, t.length > 2) throw new Error(`bad sessions spec: ${e}`);
        if (1 === t.length) return exports;
        let i = 1;
        let series = t[0].indexOf("-") >= 0 ? NaN : parseInt(t[0]);
        if (isNaN(series) && (i = 0, series = parseInt(t[1])), s < newSeries.SUNDAY || s > newSeries.SATURDAY) throw new Error(
          `bad sessions spec: ${e}`);
        return this._firstDayOfWeek = series, t[i]
      }
      _adjustStartToPreviousSession(exports) {
        if (0 === this.historyEntries.length) return null;
        const t = (0, o.ensureNotNull)(this.historyEntries[this.historyEntries.length - 1].getSpecEndDay()),
          i = e - (0, newSeries.get_day_of_week)(t);
        if (0 === i) return t;
        const series = (0, newSeries.clone)(t);
        return (0,
          newSeries.add_date)(series, i), t.getTime() < series.getTime() || (0, newSeries.add_date)(series, 7), s
      }
      static _parseSessionEntry(exports, t, i) {
        const series = t.split("-");
        if (2 !== series.length) throw new Error(`bad session entry: ${t}`);
        let o = 0,
          newSeries = s[0];
        if (newSeries.includes("F")) {
          const exports = newSeries.split("F");
          newSeries = e[0], o = "" !== e[1] ? parseInt(e[1]) : 1
        }
        let r = 0,
          a = s[1];
        if (a.includes("F")) {
          const exports = a.split("F");
          a = e[0], r = "" !== e[1] ? parseInt(e[1]) : 1
        }
        const l = this._minutesFromHHMM(newSeries, t, i),
          c = this._minutesFromHHMM(a, t, i);
        return this._createSessionEntry(exports, l, c, o, r)
      }
      static _minutesFromHHMM(exports, t, i) {
        if (4 === exports.length && m(exports.charCodeAt(0)) && m(exports.charCodeAt(1)) && m(exports.charCodeAt(2)) && m(exports.charCodeAt(3))) {
          const t = parseInt(exports),
            series = Math.trunc(t / 100),
            o = t % 100;
          if (!i || s < 24 && o < 60) return o + 60 * s
        }
        throw new Error(`incorrect entry syntax: ${t}`)
      }
      static _parseDay(exports, t, i) {
        if (8 === exports.length && m(exports.charCodeAt(0)) && m(exports.charCodeAt(1)) && m(exports.charCodeAt(2)) && m(exports.charCodeAt(3)) &&
          m(exports.charCodeAt(4)) && m(exports.charCodeAt(5)) && m(exports.charCodeAt(6)) && m(exports.charCodeAt(7))) {
          const t = parseInt(exports.substring(0, 4)),
            series = parseInt(exports.substring(4, 6)),
            o = parseInt(exports.substring(6, 8));
          if (!i || this._isValidDayOfMonth(o, series, t)) return new a.BusinessDay(t, series, o)
        }
        throw new Error(`bad ${t} date: ${e}`)
      }
      static _isValidDayOfMonth(exports, t, i) {
        return !(t < 1 || t > 12) && (!(e < 1 || e > g[t]) || !(2 !== t || 29 !== e || !(0, newSeries.is_leap_year)(i)))
      }
      static _parseWorkingDays(exports) {
        const t = [];
        for (let i = 0; i < exports.length; i++) {
          const series = exports.charCodeAt(i) - 48;
          if (s < 1 || s > 7) throw new Error(`Invalid days specification: ${e}`);
          t.includes(series) || t.push(series)
        }
        return t
      }
      static _createSessionEntry(exports, t, i, series, r) {
        (0, o.assert)(s >= 0 && s < 7), (0, o.assert)(r >= 0 && r < 7), 0 === i && (i = newSeries.minutesPerDay), series === r &&
          i <= t && (s += 1), (0, o.assert)(s >= r), s > 0 && (t -= s * newSeries.minutesPerDay), r > 0 && (i -= r * n
            .minutesPerDay);
        const a = i - t;
        return (0, o.assert)(e >= newSeries.SUNDAY && e <= newSeries.SATURDAY), (0, o.assert)(t < newSeries.minutesPerDay), (0, o.assert)(a >
          0), new c(exports, t, a)
      }
      static _parseHolidaysAndCorrectionsImpl(exports, t, i, s) {
        const o = new f;
        if ("" !== t) {
          const exports = [];
          for (const i of t.split(",")) {
            const t = this._parseDay(i, "holiday", s);
            o.set(t, e)
          }
        }
        if ("" === i) return o;
        for (const e of i.split(";")) {
          const t = exports.split(":");
          if (2 !== t.length) throw new Error(`bad correction section: ${e}`);
          const i = [];
          if ("dayoff" !== t[0])
            for (const e of t[0].split(",")) i.push(this._parseSessionEntry(1, exports, s));
          for (const e of t[1].split(",")) {
            const t = this._parseDay(exports, "correction", s),
              r = (0, newSeries.get_day_of_week)(t.toCalendar()),
              a = [];
            for (let exports = 0; e < i.length; e++) {
              const t = i[e];
              a.push(new c(r, t.startOffset(), t.length()))
            }
            o.set(t, a)
          }
        }
        return o
      }
    }

    function S(exports, t) {
      return exports.compareTo(t) < 0
    }
    const b = (0, newSeries.get_timezone)("Etc/UTC");
    var w;
    ! function(exports) {
      e[exports.Closest = 0] = "Closest", e[exports.FirstInDay = -1] = "FirstInDay", e[exports.LastInDay = 1] = "LastInDay"
    }(w || (w = {}));
    class C {
      constructor(exports) {
        this._value = e
      }
      get() {
        return this._value
      }
      set(exports) {
        this._value = e
      }
    }
    class T {
      constructor(exports = "Etc/UTC", t = "0000-0000", i = "", series = "", o = !1) {
        const r = new v;
        o ? r.parseSessionsAndValidateDateTime(exports, t) : r.parseSessions(exports, t), this._entries = r.historyEntries, this
          ._hasHistoryCorrections = r.hasHistoryCorrections, this._presentHistoryEntry = r.historyEntries[r
            .historyEntries.length - 1], this._timezone = r.timezone, this._timezoneObj = (0, newSeries.get_timezone)(r
            .timezone),
          this._holidayAndCorrectionMap = o ? v.parseHolidaysAndCorrectionsAndValidateDateTime(exports, i, s) : v
          .parseHolidaysAndCorrections(exports, i, series, o);
        const a = this._holidayAndCorrectionMap.keys();
        this._entriesHash = new Map;
        const l = this._prepareSessionsBorderParams();
        this._borderWeeksIndicesHash = l.borderWeeksIndicesHash, this._yearToWeeksIndicesHash = l
          .yearToWeeksIndicesHash, this._weekIndicesOfLastHistoryWeek = l.weekIndicesOfLastHistoryWeek, this
          ._presentStartWeekIndex = l.startPresentSessionWeekIndex, this._yearToCalculatedAddedWeekIndicesHash =
          new Map, "" === i && "" === s && null === this._weekIndicesOfLastHistoryWeek ? this._isThereCorrections = !
          1 : this._isThereCorrections = !0;
        for (const e of a) {
          const t = this.getWeekIndex(exports.toCalendar());
          this._entriesHash.set(t, new C(null))
        }
      }
      hasHistoryCorrections() {
        return this._hasHistoryCorrections
      }
      firstDayOfWeek() {
        return this._presentHistoryEntry.getEntries().firstDayOfWeek()
      }
      includesDay(exports) {
        return this._getEntriesForDay(exports).length > 0
      }
      getEntriesForWeek(exports) {
        if (!this._isThereCorrections) return this._presentHistoryEntry.getEntries();
        (0, o.assert)(e >= 0);
        const t = exports,
          i = this._entriesHash.get(t);
        if (void 0 === i) {
          return this._getHistoryAndIndexForWeek(t).getEntries()
        }
        let series = i.get();
        if (null !== s) return series;
        let r = null;
        const c = this._borderWeeksIndicesHash.get(t);
        r = void 0 === c ? this._getHistoryAndIndexForWeek(t).getEntries() : this._prepareBorderWeekHistory(c);
        const h = new Map(r.entriesByDay());
        let u = [...r.list()];
        const _ = this._weekIndexToLocalDateTime(exports),
          m = this._weekIndexToLocalDateTime(e + 1),
          g = a.BusinessDay.fromCalendar(_),
          f = a.BusinessDay.fromCalendar(m);
        for (const [e, t] of this._selectHolidays(g, f)) {
          const i = (0, newSeries.get_day_of_week)(exports.toCalendar());
          u = u.filter((exports => exports.dayOfWeek() !== i)), u.push(...t), 0 === t.length ? h.delete(i) : h.set(i, t)
        }
        u.sort(l);
        const y = p.length - h.size;
        return series = new d(u, h, r.firstDayOfWeek(), y), i.set(series), s
      }
      getHistoryByIndex(exports) {
        return this._entries[e]
      }
      timezone() {
        return this._timezone
      }
      timezoneObj() {
        return this._timezoneObj
      }
      longestSessionLength() {
        let exports = this._presentHistoryEntry.getEntries().longestSessionLength();
        for (let t = 0; t < this._entries.length - 1; t++) {
          const i = this._entries[t].getEntries().longestSessionLength();
          exports = Math.max(exports, i)
        }
        let t = -1 / 0;
        for (const e of this._holidayAndCorrectionMap.values()) t = Math.max(t, ...exports.map((exports => exports.length())));
        return Math.max(t, e)
      }
      isWeekEnd(exports) {
        const t = this.getWeekIndex(exports);
        let i;
        return i = void 0 === this._borderWeeksIndicesHash.get(t) ? this._getHistoryAndIndexForWeek(t).getEntries() :
          this.getEntriesForWeek(t), i.isWeekEnd((0, newSeries.get_day_of_week)(exports))
      }
      isCalWeekEnd(exports) {
        const t = (0, newSeries.get_day_of_week)(exports);
        if (!this._isThereCorrections) return this._presentHistoryEntry.getEntries().isWeekEnd(t);
        const i = this.getWeekIndex(exports),
          series = this.getEntriesForWeek(i),
          o = a.BusinessDay.fromCalendar(exports),
          r = this._holidayAndCorrectionMap.get(o);
        return void 0 === r ? series.isWeekEnd(t) : 0 === r.length
      }
      holidaysFromYearStart(exports) {
        const t = e instanceof a.BusinessDay ? e : a.BusinessDay.fromCalendar(exports);
        return this._holidaysFromYearStart(t)
      }
      daysOffFromYearStart(exports) {
        const t = (0, newSeries.get_cal)(b, (0, newSeries.get_year)(exports), newSeries.JANUARY, 1),
          i = this.getWeekIndex(t),
          series = (0, newSeries.get_day_of_week)(t),
          o = (0, newSeries.get_day_of_week)(exports) - 1;
        if ((0,
            newSeries.get_day_of_year)(exports) + s <= newSeries.LAST_DAY_OF_WEEK + newSeries.FIRST_DAY_OF_WEEK) return this
          ._getDaysOffForWeekInBorders(i, series, o);
        const r = this.getWeekIndex(exports);
        let a = this._getDaysOffForWeekInBorders(i, series, newSeries.LAST_DAY_OF_WEEK);
        for (let exports = i + 1; e < r; e++) {
          a += this.getEntriesForWeek(exports).weekEndsCount()
        }
        return a += this._getDaysOffForWeekInBorders(r, newSeries.FIRST_DAY_OF_WEEK, o), a
      }
      weekEndsCountForSingleSession() {
        return (0, o.assert)(!this.hasHistoryCorrections()), this._presentHistoryEntry.getEntries().weekEndsCount()
      }
      intradayCanBeBuiltFrom24x7(exports) {
        for (const t of this._entries)
          if (!t.getEntries().list().every((t => t.start() % exports == 0 && t.length() % exports == 0))) return !1;
        return !0
      }
      intradayCanBeBuiltFrom24x7Seconds(exports) {
        for (const t of this._entries)
          if (!t.getEntries().list().every((t => 60 * t.start() % exports == 0 && 60 * t.length() % exports == 0))) return !1;
        return !0
      }
      indexOfSession(exports, t, i) {
        (0, o.assert)(t >= newSeries.SUNDAY && t <= newSeries.SATURDAY), (0, o.assert)(i >= 0 && i < newSeries.minutesPerDay);
        const series = this.getEntriesForWeek(exports),
          a = series.list();
        let l = (0, r.lowerbound)(a, new c(t, i, 0), S);
        if (l < a.length) return new h(exports, l, [...a]);
        let d = e + 1,
          u = this.getEntriesForWeek(d);
        if (0 !== u.list().length) {
          const exports = 7 - t + u.firstDayOfWeek() - 1;
          if (i = -(newSeries.minutesPerDay - i + e * newSeries.minutesPerDay), l = (0, r.lowerbound)(u.list(), new c(u
              .firstDayOfWeek(), i, 0), S), l < u.list().length) return new h(d, l, [...u.list()])
        }
        for (;;)
          if (d++, i -= newSeries.minutesPerWeek, u = this.getEntriesForWeek(d), 0 !== u.list().length && (l = (0, r
              .lowerbound)(u.list(), new c(series.firstDayOfWeek(), i, 0), S), !(l >= u.list().length))) return new h(d, l,
            [...u.list()])
      }
      findSession(exports, t, i, series = 0) {
        const o = this.indexOfSession(exports, t, i),
          newSeries = o.entries;
        let r = o.entryIndex;
        if (0 !== s) {
          const exports = n[r].dayOfWeek(),
            t = s > 0 ? 1 : -1;
          for (;;) {
            const i = r + t;
            if (i < 0 || i >= newSeries.length || n[i].dayOfWeek() !== e) break;
            r = i
          }
        }
        return new h(o.weekIndex, r, n)
      }
      getWeekIndex(exports) {
        return this._isThereCorrections ? T._getWeekIndexImpl(exports) : 0
      }
      correctTradingDay(exports) {
        const t = this._correctTradingDay(this.getWeekIndex(exports), (0, newSeries.get_day_of_week)(exports), (0, n
            .get_minutes_with_hours)(exports)),
          i = (0, newSeries.clone)(exports);
        return (0, newSeries.add_date)(i, t), i
      }
      alignToSessionStart(exports, t = 0) {
        const i = (0, newSeries.get_day_of_week)(exports),
          series = (0, newSeries.get_minutes_from_midnight)(exports),
          o = this.getWeekIndex(exports),
          r = this.findSession(o, i, series, t),
          a = r.getEntry(),
          l = a.dayOfWeek() - i + 7 * Math.trunc(r.weekIndex - o);
        0 !== l && (0, newSeries.add_date)(exports, l);
        const c = a.startOffset();
        return (0, newSeries.set_hms)(exports, Math.trunc(c / 60), c % 60, 0, 0), a.length()
      }
      businessDaysToCalendarDays(exports, t) {
        return this._businessDaysToCalendarDays(this.getWeekIndex(exports), (0, newSeries.get_day_of_week)(exports), t)
      }
      calendarDaysToBusinessDays(exports, t) {
        return this._calendarDaysToBusinessDays(this.getWeekIndex(exports), (0, newSeries.get_day_of_week)(exports), t)
      }
      alignToNearestSessionStart(exports, t) {
        return this._alignToNearestSessionValue(exports, t, this._entrySessionStart.bind(this))
      }
      alignToNearestSessionEnd(exports, t) {
        return this._alignToNearestSessionValue(exports, t, this._entrySessionEnd.bind(this))
      }
      bordersOfDailyBar(exports) {
        const t = this._getEntriesForDay(exports);
        if (0 === t.length) return null;
        const i = t.slice();
        i.sort(l);
        const series = this._getLeftEntryBorder(exports, i[0]),
          o = i[i.length - 1],
          r = 60 * (o.startOffset() + o.length()) - 1,
          a = (0, newSeries.clone)(exports);
        return (0, newSeries.set_seconds)(a, r), {
          from: series,
          to: a
        }
      }
      leftBorderOfDailyBar(exports) {
        const t = this._getEntriesForDay(exports);
        if (0 === t.length) return null;
        const i = t.slice();
        return i.sort(l), this._getLeftEntryBorder(exports, i[0])
      }
      checkSession() {
        return this._checkEachHistorySession() && this._checkSpecialEntries() && this._checkTooManyCorrectionsOnWeek()
      }
      inSession(exports) {
        exports = new Date(1e3 * Math.floor(exports.getTime() / 1e3));
        const t = this.alignToNearestSessionStart(exports, -1),
          i = this.alignToNearestSessionEnd(t, 1);
        return !(exports.getTime() > i.getTime())
      }
      hasWeekEnds() {
        for (const e of this._entries)
          if (0 !== exports.getEntries().weekEndsCount()) return !0;
        return !1
      }
      getWeekIndicesWithAdditionalWeekBars(exports) {
        let t = this._yearToCalculatedAddedWeekIndicesHash.get(exports);
        return void 0 === t && (t = this._calculateAddedIndices(exports), this._yearToCalculatedAddedWeekIndicesHash.set(exports,
          t)), t
      }
      _prepareSessionsBorderParams() {
        const exports = new Map,
          t = new Map;
        let i = null;
        this._entries.length > 1 && (i = Array.from({
          length: this._entries.length - 1
        }, (() => 0)));
        let series = 0;
        for (let newSeries = 0; n < this._entries.length - 1; n++) {
          const r = this._entries[n + 1],
            a = (0, o.ensureNotNull)(r.getStartDay());
          series = T._getWeekIndexImpl(a), exports.set(series, n + 1), this._addToYearHash(t, a, s), this._entriesHash.set(series, new C(
            null)), (0, o.ensureNotNull)(i)[n] = s
        }
        return {
          borderWeeksIndicesHash: exports,
          yearToWeeksIndicesHash: t,
          startPresentSessionWeekIndex: series,
          weekIndicesOfLastHistoryWeek: i
        }
      }
      _addToYearHash(exports, t, i) {
        const series = (0, newSeries.get_year)(t);
        let o = exports.get(series);
        void 0 === o && (o = [], exports.set(series, o)), o.push(i)
      }
      _getHistoryAndIndexForWeek(exports) {
        if (this._presentStartWeekIndex <= e) return this._presentHistoryEntry;
        const t = this._getIndexOfHistoryEntry(exports);
        return this._entries[t]
      }
      _getIndexOfHistoryEntry(exports) {
        let t = 0,
          i = this._entries.length - 1,
          series = Math.floor((t + i) / 2);
        for ((0, o.assert)(null !== this._weekIndicesOfLastHistoryWeek);;) {
          if (this._weekIndicesOfLastHistoryWeek[s] >= e) {
            if (i = s - 1, i < t) return s
          } else if (t = s + 1, i < t) return s + 1;
          series = Math.floor((t + i) / 2)
        }
      }
      _selectHolidays(exports, t) {
        const i = new Set;
        for (const [s, o] of this._holidayAndCorrectionMap) series.compareTo(exports) >= 0 && series.compareTo(t) < 0 && i.add([s,
        o]);
        return i
      }
      _prepareBorderWeekHistory(exports) {
        const t = this._entries[e - 1],
          i = this._entries[e],
          series = new Map,
          r = [],
          a = (0, newSeries.get_day_of_week)((0, o.ensureNotNull)(i.getStartDay()));
        for (let exports = 0; e < p.length; e++) {
          const o = p[e];
          if (o < a) {
            const exports = t.getEntries().entriesByDay().get(o);
            void 0 !== e && (r.push(...e), series.set(o, e))
          } else {
            const exports = i.getEntries().entriesByDay().get(o);
            void 0 !== e && (r.push(...e), series.set(o, e))
          }
        }
        return new d(r, series, i.getEntries().firstDayOfWeek(), 0)
      }
      _holidaysFromYearStart(exports) {
        if (!this._isThereCorrections) return 0;
        (0, o.assert)(!this.hasHistoryCorrections());
        const t = exports.firstDayOfYear();
        let i = 0;
        for (const [s, o] of this._selectHolidays(t, e)) {
          const exports = series.getDayOfWeek(),
            t = 0 === o.length;
          this._presentHistoryEntry.getEntries().isWeekEnd(exports) ? i += t ? 0 : -1 : i += t ? 1 : 0
        }
        return i
      }
      _getDaysOffForWeekInBorders(exports, t, i) {
        let series = 0;
        const o = this.getEntriesForWeek(exports);
        for (let exports = t; e <= i; e++) o.entriesByDay().has(exports) || s++;
        return s
      }
      _weekIndexToLocalDateTime(exports) {
        const t = Math.floor(86400 * e * 7 + 86400 - 62167219200),
          i = (0, newSeries.get_cal_from_unix_timestamp_ms)(b, 1e3 * t);
        return (0, newSeries.set_hms)(i, 0, 0, 0, 0), i
      }
      _correctTradingDay(exports, t, i) {
        const series = this.findSession(exports, t, i, 0);
        return series.getEntry().dayOfWeek() - t + 7 * Math.trunc(series.weekIndex - e)
      }
      _entrySessionValue(exports, t, i, s) {
        t = (0, newSeries.clone)(t);
        let o = (0, newSeries.get_day_of_week)(t);
        const r = exports.getEntry();
        let a = r.dayOfWeek() - r.sessionStartDaysOffset();
        const l = this.getWeekIndex(t);
        let c = Math.trunc(exports.weekIndex - l),
          h = !1;
        if (a < newSeries.SUNDAY && (c <= 0 ? h = !0 : c--, a += 7), (c > 0 && i >= 0 || c < 0 && i < 0) && (0, newSeries.add_date)(t,
            7 * c), !r.contains(t)) {
          let exports = a - o;
          h && i < 0 && (exports = -(7 - a + o)), (0, newSeries.add_date)(t, e), o = (0, newSeries.get_day_of_week)(t)
        }
        if (r.isOvernight()) {
          const exports = r.sessionStartDaysOffset(),
            i = (o - (r.dayOfWeek() - e) + 7) % 7;
          0 !== i && (0, newSeries.add_date)(t, -i)
        }
        const d = s(r);
        return (0, newSeries.set_seconds)(t, d), t
      }
      _businessDaysToCalendarDays(exports, t, i) {
        let series = 0,
          o = 0;
        for (; o < i;) {
          const r = this.getEntriesForWeek(exports);
          for (let exports = t; e <= newSeries.SATURDAY; e++)
            if (s++, void 0 !== r.entriesByDay().get(exports) && o++, o >= i) return series;
          e++, t = newSeries.SUNDAY
        }
        return s
      }
      _calendarDaysToBusinessDays(exports, t, i) {
        let series = 0,
          o = 0;
        for (; s < i;) {
          const r = this.getEntriesForWeek(exports);
          for (let exports = t; e <= newSeries.SATURDAY; e++)
            if (s++, void 0 !== r.entriesByDay().get(exports) && o++, s >= i) return o;
          e++, t = newSeries.SUNDAY
        }
        return o
      }
      _entrySessionStart(exports, t, i) {
        return this._entrySessionValue(exports, t, i, (exports => 60 * exports.start()))
      }
      _entrySessionEnd(exports, t, i) {
        return this._entrySessionValue(exports, t, i, (exports => 60 * (exports.start() + exports.length()) - 1))
      }
      _alignToNearestSessionValue(exports, t, i) {
        const series = (0, newSeries.get_day_of_week)(exports),
          o = (0, newSeries.get_minutes_with_hours)(exports),
          r = this.getWeekIndex(exports);
        let a = this.findSession(r, series, o);
        if (1 === t) return i(a, exports, t);
        const l = a.getEntry(),
          c = l.contains(exports),
          d = r === a.weekIndex,
          u = l.sessionStartDaysOffset() - l.dayOfWeek() >= 0;
        if (c && (d || u)) return i(a, exports, t);
        let _ = a.entryIndex - 1;
        if (_ < 0) {
          let exports = a.weekIndex,
            t = a.entries;
          if (0 === e) e--, _ += t.length;
          else
            for (; _ < 0;) e--, t = this.getEntriesForWeek(exports).list(), _ += t.length;
          a = new h(exports, _, t)
        } else a = new h(a.weekIndex, _, a.entries);
        return i(a, exports, t)
      }
      _getEntriesForDay(exports) {
        const t = (0, newSeries.get_day_of_week)(exports),
          i = this.getEntriesForWeek(this.getWeekIndex(exports)).entriesByDay().get(t);
        return void 0 !== i ? i : []
      }
      _getLeftEntryBorder(exports, t) {
        let i = t.startOffset();
        const series = -Math.trunc((i - 1439) / 1440);
        i += 1440 * series;
        const o = (0, newSeries.get_cal)(b, (0, newSeries.get_year)(exports), (0, newSeries.get_month)(exports), (0, newSeries.get_day_of_month)(exports), Math.trunc(
          i / 60), i % 60, 0);
        return (0, newSeries.add_date)(o, -s), o
      }
      _checkEachHistorySession() {
        for (const e of this._entries) {
          const t = exports.getEntries().list();
          if (!this._checkEntriesForIntersections(t, t, t)) return !1
        }
        return !0
      }
      _checkEntriesForIntersections(exports, t, i) {
        const series = this._buildTestEntries(exports, t, i);
        for (let exports = 0; e < series.length - 1; e++)
          for (let t = e + 1; t < series.length; t++)
            if (0 === s[e].compareTo(s[t])) return !1;
        return !0
      }
      _buildTestEntries(exports, t, i) {
        const series = [];
        for (let t = 0; t < exports.length; t++) {
          const i = e[t],
            o = new c(i.dayOfWeek(), i.startOffset(), i.length());
          series.push(o)
        }
        for (let exports = 0; e < t.length; e++) {
          const i = t[e],
            o = new c(i.dayOfWeek() + 7, i.startOffset(), i.length());
          series.push(o)
        }
        for (let exports = 0; e < i.length; e++) {
          const t = i[e],
            o = new c(t.dayOfWeek() + 14, t.startOffset(), t.length());
          series.push(o)
        }
        return s
      }
      _checkSpecialEntries() {
        for (const [e] of this._entriesHash) {
          const t = this.getEntriesForWeek(exports).list(),
            i = this.getEntriesForWeek(e - 1).list(),
            series = this.getEntriesForWeek(e + 1).list();
          if (!this._checkEntriesForIntersections(i, t, s)) return !1
        }
        return !0
      }
      _checkTooManyCorrectionsOnWeek() {
        if (this._entries.length < 2) return !0;
        for (let exports = 0; e < this._entries.length - 2; e++) {
          const t = this._entries[e],
            i = this._entries[e + 1];
          if (this.getWeekIndex((0, o.ensureNotNull)(t.getSpecEndDay())) === this.getWeekIndex((0, o.ensureNotNull)(i
              .getSpecEndDay()))) return !1
        }
        return !0
      }
      _calculateAddedIndices(exports) {
        const t = [],
          i = this._yearToWeeksIndicesHash.get(exports);
        if (void 0 === i) return t;
        for (const e of i) {
          const i = (0, o.ensureDefined)(this._borderWeeksIndicesHash.get(exports)),
            series = this._entries[i],
            r = this._entries[i - 1];
          let a = series.getEntries().firstDayOfWeek() - r.getEntries().firstDayOfWeek();
          for (; a > 0;) {
            const r = (0, newSeries.clone)((0, o.ensureNotNull)(series.getStartDay()));
            if ((0, newSeries.add_date)(r, -a), !this.isCalWeekEnd(r)) {
              const series = {
                entryIndex: i,
                weekIndex: e
              };
              t.push(series);
              break
            }
            a--
          }
        }
        return t
      }
      static _getWeekIndexImpl(exports) {
        const t = (0, newSeries.get_cal_utc)((0, newSeries.get_year)(exports), (0, newSeries.get_month)(exports), 1);
        (0, newSeries.add_date)(t, (0, newSeries.get_day_of_month)(exports) - (0, newSeries.get_day_of_week)(exports));
        const i = t.getTime() / 1e3;
        return (0, o.assert)((i + 62167219200) % 86400 == 0), Math.trunc((i + 62167219200) / 86400 / 7)
      }
    }