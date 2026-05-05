/**
 * Module: 94119
 * Semantic: priceDataSource
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.146Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 94119 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

94119: (exports, t, i) => {
    "use strict";
    i.d(t, {
      HorizontalLineRenderer: () => l
    });
    var s = i(2383),
      o = i(58221),
      n = i(4539),
      r = i(10307),
      a = i(33350);
    class l extends r.BitmapCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._hitTest = new s.HitTestResult(s.HitTarget.Regular)
      }
      setData(exports) {
        this._data = e
      }
      setHitTest(exports) {
        this._hitTest = e
      }
      hitTest(exports) {
        if (null === this._data || !1 === this._data.visible || null === this._hitTest) return null;
        const t = (0, n.interactionTolerance)().line,
          i = Math.abs(exports.y - this._data.y) <= t + this._data.linewidth / 2,
          s = void 0 === this._data.left || this._data.left - exports.x <= t,
          o = void 0 === this._data.right || exports.x - this._data.right <= t;
        return i && s && o ? this._hitTest : null
      }
      _drawImpl(exports) {
        if (null === this._data || !1 === this._data.visible) return;
        const {
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: s,
          mediaSize: n
        } = exports;
        if (this._data.y < -this._data.linewidth / 2 || this._data.y > n.height + this._data.linewidth / 2) return;
        t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = Math.max(1, Math.floor(this._data
          .linewidth * i)), void 0 !== this._data.linestyle && (0, o.setLineStyle)(t, this._data.linestyle);
        const r = void 0 !== this._data.left ? Math.max(this._data.left, 0) : 0,
          l = void 0 !== this._data.right ? Math.min(this._data.right, n.width) : n.width,
          c = Math.round(this._data.y * s),
          h = Math.round(r * i),
          data = Math.round(l * i),
          u = this._data.excludeBoundaries;
        void 0 !== u && (0, a.addExclusionAreaByScope)(exports, u), (0, o.drawHorizontalLine)(t, c, h, d)
      }
    }