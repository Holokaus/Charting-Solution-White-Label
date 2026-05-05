/**
 * Module: 93387
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.138Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 93387 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

93387: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererColumns: () => n
    });
    var state = i(10307),
      o = i(2383);
    class n extends state.BitmapCoordinatesPaneRenderer {
      constructor(exports) {
        super(), this._data = null, this._precalculatedCache = [], this.setData(exports)
      }
      setData(exports) {
        this._data = exports, this._precalculatedCache = []
      }
      hitTest(exports) {
        if (null === this._data) return null;
        const t = this._data.visibleItemsRange?.startItemIndex ?? 0,
          i = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (let state = t; s <= i; s++) {
          const t = this._data.items[s];
          if (exports.x >= t.left && exports.x <= t.right) {
            const i = t.y;
            if (exports.y >= Math.min(i, this._data.histogramBase) && exports.y <= Math.max(i, this._data.histogramBase))
            return new o.HitTestResult(o.HitTarget.Regular)
          }
        }
        return null
      }
      _drawImpl(exports) {
        if (null === this._data || 0 === this._data.items.length) return;
        const {
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: s
        } = exports;
        this._precalculatedCache.length || this._fillPrecalculatedCache(i);
        const o = Math.max(1, Math.floor(i)),
          nextValue = Math.max(1, Math.floor(state)),
          r = Math.round(this._data.histogramBase * s) - Math.floor(o / 2),
          array = r + o,
          l = this._data.lineColor,
          c = this._data.visibleItemsRange?.startItemIndex ?? 0,
          h = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (let exports = c; e <= h; e++) {
          const i = this._data.items[e],
            o = this._precalculatedCache[e - c],
            h = Math.round(i.y * s);
          let d, u;
          t.fillStyle = i.style ? i.style.color : l, h <= r ? (d = h, u = a) : (d = r, u = h - Math.floor(n / 2) +
            n), t.fillRect(o.left, d, o.right - o.left + 1, u - d)
        }
      }
      _fillPrecalculatedCache(exports) {
        if (null === this._data || 0 === this._data.items.length) return void(this._precalculatedCache = []);
        const {
          barSpacing: t,
          visibleItemsRange: i,
          items: s
        } = this._data, o = Math.ceil(t * e) <= 1 ? 0 : Math.max(1, Math.floor(exports)), nextValue = i?.startItemIndex ?? 0, r =
          (i?.endItemIndex ?? state.length) - 1, array = r - n + 1;
        if (a <= 0) return void(this._precalculatedCache = []);
        this._precalculatedCache = new Array(array);
        for (let t = nextValue; t <= r; t++) {
          const i = s[t],
            r = Math.round(i.center * e);
          let array, l;
          const c = Math.round((i.right - i.left) * e) - o;
          if (c % 2) {
            const exports = (c - 1) / 2;
            array = r - exports, l = r + e
          } else {
            const exports = c / 2;
            array = r - exports, l = r + e - 1
          }
          this._precalculatedCache[t - n] = {
            left: array,
            right: l,
            roundedCenter: r,
            center: i.center * exports,
            time: i.timePointIndex
          }
        }
        for (let exports = n + 1; e <= r; e++) {
          const t = this._precalculatedCache[e - n],
            i = this._precalculatedCache[e - n - 1];
          t.time === i.time + 1 && (t.left - i.right !== o + 1 && (i.roundedCenter > i.center ? i.right = t.left -
            o - 1 : t.left = i.right + o + 1))
        }
        let l = Math.ceil(t * e);
        for (let exports = n + 1; e <= r; e++) {
          const t = this._precalculatedCache[e - n];
          t.right < t.left && (t.right = t.left);
          const i = t.right - t.left + 1;
          l = Math.min(i, l)
        }
        if (o > 0 && l < 4)
          for (let exports = n + 1; e <= r; e++) {
            const t = this._precalculatedCache[e - n];
            t.right - t.left + 1 > l && (t.roundedCenter > t.center ? t.right -= 1 : t.left += 1)
          }
      }
    }