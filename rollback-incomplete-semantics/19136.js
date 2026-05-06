/**
 * Module 19136 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

19136: (series_e, t, i) => {
    "use strict";
    i.d(t, {
      StudyDataSource: () => p
    });
    var series_s = i(50151),
      o = i(48096),
      n = i(72187),
      r = i(29806),
      series_a = i(19844),
      l = i(87163),
      c = i(64717),
      h = i(24437),
      d = i(63681);
    const u = (0, i(9343).getLogger)("Chart.StudyDataSource");
    var _;
    ! function(series_e) {
      series_e[series_e.Idle = 0] = "Idle", series_e[series_e.AwaitingConnection = 1] = "AwaitingConnection", series_e[series_e.AwaitingParent = 2] =
        "AwaitingParent", series_e[series_e.AwaitingFirstDataUpdate = 3] = "AwaitingFirstDataUpdate", series_e[series_e.Active = 4] = "Active"
    }(_ || (_ = {}));
    class p {
      constructor(series_e, t, i, series_s, r = !1) {
        this._inputs = null, this._status = _.Idle, this._studyId = null, this._turnaroundCounter = 1, this
          ._studyStatus = {
            type: d.StudyStatusType.Undefined
          }, this._studyStatusChanged = new o.Delegate, this._dataCleared = new o.Delegate, this._dataUpdated = new o
          .Delegate, this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this), this
          ._ongoingDataUpdate = Promise.resolve(), this._gateway = series_e, this._metaInfo = series_s, this
          ._forceUseExclamationMark = r, this._seriesSource = t, this._turnaroundPrefix = i,
          this._plots = new n.PlotList((0, c.studyPlotFunctionMap)(series_s), c.studyEmptyPlotValuePredicate), this._gateway
          .isConnected().subscribe(this._boundOnGatewayIsConnectedChanged), this._graphics = new h.LiveStudyGraphics(series_s
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
      setInputs(series_e) {
        this._inputs = series_e, null !== this._studyId && (this._turnaroundCounter++, this._onStudyStatusChangedTo({
            type: d.StudyStatusType.Undefined
          }), this._gateway.modifyStudy(this._studyId, this._turnaround(), series_e, this._onMessage.bind(this)), this
          ._status === _.Active && this._changeStatusTo(_.AwaitingFirstDataUpdate))
      }
      isStarted() {
        return this._status !== _.Idle
      }
      isActive() {
        return this._status === _.Active
      }
      start() {
        this.isStarted() ? u.logNormal("start: data source is already started, nothing to do") : ((0, series_s.assert)(
            null !== this._inputs, "Inputs should be defined when starting series_a study data source"), this._gateway
          .isConnected().value() ? this._createStudy() : this._changeStatusTo(_.AwaitingConnection))
      }
      stop() {
        this.isStarted() ? (null !== this._studyId && (this._gateway.isConnected().value() && this._gateway
          .removeStudy(this._studyId), this._studyId = null, this._onStudyStatusChangedTo({
            type: d.StudyStatusType.Undefined
          })), this._changeStatusTo(_.Idle)) : u.logNormal("stop: data source is already stopped, nothing to do")
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
        (0, series_s.assert)(this._status === _.Active, "Couldn't steal data from non-active data source"), this.stop();
        const series_e = this._plots,
          t = this._graphics.extract();
        return this._plots = new n.PlotList((0, c.studyPlotFunctionMap)(this._metaInfo), c
          .studyEmptyPlotValuePredicate), {
          plots: series_e,
          graphics: t
        }
      }
      dataCleared() {
        return this._dataCleared
      }
      dataUpdated() {
        return this._dataUpdated
      }
      moveData(series_e) {
        this._ongoingDataUpdate = this._ongoingDataUpdate.then((() => {
          this._plots.move(series_e)
        }))
      }
      pendingUpdatesReady() {
        return this._ongoingDataUpdate
      }
      _createStudyError(series_e) {
        return {
          type: d.StudyStatusType.Error,
          errorDescription: this._getStudyErrorDescription(series_e)
        }
      }
      _getStudyErrorDescription(series_e) {
        return "string" == typeof series_e ? {
          error: series_e.split(":", 2)[0]
        } : series_e
      }
      _changeStatusTo(series_e) {
        (0, series_s.assert)(this._status !== series_e, "Source and destination status should be distinct"), u.logNormal(
          `Status changed from ${_[this._status]} to ${_[series_e]}`), this._status = series_e
      }
      _createStudy() {
        const series_e = this._seriesSource.instanceId();
        null !== series_e ? this._createStudyUsingParentId(series_e) : (this._changeStatusTo(_.AwaitingParent), this._seriesSource
          .dataEvents().created().subscribe(this, this._onSeriesCreated, !0))
      }
      _createStudyUsingParentId(series_e) {
        (0, series_s.assert)(this._status !== _.Active, 'Status should not be "Active" when creating series_a study'), (0, series_s.assert)
        (this._studyStatus.type === d.StudyStatusType.Undefined,
          'Study status should be "Undefined" when creating series_a study'), (0,
          series_s.assert)(null === this._studyId, "Study id should be empty when creating series_a study"), this._studyId = (0, l
          .makeNextStudyId)(), this._gateway.createStudy(this._studyId, this._turnaround(), series_e, series_a.StudyMetaInfo
          .getStudyIdWithLatestVersion(this.metaInfo(), this._forceUseExclamationMark), (0, series_s.ensureNotNull)(this
            ._inputs), this._onMessage.bind(this), {
            id: this._metaInfo.id
          }), this._changeStatusTo(_.AwaitingFirstDataUpdate)
      }
      _onGatewayIsConnectedChanged(series_e) {
        series_e ? this._onGatewayConnected() : this._onGatewayDisconnected()
      }
      _onGatewayConnected() {
        this._status === _.AwaitingConnection && this._createStudy()
      }
      _onGatewayDisconnected() {
        this._status !== _.Idle && this._status !== _.AwaitingConnection && (this._studyId = null, this
          ._changeStatusTo(_.AwaitingConnection), this._studyStatus.type !== d.StudyStatusType.Undefined && this
          ._onStudyStatusChangedTo({
            type: d.StudyStatusType.Undefined
          })), this._turnaroundCounter = 1
      }
      _onSeriesCreated() {
        this._status === _.AwaitingParent && this._createStudyUsingParentId((0, series_s.ensure)(this._seriesSource
          .instanceId()))
      }
      _onStudyStatusChangedTo(series_e) {
        const t = this._studyStatus;
        this._studyStatus = series_e, u.logNormal(
            `Study status type changed from ${d.StudyStatusType[t.type]} to ${d.StudyStatusType[series_e.type]}`), this
          ._studyStatusChanged.fire(t, series_e)
      }
      _onMessage(series_e) {
        if ("data_update" === series_e.method) {
          const {
            customId: t,
            turnaround: i,
            plots: o,
            nonseries: n
          } = series_e.params;
          t === this._studyId && this._checkTurnaround(i) && this._onDataUpdate(o, (0, series_s.ensureDefined)(n))
        } else if ("study_loading" === series_e.method) {
          const [t, i] = series_e.params;
          t === this._studyId && this._checkTurnaround(i) && this._onStudyLoading(series_e.time)
        } else if ("study_completed" === series_e.method) {
          const [t, i] = series_e.params;
          t === this._studyId && this._checkTurnaround(i) && this._onStudyCompleted(series_e.time)
        } else if ("study_error" === series_e.method) {
          const [t, i, series_s, o] = series_e.params;
          t === this._studyId && this._checkTurnaround(i) && this._onStudyError(series_s, o, series_e.time)
        } else "clear_data" === series_e.method && this._checkTurnaround(series_e.params.turnaround) && this.clearData()
      }
      _onDataUpdate(series_e, t) {
        const i = (0, r.unpackNonSeriesData)(t.d);
        return this._ongoingDataUpdate = this._ongoingDataUpdate.then((() => i), (() => i)).then(this._onDataUnpacked
          .bind(this, series_e, t.indexes)), this._ongoingDataUpdate
      }
      _onDataUnpacked(series_e, t, i) {
        this._status !== _.Idle && (this._status === _.AwaitingFirstDataUpdate && (this._changeStatusTo(_.Active),
          this.clearData()), this._mergePlots(series_e), null !== i && (i.indexes_replace ? ((0, series_s.assert)("nochange" !==
          t), this._graphics.replaceIndexesTo(t)) : ("nochange" !== t && this._graphics.replaceIndexesTo(t),
          void 0 !== i.graphicsCmds && this._graphics.processCommands(i.graphicsCmds))), this._dataUpdated.fire(series_e,
          i, t))
      }
      _onStudyLoading(series_e) {
        this._onStudyStatusChangedTo({
          type: d.StudyStatusType.Loading,
          startTime: Date.now()
        })
      }
      _onStudyError(series_e, t, i) {
        this.clearData(), this._onStudyStatusChangedTo(this._createStudyError(series_e))
      }
      _onStudyCompleted(series_e) {
        this._onStudyStatusChangedTo({
          type: d.StudyStatusType.Completed
        })
      }
      _mergePlots(series_e) {
        this._plots.merge(series_e)
      }
      _turnaround() {
        return `${this._turnaroundPrefix}${this._turnaroundCounter}`
      }
      _checkTurnaround(series_e) {
        const t = this._turnaround();
        return series_e === t || series_e === this._seriesSource.turnaround() || series_e === `${this._seriesSource.turnaround()}_${t}`
      }
    }