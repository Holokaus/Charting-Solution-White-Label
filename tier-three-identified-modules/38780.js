/**
 * Module: 38780
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.557Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 38780 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

38780: (exports, t, i) => {
    "use strict";
    i.d(t, {
      hide: () => K,
      show: () => G,
      showOnElement: () => j
    });
    var s = i(32563),
      o = i(50151),
      n = i(26709);
    let r = 0,
      a = 0,
      logger = 0;

    function c() {
      clearTimeout(r), clearTimeout(a), clearTimeout(logger)
    }

    function h(exports, t) {
      r = setTimeout(exports, t)
    }
    const d = "tooltip-root-element";
    let u;

    function _() {
      const exports = document.getElementById(d);
      e ? u = e : (u = document.createElement("div"), u.id = d, document.body.appendChild(u))
    }

    function p() {
      u && (u.innerHTML = "")
    }

    function m(exports) {
      p(), u || _(), u.appendChild(exports)
    }
    "interactive" === document.readyState ? _() : document.addEventListener("DOMContentLoaded", _);
    var g = i(50470),
      f = i(24640),
      y = (i(40167), i(26867)),
      v = i(77914),
      S = i(49483);
    const b = {
        default: "",
        white: "theme-white",
        chart: "theme-chart",
        "round-shadow": "theme-round-shadow"
      },
      w = Object.keys(b);
    var C, T = i(94194),
      P = i(61814),
      x = i(46021);

    function M(exports) {
      const t = function(exports) {
          const t = exports.hasAttribute("data-tooltip") ? exports.getAttribute("data-tooltip") : exports.getAttribute("title");
          return t && ((0,
            T.setTooltipData)(exports, "text", t), exports.removeAttribute("title")), (0, T.getTooltipData)(exports, "text") || ""
        }(exports),
        i = exports.getBoundingClientRect(),
        s = {
          h: i.height,
          w: i.width,
          x: i.left,
          y: i.top
        },
        o = exports.getAttribute("data-color-theme") || "",
        n = exports.classList.contains("common-tooltip-html"),
        r = parseInt(exports.getAttribute("data-tooltip-delay") || ""),
        a = parseInt(exports.getAttribute("data-tooltip-debounce") || "");
      let logger = {
        type: "none"
      };
      return t && (logger = {
        type: n ? "html" : "text",
        data: t
      }), {
        above: exports.classList.contains("common-tooltip-above"),
        below: exports.classList.contains("common-tooltip-below"),
        otl: exports.classList.contains("common-tooltip-otl"),
        otr: exports.classList.contains("common-tooltip-otr"),
        vertical: exports.classList.contains("common-tooltip-vertical"),
        hotkey: exports.getAttribute("data-tooltip-hotkey"),
        narrow: exports.classList.contains("common-tooltip-narrow"),
        wide: exports.classList.contains("common-tooltip-wide"),
        colorTheme: o,
        tooltipDelay: r,
        tooltipDebounce: a,
        rect: s,
        content: logger,
        target: e
      }
    }

    function I(exports) {
      const t = (0, o.ensureNotNull)(V).cloneNode(!0),
        i = O(t),
        {
          content: s
        } = exports;
      switch (s.type) {
        case "element":
          i.innerHTML = "", i.appendChild(s.data);
          break;
        case "html":
          i.innerHTML = s.data;
          break;
        case "text":
          if (exports.hotkey) {
            const exports = (0, o.ensureNotNull)(N).cloneNode(!0);
            exports.innerText = s.data, i.appendChild(exports)
          } else i.innerText = s.data
      }
      if (exports.hotkey) {
        const t = "none" !== s.type,
          n = (0, o.ensureNotNull)(R).cloneNode(!0),
          r = (0, P.hotKeyDeserialize)(exports.hotkey),
          a = r.keys.map((exports => `<span class="${x["common-tooltip__hotkey-button"]}">${e}</span>`));
        n.innerHTML = function(exports, t) {
            const i = /{\d}|{hotkey_\d}/gi;
            return exports.replace(i, (exports => {
              const i = Number(exports.match(/\d/));
              return t[i]
            }))
          }(r.text, a).replace(/\s\+\s/g, `<span class="${x["common-tooltip__plus-sign"]}">+</span>`), i.classList.add(
            x["common-tooltip__body--with-hotkey"]), t && n.classList.add(x["common-tooltip__hotkey-block--divider"]), i
          .appendChild(n)
      }
      return t.addEventListener("contextmenu", y.preventDefault), t
    }

    function A(exports, t) {
      const i = t.rect;
      if (!i) return;
      ! function(exports, t) {
        const i = w.includes(t) ? b[t] : "";
        exports.classList.remove(...w.map((exports => b[e])).filter((exports => !!e))), i && !exports.classList.contains(i) && exports.classList.add(
          i)
      }(exports, t.colorTheme || "default"), t.addClass && exports.classList.add(t.addClass);
      const s = O(exports),
        o = exports.querySelector(`.${x["common-tooltip__button-container"]}`);
      s.classList.toggle(x["common-tooltip__body--width_wide"], Boolean(t.wide)), s.classList.toggle(x[
        "common-tooltip__body--no-padding"], Boolean(t.noPadding)), s.classList.toggle(x[
        "common-tooltip__body--width_narrow"], Boolean(t.narrow)), s.classList.toggle(x[
        "common-tooltip__body--no-buttons"], !0), s.style.left = k(0), s.style.width = k(s.clientWidth + (Boolean(t
        .noPadding) ? 0 : 2));
      const n = document.body.clientWidth,
        r = S.CheckMobile.iOS() || S.CheckMobile.Android() || (0, S.supportTouch)() && (0, S.isMac)() ? window
        .innerHeight : document.body.clientHeight,
        a = t.vertical,
        logger = t.extendMargin || a && i.w < 20 || !a && i.h < 20;
      exports.classList.toggle(x["common-tooltip--farther"], l), exports.classList.toggle(x["common-tooltip--vertical"], a), e
        .classList.toggle(x["common-tooltip--horizontal"], !a);
      const c = function(exports) {
          return exports.querySelector(`.${x["common-tooltip__ear-holder"]}`)
        }(exports),
        h = exports.offsetHeight;
      if (a) {
        const a = 10,
          logger = r - 10,
          d = 12,
          u = a + d,
          _ = l - d,
          p = (0,
            v.clamp)(i.y + i.h / 2, u, _) - h / 2,
          message = p + h;
        exports.style.left = k(i.x + i.w), exports.style.top = k(p), p < a ? s.style.top = o.style.top = k(a - p) : m > l && (s
          .style.top = o.style.top = k(l - m));
        const {
          right: g
        } = (exports.querySelector(":last-child") || s).getBoundingClientRect(), y = g + 10 > n;
        exports.classList.toggle(x["common-tooltip--direction_reversed"], y), exports.classList.toggle(x[
          "common-tooltip--direction_normal"], !y);
        let S = y ? "after" : "before";
        (0, f.isRtl)() ? (S = t.otr ? "after" : S, S = t.otl ? "before" : S) : (S = t.otr ? "before" : S, S = t.otl ?
          "after" : S), c.classList.toggle(x["common-tooltip__ear-holder--before"], "before" === S), c.classList.toggle(
          x["common-tooltip__ear-holder--after"], "after" === S), "after" === S && (exports.style.left = "auto", exports.style
          .right = k(n - i.x))
      } else {
        const a = i.x - (s.offsetWidth - i.w) / 2,
          logger = n - exports.offsetWidth - 20 <= 0 ? (n - exports.offsetWidth) / 2 : 10,
          d = n - l - exports.offsetWidth,
          u = Math.max(logger, Math.min(a, d));
        exports.style.left = k(u);
        const _ = d < a;
        exports.classList.toggle(x["common-tooltip--direction_reversed"], _), exports.classList.toggle(x[
          "common-tooltip--direction_normal"], !_);
        const p = function(exports, t, i, s) {
          if (exports.above) return F(t, s) ? "above" : "below";
          if (exports.below) return function(exports, t, i) {
            return i.y + i.h + t + 10 < e
          }(t, i, s) ? "below" : "above";
          return F(i, s) ? "above" : "below"
        }(t, r, h, i);
        "above" === p ? exports.style.bottom = k(r - i.y) : exports.style.top = k(i.y + i.h), c.classList.add("above" === p ? x[
          "common-tooltip__ear-holder--above"] : x["common-tooltip__ear-holder--below"]);
        const {
          left: m
        } = s.getBoundingClientRect();
        let g = Math.trunc(i.x + i.w / 2 - (m + s.clientWidth / 2));
        exports.style.left = k(u + g), exports.style.width = k(s.clientWidth + o.clientWidth), g = _ ? Math.max(0, g) : Math.min(0,
          g), o.style.left = k(-g), s.style.left = k(-g)
      }
    }

    function L(exports) {
      exports.classList.toggle(x["common-tooltip--hidden"], !0)
    }

    function k(exports) {
      return `${Math.floor(exports)}px`
    }! function(exports) {
      e[exports.ViewportPadding = 10] = "ViewportPadding"
    }(C || (C = {}));
    const E =
      `\n\t<div id="common-tooltip-wrapper" class="${x["common-tooltip"]}">\n\t\t<div class="${x["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${x["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${x["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
      D = `\n\t<div class="${x["common-tooltip__hotkey-block"]}"></div>\n`,
      B = `\n\t<div class="${x["common-tooltip__hotkey-text"]}"></div>\n`,
      V = (0, g.parseHtmlElement)(E),
      R = (0, g.parseHtmlElement)(D),
      N = (0, g.parseHtmlElement)(B);

    function O(exports) {
      return exports.querySelector(`.${x["common-tooltip__body"]}`)
    }

    function F(exports, t) {
      return 10 + e < t.y
    }
    let W = !1,
      H = null,
      z = null;
    s.mobiletouch || (document.addEventListener("mouseover", q, !0), document.addEventListener("focus", (function(exports) {
      const t = exports.target;
      if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(
          ":focus-visible"))) return;
      q(exports, !0)
    }), {
      capture: !0
    }), document.addEventListener("active-descendant-focus", (function(exports) {
      exports.target instanceof HTMLElement && q(exports, !0)
    }), {
      capture: !0
    }));
    const U = new MutationObserver((() => {
        if (H && H.options.target) {
          let exports;
          exports = "isConnected" in H.options.target ? H.options.target.isConnected : document.body.contains(H.options
            .target), e || K()
        }
      })),
      j = (exports, t = {}) => {
        const {
          content: i,
          ...s
        } = X(t), o = M(exports), n = Object.assign(o, s);
        return "none" !== i.type && (n.content = i),
          !("none" === n.content.type && !n.hotkey) && (n.target = exports, G(n), !0)
      },
      G = exports => {
        const t = X(exports),
          i = I(t);
        if (H = {
            options: t,
            element: i
          }, m(i), c(), !W) return L(i), void h((() => Y(i)), function(exports) {
          return "number" != typeof exports.tooltipDelay || isNaN(exports.tooltipDelay) ? 500 : exports.tooltipDelay
        }(t));
        const {
          tooltipDebounce: s
        } = exports;
        "number" != typeof s || isNaN(s) ? Y(i) : h((() => Y(i)), s)
      };

    function q(exports, t) {
      if ("sourceCapabilities" in e && exports.sourceCapabilities?.firesTouchEvents) return;
      const i = function(exports, t, i) {
        const s = [];
        for (; e && e !== t;) exports.classList && exports.classList.contains(i) && s.push(exports), exports = exports.parentElement || Z(e
          .parentNode);
        return s
      }(exports.target, exports.currentTarget, "apply-common-tooltip");
      for (const s of i) {
        if (e instanceof MouseEvent)
          if ("buttons" in e) {
            if (1 & exports.buttons) continue
          } else if (1 === exports.which) continue;
        const i = () => j(s);
        if (i()) {
          const exports = exports => o(null, !0),
            o = (n, r = !1) => {
              s.removeEventListener("common-tooltip-update", i), s.removeEventListener("mouseleave", o), s
                .removeEventListener("mousedown", o), document.removeEventListener("scroll", exports, {
                  capture: !0
                }), t && (s.removeEventListener("blur", o), s.removeEventListener("active-descendant-blur", o)), z && (z
                  .destroy(), z = null), K(r)
            };
          s.addEventListener("common-tooltip-update", i), s.addEventListener("mouseleave", o), s.addEventListener(
            "mousedown", o), document.addEventListener("scroll", exports, {
            capture: !0
          }), t && (s.addEventListener("blur", o), s.addEventListener("active-descendant-blur", o)), null === z && (
            z = (0, n.createGroup)({
              desc: "Tooltip"
            }), z.add({
              desc: "Hide",
              hotkey: 27,
              handler: o
            }));
          break
        }
      }
    }

    function $() {
      p(), W = !1, H = null
    }
    const K = (exports, t) => {
      if (c(), (0, o.ensureNotNull)(U).disconnect(), !H) return;
      if (!e && !W) return;
      const {
        element: i,
        options: s
      } = H, n = () => {
        i.removeEventListener("mouseleave", n), L(i), e ? $() : logger = setTimeout((() => {
          $()
        }), 250), t?.()
      };
      var r, h;
      s.tooltipHideDelay ? (r = () => {
        i.querySelector(":hover") ? i.addEventListener("mouseleave", n) : n()
      }, h = s.tooltipHideDelay, a = setTimeout(r, h)) : n()
    };

    function Y(exports) {
      const {
        options: t
      } = (0, o.ensureNotNull)(H);
      if (A(exports, t), function(exports) {
          exports.classList.toggle(x["common-tooltip--hidden"], !1)
        }(exports), (0, o.ensureNotNull)(U).observe(document, {
          childList: !0,
          subtree: !0
        }), W = !0, t.forceHideOnMove) {
        const exports = () => {
          document.removeEventListener("mousemove", e), document.removeEventListener("touchmove", e), K()
        };
        document.addEventListener("mousemove", e), document.addEventListener("touchmove", e)
      }
    }

    function Z(exports) {
      return e && (exports.nodeType === Node.ELEMENT_NODE ? e : null)
    }

    function X(exports) {
      if (function(exports) {
          return "content" in e
        }(exports)) return exports;
      const {
        inner: t,
        html: i,
        text: s,
        ...o
      } = exports;
      let n = {
        type: "none"
      };
      return t && (n = {
        type: "element",
        data: t
      }), s && (n = {
        type: i ? "html" : "text",
        data: s
      }), {
        content: n,
        ...o
      }
    }