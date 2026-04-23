/**
 * Module 62312 - Auto-beautified from TradingView webpack bundle
 *
 * @module 62312
 * @date 2026-04-23
 * @size 406 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - addStudyInfoToMap (internal: n)
 *   - createStudyInfo (internal: s)
 *   - getStudyClassName (internal: a)
 *   - getStudyInfoByName (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";

function s(e, t = "shift", i) {
  return {
    studyConstructorAsyncGetter: e,
    colorRotationMode: t,
    colorRotationComparator: i
  }
}
i.d(t, {
  addStudyInfoToMap: () => n,
  createStudyInfo: () => s,
  getStudyClassName: () => a,
  getStudyInfoByName: () => r
});
const o = new Map;

function n(e, t) {
  o.set(e, t)
}

function r(e) {
  return o.get(e)
}

function a(e) {
  for (const [t, i] of o.entries())
    if (i.studyConstructor === e) return t;
  return null
