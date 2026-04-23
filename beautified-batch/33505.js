/**
 * Module 33505 - Auto-beautified from TradingView webpack bundle
 *
 * @module 33505
 * @date 2026-04-23
 * @size 977 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2383, 10307
 *
 * Exports:
 *   - PaneRendererSeriesBase (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  PaneRendererSeriesBase: () => n
});
var s = i(2383),
  o = i(10307);
class n extends o.BitmapCoordinatesPaneRenderer {
    constructor() {
      super(...arguments), this._bars = []
    }
    hitTest(e) {
      const t = this._bars;
      if (0 === t.length) return null;
      const i = this._getTolerance(),
        s = t[0],
        o = t[t.length - 1];
      if (e.x < s.left - i) return null;
      if (e.x > o.right + i) return null;
      let n = 0,
        r = t.length - 1,
        a = -1;
      for (; n <= r;) {
        const i = Math.floor((n + r) / 2),
          s = t[i];
        if (e.x >= s.left && e.x <= s.right) {
          a = i;
          break
        }
        e.x > s.right ? n = i + 1 : r = i - 1
      }
      if (-1 === a) return null;
      if (this._isPointAtBar(t[a], e.y, i)) return this._getHitTest();
      let l = a;
      for (; l >= 1 && e.x - t[l - 1].right < i;) l--;
      let c = a;
      for (; c <= t.length - 2 && t[c + 1].left - e.x < i;) c++;
      const h = Math.max(0, l),
        d = Math.min(t.length - 1, c);
      for (let s = h; s <= d; s++)
        if (s !== a && this._isPointAtBar(t[s], e.y, i)) return this._getHitTest();
      return null
    }
    _getHitTest() {
      return new s.HitTestResult(s.HitTarget.Regular)
    }
    _isPointAtBar(e, t, i) {
      const s = Math.min(e.high, e.low),
        o = Math.max(e.high, e.low);
      return s - i <= t && t <= o + i
    }
