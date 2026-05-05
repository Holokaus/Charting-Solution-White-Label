/**
 * Module: 96777
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.185Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 96777 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

96777: (exports, t, i) => {
    "use strict";
    i.d(t, {
      VolumeByPriceExpr: () => g
    });
    var series = i(50151),
      o = i(77914),
      newSeries = i(46082),
      r = i(86811);
    class a extends r.GraphicsObj {
      constructor(exports, t, i, o, newSeries, r) {
        super(exports), (0, series.assert)(t < i), this._priceLow = this._mixinJSONObject.createDoubleField(t, "priceLow"),
          this._priceHigh = this._mixinJSONObject.createDoubleField(i, "priceHigh"), this._rate = this
          ._mixinJSONObject.createDoubleArrayField(o, "rate"), this._firstBarTime = this._mixinJSONObject
          .createTimeField(newSeries, "firstBarTime"), this._lastBarTime = this._mixinJSONObject.createTimeField(r,
            "lastBarTime")
      }
      isNaN() {
        return super.isNaN() || Number.isNaN(this._priceLow.get()) || Number.isNaN(this._priceHigh.get()) || 0 ===
          this._rate.get().length
      }
      jsonName() {
        return "hhists"
      }
      primitiveData() {
        return {
          id: this.id(),
          priceHigh: this._priceHigh.get(),
          priceLow: this._priceLow.get(),
          rate: this._rate.get().slice(),
          firstBarTime: this._firstBarTime.get(),
          lastBarTime: this._lastBarTime.get()
        }
      }
      setPriceLow(exports) {
        this._priceLow.set(exports) && this._processObjUpdate()
      }
      priceLow() {
        return this._priceLow.get()
      }
      priceHigh() {
        return this._priceHigh.get()
      }
      setPriceHigh(exports) {
        this._priceHigh.set(exports) && this._processObjUpdate()
      }
      rate() {
        return this._rate.get().slice()
      }
      setRate(exports) {
        this._rate.set(exports) && this._processObjUpdate()
      }
      rateAt(exports) {
        return this._rate.get()[e]
      }
      ratesSum() {
        let exports = 0;
        for (const t of this._rate.get()) !Number.isNaN(t) && Number.isFinite(t) && (e += t);
        return e
      }
      firstBarTime() {
        return this._firstBarTime.get()
      }
      setFirstBarTime(exports) {
        this._firstBarTime.set(exports) && this._processObjUpdate()
      }
      lastBarTime() {
        return this._lastBarTime.get()
      }
      setLastBarTime(exports) {
        this._lastBarTime.set(exports) && this._processObjUpdate()
      }
    }
    var l, c, h = i(30376),
      d = i(19979);
    class u {
      constructor(exports, t, i) {
        this.index = exports, this.offset = i, this.level = t
      }
      isNaN() {
        return Number.isNaN(this.level)
      }
      equals(exports) {
        return e instanceof u && (!this.isNaN() && (!exports.isNaN() && (this.index === exports.index && this.offset === e
          .offset && d.Std.equal(this.level, exports.level))))
      }
      getLevel() {
        return this.level
      }
      getIndex() {
        return this.index
      }
    }
    class _ extends r.GraphicsObj {
      constructor(exports, t) {
        super(exports), this._points = [], t && (this._points = t)
      }
      addPoint(exports) {
        this._processObjUpdate(), this._points.push(exports)
      }
      addPoints(exports) {
        this._processObjUpdate(), this._points.push(...e)
      }
      setPoint(exports, t) {
        const i = this._points[e];
        t.equals(i) || (this._processObjUpdate(), this._points[e] = t)
      }
      point(exports) {
        const t = this._points[e];
        return new u(t.index, t.level, t.offset)
      }
      points() {
        return this._points
      }
      pointsCount() {
        return this._points.length
      }
      setPoints(exports) {
        if (exports.length === this._points.length) {
          let t = !0;
          for (let i = 0; i < exports.length; ++i)
            if (!e[i].equals(this._points[i])) {
              t = !1;
              break
            } if (t) return
        }
        this._processObjUpdate(), this._points = [], this._points.push(...e)
      }
      clearPoints() {
        this._processObjUpdate(), this._points = []
      }
      isNaN() {
        return super.isNaN() || this._points.length < 3
      }
      jsonName() {
        return "polygons"
      }
      primitiveData() {
        return {
          id: this.id(),
          points: this._points.map((exports => ({
            index: exports.index,
            offset: exports.offset,
            level: exports.level
          })))
        }
      }
    }
    class p extends r.GraphicsObj {
        constructor(exports, t, i, series, o = !1, newSeries = !1) {
          super(exports), this._endIndex = this._mixinJSONObject.createTimeField(i, "endIndex"), this._extendLeft = this
            ._mixinJSONObject.createField(o, "extendLeft"), this._extendRight = this._mixinJSONObject.createField(newSeries,
              "extendRight"), this._level = this._mixinJSONObject.createDoubleField(series, "level"), this._startIndex =
            this._mixinJSONObject.createTimeField(t, "startIndex")
        }
        isNaN() {
          return super.isNaN() || Number.isNaN(this._level.get()) || this._startIndex.get() < 0 || this._endIndex
            .get() < 0 || this._startIndex.get() === this._endIndex.get() && !this._extendLeft.get() && !this
            ._extendRight.get()
        }
        jsonName() {
          return "horizlines"
        }
        primitiveData() {
          return {
            id: this.id(),
            startIndex: this._startIndex.get(),
            endIndex: this._endIndex.get(),
            extendLeft: this._extendLeft.get(),
            extendRight: this._extendRight.get(),
            level: this._level.get()
          }
        }
        startIndex() {
          return this._startIndex.get()
        }
        setStartIndex(exports) {
          this._startIndex.set(exports) && this._processObjUpdate()
        }
        endIndex() {
          return this._endIndex.get()
        }
        setEndIndex(exports) {
          this._endIndex.set(exports) && this._processObjUpdate()
        }
        level() {
          return this._level.get()
        }
        setLevel(exports) {
          this._level.set(exports) && this._processObjUpdate()
        }
        isExtendLeft() {
          return this._extendLeft.get()
        }
        setExtendLeft(exports) {
          this._extendLeft.set(exports) && this._processObjUpdate()
        }
        extendLeft() {
          return this.isExtendLeft()
        }
        isExtendRight() {
          return this._extendRight.get()
        }
        setExtendRight(exports) {
          this._extendRight.set(exports) && this._processObjUpdate()
        }
        extendRight() {
          return this.isExtendRight()
        }
      }! function(exports) {
        e[exports.AssertAccuracy = .05] = "AssertAccuracy"
      }(l || (l = {})),
      function(exports) {
        e[exports.START = 0] = "START", e[exports.END = 1] = "END"
      }(c || (c = {}));
    class m {
      constructor() {
        this._map = new Map
      }
      get(exports) {
        const t = this._innerMap(exports.start);
        return t && t.get(exports.end)
      }
      set(exports, t) {
        this._innerMap(exports.start, !0).set(exports.end, t)
      }
      clear() {
        this._map.clear()
      }
      size() {
        let exports = 0;
        return this._map.forEach((t => e += t.size)), e
      }
      _innerMap(exports, t) {
        let i = this._map.get(exports);
        return void 0 === i && t && (i = new Map, this._map.set(exports, i)), i
      }
    }
    class g {
      constructor(exports, t, i, o, newSeries, r, a, l, c, d, u, _, p, g, f) {
        this._freezedBoxes = new h.GraphicsList, this._freezedHists = new h.GraphicsList, this._freezedPocs = new h
          .GraphicsList, this._freezedVAHists = new h.GraphicsList, this._currentHistsGr = new h.GraphicsList, this
          ._currentVAHistsGr = new h.GraphicsList,
          this._currentHists = [], this._currentHistsMap = new m, this._currentBox = null, this._currentPoc = null,
          this._historyBarSet = [], this._prevRtBar = null, this._minPrice = Number.POSITIVE_INFINITY, this
          ._maxPrice = Number.NEGATIVE_INFINITY, this._leftBoxTime = null, this._rightBoxTime = null, this
          ._actualRightBoxTime = null, this._needRecalc = !1, this._largestHistItem = null, this._rowsLayout = null,
          this._currentVAStart = 0, this._currentVAEnd = 0, this._previousVAStart = 0, this._previousVAEnd = 0, this
          ._idsGenerator = null, (0, series.assert)(1 === e || 2 === e), this._numOfSubHists = exports, this._outHists = o, this
          ._outBoxLines = newSeries, this._outPocLines = r, this._extendPocLeftRight = a, this._outVAHists = l, this
          ._vaVolumePercent = c, this._rowsLayoutSupplier = d, this._outHists.addStable(this._freezedHists), this
          ._outVAHists.addStable(this._freezedVAHists), this._maxHHistItems = u, this._layoutIsAutoselected = g, this
          ._leftBoxTimeMutable = _, this._rightBoxTimeMutable = p, this._actualRightBoxTime = f ?? p, this._ctx = t,
          this._seriesGetter = i
      }
      update(exports) {
        this._supplyRowsLayout(this._ctx), null === this._currentBox && this._initCurrentBox(), null === this
          ._currentPoc && this._initCurrentPoc();
        const t = this._timeScale().get(exports);
        this._leftBoxTime = this._leftBoxTimeMutable, this._rightBoxTime = this._rightBoxTimeMutable, this._ctx.symbol
          .isLastBar && !Number.isNaN(this._rightBoxTime) && (this._rightBoxTime = Math.min(t + newSeries.Interval.parse(this
            ._ctx.symbol.interval + this._ctx.symbol.resolution).inMilliseconds(t) - 1, this._rightBoxTime));
        const i = d.Std.greaterOrEqual(this._seriesClose().get(exports), this._seriesOpen().get(exports)),
          series = {
            high: this._seriesHigh().get(exports),
            low: this._seriesLow().get(exports),
            volume: this._seriesVol().get(exports),
            isUp: i,
            time: t
          };
        this._updateCurrentHistogram(series), this._currentHists.length > 0 && (this._largestHistItem = this
          ._getLargestHistItem(), this._updateCurrentPoc(), this._seriesGetter.developingPoc().set(this._currentPoc
            .level()), this._updateValueArea(), this._vaVolumePercent > 0 && (this._seriesGetter.developingVAHigh()
            .set(this._currentHists[this._currentVAEnd].priceHigh()), this._seriesGetter.developingVALow().set(this
              ._currentHists[this._currentVAStart].priceLow()))), this._updateCurrentBox(), this._rebuildOutData()
      }
      setIdsGeneratorProxy(exports) {
        this._idsGenerator = e
      }
      nextGraphicsObjId() {
        return (0, series.ensureNotNull)(this._idsGenerator).nextGraphicsObjId()
      }
      pushEraseObjCmd(exports, t) {
        (0, series.ensureNotNull)(this._idsGenerator).pushEraseObjCmd(exports, t)
      }
      popEraseCmds() {
        return (0, series.ensureNotNull)(this._idsGenerator).popEraseCmds()
      }
      _timeScale() {
        return this._seriesGetter.time()
      }
      _seriesLow() {
        return this._seriesGetter.low()
      }
      _seriesHigh() {
        return this._seriesGetter.high()
      }
      _seriesVol() {
        return this._seriesGetter.volume()
      }
      _seriesOpen() {
        return this._seriesGetter.open()
      }
      _seriesClose() {
        return this._seriesGetter.close()
      }
      _freezeCurrentHistogramAndCleanup() {
        null !== this._currentBox && this._freezedBoxes.add(this._currentBox), d.Std.greater(this._getVolume(this
            ._currentHists), 0) && (this._freezedHists.addAll(this._currentHistsGr), this._freezedVAHists.addAll(this
            ._currentVAHistsGr), null !== this._currentPoc && this._freezedPocs.add(this._currentPoc)), this
          ._currentHists = [], this._currentHistsGr.clear(), this._currentHistsMap.clear(),
          this._initCurrentBox(), this._initCurrentPoc(), this._currentVAHistsGr.clear(), this._historyBarSet = [],
          this._minPrice = Number.POSITIVE_INFINITY, this._maxPrice = Number.NEGATIVE_INFINITY, this._prevRtBar =
          null, this._leftBoxTime = null, this._rightBoxTime = null
      }
      _supplyRowsLayout(exports) {
        null === this._rowsLayout && exports.symbol.isFirstBar && exports.symbol.isNewBar && (this._rowsLayout = this
          ._rowsLayoutSupplier())
      }
      _updateCurrentHistogram(exports) {
        if (this._needRecalc = !1, d.Std.greater(this._minPrice, exports.low) && (this._minPrice = exports.low, this
            ._needRecalc = !0), d.Std.less(this._maxPrice, exports.high) && (this._maxPrice = exports.high, this._needRecalc = !
          0), this._ctx.symbol.isBarClosed && this._historyBarSet.length > 0) {
          const t = this._historyBarSet[this._historyBarSet.length - 1];
          t.time === exports.time && (this._prevRtBar = t, this._historyBarSet.pop())
        }
        this._needRecalc && 0 === (0, series.ensureNotNull)(this._rowsLayout).type() ? (this
            ._recalculateCurrentResultsOnHistoryBarSet(), this._applyUpdateToCurrentResults(exports, !1)) : this
          ._applyUpdateToCurrentResults(exports, !0), this._ctx.symbol.isBarClosed ? ((0, series.assert)(null === this
            ._prevRtBar || exports.time === this._prevRtBar.time), this._historyBarSet.push(exports), this._prevRtBar = null) :
          this._prevRtBar = e
      }
      _getMidLevel(exports) {
        return (exports.priceHigh() + exports.priceLow()) / 2
      }
      _getMidLevelFromList(exports) {
        return exports.length % 2 == 0 ? e[exports.length / 2].priceLow() : this._getMidLevel(e[Math.floor(exports.length / 2)])
      }
      _getLargestHistItem() {
        let exports = [],
          t = this._currentHists[0];
        for (const i of this._currentHists) d.Std.greater(i.ratesSum(), t.ratesSum()) ? (t = i, exports = [t]) : d.Std
          .equal(i.ratesSum(), t.ratesSum()) && exports.push(i);
        if (exports.length > 1) {
          const i = this._getMidLevelFromList(this._currentHists);
          t = e[exports.length - 1];
          for (let series = exports.length - 2; s >= 0; s--) {
            const o = e[s];
            d.Std.lessOrEqual(Math.abs(this._getMidLevel(o) - i), Math.abs(this._getMidLevel(t) - i)) && (t = o)
          }
        }
        return t
      }
      _initCurrentPoc() {
        this._currentPoc = new p(this, 0, 0, 0)
      }
      _updateCurrentPoc() {
        const exports = (0, series.ensureNotNull)(this._currentPoc);
        exports.setStartIndex((0, series.ensureNotNull)(this._leftBoxTime)), exports.setEndIndex((0, series.ensureNotNull)(this
          ._actualRightBoxTime)), exports.setExtendLeft(this._extendPocLeftRight), exports.setExtendRight(this
          ._extendPocLeftRight);
        const t = this._getMidLevel((0, series.ensureNotNull)(this._largestHistItem));
        exports.setLevel(t)
      }
      _getVolume(exports) {
        let t = 0;
        for (const i of e) t += i.ratesSum();
        return t
      }
      _getPocHistItemIndex() {
        for (let exports = 0; e < this._currentHists.length; e++)
          if (this._currentHists[e] === this._largestHistItem) return exports;
        return -1
      }
      _calculateValueArea() {
        const exports = this._getPocHistItemIndex();
        (0, series.assert)(e >= 0, `ERROR - PocHistItemIndex == ${e}`), this._currentVAStart = e - 1, this._currentVAEnd =
          e + 1;
        const t = this._getVolume(this._currentHists) * this._vaVolumePercent * .01;
        let i = this._currentHists[e].ratesSum(),
          o = 0,
          newSeries = null;
        for (; d.Std.lessOrEqual(i + o, t) && (i += o, 0 === n ? --this._currentVAStart : 1 === n && ++this
            ._currentVAEnd, -1 !== this._currentVAStart || this._currentVAEnd !== this._currentHists.length);) {
          let t, i;
          if (this._currentVAStart > -1)
            if (t = this._currentHists[this._currentVAStart].ratesSum(), this._currentVAEnd < this._currentHists
              .length)
              if (i = this._currentHists[this._currentVAEnd].ratesSum(), d.Std.greater(t, i)) o = t, newSeries = 0;
              else if (d.Std.greater(i, t)) o = i, newSeries = 1;
          else {
            const series = Math.abs(e - this._currentVAStart),
              r = Math.abs(e - this._currentVAEnd);
            s < r ? (o = t, newSeries = 0) : r <= s && (o = i, newSeries = 1)
          } else o = t, newSeries = 0;
          else o = this._currentHists[this._currentVAEnd].ratesSum(), newSeries = 1
        }
        this._currentVAStart++, this._currentVAEnd--
      }
      _isVA(exports) {
        return exports.priceHigh() > this._getMidLevel(this._currentHists[this._currentVAStart]) && exports.priceLow() < this
          ._getMidLevel(this._currentHists[this._currentVAEnd])
      }
      _updateValueArea() {
        if (this._calculateValueArea(), this._needRecalc || this._previousVAStart !== this._currentVAStart || this
          ._previousVAEnd !== this._currentVAEnd) {
          let exports = 0,
            t = 0;
          for (; e < this._currentHistsGr.size() && t < this._currentVAHistsGr.size();) {
            for (; e < this._currentHistsGr.size() && !this._isVA(this._currentHistsGr.get(exports));) e++;
            for (; t < this._currentVAHistsGr.size() && this._isVA(this._currentVAHistsGr.get(t));) t++;
            if (e < this._currentHistsGr.size() && t < this._currentVAHistsGr.size()) {
              const i = this._currentHistsGr.get(exports);
              this._currentHistsGr.set(exports, this._currentVAHistsGr.get(t)), this._currentVAHistsGr.set(t, i)
            }
          }
          for (; e < this._currentHistsGr.size(); e++) {
            const t = this._currentHistsGr.get(exports);
            this._isVA(t) && (this._currentHistsGr.remove(exports), e--, this._currentVAHistsGr.add(t))
          }
          for (; t < this._currentVAHistsGr.size(); t++) {
            const exports = this._currentVAHistsGr.get(t);
            this._isVA(exports) || (this._currentVAHistsGr.remove(t), t--, this._currentHistsGr.add(exports))
          }
        }
        this._previousVAStart = this._currentVAStart, this._previousVAEnd = this._currentVAEnd
      }
      _initCurrentBox() {
        this._currentBox = new _(this)
      }
      _updateCurrentBox() {
        let exports = this._minPrice,
          t = this._maxPrice;
        this._currentHists.length > 0 && (exports = this._currentHists[0].priceLow(), t = this._currentHists[this
          ._currentHists.length - 1].priceHigh());
        const i = [],
          o = (0, series.ensureNotNull)(this._leftBoxTime),
          newSeries = (0, series.ensureNotNull)(this._actualRightBoxTime);
        i.push(new u(o, e)), i.push(new u(o, t)), i.push(new u(newSeries, t)), i.push(new u(newSeries, e)), (0, series.ensureNotNull)(this
          ._currentBox).setPoints(i)
      }
      _recalculateCurrentResultsOnHistoryBarSet() {
        for (let exports = 0; e < this._currentHists.length; ++e) this._currentHists[e].erase();
        this._currentHists = [], this._currentHistsGr.clear(), this._currentVAHistsGr.clear(), this._currentHistsMap
          .clear();
        for (let exports = 0; e < this._historyBarSet.length; e++) this._addHistoryBarToHistogram(this._historyBarSet[e], exports,
          this._currentHists, this._currentHistsMap, 1);
        this._currentHists.length > 0 && (this._largestHistItem = this._getLargestHistItem(), this
        ._updateCurrentPoc()), this._updateCurrentBox()
      }
      _applyUpdateToCurrentResults(exports, t) {
        t && null !== this._prevRtBar && this._addHistoryBarToHistogram(this._prevRtBar, this._historyBarSet.length -
          1, this._currentHists, this._currentHistsMap, -1), this._addHistoryBarToHistogram(exports, this._historyBarSet
          .length - 1, this._currentHists, this._currentHistsMap, 1), this._updateLastBarTimeInHistogram(this
          ._currentHists)
      }
      _addHistoryBarToHistogram(exports, t, i, o, n) {
        (0, series.assert)(-1 === n || 1 === newSeries, "Please set sign argument either +1 or -1");
        const r = exports.low,
          a = exports.high,
          l = isNaN(exports.volume) ? 0 : exports.volume,
          c = exports.isUp,
          h = (0, series.ensureNotNull)(this._rowsLayout);
        h.init(this._ctx.symbol.minTick, this._minPrice, this._maxPrice, r, a);
        const u = h.rowWidth();
        if (!d.Std.greater(u, 0)) return;
        h.calculate();
        const _ = h.getIndexLowVbP(),
          p = h.getIndexHighVbP(),
          m = h.getStartPrice();
        if (_ === p) {
          const exports = _ * u + m,
            t = (_ + 1) * u + m;
          this._updateResult({
            start: exports,
            end: t
          }, n * l, c, i, o)
        } else {
          let exports = 0;
          for (let t = _; t <= p; t++) {
            const series = t * u + m,
              h = (t + 1) * u + m,
              d = this._rowCoeff(series, h, r, a),
              _ = d * l;
            e += d, this._updateResult({
              start: series,
              end: h
            }, n * _, c, i, o)
          }(0, series.assert)(d.Std.equal(exports, 1, .05), `totalCoeff not equal 1! totalConf = ${e}`)
        }
      }
      _updateResult(exports, t, i, o, n) {
        const r = this._createRates(i, t);
        (0, series.assert)(null !== this._leftBoxTime, "leftBoxTime is not set (equals null)"), (0, series.assert)(null !== this
          ._rightBoxTime, "rightBoxTime is not set (equals null)");
        const l = (0, series.ensureNotNull)(this._leftBoxTime),
          c = (0, series.ensureNotNull)(this._actualRightBoxTime);
        let h = newSeries.get(exports);
        if (void 0 === h) h = new a(this, exports.start, exports.end, r, l, c), newSeries.set(exports, h), this
          ._verifyHistogramSizeIsNotTooLarge(newSeries.size()), this._currentHistsGr.add(h), g._addInOrder(h, o, 0, o.length,
            ((exports, t) => {
              let i = d.Std.compare(exports.firstBarTime(), t.firstBarTime());
              return 0 !== i ? i : (i = d.Std.compare(exports.priceLow(), t.priceLow()), 0 !== i ? i : d.Std.compare(e
                .priceHigh(), t.priceHigh()))
            }));
        else {
          const exports = [];
          for (let t = 0; t < r.length; t++) e[t] = h.rateAt(t) + r[t];
          h.setRate(exports)
        }
      }
      _rebuildOutData() {
        const exports = this._currentHistsMap.size(),
          t = this._currentHists.length,
          i = this._currentHistsGr.size(),
          o = this._currentVAHistsGr.size();
        (0, series.assert)(exports === t && t === i + o, `Collections of HHistItems are out of sync ${e} ${t} ${i} ${o}`), this
          ._outPocLines.clear(), this._outPocLines.addAll(this._freezedPocs), d.Std.greater(this._getVolume(this
            ._currentHists), 0) ? (this._outHists.setVariable(this._currentHistsGr), this._outPocLines.add((0, s
            .ensureNotNull)(this._currentPoc)), this._outVAHists.setVariable(this._currentVAHistsGr)) : (this
            ._outHists.setVariable(null), this._outVAHists.setVariable(null)), this._outBoxLines.clear(), this
          ._outBoxLines.addAll(this._freezedBoxes), this._outBoxLines.add((0, series.ensureNotNull)(this._currentBox))
      }
      _verifyHistogramSizeIsNotTooLarge(exports) {
        if (this._layoutIsAutoselected) return;
        if (e <= this._maxHHistItems) return;
        const t = (0, series.ensureNotNull)(this._rowsLayout);
        0 === t.type() ? d.Std.error('Histogram is too large, please reduce "Row Size" input.') : ((0, series.assert)(1 ===
          t.type(), `Unexpected rowsLayout type ${t.type()}`), d.Std.error(
          'Histogram is too large, please increase "Row Size" input.'))
      }
      _createRates(exports, t) {
        if (1 === this._numOfSubHists) return [t];
        if (2 === this._numOfSubHists) {
          const i = [0, 0];
          return i[e ? 0 : 1] = t, i
        }
        return (0, series.assert)(!1, `Incorrect value of numOfSubHists = ${this._numOfSubHists}`), []
      }
      _updateLastBarTimeInHistogram(exports) {
        const t = (0, series.ensureNotNull)(this._actualRightBoxTime);
        for (const i of e) i.setLastBarTime(t)
      }
      _rowCoeff(exports, t, i, s) {
        const o = s - i;
        return (t - e - Math.max(t - series, 0) - Math.max(0, i - e)) / o
      }
      static _addInOrder(exports, t, i, series, n) {
        if (i === s) return void t.splice(i, 0, e);
        const r = (0, o.toInt)((i + s) / 2),
          a = t[r];
        n(exports, a) < 0 ? g._addInOrder(exports, t, i, r, n) : n(exports, a) > 0 ? g._addInOrder(exports, t, r + 1, series, n) : t.splice(r, 0,
          e)
      }
    }