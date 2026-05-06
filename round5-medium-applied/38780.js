/**
 * Module 38780 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

38780: (watchedValue_e, watchedValue_t, i) => {
    "use strict";
    i.d(watchedValue_t, {
      hide: () => K,
      show: () => G,
      showOnElement: () => j
    });
    var watchedValue_s = i(32563),
      o = i(50151),
      watchedValue_n = i(26709);
    let r = 0,
      watchedValue_a = 0,
      l = 0;

    function c() {
      clearTimeout(r), clearTimeout(watchedValue_a), clearTimeout(l)
    }

    function h(watchedValue_e, watchedValue_t) {
      r = setTimeout(watchedValue_e, watchedValue_t)
    }
    const d = "tooltip-root-element";
    let u;

    function _() {
      const watchedValue_e = document.getElementById(d);
      watchedValue_e ? u = watchedValue_e : (u = document.createElement("div"), u.id = d, document.body.appendChild(u))
    }

    function p() {
      u && (u.innerHTML = "")
    }

    function m(watchedValue_e) {
      p(), u || _(), u.appendChild(watchedValue_e)
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

    function M(watchedValue_e) {
      const watchedValue_t = function(watchedValue_e) {
          const watchedValue_t = watchedValue_e.hasAttribute("data-tooltip") ? watchedValue_e.getAttribute("data-tooltip") : watchedValue_e.getAttribute("title");
          return watchedValue_t && ((0,
            T.setTooltipData)(watchedValue_e, "text", watchedValue_t), watchedValue_e.removeAttribute("title")), (0, T.getTooltipData)(watchedValue_e, "text") || ""
        }(watchedValue_e),
        i = watchedValue_e.getBoundingClientRect(),
        watchedValue_s = {
          h: i.height,
          w: i.width,
          x: i.left,
          y: i.top
        },
        o = watchedValue_e.getAttribute("data-color-theme") || "",
        watchedValue_n = watchedValue_e.classList.contains("common-tooltip-html"),
        r = parseInt(watchedValue_e.getAttribute("data-tooltip-delay") || ""),
        watchedValue_a = parseInt(watchedValue_e.getAttribute("data-tooltip-debounce") || "");
      let l = {
        type: "none"
      };
      return watchedValue_t && (l = {
        type: watchedValue_n ? "html" : "text",
        data: watchedValue_t
      }), {
        above: watchedValue_e.classList.contains("common-tooltip-above"),
        below: watchedValue_e.classList.contains("common-tooltip-below"),
        otl: watchedValue_e.classList.contains("common-tooltip-otl"),
        otr: watchedValue_e.classList.contains("common-tooltip-otr"),
        vertical: watchedValue_e.classList.contains("common-tooltip-vertical"),
        hotkey: watchedValue_e.getAttribute("data-tooltip-hotkey"),
        narrow: watchedValue_e.classList.contains("common-tooltip-narrow"),
        wide: watchedValue_e.classList.contains("common-tooltip-wide"),
        colorTheme: o,
        tooltipDelay: r,
        tooltipDebounce: watchedValue_a,
        rect: watchedValue_s,
        content: l,
        target: watchedValue_e
      }
    }

    function I(watchedValue_e) {
      const watchedValue_t = (0, o.ensureNotNull)(V).cloneNode(!0),
        i = O(watchedValue_t),
        {
          content: watchedValue_s
        } = watchedValue_e;
      switch (watchedValue_s.type) {
        case "element":
          i.innerHTML = "", i.appendChild(watchedValue_s.data);
          break;
        case "html":
          i.innerHTML = watchedValue_s.data;
          break;
        case "text":
          if (watchedValue_e.hotkey) {
            const watchedValue_e = (0, o.ensureNotNull)(N).cloneNode(!0);
            watchedValue_e.innerText = watchedValue_s.data, i.appendChild(watchedValue_e)
          } else i.innerText = watchedValue_s.data
      }
      if (watchedValue_e.hotkey) {
        const watchedValue_t = "none" !== watchedValue_s.type,
          watchedValue_n = (0, o.ensureNotNull)(R).cloneNode(!0),
          r = (0, P.hotKeyDeserialize)(watchedValue_e.hotkey),
          watchedValue_a = r.keys.map((watchedValue_e => `<span class="${x["common-tooltip__hotkey-button"]}">${watchedValue_e}</span>`));
        watchedValue_n.innerHTML = function(watchedValue_e, watchedValue_t) {
            const i = /{\d}|{hotkey_\d}/gi;
            return watchedValue_e.replace(i, (watchedValue_e => {
              const i = Number(watchedValue_e.match(/\d/));
              return watchedValue_t[i]
            }))
          }(r.text, watchedValue_a).replace(/\watchedValue_s\+\watchedValue_s/g, `<span class="${x["common-tooltip__plus-sign"]}">+</span>`), i.classList.add(
            x["common-tooltip__body--with-hotkey"]), watchedValue_t && watchedValue_n.classList.add(x["common-tooltip__hotkey-block--divider"]), i
          .appendChild(watchedValue_n)
      }
      return watchedValue_t.addEventListener("contextmenu", y.preventDefault), watchedValue_t
    }

    function A(watchedValue_e, watchedValue_t) {
      const i = watchedValue_t.rect;
      if (!i) return;
      ! function(watchedValue_e, watchedValue_t) {
        const i = w.includes(watchedValue_t) ? b[watchedValue_t] : "";
        watchedValue_e.classList.remove(...w.map((watchedValue_e => b[watchedValue_e])).filter((watchedValue_e => !!watchedValue_e))), i && !watchedValue_e.classList.contains(i) && watchedValue_e.classList.add(
          i)
      }(watchedValue_e, watchedValue_t.colorTheme || "default"), watchedValue_t.addClass && watchedValue_e.classList.add(watchedValue_t.addClass);
      const watchedValue_s = O(watchedValue_e),
        o = watchedValue_e.querySelector(`.${x["common-tooltip__button-container"]}`);
      watchedValue_s.classList.toggle(x["common-tooltip__body--width_wide"], Boolean(watchedValue_t.wide)), watchedValue_s.classList.toggle(x[
        "common-tooltip__body--no-padding"], Boolean(watchedValue_t.noPadding)), watchedValue_s.classList.toggle(x[
        "common-tooltip__body--width_narrow"], Boolean(watchedValue_t.narrow)), watchedValue_s.classList.toggle(x[
        "common-tooltip__body--no-buttons"], !0), watchedValue_s.style.left = k(0), watchedValue_s.style.width = k(watchedValue_s.clientWidth + (Boolean(watchedValue_t
        .noPadding) ? 0 : 2));
      const watchedValue_n = document.body.clientWidth,
        r = S.CheckMobile.iOS() || S.CheckMobile.Android() || (0, S.supportTouch)() && (0, S.isMac)() ? window
        .innerHeight : document.body.clientHeight,
        watchedValue_a = watchedValue_t.vertical,
        l = watchedValue_t.extendMargin || watchedValue_a && i.w < 20 || !watchedValue_a && i.h < 20;
      watchedValue_e.classList.toggle(x["common-tooltip--farther"], l), watchedValue_e.classList.toggle(x["common-tooltip--vertical"], watchedValue_a), watchedValue_e
        .classList.toggle(x["common-tooltip--horizontal"], !watchedValue_a);
      const c = function(watchedValue_e) {
          return watchedValue_e.querySelector(`.${x["common-tooltip__ear-holder"]}`)
        }(watchedValue_e),
        h = watchedValue_e.offsetHeight;
      if (watchedValue_a) {
        const watchedValue_a = 10,
          l = r - 10,
          d = 12,
          u = watchedValue_a + d,
          _ = l - d,
          p = (0,
            v.clamp)(i.y + i.h / 2, u, _) - h / 2,
          m = p + h;
        watchedValue_e.style.left = k(i.x + i.w), watchedValue_e.style.top = k(p), p < watchedValue_a ? watchedValue_s.style.top = o.style.top = k(watchedValue_a - p) : m > l && (watchedValue_s
          .style.top = o.style.top = k(l - m));
        const {
          right: g
        } = (watchedValue_e.querySelector(":last-child") || watchedValue_s).getBoundingClientRect(), y = g + 10 > watchedValue_n;
        watchedValue_e.classList.toggle(x["common-tooltip--direction_reversed"], y), watchedValue_e.classList.toggle(x[
          "common-tooltip--direction_normal"], !y);
        let S = y ? "after" : "before";
        (0, f.isRtl)() ? (S = watchedValue_t.otr ? "after" : S, S = watchedValue_t.otl ? "before" : S) : (S = watchedValue_t.otr ? "before" : S, S = watchedValue_t.otl ?
          "after" : S), c.classList.toggle(x["common-tooltip__ear-holder--before"], "before" === S), c.classList.toggle(
          x["common-tooltip__ear-holder--after"], "after" === S), "after" === S && (watchedValue_e.style.left = "auto", watchedValue_e.style
          .right = k(watchedValue_n - i.x))
      } else {
        const watchedValue_a = i.x - (watchedValue_s.offsetWidth - i.w) / 2,
          l = watchedValue_n - watchedValue_e.offsetWidth - 20 <= 0 ? (watchedValue_n - watchedValue_e.offsetWidth) / 2 : 10,
          d = watchedValue_n - l - watchedValue_e.offsetWidth,
          u = Math.max(l, Math.min(watchedValue_a, d));
        watchedValue_e.style.left = k(u);
        const _ = d < watchedValue_a;
        watchedValue_e.classList.toggle(x["common-tooltip--direction_reversed"], _), watchedValue_e.classList.toggle(x[
          "common-tooltip--direction_normal"], !_);
        const p = function(watchedValue_e, watchedValue_t, i, watchedValue_s) {
          if (watchedValue_e.above) return F(watchedValue_t, watchedValue_s) ? "above" : "below";
          if (watchedValue_e.below) return function(watchedValue_e, watchedValue_t, i) {
            return i.y + i.h + watchedValue_t + 10 < watchedValue_e
          }(watchedValue_t, i, watchedValue_s) ? "below" : "above";
          return F(i, watchedValue_s) ? "above" : "below"
        }(watchedValue_t, r, h, i);
        "above" === p ? watchedValue_e.style.bottom = k(r - i.y) : watchedValue_e.style.top = k(i.y + i.h), c.classList.add("above" === p ? x[
          "common-tooltip__ear-holder--above"] : x["common-tooltip__ear-holder--below"]);
        const {
          left: m
        } = watchedValue_s.getBoundingClientRect();
        let g = Math.trunc(i.x + i.w / 2 - (m + watchedValue_s.clientWidth / 2));
        watchedValue_e.style.left = k(u + g), watchedValue_e.style.width = k(watchedValue_s.clientWidth + o.clientWidth), g = _ ? Math.max(0, g) : Math.min(0,
          g), o.style.left = k(-g), watchedValue_s.style.left = k(-g)
      }
    }

    function L(watchedValue_e) {
      watchedValue_e.classList.toggle(x["common-tooltip--hidden"], !0)
    }

    function k(watchedValue_e) {
      return `${Math.floor(watchedValue_e)}px`
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.ViewportPadding = 10] = "ViewportPadding"
    }(C || (C = {}));
    const E =
      `\watchedValue_n\watchedValue_t<div id="common-tooltip-wrapper" class="${x["common-tooltip"]}">\watchedValue_n\watchedValue_t\watchedValue_t<div class="${x["common-tooltip__ear-holder"]}" >\watchedValue_n\watchedValue_t\watchedValue_t\watchedValue_t<div class="${x["common-tooltip__body"]} js-tooltip-body"></div>\watchedValue_n\watchedValue_t\watchedValue_t</div>\watchedValue_n\watchedValue_t\watchedValue_t<div class="${x["common-tooltip__button-container"]}"></div>\watchedValue_n\watchedValue_t</div>\watchedValue_n`,
      D = `\watchedValue_n\watchedValue_t<div class="${x["common-tooltip__hotkey-block"]}"></div>\watchedValue_n`,
      B = `\watchedValue_n\watchedValue_t<div class="${x["common-tooltip__hotkey-text"]}"></div>\watchedValue_n`,
      V = (0, g.parseHtmlElement)(E),
      R = (0, g.parseHtmlElement)(D),
      N = (0, g.parseHtmlElement)(B);

    function O(watchedValue_e) {
      return watchedValue_e.querySelector(`.${x["common-tooltip__body"]}`)
    }

    function F(watchedValue_e, watchedValue_t) {
      return 10 + watchedValue_e < watchedValue_t.y
    }
    let W = !1,
      H = null,
      z = null;
    watchedValue_s.mobiletouch || (document.addEventListener("mouseover", q, !0), document.addEventListener("focus", (function(watchedValue_e) {
      const watchedValue_t = watchedValue_e.target;
      if (!(watchedValue_t instanceof HTMLElement && watchedValue_t.closest('[data-tooltip-show-on-focus="true"]') && watchedValue_t.matches(
          ":focus-visible"))) return;
      q(watchedValue_e, !0)
    }), {
      capture: !0
    }), document.addEventListener("active-descendant-focus", (function(watchedValue_e) {
      watchedValue_e.target instanceof HTMLElement && q(watchedValue_e, !0)
    }), {
      capture: !0
    }));
    const U = new MutationObserver((() => {
        if (H && H.options.target) {
          let watchedValue_e;
          watchedValue_e = "isConnected" in H.options.target ? H.options.target.isConnected : document.body.contains(H.options
            .target), watchedValue_e || K()
        }
      })),
      j = (watchedValue_e, watchedValue_t = {}) => {
        const {
          content: i,
          ...watchedValue_s
        } = X(watchedValue_t), o = M(watchedValue_e), watchedValue_n = Object.assign(o, watchedValue_s);
        return "none" !== i.type && (watchedValue_n.content = i),
          !("none" === watchedValue_n.content.type && !watchedValue_n.hotkey) && (watchedValue_n.target = watchedValue_e, G(watchedValue_n), !0)
      },
      G = watchedValue_e => {
        const watchedValue_t = X(watchedValue_e),
          i = I(watchedValue_t);
        if (H = {
            options: watchedValue_t,
            element: i
          }, m(i), c(), !W) return L(i), void h((() => Y(i)), function(watchedValue_e) {
          return "number" != typeof watchedValue_e.tooltipDelay || isNaN(watchedValue_e.tooltipDelay) ? 500 : watchedValue_e.tooltipDelay
        }(watchedValue_t));
        const {
          tooltipDebounce: watchedValue_s
        } = watchedValue_e;
        "number" != typeof watchedValue_s || isNaN(watchedValue_s) ? Y(i) : h((() => Y(i)), watchedValue_s)
      };

    function q(watchedValue_e, watchedValue_t) {
      if ("sourceCapabilities" in watchedValue_e && watchedValue_e.sourceCapabilities?.firesTouchEvents) return;
      const i = function(watchedValue_e, watchedValue_t, i) {
        const watchedValue_s = [];
        for (; watchedValue_e && watchedValue_e !== watchedValue_t;) watchedValue_e.classList && watchedValue_e.classList.contains(i) && watchedValue_s.push(watchedValue_e), watchedValue_e = watchedValue_e.parentElement || Z(watchedValue_e
          .parentNode);
        return watchedValue_s
      }(watchedValue_e.target, watchedValue_e.currentTarget, "apply-common-tooltip");
      for (const watchedValue_s of i) {
        if (watchedValue_e instanceof MouseEvent)
          if ("buttons" in watchedValue_e) {
            if (1 & watchedValue_e.buttons) continue
          } else if (1 === watchedValue_e.which) continue;
        const i = () => j(watchedValue_s);
        if (i()) {
          const watchedValue_e = watchedValue_e => o(null, !0),
            o = (watchedValue_n, r = !1) => {
              watchedValue_s.removeEventListener("common-tooltip-update", i), watchedValue_s.removeEventListener("mouseleave", o), watchedValue_s
                .removeEventListener("mousedown", o), document.removeEventListener("scroll", watchedValue_e, {
                  capture: !0
                }), watchedValue_t && (watchedValue_s.removeEventListener("blur", o), watchedValue_s.removeEventListener("active-descendant-blur", o)), z && (z
                  .destroy(), z = null), K(r)
            };
          watchedValue_s.addEventListener("common-tooltip-update", i), watchedValue_s.addEventListener("mouseleave", o), watchedValue_s.addEventListener(
            "mousedown", o), document.addEventListener("scroll", watchedValue_e, {
            capture: !0
          }), watchedValue_t && (watchedValue_s.addEventListener("blur", o), watchedValue_s.addEventListener("active-descendant-blur", o)), null === z && (
            z = (0, watchedValue_n.createGroup)({
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
    const K = (watchedValue_e, watchedValue_t) => {
      if (c(), (0, o.ensureNotNull)(U).disconnect(), !H) return;
      if (!watchedValue_e && !W) return;
      const {
        element: i,
        options: watchedValue_s
      } = H, watchedValue_n = () => {
        i.removeEventListener("mouseleave", watchedValue_n), L(i), watchedValue_e ? $() : l = setTimeout((() => {
          $()
        }), 250), watchedValue_t?.()
      };
      var r, h;
      watchedValue_s.tooltipHideDelay ? (r = () => {
        i.querySelector(":hover") ? i.addEventListener("mouseleave", watchedValue_n) : watchedValue_n()
      }, h = watchedValue_s.tooltipHideDelay, watchedValue_a = setTimeout(r, h)) : watchedValue_n()
    };

    function Y(watchedValue_e) {
      const {
        options: watchedValue_t
      } = (0, o.ensureNotNull)(H);
      if (A(watchedValue_e, watchedValue_t), function(watchedValue_e) {
          watchedValue_e.classList.toggle(x["common-tooltip--hidden"], !1)
        }(watchedValue_e), (0, o.ensureNotNull)(U).observe(document, {
          childList: !0,
          subtree: !0
        }), W = !0, watchedValue_t.forceHideOnMove) {
        const watchedValue_e = () => {
          document.removeEventListener("mousemove", watchedValue_e), document.removeEventListener("touchmove", watchedValue_e), K()
        };
        document.addEventListener("mousemove", watchedValue_e), document.addEventListener("touchmove", watchedValue_e)
      }
    }

    function Z(watchedValue_e) {
      return watchedValue_e && (watchedValue_e.nodeType === Node.ELEMENT_NODE ? watchedValue_e : null)
    }

    function X(watchedValue_e) {
      if (function(watchedValue_e) {
          return "content" in watchedValue_e
        }(watchedValue_e)) return watchedValue_e;
      const {
        inner: watchedValue_t,
        html: i,
        text: watchedValue_s,
        ...o
      } = watchedValue_e;
      let watchedValue_n = {
        type: "none"
      };
      return watchedValue_t && (watchedValue_n = {
        type: "element",
        data: watchedValue_t
      }), watchedValue_s && (watchedValue_n = {
        type: i ? "html" : "text",
        data: watchedValue_s
      }), {
        content: watchedValue_n,
        ...o
      }
    }