/**
 * Module 16216 - Auto-beautified from TradingView webpack bundle
 *
 * @module 16216
 * @date 2026-04-23
 * @size 407 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - hasService (internal: r)
 *   - registerService (internal: n)
 *   - service (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  hasService: () => r,
  registerService: () => n,
  service: () => a
});
const s = {},
  o = new Map;

function n(e, t) {
  if (r(e)) throw new Error("Service already registered");
  s[e.id] = t;
  const i = o.get(e.id);
  void 0 !== i && (o.delete(e.id), i.resolve(t))
}

function r(e) {
  return void 0 !== s[e.id]
}

function a(e) {
  const t = s[e.id];
  if (void 0 === t) throw new Error("ServiceLocator: Service " + e.id + " not found");
  return t
