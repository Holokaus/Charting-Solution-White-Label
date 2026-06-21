// Module 36281 - Price Axis Renderer
// Original file: 36281.js
// Size: 7.3 KB
// Purpose: Renders price axis labels with hit testing support
// Key components: PriceAxisView, LabelRenderer, HitTest

"use strict";

// Import dependencies
const geometry = require(10555);        // Point/box geometry utilities
const hitTestUtil = require(6453);      // Hit testing utilities
const eventInfo = require(39612);       // Mouse/touch event info
const textUtils = require(24640);       // Text formatting (LTR support)
const canvasUtils = require(33350);     // Canvas drawing helpers
const hitTarget = require(2383);        // Hit target constants
const borderUtils = require(58221);     // Border drawing utilities
const colorUtils = require(52859);      // Color utilities

// Renderer configuration constants
const RendererConfig = {
    HitTestTolerance: 0,
    HitTestToleranceTouch: 20,
    AdditionalVisibilityTolerance: 3,
    IconLabelExistingAlertWidth: 12,
    IconLabelExistingAlertHeight: 10.73,
    IconLabelExistingAlertHorzMargin: 11
};
  
  /**
   * LabelRenderer - Renders individual price axis labels
   */
  class LabelRenderer {
    constructor(data, commonData) {
      this._bodyBox = null;
      this.setData(data, commonData);
    }
    
    setData(data, commonData) {
      this._data = data;
      this._commonData = commonData;
    }
    
    lastDrawnBodyBox() {
      return this._bodyBox;
    }
    
    draw(ctx, settings, axisConfig, textMeasurer, alignment) {
      const data = this._data;
      const { mediaSize, bitmapSize, horizontalPixelRatio: hpr, verticalPixelRatio: vpr } = settings;
      
      if (!data.visible || this._isOutOfScreen(axisConfig, mediaSize.height)) return;
      
      const common = this._commonData;
      const hasIcon = void 0 !== data.labelIcon;
      
      const paddingTop = axisConfig.paddingTop + common.additionalPaddingTop;
      const paddingBottom = axisConfig.paddingBottom + common.additionalPaddingBottom;
      const { paddingOuter, paddingInner, fontSize, borderSize } = axisConfig;
      const innerPad = data.ignoreAdditionalPaddingInner ? 0 : axisConfig.additionalPaddingInner;
      
      let line1 = data.text, line1Color = data.textColor || common.textColor;
      let line2 = data.secondLine || "", line2Color = common.secondLineTextColor || line1Color;
      let line3 = data.thirdLine || "", line3Color = common.thirdLineTextColor || line1Color;
      
      if (!line2) { line2 = line3; line2Color = line3Color; line3 = ""; }
      if (!line1) { line1 = line2; line1Color = line2Color; line2 = line3; line2Color = line3Color; line3 = ""; }
      
      ctx.save();
      void 0 !== common.globalAlpha && (ctx.globalAlpha *= common.globalAlpha);
      ctx.font = axisConfig.font;
      
      const baselineCorr = textMeasurer.yMidCorrection(ctx, line1) * vpr;
      const lineHeight = fontSize + paddingTop + paddingBottom;
      const iconMinW = (data.labelIconMinWidth ?? 0) * hpr;
      const hasL2 = !!line2, hasL3 = !!line3;
      const totalInner = paddingInner + paddingOuter + innerPad;
      
      const widths = [
        Math.ceil(textMeasurer.measureText(ctx, line1)),
        hasL2 ? Math.ceil(textMeasurer.measureText(ctx, line2)) : 0,
        hasL3 ? Math.ceil(textMeasurer.measureText(ctx, line3)) : 0
      ];
      
      const minVpx = Math.max(1, Math.floor(vpr));
      let rndHt = Math.round(lineHeight * vpr);
      if (rndHt % 2 != minVpx % 2) rndHt += 1;
      
      const lineSpacePx = Math.round((fontSize + axisConfig.lineSpacing) * vpr);
      const dblLineSpace = Math.round(2 * (fontSize + axisConfig.lineSpacing) * vpr);
      const borderW = Math.max(1, Math.floor(borderSize * hpr));
      const sepW = data.separatorVisible ? borderW : 0;
      const borderVisW = data.borderVisible ? borderW : 0;
      
      const labelW = hasIcon ? Math.max(rndHt, iconMinW) : Math.round((Math.max(...widths) + totalInner) * hpr);
      const innerPadX = Math.round(innerPad * hpr);
      const canvasW = bitmapSize.width;
      const innerPadCeil = Math.ceil(paddingInner * hpr);
      
      const coord = Math.round((common.fixedCoordinate ?? common.coordinate) * vpr) - Math.floor(0.5 * vpr);
      const labelTop = Math.floor(coord + minVpx / 2 - rndHt / 2);
      const labelBot = labelTop + rndHt;
      const isRight = "right" === alignment;
      
      let xBase, labelX, textX;
      if (void 0 !== data.xCoord) {
        const xPos = Math.round(data.xCoord * hpr);
        xBase = xPos + (isRight ? 1 : -1) * Math.round(labelW / 2);
      } else {
        xBase = isRight ? canvasW - sepW : sepW;
      }
      
      const bgColor = data.backgroung ?? common.background;
      ctx.fillStyle = bgColor;
      const cornerMult = 2 * vpr;
      
      ctx.textAlign = isRight ? "right" : "left";
      ctx.textBaseline = "middle";
      
      if (isRight) {
        labelX = xBase - labelW;
        textX = xBase - innerPadX - innerPadCeil + sepW;
      } else {
        labelX = xBase + labelW;
        textX = xBase + innerPadX + innerPadCeil - sepW;
      }
      
      this._bodyBox = null;
      if (line1 || hasIcon) {
        const totHt = hasL3 ? rndHt + dblLineSpace : hasL2 ? rndHt + lineSpacePx : rndHt;
        const borderColor = common.borderColor ?? bgColor;
        const cornerAdj = void 0 !== data.xCoord ? cornerMult : 0;
        
        ((bg, cfg, bs) => {
          if (isRight) {
            borderUtils.drawRoundRectWithInnerBorder(ctx, labelX, labelTop, labelW, totHt, bg,
              data.overridenRadius ? borderUtils.scaleDrawRoundRectRadii(data.overridenRadius, vpr) 
                : [cornerMult, cornerAdj, cornerAdj, cornerMult], borderVisW, cfg, bs);
            const tl = geometry.point(labelX / hpr, labelTop / vpr);
            const br = tl.add(geometry.point(labelW / hpr, totHt / vpr));
            this._bodyBox = geometry.box(tl, br);
          } else {
            borderUtils.drawRoundRectWithInnerBorder(ctx, xBase, labelTop, labelW, totHt, bg,
              data.overridenRadius ? borderUtils.scaleDrawRoundRectRadii(data.overridenRadius, vpr) 
                : [cornerAdj, cornerMult, cornerMult, cornerAdj], borderVisW, cfg, bs);
            const tl = geometry.point(xBase / hpr, labelTop / vpr);
            const br = tl.add(geometry.point(labelW / hpr, totHt / vpr));
            this._bodyBox = geometry.box(tl, br);
          }
        })(bgColor, axisConfig, common.borderStyle);
        
        if (hasIcon) {
          if (0 === data.labelIcon) this._drawPlusIcon(ctx, xBase, labelX, labelTop, coord, labelBot, minVpx);
          ctx.restore();
          return;
        }
        
        ctx.save();
        ctx.translate(textX, (labelTop + labelBot) / 2 + baselineCorr);
        canvasUtils.drawScaled(ctx, hpr, vpr, () => { ctx.fillStyle = line1Color; ctx.fillText(line1, 0, 0); });
        ctx.restore();
      }
      
      if (hasL2) {
        ctx.fillStyle = line2Color;
        ctx.save();
        ctx.translate(textX, (labelTop + labelBot) / 2 + baselineCorr + lineSpacePx);
        canvasUtils.drawScaled(ctx, hpr, vpr, () => { ctx.fillText(textUtils.startWithLTR(line2), 0, 0); });
        ctx.restore();
      }
      
      if (hasL3) {
        ctx.fillStyle = line3Color;
        ctx.save();
        ctx.translate(textX, (labelTop + labelBot) / 2 + baselineCorr + dblLineSpace);
        canvasUtils.drawScaled(ctx, hpr, vpr, () => { ctx.fillText(textUtils.startWithLTR(line3), 0, 0); });
        ctx.restore();
      }
      
      ctx.restore();
    }
    
    topBottomTotalHeight(cfg) {
      const lines = this._lines();
      if (!this._data.visible || !lines) return { top: 0, bottom: 0, total: 0 };
      const top = cfg.fontSize / 2 + cfg.paddingTop + this._commonData.additionalPaddingTop;
      const bot = (lines - 0.5) * cfg.fontSize + (lines - 1) * cfg.lineSpacing + cfg.paddingBottom + this._commonData.additionalPaddingBottom;
      return { top, bottom, total: top + bot };
    }
    
    hitTest(pt) {
      return ((lbl, testPt) => {
        const tol = eventInfo.lastMouseOrTouchEventInfo().isTouch ? 20 : 0;
        const htData = lbl.hitTestData;
        if (void 0 === htData || !lbl.visible) return null;
        const { itemBox, clickHandler, tooltip } = htData;
        if (itemBox) {
          const expBox = geometry.box(
            new geometry.Point(itemBox.min.x - tol, itemBox.min.y - tol),
            new geometry.Point(itemBox.max.x + tol, itemBox.max.y + tol)
          );
          if (hitTestUtil.pointInBox(testPt, expBox)) {
            return new hitTarget.HitTestResult(lbl.hitTarget ?? hitTarget.HitTarget.Custom, {
              clickHandler: clickHandler?.bind(null, testPt),
              tapHandler: clickHandler?.bind(null, testPt),
              hoverModelFromAxis: htData.hoverModelFromAxis,
              activeItem: htData.activeItem,
              tooltip
            });
          }
        }
        return null;
      })(this._data, pt);
    }
    
    _drawPlusIcon(ctx, xB, lX, lT, coord, lB, lw) {
      ctx.fillStyle = this._commonData.textColor;
      ctx.strokeStyle = this._commonData.textColor;
      ctx.lineWidth = lw;
      const sz = Math.abs(xB - lX);
      let inSz = Math.round(0.35 * sz);
      if (inSz % 2 != lw % 2) inSz += 1;
      let outSz = Math.round(0.65 * sz);
      if (outSz % 2 != lw % 2) outSz += 1;
      const off = Math.floor((sz - inSz) / 2);
      const mn = Math.min(xB, lX);
      const ctr = mn + Math.floor(sz / 2 - lw / 2);
      ctx.fillRect(mn + off, coord, inSz, lw);
      ctx.fillRect(ctr, coord + off, lw, inSz);
      ctx.beginPath();
      ctx.arc(ctr + lw / 2, coord + lw / 2, outSz / 2, 0, 2 * Math.PI, false);
      ctx.stroke();
    }
    
    _drawClockExistingAlertIcon() {}
    _lines() { const d = this._data; return (d.text?1:0) + (d.secondLine?1:0) + (d.thirdLine?1:0); }
    _isOutOfScreen(cfg, scrH) {
      const c = this._commonData;
      const coord = c.fixedCoordinate ?? c.coordinate;
      const { total } = this.topBottomTotalHeight(cfg);
      const lh = total / this._lines();
      return coord - lh/2 - 3 > scrH || coord + (total - lh/2) + 3 < 0;
    }
  }
  
  /**
 * PriceAxisView - Main price axis view controller
 */
