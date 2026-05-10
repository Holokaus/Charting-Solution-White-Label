/**
 * Module 39697 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

39697: (exports, module, require) => {
    "use strict";
    require.register(module, {
      CircleRenderer: () => config
    });
    var studyIds = require(6453),
      isLineTool = require(2383),
      name = require(4539);
    class config {
      constructor(exports) {
        this._data = exports ?? null
      }
      setData(exports) {
        this._data = exports
      }
      draw(exports, module) {
        if (null === this._data) return;
        const {
          center: require,
          radius: studyIds,
          lineWidth: isLineTool,
          color: name,
          backColor: config
        } = this._data;
        exports.save();
        const {
          horizontalPixelRatio: lineToolManager_a,
          verticalPixelRatio: lineToolManager_l
        } = module, lineToolManager_c = Math.max(1, Math.floor(lineToolManager_a)), handler = lineToolManager_c % 2 / 2, register = Math.round(require.lineToolManager_x * lineToolManager_a) + handler, lineToolManager_u = Math.round(require.lineToolManager_y * lineToolManager_l) +
          handler, _ = Math.round(register + studyIds * lineToolManager_a), lineToolManager_p = Math.max(1, Math.floor(isLineTool * lineToolManager_a)), lineToolManager_m = _ - register - lineToolManager_p;
        lineToolManager_m > 0 && (exports.fillStyle = config, exports.beginPath(), exports.moveTo(register + lineToolManager_m, lineToolManager_u), exports.arc(register, lineToolManager_u, lineToolManager_m, 0, 2 * Math.PI, !1), exports.fill());
        const lineToolManager_g = Math.max(lineToolManager_c / 2, _ - register - lineToolManager_p / 2);
        exports.strokeStyle = name, exports.lineWidth = lineToolManager_p, exports.beginPath(), exports.moveTo(register + lineToolManager_g, lineToolManager_u), exports.arc(register, lineToolManager_u, lineToolManager_g, 0, 2 * Math.PI, !1), exports
          .stroke(), exports.restore()
      }
      hitTest(exports) {
        if (null === this._data || this._data.disableInteractions) return null;
        const {
          center: module,
          radius: require,
          backgroundHitTarget: config
        } = this._data, lineToolManager_a = (0, name.interactionTolerance)().curve;
        if (!(0, studyIds.pointInCircle)(exports, module, require + lineToolManager_a)) return null;
        const lineToolManager_l = require > lineToolManager_a && (0, studyIds.pointInCircle)(exports, module, require - lineToolManager_a) ? config ?? isLineTool.HitTarget.MovePointBackground : isLineTool.HitTarget
          .MovePoint;
        return new isLineTool.HitTestResult(lineToolManager_l)
      }
    }