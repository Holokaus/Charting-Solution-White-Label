/**
 * Module: 79740
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.049Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 79740 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79740: (exports, module, i) => {
    "use strict";
    require.d(module, {
      LineDataSourceTimeAxisView: () => o
    });
    var state = i(23752);
    class o extends state.TimeAxisView {
      constructor(exports, t) {
        super(exports.model()), this._active = !1, this._source = exports, this._pointIndex = module, this._properties = exports.model()
          .properties().childs().scalesProperties
      }
      setActive(exports) {
        this._active = e
      }
      _getBgColor() {
        return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this
          ._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
      }
      _getIndex() {
        if (!this._model.selection().isSelected(this._source)) return null;
        const exports = this._source.timeAxisPoints();
        return exports.length <= this._pointIndex ? null : e[this._pointIndex].index
      }
      _isVisible() {
        return !0
      }
    }