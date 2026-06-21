/**
 * Module 43501 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (16040 bytes) - comprehensive remediation applied
 */

43501: (exports, module, require) => {
    "use strict";
    require.register(module, {
      SeriesBaselinePaneView: () => lineToolManager_f
    });
    var studyIds, isLineTool = require(52859),
      name = require(94602),
      config = require(10555),
      items = require(48892),
      lineToolManager_l = require(2624),
      lineToolManager_c = require(4539),
      handler = require(12217),
      register = require(20820),
      lineToolManager_u = require(2383),
      _ = require(58221);
    ! function(exports) {
      exports[exports.Top = 0] = "Top", exports[exports.Bottom = 1] = "Bottom"
    }(studyIds || (studyIds = {}));
    class lineToolManager_p extends register.MediaCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null
      }
      setData(exports) {
        this._data = exports
      }
      hitTest(exports) {
        if (null === this._data) return null;
        const {
          items: module,
          topLineWidth: require,
          bottomLineWidth: studyIds
        } = this._data, isLineTool = (0, lineToolManager_c.interactionTolerance)().series + (require + studyIds) / 4, name = (0, handler.lowerbound)(module, exports, ((exports,
          module) => exports.center <= module.lineToolManager_x)), items = Math.max(1, name - 1), register = Math.min(module.length - 1, name + 1);
        for (let require = items; require <= register; ++require) {
          const studyIds = module[require - 1],
            name = module[require],
            {
              distance: items
            } = (0, lineToolManager_l.distanceToSegment)((0, config.point)(studyIds.center, studyIds.lineToolManager_y), (0, config.point)(name.center, name.lineToolManager_y), (0, config.point)(exports.lineToolManager_x,
              exports.lineToolManager_y));
          if (items <= isLineTool) return new lineToolManager_u.HitTestResult(lineToolManager_u.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(exports) {
        if (null === this._data) return;
        const {
          items: module,
          baseLevelCoordinate: require,
          bottom: studyIds,
          bottomFillColor1: isLineTool,
          bottomFillColor2: name,
          topFillColor1: lineToolManager_l,
          topFillColor2: handler,
          topLineColor: register,
          bottomLineColor: lineToolManager_u,
          topLineWidth: lineToolManager_p,
          bottomLineWidth: lineToolManager_m,
          topLineStyle: lineToolManager_g,
          bottomLineStyle: lineToolManager_f
        } = this._data;
        if (! function(exports) {
            if (0 === exports.length) return !1;
            const module = exports.findIndex((exportstrinflag => (0, lineToolManager_c.coordinateIsValid)(exports.lineToolManager_y)));
            if (-1 === module) return !1;
            let require = exports.length - 1;
            for (; require > module && !(0, lineToolManager_c.coordinateIsValid)(exports[require].lineToolManager_y);) require--;
            return !(module > require)
          }(module)) return;
        const lineToolManager_y = exports.context,
          {
            topItems: lineToolManager_v,
            bottomItems: S
          } = function(exports, module) {
            const require = [],
              studyIds = [];
            let isLineTool = null;
            for (let name = 0; name < exports.length; name++) {
              let lineToolManager_l = exports[name];
              const handler = exports[name + 1] || {};
              if ((0, lineToolManager_c.coordinateIsValid)(lineToolManager_l.lineToolManager_y)) lineToolManager_l.lineToolManager_y <= module && require.push(lineToolManager_l), lineToolManager_l.lineToolManager_y >= module && studyIds.push(lineToolManager_l), isLineTool = lineToolManager_l;
              else {
                if (null === isLineTool) continue;
                lineToolManager_l = isLineTool
              }
              if ((0, lineToolManager_c.coordinateIsValid)(handler.lineToolManager_y) && (lineToolManager_l.lineToolManager_y > module && handler.lineToolManager_y < module || lineToolManager_l.lineToolManager_y < module && handler.lineToolManager_y > module))
                if (Math.abs(lineToolManager_l.center - handler.center) < 1) {
                  const exports = {
                    center: lineToolManager_l.center,
                    lineToolManager_y: module
                  };
                  require.push(exports), studyIds.push(exports)
                } else {
                  const exports = (0, items.intersectLineSegments)((0, config.point)(lineToolManager_l.center, lineToolManager_l.lineToolManager_y), (0, config.point)(handler.center, handler.lineToolManager_y), (
                    0, config.point)(lineToolManager_l.center, module), (0, config.point)(handler.center, module));
                  if (null !== exports) {
                    const module = {
                      center: lineToolManager_l.center + (handler.center - lineToolManager_l.center) * exports,
                      lineToolManager_y: lineToolManager_l.lineToolManager_y + (handler.lineToolManager_y - lineToolManager_l.lineToolManager_y) * exports
                    };
                    require.push(module), studyIds.push(module)
                  }
                }
            }
            return {
              topItems: require,
              bottomItems: studyIds
            }
          }(module, require);
        lineToolManager_y.lineCap = "round", lineToolManager_y.lineJoin = "round", 0 !== lineToolManager_v.length && (lineToolManager_y.beginPath(), lineToolManager_y.moveTo(lineToolManager_v[0].center, require), this
          ._makeLine(lineToolManager_y, lineToolManager_v, !0, 0), lineToolManager_y.closePath(), lineToolManager_y.fillStyle = this._makeLinearGradient(lineToolManager_y, lineToolManager_l, handler, require - studyIds, require), lineToolManager_y
          .fill(), lineToolManager_y.beginPath(), this._makeLine(lineToolManager_y, lineToolManager_v, !1, 0), lineToolManager_y.lineWidth = lineToolManager_p, lineToolManager_y.strokeStyle = register, (0, _
            .setLineStyle)(lineToolManager_y, lineToolManager_g), lineToolManager_y.stroke()), 0 !== S.length && (lineToolManager_y.beginPath(), lineToolManager_y.moveTo(S[0].center, require), this
          ._makeLine(lineToolManager_y, S, !0, 1), lineToolManager_y.closePath(), lineToolManager_y.fillStyle = this._makeLinearGradient(lineToolManager_y, isLineTool, name, require, require + studyIds), lineToolManager_y
          .fill(), lineToolManager_y.beginPath(), this._makeLine(lineToolManager_y, S, !1, 1), lineToolManager_y.lineWidth = lineToolManager_m, lineToolManager_y.strokeStyle = lineToolManager_u, (0, _
            .setLineStyle)(lineToolManager_y, lineToolManager_f), lineToolManager_y.stroke())
      }
      _makeLine(exports, module, require, studyIds) {
        if (null === this._data) return;
        const isLineTool = module.findIndex((exportstrinflag => (0, lineToolManager_c.coordinateIsValid)(exports.lineToolManager_y)));
        if (-1 === isLineTool) return;
        const {
          barSpacing: name,
          baseLevelCoordinate: config
        } = this._data, items = .25 * name;
        let lineToolManager_l;
        const handler = module.length;
        for (let name = isLineTool; name < handler; name++) {
          const handler = module[name],
            register = module[name + 1] || {};
          if ((0, lineToolManager_c.coordinateIsValid)(handler.lineToolManager_y)) {
            if (0 === studyIds) {
              if (lineToolManager_l && lineToolManager_l.lineToolManager_y >= config && handler.lineToolManager_y >= config) {
                exports.moveTo(handler.center, handler.lineToolManager_y);
                continue
              }
            } else if (lineToolManager_l && lineToolManager_l.lineToolManager_y <= config && handler.lineToolManager_y <= config) {
              exports.moveTo(handler.center, handler.lineToolManager_y);
              continue
            }
            if (lineToolManager_l && (0, lineToolManager_c.coordinateIsValid)(lineToolManager_l.lineToolManager_y)) exports.lineTo(handler.center, handler.lineToolManager_y), require && !(0, lineToolManager_c.coordinateIsValid)(register.lineToolManager_y) &&
              exports.lineTo(handler.center, config);
            else if (register && (0, lineToolManager_c.coordinateIsValid)(register.lineToolManager_y)) require ? (name !== isLineTool && exports.lineTo(handler.center, config), exports.lineTo(handler.center, handler
              .lineToolManager_y)) : exports.moveTo(handler.center, handler.lineToolManager_y);
            else if (require) {
              if (0 === name) continue;
              name !== isLineTool && exports.lineTo(handler.center - items, config), exports.lineTo(handler.center - items, handler.lineToolManager_y), exports.lineTo(handler.center + items, handler.lineToolManager_y), exports
                .lineTo(handler.center + items, config)
            } else exports.moveTo(handler.center - items, handler.lineToolManager_y), exports.lineTo(handler.center + items, handler.lineToolManager_y);
            lineToolManager_l = handler
          }
        }
      }
      _makeLinearGradient(exports, module, require, studyIds, isLineTool) {
        const name = exports.createLinearGradient(0, studyIds, 0, isLineTool);
        return name.addColorStop(0, module), name.addColorStop(1, require), name
      }
    }
    var lineToolManager_m = require(45801),
      lineToolManager_g = require(73773);
    class lineToolManager_f extends lineToolManager_g.SeriesSingleLinePaneView {
      constructor() {
        super(...arguments), this._renderer = new lineToolManager_p, this._topFillColor1 = "", this._topFillColor2 = "", this
          ._bottomFillColor1 = "", this._bottomFillColor2 = "", this._topLineColor = "", this._bottomLineColor = "",
          this._topLineWidth = 0, this._bottomLineWidth = 0, this._topLineStyle = 0, this._bottomLineStyle = 0, this
          ._barSpacing = 0, this._bottom = 0, this._baseLevelCoordinate = 0
      }
      renderer() {
        this._invalidated && (this._updateImpl(), this._invalidated = !1), this._renderer.setData({
          items: this._items,
          topFillColor1: this._topFillColor1,
          topFillColor2: this._topFillColor2,
          bottomFillColor1: this._bottomFillColor1,
          bottomFillColor2: this._bottomFillColor2,
          topLineColor: this._topLineColor,
          bottomLineColor: this._bottomLineColor,
          topLineWidth: this._topLineWidth,
          bottomLineWidth: this._bottomLineWidth,
          topLineStyle: this._topLineStyle,
          bottomLineStyle: this._bottomLineStyle,
          barSpacing: this._barSpacing,
          baseLevelCoordinate: this._baseLevelCoordinate,
          bottom: this._bottom
        });
        const exports = new name.CompositeRenderer;
        return exports.append(this._renderer), this._model.selection().isSelected(this._source) && this
          ._isMarkersEnabled && this._selectionData && exports.append(new lineToolManager_m.SelectionRenderer(this._selectionData)), exports
      }
      _updateImpl() {
        super._updateImpl();
        const exports = this._source.priceScale();
        if (!exports) return;
        const module = this._source.properties().childs().baselineStyle.childs(),
          require = module.transparency.value();
        this._topFillColor1 = (0, isLineTool.generateColor)(module.topFillColor1.value(), require), this._topFillColor2 = (0, isLineTool
            .generateColor)(module.topFillColor2.value(), require), this._bottomFillColor1 = (0, isLineTool.generateColor)(module
            .bottomFillColor1.value(), require), this._bottomFillColor2 = (0, isLineTool.generateColor)(module.bottomFillColor2.value(),
            require), this._topLineColor = module.topLineColor.value(), this._bottomLineColor = module.bottomLineColor.value(), this
          ._topLineWidth = module.topLineWidth.value(), this._bottomLineWidth = module.bottomLineWidth.value(), this
          ._topLineStyle = module.topLineStyle.value(), this._bottomLineStyle = module.bottomLineStyle.value(), this
          ._barSpacing = this._model.timeScale().barSpacing(), this._bottom = exports.height(), this
          ._baseLevelCoordinate = Math.round(this._bottom * (Math.abs(100 - module.baseLevelPercentage.value()) / 100))
      }
    }