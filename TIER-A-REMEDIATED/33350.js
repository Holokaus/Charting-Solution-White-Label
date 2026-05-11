/**
 * Module 33350 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33350: (lineToolManager_e, price_reviewed, i) => {
    "use strict";
    i.d(price_reviewed, {
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
      const price_reviewed = (0, o.ensureNotNull)(lineToolManager_e.getContext("2d"));
      return price_reviewed.setTransform(1, 0, 0, 1, 0, 0), price_reviewed
    }

    function u(lineToolManager_e) {
      const price_reviewed = (0, o.ensureNotNull)(lineToolManager_e.getContext("2d")),
        i = (0, lineToolManager_n.getCanvasDevicePixelRatio)(lineToolManager_e);
      return price_reviewed.setTransform(i, 0, 0, i, 0, 0), price_reviewed
    }

    function _(lineToolManager_e, price_reviewed, i, lineToolManager_s, o, lineToolManager_n) {
      lineToolManager_e.save(), lineToolManager_e.fillStyle = lineToolManager_n, lineToolManager_e.fillRect(price_reviewed, i, lineToolManager_s, o), lineToolManager_e.restore()
    }

    function p(lineToolManager_e, price_reviewed, i, lineToolManager_s, o, lineToolManager_n) {
      lineToolManager_e.save(), lineToolManager_e.globalCompositeOperation = "copy", lineToolManager_e.fillStyle = lineToolManager_n, lineToolManager_e.fillRect(price_reviewed, i, lineToolManager_s, o), lineToolManager_e.restore()
    }

    function m(lineToolManager_e, price_reviewed, i, lineToolManager_s) {
      lineToolManager_e.save(), lineToolManager_e.scale(price_reviewed, i), lineToolManager_s(), lineToolManager_e.restore()
    }

    function g(lineToolManager_e, price_reviewed, i) {
      const lineToolManager_s = y(lineToolManager_e);
      return void 0 === i && (i = (0, lineToolManager_n.getCanvasDevicePixelRatio)(lineToolManager_s)), lineToolManager_s.width = price_reviewed.width * i, lineToolManager_s.height = price_reviewed.height * i,
        lineToolManager_s
    }

    function f(lineToolManager_e, price_reviewed) {
      const {
        bitmapSize: i,
        mediaSize: lineToolManager_s
      } = price_reviewed, o = y(lineToolManager_e);
      return o.style.width = `${lineToolManager_s.width}px`, o.style.height = `${lineToolManager_s.height}px`, o.width = i.width, o.height = i.height, o
    }

    function y(lineToolManager_e) {
      const price_reviewed = lineToolManager_e.createElement("canvas");
      return w(price_reviewed), price_reviewed
    }

    function v(lineToolManager_e, price_reviewed) {
      const i = y((0, o.ensureNotNull)(lineToolManager_e.ownerDocument));
      lineToolManager_e.appendChild(i);
      const lineToolManager_n = (0, lineToolManager_s.bindCanvasElementBitmapSizeTo)(i, {
        type: "device-pixel-content-box",
        transform: (lineToolManager_e, price_reviewed) => 0 === lineToolManager_e.width || 0 === lineToolManager_e.height ? lineToolManager_e : {
          width: Math.max(lineToolManager_e.width, price_reviewed.width),
          height: Math.max(lineToolManager_e.height, price_reviewed.height)
        }
      });
      return lineToolManager_n.resizeCanvasElement(price_reviewed), lineToolManager_n
    }

    function S(lineToolManager_e) {
      const price_reviewed = lineToolManager_e.suggestedBitmapSize;
      return null !== price_reviewed && price_reviewed.width > 0 && price_reviewed.height > 0 && (lineToolManager_e.applySuggestedBitmapSize(), !0)
    }

    function b(lineToolManager_e, price_reviewed) {
      return "center" === lineToolManager_e.textAlign ? 0 : (0,
          a.isRtl)() ? "start" === lineToolManager_e.textAlign || "right" === lineToolManager_e.textAlign ? price_reviewed : 0 : "start" === lineToolManager_e.textAlign ||
        "left" === lineToolManager_e.textAlign ? 0 : price_reviewed
    }

    function w(lineToolManager_e) {
      lineToolManager_e.style.userSelect = "none", lineToolManager_e.style.webkitUserSelect = "none", lineToolManager_e.style.msUserSelect = "none", lineToolManager_e.style
        .MozUserSelect = "none", lineToolManager_e.style.webkitTapHighlightColor = "transparent"
    }

    function C(lineToolManager_e, price_reviewed) {
      const {
        context: i,
        horizontalPixelRatio: lineToolManager_s,
        verticalPixelRatio: o,
        bitmapSize: lineToolManager_n
      } = lineToolManager_e;
      i.beginPath(), i.rect(0, 0, lineToolManager_n.width, lineToolManager_n.height);
      for (let lineToolManager_e = 0; lineToolManager_e < price_reviewed.length; lineToolManager_e++) {
        let {
          x: lineToolManager_n,
          y: r
        } = price_reviewed[lineToolManager_e];
        lineToolManager_n *= lineToolManager_s, r *= o, 0 !== lineToolManager_e ? i.lineTo(lineToolManager_n, r) : i.moveTo(lineToolManager_n, r)
      }
      i.closePath(), i.clip("evenodd")
    }

    function T(lineToolManager_e, price_reviewed, i) {
      C({
        context: lineToolManager_e,
        ...price_reviewed
      }, i)
    }

    function P(lineToolManager_e, price_reviewed, i) {
      lineToolManager_e.context.save(), C(lineToolManager_e, price_reviewed), i(), lineToolManager_e.context.restore()
    }
    let x;

    function M(lineToolManager_e, price_reviewed, i) {
      return x || function() {
        const lineToolManager_e = document.createElement("canvas");
        lineToolManager_e.width = 0, lineToolManager_e.height = 0, (0, l.isMac)() && (lineToolManager_e.style.display = "none", document.body.append(lineToolManager_e)), x = (0, o
          .ensureNotNull)(lineToolManager_e.getContext("2d")), x.textBaseline = "alphabetic", x.textAlign = "center"
      }(), price_reviewed && x.font !== price_reviewed && (x.font = price_reviewed), i ? i.getMetrics(x, lineToolManager_e) : (0, r.getMinTextMetrics)(x.measureText(lineToolManager_e))
    }
}
