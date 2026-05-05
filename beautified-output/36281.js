/**
 * Module 36281 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

36281: (e, t, i) => {
    "use strict";
    i.d(t, {
      PriceAxisView: () => _
    });
    var s, o = i(10555),
      n = i(6453),
      r = i(39612),
      a = i(24640),
      l = i(33350),
      c = i(2383),
      h = i(58221);
    ! function(e) {
      e[e.HitTestTolerance = 0] = "HitTestTolerance", e[e.HitTestToleranceTouch = 20] = "HitTestToleranceTouch", e[e
          .AdditionalVisibilityTolerance = 3] = "AdditionalVisibilityTolerance", e[e.IconLabelExistingAlertWidth = 12] =
        "IconLabelExistingAlertWidth", e[e.IconLabelExistingAlertHeight = 10.73] = "IconLabelExistingAlertHeight", e[e
          .IconLabelExistingAlertHorzMargin = 11] = "IconLabelExistingAlertHorzMargin"
    }(s || (s = {}));
    new Path2D("");
    class d {
      constructor(e, t) {
        this._bodyBox = null, this.setData(e, t)
      }
      setData(e, t) {
        this._data = e, this._commonData = t
      }
      lastDrawnBodyBox() {
        return this._bodyBox
      }
      draw(e, t, i, s, n) {
        const r = this._data,
          {
            mediaSize: c,
            bitmapSize: d,
            horizontalPixelRatio: u,
            verticalPixelRatio: _
          } = t;
        if (!r.visible || this._isOutOfScreen(i, c.height)) return;
        const p = this._commonData,
          m = void 0 !== r.labelIcon,
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
        0 === P.length && (P = M, x = I, M = ""), 0 === C.length && (C = P, T = x, P = M, x = I, M = ""), e.save(),
          void 0 !== p.globalAlpha && (e.globalAlpha *= p.globalAlpha), e.font = i.font;
        const A = s.yMidCorrection(e, C) * _,
          L = S + g + f,
          k = (r.labelIconMinWidth ?? 0) * u,
          E = Boolean(P),
          D = Boolean(M),
          B = v + y + w,
          V = [Math.ceil(s.measureText(e, C)), E ? Math.ceil(s.measureText(e, P)) : 0, D ? Math.ceil(s.measureText(e,
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
        e.fillStyle = ee;
        const te = 2 * _;
        if (e.textAlign = Z ? "right" : "left", e.textBaseline = "middle", Z ? (Q = X - U, J = X - j - q + H) : (Q =
            X + U, J = X + j + q - H), this._bodyBox = null, C || m) {
          const t = D ? N + F : E ? N + O : N,
            i = p.borderColor ?? ee,
            s = void 0 !== r.xCoord ? te : 0;
          if (((i, n, a) => {
              if (Z) {
                (0, h.drawRoundRectWithInnerBorder)(e, Q, K, U, t, i, r.overridenRadius ? (0, h
                  .scaleDrawRoundRectRadii)(r.overridenRadius, _) : [te, s, s, te], z, n, a);
                const l = (0, o.point)(Q / u, K / _),
                  c = l.add((0, o.point)(U / u, t / _));
                this._bodyBox = (0, o.box)(l, c)
              } else {
                (0, h.drawRoundRectWithInnerBorder)(e, X, K, U, t, i, r.overridenRadius ? (0, h
                  .scaleDrawRoundRectRadii)(r.overridenRadius, _) : [s, te, te, s], z, n, a);
                const l = (0, o.point)(X / u, K / _),
                  c = l.add((0, o.point)(U / u, t / _));
                this._bodyBox = (0, o.box)(l, c)
              }
            })(ee, i, p.borderStyle), m) {
            if (0 === r.labelIcon) this._drawPlusIcon(e, X, Q, K, $, Y, R);
            return void e.restore()
          }
          e.save(), e.translate(J, (K + Y) / 2 + A), (0, l.drawScaled)(e, u, _, (() => {
            e.fillStyle = T, e.fillText(C, 0, 0)
          })), e.restore()
        }
        E && (e.fillStyle = x, e.save(), e.translate(J, (K + Y) / 2 + A + O), (0, l.drawScaled)(e, u, _, (() => {
          e.fillText((0, a.startWithLTR)(P), 0, 0)
        })), e.restore()), D && (e.fillStyle = I, e.save(), e.translate(J, (K + Y) / 2 + A + F), (0, l.drawScaled)(
          e, u, _, (() => {
            e.fillText((0, a.startWithLTR)(M), 0, 0)
          })), e.restore()), e.restore()
      }
      topBottomTotalHeight(e) {
        const t = this._lines();
        if (!this._data.visible || 0 === t) return {
          top: 0,
          bottom: 0,
          total: 0
        };
        const i = e.fontSize / 2 + e.paddingTop + this._commonData.additionalPaddingTop,
          s = (t - .5) * e.fontSize + (t - 1) * e.lineSpacing + e.paddingBottom + this._commonData
          .additionalPaddingBottom;
        return {
          top: i,
          bottom: s,
          total: i + s
        }
      }
      hitTest(e) {
        return function(e, t) {
          const i = (0, r.lastMouseOrTouchEventInfo)().isTouch ? 20 : 0,
            s = e.hitTestData;
          if (void 0 === s || !e.visible) return null;
          const {
            itemBox: a,
            clickHandler: l,
            tooltip: h
          } = s;
          if (a) {
            const r = (0, o.box)(new o.Point(a.min.x - i, a.min.y - i), new o.Point(a.max.x + i, a.max.y + i));
            if ((0, n.pointInBox)(t, r)) return new c.HitTestResult(e.hitTarget ?? c.HitTarget.Custom, {
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
      _drawPlusIcon(e, t, i, s, o, n, r) {
        e.fillStyle = this._commonData.textColor, e.strokeStyle = this._commonData.textColor, e.lineWidth = r;
        const a = Math.abs(t - i);
        let l = Math.round(.35 * a);
        l % 2 != r % 2 && (l += 1);
        let c = Math.round(.65 * a);
        c % 2 != r % 2 && (c += 1);
        const h = Math.floor((a - l) / 2),
          d = Math.min(t, i),
          u = d + Math.floor(a / 2 - r / 2);
        e.fillRect(d + h, o, l, r), e.fillRect(u, s + h, r, l), e.beginPath(), e.arc(u + r / 2, o + r / 2, c / 2, 0,
          2 * Math.PI, !1), e.stroke()
      }
      _drawClockExistingAlertIcon(e, t, i, s, o, n) {}
      _lines() {
        const e = this._data;
        return (e.text ? 1 : 0) + (e.secondLine ? 1 : 0) + (e.thirdLine ? 1 : 0)
      }
      _isOutOfScreen(e, t) {
        const i = this._commonData,
          s = i.fixedCoordinate ?? i.coordinate,
          {
            total: o
          } = this.topBottomTotalHeight(e),
          n = o / this._lines();
        return s - n / 2 - 3 > t || s + (o - n / 2) + 3 < 0
      }
    }
    var u = i(52859);
    class _ {
      constructor(e) {
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
      setActive(e) {
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
      generateTextColor(e) {
        return (0, u.colorFromBackground)(e)
      }
      coordinate() {
        return this._updateRendererDataIfNeeded(), this._commonRendererData.coordinate
      }
      floatCoordinate() {
        return this._updateRendererDataIfNeeded(), this._commonRendererData.floatCoordinate ?? this
          ._commonRendererData.coordinate
      }
      update(e) {
        this._invalidated = !0
      }
      topBottomTotalHeight(e) {
        this._updateRendererDataIfNeeded();
        const {
          top: t,
          bottom: i,
          total: s
        } = this._axisRenderer.topBottomTotalHeight(e), {
          top: o,
          bottom: n,
          total: r
        } = this._paneRenderer.topBottomTotalHeight(e);
        return {
          top: Math.max(t, o),
          bottom: Math.max(i, n),
          total: Math.max(s, r)
        }
      }
      getFixedCoordinate() {
        return this._commonRendererData.fixedCoordinate || 0
      }
      setFixedCoordinate(e) {
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
      setPaneRendererLabelIcon(e) {
        this._paneRendererData.labelIcon = e
      }
      setPaneLabelVisible(e) {
        this._paneRendererData.visible = e, this._invalidated = !0
      }
      ignoreAlignment() {
        return !1
      }
      _updateRendererDataIfNeeded() {
        this._invalidated && (this._commonRendererData.fixedCoordinate = void 0, this._updateRendererData(this
          ._axisRendererData, this._paneRendererData, this._commonRendererData), this._invalidated = !1)
      }
    }