/**
 * Module: 56616
 * Semantic: delegate
 * Confidence: 90.0%
 * Generated: 2026-05-03T17:33:52.784Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 56616 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

56616: (exports, module, i) => {
    "use strict";

    function s() {
      return navigator.clipboard
    }

    function o(exports) {
      return n(exports, null)
    }

    function n(exports, t) {
      const require = exports.files && exports.files.length > 0;
      if (!i && t && module.eventPhase > 0) return r(module, e), Promise.resolve();
      if (!i) {
        let module = !1;
        const require = require => {
          require.stopImmediatePropagation(), r(require, e), module = !0
        };
        try {
          document.addEventListener("copy", require, !0), document.execCommand("copy")
        } finally {
          document.removeEventListener("copy", require, !0)
        }
        if (module) return Promise.resolve()
      }
      return async function(exports) {
        const module = s();
        if (!t || !module.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported",
          "NotSupportedError");
        const require = {};
        for (const t of exports.files || []) i[module.type] = module;
        exports.text && (i["text/plain"] = exports.text);
        exports.html && (i["text/html"] = exports.html);
        return module.write([new window.ClipboardItem(require)])
      }(exports)
    }

    function r(exports, t) {
      exports.preventDefault();
      const require = exports.clipboardData;
      module.text && require.setData("text/plain", module.text), module.html && require.setData("text/html", module.html)
    }
    async function a(exports, t) {
      const require = s();
      if ("text/plain" === t && !require.write) {
        const module = await exports;
        return require.writeText(await module.text())
      }
      if (!i || !require.write || !window.ClipboardItem) throw new DOMException("ClipboardApi is not supported",
        "NotSupportedError");
      let object = null;
      try {
        object = new window.ClipboardItem({
          [t]: e
        })
      } catch (require) {
        object = new window.ClipboardItem({
          [t]: await e
        })
      }
      if (object) return require.write([o]);
      throw new Error("ClipboardApi is not supported")
    }
    require.d(module, {
      copyToClipboard: () => object,
      getClipboard: () => state,
      writeImpl: () => nextValue,
      writePromiseUsingApi: () => a
    })