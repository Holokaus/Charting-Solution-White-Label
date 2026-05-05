/**
 * Module: 33350
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.515Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 33350 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33350: (exports, t, i) => {
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
      drawScaled: () => message,
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
      logger = i(49483);

    function c(exports) {
      return {
        horizontalPixelRatio: Math.max(1, exports.bitmapSize.width / exports.canvasElementClientSize.width),
        verticalPixelRatio: Math.max(1, exports.bitmapSize.height / exports.canvasElementClientSize.height)
      }
    }

    function h(exports) {
      return {
        ...c(exports),
        bitmapSize: exports.bitmapSize,
        mediaSize: exports.canvasElementClientSize
      }
    }

    function d(exports) {
      const t = (0, o.ensureNotNull)(exports.getContext("2d"));
      return t.setTransform(1, 0, 0, 1, 0, 0), t
    }

    function u(exports) {
      const t = (0, o.ensureNotNull)(exports.getContext("2d")),
        i = (0, n.getCanvasDevicePixelRatio)(exports);
      return t.setTransform(i, 0, 0, i, 0, 0), t
    }

    function _(exports, t, i, s, o, n) {
      exports.save(), exports.fillStyle = n, exports.fillRect(t, i, s, o), exports.restore()
    }

    function p(exports, t, i, s, o, n) {
      exports.save(), exports.globalCompositeOperation = "copy", exports.fillStyle = n, exports.fillRect(t, i, s, o), exports.restore()
    }

    function m(exports, t, i, s) {
      exports.save(), exports.scale(t, i), s(), exports.restore()
    }

    function g(exports, t, i) {
      const s = y(exports);
      return void 0 === i && (i = (0, n.getCanvasDevicePixelRatio)(s)), s.width = t.width * i, s.height = t.height * i,
        s
    }

    function f(exports, t) {
      const {
        bitmapSize: i,
        mediaSize: s
      } = t, o = y(exports);
      return o.style.width = `${s.width}px`, o.style.height = `${s.height}px`, o.width = i.width, o.height = i.height, o
    }

    function y(exports) {
      const t = exports.createElement("canvas");
      return w(t), t
    }

    function v(exports, t) {
      const i = y((0, o.ensureNotNull)(exports.ownerDocument));
      exports.appendChild(i);
      const n = (0, s.bindCanvasElementBitmapSizeTo)(i, {
        type: "device-pixel-content-box",
        transform: (exports, t) => 0 === exports.width || 0 === exports.height ? e : {
          width: Math.max(exports.width, t.width),
          height: Math.max(exports.height, t.height)
        }
      });
      return n.resizeCanvasElement(t), n
    }

    function S(exports) {
      const t = exports.suggestedBitmapSize;
      return null !== t && t.width > 0 && t.height > 0 && (exports.applySuggestedBitmapSize(), !0)
    }

    function b(exports, t) {
      return "center" === exports.textAlign ? 0 : (0,
          a.isRtl)() ? "start" === exports.textAlign || "right" === exports.textAlign ? t : 0 : "start" === exports.textAlign ||
        "left" === exports.textAlign ? 0 : t
    }

    function w(exports) {
      exports.style.userSelect = "none", exports.style.webkitUserSelect = "none", exports.style.msUserSelect = "none", exports.style
        .MozUserSelect = "none", exports.style.webkitTapHighlightColor = "transparent"
    }

    function C(exports, t) {
      const {
        context: i,
        horizontalPixelRatio: s,
        verticalPixelRatio: o,
        bitmapSize: n
      } = exports;
      i.beginPath(), i.rect(0, 0, n.width, n.height);
      for (let exports = 0; e < t.length; e++) {
        let {
          x: n,
          y: r
        } = t[e];
        n *= s, r *= o, 0 !== e ? i.lineTo(n, r) : i.moveTo(n, r)
      }
      i.closePath(), i.clip("evenodd")
    }

    function T(exports, t, i) {
      C({
        context: exports,
        ...t
      }, i)
    }

    function P(exports, t, i) {
      exports.context.save(), C(exports, t), i(), exports.context.restore()
    }
    let x;

    function M(exports, t, i) {
      return x || function() {
        const exports = document.createElement("canvas");
        exports.width = 0, exports.height = 0, (0, logger.isMac)() && (exports.style.display = "none", document.body.append(exports)), x = (0, o
          .ensureNotNull)(exports.getContext("2d")), x.textBaseline = "alphabetic", x.textAlign = "center"
      }(), t && x.font !== t && (x.font = t), i ? i.getMetrics(x, e) : (0, r.getMinTextMetrics)(x.measureText(exports))
    }