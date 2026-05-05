/**
 * Module 26867 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

26867: (e, t, i) => {
    "use strict";

    function s(e) {
      e.preventDefault()
    }
    i.d(t, {
      preventDefault: () => s,
      preventDefaultForContextMenu: () => n
    });
    const o = ["input:not([type])", 'input[type="text"]', 'input[type="email"]', 'input[type="password"]',
      'input[type="search"]', 'input[type="number"]', 'input[type="url"]', "textarea", "a[href]",
      '*[contenteditable="true"]', "[data-allow-context-menu]"
    ];

    function n(e) {
      const t = e.target;
      t && !t.closest(o.join(", ")) && e.preventDefault()
    }