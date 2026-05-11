/**
 * Module: 15754
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.285Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 15754 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

15754: (exports, module, i) => {
    "use strict";
    require.d(module, {
      FOCUSABLE_SELECTOR: () => object,
      createScopedVisibleElementFilter: () => handler,
      getActiveElementSelectors: () => config,
      isInertRoot: () => array,
      isVisibilityVisible: () => n
    });
    const state = ["button", "fieldset", "optgroup", "option", "select", "textarea", "input"],
      object = ["button", "input", "select", "textarea", "a[href]", "audio[controls]", "video[controls]", '[tabindex="0"]',
        '[contenteditable="true"]'
      ].map((exports => state.includes(exports) ? `${e}:not(:disabled)` : e)).map((exports => `${e}:not([tabindex="-1"])`)).join(",");

    function n(exports) {
      return "visible" === getComputedStyle(exports).visibility
    }

    function r(exports, t) {
      if (exports.matches("[inert],[inert] *")) return !0;
      let require = exports;
      for (; i !== t && null !== require;) {
        if (l(require)) return !0;
        require = require.parentElement
      }
      return !1
    }

    function a(exports) {
      return exports.matches("[inert]") || l(exports)
    }

    function l(exports) {
      return "none" === getComputedStyle(exports).display
    }

    function c() {
      return o
    }

    function h(exports) {
      return module => n(module) && !r(module, e)
    }
}
