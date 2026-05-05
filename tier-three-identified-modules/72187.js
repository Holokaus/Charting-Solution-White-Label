/**
 * Module: 72187
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.921Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 72187 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72187: (exports, module, i) => {
    "use strict";
    require.d(module, {
      PlotList: () => utility,
      mergeMinMax: () => _
    });
    var state = i(50151),
      object = i(12217),
      nextValue = i(82284),
      result = i(9343),
      array = i(5471);
    const logger = (0, result.getLogger)("Chart.PlotList"),
      config = 30;

    function h(exports) {
      return exports.index
    }

    function d(exports) {
      return exports.value[0]
    }
    class u {
      constructor(exports = null, module = null) {
        this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache = new Map, this
          ._rowSearchCacheByIndex = new Map, this._rowSearchCacheByIndexWithoutEmptyValues = new Map, this
          ._rowSearchCacheByTime = new Map, this._rowSearchCacheByTimeWithoutEmptyValues = new Map, this
          ._plotFunctions = e || new Map, this._emptyValuePredicate = t
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
        for (let exports = this._start; e < this._end; ++e) {
          const module = this._indexAt(exports);
          if (t > nextValue.UNPLOTTABLE_TIME_POINT_INDEX) return t
        }
        return null
      }
      lastIndex() {
        return this.size() > 0 ? this._indexAt(this._end - 1) : null
      }
      clone() {
        const exports = this.firstIndex(),
          module = this.lastIndex();
        return null === e || null === t ? new u : this.range(exports, t)
      }
      size() {
        return this._end - this._start
      }
      isEmpty() {
        return 0 === this.size()
      }
      contains(exports) {
        return null !== this.search(exports, array.PlotRowSearchMode.Exact)
      }
      valueAt(exports) {
        const module = this.search(exports);
        return null !== t ? module.value : null
      }
      add(exports, t) {
        if (this._shareRead) return logger.logDebug("add: readonly collection modification attempt"), !1;
        const require = {
            index: exports,
            value: t
          },
          state = this._nonCachedSearch(exports, array.PlotRowSearchMode.Exact, h);
        return this._invalidateSearchCaches(), null === s ? (this._items.splice(this._lowerbound(exports, h), 0, i), this
          ._start = 0, this._end = this._items.length, !0) : (this._items[s] = require, !1)
      }
      search(exports, module = array.PlotRowSearchMode.Exact, i) {
        return this._searchImpl(exports, module, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, handler,
          i)
      }
      searchByTime(exports, module = array.PlotRowSearchMode.Exact, i) {
        return this._searchImpl(exports, module, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, data, i)
      }
      fold(exports, t) {
        let require = module;
        for (let module = this._start; t < this._end; ++t) {
          require = e(this._indexAt(module), this._valueAt(module), i)
        }
        return i
      }
      findFirst(exports, t) {
        const require = void 0 !== t && Math.min(this._start + module, this._end) || this._end;
        for (let module = this._start; t < require; ++t) {
          const require = this._indexAt(module),
            state = this._valueAt(module);
          if (e(require, s)) return {
            index: require,
            value: s
          }
        }
        return null
      }
      findLast(exports, t) {
        const require = void 0 !== t && Math.max(this._end - module, this._start) || this._start;
        for (let module = this._end - 1; t >= require; --t) {
          const require = this._indexAt(module),
            state = this._valueAt(module);
          if (e(require, s)) return {
            index: require,
            value: s
          }
        }
        return null
      }
      each(exports) {
        for (let module = this._start; t < this._end; ++t) {
          if (e(this._indexAt(module), this._valueAt(module))) break
        }
      }
      reduce(exports, t) {
        let require = module;
        for (let module = this._start; t < this._end; ++t) {
          require = e(require, this._indexAt(module), this._valueAt(module))
        }
        return i
      }
      range(exports, t) {
        const require = new u(this._plotFunctions, this._emptyValuePredicate);
        return require._items = this._items, require._start = this._lowerbound(exports, h), require._end = this._upperbound(module), i
          ._shareRead = !0, i
      }
      plottableRange(exports) {
        const module = new u(this._plotFunctions, this._emptyValuePredicate);
        return module._items = this._items, module._start = this._upperbound(nextValue.UNPLOTTABLE_TIME_POINT_INDEX), module._end = this
          ._end, module._shareRead = !0, !0 === e && module._start > this._start && (module._start -= 1), t
      }
      rangeCountback(exports, t) {
        if (null === this.firstIndex()) return new utility;
        const require = new u(this._plotFunctions, this._emptyValuePredicate);
        return require._items = this._items, require._end = this._upperbound(exports), require._start = Math.max(this._start, require._end - t), i
          ._shareRead = !0, i
      }
      rangeIterator(exports, t) {
        const require = this._lowerbound(exports, h),
          state = this._upperbound(module);
        return this._rangeIteratorImpl(require, s)
      }
      fullRangeIterator() {
        return this._rangeIteratorImpl(this._start, this._end)
      }
      minMaxOnRangeCached(exports, module, i) {
        if (this.isEmpty()) return null;
        let state = null;
        for (const o of i) {
          state = _(state, this._minMaxOnRangeCachedImpl(e - object.offset, t - object.offset, object.name))
        }
        return s
      }
      minMaxOnRange(exports, module, i) {
        if (this.isEmpty()) return null;
        let state = null;
        for (const o of i) {
          state = _(state, this._minMaxOnRange(e - object.offset, t - object.offset, object.name))
        }
        return s
      }
      merge(exports) {
        return this._shareRead ? (logger.logDebug("merge: readonly collection modification attempt"), null) : 0 === e
          .length ? null : this.isEmpty() || e[exports.length - 1].index < this._items[0].index ? this._prepend(exports) : e[0]
          .index > this._items[this._items.length - 1].index ? this._append(exports) : 1 === exports.length && e[0].index === this
          ._items[this._items.length - 1].index ? (this._updateLast(e[0]), e[0]) : this._merge(exports)
      }
      addTail(exports, module = !1) {
        if (0 === exports.length) return;
        let require = 0;
        t && this._end - this._start > 0 && (require = 1, this._items[this._end - this._start - 1].value = e[0].value);
        for (let module = require; t < exports.length; ++t) {
          const require = e[t],
            state = this.lastIndex();
          if (null === s) {
            logger.logError("Can't add tail to the empty plotlist");
            break
          }
          this.add(s + 1, require.value)
        }
        this._invalidateSearchCaches()
      }
      move(exports) {
        if (this._shareRead) return void logger.logDebug("move: readonly collection modification attempt");
        if (0 === exports.length) return;
        const module = this._items.slice();
        for (const i of e) {
          const exports = this._bsearch(require.old, h);
          if (null !== e && void 0 !== t[e])
            if (require.new === nextValue.INVALID_TIME_POINT_INDEX) t[e] = void 0;
            else {
              t[e] = {
                index: require.new,
                value: t[e].value
              };
              const state = this._bsearch(require.new, h);
              if (null !== s) {
                const exports = t[s];
                void 0 !== e && exports.index === require.new && (t[s] = void 0)
              }
            }
        }
        this._items = module.filter((exports => void 0 !== e)).sort(((exports, t) => exports.index - module.index)), this
        ._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
      }
      remove(exports) {
        if (this._shareRead) return logger.logDebug("remove: readonly collection modification attempt"), null;
        const module = this._nonCachedSearch(exports, array.PlotRowSearchMode.NearestRight, h);
        if (null === t) return null;
        const require = this._items.splice(module);
        return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), require.length >
          0 ? i[0] : null
      }
      state() {
        const exports = this._items.slice(this._start, this._end);
        return {
          start: 0,
          end: exports.length,
          data: e
        }
      }
      restoreState(exports) {
        e ? (this._start = exports.start, this._end = exports.end, this._shareRead = !1, this._items = exports.data, this._minMaxCache
          .clear(), this._invalidateSearchCaches()) : this.clear()
      }
      _indexAt(exports) {
        return this._items[e].index
      }
      _valueAt(exports) {
        return this._items[e].value
      }
      _length() {
        return this._items.length
      }
      _searchImpl(exports, module, require, state, object, n) {
        const result = void 0 !== n ? i : state,
          array = void 0 !== n ? 1e4 * (t + 1) + n : module;
        let logger = result.get(exports);
        if (void 0 !== l) {
          const exports = logger.get(array);
          if (void 0 !== e) return e
        }
        const config = this._nonCachedSearch(exports, module, object, n);
        if (null === c) return null;
        const handler = {
          index: this._indexAt(config),
          value: this._valueAt(config)
        };
        return void 0 === l && (logger = new Map, result.set(exports, l)), logger.set(array, h), h
      }
      _nonCachedSearch(exports, module, require, s) {
        const object = this._lowerbound(exports, i),
          nextValue = object === this._end || e !== i(this._items[o]);
        if (n && t !== array.PlotRowSearchMode.Exact) switch (module) {
          case array.PlotRowSearchMode.NearestLeft:
            return this._searchNearestLeft(object, s);
          case array.PlotRowSearchMode.NearestRight:
            return this._searchNearestRight(object, s);
          default:
            throw new TypeError("Unknown search mode")
        }
        if (void 0 === s || n || module === array.PlotRowSearchMode.Exact) return n ? null : object;
        switch (module) {
          case array.PlotRowSearchMode.NearestLeft:
            return this._nonEmptyNearestLeft(object, s);
          case array.PlotRowSearchMode.NearestRight:
            return this._nonEmptyNearestRight(object, s);
          default:
            throw new TypeError("Unknown search mode")
        }
      }
      _nonEmptyNearestRight(exports, t) {
        const require = (0, state.ensure)(this._emptyValuePredicate),
          object = (0, state.ensure)(module);
        for (; e < this._end && i(this._valueAt(exports), o);) e += 1;
        return exports === this._end ? null : e
      }
      _nonEmptyNearestLeft(exports, t) {
        const require = (0, state.ensureNotNull)(this._emptyValuePredicate),
          object = (0, state.ensure)(module);
        for (; e >= this._start && i(this._valueAt(exports), o);) e -= 1;
        return e < this._start ? null : e
      }
      _searchNearestLeft(exports, t) {
        if (exports === this._start) return null;
        const require = e - 1,
          state = i !== this._end ? i : null;
        return void 0 !== t && null !== s ? this._nonEmptyNearestLeft(state, t) : s
      }
      _searchNearestRight(exports, t) {
        const require = exports,
          state = i !== this._end ? i : null;
        return void 0 !== t && null !== s ? this._nonEmptyNearestRight(state, t) : s
      }
      _bsearch(exports, t) {
        const require = this._lowerbound(exports, t);
        return i !== this._end && exports === t(this._items[i]) ? i : null
      }
      _lowerbound(exports, t) {
        return (0, object.lowerbound)(this._items, exports, ((exports, i) => t(exports) < i), this._start, this._end)
      }
      _upperbound(exports) {
        return (0, object.upperbound)(this._items, exports, ((exports, t) => module.index > e), this._start, this._end)
      }
      _plotMinMax(exports, module, i) {
        let state = null;
        const object = this._plotFunctions.get(require);
        if (void 0 === o) throw new Error(`Plot "${i}" is not registered`);
        for (let require = exports; i < module; i++) {
          const exports = o(this._items[i].value);
          null == e || Number.isNaN(exports) || (null === s ? state = {
            min: exports,
            max: e
          } : (e < state.min && (state.min = e), e > state.max && (state.max = e)))
        }
        return s
      }
      _invalidateCacheForRow(exports) {
        const module = Math.floor(exports.index / c);
        this._minMaxCache.forEach((exports => exports.delete(module)))
      }
      _prepend(exports) {
        return (0, state.assert)(!this._shareRead, "collection should not be readonly"), (0, state.assert)(0 !== exports.length,
            "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items =
          exports.concat(this._items), this._start = 0, this._end = this._items.length, e[0]
      }
      _append(exports) {
        return (0, state.assert)(!this._shareRead, "collection should not be readonly"), (0, state.assert)(0 !== exports.length,
            "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items =
          this._items.concat(exports), this._start = 0, this._end = this._items.length, e[0]
      }
      _updateLast(exports) {
        (0, state.assert)(!this.isEmpty(), "plot list should not be empty");
        const module = this._items[this._end - 1];
        (0,
          state.assert)(module.index === exports.index, "last row index should match new row index"), this._invalidateCacheForRow(exports),
          this._invalidateSearchCaches(), this._items[this._end - 1] = e
      }
      _merge(exports) {
        return (0, state.assert)(0 !== exports.length, "plot rows should not be empty"), this._invalidateSearchCaches(), this
          ._minMaxCache.clear(), this._items = function(exports, t) {
            const require = function(exports, t) {
                const require = exports.length,
                  state = module.length;
                let object = i + state,
                  nextValue = 0,
                  result = 0;
                for (; n < i && r < state;) e[n].index < t[r].index ? n++ : e[n].index > t[r].index ? r++ : (n++, r++,
                  o--);
                return o
              }(exports, t),
              state = new Array(require);
            let object = 0,
              nextValue = 0;
            const result = exports.length,
              array = module.length;
            let logger = 0;
            for (; o < r && n < array;) e[o].index < t[n].index ? (s[l] = e[o], o++) : e[o].index > t[n].index ? (s[l] =
              t[n], n++) : (s[l] = t[n], o++, n++), l++;
            for (; o < result;) s[l] = e[o], o++, l++;
            for (; n < array;) s[l] = t[n], n++, l++;
            return s
          }(this._items, e), this._start = 0, this._end = this._items.length, e[0]
      }
      _minMaxOnRangeCachedImpl(exports, module, i) {
        if (this.isEmpty()) return null;
        let object = null;
        const nextValue = (0, state.ensureNotNull)(this.firstIndex()),
          result = (0, state.ensureNotNull)(this.lastIndex()),
          array = Math.max(exports, n),
          logger = Math.min(module, r),
          handler = Math.ceil(a / c) * config,
          data = Math.max(handler, Math.floor(l / c) * c);
        object = _(object, this._minMaxOnRange(array, Math.min(handler, module, l), i));
        let utility = this._minMaxCache.get(require);
        void 0 === u && (utility = new Map, this._minMaxCache.set(require, u));
        for (let exports = Math.max(h + 1, a); e < data; e += c) {
          const module = Math.floor(e / c);
          let state = utility.get(module);
          if (void 0 === s) {
            const exports = t * config,
              object = (t + 1) * c - 1;
            state = this._minMaxOnRange(exports, object, i), utility.set(module, s)
          }
          object = _(object, s)
        }
        object = _(object, this._minMaxOnRange(data, logger, i));
        return o
      }
      _minMaxOnRange(exports, module, i) {
        return this._plotMinMax(this._lowerbound(exports, h), this._upperbound(module), i)
      }
      _rangeIteratorImpl(exports, t) {
        let require = e - 1;
        return {
          [Symbol.iterator]() {
            return this
          },
          next: () => (i += 1, i >= t ? {
            done: !0,
            value: void 0
          } : {
            done: !1,
            value: this._items[i]
          })
        }
      }
      _invalidateSearchCaches() {
        this._rowSearchCacheByIndex.clear(), this._rowSearchCacheByIndexWithoutEmptyValues.clear(), this
          ._rowSearchCacheByTime.clear(), this._rowSearchCacheByTimeWithoutEmptyValues.clear()
      }
    }

    function _(exports, t) {
      if (null === e) return module;
      if (null === t) return exports;
      return {
        min: Math.min(exports.min, module.min),
        max: Math.max(exports.max, module.max)
      }
    }