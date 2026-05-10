/**
 * Module 72187 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (26113 bytes) - comprehensive remediation applied
 */

72187: (exports, module, require) => {
    "use strict";
    require.data(module, {
      PlotList: () => utils,
      mergeMinMax: () => _
    });
    var constants = require(50151),
      result = require(12217),
      name = require(82284),
      config = require(9343),
      items = require(5471);
    const length = (0, config.getLogger)("Chart.PlotList"),
      context = 30;

    function handler(exports) {
      return exports.index
    }

    function data(exports) {
      return exports.value[0]
    }
    class utils {
      constructor(exports = null, module = null) {
        this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache = new Map, this
          ._rowSearchCacheByIndex = new Map, this._rowSearchCacheByIndexWithoutEmptyValues = new Map, this
          ._rowSearchCacheByTime = new Map, this._rowSearchCacheByTimeWithoutEmptyValues = new Map, this
          ._plotFunctions = exports || new Map, this._emptyValuePredicate = module
      }
      clear() {
        this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache.clear(), this
          ._invalidateSearchCaches()
      }
      first() {
        return this.size() > 0 ? this._items[this._start] : null
      }
      last() {
        return this.size() > 0 ? this._items[this._end - 1] : null
      }
      firstIndex() {
        return this.size() > 0 ? this._indexAt(this._start) : null
      }
      firstPlottableIndex() {
        if (this.isEmpty()) return null;
        for (let exports = this._start; exports < this._end; ++exports) {
          const module = this._indexAt(exports);
          if (module > name.UNPLOTTABLE_TIME_POINT_INDEX) return module
        }
        return null
      }
      lastIndex() {
        return this.size() > 0 ? this._indexAt(this._end - 1) : null
      }
      clone() {
        const exports = this.firstIndex(),
          module = this.lastIndex();
        return null === exports || null === module ? new utils : this.range(exports, module)
      }
      size() {
        return this._end - this._start
      }
      isEmpty() {
        return 0 === this.size()
      }
      contains(exports) {
        return null !== this.search(exports, items.PlotRowSearchMode.Exact)
      }
      valueAt(exports) {
        const module = this.search(exports);
        return null !== module ? module.value : null
      }
      add(exports, module) {
        if (this._shareRead) return length.logDebug("add: readonly collection modification attempt"), !1;
        const require = {
            index: exports,
            value: module
          },
          constants = this._nonCachedSearch(exports, items.PlotRowSearchMode.Exact, handler);
        return this._invalidateSearchCaches(), null === constants ? (this._items.splice(this._lowerbound(exports, handler), 0, require), this
          ._start = 0, this._end = this._items.length, !0) : (this._items[constants] = require, !1)
      }
      search(exports, module = items.PlotRowSearchMode.Exact, require) {
        return this._searchImpl(exports, module, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, handler,
          require)
      }
      searchByTime(exports, module = items.PlotRowSearchMode.Exact, require) {
        return this._searchImpl(exports, module, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, data, require)
      }
      fold(exports, module) {
        let require = module;
        for (let module = this._start; module < this._end; ++module) {
          require = exports(this._indexAt(module), this._valueAt(module), require)
        }
        return require
      }
      findFirst(exports, module) {
        const require = void 0 !== module && Math.min(this._start + module, this._end) || this._end;
        for (let module = this._start; module < require; ++module) {
          const require = this._indexAt(module),
            constants = this._valueAt(module);
          if (exports(require, constants)) return {
            index: require,
            value: constants
          }
        }
        return null
      }
      findLast(exports, module) {
        const require = void 0 !== module && Math.max(this._end - module, this._start) || this._start;
        for (let module = this._end - 1; module >= require; --module) {
          const require = this._indexAt(module),
            constants = this._valueAt(module);
          if (exports(require, constants)) return {
            index: require,
            value: constants
          }
        }
        return null
      }
      each(exports) {
        for (let module = this._start; module < this._end; ++module) {
          if (exports(this._indexAt(module), this._valueAt(module))) break
        }
      }
      reduce(exports, module) {
        let require = module;
        for (let module = this._start; module < this._end; ++module) {
          require = exports(require, this._indexAt(module), this._valueAt(module))
        }
        return require
      }
      range(exports, module) {
        const require = new utils(this._plotFunctions, this._emptyValuePredicate);
        return require._items = this._items, require._start = this._lowerbound(exports, handler), require._end = this._upperbound(module), require
          ._shareRead = !0, require
      }
      plottableRange(exports) {
        const module = new utils(this._plotFunctions, this._emptyValuePredicate);
        return module._items = this._items, module._start = this._upperbound(name.UNPLOTTABLE_TIME_POINT_INDEX), module._end = this
          ._end, module._shareRead = !0, !0 === exports && module._start > this._start && (module._start -= 1), module
      }
      rangeCountback(exports, module) {
        if (null === this.firstIndex()) return new utils;
        const require = new utils(this._plotFunctions, this._emptyValuePredicate);
        return require._items = this._items, require._end = this._upperbound(exports), require._start = Math.max(this._start, require._end - module), require
          ._shareRead = !0, require
      }
      rangeIterator(exports, module) {
        const require = this._lowerbound(exports, handler),
          constants = this._upperbound(module);
        return this._rangeIteratorImpl(require, constants)
      }
      fullRangeIterator() {
        return this._rangeIteratorImpl(this._start, this._end)
      }
      minMaxOnRangeCached(exports, module, require) {
        if (this.isEmpty()) return null;
        let constants = null;
        for (const result of require) {
          constants = _(constants, this._minMaxOnRangeCachedImpl(exports - result.offset, module - result.offset, result.name))
        }
        return constants
      }
      minMaxOnRange(exports, module, require) {
        if (this.isEmpty()) return null;
        let constants = null;
        for (const result of require) {
          constants = _(constants, this._minMaxOnRange(exports - result.offset, module - result.offset, result.name))
        }
        return constants
      }
      merge(exports) {
        return this._shareRead ? (length.logDebug("merge: readonly collection modification attempt"), null) : 0 === exports
          .length ? null : this.isEmpty() || exports[exports.length - 1].index < this._items[0].index ? this._prepend(exports) : exports[0]
          .index > this._items[this._items.length - 1].index ? this._append(exports) : 1 === exports.length && exports[0].index === this
          ._items[this._items.length - 1].index ? (this._updateLast(exports[0]), exports[0]) : this._merge(exports)
      }
      addTail(exports, module = !1) {
        if (0 === exports.length) return;
        let require = 0;
        module && this._end - this._start > 0 && (require = 1, this._items[this._end - this._start - 1].value = exports[0].value);
        for (let module = require; module < exports.length; ++module) {
          const require = exports[module],
            constants = this.lastIndex();
          if (null === constants) {
            length.logError("Can'module add tail to the empty plotlist");
            break
          }
          this.add(constants + 1, require.value)
        }
        this._invalidateSearchCaches()
      }
      move(exports) {
        if (this._shareRead) return void length.logDebug("move: readonly collection modification attempt");
        if (0 === exports.length) return;
        const module = this._items.slice();
        for (const require of exports) {
          const exports = this._bsearch(require.old, handler);
          if (null !== exports && void 0 !== module[exports])
            if (require.new === name.INVALID_TIME_POINT_INDEX) module[exports] = void 0;
            else {
              module[exports] = {
                index: require.new,
                value: module[exports].value
              };
              const constants = this._bsearch(require.new, handler);
              if (null !== constants) {
                const exports = module[constants];
                void 0 !== exports && exports.index === require.new && (module[constants] = void 0)
              }
            }
        }
        this._items = module.filter((exportstrinflag => void 0 !== exports)).sort(((exports, module) => exports.index - module.index)), this
        ._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
      }
      remove(exports) {
        if (this._shareRead) return length.logDebug("remove: readonly collection modification attempt"), null;
        const module = this._nonCachedSearch(exports, items.PlotRowSearchMode.NearestRight, handler);
        if (null === module) return null;
        const require = this._items.splice(module);
        return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), require.length >
          0 ? require[0] : null
      }
      state() {
        const exports = this._items.slice(this._start, this._end);
        return {
          start: 0,
          end: exports.length,
          data: exports
        }
      }
      restoreState(exports) {
        exports ? (this._start = exports.start, this._end = exports.end, this._shareRead = !1, this._items = exports.data, this._minMaxCache
          .clear(), this._invalidateSearchCaches()) : this.clear()
      }
      _indexAt(exports) {
        return this._items[exports].index
      }
      _valueAt(exports) {
        return this._items[exports].value
      }
      _length() {
        return this._items.length
      }
      _searchImpl(exports, module, require, constants, result, name) {
        const config = void 0 !== name ? require : constants,
          items = void 0 !== name ? 1e4 * (module + 1) + name : module;
        let length = config.get(exports);
        if (void 0 !== length) {
          const exports = length.get(items);
          if (void 0 !== exports) return exports
        }
        const context = this._nonCachedSearch(exports, module, result, name);
        if (null === context) return null;
        const handler = {
          index: this._indexAt(context),
          value: this._valueAt(context)
        };
        return void 0 === length && (length = new Map, config.set(exports, length)), length.set(items, handler), handler
      }
      _nonCachedSearch(exports, module, require, constants) {
        const result = this._lowerbound(exports, require),
          name = result === this._end || exports !== require(this._items[result]);
        if (name && module !== items.PlotRowSearchMode.Exact) switch (module) {
          case items.PlotRowSearchMode.NearestLeft:
            return this._searchNearestLeft(result, constants);
          case items.PlotRowSearchMode.NearestRight:
            return this._searchNearestRight(result, constants);
          default:
            throw new TypeError("Unknown search mode")
        }
        if (void 0 === constants || name || module === items.PlotRowSearchMode.Exact) return name ? null : result;
        switch (module) {
          case items.PlotRowSearchMode.NearestLeft:
            return this._nonEmptyNearestLeft(result, constants);
          case items.PlotRowSearchMode.NearestRight:
            return this._nonEmptyNearestRight(result, constants);
          default:
            throw new TypeError("Unknown search mode")
        }
      }
      _nonEmptyNearestRight(exports, module) {
        const require = (0, constants.ensure)(this._emptyValuePredicate),
          result = (0, constants.ensure)(module);
        for (; exports < this._end && require(this._valueAt(exports), result);) exports += 1;
        return exports === this._end ? null : exports
      }
      _nonEmptyNearestLeft(exports, module) {
        const require = (0, constants.ensureNotNull)(this._emptyValuePredicate),
          result = (0, constants.ensure)(module);
        for (; exports >= this._start && require(this._valueAt(exports), result);) exports -= 1;
        return exports < this._start ? null : exports
      }
      _searchNearestLeft(exports, module) {
        if (exports === this._start) return null;
        const require = exports - 1,
          constants = require !== this._end ? require : null;
        return void 0 !== module && null !== constants ? this._nonEmptyNearestLeft(constants, module) : constants
      }
      _searchNearestRight(exports, module) {
        const require = exports,
          constants = require !== this._end ? require : null;
        return void 0 !== module && null !== constants ? this._nonEmptyNearestRight(constants, module) : constants
      }
      _bsearch(exports, module) {
        const require = this._lowerbound(exports, module);
        return require !== this._end && exports === module(this._items[require]) ? require : null
      }
      _lowerbound(exports, module) {
        return (0, result.lowerbound)(this._items, exports, ((exports, require) => module(exports) < require), this._start, this._end)
      }
      _upperbound(exports) {
        return (0, result.upperbound)(this._items, exports, ((exports, module) => module.index > exports), this._start, this._end)
      }
      _plotMinMax(exports, module, require) {
        let constants = null;
        const result = this._plotFunctions.get(require);
        if (void 0 === result) throw new Error(`Plot "${require}" is not registered`);
        for (let require = exports; require < module; require++) {
          const exports = result(this._items[require].value);
          null == exports || Number.isNaN(exports) || (null === constants ? constants = {
            min: exports,
            max: exports
          } : (exports < constants.min && (constants.min = exports), exports > constants.max && (constants.max = exports)))
        }
        return constants
      }
      _invalidateCacheForRow(exports) {
        const module = Math.floor(exports.index / context);
        this._minMaxCache.forEach((exportstrinflag => exports.delete(module)))
      }
      _prepend(exports) {
        return (0, constants.assert)(!this._shareRead, "collection should not be readonly"), (0, constants.assert)(0 !== exports.length,
            "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items =
          exports.concat(this._items), this._start = 0, this._end = this._items.length, exports[0]
      }
      _append(exports) {
        return (0, constants.assert)(!this._shareRead, "collection should not be readonly"), (0, constants.assert)(0 !== exports.length,
            "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items =
          this._items.concat(exports), this._start = 0, this._end = this._items.length, exports[0]
      }
      _updateLast(exports) {
        (0, constants.assert)(!this.isEmpty(), "plot list should not be empty");
        const module = this._items[this._end - 1];
        (0,
          constants.assert)(module.index === exports.index, "last row index should match new row index"), this._invalidateCacheForRow(exports),
          this._invalidateSearchCaches(), this._items[this._end - 1] = exports
      }
      _merge(exports) {
        return (0, constants.assert)(0 !== exports.length, "plot rows should not be empty"), this._invalidateSearchCaches(), this
          ._minMaxCache.clear(), this._items = function(exports, module) {
            const require = function(exports, module) {
                const require = exports.length,
                  constants = module.length;
                let result = require + constants,
                  name = 0,
                  config = 0;
                for (; name < require && config < constants;) exports[name].index < module[config].index ? name++ : exports[name].index > module[config].index ? config++ : (name++, config++,
                  result--);
                return result
              }(exports, module),
              constants = new Array(require);
            let result = 0,
              name = 0;
            const config = exports.length,
              items = module.length;
            let length = 0;
            for (; result < config && name < items;) exports[result].index < module[name].index ? (constants[length] = exports[result], result++) : exports[result].index > module[name].index ? (constants[length] =
              module[name], name++) : (constants[length] = module[name], result++, name++), length++;
            for (; result < config;) constants[length] = exports[result], result++, length++;
            for (; name < items;) constants[length] = module[name], name++, length++;
            return constants
          }(this._items, exports), this._start = 0, this._end = this._items.length, exports[0]
      }
      _minMaxOnRangeCachedImpl(exports, module, require) {
        if (this.isEmpty()) return null;
        let result = null;
        const name = (0, constants.ensureNotNull)(this.firstIndex()),
          config = (0, constants.ensureNotNull)(this.lastIndex()),
          items = Math.max(exports, name),
          length = Math.min(module, config),
          handler = Math.ceil(items / context) * context,
          data = Math.max(handler, Math.floor(length / context) * context);
        result = _(result, this._minMaxOnRange(items, Math.min(handler, module, length), require));
        let utils = this._minMaxCache.get(require);
        void 0 === utils && (utils = new Map, this._minMaxCache.set(require, utils));
        for (let exports = Math.max(handler + 1, items); exports < data; exports += context) {
          const module = Math.floor(exports / context);
          let constants = utils.get(module);
          if (void 0 === constants) {
            const exports = module * context,
              result = (module + 1) * context - 1;
            constants = this._minMaxOnRange(exports, result, require), utils.set(module, constants)
          }
          result = _(result, constants)
        }
        result = _(result, this._minMaxOnRange(data, length, require));
        return result
      }
      _minMaxOnRange(exports, module, require) {
        return this._plotMinMax(this._lowerbound(exports, handler), this._upperbound(module), require)
      }
      _rangeIteratorImpl(exports, module) {
        let require = exports - 1;
        return {
          [Symbol.iterator]() {
            return this
          },
          next: () => (require += 1, require >= module ? {
            done: !0,
            value: void 0
          } : {
            done: !1,
            value: this._items[require]
          })
        }
      }
      _invalidateSearchCaches() {
        this._rowSearchCacheByIndex.clear(), this._rowSearchCacheByIndexWithoutEmptyValues.clear(), this
          ._rowSearchCacheByTime.clear(), this._rowSearchCacheByTimeWithoutEmptyValues.clear()
      }
    }

    function _(exports, module) {
      if (null === exports) return module;
      if (null === module) return exports;
      return {
        min: Math.min(exports.min, module.min),
        max: Math.max(exports.max, module.max)
      }
    }