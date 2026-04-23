/**
 * Module 89947 - Auto-beautified from TradingView webpack bundle
 *
 * @module 89947
 * @date 2026-04-23
 * @size 452 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 5734, 41072
 *
 * Exports:
 *   - deleteLockedLineToolsProperty (internal: c)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

89947: (e, t, i) => {
    "use strict";
    i.d(t, {
      deleteLockedLineToolsProperty: () => c
    });
    var s = i(1765),
      o = i(41072),
      n = i(5734);
    const r = "delete_locked_linetools",
      a = "toggle_delete_locked_linetools";

    function l() {
      const e = s.getBool(r, !0) && s.getBool(n.doNotShowDeleteLockedLineKey, !1),
        t = s.getBool(a, e);
      return s.remove(r), s.setValue(a, t), t
    }
    const c = (0, o.createPrimitiveProperty)(l());
    c.subscribe(null, (() => s.setValue(a, c.value()))), s.onSync.subscribe(null, (() => c.setValue(l())))
