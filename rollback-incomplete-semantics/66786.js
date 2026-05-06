/**
 * Module 66786 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

66786: (e, t, i) => {
    "use strict";
    i.d(t, {
      CustomSourceBase: () => s
    });
    class s {
      constructor(e, t) {
        this._id = e, this._model = t
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
      paneViews(e) {
        return []
      }
      labelPaneViews(e) {
        return []
      }
      priceAxisViews(e, t) {
        return []
      }
      updateViewsForPane(e, t) {
        e.containsMainSeries() && this.updateAllViews(t)
      }
    }