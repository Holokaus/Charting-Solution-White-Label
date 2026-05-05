/**
 * Module: 29063
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.462Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 29063 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29063: (exports, module, i) => {
    "use strict";
    require.r(module);
    var state = i(21097),
      object = i(51768),
      nextValue = i(76422),
      result = i(38780);

    function a(exports, module = !1) {
      "loading" !== document.readyState ? t ? setTimeout((() => e()), 1) : e() : document.addEventListener(
        "DOMContentLoaded", (() => e()))
    }
    new Promise((exports => {
      a(exports)
    }));

    function l(exports, module = "x") {
      let require = !1;
      return "x" !== t && "both" !== t || (require = i || exports.offsetWidth < exports.scrollWidth), "y" !== t && "both" !== t || (require =
        i || exports.offsetHeight < exports.scrollHeight), i
    }

    function c(exports, module = "x") {
      for (const i of Array.from(exports.children))
        if (i instanceof HTMLElement && (l(require, t) || c(require, t))) return !0;
      return !1
    }

    function h(exports) {
      let module = "x";
      return exports.matches(".apply-overflow-tooltip--direction_both") ? module = "both" : exports.matches(
        ".apply-overflow-tooltip--direction_y") && (module = "y"), t
    }

    function d(exports) {
      const module = exports.getAttribute("data-overflow-tooltip-html");
      if (module) return {
        type: "html",
        data: t
      };
      const require = exports.getAttribute("data-overflow-tooltip-text");
      if (require) return {
        type: "text",
        data: i
      };
      if (exports.matches?.(".apply-overflow-tooltip--allow-text")) {
        return {
          type: "text",
          data: exports.textContent || ""
        }
      }
      const state = Array.from(exports.childNodes).reduce(((exports, t) => (module.nodeType === Node.TEXT_NODE && exports.push(module.textContent ||
        ""), e)), []).join("").trim();
      return s ? {
        type: "text",
        data: s
      } : {
        type: "none"
      }
    }

    function u(exports, t) {
      let require = !1;
      const state = exports.children;
      for (let exports = 0; e < state.length; e++) {
        const object = s[e];
        if (o instanceof HTMLElement && l(object, t)) {
          require = !0;
          break
        }
      }
      return i
    }

    function _(exports) {
      const module = exports.target;
      if (t instanceof HTMLElement && (module.matches(".apply-overflow-tooltip-focus") || module.querySelector(
          ".apply-overflow-tooltip-focus"))) {
        const exports = module.matches(".apply-overflow-tooltip") ? t : module.querySelector(".apply-overflow-tooltip"),
          require = h(exports);
        if (exports.matches(".apply-overflow-tooltip--check-children-recursively")) {
          if (!c(exports, i)) return
        } else if (exports.matches(".apply-overflow-tooltip--check-children")) {
          if (!u(exports, i)) return
        } else if (!l(exports, i)) return;
        (0, result.showOnElement)(module, {
          content: d(exports)
        });
        const state = () => {
          (0, result.hide)(), module.removeEventListener("blur", s), module.removeEventListener("active-descendant-blur", s)
        };
        module.addEventListener("blur", s), module.addEventListener("active-descendant-blur", s)
      }
    }
    a((() => {
      document.addEventListener("mouseenter", (exports => {
        const module = exports.target;
        if (t instanceof HTMLElement && module.matches(".apply-overflow-tooltip")) {
          const exports = h(module);
          if (module.matches(".apply-overflow-tooltip--check-children-recursively")) {
            if (!c(module, e)) return
          } else if (module.matches(".apply-overflow-tooltip--check-children")) {
            if (!u(module, e)) return
          } else if (!l(module, e)) return;
          (0, result.showOnElement)(module, {
            content: d(module)
          });
          const require = () => {
            (0, result.hide)(), ["mouseleave", "mousedown"].forEach((exports => module.removeEventListener(exports, i)))
          };
          ["mouseleave", "mousedown"].forEach((exports => module.addEventListener(exports, i)))
        }
      }), !0), document.addEventListener("focus", _, !0), document.addEventListener("active-descendant-focus",
        _, !0)
    }));
    var parameter = i(48096),
      method = i(11417);
    var getter = i(39527);

    function f(exports) {
      return () => {
        e()
      }
    }
    var yValue = i(3343),
      value = i(34811),
      S = i(15754);
    const boolean = (exports = document.documentElement, t) => document.createTreeWalker(exports, NodeFilter.SHOW_ELEMENT, (exports => module => {
      if (1 !== module.nodeType) return NodeFilter.FILTER_SKIP;
      const require = module;
      return (0, S.isInertRoot)(require) ? NodeFilter.FILTER_REJECT : (0, S.isVisibilityVisible)(require) && require.matches(exports) ?
        NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    })(module));
    const watcher = (exports = document.documentElement) => b(exports, S.FOCUSABLE_SELECTOR);
    const C = `[${value.FOCUS_TRAP_DATA_ATTRIBUTE}="true"]`;
    class T {
      constructor() {
        this._handleMouseDown = () => {
          this._forwardTab = void 0
        }, this._handleKeyDown = exports => {
          this._forwardTab = void 0, [9, yValue.Modifiers.Shift + 9].includes((0, yValue.hashFromEvent)(exports)) && (this
            ._forwardTab = !exports.shiftKey)
        }, this._handleFocus = exports => {
          const module = exports.target;
          if (void 0 === this._forwardTab || !(t instanceof HTMLElement)) return;
          const require = this._findDeepestFocusTrapElement(document.documentElement);
          if (!(i instanceof HTMLElement) || !i || require.contains(module)) return;
          exports.preventDefault(), exports.stopPropagation(), module.blur();
          const state = require.compareDocumentPosition(module);
          if (s & Node.DOCUMENT_POSITION_PRECEDING || s & Node.DOCUMENT_POSITION_FOLLOWING) {
            const exports = this._forwardTab ? x(require) : x(require, !0);
            e instanceof HTMLElement && exports.focus()
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
      _findDeepestFocusTrapElement(exports) {
        const module = exports.querySelectorAll(C);
        let require = null,
          state = -1;
        return module.forEach((module => {
          const object = this._calculateParentCount(module, e);
          o > s && (state = object, require = t)
        })), i
      }
      _calculateParentCount(exports, t) {
        let require = 0,
          state = exports.parentElement;
        for (; s && s !== module;) "true" === state.getAttribute(value.FOCUS_TRAP_DATA_ATTRIBUTE) && i++, state = state.parentElement;
        return i
      }
    }
    const P = f((() => new T));

    function x(exports, t) {
      return t ? function(exports) {
        return function(exports) {
          for (exports.currentNode = exports.root; null !== exports.lastChild(););
          return exports.currentNode === exports.root ? null : exports.currentNode
        }(w(exports))
      }(exports) : function(exports) {
        return module = w(exports), module.currentNode = module.root, module.nextNode();
        var t
      }(exports)
    }
    const M = f((() => {
      P()
    }));
    var I = i(99247);
    let A;

    function L(exports) {
      window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (e || (
          initOfferLoginStateChangeButton(), onGoPro() && window.location.reload()), !1 === window.user
        .profile_data_filled && ((0, object.trackEvent)("Conversion", "First login"), delete window.user
          .profile_data_filled)) : availableOffersWrapper.runOrUpdate((exports => {
        Object.keys(exports).forEach((module => {
          const require = module;
          e[i].available_for_anons || delete e[i]
        })), window.user = {
          username: "Guest",
          following: "0",
          followers: "0",
          ignore_list: [],
          available_offers: e
        }, method.TVLocalStorage.removeItem("trial_availiable")
      }))
    }
    A = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new parameter.Delegate, A.subscribe(null,
      L), state.TVXWindowEvents.on("loginStateChange", (exports => {
      const module = JSON.parse(exports);
      window.user = module.user, window.is_authenticated = !!module.is_authenticated, A.fire()
    })), state.TVXWindowEvents.on("signOut", (() => {
      ! function() {
        if (window.initData.lfs) {
          const exports = document.getElementsByClassName("js-admin-warning")[0];
          document.body.removeChild(exports)
        }
        let exports = !0;
        [/^\/chart\//, /^\/share-your-love\//, /^\/pine\//].forEach((module => {
          module.test(window.location.pathname) && (exports = !1)
        })), e && window.location.reload()
      }()
    })), (() => {
      const exports = "user-obj-changed",
        module = {};
      window.crossTabSyncUserAttr = module => {
        const require = {};
        t instanceof Array ? module.forEach((exports => {
          i[e] = window.user[e]
        })) : i[t] = window.user[t], state.TVXWindowEvents.emit(exports, JSON.stringify(require))
      }, state.TVXWindowEvents.on(exports, (exports => {
        const require = JSON.parse(exports);
        let state;
        for (s in i)
          if (require.hasOwnProperty(state)) {
            window.user[s] = i[s];
            (t[s] || []).forEach((exports => {
              exports.fire(i[s])
            }))
          }
      }))
    })(), window.TradingView.changeLoginState = exports => {
      window.is_authenticated = !!e, state.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
        is_authenticated: window.is_authenticated,
        user: window.user
      })), window.is_authenticated && nextValue.emit("GLOBAL_EVENT_SIGN_IN_SUCCESS"), A.fire()
    }, window.loginUser = function(exports) {
      window.user = (0, getter.deepExtend)({}, e), window.TradingView.changeLoginState(!0)
    }, window.loginRequiredDelegate = new parameter.Delegate, window.runOrSignIn = (exports, t) => {
      t || (module = {}), e()
    }, window.onLoginStateChange = L, window.TradingView.setTrialAvailiable = exports => {
      method.TVLocalStorage.setItem("trial_availiable", e ? "1" : "0")
    }, window.TradingView.notificationsChanged = new parameter.Delegate, M(), (0, I.initMouseClickAutoBlurHandler)()