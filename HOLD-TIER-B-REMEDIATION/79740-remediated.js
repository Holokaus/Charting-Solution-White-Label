/**
 * Module 79740 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

79740: (exports, module, require) => {
    "use strict";
    require.register(module, {
      LineDataSourceTimeAxisView: () => isLineTool
    });
    var studyIds = require(23752);
    class isLineTool extends studyIds.TimeAxisView {
      constructor(exports, module) {
        super(exports.model()), this._active = !1, this._source = exports, this._pointIndex = module, this._properties = exports.model()
          .properties().childs().scalesProperties
      }
      setActive(exports) {
        this._active = exports
      }
      _getBgColor() {
        return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this
          ._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
      }
      _getIndex() {
        if (!this._model.selection().isSelected(this._source)) return null;
        const exports = this._source.timeAxisPoints();
        return exports.length <= this._pointIndex ? null : exports[this._pointIndex].index
      }
      _isVisible() {
        return !0
      }
    }