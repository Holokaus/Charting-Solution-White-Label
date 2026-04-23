/**
 * Module 26010 - Auto-beautified from TradingView webpack bundle
 *
 * @module 26010
 * @date 2026-04-23
 * @size 680 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - formatterOptions (internal: o)
 *   - formatterOptionsLibraryOverrides (internal: n)
 *   - getNumberFormat (internal: d)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
let s;
i.d(t, {
  formatterOptions: () => o,
  formatterOptionsLibraryOverrides: () => n,
  getNumberFormat: () => d
});
const o = {
    decimalSign: ".",
    decimalSignFractional: "'"
  },
  n = {};
const r = {
    groupingSeparator: ",",
    decimalSign: "."
  },
  a = {
    groupingSeparator: ".",
    decimalSign: ","
  },
  l = {
    groupingSeparator: " ",
    decimalSign: ","
  },
  c = {
    groupingSeparator: "",
    decimalSign: "."
  },
  h = new Map([["en", r], ["th", r], ["ja", r], ["ko", r], ["zh", r], ["zh_TW", r], ["ar", r], ["he_IL", r], ["ms_MY", r], ["vi", r], ["de", a], ["es", a], ["it", a], ["tr", a], ["pt", a], ["id_ID", a], ["fr", l], ["pl", l], ["ru", l]]);

function d(e) {
  if (e) return {
    decimalSign: o.decimalSign,
    groupingSeparator: ""
  };
  return {
    ...h.get(s || window.language || "") ?? c,
    ...n
  }
