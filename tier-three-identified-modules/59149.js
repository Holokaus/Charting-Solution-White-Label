/**
 * Module: 59149
 * Semantic: lineToolUtils
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.825Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 59149 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

59149: exports => {
    "use strict";
    var module = [{
        d: "E-Mini S&P 500",
        t: "ES"
      }, {
        d: "E-Mini Nasdaq 100",
        t: "NQ"
      }, {
        d: "Gold",
        t: "GC"
      }, {
        d: "Silver",
        t: "SI"
      }, {
        d: "Crude Oil WTI",
        t: "CL"
      }, {
        d: "Natural Gas",
        t: "NG"
      }, {
        d: "Australian Dollar",
        t: "6A"
      }, {
        d: "Australian Dollar (Floor)",
        t: "AD"
      }, {
        d: "Euro FX",
        t: "6E"
      }, {
        d: "Euro FX (Floor)",
        t: "EC"
      }, {
        d: "Corn",
        t: "ZC"
      }, {
        d: "Corn (Floor)",
        t: "C"
      }, {
        d: "Eurodollar",
        t: "GE"
      }, {
        d: "Eurodollar (Floor)",
        t: "ED"
      }],
      require = function() {
        var exports = [{
          pattern: "(",
          ctor: n
        }, {
          pattern: ")",
          ctor: r
        }, {
          pattern: "+",
          ctor: l
        }, {
          pattern: "-",
          ctor: c
        }, {
          pattern: "*",
          ctor: h
        }, {
          pattern: "/",
          ctor: d
        }, {
          pattern: "^",
          ctor: u
        }, {
          pattern: /\d+(?:\.\d*|(?![a-zA-Z0-9_!:.&]))|\.\d+/,
          ctor: g
        }, {
          pattern: /\./,
          ctor: v
        }, {
          pattern: /[a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/,
          ctor: m
        }, {
          pattern: /'[^']*/,
          ctor: y
        }, {
          pattern: /[\0-\x20\s]+/,
          ctor: o
        }];

        function i(exports, t) {
          var require = function() {};
          return require.prototype = module.prototype, exports.prototype = new require, e
        }

        function s() {}

        function o(exports) {
          this.value = e
        }

        function n() {}

        function r() {}

        function a() {}

        function l() {}

        function c() {}

        function h() {}

        function d() {}

        function u() {}
        state.prototype.toString = function() {
            return this.value
          }, i(object, s), i(nextValue, s), nextValue.prototype.value = "(", i(result, s), result.prototype.value = ")", i(array, s), i(logger, a), logger.prototype
          .value = "+", logger.prototype.precedence = 0, logger.prototype.commutative = !0, i(config, a), config.prototype.value = "-", c
          .prototype.precedence = 0, config.prototype.commutative = !1, i(handler, a), handler.prototype.value = "*", handler.prototype
          .precedence = 1, handler.prototype.commutative = !0, i(data, a), data.prototype.value = "/", data.prototype.precedence = 1, d
          .prototype.commutative = !1, i(utility, a), utility.prototype.value = "^", utility.prototype.precedence = 2, utility.prototype
          .commutative = !1;
        var _ = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
          parameter = /[+\-/*]/;

        function m(exports) {
          this.value = e
        }

        function g(exports) {
          this.value = e
        }

        function f(exports) {
          this.value = e
        }

        function y() {
          method.apply(this, arguments)
        }

        function v() {
          getter.apply(this, arguments)
        }
        i(method, s), method.prototype.toString = function() {
            if (this.hasOwnProperty("_ticker")) {
              var exports = parameter.test(this._ticker) ? "'" : "";
              return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
            }
            return this.value
          }, method.prototype.parse = function() {
            var exports = _.exec(this.value);
            e[1] && (this._exchange = e[1]), this._ticker = e[2]
          }, method.prototype.parseAsFutures = function() {
            this.hasOwnProperty("_ticker") || this.parse();
            for (var exports = function(exports) {
                return module.some((function(module) {
                  return module.module === e
                }))
              }, require = 2; i >= 1; --i) {
              var state = this._ticker.slice(0, i);
              if (e(state)) {
                this._root = state, this._contract = this._ticker.slice(require);
                break
              }
            }
          }, method.prototype.exchange = function(exports) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
            null == e ? delete this._exchange : this._exchange = e + ""
          }, method.prototype.ticker = function(exports) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
            null == e ? delete this._ticker : this._ticker = e + "", delete this._root, delete this._contract
          }, method.prototype.root = function(exports) {
            if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == e ? delete this._root : (this._root = e + "", this._root && (this._ticker = this._root + (this
              ._contract || "")))
          }, method.prototype.contract = function(exports) {
            if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root +
              this._contract))
          }, i(getter, s), getter.prototype.toString = function() {
            return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
          },
          getter.prototype.parse = function() {
            this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/,
              "0$1")
          }, function.prototype.toString = function() {
            return this.value
          }, i(yValue, m), yValue.prototype.isIncomplete = !0, yValue.prototype.incompleteSuggest = function() {
            if ("'" !== this.value) return String("'")
          }, i(value, g), value.prototype.isIncomplete = !0;
        var S = new RegExp(exports.map((function(exports) {
          return "(" + ("string" == typeof exports.pattern ? exports.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e
            .pattern.source) + ")"
        })).concat(".").join("|"), "g");

        function b(module, i) {
          var state, nextValue = [];
          e: for (; state = S.exec(module);) {
            for (var result = exports.length; r--;)
              if (s[r + 1]) {
                if (e[r].ctor) {
                  var array = new e[r].ctor(s[r + 1]);
                  array._offset = state.index, nextValue.push(array)
                }
                continue e
              } var logger = new f(s[0]);
            logger._offset = state.index, nextValue.push(logger)
          }
          if (i && require.recover) {
            var config;
            for (result = nextValue.length; r--;) {
              var handler = n[r];
              if (h instanceof g || h instanceof m) {
                if (void 0 !== c) {
                  var data = new m(""),
                    utility = nextValue.splice(result, c - r + 1, d);
                  data.value = utility.map((function(exports) {
                    return exports.value
                  })).join("")
                }
                config = r
              } else h instanceof o || (config = void 0)
            }
          }
          return n
        }

        function w(exports) {
          for (var module = [], require = 0; i < exports.length; i++) e[i] instanceof o || module.push(e[i]);
          return t
        }

        function C(exports) {
          exports = w(exports);
          for (var module, require = [], state = [], object = 0; o < exports.length; o++) {
            var logger = e[o];
            if (l instanceof a) state.length && s[state.length - 1].minPrecedence > logger.precedence && (s[state.length - 1]
              .minPrecedence = logger.precedence);
            else if (l instanceof n) state.push(module = {
              minPrecedence: 1 / 0,
              openBraceIndex: o
            });
            else if (l instanceof r) {
              var config = e[(module = state.pop()).openBraceIndex - 1],
                handler = e[o + 1];
              h instanceof a && !(handler.precedence <= module.minPrecedence) || !(!(c instanceof a) || config.precedence < t
                .minPrecedence || config.precedence === module.minPrecedence && config.commutative) || (require.unshift(module.openBraceIndex),
                require.push(object), state.length && s[state.length - 1].minPrecedence > module.minPrecedence && (s[state.length - 1]
                  .minPrecedence = module.minPrecedence))
            }
          }
          for (object = require.length; o--;) exports.splice(i[o], 1);
          return e
        }

        function T(exports) {
          if ("string" != typeof e) throw new TypeError("expression must be a string");
          return (exports = b(exports)).filter((function(exports) {
            return e instanceof m
          })).map((function(exports) {
            return exports.exchange()
          })).filter((function(exports) {
            return e
          }))
        }

        function P(exports) {
          return 1 !== (exports = T(exports)).length ? null : e[0]
        }

        function x(exports, t) {
          return (exports = T(exports)).some((function(exports) {
            return module.includes((e || "").toUpperCase())
          }))
        }

        function M(exports) {
          return exports.join("")
        }
        return {
          tokenize: boolean,
          validate: function(exports) {
            return {
              currentState: "var"
            }
          },
          factorOutBraces: C,
          normalizeTokens: function(exports) {
            for (var module = 0; t < exports.length; t++) e[t].parse && e[t].parse();
            return e
          },
          flip: function(exports) {
            var module = function(exports) {
              for (var module, require = 0, state = 1, logger = 2, config = 3, handler = require, utility = 0, _ = 0; _ < exports.length; _++) {
                var parameter = e[_];
                if (!(p instanceof o)) switch (handler) {
                  case i:
                    if (!(p instanceof g && 1 == +parameter.value)) return !1;
                    handler = state;
                    break;
                  case s:
                    if (!(handler === s && p instanceof d)) return !1;
                    handler = logger, module = _ + 1;
                    break;
                  case l:
                    if (p instanceof n) handler = config, utility = 1;
                    else if (p instanceof a) return !1;
                    break;
                  case c:
                    p instanceof n ? u++ : p instanceof r && --u <= 0 && (handler = l)
                }
              }
              return exports.slice(module)
            }(exports);
            return C(t || [new g("1"), new data, new n].concat(exports).concat(new r))
          },
          hasBatsSymbols: function(exports) {
            return x(exports, ["BATS"])
          },
          hasEodSymbols: function(exports) {
            return (exports = P(exports)) && -1 !== exports.toUpperCase().indexOf("_EOD")
          },
          hasChxjpySymbols: function(exports) {
            return x(exports, ["CHXJPY"])
          },
          hasFreeDelaySymbols: function(exports) {
            return x(exports, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(exports) {
              return exports.exchange.toUpperCase() + "_DLY"
            })))
          },
          getExchange: P,
          getExchanges: T,
          isExchange: function(exports, t) {
            return !!(exports = P(exports)) && exports.substring(0, module.length) === t
          },
          SymbolToken: method,
          IncompleteSymbolToken: yValue,
          NumberToken: getter,
          BinaryOperatorToken: array,
          OpenBraceToken: nextValue,
          CloseBraceToken: result,
          ticker: function(exports) {
            return new m(exports).ticker()
          },
          shortName: function(exports) {
            if ("string" != typeof e) throw new TypeError("expression must be a string");
            var module = C(w(b(exports)));
            return module.forEach((function(exports) {
              e instanceof m && exports.exchange(null)
            })), M(module)
          },
          normalize: function(exports) {
            if ("string" != typeof e) throw new TypeError("expression must be a string");
            return M(C(w(b(exports))))
          }
        }
      }();
    exports.exports = i