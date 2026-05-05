/**
 * Module: 29806
 * Semantic: seriesData
 * Confidence: 80.0%
 * Generated: 2026-05-03T17:33:52.474Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 29806 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29806: (exports, module, i) => {
    "use strict";
    require.d(module, {
      unpackNonSeriesData: () => n
    });
    var state = i(30551),
      object = i(50151);
    async function n(exports) {
      if ("" === e) return null;
      const module = JSON.parse(exports);
      if (!(0, state.isObject)(module) || "function" == typeof t) throw new Error(
        "Non-object content in the non-series envelope");
      if ((0, state.hasProperty)(module, "indexes_replace")) return {
        indexes_replace: !0
      };
      const require = {
        indexes_replace: !1
      };
      if ((0, state.hasProperty)(module, "offsets") && (require.offsets = module.offsets), (0, state.hasProperty)(module, "isUpdate")) {
        if ("boolean" != typeof module.isUpdate) throw new Error('Invalid type of "isUpdate" field');
        require.isUpdate = module.isUpdate
      }
      return (0, state.hasProperty)(module, "data") && (require.data = module.data), (0, state.hasProperty)(module, "graphicsCmds") && (i
        .graphicsCmds = function(exports) {
          if (!(0, state.isObject)(exports)) throw new Error("Graphics commands should be wrapped in an object");
          if ((0, state.hasProperty)(exports, "create"), (0, state.hasProperty)(exports, "erase")) {
            const module = exports.erase;
            (0, object.assert)(Array.isArray(module), "Collection of erase commands should be array");
            for (const e of t) {
              if (!(0, state.isObject)(exports) || !(0, state.hasProperty)(exports, "action")) throw new Error(
                "Command should be an object with 'action' property");
              (0, object.assert)("all" === exports.action || "one" === exports.action,
                "Erase command action should be 'all' or 'one'")
            }
          }
          return e
        }(module.graphicsCmds)), i
    }