/**
 * Module 33350 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
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
      drawScaled: () => m,
      drawWithExclusionAreaByScope: () => P,
      fillRect: () => _,
      getBindingRenderingInfo: () => h,
      getContext2D: () => d,
      getPrescaledContext2D: () => u,
      measureText: () => M,
      tryApplySuggestedCanvasBitmapSize: () => S
    });
    var studyIds = i(27714),
      o = i(50151),
      name = i(59239),
      r = i(57658),
      a = i(24640),
      l = i(49483);

    function context(exports) {
      return {
        horizontalPixelRatio: Math.max(1, exports.bitmapSize.width / exports.canvasElementClientSize.width),
        verticalPixelRatio: Math.max(1, exports.bitmapSize.height / exports.canvasElementClientSize.height)
      }
    }

    function handler(exports) {
      return {
        ...c(exports),
        bitmapSize: exports.bitmapSize,
        mediaSize: exports.canvasElementClientSize
      }
    }

    function data(exports) {
      const t = (0, o.ensureNotNull)(exports.getContext("2d"));
      return t.setTransform(1, 0, 0, 1, 0, 0), t
    }

    function utils(exports) {
      const t = (0, o.ensureNotNull)(exports.getContext("2d")),
        i = (0, name.getCanvasDevicePixelRatio)(exports);
      return t.setTransform(i, 0, 0, i, 0, 0), t
    }

    function _(exports, t, i, studyIds, o, name) {
      exports.save(), exports.fillStyle = name, exports.fillRect(t, i, studyIds, o), exports.restore()
    }

    function params(exports, t, i, studyIds, o, name) {
      exports.save(), exports.globalCompositeOperation = "copy", exports.fillStyle = name, exports.fillRect(t, i, studyIds, o), exports.restore()
    }

    function m(exports, t, i, studyIds) {
      exports.save(), exports.scale(t, i), studyIds(), exports.restore()
    }

    function g(exports, t, i) {
      const studyIds = y(exports);
      return void 0 === i && (i = (0, name.getCanvasDevicePixelRatio)(studyIds)), studyIds.width = t.width * i, studyIds.height = t.height * i,
        studyIds
    }

    function func(exports, t) {
      const {
        bitmapSize: i,
        mediaSize: studyIds
      } = t, o = y(exports);
      return o.style.width = `${studyIds.width}px`, o.style.height = `${studyIds.height}px`, o.width = i.width, o.height = i.height, o
    }

    function y(exports) {
      const t = exports.createElement("canvas");
      return w(t), t
    }

    function v(exports, t) {
      const i = y((0, o.ensureNotNull)(exports.ownerDocument));
      exports.appendChild(i);
      const name = (0, studyIds.bindCanvasElementBitmapSizeTo)(i, {
        type: "device-pixel-content-box",
        transform: (exports, t) => 0 === exports.width || 0 === exports.height ? exports : {
          width: Math.max(exports.width, t.width),
          height: Math.max(exports.height, t.height)
        }
      });
      return name.resizeCanvasElement(t), name
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
        horizontalPixelRatio: studyIds,
        verticalPixelRatio: o,
        bitmapSize: name
      } = exports;
      i.beginPath(), i.rect(0, 0, name.width, name.height);
      for (let exports = 0; exports < t.length; exports++) {
        let {
          x: name,
          y: r
        } = t[exports];
        name *= studyIds, r *= o, 0 !== exports ? i.lineTo(name, r) : i.moveTo(name, r)
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
        exports.width = 0, exports.height = 0, (0, l.isMac)() && (exports.style.display = "none", document.body.append(exports)), x = (0, o
          .ensureNotNull)(exports.getContext("2d")), x.textBaseline = "alphabetic", x.textAlign = "center"
      }(), t && x.font !== t && (x.font = t), i ? i.getMetrics(x, exports) : (0, r.getMinTextMetrics)(x.measureText(exports))
    }