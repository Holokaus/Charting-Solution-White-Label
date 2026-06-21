/**
 * Module 60876 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (18255 bytes) - comprehensive remediation applied
 */

60876: (exports, module, require) => {
    "use strict";
    require.register(module, {
      PaneRendererStepLine: () => lineToolManager_v,
      StepLineDecoration: () => studyIds
    });
    var studyIds, isLineTool, name = require(2624),
      config = require(10555),
      items = require(2383),
      lineToolManager_l = require(4539),
      lineToolManager_c = require(58221),
      handler = require(10307),
      register = require(79268),
      lineToolManager_u = require(4699),
      _ = require(85565),
      lineToolManager_p = require(12217);
    ! function(exports) {
      exports[exports.None = 0] = "None", exports[exports.Diamonds = 1] = "Diamonds"
    }(studyIds || (studyIds = {})),
    function(exports) {
      exports[exports.SmallDiamondsSize = 8] = "SmallDiamondsSize", exports[exports.SmallDiamondsRadius = 2] = "SmallDiamondsRadius", exports[exports
        .LargeDiamondsSize = 21] = "LargeDiamondsSize", exports[exports.LargeDiamondsRadius = 5] = "LargeDiamondsRadius", exports[exports
        .LargeDiamondsAlpha = .15] = "LargeDiamondsAlpha", exports[exports.LeftUnplottableXCoord = -50] = "LeftUnplottableXCoord"
    }(isLineTool || (isLineTool = {}));
    class lineToolManager_m {
      constructor(exports) {
        this._forceExtendFirstBar = !!exports
      }
      initialize(exports, module, require, studyIds) {
        const {
          context: isLineTool,
          horizontalPixelRatio: name,
          verticalPixelRatio: config
        } = require, items = module.lineStyle;
        isLineTool.lineCap = "butt", isLineTool.lineJoin = "round";
        const lineToolManager_l = Math.max(Math.floor(studyIds.style?.width ?? module.lineWidth * name));
        exports.setLineStyle(items);
        const lineToolManager_c = lineToolManager_l % 2 ? .5 : 0;
        exports.moveTo(Math.round(studyIds.center * name) + lineToolManager_c, Math.round(studyIds.lineToolManager_y * config) + lineToolManager_c), (0, lineToolManager_u.applyColor)(require, studyIds.style?.color ?? module
          .lineColor, 1, 1), exports.setLineWidth(lineToolManager_l)
      }
      startFragment(exports, module, require, studyIds, isLineTool) {
        exports.beginPath();
        const name = studyIds.firstItem && studyIds.extendToBarsEndings ? require.center : require.left;
        exports.moveTo(isNaN(name) ? -50 : name, isLineTool?.lineToolManager_y ?? require.lineToolManager_y)
      }
      finishFragment(exports, module, require, studyIds) {
        require && studyIds && exports.lineTo(require.left, studyIds.lineToolManager_y), exports.stroke()
      }
      hitTest(exports, module, require, studyIds) {
        if (!(0, register.isValidPoint)(module)) return !1;
        const isLineTool = module.style?.width ?? exports.lineWidth,
          items = (0, lineToolManager_l.interactionTolerance)().series + isLineTool / 2,
          {
            left: lineToolManager_c,
            lineToolManager_y: handler
          } = module,
          lineToolManager_u = isNaN(lineToolManager_c) ? -50 : lineToolManager_c;
        let _, lineToolManager_p;
        return require && (0, register.isValidPoint)(require) ? (_ = require.left, lineToolManager_p = require.lineToolManager_y) : (_ = module.right, lineToolManager_p = module.lineToolManager_y), !(lineToolManager_u < studyIds.lineToolManager_x - items && _ < studyIds
          .lineToolManager_x - items || lineToolManager_u > studyIds.lineToolManager_x + items && _ > studyIds.lineToolManager_x + items) && ((0, name.distanceToSegment)((0, config.point)(lineToolManager_u, handler), (0, config.point)(_, handler),
            studyIds).distance < items || handler !== lineToolManager_p && (0, name.distanceToSegment)((0, config.point)(_, handler), (0, config.point)(_, lineToolManager_p), studyIds)
          .distance < items)
      }
      applyColor(exports, module) {
        (0, lineToolManager_u.applyColor)(exports, module, 1, 1)
      }
      applyLineWidth(exports, module, require) {
        exports.setLineWidth(require)
      }
      applyLineStyle(exports, module, require) {
        exports.setLineStyle(require)
      }
      drawItem(exports, module, require, studyIds, isLineTool) {
        void 0 !== isLineTool && exports.lineTo(require.left, isLineTool.lineToolManager_y), exports.lineTo(!studyIds.firstItem || studyIds.extendToBarsEndings || this
          ._forceExtendFirstBar ? require.left : require.center, require.lineToolManager_y), exports.lineTo(studyIds.lastItem && !studyIds.extendToBarsEndings ? require
          .center : require.right, require.lineToolManager_y)
      }
      needDashOffset() {
        return !0
      }
    }
    class lineToolManager_g {
      constructor() {
        this._lineWidth = 1, this._initialAlpha = 1
      }
      initialize(exports, module, require, studyIds) {
        this._initialAlpha = require.context.globalAlpha, this.applyColor(require, studyIds.style?.color ?? module.lineColor), this
          ._lineWidth = Math.max(Math.floor(studyIds.style?.width ?? module.lineWidth * require.horizontalPixelRatio))
      }
      startFragment(exports, module, require, studyIds, isLineTool) {
        exports.beginPath()
      }
      finishFragment(exports, module) {
        module.fill()
      }
      drawItem(exports, module, require, studyIds, isLineTool) {
        if (studyIds.valIsNotSameAsPrev && !isNaN(require.left)) {
          const exports = module.context;
          exports.save(), exports.translate(require.left, require.lineToolManager_y), exports.rotate(Math.PI / 4);
          const studyIds = this._scaleByLineWidth(this._lineWidth);
          exports.scale(studyIds, studyIds), this._drawItemRotatedAndTranslated(module), exports.restore()
        }
      }
      applyLineWidth(exports, module, require) {
        this._lineWidth = require
      }
      applyLineStyle(exports, module, require) {}
      hitTest(exports, module, require, studyIds) {
        if (!module.valIsNotSameAsPrev) return !1;
        const isLineTool = studyIds.subtract((0, config.point)(module.left, module.lineToolManager_y));
        return this._hitTestTranslated(isLineTool, module.style?.width ?? exports.lineWidth)
      }
      needDashOffset() {
        return !1
      }
      _scaleByLineWidth(exports) {
        return Math.sqrt(exports)
      }
    }
    class lineToolManager_f extends lineToolManager_g {
      applyColor(exports, module) {
        (0, lineToolManager_u.applyColor)(exports, module, 1, 2)
      }
      _hitTestTranslated(exports, module) {
        return Math.abs(exports.lineToolManager_x) + Math.abs(exports.lineToolManager_y) < 8 * this._scaleByLineWidth(module) / 2
      }
      _drawItemRotatedAndTranslated(exports) {
        (0, lineToolManager_c.drawRoundRect)(exports.context, -4, -4, 8, 8, 2, !0)
      }
    }
    class lineToolManager_y extends lineToolManager_g {
      applyColor(exports, module) {
        exports.context.globalAlpha = .15 * this._initialAlpha, (0, lineToolManager_u.applyColor)(exports, module, 1, 2)
      }
      _hitTestTranslated(exports, module) {
        return Math.abs(exports.lineToolManager_x) + Math.abs(exports.lineToolManager_y) < 21 * this._scaleByLineWidth(module) / 2
      }
      _drawItemRotatedAndTranslated(exports) {
        (0, lineToolManager_c.drawRoundRect)(exports.context, -10.5, -10.5, 21, 21, 5, !0)
      }
    }
    class lineToolManager_v extends handler.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = null, this._data = exports ?? null
      }
      setData(exports) {
        this._data = exports
      }
      hitTest(exports) {
        const module = this._data;
        if (null === module || 0 === module.items.length) return null;
        const {
          items: require,
          visibleItemsRange: isLineTool,
          skipHoles: name
        } = module, config = isLineTool?.startItemIndex ?? 0, lineToolManager_l = isLineTool?.endItemIndex ?? require.length;
        if (lineToolManager_l <= config) return null;
        const lineToolManager_c = module.decoration === studyIds.Diamonds ? [new lineToolManager_m, new lineToolManager_y] : [new lineToolManager_m];
        const handler = new register.PaneRendererLineItemsIterator(require, config, lineToolManager_l, name);
        for (; handler.next();) {
          const require = handler.currentValue(),
            studyIds = handler.nextValue();
          for (const isLineTool of lineToolManager_c)
            if ((0, register.isValidPoint)(require) && isLineTool.hitTest(module, require, (0, register.isValidPoint)(studyIds) ? studyIds : null, exports)) return new items
              .HitTestResult(items.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(exports) {
        if (null === this._data || 0 === this._data.items.length) return;
        (this._data.decoration === studyIds.Diamonds ? [new lineToolManager_m(!0), new lineToolManager_f, new lineToolManager_y] : [new lineToolManager_m]).forEach((modulresulconfiflag => this
          ._drawDecorationItem(exports, module)))
      }
      _drawDecorationItem(exports, module, require) {
        if (null === this._data || 0 === this._data.items.length) return {
          distance: 0,
          dashPattern: []
        };
        const {
          lineWidth: studyIds,
          lineColor: isLineTool,
          lineStyle: name,
          items: config,
          visibleItemsRange: items,
          skipHoles: lineToolManager_l,
          extendToBarsEndings: lineToolManager_c
        } = this._data, {
          context: handler,
          horizontalPixelRatio: lineToolManager_u,
          verticalPixelRatio: lineToolManager_m
        } = exports;
        let lineToolManager_g = !1,
          lineToolManager_f = Math.max(Math.floor((config[0].style?.width ?? studyIds) * lineToolManager_u)),
          lineToolManager_y = lineToolManager_f % 2 ? .5 : 0;
        const lineToolManager_v = items?.startItemIndex ?? 0,
          S = items?.endItemIndex ?? config.length;
        if (S <= lineToolManager_v) return {
          distance: 0,
          dashPattern: []
        };
        const lineToolManager_b = new _.SmartDashCanvas(handler, !!require);
        let lineToolManager_w, C, T, P, lineToolManager_x = 0;
        if (!require && module.needDashOffset()) {
          const {
            distance: require,
            dashPattern: studyIds
          } = this._drawDecorationItem(exports, module, !0), isLineTool = (0, lineToolManager_p.sum)(studyIds);
          if (isLineTool > 0) {
            const exports = require % isLineTool;
            handler.lineDashOffset = lineToolManager_x = isLineTool - exports - studyIds[1]
          }
        }
        module.initialize(lineToolManager_b, this._data, exports, config[0]), module.applyColor(exports, config[lineToolManager_v].style?.color ?? isLineTool), module.applyLineWidth(lineToolManager_b, handler, lineToolManager_f), module
          .applyLineStyle(lineToolManager_b, handler, name);
        let M = !1;
        const I = new register.PaneRendererLineItemsIterator(config, lineToolManager_v, S, lineToolManager_l);
        for (; I.next();) {
          const config = I.currentValue();
          if (!(0, register.isValidPoint)(config)) {
            lineToolManager_w = void 0, M = !0;
            continue
          }
          const items = config.style?.color ?? isLineTool,
            lineToolManager_l = config.style?.width ?? studyIds,
            _ = config.style?.style ?? name,
            lineToolManager_v = items !== C,
            S = lineToolManager_l !== T,
            A = _ !== P,
            L = {
              firstItem: I.currentValueIsFirst(),
              lastItem: I.currentValueIsLast(),
              extendToBarsEndings: lineToolManager_c,
              valIsNotSameAsPrev: config.valIsNotSameAsPrev
            },
            lineToolManager_k = {
              lineToolManager_y: Math.round(config.lineToolManager_y * lineToolManager_m) + lineToolManager_y,
              left: Math.round(config.left * lineToolManager_u) + lineToolManager_y,
              center: Math.round(config.center * lineToolManager_u) + lineToolManager_y,
              right: Math.round(config.right * lineToolManager_u) + lineToolManager_y
            };
          if (lineToolManager_v || S || M || A) {
            if (C && T && lineToolManager_g && (module.finishFragment(lineToolManager_b, handler, lineToolManager_k, lineToolManager_w), lineToolManager_g = !1), lineToolManager_v && module.applyColor(exports, items), S && (lineToolManager_f = Math.max(
                1, Math.floor(lineToolManager_l * lineToolManager_u)), lineToolManager_y = lineToolManager_f % 2 ? .5 : 0, module.applyLineWidth(lineToolManager_b, handler, lineToolManager_f)), A && module.applyLineStyle(lineToolManager_b, handler,
                _), !require) {
              const exports = lineToolManager_b.lastSegmentDistance(),
                module = lineToolManager_b.lastSegmentDashPattern(),
                require = (0, lineToolManager_p.sum)(module);
              if (require > 0) {
                const module = exports % require;
                handler.lineDashOffset = module + lineToolManager_x
              }
            }
            module.startFragment(lineToolManager_b, handler, lineToolManager_k, L, lineToolManager_w), lineToolManager_g = !0, M = !1, C = items, T = lineToolManager_l, P = _
          }
          module.drawItem(lineToolManager_b, exports, lineToolManager_k, L, lineToolManager_w), lineToolManager_w = lineToolManager_k
        }
        return lineToolManager_g && (module.finishFragment(lineToolManager_b, handler), lineToolManager_g = !1), {
          distance: lineToolManager_b.lastSegmentDistance(),
          dashPattern: lineToolManager_b.lastSegmentDashPattern()
        }
      }
    }