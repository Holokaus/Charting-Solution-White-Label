/**
 * Module 35107 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

35107: (e, t, i) => {
    "use strict";
    i.d(t, {
      StudyLineDataSource: () => w,
      isStudyLineTool: () => b
    });
    var s = i(72187),
      o = i(41414),
      n = i(78176),
      r = i(19844),
      a = i(45530),
      l = i(69422),
      c = i(19136),
      h = i(86252);
    class d extends c.StudyDataSource {
      constructor(e, t, i, s) {
        super(e, t.seriesSource(), i, s), this._series = t
      }
      _createStudyError(e) {
        return (0, h.createStudyError)(this._getStudyErrorDescription(e), this._series.symbolInfo()?.exchange)
      }
    }
    var u = i(63681),
      _ = i(64717),
      p = i(23502),
      m = i(40472),
      g = i(52479);
    class f extends g.StatusProviderBase {
      constructor(e) {
        super(), this._source = e
      }
      errorStatus() {
        const e = this._source.status();
        return e.type === h.StudyStatusType.Error ? {
          error: this.sourceStatusText(),
          solutionId: (0, h.studyStatusSolutionId)(e),
          title: (0, h.studyStatusTitle)(e),
          studyFeature: (0, h.studyStatusFeature)(e)
        } : null
      }
      getSplitTitle() {
        return this._source.titleInParts()
      }
      getInputsTitles() {
        return null
      }
      text() {
        return this._source.translatedType()
      }
      sourceStatusText() {
        return (0, h.convertStudyStatusToString)(this._source.status(), !0)
      }
    }
    var y = i(51304),
      v = i(13651);
    class S extends v.StatusView {
      constructor(e) {
        super(e.statusProvider({}))
      }
      getSplitTitle() {
        return this._statusProvider.getSplitTitle()
      }
    }

    function b(e) {
      return e instanceof w
    }
    class w extends o.LineDataSource {
      constructor(e, t, s, o, n, r) {
        super(e, o, n, r), this._indexes = null, this._inputs = null, this._definitionsViewModel = null, this
          ._pointsetPoints = null, this._loadedPlots = null, this._loadedGraphics = null, this
          ._beingCreatedPaneView = null, this._anchorsPaneView = null, this._isLegendDisplayed = !1, Promise.all([
            Promise.all([i.e(6290), i.e(986), i.e(6668), i.e(1583)]).then(i.bind(i, 72306)), Promise.all([i.e(
              6290), i.e(986), i.e(6668), i.e(1583)]).then(i.bind(i, 51272))
          ]).then((t => {
            const {
              LineToolBeingCreatedPaneView: i
            } = t[0], {
              StudyLineDataSourceAnchorsPaneView: s
            } = t[1];
            this._beingCreatedPaneView = new i(this, e), this._anchorsPaneView = new s(this, this.model()), this
              ._model.lightUpdate()
          })), this._metaInfo = t, this._dataSource = new d(e.chartApi(), e.mainSeries(), s, t), this._dataSource
          .dataCleared().subscribe(this, this._onDataCleared), this._dataSource.dataUpdated().subscribe(this, this
            ._onDataUpdated), this._dataSource.studyStatusChanged().subscribe(this, this._onStudyStatusChanged),
          this._statusProvider = new f(this), this._statusView = new S(this),
          this._showStudyArgumentsProperty = e.properties().childs().paneProperties.childs().legendProperties
          .childs().showStudyArguments
      }
      isDisplayedInLegend() {
        return this._isLegendDisplayed
      }
      titleInParts() {
        const e = [];
        if (this._showStudyArgumentsProperty.value() && this._inputs)
          for (const t of this._metaInfo.inputs) {
            if (!0 === t.isHidden || "bool" === t.type) continue;
            const i = this._inputs[t.id];
            e.push(i.toString())
          }
        return [this.name(), e]
      }
      destroy() {
        this._dataSource.dataUpdated().unsubscribeAll(this), this._dataSource.dataCleared().unsubscribeAll(this),
          this._dataSource.studyStatusChanged().unsubscribeAll(this), this._dataSource.destroy(), null !== this
          ._definitionsViewModel && (this._definitionsViewModel.destroy(), this._definitionsViewModel = null), this
          ._unsubscribeApplyInputsOnSeriesCompleted(), this._isDestroyed = !0, super.destroy()
      }
      stop() {
        super.stop(), this._stopDataSource()
      }
      start() {
        super.start(), this._startDataSource()
      }
      metaInfo() {
        return this._metaInfo
      }
      graphicsInfo() {
        return this._metaInfo.graphics
      }
      series() {
        return this._model.mainSeries()
      }
      translatedType() {
        return this._metaInfo.description
      }
      name() {
        return this._metaInfo.description
      }
      studyId() {
        return this._metaInfo.id
      }
      setPoint(e, t, i) {
        super.setPoint(e, this._preparePoint(t, i))
      }
      move(e) {}
      clearData() {
        this._pointsetPoints = null, this._clearAllDataExceptPointsetPoints(), this._onStudyInputsMayChange(), this
          .updateAllViews((0, m.sourceChangeEvent)({
            sourceId: this.id(),
            clearData: !0
          })), super.clearData()
      }
      data() {
        return this.plots()
      }
      plots() {
        return this._loadedPlots || this._dataSource.plots()
      }
      graphics() {
        return this._loadedGraphics || this._dataSource.graphics()
      }
      valueAt(e, t) {
        return this.ownerSource()?.symbolSource().valueAt(e, t) ?? null
      }
      firstValue() {
        return this._model.mainSeries().firstValue()
      }
      state(e) {
        const t = {
          ...super.state(e),
          metaInfo: this.metaInfo().state()
        };
        return e && (t.data = this.plots().state(), t.nonseriesindexes = this._indexes, t.graphics = (0, a
          .saveStudyGraphics)(this.graphics(), null)), t
      }
      restoreData(e) {
        void 0 !== e.data && (this._loadedPlots = new s.PlotList((0, _.studyPlotFunctionMap)(this._metaInfo), _
            .studyEmptyPlotValuePredicate), this._loadedPlots.restoreState(e.data)), this._indexes = e
          .nonseriesindexes ?? this._indexes, this._loadedGraphics = e.graphics ? (0, a.loadStudyGraphics)(e
            .graphics) : this._loadedGraphics
      }
      getPropertyDefinitionsViewModel() {
        return null === this._definitionsViewModel ? this._getPropertyDefinitionsViewModelClass().then((e =>
            null === e || this._isDestroyed ? null : (null === this._definitionsViewModel && (this
              ._definitionsViewModel = new e(this._model.undoModel(), this)), this._definitionsViewModel))) :
          Promise.resolve(this._definitionsViewModel)
      }
      paneViews(e) {
        let t = [];
        if (this.isSourceHidden()) return t;
        if (this._isReady() && this._changeStatesStack.isEmpty()) {
          const i = super.paneViews(e);
          null !== i && (t = t.concat(i))
        } else null !== this._beingCreatedPaneView && t.push(this._beingCreatedPaneView);
        return null !== this._anchorsPaneView && t.push(this._anchorsPaneView), t
      }
      propertiesChanged(e) {
        super.propertiesChanged(e), this._onStudyInputsMayChange()
      }
      dataAndViewsReady() {
        return super.dataAndViewsReady() && this._isReady()
      }
      endChanging(e, t) {
        const i = super.endChanging(e, t);
        return i.indexesChanged ? this.clearData() : this._updateAnchorsPrice(!0), i
      }
      moveData(e) {
        this._dataSource.moveData(e)
      }
      restorePoints(e, t, i) {
        super.restorePoints(e, t, i), this._updateAnchorsPrice(!0)
      }
      statusProvider(e) {
        return this._statusProvider
      }
      alertSourceModel() {
        return null
      }
      statusView() {
        return this._statusView
      }
      legendView() {
        return null
      }
      dataProblemModel() {
        return null
      }
      dataUpdatedModeModel() {
        return null
      }
      marketStatusModel() {
        return null
      }
      onStatusChanged() {
        return this._dataSource.studyStatusChanged()
      }
      status() {
        return this._dataSource.studyStatus()
      }
      recalcStudyIfNeeded() {}
      stateForAlert() {
        return null
      }
      static createPropertiesFromStudyMetaInfoAndState(e, t, i, s, o) {
        const n = (0, p.prepareStudyPropertiesForLoadChart)(e, t, i, s, void 0, o);
        return this._configureProperties(n), n
      }
      _getPointsetPoints() {
        return this._pointsetPoints
      }
      _onStudyStatusChanged(e, t) {
        let i;
        switch (t.type) {
          case u.StudyStatusType.Error:
            i = !0;
            break;
          case u.StudyStatusType.Completed:
            i = !1;
            break;
          default:
            return
        }
        if (i === this._isLegendDisplayed) return;
        this._isLegendDisplayed = i;
        const s = this._model.paneForSource(this);
        if (s) {
          const e = this._model.panes().indexOf(s),
            t = y.InvalidationMask.invalidateLegendWidgetLayout(e);
          this.model().invalidate(t)
        }
      }
      _studyId() {
        return this._dataSource.studyId()
      }
      _isReady() {
        return !0
      }
      _updateAllPaneViews(e) {
        super._updateAllPaneViews(e), this._beingCreatedPaneView?.update(), this._anchorsPaneView?.update(e)
      }
      _getPointTime(e, t) {
        const i = e.index,
          s = this._model.timeScale().indexToTimePoint(i);
        return null !== s ? s : t || void 0 === e.time ? null : this._utcTimeInCurrentResolution(e)
      }
      _updateAnchorsPrice(e) {}
      _onPointsetUpdated(e) {
        super._onPointsetUpdated(e), this._pointsetPoints = this._points.map((e => ({
          price: e.price,
          index: e.index,
          time: e.time
        }))), this._onStudyInputsMayChange()
      }
      _onDataCleared() {
        this.updateAllViews((0, m.sourceChangeEvent)({
          sourceId: this.id(),
          clearData: !0
        })), this._model.updateSource(this)
      }
      _onDataUpdated(e, t, i) {
        this._updateAnchorsPrice(), this.updateAllViews((0, m.sourceChangeEvent)({
          sourceId: this.id(),
          firstUpdatedTimePointIndex: e[0]?.index
        })), this._model.updateSource(this)
      }
      _onStudyInputsMayChange() {
        let e = null;
        const t = this._pointsetPoints;
        if (t?.length === this.pointsCount()) {
          if (e = this._studyInputs(t), e) {
            const t = this.metaInfo().inputs.map((e => e.id));
            for (const i of Object.keys(e)) t.includes(i) || delete e[i]
          }
        } else this._isDataSourceStarted() && this._stopDataSource(!1);
        e ? this._unsubscribeApplyInputsOnSeriesCompleted() : this._subscribeApplyInputsOnSeriesCompleted(), this
          ._areInputsEqual(this._inputs, e) || (this._applyStudyInputs(e), e ? this._isDataSourceStarted() || this
            ._startDataSource() : (this._clearAllDataExceptPointsetPoints(), this.updateAllViews((0, m
              .sourceChangeEvent)(this.id()))))
      }
      _preparePoint(e, t) {
        return super._preparePoint(this._alignPointToRangeOfActualData(e), t)
      }
      _getPropertyDefinitionsViewModelClass() {
        return Promise.resolve(null)
      }
      _subscribeApplyInputsOnSeriesCompleted() {
        this._unsubscribeApplyInputsOnSeriesCompleted(), this._model.mainSeries().dataEvents().completed()
          .subscribe(this, (() => this._onStudyInputsMayChange()), !0)
      }
      _unsubscribeApplyInputsOnSeriesCompleted() {
        this._model.mainSeries().dataEvents().completed().unsubscribeAll(this)
      }
      _onInputsChanged() {
        0
      }
      _clearAllDataExceptPointsetPoints() {
        this._loadedPlots = null, this._indexes = null, this._loadedGraphics = null, this._dataSource.clearData()
      }
      _stopDataSource(e = !0) {
        this._isDestroyed || (this._dataSource.stop(), e && this.clearData())
      }
      _startDataSource() {
        this._isDestroyed || null === this._inputs || this._dataSource.start()
      }
      _isDataSourceStarted() {
        return this._dataSource.isStarted()
      }
      static _createPropertiesFromStudyIdAndState(e, t) {
        const i = r.StudyMetaInfo.getStudyPropertyRootNameById(e),
          s = new n.DefaultProperty({
            defaultName: i,
            state: t
          });
        return this._configureProperties(s), s
      }
      static _configureProperties(e) {
        super._configureProperties(e), e.removeExcludedKey("intervalsVisibilities", 1), e.removeProperty(
          "showLegendValues"), e.removeProperty("showLegendInputs")
      }
      _areInputsEqual(e, t) {
        return null === t ? null === e : null !== e && (0, l.areStudyInputsEqual)(this._metaInfo.inputs, e, t)
      }
      _applyStudyInputs(e) {
        this._inputs = e, null !== e && this._dataSource.setInputs(e), this._onInputsChanged()
      }
    }