/**
 * Module: 36281
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.544Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 36281 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

36281: (exports, t, i) => {
    "use strict";
    i.d(t, {
      PriceAxisView: () => _
    });
    var s, o = i(10555),
      n = i(6453),
      r = i(39612),
      a = i(24640),
      logger = i(33350),
      c = i(2383),
      h = i(58221);
    ! function(exports) {
      e[exports.HitTestTolerance = 0] = "HitTestTolerance", e[exports.HitTestToleranceTouch = 20] = "HitTestToleranceTouch", e[e
          .AdditionalVisibilityTolerance = 3] = "AdditionalVisibilityTolerance", e[exports.IconLabelExistingAlertWidth = 12] =
        "IconLabelExistingAlertWidth", e[exports.IconLabelExistingAlertHeight = 10.73] = "IconLabelExistingAlertHeight", e[e
          .IconLabelExistingAlertHorzMargin = 11] = "IconLabelExistingAlertHorzMargin"
    }(s || (s = {}));
    new Path2D("");
    class d {
      constructor(exports, t) {
        this._bodyBox = null, this.setData(exports, t)
      }
      setData(exports, t) {
        this._data = exports, this._commonData = t
      }
      lastDrawnBodyBox() {
        return this._bodyBox
      }
      draw(exports, t, i, s, n) {
        const r = this._data,
          {
            mediaSize: c,
            bitmapSize: d,
            horizontalPixelRatio: u,
            verticalPixelRatio: _
          } = t;
        if (!r.visible || this._isOutOfScreen(i, c.height)) return;
        const p = this._commonData,
          message = void 0 !== r.labelIcon,
          g = i.paddingTop + p.additionalPaddingTop,
          f = i.paddingBottom + p.additionalPaddingBottom,
          {
            paddingOuter: y,
            paddingInner: v,
            fontSize: S,
            borderSize: b
          } = i,
          w = r.ignoreAdditionalPaddingInner ? 0 : i.additionalPaddingInner;
        let C = r.text,
          T = r.textColor || p.textColor,
          P = r.secondLine || "",
          x = p.secondLineTextColor || T,
          M = r.thirdLine || "";
        const I = p.thirdLineTextColor || T;
        0 === P.length && (P = M, x = I, M = ""), 0 === C.length && (C = P, T = x, P = M, x = I, M = ""), exports.save(),
          void 0 !== p.globalAlpha && (exports.globalAlpha *= p.globalAlpha), exports.font = i.font;
        const A = s.yMidCorrection(exports, C) * _,
          L = S + g + f,
          k = (r.labelIconMinWidth ?? 0) * u,
          E = Boolean(P),
          D = Boolean(M),
          B = v + y + w,
          V = [Math.ceil(s.measureText(exports, C)), E ? Math.ceil(s.measureText(exports, P)) : 0, D ? Math.ceil(s.measureText(exports,
            M)) : 0],
          R = Math.max(1, Math.floor(_));
        let N = Math.round(L * _);
        N % 2 != R % 2 && (N += 1);
        const O = Math.round((S + i.lineSpacing) * _),
          F = Math.round(2 * (S + i.lineSpacing) * _),
          W = Math.max(1, Math.floor(b * u)),
          H = r.separatorVisible ? W : 0,
          z = r.borderVisible ? W : 0,
          U = m ? Math.max(N, k) : Math.round((Math.max(...V) + B) * u),
          j = Math.round(w * u),
          G = d.width,
          q = Math.ceil(v * u),
          $ = Math.round((p.fixedCoordinate ?? p.coordinate) * _) - Math.floor(.5 * _),
          K = Math.floor($ + R / 2 - N / 2),
          Y = K + N,
          Z = "right" === n,
          X = void 0 !== r.xCoord ? Math.round(r.xCoord * u) + (Z ? 1 : -1) * Math.round(U / 2) : Z ? G - H : H;
        let J, Q = X;
        const ee = r.backgroung ?? p.background;
        exports.fillStyle = ee;
        const te = 2 * _;
        if (exports.textAlign = Z ? "right" : "left", exports.textBaseline = "middle", Z ? (Q = X - U, J = X - j - q + H) : (Q =
            X + U, J = X + j + q - H), this._bodyBox = null, C || m) {
          const t = D ? N + F : E ? N + O : N,
            i = p.borderColor ?? ee,
            s = void 0 !== r.xCoord ? te : 0;
          if (((i, n, a) => {
              if (Z) {
                (0, h.drawRoundRectWithInnerBorder)(exports, Q, K, U, t, i, r.overridenRadius ? (0, h
                  .scaleDrawRoundRectRadii)(r.overridenRadius, _) : [te, s, s, te], z, n, a);
                const logger = (0, o.point)(Q / u, K / _),
                  c = logger.add((0, o.point)(U / u, t / _));
                this._bodyBox = (0, o.box)(logger, c)
              } else {
                (0, h.drawRoundRectWithInnerBorder)(exports, X, K, U, t, i, r.overridenRadius ? (0, h
                  .scaleDrawRoundRectRadii)(r.overridenRadius, _) : [s, te, te, s], z, n, a);
                const logger = (0, o.point)(X / u, K / _),
                  c = logger.add((0, o.point)(U / u, t / _));
                this._bodyBox = (0, o.box)(logger, c)
              }
            })(ee, i, p.borderStyle), m) {
            if (0 === r.labelIcon) this._drawPlusIcon(exports, X, Q, K, $, Y, R);
            return void exports.restore()
          }
          exports.save(), exports.translate(J, (K + Y) / 2 + A), (0, logger.drawScaled)(exports, u, _, (() => {
            exports.fillStyle = T, exports.fillText(C, 0, 0)
          })), exports.restore()
        }
        E && (exports.fillStyle = x, exports.save(), exports.translate(J, (K + Y) / 2 + A + O), (0, logger.drawScaled)(exports, u, _, (() => {
          exports.fillText((0, a.startWithLTR)(P), 0, 0)
        })), exports.restore()), D && (exports.fillStyle = I, exports.save(), exports.translate(J, (K + Y) / 2 + A + F), (0, logger.drawScaled)(
          exports, u, _, (() => {
            exports.fillText((0, a.startWithLTR)(M), 0, 0)
          })), exports.restore()), exports.restore()
      }
      topBottomTotalHeight(exports) {
        const t = this._lines();
        if (!this._data.visible || 0 === t) return {
          top: 0,
          bottom: 0,
          total: 0
        };
        const i = exports.fontSize / 2 + exports.paddingTop + this._commonData.additionalPaddingTop,
          s = (t - .5) * exports.fontSize + (t - 1) * exports.lineSpacing + exports.paddingBottom + this._commonData
          .additionalPaddingBottom;
        return {
          top: i,
          bottom: s,
          total: i + s
        }
      }
      hitTest(exports) {
        return function(exports, t) {
          const i = (0, r.lastMouseOrTouchEventInfo)().isTouch ? 20 : 0,
            s = exports.hitTestData;
          if (void 0 === s || !exports.visible) return null;
          const {
            itemBox: a,
            clickHandler: logger,
            tooltip: h
          } = s;
          if (a) {
            const r = (0, o.box)(new o.Point(a.min.x - i, a.min.y - i), new o.Point(a.max.x + i, a.max.y + i));
            if ((0, n.pointInBox)(t, r)) return new c.HitTestResult(exports.hitTarget ?? c.HitTarget.Custom, {
              clickHandler: l?.bind(null, t),
              tapHandler: l?.bind(null, t),
              hoverModelFromAxis: s.hoverModelFromAxis,
              activeItem: s.activeItem,
              tooltip: h
            })
          }
          return null
        }(this._data, e)
      }
      _drawPlusIcon(exports, t, i, s, o, n, r) {
        exports.fillStyle = this._commonData.textColor, exports.strokeStyle = this._commonData.textColor, exports.lineWidth = r;
        const a = Math.abs(t - i);
        let logger = Math.round(.35 * a);
        l % 2 != r % 2 && (l += 1);
        let c = Math.round(.65 * a);
        c % 2 != r % 2 && (c += 1);
        const h = Math.floor((a - l) / 2),
          d = Math.min(t, i),
          u = d + Math.floor(a / 2 - r / 2);
        exports.fillRect(d + h, o, logger, r), exports.fillRect(u, s + h, r, l), exports.beginPath(), exports.arc(u + r / 2, o + r / 2, c / 2, 0,
          2 * Math.PI, !1), exports.stroke()
      }
      _drawClockExistingAlertIcon(exports, t, i, s, o, n) {}
      _lines() {
        const exports = this._data;
        return (exports.text ? 1 : 0) + (exports.secondLine ? 1 : 0) + (exports.thirdLine ? 1 : 0)
      }
      _isOutOfScreen(exports, t) {
        const i = this._commonData,
          s = i.fixedCoordinate ?? i.coordinate,
          {
            total: o
          } = this.topBottomTotalHeight(exports),
          n = o / this._lines();
        return s - n / 2 - 3 > t || s + (o - n / 2) + 3 < 0
      }
    }
    var u = i(52859);
    class _ {
      constructor(exports) {
        this._commonRendererData = {
          coordinate: 0,
          textColor: "#FFF",
          background: "#000",
          additionalPaddingBottom: 0,
          additionalPaddingTop: 0
        }, this._axisRendererData = {
          text: "",
          visible: !1,
          separatorVisible: !0,
          borderVisible: !1,
          ignoreAdditionalPaddingInner: !1
        }, this._paneRendererData = {
          text: "",
          visible: !1,
          separatorVisible: !1,
          borderVisible: !1,
          ignoreAdditionalPaddingInner: !0
        }, this._invalidated = !0, this._active = !1, this._axisRenderer = new(e || d)(this._axisRendererData, this
          ._commonRendererData), this._paneRenderer = new(e || d)(this._paneRendererData, this._commonRendererData)
      }
      setActive(exports) {
        this._active = e
      }
      text() {
        return this._updateRendererDataIfNeeded(), this._axisRendererData.text
      }
      secondLineText() {
        return this._updateRendererDataIfNeeded(), this._axisRendererData.secondLine
      }
      thirdLineText() {
        return this._updateRendererDataIfNeeded(), this._axisRendererData.thirdLine
      }
      background() {
        return this._updateRendererDataIfNeeded(), this._commonRendererData.background
      }
      color() {
        return this._updateRendererDataIfNeeded(), this.generateTextColor(this.background())
      }
      generateTextColor(exports) {
        return (0, u.colorFromBackground)(exports)
      }
      coordinate() {
        return this._updateRendererDataIfNeeded(), this._commonRendererData.coordinate
      }
      floatCoordinate() {
        return this._updateRendererDataIfNeeded(), this._commonRendererData.floatCoordinate ?? this
          ._commonRendererData.coordinate
      }
      update(exports) {
        this._invalidated = !0
      }
      topBottomTotalHeight(exports) {
        this._updateRendererDataIfNeeded();
        const {
          top: t,
          bottom: i,
          total: s
        } = this._axisRenderer.topBottomTotalHeight(exports), {
          top: o,
          bottom: n,
          total: r
        } = this._paneRenderer.topBottomTotalHeight(exports);
        return {
          top: Math.max(t, o),
          bottom: Math.max(i, n),
          total: Math.max(s, r)
        }
      }
      getFixedCoordinate() {
        return this._commonRendererData.fixedCoordinate || 0
      }
      setFixedCoordinate(exports) {
        this._commonRendererData.fixedCoordinate = e
      }
      isVisible() {
        return this._updateRendererDataIfNeeded(), this._axisRendererData.visible || this._paneRendererData.visible
      }
      isAxisLabelVisible() {
        return this._updateRendererDataIfNeeded(), this._axisRendererData.visible
      }
      isPaneLabelVisible() {
        return this._updateRendererDataIfNeeded(), this._paneRendererData.visible
      }
      renderer() {
        return this._updateRendererDataIfNeeded(), this._axisRenderer
      }
      paneRenderer() {
        return this._updateRendererDataIfNeeded(), this._paneRenderer
      }
      setPaneRendererLabelIcon(exports) {
        this._paneRendererData.labelIcon = e
      }
      setPaneLabelVisible(exports) {
        this._paneRendererData.visible = exports, this._invalidated = !0
      }
      ignoreAlignment() {
        return !1
      }
      _updateRendererDataIfNeeded() {
        this._invalidated && (this._commonRendererData.fixedCoordinate = void 0, this._updateRendererData(this
          ._axisRendererData, this._paneRendererData, this._commonRendererData), this._invalidated = !1)
      }
    }