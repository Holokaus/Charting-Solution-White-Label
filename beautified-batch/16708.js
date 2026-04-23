/**
 * Module 16708 - Auto-beautified from TradingView webpack bundle
 *
 * @module 16708
 * @date 2026-04-23
 * @size 1164 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3615, 5734, 11542, 41019, 71692, 89947, 93123, 99024
 *
 * Exports:
 *   - DeleteLockedLineToolReason (internal: s)
 *   - confirmRemovingLockedLineTools (internal: d)
 *   - showDeleteLockedLineToolsConfirm (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  DeleteLockedLineToolReason: () => s,
  confirmRemovingLockedLineTools: () => d,
  showDeleteLockedLineToolsConfirm: () => h
});
var s, o = i(11542),
  n = i(3615),
  r = i(5734),
  a = i(89947);
! function(e) {
  e[e.RemoveSelected = 0] = "RemoveSelected", e[e.RemoveAll = 1] = "RemoveAll"
}(s || (s = {}));
const l = o.t(null, void 0, i(41019)),
  c = o.t(null, void 0, i(41019));
async function h(e, t) {
  if (r.doNotShowDeleteLockedLineConfirmProperty.value()) return void t(a.deleteLockedLineToolsProperty.value());
  const {
    getContent: h
  } = await Promise.all([i.e(7328), i.e(3425), i.e(6052), i.e(1065), i.e(4598)]).then(i.bind(i, 30627));
  (0, n.showConfirm)({
    title: o.t(null, void 0, i(71692)),
    content: h(e === s.RemoveSelected ? l : c),
    id: `${r.doNotShowDeleteLockedLineKey}-confirm`,
    mainButtonText: o.t(null, void 0, i(93123)),
    mainButtonIntent: "danger",
    cancelButtonText: o.t(null, void 0, i(99024)),
    onConfirm: ({
      dialogClose: e
    }) => {
      r.doNotShowDeleteLockedLineConfirmProperty.value() && a.deleteLockedLineToolsProperty.setValue(!0), t(!0), e()
    },
    onCancel: ({
      dialogClose: e
    }) => {
      r.doNotShowDeleteLockedLineConfirmProperty.value() && a.deleteLockedLineToolsProperty.setValue(!1), t(!1), e()
    }
  })
}

function d(e) {
  return new Promise((t => {
    h(e, t)
  }))
