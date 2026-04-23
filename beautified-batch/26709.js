/**
 * Module 26709 - Auto-beautified from TradingView webpack bundle
 *
 * @module 26709
 * @date 2026-04-23
 * @size 367 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3343, 43222, 51768, 93132
 *
 * Exports:
 *   - Modifiers (internal: n)
 *   - createGroup (internal: s)
 *   - keyboardPressedKeysState (internal: s)
 *   - pressedKeys (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

26709: (e, t, i) => {
    "use strict";
    i.d(t, {
      Modifiers: () => n.Modifiers,
      createGroup: () => s.createGroup,
      keyboardPressedKeysState: () => s.keyboardPressedKeysState,
      pressedKeys: () => s.pressedKeys
    });
    var s = i(43222),
      o = i(93132),
      n = i(3343),
      r = i(51768);
    (0, s.registerWindow)(window), o.ActionGroup.setMatchedHotkeyHandler((e => {
      (0, r.trackEvent)("Keyboard Shortcuts", (0, n.humanReadableHash)(e))
    }))
