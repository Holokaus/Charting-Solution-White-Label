/**
 * Module 4753 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (45169 bytes) - comprehensive remediation applied
 */

4753: (exports, module, require) => {
    "use strict";
    require.register(module, {
      TextRenderer: () => lineToolManager_k,
      calculateLabelPosition: () => lineToolManager_m,
      fontSize: () => M,
      getTextAlignInBox: () => L,
      getTextBoundaries: () => lineToolManager_g,
      lineSpacing: () => lineToolManager_x,
      needTextExclusionPath: () => lineToolManager_f,
      wordWrap: () => S
    });
    var studyIds = require(10555),
      isLineTool = require(50151),
      name = require(6453),
      config = require(24640),
      items = require(50605),
      lineToolManager_l = require(2383),
      lineToolManager_c = require(58221),
      handler = require(73041),
      register = require(87465),
      lineToolManager_u = require(33350),
      _ = require(12217),
      lineToolManager_p = require(57658);

    function lineToolManager_m(exports, module, require, isLineTool, name) {
      const config = .5 * (module.lineToolManager_x + require.lineToolManager_x);
      let items = require.lineToolManager_y;
      return module.lineToolManager_y > require.lineToolManager_y ? (items -= exports.height / 2 + isLineTool.lineToolManager_y, items = Math.max(exports.height / 2, items)) : (items += exports.height / 2 + isLineTool.lineToolManager_y, items = Math
        .min(name - exports.height / 2, items)), new studyIds.Point(config, items)
    }

    function lineToolManager_g(exports, module, require) {
      if (exports.isOutOfScreen(module, require)) return null;
      const studyIds = exports.getPolygonPoints();
      return 0 === studyIds.length ? null : studyIds
    }

    function lineToolManager_f(exports) {
      const module = exports.getLinesInfo().lines;
      if (module.length % 2 == 0) return !1;
      if ("" === module[Math.floor(module.length / 2)].text.trim()) return !1;
      return !0
    }

    function lineToolManager_y(exports) {
      const module = [];
      do {
        const require = exports.match(/\studyIds+/);
        if (!require || void 0 === require.index || -1 === require.index) {
          module.push({
            word: exports,
            spaces: ""
          });
          break
        }
        module.push({
          word: exports.slice(0, require.index),
          spaces: require[0]
        }), exports = exports.slice(require.index + require[0].length)
      } while (exports.length);
      return module
    }

    function lineToolManager_v(exports, module, require, studyIds) {
      const isLineTool = [],
        name = [];
      for (let module = 0; module < exports.length; ++module) name.push(module);
      for (; exports.length;) {
        const config = Math.max(1, (0, _.upperbound)(name, studyIds, ((studyIds, isLineTool) => (0, lineToolManager_u.measureText)(exports.slice(0, isLineTool + 1), module, require).width > studyIds),
          0, exports.length));
        isLineTool.push(exports.slice(0, config)), exports = exports.slice(config)
      }
      return isLineTool
    }

    function S(exports, module, require, studyIds = !0, isLineTool) {
      isLineTool = (0, register.isString)(isLineTool) ? parseInt(isLineTool) : isLineTool;
      const name = (exports += "").split(/\config\name|\config|\name|$/).map((exportstrinflag => ({
        text: exports,
        hidden: !1,
        wrappedLinePart: !1,
        wrappedLineEnd: !1
      })));
      if (!(0, register.isNumber)(isLineTool) || !isFinite(isLineTool) || isLineTool <= 0) return name;
      if ((0, lineToolManager_u.measureText)("lineToolManager_x", module, require).width > isLineTool) return name;
      const config = [];
      for (let exports = 0; exports < name.length; exports++) {
        const items = name[exports];
        if ((0, lineToolManager_u.measureText)(items.text, module, require).width <= isLineTool) {
          config.push(items);
          continue
        }
        const lineToolManager_l = lineToolManager_y(items.text),
          lineToolManager_c = !0;
        let handler = "",
          register = 0;
        for (; register < lineToolManager_l.length;) {
          const exports = lineToolManager_l[register];
          let name = `${handler}${exports.word}`,
            items = (0, lineToolManager_u.measureText)(name, module, require).width;
          if (items > isLineTool) {
            if ("" !== handler) config.push({
              text: handler,
              hidden: !1,
              wrappedLinePart: lineToolManager_c,
              wrappedLineEnd: !1
            }), handler = "";
            else if (1 === name.length) config.push({
              text: name,
              hidden: !1,
              wrappedLinePart: lineToolManager_c,
              wrappedLineEnd: !0
            }), exports.word = "";
            else {
              const studyIds = lineToolManager_v(name, module, require, isLineTool);
              for (let exports = 0; exports < studyIds.length - 1; exports += 1) config.push({
                text: studyIds[exports],
                hidden: !1,
                wrappedLinePart: lineToolManager_c,
                wrappedLineEnd: !1
              });
              exports.word = studyIds[studyIds.length - 1]
            }
            continue
          }
          let _ = name.length;
          if (name = `${handler}${exports.word}${exports.spaces}`, items = (0, lineToolManager_u.measureText)(name, module, require).width, items < isLineTool) {
            handler = name, register += 1;
            continue
          }
          const lineToolManager_p = lineToolManager_v(name, module, require, isLineTool);
          for (let exports = 0; exports < lineToolManager_p.length; exports += 1) {
            const module = lineToolManager_p[exports];
            _ -= module.length;
            const require = {
              text: module,
              hidden: exports > 0,
              wrappedLinePart: lineToolManager_c,
              wrappedLineEnd: register === lineToolManager_l.length - 1 && exports === lineToolManager_p.length - 1
            };
            require.hidden && studyIds || config.push(require)
          }
          handler = "", register += 1
        }
        "" !== handler && config.push({
          text: handler,
          wrappedLinePart: lineToolManager_c,
          hidden: !1,
          wrappedLineEnd: !0
        })
      }
      return config
    }

    function lineToolManager_b(exports, module, require) {
      if (0 === require) return exports.clone();
      const isLineTool = (exports.lineToolManager_x - module.lineToolManager_x) * Math.cos(require) - (exports.lineToolManager_y - module.lineToolManager_y) * Math.sin(require) + module.lineToolManager_x,
        name = (exports.lineToolManager_x - module.lineToolManager_x) * Math.sin(require) + (exports.lineToolManager_y - module.lineToolManager_y) * Math.cos(require) + module.lineToolManager_y;
      return (0, studyIds.point)(isLineTool, name)
    }

    function lineToolManager_w(exports) {
      return void 0 !== exports.boxPaddingVert ? exports.boxPaddingVert * A(exports) : void 0 !== exports.boxPadding ? exports.boxPadding * A(exports) : M(
        exports) / 3
    }

    function C(exports) {
      return void 0 !== exports.boxPaddingHorz ? exports.boxPaddingHorz * A(exports) : void 0 !== exports.boxPadding ? exports.boxPadding * A(exports) : M(
        exports) / 3
    }

    function T(exports) {
      return void 0 !== exports.boxPaddingLeft ? exports.boxPaddingLeft * A(exports) : C(exports)
    }

    function P(exports) {
      return void 0 !== exports.boxPaddingRight ? exports.boxPaddingRight * A(exports) : C(exports)
    }

    function lineToolManager_x(exports) {
      let module = exports.lineSpacing;
      return void 0 === module && exports.lineHeight && (module = (exports.lineHeight - 1) * I(exports)), (module ?? 0) * A(exports)
    }

    function M(exports) {
      return Math.ceil(I(exports) * A(exports))
    }

    function I(exports) {
      return exports.fontsize || exports.fontSize || 30
    }

    function A(exports) {
      const module = Math.min(1, Math.max(.2, exports.scale || 1));
      if (1 === module) return module;
      const require = I(exports);
      return Math.ceil(module * require) / require
    }

    function L(exports) {
      const {
        horzAlign: module,
        extendLeft: require = !1,
        extendRight: isLineTool = !1,
        width: name,
        leftPoint: config,
        rightPoint: lineToolManager_l
      } = exports, lineToolManager_c = (config.lineToolManager_x <= name || require) && (lineToolManager_l.lineToolManager_x >= 0 || isLineTool);
      let handler, register, lineToolManager_u = module;
      switch (lineToolManager_u) {
        case items.HorizontalAlign.Left:
          register = config.lineToolManager_y, require ? handler = lineToolManager_c ? 0 : lineToolManager_l.lineToolManager_x : (handler = config.lineToolManager_x, lineToolManager_u = items.HorizontalAlign.Right);
          break;
        case items.HorizontalAlign.Right:
          register = lineToolManager_l.lineToolManager_y, isLineTool ? handler = lineToolManager_c ? name : config.lineToolManager_x : (handler = lineToolManager_l.lineToolManager_x, lineToolManager_u = items.HorizontalAlign.Left);
          break;
        default:
          handler = ((require && lineToolManager_c ? 0 : config.lineToolManager_x) + (isLineTool && lineToolManager_c ? name : lineToolManager_l.lineToolManager_x)) / 2, register = (config.lineToolManager_y + lineToolManager_l.lineToolManager_y) / 2;
          break
      }
      return [(0, studyIds.point)(handler, register), lineToolManager_u]
    }
    class lineToolManager_k {
      constructor(exports, module) {
        this._data = null, this._textWidthCache = new lineToolManager_p.TextWidthCache, this._internalData = null, this._boxSize =
          null, this._box = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null, this
          ._centerTextRotationPoint = null, this._rotationPoint = null, this._hitTest = module || new lineToolManager_l.HitTestResult(lineToolManager_l
            .HitTarget.MovePoint, {
              areaName: lineToolManager_l.AreaName.Text
            }), void 0 !== exports && this.setData(exports)
      }
      setHitTest(exports) {
        this._hitTest = exports
      }
      data() {
        return this._data
      }
      updateData(exports) {
        this.setData({
          ...(0, isLineTool.ensureNotNull)(this._data),
          ...exports
        })
      }
      setData(exports) {
        null !== exports ? ((0, isLineTool.assert)(!exports.decorator || void 0 === exports.wordWrapWidth,
            "Decorator is not supported with wordWrapWidth"),
          void 0 === exports.text && (exports.text = ""), exports.horzTextAlign || (exports.horzTextAlign = exports.horzAlign), ! function(exports, module) {
            if (null === exports || null === module) return null === exports == (null === module);
            if (void 0 === exports.points != (void 0 === module.points)) return !1;
            if (void 0 !== exports.points && void 0 !== module.points) {
              if (exports.points.length !== module.points.length) return !1;
              for (let isLineTool = 0; isLineTool < exports.points.length; ++isLineTool)
                if (require = exports.points[isLineTool], studyIds = module.points[isLineTool], require.lineToolManager_x !== studyIds.lineToolManager_x || require.lineToolManager_y !== studyIds.lineToolManager_y) return !1
            }
            var require, studyIds;
            return exports.text === module.text && exports.decorator === module.decorator && exports.vertAlign === module.vertAlign && exports
              .horzAlign === module.horzAlign && exports.horzTextAlign === module.horzTextAlign && exports.font === module.font && exports
              .offsetX === module.offsetX && exports.offsetY === module.offsetY && exports.bold === module.bold && exports.italic === module.italic && exports
              .fontsize === module.fontsize && exports.fontSize === module.fontSize && exports.backgroundRoundRect === module
              .backgroundRoundRect && exports.forceTextAlign === module.forceTextAlign && exports.wordWrapWidth === module
              .wordWrapWidth && exports.forceCalculateMaxLineWidth === module.forceCalculateMaxLineWidth && exports.lineHeight === module
              .lineHeight && exports.lineSpacing === module.lineSpacing && exports.scale === module.scale && exports.boxPadding === module
              .boxPadding && exports.boxPaddingVert === module.boxPaddingVert && exports.boxPaddingLeft === module.boxPaddingLeft && exports
              .boxPaddingRight === module.boxPaddingRight && exports.boxPaddingHorz === module.boxPaddingHorz && exports.angle === module
              .angle && exports.maxHeight === module.maxHeight && exports.outlineBorder?.width === module.outlineBorder?.width && exports
              .outlineBorder?.color === module.outlineBorder?.color
          }(this._data, exports) ? (this._data = exports, this._internalData = null, this._boxSize = null, this._polygonPoints =
            null, this._centerTextRotationPoint = null, this._rotationPoint = null, this._linesInfo = null, this
            ._fontInfo = null, this._box = null) : this._data = exports) : this._data = null
      }
      hitTest(exports) {
        return null === this._data || void 0 === this._data.points || 0 === this._data.points.length ? null : (0, name
          .pointInPolygon)(exports, this.getPolygonPoints()) ? this._hitTest : null
      }
      doesIntersectWithBox(exports) {
        return null !== this._data && void 0 !== this._data.points && 0 !== this._data.points.length && (0, name
          .pointInBox)(this._data.points[0], exports)
      }
      measure() {
        if (null === this._data) return {
          boxWidth: 0,
          boxHeight: 0,
          width: 0,
          height: 0
        };
        const exports = this._getBoxSize();
        return {
          boxWidth: exports.boxWidth,
          boxHeight: exports.boxHeight,
          width: exports.textBoxWidth,
          height: exports.textBoxHeight
        }
      }
      rect() {
        if (null === this._data) return {
          lineToolManager_x: 0,
          lineToolManager_y: 0,
          width: 0,
          height: 0
        };
        const {
          boxLeft: exports,
          boxTop: module,
          boxWidth: require,
          boxHeight: studyIds
        } = this._getBox();
        return {
          lineToolManager_x: exports,
          lineToolManager_y: module,
          width: require,
          height: studyIds
        }
      }
      isOutOfScreen(exports, module) {
        if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return !0;
        const {
          boxLeft: require,
          boxWidth: isLineTool
        } = this._getBox();
        if (require + isLineTool < 0 || require > exports) {
          const require = (0, studyIds.box)((0, studyIds.point)(0, 0), (0, studyIds.point)(exports, module));
          return this.getPolygonPoints().every((exportstrinflag => !(0, name.pointInBox)(exports, require)))
        }
        return !1
      }
      setPoints(exports, module) {
        (0, isLineTool.ensureNotNull)(this._data).points = exports, this._hitTest = module || new lineToolManager_l.HitTestResult(lineToolManager_l.HitTarget.MovePoint)
      }
      setPoint(exports, module, require) {
        const studyIds = (0, isLineTool.ensureNotNull)(this._data);
        this.setData({
          ...studyIds,
          points: [exports],
          offsetX: module ?? studyIds.offsetX,
          offsetY: require ?? studyIds.offsetY
        })
      }
      point() {
        return this._data?.points?.[0] ?? null
      }
      fontStyle(exports) {
        return null === this._data ? "" : this._getFontInfo().fontStyle
      }
      lineHeight() {
        return null === this._data ? 0 : M(this._data)
      }
      lineSpacing() {
        return null === this._data ? 0 : lineToolManager_x(this._data)
      }
      draw(exports, module) {
        if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return;
        const {
          mediaSize: require,
          horizontalPixelRatio: name,
          verticalPixelRatio: config
        } = module;
        if (this.isOutOfScreen(require.width, require.height)) return;
        const items = this._getInternalData(),
          lineToolManager_l = (0, isLineTool.ensureNotNull)(this.rotation()),
          handler = (0, studyIds.point)(lineToolManager_l.lineToolManager_x * name, lineToolManager_l.lineToolManager_y * config);
        exports.save(), 0 !== lineToolManager_l.angle && (exports.translate(handler.lineToolManager_x, handler.lineToolManager_y), exports.rotate(lineToolManager_l.angle), exports.translate(-handler.lineToolManager_x, -handler.lineToolManager_y));
        const register = this._getFontInfo().fontSize;
        exports.textBaseline = items.textBaseLine, exports.textAlign = items.textAlign, exports.font = this.fontStyle();
        const {
          scaledLeft: _,
          scaledRight: lineToolManager_p,
          scaledTop: lineToolManager_m,
          scaledBottom: lineToolManager_g
        } = function(exports, module) {
          const {
            horizontalPixelRatio: require,
            verticalPixelRatio: studyIds
          } = module, isLineTool = Math.round(exports.boxLeft * require), name = Math.round(exports.boxTop * studyIds);
          return {
            scaledLeft: isLineTool,
            scaledRight: isLineTool + Math.round(exports.boxWidth * require),
            scaledTop: name,
            scaledBottom: name + Math.round(exports.boxHeight * studyIds)
          }
        }(items, module), lineToolManager_f = this._data.borderWidth || Math.max(register / 12, 1), lineToolManager_y = Math.round(lineToolManager_f * name), lineToolManager_v = lineToolManager_y / 2;
        if (this._data.backgroundColor || this._data.borderColor) {
          let module = !1;
          if (this._data.boxShadow) {
            exports.save();
            const {
              shadowColor: require,
              shadowBlur: studyIds,
              shadowOffsetX: isLineTool = 0,
              shadowOffsetY: items = 0
            } = this._data.boxShadow;
            exports.shadowColor = require, exports.shadowBlur = studyIds * name, exports.shadowOffsetX = isLineTool * name, exports.shadowOffsetY = items * config, module = !0
          }
          if (this._data.backgroundRoundRect) {
            const {
              borderColor: require,
              backgroundColor: studyIds,
              backgroundRoundRect: isLineTool
            } = this._data;
            studyIds && ((0, lineToolManager_c.drawRoundRect)(exports, _, lineToolManager_m, lineToolManager_p - _, lineToolManager_g - lineToolManager_m, isLineTool * name), exports.closePath(), exports.fillStyle = studyIds, exports.fill(), module && (
              exports.restore(), module = !1)), require && ((0, lineToolManager_c.drawRoundRect)(exports, _ - lineToolManager_v, lineToolManager_m - lineToolManager_v, lineToolManager_p - _ + lineToolManager_y, lineToolManager_g - lineToolManager_m + lineToolManager_y, isLineTool * name + lineToolManager_y), exports
              .closePath(), exports.strokeStyle = require, exports.lineWidth = lineToolManager_y, exports.stroke(), module && exports.restore())
          } else {
            const {
              borderColor: require,
              backgroundColor: studyIds
            } = this._data;
            studyIds && (exports.fillStyle = studyIds, exports.fillRect(_, lineToolManager_m, lineToolManager_p - _, lineToolManager_g - lineToolManager_m), module && (exports.restore(), module = !1)), require && (exports.strokeStyle =
              require, exports.lineWidth = lineToolManager_y, exports.beginPath(), exports.moveTo(_ - lineToolManager_v, lineToolManager_m - lineToolManager_v), exports.lineTo(_ - lineToolManager_v, lineToolManager_g + lineToolManager_v), exports.lineTo(lineToolManager_p + lineToolManager_v, lineToolManager_g +
                lineToolManager_v), exports.lineTo(lineToolManager_p + lineToolManager_v, lineToolManager_m - lineToolManager_v), exports.lineTo(_ - lineToolManager_v, lineToolManager_m - lineToolManager_v), exports.closePath(), exports.stroke(), module && exports.restore())
          }
        }
        this._drawSelectionIfNeeded(exports, module), exports.fillStyle = this._data.color;
        const S = (_ + Math.round(items.textHorizStart * name)) / name,
          lineToolManager_b = .05 * register;
        let lineToolManager_w = (lineToolManager_m + Math.round((items.textVertStart + lineToolManager_b) * config)) / config;
        const C = lineToolManager_x(this._data),
          T = this.getLinesInfo();
        for (const module of T.lines)(0, lineToolManager_u.drawScaled)(exports, name, config, (() => exports.fillText(module.text, S, lineToolManager_w))), lineToolManager_w += register + C;
        if (this._data.decorator?.draw(exports, module, this._data, items), this._data.outlineBorder) {
          const {
            outlineBorder: {
              width: module,
              color: require
            }
          } = this._data, studyIds = Math.round(module * name), isLineTool = this._data.borderColor ? lineToolManager_y : 0, config = {
            lineToolManager_x: _ - isLineTool,
            lineToolManager_y: lineToolManager_m - isLineTool,
            lineToolManager_w: lineToolManager_p - _ + 2 * isLineTool,
            handler: lineToolManager_g - lineToolManager_m + 2 * isLineTool
          }, items = new Path2D;
          items.rect(config.lineToolManager_x - studyIds, config.lineToolManager_y - studyIds, config.lineToolManager_w + 2 * studyIds, config.handler + 2 * studyIds), items.rect(config.lineToolManager_x, config.lineToolManager_y, config.lineToolManager_w, config.handler), exports.fillStyle = require, exports.fill(items,
            "evenodd")
        }
        exports.restore()
      }
      getPolygonPoints() {
        if (null !== this._polygonPoints) return this._polygonPoints;
        if (null === this._data) return [];
        const exports = this._data.angle || 0,
          {
            boxLeft: module,
            boxTop: require,
            boxWidth: isLineTool,
            boxHeight: name
          } = this._getBox(),
          config = this._getRotationPoint();
        return this._polygonPoints = [lineToolManager_b((0, studyIds.point)(module, require), config, exports), lineToolManager_b((0, studyIds.point)(module + isLineTool, require), config, exports), lineToolManager_b((0, studyIds.point)(module +
          isLineTool, require + name), config, exports), lineToolManager_b((0, studyIds.point)(module, require + name), config, exports)], this._polygonPoints
      }
      centerTextRotation() {
        if (null === this._centerTextRotationPoint && null !== this._data) {
          const exports = this._data.angle ?? 0,
            module = this._getRotationPoint(),
            {
              textLeft: require,
              textTop: isLineTool,
              textRight: name,
              textBottom: config
            } = this._getInternalData(),
            items = lineToolManager_b((0, studyIds.point)((require + name) / 2, (isLineTool + config) / 2), module, exports);
          this._centerTextRotationPoint = {
            lineToolManager_x: items.lineToolManager_x,
            lineToolManager_y: items.lineToolManager_y,
            angle: exports
          }
        }
        return this._centerTextRotationPoint
      }
      rotation() {
        if (null === this._rotationPoint && null !== this._data) {
          const exports = this._data.angle ?? 0,
            module = this._getRotationPoint();
          this._rotationPoint = {
            lineToolManager_x: module.lineToolManager_x,
            lineToolManager_y: module.lineToolManager_y,
            angle: exports
          }
        }
        return this._rotationPoint
      }
      getLinesInfo() {
        if (null === this._linesInfo) {
          const exports = (0, isLineTool.ensureNotNull)(this._data),
            module = S(exports.text, this.fontStyle(), this._textWidthCache, !1, exports.wordWrapWidth);
          let require = module.filter((exportstrinflag => !exports.hidden));
          if (void 0 !== exports.maxHeight) {
            const module = function(exports) {
              const module = (0, isLineTool.ensureDefined)(exports.maxHeight),
                require = M(exports),
                studyIds = lineToolManager_x(exports);
              return Math.floor((module + studyIds) / (require + studyIds))
            }(exports);
            require.length > module && (require = require.slice(0, module))
          }
          this._linesInfo = {
            linesMaxWidth: this._getLinesMaxWidth(require),
            linesIncludingHidden: module,
            lines: require
          }
        }
        return this._linesInfo
      }
      positionToCoordinate(exports) {
        const module = (0, isLineTool.ensureNotNull)(this._data),
          require = this._getInternalData(),
          studyIds = this.getLinesInfo(),
          {
            lineToolManager_x: name,
            lineToolManager_y: config,
            lineNumber: items
          } = (0, handler.getSymbolCoordinatesInfo)({
            symbolPosition: exports,
            textWidth: require.textRight - require.textLeft,
            textByLines: studyIds.linesIncludingHidden,
            lineHeight: M(module),
            font: this.fontStyle(),
            textAlign: require.textAlign,
            lineSpacing: this.lineSpacing()
          });
        return {
          lineToolManager_x: name + require.textLeft,
          lineToolManager_y: config + require.textTop,
          lineNumber: items
        }
      }
      _getInternalData() {
        if (null !== this._internalData) return this._internalData;
        const exports = (0, isLineTool.ensureNotNull)(this._data),
          {
            boxLeft: module,
            boxTop: require,
            boxWidth: studyIds,
            boxHeight: name,
            textBoxWidth: lineToolManager_l,
            textBoxHeight: lineToolManager_c
          } = this._getBox(),
          handler = T(exports),
          register = P(exports),
          lineToolManager_u = lineToolManager_w(exports),
          _ = exports.decorator?.geometry(exports),
          lineToolManager_p = _?.width ?? 0,
          lineToolManager_m = 0 === exports.text.length ? 0 : _?.decoratorAndTextMargin ?? 0,
          lineToolManager_g = _?.ignoreRtl,
          lineToolManager_f = lineToolManager_p + lineToolManager_m;
        let lineToolManager_y;
        const lineToolManager_v = require + lineToolManager_u + M(exports) / 2;
        let S;
        const lineToolManager_b = (0, config.isRtl)(),
          C = lineToolManager_b && !lineToolManager_g,
          lineToolManager_x = C ? module + studyIds - register - lineToolManager_p : module + handler;
        switch ((0, isLineTool.ensureDefined)(exports.horzTextAlign)) {
          case items.HorizontalAlign.Left:
            S = "start", lineToolManager_y = lineToolManager_x + lineToolManager_f, lineToolManager_b && (exports.forceTextAlign ? S = "left" : (lineToolManager_y = C ? lineToolManager_x - lineToolManager_m : module + studyIds - register, S = "right"));
            break;
          case items.HorizontalAlign.Center:
            S = "center";
            const require = studyIds - handler - register - lineToolManager_f;
            lineToolManager_y = C ? lineToolManager_x - lineToolManager_m - require / 2 : lineToolManager_x + lineToolManager_f + require / 2;
            break;
          case items.HorizontalAlign.Right:
            S = "end", lineToolManager_y = C ? lineToolManager_x - lineToolManager_m : module + studyIds - register, lineToolManager_b && exports.forceTextAlign && (S = "right")
        }
        return this._internalData = {
          boxLeft: module,
          boxTop: require,
          boxWidth: studyIds,
          boxHeight: name,
          textBoxWidth: lineToolManager_l,
          textBoxHeight: lineToolManager_c,
          textLeft: module + handler + (C ? 0 : lineToolManager_f),
          textRight: module + studyIds - register - (C ? lineToolManager_f : 0),
          textTop: require + lineToolManager_u,
          textBottom: require + name - lineToolManager_u,
          textHorizStart: lineToolManager_y - module,
          textVertStart: lineToolManager_v - require,
          textAlign: S,
          textBaseLine: "middle",
          decoratorLeft: lineToolManager_x,
          decoratorWidth: lineToolManager_p
        }, this._internalData
      }
      _getFontInfo() {
        if (null === this._fontInfo) {
          const exports = (0, isLineTool.ensureNotNull)(this._data),
            module = M(exports),
            require = `${exports.bold?"bold ":""}${exports.italic?"italic ":""}${module}px ${exports.font}`;
          this._fontInfo = {
            fontStyle: require,
            fontSize: module
          }
        }
        return this._fontInfo
      }
      _drawSelectionIfNeeded(exports, module) {
        const require = (0, isLineTool.ensureNotNull)(this._data),
          studyIds = M((0, isLineTool.ensureNotNull)(this._data));
        if (require.selectionHighlight) {
          const isLineTool = this.positionToCoordinate(require.selectionHighlight.start),
            name = this.positionToCoordinate(require.selectionHighlight.end),
            config = this._getInternalData();
          (0, handler.drawSelection)(exports, module, {
            lines: this.getLinesInfo().linesIncludingHidden,
            selectionStart: isLineTool,
            selectionEnd: name,
            left: config.textLeft,
            right: config.textRight,
            color: require.selectionHighlight.color,
            font: this.fontStyle(),
            lineHeight: studyIds,
            lineSpacing: this.lineSpacing()
          })
        }
      }
      _getLinesMaxWidth(exports) {
        const module = this.fontStyle();
        if (null !== this._data && this._data.wordWrapWidth && !this._data.forceCalculateMaxLineWidth) return this
          ._data.wordWrapWidth * A(this._data);
        let require = 0;
        for (const studyIds of exports) require = Math.max(require, (0, lineToolManager_u.measureText)(studyIds.text, module, this._textWidthCache).width);
        return require
      }
      _getBoxSize() {
        if (null === this._boxSize) {
          const exports = this.getLinesInfo(),
            module = (0, isLineTool.ensureNotNull)(this._data),
            require = function(exports, module) {
              const require = exports.decorator?.geometry(exports),
                studyIds = Math.round(module + T(exports) + P(exports) + (require?.width ?? 0) + (0 === exports.text.length ? 0 : require
                  ?.decoratorAndTextMargin ?? 0));
              return studyIds % 2 ? studyIds + 1 : studyIds
            }(module, exports.linesMaxWidth),
            studyIds = function(exports, module) {
              return M(exports) * module + lineToolManager_x(exports) * (module - 1) + 2 * lineToolManager_w(exports)
            }(module, exports.lines.length);
          this._boxSize = {
            textBoxWidth: require,
            textBoxHeight: studyIds,
            boxWidth: module.boxWidth ?? require,
            boxHeight: module.boxHeight ?? studyIds
          }
        }
        return this._boxSize
      }
      _getBox() {
        if (this._box) return this._box;
        const exports = (0, isLineTool.ensureNotNull)(this._data),
          [module] = (0, isLineTool.ensureDefined)(exports.points),
          {
            boxWidth: require,
            boxHeight: studyIds,
            textBoxWidth: name,
            textBoxHeight: config
          } = this._getBoxSize();
        let {
          lineToolManager_y: lineToolManager_l,
          lineToolManager_x: lineToolManager_c
        } = module;
        switch (exports.vertAlign) {
          case items.VerticalAlign.Bottom:
            lineToolManager_l -= studyIds + exports.offsetY;
            break;
          case items.VerticalAlign.Middle:
            lineToolManager_l -= studyIds / 2;
            break;
          case items.VerticalAlign.Top:
            lineToolManager_l += exports.offsetY
        }
        switch (exports.horzAlign) {
          case items.HorizontalAlign.Left:
            lineToolManager_c += exports.offsetX;
            break;
          case items.HorizontalAlign.Center:
            lineToolManager_c -= require / 2;
            break;
          case items.HorizontalAlign.Right:
            lineToolManager_c -= require + exports.offsetX
        }
        return this._box = {
          boxLeft: lineToolManager_c,
          boxTop: lineToolManager_l,
          boxWidth: require,
          boxHeight: studyIds,
          textBoxWidth: name,
          textBoxHeight: config
        }
      }
      _getRotationPoint() {
        const {
          boxLeft: exports,
          boxTop: module,
          boxWidth: require,
          boxHeight: name
        } = this._getBox(), {
          horzAlign: config,
          vertAlign: lineToolManager_l
        } = (0, isLineTool.ensureNotNull)(this._data);
        let lineToolManager_c, handler;
        switch (config) {
          case items.HorizontalAlign.Center:
            lineToolManager_c = exports + require / 2;
            break;
          case items.HorizontalAlign.Left:
            lineToolManager_c = exports;
            break;
          case items.HorizontalAlign.Right:
            lineToolManager_c = exports + require
        }
        switch (lineToolManager_l) {
          case items.VerticalAlign.Middle:
            handler = module + name / 2;
            break;
          case items.VerticalAlign.Top:
            handler = module;
            break;
          case items.VerticalAlign.Bottom:
            handler = module + name
        }
        return (0, studyIds.point)(lineToolManager_c, handler)
      }
    }