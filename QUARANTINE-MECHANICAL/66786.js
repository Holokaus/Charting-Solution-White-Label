/**
 * Module 66786 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

66786: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      CustomSourceBase: () => bitmapCoordinatesPane_s
    });
    class bitmapCoordinatesPane_s {
      constructor(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        this._id = bitmapCoordinatesPane_e, this._model = bitmapCoordinatesPane_t
      }
      id() {
        return this._id
      }
      isHoveredEnabled() {
        return !0
      }
      isSelectionEnabled() {
        return !1
      }
      priceScale() {
        return null
      }
      paneViews(bitmapCoordinatesPane_e) {
        return []
      }
      labelPaneViews(bitmapCoordinatesPane_e) {
        return []
      }
      priceAxisViews(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        return []
      }
      updateViewsForPane(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t) {
        bitmapCoordinatesPane_e.containsMainSeries() && this.updateAllViews(bitmapCoordinatesPane_t)
      }
    }