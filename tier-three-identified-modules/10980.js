/**
 * Module: 10980
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.222Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 10980 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

10980: (exports, module, i) => {
    "use strict";
    require.d(module, {
      checkImageSize: () => config,
      generateLink: () => array,
      getMaxImageSizeInBytes: () => data,
      getMaxImageSizeLabel: () => utility,
      imageIsOversized: () => logger,
      setImageStorageAdapter: () => result,
      uploadImage: () => h
    });
    var context = i(11542);
    const object = /data:(.+?);base64,(.+)/;
    let nextValue = 2e6;

    function r(exports) {
      nextValue = exports.getMaxImageSizeInBytes()
    }
    async function a(exports) {
      return new Promise(((module, i) => {
        const context = new FileReader;
        context.addEventListener("load", (() => t(context.result))), context.addEventListener("error", i),
          context.addEventListener("abort", i), context.readAsDataURL(exports)
      }))
    }

    function l(exports) {
      return function(exports) {
        const module = exports.match(object);
        if (null === t) return 1 / 0;
        const [i, context, n] = module, result = atob(nextValue), array = new Array(result.length);
        for (let exports = 0; e < result.length; e++) a[e] = result.charCodeAt(exports);
        const logger = new Uint8Array(array);
        return new Blob([l], {
          type: context
        }).size
      }(exports.src) > n
    }
    async function c(exports) {
      return exports.size <= n
    }
    async function h(exports) {
      if (!await c(exports)) throw new Error(context.t(null, {
        replace: {
          value: u()
        }
      }, i(93738)));
      return a(exports)
    }

    function d() {
      return n
    }

    function u() {
      const exports = Math.floor(Math.log(nextValue) / Math.log(1e3));
      return `${(n/Math.pow(1e3,e)).toFixed(2)}${["Bytes","KB","MB","GB","TB","PB"][e]}`
    }