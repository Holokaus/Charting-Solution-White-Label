/**
 * Module 18041 - Auto-beautified from TradingView webpack bundle
 *
 * @module 18041
 * @date 2026-04-23
 * @size 620 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 36313
 *
 * Exports:
 *   - getStudyTemplateDescString (internal: r)
 *   - getStudyTemplateMetaInfo (internal: o)
 *   - getStudyTemplateSaveData (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  getStudyTemplateDescString: () => r,
  getStudyTemplateMetaInfo: () => o,
  getStudyTemplateSaveData: () => n
});
var s = i(36313);

function o(e, t) {
  return {
    indicators: e.allStudies(!0).map((e => ({
      id: e.metaInfo().id,
      description: e.title(s.TitleDisplayTarget.StatusLine, !0, void 0, !0)
    }))),
    interval: t
  }
}

function n(e, t, i, s) {
  const n = t.studyTemplate(i, s);
  return {
    name: e,
    content: JSON.stringify(n),
    meta_info: o(t, n.interval)
  }
}

function r(e) {
  const t = new Map;
  return e.forEach((e => {
      const [i, s] = t.get(e.id) || [e.description, 0];
      t.set(e.id, [i, s + 1])
    })),
    Array.from(t.values()).map((([e, t]) => `${e}${t>1?` x ${t}`:""}`)).join(", ")
