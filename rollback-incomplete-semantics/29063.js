/**
 * Module 29063 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29063: (watchedValue_e, t, i) => {
    "use strict";
    i.r(t);
    var watchedValue_s = i(21097),
      o = i(51768),
      watchedValue_n = i(76422),
      r = i(38780);

    function a(watchedValue_e, t = !1) {
      "loading" !== document.readyState ? t ? setTimeout((() => watchedValue_e()), 1) : watchedValue_e() : document.addEventListener(
        "DOMContentLoaded", (() => watchedValue_e()))
    }
    new Promise((watchedValue_e => {
      a(watchedValue_e)
    }));

    function l(watchedValue_e, t = "x") {
      let i = !1;
      return "x" !== t && "both" !== t || (i = i || watchedValue_e.offsetWidth < watchedValue_e.scrollWidth), "y" !== t && "both" !== t || (i =
        i || watchedValue_e.offsetHeight < watchedValue_e.scrollHeight), i
    }

    function c(watchedValue_e, t = "x") {
      for (const i of Array.from(watchedValue_e.children))
        if (i instanceof HTMLElement && (l(i, t) || c(i, t))) return !0;
      return !1
    }

    function h(watchedValue_e) {
      let t = "x";
      return watchedValue_e.matches(".apply-overflow-tooltip--direction_both") ? t = "both" : watchedValue_e.matches(
        ".apply-overflow-tooltip--direction_y") && (t = "y"), t
    }

    function d(watchedValue_e) {
      const t = watchedValue_e.getAttribute("data-overflow-tooltip-html");
      if (t) return {
        type: "html",
        data: t
      };
      const i = watchedValue_e.getAttribute("data-overflow-tooltip-text");
      if (i) return {
        type: "text",
        data: i
      };
      if (watchedValue_e.matches?.(".apply-overflow-tooltip--allow-text")) {
        return {
          type: "text",
          data: watchedValue_e.textContent || ""
        }
      }
      const watchedValue_s = Array.from(watchedValue_e.childNodes).reduce(((watchedValue_e, t) => (t.nodeType === Node.TEXT_NODE && watchedValue_e.push(t.textContent ||
        ""), watchedValue_e)), []).join("").trim();
      return watchedValue_s ? {
        type: "text",
        data: watchedValue_s
      } : {
        type: "none"
      }
    }

    function u(watchedValue_e, t) {
      let i = !1;
      const watchedValue_s = watchedValue_e.children;
      for (let watchedValue_e = 0; watchedValue_e < watchedValue_s.length; watchedValue_e++) {
        const o = watchedValue_s[watchedValue_e];
        if (o instanceof HTMLElement && l(o, t)) {
          i = !0;
          break
        }
      }
      return i
    }

    function _(watchedValue_e) {
      const t = watchedValue_e.target;
      if (t instanceof HTMLElement && (t.matches(".apply-overflow-tooltip-focus") || t.querySelector(
          ".apply-overflow-tooltip-focus"))) {
        const watchedValue_e = t.matches(".apply-overflow-tooltip") ? t : t.querySelector(".apply-overflow-tooltip"),
          i = h(watchedValue_e);
        if (watchedValue_e.matches(".apply-overflow-tooltip--check-children-recursively")) {
          if (!c(watchedValue_e, i)) return
        } else if (watchedValue_e.matches(".apply-overflow-tooltip--check-children")) {
          if (!u(watchedValue_e, i)) return
        } else if (!l(watchedValue_e, i)) return;
        (0, r.showOnElement)(t, {
          content: d(watchedValue_e)
        });
        const watchedValue_s = () => {
          (0, r.hide)(), t.removeEventListener("blur", watchedValue_s), t.removeEventListener("active-descendant-blur", watchedValue_s)
        };
        t.addEventListener("blur", watchedValue_s), t.addEventListener("active-descendant-blur", watchedValue_s)
      }
    }
    a((() => {
      document.addEventListener("mouseenter", (watchedValue_e => {
        const t = watchedValue_e.target;
        if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
          const watchedValue_e = h(t);
          if (t.matches(".apply-overflow-tooltip--check-children-recursively")) {
            if (!c(t, watchedValue_e)) return
          } else if (t.matches(".apply-overflow-tooltip--check-children")) {
            if (!u(t, watchedValue_e)) return
          } else if (!l(t, watchedValue_e)) return;
          (0, r.showOnElement)(t, {
            content: d(t)
          });
          const i = () => {
            (0, r.hide)(), ["mouseleave", "mousedown"].forEach((watchedValue_e => t.removeEventListener(watchedValue_e, i)))
          };
          ["mouseleave", "mousedown"].forEach((watchedValue_e => t.addEventListener(watchedValue_e, i)))
        }
      }), !0), document.addEventListener("focus", _, !0), document.addEventListener("active-descendant-focus",
        _, !0)
    }));
    var p = i(48096),
      m = i(11417);
    var g = i(39527);

    function f(watchedValue_e) {
      return () => {
        watchedValue_e()
      }
    }
    var y = i(3343),
      v = i(34811),
      S = i(15754);
    const b = (watchedValue_e = document.documentElement, t) => document.createTreeWalker(watchedValue_e, NodeFilter.SHOW_ELEMENT, (watchedValue_e => t => {
      if (1 !== t.nodeType) return NodeFilter.FILTER_SKIP;
      const i = t;
      return (0, S.isInertRoot)(i) ? NodeFilter.FILTER_REJECT : (0, S.isVisibilityVisible)(i) && i.matches(watchedValue_e) ?
        NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    })(t));
    const w = (watchedValue_e = document.documentElement) => b(watchedValue_e, S.FOCUSABLE_SELECTOR);
    const C = `[${v.FOCUS_TRAP_DATA_ATTRIBUTE}="true"]`;
    class T {
      constructor() {
        this._handleMouseDown = () => {
          this._forwardTab = void 0
        }, this._handleKeyDown = watchedValue_e => {
          this._forwardTab = void 0, [9, y.Modifiers.Shift + 9].includes((0, y.hashFromEvent)(watchedValue_e)) && (this
            ._forwardTab = !watchedValue_e.shiftKey)
        }, this._handleFocus = watchedValue_e => {
          const t = watchedValue_e.target;
          if (void 0 === this._forwardTab || !(t instanceof HTMLElement)) return;
          const i = this._findDeepestFocusTrapElement(document.documentElement);
          if (!(i instanceof HTMLElement) || !i || i.contains(t)) return;
          watchedValue_e.preventDefault(), watchedValue_e.stopPropagation(), t.blur();
          const watchedValue_s = i.compareDocumentPosition(t);
          if (watchedValue_s & Node.DOCUMENT_POSITION_PRECEDING || watchedValue_s & Node.DOCUMENT_POSITION_FOLLOWING) {
            const watchedValue_e = this._forwardTab ? x(i) : x(i, !0);
            watchedValue_e instanceof HTMLElement && watchedValue_e.focus()
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
      _findDeepestFocusTrapElement(watchedValue_e) {
        const t = watchedValue_e.querySelectorAll(C);
        let i = null,
          watchedValue_s = -1;
        return t.forEach((t => {
          const o = this._calculateParentCount(t, watchedValue_e);
          o > watchedValue_s && (watchedValue_s = o, i = t)
        })), i
      }
      _calculateParentCount(watchedValue_e, t) {
        let i = 0,
          watchedValue_s = watchedValue_e.parentElement;
        for (; watchedValue_s && watchedValue_s !== t;) "true" === watchedValue_s.getAttribute(v.FOCUS_TRAP_DATA_ATTRIBUTE) && i++, watchedValue_s = watchedValue_s.parentElement;
        return i
      }
    }
    const P = f((() => new T));

    function x(watchedValue_e, t) {
      return t ? function(watchedValue_e) {
        return function(watchedValue_e) {
          for (watchedValue_e.currentNode = watchedValue_e.root; null !== watchedValue_e.lastChild(););
          return watchedValue_e.currentNode === watchedValue_e.root ? null : watchedValue_e.currentNode
        }(w(watchedValue_e))
      }(watchedValue_e) : function(watchedValue_e) {
        return t = w(watchedValue_e), t.currentNode = t.root, t.nextNode();
        var t
      }(watchedValue_e)
    }
    const M = f((() => {
      P()
    }));
    var I = i(99247);
    let A;

    function L(watchedValue_e) {
      window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (watchedValue_e || (
          initOfferLoginStateChangeButton(), onGoPro() && window.location.reload()), !1 === window.user
        .profile_data_filled && ((0, o.trackEvent)("Conversion", "First login"), delete window.user
          .profile_data_filled)) : availableOffersWrapper.runOrUpdate((watchedValue_e => {
        Object.keys(watchedValue_e).forEach((t => {
          const i = t;
          watchedValue_e[i].available_for_anons || delete watchedValue_e[i]
        })), window.user = {
          username: "Guest",
          following: "0",
          followers: "0",
          ignore_list: [],
          available_offers: watchedValue_e
        }, m.TVLocalStorage.removeItem("trial_availiable")
      }))
    }
    A = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new p.Delegate, A.subscribe(null,
      L), watchedValue_s.TVXWindowEvents.on("loginStateChange", (watchedValue_e => {
      const t = JSON.parse(watchedValue_e);
      window.user = t.user, window.is_authenticated = !!t.is_authenticated, A.fire()
    })), watchedValue_s.TVXWindowEvents.on("signOut", (() => {
      ! function() {
        if (window.initData.lfs) {
          const watchedValue_e = document.getElementsByClassName("js-admin-warning")[0];
          document.body.removeChild(watchedValue_e)
        }
        let watchedValue_e = !0;
        [/^\/chart\//, /^\/share-your-love\//, /^\/pine\//].forEach((t => {
          t.test(window.location.pathname) && (watchedValue_e = !1)
        })), watchedValue_e && window.location.reload()
      }()
    })), (() => {
      const watchedValue_e = "user-obj-changed",
        t = {};
      window.crossTabSyncUserAttr = t => {
        const i = {};
        t instanceof Array ? t.forEach((watchedValue_e => {
          i[watchedValue_e] = window.user[watchedValue_e]
        })) : i[t] = window.user[t], watchedValue_s.TVXWindowEvents.emit(watchedValue_e, JSON.stringify(i))
      }, watchedValue_s.TVXWindowEvents.on(watchedValue_e, (watchedValue_e => {
        const i = JSON.parse(watchedValue_e);
        let watchedValue_s;
        for (watchedValue_s in i)
          if (i.hasOwnProperty(watchedValue_s)) {
            window.user[watchedValue_s] = i[watchedValue_s];
            (t[watchedValue_s] || []).forEach((watchedValue_e => {
              watchedValue_e.fire(i[watchedValue_s])
            }))
          }
      }))
    })(), window.TradingView.changeLoginState = watchedValue_e => {
      window.is_authenticated = !!watchedValue_e, watchedValue_s.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
        is_authenticated: window.is_authenticated,
        user: window.user
      })), window.is_authenticated && watchedValue_n.emit("GLOBAL_EVENT_SIGN_IN_SUCCESS"), A.fire()
    }, window.loginUser = function(watchedValue_e) {
      window.user = (0, g.deepExtend)({}, watchedValue_e), window.TradingView.changeLoginState(!0)
    }, window.loginRequiredDelegate = new p.Delegate, window.runOrSignIn = (watchedValue_e, t) => {
      t || (t = {}), watchedValue_e()
    }, window.onLoginStateChange = L, window.TradingView.setTrialAvailiable = watchedValue_e => {
      m.TVLocalStorage.setItem("trial_availiable", watchedValue_e ? "1" : "0")
    }, window.TradingView.notificationsChanged = new p.Delegate, M(), (0, I.initMouseClickAutoBlurHandler)()