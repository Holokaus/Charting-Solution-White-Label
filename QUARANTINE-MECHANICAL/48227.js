/**
 * Module 48227 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

48227: (seriesBarFunction_e, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererCandles: () => h
    });
    var seriesBarFunction_s, o = i(50151),
      n = i(2383),
      r = i(58221),
      seriesBarFunction_a = i(4539),
      l = i(33505);

    function c(seriesBarFunction_e, t, i, seriesBarFunction_s) {
      const o = Math.floor(t);
      return seriesBarFunction_e.map((seriesBarFunction_e => {
        let n = (0, seriesBarFunction_a.optimalCandlestickWidth)((seriesBarFunction_e.right - seriesBarFunction_e.left) * seriesBarFunction_s, t);
        n >= 2 && o % 2 != n % 2 && n--;
        const r = Math.floor(.5 * n),
          l = function(seriesBarFunction_e, t) {
            let i = Math.floor(1 * t);
            seriesBarFunction_e <= 2 * i && (i = Math.floor(.5 * (seriesBarFunction_e - 1)));
            const seriesBarFunction_s = Math.max(Math.floor(t), i);
            if (seriesBarFunction_e <= 2 * seriesBarFunction_s) return Math.max(Math.floor(t), Math.floor(1 * t));
            return seriesBarFunction_s
          }(n, t),
          c = Math.round(seriesBarFunction_e.center * t),
          h = c - r,
          d = h + n - 1,
          u = Math.abs(Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close) - Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close)) * i,
          _ = Math.round(Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close) * i),
          p = Math.round(Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close) * i);
        let m = Math.min(Math.floor(t), Math.floor(n * t));
        m = Math.max(Math.floor(t), Math.min(m, n));
        const g = Math.floor(.5 * m);
        return {
          rawBodyHeight: u,
          top: _,
          bottom: p,
          center: c,
          left: h,
          right: d,
          candleWidth: n,
          high: Math.round(seriesBarFunction_e.high * i),
          low: Math.round(seriesBarFunction_e.low * i),
          wickWidth: m,
          wickOffset: g,
          borderWidth: l
        }
      }))
    }! function(seriesBarFunction_e) {
      seriesBarFunction_e[seriesBarFunction_e.BarBorderWidth = 1] = "BarBorderWidth"
    }(seriesBarFunction_s || (seriesBarFunction_s = {}));
    class h extends l.PaneRendererSeriesBase {
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
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: seriesBarFunction_s
        } = seriesBarFunction_e;
        if (0 === this._bars.length) return;
        const o = c(this._bars, i, seriesBarFunction_s, this._scaleCoeff);
        this._wickVisible && this._drawWicks(t, o), this._borderVisible && this._drawBorder(t, o), this
          ._bodyVisible && this._drawCandles(t, o)
      }
      _getTolerance() {
        return (0, seriesBarFunction_a.interactionTolerance)().series
      }
      _getHitTest() {
        return this._hittest || new n.HitTestResult(n.HitTarget.Regular)
      }
      _isPointAtBar(seriesBarFunction_e, t, i) {
        const seriesBarFunction_s = this._bodyVisible || this._borderVisible,
          o = this._wickVisible;
        if (!seriesBarFunction_s && !o) return !1;
        if (seriesBarFunction_s) {
          const seriesBarFunction_s = o ? Math.min(seriesBarFunction_e.high, seriesBarFunction_e.low) : Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close),
            n = o ? Math.max(seriesBarFunction_e.high, seriesBarFunction_e.low) : Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close);
          return seriesBarFunction_s - i <= t && t <= n + i
        } {
          const seriesBarFunction_s = Math.min(seriesBarFunction_e.open, seriesBarFunction_e.close),
            o = Math.max(seriesBarFunction_e.open, seriesBarFunction_e.close);
          return seriesBarFunction_e.high - i <= t && t <= seriesBarFunction_s + i || o - i <= t && t <= seriesBarFunction_e.low + i
        }
      }
      _drawWicks(seriesBarFunction_e, t) {
        let i = "",
          seriesBarFunction_s = null;
        this._bars.forEach(((n, r) => {
          const seriesBarFunction_a = n.wickColor ? n.wickColor : (0, o.ensureDefined)(this._wickColor);
          seriesBarFunction_a !== i && (seriesBarFunction_e.fillStyle = seriesBarFunction_a, i = seriesBarFunction_a);
          let {
            top: l,
            bottom: c
          } = t[r];
          const {
            rawBodyHeight: h,
            borderWidth: d,
            center: u,
            high: _,
            low: p,
            wickWidth: m,
            wickOffset: g
          } = t[r];
          this._isPriceScaleInverted && ([c, l] = [l, c]);
          let f = u - g;
          const y = f + m - 1;
          null !== seriesBarFunction_s && (f = Math.max(seriesBarFunction_s + 1, f), f = Math.min(f, y));
          const v = y - f + 1;
          h <= d && (l !== _ && (l = Math.round(l - .5 * d)), c = c !== p ? Math.round(l - .5 * d) + d - 1 :
              p - 1), l !== _ && seriesBarFunction_e.fillRect(f, _, v, l - _), p - c - 1 && seriesBarFunction_e.fillRect(f, c + 1, v, p - c - 1),
            seriesBarFunction_s = y
        }))
      }
      _drawBorder(seriesBarFunction_e, t) {
        let i = "",
          seriesBarFunction_s = null;
        this._bars.forEach(((n, seriesBarFunction_a) => {
          if (n.borderColor !== i && (seriesBarFunction_e.fillStyle = n.borderColor ? n.borderColor : (0, o.ensureDefined)(this
              ._borderColor), i = n.borderColor), this._bodyVisible && n.hollow) return;
          let {
            left: l
          } = t[seriesBarFunction_a];
          const {
            rawBodyHeight: c,
            top: h,
            bottom: d,
            right: u,
            borderWidth: _
          } = t[seriesBarFunction_a];
          null !== seriesBarFunction_s && (l = Math.max(seriesBarFunction_s + 1, l), l = Math.min(l, u));
          const p = u - l + 1;
          c <= _ ? seriesBarFunction_e.fillRect(l, Math.round(h - .5 * _), p, _) : p > 2 * _ ? (0, r.fillRectInnerBorder)(seriesBarFunction_e, l,
            h, u - l + 1, d - h + 1, _) : seriesBarFunction_e.fillRect(l, h, p, d - h + 1), seriesBarFunction_s = u
        }))
      }
      _drawCandles(seriesBarFunction_e, t) {
        let i = "";
        this._bars.forEach(((seriesBarFunction_s, o) => {
          let {
            top: n,
            bottom: seriesBarFunction_a,
            left: l,
            right: c
          } = t[o];
          const {
            rawBodyHeight: h,
            borderWidth: d,
            candleWidth: u
          } = t[o];
          if (!(this._borderVisible && u <= 2 * d) || seriesBarFunction_s.hollow) {
            if (seriesBarFunction_s.color !== i) {
              const t = seriesBarFunction_s.color;
              seriesBarFunction_e.fillStyle = t, i = t
            }
            if (seriesBarFunction_s.hollow) seriesBarFunction_e.fillStyle = seriesBarFunction_s.color, h <= d ? seriesBarFunction_e.fillRect(l, Math.round(n - .5 * d), u, d) : (0, r
              .fillRectInnerBorder)(seriesBarFunction_e, l, n, c - l + 1, seriesBarFunction_a - n + 1, d);
            else {
              if (!this._borderVisible && h <= d) return void seriesBarFunction_e.fillRect(l, Math.round(n - .5 * d), u, d);
              if (this._borderVisible && (l += d, n += d, c -= d, seriesBarFunction_a -= d), n > seriesBarFunction_a) return;
              seriesBarFunction_e.fillRect(l, n, c - l + 1, seriesBarFunction_a - n + 1)
            }
          }
        }))
      }
    }