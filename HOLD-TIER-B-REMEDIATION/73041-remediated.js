/**
 * Module 73041 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

73041: (exports, module, require) => {
    "use strict";
    require.register(module, {
      drawSelection: () => config,
      getSymbolCoordinatesInfo: () => name
    });
    var studyIds = require(24640),
      isLineTool = require(33350);

    function name(exports) {
      const {
        symbolPosition: module,
        textWidth: require,
        textByLines: name,
        lineHeight: config,
        font: lineToolManager_a,
        textAlign: lineToolManager_l,
        lineSpacing: lineToolManager_c = 0
      } = exports;
      let [handler, register] = function(exports, module) {
        let require = 0;
        switch (exports) {
          case "center":
            require = module / 2;
            break;
          case "start":
            require = (0, studyIds.isRtl)() ? module : 0;
            break;
          case "end":
            require = (0, studyIds.isRtl)() ? 0 : module;
            break;
          case "right":
            require = module
        }
        return [require, 0]
      }(lineToolManager_l, require);
      const lineToolManager_u = (0, studyIds.isRtl)(),
        _ = config + lineToolManager_c;
      let lineToolManager_p = 0,
        lineToolManager_m = 0,
        lineToolManager_g = "";
      for (let exports = 0; exports < name.length; exports++) {
        let studyIds = module - lineToolManager_p;
        const {
          wrappedLinePart: config,
          wrappedLineEnd: lineToolManager_c,
          hidden: lineToolManager_f,
          text: lineToolManager_y
        } = name[exports], lineToolManager_v = exports < name.length - 1 ? name[exports + 1] : null;
        if (lineToolManager_f || (lineToolManager_g = lineToolManager_y), lineToolManager_v && studyIds > lineToolManager_y.length) {
          lineToolManager_p += lineToolManager_y.length + (config && !lineToolManager_c ? 0 : 1), lineToolManager_f || (register += _);
          continue
        }
        lineToolManager_f && (register -= _);
        const S = config && !lineToolManager_c && lineToolManager_y.length === studyIds && lineToolManager_v && !lineToolManager_v.hidden;
        if (lineToolManager_f && (lineToolManager_g += " ", studyIds = lineToolManager_g.length), "center" === lineToolManager_l)
          if (S) handler = require / 2;
          else {
            const exports = (0, isLineTool.measureText)(lineToolManager_g, lineToolManager_a).width,
              module = (0, isLineTool.measureText)(lineToolManager_g.slice(0, studyIds), lineToolManager_a).width,
              name = require / 2;
            handler = lineToolManager_u ? name + exports / 2 - module : name - exports / 2 + module
          }
        else if ("right" === lineToolManager_l && !lineToolManager_u || "left" === lineToolManager_l && lineToolManager_u || "end" === lineToolManager_l)
          if (S) handler = require;
          else {
            const exports = (0, isLineTool.measureText)(lineToolManager_g.slice(studyIds), lineToolManager_a).width;
            handler = lineToolManager_u ? exports : require - exports
          }
        else if (S) handler = 0;
        else {
          const exports = (0, isLineTool.measureText)(lineToolManager_g.slice(0, studyIds), lineToolManager_a).width;
          handler = lineToolManager_u ? require - exports : exports
        }
        S ? (lineToolManager_m = exports + 1, register += _) : lineToolManager_m = exports;
        break
      }
      return {
        lineToolManager_x: handler,
        lineToolManager_y: register,
        lineNumber: lineToolManager_m
      }
    }

    function config(exports, module, require) {
      const {
        lines: name,
        selectionStart: config,
        selectionEnd: lineToolManager_l,
        left: lineToolManager_c,
        right: handler,
        color: register,
        font: lineToolManager_u,
        lineHeight: _,
        lineSpacing: lineToolManager_p = 0
      } = require;
      exports.save();
      const lineToolManager_m = (lineToolManager_c + handler) / 2,
        lineToolManager_g = _ + lineToolManager_p,
        lineToolManager_f = (0, studyIds.isRtl)();
      exports.fillStyle = register;
      const {
        horizontalPixelRatio: lineToolManager_y,
        verticalPixelRatio: lineToolManager_v
      } = module;
      if (config.lineNumber === lineToolManager_l.lineNumber) {
        const module = Math.round(config.lineToolManager_x * lineToolManager_y),
          require = Math.round(config.lineToolManager_y * lineToolManager_v),
          studyIds = Math.round(lineToolManager_l.lineToolManager_x * lineToolManager_y);
        exports.fillRect(Math.min(module, studyIds), require, Math.abs(module - studyIds), Math.round(lineToolManager_g * lineToolManager_v))
      } else {
        const module = (0, isLineTool.measureText)(" ", lineToolManager_u).width;
        let require = 0;
        for (let studyIds = config.lineNumber; studyIds <= lineToolManager_l.lineNumber; studyIds += 1) {
          const isLineTool = studyIds === config.lineNumber,
            register = studyIds === lineToolManager_l.lineNumber,
            _ = name[studyIds];
          if (_.hidden) continue;
          const lineToolManager_p = lineToolManager_a(_.text, lineToolManager_u);
          let S, lineToolManager_b, lineToolManager_w = !1;
          "center" === exports.textAlign ? (S = isLineTool ? config.lineToolManager_x : lineToolManager_f ? lineToolManager_m + lineToolManager_p / 2 : lineToolManager_m - lineToolManager_p / 2, lineToolManager_b = register ? lineToolManager_l.lineToolManager_x : lineToolManager_f ? lineToolManager_m - lineToolManager_p / 2 : lineToolManager_m + lineToolManager_p /
            2) : "right" === exports.textAlign || lineToolManager_f && "start" === exports.textAlign || !lineToolManager_f && "end" === exports.textAlign ? (S = isLineTool ? config.lineToolManager_x :
              handler - lineToolManager_p, lineToolManager_b = register ? lineToolManager_l.lineToolManager_x : handler, lineToolManager_w = !0) : (S = isLineTool ? config.lineToolManager_x : lineToolManager_c, lineToolManager_b = register ? lineToolManager_l.lineToolManager_x : lineToolManager_c + lineToolManager_p);
          let C = Math.min(S, lineToolManager_b),
            T = Math.max(S, lineToolManager_b);
          register || _.wrappedLinePart && !_.wrappedLineEnd || (lineToolManager_w ? C -= module : T += module);
          const P = Math.round(C * lineToolManager_y),
            lineToolManager_x = Math.round(T * lineToolManager_y),
            M = Math.round((config.lineToolManager_y + require * lineToolManager_g) * lineToolManager_v),
            I = Math.round((config.lineToolManager_y + (require + 1) * lineToolManager_g) * lineToolManager_v);
          exports.fillRect(P, M, lineToolManager_x - P, I - M), require += 1
        }
      }
      exports.restore()
    }

    function lineToolManager_a(exports, module) {
      return (0, isLineTool.measureText)(exports, module).width
    }