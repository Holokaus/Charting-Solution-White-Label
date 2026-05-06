/**
 * Module 52974 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

52974: (lineToolManager_e, t, i) => {
    "use strict";
    const lineToolManager_s = i(41414).LineDataSource,
      o = i(62301).alignToStep,
      lineToolManager_n = i(35727).customFormatters,
      r = i(95059).createSeriesFormatter;
    class a extends lineToolManager_s {
      constructor(lineToolManager_e, t) {
        super(lineToolManager_e, t), this.customization.forcePriceAxisLabel = !0, this.customization.disableErasing = !0, this
          .customization.showInObjectsTree = !1, this._createFormatter(lineToolManager_e.mainSeries().symbolInfo()), this
          .setSelectionEnabled(!1)
      }
      isSynchronizable() {
        return !1
      }
      pointsCount() {
        return a.POINTS_COUNT
      }
      hasContextMenu() {
        return !1
      }
      state() {
        return null
      }
      startMoving() {
        super.startMoving.apply(this, arguments), this._cursorMoved = !1
      }
      endMoving() {
        super.endMoving.apply(this, arguments), this._cursorMoved = !1
      }
      userEditEnabled() {
        return !0
      }
      movable() {
        return !1
      }
      canBeHidden() {
        return !1
      }
      isUserDeletable() {
        return !1
      }
      showInObjectTree() {
        return !1
      }
      doesMovingAffectsUndo() {
        return !1
      }
      isAvailableInFloatingWidget() {
        return !1
      }
      timeAxisViews() {
        return null
      }
      cloneable() {
        return !1
      }
      copiable() {
        return !1
      }
      _correctPoints(lineToolManager_e, t) {
        this._currentMovingPoint && this._startMovingPoint ? this._currentMovingPoint.logical.price - this
          ._startMovingPoint.logical.price && (this._cursorMoved = !0) : this._cursorMoved = !1;
        for (var i = 1 / this.priceScale().mainSource().base(), lineToolManager_s = 0; lineToolManager_s < lineToolManager_e.length; lineToolManager_s++) {
          var lineToolManager_n = lineToolManager_e[lineToolManager_s];
          this._cursorMoved && (lineToolManager_n.price = this._currentMovingPoint.logical.price), lineToolManager_n.price = o(lineToolManager_n.price, i), lineToolManager_e[lineToolManager_s] = lineToolManager_n
        }
      }
      _createFormatter(lineToolManager_e) {
        let t = null;
        t = lineToolManager_n && lineToolManager_n.priceFormatterFactory && lineToolManager_n.priceFormatterFactory(lineToolManager_e), null == t && (t = null), this._formatter =
          null !== t ? t : r(lineToolManager_e, "default", !1, !0)
      }
    }
    a.POINTS_COUNT = 1, lineToolManager_e.exports.LineToolTrading = a