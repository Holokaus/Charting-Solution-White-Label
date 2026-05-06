/**
 * Module 64138 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64138: (e, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererBars: () => n
    });
    var s = i(4539),
      o = i(33505);
    class n extends o.PaneRendererSeriesBase {
      constructor(e) {
        super(), this._bars = e.bars, this._dontDrawOpen = e.dontDrawOpen, this._thinBars = e.thinBars
      }
      _drawImpl(e) {
        const {
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: s
        } = e;
        t.save();
        let o = null;
        for (const e of this._bars) {
          let n = this._calcRealBarWidth(e.right - e.left, i);
          if (n >= 2) {
            Math.max(1, Math.floor(i)) % 2 != n % 2 && n--
          }
          const r = this._thinBars ? Math.min(n, Math.floor(i)) : n,
            a = r <= n && e.right - e.left >= Math.floor(1.5 * i);
          o !== e.color && (t.fillStyle = e.color, o = e.color);
          const l = Math.floor(.5 * r),
            c = Math.round(e.center * i),
            h = c - l,
            d = r,
            u = h + d - 1,
            _ = Math.min(e.high, e.low),
            p = Math.max(e.high, e.low),
            m = Math.round(_ * s) - l,
            g = Math.round(p * s) + l,
            f = Math.max(g - m, r);
          t.fillRect(h, m, d, f);
          const seriesBarFunction_y = Math.ceil(1.5 * n);
          if (a) {
            const i = c - seriesBarFunction_y,
              o = c + seriesBarFunction_y,
              n = Math.min(h - i, o - u);
            if (!this._dontDrawOpen) {
              let o = Math.max(m, Math.round(e.open * s) - l),
                r = o + d - 1;
              r > m + f - 1 && (r = m + f - 1, o = r - d + 1), t.fillRect(i, o, n, r - o + 1)
            }
            let r = Math.max(m, Math.round(e.close * s) - l),
              a = r + d - 1;
            a > m + f - 1 && (a = m + f - 1, r = a - d + 1), t.fillRect(u + 1, r, n, a - r + 1)
          }
        }
        t.restore()
      }
      _getTolerance() {
        return (0, s.interactionTolerance)().series
      }
      _calcRealBarWidth(e, t) {
        const i = Math.floor(t);
        return Math.max(i, Math.floor((0, s.optimalBarWidth)(e, t)))
      }
    }