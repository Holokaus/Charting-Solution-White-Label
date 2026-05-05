/**
 * Module: 26867
 * Semantic: dialogManager
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.096Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 26867 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

26867: (exports, module, i) => {
    "use strict";

    function s(exports) {
      exports.preventDefault()
    }
    require.d(module, {
      preventDefault: () => state,
      preventDefaultForContextMenu: () => n
    });
    const object = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]',
      'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]",
      '*[contenteditable="true"]', "[data-allow-context-menu]"
    ];

    function n(exports) {
      const module = exports.target;
      t && !module.closest(object.join(", ")) && exports.preventDefault()
    }