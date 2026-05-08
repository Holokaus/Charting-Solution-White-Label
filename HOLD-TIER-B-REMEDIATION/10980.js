/**
 * ============================================================================
 * TRADINGVIEW MODULE 10980 - IMAGE UTILITIES
 * ============================================================================
 *
 * Purpose: Image processing and validation utilities
 *
 * Size: 2.4 KB
 *
 * Functions:
 *   - checkImageSize: Check image size
 *   - generateLink: Generate image link
 *   - getMaxImageSizeInBytes: Get max image size
 *   - getMaxImageSizeLabel: Get max size label
 *   - imageIsOversized: Check if image is oversized
 *   - setImageStorageAdapter: Set image storage adapter
 *   - uploadImage: Upload image
 *
 * Features:
 *   - Image size validation
 *   - Base64 image processing
 *   - Storage adapter management
 *   - Image upload functionality
 *   - Size limit enforcement
 *
 * Dependencies:
 *   - 11542: Image utilities
 *
 * Exports:
 *   - checkImageSize: Image size check function
 *   - generateLink: Link generation function
 *   - getMaxImageSizeInBytes: Max size getter function
 *   - getMaxImageSizeLabel: Max size label function
 *   - imageIsOversized: Image size check function
 *   - setImageStorageAdapter: Storage adapter setter function
 *   - uploadImage: Image upload function
 *
 * @module 10980
 * @category Image Processing
 * @subpackage Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_d(moduleConfig, {
    checkImageSize: () => checkImageSize,
    generateLink: () => generateLink,
    getMaxImageSizeInBytes: () => getMaxImageSizeInBytes,
    getMaxImageSizeLabel: () => getMaxImageSizeLabel,
    imageIsOversized: () => imageIsOversized,
    setImageStorageAdapter: () => setImageStorageAdapter,
    uploadImage: () => uploadImage
  });
    var context = watchedValue_i(11542);
    const watchedValue_o = /data:(.+?);base64,(.+)/;
    let watchedValue_n = 2e6;

    function watchedValue_r(watchedValue_e) {
      watchedValue_n = watchedValue_e.getMaxImageSizeInBytes()
    }
    async function watchedValue_a(watchedValue_e) {
      return new Promise(((watchedValue_t, watchedValue_i) => {
        const context = new FileReader;
        context.addEventListener("load", (() => watchedValue_t(context.result))), context.addEventListener("error", watchedValue_i),
          context.addEventListener("abort", watchedValue_i), context.readAsDataURL(watchedValue_e)
      }))
    }

    function watchedValue_l(watchedValue_e) {
      return function(watchedValue_e) {
        const watchedValue_t = watchedValue_e.match(watchedValue_o);
        if (null === watchedValue_t) return 1 / 0;
        const [watchedValue_i, context, watchedValue_n] = watchedValue_t, watchedValue_r = atob(watchedValue_n), watchedValue_a = new Array(watchedValue_r.length);
        for (let watchedValue_e = 0; watchedValue_e < watchedValue_r.length; watchedValue_e++) watchedValue_a[watchedValue_e] = watchedValue_r.charCodeAt(watchedValue_e);
        const watchedValue_l = new Uint8Array(watchedValue_a);
        return new Blob([watchedValue_l], {
          type: context
        }).size
      }(watchedValue_e.src) > watchedValue_n
    }
    async function watchedValue_c(watchedValue_e) {
      return watchedValue_e.size <= watchedValue_n
    }
    async function watchedValue_h(watchedValue_e) {
      if (!await watchedValue_c(watchedValue_e)) throw new Error(context.watchedValue_t(null, {
        replace: {
          value: watchedValue_u()
        }
      }, watchedValue_i(93738)));
      return watchedValue_a(watchedValue_e)
    }

    function watchedValue_d() {
      return watchedValue_n
    }

    function watchedValue_u() {
      const watchedValue_e = Math.floor(Math.log(watchedValue_n) / Math.log(1e3));
      return `${(watchedValue_n/Math.pow(1e3,watchedValue_e)).toFixed(2)}${["Bytes","KB","MB","GB","TB","PB"][watchedValue_e]}`
    }