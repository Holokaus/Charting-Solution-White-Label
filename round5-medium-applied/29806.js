/**
 * Module 29806 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29806: (series_e, series_t, i) => {
    "use strict";
    i.d(series_t, {
      unpackNonSeriesData: () => series_n
    });
    var series_s = i(30551),
      o = i(50151);
    async function series_n(series_e) {
      if ("" === series_e) return null;
      const series_t = JSON.parse(series_e);
      if (!(0, series_s.isObject)(series_t) || "function" == typeof series_t) throw new Error(
        "Non-object content in the non-series envelope");
      if ((0, series_s.hasProperty)(series_t, "indexes_replace")) return {
        indexes_replace: !0
      };
      const i = {
        indexes_replace: !1
      };
      if ((0, series_s.hasProperty)(series_t, "offsets") && (i.offsets = series_t.offsets), (0, series_s.hasProperty)(series_t, "isUpdate")) {
        if ("boolean" != typeof series_t.isUpdate) throw new Error('Invalid type of "isUpdate" field');
        i.isUpdate = series_t.isUpdate
      }
      return (0, series_s.hasProperty)(series_t, "data") && (i.data = series_t.data), (0, series_s.hasProperty)(series_t, "graphicsCmds") && (i
        .graphicsCmds = function(series_e) {
          if (!(0, series_s.isObject)(series_e)) throw new Error("Graphics commands should be wrapped in an object");
          if ((0, series_s.hasProperty)(series_e, "create"), (0, series_s.hasProperty)(series_e, "erase")) {
            const series_t = series_e.erase;
            (0, o.assert)(Array.isArray(series_t), "Collection of erase commands should be array");
            for (const series_e of series_t) {
              if (!(0, series_s.isObject)(series_e) || !(0, series_s.hasProperty)(series_e, "action")) throw new Error(
                "Command should be an object with 'action' property");
              (0, o.assert)("all" === series_e.action || "one" === series_e.action,
                "Erase command action should be 'all' or 'one'")
            }
          }
          return series_e
        }(series_t.graphicsCmds)), i
    }