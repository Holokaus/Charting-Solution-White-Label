/**
 * Module 61814 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

61814: (e, t, i) => {
    "use strict";
    i.d(t, {
      hotKeyDeserialize: () => n,
      hotKeySerialize: () => o
    });
    var s = i(91682);

    function o(e) {
      return (0, s.htmlEscape)(JSON.stringify(e))
    }

    function n(e) {
      return JSON.parse((0, s.decodeHTMLEntities)(e))
    }