/**
 * Module 26709 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
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