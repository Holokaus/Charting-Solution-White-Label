/**
 * Module 33350 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33350: (lineToolManager_e, t, i) => {
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
    var lineToolManager_s = i(27714),
      o = i(50151),
      lineToolManager_n = i(59239),
      r = i(57658),
      a = i(24640),
      l = i(49483);

    function c(lineToolManager_e) {
      return {
        horizontalPixelRatio: Math.max(1, lineToolManager_e.bitmapSize.width / lineToolManager_e.canvasElementClientSize.width),
        verticalPixelRatio: Math.max(1, lineToolManager_e.bitmapSize.height / lineToolManager_e.canvasElementClientSize.height)
      }
    }

    function h(lineToolManager_e) {
      return {
        ...c(lineToolManager_e),
        bitmapSize: lineToolManager_e.bitmapSize,
        mediaSize: lineToolManager_e.canvasElementClientSize
      }
    }

    function d(lineToolManager_e) {
      const t = (0, o.ensureNotNull)(lineToolManager_e.getContext("2d"));
      return t.setTransform(1, 0, 0, 1, 0, 0), t
    }

    function u(lineToolManager_e) {
      const t = (0, o.ensureNotNull)(lineToolManager_e.getContext("2d")),
        i = (0, lineToolManager_n.getCanvasDevicePixelRatio)(lineToolManager_e);
      return t.setTransform(i, 0, 0, i, 0, 0), t
    }

    function _(lineToolManager_e, t, i, lineToolManager_s, o, lineToolManager_n) {
      lineToolManager_e.save(), lineToolManager_e.fillStyle = lineToolManager_n, lineToolManager_e.fillRect(t, i, lineToolManager_s, o), lineToolManager_e.restore()
    }

    function p(lineToolManager_e, t, i, lineToolManager_s, o, lineToolManager_n) {
      lineToolManager_e.save(), lineToolManager_e.globalCompositeOperation = "copy", lineToolManager_e.fillStyle = lineToolManager_n, lineToolManager_e.fillRect(t, i, lineToolManager_s, o), lineToolManager_e.restore()
    }

    function m(lineToolManager_e, t, i, lineToolManager_s) {
      lineToolManager_e.save(), lineToolManager_e.scale(t, i), lineToolManager_s(), lineToolManager_e.restore()
    }

    function g(lineToolManager_e, t, i) {
      const lineToolManager_s = y(lineToolManager_e);
      return void 0 === i && (i = (0, lineToolManager_n.getCanvasDevicePixelRatio)(lineToolManager_s)), lineToolManager_s.width = t.width * i, lineToolManager_s.height = t.height * i,
        lineToolManager_s
    }

    function f(lineToolManager_e, t) {
      const {
        bitmapSize: i,
        mediaSize: lineToolManager_s
      } = t, o = y(lineToolManager_e);
      return o.style.width = `${lineToolManager_s.width}px`, o.style.height = `${lineToolManager_s.height}px`, o.width = i.width, o.height = i.height, o
    }

    function y(lineToolManager_e) {
      const t = lineToolManager_e.createElement("canvas");
      return w(t), t
    }

    function v(lineToolManager_e, t) {
      const i = y((0, o.ensureNotNull)(lineToolManager_e.ownerDocument));
      lineToolManager_e.appendChild(i);
      const lineToolManager_n = (0, lineToolManager_s.bindCanvasElementBitmapSizeTo)(i, {
        type: "device-pixel-content-box",
        transform: (lineToolManager_e, t) => 0 === lineToolManager_e.width || 0 === lineToolManager_e.height ? lineToolManager_e : {
          width: Math.max(lineToolManager_e.width, t.width),
          height: Math.max(lineToolManager_e.height, t.height)
        }
      });
      return lineToolManager_n.resizeCanvasElement(t), lineToolManager_n
    }

    function S(lineToolManager_e) {
      const t = lineToolManager_e.suggestedBitmapSize;
      return null !== t && t.width > 0 && t.height > 0 && (lineToolManager_e.applySuggestedBitmapSize(), !0)
    }

    function b(lineToolManager_e, t) {
      return "center" === lineToolManager_e.textAlign ? 0 : (0,
          a.isRtl)() ? "start" === lineToolManager_e.textAlign || "right" === lineToolManager_e.textAlign ? t : 0 : "start" === lineToolManager_e.textAlign ||
        "left" === lineToolManager_e.textAlign ? 0 : t
    }

    function w(lineToolManager_e) {
      lineToolManager_e.style.userSelect = "none", lineToolManager_e.style.webkitUserSelect = "none", lineToolManager_e.style.msUserSelect = "none", lineToolManager_e.style
        .MozUserSelect = "none", lineToolManager_e.style.webkitTapHighlightColor = "transparent"
    }

    function C(lineToolManager_e, t) {
      const {
        context: i,
        horizontalPixelRatio: lineToolManager_s,
        verticalPixelRatio: o,
        bitmapSize: lineToolManager_n
      } = lineToolManager_e;
      i.beginPath(), i.rect(0, 0, lineToolManager_n.width, lineToolManager_n.height);
      for (let lineToolManager_e = 0; lineToolManager_e < t.length; lineToolManager_e++) {
        let {
          x: lineToolManager_n,
          y: r
        } = t[lineToolManager_e];
        lineToolManager_n *= lineToolManager_s, r *= o, 0 !== lineToolManager_e ? i.lineTo(lineToolManager_n, r) : i.moveTo(lineToolManager_n, r)
      }
      i.closePath(), i.clip("evenodd")
    }

    function T(lineToolManager_e, t, i) {
      C({
        context: lineToolManager_e,
        ...t
      }, i)
    }

    function P(lineToolManager_e, t, i) {
      lineToolManager_e.context.save(), C(lineToolManager_e, t), i(), lineToolManager_e.context.restore()
    }
    let x;

    function M(lineToolManager_e, t, i) {
      return x || function() {
        const lineToolManager_e = document.createElement("canvas");
        lineToolManager_e.width = 0, lineToolManager_e.height = 0, (0, l.isMac)() && (lineToolManager_e.style.display = "none", document.body.append(lineToolManager_e)), x = (0, o
          .ensureNotNull)(lineToolManager_e.getContext("2d")), x.textBaseline = "alphabetic", x.textAlign = "center"
      }(), t && x.font !== t && (x.font = t), i ? i.getMetrics(x, lineToolManager_e) : (0, r.getMinTextMetrics)(x.measureText(lineToolManager_e))
    }
}
