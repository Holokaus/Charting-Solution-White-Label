/**
 * Module 64138 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

64138: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      PaneRendererBars: () => seriesBarFunction_n
    });
    var seriesBarFunction_s = seriesBarFunction_i(4539),
      seriesBarFunction_o = seriesBarFunction_i(33505);
    class seriesBarFunction_n extends seriesBarFunction_o.PaneRendererSeriesBase {
      constructor(seriesBarFunction_e) {
        super(), this._bars = seriesBarFunction_e.bars, this._dontDrawOpen = seriesBarFunction_e.dontDrawOpen, this._thinBars = seriesBarFunction_e.thinBars
      }
      _drawImpl(seriesBarFunction_e) {
        const {
          context: seriesBarFunction_t,
          horizontalPixelRatio: seriesBarFunction_i,
          verticalPixelRatio: seriesBarFunction_s
        } = seriesBarFunction_e;
        seriesBarFunction_t.save();
        let seriesBarFunction_o = null;
        for (const seriesBarFunction_e of this._bars) {
          let seriesBarFunction_n = this._calcRealBarWidth(seriesBarFunction_e.right - seriesBarFunction_e.left, seriesBarFunction_i);
          if (seriesBarFunction_n >= 2) {
            Math.max(1, Math.floor(seriesBarFunction_i)) % 2 != seriesBarFunction_n % 2 && seriesBarFunction_n--
          }
          const seriesBarFunction_r = this._thinBars ? Math.min(seriesBarFunction_n, Math.floor(seriesBarFunction_i)) : seriesBarFunction_n,
            seriesBarFunction_a = seriesBarFunction_r <= seriesBarFunction_n && seriesBarFunction_e.right - seriesBarFunction_e.left >= Math.floor(1.5 * seriesBarFunction_i);
          seriesBarFunction_o !== seriesBarFunction_e.color && (seriesBarFunction_t.fillStyle = seriesBarFunction_e.color, seriesBarFunction_o = seriesBarFunction_e.color);
          const seriesBarFunction_l = Math.floor(.5 * seriesBarFunction_r),
            seriesBarFunction_c = Math.round(seriesBarFunction_e.center * seriesBarFunction_i),
            seriesBarFunction_h = seriesBarFunction_c - seriesBarFunction_l,
            seriesBarFunction_d = seriesBarFunction_r,
            seriesBarFunction_u = seriesBarFunction_h + seriesBarFunction_d - 1,
            _ = Math.min(seriesBarFunction_e.high, seriesBarFunction_e.low),
            seriesBarFunction_p = Math.max(seriesBarFunction_e.high, seriesBarFunction_e.low),
            seriesBarFunction_m = Math.round(_ * seriesBarFunction_s) - seriesBarFunction_l,
            seriesBarFunction_g = Math.round(seriesBarFunction_p * seriesBarFunction_s) + seriesBarFunction_l,
            seriesBarFunction_f = Math.max(seriesBarFunction_g - seriesBarFunction_m, seriesBarFunction_r);
          seriesBarFunction_t.fillRect(seriesBarFunction_h, seriesBarFunction_m, seriesBarFunction_d, seriesBarFunction_f);
          const seriesBarFunction_y = Math.ceil(1.5 * seriesBarFunction_n);
          if (seriesBarFunction_a) {
            const seriesBarFunction_i = seriesBarFunction_c - seriesBarFunction_y,
              seriesBarFunction_o = seriesBarFunction_c + seriesBarFunction_y,
              seriesBarFunction_n = Math.min(seriesBarFunction_h - seriesBarFunction_i, seriesBarFunction_o - seriesBarFunction_u);
            if (!this._dontDrawOpen) {
              let seriesBarFunction_o = Math.max(seriesBarFunction_m, Math.round(seriesBarFunction_e.open * seriesBarFunction_s) - seriesBarFunction_l),
                seriesBarFunction_r = seriesBarFunction_o + seriesBarFunction_d - 1;
              seriesBarFunction_r > seriesBarFunction_m + seriesBarFunction_f - 1 && (seriesBarFunction_r = seriesBarFunction_m + seriesBarFunction_f - 1, seriesBarFunction_o = seriesBarFunction_r - seriesBarFunction_d + 1), seriesBarFunction_t.fillRect(seriesBarFunction_i, seriesBarFunction_o, seriesBarFunction_n, seriesBarFunction_r - seriesBarFunction_o + 1)
            }
            let seriesBarFunction_r = Math.max(seriesBarFunction_m, Math.round(seriesBarFunction_e.close * seriesBarFunction_s) - seriesBarFunction_l),
              seriesBarFunction_a = seriesBarFunction_r + seriesBarFunction_d - 1;
            seriesBarFunction_a > seriesBarFunction_m + seriesBarFunction_f - 1 && (seriesBarFunction_a = seriesBarFunction_m + seriesBarFunction_f - 1, seriesBarFunction_r = seriesBarFunction_a - seriesBarFunction_d + 1), seriesBarFunction_t.fillRect(seriesBarFunction_u + 1, seriesBarFunction_r, seriesBarFunction_n, seriesBarFunction_a - seriesBarFunction_r + 1)
          }
        }
        seriesBarFunction_t.restore()
      }
      _getTolerance() {
        return (0, seriesBarFunction_s.interactionTolerance)().series
      }
      _calcRealBarWidth(seriesBarFunction_e, seriesBarFunction_t) {
        const seriesBarFunction_i = Math.floor(seriesBarFunction_t);
        return Math.max(seriesBarFunction_i, Math.floor((0, seriesBarFunction_s.optimalBarWidth)(seriesBarFunction_e, seriesBarFunction_t)))
      }
    }