/**
 * Module 86228 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

86228: (exports, module, require) => {
    "use strict";
    require.register(module, {
      RectangleRenderer: () => _
    });
    var studyIds, isLineTool = require(50151),
      name = require(10555),
      config = require(6453),
      lineToolManager_a = require(2624),
      lineToolManager_l = require(52859),
      lineToolManager_c = require(2383),
      handler = require(18330),
      register = require(58221),
      lineToolManager_u = require(10307);
    ! function(exports) {
      exports[exports.HitTestTolerance = 3] = "HitTestTolerance"
    }(studyIds || (studyIds = {}));
    class _ extends lineToolManager_u.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = null, this._forceOverrideTransparency = Boolean(exports)
      }
      setData(exports) {
        this._data = exports
      }
      hitTest(exports, module) {
        if (null === this._data || this._data.points.length < 2 || this._data.disableInteractions) return null;
        const require = module.mediaSize.width,
          studyIds = (0, name.box)(...this._data.points),
          isLineTool = studyIds.min,
          config = studyIds.max,
          lineToolManager_l = new name.Point(config.lineToolManager_x, isLineTool.lineToolManager_y),
          handler = new name.Point(isLineTool.lineToolManager_x, config.lineToolManager_y),
          register = this._extendAndHitTestLineSegment(exports, isLineTool, lineToolManager_l, require);
        if (null !== register) return register;
        const lineToolManager_u = this._extendAndHitTestLineSegment(exports, handler, config, require);
        if (null !== lineToolManager_u) return lineToolManager_u;
        let _ = (0, lineToolManager_a.distanceToSegment)(lineToolManager_l, config, exports);
        if (_.distance <= 3) return new lineToolManager_c.HitTestResult(lineToolManager_c.HitTarget.MovePoint);
        if (_ = (0, lineToolManager_a.distanceToSegment)(isLineTool, handler, exports), _.distance <= 3) return new lineToolManager_c.HitTestResult(lineToolManager_c.HitTarget
          .MovePoint);
        if (this._data.middleLine) {
          const module = studyIds.min.add(studyIds.max).scaled(.5),
            isLineTool = this._extendAndHitTestLineSegment(exports, new name.Point(studyIds.min.lineToolManager_x, module.lineToolManager_y), new name.Point(studyIds.max.lineToolManager_x, module.lineToolManager_y), require);
          if (null !== isLineTool) return isLineTool
        }
        return this._data.fillBackground ? this._hitTestBackground(exports, isLineTool, config, require) : null
      }
      getColor() {
        const exports = (0, isLineTool.ensure)(this._data);
        return void 0 === exports.transparency ? exports.backcolor : (0, lineToolManager_l.generateColor)(exports.backcolor, exports.transparency, this
          ._forceOverrideTransparency)
      }
      visibleRectSegment(exports) {
        const module = this._data;
        if (null === module) return null;
        const require = (0, name.box)(...module.points),
          studyIds = require.min,
          isLineTool = require.max,
          config = exports.width,
          lineToolManager_a = exports.height,
          lineToolManager_l = module.extendLeft ? 0 : Math.max(studyIds.lineToolManager_x, 0),
          lineToolManager_c = module.extendRight ? config : Math.min(isLineTool.lineToolManager_x, config);
        if (lineToolManager_l > lineToolManager_c || lineToolManager_c <= 0 || lineToolManager_l >= config) return null;
        const handler = Math.max(studyIds.lineToolManager_y, 0),
          register = Math.min(isLineTool.lineToolManager_y, lineToolManager_a);
        return handler > register || register <= 0 || handler > lineToolManager_a ? null : [new name.Point(lineToolManager_l, handler), new name.Point(lineToolManager_c, register)]
      }
      _drawImpl(exports) {
        if (null === this._data || this._data.points.length < 2 || this._data.linewidth <= 0 && !this._data
          .fillBackground) return;
        const {
          horizontalPixelRatio: module,
          verticalPixelRatio: require,
          bitmapSize: studyIds
        } = exports, {
          extendLeft: isLineTool,
          extendRight: config,
          linewidth: lineToolManager_a,
          middleLine: lineToolManager_l
        } = this._data, lineToolManager_c = (0, name.box)(...this._data.points), lineToolManager_u = this._data.linewidth ? Math.max(1, Math.floor(this
            ._data.linewidth * module)) : 0, _ = this._data.fillBackground ? this.getColor() : void 0, lineToolManager_p = Math.max(1,
            Math.floor(module)), lineToolManager_m = isLineTool ? -lineToolManager_a : Math.round(lineToolManager_c.min.lineToolManager_x * module), lineToolManager_g = config ? studyIds.width + lineToolManager_a : Math.round(lineToolManager_c.max.lineToolManager_x * module), lineToolManager_f =
          Math.round(lineToolManager_c.min.lineToolManager_y * require), lineToolManager_y = Math.round(lineToolManager_c.max.lineToolManager_y * require);
        (0, register.fillRectWithBorder)(exports, lineToolManager_m, lineToolManager_f, lineToolManager_g, lineToolManager_y, lineToolManager_p, void 0 === _ ? void 0 : {
          color: _
        }, 0 === lineToolManager_u ? void 0 : {
          color: this._data.color,
          lineStyle: this._data.linestyle ?? handler.LineStyle.Solid,
          borderWidth: lineToolManager_u,
          borderMode: "center",
          rightToLeftStroke: isLineTool && !config
        }, lineToolManager_l ? {
          ...lineToolManager_l,
          lineWidth: Math.max(1, Math.floor(lineToolManager_l.lineWidth * require))
        } : void 0)
      }
      _extendAndHitTestLineSegment(exports, module, require, studyIds) {
        const isLineTool = this._extendAndClipLineSegment(module, require, studyIds);
        if (null !== isLineTool) {
          if ((0, lineToolManager_a.distanceToSegment)(isLineTool[0], isLineTool[1], exports).distance <= 3) return new lineToolManager_c.HitTestResult(lineToolManager_c.HitTarget
            .MovePoint)
        }
        return null
      }
      _extendAndClipLineSegment(exports, module, require) {
        const studyIds = (0, isLineTool.ensureNotNull)(this._data);
        if ((0, name.equalPoints)(exports, module) && !studyIds.extendLeft && !studyIds.extendRight) return null;
        const config = Math.min(exports.lineToolManager_x, module.lineToolManager_x),
          lineToolManager_a = Math.max(exports.lineToolManager_x, module.lineToolManager_x),
          lineToolManager_l = studyIds.extendLeft ? 0 : Math.max(config, 0),
          lineToolManager_c = studyIds.extendRight ? require : Math.min(lineToolManager_a, require);
        return lineToolManager_l > lineToolManager_c || lineToolManager_c <= 0 || lineToolManager_l >= require ? null : [new name.Point(lineToolManager_l, exports.lineToolManager_y), new name.Point(lineToolManager_c, module.lineToolManager_y)]
      }
      _hitTestBackground(exports, module, require, studyIds) {
        const isLineTool = this._extendAndClipLineSegment(module, require, studyIds);
        return null !== isLineTool && (0, config.pointInBox)(exports, (0, name.box)(isLineTool[0], isLineTool[1])) ? new lineToolManager_c.HitTestResult(this._data
          ?.backgroundHitTarget ?? lineToolManager_c.HitTarget.MovePointBackground) : null
      }
    }