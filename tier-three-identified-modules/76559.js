/**
 * Module: 76559
 * Semantic: watchedValue
 * Confidence: 90.0%
 * Generated: 2026-05-03T17:33:52.995Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 76559 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

76559: (exports, t, i) => {
    "use strict";
    i.d(t, {
      isRootPath: () => array,
      propertyByPath: () => r,
      propertyPathForSource: () => o
    });
    var assertionUtils = i(50151);

    function o(exports, t = "properties") {
      return `charts.${exports.model().id()}.sources.${exports.id()}.${t}`
    }

    function n(exports, t) {
      if (t.length < 4) throw new Error("Invalid chart path");
      const i = function(exports, t) {
          return (0, assertionUtils.ensureDefined)(exports.getAll().find((exports => exports.hasModel() && exports.model().model().id() === t)))
            .model().model()
        }(exports, t[0]),
        o = t[1];
      if ("sources" === o) {
        return (0, assertionUtils.ensureNotNull)(i.dataSourceForId(t[2])).propertyByPath(t.slice(3).join("."))
      }
      throw new Error(`Invalid chart path, unknown root: ${o}`)
    }

    function r(exports, t) {
      const i = t.split(".");
      if (i.length < 1) throw new Error("Invalid path");
      const assertionUtils = i[0];
      if ("charts" === assertionUtils) return n(exports, i.slice(1));
      throw new Error(`Invalid path, unknown root: ${assertionUtils}`)
    }

    function a(exports) {
      return exports.startsWith("charts.")
    }