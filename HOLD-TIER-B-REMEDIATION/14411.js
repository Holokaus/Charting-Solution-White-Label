/**
 * Module 14411 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

14411: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      ChartChangesWatcher: () => watchedValue_a,
      changedAll: () => watchedValue_r
    });
    var watchedValue_s, watchedValue_o = watchedValue_i(67455),
      watchedValue_n = watchedValue_i(48096);
    ! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.NothingChanged = 0] = "NothingChanged", watchedValue_e[watchedValue_e.ContentChanged = 1] = "ContentChanged", watchedValue_e[watchedValue_e.LineToolsChanged =
        2] = "LineToolsChanged"
    }(watchedValue_s || (watchedValue_s = {}));
    const watchedValue_r = 3;
    class watchedValue_a {
      constructor(watchedValue_e, watchedValue_t, watchedValue_i) {
        this._undoHistoryHasChanges = !1, this._changesMask = 0, this._handleLayoutNameChanged = () => {
            this._changesMask = 1 | this._changesMask
          }, this._recalculateHaveChanges = () => {
            const watchedValue_e = this._changesMask,
              watchedValue_t = this._undoHistoryHasChanges ? 1 : 0,
              watchedValue_i = this._lineToolsHaveChanges.value() ? 2 : 0;
            this._changesMask = watchedValue_t | watchedValue_i, watchedValue_e !== this._changesMask && this._onValueChanged.fire(0 !== this._changesMask)
          }, this._chartWidgetCollection = watchedValue_e, this._undoHistory = watchedValue_e.undoHistory, this._lineToolsHaveChanges = watchedValue_e
          .lineToolsSynchronizerHasChanges, this._chartSaver = watchedValue_t, this._globalEvents = watchedValue_i, this._onValueChanged = new watchedValue_n
          .Delegate, this._hasChangesWV = (0, watchedValue_o.createWVFromGetterAndSubscription)((() => this.hasChanges()), this
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
      _setUndoHistoryHasChanges(watchedValue_e) {
        this._undoHistoryHasChanges = watchedValue_e, this._recalculateHaveChanges()
      }
      _handleChartLoaded() {
        this._setUndoHistoryHasChanges(!1)
      }
      _handleLayoutLoaded() {
        this._setUndoHistoryHasChanges(!1)
      }
      _handleUndoHistoryChange(watchedValue_e) {
        watchedValue_e?.affectsState() && this._setUndoHistoryHasChanges(!0)
      }
      _handleChartMigrated() {
        this._setUndoHistoryHasChanges(!0)
      }
      _handleChartSaved(watchedValue_e) {
        watchedValue_e && this._setUndoHistoryHasChanges(!1)
      }
    }