/**
 * Module 10980 - Auto-beautified from TradingView webpack bundle
 *
 * @module 10980
 * @date 2026-04-23
 * @size 1049 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 11542, 93738
 *
 * Exports:
 *   - checkImageSize (internal: c)
 *   - generateLink (internal: a)
 *   - getMaxImageSizeInBytes (internal: d)
 *   - getMaxImageSizeLabel (internal: u)
 *   - imageIsOversized (internal: l)
 *   - setImageStorageAdapter (internal: r)
 *   - uploadImage (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  checkImageSize: () => c,
  generateLink: () => a,
  getMaxImageSizeInBytes: () => d,
  getMaxImageSizeLabel: () => u,
  imageIsOversized: () => l,
  setImageStorageAdapter: () => r,
  uploadImage: () => h
});
var s = i(11542);
const o = /data:(.+?);base64,(.+)/;
let n = 2e6;

function r(e) {
  n = e.getMaxImageSizeInBytes()
}
async function a(e) {
  return new Promise(((t, i) => {
    const s = new FileReader;
    s.addEventListener("load", (() => t(s.result))), s.addEventListener("error", i), s.addEventListener("abort", i), s.readAsDataURL(e)
  }))
}

function l(e) {
  return function(e) {
    const t = e.match(o);
    if (null === t) return 1 / 0;
    const [i, s, n] = t, r = atob(n), a = new Array(r.length);
    for (let e = 0; e < r.length; e++) a[e] = r.charCodeAt(e);
    const l = new Uint8Array(a);
    return new Blob([l], {
      type: s
    }).size
  }(e.src) > n
}
async function c(e) {
  return e.size <= n
}
async function h(e) {
  if (!await c(e)) throw new Error(s.t(null, {
    replace: {
      value: u()
    }
  }, i(93738)));
  return a(e)
}

function d() {
  return n
}

function u() {
  const e = Math.floor(Math.log(n) / Math.log(1e3));
  return `${(n/Math.pow(1e3,e)).toFixed(2)}${["Bytes","KB","MB","GB","TB","PB"][e]}`
