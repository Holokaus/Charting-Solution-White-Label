/**
 * ============================================================================
 * TRADINGVIEW MODULE 19136 - STUDY DATA SOURCE
 * ============================================================================
 *
 * Purpose: Study data source implementation with status management
 *
 * Size: 8.5 KB
 *
 * Class: StudyDataSource
 *   - Manages study lifecycle and data updates
 *   - Handles study status changes
 *   - Provides plot and graphics management
 *   - Implements gateway communication
 *
 * Features:
 *   - Study creation and management
 *   - Status tracking (idle, active, error)
 *   - Data updates and clearing
 *   - Plot list management
 *   - Graphics integration
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 48096: Delegate class
 *   - 72187: Plot list utilities
 *   - 29806: Data unpacking
 *   - 19844: Study meta-info
 *   - 87163: Study ID utilities
 *   - 64717: Study plot functions
 *   - 24437: Live study graphics
 *   - 63681: Study status types
 *   - 9343: Logger utilities
 *
 * Exports:
 *   - StudyDataSource: Study data source class
 *
 * @module 19136
 * @category Technical Indicators
 * @subpackage Data Source
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    StudyDataSource: () => StudyDataSource
  });

  const assertionUtils = moduleRequire(50151),
    Delegate = moduleRequire(48096),
    PlotList = moduleRequire(72187),
    dataUnpacker = moduleRequire(29806),
    StudyMetaInfo = moduleRequire(19844),
    studyIdUtils = moduleRequire(87163),
    studyPlotFunctions = moduleRequire(64717),
    LiveStudyGraphics = moduleRequire(24437),
    StudyStatusTypes = moduleRequire(63681);

  const logger = moduleRequire(9343).getLogger("Chart.StudyDataSource");

  // Study status enumeration
  !function(StudyStatus) {
    StudyStatus[StudyStatus.Idle = 0] = "Idle";
    StudyStatus[StudyStatus.AwaitingConnection = 1] = "AwaitingConnection";
    StudyStatus[StudyStatus.AwaitingParent = 2] = "AwaitingParent";
    StudyStatus[StudyStatus.AwaitingFirstDataUpdate = 3] = "AwaitingFirstDataUpdate";
    StudyStatus[StudyStatus.Active = 4] = "Active";
  }(StudyStatus || (StudyStatus = {}));

  /**
   * Study data source implementation
   */
  class StudyDataSource {
    /**
     * @param {Object} gateway - Study gateway
     * @param {Object} metaInfo - Study meta-info
     * @param {string} seriesSource - Series source
     * @param {string} turnaroundPrefix - Turnaround prefix
     * @param {boolean} forceUseExclamationMark - Force exclamation mark
     */
    constructor(gateway, metaInfo, seriesSource, turnaroundPrefix, forceUseExclamationMark = true) {
      this._inputs = null;
      this._status = StudyStatus.Idle;
      this._studyId = null;
      this._turnaroundCounter = 1;
      this._studyStatus = {
        type: StudyStatusTypes.StudyStatusType.Undefined
      };
      this._studyStatusChanged = new Delegate.Delegate();
      this._dataCleared = new Delegate.Delegate();
      this._dataUpdated = new Delegate.Delegate();
      this._boundOnGatewayIsConnectedChanged = this._onGatewayIsConnectedChanged.bind(this);
      this._ongoingDataUpdate = Promise.resolve();
      this._gateway = gateway;
      this._metaInfo = metaInfo;
      this._forceUseExclamationMark = forceUseExclamationMark;
      this._seriesSource = seriesSource;
      this._turnaroundPrefix = turnaroundPrefix;
      this._plots = new PlotList.PlotList(
        studyPlotFunctions.studyPlotFunctionMap(metaInfo), 
        studyPlotFunctions.studyEmptyPlotValuePredicate
      );
      this._gateway.isConnected().subscribe(this._boundOnGatewayIsConnectedChanged);
      this._graphics = new LiveStudyGraphics.LiveStudyGraphics(metaInfo.graphics);
    }

    /**
     * Destroy data source and cleanup
     */
    destroy() {
      this.stop();
      this._gateway.isConnected().unsubscribe(this._boundOnGatewayIsConnectedChanged);
      this._seriesSource.dataEvents().created().unsubscribeAll(this);
    }

    /**
     * Get study meta-info
     * @returns {Object} Study meta-info
     */
    metaInfo() {
      return this._metaInfo;
    }

    /**
     * Get study inputs
     * @returns {Array} Study inputs
     */
    inputs() {
      return this._inputs;
    }

    /**
     * Set study inputs
     * @param {Array} inputs - Study inputs
     */
    setInputs(inputs) {
      this._inputs = inputs;
      
      if (null !== this._studyId) {
        this._turnaroundCounter++;
        this._onStudyStatusChangedTo({
          type: StudyStatusTypes.StudyStatusType.Undefined
        });
        
        this._gateway.modifyStudy(this._studyId, this._turnaround(), inputs, this._onMessage.bind(this));
        
        if (this._status === StudyStatus.Active) {
          this._changeStatusTo(StudyStatus.AwaitingFirstDataUpdate);
        }
      }
    }

    /**
     * Check if study is started
     * @returns {boolean} True if started
     */
    isStarted() {
      return this._status !== StudyStatus.Idle;
    }

    /**
     * Check if study is active
     * @returns {boolean} True if active
     */
    isActive() {
      return this._status === StudyStatus.Active;
    }

    /**
     * Start study
     */
    start() {
      if (this.isStarted()) {
        logger.logNormal("start: data source is already started, nothing to do");
        return;
      }
      
      assertionUtils.assert(null !== this._inputs, "Inputs should be defined when starting a study");
      
      if (this._gateway.isConnected().value()) {
        this._createStudy();
      } else {
        this._changeStatusTo(StudyStatus.AwaitingConnection);
      }
    }

    /**
     * Stop study
     */
    stop() {
      if (!this.isStarted()) {
        logger.logNormal("stop: data source is already stopped, nothing to do");
        return;
      }
      
      if (null !== this._studyId && this._gateway.isConnected().value()) {
        this._gateway.removeStudy(this._studyId);
        this._studyId = null;
        this._onStudyStatusChangedTo({
          type: StudyStatusTypes.StudyStatusType.Undefined
        });
      }
      
      this._changeStatusTo(StudyStatus.Idle);
    }

    /**
     * Get study ID
     * @returns {string} Study ID
     */
    studyId() {
      return this._studyId;
    }

    /**
     * Get study status
     * @returns {Object} Study status object
     */
    studyStatus() {
      return this._studyStatus;
    }

    /**
     * Get study status changed delegate
     * @returns {Delegate} Status changed delegate
     */
    studyStatusChanged() {
      return this._studyStatusChanged;
    }

    /**
     * Get study plots
     * @returns {PlotList} Study plots
     */
    plots() {
      return this._plots;
    }

    /**
     * Get study graphics
     * @returns {LiveStudyGraphics} Study graphics
     */
    graphics() {
      return this._graphics;
    }

    /**
     * Clear study data
     */
    clearData() {
      this._plots.clear();
      this._graphics.clear();
      this._dataCleared.fire();
    }

    /**
     * Stop and steal data
     * @returns {Object} Stolen data
     */
    stopAndStealData() {
      assertionUtils.assert(this._status === StudyStatus.Active, "Couldn't steal data from non-active data source");
      
      this.stop();
      
      const plots = this._plots;
      const graphics = this._graphics.extract();
      
      this._plots = new PlotList.PlotList(
        studyPlotFunctions.studyPlotFunctionMap(this._metaInfo), 
        studyPlotFunctions.studyEmptyPlotValuePredicate
      );
      
      return {
        plots: plots,
        graphics: graphics
      };
    }

    /**
     * Get data cleared delegate
     * @returns {Delegate} Data cleared delegate
     */
    dataCleared() {
      return this._dataCleared;
    }

    /**
     * Get data updated delegate
     * @returns {Delegate} Data updated delegate
     */
    dataUpdated() {
      return this._dataUpdated;
    }

    /**
     * Move data
     * @param {Object} data - Data to move
     */
    moveData(data) {
      this._ongoingDataUpdate = this._ongoingDataUpdate.then(() => {
        this._plots.move(data);
      });
    }

    /**
     * Get pending updates ready promise
     * @returns {Promise} Pending updates promise
     */
    pendingUpdatesReady() {
      return this._ongoingDataUpdate;
    }

    /**
     * Create study error object
     * @param {string|Object} error - Error description
     * @returns {Object} Study error object
     */
    _createStudyError(error) {
      return {
        type: StudyStatusTypes.StudyStatusType.Error,
        errorDescription: this._getStudyErrorDescription(error)
      };
    }

    /**
     * Get study error description
     * @param {string|Object} error - Error object
     * @returns {string} Error description
     */
    _getStudyErrorDescription(error) {
      return "string" == typeof error ? {
        error: error.split(":", 2)[0]
      } : error;
    }

    /**
     * Change study status
     * @param {number} newStatus - New status
     */
    _changeStatusTo(newStatus) {
      assertionUtils.assert(this._status !== newStatus, "Source and destination status should be distinct");
      
      logger.logNormal(`Status changed from ${StudyStatus[this._status]} to ${StudyStatus[newStatus]}`);
      this._status = newStatus;
    }

    /**
     * Create study
     */
    _createStudy() {
      const parentInstanceId = this._seriesSource.instanceId();
      
      if (null !== parentInstanceId) {
        this._createStudyUsingParentId(parentInstanceId);
      } else {
        this._changeStatusTo(StudyStatus.AwaitingParent);
        this._seriesSource.dataEvents().created().subscribe(this, this._onSeriesCreated, false);
      }
    }

    /**
     * Create study using parent ID
     * @param {string} parentInstanceId - Parent instance ID
     */
    _createStudyUsingParentId(parentInstanceId) {
      assertionUtils.assert(this._status !== StudyStatus.Active, 'Status should not be "Active" when creating a study');
      assertionUtils.assert(
        this._studyStatus.type === StudyStatusTypes.StudyStatusType.Undefined,
        'Study status should be "Undefined" when creating a study'
      );
      assertionUtils.assert(null === this._studyId, "Study id should be empty when creating a study");
      
      this._studyId = studyIdUtils.makeNextStudyId();
      
      this._gateway.createStudy(
        this._studyId, 
        this._turnaround(), 
        parentInstanceId, 
        StudyMetaInfo.StudyMetaInfo.getStudyIdWithLatestVersion(this.metaInfo(), this._forceUseExclamationMark), 
        assertionUtils.ensureNotNull(this._inputs), 
        this._onMessage.bind(this), 
        {
          id: this._metaInfo.id
        }
      );
      
      this._changeStatusTo(StudyStatus.AwaitingFirstDataUpdate);
    }

    /**
     * Handle gateway connection change
     * @param {boolean} isConnected - Connection status
     */
    _onGatewayIsConnectedChanged(isConnected) {
      if (isConnected) {
        this._onGatewayConnected();
      } else {
        this._onGatewayDisconnected();
      }
    }

    /**
     * Handle gateway connected
     */
    _onGatewayConnected() {
      if (this._status === StudyStatus.AwaitingConnection) {
        this._createStudy();
      }
    }

    /**
     * Handle gateway disconnected
     */
    _onGatewayDisconnected() {
      if (this._status !== StudyStatus.Idle && this._status !== StudyStatus.AwaitingConnection) {
        this._studyId = null;
        this._changeStatusTo(StudyStatus.AwaitingConnection);
        
        if (this._studyStatus.type !== StudyStatusTypes.StudyStatusType.Undefined) {
          this._onStudyStatusChangedTo({
            type: StudyStatusTypes.StudyStatusType.Undefined
          });
        }
        
        this._turnaroundCounter = 1;
      }
    }

    /**
     * Handle series created event
     */
    _onSeriesCreated() {
      if (this._status === StudyStatus.AwaitingParent) {
        this._createStudyUsingParentId(assertionUtils.ensure(this._seriesSource.instanceId()));
      }
    }

    /**
     * Handle study status change
     * @param {Object} newStatus - New status object
     */
    _onStudyStatusChangedTo(newStatus) {
      const oldStatus = this._studyStatus;
      this._studyStatus = newStatus;
      
      logger.logNormal(
        `Study status type changed from ${StudyStatusTypes.StudyStatusType[oldStatus.type]} to ${StudyStatusTypes.StudyStatusType[newStatus.type]}`
      );
      
      this._studyStatusChanged.fire(oldStatus, newStatus);
    }

    /**
     * Handle gateway message
     * @param {Object} message - Gateway message
     */
    _onMessage(message) {
      if ("data_update" === message.method) {
        const {
          customId: studyId,
          turnaround: turnaround,
          plots: plotsData,
          nonseries: nonseriesData
        } = message.params;
        
        if (studyId === this._studyId && this._checkTurnaround(turnaround)) {
          this._onDataUpdate(studyId, plotsData, assertionUtils.ensureDefined(nonseriesData));
        }
      } else if ("study_loading" === message.method) {
        const [studyId, turnaround] = message.params;
        
        if (studyId === this._studyId && this._checkTurnaround(turnaround)) {
          this._onStudyLoading(message.time);
        }
      } else if ("study_completed" === message.method) {
        const [studyId, turnaround] = message.params;
        
        if (studyId === this._studyId && this._checkTurnaround(turnaround)) {
          this._onStudyCompleted(message.time);
        }
      } else if ("study_error" === message.method) {
        const [studyId, turnaround, error, errorTime] = message.params;
        
        if (studyId === this._studyId && this._checkTurnaround(turnaround)) {
          this._onStudyError(studyId, error, errorTime);
        }
      } else if ("clear_data" === message.method) {
        if (this._checkTurnaround(message.params.turnaround)) {
          this.clearData();
        }
      }
    }

    /**
     * Handle data update
     * @param {string} studyId - Study ID
     * @param {Object} plotsData - Plots data
     * @param {Object} nonseriesData - Non-series data
     */
    _onDataUpdate(studyId, plotsData, nonseriesData) {
      const unpackedData = dataUnpacker.unpackNonSeriesData(nonseriesData.d);
      
      this._ongoingDataUpdate = this._ongoingDataUpdate.then(() => unpackedData)
        .then(() => unpackedData)
        .then(this._onDataUnpacked.bind(this, studyId, plotsData))
        .then(this._ongoingDataUpdate);
      
      return this._ongoingDataUpdate;
    }

    /**
     * Handle data unpacked
     * @param {string} studyId - Study ID
     * @param {Object} plotsData - Plots data
     * @param {Object} unpackedData - Unpacked data
     * @param {Object} indexes - Data indexes
     */
    _onDataUnpacked(studyId, plotsData, unpackedData, indexes) {
      if (this._status !== StudyStatus.Idle) {
        if (this._status === StudyStatus.AwaitingFirstDataUpdate) {
          this._changeStatusTo(StudyStatus.Active);
          this.clearData();
        }
        
        this._mergePlots(plotsData);
        
        if (null !== indexes) {
          if (indexes.indexes_replace) {
            assertionUtils.assert("nochange" !== plotsData, this._graphics.replaceIndexesTo(indexes));
          } else if ("nochange" !== plotsData) {
            this._graphics.replaceIndexesTo(indexes);
          }
          
          if (void 0 !== indexes.graphicsCmds) {
            this._graphics.processCommands(indexes.graphicsCmds);
          }
        }
        
        this._dataUpdated.fire(studyId, unpackedData, plotsData);
      }
    }

    /**
     * Handle study loading
     * @param {number} time - Loading time
     */
    _onStudyLoading(time) {
      this._onStudyStatusChangedTo({
        type: StudyStatusTypes.StudyStatusType.Loading,
        startTime: Date.now()
      });
    }

    /**
     * Handle study error
     * @param {string} studyId - Study ID
     * @param {string} error - Error description
     * @param {number} time - Error time
     */
    _onStudyError(studyId, error, time) {
      this.clearData();
      this._onStudyStatusChangedTo(this._createStudyError(studyId));
    }

    /**
     * Handle study completed
     * @param {number} time - Completion time
     */
    _onStudyCompleted(time) {
      this._onStudyStatusChangedTo({
        type: StudyStatusTypes.StudyStatusType.Completed
      });
    }

    /**
     * Merge plots data
     * @param {Object} plotsData - Plots data to merge
     */
    _mergePlots(plotsData) {
      this._plots.merge(plotsData);
    }

    /**
     * Get turnaround string
     * @returns {string} Turnaround string
     */
    _turnaround() {
      return `${this._turnaroundPrefix}${this._turnaroundCounter}`;
    }

    /**
     * Check turnaround
     * @param {string} turnaround - Turnaround to check
     * @returns {boolean} True if turnaround matches
     */
    _checkTurnaround(turnaround) {
      const currentTurnaround = this._turnaround();
      return turnaround === currentTurnaround || 
             turnaround === this._seriesSource.turnaround() || 
             turnaround === `${this._seriesSource.turnaround()}_${currentTurnaround}`;
    }
  }
}
