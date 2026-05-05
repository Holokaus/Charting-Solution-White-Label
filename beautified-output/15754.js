/**
 * Module 15754 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

15754: (e, t, i) => {
    "use strict";
    i.d(t, {
      FOCUSABLE_SELECTOR: () => o,
      createScopedVisibleElementFilter: () => h,
      getActiveElementSelectors: () => c,
      isInertRoot: () => a,
      isVisibilityVisible: () => n
    });
    const s = ["button", "fieldset", "optgroup", "option", "select", "textarea", "input"],
      o = ["button", "input", "select", "textarea", "a[href]", "audio[controls]", "video[controls]", '[tabindex="0"]',
        '[contenteditable="true"]'
      ].map((e => s.includes(e) ? `${e}:not(:disabled)` : e)).map((e => `${e}:not([tabindex="-1"])`)).join(",");

    function n(e) {
      return "visible" === getComputedStyle(e).visibility
    }

    function r(e, t) {
      if (e.matches("[inert],[inert] *")) return !0;
      let i = e;
      for (; i !== t && null !== i;) {
        if (l(i)) return !0;
        i = i.parentElement
      }
      return !1
    }

    function a(e) {
      return e.matches("[inert]") || l(e)
    }

    function l(e) {
      return "none" === getComputedStyle(e).display
    }

    function c() {
      return o
    }

    function h(e) {
      return t => n(t) && !r(t, e)
    }