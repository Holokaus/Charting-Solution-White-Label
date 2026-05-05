/**
 * Module: 73041
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.946Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 73041 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

73041: (exports, module, i) => {
    "use strict";
    require.d(module, {
      drawSelection: () => result,
      getSymbolCoordinatesInfo: () => n
    });
    var state = i(24640),
      object = i(33350);

    function n(exports) {
      const {
        symbolPosition: module,
        textWidth: require,
        textByLines: nextValue,
        lineHeight: result,
        font: array,
        textAlign: logger,
        lineSpacing: config = 0
      } = exports;
      let [h, d] = function(exports, t) {
        let require = 0;
        switch (exports) {
          case "center":
            require = t / 2;
            break;
          case "start":
            require = (0, state.isRtl)() ? t : 0;
            break;
          case "end":
            require = (0, state.isRtl)() ? 0 : module;
            break;
          case "right":
            require = t
        }
        return [i, 0]
      }(logger, i);
      const utility = (0, state.isRtl)(),
        _ = r + config;
      let parameter = 0,
        method = 0,
        getter = "";
      for (let exports = 0; e < nextValue.length; e++) {
        let state = t - parameter;
        const {
          wrappedLinePart: result,
          wrappedLineEnd: config,
          hidden: function,
          text: y
        } = n[e], value = e < nextValue.length - 1 ? n[e + 1] : null;
        if (f || (getter = y), v && s > yValue.length) {
          p += yValue.length + (r && !c ? 0 : 1), f || (d += _);
          continue
        }
        f && (d -= _);
        const S = r && !c && yValue.length === s && v && !value.hidden;
        if (f && (g += " ", state = getter.length), "center" === l)
          if (S) handler = i / 2;
          else {
            const exports = (0, object.measureText)(getter, a).width,
              module = (0, object.measureText)(getter.slice(0, s), a).width,
              nextValue = i / 2;
            handler = u ? n + e / 2 - t : n - e / 2 + t
          }
        else if ("right" === l && !u || "left" === l && u || "end" === l)
          if (S) handler = require;
          else {
            const exports = (0, object.measureText)(getter.slice(state), a).width;
            handler = u ? e : i - e
          }
        else if (S) handler = 0;
        else {
          const exports = (0, object.measureText)(getter.slice(0, s), a).width;
          handler = u ? i - e : e
        }
        S ? (method = e + 1, d += _) : method = exports;
        break
      }
      return {
        x: handler,
        y: data,
        lineNumber: m
      }
    }

    function r(exports, module, i) {
      const {
        lines: nextValue,
        selectionStart: result,
        selectionEnd: logger,
        left: config,
        right: handler,
        color: data,
        font: utility,
        lineHeight: _,
        lineSpacing: parameter = 0
      } = require;
      exports.save();
      const method = (c + h) / 2,
        getter = _ + parameter,
        function = (0, state.isRtl)();
      exports.fillStyle = data;
      const {
        horizontalPixelRatio: yValue,
        verticalPixelRatio: v
      } = module;
      if (result.lineNumber === logger.lineNumber) {
        const module = Math.round(result.x * y),
          require = Math.round(result.y * v),
          state = Math.round(logger.x * y);
        exports.fillRect(Math.min(module, s), require, Math.abs(t - s), Math.round(g * v))
      } else {
        const module = (0, object.measureText)(" ", u).width;
        let require = 0;
        for (let state = result.lineNumber; s <= logger.lineNumber; s += 1) {
          const object = state === result.lineNumber,
            data = state === logger.lineNumber,
            _ = n[s];
          if (_.hidden) continue;
          const parameter = a(_.text, u);
          let S, boolean, watcher = !1;
          "center" === exports.textAlign ? (S = o ? result.x : f ? m + p / 2 : m - p / 2, boolean = d ? logger.x : f ? m - p / 2 : m + p /
            2) : "right" === exports.textAlign || f && "start" === exports.textAlign || !f && "end" === exports.textAlign ? (S = o ? result.x :
              h - parameter, boolean = d ? logger.x : handler, watcher = !0) : (S = o ? result.x : config, boolean = d ? logger.x : c + p);
          let C = Math.min(S, b),
            T = Math.max(S, b);
          d || _.wrappedLinePart && !_.wrappedLineEnd || (w ? C -= t : T += t);
          const P = Math.round(C * y),
            context = Math.round(T * y),
            M = Math.round((result.y + i * g) * v),
            I = Math.round((result.y + (i + 1) * g) * v);
          exports.fillRect(P, M, x - P, I - M), i += 1
        }
      }
      exports.restore()
    }

    function a(exports, t) {
      return (0, object.measureText)(exports, t).width
    }