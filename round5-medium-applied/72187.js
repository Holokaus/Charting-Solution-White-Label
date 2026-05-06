/**
 * Module 72187 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

72187: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      PlotList: () => u,
      mergeMinMax: () => _
    });
    var watchedValue_s = i(50151),
      o = i(12217),
      watchedValue_n = i(82284),
      r = i(9343),
      watchedValue_a = i(5471);
    const l = (0, r.getLogger)("Chart.PlotList"),
      c = 30;

    function h(watchedValue_e) {
      return watchedValue_e.index
    }

    function d(watchedValue_e) {
      return watchedValue_e.value[0]
    }
    class u {
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
        return null === watchedValue_e || null === watchedValue_t ? new u : this.range(watchedValue_e, watchedValue_t)
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
        if (this._shareRead) return l.logDebug("add: readonly collection modification attempt"), !1;
        const i = {
            index: watchedValue_e,
            value: watchedValue_t
          },
          watchedValue_s = this._nonCachedSearch(watchedValue_e, watchedValue_a.PlotRowSearchMode.Exact, h);
        return this._invalidateSearchCaches(), null === watchedValue_s ? (this._items.splice(this._lowerbound(watchedValue_e, h), 0, i), this
          ._start = 0, this._end = this._items.length, !0) : (this._items[watchedValue_s] = i, !1)
      }
      search(watchedValue_e, watchedValue_t = watchedValue_a.PlotRowSearchMode.Exact, i) {
        return this._searchImpl(watchedValue_e, watchedValue_t, this._rowSearchCacheByIndex, this._rowSearchCacheByIndexWithoutEmptyValues, h,
          i)
      }
      searchByTime(watchedValue_e, watchedValue_t = watchedValue_a.PlotRowSearchMode.Exact, i) {
        return this._searchImpl(watchedValue_e, watchedValue_t, this._rowSearchCacheByTime, this._rowSearchCacheByTimeWithoutEmptyValues, d, i)
      }
      fold(watchedValue_e, watchedValue_t) {
        let i = watchedValue_t;
        for (let watchedValue_t = this._start; watchedValue_t < this._end; ++watchedValue_t) {
          i = watchedValue_e(this._indexAt(watchedValue_t), this._valueAt(watchedValue_t), i)
        }
        return i
      }
      findFirst(watchedValue_e, watchedValue_t) {
        const i = void 0 !== watchedValue_t && Math.min(this._start + watchedValue_t, this._end) || this._end;
        for (let watchedValue_t = this._start; watchedValue_t < i; ++watchedValue_t) {
          const i = this._indexAt(watchedValue_t),
            watchedValue_s = this._valueAt(watchedValue_t);
          if (watchedValue_e(i, watchedValue_s)) return {
            index: i,
            value: watchedValue_s
          }
        }
        return null
      }
      findLast(watchedValue_e, watchedValue_t) {
        const i = void 0 !== watchedValue_t && Math.max(this._end - watchedValue_t, this._start) || this._start;
        for (let watchedValue_t = this._end - 1; watchedValue_t >= i; --watchedValue_t) {
          const i = this._indexAt(watchedValue_t),
            watchedValue_s = this._valueAt(watchedValue_t);
          if (watchedValue_e(i, watchedValue_s)) return {
            index: i,
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
        let i = watchedValue_t;
        for (let watchedValue_t = this._start; watchedValue_t < this._end; ++watchedValue_t) {
          i = watchedValue_e(i, this._indexAt(watchedValue_t), this._valueAt(watchedValue_t))
        }
        return i
      }
      range(watchedValue_e, watchedValue_t) {
        const i = new u(this._plotFunctions, this._emptyValuePredicate);
        return i._items = this._items, i._start = this._lowerbound(watchedValue_e, h), i._end = this._upperbound(watchedValue_t), i
          ._shareRead = !0, i
      }
      plottableRange(watchedValue_e) {
        const watchedValue_t = new u(this._plotFunctions, this._emptyValuePredicate);
        return watchedValue_t._items = this._items, watchedValue_t._start = this._upperbound(watchedValue_n.UNPLOTTABLE_TIME_POINT_INDEX), watchedValue_t._end = this
          ._end, watchedValue_t._shareRead = !0, !0 === watchedValue_e && watchedValue_t._start > this._start && (watchedValue_t._start -= 1), watchedValue_t
      }
      rangeCountback(watchedValue_e, watchedValue_t) {
        if (null === this.firstIndex()) return new u;
        const i = new u(this._plotFunctions, this._emptyValuePredicate);
        return i._items = this._items, i._end = this._upperbound(watchedValue_e), i._start = Math.max(this._start, i._end - watchedValue_t), i
          ._shareRead = !0, i
      }
      rangeIterator(watchedValue_e, watchedValue_t) {
        const i = this._lowerbound(watchedValue_e, h),
          watchedValue_s = this._upperbound(watchedValue_t);
        return this._rangeIteratorImpl(i, watchedValue_s)
      }
      fullRangeIterator() {
        return this._rangeIteratorImpl(this._start, this._end)
      }
      minMaxOnRangeCached(watchedValue_e, watchedValue_t, i) {
        if (this.isEmpty()) return null;
        let watchedValue_s = null;
        for (const o of i) {
          watchedValue_s = _(watchedValue_s, this._minMaxOnRangeCachedImpl(watchedValue_e - o.offset, watchedValue_t - o.offset, o.name))
        }
        return watchedValue_s
      }
      minMaxOnRange(watchedValue_e, watchedValue_t, i) {
        if (this.isEmpty()) return null;
        let watchedValue_s = null;
        for (const o of i) {
          watchedValue_s = _(watchedValue_s, this._minMaxOnRange(watchedValue_e - o.offset, watchedValue_t - o.offset, o.name))
        }
        return watchedValue_s
      }
      merge(watchedValue_e) {
        return this._shareRead ? (l.logDebug("merge: readonly collection modification attempt"), null) : 0 === watchedValue_e
          .length ? null : this.isEmpty() || watchedValue_e[watchedValue_e.length - 1].index < this._items[0].index ? this._prepend(watchedValue_e) : watchedValue_e[0]
          .index > this._items[this._items.length - 1].index ? this._append(watchedValue_e) : 1 === watchedValue_e.length && watchedValue_e[0].index === this
          ._items[this._items.length - 1].index ? (this._updateLast(watchedValue_e[0]), watchedValue_e[0]) : this._merge(watchedValue_e)
      }
      addTail(watchedValue_e, watchedValue_t = !1) {
        if (0 === watchedValue_e.length) return;
        let i = 0;
        watchedValue_t && this._end - this._start > 0 && (i = 1, this._items[this._end - this._start - 1].value = watchedValue_e[0].value);
        for (let watchedValue_t = i; watchedValue_t < watchedValue_e.length; ++watchedValue_t) {
          const i = watchedValue_e[watchedValue_t],
            watchedValue_s = this.lastIndex();
          if (null === watchedValue_s) {
            l.logError("Can'watchedValue_t add tail to the empty plotlist");
            break
          }
          this.add(watchedValue_s + 1, i.value)
        }
        this._invalidateSearchCaches()
      }
      move(watchedValue_e) {
        if (this._shareRead) return void l.logDebug("move: readonly collection modification attempt");
        if (0 === watchedValue_e.length) return;
        const watchedValue_t = this._items.slice();
        for (const i of watchedValue_e) {
          const watchedValue_e = this._bsearch(i.old, h);
          if (null !== watchedValue_e && void 0 !== watchedValue_t[watchedValue_e])
            if (i.new === watchedValue_n.INVALID_TIME_POINT_INDEX) watchedValue_t[watchedValue_e] = void 0;
            else {
              watchedValue_t[watchedValue_e] = {
                index: i.new,
                value: watchedValue_t[watchedValue_e].value
              };
              const watchedValue_s = this._bsearch(i.new, h);
              if (null !== watchedValue_s) {
                const watchedValue_e = watchedValue_t[watchedValue_s];
                void 0 !== watchedValue_e && watchedValue_e.index === i.new && (watchedValue_t[watchedValue_s] = void 0)
              }
            }
        }
        this._items = watchedValue_t.filter((watchedValue_e => void 0 !== watchedValue_e)).sort(((watchedValue_e, watchedValue_t) => watchedValue_e.index - watchedValue_t.index)), this
        ._invalidateSearchCaches(), this._minMaxCache.clear(), this._start = 0, this._end = this._items.length
      }
      remove(watchedValue_e) {
        if (this._shareRead) return l.logDebug("remove: readonly collection modification attempt"), null;
        const watchedValue_t = this._nonCachedSearch(watchedValue_e, watchedValue_a.PlotRowSearchMode.NearestRight, h);
        if (null === watchedValue_t) return null;
        const i = this._items.splice(watchedValue_t);
        return this._end = this._items.length, this._minMaxCache.clear(), this._invalidateSearchCaches(), i.length >
          0 ? i[0] : null
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
      _searchImpl(watchedValue_e, watchedValue_t, i, watchedValue_s, o, watchedValue_n) {
        const r = void 0 !== watchedValue_n ? i : watchedValue_s,
          watchedValue_a = void 0 !== watchedValue_n ? 1e4 * (watchedValue_t + 1) + watchedValue_n : watchedValue_t;
        let l = r.get(watchedValue_e);
        if (void 0 !== l) {
          const watchedValue_e = l.get(watchedValue_a);
          if (void 0 !== watchedValue_e) return watchedValue_e
        }
        const c = this._nonCachedSearch(watchedValue_e, watchedValue_t, o, watchedValue_n);
        if (null === c) return null;
        const h = {
          index: this._indexAt(c),
          value: this._valueAt(c)
        };
        return void 0 === l && (l = new Map, r.set(watchedValue_e, l)), l.set(watchedValue_a, h), h
      }
      _nonCachedSearch(watchedValue_e, watchedValue_t, i, watchedValue_s) {
        const o = this._lowerbound(watchedValue_e, i),
          watchedValue_n = o === this._end || watchedValue_e !== i(this._items[o]);
        if (watchedValue_n && watchedValue_t !== watchedValue_a.PlotRowSearchMode.Exact) switch (watchedValue_t) {
          case watchedValue_a.PlotRowSearchMode.NearestLeft:
            return this._searchNearestLeft(o, watchedValue_s);
          case watchedValue_a.PlotRowSearchMode.NearestRight:
            return this._searchNearestRight(o, watchedValue_s);
          default:
            throw new TypeError("Unknown search mode")
        }
        if (void 0 === watchedValue_s || watchedValue_n || watchedValue_t === watchedValue_a.PlotRowSearchMode.Exact) return watchedValue_n ? null : o;
        switch (watchedValue_t) {
          case watchedValue_a.PlotRowSearchMode.NearestLeft:
            return this._nonEmptyNearestLeft(o, watchedValue_s);
          case watchedValue_a.PlotRowSearchMode.NearestRight:
            return this._nonEmptyNearestRight(o, watchedValue_s);
          default:
            throw new TypeError("Unknown search mode")
        }
      }
      _nonEmptyNearestRight(watchedValue_e, watchedValue_t) {
        const i = (0, watchedValue_s.ensure)(this._emptyValuePredicate),
          o = (0, watchedValue_s.ensure)(watchedValue_t);
        for (; watchedValue_e < this._end && i(this._valueAt(watchedValue_e), o);) watchedValue_e += 1;
        return watchedValue_e === this._end ? null : watchedValue_e
      }
      _nonEmptyNearestLeft(watchedValue_e, watchedValue_t) {
        const i = (0, watchedValue_s.ensureNotNull)(this._emptyValuePredicate),
          o = (0, watchedValue_s.ensure)(watchedValue_t);
        for (; watchedValue_e >= this._start && i(this._valueAt(watchedValue_e), o);) watchedValue_e -= 1;
        return watchedValue_e < this._start ? null : watchedValue_e
      }
      _searchNearestLeft(watchedValue_e, watchedValue_t) {
        if (watchedValue_e === this._start) return null;
        const i = watchedValue_e - 1,
          watchedValue_s = i !== this._end ? i : null;
        return void 0 !== watchedValue_t && null !== watchedValue_s ? this._nonEmptyNearestLeft(watchedValue_s, watchedValue_t) : watchedValue_s
      }
      _searchNearestRight(watchedValue_e, watchedValue_t) {
        const i = watchedValue_e,
          watchedValue_s = i !== this._end ? i : null;
        return void 0 !== watchedValue_t && null !== watchedValue_s ? this._nonEmptyNearestRight(watchedValue_s, watchedValue_t) : watchedValue_s
      }
      _bsearch(watchedValue_e, watchedValue_t) {
        const i = this._lowerbound(watchedValue_e, watchedValue_t);
        return i !== this._end && watchedValue_e === watchedValue_t(this._items[i]) ? i : null
      }
      _lowerbound(watchedValue_e, watchedValue_t) {
        return (0, o.lowerbound)(this._items, watchedValue_e, ((watchedValue_e, i) => watchedValue_t(watchedValue_e) < i), this._start, this._end)
      }
      _upperbound(watchedValue_e) {
        return (0, o.upperbound)(this._items, watchedValue_e, ((watchedValue_e, watchedValue_t) => watchedValue_t.index > watchedValue_e), this._start, this._end)
      }
      _plotMinMax(watchedValue_e, watchedValue_t, i) {
        let watchedValue_s = null;
        const o = this._plotFunctions.get(i);
        if (void 0 === o) throw new Error(`Plot "${i}" is not registered`);
        for (let i = watchedValue_e; i < watchedValue_t; i++) {
          const watchedValue_e = o(this._items[i].value);
          null == watchedValue_e || Number.isNaN(watchedValue_e) || (null === watchedValue_s ? watchedValue_s = {
            min: watchedValue_e,
            max: watchedValue_e
          } : (watchedValue_e < watchedValue_s.min && (watchedValue_s.min = watchedValue_e), watchedValue_e > watchedValue_s.max && (watchedValue_s.max = watchedValue_e)))
        }
        return watchedValue_s
      }
      _invalidateCacheForRow(watchedValue_e) {
        const watchedValue_t = Math.floor(watchedValue_e.index / c);
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
            const i = function(watchedValue_e, watchedValue_t) {
                const i = watchedValue_e.length,
                  watchedValue_s = watchedValue_t.length;
                let o = i + watchedValue_s,
                  watchedValue_n = 0,
                  r = 0;
                for (; watchedValue_n < i && r < watchedValue_s;) watchedValue_e[watchedValue_n].index < watchedValue_t[r].index ? watchedValue_n++ : watchedValue_e[watchedValue_n].index > watchedValue_t[r].index ? r++ : (watchedValue_n++, r++,
                  o--);
                return o
              }(watchedValue_e, watchedValue_t),
              watchedValue_s = new Array(i);
            let o = 0,
              watchedValue_n = 0;
            const r = watchedValue_e.length,
              watchedValue_a = watchedValue_t.length;
            let l = 0;
            for (; o < r && watchedValue_n < watchedValue_a;) watchedValue_e[o].index < watchedValue_t[watchedValue_n].index ? (watchedValue_s[l] = watchedValue_e[o], o++) : watchedValue_e[o].index > watchedValue_t[watchedValue_n].index ? (watchedValue_s[l] =
              watchedValue_t[watchedValue_n], watchedValue_n++) : (watchedValue_s[l] = watchedValue_t[watchedValue_n], o++, watchedValue_n++), l++;
            for (; o < r;) watchedValue_s[l] = watchedValue_e[o], o++, l++;
            for (; watchedValue_n < watchedValue_a;) watchedValue_s[l] = watchedValue_t[watchedValue_n], watchedValue_n++, l++;
            return watchedValue_s
          }(this._items, watchedValue_e), this._start = 0, this._end = this._items.length, watchedValue_e[0]
      }
      _minMaxOnRangeCachedImpl(watchedValue_e, watchedValue_t, i) {
        if (this.isEmpty()) return null;
        let o = null;
        const watchedValue_n = (0, watchedValue_s.ensureNotNull)(this.firstIndex()),
          r = (0, watchedValue_s.ensureNotNull)(this.lastIndex()),
          watchedValue_a = Math.max(watchedValue_e, watchedValue_n),
          l = Math.min(watchedValue_t, r),
          h = Math.ceil(watchedValue_a / c) * c,
          d = Math.max(h, Math.floor(l / c) * c);
        o = _(o, this._minMaxOnRange(watchedValue_a, Math.min(h, watchedValue_t, l), i));
        let u = this._minMaxCache.get(i);
        void 0 === u && (u = new Map, this._minMaxCache.set(i, u));
        for (let watchedValue_e = Math.max(h + 1, watchedValue_a); watchedValue_e < d; watchedValue_e += c) {
          const watchedValue_t = Math.floor(watchedValue_e / c);
          let watchedValue_s = u.get(watchedValue_t);
          if (void 0 === watchedValue_s) {
            const watchedValue_e = watchedValue_t * c,
              o = (watchedValue_t + 1) * c - 1;
            watchedValue_s = this._minMaxOnRange(watchedValue_e, o, i), u.set(watchedValue_t, watchedValue_s)
          }
          o = _(o, watchedValue_s)
        }
        o = _(o, this._minMaxOnRange(d, l, i));
        return o
      }
      _minMaxOnRange(watchedValue_e, watchedValue_t, i) {
        return this._plotMinMax(this._lowerbound(watchedValue_e, h), this._upperbound(watchedValue_t), i)
      }
      _rangeIteratorImpl(watchedValue_e, watchedValue_t) {
        let i = watchedValue_e - 1;
        return {
          [Symbol.iterator]() {
            return this
          },
          next: () => (i += 1, i >= watchedValue_t ? {
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

    function _(watchedValue_e, watchedValue_t) {
      if (null === watchedValue_e) return watchedValue_t;
      if (null === watchedValue_t) return watchedValue_e;
      return {
        min: Math.min(watchedValue_e.min, watchedValue_t.min),
        max: Math.max(watchedValue_e.max, watchedValue_t.max)
      }
    }