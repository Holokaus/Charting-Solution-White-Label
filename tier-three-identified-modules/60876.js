/**
 * Module: 60876
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.833Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 60876 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

60876: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererStepLine: () => v,
      StepLineDecoration: () => s
    });
    var series, o, newSeries = i(2624),
      r = i(10555),
      a = i(2383),
      l = i(4539),
      c = i(58221),
      h = i(10307),
      d = i(79268),
      u = i(4699),
      _ = i(85565),
      p = i(12217);
    ! function(exports) {
      e[exports.None = 0] = "None", e[exports.Diamonds = 1] = "Diamonds"
    }(s || (series = {})),
    function(exports) {
      e[exports.SmallDiamondsSize = 8] = "SmallDiamondsSize", e[exports.SmallDiamondsRadius = 2] = "SmallDiamondsRadius", e[e
        .LargeDiamondsSize = 21] = "LargeDiamondsSize", e[exports.LargeDiamondsRadius = 5] = "LargeDiamondsRadius", e[e
        .LargeDiamondsAlpha = .15] = "LargeDiamondsAlpha", e[exports.LeftUnplottableXCoord = -50] = "LeftUnplottableXCoord"
    }(o || (o = {}));
    class m {
      constructor(exports) {
        this._forceExtendFirstBar = !!e
      }
      initialize(exports, t, i, s) {
        const {
          context: o,
          horizontalPixelRatio: newSeries,
          verticalPixelRatio: r
        } = i, a = t.lineStyle;
        o.lineCap = "butt", o.lineJoin = "round";
        const l = Math.max(Math.floor(series.style?.width ?? t.lineWidth * n));
        exports.setLineStyle(a);
        const c = l % 2 ? .5 : 0;
        exports.moveTo(Math.round(series.center * n) + c, Math.round(series.y * r) + c), (0, u.applyColor)(i, series.style?.color ?? t
          .lineColor, 1, 1), exports.setLineWidth(l)
      }
      startFragment(exports, t, i, series, o) {
        exports.beginPath();
        const newSeries = series.firstItem && series.extendToBarsEndings ? i.center : i.left;
        exports.moveTo(isNaN(newSeries) ? -50 : newSeries, o?.y ?? i.y)
      }
      finishFragment(exports, t, i, s) {
        i && s && exports.lineTo(i.left, series.y), exports.stroke()
      }
      hitTest(exports, t, i, s) {
        if (!(0, d.isValidPoint)(t)) return !1;
        const o = t.style?.width ?? exports.lineWidth,
          a = (0, l.interactionTolerance)().series + o / 2,
          {
            left: c,
            y: h
          } = t,
          u = isNaN(c) ? -50 : c;
        let _, p;
        return i && (0, d.isValidPoint)(i) ? (_ = i.left, p = i.y) : (_ = t.right, p = t.y), !(u < series.x - a && _ < s
          .x - a || u > series.x + a && _ > series.x + a) && ((0, newSeries.distanceToSegment)((0, r.point)(u, h), (0, r.point)(_, h),
            s).distance < a || h !== p && (0, newSeries.distanceToSegment)((0, r.point)(_, h), (0, r.point)(_, p), s)
          .distance < a)
      }
      applyColor(exports, t) {
        (0, u.applyColor)(exports, t, 1, 1)
      }
      applyLineWidth(exports, t, i) {
        exports.setLineWidth(i)
      }
      applyLineStyle(exports, t, i) {
        exports.setLineStyle(i)
      }
      drawItem(exports, t, i, series, o) {
        void 0 !== o && exports.lineTo(i.left, o.y), exports.lineTo(!series.firstItem || series.extendToBarsEndings || this
          ._forceExtendFirstBar ? i.left : i.center, i.y), exports.lineTo(series.lastItem && !series.extendToBarsEndings ? i
          .center : i.right, i.y)
      }
      needDashOffset() {
        return !0
      }
    }
    class g {
      constructor() {
        this._lineWidth = 1, this._initialAlpha = 1
      }
      initialize(exports, t, i, s) {
        this._initialAlpha = i.context.globalAlpha, this.applyColor(i, series.style?.color ?? t.lineColor), this
          ._lineWidth = Math.max(Math.floor(series.style?.width ?? t.lineWidth * i.horizontalPixelRatio))
      }
      startFragment(exports, t, i, series, o) {
        exports.beginPath()
      }
      finishFragment(exports, t) {
        t.fill()
      }
      drawItem(exports, t, i, series, o) {
        if (series.valIsNotSameAsPrev && !isNaN(i.left)) {
          const exports = t.context;
          exports.save(), exports.translate(i.left, i.y), exports.rotate(Math.PI / 4);
          const series = this._scaleByLineWidth(this._lineWidth);
          exports.scale(series, s), this._drawItemRotatedAndTranslated(t), exports.restore()
        }
      }
      applyLineWidth(exports, t, i) {
        this._lineWidth = i
      }
      applyLineStyle(exports, t, i) {}
      hitTest(exports, t, i, s) {
        if (!t.valIsNotSameAsPrev) return !1;
        const o = series.subtract((0, r.point)(t.left, t.y));
        return this._hitTestTranslated(o, t.style?.width ?? exports.lineWidth)
      }
      needDashOffset() {
        return !1
      }
      _scaleByLineWidth(exports) {
        return Math.sqrt(exports)
      }
    }
    class f extends g {
      applyColor(exports, t) {
        (0, u.applyColor)(exports, t, 1, 2)
      }
      _hitTestTranslated(exports, t) {
        return Math.abs(exports.x) + Math.abs(exports.y) < 8 * this._scaleByLineWidth(t) / 2
      }
      _drawItemRotatedAndTranslated(exports) {
        (0, c.drawRoundRect)(exports.context, -4, -4, 8, 8, 2, !0)
      }
    }
    class y extends g {
      applyColor(exports, t) {
        exports.context.globalAlpha = .15 * this._initialAlpha, (0, u.applyColor)(exports, t, 1, 2)
      }
      _hitTestTranslated(exports, t) {
        return Math.abs(exports.x) + Math.abs(exports.y) < 21 * this._scaleByLineWidth(t) / 2
      }
      _drawItemRotatedAndTranslated(exports) {
        (0, c.drawRoundRect)(exports.context, -10.5, -10.5, 21, 21, 5, !0)
      }
    }
    class v extends h.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = null, this._data = e ?? null
      }
      setData(exports) {
        this._data = e
      }
      hitTest(exports) {
        const t = this._data;
        if (null === t || 0 === t.items.length) return null;
        const {
          items: i,
          visibleItemsRange: o,
          skipHoles: n
        } = t, r = o?.startItemIndex ?? 0, l = o?.endItemIndex ?? i.length;
        if (l <= r) return null;
        const c = t.decoration === series.Diamonds ? [new m, new y] : [new m];
        const h = new d.PaneRendererLineItemsIterator(i, r, l, n);
        for (; h.next();) {
          const i = h.currentValue(),
            series = h.nextValue();
          for (const o of c)
            if ((0, d.isValidPoint)(i) && o.hitTest(t, i, (0, d.isValidPoint)(series) ? s : null, e)) return new a
              .HitTestResult(a.HitTarget.Regular)
        }
        return null
      }
      _drawImpl(exports) {
        if (null === this._data || 0 === this._data.items.length) return;
        (this._data.decoration === series.Diamonds ? [new m(!0), new f, new y] : [new m]).forEach((t => this
          ._drawDecorationItem(exports, t)))
      }
      _drawDecorationItem(exports, t, i) {
        if (null === this._data || 0 === this._data.items.length) return {
          distance: 0,
          dashPattern: []
        };
        const {
          lineWidth: series,
          lineColor: o,
          lineStyle: newSeries,
          items: r,
          visibleItemsRange: a,
          skipHoles: l,
          extendToBarsEndings: c
        } = this._data, {
          context: h,
          horizontalPixelRatio: u,
          verticalPixelRatio: m
        } = exports;
        let g = !1,
          f = Math.max(Math.floor((r[0].style?.width ?? s) * u)),
          y = f % 2 ? .5 : 0;
        const v = a?.startItemIndex ?? 0,
          S = a?.endItemIndex ?? r.length;
        if (S <= v) return {
          distance: 0,
          dashPattern: []
        };
        const b = new _.SmartDashCanvas(h, !!i);
        let w, C, T, P, x = 0;
        if (!i && t.needDashOffset()) {
          const {
            distance: i,
            dashPattern: s
          } = this._drawDecorationItem(exports, t, !0), o = (0, p.sum)(series);
          if (o > 0) {
            const exports = i % o;
            h.lineDashOffset = x = o - e - s[1]
          }
        }
        t.initialize(b, this._data, exports, r[0]), t.applyColor(exports, r[v].style?.color ?? o), t.applyLineWidth(b, h, f), t
          .applyLineStyle(b, h, n);
        let M = !1;
        const I = new d.PaneRendererLineItemsIterator(r, v, S, l);
        for (; I.next();) {
          const r = I.currentValue();
          if (!(0, d.isValidPoint)(r)) {
            w = void 0, M = !0;
            continue
          }
          const a = r.style?.color ?? o,
            l = r.style?.width ?? series,
            _ = r.style?.style ?? newSeries,
            v = a !== C,
            S = l !== T,
            A = _ !== P,
            L = {
              firstItem: I.currentValueIsFirst(),
              lastItem: I.currentValueIsLast(),
              extendToBarsEndings: c,
              valIsNotSameAsPrev: r.valIsNotSameAsPrev
            },
            k = {
              y: Math.round(r.y * m) + y,
              left: Math.round(r.left * u) + y,
              center: Math.round(r.center * u) + y,
              right: Math.round(r.right * u) + y
            };
          if (v || S || M || A) {
            if (C && T && g && (t.finishFragment(b, h, k, w), g = !1), v && t.applyColor(exports, a), S && (f = Math.max(
                1, Math.floor(l * u)), y = f % 2 ? .5 : 0, t.applyLineWidth(b, h, f)), A && t.applyLineStyle(b, h,
                _), !i) {
              const exports = b.lastSegmentDistance(),
                t = b.lastSegmentDashPattern(),
                i = (0, p.sum)(t);
              if (i > 0) {
                const t = e % i;
                h.lineDashOffset = t + x
              }
            }
            t.startFragment(b, h, k, L, w), g = !0, M = !1, C = a, T = l, P = _
          }
          t.drawItem(b, exports, k, L, w), w = k
        }
        return g && (t.finishFragment(b, h), g = !1), {
          distance: b.lastSegmentDistance(),
          dashPattern: b.lastSegmentDashPattern()
        }
      }
    }