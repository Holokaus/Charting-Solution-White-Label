/**
 * Module 71846 - Auto-beautified from TradingView webpack bundle
 *
 * @module 71846
 * @date 2026-04-23
 * @size 868 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 11542, 12362, 49947
 *
 * Exports:
 *   - getTranslatedSymbolDescription (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
var s = i(12362).ChartSaverBase;
i.i18next(null, void 0, i(49947));
t.ChartSaver = class extends s {
  constructor(e) {
    super(e)
  }
  chartSizeLimitExceeded() {
    return this._chartSizeLimitExceededDelegate
  }
  chartAboutToBeSaved() {
    return this._chartAboutToBeSavedDelegate
  }
  chartSaved() {
    return this._chartSavedDelegate
  }
  publishChart(e) {}
  publishScript(e, t, i) {}
  isScriptNameValid(e) {
    return "" !== e.trim() && e.length <= 64
  }
  isScriptDescriptionValid(e) {
    return "" !== e.trim() && e.length <= 7e4
  }
  isScriptDescribersValid(e, t) {
    return this.isScriptNameValid(e) && this.isScriptDescriptionValid(t)
  }
  openInNewTab(e, t, i) {
    e.publishInProgress = !0, i || this.isScriptDescribersValid(t.name, t.description) && undefined(new Promise((function(t) {
      e.setPopupUrl = t
    })))
  }
  onPublish(e, t) {}
}
}, 19e3: (e, t, i) => {
    "use strict";
    i.d(t, {
      getTranslatedSymbolDescription: () => s
    });
    i(11542);

    function s(e) {
      return e.description || ""
