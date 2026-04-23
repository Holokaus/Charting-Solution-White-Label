/**
 * Module 91682 - Auto-beautified from TradingView webpack bundle
 *
 * @module 91682
 * @date 2026-04-23
 * @size 1013 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - capitalizeFirstLetterInWord (internal: u)
 *   - decodeHTMLEntities (internal: l)
 *   - getFirstSegmentOrCodePointString (internal: _)
 *   - htmlEscape (internal: c)
 *   - removeSpaces (internal: d)
 *   - removeTags (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  capitalizeFirstLetterInWord: () => u,
  decodeHTMLEntities: () => l,
  getFirstSegmentOrCodePointString: () => _,
  htmlEscape: () => c,
  removeSpaces: () => d,
  removeTags: () => h
});
const s = /[<"'&>]/g,
  o = e => `&#${e.charCodeAt(0)};`,
  n = {
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
  r = Object.assign({}, ...Object.entries(n).map((([e, t]) => ({
    [t]: e
  })))),
  a = new RegExp(Object.keys(n).join("|"), "g");
new RegExp(Object.keys(r).join("|"), "g");

function l(e) {
  return e.replace(a, (e => n[e] || e))
}

function c(e) {
  return e.replace(s, o)
}

function h(e = "") {
  return e.replace(/(<([^>]+)>)/gi, "")
}

function d(e = "") {
  return e.replace(/\s+/g, "")
}

function u(e = "") {
  return e.replace(/\b\w/g, (e => e.toUpperCase()))
}

function _(e) {
  const t = Intl.Segmenter;
  if (t) {
    const i = new t(void 0, {
        granularity: "grapheme"
      }),
      [{
        segment: s
      } = {
        segment: null
      }] = i.segment(e);
    return s?.toUpperCase() ?? null
  } {
    const t = e.codePointAt(0);
    return t ? String.fromCodePoint(t).toUpperCase() : null
  }
