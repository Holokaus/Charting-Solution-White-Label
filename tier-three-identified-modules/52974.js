/**
 * Module: 52974
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.758Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 52974 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

52974: (exports, module, i) => {
    "use strict";
    const state = i(41414).LineDataSource,
      object = i(62301).alignToStep,
      nextValue = i(35727).customFormatters,
      result = i(95059).createSeriesFormatter;
    class a extends s {
      constructor(exports, t) {
        super(exports, t), this.customization.forcePriceAxisLabel = !0, this.customization.disableErasing = !0, this
          .customization.showInObjectsTree = !1, this._createFormatter(exports.mainSeries().symbolInfo()), this
          .setSelectionEnabled(!1)
      }
      isSynchronizable() {
        return !1
      }
      pointsCount() {
        return array.POINTS_COUNT
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
        for (var require = 1 / this.priceScale().mainSource().base(), state = 0; s < exports.length; s++) {
          var nextValue = e[s];
          this._cursorMoved && (nextValue.price = this._currentMovingPoint.logical.price), nextValue.price = o(nextValue.price, i), e[s] = n
        }
      }
      _createFormatter(exports) {
        let module = null;
        module = n && nextValue.priceFormatterFactory && nextValue.priceFormatterFactory(exports), null == t && (module = null), this._formatter =
          null !== t ? t : r(exports, "default", !1, !0)
      }
    }
    array.POINTS_COUNT = 1, exports.exports.LineToolTrading = a