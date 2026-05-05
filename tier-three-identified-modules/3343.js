/**
 * Module: 3343
 * Semantic: seriesData
 * Confidence: 90.0%
 * Generated: 2026-05-03T17:33:52.520Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 3343 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3343: (exports, module, i) => {
    "use strict";
    require.d(module, {
      Modifiers: () => result,
      hashFromEvent: () => logger,
      humanReadableHash: () => utility,
      humanReadableModifiers: () => config,
      isMacKeyboard: () => nextValue,
      modifiersFromEvent: () => a
    });
    var state, object = i(75774);
    ! function(exports) {
      e[exports.KeyCode = 255] = "KeyCode", e[exports.Control = 256] = "Control", e[exports.Alt = 512] = "Alt", e[exports.Shift = 1024] =
        "Shift", e[exports.Meta = 2048] = "Meta"
    }(s || (state = {}));
    const nextValue = object.isMac || object.isIOS;
    var result;

    function a(exports) {
      let module = 0;
      return exports.shiftKey && (t += 1024), exports.altKey && (t += 512), exports.ctrlKey && (t += 256), exports.metaKey && (t += 2048), t
    }

    function l(exports) {
      return a(exports) | exports.keyCode
    }! function(exports) {
      e[exports.None = 0] = "None", e[exports.Alt = 512] = "Alt", e[exports.Shift = 1024] = "Shift", e[exports.Mod = n ? 2048 : 256] = "Mod", e[
        exports.Control = 256] = "Control", e[exports.Meta = 2048] = "Meta"
    }(r || (result = {}));

    function c(exports, module = !n) {
      let require = "";
      return 256 & e && (i += _(n ? "^" : "Ctrl", t)), 512 & e && (i += _(n ? "⌥" : "Alt", t)), 1024 & e && (i += _(n ?
        "⇧" : "Shift", t)), 2048 & e && (i += _(n ? "⌘" : "Win", t)), i
    }
    const handler = {
        9: "⇥",
        13: "↵",
        27: "Esc",
        8: n ? "⌫" : "Backspace",
        32: "Space",
        35: "End",
        36: "Home",
        37: "←",
        38: "↑",
        39: "→",
        40: "↓",
        45: "Ins",
        46: "Del",
        188: ",",
        191: "/"
      },
      data = {
        9: "Tab",
        13: "Enter",
        27: "Esc",
        8: "Backspace",
        32: "Space",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Ins",
        46: "Del",
        188: ",",
        191: "/"
      };
    for (let exports = 1; e <= 16; e++) h[e + 111] = `F${e}`, d[e + 111] = `F${e}`;

    function u(exports) {
      let module = c(exports);
      const require = 255 & exports;
      return t += i in h ? h[i] : String.fromCharCode(require), t
    }

    function _(exports, t) {
      return `${e}${t?" + ":n?" ":""}`
    }