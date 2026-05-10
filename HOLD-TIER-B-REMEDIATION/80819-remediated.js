/**
 * Module 80819 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

80819: (exports, module, require) => {
    "use strict";
    require.register(module, {
      TrendLineRenderer: () => _,
      drawArrow: () => lineToolManager_u
    });
    var studyIds = require(50151),
      isLineTool = require(2624),
      name = require(25672),
      config = require(2383),
      lineToolManager_a = require(58221),
      lineToolManager_l = require(4539),
      lineToolManager_c = require(33350),
      handler = require(69558);

    function register(exports, module, require, studyIds, isLineTool) {
      module.save(), module.fillStyle = "#000000", module.beginPath(), module.arc(exports.lineToolManager_x * isLineTool, exports.lineToolManager_y * isLineTool, require * isLineTool, 0, 2 * Math.PI, !1), module.fill(), studyIds
        .strokeWidth && (module.lineWidth = studyIds.strokeWidth, module.stroke()), module.restore()
    }

    function lineToolManager_u(exports, module, require, studyIds, isLineTool, name = !1) {
      if (module.subtract(exports).length() < 1) return;
      const config = (0, lineToolManager_l.getArrowPoints)(exports, module, studyIds, name, !0).slice(0, 2);
      let lineToolManager_a = null;
      const {
        horizontalPixelRatio: lineToolManager_c,
        verticalPixelRatio: handler
      } = isLineTool;
      for (let exports = 0; exports < config.length; ++exports) {
        const module = config[exports][0],
          studyIds = config[exports][1];
        (null === lineToolManager_a || lineToolManager_a.subtract(module).length() > 1) && require.moveTo(module.lineToolManager_x * lineToolManager_c, module.lineToolManager_y * handler), require.lineTo(studyIds.lineToolManager_x * lineToolManager_c, studyIds.lineToolManager_y * handler), lineToolManager_a = studyIds
      }
    }
    class _ {
      constructor() {
        this._data = null, this._hittest = new config.HitTestResult(config.HitTarget.MovePoint)
      }
      setData(exports) {
        this._data = exports
      }
      setHitTest(exports) {
        this._hittest = exports
      }
      draw(exports, module) {
        const require = this._data;
        if (null === require) return;
        if ("points" in require && require.points.length < 2) return;
        const {
          horizontalPixelRatio: studyIds
        } = module;
        if (void 0 !== require.excludeBoundaries) {
          exports.save();
          for (const studyIds of require.excludeBoundaries)(0, lineToolManager_c.addExclusionArea)(exports, module, studyIds)
        }
        const {
          linestyle: isLineTool,
          lineCap: name = (isLineTool === handler.LINESTYLE_SOLID ? "round" : "butt")
        } = require;
        exports.lineCap = name, exports.lineJoin = "round", exports.strokeStyle = require.color, exports.lineWidth = Math.max(1, Math.floor(require
          .linewidth * studyIds)), (0, lineToolManager_a.setLineStyle)(exports, isLineTool);
        const config = require.points[0],
          lineToolManager_l = require.points[1];
        let register = [];
        exports.beginPath(), require.overlayLineEndings ? register = [config.clone(), lineToolManager_l.clone()] : this._drawEnds(exports, [config, lineToolManager_l], require.linewidth, module);
        const lineToolManager_u = this._extendAndClipLineSegment(config, lineToolManager_l, module);
        null !== lineToolManager_u && require.linewidth > 0 && (0, lineToolManager_a.addPixelPerfectLineToPath)(exports, lineToolManager_u[0].lineToolManager_x, lineToolManager_u[0].lineToolManager_y, lineToolManager_u[1].lineToolManager_x, lineToolManager_u[1].lineToolManager_y, module), require
          .overlayLineEndings && this._drawEnds(exports, register, require.linewidth, module), exports.stroke(), void 0 !== require.excludeBoundaries && exports
          .restore()
      }
      hitTest(exports, module) {
        const require = this._data;
        if (null === require) return null;
        if ("points" in require && require.points.length < 2) return null;
        const studyIds = (require.hitTestTolerance ?? (0, lineToolManager_l.interactionTolerance)().line) + require.linewidth / 2,
          name = require.points[0],
          config = require.points[1],
          lineToolManager_a = this._extendAndClipLineSegment(name, config, module);
        if (null !== lineToolManager_a) {
          if ((0, isLineTool.distanceToSegment)(lineToolManager_a[0], lineToolManager_a[1], exports).distance <= studyIds) return this._hittest
        }
        return null
      }
      _extendAndClipLineSegment(exports, module, require) {
        const isLineTool = (0, studyIds.ensureNotNull)(this._data);
        return (0, lineToolManager_l.extendAndClipLineSegment)(exports, module, require.mediaSize.width, require.mediaSize.height, isLineTool.extendleft, isLineTool
          .extendright)
      }
      _drawEnds(exports, module, require, isLineTool) {
        const config = module[0],
          lineToolManager_a = module[1],
          lineToolManager_l = (0, studyIds.ensureNotNull)(this._data);
        switch (lineToolManager_l.leftend) {
          case name.LineEnd.Arrow:
            lineToolManager_u(lineToolManager_a, config, exports, require, isLineTool);
            break;
          case name.LineEnd.Circle:
            register(config, exports, require, (0, studyIds.ensureDefined)(lineToolManager_l.endstyle), isLineTool.horizontalPixelRatio)
        }
        switch (lineToolManager_l.rightend) {
          case name.LineEnd.Arrow:
            lineToolManager_u(config, lineToolManager_a, exports, require, isLineTool);
            break;
          case name.LineEnd.Circle:
            register(lineToolManager_a, exports, require, (0, studyIds.ensureDefined)(lineToolManager_l.endstyle), isLineTool.horizontalPixelRatio)
        }
      }
    }