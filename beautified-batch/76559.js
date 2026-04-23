/**
 * Module 76559 - Auto-beautified from TradingView webpack bundle
 *
 * @module 76559
 * @date 2026-04-23
 * @size 812 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151
 *
 * Exports:
 *   - isRootPath (internal: a)
 *   - propertyByPath (internal: r)
 *   - propertyPathForSource (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  isRootPath: () => a,
  propertyByPath: () => r,
  propertyPathForSource: () => o
});
var s = i(50151);

function o(e, t = "properties") {
  return `charts.${e.model().id()}.sources.${e.id()}.${t}`
}

function n(e, t) {
  if (t.length < 4) throw new Error("Invalid chart path");
  const i = function(e, t) {
      return (0, s.ensureDefined)(e.getAll().find((e => e.hasModel() && e.model().model().id() === t))).model().model()
    }(e, t[0]),
    o = t[1];
  if ("sources" === o) {
    return (0, s.ensureNotNull)(i.dataSourceForId(t[2])).propertyByPath(t.slice(3).join("."))
  }
  throw new Error(`Invalid chart path, unknown root: ${o}`)
}

function r(e, t) {
  const i = t.split(".");
  if (i.length < 1) throw new Error("Invalid path");
  const s = i[0];
  if ("charts" === s) return n(e, i.slice(1));
  throw new Error(`Invalid path, unknown root: ${s}`)
}

function a(e) {
  return e.startsWith("charts.")
