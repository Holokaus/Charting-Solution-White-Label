/**
 * Module 29806 - Auto-beautified from TradingView webpack bundle
 *
 * @module 29806
 * @date 2026-04-23
 * @size 1190 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 30551, 50151
 *
 * Exports:
 *   - unpackNonSeriesData (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  unpackNonSeriesData: () => n
});
var s = i(30551),
  o = i(50151);
async function n(e) {
    if ("" === e) return null;
    const t = JSON.parse(e);
    if (!(0, s.isObject)(t) || "function" == typeof t) throw new Error("Non-object content in the non-series envelope");
    if ((0, s.hasProperty)(t, "indexes_replace")) return {
      indexes_replace: !0
    };
    const i = {
      indexes_replace: !1
    };
    if ((0, s.hasProperty)(t, "offsets") && (i.offsets = t.offsets), (0, s.hasProperty)(t, "isUpdate")) {
      if ("boolean" != typeof t.isUpdate) throw new Error('Invalid type of "isUpdate" field');
      i.isUpdate = t.isUpdate
    }
    return (0, s.hasProperty)(t, "data") && (i.data = t.data), (0, s.hasProperty)(t, "graphicsCmds") && (i.graphicsCmds = function(e) {
      if (!(0, s.isObject)(e)) throw new Error("Graphics commands should be wrapped in an object");
      if ((0, s.hasProperty)(e, "create"), (0, s.hasProperty)(e, "erase")) {
        const t = e.erase;
        (0, o.assert)(Array.isArray(t), "Collection of erase commands should be array");
        for (const e of t) {
          if (!(0, s.isObject)(e) || !(0, s.hasProperty)(e, "action")) throw new Error("Command should be an object with 'action' property");
          (0, o.assert)("all" === e.action || "one" === e.action, "Erase command action should be 'all' or 'one'")
        }
      }
      return e
    }(t.graphicsCmds)), i
