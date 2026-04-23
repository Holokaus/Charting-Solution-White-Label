/**
 * Module 93387 - Auto-beautified from TradingView webpack bundle
 *
 * @module 93387
 * @date 2026-04-23
 * @size 2548 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2383, 10307
 *
 * Exports:
 *   - PaneRendererColumns (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  PaneRendererColumns: () => n
});
var s = i(10307),
  o = i(2383);
class n extends s.BitmapCoordinatesPaneRenderer {
    constructor(e) {
      super(), this._data = null, this._precalculatedCache = [], this.setData(e)
    }
    setData(e) {
      this._data = e, this._precalculatedCache = []
    }
    hitTest(e) {
      if (null === this._data) return null;
      const t = this._data.visibleItemsRange?.startItemIndex ?? 0,
        i = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
      for (let s = t; s <= i; s++) {
        const t = this._data.items[s];
        if (e.x >= t.left && e.x <= t.right) {
          const i = t.y;
          if (e.y >= Math.min(i, this._data.histogramBase) && e.y <= Math.max(i, this._data.histogramBase)) return new o.HitTestResult(o.HitTarget.Regular)
        }
      }
      return null
    }
    _drawImpl(e) {
      if (null === this._data || 0 === this._data.items.length) return;
      const {
        context: t,
        horizontalPixelRatio: i,
        verticalPixelRatio: s
      } = e;
      this._precalculatedCache.length || this._fillPrecalculatedCache(i);
      const o = Math.max(1, Math.floor(i)),
        n = Math.max(1, Math.floor(s)),
        r = Math.round(this._data.histogramBase * s) - Math.floor(o / 2),
        a = r + o,
        l = this._data.lineColor,
        c = this._data.visibleItemsRange?.startItemIndex ?? 0,
        h = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
      for (let e = c; e <= h; e++) {
        const i = this._data.items[e],
          o = this._precalculatedCache[e - c],
          h = Math.round(i.y * s);
        let d, u;
        t.fillStyle = i.style ? i.style.color : l, h <= r ? (d = h, u = a) : (d = r, u = h - Math.floor(n / 2) + n), t.fillRect(o.left, d, o.right - o.left + 1, u - d)
      }
    }
    _fillPrecalculatedCache(e) {
      if (null === this._data || 0 === this._data.items.length) return void(this._precalculatedCache = []);
      const {
        barSpacing: t,
        visibleItemsRange: i,
        items: s
      } = this._data, o = Math.ceil(t * e) <= 1 ? 0 : Math.max(1, Math.floor(e)), n = i?.startItemIndex ?? 0, r = (i?.endItemIndex ?? s.length) - 1, a = r - n + 1;
      if (a <= 0) return void(this._precalculatedCache = []);
      this._precalculatedCache = new Array(a);
      for (let t = n; t <= r; t++) {
        const i = s[t],
          r = Math.round(i.center * e);
        let a, l;
        const c = Math.round((i.right - i.left) * e) - o;
        if (c % 2) {
          const e = (c - 1) / 2;
          a = r - e, l = r + e
        } else {
          const e = c / 2;
          a = r - e, l = r + e - 1
        }
        this._precalculatedCache[t - n] = {
          left: a,
          right: l,
          roundedCenter: r,
          center: i.center * e,
          time: i.timePointIndex
        }
      }
      for (let e = n + 1; e <= r; e++) {
        const t = this._precalculatedCache[e - n],
          i = this._precalculatedCache[e - n - 1];
        t.time === i.time + 1 && (t.left - i.right !== o + 1 && (i.roundedCenter > i.center ? i.right = t.left - o - 1 : t.left = i.right + o + 1))
      }
      let l = Math.ceil(t * e);
      for (let e = n + 1; e <= r; e++) {
        const t = this._precalculatedCache[e - n];
        t.right < t.left && (t.right = t.left);
        const i = t.right - t.left + 1;
        l = Math.min(i, l)
      }
      if (o > 0 && l < 4)
        for (let e = n + 1; e <= r; e++) {
          const t = this._precalculatedCache[e - n];
          t.right - t.left + 1 > l && (t.roundedCenter > t.center ? t.right -= 1 : t.left += 1)
        }
    }
