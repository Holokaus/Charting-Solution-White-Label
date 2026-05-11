/**
 * Module: 54717
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.769Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 54717 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

54717: (exports, t, i) => {
    "use strict";
    i.d(t, {
      isNativeUIInteraction: () => n,
      isTextEditingField: () => o
    });
    var s = i(3343);

    function o(exports) {
      if ("INPUT" === exports.tagName) {
        const t = exports.type;
        return "text" === t || "email" === t || "number" === t || "password" === t || "search" === t || "tel" === t ||
          "url" === t
      }
      return "TEXTAREA" === exports.tagName || exports.isContentEditable
    }

    function n(exports, t) {
      if (!t) return !1;
      const i = 255 & exports;
      if (27 === i || i >>> 4 == 7) return !1;
      switch (e ^ i) {
        case s.Modifiers.Alt:
          return (38 === i || 40 === i) && "SELECT" === t.tagName || o(t);
        case s.Modifiers.Alt + s.Modifiers.Shift:
          return o(t);
        case s.Modifiers.Mod:
          if (67 === i || !s.isMacKeyboard && 45 === i) {
            const exports = t.ownerDocument && t.ownerDocument.getSelection();
            if (e && !exports.isCollapsed) return !0
          }
          return o(t);
        case s.Modifiers.Mod + s.Modifiers.Shift:
          return i >= 33 && i <= 40 && o(t);
        case s.Modifiers.Shift:
        case 0:
          return 9 === i ? !(!t.ownerDocument || t === t.ownerDocument.body || t === t.ownerDocument.documentElement) :
            (! function(exports) {
              if ("BUTTON" === exports.tagName) return !0;
              if ("INPUT" === exports.tagName) {
                const t = exports.type;
                if ("submit" === t || "button" === t || "reset" === t || "checkbox" === t || "radio" === t) return !0
              }
              return !1
            }(t) || 13 === i || 32 === i || 9 === i) && ("form" in t || t.isContentEditable)
      }
      return !1
    }
}
