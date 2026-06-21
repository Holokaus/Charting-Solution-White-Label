/**
 * Module 96777 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

96777: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      VolumeByPriceExpr: () => logger_g
    });
    var logger_s = logger_i(50151),
      logger_o = logger_i(77914),
      logger_n = logger_i(46082),
      logger_r = logger_i(86811);
    class logger_a extends logger_r.GraphicsObj {
      constructor(logger_e, logger_t, logger_i, logger_o, logger_n, logger_r) {
        super(logger_e), (0, logger_s.assert)(logger_t < logger_i), this._priceLow = this._mixinJSONObject.createDoubleField(logger_t, "priceLow"),
          this._priceHigh = this._mixinJSONObject.createDoubleField(logger_i, "priceHigh"), this._rate = this
          ._mixinJSONObject.createDoubleArrayField(logger_o, "rate"), this._firstBarTime = this._mixinJSONObject
          .createTimeField(logger_n, "firstBarTime"), this._lastBarTime = this._mixinJSONObject.createTimeField(logger_r,
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
      setPriceLow(logger_e) {
        this._priceLow.set(logger_e) && this._processObjUpdate()
      }
      priceLow() {
        return this._priceLow.get()
      }
      priceHigh() {
        return this._priceHigh.get()
      }
      setPriceHigh(logger_e) {
        this._priceHigh.set(logger_e) && this._processObjUpdate()
      }
      rate() {
        return this._rate.get().slice()
      }
      setRate(logger_e) {
        this._rate.set(logger_e) && this._processObjUpdate()
      }
      rateAt(logger_e) {
        return this._rate.get()[logger_e]
      }
      ratesSum() {
        let logger_e = 0;
        for (const logger_t of this._rate.get()) !Number.isNaN(logger_t) && Number.isFinite(logger_t) && (logger_e += logger_t);
        return logger_e
      }
      firstBarTime() {
        return this._firstBarTime.get()
      }
      setFirstBarTime(logger_e) {
        this._firstBarTime.set(logger_e) && this._processObjUpdate()
      }
      lastBarTime() {
        return this._lastBarTime.get()
      }
      setLastBarTime(logger_e) {
        this._lastBarTime.set(logger_e) && this._processObjUpdate()
      }
    }
    var logger_l, logger_c, logger_h = logger_i(30376),
      logger_d = logger_i(19979);
    class logger_u {
      constructor(logger_e, logger_t, logger_i) {
        this.index = logger_e, this.offset = logger_i, this.level = logger_t
      }
      isNaN() {
        return Number.isNaN(this.level)
      }
      equals(logger_e) {
        return logger_e instanceof logger_u && (!this.isNaN() && (!logger_e.isNaN() && (this.index === logger_e.index && this.offset === logger_e
          .offset && logger_d.Std.equal(this.level, logger_e.level))))
      }
      getLevel() {
        return this.level
      }
      getIndex() {
        return this.index
      }
    }
    class _ extends logger_r.GraphicsObj {
      constructor(logger_e, logger_t) {
        super(logger_e), this._points = [], logger_t && (this._points = logger_t)
      }
      addPoint(logger_e) {
        this._processObjUpdate(), this._points.push(logger_e)
      }
      addPoints(logger_e) {
        this._processObjUpdate(), this._points.push(...logger_e)
      }
      setPoint(logger_e, logger_t) {
        const logger_i = this._points[logger_e];
        logger_t.equals(logger_i) || (this._processObjUpdate(), this._points[logger_e] = logger_t)
      }
      point(logger_e) {
        const logger_t = this._points[logger_e];
        return new logger_u(logger_t.index, logger_t.level, logger_t.offset)
      }
      points() {
        return this._points
      }
      pointsCount() {
        return this._points.length
      }
      setPoints(logger_e) {
        if (logger_e.length === this._points.length) {
          let logger_t = !0;
          for (let logger_i = 0; logger_i < logger_e.length; ++logger_i)
            if (!logger_e[logger_i].equals(this._points[logger_i])) {
              logger_t = !1;
              break
            } if (logger_t) return
        }
        this._processObjUpdate(), this._points = [], this._points.push(...logger_e)
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
          points: this._points.map((logger_e => ({
            index: logger_e.index,
            offset: logger_e.offset,
            level: logger_e.level
          })))
        }
      }
    }
    class logger_p extends logger_r.GraphicsObj {
        constructor(logger_e, logger_t, logger_i, logger_s, logger_o = !1, logger_n = !1) {
          super(logger_e), this._endIndex = this._mixinJSONObject.createTimeField(logger_i, "endIndex"), this._extendLeft = this
            ._mixinJSONObject.createField(logger_o, "extendLeft"), this._extendRight = this._mixinJSONObject.createField(logger_n,
              "extendRight"), this._level = this._mixinJSONObject.createDoubleField(logger_s, "level"), this._startIndex =
            this._mixinJSONObject.createTimeField(logger_t, "startIndex")
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
        setStartIndex(logger_e) {
          this._startIndex.set(logger_e) && this._processObjUpdate()
        }
        endIndex() {
          return this._endIndex.get()
        }
        setEndIndex(logger_e) {
          this._endIndex.set(logger_e) && this._processObjUpdate()
        }
        level() {
          return this._level.get()
        }
        setLevel(logger_e) {
          this._level.set(logger_e) && this._processObjUpdate()
        }
        isExtendLeft() {
          return this._extendLeft.get()
        }
        setExtendLeft(logger_e) {
          this._extendLeft.set(logger_e) && this._processObjUpdate()
        }
        extendLeft() {
          return this.isExtendLeft()
        }
        isExtendRight() {
          return this._extendRight.get()
        }
        setExtendRight(logger_e) {
          this._extendRight.set(logger_e) && this._processObjUpdate()
        }
        extendRight() {
          return this.isExtendRight()
        }
      }! function(logger_e) {
        logger_e[logger_e.AssertAccuracy = .05] = "AssertAccuracy"
      }(logger_l || (logger_l = {})),
      function(logger_e) {
        logger_e[logger_e.START = 0] = "START", logger_e[logger_e.END = 1] = "END"
      }(logger_c || (logger_c = {}));
    class logger_m {
      constructor() {
        this._map = new Map
      }
      get(logger_e) {
        const logger_t = this._innerMap(logger_e.start);
        return logger_t && logger_t.get(logger_e.end)
      }
      set(logger_e, logger_t) {
        this._innerMap(logger_e.start, !0).set(logger_e.end, logger_t)
      }
      clear() {
        this._map.clear()
      }
      size() {
        let logger_e = 0;
        return this._map.forEach((logger_t => logger_e += logger_t.size)), logger_e
      }
      _innerMap(logger_e, logger_t) {
        let logger_i = this._map.get(logger_e);
        return void 0 === logger_i && logger_t && (logger_i = new Map, this._map.set(logger_e, logger_i)), logger_i
      }
    }
    class logger_g {
      constructor(logger_e, logger_t, logger_i, logger_o, logger_n, logger_r, logger_a, logger_l, logger_c, logger_d, logger_u, _, logger_p, logger_g, logger_f) {
        this._freezedBoxes = new logger_h.GraphicsList, this._freezedHists = new logger_h.GraphicsList, this._freezedPocs = new logger_h
          .GraphicsList, this._freezedVAHists = new logger_h.GraphicsList, this._currentHistsGr = new logger_h.GraphicsList, this
          ._currentVAHistsGr = new logger_h.GraphicsList,
          this._currentHists = [], this._currentHistsMap = new logger_m, this._currentBox = null, this._currentPoc = null,
          this._historyBarSet = [], this._prevRtBar = null, this._minPrice = Number.POSITIVE_INFINITY, this
          ._maxPrice = Number.NEGATIVE_INFINITY, this._leftBoxTime = null, this._rightBoxTime = null, this
          ._actualRightBoxTime = null, this._needRecalc = !1, this._largestHistItem = null, this._rowsLayout = null,
          this._currentVAStart = 0, this._currentVAEnd = 0, this._previousVAStart = 0, this._previousVAEnd = 0, this
          ._idsGenerator = null, (0, logger_s.assert)(1 === logger_e || 2 === logger_e), this._numOfSubHists = logger_e, this._outHists = logger_o, this
          ._outBoxLines = logger_n, this._outPocLines = logger_r, this._extendPocLeftRight = logger_a, this._outVAHists = logger_l, this
          ._vaVolumePercent = logger_c, this._rowsLayoutSupplier = logger_d, this._outHists.addStable(this._freezedHists), this
          ._outVAHists.addStable(this._freezedVAHists), this._maxHHistItems = logger_u, this._layoutIsAutoselected = logger_g, this
          ._leftBoxTimeMutable = _, this._rightBoxTimeMutable = logger_p, this._actualRightBoxTime = logger_f ?? logger_p, this._ctx = logger_t,
          this._seriesGetter = logger_i
      }
      update(logger_e) {
        this._supplyRowsLayout(this._ctx), null === this._currentBox && this._initCurrentBox(), null === this
          ._currentPoc && this._initCurrentPoc();
        const logger_t = this._timeScale().get(logger_e);
        this._leftBoxTime = this._leftBoxTimeMutable, this._rightBoxTime = this._rightBoxTimeMutable, this._ctx.symbol
          .isLastBar && !Number.isNaN(this._rightBoxTime) && (this._rightBoxTime = Math.min(logger_t + logger_n.Interval.parse(this
            ._ctx.symbol.interval + this._ctx.symbol.resolution).inMilliseconds(logger_t) - 1, this._rightBoxTime));
        const logger_i = logger_d.Std.greaterOrEqual(this._seriesClose().get(logger_e), this._seriesOpen().get(logger_e)),
          logger_s = {
            high: this._seriesHigh().get(logger_e),
            low: this._seriesLow().get(logger_e),
            volume: this._seriesVol().get(logger_e),
            isUp: logger_i,
            time: logger_t
          };
        this._updateCurrentHistogram(logger_s), this._currentHists.length > 0 && (this._largestHistItem = this
          ._getLargestHistItem(), this._updateCurrentPoc(), this._seriesGetter.developingPoc().set(this._currentPoc
            .level()), this._updateValueArea(), this._vaVolumePercent > 0 && (this._seriesGetter.developingVAHigh()
            .set(this._currentHists[this._currentVAEnd].priceHigh()), this._seriesGetter.developingVALow().set(this
              ._currentHists[this._currentVAStart].priceLow()))), this._updateCurrentBox(), this._rebuildOutData()
      }
      setIdsGeneratorProxy(logger_e) {
        this._idsGenerator = logger_e
      }
      nextGraphicsObjId() {
        return (0, logger_s.ensureNotNull)(this._idsGenerator).nextGraphicsObjId()
      }
      pushEraseObjCmd(logger_e, logger_t) {
        (0, logger_s.ensureNotNull)(this._idsGenerator).pushEraseObjCmd(logger_e, logger_t)
      }
      popEraseCmds() {
        return (0, logger_s.ensureNotNull)(this._idsGenerator).popEraseCmds()
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
        null !== this._currentBox && this._freezedBoxes.add(this._currentBox), logger_d.Std.greater(this._getVolume(this
            ._currentHists), 0) && (this._freezedHists.addAll(this._currentHistsGr), this._freezedVAHists.addAll(this
            ._currentVAHistsGr), null !== this._currentPoc && this._freezedPocs.add(this._currentPoc)), this
          ._currentHists = [], this._currentHistsGr.clear(), this._currentHistsMap.clear(),
          this._initCurrentBox(), this._initCurrentPoc(), this._currentVAHistsGr.clear(), this._historyBarSet = [],
          this._minPrice = Number.POSITIVE_INFINITY, this._maxPrice = Number.NEGATIVE_INFINITY, this._prevRtBar =
          null, this._leftBoxTime = null, this._rightBoxTime = null
      }
      _supplyRowsLayout(logger_e) {
        null === this._rowsLayout && logger_e.symbol.isFirstBar && logger_e.symbol.isNewBar && (this._rowsLayout = this
          ._rowsLayoutSupplier())
      }
      _updateCurrentHistogram(logger_e) {
        if (this._needRecalc = !1, logger_d.Std.greater(this._minPrice, logger_e.low) && (this._minPrice = logger_e.low, this
            ._needRecalc = !0), logger_d.Std.less(this._maxPrice, logger_e.high) && (this._maxPrice = logger_e.high, this._needRecalc = !
          0), this._ctx.symbol.isBarClosed && this._historyBarSet.length > 0) {
          const logger_t = this._historyBarSet[this._historyBarSet.length - 1];
          logger_t.time === logger_e.time && (this._prevRtBar = logger_t, this._historyBarSet.pop())
        }
        this._needRecalc && 0 === (0, logger_s.ensureNotNull)(this._rowsLayout).type() ? (this
            ._recalculateCurrentResultsOnHistoryBarSet(), this._applyUpdateToCurrentResults(logger_e, !1)) : this
          ._applyUpdateToCurrentResults(logger_e, !0), this._ctx.symbol.isBarClosed ? ((0, logger_s.assert)(null === this
            ._prevRtBar || logger_e.time === this._prevRtBar.time), this._historyBarSet.push(logger_e), this._prevRtBar = null) :
          this._prevRtBar = logger_e
      }
      _getMidLevel(logger_e) {
        return (logger_e.priceHigh() + logger_e.priceLow()) / 2
      }
      _getMidLevelFromList(logger_e) {
        return logger_e.length % 2 == 0 ? logger_e[logger_e.length / 2].priceLow() : this._getMidLevel(logger_e[Math.floor(logger_e.length / 2)])
      }
      _getLargestHistItem() {
        let logger_e = [],
          logger_t = this._currentHists[0];
        for (const logger_i of this._currentHists) logger_d.Std.greater(logger_i.ratesSum(), logger_t.ratesSum()) ? (logger_t = logger_i, logger_e = [logger_t]) : logger_d.Std
          .equal(logger_i.ratesSum(), logger_t.ratesSum()) && logger_e.push(logger_i);
        if (logger_e.length > 1) {
          const logger_i = this._getMidLevelFromList(this._currentHists);
          logger_t = logger_e[logger_e.length - 1];
          for (let logger_s = logger_e.length - 2; logger_s >= 0; logger_s--) {
            const logger_o = logger_e[logger_s];
            logger_d.Std.lessOrEqual(Math.abs(this._getMidLevel(logger_o) - logger_i), Math.abs(this._getMidLevel(logger_t) - logger_i)) && (logger_t = logger_o)
          }
        }
        return logger_t
      }
      _initCurrentPoc() {
        this._currentPoc = new logger_p(this, 0, 0, 0)
      }
      _updateCurrentPoc() {
        const logger_e = (0, logger_s.ensureNotNull)(this._currentPoc);
        logger_e.setStartIndex((0, logger_s.ensureNotNull)(this._leftBoxTime)), logger_e.setEndIndex((0, logger_s.ensureNotNull)(this
          ._actualRightBoxTime)), logger_e.setExtendLeft(this._extendPocLeftRight), logger_e.setExtendRight(this
          ._extendPocLeftRight);
        const logger_t = this._getMidLevel((0, logger_s.ensureNotNull)(this._largestHistItem));
        logger_e.setLevel(logger_t)
      }
      _getVolume(logger_e) {
        let logger_t = 0;
        for (const logger_i of logger_e) logger_t += logger_i.ratesSum();
        return logger_t
      }
      _getPocHistItemIndex() {
        for (let logger_e = 0; logger_e < this._currentHists.length; logger_e++)
          if (this._currentHists[logger_e] === this._largestHistItem) return logger_e;
        return -1
      }
      _calculateValueArea() {
        const logger_e = this._getPocHistItemIndex();
        (0, logger_s.assert)(logger_e >= 0, `ERROR - PocHistItemIndex == ${logger_e}`), this._currentVAStart = logger_e - 1, this._currentVAEnd =
          logger_e + 1;
        const logger_t = this._getVolume(this._currentHists) * this._vaVolumePercent * .01;
        let logger_i = this._currentHists[logger_e].ratesSum(),
          logger_o = 0,
          logger_n = null;
        for (; logger_d.Std.lessOrEqual(logger_i + logger_o, logger_t) && (logger_i += logger_o, 0 === logger_n ? --this._currentVAStart : 1 === logger_n && ++this
            ._currentVAEnd, -1 !== this._currentVAStart || this._currentVAEnd !== this._currentHists.length);) {
          let logger_t, logger_i;
          if (this._currentVAStart > -1)
            if (logger_t = this._currentHists[this._currentVAStart].ratesSum(), this._currentVAEnd < this._currentHists
              .length)
              if (logger_i = this._currentHists[this._currentVAEnd].ratesSum(), logger_d.Std.greater(logger_t, logger_i)) logger_o = logger_t, logger_n = 0;
              else if (logger_d.Std.greater(logger_i, logger_t)) logger_o = logger_i, logger_n = 1;
          else {
            const logger_s = Math.abs(logger_e - this._currentVAStart),
              logger_r = Math.abs(logger_e - this._currentVAEnd);
            logger_s < logger_r ? (logger_o = logger_t, logger_n = 0) : logger_r <= logger_s && (logger_o = logger_i, logger_n = 1)
          } else logger_o = logger_t, logger_n = 0;
          else logger_o = this._currentHists[this._currentVAEnd].ratesSum(), logger_n = 1
        }
        this._currentVAStart++, this._currentVAEnd--
      }
      _isVA(logger_e) {
        return logger_e.priceHigh() > this._getMidLevel(this._currentHists[this._currentVAStart]) && logger_e.priceLow() < this
          ._getMidLevel(this._currentHists[this._currentVAEnd])
      }
      _updateValueArea() {
        if (this._calculateValueArea(), this._needRecalc || this._previousVAStart !== this._currentVAStart || this
          ._previousVAEnd !== this._currentVAEnd) {
          let logger_e = 0,
            logger_t = 0;
          for (; logger_e < this._currentHistsGr.size() && logger_t < this._currentVAHistsGr.size();) {
            for (; logger_e < this._currentHistsGr.size() && !this._isVA(this._currentHistsGr.get(logger_e));) logger_e++;
            for (; logger_t < this._currentVAHistsGr.size() && this._isVA(this._currentVAHistsGr.get(logger_t));) logger_t++;
            if (logger_e < this._currentHistsGr.size() && logger_t < this._currentVAHistsGr.size()) {
              const logger_i = this._currentHistsGr.get(logger_e);
              this._currentHistsGr.set(logger_e, this._currentVAHistsGr.get(logger_t)), this._currentVAHistsGr.set(logger_t, logger_i)
            }
          }
          for (; logger_e < this._currentHistsGr.size(); logger_e++) {
            const logger_t = this._currentHistsGr.get(logger_e);
            this._isVA(logger_t) && (this._currentHistsGr.remove(logger_e), logger_e--, this._currentVAHistsGr.add(logger_t))
          }
          for (; logger_t < this._currentVAHistsGr.size(); logger_t++) {
            const logger_e = this._currentVAHistsGr.get(logger_t);
            this._isVA(logger_e) || (this._currentVAHistsGr.remove(logger_t), logger_t--, this._currentHistsGr.add(logger_e))
          }
        }
        this._previousVAStart = this._currentVAStart, this._previousVAEnd = this._currentVAEnd
      }
      _initCurrentBox() {
        this._currentBox = new _(this)
      }
      _updateCurrentBox() {
        let logger_e = this._minPrice,
          logger_t = this._maxPrice;
        this._currentHists.length > 0 && (logger_e = this._currentHists[0].priceLow(), logger_t = this._currentHists[this
          ._currentHists.length - 1].priceHigh());
        const logger_i = [],
          logger_o = (0, logger_s.ensureNotNull)(this._leftBoxTime),
          logger_n = (0, logger_s.ensureNotNull)(this._actualRightBoxTime);
        logger_i.push(new logger_u(logger_o, logger_e)), logger_i.push(new logger_u(logger_o, logger_t)), logger_i.push(new logger_u(logger_n, logger_t)), logger_i.push(new logger_u(logger_n, logger_e)), (0, logger_s.ensureNotNull)(this
          ._currentBox).setPoints(logger_i)
      }
      _recalculateCurrentResultsOnHistoryBarSet() {
        for (let logger_e = 0; logger_e < this._currentHists.length; ++logger_e) this._currentHists[logger_e].erase();
        this._currentHists = [], this._currentHistsGr.clear(), this._currentVAHistsGr.clear(), this._currentHistsMap
          .clear();
        for (let logger_e = 0; logger_e < this._historyBarSet.length; logger_e++) this._addHistoryBarToHistogram(this._historyBarSet[logger_e], logger_e,
          this._currentHists, this._currentHistsMap, 1);
        this._currentHists.length > 0 && (this._largestHistItem = this._getLargestHistItem(), this
        ._updateCurrentPoc()), this._updateCurrentBox()
      }
      _applyUpdateToCurrentResults(logger_e, logger_t) {
        logger_t && null !== this._prevRtBar && this._addHistoryBarToHistogram(this._prevRtBar, this._historyBarSet.length -
          1, this._currentHists, this._currentHistsMap, -1), this._addHistoryBarToHistogram(logger_e, this._historyBarSet
          .length - 1, this._currentHists, this._currentHistsMap, 1), this._updateLastBarTimeInHistogram(this
          ._currentHists)
      }
      _addHistoryBarToHistogram(logger_e, logger_t, logger_i, logger_o, logger_n) {
        (0, logger_s.assert)(-1 === logger_n || 1 === logger_n, "Please set sign argument either +1 or -1");
        const logger_r = logger_e.low,
          logger_a = logger_e.high,
          logger_l = isNaN(logger_e.volume) ? 0 : logger_e.volume,
          logger_c = logger_e.isUp,
          logger_h = (0, logger_s.ensureNotNull)(this._rowsLayout);
        logger_h.init(this._ctx.symbol.minTick, this._minPrice, this._maxPrice, logger_r, logger_a);
        const logger_u = logger_h.rowWidth();
        if (!logger_d.Std.greater(logger_u, 0)) return;
        logger_h.calculate();
        const _ = logger_h.getIndexLowVbP(),
          logger_p = logger_h.getIndexHighVbP(),
          logger_m = logger_h.getStartPrice();
        if (_ === logger_p) {
          const logger_e = _ * logger_u + logger_m,
            logger_t = (_ + 1) * logger_u + logger_m;
          this._updateResult({
            start: logger_e,
            end: logger_t
          }, logger_n * logger_l, logger_c, logger_i, logger_o)
        } else {
          let logger_e = 0;
          for (let logger_t = _; logger_t <= logger_p; logger_t++) {
            const logger_s = logger_t * logger_u + logger_m,
              logger_h = (logger_t + 1) * logger_u + logger_m,
              logger_d = this._rowCoeff(logger_s, logger_h, logger_r, logger_a),
              _ = logger_d * logger_l;
            logger_e += logger_d, this._updateResult({
              start: logger_s,
              end: logger_h
            }, logger_n * _, logger_c, logger_i, logger_o)
          }(0, logger_s.assert)(logger_d.Std.equal(logger_e, 1, .05), `totalCoeff not equal 1! totalConf = ${logger_e}`)
        }
      }
      _updateResult(logger_e, logger_t, logger_i, logger_o, logger_n) {
        const logger_r = this._createRates(logger_i, logger_t);
        (0, logger_s.assert)(null !== this._leftBoxTime, "leftBoxTime is not set (equals null)"), (0, logger_s.assert)(null !== this
          ._rightBoxTime, "rightBoxTime is not set (equals null)");
        const logger_l = (0, logger_s.ensureNotNull)(this._leftBoxTime),
          logger_c = (0, logger_s.ensureNotNull)(this._actualRightBoxTime);
        let logger_h = logger_n.get(logger_e);
        if (void 0 === logger_h) logger_h = new logger_a(this, logger_e.start, logger_e.end, logger_r, logger_l, logger_c), logger_n.set(logger_e, logger_h), this
          ._verifyHistogramSizeIsNotTooLarge(logger_n.size()), this._currentHistsGr.add(logger_h), logger_g._addInOrder(logger_h, logger_o, 0, logger_o.length,
            ((logger_e, logger_t) => {
              let logger_i = logger_d.Std.compare(logger_e.firstBarTime(), logger_t.firstBarTime());
              return 0 !== logger_i ? logger_i : (logger_i = logger_d.Std.compare(logger_e.priceLow(), logger_t.priceLow()), 0 !== logger_i ? logger_i : logger_d.Std.compare(logger_e
                .priceHigh(), logger_t.priceHigh()))
            }));
        else {
          const logger_e = [];
          for (let logger_t = 0; logger_t < logger_r.length; logger_t++) logger_e[logger_t] = logger_h.rateAt(logger_t) + logger_r[logger_t];
          logger_h.setRate(logger_e)
        }
      }
      _rebuildOutData() {
        const logger_e = this._currentHistsMap.size(),
          logger_t = this._currentHists.length,
          logger_i = this._currentHistsGr.size(),
          logger_o = this._currentVAHistsGr.size();
        (0, logger_s.assert)(logger_e === logger_t && logger_t === logger_i + logger_o, `Collections of HHistItems are out of sync ${logger_e} ${logger_t} ${logger_i} ${logger_o}`), this
          ._outPocLines.clear(), this._outPocLines.addAll(this._freezedPocs), logger_d.Std.greater(this._getVolume(this
            ._currentHists), 0) ? (this._outHists.setVariable(this._currentHistsGr), this._outPocLines.add((0, logger_s
            .ensureNotNull)(this._currentPoc)), this._outVAHists.setVariable(this._currentVAHistsGr)) : (this
            ._outHists.setVariable(null), this._outVAHists.setVariable(null)), this._outBoxLines.clear(), this
          ._outBoxLines.addAll(this._freezedBoxes), this._outBoxLines.add((0, logger_s.ensureNotNull)(this._currentBox))
      }
      _verifyHistogramSizeIsNotTooLarge(logger_e) {
        if (this._layoutIsAutoselected) return;
        if (logger_e <= this._maxHHistItems) return;
        const logger_t = (0, logger_s.ensureNotNull)(this._rowsLayout);
        0 === logger_t.type() ? logger_d.Std.error('Histogram is too large, please reduce "Row Size" input.') : ((0, logger_s.assert)(1 ===
          logger_t.type(), `Unexpected rowsLayout type ${logger_t.type()}`), logger_d.Std.error(
          'Histogram is too large, please increase "Row Size" input.'))
      }
      _createRates(logger_e, logger_t) {
        if (1 === this._numOfSubHists) return [logger_t];
        if (2 === this._numOfSubHists) {
          const logger_i = [0, 0];
          return logger_i[logger_e ? 0 : 1] = logger_t, logger_i
        }
        return (0, logger_s.assert)(!1, `Incorrect value of numOfSubHists = ${this._numOfSubHists}`), []
      }
      _updateLastBarTimeInHistogram(logger_e) {
        const logger_t = (0, logger_s.ensureNotNull)(this._actualRightBoxTime);
        for (const logger_i of logger_e) logger_i.setLastBarTime(logger_t)
      }
      _rowCoeff(logger_e, logger_t, logger_i, logger_s) {
        const logger_o = logger_s - logger_i;
        return (logger_t - logger_e - Math.max(logger_t - logger_s, 0) - Math.max(0, logger_i - logger_e)) / logger_o
      }
      static _addInOrder(logger_e, logger_t, logger_i, logger_s, logger_n) {
        if (logger_i === logger_s) return void logger_t.splice(logger_i, 0, logger_e);
        const logger_r = (0, logger_o.toInt)((logger_i + logger_s) / 2),
          logger_a = logger_t[logger_r];
        logger_n(logger_e, logger_a) < 0 ? logger_g._addInOrder(logger_e, logger_t, logger_i, logger_r, logger_n) : logger_n(logger_e, logger_a) > 0 ? logger_g._addInOrder(logger_e, logger_t, logger_r + 1, logger_s, logger_n) : logger_t.splice(logger_r, 0,
          logger_e)
      }
    }