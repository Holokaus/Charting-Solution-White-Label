/**
 * Module 86228 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86228: (e, t, i) => {
    "use strict";
    i.d(t, {
      RectangleRenderer: () => _
    });
    var s, o = i(50151),
      n = i(10555),
      r = i(6453),
      a = i(2624),
      l = i(52859),
      c = i(2383),
      h = i(18330),
      d = i(58221),
      u = i(10307);
    ! function(e) {
      e[e.HitTestTolerance = 3] = "HitTestTolerance"
    }(s || (s = {}));
    class _ extends u.BitmapCoordinatesPaneRenderer {
      constructor(e) {
        super(), this._data = null, this._forceOverrideTransparency = Boolean(e)
      }
      setData(e) {
        this._data = e
      }
      hitTest(e, t) {
        if (null === this._data || this._data.points.length < 2 || this._data.disableInteractions) return null;
        const i = t.mediaSize.width,
          s = (0, n.box)(...this._data.points),
          o = s.min,
          r = s.max,
          l = new n.Point(r.x, o.y),
          h = new n.Point(o.x, r.y),
          d = this._extendAndHitTestLineSegment(e, o, l, i);
        if (null !== d) return d;
        const u = this._extendAndHitTestLineSegment(e, h, r, i);
        if (null !== u) return u;
        let _ = (0, a.distanceToSegment)(l, r, e);
        if (_.distance <= 3) return new c.HitTestResult(c.HitTarget.MovePoint);
        if (_ = (0, a.distanceToSegment)(o, h, e), _.distance <= 3) return new c.HitTestResult(c.HitTarget
          .MovePoint);
        if (this._data.middleLine) {
          const t = s.min.add(s.max).scaled(.5),
            o = this._extendAndHitTestLineSegment(e, new n.Point(s.min.x, t.y), new n.Point(s.max.x, t.y), i);
          if (null !== o) return o
        }
        return this._data.fillBackground ? this._hitTestBackground(e, o, r, i) : null
      }
      getColor() {
        const e = (0, o.ensure)(this._data);
        return void 0 === e.transparency ? e.backcolor : (0, l.generateColor)(e.backcolor, e.transparency, this
          ._forceOverrideTransparency)
      }
      visibleRectSegment(e) {
        const t = this._data;
        if (null === t) return null;
        const i = (0, n.box)(...t.points),
          s = i.min,
          o = i.max,
          r = e.width,
          a = e.height,
          l = t.extendLeft ? 0 : Math.max(s.x, 0),
          c = t.extendRight ? r : Math.min(o.x, r);
        if (l > c || c <= 0 || l >= r) return null;
        const h = Math.max(s.y, 0),
          d = Math.min(o.y, a);
        return h > d || d <= 0 || h > a ? null : [new n.Point(l, h), new n.Point(c, d)]
      }
      _drawImpl(e) {
        if (null === this._data || this._data.points.length < 2 || this._data.linewidth <= 0 && !this._data
          .fillBackground) return;
        const {
          horizontalPixelRatio: t,
          verticalPixelRatio: i,
          bitmapSize: s
        } = e, {
          extendLeft: o,
          extendRight: r,
          linewidth: a,
          middleLine: l
        } = this._data, c = (0, n.box)(...this._data.points), u = this._data.linewidth ? Math.max(1, Math.floor(this
            ._data.linewidth * t)) : 0, _ = this._data.fillBackground ? this.getColor() : void 0, p = Math.max(1,
            Math.floor(t)), m = o ? -a : Math.round(c.min.x * t), g = r ? s.width + a : Math.round(c.max.x * t), f =
          Math.round(c.min.y * i), y = Math.round(c.max.y * i);
        (0, d.fillRectWithBorder)(e, m, f, g, y, p, void 0 === _ ? void 0 : {
          color: _
        }, 0 === u ? void 0 : {
          color: this._data.color,
          lineStyle: this._data.linestyle ?? h.LineStyle.Solid,
          borderWidth: u,
          borderMode: "center",
          rightToLeftStroke: o && !r
        }, l ? {
          ...l,
          lineWidth: Math.max(1, Math.floor(l.lineWidth * i))
        } : void 0)
      }
      _extendAndHitTestLineSegment(e, t, i, s) {
        const o = this._extendAndClipLineSegment(t, i, s);
        if (null !== o) {
          if ((0, a.distanceToSegment)(o[0], o[1], e).distance <= 3) return new c.HitTestResult(c.HitTarget
            .MovePoint)
        }
        return null
      }
      _extendAndClipLineSegment(e, t, i) {
        const s = (0, o.ensureNotNull)(this._data);
        if ((0, n.equalPoints)(e, t) && !s.extendLeft && !s.extendRight) return null;
        const r = Math.min(e.x, t.x),
          a = Math.max(e.x, t.x),
          l = s.extendLeft ? 0 : Math.max(r, 0),
          c = s.extendRight ? i : Math.min(a, i);
        return l > c || c <= 0 || l >= i ? null : [new n.Point(l, e.y), new n.Point(c, t.y)]
      }
      _hitTestBackground(e, t, i, s) {
        const o = this._extendAndClipLineSegment(t, i, s);
        return null !== o && (0, r.pointInBox)(e, (0, n.box)(o[0], o[1])) ? new c.HitTestResult(this._data
          ?.backgroundHitTarget ?? c.HitTarget.MovePointBackground) : null
      }
    }