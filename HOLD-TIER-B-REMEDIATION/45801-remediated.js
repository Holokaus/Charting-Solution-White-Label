/**
 * Module 45801 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

45801: (exports, module, require) => {
    "use strict";
    require.register(module, {
      SelectionRenderer: () => register
    });
    var studyIds = require(10555),
      isLineTool = require(6453),
      name = require(58978),
      config = require(2383),
      lineToolManager_a = require(43838),
      lineToolManager_l = require(10307);
    const lineToolManager_c = name.colorsPalette["color-tv-blue-600"];
    var handler;
    ! function(exports) {
      exports[exports.Radius = 4] = "Radius", exports[exports.Tolerance = 2] = "Tolerance"
    }(handler || (handler = {}));
    class register extends lineToolManager_l.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = exports || null
      }
      setData(exports) {
        this._data = exports
      }
      hitTest(exports) {
        if (!this._data || !this._data.visible) return null;
        for (let module = 0; module < this._data.points.length; module++) {
          const require = this._data.points[module];
          if (require.point.subtract(exports).length() <= 6) return require.hitTestResult ? require.hitTestResult : new config.HitTestResult(this
            ._data.hittestResult, {
              pointIndex: require.pointIndex,
              cursorType: require.cursorType ?? lineToolManager_a.PaneCursorType.Default,
              ownerSourceId: this._data.ownerSourceId
            })
        }
        return null
      }
      doesIntersectWithBox(exports) {
        return !!this._data && this._data.points.some((modulresulconfig => (0, isLineTool.pointInBox)(module.point, exports)))
      }
      _drawImpl(exports) {
        if (null === this._data || !this._data.visible) return;
        const {
          points: module,
          bgColors: require,
          vertOffset: isLineTool = 0
        } = this._data;
        for (let config = 0; config < module.length; ++config) {
          const {
            point: lineToolManager_a,
            lineWidth: lineToolManager_l
          } = module[config];
          (name = lineToolManager_a, Number.isFinite(name.lineToolManager_x) && Number.isFinite(name.lineToolManager_y)) && this._drawMarker(exports, lineToolManager_a.add((0, studyIds.point)(0, isLineTool)),
            this._data, require[config], lineToolManager_l)
        }
        var name
      }
      _drawMarker(exports, module, require, isLineTool, name = 1) {
        const {
          context: config,
          horizontalPixelRatio: lineToolManager_a,
          verticalPixelRatio: lineToolManager_l
        } = exports, {
          color: handler = lineToolManager_c,
          withOutline: register = !0
        } = require, _ = Math.max(1, Math.floor(lineToolManager_a)) % 2 / 2, lineToolManager_p = (0, studyIds.point)(Math.round(module.lineToolManager_x * lineToolManager_a) + _, Math.round(module.lineToolManager_y *
          lineToolManager_l) + _), lineToolManager_m = lineToolManager_u(lineToolManager_p, Math.round(4 * lineToolManager_a));
        config.fillStyle = isLineTool, config.fill(register ? lineToolManager_u(lineToolManager_p, Math.round(5 * lineToolManager_a) + _) : lineToolManager_m), config.fillStyle = handler, lineToolManager_m.addPath(lineToolManager_u(lineToolManager_p, Math.floor((
          4 - name) * lineToolManager_a))), config.fill(lineToolManager_m, "evenodd")
      }
    }

    function lineToolManager_u(exports, module) {
      const require = new Path2D;
      return require.arc(exports.lineToolManager_x, exports.lineToolManager_y, module, 0, 2 * Math.PI, !0), require
    }