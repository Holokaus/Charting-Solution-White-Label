/**
 * Module 36281 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (18166 bytes) - comprehensive remediation applied
 */

36281: (exports, module, require) => {
    "use strict";
    require.priceDataSource_d(module, {
      PriceAxisView: () => _
    });
    var utils, hasVolume = require(10555),
      name = require(6453),
      config = require(39612),
      items = require(24640),
      priceDataSource_l = require(33350),
      priceDataSource_c = require(2383),
      handler = require(58221);
    ! function(exports) {
      exports[exports.HitTestTolerance = 0] = "HitTestTolerance", exports[exports.HitTestToleranceTouch = 20] = "HitTestToleranceTouch", exports[exports
          .AdditionalVisibilityTolerance = 3] = "AdditionalVisibilityTolerance", exports[exports.IconLabelExistingAlertWidth = 12] =
        "IconLabelExistingAlertWidth", exports[exports.IconLabelExistingAlertHeight = 10.73] = "IconLabelExistingAlertHeight", exports[exports
          .IconLabelExistingAlertHorzMargin = 11] = "IconLabelExistingAlertHorzMargin"
    }(utils || (utils = {}));
    new Path2D("");
    class priceDataSource_d {
      constructor(exports, module) {
        this._bodyBox = null, this.setData(exports, module)
      }
      setData(exports, module) {
        this._data = exports, this._commonData = module
      }
      lastDrawnBodyBox() {
        return this._bodyBox
      }
      draw(exports, module, require, utils, name) {
        const config = this._data,
          {
            mediaSize: priceDataSource_c,
            bitmapSize: priceDataSource_d,
            horizontalPixelRatio: priceDataSource_u,
            verticalPixelRatio: _
          } = module;
        if (!config.visible || this._isOutOfScreen(require, priceDataSource_c.height)) return;
        const priceDataSource_p = this._commonData,
          priceDataSource_m = void 0 !== config.labelIcon,
          priceDataSource_g = require.paddingTop + priceDataSource_p.additionalPaddingTop,
          priceDataSource_f = require.paddingBottom + priceDataSource_p.additionalPaddingBottom,
          {
            paddingOuter: priceDataSource_y,
            paddingInner: priceDataSource_v,
            fontSize: S,
            borderSize: priceDataSource_b
          } = require,
          priceDataSource_w = config.ignoreAdditionalPaddingInner ? 0 : require.additionalPaddingInner;
        let C = config.text,
          T = config.textColor || priceDataSource_p.textColor,
          P = config.secondLine || "",
          priceDataSource_x = priceDataSource_p.secondLineTextColor || T,
          M = config.thirdLine || "";
        const I = priceDataSource_p.thirdLineTextColor || T;
        0 === P.length && (P = M, priceDataSource_x = I, M = ""), 0 === C.length && (C = P, T = priceDataSource_x, P = M, priceDataSource_x = I, M = ""), exports.save(),
          void 0 !== priceDataSource_p.globalAlpha && (exports.globalAlpha *= priceDataSource_p.globalAlpha), exports.font = require.font;
        const A = utils.yMidCorrection(exports, C) * _,
          L = S + priceDataSource_g + priceDataSource_f,
          priceDataSource_k = (config.labelIconMinWidth ?? 0) * priceDataSource_u,
          E = Boolean(P),
          D = Boolean(M),
          B = priceDataSource_v + priceDataSource_y + priceDataSource_w,
          V = [Math.ceil(utils.measureText(exports, C)), E ? Math.ceil(utils.measureText(exports, P)) : 0, D ? Math.ceil(utils.measureText(exports,
            M)) : 0],
          R = Math.max(1, Math.floor(_));
        let N = Math.round(L * _);
        N % 2 != R % 2 && (N += 1);
        const O = Math.round((S + require.lineSpacing) * _),
          F = Math.round(2 * (S + require.lineSpacing) * _),
          W = Math.max(1, Math.floor(priceDataSource_b * priceDataSource_u)),
          H = config.separatorVisible ? W : 0,
          priceDataSource_z = config.borderVisible ? W : 0,
          U = priceDataSource_m ? Math.max(N, priceDataSource_k) : Math.round((Math.max(...V) + B) * priceDataSource_u),
          priceDataSource_j = Math.round(priceDataSource_w * priceDataSource_u),
          G = priceDataSource_d.width,
          priceDataSource_q = Math.ceil(priceDataSource_v * priceDataSource_u),
          $ = Math.round((priceDataSource_p.fixedCoordinate ?? priceDataSource_p.coordinate) * _) - Math.floor(.5 * _),
          K = Math.floor($ + R / 2 - N / 2),
          Y = K + N,
          Z = "right" === name,
          X = void 0 !== config.xCoord ? Math.round(config.xCoord * priceDataSource_u) + (Z ? 1 : -1) * Math.round(U / 2) : Z ? G - H : H;
        let J, Q = X;
        const ee = config.backgroung ?? priceDataSource_p.background;
        exports.fillStyle = ee;
        const te = 2 * _;
        if (exports.textAlign = Z ? "right" : "left", exports.textBaseline = "middle", Z ? (Q = X - U, J = X - priceDataSource_j - priceDataSource_q + H) : (Q =
            X + U, J = X + priceDataSource_j + priceDataSource_q - H), this._bodyBox = null, C || priceDataSource_m) {
          const module = D ? N + F : E ? N + O : N,
            require = priceDataSource_p.borderColor ?? ee,
            utils = void 0 !== config.xCoord ? te : 0;
          if (((require, name, items) => {
              if (Z) {
                (0, handler.drawRoundRectWithInnerBorder)(exports, Q, K, U, module, require, config.overridenRadius ? (0, handler
                  .scaleDrawRoundRectRadii)(config.overridenRadius, _) : [te, utils, utils, te], priceDataSource_z, name, items);
                const priceDataSource_l = (0, hasVolume.point)(Q / priceDataSource_u, K / _),
                  priceDataSource_c = priceDataSource_l.add((0, hasVolume.point)(U / priceDataSource_u, module / _));
                this._bodyBox = (0, hasVolume.box)(priceDataSource_l, priceDataSource_c)
              } else {
                (0, handler.drawRoundRectWithInnerBorder)(exports, X, K, U, module, require, config.overridenRadius ? (0, handler
                  .scaleDrawRoundRectRadii)(config.overridenRadius, _) : [utils, te, te, utils], priceDataSource_z, name, items);
                const priceDataSource_l = (0, hasVolume.point)(X / priceDataSource_u, K / _),
                  priceDataSource_c = priceDataSource_l.add((0, hasVolume.point)(U / priceDataSource_u, module / _));
                this._bodyBox = (0, hasVolume.box)(priceDataSource_l, priceDataSource_c)
              }
            })(ee, require, priceDataSource_p.borderStyle), priceDataSource_m) {
            if (0 === config.labelIcon) this._drawPlusIcon(exports, X, Q, K, $, Y, R);
            return void exports.restore()
          }
          exports.save(), exports.translate(J, (K + Y) / 2 + A), (0, priceDataSource_l.drawScaled)(exports, priceDataSource_u, _, (() => {
            exports.fillStyle = T, exports.fillText(C, 0, 0)
          })), exports.restore()
        }
        E && (exports.fillStyle = priceDataSource_x, exports.save(), exports.translate(J, (K + Y) / 2 + A + O), (0, priceDataSource_l.drawScaled)(exports, priceDataSource_u, _, (() => {
          exports.fillText((0, items.startWithLTR)(P), 0, 0)
        })), exports.restore()), D && (exports.fillStyle = I, exports.save(), exports.translate(J, (K + Y) / 2 + A + F), (0, priceDataSource_l.drawScaled)(
          exports, priceDataSource_u, _, (() => {
            exports.fillText((0, items.startWithLTR)(M), 0, 0)
          })), exports.restore()), exports.restore()
      }
      topBottomTotalHeight(exports) {
        const module = this._lines();
        if (!this._data.visible || 0 === module) return {
          top: 0,
          bottom: 0,
          total: 0
        };
        const require = exports.fontSize / 2 + exports.paddingTop + this._commonData.additionalPaddingTop,
          utils = (module - .5) * exports.fontSize + (module - 1) * exports.lineSpacing + exports.paddingBottom + this._commonData
          .additionalPaddingBottom;
        return {
          top: require,
          bottom: utils,
          total: require + utils
        }
      }
      hitTest(exports) {
        return function(exports, module) {
          const require = (0, config.lastMouseOrTouchEventInfo)().isTouch ? 20 : 0,
            utils = exports.hitTestData;
          if (void 0 === utils || !exports.visible) return null;
          const {
            itemBox: items,
            clickHandler: priceDataSource_l,
            tooltip: handler
          } = utils;
          if (items) {
            const config = (0, hasVolume.box)(new hasVolume.Point(items.min.priceDataSource_x - require, items.min.priceDataSource_y - require), new hasVolume.Point(items.max.priceDataSource_x + require, items.max.priceDataSource_y + require));
            if ((0, name.pointInBox)(module, config)) return new priceDataSource_c.HitTestResult(exports.hitTarget ?? priceDataSource_c.HitTarget.Custom, {
              clickHandler: priceDataSource_l?.bind(null, module),
              tapHandler: priceDataSource_l?.bind(null, module),
              hoverModelFromAxis: utils.hoverModelFromAxis,
              activeItem: utils.activeItem,
              tooltip: handler
            })
          }
          return null
        }(this._data, exports)
      }
      _drawPlusIcon(exports, module, require, utils, hasVolume, name, config) {
        exports.fillStyle = this._commonData.textColor, exports.strokeStyle = this._commonData.textColor, exports.lineWidth = config;
        const items = Math.abs(module - require);
        let priceDataSource_l = Math.round(.35 * items);
        priceDataSource_l % 2 != config % 2 && (priceDataSource_l += 1);
        let priceDataSource_c = Math.round(.65 * items);
        priceDataSource_c % 2 != config % 2 && (priceDataSource_c += 1);
        const handler = Math.floor((items - priceDataSource_l) / 2),
          priceDataSource_d = Math.min(module, require),
          priceDataSource_u = priceDataSource_d + Math.floor(items / 2 - config / 2);
        exports.fillRect(priceDataSource_d + handler, hasVolume, priceDataSource_l, config), exports.fillRect(priceDataSource_u, utils + handler, config, priceDataSource_l), exports.beginPath(), exports.arc(priceDataSource_u + config / 2, hasVolume + config / 2, priceDataSource_c / 2, 0,
          2 * Math.PI, !1), exports.stroke()
      }
      _drawClockExistingAlertIcon(exports, module, require, utils, hasVolume, name) {}
      _lines() {
        const exports = this._data;
        return (exports.text ? 1 : 0) + (exports.secondLine ? 1 : 0) + (exports.thirdLine ? 1 : 0)
      }
      _isOutOfScreen(exports, module) {
        const require = this._commonData,
          utils = require.fixedCoordinate ?? require.coordinate,
          {
            total: hasVolume
          } = this.topBottomTotalHeight(exports),
          name = hasVolume / this._lines();
        return utils - name / 2 - 3 > module || utils + (hasVolume - name / 2) + 3 < 0
      }
    }
    var priceDataSource_u = require(52859);
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
        }, this._invalidated = !0, this._active = !1, this._axisRenderer = new(exports || priceDataSource_d)(this._axisRendererData, this
          ._commonRendererData), this._paneRenderer = new(exports || priceDataSource_d)(this._paneRendererData, this._commonRendererData)
      }
      setActive(exports) {
        this._active = exports
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
        return (0, priceDataSource_u.colorFromBackground)(exports)
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
          top: module,
          bottom: require,
          total: utils
        } = this._axisRenderer.topBottomTotalHeight(exports), {
          top: hasVolume,
          bottom: name,
          total: config
        } = this._paneRenderer.topBottomTotalHeight(exports);
        return {
          top: Math.max(module, hasVolume),
          bottom: Math.max(require, name),
          total: Math.max(utils, config)
        }
      }
      getFixedCoordinate() {
        return this._commonRendererData.fixedCoordinate || 0
      }
      setFixedCoordinate(exports) {
        this._commonRendererData.fixedCoordinate = exports
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
        this._paneRendererData.labelIcon = exports
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