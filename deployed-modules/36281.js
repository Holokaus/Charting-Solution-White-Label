/**
 * Module 36281 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

36281: (priceDataSource_e, priceDataSource_t, priceDataSource_i) => {
    "use strict";
    priceDataSource_i.priceDataSource_d(priceDataSource_t, {
      PriceAxisView: () => _
    });
    var priceDataSource_s, priceDataSource_o = priceDataSource_i(10555),
      priceDataSource_n = priceDataSource_i(6453),
      priceDataSource_r = priceDataSource_i(39612),
      priceDataSource_a = priceDataSource_i(24640),
      priceDataSource_l = priceDataSource_i(33350),
      priceDataSource_c = priceDataSource_i(2383),
      priceDataSource_h = priceDataSource_i(58221);
    ! function(priceDataSource_e) {
      priceDataSource_e[priceDataSource_e.HitTestTolerance = 0] = "HitTestTolerance", priceDataSource_e[priceDataSource_e.HitTestToleranceTouch = 20] = "HitTestToleranceTouch", priceDataSource_e[priceDataSource_e
          .AdditionalVisibilityTolerance = 3] = "AdditionalVisibilityTolerance", priceDataSource_e[priceDataSource_e.IconLabelExistingAlertWidth = 12] =
        "IconLabelExistingAlertWidth", priceDataSource_e[priceDataSource_e.IconLabelExistingAlertHeight = 10.73] = "IconLabelExistingAlertHeight", priceDataSource_e[priceDataSource_e
          .IconLabelExistingAlertHorzMargin = 11] = "IconLabelExistingAlertHorzMargin"
    }(priceDataSource_s || (priceDataSource_s = {}));
    new Path2D("");
    class priceDataSource_d {
      constructor(priceDataSource_e, priceDataSource_t) {
        this._bodyBox = null, this.setData(priceDataSource_e, priceDataSource_t)
      }
      setData(priceDataSource_e, priceDataSource_t) {
        this._data = priceDataSource_e, this._commonData = priceDataSource_t
      }
      lastDrawnBodyBox() {
        return this._bodyBox
      }
      draw(priceDataSource_e, priceDataSource_t, priceDataSource_i, priceDataSource_s, priceDataSource_n) {
        const priceDataSource_r = this._data,
          {
            mediaSize: priceDataSource_c,
            bitmapSize: priceDataSource_d,
            horizontalPixelRatio: priceDataSource_u,
            verticalPixelRatio: _
          } = priceDataSource_t;
        if (!priceDataSource_r.visible || this._isOutOfScreen(priceDataSource_i, priceDataSource_c.height)) return;
        const priceDataSource_p = this._commonData,
          priceDataSource_m = void 0 !== priceDataSource_r.labelIcon,
          priceDataSource_g = priceDataSource_i.paddingTop + priceDataSource_p.additionalPaddingTop,
          priceDataSource_f = priceDataSource_i.paddingBottom + priceDataSource_p.additionalPaddingBottom,
          {
            paddingOuter: priceDataSource_y,
            paddingInner: priceDataSource_v,
            fontSize: S,
            borderSize: priceDataSource_b
          } = priceDataSource_i,
          priceDataSource_w = priceDataSource_r.ignoreAdditionalPaddingInner ? 0 : priceDataSource_i.additionalPaddingInner;
        let C = priceDataSource_r.text,
          T = priceDataSource_r.textColor || priceDataSource_p.textColor,
          P = priceDataSource_r.secondLine || "",
          priceDataSource_x = priceDataSource_p.secondLineTextColor || T,
          M = priceDataSource_r.thirdLine || "";
        const I = priceDataSource_p.thirdLineTextColor || T;
        0 === P.length && (P = M, priceDataSource_x = I, M = ""), 0 === C.length && (C = P, T = priceDataSource_x, P = M, priceDataSource_x = I, M = ""), priceDataSource_e.save(),
          void 0 !== priceDataSource_p.globalAlpha && (priceDataSource_e.globalAlpha *= priceDataSource_p.globalAlpha), priceDataSource_e.font = priceDataSource_i.font;
        const A = priceDataSource_s.yMidCorrection(priceDataSource_e, C) * _,
          L = S + priceDataSource_g + priceDataSource_f,
          priceDataSource_k = (priceDataSource_r.labelIconMinWidth ?? 0) * priceDataSource_u,
          E = Boolean(P),
          D = Boolean(M),
          B = priceDataSource_v + priceDataSource_y + priceDataSource_w,
          V = [Math.ceil(priceDataSource_s.measureText(priceDataSource_e, C)), E ? Math.ceil(priceDataSource_s.measureText(priceDataSource_e, P)) : 0, D ? Math.ceil(priceDataSource_s.measureText(priceDataSource_e,
            M)) : 0],
          R = Math.max(1, Math.floor(_));
        let N = Math.round(L * _);
        N % 2 != R % 2 && (N += 1);
        const O = Math.round((S + priceDataSource_i.lineSpacing) * _),
          F = Math.round(2 * (S + priceDataSource_i.lineSpacing) * _),
          W = Math.max(1, Math.floor(priceDataSource_b * priceDataSource_u)),
          H = priceDataSource_r.separatorVisible ? W : 0,
          priceDataSource_z = priceDataSource_r.borderVisible ? W : 0,
          U = priceDataSource_m ? Math.max(N, priceDataSource_k) : Math.round((Math.max(...V) + B) * priceDataSource_u),
          priceDataSource_j = Math.round(priceDataSource_w * priceDataSource_u),
          G = priceDataSource_d.width,
          priceDataSource_q = Math.ceil(priceDataSource_v * priceDataSource_u),
          $ = Math.round((priceDataSource_p.fixedCoordinate ?? priceDataSource_p.coordinate) * _) - Math.floor(.5 * _),
          K = Math.floor($ + R / 2 - N / 2),
          Y = K + N,
          Z = "right" === priceDataSource_n,
          X = void 0 !== priceDataSource_r.xCoord ? Math.round(priceDataSource_r.xCoord * priceDataSource_u) + (Z ? 1 : -1) * Math.round(U / 2) : Z ? G - H : H;
        let J, Q = X;
        const ee = priceDataSource_r.backgroung ?? priceDataSource_p.background;
        priceDataSource_e.fillStyle = ee;
        const te = 2 * _;
        if (priceDataSource_e.textAlign = Z ? "right" : "left", priceDataSource_e.textBaseline = "middle", Z ? (Q = X - U, J = X - priceDataSource_j - priceDataSource_q + H) : (Q =
            X + U, J = X + priceDataSource_j + priceDataSource_q - H), this._bodyBox = null, C || priceDataSource_m) {
          const priceDataSource_t = D ? N + F : E ? N + O : N,
            priceDataSource_i = priceDataSource_p.borderColor ?? ee,
            priceDataSource_s = void 0 !== priceDataSource_r.xCoord ? te : 0;
          if (((priceDataSource_i, priceDataSource_n, priceDataSource_a) => {
              if (Z) {
                (0, priceDataSource_h.drawRoundRectWithInnerBorder)(priceDataSource_e, Q, K, U, priceDataSource_t, priceDataSource_i, priceDataSource_r.overridenRadius ? (0, priceDataSource_h
                  .scaleDrawRoundRectRadii)(priceDataSource_r.overridenRadius, _) : [te, priceDataSource_s, priceDataSource_s, te], priceDataSource_z, priceDataSource_n, priceDataSource_a);
                const priceDataSource_l = (0, priceDataSource_o.point)(Q / priceDataSource_u, K / _),
                  priceDataSource_c = priceDataSource_l.add((0, priceDataSource_o.point)(U / priceDataSource_u, priceDataSource_t / _));
                this._bodyBox = (0, priceDataSource_o.box)(priceDataSource_l, priceDataSource_c)
              } else {
                (0, priceDataSource_h.drawRoundRectWithInnerBorder)(priceDataSource_e, X, K, U, priceDataSource_t, priceDataSource_i, priceDataSource_r.overridenRadius ? (0, priceDataSource_h
                  .scaleDrawRoundRectRadii)(priceDataSource_r.overridenRadius, _) : [priceDataSource_s, te, te, priceDataSource_s], priceDataSource_z, priceDataSource_n, priceDataSource_a);
                const priceDataSource_l = (0, priceDataSource_o.point)(X / priceDataSource_u, K / _),
                  priceDataSource_c = priceDataSource_l.add((0, priceDataSource_o.point)(U / priceDataSource_u, priceDataSource_t / _));
                this._bodyBox = (0, priceDataSource_o.box)(priceDataSource_l, priceDataSource_c)
              }
            })(ee, priceDataSource_i, priceDataSource_p.borderStyle), priceDataSource_m) {
            if (0 === priceDataSource_r.labelIcon) this._drawPlusIcon(priceDataSource_e, X, Q, K, $, Y, R);
            return void priceDataSource_e.restore()
          }
          priceDataSource_e.save(), priceDataSource_e.translate(J, (K + Y) / 2 + A), (0, priceDataSource_l.drawScaled)(priceDataSource_e, priceDataSource_u, _, (() => {
            priceDataSource_e.fillStyle = T, priceDataSource_e.fillText(C, 0, 0)
          })), priceDataSource_e.restore()
        }
        E && (priceDataSource_e.fillStyle = priceDataSource_x, priceDataSource_e.save(), priceDataSource_e.translate(J, (K + Y) / 2 + A + O), (0, priceDataSource_l.drawScaled)(priceDataSource_e, priceDataSource_u, _, (() => {
          priceDataSource_e.fillText((0, priceDataSource_a.startWithLTR)(P), 0, 0)
        })), priceDataSource_e.restore()), D && (priceDataSource_e.fillStyle = I, priceDataSource_e.save(), priceDataSource_e.translate(J, (K + Y) / 2 + A + F), (0, priceDataSource_l.drawScaled)(
          priceDataSource_e, priceDataSource_u, _, (() => {
            priceDataSource_e.fillText((0, priceDataSource_a.startWithLTR)(M), 0, 0)
          })), priceDataSource_e.restore()), priceDataSource_e.restore()
      }
      topBottomTotalHeight(priceDataSource_e) {
        const priceDataSource_t = this._lines();
        if (!this._data.visible || 0 === priceDataSource_t) return {
          top: 0,
          bottom: 0,
          total: 0
        };
        const priceDataSource_i = priceDataSource_e.fontSize / 2 + priceDataSource_e.paddingTop + this._commonData.additionalPaddingTop,
          priceDataSource_s = (priceDataSource_t - .5) * priceDataSource_e.fontSize + (priceDataSource_t - 1) * priceDataSource_e.lineSpacing + priceDataSource_e.paddingBottom + this._commonData
          .additionalPaddingBottom;
        return {
          top: priceDataSource_i,
          bottom: priceDataSource_s,
          total: priceDataSource_i + priceDataSource_s
        }
      }
      hitTest(priceDataSource_e) {
        return function(priceDataSource_e, priceDataSource_t) {
          const priceDataSource_i = (0, priceDataSource_r.lastMouseOrTouchEventInfo)().isTouch ? 20 : 0,
            priceDataSource_s = priceDataSource_e.hitTestData;
          if (void 0 === priceDataSource_s || !priceDataSource_e.visible) return null;
          const {
            itemBox: priceDataSource_a,
            clickHandler: priceDataSource_l,
            tooltip: priceDataSource_h
          } = priceDataSource_s;
          if (priceDataSource_a) {
            const priceDataSource_r = (0, priceDataSource_o.box)(new priceDataSource_o.Point(priceDataSource_a.min.priceDataSource_x - priceDataSource_i, priceDataSource_a.min.priceDataSource_y - priceDataSource_i), new priceDataSource_o.Point(priceDataSource_a.max.priceDataSource_x + priceDataSource_i, priceDataSource_a.max.priceDataSource_y + priceDataSource_i));
            if ((0, priceDataSource_n.pointInBox)(priceDataSource_t, priceDataSource_r)) return new priceDataSource_c.HitTestResult(priceDataSource_e.hitTarget ?? priceDataSource_c.HitTarget.Custom, {
              clickHandler: priceDataSource_l?.bind(null, priceDataSource_t),
              tapHandler: priceDataSource_l?.bind(null, priceDataSource_t),
              hoverModelFromAxis: priceDataSource_s.hoverModelFromAxis,
              activeItem: priceDataSource_s.activeItem,
              tooltip: priceDataSource_h
            })
          }
          return null
        }(this._data, priceDataSource_e)
      }
      _drawPlusIcon(priceDataSource_e, priceDataSource_t, priceDataSource_i, priceDataSource_s, priceDataSource_o, priceDataSource_n, priceDataSource_r) {
        priceDataSource_e.fillStyle = this._commonData.textColor, priceDataSource_e.strokeStyle = this._commonData.textColor, priceDataSource_e.lineWidth = priceDataSource_r;
        const priceDataSource_a = Math.abs(priceDataSource_t - priceDataSource_i);
        let priceDataSource_l = Math.round(.35 * priceDataSource_a);
        priceDataSource_l % 2 != priceDataSource_r % 2 && (priceDataSource_l += 1);
        let priceDataSource_c = Math.round(.65 * priceDataSource_a);
        priceDataSource_c % 2 != priceDataSource_r % 2 && (priceDataSource_c += 1);
        const priceDataSource_h = Math.floor((priceDataSource_a - priceDataSource_l) / 2),
          priceDataSource_d = Math.min(priceDataSource_t, priceDataSource_i),
          priceDataSource_u = priceDataSource_d + Math.floor(priceDataSource_a / 2 - priceDataSource_r / 2);
        priceDataSource_e.fillRect(priceDataSource_d + priceDataSource_h, priceDataSource_o, priceDataSource_l, priceDataSource_r), priceDataSource_e.fillRect(priceDataSource_u, priceDataSource_s + priceDataSource_h, priceDataSource_r, priceDataSource_l), priceDataSource_e.beginPath(), priceDataSource_e.arc(priceDataSource_u + priceDataSource_r / 2, priceDataSource_o + priceDataSource_r / 2, priceDataSource_c / 2, 0,
          2 * Math.PI, !1), priceDataSource_e.stroke()
      }
      _drawClockExistingAlertIcon(priceDataSource_e, priceDataSource_t, priceDataSource_i, priceDataSource_s, priceDataSource_o, priceDataSource_n) {}
      _lines() {
        const priceDataSource_e = this._data;
        return (priceDataSource_e.text ? 1 : 0) + (priceDataSource_e.secondLine ? 1 : 0) + (priceDataSource_e.thirdLine ? 1 : 0)
      }
      _isOutOfScreen(priceDataSource_e, priceDataSource_t) {
        const priceDataSource_i = this._commonData,
          priceDataSource_s = priceDataSource_i.fixedCoordinate ?? priceDataSource_i.coordinate,
          {
            total: priceDataSource_o
          } = this.topBottomTotalHeight(priceDataSource_e),
          priceDataSource_n = priceDataSource_o / this._lines();
        return priceDataSource_s - priceDataSource_n / 2 - 3 > priceDataSource_t || priceDataSource_s + (priceDataSource_o - priceDataSource_n / 2) + 3 < 0
      }
    }
    var priceDataSource_u = priceDataSource_i(52859);
    class _ {
      constructor(priceDataSource_e) {
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
        }, this._invalidated = !0, this._active = !1, this._axisRenderer = new(priceDataSource_e || priceDataSource_d)(this._axisRendererData, this
          ._commonRendererData), this._paneRenderer = new(priceDataSource_e || priceDataSource_d)(this._paneRendererData, this._commonRendererData)
      }
      setActive(priceDataSource_e) {
        this._active = priceDataSource_e
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
      generateTextColor(priceDataSource_e) {
        return (0, priceDataSource_u.colorFromBackground)(priceDataSource_e)
      }
      coordinate() {
        return this._updateRendererDataIfNeeded(), this._commonRendererData.coordinate
      }
      floatCoordinate() {
        return this._updateRendererDataIfNeeded(), this._commonRendererData.floatCoordinate ?? this
          ._commonRendererData.coordinate
      }
      update(priceDataSource_e) {
        this._invalidated = !0
      }
      topBottomTotalHeight(priceDataSource_e) {
        this._updateRendererDataIfNeeded();
        const {
          top: priceDataSource_t,
          bottom: priceDataSource_i,
          total: priceDataSource_s
        } = this._axisRenderer.topBottomTotalHeight(priceDataSource_e), {
          top: priceDataSource_o,
          bottom: priceDataSource_n,
          total: priceDataSource_r
        } = this._paneRenderer.topBottomTotalHeight(priceDataSource_e);
        return {
          top: Math.max(priceDataSource_t, priceDataSource_o),
          bottom: Math.max(priceDataSource_i, priceDataSource_n),
          total: Math.max(priceDataSource_s, priceDataSource_r)
        }
      }
      getFixedCoordinate() {
        return this._commonRendererData.fixedCoordinate || 0
      }
      setFixedCoordinate(priceDataSource_e) {
        this._commonRendererData.fixedCoordinate = priceDataSource_e
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
      setPaneRendererLabelIcon(priceDataSource_e) {
        this._paneRendererData.labelIcon = priceDataSource_e
      }
      setPaneLabelVisible(priceDataSource_e) {
        this._paneRendererData.visible = priceDataSource_e, this._invalidated = !0
      }
      ignoreAlignment() {
        return !1
      }
      _updateRendererDataIfNeeded() {
        this._invalidated && (this._commonRendererData.fixedCoordinate = void 0, this._updateRendererData(this
          ._axisRendererData, this._paneRendererData, this._commonRendererData), this._invalidated = !1)
      }
    }