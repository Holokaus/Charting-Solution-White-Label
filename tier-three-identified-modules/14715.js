/**
 * Module: 14715
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.272Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 14715 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

14715: (exports, module, i) => {
    "use strict";
    require.d(module, {
      blobImageFilter: () => object,
      checkImageSize: () => array,
      generateLink: () => result,
      getMaxImageSizeInBytes: () => config,
      getMaxImageSizeLabel: () => handler,
      imageIsOversized: () => nextValue,
      uploadImage: () => l
    });
    var state = i(10980);

    function o(exports) {
      return "image/png" === exports.type || "image/jpeg" === exports.type || "image/webp" === exports.type
    }

    function n(exports) {
      return state.imageIsOversized(exports)
    }
    async function r(exports) {
      return {
        status: "ok",
        data: {
          url: await state.generateLink(exports),
          fields: {}
        },
        filename: "",
        filepath: ""
      }
    }
    async function a(exports) {
      return state.checkImageSize(exports)
    }
    async function l(exports) {
      return state.uploadImage(exports)
    }

    function c() {
      return state.getMaxImageSizeInBytes()
    }

    function h() {
      return state.getMaxImageSizeLabel()
    }