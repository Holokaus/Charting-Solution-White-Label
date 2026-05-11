/**
 * Module 73041 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

73041: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      drawSelection: () => lineToolManager_r,
      getSymbolCoordinatesInfo: () => lineToolManager_n
    });
    var lineToolManager_s = lineToolManager_i(24640),
      lineToolManager_o = lineToolManager_i(33350);

    function lineToolManager_n(lineToolManager_e) {
      const {
        symbolPosition: lineToolManager_t,
        textWidth: lineToolManager_i,
        textByLines: lineToolManager_n,
        lineHeight: lineToolManager_r,
        font: lineToolManager_a,
        textAlign: lineToolManager_l,
        lineSpacing: lineToolManager_c = 0
      } = lineToolManager_e;
      let [lineToolManager_h, lineToolManager_d] = function(lineToolManager_e, lineToolManager_t) {
        let lineToolManager_i = 0;
        switch (lineToolManager_e) {
          case "center":
            lineToolManager_i = lineToolManager_t / 2;
            break;
          case "start":
            lineToolManager_i = (0, lineToolManager_s.isRtl)() ? lineToolManager_t : 0;
            break;
          case "end":
            lineToolManager_i = (0, lineToolManager_s.isRtl)() ? 0 : lineToolManager_t;
            break;
          case "right":
            lineToolManager_i = lineToolManager_t
        }
        return [lineToolManager_i, 0]
      }(lineToolManager_l, lineToolManager_i);
      const lineToolManager_u = (0, lineToolManager_s.isRtl)(),
        _ = lineToolManager_r + lineToolManager_c;
      let lineToolManager_p = 0,
        lineToolManager_m = 0,
        lineToolManager_g = "";
      for (let lineToolManager_e = 0; lineToolManager_e < lineToolManager_n.length; lineToolManager_e++) {
        let lineToolManager_s = lineToolManager_t - lineToolManager_p;
        const {
          wrappedLinePart: lineToolManager_r,
          wrappedLineEnd: lineToolManager_c,
          hidden: lineToolManager_f,
          text: lineToolManager_y
        } = lineToolManager_n[lineToolManager_e], lineToolManager_v = lineToolManager_e < lineToolManager_n.length - 1 ? lineToolManager_n[lineToolManager_e + 1] : null;
        if (lineToolManager_f || (lineToolManager_g = lineToolManager_y), lineToolManager_v && lineToolManager_s > lineToolManager_y.length) {
          lineToolManager_p += lineToolManager_y.length + (lineToolManager_r && !lineToolManager_c ? 0 : 1), lineToolManager_f || (lineToolManager_d += _);
          continue
        }
        lineToolManager_f && (lineToolManager_d -= _);
        const S = lineToolManager_r && !lineToolManager_c && lineToolManager_y.length === lineToolManager_s && lineToolManager_v && !lineToolManager_v.hidden;
        if (lineToolManager_f && (lineToolManager_g += " ", lineToolManager_s = lineToolManager_g.length), "center" === lineToolManager_l)
          if (S) lineToolManager_h = lineToolManager_i / 2;
          else {
            const lineToolManager_e = (0, lineToolManager_o.measureText)(lineToolManager_g, lineToolManager_a).width,
              lineToolManager_t = (0, lineToolManager_o.measureText)(lineToolManager_g.slice(0, lineToolManager_s), lineToolManager_a).width,
              lineToolManager_n = lineToolManager_i / 2;
            lineToolManager_h = lineToolManager_u ? lineToolManager_n + lineToolManager_e / 2 - lineToolManager_t : lineToolManager_n - lineToolManager_e / 2 + lineToolManager_t
          }
        else if ("right" === lineToolManager_l && !lineToolManager_u || "left" === lineToolManager_l && lineToolManager_u || "end" === lineToolManager_l)
          if (S) lineToolManager_h = lineToolManager_i;
          else {
            const lineToolManager_e = (0, lineToolManager_o.measureText)(lineToolManager_g.slice(lineToolManager_s), lineToolManager_a).width;
            lineToolManager_h = lineToolManager_u ? lineToolManager_e : lineToolManager_i - lineToolManager_e
          }
        else if (S) lineToolManager_h = 0;
        else {
          const lineToolManager_e = (0, lineToolManager_o.measureText)(lineToolManager_g.slice(0, lineToolManager_s), lineToolManager_a).width;
          lineToolManager_h = lineToolManager_u ? lineToolManager_i - lineToolManager_e : lineToolManager_e
        }
        S ? (lineToolManager_m = lineToolManager_e + 1, lineToolManager_d += _) : lineToolManager_m = lineToolManager_e;
        break
      }
      return {
        lineToolManager_x: lineToolManager_h,
        lineToolManager_y: lineToolManager_d,
        lineNumber: lineToolManager_m
      }
    }

    function lineToolManager_r(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
      const {
        lines: lineToolManager_n,
        selectionStart: lineToolManager_r,
        selectionEnd: lineToolManager_l,
        left: lineToolManager_c,
        right: lineToolManager_h,
        color: lineToolManager_d,
        font: lineToolManager_u,
        lineHeight: _,
        lineSpacing: lineToolManager_p = 0
      } = lineToolManager_i;
      lineToolManager_e.save();
      const lineToolManager_m = (lineToolManager_c + lineToolManager_h) / 2,
        lineToolManager_g = _ + lineToolManager_p,
        lineToolManager_f = (0, lineToolManager_s.isRtl)();
      lineToolManager_e.fillStyle = lineToolManager_d;
      const {
        horizontalPixelRatio: lineToolManager_y,
        verticalPixelRatio: lineToolManager_v
      } = lineToolManager_t;
      if (lineToolManager_r.lineNumber === lineToolManager_l.lineNumber) {
        const lineToolManager_t = Math.round(lineToolManager_r.lineToolManager_x * lineToolManager_y),
          lineToolManager_i = Math.round(lineToolManager_r.lineToolManager_y * lineToolManager_v),
          lineToolManager_s = Math.round(lineToolManager_l.lineToolManager_x * lineToolManager_y);
        lineToolManager_e.fillRect(Math.min(lineToolManager_t, lineToolManager_s), lineToolManager_i, Math.abs(lineToolManager_t - lineToolManager_s), Math.round(lineToolManager_g * lineToolManager_v))
      } else {
        const lineToolManager_t = (0, lineToolManager_o.measureText)(" ", lineToolManager_u).width;
        let lineToolManager_i = 0;
        for (let lineToolManager_s = lineToolManager_r.lineNumber; lineToolManager_s <= lineToolManager_l.lineNumber; lineToolManager_s += 1) {
          const lineToolManager_o = lineToolManager_s === lineToolManager_r.lineNumber,
            lineToolManager_d = lineToolManager_s === lineToolManager_l.lineNumber,
            _ = lineToolManager_n[lineToolManager_s];
          if (_.hidden) continue;
          const lineToolManager_p = lineToolManager_a(_.text, lineToolManager_u);
          let S, lineToolManager_b, lineToolManager_w = !1;
          "center" === lineToolManager_e.textAlign ? (S = lineToolManager_o ? lineToolManager_r.lineToolManager_x : lineToolManager_f ? lineToolManager_m + lineToolManager_p / 2 : lineToolManager_m - lineToolManager_p / 2, lineToolManager_b = lineToolManager_d ? lineToolManager_l.lineToolManager_x : lineToolManager_f ? lineToolManager_m - lineToolManager_p / 2 : lineToolManager_m + lineToolManager_p /
            2) : "right" === lineToolManager_e.textAlign || lineToolManager_f && "start" === lineToolManager_e.textAlign || !lineToolManager_f && "end" === lineToolManager_e.textAlign ? (S = lineToolManager_o ? lineToolManager_r.lineToolManager_x :
              lineToolManager_h - lineToolManager_p, lineToolManager_b = lineToolManager_d ? lineToolManager_l.lineToolManager_x : lineToolManager_h, lineToolManager_w = !0) : (S = lineToolManager_o ? lineToolManager_r.lineToolManager_x : lineToolManager_c, lineToolManager_b = lineToolManager_d ? lineToolManager_l.lineToolManager_x : lineToolManager_c + lineToolManager_p);
          let C = Math.min(S, lineToolManager_b),
            T = Math.max(S, lineToolManager_b);
          lineToolManager_d || _.wrappedLinePart && !_.wrappedLineEnd || (lineToolManager_w ? C -= lineToolManager_t : T += lineToolManager_t);
          const P = Math.round(C * lineToolManager_y),
            lineToolManager_x = Math.round(T * lineToolManager_y),
            M = Math.round((lineToolManager_r.lineToolManager_y + lineToolManager_i * lineToolManager_g) * lineToolManager_v),
            I = Math.round((lineToolManager_r.lineToolManager_y + (lineToolManager_i + 1) * lineToolManager_g) * lineToolManager_v);
          lineToolManager_e.fillRect(P, M, lineToolManager_x - P, I - M), lineToolManager_i += 1
        }
      }
      lineToolManager_e.restore()
    }

    function lineToolManager_a(lineToolManager_e, lineToolManager_t) {
      return (0, lineToolManager_o.measureText)(lineToolManager_e, lineToolManager_t).width
    }
}
