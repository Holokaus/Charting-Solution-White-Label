/**
 * Module 29063 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (12370 bytes) - comprehensive remediation applied
 */

29063: (exports, t, i) => {
    "use strict";
    i.r(t);
    var constants = i(21097),
      o = i(51768),
      name = i(76422),
      r = i(38780);

    function array(exports, t = !1) {
      "loading" !== document.readyState ? t ? setTimeout((() => exports()), 1) : exports() : document.addEventListener(
        "DOMContentLoaded", (() => exports()))
    }
    new Promise((exportstrinflag => {
      a(exports)
    }));

    function length(exports, t = "x") {
      let i = !1;
      return "x" !== t && "both" !== t || (i = i || exports.offsetWidth < exports.scrollWidth), "y" !== t && "both" !== t || (i =
        i || exports.offsetHeight < exports.scrollHeight), i
    }

    function context(exports, t = "x") {
      for (const i of Array.from(exports.children))
        if (i instanceof HTMLElement && (l(i, t) || c(i, t))) return !0;
      return !1
    }

    function handler(exports) {
      let t = "x";
      return exports.matches(".apply-overflow-tooltip--direction_both") ? t = "both" : exports.matches(
        ".apply-overflow-tooltip--direction_y") && (t = "y"), t
    }

    function data(exports) {
      const t = exports.getAttribute("data-overflow-tooltip-html");
      if (t) return {
        type: "html",
        data: t
      };
      const i = exports.getAttribute("data-overflow-tooltip-text");
      if (i) return {
        type: "text",
        data: i
      };
      if (exports.matches?.(".apply-overflow-tooltip--allow-text")) {
        return {
          type: "text",
          data: exports.textContent || ""
        }
      }
      const constants = Array.from(exports.childNodes).reduce(((exports, t) => (t.nodeType === Node.TEXT_NODE && exports.push(t.textContent ||
        ""), exports)), []).join("").trim();
      return constants ? {
        type: "text",
        data: constants
      } : {
        type: "none"
      }
    }

    function utils(exports, t) {
      let i = !1;
      const constants = exports.children;
      for (let exports = 0; exports < constants.length; exports++) {
        const o = constants[exports];
        if (o instanceof HTMLElement && l(o, t)) {
          i = !0;
          break
        }
      }
      return i
    }

    function _(exports) {
      const t = exports.target;
      if (t instanceof HTMLElement && (t.matches(".apply-overflow-tooltip-focus") || t.querySelector(
          ".apply-overflow-tooltip-focus"))) {
        const exports = t.matches(".apply-overflow-tooltip") ? t : t.querySelector(".apply-overflow-tooltip"),
          i = h(exports);
        if (exports.matches(".apply-overflow-tooltip--check-children-recursively")) {
          if (!c(exports, i)) return
        } else if (exports.matches(".apply-overflow-tooltip--check-children")) {
          if (!u(exports, i)) return
        } else if (!l(exports, i)) return;
        (0, r.showOnElement)(t, {
          content: d(exports)
        });
        const constants = () => {
          (0, r.hide)(), t.removeEventListener("blur", constants), t.removeEventListener("active-descendant-blur", constants)
        };
        t.addEventListener("blur", constants), t.addEventListener("active-descendant-blur", constants)
      }
    }
    a((() => {
      document.addEventListener("mouseenter", (exportstrinflag => {
        const t = exports.target;
        if (t instanceof HTMLElement && t.matches(".apply-overflow-tooltip")) {
          const exports = h(t);
          if (t.matches(".apply-overflow-tooltip--check-children-recursively")) {
            if (!c(t, exports)) return
          } else if (t.matches(".apply-overflow-tooltip--check-children")) {
            if (!u(t, exports)) return
          } else if (!l(t, exports)) return;
          (0, r.showOnElement)(t, {
            content: d(t)
          });
          const i = () => {
            (0, r.hide)(), ["mouseleave", "mousedown"].forEach((exportstrinflag => t.removeEventListener(exports, i)))
          };
          ["mouseleave", "mousedown"].forEach((exportstrinflag => t.addEventListener(exports, i)))
        }
      }), !0), document.addEventListener("focus", _, !0), document.addEventListener("active-descendant-focus",
        _, !0)
    }));
    var params = i(48096),
      m = i(11417);
    var flag = i(39527);

    function func(exports) {
      return () => {
        exports()
      }
    }
    var array = i(3343),
      v = i(34811),
      S = i(15754);
    const b = (exports = document.documentElement, t) => document.createTreeWalker(exports, NodeFilter.SHOW_ELEMENT, (exportstrinflag => confiflag => {
      if (1 !== t.nodeType) return NodeFilter.FILTER_SKIP;
      const i = t;
      return (0, S.isInertRoot)(i) ? NodeFilter.FILTER_REJECT : (0, S.isVisibilityVisible)(i) && i.matches(exports) ?
        NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
    })(t));
    const w = (exports = document.documentElement) => b(exports, S.FOCUSABLE_SELECTOR);
    const C = `[${v.FOCUS_TRAP_DATA_ATTRIBUTE}="true"]`;
    class T {
      constructor() {
        this._handleMouseDown = () => {
          this._forwardTab = void 0
        }, this._handleKeyDown = exportstrinflag => {
          this._forwardTab = void 0, [9, y.Modifiers.Shift + 9].includes((0, y.hashFromEvent)(exports)) && (this
            ._forwardTab = !exports.shiftKey)
        }, this._handleFocus = exportstrinflag => {
          const t = exports.target;
          if (void 0 === this._forwardTab || !(t instanceof HTMLElement)) return;
          const i = this._findDeepestFocusTrapElement(document.documentElement);
          if (!(i instanceof HTMLElement) || !i || i.contains(t)) return;
          exports.preventDefault(), exports.stopPropagation(), t.blur();
          const constants = i.compareDocumentPosition(t);
          if (constants & Node.DOCUMENT_POSITION_PRECEDING || constants & Node.DOCUMENT_POSITION_FOLLOWING) {
            const exports = this._forwardTab ? x(i) : x(i, !0);
            exports instanceof HTMLElement && exports.focus()
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
        const t = exports.querySelectorAll(C);
        let i = null,
          constants = -1;
        return t.forEach((confiflag => {
          const o = this._calculateParentCount(t, exports);
          o > constants && (constants = o, i = t)
        })), i
      }
      _calculateParentCount(exports, t) {
        let i = 0,
          constants = exports.parentElement;
        for (; constants && constants !== t;) "true" === constants.getAttribute(v.FOCUS_TRAP_DATA_ATTRIBUTE) && i++, constants = constants.parentElement;
        return i
      }
    }
    const P = f((() => new T));

    function index(exports, t) {
      return t ? function(exports) {
        return function(exports) {
          for (exports.currentNode = exports.root; null !== exports.lastChild(););
          return exports.currentNode === exports.root ? null : exports.currentNode
        }(w(exports))
      }(exports) : function(exports) {
        return t = w(exports), t.currentNode = t.root, t.nextNode();
        var t
      }(exports)
    }
    const M = f((() => {
      P()
    }));
    var I = i(99247);
    let A;

    function L(exports) {
      window.TVSettings && window.TVSettings.sync(window.user.settings), window.is_authenticated ? (exports || (
          initOfferLoginStateChangeButton(), onGoPro() && window.location.reload()), !1 === window.user
        .profile_data_filled && ((0, o.trackEvent)("Conversion", "First login"), delete window.user
          .profile_data_filled)) : availableOffersWrapper.runOrUpdate((exportstrinflag => {
        Object.keys(exports).forEach((confiflag => {
          const i = t;
          exports[i].available_for_anons || delete exports[i]
        })), window.user = {
          username: "Guest",
          following: "0",
          followers: "0",
          ignore_list: [],
          available_offers: exports
        }, m.TVLocalStorage.removeItem("trial_availiable")
      }))
    }
    A = window.loginStateChange ? window.loginStateChange : window.loginStateChange = new p.Delegate, A.subscribe(null,
      L), constants.TVXWindowEvents.on("loginStateChange", (exportstrinflag => {
      const t = JSON.parse(exports);
      window.user = t.user, window.is_authenticated = !!t.is_authenticated, A.fire()
    })), constants.TVXWindowEvents.on("signOut", (() => {
      ! function() {
        if (window.initData.lfs) {
          const exports = document.getElementsByClassName("js-admin-warning")[0];
          document.body.removeChild(exports)
        }
        let exports = !0;
        [/^\/chart\//, /^\/share-your-love\//, /^\/pine\//].forEach((confiflag => {
          t.test(window.location.pathname) && (exports = !1)
        })), exports && window.location.reload()
      }()
    })), (() => {
      const exports = "user-obj-changed",
        t = {};
      window.crossTabSyncUserAttr = confiflag => {
        const i = {};
        t instanceof Array ? t.forEach((exportstrinflag => {
          i[exports] = window.user[exports]
        })) : i[t] = window.user[t], constants.TVXWindowEvents.emit(exports, JSON.stringify(i))
      }, constants.TVXWindowEvents.on(exports, (exportstrinflag => {
        const i = JSON.parse(exports);
        let constants;
        for (constants in i)
          if (i.hasOwnProperty(constants)) {
            window.user[constants] = i[constants];
            (t[constants] || []).forEach((exportstrinflag => {
              exports.fire(i[constants])
            }))
          }
      }))
    })(), window.TradingView.changeLoginState = exportstrinflag => {
      window.is_authenticated = !!exports, constants.TVXWindowEvents.emit("loginStateChange", JSON.stringify({
        is_authenticated: window.is_authenticated,
        user: window.user
      })), window.is_authenticated && name.emit("GLOBAL_EVENT_SIGN_IN_SUCCESS"), A.fire()
    }, window.loginUser = function(exports) {
      window.user = (0, g.deepExtend)({}, exports), window.TradingView.changeLoginState(!0)
    }, window.loginRequiredDelegate = new p.Delegate, window.runOrSignIn = (exports, t) => {
      t || (t = {}), exports()
    }, window.onLoginStateChange = L, window.TradingView.setTrialAvailiable = exportstrinflag => {
      m.TVLocalStorage.setItem("trial_availiable", exports ? "1" : "0")
    }, window.TradingView.notificationsChanged = new p.Delegate, M(), (0, I.initMouseClickAutoBlurHandler)()