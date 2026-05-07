/**
 * Module 33350 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

33350: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      addExclusionArea: () => T,
      addExclusionAreaByScope: () => C,
      calcTextHorizontalShift: () => lineToolManager_b,
      clearRect: () => lineToolManager_p,
      createBoundCanvas: () => lineToolManager_v,
      createDisconnectedCanvas: () => lineToolManager_g,
      createDisconnectedCanvasByRenderingInfo: () => lineToolManager_f,
      disableSelection: () => lineToolManager_w,
      drawScaled: () => lineToolManager_m,
      drawWithExclusionAreaByScope: () => P,
      fillRect: () => _,
      getBindingRenderingInfo: () => lineToolManager_h,
      getContext2D: () => lineToolManager_d,
      getPrescaledContext2D: () => lineToolManager_u,
      measureText: () => M,
      tryApplySuggestedCanvasBitmapSize: () => S
    });
    var lineToolManager_s = lineToolManager_i(27714),
      lineToolManager_o = lineToolManager_i(50151),
      lineToolManager_n = lineToolManager_i(59239),
      lineToolManager_r = lineToolManager_i(57658),
      lineToolManager_a = lineToolManager_i(24640),
      lineToolManager_l = lineToolManager_i(49483);

    function lineToolManager_c(lineToolManager_e) {
      return {
        horizontalPixelRatio: Math.max(1, lineToolManager_e.bitmapSize.width / lineToolManager_e.canvasElementClientSize.width),
        verticalPixelRatio: Math.max(1, lineToolManager_e.bitmapSize.height / lineToolManager_e.canvasElementClientSize.height)
      }
    }

    function lineToolManager_h(lineToolManager_e) {
      return {
        ...lineToolManager_c(lineToolManager_e),
        bitmapSize: lineToolManager_e.bitmapSize,
        mediaSize: lineToolManager_e.canvasElementClientSize
      }
    }

    function lineToolManager_d(lineToolManager_e) {
      const lineToolManager_t = (0, lineToolManager_o.ensureNotNull)(lineToolManager_e.getContext("2d"));
      return lineToolManager_t.setTransform(1, 0, 0, 1, 0, 0), lineToolManager_t
    }

    function lineToolManager_u(lineToolManager_e) {
      const lineToolManager_t = (0, lineToolManager_o.ensureNotNull)(lineToolManager_e.getContext("2d")),
        lineToolManager_i = (0, lineToolManager_n.getCanvasDevicePixelRatio)(lineToolManager_e);
      return lineToolManager_t.setTransform(lineToolManager_i, 0, 0, lineToolManager_i, 0, 0), lineToolManager_t
    }

    function _(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o, lineToolManager_n) {
      lineToolManager_e.save(), lineToolManager_e.fillStyle = lineToolManager_n, lineToolManager_e.fillRect(lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o), lineToolManager_e.restore()
    }

    function lineToolManager_p(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o, lineToolManager_n) {
      lineToolManager_e.save(), lineToolManager_e.globalCompositeOperation = "copy", lineToolManager_e.fillStyle = lineToolManager_n, lineToolManager_e.fillRect(lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o), lineToolManager_e.restore()
    }

    function lineToolManager_m(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
      lineToolManager_e.save(), lineToolManager_e.scale(lineToolManager_t, lineToolManager_i), lineToolManager_s(), lineToolManager_e.restore()
    }

    function lineToolManager_g(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
      const lineToolManager_s = lineToolManager_y(lineToolManager_e);
      return void 0 === lineToolManager_i && (lineToolManager_i = (0, lineToolManager_n.getCanvasDevicePixelRatio)(lineToolManager_s)), lineToolManager_s.width = lineToolManager_t.width * lineToolManager_i, lineToolManager_s.height = lineToolManager_t.height * lineToolManager_i,
        lineToolManager_s
    }

    function lineToolManager_f(lineToolManager_e, lineToolManager_t) {
      const {
        bitmapSize: lineToolManager_i,
        mediaSize: lineToolManager_s
      } = lineToolManager_t, lineToolManager_o = lineToolManager_y(lineToolManager_e);
      return lineToolManager_o.style.width = `${lineToolManager_s.width}px`, lineToolManager_o.style.height = `${lineToolManager_s.height}px`, lineToolManager_o.width = lineToolManager_i.width, lineToolManager_o.height = lineToolManager_i.height, lineToolManager_o
    }

    function lineToolManager_y(lineToolManager_e) {
      const lineToolManager_t = lineToolManager_e.createElement("canvas");
      return lineToolManager_w(lineToolManager_t), lineToolManager_t
    }

    function lineToolManager_v(lineToolManager_e, lineToolManager_t) {
      const lineToolManager_i = lineToolManager_y((0, lineToolManager_o.ensureNotNull)(lineToolManager_e.ownerDocument));
      lineToolManager_e.appendChild(lineToolManager_i);
      const lineToolManager_n = (0, lineToolManager_s.bindCanvasElementBitmapSizeTo)(lineToolManager_i, {
        type: "device-pixel-content-box",
        transform: (lineToolManager_e, lineToolManager_t) => 0 === lineToolManager_e.width || 0 === lineToolManager_e.height ? lineToolManager_e : {
          width: Math.max(lineToolManager_e.width, lineToolManager_t.width),
          height: Math.max(lineToolManager_e.height, lineToolManager_t.height)
        }
      });
      return lineToolManager_n.resizeCanvasElement(lineToolManager_t), lineToolManager_n
    }

    function S(lineToolManager_e) {
      const lineToolManager_t = lineToolManager_e.suggestedBitmapSize;
      return null !== lineToolManager_t && lineToolManager_t.width > 0 && lineToolManager_t.height > 0 && (lineToolManager_e.applySuggestedBitmapSize(), !0)
    }

    function lineToolManager_b(lineToolManager_e, lineToolManager_t) {
      return "center" === lineToolManager_e.textAlign ? 0 : (0,
          lineToolManager_a.isRtl)() ? "start" === lineToolManager_e.textAlign || "right" === lineToolManager_e.textAlign ? lineToolManager_t : 0 : "start" === lineToolManager_e.textAlign ||
        "left" === lineToolManager_e.textAlign ? 0 : lineToolManager_t
    }

    function lineToolManager_w(lineToolManager_e) {
      lineToolManager_e.style.userSelect = "none", lineToolManager_e.style.webkitUserSelect = "none", lineToolManager_e.style.msUserSelect = "none", lineToolManager_e.style
        .MozUserSelect = "none", lineToolManager_e.style.webkitTapHighlightColor = "transparent"
    }

    function C(lineToolManager_e, lineToolManager_t) {
      const {
        context: lineToolManager_i,
        horizontalPixelRatio: lineToolManager_s,
        verticalPixelRatio: lineToolManager_o,
        bitmapSize: lineToolManager_n
      } = lineToolManager_e;
      lineToolManager_i.beginPath(), lineToolManager_i.rect(0, 0, lineToolManager_n.width, lineToolManager_n.height);
      for (let lineToolManager_e = 0; lineToolManager_e < lineToolManager_t.length; lineToolManager_e++) {
        let {
          lineToolManager_x: lineToolManager_n,
          lineToolManager_y: lineToolManager_r
        } = lineToolManager_t[lineToolManager_e];
        lineToolManager_n *= lineToolManager_s, lineToolManager_r *= lineToolManager_o, 0 !== lineToolManager_e ? lineToolManager_i.lineTo(lineToolManager_n, lineToolManager_r) : lineToolManager_i.moveTo(lineToolManager_n, lineToolManager_r)
      }
      lineToolManager_i.closePath(), lineToolManager_i.clip("evenodd")
    }

    function T(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
      C({
        context: lineToolManager_e,
        ...lineToolManager_t
      }, lineToolManager_i)
    }

    function P(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
      lineToolManager_e.context.save(), C(lineToolManager_e, lineToolManager_t), lineToolManager_i(), lineToolManager_e.context.restore()
    }
    let lineToolManager_x;

    function M(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
      return lineToolManager_x || function() {
        const lineToolManager_e = document.createElement("canvas");
        lineToolManager_e.width = 0, lineToolManager_e.height = 0, (0, lineToolManager_l.isMac)() && (lineToolManager_e.style.display = "none", document.body.append(lineToolManager_e)), lineToolManager_x = (0, lineToolManager_o
          .ensureNotNull)(lineToolManager_e.getContext("2d")), lineToolManager_x.textBaseline = "alphabetic", lineToolManager_x.textAlign = "center"
      }(), lineToolManager_t && lineToolManager_x.font !== lineToolManager_t && (lineToolManager_x.font = lineToolManager_t), lineToolManager_i ? lineToolManager_i.getMetrics(lineToolManager_x, lineToolManager_e) : (0, lineToolManager_r.getMinTextMetrics)(lineToolManager_x.measureText(lineToolManager_e))
    }