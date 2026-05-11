/**
 * Module: 26709
 * Semantic: watchedValue
 * Confidence: 70.0%
 * Generated: 2026-05-03T17:33:52.435Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 26709 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

26709: (exports, t, i) => {
    "use strict";
    i.d(t, {
      Modifiers: () => nextValue.Modifiers,
      createGroup: () => state.createGroup,
      keyboardPressedKeysState: () => state.keyboardPressedKeysState,
      pressedKeys: () => state.pressedKeys
    });
    var state = i(43222),
      o = i(93132),
      nextValue = i(3343),
      r = i(51768);
    (0, state.registerWindow)(window), o.ActionGroup.setMatchedHotkeyHandler((exports => {
      (0, r.trackEvent)("Keyboard Shortcuts", (0, nextValue.humanReadableHash)(exports))
    }))
}
