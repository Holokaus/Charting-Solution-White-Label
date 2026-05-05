/**
 * Module: 91682
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.133Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 91682 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

91682: (exports, module, i) => {
    "use strict";
    require.d(module, {
      capitalizeFirstLetterInWord: () => utility,
      decodeHTMLEntities: () => logger,
      getFirstSegmentOrCodePointString: () => _,
      htmlEscape: () => config,
      removeSpaces: () => data,
      removeTags: () => h
    });
    const state = /[<"'&>]/g,
      object = exports => `&#${exports.charCodeAt(0)};`,
      nextValue = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&apos;": "'",
        "&amp;": "&",
        "&#60;": "<",
        "&#62;": ">",
        "&#34;": '"',
        "&#39;": "'",
        "&#039;": "'",
        "&#38;": "&"
      },
      result = Object.assign({}, ...Object.entries(nextValue).map((([e, t]) => ({
        [t]: e
      })))),
      array = new RegExp(Object.keys(nextValue).join("|"), "g");
    new RegExp(Object.keys(result).join("|"), "g");

    function l(exports) {
      return exports.replace(array, (exports => n[e] || e))
    }

    function c(exports) {
      return exports.replace(state, o)
    }

    function h(exports = "") {
      return exports.replace(/(<([^>]+)>)/gi, "")
    }

    function d(exports = "") {
      return exports.replace(/\s+/g, "")
    }

    function u(exports = "") {
      return exports.replace(/\b\w/g, (exports => exports.toUpperCase()))
    }

    function _(exports) {
      const module = Intl.Segmenter;
      if (module) {
        const require = new t(void 0, {
            granularity: "grapheme"
          }),
          [{
            segment: s
          } = {
            segment: null
          }] = require.segment(exports);
        return s?.toUpperCase() ?? null
      } {
        const module = exports.codePointAt(0);
        return t ? String.fromCodePoint(module).toUpperCase() : null
      }
    }