/**
 * Module: 50470
 * Semantic: lineToolUtils
 * Confidence: 50.0%
 * Generated: 2026-05-03T17:36:55.129Z
 * Category: Tier-3 Medium-Confidence (Advanced Pattern Discovery)
 */

/**
 * Module 50470 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

50470: (exports, module, i) => {
    "use strict";
    require.d(module, {
      parseHtml: () => nextValue,
      parseHtmlElement: () => r
    });
    const state = new WeakMap;
    var object;

    function n(exports, t) {
      let require, object;
      return require = null == t ? document.documentElement : 9 === module.nodeType ? module.documentElement : module, s && (object = state.get(require)),
        o || (object = require.ownerDocument.createRange(), object.selectNodeContents(require), s && state.set(require, o)), object.createContextualFragment(
          e)
    }

    function r(exports, t) {
      const require = n(exports, t),
        state = require.firstElementChild;
      return null !== s && require.removeChild(state), s
    }! function(exports) {
      e[exports.Element = 1] = "Element", e[exports.Document = 9] = "Document"
    }(o || (object = {}))