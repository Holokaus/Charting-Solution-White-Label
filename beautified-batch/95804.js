/**
 * Module 95804 - Auto-beautified from TradingView webpack bundle
 *
 * @module 95804
 * @date 2026-04-23
 * @size 476 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - TranslatedString (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  TranslatedString: () => s
});
class s {
  constructor(e, t) {
    this._originalText = e, this._translatedText = t
  }
  originalText() {
    return this._originalText
  }
  translatedText() {
    return this._translatedText
  }
  format(e) {
    const t = {},
      i = {};
    for (const o of Object.keys(e)) {
      const n = e[o];
      n instanceof s ? (t[o] = n.originalText(), i[o] = n.translatedText()) : (t[o] = n.toString(), i[o] = n.toString())
    }
    const o = this._originalText.format(t),
      n = this._translatedText.format(i);
    return new s(o, n)
  }
