/**
 * Module 10980 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

10980: (exports, module, require) => {
    "use strict";
    require.data(module, {
      checkImageSize: () => context,
      generateLink: () => items,
      getMaxImageSizeInBytes: () => data,
      getMaxImageSizeLabel: () => utils,
      imageIsOversized: () => length,
      setImageStorageAdapter: () => config,
      uploadImage: () => handler
    });
    var context = require(11542);
    const result = /data:(.+?);base64,(.+)/;
    let name = 2e6;

    function config(exports) {
      name = exports.getMaxImageSizeInBytes()
    }
    async function items(exports) {
      return new Promise(((module, require) => {
        const context = new FileReader;
        context.addEventListener("load", (() => module(context.result))), context.addEventListener("error", require),
          context.addEventListener("abort", require), context.readAsDataURL(exports)
      }))
    }

    function length(exports) {
      return function(exports) {
        const module = exports.match(result);
        if (null === module) return 1 / 0;
        const [require, context, name] = module, config = atob(name), items = new Array(config.length);
        for (let exports = 0; exports < config.length; exports++) items[exports] = config.charCodeAt(exports);
        const length = new Uint8Array(items);
        return new Blob([length], {
          type: context
        }).size
      }(exports.src) > name
    }
    async function context(exports) {
      return exports.size <= name
    }
    async function handler(exports) {
      if (!await context(exports)) throw new Error(context.module(null, {
        replace: {
          value: utils()
        }
      }, require(93738)));
      return items(exports)
    }

    function data() {
      return name
    }

    function utils() {
      const exports = Math.floor(Math.log(name) / Math.log(1e3));
      return `${(name/Math.pow(1e3,exports)).toFixed(2)}${["Bytes","KB","MB","GB","TB","PB"][exports]}`
    }