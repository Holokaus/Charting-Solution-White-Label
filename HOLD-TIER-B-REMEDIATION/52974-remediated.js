/**
 * Module 52974 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

52974: (exports, t, i) => {
    "use strict";
    const studyIds = i(41414).LineDataSource,
      o = i(62301).alignToStep,
      name = i(35727).customFormatters,
      r = i(95059).createSeriesFormatter;
    class a extends studyIds {
      constructor(exports, t) {
        super(exports, t), this.customization.forcePriceAxisLabel = !0, this.customization.disableErasing = !0, this
          .customization.showInObjectsTree = !1, this._createFormatter(exports.mainSeries().symbolInfo()), this
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
      _correctPoints(exports, t) {
        this._currentMovingPoint && this._startMovingPoint ? this._currentMovingPoint.logical.price - this
          ._startMovingPoint.logical.price && (this._cursorMoved = !0) : this._cursorMoved = !1;
        for (var index = 1 / this.priceScale().mainSource().base(), studyIds = 0; studyIds < exports.length; studyIds++) {
          var name = exports[studyIds];
          this._cursorMoved && (name.price = this._currentMovingPoint.logical.price), name.price = o(name.price, i), exports[studyIds] = name
        }
      }
      _createFormatter(exports) {
        let t = null;
        t = name && name.priceFormatterFactory && name.priceFormatterFactory(exports), null == t && (t = null), this._formatter =
          null !== t ? t : r(exports, "default", !1, !0)
      }
    }
    a.POINTS_COUNT = 1, exports.exports.LineToolTrading = a