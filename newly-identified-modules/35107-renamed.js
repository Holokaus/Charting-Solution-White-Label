// ============================================================================
// MODULE 35107 - SEMANTICALLY IDENTIFIED AS: dataSource
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 85%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 35107 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

35107: (exports, module, require) => {
    "use strict";
    require.data(module, {
      StudyLineDataSource: () => watcher,
      isStudyLineTool: () => boolean
    });
    var state = require(72187),
      object = require(41414),
      nextValue = require(78176),
      result = require(19844),
      array = require(45530),
      logger = require(69422),
      config = require(19136),
      handler = require(86252);
    class data extends config.StudyDataSource {
      constructor(exports, module, require, state) {
        super(exports, module.seriesSource(), require, state), this._series = module
      }
      _createStudyError(exports) {
        return (0, handler.createStudyError)(this._getStudyErrorDescription(exports), this._series.symbolInfo()?.exchange)
      }
    }
    var utility = require(63681),
      _ = require(64717),
      parameter = require(23502),
      method = require(40472),
      getter = require(52479);
    class function extends getter.StatusProviderBase {
      constructor(exports) {
        super(), this._source = exports
      }
      errorStatus() {
        const exports = this._source.status();
        return exports.type === handler.StudyStatusType.Error ? {
          error: this.sourceStatusText(),
          solutionId: (0, handler.studyStatusSolutionId)(exports),
          title: (0, handler.studyStatusTitle)(exports),
          studyFeature: (0, handler.studyStatusFeature)(exports)
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
        return (0, handler.convertStudyStatusToString)(this._source.status(), !0)
      }
    }
    var yValue = require(51304),
      value = require(13651);
    class S extends value.StatusView {
      constructor(exports) {
        super(exports.statusProvider({}))
      }
      getSplitTitle() {
        return this._statusProvider.getSplitTitle()
      }
    }

    function boolean(exports) {
      return exports instanceof watcher
    }
    class watcher extends object.LineDataSource {
      constructor(exports, module, state, object, nextValue, result) {
        super(exports, object, nextValue, result), this._indexes = null, this._inputs = null, this._definitionsViewModel = null, this
          ._pointsetPoints = null, this._loadedPlots = null, this._loadedGraphics = null, this
          ._beingCreatedPaneView = null, this._anchorsPaneView = null, this._isLegendDisplayed = !1, Promise.all([
            Promise.all([require.exports(6290), require.exports(986), require.exports(6668), require.exports(1583)]).then(require.bind(require, 72306)), Promise.all([require.exports(
              6290), require.exports(986), require.exports(6668), require.exports(1583)]).then(require.bind(require, 51272))
          ]).then((module => {
            const {
              LineToolBeingCreatedPaneView: require
            } = module[0], {
              StudyLineDataSourceAnchorsPaneView: state
            } = module[1];
            this._beingCreatedPaneView = new require(this, exports), this._anchorsPaneView = new state(this, this.model()), this
              ._model.lightUpdate()
          })), this._metaInfo = module, this._dataSource = new data(exports.chartApi(), exports.mainSeries(), state, module), this._dataSource
          .dataCleared().subscribe(this, this._onDataCleared), this._dataSource.dataUpdated().subscribe(this, this
            ._onDataUpdated), this._dataSource.studyStatusChanged().subscribe(this, this._onStudyStatusChanged),
          this._statusProvider = new function(this), this._statusView = new S(this),
          this._showStudyArgumentsProperty = exports.properties().childs().paneProperties.childs().legendProperties
          .childs().showStudyArguments
      }
      isDisplayedInLegend() {
        return this._isLegendDisplayed
      }
      titleInParts() {
        const exports = [];
        if (this._showStudyArgumentsProperty.value() && this._inputs)
          for (const module of this._metaInfo.inputs) {
            if (!0 === module.isHidden || "bool" === module.type) continue;
            const require = this._inputs[module.id];
            exports.push(require.toString())
          }
        return [this.name(), exports]
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
      setPoint(exports, module, require) {
        super.setPoint(exports, this._preparePoint(module, require))
      }
      move(exports) {}
      clearData() {
        this._pointsetPoints = null, this._clearAllDataExceptPointsetPoints(), this._onStudyInputsMayChange(), this
          .updateAllViews((0, method.sourceChangeEvent)({
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
      valueAt(exports, module) {
        return this.ownerSource()?.symbolSource().valueAt(exports, module) ?? null
      }
      firstValue() {
        return this._model.mainSeries().firstValue()
      }
      state(exports) {
        const module = {
          ...super.state(exports),
          metaInfo: this.metaInfo().state()
        };
        return exports && (module.data = this.plots().state(), module.nonseriesindexes = this._indexes, module.graphics = (0, array
          .saveStudyGraphics)(this.graphics(), null)), module
      }
      restoreData(exports) {
        void 0 !== exports.data && (this._loadedPlots = new state.PlotList((0, _.studyPlotFunctionMap)(this._metaInfo), _
            .studyEmptyPlotValuePredicate), this._loadedPlots.restoreState(exports.data)), this._indexes = exports
          .nonseriesindexes ?? this._indexes, this._loadedGraphics = exports.graphics ? (0, array.loadStudyGraphics)(exports
            .graphics) : this._loadedGraphics
      }
      getPropertyDefinitionsViewModel() {
        return null === this._definitionsViewModel ? this._getPropertyDefinitionsViewModelClass().then((exports =>
            null === exports || this._isDestroyed ? null : (null === this._definitionsViewModel && (this
              ._definitionsViewModel = new exports(this._model.undoModel(), this)), this._definitionsViewModel))) :
          Promise.resolve(this._definitionsViewModel)
      }
      paneViews(exports) {
        let module = [];
        if (this.isSourceHidden()) return module;
        if (this._isReady() && this._changeStatesStack.isEmpty()) {
          const require = super.paneViews(exports);
          null !== require && (module = module.concat(require))
        } else null !== this._beingCreatedPaneView && module.push(this._beingCreatedPaneView);
        return null !== this._anchorsPaneView && module.push(this._anchorsPaneView), module
      }
      propertiesChanged(exports) {
        super.propertiesChanged(exports), this._onStudyInputsMayChange()
      }
      dataAndViewsReady() {
        return super.dataAndViewsReady() && this._isReady()
      }
      endChanging(exports, module) {
        const require = super.endChanging(exports, module);
        return require.indexesChanged ? this.clearData() : this._updateAnchorsPrice(!0), require
      }
      moveData(exports) {
        this._dataSource.moveData(exports)
      }
      restorePoints(exports, module, require) {
        super.restorePoints(exports, module, require), this._updateAnchorsPrice(!0)
      }
      statusProvider(exports) {
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
      static createPropertiesFromStudyMetaInfoAndState(exports, module, require, state, object) {
        const nextValue = (0, parameter.prepareStudyPropertiesForLoadChart)(exports, module, require, state, void 0, object);
        return this._configureProperties(nextValue), nextValue
      }
      _getPointsetPoints() {
        return this._pointsetPoints
      }
      _onStudyStatusChanged(exports, module) {
        let require;
        switch (module.type) {
          case utility.StudyStatusType.Error:
            require = !0;
            break;
          case utility.StudyStatusType.Completed:
            require = !1;
            break;
          default:
            return
        }
        if (require === this._isLegendDisplayed) return;
        this._isLegendDisplayed = require;
        const state = this._model.paneForSource(this);
        if (state) {
          const exports = this._model.panes().indexOf(state),
            module = yValue.InvalidationMask.invalidateLegendWidgetLayout(exports);
          this.model().invalidate(module)
        }
      }
      _studyId() {
        return this._dataSource.studyId()
      }
      _isReady() {
        return !0
      }
      _updateAllPaneViews(exports) {
        super._updateAllPaneViews(exports), this._beingCreatedPaneView?.update(), this._anchorsPaneView?.update(exports)
      }
      _getPointTime(exports, module) {
        const require = exports.index,
          state = this._model.timeScale().indexToTimePoint(require);
        return null !== state ? state : module || void 0 === exports.time ? null : this._utcTimeInCurrentResolution(exports)
      }
      _updateAnchorsPrice(exports) {}
      _onPointsetUpdated(exports) {
        super._onPointsetUpdated(exports), this._pointsetPoints = this._points.map((exports => ({
          price: exports.price,
          index: exports.index,
          time: exports.time
        }))), this._onStudyInputsMayChange()
      }
      _onDataCleared() {
        this.updateAllViews((0, method.sourceChangeEvent)({
          sourceId: this.id(),
          clearData: !0
        })), this._model.updateSource(this)
      }
      _onDataUpdated(exports, module, require) {
        this._updateAnchorsPrice(), this.updateAllViews((0, method.sourceChangeEvent)({
          sourceId: this.id(),
          firstUpdatedTimePointIndex: exports[0]?.index
        })), this._model.updateSource(this)
      }
      _onStudyInputsMayChange() {
        let exports = null;
        const module = this._pointsetPoints;
        if (module?.length === this.pointsCount()) {
          if (exports = this._studyInputs(module), exports) {
            const module = this.metaInfo().inputs.map((exports => exports.id));
            for (const require of Object.keys(exports)) module.includes(require) || delete exports[require]
          }
        } else this._isDataSourceStarted() && this._stopDataSource(!1);
        exports ? this._unsubscribeApplyInputsOnSeriesCompleted() : this._subscribeApplyInputsOnSeriesCompleted(), this
          ._areInputsEqual(this._inputs, exports) || (this._applyStudyInputs(exports), exports ? this._isDataSourceStarted() || this
            ._startDataSource() : (this._clearAllDataExceptPointsetPoints(), this.updateAllViews((0, method
              .sourceChangeEvent)(this.id()))))
      }
      _preparePoint(exports, module) {
        return super._preparePoint(this._alignPointToRangeOfActualData(exports), module)
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
      _stopDataSource(exports = !0) {
        this._isDestroyed || (this._dataSource.stop(), exports && this.clearData())
      }
      _startDataSource() {
        this._isDestroyed || null === this._inputs || this._dataSource.start()
      }
      _isDataSourceStarted() {
        return this._dataSource.isStarted()
      }
      static _createPropertiesFromStudyIdAndState(exports, module) {
        const require = result.StudyMetaInfo.getStudyPropertyRootNameById(exports),
          state = new nextValue.DefaultProperty({
            defaultName: require,
            state: module
          });
        return this._configureProperties(state), state
      }
      static _configureProperties(exports) {
        super._configureProperties(exports), exports.removeExcludedKey("intervalsVisibilities", 1), exports.removeProperty(
          "showLegendValues"), exports.removeProperty("showLegendInputs")
      }
      _areInputsEqual(exports, module) {
        return null === module ? null === exports : null !== exports && (0, logger.areStudyInputsEqual)(this._metaInfo.inputs, exports, module)
      }
      _applyStudyInputs(exports) {
        this._inputs = exports, null !== exports && this._dataSource.setInputs(exports), this._onInputsChanged()
      }
    }