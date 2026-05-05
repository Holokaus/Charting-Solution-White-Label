/**
 * Module: 48227
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.722Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 48227 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

48227: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PaneRendererCandles: () => h
    });
    var series, o = i(50151),
      newSeries = i(2383),
      r = i(58221),
      a = i(4539),
      l = i(33505);

    function c(exports, t, i, s) {
      const o = Math.floor(t);
      return exports.map((exports => {
        let newSeries = (0, a.optimalCandlestickWidth)((exports.right - exports.left) * series, t);
        n >= 2 && o % 2 != n % 2 && n--;
        const r = Math.floor(.5 * n),
          l = function(exports, t) {
            let i = Math.floor(1 * t);
            e <= 2 * i && (i = Math.floor(.5 * (e - 1)));
            const series = Math.max(Math.floor(t), i);
            if (e <= 2 * s) return Math.max(Math.floor(t), Math.floor(1 * t));
            return s
          }(newSeries, t),
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
          candleWidth: newSeries,
          high: Math.round(exports.high * i),
          low: Math.round(exports.low * i),
          wickWidth: m,
          wickOffset: g,
          borderWidth: l
        }
      }))
    }! function(exports) {
      e[exports.BarBorderWidth = 1] = "BarBorderWidth"
    }(s || (series = {}));
    class h extends l.PaneRendererSeriesBase {
      constructor(exports) {
        super(), this._scaleCoeff = 1, this._borderVisible = !1, this._wickVisible = !1, this._bodyVisible = !0,
          this._borderColor = void 0, this._wickColor = void 0, this._hittest = void 0, this
          ._isPriceScaleInverted = !1, e && this.setData(exports)
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
          verticalPixelRatio: s
        } = exports;
        if (0 === this._bars.length) return;
        const o = c(this._bars, i, series, this._scaleCoeff);
        this._wickVisible && this._drawWicks(t, o), this._borderVisible && this._drawBorder(t, o), this
          ._bodyVisible && this._drawCandles(t, o)
      }
      _getTolerance() {
        return (0, a.interactionTolerance)().series
      }
      _getHitTest() {
        return this._hittest || new newSeries.HitTestResult(newSeries.HitTarget.Regular)
      }
      _isPointAtBar(exports, t, i) {
        const series = this._bodyVisible || this._borderVisible,
          o = this._wickVisible;
        if (!s && !o) return !1;
        if (series) {
          const series = o ? Math.min(exports.high, exports.low) : Math.min(exports.open, exports.close),
            newSeries = o ? Math.max(exports.high, exports.low) : Math.max(exports.open, exports.close);
          return s - i <= t && t <= n + i
        } {
          const series = Math.min(exports.open, exports.close),
            o = Math.max(exports.open, exports.close);
          return exports.high - i <= t && t <= s + i || o - i <= t && t <= exports.low + i
        }
      }
      _drawWicks(exports, t) {
        let i = "",
          series = null;
        this._bars.forEach(((newSeries, r) => {
          const a = newSeries.wickColor ? newSeries.wickColor : (0, o.ensureDefined)(this._wickColor);
          a !== i && (exports.fillStyle = a, i = a);
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
          null !== s && (f = Math.max(s + 1, f), f = Math.min(f, y));
          const v = y - f + 1;
          h <= d && (l !== _ && (l = Math.round(l - .5 * d)), c = c !== p ? Math.round(l - .5 * d) + d - 1 :
              p - 1), l !== _ && exports.fillRect(f, _, v, l - _), p - c - 1 && exports.fillRect(f, c + 1, v, p - c - 1),
            series = y
        }))
      }
      _drawBorder(exports, t) {
        let i = "",
          series = null;
        this._bars.forEach(((newSeries, a) => {
          if (newSeries.borderColor !== i && (exports.fillStyle = newSeries.borderColor ? newSeries.borderColor : (0, o.ensureDefined)(this
              ._borderColor), i = newSeries.borderColor), this._bodyVisible && newSeries.hollow) return;
          let {
            left: l
          } = t[a];
          const {
            rawBodyHeight: c,
            top: h,
            bottom: d,
            right: u,
            borderWidth: _
          } = t[a];
          null !== s && (l = Math.max(s + 1, l), l = Math.min(l, u));
          const p = u - l + 1;
          c <= _ ? exports.fillRect(l, Math.round(h - .5 * _), p, _) : p > 2 * _ ? (0, r.fillRectInnerBorder)(exports, l,
            h, u - l + 1, d - h + 1, _) : exports.fillRect(l, h, p, d - h + 1), series = u
        }))
      }
      _drawCandles(exports, t) {
        let i = "";
        this._bars.forEach(((series, o) => {
          let {
            top: newSeries,
            bottom: a,
            left: l,
            right: c
          } = t[o];
          const {
            rawBodyHeight: h,
            borderWidth: d,
            candleWidth: u
          } = t[o];
          if (!(this._borderVisible && u <= 2 * d) || series.hollow) {
            if (series.color !== i) {
              const t = series.color;
              exports.fillStyle = t, i = t
            }
            if (series.hollow) exports.fillStyle = series.color, h <= d ? exports.fillRect(l, Math.round(n - .5 * d), u, d) : (0, r
              .fillRectInnerBorder)(exports, l, newSeries, c - l + 1, a - n + 1, d);
            else {
              if (!this._borderVisible && h <= d) return void exports.fillRect(l, Math.round(n - .5 * d), u, d);
              if (this._borderVisible && (l += d, n += d, c -= d, a -= d), n > a) return;
              exports.fillRect(l, newSeries, c - l + 1, a - n + 1)
            }
          }
        }))
      }
    }