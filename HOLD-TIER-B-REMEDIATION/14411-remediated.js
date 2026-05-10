/**
 * Module 14411 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

14411: (exports, t, i) => {
    "use strict";
    i.d(t, {
      ChartChangesWatcher: () => a,
      changedAll: () => r
    });
    var constants, o = i(67455),
      name = i(48096);
    ! function(exports) {
      exports[exports.NothingChanged = 0] = "NothingChanged", exports[exports.ContentChanged = 1] = "ContentChanged", exports[exports.LineToolsChanged =
        2] = "LineToolsChanged"
    }(constants || (constants = {}));
    const r = 3;
    class a {
      constructor(exports, t, i) {
        this._undoHistoryHasChanges = !1, this._changesMask = 0, this._handleLayoutNameChanged = () => {
            this._changesMask = 1 | this._changesMask
          }, this._recalculateHaveChanges = () => {
            const exports = this._changesMask,
              t = this._undoHistoryHasChanges ? 1 : 0,
              i = this._lineToolsHaveChanges.value() ? 2 : 0;
            this._changesMask = t | i, exports !== this._changesMask && this._onValueChanged.fire(0 !== this._changesMask)
          }, this._chartWidgetCollection = exports, this._undoHistory = exports.undoHistory, this._lineToolsHaveChanges = exports
          .lineToolsSynchronizerHasChanges, this._chartSaver = t, this._globalEvents = i, this._onValueChanged = new name
          .Delegate, this._hasChangesWV = (0, o.createWVFromGetterAndSubscription)((() => this.hasChanges()), this
            .getOnChange()), this._subscribe()
      }
      destroy() {
        this._unsubscribe(), this._onValueChanged.destroy(), this._hasChangesWV.destroy()
      }
      changes() {
        return this._changesMask
      }
      hasChanges() {
        return this._changesMask > 0
      }
      hasChangesWV() {
        return this._hasChangesWV
      }
      getOnChange() {
        return this._onValueChanged
      }
      _subscribe() {
        this._globalEvents.subscribe("chart_loaded", this._handleChartLoaded, this), this._globalEvents.subscribe(
            "layout_loaded", this._handleLayoutLoaded, this), this._globalEvents.subscribe("chart_migrated", this
            ._handleChartMigrated, this), this._globalEvents.subscribe("lineToolsResavedFromContent", this
            ._handleChartMigrated, this), this._undoHistory.undoStack().onChange().subscribe(this, this
            ._handleUndoHistoryChange), this._chartSaver?.chartSaved().subscribe(this, this._handleChartSaved), this
          ._lineToolsHaveChanges.subscribe(this._recalculateHaveChanges);
        this._chartWidgetCollection.metaInfo.name.subscribe(this._handleLayoutNameChanged)
      }
      _unsubscribe() {
        this._globalEvents.unsubscribe("chart_loaded", this._handleChartLoaded, this), this._globalEvents.unsubscribe(
            "layout_loaded", this._handleLayoutLoaded, this),
          this._globalEvents.unsubscribe("chart_migrated", this._handleChartMigrated, this), this._globalEvents
          .unsubscribe("lineToolsResavedFromContent", this._handleChartMigrated, this), this._undoHistory.undoStack()
          .onChange().unsubscribe(this, this._handleUndoHistoryChange), this._chartSaver?.chartSaved().unsubscribe(
            this, this._handleChartSaved), this._lineToolsHaveChanges.unsubscribe(this._recalculateHaveChanges);
        this._chartWidgetCollection.metaInfo.name.unsubscribe(this._handleLayoutNameChanged)
      }
      _setUndoHistoryHasChanges(exports) {
        this._undoHistoryHasChanges = exports, this._recalculateHaveChanges()
      }
      _handleChartLoaded() {
        this._setUndoHistoryHasChanges(!1)
      }
      _handleLayoutLoaded() {
        this._setUndoHistoryHasChanges(!1)
      }
      _handleUndoHistoryChange(exports) {
        exports?.affectsState() && this._setUndoHistoryHasChanges(!0)
      }
      _handleChartMigrated() {
        this._setUndoHistoryHasChanges(!0)
      }
      _handleChartSaved(exports) {
        exports && this._setUndoHistoryHasChanges(!1)
      }
    }