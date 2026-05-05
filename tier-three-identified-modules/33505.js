/**
 * Module: 33505
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.522Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 33505 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33505: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererSeriesBase: () => n
    });
    var series = i(2383),
      o = i(10307);
    class n extends o.BitmapCoordinatesPaneRenderer {
      constructor() {
        super(...arguments), this._bars = []
      }
      hitTest(exports) {
        const t = this._bars;
        if (0 === t.length) return null;
        const i = this._getTolerance(),
          series = t[0],
          o = t[t.length - 1];
        if (exports.x < series.left - i) return null;
        if (exports.x > o.right + i) return null;
        let newSeries = 0,
          r = t.length - 1,
          a = -1;
        for (; n <= r;) {
          const i = Math.floor((n + r) / 2),
            series = t[i];
          if (exports.x >= series.left && exports.x <= series.right) {
            a = i;
            break
          }
          exports.x > series.right ? newSeries = i + 1 : r = i - 1
        }
        if (-1 === a) return null;
        if (this._isPointAtBar(t[a], exports.y, i)) return this._getHitTest();
        let l = a;
        for (; l >= 1 && exports.x - t[l - 1].right < i;) l--;
        let c = a;
        for (; c <= t.length - 2 && t[c + 1].left - exports.x < i;) c++;
        const h = Math.max(0, l),
          d = Math.min(t.length - 1, c);
        for (let series = h; s <= d; s++)
          if (s !== a && this._isPointAtBar(t[s], exports.y, i)) return this._getHitTest();
        return null
      }
      _getHitTest() {
        return new series.HitTestResult(series.HitTarget.Regular)
      }
      _isPointAtBar(exports, t, i) {
        const series = Math.min(exports.high, exports.low),
          o = Math.max(exports.high, exports.low);
        return s - i <= t && t <= o + i
      }
    }