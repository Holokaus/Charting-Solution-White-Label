/**
 * Module: 66786
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.867Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 66786 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

66786: (exports, module, i) => {
    "use strict";
    require.d(module, {
      CustomSourceBase: () => s
    });
    class s {
      constructor(exports, t) {
        this._id = exports, this._model = t
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
      paneViews(exports) {
        return []
      }
      labelPaneViews(exports) {
        return []
      }
      priceAxisViews(exports, t) {
        return []
      }
      updateViewsForPane(exports, t) {
        exports.containsMainSeries() && this.updateAllViews(module)
      }
    }