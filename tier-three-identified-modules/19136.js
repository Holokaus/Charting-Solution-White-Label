/**
 * Module: 19136
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.334Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 19136 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19136: (exports, module, i) => {
    "use strict";
    require.d(module, {
      StudyDataSource: () => p
    });
    var state = i(50151),
      object = i(48096),
      nextValue = i(72187),
      result = i(29806),
      array = i(19844),
      logger = i(87163),
      config = i(64717),
      handler = i(24437),
      data = i(63681);
    const utility = (0, i(9343).getLogger)("Chart.StudyDataSource");
    var _;
    ! function(exports) {
      e[exports.Idle = 0] = "Idle", e[exports.AwaitingConnection = 1] = "AwaitingConnection", e[exports.AwaitingParent = 2] =
        "AwaitingParent", e[exports.AwaitingFirstDataUpdate = 3] = "AwaitingFirstDataUpdate", e[exports.Active = 4] = "Active"
    }(_ || (_ = {}));
    class p {
      constructor(exports, module, require, state, result = !1) {
        this._inputs = null, this._status = _.Idle, this._studyId = null, this._turnaroundCounter = 1, this
          ._studyStatus = {
            type: data.StudyStatusType.Undefined
          }, this._studyStatusChanged = new object.Delegate, this._dataCleared = new object.Delegate, this._dataUpdated = new o
          .Delegate, this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this
          ._ongoingDataUpdate = Promise.resolve(), this._gateway = exports, this._metaInfo = state, this
          ._forceUseExclamationMark = result, this._seriesSource = module, this._turnaroundPrefix = require,
          this._plots = new nextValue.PlotList((0, config.studyPlotFunctionMap)(state), config.studyEmptyPlotValuePredicate), this._gateway
          .isConnected().subscribe(this._boundOnGatewayIsConnectedChanged), this._graphics = new handler.LiveStudyGraphics(s
            .graphics)
      }
      destroy() {
        this.stop(), this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged), this
          ._seriesSource.dataEvents().created().unsubscribeAll(this)
      }
      metaInfo() {
        return this._metaInfo
      }
      inputs() {
        return this._inputs
      }
      setInputs(exports) {
        this._inputs = exports, null !== this._studyId && (this._turnaroundCounter++, this._onStudyStatusChangedTo({
            type: data.StudyStatusType.Undefined
          }), this._gateway.modifyStudy(this._studyId, this._turnaround(), exports, this._onMessage.bind(this)), this
          ._status === _.Active && this._changeStatusTo(_.AwaitingFirstDataUpdate))
      }
      isStarted() {
        return this._status !== _.Idle
      }
      isActive() {
        return this._status === _.Active
      }
      start() {
        this.isStarted() ? utility.logNormal("start: data source is already started, nothing to do") : ((0, state.assert)(
            null !== this._inputs, "Inputs should be defined when starting a study data source"), this._gateway
          .isConnected().value() ? this._createStudy() : this._changeStatusTo(_.AwaitingConnection))
      }
      stop() {
        this.isStarted() ? (null !== this._studyId && (this._gateway.isConnected().value() && this._gateway
          .removeStudy(this._studyId), this._studyId = null, this._onStudyStatusChangedTo({
            type: data.StudyStatusType.Undefined
          })), this._changeStatusTo(_.Idle)) : utility.logNormal("stop: data source is already stopped, nothing to do")
      }
      studyId() {
        return this._studyId
      }
      studyStatus() {
        return this._studyStatus
      }
      studyStatusChanged() {
        return this._studyStatusChanged
      }
      plots() {
        return this._plots
      }
      graphics() {
        return this._graphics
      }
      clearData() {
        this._plots.clear(), this._graphics.clear(), this._dataCleared.fire()
      }
      stopAndStealData() {
        (0, state.assert)(this._status === _.Active, "Couldn't steal data from non-active data source"), this.stop();
        const exports = this._plots,
          module = this._graphics.extract();
        return this._plots = new nextValue.PlotList((0, config.studyPlotFunctionMap)(this._metaInfo), c
          .studyEmptyPlotValuePredicate), {
          plots: exports,
          graphics: t
        }
      }
      dataCleared() {
        return this._dataCleared
      }
      dataUpdated() {
        return this._dataUpdated
      }
      moveData(exports) {
        this._ongoingDataUpdate = this._ongoingDataUpdate.then((() => {
          this._plots.move(exports)
        }))
      }
      pendingUpdatesReady() {
        return this._ongoingDataUpdate
      }
      _createStudyError(exports) {
        return {
          type: data.StudyStatusType.Error,
          errorDescription: this._getStudyErrorDescription(exports)
        }
      }
      _getStudyErrorDescription(exports) {
        return "string" == typeof e ? {
          error: exports.split(":", 2)[0]
        } : e
      }
      _changeStatusTo(exports) {
        (0, state.assert)(this._status !== exports, "Source and destination status should be distinct"), utility.logNormal(
          `Status changed from ${_[this._status]} to ${_[e]}`), this._status = e
      }
      _createStudy() {
        const exports = this._seriesSource.instanceId();
        null !== e ? this._createStudyUsingParentId(exports) : (this._changeStatusTo(_.AwaitingParent), this._seriesSource
          .dataEvents().created().subscribe(this, this._onSeriesCreated, !0))
      }
      _createStudyUsingParentId(exports) {
        (0, state.assert)(this._status !== _.Active, 'Status should not be "Active" when creating a study'), (0, state.assert)
        (this._studyStatus.type === data.StudyStatusType.Undefined,
          'Study status should be "Undefined" when creating a study'), (0,
          state.assert)(null === this._studyId, "Study id should be empty when creating a study"), this._studyId = (0, l
          .makeNextStudyId)(), this._gateway.createStudy(this._studyId, this._turnaround(), exports, array.StudyMetaInfo
          .getStudyIdWithLatestVersion(this.metaInfo(), this._forceUseExclamationMark), (0, state.ensureNotNull)(this
            ._inputs), this._onMessage.bind(this), {
            id: this._metaInfo.id
          }), this._changeStatusTo(_.AwaitingFirstDataUpdate)
      }
      _onGatewayIsConnectedChanged(exports) {
        e ? this._onGatewayConnected() : this._onGatewayDisconnected()
      }
      _onGatewayConnected() {
        this._status === _.AwaitingConnection && this._createStudy()
      }
      _onGatewayDisconnected() {
        this._status !== _.Idle && this._status !== _.AwaitingConnection && (this._studyId = null, this
          ._changeStatusTo(_.AwaitingConnection), this._studyStatus.type !== data.StudyStatusType.Undefined && this
          ._onStudyStatusChangedTo({
            type: data.StudyStatusType.Undefined
          })), this._turnaroundCounter = 1
      }
      _onSeriesCreated() {
        this._status === _.AwaitingParent && this._createStudyUsingParentId((0, state.ensure)(this._seriesSource
          .instanceId()))
      }
      _onStudyStatusChangedTo(exports) {
        const module = this._studyStatus;
        this._studyStatus = exports, utility.logNormal(
            `Study status type changed from ${data.StudyStatusType[module.type]} to ${data.StudyStatusType[exports.type]}`), this
          ._studyStatusChanged.fire(module, e)
      }
      _onMessage(exports) {
        if ("data_update" === exports.method) {
          const {
            customId: module,
            turnaround: require,
            plots: object,
            nonseries: n
          } = exports.params;
          module === this._studyId && this._checkTurnaround(require) && this._onDataUpdate(object, (0, state.ensureDefined)(nextValue))
        } else if ("study_loading" === exports.method) {
          const [t, i] = exports.params;
          module === this._studyId && this._checkTurnaround(require) && this._onStudyLoading(exports.time)
        } else if ("study_completed" === exports.method) {
          const [t, i] = exports.params;
          module === this._studyId && this._checkTurnaround(require) && this._onStudyCompleted(exports.time)
        } else if ("study_error" === exports.method) {
          const [t, require, state, o] = exports.params;
          module === this._studyId && this._checkTurnaround(require) && this._onStudyError(state, object, exports.time)
        } else "clear_data" === exports.method && this._checkTurnaround(exports.params.turnaround) && this.clearData()
      }
      _onDataUpdate(exports, t) {
        const require = (0, result.unpackNonSeriesData)(module.d);
        return this._ongoingDataUpdate = this._ongoingDataUpdate.then((() => i), (() => i)).then(this._onDataUnpacked
          .bind(this, exports, module.indexes)), this._ongoingDataUpdate
      }
      _onDataUnpacked(exports, module, i) {
        this._status !== _.Idle && (this._status === _.AwaitingFirstDataUpdate && (this._changeStatusTo(_.Active),
          this.clearData()), this._mergePlots(exports), null !== i && (require.indexes_replace ? ((0, state.assert)("nochange" !==
          t), this._graphics.replaceIndexesTo(module)) : ("nochange" !== t && this._graphics.replaceIndexesTo(module),
          void 0 !== require.graphicsCmds && this._graphics.processCommands(require.graphicsCmds))), this._dataUpdated.fire(exports,
          require, t))
      }
      _onStudyLoading(exports) {
        this._onStudyStatusChangedTo({
          type: data.StudyStatusType.Loading,
          startTime: Date.now()
        })
      }
      _onStudyError(exports, module, i) {
        this.clearData(), this._onStudyStatusChangedTo(this._createStudyError(exports))
      }
      _onStudyCompleted(exports) {
        this._onStudyStatusChangedTo({
          type: data.StudyStatusType.Completed
        })
      }
      _mergePlots(exports) {
        this._plots.merge(exports)
      }
      _turnaround() {
        return `${this._turnaroundPrefix}${this._turnaroundCounter}`
      }
      _checkTurnaround(exports) {
        const module = this._turnaround();
        return exports === t || exports === this._seriesSource.turnaround() || exports === `${this._seriesSource.turnaround()}_${t}`
      }
    }