/**
 * Module: 64138
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.852Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 64138 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64138: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererBars: () => n
    });
    var series = i(4539),
      o = i(33505);
    class n extends o.PaneRendererSeriesBase {
      constructor(exports) {
        super(), this._bars = exports.bars, this._dontDrawOpen = exports.dontDrawOpen, this._thinBars = exports.thinBars
      }
      _drawImpl(exports) {
        const {
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: s
        } = exports;
        t.save();
        let o = null;
        for (const e of this._bars) {
          let newSeries = this._calcRealBarWidth(exports.right - exports.left, i);
          if (n >= 2) {
            Math.max(1, Math.floor(i)) % 2 != n % 2 && n--
          }
          const r = this._thinBars ? Math.min(newSeries, Math.floor(i)) : newSeries,
            a = r <= n && exports.right - exports.left >= Math.floor(1.5 * i);
          o !== exports.color && (t.fillStyle = exports.color, o = exports.color);
          const l = Math.floor(.5 * r),
            c = Math.round(exports.center * i),
            h = c - l,
            d = r,
            u = h + d - 1,
            _ = Math.min(exports.high, exports.low),
            p = Math.max(exports.high, exports.low),
            m = Math.round(_ * s) - l,
            g = Math.round(p * s) + l,
            f = Math.max(g - m, r);
          t.fillRect(h, m, d, f);
          const y = Math.ceil(1.5 * n);
          if (a) {
            const i = c - y,
              o = c + y,
              newSeries = Math.min(h - i, o - u);
            if (!this._dontDrawOpen) {
              let o = Math.max(m, Math.round(exports.open * s) - l),
                r = o + d - 1;
              r > m + f - 1 && (r = m + f - 1, o = r - d + 1), t.fillRect(i, o, newSeries, r - o + 1)
            }
            let r = Math.max(m, Math.round(exports.close * s) - l),
              a = r + d - 1;
            a > m + f - 1 && (a = m + f - 1, r = a - d + 1), t.fillRect(u + 1, r, newSeries, a - r + 1)
          }
        }
        t.restore()
      }
      _getTolerance() {
        return (0, series.interactionTolerance)().series
      }
      _calcRealBarWidth(exports, t) {
        const i = Math.floor(t);
        return Math.max(i, Math.floor((0, series.optimalBarWidth)(exports, t)))
      }
    }