/**
 * Module 72187 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72187: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      PlotList: () => watchedValue_u,
      mergeMinMax: () => _
    });
    var watchedValue_s = watchedValue_i(50151),
      watchedValue_o = watchedValue_i(12217),
      watchedValue_n = watchedValue_i(82284),
      watchedValue_r = watchedValue_i(9343),
      watchedValue_a = watchedValue_i(5471);
    const watchedValue_l = (0, watchedValue_r.getLogger)("Chart.PlotList"),
      watchedValue_c = 30;

    function watchedValue_h(watchedValue_e) {
      return watchedValue_e.index
    }

    function watchedValue_d(watchedValue_e) {
      return watchedValue_e.value[0]
    }
    class watchedValue_u {
      constructor(watchedValue_e = null, watchedValue_t = null) {
        this._items = [], this._start = 0, this._end = 0, this._shareRead = !1, this._minMaxCache = new Map, this
          ._rowSearchCacheByIndex = new Map, this._rowSearchCacheByIndexWithoutEmptyValues = new Map, this
          ._rowSearchCacheByTime = new Map, this._rowSearchCacheByTimeWithoutEmptyValues = new Map, this
          ._plotFunctions = watchedValue_e || new Map, this._emptyValuePredicate = watchedValue_t
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
        for (let watchedValue_e = this._start; watchedValue_e < this._end; ++watchedValue_e) {
          const watchedValue_t = this._indexAt(watchedValue_e);
          if (watchedValue_t > watchedValue_n.UNPLOTTABLE_TIME_POINT_INDEX) return watchedValue_t
        }
        return null
      }
      lastIndex() {
        return this.size() > 0 ? this._indexAt(this._end - 1) : null
      }
      clone() {
        const watchedValue_e = this.firstIndex(),
          watchedValue_t = this.lastIndex();
        return null === watchedValue_e || null === watchedValue_t ? new watchedValue_u : this.range(watchedValue_e, watchedValue_t)
      }
      size() {
        return this._end - this._start
      }
      isEmpty() {
        return 0 === this.size()
      }
      contains(watchedValue_e) {
        return null !== this.search(watchedValue_e, watchedValue_a.PlotRowSearchMode.Exact)
      }
      valueAt(watchedValue_e) {
        const watchedValue_t = this.search(watchedValue_e);
        return null !== watchedValue_t ? watchedValue_t.value : null
      }
      add(watchedValue_e, watchedValue_t) {
        if (this._shareRead) return watchedValue_l.logDebug("add: readonly collection modification attempt"), !1;
        const watchedValue_i = {
            index: watchedValue_e,
            value: watchedValue_t
          },
          watchedValue_s = this._nonCachedSearch(watchedValue_e, watchedValue_a.PlotRowSearchMode.Exact, watchedValue_h);
        return this._invalidateSearchCaches(), null === watchedValue_s ? (this._items.splice(this._lowerbound(watchedValue_e, watchedValue_h), 0, watchedValue_i), this
          ._start = 0, this._end = this._items.length, !0) : (this._items[watchedValue_s] = watchedValue_i, !1)
      }
      search(watchedValue_e, watchedValue_t = watchedValue_a.PlotRowSearchMode.Exact, watchedValue_i) {
        return this._searchImpl(watchedValue_e, watchedValue_t, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, watchedValue_h,
          watchedValue_i)
      }
      searchByTime(watchedValue_e, watchedValue_t = watchedValue_a.PlotRowSearchMode.Exact, watchedValue_i) {
        return this._searchImpl(watchedValue_e, watchedValue_t, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, watchedValue_d, watchedValue_i)
      }
      fold(watchedValue_e, watchedValue_t) {
        let watchedValue_i = watchedValue_t;
        for (let watchedValue_t = this._start; watchedValue_t < this._end; ++watchedValue_t) {
          watchedValue_i = watchedValue_e(this._indexAt(watchedValue_t), this._valueAt(watchedValue_t), watchedValue_i)
        }
        return watchedValue_i
      }
      findFirst(watchedValue_e, watchedValue_t) {
        const watchedValue_i = void 0 !== watchedValue_t && Math.min(this._start + watchedValue_t, this._end) || this._end;
        for (let watchedValue_t = this._start; watchedValue_t < watchedValue_i; ++watchedValue_t) {
          const watchedValue_i = this._indexAt(watchedValue_t),
            watchedValue_s = this._valueAt(watchedValue_t);
          if (watchedValue_e(watchedValue_i, watchedValue_s)) return {
            index: watchedValue_i,
            value: watchedValue_s
          }
        }
        return null
      }
      findLast(watchedValue_e, watchedValue_t) {
        const watchedValue_i = void 0 !== watchedValue_t && Math.max(this._end - watchedValue_t, this._start) || this._start;
        for (let watchedValue_t = this._end - 1; watchedValue_t >= watchedValue_i; --watchedValue_t) {
          const watchedValue_i = this._indexAt(watchedValue_t),
            watchedValue_s = this._valueAt(watchedValue_t);
          if (watchedValue_e(watchedValue_i, watchedValue_s)) return {
            index: watchedValue_i,
            value: watchedValue_s
          }
        }
        return null
      }
      each(watchedValue_e) {
        for (let watchedValue_t = this._start; watchedValue_t < this._end; ++watchedValue_t) {
          if (watchedValue_e(this._indexAt(watchedValue_t), this._valueAt(watchedValue_t))) break
        }
      }
      reduce(watchedValue_e, watchedValue_t) {
        let watchedValue_i = watchedValue_t;
        for (let watchedValue_t = this._start; watchedValue_t < this._end; ++watchedValue_t) {
          watchedValue_i = watchedValue_e(watchedValue_i, this._indexAt(watchedValue_t), this._valueAt(watchedValue_t))
        }
        return watchedValue_i
      }
      range(watchedValue_e, watchedValue_t) {
        const watchedValue_i = new watchedValue_u(this._plotFunctions, this._emptyValuePredicate);
        return watchedValue_i._items = this._items, watchedValue_i._start = this._lowerbound(watchedValue_e, watchedValue_h), watchedValue_i._end = this._upperbound(watchedValue_t), watchedValue_i
          ._shareRead = !0, watchedValue_i
      }
      plottableRange(watchedValue_e) {
        const watchedValue_t = new watchedValue_u(this._plotFunctions, this._emptyValuePredicate);
        return watchedValue_t._items = this._items, watchedValue_t._start = this._upperbound(watchedValue_n.UNPLOTTABLE_TIME_POINT_INDEX), watchedValue_t._end = this
          ._end, watchedValue_t._shareRead = !0, !0 === watchedValue_e && watchedValue_t._start > this._start && (watchedValue_t._start -= 1), watchedValue_t
      }
      rangeCountback(watchedValue_e, watchedValue_t) {
        if (null === this.firstIndex()) return new watchedValue_u;
        const watchedValue_i = new watchedValue_u(this._plotFunctions, this._emptyValuePredicate);
        return watchedValue_i._items = this._items, watchedValue_i._end = this._upperbound(watchedValue_e), watchedValue_i._start = Math.max(this._start, watchedValue_i._end - watchedValue_t), watchedValue_i
          ._shareRead = !0, watchedValue_i
      }
      rangeIterator(watchedValue_e, watchedValue_t) {
        const watchedValue_i = this._lowerbound(watchedValue_e, watchedValue_h),
          watchedValue_s = this._upperbound(watchedValue_t);
        return this._rangeIteratorImpl(watchedValue_i, watchedValue_s)
      }
      fullRangeIterator() {
        return this._rangeIteratorImpl(this._start, this._end)
      }
      minMaxOnRangeCached(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (this.isEmpty()) return null;
        let watchedValue_s = null;
        for (const watchedValue_o of watchedValue_i) {
          watchedValue_s = _(watchedValue_s, this._minMaxOnRangeCachedImpl(watchedValue_e - watchedValue_o.offset, watchedValue_t - watchedValue_o.offset, watchedValue_o.name))
        }
        return watchedValue_s
      }
      minMaxOnRange(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (this.isEmpty()) return null;
        let watchedValue_s = null;
        for (const watchedValue_o of watchedValue_i) {
          watchedValue_s = _(watchedValue_s, this._minMaxOnRange(watchedValue_e - watchedValue_o.offset, watchedValue_t - watchedValue_o.offset, watchedValue_o.name))
        }
        return watchedValue_s
      }
      merge(watchedValue_e) {
        return this._shareRead ? (watchedValue_l.logDebug("merge: readonly collection modification attempt"), null) : 0 === watchedValue_e
          .length ? null : this.isEmpty() || watchedValue_e[watchedValue_e.length - 1].index < this._items[0].index ? this._prepend(watchedValue_e) : watchedValue_e[0]
          .index > this._items[this._items.length - 1].index ? this._append(watchedValue_e) : 1 === watchedValue_e.length && watchedValue_e[0].index === this
          ._items[this._items.length - 1].index ? (this._updateLast(watchedValue_e[0]), watchedValue_e[0]) : this._merge(watchedValue_e)
      }
      addTail(watchedValue_e, watchedValue_t = !1) {
        if (0 === watchedValue_e.length) return;
        let watchedValue_i = 0;
        watchedValue_t && this._end - this._start > 0 && (watchedValue_i = 1, this._items[this._end - this._start - 1].value = watchedValue_e[0].value);
        for (let watchedValue_t = watchedValue_i; watchedValue_t < watchedValue_e.length; ++watchedValue_t) {
          const watchedValue_i = watchedValue_e[watchedValue_t],
            watchedValue_s = this.lastIndex();
          if (null === watchedValue_s) {
            watchedValue_l.logError("Can'watchedValue_t add tail to the empty plotlist");
            break
          }
          this.add(watchedValue_s + 1, watchedValue_i.value)
        }
        this._invalidateSearchCaches()
      }
      move(watchedValue_e) {
        if (this._shareRead) return void watchedValue_l.logDebug("move: readonly collection modification attempt");
        if (0 === watchedValue_e.length) return;
        const watchedValue_t = this._items.slice();
        for (const watchedValue_i of watchedValue_e) {
          const watchedValue_e = this._bsearch(watchedValue_i.old, watchedValue_h);
          if (null !== watchedValue_e && void 0 !== watchedValue_t[watchedValue_e])
            if (watchedValue_i.new === watchedValue_n.INVALID_TIME_POINT_INDEX) watchedValue_t[watchedValue_e] = void 0;
            else {
              watchedValue_t[watchedValue_e] = {
                index: watchedValue_i.new,
                value: watchedValue_t[watchedValue_e].value
              };
              const watchedValue_s = this._bsearch(watchedValue_i.new, watchedValue_h);
              if (null !== watchedValue_s) {
                const watchedValue_e = watchedValue_t[watchedValue_s];
                void 0 !== watchedValue_e && watchedValue_e.index === watchedValue_i.new && (watchedValue_t[watchedValue_s] = void 0)
              }
            }
        }
        this._items = watchedValue_t.filter((watchedValue_e => void 0 !== watchedValue_e)).sort(((watchedValue_e, watchedValue_t) => watchedValue_e.index - watchedValue_t.index)), this
        ._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
      }
      remove(watchedValue_e) {
        if (this._shareRead) return watchedValue_l.logDebug("remove: readonly collection modification attempt"), null;
        const watchedValue_t = this._nonCachedSearch(watchedValue_e, watchedValue_a.PlotRowSearchMode.NearestRight, watchedValue_h);
        if (null === watchedValue_t) return null;
        const watchedValue_i = this._items.splice(watchedValue_t);
        return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), watchedValue_i.length >
          0 ? watchedValue_i[0] : null
      }
      state() {
        const watchedValue_e = this._items.slice(this._start, this._end);
        return {
          start: 0,
          end: watchedValue_e.length,
          data: watchedValue_e
        }
      }
      restoreState(watchedValue_e) {
        watchedValue_e ? (this._start = watchedValue_e.start, this._end = watchedValue_e.end, this._shareRead = !1, this._items = watchedValue_e.data, this._minMaxCache
          .clear(), this._invalidateSearchCaches()) : this.clear()
      }
      _indexAt(watchedValue_e) {
        return this._items[watchedValue_e].index
      }
      _valueAt(watchedValue_e) {
        return this._items[watchedValue_e].value
      }
      _length() {
        return this._items.length
      }
      _searchImpl(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s, watchedValue_o, watchedValue_n) {
        const watchedValue_r = void 0 !== watchedValue_n ? watchedValue_i : watchedValue_s,
          watchedValue_a = void 0 !== watchedValue_n ? 1e4 * (watchedValue_t + 1) + watchedValue_n : watchedValue_t;
        let watchedValue_l = watchedValue_r.get(watchedValue_e);
        if (void 0 !== watchedValue_l) {
          const watchedValue_e = watchedValue_l.get(watchedValue_a);
          if (void 0 !== watchedValue_e) return watchedValue_e
        }
        const watchedValue_c = this._nonCachedSearch(watchedValue_e, watchedValue_t, watchedValue_o, watchedValue_n);
        if (null === watchedValue_c) return null;
        const watchedValue_h = {
          index: this._indexAt(watchedValue_c),
          value: this._valueAt(watchedValue_c)
        };
        return void 0 === watchedValue_l && (watchedValue_l = new Map, watchedValue_r.set(watchedValue_e, watchedValue_l)), watchedValue_l.set(watchedValue_a, watchedValue_h), watchedValue_h
      }
      _nonCachedSearch(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
        const watchedValue_o = this._lowerbound(watchedValue_e, watchedValue_i),
          watchedValue_n = watchedValue_o === this._end || watchedValue_e !== watchedValue_i(this._items[watchedValue_o]);
        if (watchedValue_n && watchedValue_t !== watchedValue_a.PlotRowSearchMode.Exact) switch (watchedValue_t) {
          case watchedValue_a.PlotRowSearchMode.NearestLeft:
            return this._searchNearestLeft(watchedValue_o, watchedValue_s);
          case watchedValue_a.PlotRowSearchMode.NearestRight:
            return this._searchNearestRight(watchedValue_o, watchedValue_s);
          default:
            throw new TypeError("Unknown search mode")
        }
        if (void 0 === watchedValue_s || watchedValue_n || watchedValue_t === watchedValue_a.PlotRowSearchMode.Exact) return watchedValue_n ? null : watchedValue_o;
        switch (watchedValue_t) {
          case watchedValue_a.PlotRowSearchMode.NearestLeft:
            return this._nonEmptyNearestLeft(watchedValue_o, watchedValue_s);
          case watchedValue_a.PlotRowSearchMode.NearestRight:
            return this._nonEmptyNearestRight(watchedValue_o, watchedValue_s);
          default:
            throw new TypeError("Unknown search mode")
        }
      }
      _nonEmptyNearestRight(watchedValue_e, watchedValue_t) {
        const watchedValue_i = (0, watchedValue_s.ensure)(this._emptyValuePredicate),
          watchedValue_o = (0, watchedValue_s.ensure)(watchedValue_t);
        for (; watchedValue_e < this._end && watchedValue_i(this._valueAt(watchedValue_e), watchedValue_o);) watchedValue_e += 1;
        return watchedValue_e === this._end ? null : watchedValue_e
      }
      _nonEmptyNearestLeft(watchedValue_e, watchedValue_t) {
        const watchedValue_i = (0, watchedValue_s.ensureNotNull)(this._emptyValuePredicate),
          watchedValue_o = (0, watchedValue_s.ensure)(watchedValue_t);
        for (; watchedValue_e >= this._start && watchedValue_i(this._valueAt(watchedValue_e), watchedValue_o);) watchedValue_e -= 1;
        return watchedValue_e < this._start ? null : watchedValue_e
      }
      _searchNearestLeft(watchedValue_e, watchedValue_t) {
        if (watchedValue_e === this._start) return null;
        const watchedValue_i = watchedValue_e - 1,
          watchedValue_s = watchedValue_i !== this._end ? watchedValue_i : null;
        return void 0 !== watchedValue_t && null !== watchedValue_s ? this._nonEmptyNearestLeft(watchedValue_s, watchedValue_t) : watchedValue_s
      }
      _searchNearestRight(watchedValue_e, watchedValue_t) {
        const watchedValue_i = watchedValue_e,
          watchedValue_s = watchedValue_i !== this._end ? watchedValue_i : null;
        return void 0 !== watchedValue_t && null !== watchedValue_s ? this._nonEmptyNearestRight(watchedValue_s, watchedValue_t) : watchedValue_s
      }
      _bsearch(watchedValue_e, watchedValue_t) {
        const watchedValue_i = this._lowerbound(watchedValue_e, watchedValue_t);
        return watchedValue_i !== this._end && watchedValue_e === watchedValue_t(this._items[watchedValue_i]) ? watchedValue_i : null
      }
      _lowerbound(watchedValue_e, watchedValue_t) {
        return (0, watchedValue_o.lowerbound)(this._items, watchedValue_e, ((watchedValue_e, watchedValue_i) => watchedValue_t(watchedValue_e) < watchedValue_i), this._start, this._end)
      }
      _upperbound(watchedValue_e) {
        return (0, watchedValue_o.upperbound)(this._items, watchedValue_e, ((watchedValue_e, watchedValue_t) => watchedValue_t.index > watchedValue_e), this._start, this._end)
      }
      _plotMinMax(watchedValue_e, watchedValue_t, watchedValue_i) {
        let watchedValue_s = null;
        const watchedValue_o = this._plotFunctions.get(watchedValue_i);
        if (void 0 === watchedValue_o) throw new Error(`Plot "${watchedValue_i}" is not registered`);
        for (let watchedValue_i = watchedValue_e; watchedValue_i < watchedValue_t; watchedValue_i++) {
          const watchedValue_e = watchedValue_o(this._items[watchedValue_i].value);
          null == watchedValue_e || Number.isNaN(watchedValue_e) || (null === watchedValue_s ? watchedValue_s = {
            min: watchedValue_e,
            max: watchedValue_e
          } : (watchedValue_e < watchedValue_s.min && (watchedValue_s.min = watchedValue_e), watchedValue_e > watchedValue_s.max && (watchedValue_s.max = watchedValue_e)))
        }
        return watchedValue_s
      }
      _invalidateCacheForRow(watchedValue_e) {
        const watchedValue_t = Math.floor(watchedValue_e.index / watchedValue_c);
        this._minMaxCache.forEach((watchedValue_e => watchedValue_e.delete(watchedValue_t)))
      }
      _prepend(watchedValue_e) {
        return (0, watchedValue_s.assert)(!this._shareRead, "collection should not be readonly"), (0, watchedValue_s.assert)(0 !== watchedValue_e.length,
            "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items =
          watchedValue_e.concat(this._items), this._start = 0, this._end = this._items.length, watchedValue_e[0]
      }
      _append(watchedValue_e) {
        return (0, watchedValue_s.assert)(!this._shareRead, "collection should not be readonly"), (0, watchedValue_s.assert)(0 !== watchedValue_e.length,
            "plotRows should not be empty"), this._invalidateSearchCaches(), this._minMaxCache.clear(), this._items =
          this._items.concat(watchedValue_e), this._start = 0, this._end = this._items.length, watchedValue_e[0]
      }
      _updateLast(watchedValue_e) {
        (0, watchedValue_s.assert)(!this.isEmpty(), "plot list should not be empty");
        const watchedValue_t = this._items[this._end - 1];
        (0,
          watchedValue_s.assert)(watchedValue_t.index === watchedValue_e.index, "last row index should match new row index"), this._invalidateCacheForRow(watchedValue_e),
          this._invalidateSearchCaches(), this._items[this._end - 1] = watchedValue_e
      }
      _merge(watchedValue_e) {
        return (0, watchedValue_s.assert)(0 !== watchedValue_e.length, "plot rows should not be empty"), this._invalidateSearchCaches(), this
          ._minMaxCache.clear(), this._items = function(watchedValue_e, watchedValue_t) {
            const watchedValue_i = function(watchedValue_e, watchedValue_t) {
                const watchedValue_i = watchedValue_e.length,
                  watchedValue_s = watchedValue_t.length;
                let watchedValue_o = watchedValue_i + watchedValue_s,
                  watchedValue_n = 0,
                  watchedValue_r = 0;
                for (; watchedValue_n < watchedValue_i && watchedValue_r < watchedValue_s;) watchedValue_e[watchedValue_n].index < watchedValue_t[watchedValue_r].index ? watchedValue_n++ : watchedValue_e[watchedValue_n].index > watchedValue_t[watchedValue_r].index ? watchedValue_r++ : (watchedValue_n++, watchedValue_r++,
                  watchedValue_o--);
                return watchedValue_o
              }(watchedValue_e, watchedValue_t),
              watchedValue_s = new Array(watchedValue_i);
            let watchedValue_o = 0,
              watchedValue_n = 0;
            const watchedValue_r = watchedValue_e.length,
              watchedValue_a = watchedValue_t.length;
            let watchedValue_l = 0;
            for (; watchedValue_o < watchedValue_r && watchedValue_n < watchedValue_a;) watchedValue_e[watchedValue_o].index < watchedValue_t[watchedValue_n].index ? (watchedValue_s[watchedValue_l] = watchedValue_e[watchedValue_o], watchedValue_o++) : watchedValue_e[watchedValue_o].index > watchedValue_t[watchedValue_n].index ? (watchedValue_s[watchedValue_l] =
              watchedValue_t[watchedValue_n], watchedValue_n++) : (watchedValue_s[watchedValue_l] = watchedValue_t[watchedValue_n], watchedValue_o++, watchedValue_n++), watchedValue_l++;
            for (; watchedValue_o < watchedValue_r;) watchedValue_s[watchedValue_l] = watchedValue_e[watchedValue_o], watchedValue_o++, watchedValue_l++;
            for (; watchedValue_n < watchedValue_a;) watchedValue_s[watchedValue_l] = watchedValue_t[watchedValue_n], watchedValue_n++, watchedValue_l++;
            return watchedValue_s
          }(this._items, watchedValue_e), this._start = 0, this._end = this._items.length, watchedValue_e[0]
      }
      _minMaxOnRangeCachedImpl(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (this.isEmpty()) return null;
        let watchedValue_o = null;
        const watchedValue_n = (0, watchedValue_s.ensureNotNull)(this.firstIndex()),
          watchedValue_r = (0, watchedValue_s.ensureNotNull)(this.lastIndex()),
          watchedValue_a = Math.max(watchedValue_e, watchedValue_n),
          watchedValue_l = Math.min(watchedValue_t, watchedValue_r),
          watchedValue_h = Math.ceil(watchedValue_a / watchedValue_c) * watchedValue_c,
          watchedValue_d = Math.max(watchedValue_h, Math.floor(watchedValue_l / watchedValue_c) * watchedValue_c);
        watchedValue_o = _(watchedValue_o, this._minMaxOnRange(watchedValue_a, Math.min(watchedValue_h, watchedValue_t, watchedValue_l), watchedValue_i));
        let watchedValue_u = this._minMaxCache.get(watchedValue_i);
        void 0 === watchedValue_u && (watchedValue_u = new Map, this._minMaxCache.set(watchedValue_i, watchedValue_u));
        for (let watchedValue_e = Math.max(watchedValue_h + 1, watchedValue_a); watchedValue_e < watchedValue_d; watchedValue_e += watchedValue_c) {
          const watchedValue_t = Math.floor(watchedValue_e / watchedValue_c);
          let watchedValue_s = watchedValue_u.get(watchedValue_t);
          if (void 0 === watchedValue_s) {
            const watchedValue_e = watchedValue_t * watchedValue_c,
              watchedValue_o = (watchedValue_t + 1) * watchedValue_c - 1;
            watchedValue_s = this._minMaxOnRange(watchedValue_e, watchedValue_o, watchedValue_i), watchedValue_u.set(watchedValue_t, watchedValue_s)
          }
          watchedValue_o = _(watchedValue_o, watchedValue_s)
        }
        watchedValue_o = _(watchedValue_o, this._minMaxOnRange(watchedValue_d, watchedValue_l, watchedValue_i));
        return watchedValue_o
      }
      _minMaxOnRange(watchedValue_e, watchedValue_t, watchedValue_i) {
        return this._plotMinMax(this._lowerbound(watchedValue_e, watchedValue_h), this._upperbound(watchedValue_t), watchedValue_i)
      }
      _rangeIteratorImpl(watchedValue_e, watchedValue_t) {
        let watchedValue_i = watchedValue_e - 1;
        return {
          [Symbol.iterator]() {
            return this
          },
          next: () => (watchedValue_i += 1, watchedValue_i >= watchedValue_t ? {
            done: !0,
            value: void 0
          } : {
            done: !1,
            value: this._items[watchedValue_i]
          })
        }
      }
      _invalidateSearchCaches() {
        this._rowSearchCacheByIndex.clear(), this._rowSearchCacheByIndexWithoutEmptyValues.clear(), this
          ._rowSearchCacheByTime.clear(), this._rowSearchCacheByTimeWithoutEmptyValues.clear()
      }
    }

    function _(watchedValue_e, watchedValue_t) {
      if (null === watchedValue_e) return watchedValue_t;
      if (null === watchedValue_t) return watchedValue_e;
      return {
        min: Math.min(watchedValue_e.min, watchedValue_t.min),
        max: Math.max(watchedValue_e.max, watchedValue_t.max)
      }
    }