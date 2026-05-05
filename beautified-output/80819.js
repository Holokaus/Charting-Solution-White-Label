/**
 * Module 80819 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

80819: (e, t, i) => {
    "use strict";
    i.d(t, {
      TrendLineRenderer: () => _,
      drawArrow: () => u
    });
    var s = i(50151),
      o = i(2624),
      n = i(25672),
      r = i(2383),
      a = i(58221),
      l = i(4539),
      c = i(33350),
      h = i(69558);

    function d(e, t, i, s, o) {
      t.save(), t.fillStyle = "#000000", t.beginPath(), t.arc(e.x * o, e.y * o, i * o, 0, 2 * Math.PI, !1), t.fill(), s
        .strokeWidth && (t.lineWidth = s.strokeWidth, t.stroke()), t.restore()
    }

    function u(e, t, i, s, o, n = !1) {
      if (t.subtract(e).length() < 1) return;
      const r = (0, l.getArrowPoints)(e, t, s, n, !0).slice(0, 2);
      let a = null;
      const {
        horizontalPixelRatio: c,
        verticalPixelRatio: h
      } = o;
      for (let e = 0; e < r.length; ++e) {
        const t = r[e][0],
          s = r[e][1];
        (null === a || a.subtract(t).length() > 1) && i.moveTo(t.x * c, t.y * h), i.lineTo(s.x * c, s.y * h), a = s
      }
    }
    class _ {
      constructor() {
        this._data = null, this._hittest = new r.HitTestResult(r.HitTarget.MovePoint)
      }
      setData(e) {
        this._data = e
      }
      setHitTest(e) {
        this._hittest = e
      }
      draw(e, t) {
        const i = this._data;
        if (null === i) return;
        if ("points" in i && i.points.length < 2) return;
        const {
          horizontalPixelRatio: s
        } = t;
        if (void 0 !== i.excludeBoundaries) {
          e.save();
          for (const s of i.excludeBoundaries)(0, c.addExclusionArea)(e, t, s)
        }
        const {
          linestyle: o,
          lineCap: n = (o === h.LINESTYLE_SOLID ? "round" : "butt")
        } = i;
        e.lineCap = n, e.lineJoin = "round", e.strokeStyle = i.color, e.lineWidth = Math.max(1, Math.floor(i
          .linewidth * s)), (0, a.setLineStyle)(e, o);
        const r = i.points[0],
          l = i.points[1];
        let d = [];
        e.beginPath(), i.overlayLineEndings ? d = [r.clone(), l.clone()] : this._drawEnds(e, [r, l], i.linewidth, t);
        const u = this._extendAndClipLineSegment(r, l, t);
        null !== u && i.linewidth > 0 && (0, a.addPixelPerfectLineToPath)(e, u[0].x, u[0].y, u[1].x, u[1].y, t), i
          .overlayLineEndings && this._drawEnds(e, d, i.linewidth, t), e.stroke(), void 0 !== i.excludeBoundaries && e
          .restore()
      }
      hitTest(e, t) {
        const i = this._data;
        if (null === i) return null;
        if ("points" in i && i.points.length < 2) return null;
        const s = (i.hitTestTolerance ?? (0, l.interactionTolerance)().line) + i.linewidth / 2,
          n = i.points[0],
          r = i.points[1],
          a = this._extendAndClipLineSegment(n, r, t);
        if (null !== a) {
          if ((0, o.distanceToSegment)(a[0], a[1], e).distance <= s) return this._hittest
        }
        return null
      }
      _extendAndClipLineSegment(e, t, i) {
        const o = (0, s.ensureNotNull)(this._data);
        return (0, l.extendAndClipLineSegment)(e, t, i.mediaSize.width, i.mediaSize.height, o.extendleft, o
          .extendright)
      }
      _drawEnds(e, t, i, o) {
        const r = t[0],
          a = t[1],
          l = (0, s.ensureNotNull)(this._data);
        switch (l.leftend) {
          case n.LineEnd.Arrow:
            u(a, r, e, i, o);
            break;
          case n.LineEnd.Circle:
            d(r, e, i, (0, s.ensureDefined)(l.endstyle), o.horizontalPixelRatio)
        }
        switch (l.rightend) {
          case n.LineEnd.Arrow:
            u(r, a, e, i, o);
            break;
          case n.LineEnd.Circle:
            d(a, e, i, (0, s.ensureDefined)(l.endstyle), o.horizontalPixelRatio)
        }
      }
    }