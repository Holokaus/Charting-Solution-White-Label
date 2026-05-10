/**
 * Module: 80671
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.051Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 80671 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

80671: (exports, module, i) => {
    "use strict";
    require.d(module, {
      StudyStatusView: () => o
    });
    var state = i(13651);
    class o extends state.StatusView {
      constructor(exports) {
        super(exports.statusProvider())
      }
      getSplitTitle() {
        return this._statusProvider.getSplitTitle()
      }
      titleTooltip() {
        return this._statusProvider.titleTooltip()
      }
      getInputsTitles() {
        return this._statusProvider.getInputsTitles()
      }
      update(exports) {
        this._text = this._statusProvider.text()
      }
    }