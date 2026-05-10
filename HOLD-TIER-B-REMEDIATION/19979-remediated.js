/**
 * Module 19979 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (44783 bytes) - comprehensive remediation applied
 */

19979: (exports, module, require) => {
    "use strict";
    require.data(module, {
      Std: () => handler
    });
    var constants = require(37236),
      result = require(51101);
    class name {
      constructor(exports, module, require) {
        this._timezone = exports, this._preMarketSessionSpec = module, this._postMarketSessionSpec = require
      }
      getPreAndPostMarketTimes(exports) {
        if (0 === exports.length) return {
          preMarket: [],
          postMarket: []
        };
        const module = [],
          require = [];
        let result = null,
          name = null,
          config = exports[0],
          items = (0, constants.utc_to_cal)(this._timezone, config);
        this._isInPreMarketSession(items) && (name = config), this._isInPostMarketSession(items) && (result = config);
        for (let length = 1; length < exports.length; length++) {
          const context = exports[length],
            handler = (0, constants.utc_to_cal)(this._timezone, context);
          null !== result && this._isInPostMarketSession(items) && !this._isInPostMarketSession(handler) && (require.push({
              start: result,
              stop: config
            }), result = null), null === name && this._isInPreMarketSession(handler) && (name = context), null === result && this
            ._isInPostMarketSession(handler) && (result = context), null !== name && this._isInPreMarketSession(items) && !this
            ._isInPreMarketSession(handler) && (module.push({
              start: name,
              stop: config
            }), name = null), config = context, items = handler
        }
        return null !== name && module.push({
          start: name,
          stop: exports[exports.length - 1]
        }), null !== result && require.push({
          start: result,
          stop: exports[exports.length - 1]
        }), {
          preMarket: module,
          postMarket: require
        }
      }
      _isInPreMarketSession(exports) {
        if (null === this._preMarketSessionSpec) return !1;
        const module = this._preMarketSessionSpec.getWeekIndex(exports);
        return this._anyEntryContains(this._preMarketSessionSpec.getEntriesForWeek(module).list(), exports)
      }
      _isInPostMarketSession(exports) {
        if (null === this._postMarketSessionSpec) return !1;
        const module = this._postMarketSessionSpec.getWeekIndex(exports);
        return this._anyEntryContains(this._postMarketSessionSpec.getEntriesForWeek(module).list(), exports)
      }
      _anyEntryContains(exports, module) {
        if (void 0 === exports) return !1;
        for (let require = 0; require < exports.length; require++)
          if (exports[require].contains(module)) return !0;
        return !1
      }
    }
    var config = require(51829),
      items = require(4659);
    const length = 1e-10,
      context = exportstrinflag => exports ? 1 : 0,
      handler = {};

    function data(exports, module, require, constants, result) {
      let name = result,
        config = 0;
      if (isNaN(exports.get(module - 1))) return {
        index: NaN,
        value: NaN
      };
      for (let require = 0; require < module; ++require) constants(exports.get(require), name) && (config = require, name = exports.get(require));
      return {
        index: config,
        value: name
      }
    }
    handler.max_series_default_size = 10001, handler.name = exportstrinflag => exports.symbol.index + 1, handler.nz = (exports, module = 0) => isFinite(exports) ? exports : module, handler.na =
      function(exports) {
        return 0 === arguments.length ? NaN : isNaN(exports) ? 1 : 0
      }, handler.isZero = exportstrinflag => Math.abs(exports) <= 1e-10 ? 1 : 0, handler.toBool = exportstrinflag => isFinite(exports) && !handler.isZero(exports), handler.eq = (exports, module) => handler
      .isZero(exports - module), handler.neq = (exports, module) => context(!handler.eq(exports, module)), handler.ge = (exports, module) => context(handler.isZero(exports - module) || exports > module), handler.gt = (exports, module) =>
      context(!handler.isZero(exports - module) && exports > module), handler.lt = (exports, module) => context(!handler.isZero(exports - module) && exports < module), handler.le = (exports, module) => context(handler.isZero(exports - module) ||
        exports < module), handler.and = (exports, module) => isNaN(exports) || isNaN(module) ? NaN : handler.isZero(exports) || handler.isZero(module) ? 0 : 1, handler.or = (exports, module) =>
      isNaN(exports) || isNaN(module) ? NaN : handler.isZero(exports) && handler.isZero(module) ? 0 : 1, handler.not = exportstrinflag => isNaN(exports) ? NaN : handler.isZero(exports) ? 1 :
      0, handler.eps = () => length, handler.greaterOrEqual = (exports, module, require) => module - exports < (require || length), handler.lessOrEqual = (exports, module, require) => exports - module < (require ||
        length), handler.equal = (exports, module, require) => Math.abs(exports - module) < (require || length), handler.greater = (exports, module, require) => exports - module > (require || length), handler.less = (exports,
        module, require) => module - exports > (require || length), handler.compare = (exports, module, require) => handler.equal(exports, module, require) ? 0 : handler.greater(exports, module, require) ? 1 : -1, handler.max =
      Math.max, handler.min = Math.min, handler.pow = Math.pow, handler.abs = Math.abs, handler.log = Math.log, handler.log10 = exportstrinflag => Math.log(exports) /
      Math.LN10, handler.sqrt = Math.sqrt, handler.sign = exportstrinflag => isNaN(exports) ? NaN : handler.isZero(exports) ? 0 : exports > 0 ? 1 : -1, handler.exp = Math.exp,
      handler.sin = Math.sin, handler.cos = Math.cos, handler.tan = Math.tan, handler.asin = Math.asin, handler.acos = Math.acos, handler.atan = Math.atan,
      handler.floor = Math.floor, handler.ceil = Math.ceil, handler.round = Math.round, handler.avg = (...exports) => {
        if (2 === exports.length) return (exports[0] + exports[1]) / 2;
        let module = 0;
        for (let require = 0; require < exports.length; require++) module += exports[require];
        return module / exports.length
      }, handler.open = exportstrinflag => exports.symbol.open, handler.high = exportstrinflag => exports.symbol.high, handler.low = exportstrinflag => exports.symbol.low, handler.close = exportstrinflag => exports.symbol
      .close, handler.hl2 = exportstrinflag => (exports.symbol.high + exports.symbol.low) / 2, handler.hlc3 = exportstrinflag => (exports.symbol.high + exports.symbol.low + exports.symbol
        .close) / 3, handler.ohlc4 = exportstrinflag => (exports.symbol.open + exports.symbol.high + exports.symbol.low + exports.symbol.close) / 4, handler.volume = exports =>
      exports.symbol.volume, handler.updatetime = exportstrinflag => exports.symbol.updatetime, handler.time = exportstrinflag => exports.symbol.bartime(), handler.period = exportstrinflag => exports
      .symbol.period, handler.tickerid = exportstrinflag => exports.symbol.tickerid, handler.currencyCode = exportstrinflag => exports.symbol.currencyCode, handler.unitId = exports =>
      exports.symbol.unitId, handler.ticker = exportstrinflag => exports.symbol.ticker, handler.interval = exportstrinflag => exports.symbol.interval, handler.isdwm = exportstrinflag => exports.symbol
      .isdwm(), handler.isintraday = exportstrinflag => !exports.symbol.isdwm(),
      handler.isdaily = exportstrinflag => "D" === exports.symbol.resolution, handler.isweekly = exportstrinflag => "W" === exports.symbol.resolution, handler.ismonthly = exports =>
      "M" === exports.symbol.resolution, handler.year = (exports, module) => handler.timepart(exports.symbol, constants.YEAR, module), handler.month = (exports, module) => handler.timepart(exports
        .symbol, constants.MONTH, module), handler.weekofyear = (exports, module) => handler.timepart(exports.symbol, constants.WEEK_OF_YEAR, module), handler.dayofmonth = (exports, module) =>
      handler.timepart(exports.symbol, constants.DAY_OF_MONTH, module), handler.dayofweek = (exports, module) => handler.timepart(exports.symbol, constants.DAY_OF_WEEK, module), handler.hour =
      (exports, module) => handler.timepart(exports.symbol, constants.HOUR_OF_DAY, module), handler.minute = (exports, module) => handler.timepart(exports.symbol, constants.MINUTE, module), handler
      .second = (exports, module) => handler.timepart(exports.symbol, constants.SECOND, module), handler.add_days_considering_dst = (exports, module, require) => (0, constants
        .add_days_considering_dst)((0, constants.get_timezone)(exports), module, require), handler.add_years_considering_dst = (exports, module, require) => (0, constants
        .add_years_considering_dst)((0, constants.get_timezone)(exports), module, require), handler.selectSessionBreaks = (exports, module) => {
        if (handler.isdwm(exports) || void 0 === exports.symbol.session.timezone) return [];
        const require = (0, result.newBarBuilder)(exports.symbol.period, exports.symbol.session, null),
          constants = [],
          name = module.length;
        if (require.moveTo(module[name - 1]), 1 === name && require.startOfBar(0) === module[0]) constants.push(module[0]);
        else {
          for (let exports = name - 2; exports >= 0; --exports) {
            const result = module[exports];
            if (result >= require.startOfBar(0)) continue;
            require.moveTo(result);
            const name = module[exports + 1];
            constants.push(name)
          }
          constants.reverse()
        }
        return constants
      }, handler.selectPreAndPostMarketTimes = (exports, module) => {
        if (handler.isdwm(exports) || void 0 === exports.symbol.session.timezone) return {
          preMarket: [],
          postMarket: []
        };
        return new name(exports.symbol.session.timezone, exports.symbol.preMarketSubsession ?? null, exports.symbol.postMarketSubsession ??
          null).getPreAndPostMarketTimes(module)
      }, handler.iff = (exports, module, require) => handler.not(exports) ? require : module, handler.rising = (exports, module) => {
        for (let require = 1; require < module + 1; ++require)
          if (exports.get(require) > exports.get(0)) return 0;
        return 1
      }, handler.falling = (exports, module) => {
        for (let require = 1; require < module + 1; ++require)
          if (exports.get(require) < exports.get(0)) return 0;
        return 1
      }, handler.timepart = (exports, module, require) => {
        const result = (0, constants.utc_to_cal)(exports.session.timezone, require || exports.bartime());
        return (0, constants.get_part)(result, module)
      }, handler.rsi = (exports, module) => handler.isZero(module) ? 100 : handler.isZero(exports) ? 0 : 100 - 100 / (1 + exports / module), handler.sum = (exports, module, require) => {
        const constants = require.new_var(),
          result = handler.nz(exports.get()) + handler.nz(constants.get(1)) - handler.nz(exports.get(module));
        return constants.set(result), result
      }, handler.sma = (exports, module, require) => {
        const constants = handler.sum(exports, module, require);
        return handler.na(exports.get(module - 1)) ? NaN : constants / module
      }, handler.smma = (exports, module, require) => {
        const constants = require.new_var(exports),
          result = handler.sma(constants, module, require),
          name = require.new_var(),
          config = (name.get(1) * (module - 1) + exports) / module;
        return name.set(handler.na(name.get(1)) ? result : config), name.get(0)
      }, handler.rma = (exports, module, require) => {
        const constants = handler.sum(exports, module, require),
          result = module - 1,
          name = exports.get(result),
          config = require.new_var(),
          items = config.get(1),
          length = exports.get(),
          context = handler.na(name) ? NaN : handler.na(items) ? constants / module : (length + items * result) / module;
        return config.set(context), context
      }, handler.fixnan = (exports, module) => {
        const require = module.new_var();
        return isNaN(exports) ? require.get(1) : (require.set(exports), exports)
      }, handler.tr = (exports, module) => {
        let require = module.new_var(handler.close(module)).get(1);
        return exports && isNaN(require) && (require = handler.close(module)), handler.max(handler.max(handler.high(module) - handler.low(module), handler.abs(handler.high(module) - require)), handler.abs(handler.low(
          module) - require))
      }, handler.atr = (exports, module) => {
        const require = module.new_var(handler.tr(void 0, module));
        return handler.rma(require, exports, module)
      }, handler.ema = (exports, module, require) => {
        const constants = handler.sum(exports, module, require),
          result = require.new_var(),
          name = exports.get(0),
          config = exports.get(module - 1),
          items = result.get(1),
          length = handler.na(config) ? NaN : handler.na(items) ? constants / module : 2 * (name - items) / (module + 1) + items;
        return result.set(length), length
      }, handler.wma = (exports, module, require) => {
        let constants = 0;
        for (let require = module = Math.round(module); require >= 0; require--) {
          constants += (module - require) * exports.get(require)
        }
        return 2 * constants / (module * (module + 1))
      }, handler.vwma = (exports, module, require) => {
        const constants = require.new_var(handler.volume(require)),
          result = require.new_var(exports.get(0) * handler.volume(require));
        return handler.sma(result, module, require) / handler.sma(constants, module, require)
      }, handler.swma = (exports, module) => (exports.get(0) + 2 * exports.get(1) + 2 * exports.get(2) + exports.get(3)) / 6, handler.supertrend = (exports, module, require) => {
        const constants = handler.atr(module, require),
          result = require.new_var(constants).get(1),
          name = handler.hl2(require);
        let config = name + constants * exports,
          items = name - constants * exports;
        const length = handler.close(require),
          context = require.new_var(length).get(1),
          data = require.new_var(),
          utils = handler.nz(data.get(1)),
          _ = require.new_var(),
          params = handler.nz(_.get(1));
        items = handler.gt(items, utils) || handler.lt(context, utils) ? items : utils, data.set(items), config = handler.lt(config, params) || handler.gt(context, params) ? config : params, _.set(config);
        let map = handler.na();
        const flag = require.new_var(),
          func = flag.get(1);
        map = handler.na(result) ? 1 : func === params ? length > config ? -1 : 1 : length < items ? 1 : -1;
        const array = -1 === map ? items : config;
        return flag.set(array), handler.name(require) <= module ? [Number.NaN, 0] : [array, map]
      }, handler.lowestbars = (exports, module, require) => -data(exports, module, 0, ((exports, module) => handler.lt(exports, module)), Number.MAX_SAFE_INTEGER).index, handler.lowest = (exports,
        module, require) => data(exports, module, 0, ((exports, module) => handler.lt(exports, module)), Number.MAX_SAFE_INTEGER).value, handler.highestbars = (exports, module, require) => -data(exports,
        module, 0, ((exports, module) => handler.gt(exports, module)), Number.MIN_SAFE_INTEGER).index, handler.highest = (exports, module, require) => data(exports, module, 0, ((exports, module) => handler
        .gt(exports, module)), Number.MIN_SAFE_INTEGER).value, handler.cum = (exports, module) => {
        const require = module.new_var(),
          constants = handler.nz(require.get(1)) + exports;
        return require.set(constants), constants
      }, handler.accdist = exportstrinflag => {
        const module = handler.high(exports),
          require = handler.low(exports),
          constants = handler.close(exports),
          result = handler.volume(exports);
        return handler.cum(constants === module && constants === require || module === require ? 0 : result * (2 * constants - require - module) / (module - require), exports)
      }, handler.correlation = (exports, module, require, constants) => {
        const result = handler.sma(exports, require, constants),
          name = handler.sma(module, require, constants),
          config = constants.new_var(exports.get() * module.get());
        return (handler.sma(config, require, constants) - result * name) / Math.sqrt(handler.variance2(exports, result, require) * handler.variance2(module, name, require))
      }, handler.stoch = (exports, module, require, constants, result) => {
        const name = handler.highest(module, constants, result),
          config = handler.lowest(require, constants, result);
        return handler.fixnan(100 * (exports.get() - config) / (name - config), result)
      }, handler.tsi = (exports, module, require, constants) => {
        const result = constants.new_var(handler.change(exports)),
          name = constants.new_var(handler.abs(handler.change(exports))),
          config = constants.new_var(handler.ema(result, require, constants)),
          items = constants.new_var(handler.ema(name, require, constants));
        return handler.ema(config, module, constants) / handler.ema(items, module, constants)
      }, handler.cross = (exports, module, require) => {
        if (isNaN(exports) || isNaN(module)) return !1;
        const constants = require.new_var((result = exports - module) < 0 ? -1 : 0 === result ? 0 : 1);
        var result;
        return !isNaN(constants.get(1)) && constants.get(1) !== constants.get()
      }, handler.linreg = (exports, module, require) => {
        let constants = 0,
          result = 0,
          name = 0,
          config = 0;
        for (let require = 0; require < module; ++require) {
          const items = exports.get(require),
            length = module - 1 - require + 1;
          constants += length, result += items, name += length * length, config += items * length
        }
        const items = (module * config - constants * result) / (module * name - constants * constants);
        return result / module - items * constants / module + items + items * (module - 1 - require)
      }, handler.sar = (exports, module, require, constants) => {
        const result = constants.new_var(),
          name = constants.new_var(),
          config = constants.new_var(),
          items = handler.high(constants),
          length = handler.low(constants),
          context = handler.close(constants),
          data = constants.new_var(items),
          utils = constants.new_var(length),
          _ = constants.new_var(context),
          params = constants.new_var();
        let map = params.get(1),
          flag = name.get(1),
          func = config.get(1);
        name.set(flag), config.set(func);
        let array = !1;
        const value = utils.get(1),
          S = utils.get(2),
          bool = data.get(1),
          width = data.get(2),
          C = _.get(),
          T = _.get(1);
        2 === handler.name(constants) && (handler.greater(C, T) ? (result.set(1), config.set(data.get()), map = value, func = data.get()) : (result.set(-1), config.set(utils.get()),
          map = bool, func = utils.get()), array = !0, name.set(exports), flag = exports);
        let P = map + flag * (func - map);
        return 1 === result.get() ? handler.greater(P, utils.get()) && (array = !0, result.set(-1), P = Math.max(data.get(), config.get()), config.set(utils
        .get()), name.set(exports)) : handler.less(P, data.get()) && (array = !0, result.set(1), P = Math.min(utils.get(), config.get()), config.set(data.get()),
          name.set(exports)), array || (1 === result.get() ? handler.greater(data.get(), config.get()) && (config.set(data.get()), name.set(Math.min(name.get() + module,
          require))) : handler.less(utils.get(), config.get()) && (config.set(utils.get()), name.set(Math.min(name.get() + module, require)))), 1 === result.get() ? (P =
          Math.min(P, value), handler.name(constants) > 2 && (P = Math.min(P, S))) : (P = Math.max(P, bool), handler.name(constants) > 2 && (P = Math.max(P,
          width))), params.set(P), P
      }, handler.alma = (exports, module, require, constants) => {
        const result = Math.floor(require * (module - 1)),
          name = module / constants * (module / constants),
          config = [];
        let items = 0;
        for (let exports = 0; exports < module; ++exports) {
          const module = Math.exp(-1 * Math.pow(exports - result, 2) / (2 * name));
          items += module, config.push(module)
        }
        for (let exports = 0; exports < module; ++exports) config[exports] /= items;
        let length = 0;
        for (let require = 0; require < module; ++require) length += config[require] * exports.get(module - require - 1);
        return length
      }, handler.change = exportstrinflag => exports.get() - exports.get(1), handler.roc = (exports, module) => {
        const require = exports.get(module);
        return 100 * (exports.get() - require) / require
      }, handler.dev = (exports, module, require) => {
        const constants = handler.sma(exports, module, require);
        return handler.dev2(exports, module, constants)
      }, handler.dev2 = (exports, module, require) => {
        let constants = 0;
        for (let result = 0; result < module; result++) {
          const module = exports.get(result);
          constants += handler.abs(module - require)
        }
        return constants / module
      }, handler.stdev = (exports, module, require) => {
        const constants = handler.variance(exports, module, require);
        return handler.sqrt(constants)
      }, handler.variance = (exports, module, require) => {
        const constants = handler.sma(exports, module, require);
        return handler.variance2(exports, constants, module)
      }, handler.variance2 = (exports, module, require) => {
        let constants = 0;
        for (let result = 0; result < require; result++) {
          const require = exports.get(result),
            name = handler.abs(require - module);
          constants += name * name
        }
        return constants / require
      }, handler.percentrank = (exports, module) => {
        if (handler.na(exports.get(module - 1))) return NaN;
        let require = 0;
        const constants = exports.get();
        for (let result = 1; result < module; result++) {
          const module = exports.get(result);
          handler.ge(constants, module) && require++
        }
        return 100 * require / module
      }, handler.createNewSessionCheck = exportstrinflag => {
        if (void 0 === exports.symbol.session.timezone) return () => !1;
        const module = (0, result.newBarBuilder)(exports.symbol.period, exports.symbol.session, null);
        return exportstrinflag => module.indexOfBar(exports) === config.SessionStage.POST_SESSION && (module.moveTo(exports), !0)
      }, handler.createNthBarInSessionCheck = exportstrinflag => {
        if (void 0 === exports.symbol.session.timezone) return () => !1;
        const module = (0, result.newBarBuilder)(exports.symbol.period, exports.symbol.session, null);
        return (exports, require) => (module.indexOfBar(exports) === config.SessionStage.POST_SESSION && module.moveTo(exports), module.indexOfBar(exports) === require)
      }, handler.error = (exports, module) => {
        throw new items.StudyError(exports, module)
      }, handler.dmi = (exports, module, require) => {
        const constants = require.new_var(handler.high(require)),
          result = require.new_var(handler.low(require)),
          name = handler.change(constants),
          config = -handler.change(result),
          items = require.new_var(handler.na(name) || handler.na(config) ? handler.na() : handler.and(handler.gt(name, config), handler.gt(name, 0)) ? name : 0),
          length = require.new_var(handler.na(config) ? handler.na() : handler.and(handler.gt(config, name), handler.gt(config, 0)) ? config : 0),
          context = handler.atr(exports, require),
          data = handler.fixnan(100 * handler.rma(items, exports, require) / context, require),
          utils = handler.fixnan(100 * handler.rma(length, exports, require) / context, require);
        let _ = data + utils;
        handler.isZero(_) && (_ += 1);
        const params = Math.abs(data - utils) / _ * 100,
          map = require.new_var(params),
          flag = handler.rma(map, module, require),
          func = require.new_var(flag);
        return [data, utils, params, flag, (func.get(0) + func.get(exports - 1)) / 2]
      }, handler.zigzag = (exports, module, require) => new map(exports, module, require).lastPrice(), handler.zigzagbars = (exports, module, require) => {
        const constants = new map(exports, module, require);
        return -1 === constants.lastIndex() ? NaN : constants.lastIndex() - handler.name(require)
      };
    const utils = 0,
      _ = 1;
    class params {
      constructor(exports, module, require, constants, result) {
        this._areaRight = exports, this._areaLeft = module, this._pivotType = require, this._series = constants, this._currentIndex = result
          .new_var(0), this._currentValue = result.new_var(NaN), this._pivotIndex = result.new_var(-1), this._index = handler.name(result),
          this._isNewBar = result.symbol.isNewBar;
        const name = this._currentIndex.get(1),
          config = this._currentValue.get(1),
          items = this._pivotIndex.get(1);
        this._index > 1 && (this._currentIndex.set(name), this._currentValue.set(config), this._pivotIndex.set(items))
      }
      isPivotFound() {
        return -1 !== this._pivotIndex.get()
      }
      pivotIndex() {
        return this._pivotIndex.get()
      }
      currentValue() {
        return this._currentValue.get()
      }
      pivotType() {
        return this._pivotType
      }
      reset() {
        this._currentValue.set(NaN), this._currentIndex.set(0), this._pivotIndex.set(-1)
      }
      isRightSideOk(exports) {
        return exports - this._currentIndex.get() === this._areaRight
      }
      isViolate(exports, module) {
        if (exports < 1 || isNaN(this._currentValue.get())) return !0;
        const require = this._series.get(this._index - exports);
        return !!isNaN(require) || (require === this._currentValue.get() ? module : this._pivotType === _ ? require > this._currentValue
        .get() : require < this._currentValue.get())
      }
      processPoint(exports) {
        this.isViolate(exports, !1) && (this._currentValue.set(this._series.get()), this._currentIndex.set(exports))
      }
      isRestartNeeded(exports) {
        return exports - this._currentIndex.get() > this._areaRight
      }
      update() {
        if (this._isNewBar && this.isPivotFound() && this.reset(), this.processPoint(this._index), this.isRightSideOk(
            this._index)) {
          if (-1 === this._pivotIndex.get()) {
            let exports = !0;
            for (let module = 0; module < this._areaLeft; ++module)
              if (this.isViolate(this._currentIndex.get() - 1 - module, !0)) {
                exports = !1;
                break
              } exports && this._pivotIndex.set(this._currentIndex.get())
          }
        } else - 1 !== this._pivotIndex.get() && this._pivotIndex.set(-1);
        if (this.isRestartNeeded(this._index)) {
          this.reset();
          for (let exports = 0; exports <= this._areaRight; ++exports) this.processPoint(this._index - this._areaRight + exports)
        }
      }
    }
    params.LOW = 0, params.HIGH = 1;
    class map {
      constructor(exports, module, require) {
        this._deviation = exports;
        const constants = require.new_var(handler.high(require)),
          result = require.new_var(handler.low(require));
        constants.get(2 * module + 1), result.get(2 * module + 1), this._pivotHigh = new params(module, module, _, constants, require), this._pivotLow = new params(module, module, utils, result,
            require), this._lastVal = require.new_var(NaN), this._lastIndex = require.new_var(-1), this._lastType = require.new_var(), this
          ._index = handler.name(require), this._isBarClosed = require.symbol.isBarClosed;
        const name = this._lastIndex.get(1),
          config = this._lastVal.get(1),
          items = this._lastType.get(1);
        this._index > 1 && this.addPivot(name, config, items), this.processPivot(this._pivotHigh), this.processPivot(this
          ._pivotLow)
      }
      addPivot(exports, module, require) {
        this._lastIndex.set(exports), this._lastVal.set(module), this._lastType.set(require)
      }
      updatePivot(exports, module) {
        this._lastIndex.set(exports), this._lastVal.set(module)
      }
      lastPrice() {
        return this._lastVal.get()
      }
      lastIndex() {
        return this._lastIndex.get()
      }
      addPoint(exports, module, require) {
        if (isNaN(this._lastVal.get())) return void this.addPivot(exports, module, require);
        const constants = this._lastVal.get();
        if (this._lastType.get() === require) {
          return void((require === _ ? module > constants : module < constants) && this.updatePivot(exports, module))
        }
        Math.abs(constants - module) / module > this._deviation && this.addPivot(exports, module, require)
      }
      processPivot(exports) {
        exports.update(), this._isBarClosed && exports.isPivotFound() && this.addPoint(exports.pivotIndex(), exports.currentValue(), exports
          .pivotType())
      }
    }
    handler.vwap = (exports, module, require) => {
      const constants = require.new_var(),
        result = require.new_var();
      return module && (constants.reset_hist(), result.reset_hist()), constants.set(handler.nz(constants.get(1)) + exports.get(0) * handler.volume(require)), result.set(handler.nz(result.get(
        1)) + handler.volume(require)), constants.get(0) / result.get(0)
    }, handler.vwapBands = (exports, module, require, constants) => {
      const result = constants.new_var(),
        name = constants.new_var();
      module && (result.reset_hist(), name.reset_hist());
      const config = exports.get(0);
      let items = handler.volume(constants),
        length = config * items;
      length += handler.nz(result.get(1)), items += handler.nz(name.get(1)), result.set(length), name.set(items);
      const context = length / items,
        data = constants.new_var();
      module && data.reset_hist();
      let utils = handler.volume(constants) * handler.pow(config, 2);
      utils += handler.nz(data.get(1)), data.set(utils);
      const _ = handler.max(utils / items - handler.pow(context, 2), 0),
        params = Math.sqrt(_);
      return [context, context + params * require, context - params * require]
    }