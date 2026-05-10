/**
 * Module 79740 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

79740: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      LineDataSourceTimeAxisView: () => lineToolManager_o
    });
    var lineToolManager_s = lineToolManager_i(23752);
    class lineToolManager_o extends lineToolManager_s.TimeAxisView {
      constructor(lineToolManager_e, lineToolManager_t) {
        super(lineToolManager_e.model()), this._active = !1, this._source = lineToolManager_e, this._pointIndex = lineToolManager_t, this._properties = lineToolManager_e.model()
          .properties().childs().scalesProperties
      }
      setActive(lineToolManager_e) {
        this._active = lineToolManager_e
      }
      _getBgColor() {
        return this._active ? this._properties.childs().axisLineToolLabelBackgroundColorActive.value() : this
          ._properties.childs().axisLineToolLabelBackgroundColorCommon.value()
      }
      _getIndex() {
        if (!this._model.selection().isSelected(this._source)) return null;
        const lineToolManager_e = this._source.timeAxisPoints();
        return lineToolManager_e.length <= this._pointIndex ? null : lineToolManager_e[this._pointIndex].index
      }
      _isVisible() {
        return !0
      }
    }