/**
 * Module 32925
 *
 * Auto-beautified from minified webpack source.
 * Variable renaming still needed.
 *
 * @module 32925
 */

"use strict";
i.d(t, {
  fetch: () => o
});
var s = i(9343);
new class {
  constructor(e, t) {
    this._test = e[t] = {}
  }
  provide(e, t) {
    this._test[e] = t
  }
}(window, "qaGlobals"), (0, s.getLogger)("Fetch");

function o(e, t, i = {}) {
  return window.fetch(e, t)