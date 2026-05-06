/**
 * Module 48227 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

48227: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      PaneRendererCandles: () => seriesBarFunction_h
    });
    var seriesBarFunction_s, seriesBarFunction_o = seriesBarFunction_i(50151),
      seriesBarFunction_n = seriesBarFunction_i(2383),
      seriesBarFunction_r = seriesBarFunction_i(58221),
      seriesBarFunction_a = seriesBarFunction_i(4539),
      seriesBarFunction_l = seriesBarFunction_i(33505);

    function seriesBarFunction_c(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s) {
      const seriesBarFunction_o = Math.floor(seriesBarFunction_t);
      return seriesBarFunction_e.map((seriesBarFunction_e => {
        let seriesBarFunction_n = (0, seriesBarFunction_a.optimalCandlestickWidth)((seriesBarFunction_e.right - seriesBarFunction_e.left) * seriesBarFunction_s, seriesBarFunction_t);
        seriesBarFunction_n >= 2 && seriesBarFunction_o % 2 != seriesBarFunction_n % 2 && seriesBarFunction_n--;
        const seriesBarFunction_r = Math.floor(.5 * seriesBarFunction_n),
          seriesBarFunction_l = function(seriesBarFunction_e, seriesBarFunction_t) {
            let seriesBarFunction_i = Math.floor(1 * seriesBarFunction_t);
            seriesBarFunction_e <= 2 * seriesBarFunction_i && (seriesBarFunction_i = Math.floor(.5 * (seriesBarFunction_e - 1)));
            const seriesBarFunction_s = Math.max(Math.floor(seriesBarFunction_t), seriesBarFunction_i);
            if (seriesBarFunction_e <= 2 * seriesBarFunction_s) return Math.max(Math.floor(seriesBarFunction_t), Math.floor(1 * seriesBarFunction_t));
            return seriesBarFunction_s
          }(seriesBarFunction_n, seriesBarFunction_t),
          seriesBarFunction_c = Math.round(seriesBarFunction_e.center * seriesBarFunction_t),
          seriesBarFunction_h = seriesBarFunction_c - seriesBarFunction_r,
          seriesBarFunction_d = seriesBarFunction_h + seriesBarFunction_n - 1,
          seriesBarFunction_u = Math.abs(Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close) - Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close)) * seriesBarFunction_i,
          _ = Math.round(Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close) * seriesBarFunction_i),
          seriesBarFunction_p = Math.round(Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close) * seriesBarFunction_i);
        let seriesBarFunction_m = Math.min(Math.floor(seriesBarFunction_t), Math.floor(seriesBarFunction_n * seriesBarFunction_t));
        seriesBarFunction_m = Math.max(Math.floor(seriesBarFunction_t), Math.min(seriesBarFunction_m, seriesBarFunction_n));
        const seriesBarFunction_g = Math.floor(.5 * seriesBarFunction_m);
        return {
          rawBodyHeight: seriesBarFunction_u,
          top: _,
          bottom: seriesBarFunction_p,
          center: seriesBarFunction_c,
          left: seriesBarFunction_h,
          right: seriesBarFunction_d,
          candleWidth: seriesBarFunction_n,
          high: Math.round(seriesBarFunction_e.high * seriesBarFunction_i),
          low: Math.round(seriesBarFunction_e.low * seriesBarFunction_i),
          wickWidth: seriesBarFunction_m,
          wickOffset: seriesBarFunction_g,
          borderWidth: seriesBarFunction_l
        }
      }))
    }! function(seriesBarFunction_e) {
      seriesBarFunction_e[seriesBarFunction_e.BarBorderWidth = 1] = "BarBorderWidth"
    }(seriesBarFunction_s || (seriesBarFunction_s = {}));
    class seriesBarFunction_h extends seriesBarFunction_l.PaneRendererSeriesBase {
      constructor(seriesBarFunction_e) {
        super(), this._scaleCoeff = 1, this._borderVisible = !1, this._wickVisible = !1, this._bodyVisible = !0,
          this._borderColor = void 0, this._wickColor = void 0, this._hittest = void 0, this
          ._isPriceScaleInverted = !1, seriesBarFunction_e && this.setData(seriesBarFunction_e)
      }
      setData(seriesBarFunction_e) {
        this._bars = seriesBarFunction_e.bars, this._scaleCoeff = seriesBarFunction_e.scaleCoeff ?? 1, this._borderVisible = seriesBarFunction_e.borderVisible, this
          ._bodyVisible = seriesBarFunction_e.bodyVisible, this._wickVisible = seriesBarFunction_e.wickVisible, this._borderColor = seriesBarFunction_e.borderColor, this
          ._wickColor = seriesBarFunction_e.wickColor, this._hittest = seriesBarFunction_e.hittest, this._isPriceScaleInverted = seriesBarFunction_e.isPriceScaleInverted
      }
      hitTest(seriesBarFunction_e) {
        return this._wickVisible || this._borderVisible || this._bodyVisible ? super.hitTest(seriesBarFunction_e) : null
      }
      _drawImpl(seriesBarFunction_e) {
        const {
          context: seriesBarFunction_t,
          horizontalPixelRatio: seriesBarFunction_i,
          verticalPixelRatio: seriesBarFunction_s
        } = seriesBarFunction_e;
        if (0 === this._bars.length) return;
        const seriesBarFunction_o = seriesBarFunction_c(this._bars, seriesBarFunction_i, seriesBarFunction_s, this._scaleCoeff);
        this._wickVisible && this._drawWicks(seriesBarFunction_t, seriesBarFunction_o), this._borderVisible && this._drawBorder(seriesBarFunction_t, seriesBarFunction_o), this
          ._bodyVisible && this._drawCandles(seriesBarFunction_t, seriesBarFunction_o)
      }
      _getTolerance() {
        return (0, seriesBarFunction_a.interactionTolerance)().series
      }
      _getHitTest() {
        return this._hittest || new seriesBarFunction_n.HitTestResult(seriesBarFunction_n.HitTarget.Regular)
      }
      _isPointAtBar(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) {
        const seriesBarFunction_s = this._bodyVisible || this._borderVisible,
          seriesBarFunction_o = this._wickVisible;
        if (!seriesBarFunction_s && !seriesBarFunction_o) return !1;
        if (seriesBarFunction_s) {
          const seriesBarFunction_s = seriesBarFunction_o ? Math.min(seriesBarFunction_e.high, seriesBarFunction_e.low) : Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close),
            seriesBarFunction_n = seriesBarFunction_o ? Math.max(seriesBarFunction_e.high, seriesBarFunction_e.low) : Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close);
          return seriesBarFunction_s - seriesBarFunction_i <= seriesBarFunction_t && seriesBarFunction_t <= seriesBarFunction_n + seriesBarFunction_i
        } {
          const seriesBarFunction_s = Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close),
            seriesBarFunction_o = Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close);
          return seriesBarFunction_e.high - seriesBarFunction_i <= seriesBarFunction_t && seriesBarFunction_t <= seriesBarFunction_s + seriesBarFunction_i || seriesBarFunction_o - seriesBarFunction_i <= seriesBarFunction_t && seriesBarFunction_t <= seriesBarFunction_e.low + seriesBarFunction_i
        }
      }
      _drawWicks(seriesBarFunction_e, seriesBarFunction_t) {
        let seriesBarFunction_i = "",
          seriesBarFunction_s = null;
        this._bars.forEach(((seriesBarFunction_n, seriesBarFunction_r) => {
          const seriesBarFunction_a = seriesBarFunction_n.wickColor ? seriesBarFunction_n.wickColor : (0, seriesBarFunction_o.ensureDefined)(this._wickColor);
          seriesBarFunction_a !== seriesBarFunction_i && (seriesBarFunction_e.fillStyle = seriesBarFunction_a, seriesBarFunction_i = seriesBarFunction_a);
          let {
            top: seriesBarFunction_l,
            bottom: seriesBarFunction_c
          } = seriesBarFunction_t[seriesBarFunction_r];
          const {
            rawBodyHeight: seriesBarFunction_h,
            borderWidth: seriesBarFunction_d,
            center: seriesBarFunction_u,
            high: _,
            low: seriesBarFunction_p,
            wickWidth: seriesBarFunction_m,
            wickOffset: seriesBarFunction_g
          } = seriesBarFunction_t[seriesBarFunction_r];
          this._isPriceScaleInverted && ([seriesBarFunction_c, seriesBarFunction_l] = [seriesBarFunction_l, seriesBarFunction_c]);
          let seriesBarFunction_f = seriesBarFunction_u - seriesBarFunction_g;
          const seriesBarFunction_y = seriesBarFunction_f + seriesBarFunction_m - 1;
          null !== seriesBarFunction_s && (seriesBarFunction_f = Math.max(seriesBarFunction_s + 1, seriesBarFunction_f), seriesBarFunction_f = Math.min(seriesBarFunction_f, seriesBarFunction_y));
          const seriesBarFunction_v = seriesBarFunction_y - seriesBarFunction_f + 1;
          seriesBarFunction_h <= seriesBarFunction_d && (seriesBarFunction_l !== _ && (seriesBarFunction_l = Math.round(seriesBarFunction_l - .5 * seriesBarFunction_d)), seriesBarFunction_c = seriesBarFunction_c !== seriesBarFunction_p ? Math.round(seriesBarFunction_l - .5 * seriesBarFunction_d) + seriesBarFunction_d - 1 :
              seriesBarFunction_p - 1), seriesBarFunction_l !== _ && seriesBarFunction_e.fillRect(seriesBarFunction_f, _, seriesBarFunction_v, seriesBarFunction_l - _), seriesBarFunction_p - seriesBarFunction_c - 1 && seriesBarFunction_e.fillRect(seriesBarFunction_f, seriesBarFunction_c + 1, seriesBarFunction_v, seriesBarFunction_p - seriesBarFunction_c - 1),
            seriesBarFunction_s = seriesBarFunction_y
        }))
      }
      _drawBorder(seriesBarFunction_e, seriesBarFunction_t) {
        let seriesBarFunction_i = "",
          seriesBarFunction_s = null;
        this._bars.forEach(((seriesBarFunction_n, seriesBarFunction_a) => {
          if (seriesBarFunction_n.borderColor !== seriesBarFunction_i && (seriesBarFunction_e.fillStyle = seriesBarFunction_n.borderColor ? seriesBarFunction_n.borderColor : (0, seriesBarFunction_o.ensureDefined)(this
              ._borderColor), seriesBarFunction_i = seriesBarFunction_n.borderColor), this._bodyVisible && seriesBarFunction_n.hollow) return;
          let {
            left: seriesBarFunction_l
          } = seriesBarFunction_t[seriesBarFunction_a];
          const {
            rawBodyHeight: seriesBarFunction_c,
            top: seriesBarFunction_h,
            bottom: seriesBarFunction_d,
            right: seriesBarFunction_u,
            borderWidth: _
          } = seriesBarFunction_t[seriesBarFunction_a];
          null !== seriesBarFunction_s && (seriesBarFunction_l = Math.max(seriesBarFunction_s + 1, seriesBarFunction_l), seriesBarFunction_l = Math.min(seriesBarFunction_l, seriesBarFunction_u));
          const seriesBarFunction_p = seriesBarFunction_u - seriesBarFunction_l + 1;
          seriesBarFunction_c <= _ ? seriesBarFunction_e.fillRect(seriesBarFunction_l, Math.round(seriesBarFunction_h - .5 * _), seriesBarFunction_p, _) : seriesBarFunction_p > 2 * _ ? (0, seriesBarFunction_r.fillRectInnerBorder)(seriesBarFunction_e, seriesBarFunction_l,
            seriesBarFunction_h, seriesBarFunction_u - seriesBarFunction_l + 1, seriesBarFunction_d - seriesBarFunction_h + 1, _) : seriesBarFunction_e.fillRect(seriesBarFunction_l, seriesBarFunction_h, seriesBarFunction_p, seriesBarFunction_d - seriesBarFunction_h + 1), seriesBarFunction_s = seriesBarFunction_u
        }))
      }
      _drawCandles(seriesBarFunction_e, seriesBarFunction_t) {
        let seriesBarFunction_i = "";
        this._bars.forEach(((seriesBarFunction_s, seriesBarFunction_o) => {
          let {
            top: seriesBarFunction_n,
            bottom: seriesBarFunction_a,
            left: seriesBarFunction_l,
            right: seriesBarFunction_c
          } = seriesBarFunction_t[seriesBarFunction_o];
          const {
            rawBodyHeight: seriesBarFunction_h,
            borderWidth: seriesBarFunction_d,
            candleWidth: seriesBarFunction_u
          } = seriesBarFunction_t[seriesBarFunction_o];
          if (!(this._borderVisible && seriesBarFunction_u <= 2 * seriesBarFunction_d) || seriesBarFunction_s.hollow) {
            if (seriesBarFunction_s.color !== seriesBarFunction_i) {
              const seriesBarFunction_t = seriesBarFunction_s.color;
              seriesBarFunction_e.fillStyle = seriesBarFunction_t, seriesBarFunction_i = seriesBarFunction_t
            }
            if (seriesBarFunction_s.hollow) seriesBarFunction_e.fillStyle = seriesBarFunction_s.color, seriesBarFunction_h <= seriesBarFunction_d ? seriesBarFunction_e.fillRect(seriesBarFunction_l, Math.round(seriesBarFunction_n - .5 * seriesBarFunction_d), seriesBarFunction_u, seriesBarFunction_d) : (0, seriesBarFunction_r
              .fillRectInnerBorder)(seriesBarFunction_e, seriesBarFunction_l, seriesBarFunction_n, seriesBarFunction_c - seriesBarFunction_l + 1, seriesBarFunction_a - seriesBarFunction_n + 1, seriesBarFunction_d);
            else {
              if (!this._borderVisible && seriesBarFunction_h <= seriesBarFunction_d) return void seriesBarFunction_e.fillRect(seriesBarFunction_l, Math.round(seriesBarFunction_n - .5 * seriesBarFunction_d), seriesBarFunction_u, seriesBarFunction_d);
              if (this._borderVisible && (seriesBarFunction_l += seriesBarFunction_d, seriesBarFunction_n += seriesBarFunction_d, seriesBarFunction_c -= seriesBarFunction_d, seriesBarFunction_a -= seriesBarFunction_d), seriesBarFunction_n > seriesBarFunction_a) return;
              seriesBarFunction_e.fillRect(seriesBarFunction_l, seriesBarFunction_n, seriesBarFunction_c - seriesBarFunction_l + 1, seriesBarFunction_a - seriesBarFunction_n + 1)
            }
          }
        }))
      }
    }