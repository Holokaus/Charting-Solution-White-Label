/**
 * Module 76559 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

76559: (e, t, i) => {
    "use strict";
    i.d(t, {
      isRootPath: () => a,
      propertyByPath: () => r,
      propertyPathForSource: () => o
    });
    var assertionUtils = i(50151);

    function o(e, t = "properties") {
      return `charts.${e.model().id()}.sources.${e.id()}.${t}`
    }

    function n(e, t) {
      if (t.length < 4) throw new Error("Invalid chart path");
      const i = function(e, t) {
          return (0, assertionUtils.ensureDefined)(e.getAll().find((e => e.hasModel() && e.model().model().id() === t)))
            .model().model()
        }(e, t[0]),
        o = t[1];
      if ("sources" === o) {
        return (0, assertionUtils.ensureNotNull)(i.dataSourceForId(t[2])).propertyByPath(t.slice(3).join("."))
      }
      throw new Error(`Invalid chart path, unknown root: ${o}`)
    }

    function r(e, t) {
      const i = t.split(".");
      if (i.length < 1) throw new Error("Invalid path");
      const assertionUtils = i[0];
      if ("charts" === assertionUtils) return n(e, i.slice(1));
      throw new Error(`Invalid path, unknown root: ${assertionUtils}`)
    }

    function a(e) {
      return e.startsWith("charts.")
    }