/**
 * Module 76559 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

76559: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      isRootPath: () => seriesBarFunction_a,
      propertyByPath: () => seriesBarFunction_r,
      propertyPathForSource: () => seriesBarFunction_o
    });
    var assertionUtils = seriesBarFunction_i(50151);

    function seriesBarFunction_o(seriesBarFunction_e, seriesBarFunction_t = "properties") {
      return `charts.${seriesBarFunction_e.model().id()}.sources.${seriesBarFunction_e.id()}.${seriesBarFunction_t}`
    }

    function seriesBarFunction_n(seriesBarFunction_e, seriesBarFunction_t) {
      if (seriesBarFunction_t.length < 4) throw new Error("Invalid chart path");
      const seriesBarFunction_i = function(seriesBarFunction_e, seriesBarFunction_t) {
          return (0, assertionUtils.ensureDefined)(seriesBarFunction_e.getAll().find((seriesBarFunction_e => seriesBarFunction_e.hasModel() && seriesBarFunction_e.model().model().id() === seriesBarFunction_t)))
            .model().model()
        }(seriesBarFunction_e, seriesBarFunction_t[0]),
        seriesBarFunction_o = seriesBarFunction_t[1];
      if ("sources" === seriesBarFunction_o) {
        return (0, assertionUtils.ensureNotNull)(seriesBarFunction_i.dataSourceForId(seriesBarFunction_t[2])).propertyByPath(seriesBarFunction_t.slice(3).join("."))
      }
      throw new Error(`Invalid chart path, unknown root: ${seriesBarFunction_o}`)
    }

    function seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t) {
      const seriesBarFunction_i = seriesBarFunction_t.split(".");
      if (seriesBarFunction_i.length < 1) throw new Error("Invalid path");
      const assertionUtils = seriesBarFunction_i[0];
      if ("charts" === assertionUtils) return seriesBarFunction_n(seriesBarFunction_e, seriesBarFunction_i.slice(1));
      throw new Error(`Invalid path, unknown root: ${assertionUtils}`)
    }

    function seriesBarFunction_a(seriesBarFunction_e) {
      return seriesBarFunction_e.startsWith("charts.")
    }