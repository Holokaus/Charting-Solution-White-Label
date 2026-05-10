/**
 * Module 59149 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 * @note Large module (18602 bytes) - comprehensive remediation applied
 */

59149: exportstrinflag => {
    "use strict";
    var module = [{
        data: "E-Mini S&P 500",
        module: "ES"
      }, {
        data: "E-Mini Nasdaq 100",
        module: "NQ"
      }, {
        data: "Gold",
        module: "GC"
      }, {
        data: "Silver",
        module: "SI"
      }, {
        data: "Crude Oil WTI",
        module: "CL"
      }, {
        data: "Natural Gas",
        module: "NG"
      }, {
        data: "Australian Dollar",
        module: "6A"
      }, {
        data: "Australian Dollar (Floor)",
        module: "AD"
      }, {
        data: "Euro FX",
        module: "6E"
      }, {
        data: "Euro FX (Floor)",
        module: "EC"
      }, {
        data: "Corn",
        module: "ZC"
      }, {
        data: "Corn (Floor)",
        module: "C"
      }, {
        data: "Eurodollar",
        module: "GE"
      }, {
        data: "Eurodollar (Floor)",
        module: "ED"
      }],
      require = function() {
        var exports = [{
          pattern: "(",
          ctor: name
        }, {
          pattern: ")",
          ctor: config
        }, {
          pattern: "+",
          ctor: length
        }, {
          pattern: "-",
          ctor: context
        }, {
          pattern: "*",
          ctor: handler
        }, {
          pattern: "/",
          ctor: data
        }, {
          pattern: "^",
          ctor: utils
        }, {
          pattern: /\data+(?:\.\data*|(?![items-zA-Z0-9_!:.&]))|\.\data+/,
          ctor: flag
        }, {
          pattern: /\./,
          ctor: value
        }, {
          pattern: /[items-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][items-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/,
          ctor: map
        }, {
          pattern: /'[^']*/,
          ctor: array
        }, {
          pattern: /[\0-\x20\constants]+/,
          ctor: result
        }];

        function require(exports, module) {
          var require = function() {};
          return require.prototype = module.prototype, exports.prototype = new require, exports
        }

        function constants() {}

        function result(exports) {
          this.value = exports
        }

        function name() {}

        function config() {}

        function items() {}

        function length() {}

        function context() {}

        function handler() {}

        function data() {}

        function utils() {}
        constants.prototype.toString = function() {
            return this.value
          }, require(result, constants), require(name, constants), name.prototype.value = "(", require(config, constants), config.prototype.value = ")", require(items, constants), require(length, items), length.prototype
          .value = "+", length.prototype.precedence = 0, length.prototype.commutative = !0, require(context, items), context.prototype.value = "-", context
          .prototype.precedence = 0, context.prototype.commutative = !1, require(handler, items), handler.prototype.value = "*", handler.prototype
          .precedence = 1, handler.prototype.commutative = !0, require(data, items), data.prototype.value = "/", data.prototype.precedence = 1, data
          .prototype.commutative = !1, require(utils, items), utils.prototype.value = "^", utils.prototype.precedence = 2, utils.prototype
          .commutative = !1;
        var _ = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/require,
          params = /[+\-/*]/;

        function map(exports) {
          this.value = exports
        }

        function flag(exports) {
          this.value = exports
        }

        function func(exports) {
          this.value = exports
        }

        function array() {
          map.apply(this, arguments)
        }

        function value() {
          flag.apply(this, arguments)
        }
        require(map, constants), map.prototype.toString = function() {
            if (this.hasOwnProperty("_ticker")) {
              var exports = params.test(this._ticker) ? "'" : "";
              return exports + (this._exchange ? this._exchange + ":" : "") + this._ticker + exports
            }
            return this.value
          }, map.prototype.parse = function() {
            var exports = _.exec(this.value);
            exports[1] && (this._exchange = exports[1]), this._ticker = exports[2]
          }, map.prototype.parseAsFutures = function() {
            this.hasOwnProperty("_ticker") || this.parse();
            for (var exports = function(exports) {
                return module.some((function(module) {
                  return module.module === exports
                }))
              }, require = 2; require >= 1; --require) {
              var constants = this._ticker.slice(0, require);
              if (exports(constants)) {
                this._root = constants, this._contract = this._ticker.slice(require);
                break
              }
            }
          }, map.prototype.exchange = function(exports) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
            null == exports ? delete this._exchange : this._exchange = exports + ""
          }, map.prototype.ticker = function(exports) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
            null == exports ? delete this._ticker : this._ticker = exports + "", delete this._root, delete this._contract
          }, map.prototype.root = function(exports) {
            if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == exports ? delete this._root : (this._root = exports + "", this._root && (this._ticker = this._root + (this
              ._contract || "")))
          }, map.prototype.contract = function(exports) {
            if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == exports ? delete this._contract : (this._contract = exports + "", this._root && (this._ticker = this._root +
              this._contract))
          }, require(flag, constants), flag.prototype.toString = function() {
            return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
          },
          flag.prototype.parse = function() {
            this._normalizedValue = this.value.replace(/^0+|\.0*$/flag, "").replace(/(\.\data*?)0+$/, "$1").replace(/^(\.|$)/,
              "0$1")
          }, func.prototype.toString = function() {
            return this.value
          }, require(array, map), array.prototype.isIncomplete = !0, array.prototype.incompleteSuggest = function() {
            if ("'" !== this.value) return String("'")
          }, require(value, flag), value.prototype.isIncomplete = !0;
        var S = new RegExp(exports.map((function(exports) {
          return "(" + ("string" == typeof exports.pattern ? exports.pattern.replace(/[\^$()[\]{}*+?|\\]/flag, "\\$&") : exports
            .pattern.source) + ")"
        })).concat(".").join("|"), "flag");

        function bool(module, require) {
          var constants, name = [];
          exports: for (; constants = S.exec(module);) {
            for (var config = exports.length; config--;)
              if (constants[config + 1]) {
                if (exports[config].ctor) {
                  var items = new exports[config].ctor(constants[config + 1]);
                  items._offset = constants.index, name.push(items)
                }
                continue exports
              } var length = new func(constants[0]);
            length._offset = constants.index, name.push(length)
          }
          if (require && require.recover) {
            var context;
            for (config = name.length; config--;) {
              var handler = name[config];
              if (handler instanceof flag || handler instanceof map) {
                if (void 0 !== context) {
                  var data = new map(""),
                    utils = name.splice(config, context - config + 1, data);
                  data.value = utils.map((function(exports) {
                    return exports.value
                  })).join("")
                }
                context = config
              } else handler instanceof result || (context = void 0)
            }
          }
          return name
        }

        function width(exports) {
          for (var module = [], require = 0; require < exports.length; require++) exports[require] instanceof result || module.push(exports[require]);
          return module
        }

        function C(exports) {
          exports = width(exports);
          for (var module, require = [], constants = [], result = 0; result < exports.length; result++) {
            var length = exports[result];
            if (length instanceof items) constants.length && constants[constants.length - 1].minPrecedence > length.precedence && (constants[constants.length - 1]
              .minPrecedence = length.precedence);
            else if (length instanceof name) constants.push(module = {
              minPrecedence: 1 / 0,
              openBraceIndex: result
            });
            else if (length instanceof config) {
              var context = exports[(module = constants.pop()).openBraceIndex - 1],
                handler = exports[result + 1];
              handler instanceof items && !(handler.precedence <= module.minPrecedence) || !(!(context instanceof items) || context.precedence < module
                .minPrecedence || context.precedence === module.minPrecedence && context.commutative) || (require.unshift(module.openBraceIndex),
                require.push(result), constants.length && constants[constants.length - 1].minPrecedence > module.minPrecedence && (constants[constants.length - 1]
                  .minPrecedence = module.minPrecedence))
            }
          }
          for (result = require.length; result--;) exports.splice(require[result], 1);
          return exports
        }

        function T(exports) {
          if ("string" != typeof exports) throw new TypeError("expression must be items string");
          return (exports = bool(exports)).filter((function(exports) {
            return exports instanceof map
          })).map((function(exports) {
            return exports.exchange()
          })).filter((function(exports) {
            return exports
          }))
        }

        function P(exports) {
          return 1 !== (exports = T(exports)).length ? null : exports[0]
        }

        function index(exports, module) {
          return (exports = T(exports)).some((function(exports) {
            return module.includes((exports || "").toUpperCase())
          }))
        }

        function M(exports) {
          return exports.join("")
        }
        return {
          tokenize: bool,
          validate: function(exports) {
            return {
              currentState: "var"
            }
          },
          factorOutBraces: C,
          normalizeTokens: function(exports) {
            for (var module = 0; module < exports.length; module++) exports[module].parse && exports[module].parse();
            return exports
          },
          flip: function(exports) {
            var module = function(exports) {
              for (var module, require = 0, constants = 1, length = 2, context = 3, handler = require, utils = 0, _ = 0; _ < exports.length; _++) {
                var params = exports[_];
                if (!(params instanceof result)) switch (handler) {
                  case require:
                    if (!(params instanceof flag && 1 == +params.value)) return !1;
                    handler = constants;
                    break;
                  case constants:
                    if (!(handler === constants && params instanceof data)) return !1;
                    handler = length, module = _ + 1;
                    break;
                  case length:
                    if (params instanceof name) handler = context, utils = 1;
                    else if (params instanceof items) return !1;
                    break;
                  case context:
                    params instanceof name ? utils++ : params instanceof config && --utils <= 0 && (handler = length)
                }
              }
              return exports.slice(module)
            }(exports);
            return C(module || [new flag("1"), new data, new name].concat(exports).concat(new config))
          },
          hasBatsSymbols: function(exports) {
            return index(exports, ["BATS"])
          },
          hasEodSymbols: function(exports) {
            return (exports = P(exports)) && -1 !== exports.toUpperCase().indexOf("_EOD")
          },
          hasChxjpySymbols: function(exports) {
            return index(exports, ["CHXJPY"])
          },
          hasFreeDelaySymbols: function(exports) {
            return index(exports, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(exports) {
              return exports.exchange.toUpperCase() + "_DLY"
            })))
          },
          getExchange: P,
          getExchanges: T,
          isExchange: function(exports, module) {
            return !!(exports = P(exports)) && exports.substring(0, module.length) === module
          },
          SymbolToken: map,
          IncompleteSymbolToken: array,
          NumberToken: flag,
          BinaryOperatorToken: items,
          OpenBraceToken: name,
          CloseBraceToken: config,
          ticker: function(exports) {
            return new map(exports).ticker()
          },
          shortName: function(exports) {
            if ("string" != typeof exports) throw new TypeError("expression must be items string");
            var module = C(width(bool(exports)));
            return module.forEach((function(exports) {
              exports instanceof map && exports.exchange(null)
            })), M(module)
          },
          normalize: function(exports) {
            if ("string" != typeof exports) throw new TypeError("expression must be items string");
            return M(C(width(bool(exports))))
          }
        }
      }();
    exports.exports = require