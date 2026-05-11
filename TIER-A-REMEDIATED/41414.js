/**
 * Module 41414 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

41414: (series_e, element_reviewed, i) => {
    "use strict";
    i.d(element_reviewed, {
      LineDataSource: () => U,
      changePointUndoText: () => z
    });
    var series_s = i(89880),
      o = i(10555),
      n = i(50151),
      r = i(87465),
      series_a = i(76422),
      l = i(9343),
      c = i(37103),
      h = i(32955),
      d = i(99955),
      u = i(48943),
      _ = i(48096),
      p = i(58043),
      m = i(22613),
      g = i(51304),
      f = i(12178),
      y = i(81922),
      v = i(37293),
      S = i(95059),
      b = i(36597),
      w = i(46082),
      C = i(43337),
      T = i(78861),
      P = i(72207),
      x = i(97719),
      M = i(40472),
      I = i(22455),
      A = i(95804),
      L = i(75550);
    class k extends C.Property {
      constructor(series_e, element_reviewed) {
        super(), this._lineSource = series_e, this._pointIndex = element_reviewed, series_e.pointAdded().subscribe(this, (series_e => {
          this._pointIndex === series_e && this._listeners.fire(this, `${series_e}`)
        })), series_e.pointChanged().subscribe(this, (series_e => {
          this._pointIndex === series_e && this._listeners.fire(this, `${series_e}`)
        }))
      }
      value() {
        const series_e = this._lineSource.points()[this._pointIndex].price,
          element_reviewed = (0, n.ensureNotNull)(this._lineSource.ownerSource()).formatter();
        if (element_reviewed.parse) {
          const i = element_reviewed.format(series_e),
            series_s = element_reviewed.parse(i);
          return series_s.res ? series_s.value : series_e
        }
        return series_e
      }
      setValue(series_e) {
        const element_reviewed = this._lineSource.points()[this._pointIndex];
        element_reviewed.price = parseFloat("" + series_e), this._lineSource.startChanging(this._pointIndex, element_reviewed), this._lineSource
          .setPoint(this._pointIndex, element_reviewed), this._lineSource.model().updateSource(this._lineSource), this._listeners
          .fire(this, "");
        const i = this._lineSource.endChanging(!0, !1);
        this._lineSource.syncMultichartState(i)
      }
    }
    var E = i(79740),
      D = i(47432),
      B = i(65045),
      V = i(56876),
      R = i(60973),
      N = i(76559);
    const O = (0, l.getLogger)("Chart.LineDataSource"),
      F = c.enabled("datasource_copypaste");
    class W {
      constructor() {
        this._states = []
      }
      start(series_e) {
        this._states.push(series_e)
      }
      finish(series_e) {
        const element_reviewed = (0, n.ensureDefined)(this._states.pop());
        return series_s = element_reviewed, (i = series_e).length !== series_s.length ? {
          indexesChanged: !0,
          pricesChanged: !0
        } : i.reduce(((series_e, element_reviewed, i) => {
          const o = series_s[i];
          return series_e.indexesChanged = series_e.indexesChanged || element_reviewed.index !== o.index, series_e.pricesChanged = series_e
            .pricesChanged || element_reviewed.price !== o.price, series_e
        }), {
          indexesChanged: !1,
          pricesChanged: !1
        });
        var i, series_s
      }
      isEmpty() {
        return 0 === this._states.length
      }
    }
    let H = 0;
    const z = new A.TranslatedString("change point", series_s.element_reviewed(null, void 0, i(76660)));
    class U extends P.DataSource {
      constructor(series_e, element_reviewed, i, series_s) {
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
          this._symbolSource = null, this._symbolSourceSymbolInfo = null, this._sharingMode = new m.WatchedValue(0),
          this._onTemplateApplying = new _.Delegate, this._onTemplateApplied = new _.Delegate, this
          ._syncStateExclusions = ["interval"], this._definitionsViewModel = null, this._hasEditableCoordinates =
          new m.WatchedValue(!0), this._syncLineStyleMuted = !1, this._onIsActualIntervalChange = new _.Delegate,
          this._onIsActualSymbolChange = new _.Delegate, this._onPointsetUpdatedDelegate = new _.Delegate,
          this._onServerUpdateTime = new _.Delegate, this._linkKey = new m.WatchedValue(null), this
          ._serverUpdateTime = null, this._boundCalcIsActualSymbol = this.calcIsActualSymbol.bind(this), this
          ._alignerCache = null, this._alertUndoMode = !1, this._targetSignature = new m.WatchedValue(null), this
          ._firstSignatureOwnerSource = null, this._sourcesSignatures = null, this._onAlertStatusChanged = () => {
            this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id()))
          }, this._model = series_e, this._properties = element_reviewed, this._localAndServerAlertsMismatch = !1, this._properties
          .hasChild("interval") || this._properties.addChild("interval", new C.Property(series_e.mainSeries().interval())),
          this.calcIsActualSymbol(), this._properties.childs().intervalsVisibilities.subscribe(this, this
            .calcIsActualSymbol), this._properties.subscribe(this, this.propertiesChanged.bind(this, !1, void 0)),
          this.zOrderChanged().subscribe(this, this.propertiesChanged.bind(this, !0, void 0)), this
          ._createPointsProperties(), this.pointsCount() > 0)
          for (let series_e = 0; series_e < this.pointsCount(); series_e++) this._priceAxisViews.push(this.createPriceAxisView(series_e)), this
            ._timeAxisViews.push(new E.LineDataSourceTimeAxisView(this, series_e));
        this._properties.childs().visible.subscribe(this, (series_e => {
            const element_reviewed = !1 === (0, T.hideAllDrawings)().value();
            series_e.value() ? series_e.value() && element_reviewed && series_a.emit("drawing_event", this._id.value(), "show") : (this._model
              .selection().isSelected(this) && this._model.selectionMacro((series_e => {
                series_e.removeSourceFromSelection(this)
              })), element_reviewed && series_a.emit("drawing_event", this._id.value(), "hide")), this._onSourceHiddenMayChange()
          })), (0, T.hideAllDrawings)().subscribe(this, this._onSourceHiddenMayChange), this._sessionConnected =
          this._model.chartApi().isConnected().spawn(), this._sessionConnected.subscribe((series_e => {
            series_e || (this._currentPointsetAndSymbolId = null)
          })), this._alertStatus.subscribe(this._onAlertStatusChanged), this._definitionsViewModel = null, this
          ._properties.setNameInOwner((0, N.propertyPathForSource)(this)), this._sourcesSignatures = series_e
          .sourcesSignatures().spawn(), this._sourcesSignatures.subscribe(this._updateSignaturesPaneViews.bind(
            this)), this._targetSignature.subscribe(this._updateSignaturesPaneViews.bind(this))
      }
      destroy() {
        this._paneViews.forEach(((series_e, element_reviewed) => this._destroyPanePaneViews(element_reviewed))), this.stop(), null !== this
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
      adjustToSplit(series_e, element_reviewed) {}
      boundToSymbol() {
        return !0
      }
      isAvailableInFloatingWidget() {
        return !0
      }
      points() {
        const series_e = [];
        for (let element_reviewed = 0; element_reviewed < this._points.length; element_reviewed++) {
          const i = this._points[element_reviewed];
          series_e.push({
            index: i.index,
            price: i.price,
            time: i.time
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
        let element_reviewed;
        const i = series_e ? series_e.priceScale() : this.priceScale();
        if (this._positionPercents && null !== i && !i.isEmpty()) {
          const series_e = this._positionPercents,
            series_s = this._model.timeScale().width() * series_e.x,
            n = i.height() * series_e.y;
          element_reviewed = new o.Point(series_s, n)
        } else void 0 !== this._fixedPoint && (element_reviewed = this._fixedPoint?.clone());
        if (this._currentMovingPoint && this._startMovingPoint && void 0 !== element_reviewed) {
          const series_e = this._correctFixedPoint(element_reviewed);
          series_e.didCorrect && (element_reviewed = series_e.point)
        }
        return element_reviewed
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
        const series_e = (0, n.ensureNotNull)(this.priceScale());
        return this.points().map((element_reviewed => {
          const i = (0, n.ensureNotNull)(this.pointToScreenPoint(element_reviewed)),
            series_s = i.x / this._model.timeScale().width(),
            r = i.y / series_e.height();
          return new o.Point(series_s, r)
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
      startMoving(series_e, element_reviewed, i, series_s) {
        this.isFixed() && this.restoreFixedPoint(), this._startMovingPoint = series_e
      }
      move(series_e, element_reviewed, i, series_s) {
        if (i && (i.shiftOnly() || i.modShift()))
          if (this.isFixed()) {
            const element_reviewed = this._alignScreenPointHorizontallyOrVertically((0, n.ensureDefined)(series_e.screen));
            this._currentMovingPoint = {
              screen: element_reviewed
            }
          } else {
            const element_reviewed = this._alignPointHorizontallyOrVertically((0, n.ensureDefined)(series_e.logical)),
              i = (0, n.ensureNotNull)(this.pointToScreenPoint(element_reviewed));
            this._currentMovingPoint = {
              logical: element_reviewed,
              screen: i
            }
          }
        else this._currentMovingPoint = series_e;
        this.updateAllViews((0, M.sourceChangeEvent)(this.id()))
      }
      endMoving(series_e, element_reviewed, i) {
        let series_s = !1,
          o = !1;
        if (this._currentMovingPoint && this._startMovingPoint) {
          if (this.isFixed()) {
            const series_e = this._correctFixedPoint((0,
              n.ensureDefined)(this._fixedPoint));
            series_e.didCorrect && (this._fixedPoint = series_e.point, this._fixedPointsChanged.fire())
          } else {
            const series_e = (0, n.ensureDefined)(this._currentMovingPoint.logical),
              element_reviewed = (0, n.ensureDefined)(this._startMovingPoint.logical);
            series_s = series_e.index !== element_reviewed.index, o = series_e.price !== element_reviewed.price;
            if (this._correctPoints(this._points, i)) {
              const series_e = this._id.value();
              series_a.emit("drawing_event", series_e, "move"), series_a.emit("drawing_event", series_e, "points_changed"), this
                ._updateAdjustedToSplitTimeValue();
              for (let series_e = 0; series_e < this._points.length; series_e++) this._pointChanged.fire(series_e)
            }
          }
          this._startMovingPoint = null, this._currentMovingPoint = null
        }
        const r = {
          indexesChanged: series_s,
          pricesChanged: o
        };
        return this.isFixed() ? (this.calcPositionPercents(), this.updateAllViews((0, M.sourceChangeEvent)(this
        .id())), r) : (series_s && this._points.forEach((series_e => series_e.interval = this._model.mainSeries().interval())), this
          .updateAllViews((0, M.sourceChangeEvent)(this.id())), series_s && !series_e ? (this._properties.childs().interval
            .setValue(this._model.mainSeries().interval()), this._normalizePoints(), this.createServerPoints()) :
          (this._copyPricesWithoutNormalization(), this._normalizedPointsChanged.fire()), r)
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
        return z
      }
      startChanging(series_e, element_reviewed) {
        this.isFixed() && this.restoreFixedPoint(), void 0 !== series_e && void 0 !== element_reviewed && (series_e < this._priceAxisViews
          .length && this._priceAxisViews[series_e].setActive(!0), series_e < this._timeAxisViews.length && this._timeAxisViews[
            series_e].setActive(!0)), this._changeStatesStack.start(this.points())
      }
      endChanging(series_e, element_reviewed, i) {
        const series_s = this._changeStatesStack.finish(this.points());
        series_s.indexesChanged && this._changeStatesStack.isEmpty() ? (this._normalizePoints(), element_reviewed || this
            .createServerPoints()) : (this._copyPricesWithoutNormalization(), this._normalizedPointsChanged.fire()),
          series_a.emit("drawing_event", this._id.value(), "points_changed"), this._updateAdjustedToSplitTimeValue();
        for (let series_e = 0; series_e < this._priceAxisViews.length; series_e++) this._priceAxisViews[series_e].setActive(!1);
        for (let series_e = 0; series_e < this._timeAxisViews.length; series_e++) this._timeAxisViews[series_e].setActive(!1);
        return series_s
      }
      setPoint(series_e, element_reviewed, i, series_s) {
        if (this._snapTo45DegreesApplicable(i)) {
          const i = 0 === series_e ? 1 : series_e - 1;
          this.snapPoint45Degree(element_reviewed, this.points()[i])
        }
        this._setPoint(series_e, {
          ...element_reviewed,
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
      setLastPoint(series_e, element_reviewed, i = !0) {
        return this._lastPoint = i ? this._preparePoint(series_e, element_reviewed) : series_e, this.updateAllViews((0, M.sourceChangeEvent)(this
          .id())), this._lastPoint
      }
      lastPoint() {
        return this._lastPoint
      }
      getChangePointForSync(series_e) {
        return this.getPoint(series_e)
      }
      setPoints(series_e) {
        const element_reviewed = this._model.mainSeries().interval();
        this._points = series_e.map((series_e => ({
          ...series_e,
          interval: series_e.interval ?? element_reviewed
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
        const element_reviewed = this._model.mainSeries().interval();
        for (let i = 0; i < this._timePoint.length; i++) {
          const series_s = this._model.timeScale().denormalizeTimePoint(this._timePoint[i]);
          if (void 0 === series_s) {
            series_e = [];
            break
          }
          series_e.push({
            index: series_s,
            price: this._timePoint[i].price,
            interval: this._timePoint[i].interval ?? element_reviewed
          })
        }
        series_e.length > 0 && (this._points = series_e)
      }
      restorePoints(series_e, element_reviewed, i) {
        const series_s = this._timePoint.length > 0 && !(0, r.deepEquals)(this._timePoint, series_e)[0],
          o = this._properties.childs().interval.value();
        this._timePoint = series_e.map((series_e => ({
          ...series_e,
          interval: series_e.interval ?? o
        })));
        const n = this._model.mainSeries().interval();
        this._points = element_reviewed.map((series_e => ({
          ...series_e,
          interval: n
        }))), i || this.denormalizeTimePoints(), series_s && this._normalizedPointsChanged.fire()
      }
      restorePositionPercents(series_e) {
        this._positionPercents = series_e, this.restoreFixedPoint()
      }
      calcIsActualSymbol() {
        const series_e = this.ownerSource(),
          element_reviewed = this._isActualSymbol;
        if (null === series_e) this._isActualSymbol = !1;
        else {
          const series_e = this._symbolSource?.value(),
            element_reviewed = this._symbolSourceSymbolInfo?.value();
          if (element_reviewed && series_e) {
            this._migrateSymbolProperty(element_reviewed);
            const i = this._properties.childs().symbol,
              series_s = i.value();
            if (this._isActualSymbol = series_e.symbolSameAsCurrent(series_s), this._isActualSymbol) {
              const o = (0, S.extractLineToolSymbolFromSymbolInfo)(element_reviewed, series_e.symbol());
              (0, b.areEqualSymbols)(series_s, o) || (O.logWarn('Possible drawing "migrating" detected from "' + series_s +
                '" to "' + o + '"'), O.logWarn("Series symbolInfo: " + JSON.stringify(series_e.symbolInfo())), O.logWarn(
                `${(new Error).stack}`)), i.setValue(o)
            }
          }
        }
        this._isActualSymbol !== element_reviewed && this._onIsActualSymbolChange.fire(), this.calcIsActualInterval(), this
          .calcIsActualCurrency(), this.calcIsActualUnit(), this._onSourceHiddenMayChange()
      }
      calcIsActualCurrency() {
        const series_e = this.ownerSource();
        if (null === series_e) return void(this._isActualCurrency = !1);
        let element_reviewed = this._properties.childs().currencyId.value();
        if (null !== element_reviewed) {
          const i = series_e.symbolSource();
          0, this._isActualCurrency = element_reviewed === (0, S.symbolCurrency)(i.symbolInfo(), void 0, !0)
        } else {
          const element_reviewed = (0, n.ensureNotNull)(series_e.symbolSource());
          this._isActualCurrency = null !== element_reviewed.symbolInfo() && !element_reviewed.isConvertedToOtherCurrency()
        }
        this._onSourceHiddenMayChange()
      }
      calcIsActualUnit() {
        const series_e = this.ownerSource();
        if (null === series_e) return void(this._isActualUnit = !1);
        const element_reviewed = this._properties.childs().unitId.value();
        if (null !== element_reviewed) this._isActualUnit = element_reviewed === (0, n.ensureNotNull)(series_e.symbolSource()).unit();
        else {
          const element_reviewed = (0, n.ensureNotNull)(series_e.symbolSource());
          this._isActualUnit = null !== element_reviewed.symbolInfo() && !element_reviewed.isConvertedToOtherUnit()
        }
        this._onSourceHiddenMayChange()
      }
      calcIsActualInterval() {
        const series_e = this._isActualInterval,
          element_reviewed = this._properties,
          i = this._model.mainSeries();
        this._isActualInterval = (0, y.isActualInterval)(w.Interval.parse(i.interval()), element_reviewed.childs()
            .intervalsVisibilities), !this._isActualInterval && this._model.selection().isSelected(this) && this
          ._model.selectionMacro((series_e => series_e.removeSourceFromSelection(this))), this._isActualInterval !== series_e && this
          ._onIsActualIntervalChange.fire(), this._onSourceHiddenMayChange()
      }
      paneViews(series_e) {
        if (this.isSourceHidden()) return null;
        const element_reviewed = this._getPaneViews(this.isMultiPaneAvailable() ? series_e : void 0);
        if (null === element_reviewed) return null;
        if (1 === element_reviewed.length) return [element_reviewed[0]];
        const i = [];
        for (let series_e = element_reviewed.length - 1; series_e >= 0; --series_e) i.push(element_reviewed[series_e]);
        return i
      }
      priceAxisViews(series_e, element_reviewed) {
        if (this.isFixed()) return null;
        if (element_reviewed !== this.priceScale() || this.isSourceHidden()) return null;
        if (this._model.lineBeingEdited() === this) {
          const series_e = this._model.linePointBeingEdited();
          if (null !== series_e && series_e < this._priceAxisViews.length) {
            const element_reviewed = this._priceAxisViews.slice(),
              i = element_reviewed[series_e];
            return element_reviewed.splice(series_e, 1), element_reviewed.push(i), element_reviewed
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
            const element_reviewed = this._timeAxisViews.slice(),
              i = element_reviewed[series_e];
            return element_reviewed.splice(series_e, 1), element_reviewed.push(i), element_reviewed
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
      async setAlert(series_e, element_reviewed = {}) {
        throw new Error("not implemented")
      }
      async restoreAlert(series_e, element_reviewed) {
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
          const element_reviewed = (0, u.combine)((series_e => [series_e.symbolInfoWV().weakReference()]), this._symbolSource.weakReference());
          this._symbolSourceSymbolInfo = (0,
              u.accumulate)((series_e => series_e[0] ?? null), element_reviewed.ownership()), this._symbolSourceSymbolInfo.subscribe(this
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
      pointToScreenPoint(series_e, element_reviewed) {
        const i = this._model.timeScale(),
          series_s = element_reviewed ? element_reviewed.priceScale() : this.priceScale(),
          n = (element_reviewed ?? this.ownerSource())?.firstValue();
        if (!series_s || series_s.isEmpty() || i.isEmpty() || null == n) return null;
        const r = i.indexToCoordinate(series_e.index),
          series_a = series_s.priceToCoordinate(series_e.price, n);
        return new o.Point(r, series_a)
      }
      screenPointToPoint(series_e, element_reviewed, i) {
        const series_s = i ? i.priceScale() : this.priceScale(),
          o = (i ?? this.ownerSource())?.firstValue();
        if (null == o || !isFinite(o) || null === series_s) return null;
        const n = this._model.timeScale(),
          r = element_reviewed ? n.coordinateToFloatIndex(series_e.x) : n.coordinateToIndex(series_e.x);
        return {
          price: series_s.coordinateToPrice(series_e.y, o),
          index: r
        }
      }
      calcMiddlePoint(series_e, element_reviewed) {
        return new o.Point((series_e.x + element_reviewed.x) / 2, (series_e.y + element_reviewed.y) / 2)
      }
      addPoint(series_e, element_reviewed, i) {
        const series_s = this._preparePoint(series_e, element_reviewed);
        return this._addPointIntenal(series_s, element_reviewed, i)
      }
      addFixedPoint(series_e) {
        return this._fixedPoint = series_e, this.calcPositionPercents(), !0
      }
      calcPositionPercents() {
        const series_e = this.priceScale();
        if (!series_e || series_e.isEmpty() || void 0 === this._fixedPoint) return;
        const element_reviewed = this._fixedPoint.x / this._model.timeScale().width(),
          i = this._fixedPoint.y / series_e.height();
        return this._positionPercents = {
          x: element_reviewed,
          y: i
        }, this._positionPercents
      }
      restoreFixedPoint() {
        this._fixedPoint = this.fixedPoint()
      }
      propertiesChanged(series_e, element_reviewed) {
        this.calcIsActualInterval(), this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id())), element_reviewed || this
          ._syncLineStyleIfNeeded(series_e), series_e || void 0 !== this._pendingPropertyChangedEvent || (this
            ._pendingPropertyChangedEvent = setTimeout((() => {
              this._pendingPropertyChangedEvent = void 0, series_a.emit("drawing_event", this._id.value(),
                "properties_changed")
            }), 0))
      }
      state(series_e) {
        const element_reviewed = this.toolname,
          i = this.ownerSource(),
          series_s = {
            type: element_reviewed,
            id: this.id(),
            state: this.properties().state(this._propertiesStateExclusions()),
            points: (0, p.deepCopy)(this._timePoint),
            zorder: this.zorder(),
            ownerSource: i?.id()
          };
        this._targetSignature.value();
        return series_s.isSelectionEnabled = this.isSelectionEnabled(), series_s.userEditEnabled = this.userEditEnabled(), this
          .linkKey().value() && (series_s.linkKey = this.linkKey().value()), delete series_s.state.points, series_e && (series_s.indexes = this
            ._points), this.isFixed() && (series_s.positionPercents = this._positionPercents || this
          .calcPositionPercents()), "version" in this && 1 !== this.version && (series_s.version = this.version), series_s
      }
      updateAllViews(series_e) {
        this.isSourceHidden() || "data-source-change" === series_e.type && this._ignoreSourceEvent(series_e) || (this
          ._updateAllPaneViews(series_e), this._priceAxisViews.forEach((element_reviewed => element_reviewed.update(series_e))), this._timeAxisViews.forEach((
            element_reviewed => element_reviewed.update(series_e))))
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
      restoreExternalPoints(series_e, element_reviewed) {
        try {
          if (this._timePoint = (0, p.deepCopy)(series_e.points), element_reviewed.indexesChanged) {
            if (this.properties().childs().interval.setValue(series_e.interval), !this.isActualSymbol()) return void this
              ._clearServerPoints();
            this.createServerPoints()
          } else {
            const element_reviewed = Math.min(this._points.length, series_e.points.length);
            for (let i = 0; i < element_reviewed; i++) this._points[i].price = series_e.points[i].price
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
          symbolId: (0, n.ensureNotNull)(this._model.mainSeries().seriesSource().symbolInstanceId())
        };
        const element_reviewed = (0, f.getServerInterval)(this.properties().childs().interval.value());
        this._model.chartApi().createPointset(this._currentPointsetIdWithPrefix(), "turnaround", this
          ._currentPointsetAndSymbolId.symbolId, element_reviewed, series_e, this.onData.bind(this))
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
      convertYCoordinateToPriceForMoving(series_e, element_reviewed) {
        const i = (0, n.ensureNotNull)(this.priceScale());
        if (i.isEmpty()) return null;
        const series_s = this.ownerSource(),
          o = (0, n.ensure)((series_s || element_reviewed)?.firstValue());
        return i.coordinateToPrice(series_e, o)
      }
      syncMultichartState(series_e) {
        const element_reviewed = {
            points: this._timePoint,
            pointPositionPercents: this.positionPercents(),
            interval: this._model.mainSeries().interval()
          },
          i = this.linkKey().value();
        if (null !== i && this.isSynchronizable()) {
          const series_s = {
            model: this._model,
            linkKey: i,
            symbol: this._model.mainSeries().symbol(),
            finalState: element_reviewed,
            changes: series_e
          };
          (0, T.finishChangingLineTool)(series_s)
        }
      }
      enableCurrentIntervalVisibility() {
        let series_e = this.properties().childs().intervalsVisibilities.state();
        void 0 !== series_e && (series_e = (0, y.mergeIntervalVisibilitiesDefaults)(series_e), (0, y
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
          intervalsVisibilities: element_reviewed,
          ...i
        } = this.properties().state(this._syncStateExclusions);
        return {
          ...i,
          intervalsVisibilities: (0, y.mergeIntervalVisibilitiesDefaults)(element_reviewed),
          zOrder: this.zorder()
        }
      }
      moveLineTool(series_e) {
        const element_reviewed = this._model.mainSeries().interval();
        series_e.forEach(((series_e, i) => this._setPoint(i, {
          ...series_e,
          interval: element_reviewed
        }))), this._normalizePoints()
      }
      targetSignature() {
        return this._targetSignature.readonly()
      }
      setTargetSignature(series_e) {
        (0, n.assert)(this.supportsTargetSignature()), this._targetSignature.setValue(series_e)
      }
      supportsTargetSignature() {
        return !1
      }
      snapTo45DegreesAvailable() {
        return !1
      }
      alignTo45DegreesPoints() {
        if (this.snapTo45DegreesAvailable()) {
          const [series_e, element_reviewed] = this.points();
          if (series_e && element_reviewed) return [{
            ...series_e,
            pointIndex: 0
          }, {
            ...element_reviewed,
            pointIndex: 1
          }]
        }
        return null
      }
      snapPoint45Degree(series_e, element_reviewed, i) {
        const series_s = this._model.timeScale(),
          o = series_s.indexToCoordinate(element_reviewed.index),
          r = series_s.indexToCoordinate(series_e.index) - o,
          series_a = (0, n.ensureNotNull)(this.priceScale()),
          l = element_reviewed.price,
          c = series_e.price,
          h = (0, n.ensureNotNull)((0, n.ensureNotNull)(this.ownerSource()).firstValue()),
          d = series_a.priceToCoordinate(l, h),
          u = series_a.priceToCoordinate(c, h) - d,
          _ = Math.round(Math.atan2(r, u) / Math.PI * 4);
        if (2 === Math.abs(_)) i || (series_e.price = l);
        else if (0 === Math.abs(_) || 4 === Math.abs(_)) i || (series_e.index = element_reviewed.index);
        else {
          const element_reviewed = Math.sqrt(r * r + u * u),
            i = r < 0 ? -1 : 1,
            n = u < 0 ? -1 : 1;
          let l = Math.max(Math.abs(u), Math.abs(r));
          l /= l * Math.sqrt(2) / element_reviewed;
          const c = Math.round(series_s.coordinateToIndex(o + l * i)),
            _ = Math.abs(series_s.indexToCoordinate(c) - o),
            p = series_a.coordinateToPrice(d + _ * n, h);
          series_e.index = c, series_e.price = p
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
          time_t: element_reviewed,
          offset: i
        }) => series_e ? [element_reviewed, i, (0, f.getServerInterval)(series_e)] : [element_reviewed, i]))
      }
      _setPoint(series_e, element_reviewed) {
        this._points[series_e] && (this._points[series_e].index === element_reviewed.index ? this._points[series_e].price = element_reviewed.price : this._points[series_e] =
          element_reviewed, this._pointChanged.fire(series_e))
      }
      _correctLastPoint(series_e) {
        return (0, r.clone)(series_e)
      }
      _snapTo45DegreesApplicable(series_e) {
        return this.snapTo45DegreesAvailable() && (series_e?.shift() || (0, T.alignTo45Degrees)().value())
      }
      _normalizePoint(series_e, element_reviewed) {
        return {
          ...this._model.timeScale().normalizeBarIndex(series_e.index),
          price: series_e.price,
          interval: series_e.interval
        }
      }
      _normalizePointWithoutOffset(series_e) {
        const element_reviewed = this._model.timeScale().indexToTimePoint(series_e.index) ?? this._utcTimeInCurrentResolution(series_e);
        return null === element_reviewed ? null : {
          price: series_e.price,
          time_t: element_reviewed,
          offset: 0,
          interval: series_e.interval
        }
      }
      _normalizePoints() {
        let series_e = [];
        const element_reviewed = this._model.mainSeries().interval();
        for (let i = 0; i < this._points.length; i++)
          if (w.Interval.isEqual(this._points[i].interval, element_reviewed)) {
            if (void 0 !== this._points[i].index) {
              const element_reviewed = this._normalizePoint(this._points[i], i);
              if (!element_reviewed.time_t) {
                series_e = [];
                break
              }
              series_e.push(element_reviewed)
            }
          } else series_e.push({
            ...this._timePoint[i],
            price: this._points[i].price
          });
        this._timePoint = series_e, this._normalizedPointsChanged.fire()
      }
      _getStartBarAligner() {
        const series_e = this._model.mainSeries().interval();
        if (null === this._alignerCache || this._alignerCache.resolution !== this._model.mainSeries().interval()) {
          const element_reviewed = this._model.mainSeries().symbolInfo();
          if (!element_reviewed) return null;
          this._alignerCache = {
            resolution: series_e,
            aligner: (0, h.createTimeToBarTimeAligner)(series_e, element_reviewed)
          }
        }
        return this._alignerCache.aligner
      }
      _utcTimeInCurrentResolution(series_e) {
        const element_reviewed = this._model.timeScale().points(),
          i = element_reviewed.firstPoint(),
          series_s = element_reviewed.lastPoint(),
          o = this._model.mainSeries().syncModel();
        if (null === i || null === series_s || null === o) return null;
        const r = (0, n.ensureNotNull)(element_reviewed.indexOf(i, !1)),
          series_a = (0, n.ensureNotNull)(element_reviewed.indexOf(series_s, !1));
        if (series_e.index >= r && series_e.index <= series_a) return null;
        const l = series_e.index < r ? r : series_a,
          c = (0, n.ensureNotNull)(element_reviewed.valueAt(l)),
          h = series_e.index - l;
        return (0, d.extrapolateBarsFrontByCount)(o.barBuilder(), 1e3 * c, h).time / 1e3
      }
      _setPaneViews(series_e, element_reviewed, i) {
        if (this._isDestroyed)
          for (const element_reviewed of series_e) element_reviewed.destroy && element_reviewed.destroy();
        else this._paneViews.set(element_reviewed, series_e), void 0 !== element_reviewed && i && element_reviewed.onDestroyed().subscribe(this, (() => this
          ._destroyPanePaneViews(element_reviewed))), this._model.lightUpdate()
      }
      _getPaneViews(series_e) {
        return this._paneViews.get(series_e) ?? []
      }
      _updateAllPaneViews(series_e) {
        this._paneViews.forEach((element_reviewed => {
          for (const i of element_reviewed) i.update(series_e)
        }));
        for (const [, element_reviewed] of this._signaturesPaneViews)
          for (const i of element_reviewed) i.update(series_e)
      }
      _alignPointHorizontallyOrVertically(series_e) {
        const element_reviewed = (0, n.ensureNotNull)(this.pointToScreenPoint(series_e)),
          i = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).logical),
          series_s = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).screen),
          o = Math.abs(series_s.x - element_reviewed.x),
          r = Math.abs(series_s.y - element_reviewed.y);
        if (o < 10 && r < 10) return series_e;
        return {
          index: o < r ? i.index : series_e.index,
          price: o < r ? series_e.price : i.price
        }
      }
      _alignScreenPointHorizontallyOrVertically(series_e) {
        const element_reviewed = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).screen),
          i = Math.abs(element_reviewed.x - series_e.x),
          series_s = Math.abs(element_reviewed.y - series_e.y);
        return i < 10 && series_s < 10 ? series_e : i < series_s ? new o.Point(element_reviewed.x, series_e.y) : new o.Point(series_e.x, element_reviewed.y)
      }
      _correctPoints(series_e, element_reviewed) {
        const i = (0, n.ensure)(this._currentMovingPoint?.screen),
          series_s = (0, n.ensure)(this._startMovingPoint?.screen),
          o = i.subtract(series_s);
        if (o.length() < 1 && !element_reviewed) return !1;
        const r = Math.round((0, n.ensure)(this._currentMovingPoint?.logical).index - (0,
          n.ensure)(this._startMovingPoint?.logical).index);
        for (const element_reviewed of series_e) {
          const series_e = (0, n.ensureNotNull)(this.pointToScreenPoint(element_reviewed)).add(o);
          element_reviewed.index = element_reviewed.index + r, element_reviewed.price = (0, n.ensureNotNull)(this.screenPointToPoint(series_e)).price
        }
        return !0
      }
      _correctFixedPoint(series_e) {
        if (void 0 === this._fixedPoint) return {
          didCorrect: !1,
          point: series_e
        };
        const element_reviewed = (0, n.ensureDefined)((0, n.ensureNotNull)(this._currentMovingPoint).screen),
          i = (0, n.ensureDefined)((0, n.ensureNotNull)(this._startMovingPoint).screen),
          series_s = element_reviewed.subtract(i);
        return series_s.length() >= 1 ? {
          didCorrect: !0,
          point: series_e.add(series_s)
        } : {
          didCorrect: !1,
          point: series_e
        }
      }
      _currentPointsetIdWithPrefix() {
        return "pointset_" + (0, n.ensureNotNull)(this._currentPointsetAndSymbolId).pointsetId
      }
      _clearServerPoints() {
        null !== this._currentPointsetAndSymbolId && this._model.chartApi().isConnected().value() && this._model
          .chartApi().removePointset(this._currentPointsetIdWithPrefix()), this._currentPointsetAndSymbolId = null
      }
      _createPointProperty(series_e) {
        const element_reviewed = this._pointsProperty.childs().points;
        element_reviewed.addChild("" + series_e, new C.Property({}));
        const i = element_reviewed[series_e];
        i.addChild("price", new k(this, series_e)), i.addChild("bar", new L.LineDataSourcePointIndexProperty(this, series_e))
      }
      _createPointsProperties() {
        this._pointsProperty = new C.Property, this._pointsProperty.addChild("points", new C.Property);
        for (let series_e = 0; series_e < this.pointsCount(); series_e++) this._createPointProperty(series_e)
      }
      _alignPointToRangeOfActualData(series_e) {
        const element_reviewed = (0, n.ensureNotNull)(this._model.mainSeries().bars().firstIndex()),
          i = (0, n.ensureNotNull)(this._model.mainSeries().bars().lastIndex());
        let series_s = Math.max(series_e.index, element_reviewed);
        return series_s = Math.min(series_s, i), {
          ...series_e,
          index: series_s
        }
      }
      _migrateSymbolProperty(series_e) {
        const element_reviewed = this._properties.childs();
        if (element_reviewed.symbolStateVersion.value() < 2) {
          const i = (0, n.ensureNotNull)(this.ownerSource()),
            series_s = (0, n.ensureNotNull)(i.symbolSource()),
            o = this._model.mainSeries();
          if (series_s === o) return void element_reviewed.symbolStateVersion.setValueSilently(2);
          if (null === o.symbolInfo()) return;
          if (null === series_s.symbolInfo()) return;
          o.symbolSameAsCurrent(element_reviewed.symbol.value()) && element_reviewed.symbol.setValueSilently((0, S
            .extractLineToolSymbolFromSymbolInfo)(series_e, series_s.symbol())), element_reviewed.symbolStateVersion.setValueSilently(2)
        }
      }
      _migrateZOrder() {
        const series_e = this._properties.childs();
        series_e.zOrderVersion.value() < 2 && (this.ownerSource() === this.model().mainSeries() && this.setZorder(this
          .zorder() - this.model().mainSeries().obsoleteZOrder()), series_e.zOrderVersion.setValueSilently(2))
      }
      _preparePoint(series_e, element_reviewed) {
        const i = series_e;
        return this._snapTo45DegreesApplicable(element_reviewed) && this.points().length >= 2 && this.snapPoint45Degree(i, this
          .points()[this.points().length - 2]), i
      }
      _addPointIntenal(series_e, element_reviewed, i) {
        this._points.push({
          ...series_e,
          interval: this._model.mainSeries().interval()
        });
        const series_s = this._points.length === this.pointsCount();
        return series_s ? (this._lastPoint = null, i || (this._normalizePoints(), this.createServerPoints())) : this
          ._lastPoint = series_e, this._pointAdded.fire(this._points.length - 1), series_s
      }
      _onSourceHiddenMayChange() {
        this.isSourceHidden() && this._model.selectionMacro((series_e => {
          series_e.removeSourceFromSelection(this)
        })), this._model.invalidate(g.InvalidationMask.validateAction((() => {
          this !== this._model.lineBeingCreated() && (this._isDestroyed || this.processHibernate())
        })))
      }
      _saveAlertIdInState() {
        return !0
      }
      _onPointsetUpdated(series_e) {
        if (0 === series_e.length) return;
        const element_reviewed = this.properties().childs().interval.value();
        for (const {
            index: i,
            value: series_s
          }
          of series_e) {
          const {
            price: series_e,
            interval: o = element_reviewed
          } = (0, n.ensureDefined)(this._timePoint[i]), [r, series_a] = series_s, l = {
            index: r,
            time: series_a,
            price: series_e,
            interval: o
          };
          if (this._points.length <= i) {
            const series_e = this._points.push(l);
            this._pointAdded.fire(series_e - 1)
          } else this._points[i] = l, this._pointChanged.fire(i)
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
        const element_reviewed = this.linkKey().value();
        element_reviewed && !this._syncLineStyleMuted && this._syncLineStyleChanges(element_reviewed, this.syncLineStyleState(series_e))
      }
      _muteSyncLineStyle() {
        this._syncLineStyleMuted = !0
      }
      _unmuteSyncLineStyleWithoutApplyingChanges() {
        this.propertiesChanged(), this._syncLineStyleMuted = !1
      }
      _applyTemplateImpl(series_e) {
        series_e.intervalsVisibilities = (0, y.mergeIntervalVisibilitiesDefaults)(series_e.intervalsVisibilities);
        const element_reviewed = this.properties();
        element_reviewed.applyTemplate(series_e, (0, R.factoryDefaults)(this.toolname.toLowerCase())), element_reviewed.saveDefaults(), this
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
      _linePointsToAlertPlot(series_e, element_reviewed, i, series_s) {
        return null
      }
      _getAlertCreationAvailable() {
        return !1
      }
      _onAnchoredChange() {
        if (this.isFixed()) {
          const series_e = (0, n.ensureNotNull)(this.pointToScreenPoint(this.points()[0]));
          this.addFixedPoint(series_e)
        } else {
          if (!this._fixedPoint) return;
          const series_e = (0, n.ensureNotNull)(this.screenPointToPoint(this._fixedPoint));
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
      _syncLineStyleChanges(series_e, element_reviewed, i) {
        this.anchorable() && this.isFixed() !== Boolean(this._positionPercents) && this._onAnchoredChange(), (0, T
          .changeLineStyle)({
          linkKey: series_e,
          state: element_reviewed,
          alertId: i,
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
          for (const [element_reviewed, i] of this._signaturesPaneViews) element_reviewed.signature().value() !== series_e && (i.forEach((series_e => series_e.destroy
            ?.())), this._signaturesPaneViews.delete(element_reviewed));
          for (const element_reviewed of this._model.studiesWV(!0).value()) element_reviewed.signature().value() !== series_e || this
            ._signaturesPaneViews.has(element_reviewed) || this._signaturesPaneViews.set(element_reviewed, this._createSignatureSourcePaneViews(
              element_reviewed))
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
          const element_reviewed = (0, r.merge)((0, r.clone)(v.intervalsVisibilitiesDefaults), series_e.childs().intervalsVisibilities
            .state());
          series_e.removeProperty("intervalsVisibilities"), series_e.addChild("intervalsVisibilities", new x
            .IntervalsVisibilitiesProperty(element_reviewed))
        } else series_e.addChild("intervalsVisibilities", new x.IntervalsVisibilitiesProperty(v
          .intervalsVisibilitiesDefaults));
        series_e.hasChild("title") || series_e.addProperty("title", ""), ["symbolStateVersion", "zOrderVersion", "visible",
          "frozen", "symbol", "currencyId", "unitId", "symbolInfo", "points", "interval", "title"
        ].forEach((element_reviewed => series_e.addExcludedKey(element_reviewed, 5))), series_e.hasChild("singleChartOnly") && series_e.removeProperty(
          "singleChartOnly"), series_e.hasChild("font") && series_e.removeProperty("font")
      }
      static _addCollectedProperties(series_e) {
        series_e.hasChild("linewidth") && series_e.addChild("linesWidths", new B.LineToolWidthsProperty([(0, n.ensureDefined)(series_e
            .child("linewidth"))])), series_e.hasChild("linecolor") && series_e.addChild("linesColors", new B
            .LineToolColorsProperty([(0, n.ensureDefined)(series_e.child("linecolor"))])), series_e.hasChild("backgroundColor") &&
          series_e.addChild("backgroundsColors", new B.LineToolColorsProperty([(0, n.ensureDefined)(series_e.child(
            "backgroundColor"))])), series_e.hasChild("textColor") && series_e.addChild("textsColors", new B
            .LineToolColorsProperty([(0, n.ensureDefined)(series_e.child("textColor"))])), series_e.hasChild("linestyle") && series_e
          .addChild("linesStyles", new B.LineToolCollectedProperty([(0, n.ensureDefined)(series_e.child("linestyle"))])), [
            "linesWidths", "linesColors", "backgroundsColors", "textsColors", "linesStyles"
          ].forEach((element_reviewed => {
            series_e.addExcludedKey(element_reviewed, 7)
          }))
      }
      _areAlertsOnLineToolProhibited() {
        return null !== this._ownerSource && !this._ownerSource.canHasAlertOnLineTools()
      }
      _removeAlertSubscriptions() {
        this._unsubscribeAlertCallbacks?.(), this._unsubscribeAlertCallbacks = void 0
      }
      _addAlertSubscriptions(series_e, element_reviewed = {}) {}
      _destroyPanePaneViews(series_e) {
        const element_reviewed = this._paneViews.get(series_e);
        if (void 0 !== element_reviewed)
          for (const series_e of element_reviewed) series_e.destroy && series_e.destroy();
        void 0 !== series_e && series_e.onDestroyed().unsubscribeAll(this), this._paneViews.delete(series_e)
      }
      _copyPricesWithoutNormalization() {
        const series_e = Math.min(this._points.length, this._timePoint.length);
        for (let element_reviewed = 0; element_reviewed < series_e; element_reviewed++) this._timePoint[element_reviewed].price = this._points[element_reviewed].price
      }
      async _getChartAlert() {
        throw new Error("not implemented")
      }
      async _syncAlertWithAlertFacade(series_e = {}) {
        try {
          const element_reviewed = await this.getAlert();
          if (!element_reviewed) return;
          this._addAlertSubscriptions(element_reviewed, series_e)
        } catch (series_e) {
          if (series_e instanceof Error && "not_exists" === series_e.message && this.hasAlert().value()) {
            this._alertStatus.setValue(0);
            return void(await getChartAlertsFacade()).removeAlertFromAllChartsSilently(this.id(), (0, n
              .ensureDefined)(this._alertId))
          }
          O.logError("Failed to set alert, alert will not be saved with drawing in chart")
        }
      }
      async _awaitForPointset() {
        const series_e = {};
        try {
          await Promise.race([new Promise(((series_e, element_reviewed) => {
            setTimeout((() => element_reviewed(new Error("Timeout"))), 3e3)
          })), new Promise((element_reviewed => {
            this.pointsetUpdated().subscribe(series_e, (() => element_reviewed()))
          }))])
        } catch (series_e) {
          throw series_e
        } finally {
          this.pointsetUpdated().unsubscribeAll(series_e)
        }
      }
    }
}
