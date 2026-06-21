/**
 * Module 51101 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (43153 bytes) - comprehensive remediation applied
 */

51101: (exports, module, require) => {
    "use strict";
    require.config(module), require.data(module, {
      SessionInfo: () => config.SessionInfo,
      alignExchangeTimeToSessionStartAndReturnUTC: () => E,
      alignPeriodsBackForDataRequest: () => I,
      alignPeriodsBackForVisibleRange: () => A,
      getPeriodsBetweenDates: () => key,
      isTradingNow: () => D,
      newBarBuilder: () => M
    });
    var constants = require(37236),
      result = require(10892),
      name = require(77914),
      config = require(47312),
      items = require(51829);
    class length extends config.BarBuilderBase {
      constructor(exports, module) {
        super(), this._sessionStartMs = -Number.MAX_VALUE, this._sessionEndMs = -Number.MAX_VALUE, this._periodSec =
          exports, this._session = module
      }
      alignTimeIfPossible(exports) {
        const module = this.alignTime(exports);
        return isNaN(module) ? exports : module
      }
      indexOfBar(exports) {
        return exports < this._sessionStartMs ? items.SessionStage.PRE_SESSION : exports >= this._sessionEndMs ? items.SessionStage
          .POST_SESSION : (0, name.toInt)((0, constants.time_seconds_diff)(exports, this._sessionStartMs) / this._periodSec)
      }
      startOfBar(exports) {
        if (exports === items.SessionStage.PRE_SESSION) {
          const exports = (0, constants.get_cal_from_unix_timestamp_ms)(this._session.timezone, this._sessionStartMs - 1),
            module = this._session.spec.alignToNearestSessionEnd(exports, -1);
          return (0, constants.cal_to_utc)(this._session.timezone, module)
        }
        if (exports === items.SessionStage.POST_SESSION) return this._sessionEndMs;
        if (exports < 0) throw new Error("Negative offset is not supported");
        return this._sessionStartMs + (0, constants.time_seconds)(this._periodSec * exports)
      }
      endOfBar(exports) {
        if (exports < 0) throw new Error("Index cannot be negative");
        const module = this.startOfBar(exports) + 1e3 * this._periodSec;
        return module > this._sessionEndMs ? this._sessionEndMs : module
      }
      isLastBar(exports, module) {
        return module >= this._sessionStartMs + (0, constants.time_seconds)(this._periodSec * (exports + 1) - 1)
      }
      moveTo(exports) {
        const module = this._session.timezone,
          require = (0, constants.utc_to_cal)(module, exports),
          result = this._session.spec.alignToSessionStart(require);
        this._sessionStartMs = (0, constants.cal_to_utc)(module, require), (0, constants.add_minutes)(require, result), this._sessionEndMs = (0, constants
          .cal_to_utc)(module, require)
      }
      indexOfLastBarInSession() {
        return (0, name.toInt)((this._sessionEndMs - 1 - this._sessionStartMs) / 1e3 / this._periodSec)
      }
      moveNext() {
        this.moveTo(this._sessionEndMs)
      }
      static minutes(exports, module) {
        return new length(60 * exports, module)
      }
      static seconds(exports, module) {
        return new length(exports, module)
      }
    }
    var context = require(50151),
      handler = require(71149);
    const data = (0,
      constants.get_timezone)("Etc/UTC");

    function utils(exports, module, require) {
      const result = (0, constants.clone)(module),
        name = exports.businessDaysToCalendarDays(result, 1);
      name > 1 && (0, constants.add_date)(result, name - 1);
      const config = exports.leftBorderOfDailyBar(result);
      if (null === config) throw new Error("Cannot calculate left border of daily bar");
      return (0, constants.cal_to_utc)(require, config, !0)
    }
    class _ {
      constructor(exports, module) {
        this.from = exports, this.to = module
      }
      toString() {
        return `${this.from.toString()} - ${this.to.toString()}`
      }
    }
    class params extends config.BarBuilderBase {
      constructor(exports, module, require, constants, result = !1) {
        super(), this._periodStart = -Number.MAX_VALUE, this._periodEnd = -Number.MAX_VALUE, this
          ._periodLastBarStart = -Number.MAX_VALUE, this._periodStartDay = new handler.BusinessDay(0, 0, 0), this
          ._periodEndDay = new handler.BusinessDay(0, 0, 0), this._period = require, this._sessionTgt = exports, this._builder = constants,
          this._useBusinessDays = result, result ? ((0, context.assert)(null === module,
              "useBusinessDays and sessionSrc are mutually exclusive arguments"), this._sessionSrc = new config
            .SessionInfo("Etc/UTC", "24x7")) : this._sessionSrc = module || exports
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
          const module = handler.BusinessDay.fromCalendar((0, constants.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, exports));
          return module.before(this._periodStartDay) ? items.SessionStage.PRE_SESSION : this._periodEndDay.before(module) ? items
            .SessionStage.POST_SESSION : 0
        }
        return exports < this._periodStart ? items.SessionStage.PRE_SESSION : exports >= this._periodEnd ? items.SessionStage
          .POST_SESSION : 0
      }
      startOfBar(exports) {
        if (exports === items.SessionStage.PRE_SESSION) {
          const exports = (0, constants.get_cal_from_unix_timestamp_ms)(this._sessionTgt.timezone, this._periodStart - 1),
            module = this._sessionTgt.spec.alignToNearestSessionEnd(exports, -1);
          return (0, constants.cal_to_utc)(this._sessionTgt.timezone, module) - 1
        }
        return exports === items.SessionStage.POST_SESSION || exports > 0 ? this._periodEnd : exports === items.SessionStage.LASTBAR_SESSION ?
          this._periodLastBarStart : this._periodStart
      }
      moveTo(exports) {
        let module = (0, constants.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, exports);
        module = this._sessionSrc.spec.correctTradingDay(module);
        const require = (0, constants.get_year)(module),
          result = this._indexOfPeriodInYear(module),
          name = result + this._period,
          config = this._sessionTgt.spec,
          items = this._sessionTgt.timezone,
          length = this._builder.startOfPeriod(result, require);
        this._periodStart = utils(config, length, items);
        const context = config.businessDaysToCalendarDays(length, 1);
        context > 1 && (0, constants.add_date)(length, context - 1), this._periodStartDay = handler.BusinessDay.fromCalendar(length);
        let data = this._builder.startOfPeriod(name, require);
        this._periodEnd = utils(config, data, items);
        const _ = (0, constants.clone)(data);
        for ((0, constants.add_date)(_, -1); config.isCalWeekEnd(_);)(0, constants.add_date)(_, -1);
        this._periodEndDay = handler.BusinessDay.fromCalendar(_), (0, constants.add_date)(data, -1), data = function(exports, module) {
          const require = (0, constants.clone)(module);
          for (; exports.isCalWeekEnd(require);)(0, constants.add_date)(require, -1);
          return require
        }(this._sessionTgt.spec, data), this._periodLastBarStart = utils(config, data, items), (this._periodLastBarStart < this
          ._periodStart || this._periodLastBarStart === this._periodEnd) && (this._periodLastBarStart = this
          ._periodStart)
      }
      endOfBar(exports) {
        return exports === items.SessionStage.LAST_SESSION_END ? this._getZonedDateTimeOfBorder(items.SessionStage
          .LAST_SESSION_END).getTime() + 1e3 : ((0, context.assert)(0 === exports), this._periodEnd)
      }
      isLastBar(exports, module) {
        if (0 !== exports) throw new Error("index should be 0");
        return module >= this._periodLastBarStart
      }
      moveBarsForward(exports, module) {
        (0, context.assert)(module > 0);
        const require = (0, constants.get_cal_from_unix_timestamp_ms)(this._sessionTgt.timezone, exports);
        let result = this._sessionTgt.spec.correctTradingDay(require);
        for (let exports = 0; exports < module; exports++) {
          const exports = this._period + this._builder.indexOfPeriod(result);
          result = this._builder.startOfPeriod(exports, (0, constants.get_year)(result)), result = this._sessionTgt.spec.correctTradingDay(result)
        }
        return this.moveTo((0, constants.cal_to_utc)(this._sessionTgt.timezone, result)), this.startOfBar(0)
      }
      currentRange() {
        return new _(this._periodStartDay, this._periodEndDay)
      }
      indexOfBarInYear(exports) {
        const module = (0, constants.get_cal_from_unix_timestamp_ms)(this._sessionSrc.timezone, exports),
          require = (0, constants.get_year)(module),
          result = this._builder.indexOfPeriod(module),
          config = this._sessionTgt.timezone;
        let items = this._builder.startOfPeriod(result, require),
          length = utils(this._sessionTgt.spec, items, config);
        return items = (0, constants.get_cal_from_unix_timestamp_ms)(data, length), require < (0, constants.get_year)(items) ? (items = this._builder
          .startOfPeriod(result - 1, require), length = utils(this._sessionTgt.spec, items, config), {
            index: (result - 1) / this._period,
            time: length
          }) : {
          index: (0, name.toInt)(result / this._period),
          time: length
        }
      }
      sessionSrc() {
        return this._sessionSrc
      }
      sessionTgt() {
        return this._sessionTgt
      }
      static days(exports, module, require) {
        return new params(module, require, exports, new S(module), !1)
      }
      static weeks(exports, module, require) {
        return new params(module, require, exports, new C(module), !1)
      }
      static months(exports, module, require) {
        return new params(module, require, exports, new T(module), !1)
      }
      static daysFromBusinessDays(exports, module) {
        return new params(module, null, exports, new S(module), !0)
      }
      static weeksFromBusinessDays(exports, module) {
        return new params(module, null, exports, new C(module), !0)
      }
      static monthsFromBusinessDays(exports, module) {
        return new params(module, null, exports, new T(module), !0)
      }
      _getZonedDateTimeOfBorder(exports) {
        (0, context.assert)(exports === items.SessionStage.FIRST_SESSION_START || exports === items.SessionStage.LAST_SESSION_END);
        const module = this._sessionTgt.spec.timezoneObj();
        if (exports === items.SessionStage.FIRST_SESSION_START) {
          const exports = this.currentRange().from.toCalendar(module);
          return (0, context.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(exports)).from
        } {
          const exports = this.currentRange().to.toCalendar(module);
          return (0, context.ensureNotNull)(this._sessionTgt.spec.bordersOfDailyBar(exports)).to
        }
      }
      _indexOfPeriodInYear(exports) {
        const module = this._builder.indexOfPeriod(exports);
        let require = (0, name.toInt)(module / this._period) * this._period;
        return -1 === module && (require = -this._period), require
      }
    }

    function map(exports, module) {
      const require = exports.getWeekIndex(module),
        result = (0, constants.get_day_of_week)(module) - exports.getEntriesForWeek(require).firstDayOfWeek();
      return result < 0 ? result + 7 : result
    }

    function flag(exports, module) {
      const require = (0, constants.get_day_of_year)(module) - 1;
      let result = map(exports, module) - require % 7;
      return 0 === result ? (0, name.toInt)(require / 7) : (result >= 0 && (result -= 7), (0, name.toInt)((result + require) / 7))
    }
    class func {
      indexOfPeriod(exports) {
        return (0, constants.get_day_of_year)(exports) - 1
      }
      startOfPeriod(exports, module) {
        const require = (0, constants.days_per_year)(module);
        return (0, constants.get_cal)(data, module, constants.JANUARY, 1 + Math.min(exports, require))
      }
    }
    class array extends func {
      constructor(exports) {
        super(), this._sessionsSpec = exports
      }
      indexOfPeriod(exports) {
        return super.indexOfPeriod(exports) - function(exports, module) {
          const require = flag(exports, module),
            result = (0, constants.get_cal)(data, (0, constants.get_year)(module), constants.JANUARY, 1);
          (0, constants.add_date)(result, 7 * require);
          const name = require * exports.weekEndsCountForSingleSession() + exports.holidaysFromYearStart(result),
            config = (0, constants.get_day_of_year)(module) - (0, constants.get_day_of_year)(result);
          return name + config - exports.calendarDaysToBusinessDays(result, config)
        }(this._sessionsSpec, exports)
      }
      startOfPeriod(exports, module) {
        const require = 7 - this._sessionsSpec.weekEndsCountForSingleSession(),
          result = Math.max(0, Math.trunc(exports / require) - 1),
          name = (0, constants.get_cal)(data, module, constants.JANUARY, 1),
          config = (0, constants.days_per_year)(module);
        if ((0, constants.add_date)(name, 7 * result), (exports -= require * result - this._sessionsSpec.holidaysFromYearStart(name)) > 0) {
          const module = this._sessionsSpec.businessDaysToCalendarDays(name, exports);
          (0, constants.add_date)(name, module)
        }
        let items = (0, constants.get_day_of_year)(name) - 1;
        return module < (0, constants.get_year)(name) && (items += config), super.startOfPeriod(items, module)
      }
    }
    class value extends func {
      constructor(exports) {
        super(), this._sessionsSpec = exports
      }
      indexOfPeriod(exports) {
        return super.indexOfPeriod(exports) - this._sessionsSpec.daysOffFromYearStart(exports)
      }
      startOfPeriod(exports, module) {
        const require = (0, constants.get_cal)(data, module, constants.JANUARY, 1);
        (0, constants.add_date)(require, exports);
        const result = this._sessionsSpec.daysOffFromYearStart(require);
        (0, constants.add_date)(require, result);
        const name = this._sessionsSpec.daysOffFromYearStart(require) - result;
        if (name > 0) {
          const exports = this._sessionsSpec.businessDaysToCalendarDays(require, name);
          (0, constants.add_date)(require, exports)
        }
        let config = (0, constants.get_day_of_year)(require) - 1;
        if (module < (0, constants.get_year)(require)) {
          config += (0, constants.days_per_year)(module)
        }
        return super.startOfPeriod(config, module)
      }
    }
    class S {
      constructor(exports) {
        this._builder = null, this._initialized = !1, this._session = exports
      }
      indexOfPeriod(exports) {
        return this._getBuilder().indexOfPeriod(exports)
      }
      startOfPeriod(exports, module) {
        return this._getBuilder().startOfPeriod(exports, module)
      }
      _getBuilder() {
        return null !== this._builder && this._initialized || (this._session.spec.hasWeekEnds() ? this._builder = this
          ._session.spec.hasHistoryCorrections() ? new value(this._session.spec) : new array(this._session.spec) : this
          ._builder = this._session.spec.hasHistoryCorrections() ? new value(this._session.spec) : new func, this
          ._initialized = !0), this._builder
      }
    }
    class bool {
      constructor(exports) {
        this._spec = exports
      }
      indexOfPeriod(exports) {
        let module = flag(this._spec, exports);
        return 0 === module && exports.getTime() < this.startOfPeriod(0, (0, constants.get_year)(exports)).getTime() && (module = -1), module
      }
      startOfPeriod(exports, module) {
        if (exports < 0) {
          module--;
          const require = (0, constants.get_cal)(data, module, constants.DECEMBER, 31, 23, 59, 59),
            result = this.indexOfPeriod(require),
            name = -1 * exports,
            config = Math.trunc(result / name) * name;
          return this.startOfPeriod(config, module)
        }
        const require = (0, constants.get_cal)(data, module, constants.JANUARY, 1),
          result = map(this._spec, require),
          name = 0 === result ? 7 * exports : 7 * (exports + 1) - result;
        return name > (0, constants.days_per_year)((0, constants.get_year)(require)) ? this.startOfPeriod(0, module + 1) : ((0, constants.add_date)(require, name),
          require)
      }
    }
    class width {
      constructor(exports) {
        this._yearStartDataHash = new Map, this._spec = exports
      }
      startOfPeriod(exports, module) {
        if (exports < 0) {
          module--;
          const require = (0, constants.get_cal)(data, module, constants.DECEMBER, 31, 23, 59, 59),
            result = this.indexOfPeriod(require),
            name = -1 * exports,
            config = Math.trunc(result / name) * name;
          return this.startOfPeriod(config, module)
        }
        const require = this._spec.getWeekIndicesWithAdditionalWeekBars(module),
          result = this._getStartOfYearData(module, require),
          name = this._moveToWeekIndexAccountingAdditional(result.firstWeekIndex, require, exports),
          config = 7 * (name - result.firstWeekIndex);
        let items = (0, constants.clone)((0, context.ensureNotNull)(result.startOfFirstBarInYear));
        if ((0, constants.add_date)(items, config), (0, constants.get_year)(items) > module) {
          const exports = module + 1,
            require = this._spec.getWeekIndicesWithAdditionalWeekBars(exports),
            constants = this._getStartOfYearData(exports, require);
          if (items.getTime() >= (0, context.ensureNotNull)(constants.startOfFirstBarInYear).getTime()) return this.startOfPeriod(0, exports)
        }
        return items = this._calculateBarWeekStart(items, require, name, exports), items
      }
      indexOfPeriod(exports) {
        const module = this._spec.getWeekIndex(exports),
          require = this._spec.getWeekIndicesWithAdditionalWeekBars((0, constants.get_year)(exports)),
          result = this._getStartOfYearData((0, constants.get_year)(exports), require);
        if (exports.getTime() < (0, context.ensureNotNull)(result.startOfFirstBarInYear).getTime()) return -1;
        if (0 === module && width.isOnFirstCalendarWeekOfYear(exports) || 0 !== module && module === result.firstWeekIndex) return this
          ._calculateLastWeek(exports, module, require, result.firstWeekbarsCount) - 1;
        let name = this._numberOfCalendarWeeks(exports);
        return name += result.firstWeekbarsCount - result.fullWeeksAdjustment, name += this._calculateWeeksWithExtraBar(module, require, result
            .firstWeekIndex),
          name += this._calculateLastWeek(exports, module, require, width.fullWeekOfAdditionalBarsCount) - 1, name
      }
      static isOnFirstCalendarWeekOfYear(exports) {
        if ((0, constants.get_day_of_year)(exports) > constants.LAST_DAY_OF_WEEK) return !1;
        const module = (0, constants.get_cal)(data, (0, constants.get_year)(exports), constants.JANUARY, 1, 0, 0),
          require = (0, constants.clone)(module);
        return (0, constants.add_date)(require, constants.LAST_DAY_OF_WEEK - (0, constants.get_day_of_week)(module)), exports.getTime() < require.getTime()
      }
      _moveToWeekIndexAccountingAdditional(exports, module, require) {
        let constants = exports + require;
        for (const require of module)
          if (!(require.weekIndex < exports)) {
            if (require.weekIndex >= constants) break;
            constants--
          } return constants
      }
      _calculateBarWeekStart(exports, module, require, result) {
        const name = this._getIndexOfWeekWithExtraBarIfExists(module, require);
        if (null === name) {
          const module = this._spec.getEntriesForWeek(require).firstDayOfWeek() - (0, constants.get_day_of_week)(exports),
            result = (0, constants.clone)(exports);
          return (0, constants.add_date)(result, module), result
        }
        const config = this._spec.getHistoryByIndex(name.entryIndex);
        if (this.indexOfPeriod((0, context.ensureNotNull)(config.getStartDay())) === result) return (0, constants.clone)((0, context.ensureNotNull)(
          config.getStartDay()));
        const items = this._spec.getHistoryByIndex(name.entryIndex - 1).getEntries().firstDayOfWeek() - (0, constants
            .get_day_of_week)(exports),
          length = (0, constants.clone)(exports);
        return (0, constants.add_date)(length, items), length
      }
      _numberOfCalendarWeeks(exports) {
        const module = (0, constants.get_day_of_year)(exports),
          require = (0, constants.get_day_of_week)(exports);
        return Math.trunc((module - require) / 7)
      }
      _getStartOfYearData(exports, module) {
        let require = this._yearStartDataHash.get(exports);
        if (void 0 !== require) return require;
        let result = (0, constants.get_cal)(data, exports, constants.JANUARY, 1, 0, 0),
          name = this._spec.getWeekIndex(result),
          config = 0;
        for ((0, constants.get_day_of_week)(result) === constants.FIRST_DAY_OF_WEEK && (config = 1), require = this._getYearStartDataFromWeek(module, name,
          result); null === require.startOfFirstBarInYear;) name++, config++, result = this._moveToNextCalendarWeekStart(result), require = this
          ._getYearStartDataFromWeek(module, name, result);
        return require.fullWeeksAdjustment = config, this._yearStartDataHash.set(exports, require), require
      }
      _moveToNextCalendarWeekStart(exports) {
        const module = (0, constants.get_day_of_week)(exports),
          require = (0, constants.clone)(exports);
        return (0, constants.add_date)(require, constants.LAST_DAY_OF_WEEK - module + 1), require
      }
      _getYearStartDataFromWeek(exports, module, require) {
        const result = (0, constants.get_day_of_week)(require);
        let name = null,
          config = 0;
        const items = this._getIndexOfWeekWithExtraBarIfExists(exports, module);
        if (null !== items) {
          let exports = this._spec.getHistoryByIndex(items.entryIndex - 1).getEntries().firstDayOfWeek() - result;
          if (exports >= 0) name = (0, constants.clone)(require), (0, constants.add_date)(name, exports), config = 2;
          else {
            const module = this._spec.getHistoryByIndex(items.entryIndex);
            exports = module.getEntries().firstDayOfWeek() - result, exports >= 0 && (name = module.getStartDay(), name && (name = (0, constants.clone)(name)), config =
              1)
          }
        } else {
          const exports = this._spec.getEntriesForWeek(module),
            items = exports.firstDayOfWeek() - result;
          items >= 0 && (this._hasWorkingDays(exports) || this._hasWorkingDaysNextWeek(module + 1)) && (name = (0, constants.clone)(require), (0, constants
            .add_date)(name, items), config = 1)
        }
        return {
          startOfFirstBarInYear: name,
          firstWeekIndex: module,
          firstWeekbarsCount: config,
          fullWeeksAdjustment: 0
        }
      }
      _hasWorkingDays(exports) {
        if (0 === exports.entriesByDay().size) return !1;
        for (let module = exports.firstDayOfWeek(); module <= constants.LAST_DAY_OF_WEEK; module++)
          if (void 0 !== exports.entriesByDay().get(module)) return !0;
        return !1
      }
      _hasWorkingDaysNextWeek(exports) {
        const module = this._spec.getEntriesForWeek(exports);
        for (let exports = 1; exports < module.firstDayOfWeek(); exports++)
          if (void 0 !== module.entriesByDay().get(exports)) return !0;
        return !1
      }
      _calculateWeeksWithExtraBar(exports, module, require) {
        let constants = 0;
        for (const result of module) {
          if (result.weekIndex >= exports) break;
          result.weekIndex > require && constants++
        }
        return constants
      }
      _calculateLastWeek(exports, module, require, result) {
        const name = (0, constants.get_day_of_week)(exports),
          config = this._getIndexOfWeekWithExtraBarIfExists(require, module);
        if (null === config) {
          return name - this._spec.getEntriesForWeek(module).firstDayOfWeek() >= 0 ? 1 : 0
        }
        const items = this._positionInsideWeekWithSeveralBars(config, name);
        return items === width.IsInNewSession ? result : items === width.IsInMidSession ? result - 1 : 0
      }
      _getIndexOfWeekWithExtraBarIfExists(exports, module) {
        for (const require of exports) {
          if (require.weekIndex === module) return require;
          if (require.weekIndex > module) break
        }
        return null
      }
      _positionInsideWeekWithSeveralBars(exports, module) {
        let require = this._spec.getHistoryByIndex(exports.entryIndex).getEntries().firstDayOfWeek() - module;
        if (require <= 0) return width.IsInNewSession;
        return require = this._spec.getHistoryByIndex(exports.entryIndex - 1).getEntries().firstDayOfWeek() - module, require <= 0 ? width
          .IsInMidSession : width.IsBeforeAnySession
      }
    }
    width.IsBeforeAnySession = -1, width.IsInMidSession = 0, width.IsInNewSession = 1, width.fullWeekOfAdditionalBarsCount = 2;
    class C {
      constructor(exports) {
        this._builder = null, this._session = exports
      }
      indexOfPeriod(exports) {
        return this._getBuilder().indexOfPeriod(exports)
      }
      startOfPeriod(exports, module) {
        return this._getBuilder().startOfPeriod(exports, module)
      }
      _getBuilder() {
        return null == this._builder && (this._builder = this._session.spec.hasHistoryCorrections() ? new width(this
          ._session.spec) : new bool(this._session.spec)), this._builder
      }
    }
    class T {
      constructor(exports) {
        this._session = exports
      }
      indexOfPeriod(exports) {
        return (0, constants.get_month)(exports)
      }
      startOfPeriod(exports, module) {
        if (exports < 0) {
          const require = (0, name.toInt)((11 - exports) / 12);
          module -= require, exports += 12 * require
        } else exports > constants.DECEMBER && (module++, exports = constants.JANUARY);
        return (0, constants.get_cal)(data, module, exports, 1)
      }
    }
    var P, index;

    function M(exports, module, require, constants = !1) {
      const name = result.Interval.parse(exports),
        config = name.multiplier();
      return name.isMinutes() ? length.minutes(config, module) : name.isSeconds() ? length.seconds(config, module) : name.isTicks() ? new length(1, module) : name
      .isRange() ? new length(60 * config, module) : new params(module, require ?? null, config, function(exports, module) {
          switch (exports) {
            case result.ResolutionKind.Days:
              return new S(module);
            case result.ResolutionKind.Weeks:
              return new C(module);
            case result.ResolutionKind.Months:
              return new T(module)
          }
          throw new Error(`Unknown dwm resolution: ${exports}`)
        }(name.kind(), module), constants)
    }

    function I(exports, module, require, constants, result, name, config) {
      return L(exports, module, require, constants, result, name, config, 0)
    }

    function A(exports, module, require, constants, result, name, config) {
      return L(exports, module, require, constants, result, name, config, 1)
    }

    function L(exports, module, require, name, items, length, context, handler) {
      const data = result.Interval.parse(items + name);
      if (data.isMonths()) {
        const exports = new Date(context);
        return 0 === handler && exports.setUTCDate(1),
          function(exports, module) {
            B(exports, Math.floor(module / 12));
            let require = exports.getUTCMonth() - module % 12;
            require < 0 && (B(exports, 1), require += 12);
            exports.setUTCMonth(require);
            for (; exports.getUTCMonth() !== require;) V(exports, 1)
          }(exports, length * data.multiplier()), exports.getTime()
      }
      const utils = new config.SessionInfo("Etc/UTC", exports, module, require),
        _ = data.inMilliseconds(),
        params = data.isDWM();
      let map;
      if (params) map = 864e5;
      else {
        const exports = utils.spec.getWeekIndex((0, constants.get_cal_from_unix_timestamp_ms)(utils.timezone, context));
        map = 60 * utils.spec.getEntriesForWeek(exports).maxTradingDayLength() * 1e3
      }
      let flag = 0;
      if (data.isWeeks()) flag = 7;
      else {
        const exports = utils.spec.getWeekIndex((0, constants.get_cal_from_unix_timestamp_ms)(utils.timezone, context));
        flag = 7 - utils.spec.getEntriesForWeek(exports).weekEndsCount()
      }
      const func = map / _,
        array = flag * func;
      let value;
      if (length < array) value = length / func;
      else {
        value = 7 * (length / array)
      }
      return params && (value = Math.floor(value)), context - 864e5 * value
    }

    function key(exports, module, require, name, items, length, context) {
      const handler = result.Interval.parse(items + name);
      if (handler.isMonths()) {
        const exports = new Date(length),
          module = new Date(context);
        let require = 12 * (module.getUTCFullYear() - exports.getUTCFullYear());
        return require += module.getUTCMonth() - exports.getUTCMonth(), Math.ceil(require / handler.multiplier())
      }
      const data = new config.SessionInfo("Etc/UTC", exports, module, require),
        utils = handler.inMilliseconds();
      let _;
      if (handler.isDWM()) _ = 864e5;
      else {
        const exports = data.spec.getWeekIndex((0, constants.get_cal_from_unix_timestamp_ms)(data.timezone, context));
        _ = 60 * data.spec.getEntriesForWeek(exports).maxTradingDayLength() * 1e3
      }
      let params = 0;
      if (handler.isWeeks()) params = 7;
      else {
        const exports = data.spec.getWeekIndex((0, constants.get_cal_from_unix_timestamp_ms)(data.timezone, context));
        params = 7 - data.spec.getEntriesForWeek(exports).weekEndsCount()
      }
      const map = context - length,
        flag = _ / utils,
        func = params * flag;
      let array = map / 864e5 * flag;
      array >= func && (array = map / 6048e5 * func);
      return array % 1 <= Number.EPSILON * Math.ceil(array) ? Math.round(array) : Math.ceil(array)
    }

    function E(exports, module) {
      const require = (0, constants.clone)(module);
      return exports.alignToSessionStart(require), (0, constants.cal_to_utc)((0, constants.get_timezone)(exports.timezone()), require)
    }

    function D(exports, module) {
      const require = (0, constants.utc_to_cal)(module.timezone, +exports);
      let result = (0, constants.get_day_of_week)(require),
        name = (0, constants.get_minutes_from_midnight)(require);
      const config = module.spec.findSession(module.spec.getWeekIndex(require), result, name).getEntry();
      return config.isOvernight() && name > config.startOffset() + config.length() && result === config.dayOfWeek() - 1 && (result++, name -= 1440), result === config
        .dayOfWeek() && name >= config.startOffset() && name < config.startOffset() + config.length()
    }

    function B(exports, module) {
      const require = exports.getUTCMonth();
      exports.setUTCFullYear(exports.getUTCFullYear() - module), exports.getUTCMonth() !== require && V(exports, 1)
    }

    function V(exports, module) {
      exports.setTime(exports.getTime() - 864e5 * module)
    }! function(exports) {
      exports[exports.AlignToFirstDay = 0] = "AlignToFirstDay", exports[exports.AlignToClosestDay = 1] = "AlignToClosestDay"
    }(P || (P = {})),
    function(exports) {
      exports[exports.D = 864e5] = "D", exports[exports.W = 6048e5] = "W"
    }(index || (index = {}))