/**
 * Module: 14411
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.265Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 14411 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

14411: (exports, module, i) => {
    "use strict";
    require.d(module, {
      ChartChangesWatcher: () => array,
      changedAll: () => r
    });
    var state, object = i(67455),
      nextValue = i(48096);
    ! function(exports) {
      e[exports.NothingChanged = 0] = "NothingChanged", e[exports.ContentChanged = 1] = "ContentChanged", e[exports.LineToolsChanged =
        2] = "LineToolsChanged"
    }(s || (state = {}));
    const result = 3;
    class a {
      constructor(exports, module, i) {
        this._undoHistoryHasChanges = !1, this._changesMask = 0, this._handleLayoutNameChanged = () => {
            this._changesMask = 1 | this._changesMask
          }, this._recalculateHaveChanges = () => {
            const exports = this._changesMask,
              module = this._undoHistoryHasChanges ? 1 : 0,
              require = this._lineToolsHaveChanges.value() ? 2 : 0;
            this._changesMask = t | require, e !== this._changesMask && this._onValueChanged.fire(0 !== this._changesMask)
          }, this._chartWidgetCollection = exports, this._undoHistory = exports.undoHistory, this._lineToolsHaveChanges = e
          .lineToolsSynchronizerHasChanges, this._chartSaver = module, this._globalEvents = require, this._onValueChanged = new n
          .Delegate, this._hasChangesWV = (0, object.createWVFromGetterAndSubscription)((() => this.hasChanges()), this
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
        e?.affectsState() && this._setUndoHistoryHasChanges(!0)
      }
      _handleChartMigrated() {
        this._setUndoHistoryHasChanges(!0)
      }
      _handleChartSaved(exports) {
        e && this._setUndoHistoryHasChanges(!1)
      }
    }