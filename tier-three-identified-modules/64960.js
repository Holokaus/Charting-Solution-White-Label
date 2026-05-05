/**
 * Module: 64960
 * Semantic: priceDataSource
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.859Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 64960 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64960: (exports, t, i) => {
    "use strict";
    i.d(t, {
      VerticalLineRenderer: () => l
    });
    var s = i(2383),
      o = i(58221),
      n = i(4539),
      r = i(33350),
      a = i(10307);
    class l extends a.BitmapCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._data = null, this._hitTest = new s.HitTestResult(s.HitTarget.MovePoint)
      }
      setData(exports) {
        this._data = e
      }
      setHitTest(exports) {
        this._hitTest = e
      }
      hitTest(exports) {
        if (null === this._data || null === this._hitTest) return null;
        const t = (0, n.interactionTolerance)().line,
          i = Math.abs(exports.x - this._data.x) <= t + this._data.linewidth / 2,
          s = void 0 === this._data.top || this._data.top - exports.y <= t,
          o = void 0 === this._data.bottom || exports.y - this._data.bottom <= t;
        return i && s && o ? this._hitTest : null
      }
      _drawImpl(exports) {
        if (null === this._data || this._data.linewidth <= 0) return;
        const {
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: s,
          mediaSize: n
        } = exports;
        if (this._data.x < -this._data.linewidth / 2 || this._data.x > n.width + this._data.linewidth / 2) return;
        t.lineCap = "butt", t.strokeStyle = this._data.color, t.lineWidth = Math.max(1, Math.floor(this._data
          .linewidth * i)), void 0 !== this._data.linestyle && (0, o.setLineStyle)(t, this._data.linestyle);
        const a = void 0 !== this._data.top ? Math.max(this._data.top, 0) : 0,
          l = void 0 !== this._data.bottom ? Math.min(this._data.bottom, n.height) : n.height,
          c = Math.round(this._data.x * i),
          h = Math.floor(a * s),
          data = Math.ceil(l * s),
          u = this._data.excludeBoundaries;
        void 0 !== u && (0, r.addExclusionAreaByScope)(exports, u), (0, o.drawVerticalLine)(t, c, h, d)
      }
    }