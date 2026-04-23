/**
 * Module 14715 - Auto-beautified from TradingView webpack bundle
 *
 * @module 14715
 * @date 2026-04-23
 * @size 635 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 10980
 *
 * Exports:
 *   - blobImageFilter (internal: o)
 *   - checkImageSize (internal: a)
 *   - generateLink (internal: r)
 *   - getMaxImageSizeInBytes (internal: c)
 *   - getMaxImageSizeLabel (internal: h)
 *   - imageIsOversized (internal: n)
 *   - uploadImage (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  blobImageFilter: () => o,
  checkImageSize: () => a,
  generateLink: () => r,
  getMaxImageSizeInBytes: () => c,
  getMaxImageSizeLabel: () => h,
  imageIsOversized: () => n,
  uploadImage: () => l
});
var s = i(10980);

function o(e) {
  return "image/png" === e.type || "image/jpeg" === e.type || "image/webp" === e.type
}

function n(e) {
  return s.imageIsOversized(e)
}
async function r(e) {
  return {
    status: "ok",
    data: {
      url: await s.generateLink(e),
      fields: {}
    },
    filename: "",
    filepath: ""
  }
}
async function a(e) {
  return s.checkImageSize(e)
}
async function l(e) {
  return s.uploadImage(e)
}

function c() {
  return s.getMaxImageSizeInBytes()
}

function h() {
  return s.getMaxImageSizeLabel()
