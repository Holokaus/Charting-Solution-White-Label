/**
 * Module 41414 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

41414: (series_e, series_t, series_i) => {
    "use strict";
    series_i.series_d(series_t, {
      LineDataSource: () => U,
      changePointUndoText: () => series_z
    });
    var series_s = series_i(89880),
      series_o = series_i(10555),
      series_n = series_i(50151),
      series_r = series_i(87465),
      series_a = series_i(76422),
      series_l = series_i(9343),
      series_c = series_i(37103),
      series_h = series_i(32955),
      series_d = series_i(99955),
      series_u = series_i(48943),
      _ = series_i(48096),
      series_p = series_i(58043),
      series_m = series_i(22613),
      series_g = series_i(51304),
      series_f = series_i(12178),
      series_y = series_i(81922),
      series_v = series_i(37293),
      S = series_i(95059),
      series_b = series_i(36597),
      series_w = series_i(46082),
      C = series_i(43337),
      T = series_i(78861),
      P = series_i(72207),
      series_x = series_i(97719),
      M = series_i(40472),
      I = series_i(22455),
      A = series_i(95804),
      L = series_i(75550);
    class series_k extends C.Property {
      constructor(series_e, series_t) {
        super(), this._lineSource = series_e, this._pointIndex = series_t, series_e.pointAdded().subscribe(this, (series_e => {
          this._pointIndex === series_e && this._listeners.fire(this, `${series_e}`)
        })), series_e.pointChanged().subscribe(this, (series_e => {
          this._pointIndex === series_e && this._listeners.fire(this, `${series_e}`)
        }))
      }
      value() {
        const series_e = this._lineSource.points()[this._pointIndex].price,
          series_t = (0, series_n.ensureNotNull)(this._lineSource.ownerSource()).formatter();
        if (series_t.parse) {
          const series_i = series_t.format(series_e),
            series_s = series_t.parse(series_i);
          return series_s.res ? series_s.value : series_e
        }
        return series_e
      }
      setValue(series_e) {
        const series_t = this._lineSource.points()[this._pointIndex];
        series_t.price = parseFloat("" + series_e), this._lineSource.startChanging(this._pointIndex, series_t), this._lineSource
          .setPoint(this._pointIndex, series_t), this._lineSource.model().updateSource(this._lineSource), this._listeners
          .fire(this, "");
        const series_i = this._lineSource.endChanging(!0, !1);
        this._lineSource.syncMultichartState(series_i)
      }
    }
    var E = series_i(79740),
      D = series_i(47432),
      B = series_i(65045),
      V = series_i(56876),
      R = series_i(60973),
      N = series_i(76559);
    const O = (0, series_l.getLogger)("Chart.LineDataSource"),
      F = series_c.enabled("datasource_copypaste");
    class W {
      constructor() {
        this._states = []
      }
      start(series_e) {
        this._states.push(series_e)
      }
      finish(series_e) {
        const series_t = (0, series_n.ensureDefined)(this._states.pop());
        return series_s = series_t, (series_i = series_e).length !== series_s.length ? {
          indexesChanged: !0,
          pricesChanged: !0
        } : series_i.reduce(((series_e, series_t, series_i) => {
          const series_o = series_s[series_i];
          return series_e.indexesChanged = series_e.indexesChanged || series_t.index !== series_o.index, series_e.pricesChanged = series_e
            .pricesChanged || series_t.price !== series_o.price, series_e
        }), {
          indexesChanged: !1,
          pricesChanged: !1
        });
        var series_i, series_s
      }
      isEmpty() {
        return 0 === this._states.length
      }
    }
    let H = 0;
    const series_z = new A.TranslatedString("change point", series_s.series_t(null, void 0, series_i(76660)));
    class U extends P.DataSource {
      constructor(series_e, series_t, series_i, series_s) {
        if (super(series_s), this.isLineTool = !0, this.version = 1, this.toolname = "", this.customization = {
            forcePriceAxisLabel: !1,
            disableErasing: !1,
            disableSave: !1,
            showInObjectsTree: !0
          }, this._currentPointsetAndSymbolId = null, this._pointChanged = new _.Delegate, this._pointAdded = new _
          .Delegate, this._priceAxisViews = [], this._timeAxisViews = [], this._timePoint = [], this._points = [],
          this._lastPoint = null, this._paneViews = new Map, this._signaturesPaneViews = new Map, this
          ._normalizedPointsChanged = new _.Delegate, this._fixedPointsChanged = new _.Delegate, this
          ._changeStatesStack = new W, this._startMovingPoint = null, this._currentMovingPoint = null, this
          ._isActualSymbol = !1, this._isActualInterval = !1, this._isActualCurrency = !1, this._isActualUnit = !1,
          this._symbolSource = null, this._symbolSourceSymbolInfo = null, this._sharingMode = new series_m.WatchedValue(0),
          this._onTemplateApplying = new _.Delegate, this._onTemplateApplied = new _.Delegate, this
          ._syncStateExclusions = ["interval"], this._definitionsViewModel = null, this._hasEditableCoordinates =
          new series_m.WatchedValue(!0), this._syncLineStyleMuted = !1, this._onIsActualIntervalChange = new _.Delegate,
          this._onIsActualSymbolChange = new _.Delegate, this._onPointsetUpdatedDelegate = new _.Delegate,
          this._onServerUpdateTime = new _.Delegate, this._linkKey = new series_m.WatchedValue(null), this
          ._serverUpdateTime = null, this._boundCalcIsActualSymbol = this.calcIsActualSymbol.bind(this), this
          ._alignerCache = null, this._alertUndoMode = !1, this._targetSignature = new series_m.WatchedValue(null), this
          ._firstSignatureOwnerSource = null, this._sourcesSignatures = null, this._onAlertStatusChanged = () => {
            this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id()))
          }, this._model = series_e, this._properties = series_t, this._localAndServerAlertsMismatch = !1, this._properties
          .hasChild("interval") || this._properties.addChild("interval", new C.Property(series_e.mainSeries().interval())),
          this.calcIsActualSymbol(), this._properties.childs().intervalsVisibilities.subscribe(this, this
            .calcIsActualSymbol), this._properties.subscribe(this, this.propertiesChanged.bind(this, !1, void 0)),
          this.zOrderChanged().subscribe(this, this.propertiesChanged.bind(this, !0, void 0)), this
          ._createPointsProperties(), this.pointsCount() > 0)
          for (let series_e = 0; series_e < this.pointsCount(); series_e++) this._priceAxisViews.push(this.createPriceAxisView(series_e)), this
            ._timeAxisViews.push(new E.LineDataSourceTimeAxisView(this, series_e));
        this._properties.childs().visible.subscribe(this, (series_e => {
            const series_t = !1 === (0, T.hideAllDrawings)().value();
            series_e.value() ? series_e.value() && series_t && series_a.emit("drawing_event", this._id.value(), "show") : (this._model
              .selection().isSelected(this) && this._model.selectionMacro((series_e => {
                series_e.removeSourceFromSelection(this)
              })), series_t && series_a.emit("drawing_event", this._id.value(), "hide")), this._onSourceHiddenMayChange()
          })), (0, T.hideAllDrawings)().subscribe(this, this._onSourceHiddenMayChange), this._sessionConnected =
          this._model.chartApi().isConnected().spawn(), this._sessionConnected.subscribe((series_e => {
            series_e || (this._currentPointsetAndSymbolId = null)
          })), this._alertStatus.subscribe(this._onAlertStatusChanged), this._definitionsViewModel = null, this
          ._properties.setNameInOwner((0, N.propertyPathForSource)(this)), this._sourcesSignatures = series_e
          .sourcesSignatures().spawn(), this._sourcesSignatures.subscribe(this._updateSignaturesPaneViews.bind(
            this)), this._targetSignature.subscribe(this._updateSignaturesPaneViews.bind(this))
      }
      destroy() {
        this._paneViews.forEach(((series_e, series_t) => this._destroyPanePaneViews(series_t))), this.stop(), null !== this
          ._definitionsViewModel && (this._definitionsViewModel.destroy(), this._definitionsViewModel = null),
          null !== this._ownerSource && (this._ownerSource.currencyChanged().unsubscribeAll(this), this._ownerSource
            .unitChanged().unsubscribeAll(this), (0, I.isSymbolSource)(this._ownerSource) && (this._ownerSource
              .symbolResolved().unsubscribeAll(this), this._ownerSource.isActingAsSymbolSource().unsubscribe(this
                ._boundCalcIsActualSymbol))), this.ownerSourceChanged().unsubscribeAll(this), this._symbolSource
          ?.destroy(), this._symbolSourceSymbolInfo?.destroy(), (0, T.hideAllDrawings)().unsubscribeAll(this), this
          ._sessionConnected.destroy(), this._alertStatus.unsubscribe(this._onAlertStatusChanged), this._properties
          .destroy(), this._sourcesSignatures?.destroy(), this._firstSignatureOwnerSource?.destroy(), super
          .destroy()
      }
      setId(series_e) {
        super.setId(series_e), this._properties.setNameInOwner((0, N.propertyPathForSource)(this))
      }
      priceScale() {
        return this._ownerSource ? this._ownerSource.priceScale() : null
      }
      createPriceAxisView(series_e) {
        return new D.LineToolPriceAxisView(this, {
          pointIndex: series_e
        })
      }
      model() {
        return this._model
      }
      symbol() {
        return this._properties.childs().symbol.value()
      }
      linkKey() {
        return this._linkKey
      }
      serverUpdateTime() {
        return this._serverUpdateTime
      }
      setServerUpdateTime(series_e) {
        this._serverUpdateTime = series_e, this._onServerUpdateTime.fire()
      }
      serverUpdateTimeChanged() {
        return this._onServerUpdateTime
      }
      adjustedToSplitTime() {
        return null
      }
      adjustToSplit(series_e, series_t) {}
      boundToSymbol() {
        return !0
      }
      isAvailableInFloatingWidget() {
        return !0
      }
      points() {
        const series_e = [];
        for (let series_t = 0; series_t < this._points.length; series_t++) {
          const series_i = this._points[series_t];
          series_e.push({
            index: series_i.index,
            price: series_i.price,
            time: series_i.time
          })
        }
        return this._lastPoint && series_e.push(this._correctLastPoint(this._lastPoint)), !this.isFixed() && this
          ._currentMovingPoint && this._startMovingPoint && this._correctPoints(series_e), series_e
      }
      timeAxisPoints() {
        return this.points()
      }
      priceAxisPoints() {
        return this.points()
      }
      fixedPoint(series_e) {
        if (!this.isFixed()) return;
        let series_t;
        const series_i = series_e ? series_e.priceScale() : this.priceScale();
        if (this._positionPercents && null !== series_i && !series_i.isEmpty()) {
          const series_e = this._positionPercents,
            series_s = this._model.timeScale().width() * series_e.series_x,
            series_n = series_i.height() * series_e.series_y;
          series_t = new series_o.Point(series_s, series_n)
        } else void 0 !== this._fixedPoint && (series_t = this._fixedPoint?.clone());
        if (this._currentMovingPoint && this._startMovingPoint && void 0 !== series_t) {
          const series_e = this._correctFixedPoint(series_t);
          series_e.didCorrect && (series_t = series_e.point)
        }
        return series_t
      }
      positionPercents() {
        return this.isFixed() ? this._positionPercents : void 0
      }
      clearFixedPoint() {
        this._fixedPoint = void 0, this._positionPercents = void 0
      }
      normalizedPoints() {
        return this._timePoint
      }
      normalizedPointsForCreating() {
        return this.normalizedPoints()
      }
      normalizedPointsChanged() {
        return this._normalizedPointsChanged
      }
      fixedPointChanged() {
        return this._fixedPointsChanged
      }
      geometry() {
        const series_e = (0, series_n.ensureNotNull)(this.priceScale());
        return this.points().map((series_t => {
          const series_i = (0, series_n.ensureNotNull)(this.pointToScreenPoint(series_t)),
            series_s = series_i.series_x / this._model.timeScale().width(),
            series_r = series_i.series_y / series_e.height();
          return new series_o.Point(series_s, series_r)
        }))
      }
      widthsProperty() {
        return this._properties.childs().linesWidths ?? null
      }
      lineColorsProperty() {
        return this._properties.childs().linesColors ?? null
      }
      backgroundColorsProperty() {
        return this._properties.childs().backgroundsColors ?? null
      }
      textColorsProperty() {
        return this._properties.childs().textsColors ?? null
      }
      pointsProperty() {
        return this._pointsProperty
      }
      hasEditableCoordinates() {
        return this._hasEditableCoordinates
      }
      startMoving(series_e, series_t, series_i, series_s) {
        this.isFixed() && this.restoreFixedPoint(), this._startMovingPoint = series_e
      }
      move(series_e, series_t, series_i, series_s) {
        if (series_i && (series_i.shiftOnly() || series_i.modShift()))
          if (this.isFixed()) {
            const series_t = this._alignScreenPointHorizontallyOrVertically((0, series_n.ensureDefined)(series_e.screen));
            this._currentMovingPoint = {
              screen: series_t
            }
          } else {
            const series_t = this._alignPointHorizontallyOrVertically((0, series_n.ensureDefined)(series_e.logical)),
              series_i = (0, series_n.ensureNotNull)(this.pointToScreenPoint(series_t));
            this._currentMovingPoint = {
              logical: series_t,
              screen: series_i
            }
          }
        else this._currentMovingPoint = series_e;
        this.updateAllViews((0, M.sourceChangeEvent)(this.id()))
      }
      endMoving(series_e, series_t, series_i) {
        let series_s = !1,
          series_o = !1;
        if (this._currentMovingPoint && this._startMovingPoint) {
          if (this.isFixed()) {
            const series_e = this._correctFixedPoint((0,
              series_n.ensureDefined)(this._fixedPoint));
            series_e.didCorrect && (this._fixedPoint = series_e.point, this._fixedPointsChanged.fire())
          } else {
            const series_e = (0, series_n.ensureDefined)(this._currentMovingPoint.logical),
              series_t = (0, series_n.ensureDefined)(this._startMovingPoint.logical);
            series_s = series_e.index !== series_t.index, series_o = series_e.price !== series_t.price;
            if (this._correctPoints(this._points, series_i)) {
              const series_e = this._id.value();
              series_a.emit("drawing_event", series_e, "move"), series_a.emit("drawing_event", series_e, "points_changed"), this
                ._updateAdjustedToSplitTimeValue();
              for (let series_e = 0; series_e < this._points.length; series_e++) this._pointChanged.fire(series_e)
            }
          }
          this._startMovingPoint = null, this._currentMovingPoint = null
        }
        const series_r = {
          indexesChanged: series_s,
          pricesChanged: series_o
        };
        return this.isFixed() ? (this.calcPositionPercents(), this.updateAllViews((0, M.sourceChangeEvent)(this
        .id())), series_r) : (series_s && this._points.forEach((series_e => series_e.interval = this._model.mainSeries().interval())), this
          .updateAllViews((0, M.sourceChangeEvent)(this.id())), series_s && !series_e ? (this._properties.childs().interval
            .setValue(this._model.mainSeries().interval()), this._normalizePoints(), this.createServerPoints()) :
          (this._copyPricesWithoutNormalization(), this._normalizedPointsChanged.fire()), series_r)
      }
      startMovingPoint() {
        return this._startMovingPoint ? {
          ...this._startMovingPoint
        } : null
      }
      currentMovingPoint() {
        return this._currentMovingPoint ? {
          ...this._currentMovingPoint
        } : null
      }
      changePointUndoText(series_e) {
        return series_z
      }
      startChanging(series_e, series_t) {
        this.isFixed() && this.restoreFixedPoint(), void 0 !== series_e && void 0 !== series_t && (series_e < this._priceAxisViews
          .length && this._priceAxisViews[series_e].setActive(!0), series_e < this._timeAxisViews.length && this._timeAxisViews[
            series_e].setActive(!0)), this._changeStatesStack.start(this.points())
      }
      endChanging(series_e, series_t, series_i) {
        const series_s = this._changeStatesStack.finish(this.points());
        series_s.indexesChanged && this._changeStatesStack.isEmpty() ? (this._normalizePoints(), series_t || this
            .createServerPoints()) : (this._copyPricesWithoutNormalization(), this._normalizedPointsChanged.fire()),
          series_a.emit("drawing_event", this._id.value(), "points_changed"), this._updateAdjustedToSplitTimeValue();
        for (let series_e = 0; series_e < this._priceAxisViews.length; series_e++) this._priceAxisViews[series_e].setActive(!1);
        for (let series_e = 0; series_e < this._timeAxisViews.length; series_e++) this._timeAxisViews[series_e].setActive(!1);
        return series_s
      }
      setPoint(series_e, series_t, series_i, series_s) {
        if (this._snapTo45DegreesApplicable(series_i)) {
          const series_i = 0 === series_e ? 1 : series_e - 1;
          this.snapPoint45Degree(series_t, this.points()[series_i])
        }
        this._setPoint(series_e, {
          ...series_t,
          interval: this._model.mainSeries().interval()
        })
      }
      getPoint(series_e) {
        return this.points()[series_e] || null
      }
      alignCrossHairToAnchor(series_e) {
        return !0
      }
      alignCrossHairToMovePoint() {
        return !1
      }
      setLastPoint(series_e, series_t, series_i = !0) {
        return this._lastPoint = series_i ? this._preparePoint(series_e, series_t) : series_e, this.updateAllViews((0, M.sourceChangeEvent)(this
          .id())), this._lastPoint
      }
      lastPoint() {
        return this._lastPoint
      }
      getChangePointForSync(series_e) {
        return this.getPoint(series_e)
      }
      setPoints(series_e) {
        const series_t = this._model.mainSeries().interval();
        this._points = series_e.map((series_e => ({
          ...series_e,
          interval: series_e.interval ?? series_t
        })))
      }
      isForcedDrawPriceAxisLabel() {
        return this.customization.forcePriceAxisLabel
      }
      clearData() {
        this._points = []
      }
      denormalizeTimePoints() {
        let series_e = [];
        const series_t = this._model.mainSeries().interval();
        for (let series_i = 0; series_i < this._timePoint.length; series_i++) {
          const series_s = this._model.timeScale().denormalizeTimePoint(this._timePoint[series_i]);
          if (void 0 === series_s) {
            series_e = [];
            break
          }
          series_e.push({
            index: series_s,
            price: this._timePoint[series_i].price,
            interval: this._timePoint[series_i].interval ?? series_t
          })
        }
        series_e.length > 0 && (this._points = series_e)
      }
      restorePoints(series_e, series_t, series_i) {
        const series_s = this._timePoint.length > 0 && !(0, series_r.deepEquals)(this._timePoint, series_e)[0],
          series_o = this._properties.childs().interval.value();
        this._timePoint = series_e.map((series_e => ({
          ...series_e,
          interval: series_e.interval ?? series_o
        })));
        const series_n = this._model.mainSeries().interval();
        this._points = series_t.map((series_e => ({
          ...series_e,
          interval: series_n
        }))), series_i || this.denormalizeTimePoints(), series_s && this._normalizedPointsChanged.fire()
      }
      restorePositionPercents(series_e) {
        this._positionPercents = series_e, this.restoreFixedPoint()
      }
      calcIsActualSymbol() {
        const series_e = this.ownerSource(),
          series_t = this._isActualSymbol;
        if (null === series_e) this._isActualSymbol = !1;
        else {
          const series_e = this._symbolSource?.value(),
            series_t = this._symbolSourceSymbolInfo?.value();
          if (series_t && series_e) {
            this._migrateSymbolProperty(series_t);
            const series_i = this._properties.childs().symbol,
              series_s = series_i.value();
            if (this._isActualSymbol = series_e.symbolSameAsCurrent(series_s), this._isActualSymbol) {
              const series_o = (0, S.extractLineToolSymbolFromSymbolInfo)(series_t, series_e.symbol());
              (0, series_b.areEqualSymbols)(series_s, series_o) || (O.logWarn('Possible drawing "migrating" detected from "' + series_s +
                '" to "' + series_o + '"'), O.logWarn("Series symbolInfo: " + JSON.stringify(series_e.symbolInfo())), O.logWarn(
                `${(new Error).stack}`)), series_i.setValue(series_o)
            }
          }
        }
        this._isActualSymbol !== series_t && this._onIsActualSymbolChange.fire(), this.calcIsActualInterval(), this
          .calcIsActualCurrency(), this.calcIsActualUnit(), this._onSourceHiddenMayChange()
      }
      calcIsActualCurrency() {
        const series_e = this.ownerSource();
        if (null === series_e) return void(this._isActualCurrency = !1);
        let series_t = this._properties.childs().currencyId.value();
        if (null !== series_t) {
          const series_i = series_e.symbolSource();
          0, this._isActualCurrency = series_t === (0, S.symbolCurrency)(series_i.symbolInfo(), void 0, !0)
        } else {
          const series_t = (0, series_n.ensureNotNull)(series_e.symbolSource());
          this._isActualCurrency = null !== series_t.symbolInfo() && !series_t.isConvertedToOtherCurrency()
        }
        this._onSourceHiddenMayChange()
      }
      calcIsActualUnit() {
        const series_e = this.ownerSource();
        if (null === series_e) return void(this._isActualUnit = !1);
        const series_t = this._properties.childs().unitId.value();
        if (null !== series_t) this._isActualUnit = series_t === (0, series_n.ensureNotNull)(series_e.symbolSource()).unit();
        else {
          const series_t = (0, series_n.ensureNotNull)(series_e.symbolSource());
          this._isActualUnit = null !== series_t.symbolInfo() && !series_t.isConvertedToOtherUnit()
        }
        this._onSourceHiddenMayChange()
      }
      calcIsActualInterval() {
        const series_e = this._isActualInterval,
          series_t = this._properties,
          series_i = this._model.mainSeries();
        this._isActualInterval = (0, series_y.isActualInterval)(series_w.Interval.parse(series_i.interval()), series_t.childs()
            .intervalsVisibilities), !this._isActualInterval && this._model.selection().isSelected(this) && this
          ._model.selectionMacro((series_e => series_e.removeSourceFromSelection(this))), this._isActualInterval !== series_e && this
          ._onIsActualIntervalChange.fire(), this._onSourceHiddenMayChange()
      }
      paneViews(series_e) {
        if (this.isSourceHidden()) return null;
        const series_t = this._getPaneViews(this.isMultiPaneAvailable() ? series_e : void 0);
        if (null === series_t) return null;
        if (1 === series_t.length) return [series_t[0]];
        const series_i = [];
        for (let series_e = series_t.length - 1; series_e >= 0; --series_e) series_i.push(series_t[series_e]);
        return series_i
      }
      priceAxisViews(series_e, series_t) {
        if (this.isFixed()) return null;
        if (series_t !== this.priceScale() || this.isSourceHidden()) return null;
        if (this._model.lineBeingEdited() === this) {
          const series_e = this._model.linePointBeingEdited();
          if (null !== series_e && series_e < this._priceAxisViews.length) {
            const series_t = this._priceAxisViews.slice(),
              series_i = series_t[series_e];
            return series_t.splice(series_e, 1), series_t.push(series_i), series_t
          }
          return this._priceAxisViews
        }
        return this._priceAxisViews
      }
      timeAxisViews() {
        if (this.isSourceHidden() || this.isFixed()) return null;
        if (this._model.lineBeingEdited() === this) {
          const series_e = this._model.linePointBeingEdited();
          if (null !== series_e && series_e < this._timeAxisViews.length) {
            const series_t = this._timeAxisViews.slice(),
              series_i = series_t[series_e];
            return series_t.splice(series_e, 1), series_t.push(series_i), series_t
          }
          return this._timeAxisViews
        }
        return this._timeAxisViews
      }
      isSavedInChart() {
        return !this.customization.disableSave
      }
      isSavedInStudyTemplates() {
        return !1
      }
      setSavingInChartEnabled(series_e) {
        this.customization.disableSave = !series_e
      }
      shouldBeRemovedOnDeselect() {
        return !1
      }
      getOrderTemplate() {
        return null
      }
      getSourceIcon() {
        return {
          type: "loadSvg",
          svgId: "linetool." + this.toolname
        }
      }
      alertId() {
        return this._alertId
      }
      async waitSettingAlertId() {
        this._pendingAlertIdPromise && (this._alertId = await this._pendingAlertIdPromise)
      }
      async setAlert(series_e, series_t = {}) {
        throw new Error("not implemented")
      }
      async restoreAlert(series_e, series_t) {
        throw new Error("not implemented")
      }
      editAlert(series_e) {}
      async getAlert() {
        try {
          const series_e = await this._getChartAlert();
          if (!series_e) throw O.logError("Failed to get alert, alert will not be saved with drawing in chart"), new Error(
            "got_no_alert");
          return series_e
        } catch (series_e) {
          if (series_e instanceof Error && "not implemented" === series_e.message) throw series_e;
          if ("not_exists" === series_e) throw new Error(series_e);
          return O.logError(`Getting alert failed: ${series_e instanceof Error?series_e.message:series_e}`), null
        }
      }
      getAlertSync() {
        return null
      }
      async synchronizeAlert(series_e = !1) {}
      syncAlert(series_e) {
        0
      }
      stateForAlert() {
        return null
      }
      async stateForAlertAsync() {
        return null
      }
      getAlertIsActive() {
        return !1
      }
      detachAlert() {}
      removeAlert() {}
      deleteAlert() {}
      areLocalAndServerAlertsMismatch() {
        return !1
      }
      showInObjectTree() {
        return this.customization.showInObjectsTree
      }
      setShowInObjectsTreeEnabled(series_e) {
        this.customization.showInObjectsTree = series_e
      }
      start() {
        this.createServerPoints()
      }
      processHibernate() {
        this.canBeHibernated() ? this.isStarted() && this.stop() : this.isStarted() || this.start()
      }
      canBeHibernated() {
        return this.isSourceHidden()
      }
      onData(series_e) {
        "pointset_error" !== series_e.method ? series_e.params.customId === this._currentPointsetIdWithPrefix() && this
          ._onPointsetUpdated(series_e.params.plots) : O.logError(`Error getting pointset: ${series_e.params[0]} ${series_e.params[1]}`)
      }
      isBeingEdited() {
        return this === this._model.lineBeingEdited()
      }
      isActualSymbol() {
        return this._isActualSymbol
      }
      isActualCurrency() {
        return this._isActualCurrency
      }
      isActualInterval() {
        return this._isActualInterval
      }
      isActualUnit() {
        return this._isActualUnit
      }
      onIsActualIntervalChange() {
        return this._onIsActualIntervalChange
      }
      onIsActualSymbolChange() {
        return this._onIsActualSymbolChange
      }
      setOwnerSource(series_e) {
        if (null !== this._ownerSource && (this._ownerSource.currencyChanged().unsubscribeAll(this), this
            ._ownerSource.unitChanged().unsubscribeAll(this), this._symbolSource?.destroy(), this._symbolSource =
            null, this._symbolSourceSymbolInfo?.destroy(), this._symbolSourceSymbolInfo = null), super
          .setOwnerSource(series_e), series_e) {
          this._symbolSource = series_e.symbolSourceWV().spawn();
          const series_t = (0, series_u.combine)((series_e => [series_e.symbolInfoWV().weakReference()]), this._symbolSource.weakReference());
          this._symbolSourceSymbolInfo = (0,
              series_u.accumulate)((series_e => series_e[0] ?? null), series_t.ownership()), this._symbolSourceSymbolInfo.subscribe(this
              ._boundCalcIsActualSymbol), this.setPriceScale(series_e.priceScale()), series_e.currencyChanged().subscribe(this,
              this.calcIsActualCurrency), series_e.unitChanged().subscribe(this, this.calcIsActualUnit), this
            .calcIsActualSymbol(), this._migrateZOrder(), this._updateAlertCreationAvailable()
        }(0, I.isSymbolSource)(series_e) && (series_e.symbolResolved().subscribe(this, this._boundCalcIsActualSymbol), series_e
          .isActingAsSymbolSource().subscribe(this._boundCalcIsActualSymbol))
      }
      dataAndViewsReady() {
        return this._paneViews.size > 0
      }
      pointAdded() {
        return this._pointAdded
      }
      pointChanged() {
        return this._pointChanged
      }
      pointsetUpdated() {
        return this._onPointsetUpdatedDelegate
      }
      pointToScreenPoint(series_e, series_t) {
        const series_i = this._model.timeScale(),
          series_s = series_t ? series_t.priceScale() : this.priceScale(),
          series_n = (series_t ?? this.ownerSource())?.firstValue();
        if (!series_s || series_s.isEmpty() || series_i.isEmpty() || null == series_n) return null;
        const series_r = series_i.indexToCoordinate(series_e.index),
          series_a = series_s.priceToCoordinate(series_e.price, series_n);
        return new series_o.Point(series_r, series_a)
      }
      screenPointToPoint(series_e, series_t, series_i) {
        const series_s = series_i ? series_i.priceScale() : this.priceScale(),
          series_o = (series_i ?? this.ownerSource())?.firstValue();
        if (null == series_o || !isFinite(series_o) || null === series_s) return null;
        const series_n = this._model.timeScale(),
          series_r = series_t ? series_n.coordinateToFloatIndex(series_e.series_x) : series_n.coordinateToIndex(series_e.series_x);
        return {
          price: series_s.coordinateToPrice(series_e.series_y, series_o),
          index: series_r
        }
      }
      calcMiddlePoint(series_e, series_t) {
        return new series_o.Point((series_e.series_x + series_t.series_x) / 2, (series_e.series_y + series_t.series_y) / 2)
      }
      addPoint(series_e, series_t, series_i) {
        const series_s = this._preparePoint(series_e, series_t);
        return this._addPointIntenal(series_s, series_t, series_i)
      }
      addFixedPoint(series_e) {
        return this._fixedPoint = series_e, this.calcPositionPercents(), !0
      }
      calcPositionPercents() {
        const series_e = this.priceScale();
        if (!series_e || series_e.isEmpty() || void 0 === this._fixedPoint) return;
        const series_t = this._fixedPoint.series_x / this._model.timeScale().width(),
          series_i = this._fixedPoint.series_y / series_e.height();
        return this._positionPercents = {
          series_x: series_t,
          series_y: series_i
        }, this._positionPercents
      }
      restoreFixedPoint() {
        this._fixedPoint = this.fixedPoint()
      }
      propertiesChanged(series_e, series_t) {
        this.calcIsActualInterval(), this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id())), series_t || this
          ._syncLineStyleIfNeeded(series_e), series_e || void 0 !== this._pendingPropertyChangedEvent || (this
            ._pendingPropertyChangedEvent = setTimeout((() => {
              this._pendingPropertyChangedEvent = void 0, series_a.emit("drawing_event", this._id.value(),
                "properties_changed")
            }), 0))
      }
      state(series_e) {
        const series_t = this.toolname,
          series_i = this.ownerSource(),
          series_s = {
            type: series_t,
            id: this.id(),
            state: this.properties().state(this._propertiesStateExclusions()),
            points: (0, series_p.deepCopy)(this._timePoint),
            zorder: this.zorder(),
            ownerSource: series_i?.id()
          };
        this._targetSignature.value();
        return series_s.isSelectionEnabled = this.isSelectionEnabled(), series_s.userEditEnabled = this.userEditEnabled(), this
          .linkKey().value() && (series_s.linkKey = this.linkKey().value()), delete series_s.state.points, series_e && (series_s.indexes = this
            ._points), this.isFixed() && (series_s.positionPercents = this._positionPercents || this
          .calcPositionPercents()), "version" in this && 1 !== this.version && (series_s.version = this.version), series_s
      }
      updateAllViews(series_e) {
        this.isSourceHidden() || "data-source-change" === series_e.type && this._ignoreSourceEvent(series_e) || (this
          ._updateAllPaneViews(series_e), this._priceAxisViews.forEach((series_t => series_t.update(series_e))), this._timeAxisViews.forEach((
            series_t => series_t.update(series_e))))
      }
      updateAllViewsAndRedraw(series_e) {
        this.updateAllViews(series_e),
          this._model.updateSource(this)
      }
      tags() {
        return [this.toolname]
      }
      properties() {
        return this._properties
      }
      restoreExternalPoints(series_e, series_t) {
        try {
          if (this._timePoint = (0, series_p.deepCopy)(series_e.points), series_t.indexesChanged) {
            if (this.properties().childs().interval.setValue(series_e.interval), !this.isActualSymbol()) return void this
              ._clearServerPoints();
            this.createServerPoints()
          } else {
            const series_t = Math.min(this._points.length, series_e.points.length);
            for (let series_i = 0; series_i < series_t; series_i++) this._points[series_i].price = series_e.points[series_i].price
          }
          this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id()))
        } finally {
          this._normalizedPointsChanged.fire()
        }
      }
      restoreExternalState(series_e) {
        this.properties().mergeAndFire(series_e)
      }
      applyTemplate(series_e) {
        this._onTemplateApplying.fire(series_e), this._applyTemplateImpl(series_e), this.calcIsActualSymbol(), this
          .updateAllViews((0, M.sourceChangeEvent)(this.id())), this.model().lightUpdate(), this._onTemplateApplied
          .fire()
      }
      template() {
        return this.properties().preferences()
      }
      isFixed() {
        return !1
      }
      anchorable() {
        return !1
      }
      isLocked() {
        const series_e = this.properties().child("frozen");
        return void 0 !== series_e && series_e.value()
      }
      isSourceHidden() {
        return !this._properties.childs().visible.value() || (0, T.hideAllDrawings)().value() && this
        .canBeHidden() || !this._isActualInterval || !this._isActualSymbol || !this._isActualCurrency || !this
          ._isActualUnit
      }
      isSynchronizable() {
        return this.priceScale() === this._model.mainSeries().priceScale()
      }
      copiable() {
        return F
      }
      cloneable() {
        return null !== this._ownerSource && null !== this._ownerSource.firstValue()
      }
      movable() {
        return !0
      }
      allowsMovingBetweenPanes() {
        return !1
      }
      async getPropertyDefinitionsViewModel() {
        if (null === this._definitionsViewModel) {
          const series_e = await this._getPropertyDefinitionsViewModelClass();
          return null === series_e || this._isDestroyed ? null : (this._definitionsViewModel = new series_e(this._model
          .undoModel(), this), this._definitionsViewModel)
        }
        return this._definitionsViewModel
      }
      title() {
        return this.translatedType()
      }
      translatedType() {
        return V.lineToolsLocalizedNames[this.toolname] ?? "Line Tool"
      }
      name() {
        return "Line Tool"
      }
      createServerPoints() {
        if (!this._isActualSymbol) return;
        if (!this._model.chartApi().isConnected().value()) return;
        if (this._clearServerPoints(), this._model.timeScale().isEmpty()) return;
        if (0 === this._timePoint.length && this._points.length > 0 && this._normalizePoints(), !this
          ._readyToCreatePointset()) return;
        const series_e = this._pointsForPointset();
        if (0 === series_e.length) return;
        ++H, this._currentPointsetAndSymbolId = {
          pointsetId: H,
          symbolId: (0, series_n.ensureNotNull)(this._model.mainSeries().seriesSource().symbolInstanceId())
        };
        const series_t = (0, series_f.getServerInterval)(this.properties().childs().interval.value());
        this._model.chartApi().createPointset(this._currentPointsetIdWithPrefix(), "turnaround", this
          ._currentPointsetAndSymbolId.symbolId, series_t, series_e, this.onData.bind(this))
      }
      finish() {}
      realign() {
        this.calcIsActualSymbol(), this.isFixed() || this.isSourceHidden() || this._model.lineBeingCreated() ===
          this || this._model.lineBeingEdited() === this || this._currentPointsetAndSymbolId?.symbolId === this
          ._model.mainSeries().seriesSource().symbolInstanceId() || this._clearServerPoints(), null === this._model
          .mainSeries().symbolInfo() && (this._alignerCache = null), this.updateAllViews((0, M.sourceChangeEvent)(
            this.id()))
      }
      stop() {
        this._clearServerPoints()
      }
      restart() {
        this.isFixed() || (this._currentPointsetAndSymbolId = null, this.createServerPoints())
      }
      isStarted() {
        return null !== this._currentPointsetAndSymbolId
      }
      convertYCoordinateToPriceForMoving(series_e, series_t) {
        const series_i = (0, series_n.ensureNotNull)(this.priceScale());
        if (series_i.isEmpty()) return null;
        const series_s = this.ownerSource(),
          series_o = (0, series_n.ensure)((series_s || series_t)?.firstValue());
        return series_i.coordinateToPrice(series_e, series_o)
      }
      syncMultichartState(series_e) {
        const series_t = {
            points: this._timePoint,
            pointPositionPercents: this.positionPercents(),
            interval: this._model.mainSeries().interval()
          },
          series_i = this.linkKey().value();
        if (null !== series_i && this.isSynchronizable()) {
          const series_s = {
            model: this._model,
            linkKey: series_i,
            symbol: this._model.mainSeries().symbol(),
            finalState: series_t,
            changes: series_e
          };
          (0, T.finishChangingLineTool)(series_s)
        }
      }
      enableCurrentIntervalVisibility() {
        let series_e = this.properties().childs().intervalsVisibilities.state();
        void 0 !== series_e && (series_e = (0, series_y.mergeIntervalVisibilitiesDefaults)(series_e), (0, series_y
            .makeIntervalsVisibilitiesVisibleAtInterval)(series_e, this._model.mainSeries().intervalObj().value()), this
          .properties().childs().intervalsVisibilities.mergeAndFire(series_e))
      }
      clonePositionOffset() {
        return this.isFixed() ? {
          barOffset: 0,
          xCoordOffset: 20,
          yCoordOffset: 20
        } : {
          barOffset: 0,
          xCoordOffset: 0,
          yCoordOffset: -40
        }
      }
      sharingMode() {
        return this._sharingMode
      }
      share(series_e) {
        this.isSynchronizable() && this._sharingMode.setValue(series_e)
      }
      syncLineStyleState(series_e) {
        if (series_e) return {
          zOrder: this.zorder()
        };
        const {
          intervalsVisibilities: series_t,
          ...series_i
        } = this.properties().state(this._syncStateExclusions);
        return {
          ...series_i,
          intervalsVisibilities: (0, series_y.mergeIntervalVisibilitiesDefaults)(series_t),
          zOrder: this.zorder()
        }
      }
      moveLineTool(series_e) {
        const series_t = this._model.mainSeries().interval();
        series_e.forEach(((series_e, series_i) => this._setPoint(series_i, {
          ...series_e,
          interval: series_t
        }))), this._normalizePoints()
      }
      targetSignature() {
        return this._targetSignature.readonly()
      }
      setTargetSignature(series_e) {
        (0, series_n.assert)(this.supportsTargetSignature()), this._targetSignature.setValue(series_e)
      }
      supportsTargetSignature() {
        return !1
      }
      snapTo45DegreesAvailable() {
        return !1
      }
      alignTo45DegreesPoints() {
        if (this.snapTo45DegreesAvailable()) {
          const [series_e, series_t] = this.points();
          if (series_e && series_t) return [{
            ...series_e,
            pointIndex: 0
          }, {
            ...series_t,
            pointIndex: 1
          }]
        }
        return null
      }
      snapPoint45Degree(series_e, series_t, series_i) {
        const series_s = this._model.timeScale(),
          series_o = series_s.indexToCoordinate(series_t.index),
          series_r = series_s.indexToCoordinate(series_e.index) - series_o,
          series_a = (0, series_n.ensureNotNull)(this.priceScale()),
          series_l = series_t.price,
          series_c = series_e.price,
          series_h = (0, series_n.ensureNotNull)((0, series_n.ensureNotNull)(this.ownerSource()).firstValue()),
          series_d = series_a.priceToCoordinate(series_l, series_h),
          series_u = series_a.priceToCoordinate(series_c, series_h) - series_d,
          _ = Math.round(Math.atan2(series_r, series_u) / Math.PI * 4);
        if (2 === Math.abs(_)) series_i || (series_e.price = series_l);
        else if (0 === Math.abs(_) || 4 === Math.abs(_)) series_i || (series_e.index = series_t.index);
        else {
          const series_t = Math.sqrt(series_r * series_r + series_u * series_u),
            series_i = series_r < 0 ? -1 : 1,
            series_n = series_u < 0 ? -1 : 1;
          let series_l = Math.max(Math.abs(series_u), Math.abs(series_r));
          series_l /= series_l * Math.sqrt(2) / series_t;
          const series_c = Math.round(series_s.coordinateToIndex(series_o + series_l * series_i)),
            _ = Math.abs(series_s.indexToCoordinate(series_c) - series_o),
            series_p = series_a.coordinateToPrice(series_d + _ * series_n, series_h);
          series_e.index = series_c, series_e.price = series_p
        }
      }
      contextMenuStatName() {
        return "LineToolContextMenu"
      }
      _ignoreSourceEvent(series_e) {
        return series_e.sourceId !== this.id()
      }
      _pointsForPointset() {
        return this._timePoint.map((({
          interval: series_e,
          time_t: series_t,
          offset: series_i
        }) => series_e ? [series_t, series_i, (0, series_f.getServerInterval)(series_e)] : [series_t, series_i]))
      }
      _setPoint(series_e, series_t) {
        this._points[series_e] && (this._points[series_e].index === series_t.index ? this._points[series_e].price = series_t.price : this._points[series_e] =
          series_t, this._pointChanged.fire(series_e))
      }
      _correctLastPoint(series_e) {
        return (0, series_r.clone)(series_e)
      }
      _snapTo45DegreesApplicable(series_e) {
        return this.snapTo45DegreesAvailable() && (series_e?.shift() || (0, T.alignTo45Degrees)().value())
      }
      _normalizePoint(series_e, series_t) {
        return {
          ...this._model.timeScale().normalizeBarIndex(series_e.index),
          price: series_e.price,
          interval: series_e.interval
        }
      }
      _normalizePointWithoutOffset(series_e) {
        const series_t = this._model.timeScale().indexToTimePoint(series_e.index) ?? this._utcTimeInCurrentResolution(series_e);
        return null === series_t ? null : {
          price: series_e.price,
          time_t: series_t,
          offset: 0,
          interval: series_e.interval
        }
      }
      _normalizePoints() {
        let series_e = [];
        const series_t = this._model.mainSeries().interval();
        for (let series_i = 0; series_i < this._points.length; series_i++)
          if (series_w.Interval.isEqual(this._points[series_i].interval, series_t)) {
            if (void 0 !== this._points[series_i].index) {
              const series_t = this._normalizePoint(this._points[series_i], series_i);
              if (!series_t.time_t) {
                series_e = [];
                break
              }
              series_e.push(series_t)
            }
          } else series_e.push({
            ...this._timePoint[series_i],
            price: this._points[series_i].price
          });
        this._timePoint = series_e, this._normalizedPointsChanged.fire()
      }
      _getStartBarAligner() {
        const series_e = this._model.mainSeries().interval();
        if (null === this._alignerCache || this._alignerCache.resolution !== this._model.mainSeries().interval()) {
          const series_t = this._model.mainSeries().symbolInfo();
          if (!series_t) return null;
          this._alignerCache = {
            resolution: series_e,
            aligner: (0, series_h.createTimeToBarTimeAligner)(series_e, series_t)
          }
        }
        return this._alignerCache.aligner
      }
      _utcTimeInCurrentResolution(series_e) {
        const series_t = this._model.timeScale().points(),
          series_i = series_t.firstPoint(),
          series_s = series_t.lastPoint(),
          series_o = this._model.mainSeries().syncModel();
        if (null === series_i || null === series_s || null === series_o) return null;
        const series_r = (0, series_n.ensureNotNull)(series_t.indexOf(series_i, !1)),
          series_a = (0, series_n.ensureNotNull)(series_t.indexOf(series_s, !1));
        if (series_e.index >= series_r && series_e.index <= series_a) return null;
        const series_l = series_e.index < series_r ? series_r : series_a,
          series_c = (0, series_n.ensureNotNull)(series_t.valueAt(series_l)),
          series_h = series_e.index - series_l;
        return (0, series_d.extrapolateBarsFrontByCount)(series_o.barBuilder(), 1e3 * series_c, series_h).time / 1e3
      }
      _setPaneViews(series_e, series_t, series_i) {
        if (this._isDestroyed)
          for (const series_t of series_e) series_t.destroy && series_t.destroy();
        else this._paneViews.set(series_t, series_e), void 0 !== series_t && series_i && series_t.onDestroyed().subscribe(this, (() => this
          ._destroyPanePaneViews(series_t))), this._model.lightUpdate()
      }
      _getPaneViews(series_e) {
        return this._paneViews.get(series_e) ?? []
      }
      _updateAllPaneViews(series_e) {
        this._paneViews.forEach((series_t => {
          for (const series_i of series_t) series_i.update(series_e)
        }));
        for (const [, series_t] of this._signaturesPaneViews)
          for (const series_i of series_t) series_i.update(series_e)
      }
      _alignPointHorizontallyOrVertically(series_e) {
        const series_t = (0, series_n.ensureNotNull)(this.pointToScreenPoint(series_e)),
          series_i = (0, series_n.ensureDefined)((0, series_n.ensureNotNull)(this._startMovingPoint).logical),
          series_s = (0, series_n.ensureDefined)((0, series_n.ensureNotNull)(this._startMovingPoint).screen),
          series_o = Math.abs(series_s.series_x - series_t.series_x),
          series_r = Math.abs(series_s.series_y - series_t.series_y);
        if (series_o < 10 && series_r < 10) return series_e;
        return {
          index: series_o < series_r ? series_i.index : series_e.index,
          price: series_o < series_r ? series_e.price : series_i.price
        }
      }
      _alignScreenPointHorizontallyOrVertically(series_e) {
        const series_t = (0, series_n.ensureDefined)((0, series_n.ensureNotNull)(this._startMovingPoint).screen),
          series_i = Math.abs(series_t.series_x - series_e.series_x),
          series_s = Math.abs(series_t.series_y - series_e.series_y);
        return series_i < 10 && series_s < 10 ? series_e : series_i < series_s ? new series_o.Point(series_t.series_x, series_e.series_y) : new series_o.Point(series_e.series_x, series_t.series_y)
      }
      _correctPoints(series_e, series_t) {
        const series_i = (0, series_n.ensure)(this._currentMovingPoint?.screen),
          series_s = (0, series_n.ensure)(this._startMovingPoint?.screen),
          series_o = series_i.subtract(series_s);
        if (series_o.length() < 1 && !series_t) return !1;
        const series_r = Math.round((0, series_n.ensure)(this._currentMovingPoint?.logical).index - (0,
          series_n.ensure)(this._startMovingPoint?.logical).index);
        for (const series_t of series_e) {
          const series_e = (0, series_n.ensureNotNull)(this.pointToScreenPoint(series_t)).add(series_o);
          series_t.index = series_t.index + series_r, series_t.price = (0, series_n.ensureNotNull)(this.screenPointToPoint(series_e)).price
        }
        return !0
      }
      _correctFixedPoint(series_e) {
        if (void 0 === this._fixedPoint) return {
          didCorrect: !1,
          point: series_e
        };
        const series_t = (0, series_n.ensureDefined)((0, series_n.ensureNotNull)(this._currentMovingPoint).screen),
          series_i = (0, series_n.ensureDefined)((0, series_n.ensureNotNull)(this._startMovingPoint).screen),
          series_s = series_t.subtract(series_i);
        return series_s.length() >= 1 ? {
          didCorrect: !0,
          point: series_e.add(series_s)
        } : {
          didCorrect: !1,
          point: series_e
        }
      }
      _currentPointsetIdWithPrefix() {
        return "pointset_" + (0, series_n.ensureNotNull)(this._currentPointsetAndSymbolId).pointsetId
      }
      _clearServerPoints() {
        null !== this._currentPointsetAndSymbolId && this._model.chartApi().isConnected().value() && this._model
          .chartApi().removePointset(this._currentPointsetIdWithPrefix()), this._currentPointsetAndSymbolId = null
      }
      _createPointProperty(series_e) {
        const series_t = this._pointsProperty.childs().points;
        series_t.addChild("" + series_e, new C.Property({}));
        const series_i = series_t[series_e];
        series_i.addChild("price", new series_k(this, series_e)), series_i.addChild("bar", new L.LineDataSourcePointIndexProperty(this, series_e))
      }
      _createPointsProperties() {
        this._pointsProperty = new C.Property, this._pointsProperty.addChild("points", new C.Property);
        for (let series_e = 0; series_e < this.pointsCount(); series_e++) this._createPointProperty(series_e)
      }
      _alignPointToRangeOfActualData(series_e) {
        const series_t = (0, series_n.ensureNotNull)(this._model.mainSeries().bars().firstIndex()),
          series_i = (0, series_n.ensureNotNull)(this._model.mainSeries().bars().lastIndex());
        let series_s = Math.max(series_e.index, series_t);
        return series_s = Math.min(series_s, series_i), {
          ...series_e,
          index: series_s
        }
      }
      _migrateSymbolProperty(series_e) {
        const series_t = this._properties.childs();
        if (series_t.symbolStateVersion.value() < 2) {
          const series_i = (0, series_n.ensureNotNull)(this.ownerSource()),
            series_s = (0, series_n.ensureNotNull)(series_i.symbolSource()),
            series_o = this._model.mainSeries();
          if (series_s === series_o) return void series_t.symbolStateVersion.setValueSilently(2);
          if (null === series_o.symbolInfo()) return;
          if (null === series_s.symbolInfo()) return;
          series_o.symbolSameAsCurrent(series_t.symbol.value()) && series_t.symbol.setValueSilently((0, S
            .extractLineToolSymbolFromSymbolInfo)(series_e, series_s.symbol())), series_t.symbolStateVersion.setValueSilently(2)
        }
      }
      _migrateZOrder() {
        const series_e = this._properties.childs();
        series_e.zOrderVersion.value() < 2 && (this.ownerSource() === this.model().mainSeries() && this.setZorder(this
          .zorder() - this.model().mainSeries().obsoleteZOrder()), series_e.zOrderVersion.setValueSilently(2))
      }
      _preparePoint(series_e, series_t) {
        const series_i = series_e;
        return this._snapTo45DegreesApplicable(series_t) && this.points().length >= 2 && this.snapPoint45Degree(series_i, this
          .points()[this.points().length - 2]), series_i
      }
      _addPointIntenal(series_e, series_t, series_i) {
        this._points.push({
          ...series_e,
          interval: this._model.mainSeries().interval()
        });
        const series_s = this._points.length === this.pointsCount();
        return series_s ? (this._lastPoint = null, series_i || (this._normalizePoints(), this.createServerPoints())) : this
          ._lastPoint = series_e, this._pointAdded.fire(this._points.length - 1), series_s
      }
      _onSourceHiddenMayChange() {
        this.isSourceHidden() && this._model.selectionMacro((series_e => {
          series_e.removeSourceFromSelection(this)
        })), this._model.invalidate(series_g.InvalidationMask.validateAction((() => {
          this !== this._model.lineBeingCreated() && (this._isDestroyed || this.processHibernate())
        })))
      }
      _saveAlertIdInState() {
        return !0
      }
      _onPointsetUpdated(series_e) {
        if (0 === series_e.length) return;
        const series_t = this.properties().childs().interval.value();
        for (const {
            index: series_i,
            value: series_s
          }
          of series_e) {
          const {
            price: series_e,
            interval: series_o = series_t
          } = (0, series_n.ensureDefined)(this._timePoint[series_i]), [series_r, series_a] = series_s, series_l = {
            index: series_r,
            time: series_a,
            price: series_e,
            interval: series_o
          };
          if (this._points.length <= series_i) {
            const series_e = this._points.push(series_l);
            this._pointAdded.fire(series_e - 1)
          } else this._points[series_i] = series_l, this._pointChanged.fire(series_i)
        }
        this._onPointsetUpdatedDelegate.fire(), this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id()))
      }
      _onMainSeriesSymbolResolved() {
        const series_e = this.ownerSource();
        null === series_e || this._model.mainSeries() === series_e.symbolSource() || this.isSourceHidden() || this
          .createServerPoints()
      }
      _readyToCreatePointset() {
        return this._timePoint.length > 0
      }
      _propertiesStateExclusions() {
        return []
      }
      _syncLineStyleIfNeeded(series_e) {
        const series_t = this.linkKey().value();
        series_t && !this._syncLineStyleMuted && this._syncLineStyleChanges(series_t, this.syncLineStyleState(series_e))
      }
      _muteSyncLineStyle() {
        this._syncLineStyleMuted = !0
      }
      _unmuteSyncLineStyleWithoutApplyingChanges() {
        this.propertiesChanged(), this._syncLineStyleMuted = !1
      }
      _applyTemplateImpl(series_e) {
        series_e.intervalsVisibilities = (0, series_y.mergeIntervalVisibilitiesDefaults)(series_e.intervalsVisibilities);
        const series_t = this.properties();
        series_t.applyTemplate(series_e, (0, R.factoryDefaults)(this.toolname.toLowerCase())), series_t.saveDefaults(), this
          .propertiesChanged()
      }
      _getPropertyDefinitionsViewModelClass() {
        return Promise.resolve(null)
      }
      _getAlertPlots() {
        return []
      }
      _getUndoHistory() {
        return this._model.undoModel().undoHistory()
      }
      async _synchronizeAlert(series_e) {}
      _linePointsToAlertPlot(series_e, series_t, series_i, series_s) {
        return null
      }
      _getAlertCreationAvailable() {
        return !1
      }
      _onAnchoredChange() {
        if (this.isFixed()) {
          const series_e = (0, series_n.ensureNotNull)(this.pointToScreenPoint(this.points()[0]));
          this.addFixedPoint(series_e)
        } else {
          if (!this._fixedPoint) return;
          const series_e = (0, series_n.ensureNotNull)(this.screenPointToPoint(this._fixedPoint));
          this._points[0] = {
              ...series_e,
              interval: this._model.mainSeries().interval()
            }, this.startChanging(), this.setPoint(0, series_e), this.endChanging(!1, !1), this._timePoint[0] = this
            ._normalizePoint(this._points[0], 0), this.clearFixedPoint()
        }
        const series_e = this.linkKey().value();
        null !== series_e && this.isSynchronizable() && (0, T.restoreLineToolState)({
          model: this._model,
          linkKey: series_e,
          state: this.state()
        })
      }
      _syncLineStyleChanges(series_e, series_t, series_i) {
        this.anchorable() && this.isFixed() !== Boolean(this._positionPercents) && this._onAnchoredChange(), (0, T
          .changeLineStyle)({
          linkKey: series_e,
          state: series_t,
          alertId: series_i,
          model: this._model
        })
      }
      _updateAdjustedToSplitTimeValue(series_e) {}
      _createSignatureSourcePaneViews(series_e) {
        return []
      }
      _updateSignaturesPaneViews() {
        const series_e = this.targetSignature().value();
        if (null !== series_e || 0 !== this._signaturesPaneViews.size) {
          for (const [series_t, series_i] of this._signaturesPaneViews) series_t.signature().value() !== series_e && (series_i.forEach((series_e => series_e.destroy
            ?.())), this._signaturesPaneViews.delete(series_t));
          for (const series_t of this._model.studiesWV(!0).value()) series_t.signature().value() !== series_e || this
            ._signaturesPaneViews.has(series_t) || this._signaturesPaneViews.set(series_t, this._createSignatureSourcePaneViews(
              series_t))
        }
      }
      static _configureProperties(series_e) {
        if (this._addCollectedProperties(series_e), series_e.hasChild("symbolStateVersion") || series_e.addProperty("symbolStateVersion",
            1), series_e.hasChild("zOrderVersion") || series_e.addProperty("zOrderVersion", 1), series_e.hasChild("visible") || series_e
          .addProperty("visible", !0),
          series_e.hasChild("frozen") || series_e.addProperty("frozen", !1), series_e.hasChild("symbol") || series_e.addProperty("symbol", ""),
          series_e.hasChild("currencyId") || series_e.addProperty("currencyId", null), series_e.hasChild("unitId") || series_e.addProperty(
            "unitId", null), series_e.hasChild("adjustedToSplitTime") || series_e.addProperty("adjustedToSplitTime", null), series_e
          .hasChild("intervalsVisibilities")) {
          const series_t = (0, series_r.merge)((0, series_r.clone)(series_v.intervalsVisibilitiesDefaults), series_e.childs().intervalsVisibilities
            .state());
          series_e.removeProperty("intervalsVisibilities"), series_e.addChild("intervalsVisibilities", new series_x
            .IntervalsVisibilitiesProperty(series_t))
        } else series_e.addChild("intervalsVisibilities", new series_x.IntervalsVisibilitiesProperty(series_v
          .intervalsVisibilitiesDefaults));
        series_e.hasChild("title") || series_e.addProperty("title", ""), ["symbolStateVersion", "zOrderVersion", "visible",
          "frozen", "symbol", "currencyId", "unitId", "symbolInfo", "points", "interval", "title"
        ].forEach((series_t => series_e.addExcludedKey(series_t, 5))), series_e.hasChild("singleChartOnly") && series_e.removeProperty(
          "singleChartOnly"), series_e.hasChild("font") && series_e.removeProperty("font")
      }
      static _addCollectedProperties(series_e) {
        series_e.hasChild("linewidth") && series_e.addChild("linesWidths", new B.LineToolWidthsProperty([(0, series_n.ensureDefined)(series_e
            .child("linewidth"))])), series_e.hasChild("linecolor") && series_e.addChild("linesColors", new B
            .LineToolColorsProperty([(0, series_n.ensureDefined)(series_e.child("linecolor"))])), series_e.hasChild("backgroundColor") &&
          series_e.addChild("backgroundsColors", new B.LineToolColorsProperty([(0, series_n.ensureDefined)(series_e.child(
            "backgroundColor"))])), series_e.hasChild("textColor") && series_e.addChild("textsColors", new B
            .LineToolColorsProperty([(0, series_n.ensureDefined)(series_e.child("textColor"))])), series_e.hasChild("linestyle") && series_e
          .addChild("linesStyles", new B.LineToolCollectedProperty([(0, series_n.ensureDefined)(series_e.child("linestyle"))])), [
            "linesWidths", "linesColors", "backgroundsColors", "textsColors", "linesStyles"
          ].forEach((series_t => {
            series_e.addExcludedKey(series_t, 7)
          }))
      }
      _areAlertsOnLineToolProhibited() {
        return null !== this._ownerSource && !this._ownerSource.canHasAlertOnLineTools()
      }
      _removeAlertSubscriptions() {
        this._unsubscribeAlertCallbacks?.(), this._unsubscribeAlertCallbacks = void 0
      }
      _addAlertSubscriptions(series_e, series_t = {}) {}
      _destroyPanePaneViews(series_e) {
        const series_t = this._paneViews.get(series_e);
        if (void 0 !== series_t)
          for (const series_e of series_t) series_e.destroy && series_e.destroy();
        void 0 !== series_e && series_e.onDestroyed().unsubscribeAll(this), this._paneViews.delete(series_e)
      }
      _copyPricesWithoutNormalization() {
        const series_e = Math.min(this._points.length, this._timePoint.length);
        for (let series_t = 0; series_t < series_e; series_t++) this._timePoint[series_t].price = this._points[series_t].price
      }
      async _getChartAlert() {
        throw new Error("not implemented")
      }
      async _syncAlertWithAlertFacade(series_e = {}) {
        try {
          const series_t = await this.getAlert();
          if (!series_t) return;
          this._addAlertSubscriptions(series_t, series_e)
        } catch (series_e) {
          if (series_e instanceof Error && "not_exists" === series_e.message && this.hasAlert().value()) {
            this._alertStatus.setValue(0);
            return void(await getChartAlertsFacade()).removeAlertFromAllChartsSilently(this.id(), (0, series_n
              .ensureDefined)(this._alertId))
          }
          O.logError("Failed to set alert, alert will not be saved with drawing in chart")
        }
      }
      async _awaitForPointset() {
        const series_e = {};
        try {
          await Promise.race([new Promise(((series_e, series_t) => {
            setTimeout((() => series_t(new Error("Timeout"))), 3e3)
          })), new Promise((series_t => {
            this.pointsetUpdated().subscribe(series_e, (() => series_t()))
          }))])
        } catch (series_e) {
          throw series_e
        } finally {
          this.pointsetUpdated().unsubscribeAll(series_e)
        }
      }
    }