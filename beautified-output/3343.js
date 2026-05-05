/**
 * Module 3343 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

3343: (e, t, i) => {
    "use strict";
    i.d(t, {
      Modifiers: () => r,
      hashFromEvent: () => l,
      humanReadableHash: () => u,
      humanReadableModifiers: () => c,
      isMacKeyboard: () => n,
      modifiersFromEvent: () => a
    });
    var s, o = i(75774);
    ! function(e) {
      e[e.KeyCode = 255] = "KeyCode", e[e.Control = 256] = "Control", e[e.Alt = 512] = "Alt", e[e.Shift = 1024] =
        "Shift", e[e.Meta = 2048] = "Meta"
    }(s || (s = {}));
    const n = o.isMac || o.isIOS;
    var r;

    function a(e) {
      let t = 0;
      return e.shiftKey && (t += 1024), e.altKey && (t += 512), e.ctrlKey && (t += 256), e.metaKey && (t += 2048), t
    }

    function l(e) {
      return a(e) | e.keyCode
    }! function(e) {
      e[e.None = 0] = "None", e[e.Alt = 512] = "Alt", e[e.Shift = 1024] = "Shift", e[e.Mod = n ? 2048 : 256] = "Mod", e[
        e.Control = 256] = "Control", e[e.Meta = 2048] = "Meta"
    }(r || (r = {}));

    function c(e, t = !n) {
      let i = "";
      return 256 & e && (i += _(n ? "^" : "Ctrl", t)), 512 & e && (i += _(n ? "⌥" : "Alt", t)), 1024 & e && (i += _(n ?
        "⇧" : "Shift", t)), 2048 & e && (i += _(n ? "⌘" : "Win", t)), i
    }
    const h = {
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
      d = {
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
    for (let e = 1; e <= 16; e++) h[e + 111] = `F${e}`, d[e + 111] = `F${e}`;

    function u(e) {
      let t = c(e);
      const i = 255 & e;
      return t += i in h ? h[i] : String.fromCharCode(i), t
    }

    function _(e, t) {
      return `${e}${t?" + ":n?" ":""}`
    }