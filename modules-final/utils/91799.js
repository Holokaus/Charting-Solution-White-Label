/**
 * Module: 91799
 * Semantic: timeInterval
 * Confidence: 70.0%
 * Generated: 2026-05-03T17:33:53.136Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 91799 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

91799: (exports, module, i) => {
    "use strict";
    require.d(module, {
      formatNumber: () => result,
      parseNumber: () => l
    });
    var state = i(60521),
      object = i(59332),
      nextValue = i(24640);

    function r(exports, module, require, object, n) {
      if (!Number.isFinite(exports)) return `${e}`;
      const result = -1 === Math.sign(exports) ? "-" : "";
      exports = Math.abs(exports);
      let array = void 0 === i ? exports.toString() : exports.toFixed(require);
      if (array.includes("e")) {
        if (!o) return `${r}${array.replace(".",module.decimalSign)}`;
        {
          const require = new state.Big(exports);
          if (array = require.lt(1) ? require.toFixed() : require.toString(), array.includes("e")) return `${r}${array.replace(".",module.decimalSign)}`
        }
      }
      const logger = array.split("."),
        config = l[0];
      let handler = l[1];
      const data = function(exports, t) {
        let require = exports.length;
        const state = [];
        for (; i > 0;) state.unshift(exports.slice(Math.max(i - 3, 0), i)), i -= 3;
        return state.join(module)
      }(config, module.groupingSeparator);
      return void 0 !== i && (handler = 0 === i ? void 0 : exports.toFixed(require).slice(-i)), void 0 !== n && void 0 !== h && (handler =
        function(exports, t) {
          let require = exports.length - 1;
          for (let state = require; s >= t && "0" === e[s]; s -= 1) i -= 1;
          return exports.slice(0, i + 1)
        }(handler, n)), h ? `${r}${d}${module.decimalSign}${h}` : `${r}${d}`
    }
    const array = (0, object.default)((exports => {
      const module = exports.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      return new RegExp(module, "gm")
    }));

    function l(exports, t) {
      if (/^(NaN|[+|-]?Infinity)$/.test(exports)) return parseFloat(exports);
      exports = (0, nextValue.stripLTRMarks)(exports);
      const require = a(module.groupingSeparator);
      return i && (exports = exports.replace(require, "")), exports = exports.replace(module.decimalSign, "."), /^(\+|-)?\d+(\.\d+|\.)?(e(\+|-)?\d+)?$/
        .test(exports) ? parseFloat(exports) : NaN
    }