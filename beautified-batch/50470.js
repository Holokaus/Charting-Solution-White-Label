/**
 * Module 50470 - Auto-beautified from TradingView webpack bundle
 *
 * @module 50470
 * @date 2026-04-23
 * @size 490 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - parseHtml (internal: n)
 *   - parseHtmlElement (internal: r)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

50470: (e, t, i) => {
    "use strict";
    i.d(t, {
      parseHtml: () => n,
      parseHtmlElement: () => r
    });
    const s = new WeakMap;
    var o;

    function n(e, t) {
      let i, o;
      return i = null == t ? document.documentElement : 9 === t.nodeType ? t.documentElement : t, s && (o = s.get(i)), o || (o = i.ownerDocument.createRange(), o.selectNodeContents(i), s && s.set(i, o)), o.createContextualFragment(e)
    }

    function r(e, t) {
      const i = n(e, t),
        s = i.firstElementChild;
      return null !== s && i.removeChild(s), s
    }! function(e) {
      e[e.Element = 1] = "Element", e[e.Document = 9] = "Document"
    }(o || (o = {}))
