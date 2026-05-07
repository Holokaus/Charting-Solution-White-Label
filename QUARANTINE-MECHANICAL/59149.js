/**
 * Module 59149 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

59149: watchedValue_e => {
    "use strict";
    var watchedValue_t = [{
        watchedValue_d: "E-Mini S&P 500",
        watchedValue_t: "ES"
      }, {
        watchedValue_d: "E-Mini Nasdaq 100",
        watchedValue_t: "NQ"
      }, {
        watchedValue_d: "Gold",
        watchedValue_t: "GC"
      }, {
        watchedValue_d: "Silver",
        watchedValue_t: "SI"
      }, {
        watchedValue_d: "Crude Oil WTI",
        watchedValue_t: "CL"
      }, {
        watchedValue_d: "Natural Gas",
        watchedValue_t: "NG"
      }, {
        watchedValue_d: "Australian Dollar",
        watchedValue_t: "6A"
      }, {
        watchedValue_d: "Australian Dollar (Floor)",
        watchedValue_t: "AD"
      }, {
        watchedValue_d: "Euro FX",
        watchedValue_t: "6E"
      }, {
        watchedValue_d: "Euro FX (Floor)",
        watchedValue_t: "EC"
      }, {
        watchedValue_d: "Corn",
        watchedValue_t: "ZC"
      }, {
        watchedValue_d: "Corn (Floor)",
        watchedValue_t: "C"
      }, {
        watchedValue_d: "Eurodollar",
        watchedValue_t: "GE"
      }, {
        watchedValue_d: "Eurodollar (Floor)",
        watchedValue_t: "ED"
      }],
      watchedValue_i = function() {
        var watchedValue_e = [{
          pattern: "(",
          ctor: watchedValue_n
        }, {
          pattern: ")",
          ctor: watchedValue_r
        }, {
          pattern: "+",
          ctor: watchedValue_l
        }, {
          pattern: "-",
          ctor: watchedValue_c
        }, {
          pattern: "*",
          ctor: watchedValue_h
        }, {
          pattern: "/",
          ctor: watchedValue_d
        }, {
          pattern: "^",
          ctor: watchedValue_u
        }, {
          pattern: /\watchedValue_d+(?:\.\watchedValue_d*|(?![watchedValue_a-zA-Z0-9_!:.&]))|\.\watchedValue_d+/,
          ctor: watchedValue_g
        }, {
          pattern: /\./,
          ctor: watchedValue_v
        }, {
          pattern: /[watchedValue_a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][watchedValue_a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/,
          ctor: watchedValue_m
        }, {
          pattern: /'[^']*/,
          ctor: watchedValue_y
        }, {
          pattern: /[\0-\x20\watchedValue_s]+/,
          ctor: watchedValue_o
        }];

        function watchedValue_i(watchedValue_e, watchedValue_t) {
          var watchedValue_i = function() {};
          return watchedValue_i.prototype = watchedValue_t.prototype, watchedValue_e.prototype = new watchedValue_i, watchedValue_e
        }

        function watchedValue_s() {}

        function watchedValue_o(watchedValue_e) {
          this.value = watchedValue_e
        }

        function watchedValue_n() {}

        function watchedValue_r() {}

        function watchedValue_a() {}

        function watchedValue_l() {}

        function watchedValue_c() {}

        function watchedValue_h() {}

        function watchedValue_d() {}

        function watchedValue_u() {}
        watchedValue_s.prototype.toString = function() {
            return this.value
          }, watchedValue_i(watchedValue_o, watchedValue_s), watchedValue_i(watchedValue_n, watchedValue_s), watchedValue_n.prototype.value = "(", watchedValue_i(watchedValue_r, watchedValue_s), watchedValue_r.prototype.value = ")", watchedValue_i(watchedValue_a, watchedValue_s), watchedValue_i(watchedValue_l, watchedValue_a), watchedValue_l.prototype
          .value = "+", watchedValue_l.prototype.precedence = 0, watchedValue_l.prototype.commutative = !0, watchedValue_i(watchedValue_c, watchedValue_a), watchedValue_c.prototype.value = "-", watchedValue_c
          .prototype.precedence = 0, watchedValue_c.prototype.commutative = !1, watchedValue_i(watchedValue_h, watchedValue_a), watchedValue_h.prototype.value = "*", watchedValue_h.prototype
          .precedence = 1, watchedValue_h.prototype.commutative = !0, watchedValue_i(watchedValue_d, watchedValue_a), watchedValue_d.prototype.value = "/", watchedValue_d.prototype.precedence = 1, watchedValue_d
          .prototype.commutative = !1, watchedValue_i(watchedValue_u, watchedValue_a), watchedValue_u.prototype.value = "^", watchedValue_u.prototype.precedence = 2, watchedValue_u.prototype
          .commutative = !1;
        var _ = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/watchedValue_i,
          watchedValue_p = /[+\-/*]/;

        function watchedValue_m(watchedValue_e) {
          this.value = watchedValue_e
        }

        function watchedValue_g(watchedValue_e) {
          this.value = watchedValue_e
        }

        function watchedValue_f(watchedValue_e) {
          this.value = watchedValue_e
        }

        function watchedValue_y() {
          watchedValue_m.apply(this, arguments)
        }

        function watchedValue_v() {
          watchedValue_g.apply(this, arguments)
        }
        watchedValue_i(watchedValue_m, watchedValue_s), watchedValue_m.prototype.toString = function() {
            if (this.hasOwnProperty("_ticker")) {
              var watchedValue_e = watchedValue_p.test(this._ticker) ? "'" : "";
              return watchedValue_e + (this._exchange ? this._exchange + ":" : "") + this._ticker + watchedValue_e
            }
            return this.value
          }, watchedValue_m.prototype.parse = function() {
            var watchedValue_e = _.exec(this.value);
            watchedValue_e[1] && (this._exchange = watchedValue_e[1]), this._ticker = watchedValue_e[2]
          }, watchedValue_m.prototype.parseAsFutures = function() {
            this.hasOwnProperty("_ticker") || this.parse();
            for (var watchedValue_e = function(watchedValue_e) {
                return watchedValue_t.some((function(watchedValue_t) {
                  return watchedValue_t.watchedValue_t === watchedValue_e
                }))
              }, watchedValue_i = 2; watchedValue_i >= 1; --watchedValue_i) {
              var watchedValue_s = this._ticker.slice(0, watchedValue_i);
              if (watchedValue_e(watchedValue_s)) {
                this._root = watchedValue_s, this._contract = this._ticker.slice(watchedValue_i);
                break
              }
            }
          }, watchedValue_m.prototype.exchange = function(watchedValue_e) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
            null == watchedValue_e ? delete this._exchange : this._exchange = watchedValue_e + ""
          }, watchedValue_m.prototype.ticker = function(watchedValue_e) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
            null == watchedValue_e ? delete this._ticker : this._ticker = watchedValue_e + "", delete this._root, delete this._contract
          }, watchedValue_m.prototype.root = function(watchedValue_e) {
            if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == watchedValue_e ? delete this._root : (this._root = watchedValue_e + "", this._root && (this._ticker = this._root + (this
              ._contract || "")))
          }, watchedValue_m.prototype.contract = function(watchedValue_e) {
            if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == watchedValue_e ? delete this._contract : (this._contract = watchedValue_e + "", this._root && (this._ticker = this._root +
              this._contract))
          }, watchedValue_i(watchedValue_g, watchedValue_s), watchedValue_g.prototype.toString = function() {
            return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
          },
          watchedValue_g.prototype.parse = function() {
            this._normalizedValue = this.value.replace(/^0+|\.0*$/watchedValue_g, "").replace(/(\.\watchedValue_d*?)0+$/, "$1").replace(/^(\.|$)/,
              "0$1")
          }, watchedValue_f.prototype.toString = function() {
            return this.value
          }, watchedValue_i(watchedValue_y, watchedValue_m), watchedValue_y.prototype.isIncomplete = !0, watchedValue_y.prototype.incompleteSuggest = function() {
            if ("'" !== this.value) return String("'")
          }, watchedValue_i(watchedValue_v, watchedValue_g), watchedValue_v.prototype.isIncomplete = !0;
        var S = new RegExp(watchedValue_e.map((function(watchedValue_e) {
          return "(" + ("string" == typeof watchedValue_e.pattern ? watchedValue_e.pattern.replace(/[\^$()[\]{}*+?|\\]/watchedValue_g, "\\$&") : watchedValue_e
            .pattern.source) + ")"
        })).concat(".").join("|"), "watchedValue_g");

        function watchedValue_b(watchedValue_t, watchedValue_i) {
          var watchedValue_s, watchedValue_n = [];
          watchedValue_e: for (; watchedValue_s = S.exec(watchedValue_t);) {
            for (var watchedValue_r = watchedValue_e.length; watchedValue_r--;)
              if (watchedValue_s[watchedValue_r + 1]) {
                if (watchedValue_e[watchedValue_r].ctor) {
                  var watchedValue_a = new watchedValue_e[watchedValue_r].ctor(watchedValue_s[watchedValue_r + 1]);
                  watchedValue_a._offset = watchedValue_s.index, watchedValue_n.push(watchedValue_a)
                }
                continue watchedValue_e
              } var watchedValue_l = new watchedValue_f(watchedValue_s[0]);
            watchedValue_l._offset = watchedValue_s.index, watchedValue_n.push(watchedValue_l)
          }
          if (watchedValue_i && watchedValue_i.recover) {
            var watchedValue_c;
            for (watchedValue_r = watchedValue_n.length; watchedValue_r--;) {
              var watchedValue_h = watchedValue_n[watchedValue_r];
              if (watchedValue_h instanceof watchedValue_g || watchedValue_h instanceof watchedValue_m) {
                if (void 0 !== watchedValue_c) {
                  var watchedValue_d = new watchedValue_m(""),
                    watchedValue_u = watchedValue_n.splice(watchedValue_r, watchedValue_c - watchedValue_r + 1, watchedValue_d);
                  watchedValue_d.value = watchedValue_u.map((function(watchedValue_e) {
                    return watchedValue_e.value
                  })).join("")
                }
                watchedValue_c = watchedValue_r
              } else watchedValue_h instanceof watchedValue_o || (watchedValue_c = void 0)
            }
          }
          return watchedValue_n
        }

        function watchedValue_w(watchedValue_e) {
          for (var watchedValue_t = [], watchedValue_i = 0; watchedValue_i < watchedValue_e.length; watchedValue_i++) watchedValue_e[watchedValue_i] instanceof watchedValue_o || watchedValue_t.push(watchedValue_e[watchedValue_i]);
          return watchedValue_t
        }

        function C(watchedValue_e) {
          watchedValue_e = watchedValue_w(watchedValue_e);
          for (var watchedValue_t, watchedValue_i = [], watchedValue_s = [], watchedValue_o = 0; watchedValue_o < watchedValue_e.length; watchedValue_o++) {
            var watchedValue_l = watchedValue_e[watchedValue_o];
            if (watchedValue_l instanceof watchedValue_a) watchedValue_s.length && watchedValue_s[watchedValue_s.length - 1].minPrecedence > watchedValue_l.precedence && (watchedValue_s[watchedValue_s.length - 1]
              .minPrecedence = watchedValue_l.precedence);
            else if (watchedValue_l instanceof watchedValue_n) watchedValue_s.push(watchedValue_t = {
              minPrecedence: 1 / 0,
              openBraceIndex: watchedValue_o
            });
            else if (watchedValue_l instanceof watchedValue_r) {
              var watchedValue_c = watchedValue_e[(watchedValue_t = watchedValue_s.pop()).openBraceIndex - 1],
                watchedValue_h = watchedValue_e[watchedValue_o + 1];
              watchedValue_h instanceof watchedValue_a && !(watchedValue_h.precedence <= watchedValue_t.minPrecedence) || !(!(watchedValue_c instanceof watchedValue_a) || watchedValue_c.precedence < watchedValue_t
                .minPrecedence || watchedValue_c.precedence === watchedValue_t.minPrecedence && watchedValue_c.commutative) || (watchedValue_i.unshift(watchedValue_t.openBraceIndex),
                watchedValue_i.push(watchedValue_o), watchedValue_s.length && watchedValue_s[watchedValue_s.length - 1].minPrecedence > watchedValue_t.minPrecedence && (watchedValue_s[watchedValue_s.length - 1]
                  .minPrecedence = watchedValue_t.minPrecedence))
            }
          }
          for (watchedValue_o = watchedValue_i.length; watchedValue_o--;) watchedValue_e.splice(watchedValue_i[watchedValue_o], 1);
          return watchedValue_e
        }

        function T(watchedValue_e) {
          if ("string" != typeof watchedValue_e) throw new TypeError("expression must be watchedValue_a string");
          return (watchedValue_e = watchedValue_b(watchedValue_e)).filter((function(watchedValue_e) {
            return watchedValue_e instanceof watchedValue_m
          })).map((function(watchedValue_e) {
            return watchedValue_e.exchange()
          })).filter((function(watchedValue_e) {
            return watchedValue_e
          }))
        }

        function P(watchedValue_e) {
          return 1 !== (watchedValue_e = T(watchedValue_e)).length ? null : watchedValue_e[0]
        }

        function watchedValue_x(watchedValue_e, watchedValue_t) {
          return (watchedValue_e = T(watchedValue_e)).some((function(watchedValue_e) {
            return watchedValue_t.includes((watchedValue_e || "").toUpperCase())
          }))
        }

        function M(watchedValue_e) {
          return watchedValue_e.join("")
        }
        return {
          tokenize: watchedValue_b,
          validate: function(watchedValue_e) {
            return {
              currentState: "var"
            }
          },
          factorOutBraces: C,
          normalizeTokens: function(watchedValue_e) {
            for (var watchedValue_t = 0; watchedValue_t < watchedValue_e.length; watchedValue_t++) watchedValue_e[watchedValue_t].parse && watchedValue_e[watchedValue_t].parse();
            return watchedValue_e
          },
          flip: function(watchedValue_e) {
            var watchedValue_t = function(watchedValue_e) {
              for (var watchedValue_t, watchedValue_i = 0, watchedValue_s = 1, watchedValue_l = 2, watchedValue_c = 3, watchedValue_h = watchedValue_i, watchedValue_u = 0, _ = 0; _ < watchedValue_e.length; _++) {
                var watchedValue_p = watchedValue_e[_];
                if (!(watchedValue_p instanceof watchedValue_o)) switch (watchedValue_h) {
                  case watchedValue_i:
                    if (!(watchedValue_p instanceof watchedValue_g && 1 == +watchedValue_p.value)) return !1;
                    watchedValue_h = watchedValue_s;
                    break;
                  case watchedValue_s:
                    if (!(watchedValue_h === watchedValue_s && watchedValue_p instanceof watchedValue_d)) return !1;
                    watchedValue_h = watchedValue_l, watchedValue_t = _ + 1;
                    break;
                  case watchedValue_l:
                    if (watchedValue_p instanceof watchedValue_n) watchedValue_h = watchedValue_c, watchedValue_u = 1;
                    else if (watchedValue_p instanceof watchedValue_a) return !1;
                    break;
                  case watchedValue_c:
                    watchedValue_p instanceof watchedValue_n ? watchedValue_u++ : watchedValue_p instanceof watchedValue_r && --watchedValue_u <= 0 && (watchedValue_h = watchedValue_l)
                }
              }
              return watchedValue_e.slice(watchedValue_t)
            }(watchedValue_e);
            return C(watchedValue_t || [new watchedValue_g("1"), new watchedValue_d, new watchedValue_n].concat(watchedValue_e).concat(new watchedValue_r))
          },
          hasBatsSymbols: function(watchedValue_e) {
            return watchedValue_x(watchedValue_e, ["BATS"])
          },
          hasEodSymbols: function(watchedValue_e) {
            return (watchedValue_e = P(watchedValue_e)) && -1 !== watchedValue_e.toUpperCase().indexOf("_EOD")
          },
          hasChxjpySymbols: function(watchedValue_e) {
            return watchedValue_x(watchedValue_e, ["CHXJPY"])
          },
          hasFreeDelaySymbols: function(watchedValue_e) {
            return watchedValue_x(watchedValue_e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(watchedValue_e) {
              return watchedValue_e.exchange.toUpperCase() + "_DLY"
            })))
          },
          getExchange: P,
          getExchanges: T,
          isExchange: function(watchedValue_e, watchedValue_t) {
            return !!(watchedValue_e = P(watchedValue_e)) && watchedValue_e.substring(0, watchedValue_t.length) === watchedValue_t
          },
          SymbolToken: watchedValue_m,
          IncompleteSymbolToken: watchedValue_y,
          NumberToken: watchedValue_g,
          BinaryOperatorToken: watchedValue_a,
          OpenBraceToken: watchedValue_n,
          CloseBraceToken: watchedValue_r,
          ticker: function(watchedValue_e) {
            return new watchedValue_m(watchedValue_e).ticker()
          },
          shortName: function(watchedValue_e) {
            if ("string" != typeof watchedValue_e) throw new TypeError("expression must be watchedValue_a string");
            var watchedValue_t = C(watchedValue_w(watchedValue_b(watchedValue_e)));
            return watchedValue_t.forEach((function(watchedValue_e) {
              watchedValue_e instanceof watchedValue_m && watchedValue_e.exchange(null)
            })), M(watchedValue_t)
          },
          normalize: function(watchedValue_e) {
            if ("string" != typeof watchedValue_e) throw new TypeError("expression must be watchedValue_a string");
            return M(C(watchedValue_w(watchedValue_b(watchedValue_e))))
          }
        }
      }();
    watchedValue_e.exports = watchedValue_i