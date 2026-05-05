/**
 * Module 39697 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39697: (e, t, i) => {
    "use strict";
    i.d(t, {
      CircleRenderer: () => r
    });
    var s = i(6453),
      o = i(2383),
      n = i(4539);
    class r {
      constructor(e) {
        this._data = e ?? null
      }
      setData(e) {
        this._data = e
      }
      draw(e, t) {
        if (null === this._data) return;
        const {
          center: i,
          radius: s,
          lineWidth: o,
          color: n,
          backColor: r
        } = this._data;
        e.save();
        const {
          horizontalPixelRatio: a,
          verticalPixelRatio: l
        } = t, c = Math.max(1, Math.floor(a)), h = c % 2 / 2, d = Math.round(i.x * a) + h, u = Math.round(i.y * l) +
          h, _ = Math.round(d + s * a), p = Math.max(1, Math.floor(o * a)), m = _ - d - p;
        m > 0 && (e.fillStyle = r, e.beginPath(), e.moveTo(d + m, u), e.arc(d, u, m, 0, 2 * Math.PI, !1), e.fill());
        const g = Math.max(c / 2, _ - d - p / 2);
        e.strokeStyle = n, e.lineWidth = p, e.beginPath(), e.moveTo(d + g, u), e.arc(d, u, g, 0, 2 * Math.PI, !1), e
          .stroke(), e.restore()
      }
      hitTest(e) {
        if (null === this._data || this._data.disableInteractions) return null;
        const {
          center: t,
          radius: i,
          backgroundHitTarget: r
        } = this._data, a = (0, n.interactionTolerance)().curve;
        if (!(0, s.pointInCircle)(e, t, i + a)) return null;
        const l = i > a && (0, s.pointInCircle)(e, t, i - a) ? r ?? o.HitTarget.MovePointBackground : o.HitTarget
          .MovePoint;
        return new o.HitTestResult(l)
      }
    }