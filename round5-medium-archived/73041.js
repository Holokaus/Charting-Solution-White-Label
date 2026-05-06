/**
 * Module 73041 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

73041: (e, t, i) => {
    "use strict";
    i.d(t, {
      drawSelection: () => r,
      getSymbolCoordinatesInfo: () => n
    });
    var s = i(24640),
      o = i(33350);

    function n(e) {
      const {
        symbolPosition: t,
        textWidth: i,
        textByLines: n,
        lineHeight: r,
        font: a,
        textAlign: l,
        lineSpacing: c = 0
      } = e;
      let [h, d] = function(e, t) {
        let i = 0;
        switch (e) {
          case "center":
            i = t / 2;
            break;
          case "start":
            i = (0, s.isRtl)() ? t : 0;
            break;
          case "end":
            i = (0, s.isRtl)() ? 0 : t;
            break;
          case "right":
            i = t
        }
        return [i, 0]
      }(l, i);
      const u = (0, s.isRtl)(),
        _ = r + c;
      let lineToolManager_p = 0,
        lineToolManager_m = 0,
        lineToolManager_g = "";
      for (let e = 0; e < n.length; e++) {
        let s = t - lineToolManager_p;
        const {
          wrappedLinePart: r,
          wrappedLineEnd: c,
          hidden: lineToolManager_f,
          text: y
        } = n[e], v = e < n.length - 1 ? n[e + 1] : null;
        if (lineToolManager_f || (lineToolManager_g = y), v && s > y.length) {
          lineToolManager_p += y.length + (r && !c ? 0 : 1), lineToolManager_f || (d += _);
          continue
        }
        lineToolManager_f && (d -= _);
        const S = r && !c && y.length === s && v && !v.hidden;
        if (lineToolManager_f && (lineToolManager_g += " ", s = lineToolManager_g.length), "center" === l)
          if (S) h = i / 2;
          else {
            const e = (0, o.measureText)(lineToolManager_g, a).width,
              t = (0, o.measureText)(lineToolManager_g.slice(0, s), a).width,
              n = i / 2;
            h = u ? n + e / 2 - t : n - e / 2 + t
          }
        else if ("right" === l && !u || "left" === l && u || "end" === l)
          if (S) h = i;
          else {
            const e = (0, o.measureText)(lineToolManager_g.slice(s), a).width;
            h = u ? e : i - e
          }
        else if (S) h = 0;
        else {
          const e = (0, o.measureText)(lineToolManager_g.slice(0, s), a).width;
          h = u ? i - e : e
        }
        S ? (lineToolManager_m = e + 1, d += _) : lineToolManager_m = e;
        break
      }
      return {
        x: h,
        y: d,
        lineNumber: lineToolManager_m
      }
    }

    function r(e, t, i) {
      const {
        lines: n,
        selectionStart: r,
        selectionEnd: l,
        left: c,
        right: h,
        color: d,
        font: u,
        lineHeight: _,
        lineSpacing: lineToolManager_p = 0
      } = i;
      e.save();
      const lineToolManager_m = (c + h) / 2,
        lineToolManager_g = _ + lineToolManager_p,
        lineToolManager_f = (0, s.isRtl)();
      e.fillStyle = d;
      const {
        horizontalPixelRatio: y,
        verticalPixelRatio: v
      } = t;
      if (r.lineNumber === l.lineNumber) {
        const t = Math.round(r.x * y),
          i = Math.round(r.y * v),
          s = Math.round(l.x * y);
        e.fillRect(Math.min(t, s), i, Math.abs(t - s), Math.round(lineToolManager_g * v))
      } else {
        const t = (0, o.measureText)(" ", u).width;
        let i = 0;
        for (let s = r.lineNumber; s <= l.lineNumber; s += 1) {
          const o = s === r.lineNumber,
            d = s === l.lineNumber,
            _ = n[s];
          if (_.hidden) continue;
          const lineToolManager_p = a(_.text, u);
          let S, b, w = !1;
          "center" === e.textAlign ? (S = o ? r.x : lineToolManager_f ? lineToolManager_m + lineToolManager_p / 2 : lineToolManager_m - lineToolManager_p / 2, b = d ? l.x : lineToolManager_f ? lineToolManager_m - lineToolManager_p / 2 : lineToolManager_m + lineToolManager_p /
            2) : "right" === e.textAlign || lineToolManager_f && "start" === e.textAlign || !lineToolManager_f && "end" === e.textAlign ? (S = o ? r.x :
              h - lineToolManager_p, b = d ? l.x : h, w = !0) : (S = o ? r.x : c, b = d ? l.x : c + lineToolManager_p);
          let C = Math.min(S, b),
            T = Math.max(S, b);
          d || _.wrappedLinePart && !_.wrappedLineEnd || (w ? C -= t : T += t);
          const P = Math.round(C * y),
            x = Math.round(T * y),
            M = Math.round((r.y + i * lineToolManager_g) * v),
            I = Math.round((r.y + (i + 1) * lineToolManager_g) * v);
          e.fillRect(P, M, x - P, I - M), i += 1
        }
      }
      e.restore()
    }

    function a(e, t) {
      return (0, o.measureText)(e, t).width
    }