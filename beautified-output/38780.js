/**
 * Module 38780 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

38780: (e, t, i) => {
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
      l = 0;

    function c() {
      clearTimeout(r), clearTimeout(a), clearTimeout(l)
    }

    function h(e, t) {
      r = setTimeout(e, t)
    }
    const d = "tooltip-root-element";
    let u;

    function _() {
      const e = document.getElementById(d);
      e ? u = e : (u = document.createElement("div"), u.id = d, document.body.appendChild(u))
    }

    function p() {
      u && (u.innerHTML = "")
    }

    function m(e) {
      p(), u || _(), u.appendChild(e)
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

    function M(e) {
      const t = function(e) {
          const t = e.hasAttribute("data-tooltip") ? e.getAttribute("data-tooltip") : e.getAttribute("title");
          return t && ((0,
            T.setTooltipData)(e, "text", t), e.removeAttribute("title")), (0, T.getTooltipData)(e, "text") || ""
        }(e),
        i = e.getBoundingClientRect(),
        s = {
          h: i.height,
          w: i.width,
          x: i.left,
          y: i.top
        },
        o = e.getAttribute("data-color-theme") || "",
        n = e.classList.contains("common-tooltip-html"),
        r = parseInt(e.getAttribute("data-tooltip-delay") || ""),
        a = parseInt(e.getAttribute("data-tooltip-debounce") || "");
      let l = {
        type: "none"
      };
      return t && (l = {
        type: n ? "html" : "text",
        data: t
      }), {
        above: e.classList.contains("common-tooltip-above"),
        below: e.classList.contains("common-tooltip-below"),
        otl: e.classList.contains("common-tooltip-otl"),
        otr: e.classList.contains("common-tooltip-otr"),
        vertical: e.classList.contains("common-tooltip-vertical"),
        hotkey: e.getAttribute("data-tooltip-hotkey"),
        narrow: e.classList.contains("common-tooltip-narrow"),
        wide: e.classList.contains("common-tooltip-wide"),
        colorTheme: o,
        tooltipDelay: r,
        tooltipDebounce: a,
        rect: s,
        content: l,
        target: e
      }
    }

    function I(e) {
      const t = (0, o.ensureNotNull)(V).cloneNode(!0),
        i = O(t),
        {
          content: s
        } = e;
      switch (s.type) {
        case "element":
          i.innerHTML = "", i.appendChild(s.data);
          break;
        case "html":
          i.innerHTML = s.data;
          break;
        case "text":
          if (e.hotkey) {
            const e = (0, o.ensureNotNull)(N).cloneNode(!0);
            e.innerText = s.data, i.appendChild(e)
          } else i.innerText = s.data
      }
      if (e.hotkey) {
        const t = "none" !== s.type,
          n = (0, o.ensureNotNull)(R).cloneNode(!0),
          r = (0, P.hotKeyDeserialize)(e.hotkey),
          a = r.keys.map((e => `<span class="${x["common-tooltip__hotkey-button"]}">${e}</span>`));
        n.innerHTML = function(e, t) {
            const i = /{\d}|{hotkey_\d}/gi;
            return e.replace(i, (e => {
              const i = Number(e.match(/\d/));
              return t[i]
            }))
          }(r.text, a).replace(/\s\+\s/g, `<span class="${x["common-tooltip__plus-sign"]}">+</span>`), i.classList.add(
            x["common-tooltip__body--with-hotkey"]), t && n.classList.add(x["common-tooltip__hotkey-block--divider"]), i
          .appendChild(n)
      }
      return t.addEventListener("contextmenu", y.preventDefault), t
    }

    function A(e, t) {
      const i = t.rect;
      if (!i) return;
      ! function(e, t) {
        const i = w.includes(t) ? b[t] : "";
        e.classList.remove(...w.map((e => b[e])).filter((e => !!e))), i && !e.classList.contains(i) && e.classList.add(
          i)
      }(e, t.colorTheme || "default"), t.addClass && e.classList.add(t.addClass);
      const s = O(e),
        o = e.querySelector(`.${x["common-tooltip__button-container"]}`);
      s.classList.toggle(x["common-tooltip__body--width_wide"], Boolean(t.wide)), s.classList.toggle(x[
        "common-tooltip__body--no-padding"], Boolean(t.noPadding)), s.classList.toggle(x[
        "common-tooltip__body--width_narrow"], Boolean(t.narrow)), s.classList.toggle(x[
        "common-tooltip__body--no-buttons"], !0), s.style.left = k(0), s.style.width = k(s.clientWidth + (Boolean(t
        .noPadding) ? 0 : 2));
      const n = document.body.clientWidth,
        r = S.CheckMobile.iOS() || S.CheckMobile.Android() || (0, S.supportTouch)() && (0, S.isMac)() ? window
        .innerHeight : document.body.clientHeight,
        a = t.vertical,
        l = t.extendMargin || a && i.w < 20 || !a && i.h < 20;
      e.classList.toggle(x["common-tooltip--farther"], l), e.classList.toggle(x["common-tooltip--vertical"], a), e
        .classList.toggle(x["common-tooltip--horizontal"], !a);
      const c = function(e) {
          return e.querySelector(`.${x["common-tooltip__ear-holder"]}`)
        }(e),
        h = e.offsetHeight;
      if (a) {
        const a = 10,
          l = r - 10,
          d = 12,
          u = a + d,
          _ = l - d,
          p = (0,
            v.clamp)(i.y + i.h / 2, u, _) - h / 2,
          m = p + h;
        e.style.left = k(i.x + i.w), e.style.top = k(p), p < a ? s.style.top = o.style.top = k(a - p) : m > l && (s
          .style.top = o.style.top = k(l - m));
        const {
          right: g
        } = (e.querySelector(":last-child") || s).getBoundingClientRect(), y = g + 10 > n;
        e.classList.toggle(x["common-tooltip--direction_reversed"], y), e.classList.toggle(x[
          "common-tooltip--direction_normal"], !y);
        let S = y ? "after" : "before";
        (0, f.isRtl)() ? (S = t.otr ? "after" : S, S = t.otl ? "before" : S) : (S = t.otr ? "before" : S, S = t.otl ?
          "after" : S), c.classList.toggle(x["common-tooltip__ear-holder--before"], "before" === S), c.classList.toggle(
          x["common-tooltip__ear-holder--after"], "after" === S), "after" === S && (e.style.left = "auto", e.style
          .right = k(n - i.x))
      } else {
        const a = i.x - (s.offsetWidth - i.w) / 2,
          l = n - e.offsetWidth - 20 <= 0 ? (n - e.offsetWidth) / 2 : 10,
          d = n - l - e.offsetWidth,
          u = Math.max(l, Math.min(a, d));
        e.style.left = k(u);
        const _ = d < a;
        e.classList.toggle(x["common-tooltip--direction_reversed"], _), e.classList.toggle(x[
          "common-tooltip--direction_normal"], !_);
        const p = function(e, t, i, s) {
          if (e.above) return F(t, s) ? "above" : "below";
          if (e.below) return function(e, t, i) {
            return i.y + i.h + t + 10 < e
          }(t, i, s) ? "below" : "above";
          return F(i, s) ? "above" : "below"
        }(t, r, h, i);
        "above" === p ? e.style.bottom = k(r - i.y) : e.style.top = k(i.y + i.h), c.classList.add("above" === p ? x[
          "common-tooltip__ear-holder--above"] : x["common-tooltip__ear-holder--below"]);
        const {
          left: m
        } = s.getBoundingClientRect();
        let g = Math.trunc(i.x + i.w / 2 - (m + s.clientWidth / 2));
        e.style.left = k(u + g), e.style.width = k(s.clientWidth + o.clientWidth), g = _ ? Math.max(0, g) : Math.min(0,
          g), o.style.left = k(-g), s.style.left = k(-g)
      }
    }

    function L(e) {
      e.classList.toggle(x["common-tooltip--hidden"], !0)
    }

    function k(e) {
      return `${Math.floor(e)}px`
    }! function(e) {
      e[e.ViewportPadding = 10] = "ViewportPadding"
    }(C || (C = {}));
    const E =
      `\n\t<div id="common-tooltip-wrapper" class="${x["common-tooltip"]}">\n\t\t<div class="${x["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${x["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${x["common-tooltip__button-container"]}"></div>\n\t</div>\n`,
      D = `\n\t<div class="${x["common-tooltip__hotkey-block"]}"></div>\n`,
      B = `\n\t<div class="${x["common-tooltip__hotkey-text"]}"></div>\n`,
      V = (0, g.parseHtmlElement)(E),
      R = (0, g.parseHtmlElement)(D),
      N = (0, g.parseHtmlElement)(B);

    function O(e) {
      return e.querySelector(`.${x["common-tooltip__body"]}`)
    }

    function F(e, t) {
      return 10 + e < t.y
    }
    let W = !1,
      H = null,
      z = null;
    s.mobiletouch || (document.addEventListener("mouseover", q, !0), document.addEventListener("focus", (function(e) {
      const t = e.target;
      if (!(t instanceof HTMLElement && t.closest('[data-tooltip-show-on-focus="true"]') && t.matches(
          ":focus-visible"))) return;
      q(e, !0)
    }), {
      capture: !0
    }), document.addEventListener("active-descendant-focus", (function(e) {
      e.target instanceof HTMLElement && q(e, !0)
    }), {
      capture: !0
    }));
    const U = new MutationObserver((() => {
        if (H && H.options.target) {
          let e;
          e = "isConnected" in H.options.target ? H.options.target.isConnected : document.body.contains(H.options
            .target), e || K()
        }
      })),
      j = (e, t = {}) => {
        const {
          content: i,
          ...s
        } = X(t), o = M(e), n = Object.assign(o, s);
        return "none" !== i.type && (n.content = i),
          !("none" === n.content.type && !n.hotkey) && (n.target = e, G(n), !0)
      },
      G = e => {
        const t = X(e),
          i = I(t);
        if (H = {
            options: t,
            element: i
          }, m(i), c(), !W) return L(i), void h((() => Y(i)), function(e) {
          return "number" != typeof e.tooltipDelay || isNaN(e.tooltipDelay) ? 500 : e.tooltipDelay
        }(t));
        const {
          tooltipDebounce: s
        } = e;
        "number" != typeof s || isNaN(s) ? Y(i) : h((() => Y(i)), s)
      };

    function q(e, t) {
      if ("sourceCapabilities" in e && e.sourceCapabilities?.firesTouchEvents) return;
      const i = function(e, t, i) {
        const s = [];
        for (; e && e !== t;) e.classList && e.classList.contains(i) && s.push(e), e = e.parentElement || Z(e
          .parentNode);
        return s
      }(e.target, e.currentTarget, "apply-common-tooltip");
      for (const s of i) {
        if (e instanceof MouseEvent)
          if ("buttons" in e) {
            if (1 & e.buttons) continue
          } else if (1 === e.which) continue;
        const i = () => j(s);
        if (i()) {
          const e = e => o(null, !0),
            o = (n, r = !1) => {
              s.removeEventListener("common-tooltip-update", i), s.removeEventListener("mouseleave", o), s
                .removeEventListener("mousedown", o), document.removeEventListener("scroll", e, {
                  capture: !0
                }), t && (s.removeEventListener("blur", o), s.removeEventListener("active-descendant-blur", o)), z && (z
                  .destroy(), z = null), K(r)
            };
          s.addEventListener("common-tooltip-update", i), s.addEventListener("mouseleave", o), s.addEventListener(
            "mousedown", o), document.addEventListener("scroll", e, {
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
    const K = (e, t) => {
      if (c(), (0, o.ensureNotNull)(U).disconnect(), !H) return;
      if (!e && !W) return;
      const {
        element: i,
        options: s
      } = H, n = () => {
        i.removeEventListener("mouseleave", n), L(i), e ? $() : l = setTimeout((() => {
          $()
        }), 250), t?.()
      };
      var r, h;
      s.tooltipHideDelay ? (r = () => {
        i.querySelector(":hover") ? i.addEventListener("mouseleave", n) : n()
      }, h = s.tooltipHideDelay, a = setTimeout(r, h)) : n()
    };

    function Y(e) {
      const {
        options: t
      } = (0, o.ensureNotNull)(H);
      if (A(e, t), function(e) {
          e.classList.toggle(x["common-tooltip--hidden"], !1)
        }(e), (0, o.ensureNotNull)(U).observe(document, {
          childList: !0,
          subtree: !0
        }), W = !0, t.forceHideOnMove) {
        const e = () => {
          document.removeEventListener("mousemove", e), document.removeEventListener("touchmove", e), K()
        };
        document.addEventListener("mousemove", e), document.addEventListener("touchmove", e)
      }
    }

    function Z(e) {
      return e && (e.nodeType === Node.ELEMENT_NODE ? e : null)
    }

    function X(e) {
      if (function(e) {
          return "content" in e
        }(e)) return e;
      const {
        inner: t,
        html: i,
        text: s,
        ...o
      } = e;
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