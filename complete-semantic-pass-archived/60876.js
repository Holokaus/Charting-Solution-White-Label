/**
 * Module 60876 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60876: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      PaneRendererStepLine: () => lineToolManager_v,
      StepLineDecoration: () => lineToolManager_s
    });
    var lineToolManager_s, lineToolManager_o, lineToolManager_n = lineToolManager_i(2624),
      lineToolManager_r = lineToolManager_i(10555),
      lineToolManager_a = lineToolManager_i(2383),
      lineToolManager_l = lineToolManager_i(4539),
      lineToolManager_c = lineToolManager_i(58221),
      lineToolManager_h = lineToolManager_i(10307),
      lineToolManager_d = lineToolManager_i(79268),
      lineToolManager_u = lineToolManager_i(4699),
      _ = lineToolManager_i(85565),
      lineToolManager_p = lineToolManager_i(12217);
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.None = 0] = "None", lineToolManager_e[lineToolManager_e.Diamonds = 1] = "Diamonds"
    }(lineToolManager_s || (lineToolManager_s = {})),
    function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.SmallDiamondsSize = 8] = "SmallDiamondsSize", lineToolManager_e[lineToolManager_e.SmallDiamondsRadius = 2] = "SmallDiamondsRadius", lineToolManager_e[lineToolManager_e
        .LargeDiamondsSize = 21] = "LargeDiamondsSize", lineToolManager_e[lineToolManager_e.LargeDiamondsRadius = 5] = "LargeDiamondsRadius", lineToolManager_e[lineToolManager_e
        .LargeDiamondsAlpha = .15] = "LargeDiamondsAlpha", lineToolManager_e[lineToolManager_e.LeftUnplottableXCoord = -50] = "LeftUnplottableXCoord"
    }(lineToolManager_o || (lineToolManager_o = {}));
    class lineToolManager_m {
      constructor(lineToolManager_e) {
        this._forceExtendFirstBar = !!lineToolManager_e
      }
      initialize(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        const {
          context: lineToolManager_o,
          horizontalPixelRatio: lineToolManager_n,
          verticalPixelRatio: lineToolManager_r
        } = lineToolManager_i, lineToolManager_a = lineToolManager_t.lineStyle;
        lineToolManager_o.lineCap = "butt", lineToolManager_o.lineJoin = "round";
        const lineToolManager_l = Math.max(Math.floor(lineToolManager_s.style?.width ?? lineToolManager_t.lineWidth * lineToolManager_n));
        lineToolManager_e.setLineStyle(lineToolManager_a);
        const lineToolManager_c = lineToolManager_l % 2 ? .5 : 0;
        lineToolManager_e.moveTo(Math.round(lineToolManager_s.center * lineToolManager_n) + lineToolManager_c, Math.round(lineToolManager_s.lineToolManager_y * lineToolManager_r) + lineToolManager_c), (0, lineToolManager_u.applyColor)(lineToolManager_i, lineToolManager_s.style?.color ?? lineToolManager_t
          .lineColor, 1, 1), lineToolManager_e.setLineWidth(lineToolManager_l)
      }
      startFragment(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o) {
        lineToolManager_e.beginPath();
        const lineToolManager_n = lineToolManager_s.firstItem && lineToolManager_s.extendToBarsEndings ? lineToolManager_i.center : lineToolManager_i.left;
        lineToolManager_e.moveTo(isNaN(lineToolManager_n) ? -50 : lineToolManager_n, lineToolManager_o?.lineToolManager_y ?? lineToolManager_i.lineToolManager_y)
      }
      finishFragment(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        lineToolManager_i && lineToolManager_s && lineToolManager_e.lineTo(lineToolManager_i.left, lineToolManager_s.lineToolManager_y), lineToolManager_e.stroke()
      }
      hitTest(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        if (!(0, lineToolManager_d.isValidPoint)(lineToolManager_t)) return !1;
        const lineToolManager_o = lineToolManager_t.style?.width ?? lineToolManager_e.lineWidth,
          lineToolManager_a = (0, lineToolManager_l.interactionTolerance)().series + lineToolManager_o / 2,
          {
            left: lineToolManager_c,
            lineToolManager_y: lineToolManager_h
          } = lineToolManager_t,
          lineToolManager_u = isNaN(lineToolManager_c) ? -50 : lineToolManager_c;
        let _, lineToolManager_p;
        return lineToolManager_i && (0, lineToolManager_d.isValidPoint)(lineToolManager_i) ? (_ = lineToolManager_i.left, lineToolManager_p = lineToolManager_i.lineToolManager_y) : (_ = lineToolManager_t.right, lineToolManager_p = lineToolManager_t.lineToolManager_y), !(lineToolManager_u < lineToolManager_s.lineToolManager_x - lineToolManager_a && _ < lineToolManager_s
          .lineToolManager_x - lineToolManager_a || lineToolManager_u > lineToolManager_s.lineToolManager_x + lineToolManager_a && _ > lineToolManager_s.lineToolManager_x + lineToolManager_a) && ((0, lineToolManager_n.distanceToSegment)((0, lineToolManager_r.point)(lineToolManager_u, lineToolManager_h), (0, lineToolManager_r.point)(_, lineToolManager_h),
            lineToolManager_s).distance < lineToolManager_a || lineToolManager_h !== lineToolManager_p && (0, lineToolManager_n.distanceToSegment)((0, lineToolManager_r.point)(_, lineToolManager_h), (0, lineToolManager_r.point)(_, lineToolManager_p), lineToolManager_s)
          .distance < lineToolManager_a)
      }
      applyColor(lineToolManager_e, lineToolManager_t) {
        (0, lineToolManager_u.applyColor)(lineToolManager_e, lineToolManager_t, 1, 1)
      }
      applyLineWidth(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        lineToolManager_e.setLineWidth(lineToolManager_i)
      }
      applyLineStyle(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        lineToolManager_e.setLineStyle(lineToolManager_i)
      }
      drawItem(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o) {
        void 0 !== lineToolManager_o && lineToolManager_e.lineTo(lineToolManager_i.left, lineToolManager_o.lineToolManager_y), lineToolManager_e.lineTo(!lineToolManager_s.firstItem || lineToolManager_s.extendToBarsEndings || this
          ._forceExtendFirstBar ? lineToolManager_i.left : lineToolManager_i.center, lineToolManager_i.lineToolManager_y), lineToolManager_e.lineTo(lineToolManager_s.lastItem && !lineToolManager_s.extendToBarsEndings ? lineToolManager_i
          .center : lineToolManager_i.right, lineToolManager_i.lineToolManager_y)
      }
      needDashOffset() {
        return !0
      }
    }
    class lineToolManager_g {
      constructor() {
        this._lineWidth = 1, this._initialAlpha = 1
      }
      initialize(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        this._initialAlpha = lineToolManager_i.context.globalAlpha, this.applyColor(lineToolManager_i, lineToolManager_s.style?.color ?? lineToolManager_t.lineColor), this
          ._lineWidth = Math.max(Math.floor(lineToolManager_s.style?.width ?? lineToolManager_t.lineWidth * lineToolManager_i.horizontalPixelRatio))
      }
      startFragment(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o) {
        lineToolManager_e.beginPath()
      }
      finishFragment(lineToolManager_e, lineToolManager_t) {
        lineToolManager_t.fill()
      }
      drawItem(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o) {
        if (lineToolManager_s.valIsNotSameAsPrev && !isNaN(lineToolManager_i.left)) {
          const lineToolManager_e = lineToolManager_t.context;
          lineToolManager_e.save(), lineToolManager_e.translate(lineToolManager_i.left, lineToolManager_i.lineToolManager_y), lineToolManager_e.rotate(Math.PI / 4);
          const lineToolManager_s = this._scaleByLineWidth(this._lineWidth);
          lineToolManager_e.scale(lineToolManager_s, lineToolManager_s), this._drawItemRotatedAndTranslated(lineToolManager_t), lineToolManager_e.restore()
        }
      }
      applyLineWidth(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        this._lineWidth = lineToolManager_i
      }
      applyLineStyle(lineToolManager_e, lineToolManager_t, lineToolManager_i) {}
      hitTest(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        if (!lineToolManager_t.valIsNotSameAsPrev) return !1;
        const lineToolManager_o = lineToolManager_s.subtract((0, lineToolManager_r.point)(lineToolManager_t.left, lineToolManager_t.lineToolManager_y));
        return this._hitTestTranslated(lineToolManager_o, lineToolManager_t.style?.width ?? lineToolManager_e.lineWidth)
      }
      needDashOffset() {
        return !1
      }
      _scaleByLineWidth(lineToolManager_e) {
        return Math.sqrt(lineToolManager_e)
      }
    }
    class lineToolManager_f extends lineToolManager_g {
      applyColor(lineToolManager_e, lineToolManager_t) {
        (0, lineToolManager_u.applyColor)(lineToolManager_e, lineToolManager_t, 1, 2)
      }
      _hitTestTranslated(lineToolManager_e, lineToolManager_t) {
        return Math.abs(lineToolManager_e.lineToolManager_x) + Math.abs(lineToolManager_e.lineToolManager_y) < 8 * this._scaleByLineWidth(lineToolManager_t) / 2
      }
      _drawItemRotatedAndTranslated(lineToolManager_e) {
        (0, lineToolManager_c.drawRoundRect)(lineToolManager_e.context, -4, -4, 8, 8, 2, !0)
      }
    }
    class lineToolManager_y extends lineToolManager_g {
      applyColor(lineToolManager_e, lineToolManager_t) {
        lineToolManager_e.context.globalAlpha = .15 * this._initialAlpha, (0, lineToolManager_u.applyColor)(lineToolManager_e, lineToolManager_t, 1, 2)
      }
      _hitTestTranslated(lineToolManager_e, lineToolManager_t) {
        return Math.abs(lineToolManager_e.lineToolManager_x) + Math.abs(lineToolManager_e.lineToolManager_y) < 21 * this._scaleByLineWidth(lineToolManager_t) / 2
      }
      _drawItemRotatedAndTranslated(lineToolManager_e) {
        (0, lineToolManager_c.drawRoundRect)(lineToolManager_e.context, -10.5, -10.5, 21, 21, 5, !0)
      }
    }
    class lineToolManager_v extends lineToolManager_h.BitmapCoordinatesPaneRenderer {
      constructor(lineToolManager_e) {
        super(), this._data = null, this._data = lineToolManager_e ?? null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      hitTest(lineToolManager_e) {
        const lineToolManager_t = this._data;
        if (null === lineToolManager_t || 0 === lineToolManager_t.items.length) return null;
        const {
          items: lineToolManager_i,
          visibleItemsRange: lineToolManager_o,
          skipHoles: lineToolManager_n
        } = lineToolManager_t, lineToolManager_r = lineToolManager_o?.startItemIndex ?? 0, lineToolManager_l = lineToolManager_o?.endItemIndex ?? lineToolManager_i.length;
        if (lineToolManager_l <= lineToolManager_r) return null;
        const lineToolManager_c = lineToolManager_t.decoration === lineToolManager_s.Diamonds ? [new lineToolManager_m, new lineToolManager_y] : [new lineToolManager_m];
        const lineToolManager_h = new lineToolManager_d.PaneRendererLineItemsIterator(lineToolManager_i, lineToolManager_r, lineToolManager_l, lineToolManager_n);
        for (; lineToolManager_h.next();) {
          const lineToolManager_i = lineToolManager_h.currentValue(),
            lineToolManager_s = lineToolManager_h.nextValue();
          for (const lineToolManager_o of lineToolManager_c)
            if ((0, lineToolManager_d.isValidPoint)(lineToolManager_i) && lineToolManager_o.hitTest(lineToolManager_t, lineToolManager_i, (0, lineToolManager_d.isValidPoint)(lineToolManager_s) ? lineToolManager_s : null, lineToolManager_e)) return new lineToolManager_a
              .HitTestResult(lineToolManager_a.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(lineToolManager_e) {
        if (null === this._data || 0 === this._data.items.length) return;
        (this._data.decoration === lineToolManager_s.Diamonds ? [new lineToolManager_m(!0), new lineToolManager_f, new lineToolManager_y] : [new lineToolManager_m]).forEach((lineToolManager_t => this
          ._drawDecorationItem(lineToolManager_e, lineToolManager_t)))
      }
      _drawDecorationItem(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        if (null === this._data || 0 === this._data.items.length) return {
          distance: 0,
          dashPattern: []
        };
        const {
          lineWidth: lineToolManager_s,
          lineColor: lineToolManager_o,
          lineStyle: lineToolManager_n,
          items: lineToolManager_r,
          visibleItemsRange: lineToolManager_a,
          skipHoles: lineToolManager_l,
          extendToBarsEndings: lineToolManager_c
        } = this._data, {
          context: lineToolManager_h,
          horizontalPixelRatio: lineToolManager_u,
          verticalPixelRatio: lineToolManager_m
        } = lineToolManager_e;
        let lineToolManager_g = !1,
          lineToolManager_f = Math.max(Math.floor((lineToolManager_r[0].style?.width ?? lineToolManager_s) * lineToolManager_u)),
          lineToolManager_y = lineToolManager_f % 2 ? .5 : 0;
        const lineToolManager_v = lineToolManager_a?.startItemIndex ?? 0,
          S = lineToolManager_a?.endItemIndex ?? lineToolManager_r.length;
        if (S <= lineToolManager_v) return {
          distance: 0,
          dashPattern: []
        };
        const lineToolManager_b = new _.SmartDashCanvas(lineToolManager_h, !!lineToolManager_i);
        let lineToolManager_w, C, T, P, lineToolManager_x = 0;
        if (!lineToolManager_i && lineToolManager_t.needDashOffset()) {
          const {
            distance: lineToolManager_i,
            dashPattern: lineToolManager_s
          } = this._drawDecorationItem(lineToolManager_e, lineToolManager_t, !0), lineToolManager_o = (0, lineToolManager_p.sum)(lineToolManager_s);
          if (lineToolManager_o > 0) {
            const lineToolManager_e = lineToolManager_i % lineToolManager_o;
            lineToolManager_h.lineDashOffset = lineToolManager_x = lineToolManager_o - lineToolManager_e - lineToolManager_s[1]
          }
        }
        lineToolManager_t.initialize(lineToolManager_b, this._data, lineToolManager_e, lineToolManager_r[0]), lineToolManager_t.applyColor(lineToolManager_e, lineToolManager_r[lineToolManager_v].style?.color ?? lineToolManager_o), lineToolManager_t.applyLineWidth(lineToolManager_b, lineToolManager_h, lineToolManager_f), lineToolManager_t
          .applyLineStyle(lineToolManager_b, lineToolManager_h, lineToolManager_n);
        let M = !1;
        const I = new lineToolManager_d.PaneRendererLineItemsIterator(lineToolManager_r, lineToolManager_v, S, lineToolManager_l);
        for (; I.next();) {
          const lineToolManager_r = I.currentValue();
          if (!(0, lineToolManager_d.isValidPoint)(lineToolManager_r)) {
            lineToolManager_w = void 0, M = !0;
            continue
          }
          const lineToolManager_a = lineToolManager_r.style?.color ?? lineToolManager_o,
            lineToolManager_l = lineToolManager_r.style?.width ?? lineToolManager_s,
            _ = lineToolManager_r.style?.style ?? lineToolManager_n,
            lineToolManager_v = lineToolManager_a !== C,
            S = lineToolManager_l !== T,
            A = _ !== P,
            L = {
              firstItem: I.currentValueIsFirst(),
              lastItem: I.currentValueIsLast(),
              extendToBarsEndings: lineToolManager_c,
              valIsNotSameAsPrev: lineToolManager_r.valIsNotSameAsPrev
            },
            lineToolManager_k = {
              lineToolManager_y: Math.round(lineToolManager_r.lineToolManager_y * lineToolManager_m) + lineToolManager_y,
              left: Math.round(lineToolManager_r.left * lineToolManager_u) + lineToolManager_y,
              center: Math.round(lineToolManager_r.center * lineToolManager_u) + lineToolManager_y,
              right: Math.round(lineToolManager_r.right * lineToolManager_u) + lineToolManager_y
            };
          if (lineToolManager_v || S || M || A) {
            if (C && T && lineToolManager_g && (lineToolManager_t.finishFragment(lineToolManager_b, lineToolManager_h, lineToolManager_k, lineToolManager_w), lineToolManager_g = !1), lineToolManager_v && lineToolManager_t.applyColor(lineToolManager_e, lineToolManager_a), S && (lineToolManager_f = Math.max(
                1, Math.floor(lineToolManager_l * lineToolManager_u)), lineToolManager_y = lineToolManager_f % 2 ? .5 : 0, lineToolManager_t.applyLineWidth(lineToolManager_b, lineToolManager_h, lineToolManager_f)), A && lineToolManager_t.applyLineStyle(lineToolManager_b, lineToolManager_h,
                _), !lineToolManager_i) {
              const lineToolManager_e = lineToolManager_b.lastSegmentDistance(),
                lineToolManager_t = lineToolManager_b.lastSegmentDashPattern(),
                lineToolManager_i = (0, lineToolManager_p.sum)(lineToolManager_t);
              if (lineToolManager_i > 0) {
                const lineToolManager_t = lineToolManager_e % lineToolManager_i;
                lineToolManager_h.lineDashOffset = lineToolManager_t + lineToolManager_x
              }
            }
            lineToolManager_t.startFragment(lineToolManager_b, lineToolManager_h, lineToolManager_k, L, lineToolManager_w), lineToolManager_g = !0, M = !1, C = lineToolManager_a, T = lineToolManager_l, P = _
          }
          lineToolManager_t.drawItem(lineToolManager_b, lineToolManager_e, lineToolManager_k, L, lineToolManager_w), lineToolManager_w = lineToolManager_k
        }
        return lineToolManager_g && (lineToolManager_t.finishFragment(lineToolManager_b, lineToolManager_h), lineToolManager_g = !1), {
          distance: lineToolManager_b.lastSegmentDistance(),
          dashPattern: lineToolManager_b.lastSegmentDashPattern()
        }
      }
    }