/**
 * Module 29063 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29063: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_r(watchedValue_t);
    var watchedValue_s = watchedValue_i(21097),
      watchedValue_o = watchedValue_i(51768),
      watchedValue_n = watchedValue_i(76422),
      watchedValue_r = watchedValue_i(38780);

    function watchedValue_a(watchedValue_e, watchedValue_t = !1) {
      "loading" !== document.readyState ? watchedValue_t ? setTimeout((() => watchedValue_e()), 1) : watchedValue_e() : document.addEventListener(
        "DOMContentLoaded", (() => watchedValue_e()))
    }
    new Promise((watchedValue_e => {
      watchedValue_a(watchedValue_e)
    }));

    function watchedValue_l(watchedValue_e, watchedValue_t = "watchedValue_x") {
      let watchedValue_i = !1;
      return "watchedValue_x" !== watchedValue_t && "both" !== watchedValue_t || (watchedValue_i = watchedValue_i || watchedValue_e.offsetWidth < watchedValue_e.scrollWidth), "watchedValue_y" !== watchedValue_t && "both" !== watchedValue_t || (watchedValue_i =
        watchedValue_i || watchedValue_e.offsetHeight < watchedValue_e.scrollHeight), watchedValue_i
    }

    function watchedValue_c(watchedValue_e, watchedValue_t = "watchedValue_x") {
      for (const watchedValue_i of Array.from(watchedValue_e.children))
        if (watchedValue_i instanceof HTMLElement && (watchedValue_l(watchedValue_i, watchedValue_t) || watchedValue_c(watchedValue_i, watchedValue_t))) return !0;
      return !1
    }

    function watchedValue_h(watchedValue_e) {
      let watchedValue_t = "watchedValue_x";
      return watchedValue_e.matches(".apply-overflow-tooltip--direction_both") ? watchedValue_t = "both" : watchedValue_e.matches(
        ".apply-overflow-tooltip--direction_y") && (watchedValue_t = "watchedValue_y"), watchedValue_t
    }

    function watchedValue_d(watchedValue_e) {
      const watchedValue_t = watchedValue_e.getAttribute("data-overflow-tooltip-html");
      if (watchedValue_t) return {
        type: "html",
        data: watchedValue_t
      };
      const watchedValue_i = watchedValue_e.getAttribute("data-overflow-tooltip-text");
      if (watchedValue_i) return {
        type: "text",
        data: watchedValue_i
      };
      if (watchedValue_e.matches?.(".apply-overflow-tooltip--allow-text")) {
        return {
          type: "text",
          data: watchedValue_e.textContent || ""
        }
      }
      const watchedValue_s = Array.from(watchedValue_e.childNodes).reduce(((watchedValue_e, watchedValue_t) => (watchedValue_t.nodeType === Node.TEXT_NODE && watchedValue_e.push(watchedValue_t.textContent ||
        ""), watchedValue_e)), []).join("").trim();
      return watchedValue_s ? {
        type: "text",
        data: watchedValue_s
      } : {
        type: "none"
      }
    }

    function watchedValue_u(watchedValue_e, watchedValue_t) {
      let watchedValue_i = !1;
      const watchedValue_s = watchedValue_e.children;
      for (let watchedValue_e = 0; watchedValue_e < watchedValue_s.length; watchedValue_e++) {
        const watchedValue_o = watchedValue_s[watchedValue_e];
        if (watchedValue_o instanceof HTMLElement && watchedValue_l(watchedValue_o, watchedValue_t)) {
          watchedValue_i = !0;
          break
        }
      }
      return watchedValue_i
    }

    function _(watchedValue_e) {
      const watchedValue_t = watchedValue_e.target;
      if (watchedValue_t instanceof HTMLElement && (watchedValue_t.matches(".apply-overflow-tooltip-focus") || watchedValue_t.querySelector(
          ".apply-overflow-tooltip-focus"))) {
        const watchedValue_e = watchedValue_t.matches(".apply-overflow-tooltip") ? watchedValue_t : watchedValue_t.querySelector(".apply-overflow-tooltip"),
          watchedValue_i = watchedValue_h(watchedValue_e);
        if (watchedValue_e.matches(".apply-overflow-tooltip--check-children-recursively")) {
          if (!watchedValue_c(watchedValue_e, watchedValue_i)) return
        } else if (watchedValue_e.matches(".apply-overflow-tooltip--check-children")) {
          if (!watchedValue_u(watchedValue_e, watchedValue_i)) return
        } else if (!watchedValue_l(watchedValue_e, watchedValue_i)) return;
        (0, watchedValue_r.showOnElement)(watchedValue_t, {
          content: watchedValue_d(watchedValue_e)
        });
        const watchedValue_s = () => {
          (0, watchedValue_r.hide)(), watchedValue_t.removeEventListener("blur", watchedValue_s), watchedValue_t.removeEventListener("active-descendant-blur", watchedValue_s)
        };
        watchedValue_t.addEventListener("blur", watchedValue_s), watchedValue_t.addEventListener("active-descendant-blur", watchedValue_s)
      }
    }
    watchedValue_a((() => {
      document.addEventListener("mouseenter", (watchedValue_e => {
        const watchedValue_t = watchedValue_e.target;
        if (watchedValue_t instanceof HTMLElement && watchedValue_t.matches(".apply-overflow-tooltip")) {
          const watchedValue_e = watchedValue_h(watchedValue_t);
          if (watchedValue_t.matches(".apply-overflow-tooltip--check-children-recursively")) {
            if (!watchedValue_c(watchedValue_t, watchedValue_e)) return
          } else if (watchedValue_t.matches(".apply-overflow-tooltip--check-children")) {
            if (!watchedValue_u(watchedValue_t, watchedValue_e)) return
          } else if (!watchedValue_l(watchedValue_t, watchedValue_e)) return;
          (0, watchedValue_r.showOnElement)(watchedValue_t, {
            content: watchedValue_d(watchedValue_t)
          });
          const watchedValue_i = () => {
            (0, watchedValue_r.hide)(), ["mouseleave", "mousedown"].forEach((watchedValue_e => watchedValue_t.removeEventListener(watchedValue_e, watchedValue_i)))
          };
          ["mouseleave", "mousedown"].forEach((watchedValue_e => watchedValue_t.addEventListener(watchedValue_e, watchedValue_i)))
        }
      }), !0), document.addEventListener("focus", _, !0), document.addEventListener("active-descendant-focus",
        _, !0)
    }));
    var watchedValue_p = watchedValue_i(48096),
      watchedValue_m = watchedValue_i(11417);
    var watchedValue_g = watchedValue_i(39527);

    function watchedValue_f(watchedValue_e) {
      return () => {
        watchedValue_e()
      }
    }
    var watchedValue_y = watchedValue_i(3343),
      watchedValue_v = watchedValue_i(34811),
      S = watchedValue_i(15754);
    const watchedValue_b = (watchedValue_e = document.documentElement, watchedValue_t) => document.createTreeWalker(watchedValue_e, NodeFilter.SHOW_ELEMENT, (watchedValue_e => watchedValue_t => {
      if (1 !== watchedValue_t.nodeType) return NodeFilter.FILTER_SKIP;
      const watchedValue_i = watchedValue_t;
      return (0, S.isInertRoot)(watchedValue_i) ? NodeFilter.FILTER_REJECT : (0, S.isVisibilityVisible)(watchedValue_i) && watchedValue_i.matches(watchedValue_e) ?
        NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    })(watchedValue_t));
    const watchedValue_w = (watchedValue_e = document.documentElement) => watchedValue_b(watchedValue_e, S.FOCUSABLE_SELECTOR);
    const C = `[${watchedValue_v.FOCUS_TRAP_DATA_ATTRIBUTE}="true"]`;
    class T {
      constructor() {
        this._handleMouseDown = () => {
          this._forwardTab = void 0
        }, this._handleKeyDown = watchedValue_e => {
          this._forwardTab = void 0, [9, watchedValue_y.Modifiers.Shift + 9].includes((0, watchedValue_y.hashFromEvent)(watchedValue_e)) && (this
            ._forwardTab = !watchedValue_e.shiftKey)
        }, this._handleFocus = watchedValue_e => {
          const watchedValue_t = watchedValue_e.target;
          if (void 0 === this._forwardTab || !(watchedValue_t instanceof HTMLElement)) return;
          const watchedValue_i = this._findDeepestFocusTrapElement(document.documentElement);
          if (!(watchedValue_i instanceof HTMLElement) || !watchedValue_i || watchedValue_i.contains(watchedValue_t)) return;
          watchedValue_e.preventDefault(), watchedValue_e.stopPropagation(), watchedValue_t.blur();
          const watchedValue_s = watchedValue_i.compareDocumentPosition(watchedValue_t);
          if (watchedValue_s & Node.DOCUMENT_POSITION_PRECEDING || watchedValue_s & Node.DOCUMENT_POSITION_FOLLOWING) {
            const watchedValue_e = this._forwardTab ? watchedValue_x(watchedValue_i) : watchedValue_x(watchedValue_i, !0);
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
        const watchedValue_t = watchedValue_e.querySelectorAll(C);
        let watchedValue_i = null,
          watchedValue_s = -1;
        return watchedValue_t.forEach((watchedValue_t => {
          const watchedValue_o = this._calculateParentCount(watchedValue_t, watchedValue_e);
          watchedValue_o > watchedValue_s && (watchedValue_s = watchedValue_o, watchedValue_i = watchedValue_t)
        })), watchedValue_i
      }
      _calculateParentCount(watchedValue_e, watchedValue_t) {
        let watchedValue_i = 0,
          watchedValue_s = watchedValue_e.parentElement;
        for (; watchedValue_s && watchedValue_s !== watchedValue_t;) "true" === watchedValue_s.getAttribute(watchedValue_v.FOCUS_TRAP_DATA_ATTRIBUTE) && watchedValue_i++, watchedValue_s = watchedValue_s.parentElement;
        return watchedValue_i
      }
    }
    const P = watchedValue_f((() => new T));

    function watchedValue_x(watchedValue_e, watchedValue_t) {
      return watchedValue_t ? function(watchedValue_e) {
        return function(watchedValue_e) {
          for (watchedValue_e.currentNode = watchedValue_e.root; null !== watchedValue_e.lastChild(););
          return watchedValue_e.currentNode === watchedValue_e.root ? null : watchedValue_e.currentNode
        }(watchedValue_w(watchedValue_e))
      }(watchedValue_e) : function(watchedValue_e) {
        return watchedValue_t = watchedValue_w(watchedValue_e), watchedValue_t.currentNode = watchedValue_t.root, watchedValue_t.nextNode();
        var watchedValue_t
      }(watchedValue_e)
    }
    const M = watchedValue_f((() => {
      P()
    }));
    var I = watchedValue_i(99247);
    let A;

    function L(watchedValue_e) {
      window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (watchedValue_e || (
          initOfferLoginStateChangeButton(), onGoPro() && window.location.reload()), !1 === window.user
        .profile_data_filled && ((0, watchedValue_o.trackEvent)("Conversion", "First login"), delete window.user
          .profile_data_filled)) : availableOffersWrapper.runOrUpdate((watchedValue_e => {
        Object.keys(watchedValue_e).forEach((watchedValue_t => {
          const watchedValue_i = watchedValue_t;
          watchedValue_e[watchedValue_i].available_for_anons || delete watchedValue_e[watchedValue_i]
        })), window.user = {
          username: "Guest",
          following: "0",
          followers: "0",
          ignore_list: [],
          available_offers: watchedValue_e
        }, watchedValue_m.TVLocalStorage.removeItem("trial_availiable")
      }))
    }
    A = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new watchedValue_p.Delegate, A.subscribe(null,
      L), watchedValue_s.TVXWindowEvents.on("loginStateChange", (watchedValue_e => {
      const watchedValue_t = JSON.parse(watchedValue_e);
      window.user = watchedValue_t.user, window.is_authenticated = !!watchedValue_t.is_authenticated, A.fire()
    })), watchedValue_s.TVXWindowEvents.on("signOut", (() => {
      ! function() {
        if (window.initData.lfs) {
          const watchedValue_e = document.getElementsByClassName("js-admin-warning")[0];
          document.body.removeChild(watchedValue_e)
        }
        let watchedValue_e = !0;
        [/^\/chart\//, /^\/share-your-love\//, /^\/pine\//].forEach((watchedValue_t => {
          watchedValue_t.test(window.location.pathname) && (watchedValue_e = !1)
        })), watchedValue_e && window.location.reload()
      }()
    })), (() => {
      const watchedValue_e = "user-obj-changed",
        watchedValue_t = {};
      window.crossTabSyncUserAttr = watchedValue_t => {
        const watchedValue_i = {};
        watchedValue_t instanceof Array ? watchedValue_t.forEach((watchedValue_e => {
          watchedValue_i[watchedValue_e] = window.user[watchedValue_e]
        })) : watchedValue_i[watchedValue_t] = window.user[watchedValue_t], watchedValue_s.TVXWindowEvents.emit(watchedValue_e, JSON.stringify(watchedValue_i))
      }, watchedValue_s.TVXWindowEvents.on(watchedValue_e, (watchedValue_e => {
        const watchedValue_i = JSON.parse(watchedValue_e);
        let watchedValue_s;
        for (watchedValue_s in watchedValue_i)
          if (watchedValue_i.hasOwnProperty(watchedValue_s)) {
            window.user[watchedValue_s] = watchedValue_i[watchedValue_s];
            (watchedValue_t[watchedValue_s] || []).forEach((watchedValue_e => {
              watchedValue_e.fire(watchedValue_i[watchedValue_s])
            }))
          }
      }))
    })(), window.TradingView.changeLoginState = watchedValue_e => {
      window.is_authenticated = !!watchedValue_e, watchedValue_s.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
        is_authenticated: window.is_authenticated,
        user: window.user
      })), window.is_authenticated && watchedValue_n.emit("GLOBAL_EVENT_SIGN_IN_SUCCESS"), A.fire()
    }, window.loginUser = function(watchedValue_e) {
      window.user = (0, watchedValue_g.deepExtend)({}, watchedValue_e), window.TradingView.changeLoginState(!0)
    }, window.loginRequiredDelegate = new watchedValue_p.Delegate, window.runOrSignIn = (watchedValue_e, watchedValue_t) => {
      watchedValue_t || (watchedValue_t = {}), watchedValue_e()
    }, window.onLoginStateChange = L, window.TradingView.setTrialAvailiable = watchedValue_e => {
      watchedValue_m.TVLocalStorage.setItem("trial_availiable", watchedValue_e ? "1" : "0")
    }, window.TradingView.notificationsChanged = new watchedValue_p.Delegate, M(), (0, I.initMouseClickAutoBlurHandler)()