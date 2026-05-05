/**
 * Module: 41414
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.592Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 41414 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

41414: (exports, t, i) => {
    "use strict";
    i.d(t, {
      LineDataSource: () => U,
      changePointUndoText: () => z
    });
    var state = i(89880),
      o = i(10555),
      nextValue = i(50151),
      r = i(87465),
      array = i(76422),
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
      constructor(exports, t) {
        super(), this._lineSource = exports, this._pointIndex = t, exports.pointAdded().subscribe(this, (exports => {
          this._pointIndex === e && this._listeners.fire(this, `${e}`)
        })), exports.pointChanged().subscribe(this, (exports => {
          this._pointIndex === e && this._listeners.fire(this, `${e}`)
        }))
      }
      value() {
        const exports = this._lineSource.points()[this._pointIndex].price,
          t = (0, nextValue.ensureNotNull)(this._lineSource.ownerSource()).formatter();
        if (t.parse) {
          const i = t.format(exports),
            state = t.parse(i);
          return state.res ? state.value : e
        }
        return e
      }
      setValue(exports) {
        const t = this._lineSource.points()[this._pointIndex];
        t.price = parseFloat("" + e), this._lineSource.startChanging(this._pointIndex, t), this._lineSource
          .setPoint(this._pointIndex, t), this._lineSource.model().updateSource(this._lineSource), this._listeners
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
      start(exports) {
        this._states.push(exports)
      }
      finish(exports) {
        const t = (0, nextValue.ensureDefined)(this._states.pop());
        return state = t, (i = e).length !== state.length ? {
          indexesChanged: !0,
          pricesChanged: !0
        } : i.reduce(((exports, t, i) => {
          const o = s[i];
          return exports.indexesChanged = exports.indexesChanged || t.index !== o.index, exports.pricesChanged = e
            .pricesChanged || t.price !== o.price, e
        }), {
          indexesChanged: !1,
          pricesChanged: !1
        });
        var i, s
      }
      isEmpty() {
        return 0 === this._states.length
      }
    }
    let H = 0;
    const z = new A.TranslatedString("change point", state.t(null, void 0, i(76660)));
    class U extends P.DataSource {
      constructor(exports, t, i, s) {
        if (super(state), this.isLineTool = !0, this.version = 1, this.toolname = "", this.customization = {
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
          }, this._model = exports, this._properties = t, this._localAndServerAlertsMismatch = !1, this._properties
          .hasChild("interval") || this._properties.addChild("interval", new C.Property(exports.mainSeries().interval())),
          this.calcIsActualSymbol(), this._properties.childs().intervalsVisibilities.subscribe(this, this
            .calcIsActualSymbol), this._properties.subscribe(this, this.propertiesChanged.bind(this, !1, void 0)),
          this.zOrderChanged().subscribe(this, this.propertiesChanged.bind(this, !0, void 0)), this
          ._createPointsProperties(), this.pointsCount() > 0)
          for (let exports = 0; e < this.pointsCount(); e++) this._priceAxisViews.push(this.createPriceAxisView(exports)), this
            ._timeAxisViews.push(new E.LineDataSourceTimeAxisView(this, e));
        this._properties.childs().visible.subscribe(this, (exports => {
            const t = !1 === (0, T.hideAllDrawings)().value();
            exports.value() ? exports.value() && t && array.emit("drawing_event", this._id.value(), "show") : (this._model
              .selection().isSelected(this) && this._model.selectionMacro((exports => {
                exports.removeSourceFromSelection(this)
              })), t && array.emit("drawing_event", this._id.value(), "hide")), this._onSourceHiddenMayChange()
          })), (0, T.hideAllDrawings)().subscribe(this, this._onSourceHiddenMayChange), this._sessionConnected =
          this._model.chartApi().isConnected().spawn(), this._sessionConnected.subscribe((exports => {
            e || (this._currentPointsetAndSymbolId = null)
          })), this._alertStatus.subscribe(this._onAlertStatusChanged), this._definitionsViewModel = null, this
          ._properties.setNameInOwner((0, N.propertyPathForSource)(this)), this._sourcesSignatures = e
          .sourcesSignatures().spawn(), this._sourcesSignatures.subscribe(this._updateSignaturesPaneViews.bind(
            this)), this._targetSignature.subscribe(this._updateSignaturesPaneViews.bind(this))
      }
      destroy() {
        this._paneViews.forEach(((exports, t) => this._destroyPanePaneViews(t))), this.stop(), null !== this
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
      setId(exports) {
        super.setId(exports), this._properties.setNameInOwner((0, N.propertyPathForSource)(this))
      }
      priceScale() {
        return this._ownerSource ? this._ownerSource.priceScale() : null
      }
      createPriceAxisView(exports) {
        return new D.LineToolPriceAxisView(this, {
          pointIndex: e
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
      setServerUpdateTime(exports) {
        this._serverUpdateTime = exports, this._onServerUpdateTime.fire()
      }
      serverUpdateTimeChanged() {
        return this._onServerUpdateTime
      }
      adjustedToSplitTime() {
        return null
      }
      adjustToSplit(exports, t) {}
      boundToSymbol() {
        return !0
      }
      isAvailableInFloatingWidget() {
        return !0
      }
      points() {
        const exports = [];
        for (let t = 0; t < this._points.length; t++) {
          const i = this._points[t];
          exports.push({
            index: i.index,
            price: i.price,
            time: i.time
          })
        }
        return this._lastPoint && exports.push(this._correctLastPoint(this._lastPoint)), !this.isFixed() && this
          ._currentMovingPoint && this._startMovingPoint && this._correctPoints(exports), e
      }
      timeAxisPoints() {
        return this.points()
      }
      priceAxisPoints() {
        return this.points()
      }
      fixedPoint(exports) {
        if (!this.isFixed()) return;
        let t;
        const i = e ? exports.priceScale() : this.priceScale();
        if (this._positionPercents && null !== i && !i.isEmpty()) {
          const exports = this._positionPercents,
            state = this._model.timeScale().width() * exports.x,
            nextValue = i.height() * exports.y;
          t = new o.Point(state, n)
        } else void 0 !== this._fixedPoint && (t = this._fixedPoint?.clone());
        if (this._currentMovingPoint && this._startMovingPoint && void 0 !== t) {
          const exports = this._correctFixedPoint(t);
          exports.didCorrect && (t = exports.point)
        }
        return t
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
        const exports = (0, nextValue.ensureNotNull)(this.priceScale());
        return this.points().map((t => {
          const i = (0, nextValue.ensureNotNull)(this.pointToScreenPoint(t)),
            state = i.x / this._model.timeScale().width(),
            r = i.y / exports.height();
          return new o.Point(state, r)
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
      startMoving(exports, t, i, s) {
        this.isFixed() && this.restoreFixedPoint(), this._startMovingPoint = e
      }
      move(exports, t, i, s) {
        if (i && (i.shiftOnly() || i.modShift()))
          if (this.isFixed()) {
            const t = this._alignScreenPointHorizontallyOrVertically((0, nextValue.ensureDefined)(exports.screen));
            this._currentMovingPoint = {
              screen: t
            }
          } else {
            const t = this._alignPointHorizontallyOrVertically((0, nextValue.ensureDefined)(exports.logical)),
              i = (0, nextValue.ensureNotNull)(this.pointToScreenPoint(t));
            this._currentMovingPoint = {
              logical: t,
              screen: i
            }
          }
        else this._currentMovingPoint = exports;
        this.updateAllViews((0, M.sourceChangeEvent)(this.id()))
      }
      endMoving(exports, t, i) {
        let state = !1,
          o = !1;
        if (this._currentMovingPoint && this._startMovingPoint) {
          if (this.isFixed()) {
            const exports = this._correctFixedPoint((0,
              nextValue.ensureDefined)(this._fixedPoint));
            exports.didCorrect && (this._fixedPoint = exports.point, this._fixedPointsChanged.fire())
          } else {
            const exports = (0, nextValue.ensureDefined)(this._currentMovingPoint.logical),
              t = (0, nextValue.ensureDefined)(this._startMovingPoint.logical);
            state = exports.index !== t.index, o = exports.price !== t.price;
            if (this._correctPoints(this._points, i)) {
              const exports = this._id.value();
              array.emit("drawing_event", exports, "move"), array.emit("drawing_event", exports, "points_changed"), this
                ._updateAdjustedToSplitTimeValue();
              for (let exports = 0; e < this._points.length; e++) this._pointChanged.fire(exports)
            }
          }
          this._startMovingPoint = null, this._currentMovingPoint = null
        }
        const r = {
          indexesChanged: state,
          pricesChanged: o
        };
        return this.isFixed() ? (this.calcPositionPercents(), this.updateAllViews((0, M.sourceChangeEvent)(this
        .id())), r) : (s && this._points.forEach((exports => exports.interval = this._model.mainSeries().interval())), this
          .updateAllViews((0, M.sourceChangeEvent)(this.id())), s && !e ? (this._properties.childs().interval
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
      changePointUndoText(exports) {
        return z
      }
      startChanging(exports, t) {
        this.isFixed() && this.restoreFixedPoint(), void 0 !== e && void 0 !== t && (e < this._priceAxisViews
          .length && this._priceAxisViews[e].setActive(!0), e < this._timeAxisViews.length && this._timeAxisViews[
            e].setActive(!0)), this._changeStatesStack.start(this.points())
      }
      endChanging(exports, t, i) {
        const state = this._changeStatesStack.finish(this.points());
        state.indexesChanged && this._changeStatesStack.isEmpty() ? (this._normalizePoints(), t || this
            .createServerPoints()) : (this._copyPricesWithoutNormalization(), this._normalizedPointsChanged.fire()),
          array.emit("drawing_event", this._id.value(), "points_changed"), this._updateAdjustedToSplitTimeValue();
        for (let exports = 0; e < this._priceAxisViews.length; e++) this._priceAxisViews[e].setActive(!1);
        for (let exports = 0; e < this._timeAxisViews.length; e++) this._timeAxisViews[e].setActive(!1);
        return s
      }
      setPoint(exports, t, i, s) {
        if (this._snapTo45DegreesApplicable(i)) {
          const i = 0 === e ? 1 : e - 1;
          this.snapPoint45Degree(t, this.points()[i])
        }
        this._setPoint(exports, {
          ...t,
          interval: this._model.mainSeries().interval()
        })
      }
      getPoint(exports) {
        return this.points()[e] || null
      }
      alignCrossHairToAnchor(exports) {
        return !0
      }
      alignCrossHairToMovePoint() {
        return !1
      }
      setLastPoint(exports, t, i = !0) {
        return this._lastPoint = i ? this._preparePoint(exports, t) : exports, this.updateAllViews((0, M.sourceChangeEvent)(this
          .id())), this._lastPoint
      }
      lastPoint() {
        return this._lastPoint
      }
      getChangePointForSync(exports) {
        return this.getPoint(exports)
      }
      setPoints(exports) {
        const t = this._model.mainSeries().interval();
        this._points = exports.map((exports => ({
          ...e,
          interval: exports.interval ?? t
        })))
      }
      isForcedDrawPriceAxisLabel() {
        return this.customization.forcePriceAxisLabel
      }
      clearData() {
        this._points = []
      }
      denormalizeTimePoints() {
        let exports = [];
        const t = this._model.mainSeries().interval();
        for (let i = 0; i < this._timePoint.length; i++) {
          const state = this._model.timeScale().denormalizeTimePoint(this._timePoint[i]);
          if (void 0 === s) {
            exports = [];
            break
          }
          exports.push({
            index: state,
            price: this._timePoint[i].price,
            interval: this._timePoint[i].interval ?? t
          })
        }
        exports.length > 0 && (this._points = e)
      }
      restorePoints(exports, t, i) {
        const state = this._timePoint.length > 0 && !(0, r.deepEquals)(this._timePoint, e)[0],
          o = this._properties.childs().interval.value();
        this._timePoint = exports.map((exports => ({
          ...e,
          interval: exports.interval ?? o
        })));
        const nextValue = this._model.mainSeries().interval();
        this._points = t.map((exports => ({
          ...e,
          interval: n
        }))), i || this.denormalizeTimePoints(), s && this._normalizedPointsChanged.fire()
      }
      restorePositionPercents(exports) {
        this._positionPercents = exports, this.restoreFixedPoint()
      }
      calcIsActualSymbol() {
        const exports = this.ownerSource(),
          t = this._isActualSymbol;
        if (null === e) this._isActualSymbol = !1;
        else {
          const exports = this._symbolSource?.value(),
            t = this._symbolSourceSymbolInfo?.value();
          if (t && e) {
            this._migrateSymbolProperty(t);
            const i = this._properties.childs().symbol,
              state = i.value();
            if (this._isActualSymbol = exports.symbolSameAsCurrent(state), this._isActualSymbol) {
              const o = (0, S.extractLineToolSymbolFromSymbolInfo)(t, exports.symbol());
              (0, b.areEqualSymbols)(state, o) || (O.logWarn('Possible drawing "migrating" detected from "' + s +
                '" to "' + o + '"'), O.logWarn("Series symbolInfo: " + JSON.stringify(exports.symbolInfo())), O.logWarn(
                `${(new Error).stack}`)), i.setValue(o)
            }
          }
        }
        this._isActualSymbol !== t && this._onIsActualSymbolChange.fire(), this.calcIsActualInterval(), this
          .calcIsActualCurrency(), this.calcIsActualUnit(), this._onSourceHiddenMayChange()
      }
      calcIsActualCurrency() {
        const exports = this.ownerSource();
        if (null === e) return void(this._isActualCurrency = !1);
        let t = this._properties.childs().currencyId.value();
        if (null !== t) {
          const i = exports.symbolSource();
          0, this._isActualCurrency = t === (0, S.symbolCurrency)(i.symbolInfo(), void 0, !0)
        } else {
          const t = (0, nextValue.ensureNotNull)(exports.symbolSource());
          this._isActualCurrency = null !== t.symbolInfo() && !t.isConvertedToOtherCurrency()
        }
        this._onSourceHiddenMayChange()
      }
      calcIsActualUnit() {
        const exports = this.ownerSource();
        if (null === e) return void(this._isActualUnit = !1);
        const t = this._properties.childs().unitId.value();
        if (null !== t) this._isActualUnit = t === (0, nextValue.ensureNotNull)(exports.symbolSource()).unit();
        else {
          const t = (0, nextValue.ensureNotNull)(exports.symbolSource());
          this._isActualUnit = null !== t.symbolInfo() && !t.isConvertedToOtherUnit()
        }
        this._onSourceHiddenMayChange()
      }
      calcIsActualInterval() {
        const exports = this._isActualInterval,
          t = this._properties,
          i = this._model.mainSeries();
        this._isActualInterval = (0, y.isActualInterval)(w.Interval.parse(i.interval()), t.childs()
            .intervalsVisibilities), !this._isActualInterval && this._model.selection().isSelected(this) && this
          ._model.selectionMacro((exports => exports.removeSourceFromSelection(this))), this._isActualInterval !== e && this
          ._onIsActualIntervalChange.fire(), this._onSourceHiddenMayChange()
      }
      paneViews(exports) {
        if (this.isSourceHidden()) return null;
        const t = this._getPaneViews(this.isMultiPaneAvailable() ? e : void 0);
        if (null === t) return null;
        if (1 === t.length) return [t[0]];
        const i = [];
        for (let exports = t.length - 1; e >= 0; --e) i.push(t[e]);
        return i
      }
      priceAxisViews(exports, t) {
        if (this.isFixed()) return null;
        if (t !== this.priceScale() || this.isSourceHidden()) return null;
        if (this._model.lineBeingEdited() === this) {
          const exports = this._model.linePointBeingEdited();
          if (null !== e && e < this._priceAxisViews.length) {
            const t = this._priceAxisViews.slice(),
              i = t[e];
            return t.splice(exports, 1), t.push(i), t
          }
          return this._priceAxisViews
        }
        return this._priceAxisViews
      }
      timeAxisViews() {
        if (this.isSourceHidden() || this.isFixed()) return null;
        if (this._model.lineBeingEdited() === this) {
          const exports = this._model.linePointBeingEdited();
          if (null !== e && e < this._timeAxisViews.length) {
            const t = this._timeAxisViews.slice(),
              i = t[e];
            return t.splice(exports, 1), t.push(i), t
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
      setSavingInChartEnabled(exports) {
        this.customization.disableSave = !e
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
      async setAlert(exports, t = {}) {
        throw new Error("not implemented")
      }
      async restoreAlert(exports, t) {
        throw new Error("not implemented")
      }
      editAlert(exports) {}
      async getAlert() {
        try {
          const exports = await this._getChartAlert();
          if (!e) throw O.logError("Failed to get alert, alert will not be saved with drawing in chart"), new Error(
            "got_no_alert");
          return e
        } catch (exports) {
          if (e instanceof Error && "not implemented" === exports.message) throw exports;
          if ("not_exists" === e) throw new Error(exports);
          return O.logError(`Getting alert failed: ${e instanceof Error?exports.message:e}`), null
        }
      }
      getAlertSync() {
        return null
      }
      async synchronizeAlert(exports = !1) {}
      syncAlert(exports) {
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
      setShowInObjectsTreeEnabled(exports) {
        this.customization.showInObjectsTree = e
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
      onData(exports) {
        "pointset_error" !== exports.method ? exports.params.customId === this._currentPointsetIdWithPrefix() && this
          ._onPointsetUpdated(exports.params.plots) : O.logError(`Error getting pointset: ${exports.params[0]} ${exports.params[1]}`)
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
      setOwnerSource(exports) {
        if (null !== this._ownerSource && (this._ownerSource.currencyChanged().unsubscribeAll(this), this
            ._ownerSource.unitChanged().unsubscribeAll(this), this._symbolSource?.destroy(), this._symbolSource =
            null, this._symbolSourceSymbolInfo?.destroy(), this._symbolSourceSymbolInfo = null), super
          .setOwnerSource(exports), e) {
          this._symbolSource = exports.symbolSourceWV().spawn();
          const t = (0, u.combine)((exports => [exports.symbolInfoWV().weakReference()]), this._symbolSource.weakReference());
          this._symbolSourceSymbolInfo = (0,
              u.accumulate)((exports => e[0] ?? null), t.ownership()), this._symbolSourceSymbolInfo.subscribe(this
              ._boundCalcIsActualSymbol), this.setPriceScale(exports.priceScale()), exports.currencyChanged().subscribe(this,
              this.calcIsActualCurrency), exports.unitChanged().subscribe(this, this.calcIsActualUnit), this
            .calcIsActualSymbol(), this._migrateZOrder(), this._updateAlertCreationAvailable()
        }(0, I.isSymbolSource)(exports) && (exports.symbolResolved().subscribe(this, this._boundCalcIsActualSymbol), e
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
      pointToScreenPoint(exports, t) {
        const i = this._model.timeScale(),
          state = t ? t.priceScale() : this.priceScale(),
          nextValue = (t ?? this.ownerSource())?.firstValue();
        if (!s || state.isEmpty() || i.isEmpty() || null == n) return null;
        const r = i.indexToCoordinate(exports.index),
          array = state.priceToCoordinate(exports.price, n);
        return new o.Point(r, a)
      }
      screenPointToPoint(exports, t, i) {
        const state = i ? i.priceScale() : this.priceScale(),
          o = (i ?? this.ownerSource())?.firstValue();
        if (null == o || !isFinite(o) || null === s) return null;
        const nextValue = this._model.timeScale(),
          r = t ? nextValue.coordinateToFloatIndex(exports.x) : nextValue.coordinateToIndex(exports.x);
        return {
          price: state.coordinateToPrice(exports.y, o),
          index: r
        }
      }
      calcMiddlePoint(exports, t) {
        return new o.Point((exports.x + t.x) / 2, (exports.y + t.y) / 2)
      }
      addPoint(exports, t, i) {
        const state = this._preparePoint(exports, t);
        return this._addPointIntenal(state, t, i)
      }
      addFixedPoint(exports) {
        return this._fixedPoint = exports, this.calcPositionPercents(), !0
      }
      calcPositionPercents() {
        const exports = this.priceScale();
        if (!e || exports.isEmpty() || void 0 === this._fixedPoint) return;
        const t = this._fixedPoint.x / this._model.timeScale().width(),
          i = this._fixedPoint.y / exports.height();
        return this._positionPercents = {
          x: t,
          y: i
        }, this._positionPercents
      }
      restoreFixedPoint() {
        this._fixedPoint = this.fixedPoint()
      }
      propertiesChanged(exports, t) {
        this.calcIsActualInterval(), this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id())), t || this
          ._syncLineStyleIfNeeded(exports), e || void 0 !== this._pendingPropertyChangedEvent || (this
            ._pendingPropertyChangedEvent = setTimeout((() => {
              this._pendingPropertyChangedEvent = void 0, array.emit("drawing_event", this._id.value(),
                "properties_changed")
            }), 0))
      }
      state(exports) {
        const t = this.toolname,
          i = this.ownerSource(),
          state = {
            type: t,
            id: this.id(),
            state: this.properties().state(this._propertiesStateExclusions()),
            points: (0, p.deepCopy)(this._timePoint),
            zorder: this.zorder(),
            ownerSource: i?.id()
          };
        this._targetSignature.value();
        return state.isSelectionEnabled = this.isSelectionEnabled(), state.userEditEnabled = this.userEditEnabled(), this
          .linkKey().value() && (state.linkKey = this.linkKey().value()), delete state.state.points, e && (state.indexes = this
            ._points), this.isFixed() && (state.positionPercents = this._positionPercents || this
          .calcPositionPercents()), "version" in this && 1 !== this.version && (state.version = this.version), s
      }
      updateAllViews(exports) {
        this.isSourceHidden() || "data-source-change" === exports.type && this._ignoreSourceEvent(exports) || (this
          ._updateAllPaneViews(exports), this._priceAxisViews.forEach((t => t.update(exports))), this._timeAxisViews.forEach((
            t => t.update(exports))))
      }
      updateAllViewsAndRedraw(exports) {
        this.updateAllViews(exports),
          this._model.updateSource(this)
      }
      tags() {
        return [this.toolname]
      }
      properties() {
        return this._properties
      }
      restoreExternalPoints(exports, t) {
        try {
          if (this._timePoint = (0, p.deepCopy)(exports.points), t.indexesChanged) {
            if (this.properties().childs().interval.setValue(exports.interval), !this.isActualSymbol()) return void this
              ._clearServerPoints();
            this.createServerPoints()
          } else {
            const t = Math.min(this._points.length, exports.points.length);
            for (let i = 0; i < t; i++) this._points[i].price = exports.points[i].price
          }
          this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id()))
        } finally {
          this._normalizedPointsChanged.fire()
        }
      }
      restoreExternalState(exports) {
        this.properties().mergeAndFire(exports)
      }
      applyTemplate(exports) {
        this._onTemplateApplying.fire(exports), this._applyTemplateImpl(exports), this.calcIsActualSymbol(), this
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
        const exports = this.properties().child("frozen");
        return void 0 !== e && exports.value()
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
          const exports = await this._getPropertyDefinitionsViewModelClass();
          return null === e || this._isDestroyed ? null : (this._definitionsViewModel = new e(this._model
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
        const exports = this._pointsForPointset();
        if (0 === exports.length) return;
        ++H, this._currentPointsetAndSymbolId = {
          pointsetId: H,
          symbolId: (0, nextValue.ensureNotNull)(this._model.mainSeries().seriesSource().symbolInstanceId())
        };
        const t = (0, f.getServerInterval)(this.properties().childs().interval.value());
        this._model.chartApi().createPointset(this._currentPointsetIdWithPrefix(), "turnaround", this
          ._currentPointsetAndSymbolId.symbolId, t, exports, this.onData.bind(this))
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
      convertYCoordinateToPriceForMoving(exports, t) {
        const i = (0, nextValue.ensureNotNull)(this.priceScale());
        if (i.isEmpty()) return null;
        const state = this.ownerSource(),
          o = (0, nextValue.ensure)((s || t)?.firstValue());
        return i.coordinateToPrice(exports, o)
      }
      syncMultichartState(exports) {
        const t = {
            points: this._timePoint,
            pointPositionPercents: this.positionPercents(),
            interval: this._model.mainSeries().interval()
          },
          i = this.linkKey().value();
        if (null !== i && this.isSynchronizable()) {
          const state = {
            model: this._model,
            linkKey: i,
            symbol: this._model.mainSeries().symbol(),
            finalState: t,
            changes: e
          };
          (0, T.finishChangingLineTool)(state)
        }
      }
      enableCurrentIntervalVisibility() {
        let exports = this.properties().childs().intervalsVisibilities.state();
        void 0 !== e && (exports = (0, y.mergeIntervalVisibilitiesDefaults)(exports), (0, y
            .makeIntervalsVisibilitiesVisibleAtInterval)(exports, this._model.mainSeries().intervalObj().value()), this
          .properties().childs().intervalsVisibilities.mergeAndFire(exports))
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
      share(exports) {
        this.isSynchronizable() && this._sharingMode.setValue(exports)
      }
      syncLineStyleState(exports) {
        if (exports) return {
          zOrder: this.zorder()
        };
        const {
          intervalsVisibilities: t,
          ...i
        } = this.properties().state(this._syncStateExclusions);
        return {
          ...i,
          intervalsVisibilities: (0, y.mergeIntervalVisibilitiesDefaults)(t),
          zOrder: this.zorder()
        }
      }
      moveLineTool(exports) {
        const t = this._model.mainSeries().interval();
        exports.forEach(((exports, i) => this._setPoint(i, {
          ...e,
          interval: t
        }))), this._normalizePoints()
      }
      targetSignature() {
        return this._targetSignature.readonly()
      }
      setTargetSignature(exports) {
        (0, nextValue.assert)(this.supportsTargetSignature()), this._targetSignature.setValue(exports)
      }
      supportsTargetSignature() {
        return !1
      }
      snapTo45DegreesAvailable() {
        return !1
      }
      alignTo45DegreesPoints() {
        if (this.snapTo45DegreesAvailable()) {
          const [e, t] = this.points();
          if (e && t) return [{
            ...e,
            pointIndex: 0
          }, {
            ...t,
            pointIndex: 1
          }]
        }
        return null
      }
      snapPoint45Degree(exports, t, i) {
        const state = this._model.timeScale(),
          o = state.indexToCoordinate(t.index),
          r = state.indexToCoordinate(exports.index) - o,
          array = (0, nextValue.ensureNotNull)(this.priceScale()),
          l = t.price,
          c = exports.price,
          h = (0, nextValue.ensureNotNull)((0, nextValue.ensureNotNull)(this.ownerSource()).firstValue()),
          d = array.priceToCoordinate(l, h),
          u = array.priceToCoordinate(c, h) - d,
          _ = Math.round(Math.atan2(r, u) / Math.PI * 4);
        if (2 === Math.abs(_)) i || (exports.price = l);
        else if (0 === Math.abs(_) || 4 === Math.abs(_)) i || (exports.index = t.index);
        else {
          const t = Math.sqrt(r * r + u * u),
            i = r < 0 ? -1 : 1,
            nextValue = u < 0 ? -1 : 1;
          let l = Math.max(Math.abs(u), Math.abs(r));
          l /= l * Math.sqrt(2) / t;
          const c = Math.round(state.coordinateToIndex(o + l * i)),
            _ = Math.abs(state.indexToCoordinate(c) - o),
            p = array.coordinateToPrice(d + _ * nextValue, h);
          exports.index = c, exports.price = p
        }
      }
      contextMenuStatName() {
        return "LineToolContextMenu"
      }
      _ignoreSourceEvent(exports) {
        return exports.sourceId !== this.id()
      }
      _pointsForPointset() {
        return this._timePoint.map((({
          interval: exports,
          time_t: t,
          offset: i
        }) => e ? [t, i, (0, f.getServerInterval)(exports)] : [t, i]))
      }
      _setPoint(exports, t) {
        this._points[e] && (this._points[e].index === t.index ? this._points[e].price = t.price : this._points[e] =
          t, this._pointChanged.fire(exports))
      }
      _correctLastPoint(exports) {
        return (0, r.clone)(exports)
      }
      _snapTo45DegreesApplicable(exports) {
        return this.snapTo45DegreesAvailable() && (e?.shift() || (0, T.alignTo45Degrees)().value())
      }
      _normalizePoint(exports, t) {
        return {
          ...this._model.timeScale().normalizeBarIndex(exports.index),
          price: exports.price,
          interval: exports.interval
        }
      }
      _normalizePointWithoutOffset(exports) {
        const t = this._model.timeScale().indexToTimePoint(exports.index) ?? this._utcTimeInCurrentResolution(exports);
        return null === t ? null : {
          price: exports.price,
          time_t: t,
          offset: 0,
          interval: exports.interval
        }
      }
      _normalizePoints() {
        let exports = [];
        const t = this._model.mainSeries().interval();
        for (let i = 0; i < this._points.length; i++)
          if (w.Interval.isEqual(this._points[i].interval, t)) {
            if (void 0 !== this._points[i].index) {
              const t = this._normalizePoint(this._points[i], i);
              if (!t.time_t) {
                exports = [];
                break
              }
              exports.push(t)
            }
          } else exports.push({
            ...this._timePoint[i],
            price: this._points[i].price
          });
        this._timePoint = exports, this._normalizedPointsChanged.fire()
      }
      _getStartBarAligner() {
        const exports = this._model.mainSeries().interval();
        if (null === this._alignerCache || this._alignerCache.resolution !== this._model.mainSeries().interval()) {
          const t = this._model.mainSeries().symbolInfo();
          if (!t) return null;
          this._alignerCache = {
            resolution: exports,
            aligner: (0, h.createTimeToBarTimeAligner)(exports, t)
          }
        }
        return this._alignerCache.aligner
      }
      _utcTimeInCurrentResolution(exports) {
        const t = this._model.timeScale().points(),
          i = t.firstPoint(),
          state = t.lastPoint(),
          o = this._model.mainSeries().syncModel();
        if (null === i || null === s || null === o) return null;
        const r = (0, nextValue.ensureNotNull)(t.indexOf(i, !1)),
          array = (0, nextValue.ensureNotNull)(t.indexOf(state, !1));
        if (exports.index >= r && exports.index <= a) return null;
        const l = exports.index < r ? r : array,
          c = (0, nextValue.ensureNotNull)(t.valueAt(l)),
          h = exports.index - l;
        return (0, d.extrapolateBarsFrontByCount)(o.barBuilder(), 1e3 * c, h).time / 1e3
      }
      _setPaneViews(exports, t, i) {
        if (this._isDestroyed)
          for (const t of e) t.destroy && t.destroy();
        else this._paneViews.set(t, e), void 0 !== t && i && t.onDestroyed().subscribe(this, (() => this
          ._destroyPanePaneViews(t))), this._model.lightUpdate()
      }
      _getPaneViews(exports) {
        return this._paneViews.get(exports) ?? []
      }
      _updateAllPaneViews(exports) {
        this._paneViews.forEach((t => {
          for (const i of t) i.update(exports)
        }));
        for (const [, t] of this._signaturesPaneViews)
          for (const i of t) i.update(exports)
      }
      _alignPointHorizontallyOrVertically(exports) {
        const t = (0, nextValue.ensureNotNull)(this.pointToScreenPoint(exports)),
          i = (0, nextValue.ensureDefined)((0, nextValue.ensureNotNull)(this._startMovingPoint).logical),
          state = (0, nextValue.ensureDefined)((0, nextValue.ensureNotNull)(this._startMovingPoint).screen),
          o = Math.abs(state.x - t.x),
          r = Math.abs(state.y - t.y);
        if (o < 10 && r < 10) return exports;
        return {
          index: o < r ? i.index : exports.index,
          price: o < r ? exports.price : i.price
        }
      }
      _alignScreenPointHorizontallyOrVertically(exports) {
        const t = (0, nextValue.ensureDefined)((0, nextValue.ensureNotNull)(this._startMovingPoint).screen),
          i = Math.abs(t.x - exports.x),
          state = Math.abs(t.y - exports.y);
        return i < 10 && s < 10 ? e : i < s ? new o.Point(t.x, exports.y) : new o.Point(exports.x, t.y)
      }
      _correctPoints(exports, t) {
        const i = (0, nextValue.ensure)(this._currentMovingPoint?.screen),
          state = (0, nextValue.ensure)(this._startMovingPoint?.screen),
          o = i.subtract(state);
        if (o.length() < 1 && !t) return !1;
        const r = Math.round((0, nextValue.ensure)(this._currentMovingPoint?.logical).index - (0,
          nextValue.ensure)(this._startMovingPoint?.logical).index);
        for (const t of e) {
          const exports = (0, nextValue.ensureNotNull)(this.pointToScreenPoint(t)).add(o);
          t.index = t.index + r, t.price = (0, nextValue.ensureNotNull)(this.screenPointToPoint(exports)).price
        }
        return !0
      }
      _correctFixedPoint(exports) {
        if (void 0 === this._fixedPoint) return {
          didCorrect: !1,
          point: e
        };
        const t = (0, nextValue.ensureDefined)((0, nextValue.ensureNotNull)(this._currentMovingPoint).screen),
          i = (0, nextValue.ensureDefined)((0, nextValue.ensureNotNull)(this._startMovingPoint).screen),
          state = t.subtract(i);
        return state.length() >= 1 ? {
          didCorrect: !0,
          point: exports.add(state)
        } : {
          didCorrect: !1,
          point: e
        }
      }
      _currentPointsetIdWithPrefix() {
        return "pointset_" + (0, nextValue.ensureNotNull)(this._currentPointsetAndSymbolId).pointsetId
      }
      _clearServerPoints() {
        null !== this._currentPointsetAndSymbolId && this._model.chartApi().isConnected().value() && this._model
          .chartApi().removePointset(this._currentPointsetIdWithPrefix()), this._currentPointsetAndSymbolId = null
      }
      _createPointProperty(exports) {
        const t = this._pointsProperty.childs().points;
        t.addChild("" + exports, new C.Property({}));
        const i = t[e];
        i.addChild("price", new k(this, e)), i.addChild("bar", new L.LineDataSourcePointIndexProperty(this, e))
      }
      _createPointsProperties() {
        this._pointsProperty = new C.Property, this._pointsProperty.addChild("points", new C.Property);
        for (let exports = 0; e < this.pointsCount(); e++) this._createPointProperty(exports)
      }
      _alignPointToRangeOfActualData(exports) {
        const t = (0, nextValue.ensureNotNull)(this._model.mainSeries().bars().firstIndex()),
          i = (0, nextValue.ensureNotNull)(this._model.mainSeries().bars().lastIndex());
        let state = Math.max(exports.index, t);
        return state = Math.min(state, i), {
          ...e,
          index: s
        }
      }
      _migrateSymbolProperty(exports) {
        const t = this._properties.childs();
        if (t.symbolStateVersion.value() < 2) {
          const i = (0, nextValue.ensureNotNull)(this.ownerSource()),
            state = (0, nextValue.ensureNotNull)(i.symbolSource()),
            o = this._model.mainSeries();
          if (state === o) return void t.symbolStateVersion.setValueSilently(2);
          if (null === o.symbolInfo()) return;
          if (null === state.symbolInfo()) return;
          o.symbolSameAsCurrent(t.symbol.value()) && t.symbol.setValueSilently((0, S
            .extractLineToolSymbolFromSymbolInfo)(exports, state.symbol())), t.symbolStateVersion.setValueSilently(2)
        }
      }
      _migrateZOrder() {
        const exports = this._properties.childs();
        exports.zOrderVersion.value() < 2 && (this.ownerSource() === this.model().mainSeries() && this.setZorder(this
          .zorder() - this.model().mainSeries().obsoleteZOrder()), exports.zOrderVersion.setValueSilently(2))
      }
      _preparePoint(exports, t) {
        const i = exports;
        return this._snapTo45DegreesApplicable(t) && this.points().length >= 2 && this.snapPoint45Degree(i, this
          .points()[this.points().length - 2]), i
      }
      _addPointIntenal(exports, t, i) {
        this._points.push({
          ...e,
          interval: this._model.mainSeries().interval()
        });
        const state = this._points.length === this.pointsCount();
        return s ? (this._lastPoint = null, i || (this._normalizePoints(), this.createServerPoints())) : this
          ._lastPoint = exports, this._pointAdded.fire(this._points.length - 1), s
      }
      _onSourceHiddenMayChange() {
        this.isSourceHidden() && this._model.selectionMacro((exports => {
          exports.removeSourceFromSelection(this)
        })), this._model.invalidate(g.InvalidationMask.validateAction((() => {
          this !== this._model.lineBeingCreated() && (this._isDestroyed || this.processHibernate())
        })))
      }
      _saveAlertIdInState() {
        return !0
      }
      _onPointsetUpdated(exports) {
        if (0 === exports.length) return;
        const t = this.properties().childs().interval.value();
        for (const {
            index: i,
            value: s
          }
          of e) {
          const {
            price: exports,
            interval: o = t
          } = (0, nextValue.ensureDefined)(this._timePoint[i]), [r, a] = state, l = {
            index: r,
            time: array,
            price: exports,
            interval: o
          };
          if (this._points.length <= i) {
            const exports = this._points.push(l);
            this._pointAdded.fire(e - 1)
          } else this._points[i] = l, this._pointChanged.fire(i)
        }
        this._onPointsetUpdatedDelegate.fire(), this.updateAllViewsAndRedraw((0, M.sourceChangeEvent)(this.id()))
      }
      _onMainSeriesSymbolResolved() {
        const exports = this.ownerSource();
        null === e || this._model.mainSeries() === exports.symbolSource() || this.isSourceHidden() || this
          .createServerPoints()
      }
      _readyToCreatePointset() {
        return this._timePoint.length > 0
      }
      _propertiesStateExclusions() {
        return []
      }
      _syncLineStyleIfNeeded(exports) {
        const t = this.linkKey().value();
        t && !this._syncLineStyleMuted && this._syncLineStyleChanges(t, this.syncLineStyleState(exports))
      }
      _muteSyncLineStyle() {
        this._syncLineStyleMuted = !0
      }
      _unmuteSyncLineStyleWithoutApplyingChanges() {
        this.propertiesChanged(), this._syncLineStyleMuted = !1
      }
      _applyTemplateImpl(exports) {
        exports.intervalsVisibilities = (0, y.mergeIntervalVisibilitiesDefaults)(exports.intervalsVisibilities);
        const t = this.properties();
        t.applyTemplate(exports, (0, R.factoryDefaults)(this.toolname.toLowerCase())), t.saveDefaults(), this
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
      async _synchronizeAlert(exports) {}
      _linePointsToAlertPlot(exports, t, i, s) {
        return null
      }
      _getAlertCreationAvailable() {
        return !1
      }
      _onAnchoredChange() {
        if (this.isFixed()) {
          const exports = (0, nextValue.ensureNotNull)(this.pointToScreenPoint(this.points()[0]));
          this.addFixedPoint(exports)
        } else {
          if (!this._fixedPoint) return;
          const exports = (0, nextValue.ensureNotNull)(this.screenPointToPoint(this._fixedPoint));
          this._points[0] = {
              ...e,
              interval: this._model.mainSeries().interval()
            }, this.startChanging(), this.setPoint(0, e), this.endChanging(!1, !1), this._timePoint[0] = this
            ._normalizePoint(this._points[0], 0), this.clearFixedPoint()
        }
        const exports = this.linkKey().value();
        null !== e && this.isSynchronizable() && (0, T.restoreLineToolState)({
          model: this._model,
          linkKey: exports,
          state: this.state()
        })
      }
      _syncLineStyleChanges(exports, t, i) {
        this.anchorable() && this.isFixed() !== Boolean(this._positionPercents) && this._onAnchoredChange(), (0, T
          .changeLineStyle)({
          linkKey: exports,
          state: t,
          alertId: i,
          model: this._model
        })
      }
      _updateAdjustedToSplitTimeValue(exports) {}
      _createSignatureSourcePaneViews(exports) {
        return []
      }
      _updateSignaturesPaneViews() {
        const exports = this.targetSignature().value();
        if (null !== e || 0 !== this._signaturesPaneViews.size) {
          for (const [t, i] of this._signaturesPaneViews) t.signature().value() !== e && (i.forEach((exports => exports.destroy
            ?.())), this._signaturesPaneViews.delete(t));
          for (const t of this._model.studiesWV(!0).value()) t.signature().value() !== e || this
            ._signaturesPaneViews.has(t) || this._signaturesPaneViews.set(t, this._createSignatureSourcePaneViews(
              t))
        }
      }
      static _configureProperties(exports) {
        if (this._addCollectedProperties(exports), exports.hasChild("symbolStateVersion") || exports.addProperty("symbolStateVersion",
            1), exports.hasChild("zOrderVersion") || exports.addProperty("zOrderVersion", 1), exports.hasChild("visible") || e
          .addProperty("visible", !0),
          exports.hasChild("frozen") || exports.addProperty("frozen", !1), exports.hasChild("symbol") || exports.addProperty("symbol", ""),
          exports.hasChild("currencyId") || exports.addProperty("currencyId", null), exports.hasChild("unitId") || exports.addProperty(
            "unitId", null), exports.hasChild("adjustedToSplitTime") || exports.addProperty("adjustedToSplitTime", null), e
          .hasChild("intervalsVisibilities")) {
          const t = (0, r.merge)((0, r.clone)(v.intervalsVisibilitiesDefaults), exports.childs().intervalsVisibilities
            .state());
          exports.removeProperty("intervalsVisibilities"), exports.addChild("intervalsVisibilities", new x
            .IntervalsVisibilitiesProperty(t))
        } else exports.addChild("intervalsVisibilities", new x.IntervalsVisibilitiesProperty(v
          .intervalsVisibilitiesDefaults));
        exports.hasChild("title") || exports.addProperty("title", ""), ["symbolStateVersion", "zOrderVersion", "visible",
          "frozen", "symbol", "currencyId", "unitId", "symbolInfo", "points", "interval", "title"
        ].forEach((t => exports.addExcludedKey(t, 5))), exports.hasChild("singleChartOnly") && exports.removeProperty(
          "singleChartOnly"), exports.hasChild("font") && exports.removeProperty("font")
      }
      static _addCollectedProperties(exports) {
        exports.hasChild("linewidth") && exports.addChild("linesWidths", new B.LineToolWidthsProperty([(0, nextValue.ensureDefined)(e
            .child("linewidth"))])), exports.hasChild("linecolor") && exports.addChild("linesColors", new B
            .LineToolColorsProperty([(0, nextValue.ensureDefined)(exports.child("linecolor"))])), exports.hasChild("backgroundColor") &&
          exports.addChild("backgroundsColors", new B.LineToolColorsProperty([(0, nextValue.ensureDefined)(exports.child(
            "backgroundColor"))])), exports.hasChild("textColor") && exports.addChild("textsColors", new B
            .LineToolColorsProperty([(0, nextValue.ensureDefined)(exports.child("textColor"))])), exports.hasChild("linestyle") && e
          .addChild("linesStyles", new B.LineToolCollectedProperty([(0, nextValue.ensureDefined)(exports.child("linestyle"))])), [
            "linesWidths", "linesColors", "backgroundsColors", "textsColors", "linesStyles"
          ].forEach((t => {
            exports.addExcludedKey(t, 7)
          }))
      }
      _areAlertsOnLineToolProhibited() {
        return null !== this._ownerSource && !this._ownerSource.canHasAlertOnLineTools()
      }
      _removeAlertSubscriptions() {
        this._unsubscribeAlertCallbacks?.(), this._unsubscribeAlertCallbacks = void 0
      }
      _addAlertSubscriptions(exports, t = {}) {}
      _destroyPanePaneViews(exports) {
        const t = this._paneViews.get(exports);
        if (void 0 !== t)
          for (const e of t) exports.destroy && exports.destroy();
        void 0 !== e && exports.onDestroyed().unsubscribeAll(this), this._paneViews.delete(exports)
      }
      _copyPricesWithoutNormalization() {
        const exports = Math.min(this._points.length, this._timePoint.length);
        for (let t = 0; t < exports; t++) this._timePoint[t].price = this._points[t].price
      }
      async _getChartAlert() {
        throw new Error("not implemented")
      }
      async _syncAlertWithAlertFacade(exports = {}) {
        try {
          const t = await this.getAlert();
          if (!t) return;
          this._addAlertSubscriptions(t, e)
        } catch (exports) {
          if (e instanceof Error && "not_exists" === exports.message && this.hasAlert().value()) {
            this._alertStatus.setValue(0);
            return void(await getChartAlertsFacade()).removeAlertFromAllChartsSilently(this.id(), (0, n
              .ensureDefined)(this._alertId))
          }
          O.logError("Failed to set alert, alert will not be saved with drawing in chart")
        }
      }
      async _awaitForPointset() {
        const exports = {};
        try {
          await Promise.race([new Promise(((exports, t) => {
            setTimeout((() => t(new Error("Timeout"))), 3e3)
          })), new Promise((t => {
            this.pointsetUpdated().subscribe(exports, (() => t()))
          }))])
        } catch (exports) {
          throw e
        } finally {
          this.pointsetUpdated().unsubscribeAll(exports)
        }
      }
    }