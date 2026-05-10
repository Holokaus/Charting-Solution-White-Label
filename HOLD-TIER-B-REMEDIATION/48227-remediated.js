/**
 * Module 48227 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

48227: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererCandles: () => h
    });
    var modes, o = i(50151),
      n = i(2383),
      r = i(58221),
      seriesBarFunction_a = i(4539),
      l = i(33505);

    function context(exports, t, i, modes) {
      const o = Math.floor(t);
      return exports.map((exportstring => {
        let n = (0, seriesBarFunction_a.optimalCandlestickWidth)((exports.right - exports.left) * modes, t);
        n >= 2 && o % 2 != n % 2 && n--;
        const r = Math.floor(.5 * n),
          l = function(exports, t) {
            let i = Math.floor(1 * t);
            exports <= 2 * i && (i = Math.floor(.5 * (exports - 1)));
            const modes = Math.max(Math.floor(t), i);
            if (exports <= 2 * modes) return Math.max(Math.floor(t), Math.floor(1 * t));
            return modes
          }(n, t),
          c = Math.round(exports.center * t),
          h = c - r,
          d = h + n - 1,
          u = Math.abs(Math.max(exports.open, exports.close) - Math.min(exports.open, exports.close)) * i,
          _ = Math.round(Math.min(exports.open, exports.close) * i),
          p = Math.round(Math.max(exports.open, exports.close) * i);
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
          high: Math.round(exports.high * i),
          low: Math.round(exports.low * i),
          wickWidth: m,
          wickOffset: g,
          borderWidth: l
        }
      }))
    }! function(exports) {
      exports[exports.BarBorderWidth = 1] = "BarBorderWidth"
    }(modes || (modes = {}));
    class h extends l.PaneRendererSeriesBase {
      constructor(exports) {
        super(), this._scaleCoeff = 1, this._borderVisible = !1, this._wickVisible = !1, this._bodyVisible = !0,
          this._borderColor = void 0, this._wickColor = void 0, this._hittest = void 0, this
          ._isPriceScaleInverted = !1, exports && this.setData(exports)
      }
      setData(exports) {
        this._bars = exports.bars, this._scaleCoeff = exports.scaleCoeff ?? 1, this._borderVisible = exports.borderVisible, this
          ._bodyVisible = exports.bodyVisible, this._wickVisible = exports.wickVisible, this._borderColor = exports.borderColor, this
          ._wickColor = exports.wickColor, this._hittest = exports.hittest, this._isPriceScaleInverted = exports.isPriceScaleInverted
      }
      hitTest(exports) {
        return this._wickVisible || this._borderVisible || this._bodyVisible ? super.hitTest(exports) : null
      }
      _drawImpl(exports) {
        const {
          context: t,
          horizontalPixelRatio: i,
          verticalPixelRatio: modes
        } = exports;
        if (0 === this._bars.length) return;
        const o = c(this._bars, i, modes, this._scaleCoeff);
        this._wickVisible && this._drawWicks(t, o), this._borderVisible && this._drawBorder(t, o), this
          ._bodyVisible && this._drawCandles(t, o)
      }
      _getTolerance() {
        return (0, seriesBarFunction_a.interactionTolerance)().series
      }
      _getHitTest() {
        return this._hittest || new n.HitTestResult(n.HitTarget.Regular)
      }
      _isPointAtBar(exports, t, i) {
        const modes = this._bodyVisible || this._borderVisible,
          o = this._wickVisible;
        if (!modes && !o) return !1;
        if (modes) {
          const modes = o ? Math.min(exports.high, exports.low) : Math.min(exports.open, exports.close),
            n = o ? Math.max(exports.high, exports.low) : Math.max(exports.open, exports.close);
          return modes - i <= t && t <= n + i
        } {
          const modes = Math.min(exports.open, exports.close),
            o = Math.max(exports.open, exports.close);
          return exports.high - i <= t && t <= modes + i || o - i <= t && t <= exports.low + i
        }
      }
      _drawWicks(exports, t) {
        let i = "",
          modes = null;
        this._bars.forEach(((n, r) => {
          const seriesBarFunction_a = n.wickColor ? n.wickColor : (0, o.ensureDefined)(this._wickColor);
          seriesBarFunction_a !== i && (exports.fillStyle = seriesBarFunction_a, i = seriesBarFunction_a);
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
          null !== modes && (f = Math.max(modes + 1, f), f = Math.min(f, y));
          const v = y - f + 1;
          h <= d && (l !== _ && (l = Math.round(l - .5 * d)), c = c !== p ? Math.round(l - .5 * d) + d - 1 :
              p - 1), l !== _ && exports.fillRect(f, _, v, l - _), p - c - 1 && exports.fillRect(f, c + 1, v, p - c - 1),
            modes = y
        }))
      }
      _drawBorder(exports, t) {
        let i = "",
          modes = null;
        this._bars.forEach(((n, seriesBarFunction_a) => {
          if (n.borderColor !== i && (exports.fillStyle = n.borderColor ? n.borderColor : (0, o.ensureDefined)(this
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
          null !== modes && (l = Math.max(modes + 1, l), l = Math.min(l, u));
          const p = u - l + 1;
          c <= _ ? exports.fillRect(l, Math.round(h - .5 * _), p, _) : p > 2 * _ ? (0, r.fillRectInnerBorder)(exports, l,
            h, u - l + 1, d - h + 1, _) : exports.fillRect(l, h, p, d - h + 1), modes = u
        }))
      }
      _drawCandles(exports, t) {
        let i = "";
        this._bars.forEach(((modes, o) => {
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
          if (!(this._borderVisible && u <= 2 * d) || modes.hollow) {
            if (modes.color !== i) {
              const t = modes.color;
              exports.fillStyle = t, i = t
            }
            if (modes.hollow) exports.fillStyle = modes.color, h <= d ? exports.fillRect(l, Math.round(n - .5 * d), u, d) : (0, r
              .fillRectInnerBorder)(exports, l, n, c - l + 1, seriesBarFunction_a - n + 1, d);
            else {
              if (!this._borderVisible && h <= d) return void exports.fillRect(l, Math.round(n - .5 * d), u, d);
              if (this._borderVisible && (l += d, n += d, c -= d, seriesBarFunction_a -= d), n > seriesBarFunction_a) return;
              exports.fillRect(l, n, c - l + 1, seriesBarFunction_a - n + 1)
            }
          }
        }))
      }
    }