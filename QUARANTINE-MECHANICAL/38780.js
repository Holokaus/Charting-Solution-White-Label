/**
 * Module 38780 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

38780: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      hide: () => K,
      show: () => G,
      showOnElement: () => watchedValue_j
    });
    var watchedValue_s = watchedValue_i(32563),
      watchedValue_o = watchedValue_i(50151),
      watchedValue_n = watchedValue_i(26709);
    let watchedValue_r = 0,
      watchedValue_a = 0,
      watchedValue_l = 0;

    function watchedValue_c() {
      clearTimeout(watchedValue_r), clearTimeout(watchedValue_a), clearTimeout(watchedValue_l)
    }

    function watchedValue_h(watchedValue_e, watchedValue_t) {
      watchedValue_r = setTimeout(watchedValue_e, watchedValue_t)
    }
    const watchedValue_d = "tooltip-root-element";
    let watchedValue_u;

    function _() {
      const watchedValue_e = document.getElementById(watchedValue_d);
      watchedValue_e ? watchedValue_u = watchedValue_e : (watchedValue_u = document.createElement("div"), watchedValue_u.id = watchedValue_d, document.body.appendChild(watchedValue_u))
    }

    function watchedValue_p() {
      watchedValue_u && (watchedValue_u.innerHTML = "")
    }

    function watchedValue_m(watchedValue_e) {
      watchedValue_p(), watchedValue_u || _(), watchedValue_u.appendChild(watchedValue_e)
    }
    "interactive" === document.readyState ? _() : document.addEventListener("DOMContentLoaded", _);
    var watchedValue_g = watchedValue_i(50470),
      watchedValue_f = watchedValue_i(24640),
      watchedValue_y = (watchedValue_i(40167), watchedValue_i(26867)),
      watchedValue_v = watchedValue_i(77914),
      S = watchedValue_i(49483);
    const watchedValue_b = {
        default: "",
        white: "theme-white",
        chart: "theme-chart",
        "round-shadow": "theme-round-shadow"
      },
      watchedValue_w = Object.keys(watchedValue_b);
    var C, T = watchedValue_i(94194),
      P = watchedValue_i(61814),
      watchedValue_x = watchedValue_i(46021);

    function M(watchedValue_e) {
      const watchedValue_t = function(watchedValue_e) {
          const watchedValue_t = watchedValue_e.hasAttribute("data-tooltip") ? watchedValue_e.getAttribute("data-tooltip") : watchedValue_e.getAttribute("title");
          return watchedValue_t && ((0,
            T.setTooltipData)(watchedValue_e, "text", watchedValue_t), watchedValue_e.removeAttribute("title")), (0, T.getTooltipData)(watchedValue_e, "text") || ""
        }(watchedValue_e),
        watchedValue_i = watchedValue_e.getBoundingClientRect(),
        watchedValue_s = {
          watchedValue_h: watchedValue_i.height,
          watchedValue_w: watchedValue_i.width,
          watchedValue_x: watchedValue_i.left,
          watchedValue_y: watchedValue_i.top
        },
        watchedValue_o = watchedValue_e.getAttribute("data-color-theme") || "",
        watchedValue_n = watchedValue_e.classList.contains("common-tooltip-html"),
        watchedValue_r = parseInt(watchedValue_e.getAttribute("data-tooltip-delay") || ""),
        watchedValue_a = parseInt(watchedValue_e.getAttribute("data-tooltip-debounce") || "");
      let watchedValue_l = {
        type: "none"
      };
      return watchedValue_t && (watchedValue_l = {
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
        colorTheme: watchedValue_o,
        tooltipDelay: watchedValue_r,
        tooltipDebounce: watchedValue_a,
        rect: watchedValue_s,
        content: watchedValue_l,
        target: watchedValue_e
      }
    }

    function I(watchedValue_e) {
      const watchedValue_t = (0, watchedValue_o.ensureNotNull)(V).cloneNode(!0),
        watchedValue_i = O(watchedValue_t),
        {
          content: watchedValue_s
        } = watchedValue_e;
      switch (watchedValue_s.type) {
        case "element":
          watchedValue_i.innerHTML = "", watchedValue_i.appendChild(watchedValue_s.data);
          break;
        case "html":
          watchedValue_i.innerHTML = watchedValue_s.data;
          break;
        case "text":
          if (watchedValue_e.hotkey) {
            const watchedValue_e = (0, watchedValue_o.ensureNotNull)(N).cloneNode(!0);
            watchedValue_e.innerText = watchedValue_s.data, watchedValue_i.appendChild(watchedValue_e)
          } else watchedValue_i.innerText = watchedValue_s.data
      }
      if (watchedValue_e.hotkey) {
        const watchedValue_t = "none" !== watchedValue_s.type,
          watchedValue_n = (0, watchedValue_o.ensureNotNull)(R).cloneNode(!0),
          watchedValue_r = (0, P.hotKeyDeserialize)(watchedValue_e.hotkey),
          watchedValue_a = watchedValue_r.keys.map((watchedValue_e => `<span class="${watchedValue_x["common-tooltip__hotkey-button"]}">${watchedValue_e}</span>`));
        watchedValue_n.innerHTML = function(watchedValue_e, watchedValue_t) {
            const watchedValue_i = /{\watchedValue_d}|{hotkey_\watchedValue_d}/gi;
            return watchedValue_e.replace(watchedValue_i, (watchedValue_e => {
              const watchedValue_i = Number(watchedValue_e.match(/\watchedValue_d/));
              return watchedValue_t[watchedValue_i]
            }))
          }(watchedValue_r.text, watchedValue_a).replace(/\watchedValue_s\+\watchedValue_s/watchedValue_g, `<span class="${watchedValue_x["common-tooltip__plus-sign"]}">+</span>`), watchedValue_i.classList.add(
            watchedValue_x["common-tooltip__body--with-hotkey"]), watchedValue_t && watchedValue_n.classList.add(watchedValue_x["common-tooltip__hotkey-block--divider"]), watchedValue_i
          .appendChild(watchedValue_n)
      }
      return watchedValue_t.addEventListener("contextmenu", watchedValue_y.preventDefault), watchedValue_t
    }

    function A(watchedValue_e, watchedValue_t) {
      const watchedValue_i = watchedValue_t.rect;
      if (!watchedValue_i) return;
      ! function(watchedValue_e, watchedValue_t) {
        const watchedValue_i = watchedValue_w.includes(watchedValue_t) ? watchedValue_b[watchedValue_t] : "";
        watchedValue_e.classList.remove(...watchedValue_w.map((watchedValue_e => watchedValue_b[watchedValue_e])).filter((watchedValue_e => !!watchedValue_e))), watchedValue_i && !watchedValue_e.classList.contains(watchedValue_i) && watchedValue_e.classList.add(
          watchedValue_i)
      }(watchedValue_e, watchedValue_t.colorTheme || "default"), watchedValue_t.addClass && watchedValue_e.classList.add(watchedValue_t.addClass);
      const watchedValue_s = O(watchedValue_e),
        watchedValue_o = watchedValue_e.querySelector(`.${watchedValue_x["common-tooltip__button-container"]}`);
      watchedValue_s.classList.toggle(watchedValue_x["common-tooltip__body--width_wide"], Boolean(watchedValue_t.wide)), watchedValue_s.classList.toggle(watchedValue_x[
        "common-tooltip__body--no-padding"], Boolean(watchedValue_t.noPadding)), watchedValue_s.classList.toggle(watchedValue_x[
        "common-tooltip__body--width_narrow"], Boolean(watchedValue_t.narrow)), watchedValue_s.classList.toggle(watchedValue_x[
        "common-tooltip__body--no-buttons"], !0), watchedValue_s.style.left = watchedValue_k(0), watchedValue_s.style.width = watchedValue_k(watchedValue_s.clientWidth + (Boolean(watchedValue_t
        .noPadding) ? 0 : 2));
      const watchedValue_n = document.body.clientWidth,
        watchedValue_r = S.CheckMobile.iOS() || S.CheckMobile.Android() || (0, S.supportTouch)() && (0, S.isMac)() ? window
        .innerHeight : document.body.clientHeight,
        watchedValue_a = watchedValue_t.vertical,
        watchedValue_l = watchedValue_t.extendMargin || watchedValue_a && watchedValue_i.watchedValue_w < 20 || !watchedValue_a && watchedValue_i.watchedValue_h < 20;
      watchedValue_e.classList.toggle(watchedValue_x["common-tooltip--farther"], watchedValue_l), watchedValue_e.classList.toggle(watchedValue_x["common-tooltip--vertical"], watchedValue_a), watchedValue_e
        .classList.toggle(watchedValue_x["common-tooltip--horizontal"], !watchedValue_a);
      const watchedValue_c = function(watchedValue_e) {
          return watchedValue_e.querySelector(`.${watchedValue_x["common-tooltip__ear-holder"]}`)
        }(watchedValue_e),
        watchedValue_h = watchedValue_e.offsetHeight;
      if (watchedValue_a) {
        const watchedValue_a = 10,
          watchedValue_l = watchedValue_r - 10,
          watchedValue_d = 12,
          watchedValue_u = watchedValue_a + watchedValue_d,
          _ = watchedValue_l - watchedValue_d,
          watchedValue_p = (0,
            watchedValue_v.clamp)(watchedValue_i.watchedValue_y + watchedValue_i.watchedValue_h / 2, watchedValue_u, _) - watchedValue_h / 2,
          watchedValue_m = watchedValue_p + watchedValue_h;
        watchedValue_e.style.left = watchedValue_k(watchedValue_i.watchedValue_x + watchedValue_i.watchedValue_w), watchedValue_e.style.top = watchedValue_k(watchedValue_p), watchedValue_p < watchedValue_a ? watchedValue_s.style.top = watchedValue_o.style.top = watchedValue_k(watchedValue_a - watchedValue_p) : watchedValue_m > watchedValue_l && (watchedValue_s
          .style.top = watchedValue_o.style.top = watchedValue_k(watchedValue_l - watchedValue_m));
        const {
          right: watchedValue_g
        } = (watchedValue_e.querySelector(":last-child") || watchedValue_s).getBoundingClientRect(), watchedValue_y = watchedValue_g + 10 > watchedValue_n;
        watchedValue_e.classList.toggle(watchedValue_x["common-tooltip--direction_reversed"], watchedValue_y), watchedValue_e.classList.toggle(watchedValue_x[
          "common-tooltip--direction_normal"], !watchedValue_y);
        let S = watchedValue_y ? "after" : "before";
        (0, watchedValue_f.isRtl)() ? (S = watchedValue_t.otr ? "after" : S, S = watchedValue_t.otl ? "before" : S) : (S = watchedValue_t.otr ? "before" : S, S = watchedValue_t.otl ?
          "after" : S), watchedValue_c.classList.toggle(watchedValue_x["common-tooltip__ear-holder--before"], "before" === S), watchedValue_c.classList.toggle(
          watchedValue_x["common-tooltip__ear-holder--after"], "after" === S), "after" === S && (watchedValue_e.style.left = "auto", watchedValue_e.style
          .right = watchedValue_k(watchedValue_n - watchedValue_i.watchedValue_x))
      } else {
        const watchedValue_a = watchedValue_i.watchedValue_x - (watchedValue_s.offsetWidth - watchedValue_i.watchedValue_w) / 2,
          watchedValue_l = watchedValue_n - watchedValue_e.offsetWidth - 20 <= 0 ? (watchedValue_n - watchedValue_e.offsetWidth) / 2 : 10,
          watchedValue_d = watchedValue_n - watchedValue_l - watchedValue_e.offsetWidth,
          watchedValue_u = Math.max(watchedValue_l, Math.min(watchedValue_a, watchedValue_d));
        watchedValue_e.style.left = watchedValue_k(watchedValue_u);
        const _ = watchedValue_d < watchedValue_a;
        watchedValue_e.classList.toggle(watchedValue_x["common-tooltip--direction_reversed"], _), watchedValue_e.classList.toggle(watchedValue_x[
          "common-tooltip--direction_normal"], !_);
        const watchedValue_p = function(watchedValue_e, watchedValue_t, watchedValue_i, watchedValue_s) {
          if (watchedValue_e.above) return F(watchedValue_t, watchedValue_s) ? "above" : "below";
          if (watchedValue_e.below) return function(watchedValue_e, watchedValue_t, watchedValue_i) {
            return watchedValue_i.watchedValue_y + watchedValue_i.watchedValue_h + watchedValue_t + 10 < watchedValue_e
          }(watchedValue_t, watchedValue_i, watchedValue_s) ? "below" : "above";
          return F(watchedValue_i, watchedValue_s) ? "above" : "below"
        }(watchedValue_t, watchedValue_r, watchedValue_h, watchedValue_i);
        "above" === watchedValue_p ? watchedValue_e.style.bottom = watchedValue_k(watchedValue_r - watchedValue_i.watchedValue_y) : watchedValue_e.style.top = watchedValue_k(watchedValue_i.watchedValue_y + watchedValue_i.watchedValue_h), watchedValue_c.classList.add("above" === watchedValue_p ? watchedValue_x[
          "common-tooltip__ear-holder--above"] : watchedValue_x["common-tooltip__ear-holder--below"]);
        const {
          left: watchedValue_m
        } = watchedValue_s.getBoundingClientRect();
        let watchedValue_g = Math.trunc(watchedValue_i.watchedValue_x + watchedValue_i.watchedValue_w / 2 - (watchedValue_m + watchedValue_s.clientWidth / 2));
        watchedValue_e.style.left = watchedValue_k(watchedValue_u + watchedValue_g), watchedValue_e.style.width = watchedValue_k(watchedValue_s.clientWidth + watchedValue_o.clientWidth), watchedValue_g = _ ? Math.max(0, watchedValue_g) : Math.min(0,
          watchedValue_g), watchedValue_o.style.left = watchedValue_k(-watchedValue_g), watchedValue_s.style.left = watchedValue_k(-watchedValue_g)
      }
    }

    function L(watchedValue_e) {
      watchedValue_e.classList.toggle(watchedValue_x["common-tooltip--hidden"], !0)
    }

    function watchedValue_k(watchedValue_e) {
      return `${Math.floor(watchedValue_e)}px`
    }! function(watchedValue_e) {
      watchedValue_e[watchedValue_e.ViewportPadding = 10] = "ViewportPadding"
    }(C || (C = {}));
    const E =
      `\watchedValue_n\watchedValue_t<div id="common-tooltip-wrapper" class="${watchedValue_x["common-tooltip"]}">\watchedValue_n\watchedValue_t\watchedValue_t<div class="${watchedValue_x["common-tooltip__ear-holder"]}" >\watchedValue_n\watchedValue_t\watchedValue_t\watchedValue_t<div class="${watchedValue_x["common-tooltip__body"]} js-tooltip-body"></div>\watchedValue_n\watchedValue_t\watchedValue_t</div>\watchedValue_n\watchedValue_t\watchedValue_t<div class="${watchedValue_x["common-tooltip__button-container"]}"></div>\watchedValue_n\watchedValue_t</div>\watchedValue_n`,
      D = `\watchedValue_n\watchedValue_t<div class="${watchedValue_x["common-tooltip__hotkey-block"]}"></div>\watchedValue_n`,
      B = `\watchedValue_n\watchedValue_t<div class="${watchedValue_x["common-tooltip__hotkey-text"]}"></div>\watchedValue_n`,
      V = (0, watchedValue_g.parseHtmlElement)(E),
      R = (0, watchedValue_g.parseHtmlElement)(D),
      N = (0, watchedValue_g.parseHtmlElement)(B);

    function O(watchedValue_e) {
      return watchedValue_e.querySelector(`.${watchedValue_x["common-tooltip__body"]}`)
    }

    function F(watchedValue_e, watchedValue_t) {
      return 10 + watchedValue_e < watchedValue_t.watchedValue_y
    }
    let W = !1,
      H = null,
      watchedValue_z = null;
    watchedValue_s.mobiletouch || (document.addEventListener("mouseover", watchedValue_q, !0), document.addEventListener("focus", (function(watchedValue_e) {
      const watchedValue_t = watchedValue_e.target;
      if (!(watchedValue_t instanceof HTMLElement && watchedValue_t.closest('[data-tooltip-show-on-focus="true"]') && watchedValue_t.matches(
          ":focus-visible"))) return;
      watchedValue_q(watchedValue_e, !0)
    }), {
      capture: !0
    }), document.addEventListener("active-descendant-focus", (function(watchedValue_e) {
      watchedValue_e.target instanceof HTMLElement && watchedValue_q(watchedValue_e, !0)
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
      watchedValue_j = (watchedValue_e, watchedValue_t = {}) => {
        const {
          content: watchedValue_i,
          ...watchedValue_s
        } = X(watchedValue_t), watchedValue_o = M(watchedValue_e), watchedValue_n = Object.assign(watchedValue_o, watchedValue_s);
        return "none" !== watchedValue_i.type && (watchedValue_n.content = watchedValue_i),
          !("none" === watchedValue_n.content.type && !watchedValue_n.hotkey) && (watchedValue_n.target = watchedValue_e, G(watchedValue_n), !0)
      },
      G = watchedValue_e => {
        const watchedValue_t = X(watchedValue_e),
          watchedValue_i = I(watchedValue_t);
        if (H = {
            options: watchedValue_t,
            element: watchedValue_i
          }, watchedValue_m(watchedValue_i), watchedValue_c(), !W) return L(watchedValue_i), void watchedValue_h((() => Y(watchedValue_i)), function(watchedValue_e) {
          return "number" != typeof watchedValue_e.tooltipDelay || isNaN(watchedValue_e.tooltipDelay) ? 500 : watchedValue_e.tooltipDelay
        }(watchedValue_t));
        const {
          tooltipDebounce: watchedValue_s
        } = watchedValue_e;
        "number" != typeof watchedValue_s || isNaN(watchedValue_s) ? Y(watchedValue_i) : watchedValue_h((() => Y(watchedValue_i)), watchedValue_s)
      };

    function watchedValue_q(watchedValue_e, watchedValue_t) {
      if ("sourceCapabilities" in watchedValue_e && watchedValue_e.sourceCapabilities?.firesTouchEvents) return;
      const watchedValue_i = function(watchedValue_e, watchedValue_t, watchedValue_i) {
        const watchedValue_s = [];
        for (; watchedValue_e && watchedValue_e !== watchedValue_t;) watchedValue_e.classList && watchedValue_e.classList.contains(watchedValue_i) && watchedValue_s.push(watchedValue_e), watchedValue_e = watchedValue_e.parentElement || Z(watchedValue_e
          .parentNode);
        return watchedValue_s
      }(watchedValue_e.target, watchedValue_e.currentTarget, "apply-common-tooltip");
      for (const watchedValue_s of watchedValue_i) {
        if (watchedValue_e instanceof MouseEvent)
          if ("buttons" in watchedValue_e) {
            if (1 & watchedValue_e.buttons) continue
          } else if (1 === watchedValue_e.which) continue;
        const watchedValue_i = () => watchedValue_j(watchedValue_s);
        if (watchedValue_i()) {
          const watchedValue_e = watchedValue_e => watchedValue_o(null, !0),
            watchedValue_o = (watchedValue_n, watchedValue_r = !1) => {
              watchedValue_s.removeEventListener("common-tooltip-update", watchedValue_i), watchedValue_s.removeEventListener("mouseleave", watchedValue_o), watchedValue_s
                .removeEventListener("mousedown", watchedValue_o), document.removeEventListener("scroll", watchedValue_e, {
                  capture: !0
                }), watchedValue_t && (watchedValue_s.removeEventListener("blur", watchedValue_o), watchedValue_s.removeEventListener("active-descendant-blur", watchedValue_o)), watchedValue_z && (watchedValue_z
                  .destroy(), watchedValue_z = null), K(watchedValue_r)
            };
          watchedValue_s.addEventListener("common-tooltip-update", watchedValue_i), watchedValue_s.addEventListener("mouseleave", watchedValue_o), watchedValue_s.addEventListener(
            "mousedown", watchedValue_o), document.addEventListener("scroll", watchedValue_e, {
            capture: !0
          }), watchedValue_t && (watchedValue_s.addEventListener("blur", watchedValue_o), watchedValue_s.addEventListener("active-descendant-blur", watchedValue_o)), null === watchedValue_z && (
            watchedValue_z = (0, watchedValue_n.createGroup)({
              desc: "Tooltip"
            }), watchedValue_z.add({
              desc: "Hide",
              hotkey: 27,
              handler: watchedValue_o
            }));
          break
        }
      }
    }

    function $() {
      watchedValue_p(), W = !1, H = null
    }
    const K = (watchedValue_e, watchedValue_t) => {
      if (watchedValue_c(), (0, watchedValue_o.ensureNotNull)(U).disconnect(), !H) return;
      if (!watchedValue_e && !W) return;
      const {
        element: watchedValue_i,
        options: watchedValue_s
      } = H, watchedValue_n = () => {
        watchedValue_i.removeEventListener("mouseleave", watchedValue_n), L(watchedValue_i), watchedValue_e ? $() : watchedValue_l = setTimeout((() => {
          $()
        }), 250), watchedValue_t?.()
      };
      var watchedValue_r, watchedValue_h;
      watchedValue_s.tooltipHideDelay ? (watchedValue_r = () => {
        watchedValue_i.querySelector(":hover") ? watchedValue_i.addEventListener("mouseleave", watchedValue_n) : watchedValue_n()
      }, watchedValue_h = watchedValue_s.tooltipHideDelay, watchedValue_a = setTimeout(watchedValue_r, watchedValue_h)) : watchedValue_n()
    };

    function Y(watchedValue_e) {
      const {
        options: watchedValue_t
      } = (0, watchedValue_o.ensureNotNull)(H);
      if (A(watchedValue_e, watchedValue_t), function(watchedValue_e) {
          watchedValue_e.classList.toggle(watchedValue_x["common-tooltip--hidden"], !1)
        }(watchedValue_e), (0, watchedValue_o.ensureNotNull)(U).observe(document, {
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
        html: watchedValue_i,
        text: watchedValue_s,
        ...watchedValue_o
      } = watchedValue_e;
      let watchedValue_n = {
        type: "none"
      };
      return watchedValue_t && (watchedValue_n = {
        type: "element",
        data: watchedValue_t
      }), watchedValue_s && (watchedValue_n = {
        type: watchedValue_i ? "html" : "text",
        data: watchedValue_s
      }), {
        content: watchedValue_n,
        ...watchedValue_o
      }
    }