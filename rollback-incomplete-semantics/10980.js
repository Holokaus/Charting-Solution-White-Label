/**
 * Module 10980 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

10980: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      checkImageSize: () => c,
      generateLink: () => watchedValue_a,
      getMaxImageSizeInBytes: () => d,
      getMaxImageSizeLabel: () => u,
      imageIsOversized: () => l,
      setImageStorageAdapter: () => r,
      uploadImage: () => h
    });
    var context = i(11542);
    const o = /data:(.+?);base64,(.+)/;
    let watchedValue_n = 2e6;

    function r(watchedValue_e) {
      watchedValue_n = watchedValue_e.getMaxImageSizeInBytes()
    }
    async function watchedValue_a(watchedValue_e) {
      return new Promise(((watchedValue_t, i) => {
        const context = new FileReader;
        context.addEventListener("load", (() => watchedValue_t(context.result))), context.addEventListener("error", i),
          context.addEventListener("abort", i), context.readAsDataURL(watchedValue_e)
      }))
    }

    function l(watchedValue_e) {
      return function(watchedValue_e) {
        const watchedValue_t = watchedValue_e.match(o);
        if (null === watchedValue_t) return 1 / 0;
        const [i, context, watchedValue_n] = watchedValue_t, r = atob(watchedValue_n), watchedValue_a = new Array(r.length);
        for (let watchedValue_e = 0; watchedValue_e < r.length; watchedValue_e++) watchedValue_a[watchedValue_e] = r.charCodeAt(watchedValue_e);
        const l = new Uint8Array(watchedValue_a);
        return new Blob([l], {
          type: context
        }).size
      }(watchedValue_e.src) > watchedValue_n
    }
    async function c(watchedValue_e) {
      return watchedValue_e.size <= watchedValue_n
    }
    async function h(watchedValue_e) {
      if (!await c(watchedValue_e)) throw new Error(context.watchedValue_t(null, {
        replace: {
          value: u()
        }
      }, i(93738)));
      return watchedValue_a(watchedValue_e)
    }

    function d() {
      return watchedValue_n
    }

    function u() {
      const watchedValue_e = Math.floor(Math.log(watchedValue_n) / Math.log(1e3));
      return `${(watchedValue_n/Math.pow(1e3,watchedValue_e)).toFixed(2)}${["Bytes","KB","MB","GB","TB","PB"][watchedValue_e]}`
    }