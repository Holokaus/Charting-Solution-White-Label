/**
 * Module 31237 - Auto-beautified from TradingView webpack bundle
 *
 * @module 31237
 * @date 2026-04-23
 * @size 626 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3615, 4543, 4995, 11542, 31550, 67410, 97767
 *
 * Exports:
 *   - showDeleteStudyTreeConfirm (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  showDeleteStudyTreeConfirm: () => r
});
var s = i(11542),
  o = i(3615);
const n = 5;

function r(e, t) {
  let r, a = "";
  if (e.length > n) {
    const t = e.length - n + 1;
    r = e.slice(0, n - 1), a = s.t(null, {
      plural: "and {nameCount} more indicators.",
      count: t
    }, i(31550)).format({
      nameCount: t.toString()
    })
  } else r = e;
  const l = '<ul style="padding-left:20px">' + r.map((e => `<li>${e}</li>`)).join("") + "</ul>" + a,
    c = s.t(null, void 0, i(4995)) + l;
  (0, o.showConfirm)({
    title: s.t(null, void 0, i(97767)),
    html: c,
    mainButtonText: s.t(null, void 0, i(67410)),
    mainButtonIntent: "danger",
    cancelButtonText: s.t(null, void 0, i(4543)),
    onConfirm: ({
      dialogClose: e
    }) => {
      t(), e()
    }
  })
