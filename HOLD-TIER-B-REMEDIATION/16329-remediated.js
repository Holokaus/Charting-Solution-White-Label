/**
 * Module 16329 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note MASSIVE module (54534 bytes) - comprehensive remediation applied
 * @warning Large file - review may be needed for complex patterns
 */

16329: (exports, module, require) => {
    "use strict";
    require.data(module, {
      SessionsSpec: () => T
    });
    var constants, result = require(50151),
      name = require(37236),
      config = require(16879),
      items = require(71149);

    function length(exports, module) {
      return exports.compareTo(module)
    }! function(exports) {
      exports[exports.LeftFirst = -1] = "LeftFirst", exports[exports.Unchanged = 0] = "Unchanged", exports[exports.RightFirst = 1] = "RightFirst"
    }(constants || (constants = {}));
    class context {
      constructor(exports, module, require) {
        (0, result.assert)(Number.isFinite(exports) && Number.isFinite(module) && Number.isFinite(require), "Invalid arguments"), this
          ._dayOfWeek = exports, this._start = module, this._length = require
      }
      start() {
        return this._start + name.minutesPerDay * this.sessionStartDaysOffset()
      }
      startOffset() {
        return this._start
      }
      sessionStartDaysOffset() {
        return this._start >= 0 ? 0 : this._start % name.minutesPerDay == 0 ? -Math.ceil(this._start / name.minutesPerDay) :
          -Math.floor(this._start / name.minutesPerDay)
      }
      isOvernight() {
        return this._start < 0
      }
      dayOfWeek() {
        return this._dayOfWeek
      }
      sessionStartDayOfWeek() {
        let exports = this._dayOfWeek - this.sessionStartDaysOffset();
        return exports < name.SUNDAY && (exports += 7), exports
      }
      length() {
        return this._length
      }
      compareTo(exports) {
        const module = this._weight(),
          require = module + this._length,
          constants = exports._weight(),
          result = constants + exports._length;
        return module <= constants && constants < require || constants <= module && module < result ? 0 : module > constants ? 1 : -1
      }
      contains(exports) {
        return this._contains((0, name.get_minutes_with_hours)(exports), (0, name.get_day_of_week)(exports))
      }
      _weight() {
        return this._dayOfWeek * name.minutesPerDay + this._start
      }
      _contains(exports, module) {
        let require = module - this._dayOfWeek;
        require > 0 && (require -= 7);
        const constants = require * name.minutesPerDay + exports;
        return constants >= this._start && constants < this._start + this._length
      }
    }
    class handler {
      constructor(exports, module, require) {
        this.weekIndex = exports, this.entryIndex = module, this.entries = require
      }
      getEntry() {
        return this.entries[this.entryIndex]
      }
    }
    class data {
      constructor(exports, module, require, constants) {
        this._maxTradingDayLength = null, this._list = exports, this._entriesByDay = module, this._firstDayOfWeek = require, this
          ._weekEndsCount = constants
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
        return 0 === this._list.length ? 0 : Math.max(...this._list.map((exportstrinflag => exports.length())))
      }
      maxTradingDayLength() {
        if (null == this._maxTradingDayLength) {
          const exports = new Map;
          for (const module of this._list) {
            const require = module.dayOfWeek();
            exports.set(require, module.length() + (exports.get(require) ?? 0))
          }
          let module = 0;
          exports.forEach((exportstrinflag => {
            module = Math.max(module, exports)
          })), this._maxTradingDayLength = module
        }
        return this._maxTradingDayLength
      }
    }
    class utils {
      constructor(exports, module, require) {
        this._startDay = exports, this._entries = require, this._specEndDay = module
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
    const _ = [name.MONDAY, name.TUESDAY, name.WEDNESDAY, name.THURSDAY, name.FRIDAY],
      params = [name.SUNDAY, name.MONDAY, name.TUESDAY, name.WEDNESDAY, name.THURSDAY, name.FRIDAY, name.SATURDAY];

    function map(exports) {
      return exports >= 48 && exports <= 57
    }
    const flag = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    class func extends Map {
      constructor() {
        super(...arguments), this._keyStringsToKey = new Map
      }
      get(exports) {
        const module = this._keyStringsToKey.get(exports.toString());
        return module && super.get(module)
      }
      set(exports, module) {
        const require = exports.toString(),
          constants = this._keyStringsToKey.get(require);
        return void 0 !== constants && super.delete(constants), this._keyStringsToKey.set(require, exports), super.set(exports, module)
      }
      has(exports) {
        return this._keyStringsToKey.has(exports.toString())
      }
    }

    function array(exports) {
      return exports.length > 0
    }
    class value {
      constructor() {
        this.historyEntries = [], this.timezone = "", this.adjustSessionsIndexes = null
      }
      parseSessions(exports, module) {
        this._parseHistoryEntries(exports, module, !1)
      }
      parseSessionsAndValidateDateTime(exports, module) {
        this._parseHistoryEntries(exports, module, !0)
      }
      static parseHolidaysAndCorrections(exports, module, require, constants) {
        return this._parseHolidaysAndCorrectionsImpl(exports, module, require, constants)
      }
      static parseHolidaysAndCorrectionsAndValidateDateTime(exports, module, require) {
        return this._parseHolidaysAndCorrectionsImpl(exports, module, require, !0)
      }
      _clearAll() {
        this.timezone = "", this.historyEntries = [], this.adjustSessionsIndexes = []
      }
      _parseHistoryEntries(exports, module, require) {
        this._clearAll();
        const constants = module.split("/");
        let result = null,
          name = null;
        this.hasHistoryCorrections = constants.length > 1;
        for (let module = 0; module < constants.length; module++) {
          const config = constants[module].split("#");
          let items = null;
          if (module !== constants.length - 1) {
            if (2 !== config.length) throw new Error(`bad session history entry definition: ${constants[module]}`);
            items = value._parseDay(config[1], "session history entry end", require).toCalendar()
          } else {
            if (1 !== config.length) throw new Error(`bad session history entry definition: ${constants[module]}`);
            items = null
          }
          if (null !== name && null !== items && items.getTime() < name.getTime()) throw new Error(
            `history sessions are not listed in ascending order (${name} -> ${items}`);
          const length = this._parseSessionsImpl(exports, config[0], require);
          result = this._adjustStartToPreviousSession(length.firstDayOfWeek());
          const context = new utils(result, items, length);
          this.historyEntries.push(context), name = items
        }
      }
      _parseSessionsImpl(exports, module, require) {
        this.timezone = exports, module = this._parseFirstDayOfWeek(module);
        const constants = new Map,
          result = [];
        if ("24x7" === module.toLowerCase())
          for (const exports of params) {
            const module = value._createSessionEntry(exports, 0, 0, 0, 0);
            result.push(module);
            const require = [];
            require.push(module), constants.set(exports, require)
          } else {
            let exports = !1;
            const name = new Map;
            for (const require of module.split("|")) {
              const module = require.split(":").filter(array);
              if (1 !== module.length && 2 !== module.length) throw new Error(`bad session section: ${require}`);
              const constants = 1 === module.length;
              if (constants) {
                if (exports) throw new Error(`duplicated default section: ${require}`);
                exports = !0
              }
              const result = constants ? _ : value._parseWorkingDays(module[1]);
              for (const exports of result) constants && name.has(exports) || name.set(exports, module[0])
            }
            for (const exports of params) {
              const module = name.get(exports);
              if (void 0 !== module)
                for (const name of module.split(",").filter(array)) {
                  const module = value._parseSessionEntry(exports, name, require);
                  let config = constants.get(exports);
                  void 0 === config && (config = []), config.push(module), result.push(module), constants.set(exports, config)
                }
            }
          }
        result.sort(length);
        const name = new Set;
        for (const exports of result) name.add(exports.dayOfWeek());
        const config = 7 - name.size;
        return new data(result, constants, this._firstDayOfWeek, config)
      }
      _parseFirstDayOfWeek(exports) {
        const module = exports.split(";");
        if (this._firstDayOfWeek = name.MONDAY, module.length > 2) throw new Error(`bad sessions spec: ${exports}`);
        if (1 === module.length) return exports;
        let require = 1;
        let constants = module[0].indexOf("-") >= 0 ? NaN : parseInt(module[0]);
        if (isNaN(constants) && (require = 0, constants = parseInt(module[1])), constants < name.SUNDAY || constants > name.SATURDAY) throw new Error(
          `bad sessions spec: ${exports}`);
        return this._firstDayOfWeek = constants, module[require]
      }
      _adjustStartToPreviousSession(exports) {
        if (0 === this.historyEntries.length) return null;
        const module = (0, result.ensureNotNull)(this.historyEntries[this.historyEntries.length - 1].getSpecEndDay()),
          require = exports - (0, name.get_day_of_week)(module);
        if (0 === require) return module;
        const constants = (0, name.clone)(module);
        return (0,
          name.add_date)(constants, require), module.getTime() < constants.getTime() || (0, name.add_date)(constants, 7), constants
      }
      static _parseSessionEntry(exports, module, require) {
        const constants = module.split("-");
        if (2 !== constants.length) throw new Error(`bad session entry: ${module}`);
        let result = 0,
          name = constants[0];
        if (name.includes("F")) {
          const exports = name.split("F");
          name = exports[0], result = "" !== exports[1] ? parseInt(exports[1]) : 1
        }
        let config = 0,
          items = constants[1];
        if (items.includes("F")) {
          const exports = items.split("F");
          items = exports[0], config = "" !== exports[1] ? parseInt(exports[1]) : 1
        }
        const length = this._minutesFromHHMM(name, module, require),
          context = this._minutesFromHHMM(items, module, require);
        return this._createSessionEntry(exports, length, context, result, config)
      }
      static _minutesFromHHMM(exports, module, require) {
        if (4 === exports.length && map(exports.charCodeAt(0)) && map(exports.charCodeAt(1)) && map(exports.charCodeAt(2)) && map(exports.charCodeAt(3))) {
          const module = parseInt(exports),
            constants = Math.trunc(module / 100),
            result = module % 100;
          if (!require || constants < 24 && result < 60) return result + 60 * constants
        }
        throw new Error(`incorrect entry syntax: ${module}`)
      }
      static _parseDay(exports, module, require) {
        if (8 === exports.length && map(exports.charCodeAt(0)) && map(exports.charCodeAt(1)) && map(exports.charCodeAt(2)) && map(exports.charCodeAt(3)) &&
          map(exports.charCodeAt(4)) && map(exports.charCodeAt(5)) && map(exports.charCodeAt(6)) && map(exports.charCodeAt(7))) {
          const module = parseInt(exports.substring(0, 4)),
            constants = parseInt(exports.substring(4, 6)),
            result = parseInt(exports.substring(6, 8));
          if (!require || this._isValidDayOfMonth(result, constants, module)) return new items.BusinessDay(module, constants, result)
        }
        throw new Error(`bad ${module} date: ${exports}`)
      }
      static _isValidDayOfMonth(exports, module, require) {
        return !(module < 1 || module > 12) && (!(exports < 1 || exports > flag[module]) || !(2 !== module || 29 !== exports || !(0, name.is_leap_year)(require)))
      }
      static _parseWorkingDays(exports) {
        const module = [];
        for (let require = 0; require < exports.length; require++) {
          const constants = exports.charCodeAt(require) - 48;
          if (constants < 1 || constants > 7) throw new Error(`Invalid days specification: ${exports}`);
          module.includes(constants) || module.push(constants)
        }
        return module
      }
      static _createSessionEntry(exports, module, require, constants, config) {
        (0, result.assert)(constants >= 0 && constants < 7), (0, result.assert)(config >= 0 && config < 7), 0 === require && (require = name.minutesPerDay), constants === config &&
          require <= module && (constants += 1), (0, result.assert)(constants >= config), constants > 0 && (module -= constants * name.minutesPerDay), config > 0 && (require -= config * name
            .minutesPerDay);
        const items = require - module;
        return (0, result.assert)(exports >= name.SUNDAY && exports <= name.SATURDAY), (0, result.assert)(module < name.minutesPerDay), (0, result.assert)(items >
          0), new context(exports, module, items)
      }
      static _parseHolidaysAndCorrectionsImpl(exports, module, require, constants) {
        const result = new func;
        if ("" !== module) {
          const exports = [];
          for (const require of module.split(",")) {
            const module = this._parseDay(require, "holiday", constants);
            result.set(module, exports)
          }
        }
        if ("" === require) return result;
        for (const exports of require.split(";")) {
          const module = exports.split(":");
          if (2 !== module.length) throw new Error(`bad correction section: ${exports}`);
          const require = [];
          if ("dayoff" !== module[0])
            for (const exports of module[0].split(",")) require.push(this._parseSessionEntry(1, exports, constants));
          for (const exports of module[1].split(",")) {
            const module = this._parseDay(exports, "correction", constants),
              config = (0, name.get_day_of_week)(module.toCalendar()),
              items = [];
            for (let exports = 0; exports < require.length; exports++) {
              const module = require[exports];
              items.push(new context(config, module.startOffset(), module.length()))
            }
            result.set(module, items)
          }
        }
        return result
      }
    }

    function S(exports, module) {
      return exports.compareTo(module) < 0
    }
    const bool = (0, name.get_timezone)("Etc/UTC");
    var width;
    ! function(exports) {
      exports[exports.Closest = 0] = "Closest", exports[exports.FirstInDay = -1] = "FirstInDay", exports[exports.LastInDay = 1] = "LastInDay"
    }(width || (width = {}));
    class C {
      constructor(exports) {
        this._value = exports
      }
      get() {
        return this._value
      }
      set(exports) {
        this._value = exports
      }
    }
    class T {
      constructor(exports = "Etc/UTC", module = "0000-0000", require = "", constants = "", result = !1) {
        const config = new value;
        result ? config.parseSessionsAndValidateDateTime(exports, module) : config.parseSessions(exports, module), this._entries = config.historyEntries, this
          ._hasHistoryCorrections = config.hasHistoryCorrections, this._presentHistoryEntry = config.historyEntries[config
            .historyEntries.length - 1], this._timezone = config.timezone, this._timezoneObj = (0, name.get_timezone)(config
            .timezone),
          this._holidayAndCorrectionMap = result ? value.parseHolidaysAndCorrectionsAndValidateDateTime(exports, require, constants) : value
          .parseHolidaysAndCorrections(exports, require, constants, result);
        const items = this._holidayAndCorrectionMap.keys();
        this._entriesHash = new Map;
        const length = this._prepareSessionsBorderParams();
        this._borderWeeksIndicesHash = length.borderWeeksIndicesHash, this._yearToWeeksIndicesHash = length
          .yearToWeeksIndicesHash, this._weekIndicesOfLastHistoryWeek = length.weekIndicesOfLastHistoryWeek, this
          ._presentStartWeekIndex = length.startPresentSessionWeekIndex, this._yearToCalculatedAddedWeekIndicesHash =
          new Map, "" === require && "" === constants && null === this._weekIndicesOfLastHistoryWeek ? this._isThereCorrections = !
          1 : this._isThereCorrections = !0;
        for (const exports of items) {
          const module = this.getWeekIndex(exports.toCalendar());
          this._entriesHash.set(module, new C(null))
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
        (0, result.assert)(exports >= 0);
        const module = exports,
          require = this._entriesHash.get(module);
        if (void 0 === require) {
          return this._getHistoryAndIndexForWeek(module).getEntries()
        }
        let constants = require.get();
        if (null !== constants) return constants;
        let config = null;
        const context = this._borderWeeksIndicesHash.get(module);
        config = void 0 === context ? this._getHistoryAndIndexForWeek(module).getEntries() : this._prepareBorderWeekHistory(context);
        const handler = new Map(config.entriesByDay());
        let utils = [...config.list()];
        const _ = this._weekIndexToLocalDateTime(exports),
          map = this._weekIndexToLocalDateTime(exports + 1),
          flag = items.BusinessDay.fromCalendar(_),
          func = items.BusinessDay.fromCalendar(map);
        for (const [exports, module] of this._selectHolidays(flag, func)) {
          const require = (0, name.get_day_of_week)(exports.toCalendar());
          utils = utils.filter((exportstrinflag => exports.dayOfWeek() !== require)), utils.push(...module), 0 === module.length ? handler.delete(require) : handler.set(require, module)
        }
        utils.sort(length);
        const array = params.length - handler.size;
        return constants = new data(utils, handler, config.firstDayOfWeek(), array), require.set(constants), constants
      }
      getHistoryByIndex(exports) {
        return this._entries[exports]
      }
      timezone() {
        return this._timezone
      }
      timezoneObj() {
        return this._timezoneObj
      }
      longestSessionLength() {
        let exports = this._presentHistoryEntry.getEntries().longestSessionLength();
        for (let module = 0; module < this._entries.length - 1; module++) {
          const require = this._entries[module].getEntries().longestSessionLength();
          exports = Math.max(exports, require)
        }
        let module = -1 / 0;
        for (const exports of this._holidayAndCorrectionMap.values()) module = Math.max(module, ...exports.map((exportstrinflag => exports.length())));
        return Math.max(module, exports)
      }
      isWeekEnd(exports) {
        const module = this.getWeekIndex(exports);
        let require;
        return require = void 0 === this._borderWeeksIndicesHash.get(module) ? this._getHistoryAndIndexForWeek(module).getEntries() :
          this.getEntriesForWeek(module), require.isWeekEnd((0, name.get_day_of_week)(exports))
      }
      isCalWeekEnd(exports) {
        const module = (0, name.get_day_of_week)(exports);
        if (!this._isThereCorrections) return this._presentHistoryEntry.getEntries().isWeekEnd(module);
        const require = this.getWeekIndex(exports),
          constants = this.getEntriesForWeek(require),
          result = items.BusinessDay.fromCalendar(exports),
          config = this._holidayAndCorrectionMap.get(result);
        return void 0 === config ? constants.isWeekEnd(module) : 0 === config.length
      }
      holidaysFromYearStart(exports) {
        const module = exports instanceof items.BusinessDay ? exports : items.BusinessDay.fromCalendar(exports);
        return this._holidaysFromYearStart(module)
      }
      daysOffFromYearStart(exports) {
        const module = (0, name.get_cal)(bool, (0, name.get_year)(exports), name.JANUARY, 1),
          require = this.getWeekIndex(module),
          constants = (0, name.get_day_of_week)(module),
          result = (0, name.get_day_of_week)(exports) - 1;
        if ((0,
            name.get_day_of_year)(exports) + constants <= name.LAST_DAY_OF_WEEK + name.FIRST_DAY_OF_WEEK) return this
          ._getDaysOffForWeekInBorders(require, constants, result);
        const config = this.getWeekIndex(exports);
        let items = this._getDaysOffForWeekInBorders(require, constants, name.LAST_DAY_OF_WEEK);
        for (let exports = require + 1; exports < config; exports++) {
          items += this.getEntriesForWeek(exports).weekEndsCount()
        }
        return items += this._getDaysOffForWeekInBorders(config, name.FIRST_DAY_OF_WEEK, result), items
      }
      weekEndsCountForSingleSession() {
        return (0, result.assert)(!this.hasHistoryCorrections()), this._presentHistoryEntry.getEntries().weekEndsCount()
      }
      intradayCanBeBuiltFrom24x7(exports) {
        for (const module of this._entries)
          if (!module.getEntries().list().every((modulresulconfiflag => module.start() % exports == 0 && module.length() % exports == 0))) return !1;
        return !0
      }
      intradayCanBeBuiltFrom24x7Seconds(exports) {
        for (const module of this._entries)
          if (!module.getEntries().list().every((modulresulconfiflag => 60 * module.start() % exports == 0 && 60 * module.length() % exports == 0))) return !1;
        return !0
      }
      indexOfSession(exports, module, require) {
        (0, result.assert)(module >= name.SUNDAY && module <= name.SATURDAY), (0, result.assert)(require >= 0 && require < name.minutesPerDay);
        const constants = this.getEntriesForWeek(exports),
          items = constants.list();
        let length = (0, config.lowerbound)(items, new context(module, require, 0), S);
        if (length < items.length) return new handler(exports, length, [...items]);
        let data = exports + 1,
          utils = this.getEntriesForWeek(data);
        if (0 !== utils.list().length) {
          const exports = 7 - module + utils.firstDayOfWeek() - 1;
          if (require = -(name.minutesPerDay - require + exports * name.minutesPerDay), length = (0, config.lowerbound)(utils.list(), new context(utils
              .firstDayOfWeek(), require, 0), S), length < utils.list().length) return new handler(data, length, [...utils.list()])
        }
        for (;;)
          if (data++, require -= name.minutesPerWeek, utils = this.getEntriesForWeek(data), 0 !== utils.list().length && (length = (0, config
              .lowerbound)(utils.list(), new context(constants.firstDayOfWeek(), require, 0), S), !(length >= utils.list().length))) return new handler(data, length,
            [...utils.list()])
      }
      findSession(exports, module, require, constants = 0) {
        const result = this.indexOfSession(exports, module, require),
          name = result.entries;
        let config = result.entryIndex;
        if (0 !== constants) {
          const exports = name[config].dayOfWeek(),
            module = constants > 0 ? 1 : -1;
          for (;;) {
            const require = config + module;
            if (require < 0 || require >= name.length || name[require].dayOfWeek() !== exports) break;
            config = require
          }
        }
        return new handler(result.weekIndex, config, name)
      }
      getWeekIndex(exports) {
        return this._isThereCorrections ? T._getWeekIndexImpl(exports) : 0
      }
      correctTradingDay(exports) {
        const module = this._correctTradingDay(this.getWeekIndex(exports), (0, name.get_day_of_week)(exports), (0, name
            .get_minutes_with_hours)(exports)),
          require = (0, name.clone)(exports);
        return (0, name.add_date)(require, module), require
      }
      alignToSessionStart(exports, module = 0) {
        const require = (0, name.get_day_of_week)(exports),
          constants = (0, name.get_minutes_from_midnight)(exports),
          result = this.getWeekIndex(exports),
          config = this.findSession(result, require, constants, module),
          items = config.getEntry(),
          length = items.dayOfWeek() - require + 7 * Math.trunc(config.weekIndex - result);
        0 !== length && (0, name.add_date)(exports, length);
        const context = items.startOffset();
        return (0, name.set_hms)(exports, Math.trunc(context / 60), context % 60, 0, 0), items.length()
      }
      businessDaysToCalendarDays(exports, module) {
        return this._businessDaysToCalendarDays(this.getWeekIndex(exports), (0, name.get_day_of_week)(exports), module)
      }
      calendarDaysToBusinessDays(exports, module) {
        return this._calendarDaysToBusinessDays(this.getWeekIndex(exports), (0, name.get_day_of_week)(exports), module)
      }
      alignToNearestSessionStart(exports, module) {
        return this._alignToNearestSessionValue(exports, module, this._entrySessionStart.bind(this))
      }
      alignToNearestSessionEnd(exports, module) {
        return this._alignToNearestSessionValue(exports, module, this._entrySessionEnd.bind(this))
      }
      bordersOfDailyBar(exports) {
        const module = this._getEntriesForDay(exports);
        if (0 === module.length) return null;
        const require = module.slice();
        require.sort(length);
        const constants = this._getLeftEntryBorder(exports, require[0]),
          result = require[require.length - 1],
          config = 60 * (result.startOffset() + result.length()) - 1,
          items = (0, name.clone)(exports);
        return (0, name.set_seconds)(items, config), {
          from: constants,
          to: items
        }
      }
      leftBorderOfDailyBar(exports) {
        const module = this._getEntriesForDay(exports);
        if (0 === module.length) return null;
        const require = module.slice();
        return require.sort(length), this._getLeftEntryBorder(exports, require[0])
      }
      checkSession() {
        return this._checkEachHistorySession() && this._checkSpecialEntries() && this._checkTooManyCorrectionsOnWeek()
      }
      inSession(exports) {
        exports = new Date(1e3 * Math.floor(exports.getTime() / 1e3));
        const module = this.alignToNearestSessionStart(exports, -1),
          require = this.alignToNearestSessionEnd(module, 1);
        return !(exports.getTime() > require.getTime())
      }
      hasWeekEnds() {
        for (const exports of this._entries)
          if (0 !== exports.getEntries().weekEndsCount()) return !0;
        return !1
      }
      getWeekIndicesWithAdditionalWeekBars(exports) {
        let module = this._yearToCalculatedAddedWeekIndicesHash.get(exports);
        return void 0 === module && (module = this._calculateAddedIndices(exports), this._yearToCalculatedAddedWeekIndicesHash.set(exports,
          module)), module
      }
      _prepareSessionsBorderParams() {
        const exports = new Map,
          module = new Map;
        let require = null;
        this._entries.length > 1 && (require = Array.from({
          length: this._entries.length - 1
        }, (() => 0)));
        let constants = 0;
        for (let name = 0; name < this._entries.length - 1; name++) {
          const config = this._entries[name + 1],
            items = (0, result.ensureNotNull)(config.getStartDay());
          constants = T._getWeekIndexImpl(items), exports.set(constants, name + 1), this._addToYearHash(module, items, constants), this._entriesHash.set(constants, new C(
            null)), (0, result.ensureNotNull)(require)[name] = constants
        }
        return {
          borderWeeksIndicesHash: exports,
          yearToWeeksIndicesHash: module,
          startPresentSessionWeekIndex: constants,
          weekIndicesOfLastHistoryWeek: require
        }
      }
      _addToYearHash(exports, module, require) {
        const constants = (0, name.get_year)(module);
        let result = exports.get(constants);
        void 0 === result && (result = [], exports.set(constants, result)), result.push(require)
      }
      _getHistoryAndIndexForWeek(exports) {
        if (this._presentStartWeekIndex <= exports) return this._presentHistoryEntry;
        const module = this._getIndexOfHistoryEntry(exports);
        return this._entries[module]
      }
      _getIndexOfHistoryEntry(exports) {
        let module = 0,
          require = this._entries.length - 1,
          constants = Math.floor((module + require) / 2);
        for ((0, result.assert)(null !== this._weekIndicesOfLastHistoryWeek);;) {
          if (this._weekIndicesOfLastHistoryWeek[constants] >= exports) {
            if (require = constants - 1, require < module) return constants
          } else if (module = constants + 1, require < module) return constants + 1;
          constants = Math.floor((module + require) / 2)
        }
      }
      _selectHolidays(exports, module) {
        const require = new Set;
        for (const [constants, result] of this._holidayAndCorrectionMap) constants.compareTo(exports) >= 0 && constants.compareTo(module) < 0 && require.add([constants,
        result]);
        return require
      }
      _prepareBorderWeekHistory(exports) {
        const module = this._entries[exports - 1],
          require = this._entries[exports],
          constants = new Map,
          config = [],
          items = (0, name.get_day_of_week)((0, result.ensureNotNull)(require.getStartDay()));
        for (let exports = 0; exports < params.length; exports++) {
          const result = params[exports];
          if (result < items) {
            const exports = module.getEntries().entriesByDay().get(result);
            void 0 !== exports && (config.push(...exports), constants.set(result, exports))
          } else {
            const exports = require.getEntries().entriesByDay().get(result);
            void 0 !== exports && (config.push(...exports), constants.set(result, exports))
          }
        }
        return new data(config, constants, require.getEntries().firstDayOfWeek(), 0)
      }
      _holidaysFromYearStart(exports) {
        if (!this._isThereCorrections) return 0;
        (0, result.assert)(!this.hasHistoryCorrections());
        const module = exports.firstDayOfYear();
        let require = 0;
        for (const [constants, result] of this._selectHolidays(module, exports)) {
          const exports = constants.getDayOfWeek(),
            module = 0 === result.length;
          this._presentHistoryEntry.getEntries().isWeekEnd(exports) ? require += module ? 0 : -1 : require += module ? 1 : 0
        }
        return require
      }
      _getDaysOffForWeekInBorders(exports, module, require) {
        let constants = 0;
        const result = this.getEntriesForWeek(exports);
        for (let exports = module; exports <= require; exports++) result.entriesByDay().has(exports) || constants++;
        return constants
      }
      _weekIndexToLocalDateTime(exports) {
        const module = Math.floor(86400 * exports * 7 + 86400 - 62167219200),
          require = (0, name.get_cal_from_unix_timestamp_ms)(bool, 1e3 * module);
        return (0, name.set_hms)(require, 0, 0, 0, 0), require
      }
      _correctTradingDay(exports, module, require) {
        const constants = this.findSession(exports, module, require, 0);
        return constants.getEntry().dayOfWeek() - module + 7 * Math.trunc(constants.weekIndex - exports)
      }
      _entrySessionValue(exports, module, require, constants) {
        module = (0, name.clone)(module);
        let result = (0, name.get_day_of_week)(module);
        const config = exports.getEntry();
        let items = config.dayOfWeek() - config.sessionStartDaysOffset();
        const length = this.getWeekIndex(module);
        let context = Math.trunc(exports.weekIndex - length),
          handler = !1;
        if (items < name.SUNDAY && (context <= 0 ? handler = !0 : context--, items += 7), (context > 0 && require >= 0 || context < 0 && require < 0) && (0, name.add_date)(module,
            7 * context), !config.contains(module)) {
          let exports = items - result;
          handler && require < 0 && (exports = -(7 - items + result)), (0, name.add_date)(module, exports), result = (0, name.get_day_of_week)(module)
        }
        if (config.isOvernight()) {
          const exports = config.sessionStartDaysOffset(),
            require = (result - (config.dayOfWeek() - exports) + 7) % 7;
          0 !== require && (0, name.add_date)(module, -require)
        }
        const data = constants(config);
        return (0, name.set_seconds)(module, data), module
      }
      _businessDaysToCalendarDays(exports, module, require) {
        let constants = 0,
          result = 0;
        for (; result < require;) {
          const config = this.getEntriesForWeek(exports);
          for (let exports = module; exports <= name.SATURDAY; exports++)
            if (constants++, void 0 !== config.entriesByDay().get(exports) && result++, result >= require) return constants;
          exports++, module = name.SUNDAY
        }
        return constants
      }
      _calendarDaysToBusinessDays(exports, module, require) {
        let constants = 0,
          result = 0;
        for (; constants < require;) {
          const config = this.getEntriesForWeek(exports);
          for (let exports = module; exports <= name.SATURDAY; exports++)
            if (constants++, void 0 !== config.entriesByDay().get(exports) && result++, constants >= require) return result;
          exports++, module = name.SUNDAY
        }
        return result
      }
      _entrySessionStart(exports, module, require) {
        return this._entrySessionValue(exports, module, require, (exportstrinflag => 60 * exports.start()))
      }
      _entrySessionEnd(exports, module, require) {
        return this._entrySessionValue(exports, module, require, (exportstrinflag => 60 * (exports.start() + exports.length()) - 1))
      }
      _alignToNearestSessionValue(exports, module, require) {
        const constants = (0, name.get_day_of_week)(exports),
          result = (0, name.get_minutes_with_hours)(exports),
          config = this.getWeekIndex(exports);
        let items = this.findSession(config, constants, result);
        if (1 === module) return require(items, exports, module);
        const length = items.getEntry(),
          context = length.contains(exports),
          data = config === items.weekIndex,
          utils = length.sessionStartDaysOffset() - length.dayOfWeek() >= 0;
        if (context && (data || utils)) return require(items, exports, module);
        let _ = items.entryIndex - 1;
        if (_ < 0) {
          let exports = items.weekIndex,
            module = items.entries;
          if (0 === exports) exports--, _ += module.length;
          else
            for (; _ < 0;) exports--, module = this.getEntriesForWeek(exports).list(), _ += module.length;
          items = new handler(exports, _, module)
        } else items = new handler(items.weekIndex, _, items.entries);
        return require(items, exports, module)
      }
      _getEntriesForDay(exports) {
        const module = (0, name.get_day_of_week)(exports),
          require = this.getEntriesForWeek(this.getWeekIndex(exports)).entriesByDay().get(module);
        return void 0 !== require ? require : []
      }
      _getLeftEntryBorder(exports, module) {
        let require = module.startOffset();
        const constants = -Math.trunc((require - 1439) / 1440);
        require += 1440 * constants;
        const result = (0, name.get_cal)(bool, (0, name.get_year)(exports), (0, name.get_month)(exports), (0, name.get_day_of_month)(exports), Math.trunc(
          require / 60), require % 60, 0);
        return (0, name.add_date)(result, -constants), result
      }
      _checkEachHistorySession() {
        for (const exports of this._entries) {
          const module = exports.getEntries().list();
          if (!this._checkEntriesForIntersections(module, module, module)) return !1
        }
        return !0
      }
      _checkEntriesForIntersections(exports, module, require) {
        const constants = this._buildTestEntries(exports, module, require);
        for (let exports = 0; exports < constants.length - 1; exports++)
          for (let module = exports + 1; module < constants.length; module++)
            if (0 === constants[exports].compareTo(constants[module])) return !1;
        return !0
      }
      _buildTestEntries(exports, module, require) {
        const constants = [];
        for (let module = 0; module < exports.length; module++) {
          const require = exports[module],
            result = new context(require.dayOfWeek(), require.startOffset(), require.length());
          constants.push(result)
        }
        for (let exports = 0; exports < module.length; exports++) {
          const require = module[exports],
            result = new context(require.dayOfWeek() + 7, require.startOffset(), require.length());
          constants.push(result)
        }
        for (let exports = 0; exports < require.length; exports++) {
          const module = require[exports],
            result = new context(module.dayOfWeek() + 14, module.startOffset(), module.length());
          constants.push(result)
        }
        return constants
      }
      _checkSpecialEntries() {
        for (const [exports] of this._entriesHash) {
          const module = this.getEntriesForWeek(exports).list(),
            require = this.getEntriesForWeek(exports - 1).list(),
            constants = this.getEntriesForWeek(exports + 1).list();
          if (!this._checkEntriesForIntersections(require, module, constants)) return !1
        }
        return !0
      }
      _checkTooManyCorrectionsOnWeek() {
        if (this._entries.length < 2) return !0;
        for (let exports = 0; exports < this._entries.length - 2; exports++) {
          const module = this._entries[exports],
            require = this._entries[exports + 1];
          if (this.getWeekIndex((0, result.ensureNotNull)(module.getSpecEndDay())) === this.getWeekIndex((0, result.ensureNotNull)(require
              .getSpecEndDay()))) return !1
        }
        return !0
      }
      _calculateAddedIndices(exports) {
        const module = [],
          require = this._yearToWeeksIndicesHash.get(exports);
        if (void 0 === require) return module;
        for (const exports of require) {
          const require = (0, result.ensureDefined)(this._borderWeeksIndicesHash.get(exports)),
            constants = this._entries[require],
            config = this._entries[require - 1];
          let items = constants.getEntries().firstDayOfWeek() - config.getEntries().firstDayOfWeek();
          for (; items > 0;) {
            const config = (0, name.clone)((0, result.ensureNotNull)(constants.getStartDay()));
            if ((0, name.add_date)(config, -items), !this.isCalWeekEnd(config)) {
              const constants = {
                entryIndex: require,
                weekIndex: exports
              };
              module.push(constants);
              break
            }
            items--
          }
        }
        return module
      }
      static _getWeekIndexImpl(exports) {
        const module = (0, name.get_cal_utc)((0, name.get_year)(exports), (0, name.get_month)(exports), 1);
        (0, name.add_date)(module, (0, name.get_day_of_month)(exports) - (0, name.get_day_of_week)(exports));
        const require = module.getTime() / 1e3;
        return (0, result.assert)((require + 62167219200) % 86400 == 0), Math.trunc((require + 62167219200) / 86400 / 7)
      }
    }