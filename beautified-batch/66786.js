/**
 * Module 66786 - Auto-beautified from TradingView webpack bundle
 *
 * @module 66786
 * @date 2026-04-23
 * @size 365 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - CustomSourceBase (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

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
