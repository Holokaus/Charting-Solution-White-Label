/**
 * Module 29063 - Auto-beautified from TradingView webpack bundle
 *
 * @module 29063
 * @date 2026-04-23
 * @size 7108 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 3343, 11417, 15754, 21097, 34811, 38780, 39527, 48096, 51768, 76422, 99247
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

29063: (e, t, i) => {
    "use strict";
    i.r(t);
    var s = i(21097),
      o = i(51768),
      n = i(76422),
      r = i(38780);

    function a(e, t = !1) {
      "loading" !== document.readyState ? t ? setTimeout((() => e()), 1) : e() : document.addEventListener("DOMContentLoaded", (() => e()))
    }
    new Promise((e => {
      a(e)
    }));

    function l(e, t = "x") {
      let i = !1;
      return "x" !== t && "both" !== t || (i = i || e.offsetWidth < e.scrollWidth), "y" !== t && "both" !== t || (i = i || e.offsetHeight < e.scrollHeight), i
    }

    function c(e, t = "x") {
      for (const i of Array.from(e.children))
        if (i instanceof HTMLElement && (l(i, t) || c(i, t))) return !0;
      return !1
    }

    function h(e) {
      let t = "x";
      return e.matches(".apply-overflow-tooltip--direction_both") ? t = "both" : e.matches(".apply-overflow-tooltip--direction_y") && (t = "y"), t
    }

    function d(e) {
      const t = e.getAttribute("data-overflow-tooltip-html");
      if (t) return {
        type: "html",
        data: t
      };
      const i = e.getAttribute("data-overflow-tooltip-text");
      if (i) return {
        type: "text",
        data: i
      };
      if (e.matches?.(".apply-overflow-tooltip--allow-text")) {
        return {
          type: "text",
          data: e.textContent || ""
        }
      }
      const s = Array.from(e.childNodes).reduce(((e, t) => (t.nodeType === Node.TEXT_NODE && e.push(t.textContent || ""), e)), []).join("").trim();
      return s ? {
        type: "text",
        data: s
      } : {
        type: "none"
      }
    }

    function u(e, t) {
      let i = !1;
      const s = e.children;
      for (let e = 0; e < s.length; e++) {
        const o = s[e];
        if (o instanceof HTMLElement && l(o, t)) {
          i = !0;
          break
        }
      }
      return i
    }

    function _(e) {
      const t = e.target;
      if (t instanceof HTMLElement && (t.matches(".apply-overflow-tooltip-focus") || t.querySelector(".apply-overflow-tooltip-focus"))) {
        const e = t.matches(".apply-overflow-tooltip") ? t : t.querySelector(".apply-overflow-tooltip"),
          i = h(e);
        if (e.matches(".apply-overflow-tooltip--check-children-recursively")) {
          if (!c(e, i)) return
        } else if (e.matches(".apply-overflow-tooltip--check-children")) {
          if (!u(e, i)) return
        } else if (!l(e, i)) return;
        (0, r.showOnElement)(t, {
          content: d(e)
        });
        const s = () => {
          (0, r.hide)(), t.removeEventListener("blur", s), t.removeEventListener("active-descendant-blur", s)
        };
        t.addEventListener("blur", s), t.addEventListener("active-descendant-blur", s)
      }
    }
    a((() => {
      document.addEventListener("mouseenter", (e => {
        const t = e.target;
        if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
          const e = h(t);
          if (t.matches(".apply-overflow-tooltip--check-children-recursively")) {
            if (!c(t, e)) return
          } else if (t.matches(".apply-overflow-tooltip--check-children")) {
            if (!u(t, e)) return
          } else if (!l(t, e)) return;
          (0, r.showOnElement)(t, {
            content: d(t)
          });
          const i = () => {
            (0, r.hide)(), ["mouseleave", "mousedown"].forEach((e => t.removeEventListener(e, i)))
          };
          ["mouseleave", "mousedown"].forEach((e => t.addEventListener(e, i)))
        }
      }), !0), document.addEventListener("focus", _, !0), document.addEventListener("active-descendant-focus", _, !0)
    }));
    var p = i(48096),
      m = i(11417);
    var g = i(39527);

    function f(e) {
      return () => {
        e()
      }
    }
    var y = i(3343),
      v = i(34811),
      S = i(15754);
    const b = (e = document.documentElement, t) => document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, (e => t => {
      if (1 !== t.nodeType) return NodeFilter.FILTER_SKIP;
      const i = t;
      return (0, S.isInertRoot)(i) ? NodeFilter.FILTER_REJECT : (0, S.isVisibilityVisible)(i) && i.matches(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    })(t));
    const w = (e = document.documentElement) => b(e, S.FOCUSABLE_SELECTOR);
    const C = `[${v.FOCUS_TRAP_DATA_ATTRIBUTE}="true"]`;
    class T {
      constructor() {
        this._handleMouseDown = () => {
          this._forwardTab = void 0
        }, this._handleKeyDown = e => {
          this._forwardTab = void 0, [9, y.Modifiers.Shift + 9].includes((0, y.hashFromEvent)(e)) && (this._forwardTab = !e.shiftKey)
        }, this._handleFocus = e => {
          const t = e.target;
          if (void 0 === this._forwardTab || !(t instanceof HTMLElement)) return;
          const i = this._findDeepestFocusTrapElement(document.documentElement);
          if (!(i instanceof HTMLElement) || !i || i.contains(t)) return;
          e.preventDefault(), e.stopPropagation(), t.blur();
          const s = i.compareDocumentPosition(t);
          if (s & Node.DOCUMENT_POSITION_PRECEDING || s & Node.DOCUMENT_POSITION_FOLLOWING) {
            const e = this._forwardTab ? x(i) : x(i, !0);
            e instanceof HTMLElement && e.focus()
          }
        }, document.documentElement.addEventListener("focus", this._handleFocus, {
          capture: !0
        }), document.documentElement.addEventListener("keydown", this._handleKeyDown, {
          capture: !0
        }), document.documentElement.addEventListener("mousedown", this._handleMouseDown, {
          capture: !0
        })
      }
      destroy() {
        document.documentElement.removeEventListener("focus", this._handleFocus, {
          capture: !0
        }), document.documentElement.removeEventListener("keydown", this._handleKeyDown, {
          capture: !0
        }), document.documentElement.removeEventListener("mousedown", this._handleMouseDown, {
          capture: !0
        })
      }
      _findDeepestFocusTrapElement(e) {
        const t = e.querySelectorAll(C);
        let i = null,
          s = -1;
        return t.forEach((t => {
          const o = this._calculateParentCount(t, e);
          o > s && (s = o, i = t)
        })), i
      }
      _calculateParentCount(e, t) {
        let i = 0,
          s = e.parentElement;
        for (; s && s !== t;) "true" === s.getAttribute(v.FOCUS_TRAP_DATA_ATTRIBUTE) && i++, s = s.parentElement;
        return i
      }
    }
    const P = f((() => new T));

    function x(e, t) {
      return t ? function(e) {
        return function(e) {
          for (e.currentNode = e.root; null !== e.lastChild(););
          return e.currentNode === e.root ? null : e.currentNode
        }(w(e))
      }(e) : function(e) {
        return t = w(e), t.currentNode = t.root, t.nextNode();
        var t
      }(e)
    }
    const M = f((() => {
      P()
    }));
    var I = i(99247);
    let A;

    function L(e) {
      window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (e || (initOfferLoginStateChangeButton(), onGoPro() && window.location.reload()), !1 === window.user.profile_data_filled && ((0, o.trackEvent)("Conversion", "First login"), delete window.user.profile_data_filled)) : availableOffersWrapper.runOrUpdate((e => {
        Object.keys(e).forEach((t => {
          const i = t;
          e[i].available_for_anons || delete e[i]
        })), window.user = {
          username: "Guest",
          following: "0",
          followers: "0",
          ignore_list: [],
          available_offers: e
        }, m.TVLocalStorage.removeItem("trial_availiable")
      }))
    }
    A = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new p.Delegate, A.subscribe(null, L), s.TVXWindowEvents.on("loginStateChange", (e => {
      const t = JSON.parse(e);
      window.user = t.user, window.is_authenticated = !!t.is_authenticated, A.fire()
    })), s.TVXWindowEvents.on("signOut", (() => {
      ! function() {
        if (window.initData.lfs) {
          const e = document.getElementsByClassName("js-admin-warning")[0];
          document.body.removeChild(e)
        }
        let e = !0;
        [/^\/chart\//, /^\/share-your-love\//, /^\/pine\//].forEach((t => {
          t.test(window.location.pathname) && (e = !1)
        })), e && window.location.reload()
      }()
    })), (() => {
      const e = "user-obj-changed",
        t = {};
      window.crossTabSyncUserAttr = t => {
        const i = {};
        t instanceof Array ? t.forEach((e => {
          i[e] = window.user[e]
        })) : i[t] = window.user[t], s.TVXWindowEvents.emit(e, JSON.stringify(i))
      }, s.TVXWindowEvents.on(e, (e => {
        const i = JSON.parse(e);
        let s;
        for (s in i)
          if (i.hasOwnProperty(s)) {
            window.user[s] = i[s];
            (t[s] || []).forEach((e => {
              e.fire(i[s])
            }))
          }
      }))
    })(), window.TradingView.changeLoginState = e => {
      window.is_authenticated = !!e, s.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
        is_authenticated: window.is_authenticated,
        user: window.user
      })), window.is_authenticated && n.emit("GLOBAL_EVENT_SIGN_IN_SUCCESS"), A.fire()
    }, window.loginUser = function(e) {
      window.user = (0, g.deepExtend)({}, e), window.TradingView.changeLoginState(!0)
    }, window.loginRequiredDelegate = new p.Delegate, window.runOrSignIn = (e, t) => {
      t || (t = {}), e()
    }, window.onLoginStateChange = L, window.TradingView.setTrialAvailiable = e => {
      m.TVLocalStorage.setItem("trial_availiable", e ? "1" : "0")
    }, window.TradingView.notificationsChanged = new p.Delegate, M(), (0, I.initMouseClickAutoBlurHandler)()
