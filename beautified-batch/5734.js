/**
 * Module 5734 - Auto-beautified from TradingView webpack bundle
 *
 * @module 5734
 * @date 2026-04-23
 * @size 366 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 1765, 41072
 *
 * Exports:
 *   - doNotShowDeleteLockedLineConfirmProperty (internal: a)
 *   - doNotShowDeleteLockedLineKey (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

5734: (e, t, i) => {
    "use strict";
    i.d(t, {
      doNotShowDeleteLockedLineConfirmProperty: () => a,
      doNotShowDeleteLockedLineKey: () => n
    });
    var s = i(1765),
      o = i(41072);
    const n = "do_not_show_delete_locked_line_confirm";

    function r() {
      return s.getBool(n, !1)
    }
    const a = (0, o.createPrimitiveProperty)(r());
    a.subscribe(null, (() => s.setValue(n, a.value()))), s.onSync.subscribe(null, (() => a.setValue(r())))
