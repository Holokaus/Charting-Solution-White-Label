/**
 * Module 33350 - Auto-beautified from TradingView webpack bundle
 *
 * @module 33350
 * @date 2026-04-23
 * @size 3127 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 24640, 27714, 49483, 50151, 57658, 59239
 *
 * Exports:
 *   - addExclusionArea (internal: T)
 *   - addExclusionAreaByScope (internal: C)
 *   - calcTextHorizontalShift (internal: b)
 *   - clearRect (internal: p)
 *   - createBoundCanvas (internal: v)
 *   - createDisconnectedCanvas (internal: g)
 *   - createDisconnectedCanvasByRenderingInfo (internal: f)
 *   - disableSelection (internal: w)
 *   - drawScaled (internal: m)
 *   - drawWithExclusionAreaByScope (internal: P)
 *   - fillRect (internal: _)
 *   - getBindingRenderingInfo (internal: h)
 *   - getContext2D (internal: d)
 *   - getPrescaledContext2D (internal: u)
 *   - measureText (internal: M)
 *   - tryApplySuggestedCanvasBitmapSize (internal: S)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  addExclusionArea: () => T,
  addExclusionAreaByScope: () => C,
  calcTextHorizontalShift: () => b,
  clearRect: () => p,
  createBoundCanvas: () => v,
  createDisconnectedCanvas: () => g,
  createDisconnectedCanvasByRenderingInfo: () => f,
  disableSelection: () => w,
  drawScaled: () => m,
  drawWithExclusionAreaByScope: () => P,
  fillRect: () => _,
  getBindingRenderingInfo: () => h,
  getContext2D: () => d,
  getPrescaledContext2D: () => u,
  measureText: () => M,
  tryApplySuggestedCanvasBitmapSize: () => S
});
var s = i(27714),
  o = i(50151),
  n = i(59239),
  r = i(57658),
  a = i(24640),
  l = i(49483);

function c(e) {
  return {
    horizontalPixelRatio: Math.max(1, e.bitmapSize.width / e.canvasElementClientSize.width),
    verticalPixelRatio: Math.max(1, e.bitmapSize.height / e.canvasElementClientSize.height)
  }
}

function h(e) {
  return {
    ...c(e),
    bitmapSize: e.bitmapSize,
    mediaSize: e.canvasElementClientSize
  }
}

function d(e) {
  const t = (0, o.ensureNotNull)(e.getContext("2d"));
  return t.setTransform(1, 0, 0, 1, 0, 0), t
}

function u(e) {
  const t = (0, o.ensureNotNull)(e.getContext("2d")),
    i = (0, n.getCanvasDevicePixelRatio)(e);
  return t.setTransform(i, 0, 0, i, 0, 0), t
}

function _(e, t, i, s, o, n) {
  e.save(), e.fillStyle = n, e.fillRect(t, i, s, o), e.restore()
}

function p(e, t, i, s, o, n) {
  e.save(), e.globalCompositeOperation = "copy", e.fillStyle = n, e.fillRect(t, i, s, o), e.restore()
}

function m(e, t, i, s) {
  e.save(), e.scale(t, i), s(), e.restore()
}

function g(e, t, i) {
  const s = y(e);
  return void 0 === i && (i = (0, n.getCanvasDevicePixelRatio)(s)), s.width = t.width * i, s.height = t.height * i, s
}

function f(e, t) {
  const {
    bitmapSize: i,
    mediaSize: s
  } = t, o = y(e);
  return o.style.width = `${s.width}px`, o.style.height = `${s.height}px`, o.width = i.width, o.height = i.height, o
}

function y(e) {
  const t = e.createElement("canvas");
  return w(t), t
}

function v(e, t) {
  const i = y((0, o.ensureNotNull)(e.ownerDocument));
  e.appendChild(i);
  const n = (0, s.bindCanvasElementBitmapSizeTo)(i, {
    type: "device-pixel-content-box",
    transform: (e, t) => 0 === e.width || 0 === e.height ? e : {
      width: Math.max(e.width, t.width),
      height: Math.max(e.height, t.height)
    }
  });
  return n.resizeCanvasElement(t), n
}

function S(e) {
  const t = e.suggestedBitmapSize;
  return null !== t && t.width > 0 && t.height > 0 && (e.applySuggestedBitmapSize(), !0)
}

function b(e, t) {
  return "center" === e.textAlign ? 0 : (0,
    a.isRtl)() ? "start" === e.textAlign || "right" === e.textAlign ? t : 0 : "start" === e.textAlign || "left" === e.textAlign ? 0 : t
}

function w(e) {
  e.style.userSelect = "none", e.style.webkitUserSelect = "none", e.style.msUserSelect = "none", e.style.MozUserSelect = "none", e.style.webkitTapHighlightColor = "transparent"
}

function C(e, t) {
  const {
    context: i,
    horizontalPixelRatio: s,
    verticalPixelRatio: o,
    bitmapSize: n
  } = e;
  i.beginPath(), i.rect(0, 0, n.width, n.height);
  for (let e = 0; e < t.length; e++) {
    let {
      x: n,
      y: r
    } = t[e];
    n *= s, r *= o, 0 !== e ? i.lineTo(n, r) : i.moveTo(n, r)
  }
  i.closePath(), i.clip("evenodd")
}

function T(e, t, i) {
  C({
    context: e,
    ...t
  }, i)
}

function P(e, t, i) {
  e.context.save(), C(e, t), i(), e.context.restore()
}
let x;

function M(e, t, i) {
  return x || function() {
    const e = document.createElement("canvas");
    e.width = 0, e.height = 0, (0, l.isMac)() && (e.style.display = "none", document.body.append(e)), x = (0, o.ensureNotNull)(e.getContext("2d")), x.textBaseline = "alphabetic", x.textAlign = "center"
  }(), t && x.font !== t && (x.font = t), i ? i.getMetrics(x, e) : (0, r.getMinTextMetrics)(x.measureText(e))