class PriceAxisView {
    constructor(RC) {
      this._commonRendererData = { coordinate: 0, textColor: "#FFF", background: "#000", additionalPaddingBottom: 0, additionalPaddingTop: 0 };
      this._axisRendererData = { text: "", visible: false, separatorVisible: true, borderVisible: false, ignoreAdditionalPaddingInner: false };
      this._paneRendererData = { text: "", visible: false, separatorVisible: false, borderVisible: false, ignoreAdditionalPaddingInner: true };
      this._invalidated = true;
      this._active = false;
      const RClass = RC || LabelRenderer;
      this._axisRenderer = new RClass(this._axisRendererData, this._commonRendererData);
      this._paneRenderer = new RClass(this._paneRendererData, this._commonRendererData);
    }
    setActive(a) { this._active = a; }
    text() { this._upd(); return this._axisRendererData.text; }
    secondLineText() { this._upd(); return this._axisRendererData.secondLine; }
    thirdLineText() { this._upd(); return this._axisRendererData.thirdLine; }
    background() { this._upd(); return this._commonRendererData.background; }
    color() { this._upd(); return this.generateTextColor(this.background()); }
    generateTextColor(bg) { return colorUtils.colorFromBackground(bg); }
    coordinate() { this._upd(); return this._commonRendererData.coordinate; }
    floatCoordinate() { this._upd(); return this._commonRendererData.floatCoordinate ?? this._commonRendererData.coordinate; }
    update() { this._invalidated = true; }
    topBottomTotalHeight(cfg) {
      this._upd();
      const ax = this._axisRenderer.topBottomTotalHeight(cfg);
      const pn = this._paneRenderer.topBottomTotalHeight(cfg);
      return { top: Math.max(ax.top, pn.top), bottom: Math.max(ax.bottom, pn.bottom), total: Math.max(ax.total, pn.total) };
    }
    getFixedCoordinate() { return this._commonRendererData.fixedCoordinate || 0; }
    setFixedCoordinate(c) { this._commonRendererData.fixedCoordinate = c; }
    isVisible() { this._upd(); return this._axisRendererData.visible || this._paneRendererData.visible; }
    isAxisLabelVisible() { this._upd(); return this._axisRendererData.visible; }
    isPaneLabelVisible() { this._upd(); return this._paneRendererData.visible; }
    renderer() { this._upd(); return this._axisRenderer; }
    paneRenderer() { this._upd(); return this._paneRenderer; }
    setPaneRendererLabelIcon(ic) { this._paneRendererData.labelIcon = ic; }
    setPaneLabelVisible(v) { this._paneRendererData.visible = v; this._invalidated = true; }
    ignoreAlignment() { return false; }
    _upd() { if (this._invalidated) { this._commonRendererData.fixedCoordinate = void 0; this._updateRendererData(this._axisRendererData, this._paneRendererData, this._commonRendererData); this._invalidated = false; } }
}

// Export
module.exports = {
    PriceAxisView: PriceAxisView,
    LabelRenderer: LabelRenderer,
    RendererConfig: RendererConfig
};
