/**
 * Module 92848 - Auto-beautified from TradingView webpack bundle
 *
 * @module 92848
 * @date 2026-04-23
 * @size 739 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2088, 26610, 36313, 50151
 *
 * Exports:
 *   - clipboardDataForSources (internal: l)
 *   - isLineToolClipboardData (internal: a)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  clipboardDataForSources: () => l,
  isLineToolClipboardData: () => a
});
var s = i(50151),
  o = i(36313),
  n = i(2088),
  r = i(26610);

function a(e) {
  return "drawing" === e.type
}

function l(e, t) {
  if (1 === t.length && (0, n.isStudy)(t[0])) {
    const e = t[0];
    return {
      title: e.title(o.TitleDisplayTarget.StatusLine),
      sources: [{
        source: (0, s.ensureNotNull)(e.state()),
        type: "study"
      }]
    }
  }
  const i = {
    sources: [],
    title: ""
  };
  return i.sources = t.filter((e => e.copiable() && (0, r.isLineTool)(e))).map((t => {
    const i = {
      type: "drawing",
      geometry: t.geometry(),
      source: {
        ...t.state(!1),
        points: t.normalizedPoints()
      },
      modelId: e
    };
    return delete i.source.alertId, i
  })), i.sources.length > 0 ? (1 === i.sources.length ? i.title = t[0].title(o.TitleDisplayTarget.StatusLine) : i.title = "Drawings", i) : null
