/**
 * Module 59149 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

59149: watchedValue_e => {
    "use strict";
    var watchedValue_t = [{
        d: "E-Mini S&P 500",
        watchedValue_t: "ES"
      }, {
        d: "E-Mini Nasdaq 100",
        watchedValue_t: "NQ"
      }, {
        d: "Gold",
        watchedValue_t: "GC"
      }, {
        d: "Silver",
        watchedValue_t: "SI"
      }, {
        d: "Crude Oil WTI",
        watchedValue_t: "CL"
      }, {
        d: "Natural Gas",
        watchedValue_t: "NG"
      }, {
        d: "Australian Dollar",
        watchedValue_t: "6A"
      }, {
        d: "Australian Dollar (Floor)",
        watchedValue_t: "AD"
      }, {
        d: "Euro FX",
        watchedValue_t: "6E"
      }, {
        d: "Euro FX (Floor)",
        watchedValue_t: "EC"
      }, {
        d: "Corn",
        watchedValue_t: "ZC"
      }, {
        d: "Corn (Floor)",
        watchedValue_t: "C"
      }, {
        d: "Eurodollar",
        watchedValue_t: "GE"
      }, {
        d: "Eurodollar (Floor)",
        watchedValue_t: "ED"
      }],
      i = function() {
        var watchedValue_e = [{
          pattern: "(",
          ctor: watchedValue_n
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
          pattern: /\d+(?:\.\d*|(?![watchedValue_a-zA-Z0-9_!:.&]))|\.\d+/,
          ctor: g
        }, {
          pattern: /\./,
          ctor: v
        }, {
          pattern: /[watchedValue_a-zA-Z0-9_\u0370-\u1FFF_\u2E80-\uFFFF^][watchedValue_a-zA-Z0-9_\u0020\u0370-\u1FFF_\u2E80-\uFFFF_!:.&]*|'.+?'/,
          ctor: m
        }, {
          pattern: /'[^']*/,
          ctor: y
        }, {
          pattern: /[\0-\x20\watchedValue_s]+/,
          ctor: o
        }];

        function i(watchedValue_e, watchedValue_t) {
          var i = function() {};
          return i.prototype = watchedValue_t.prototype, watchedValue_e.prototype = new i, watchedValue_e
        }

        function watchedValue_s() {}

        function o(watchedValue_e) {
          this.value = watchedValue_e
        }

        function watchedValue_n() {}

        function r() {}

        function watchedValue_a() {}

        function l() {}

        function c() {}

        function h() {}

        function d() {}

        function u() {}
        watchedValue_s.prototype.toString = function() {
            return this.value
          }, i(o, watchedValue_s), i(watchedValue_n, watchedValue_s), watchedValue_n.prototype.value = "(", i(r, watchedValue_s), r.prototype.value = ")", i(watchedValue_a, watchedValue_s), i(l, watchedValue_a), l.prototype
          .value = "+", l.prototype.precedence = 0, l.prototype.commutative = !0, i(c, watchedValue_a), c.prototype.value = "-", c
          .prototype.precedence = 0, c.prototype.commutative = !1, i(h, watchedValue_a), h.prototype.value = "*", h.prototype
          .precedence = 1, h.prototype.commutative = !0, i(d, watchedValue_a), d.prototype.value = "/", d.prototype.precedence = 1, d
          .prototype.commutative = !1, i(u, watchedValue_a), u.prototype.value = "^", u.prototype.precedence = 2, u.prototype
          .commutative = !1;
        var _ = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
          p = /[+\-/*]/;

        function m(watchedValue_e) {
          this.value = watchedValue_e
        }

        function g(watchedValue_e) {
          this.value = watchedValue_e
        }

        function f(watchedValue_e) {
          this.value = watchedValue_e
        }

        function y() {
          m.apply(this, arguments)
        }

        function v() {
          g.apply(this, arguments)
        }
        i(m, watchedValue_s), m.prototype.toString = function() {
            if (this.hasOwnProperty("_ticker")) {
              var watchedValue_e = p.test(this._ticker) ? "'" : "";
              return watchedValue_e + (this._exchange ? this._exchange + ":" : "") + this._ticker + watchedValue_e
            }
            return this.value
          }, m.prototype.parse = function() {
            var watchedValue_e = _.exec(this.value);
            watchedValue_e[1] && (this._exchange = watchedValue_e[1]), this._ticker = watchedValue_e[2]
          }, m.prototype.parseAsFutures = function() {
            this.hasOwnProperty("_ticker") || this.parse();
            for (var watchedValue_e = function(watchedValue_e) {
                return watchedValue_t.some((function(watchedValue_t) {
                  return watchedValue_t.watchedValue_t === watchedValue_e
                }))
              }, i = 2; i >= 1; --i) {
              var watchedValue_s = this._ticker.slice(0, i);
              if (watchedValue_e(watchedValue_s)) {
                this._root = watchedValue_s, this._contract = this._ticker.slice(i);
                break
              }
            }
          }, m.prototype.exchange = function(watchedValue_e) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
            null == watchedValue_e ? delete this._exchange : this._exchange = watchedValue_e + ""
          }, m.prototype.ticker = function(watchedValue_e) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
            null == watchedValue_e ? delete this._ticker : this._ticker = watchedValue_e + "", delete this._root, delete this._contract
          }, m.prototype.root = function(watchedValue_e) {
            if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == watchedValue_e ? delete this._root : (this._root = watchedValue_e + "", this._root && (this._ticker = this._root + (this
              ._contract || "")))
          }, m.prototype.contract = function(watchedValue_e) {
            if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == watchedValue_e ? delete this._contract : (this._contract = watchedValue_e + "", this._root && (this._ticker = this._root +
              this._contract))
          }, i(g, watchedValue_s), g.prototype.toString = function() {
            return this.hasOwnProperty("_normalizedValue") ? this._normalizedValue : this.value
          },
          g.prototype.parse = function() {
            this._normalizedValue = this.value.replace(/^0+|\.0*$/g, "").replace(/(\.\d*?)0+$/, "$1").replace(/^(\.|$)/,
              "0$1")
          }, f.prototype.toString = function() {
            return this.value
          }, i(y, m), y.prototype.isIncomplete = !0, y.prototype.incompleteSuggest = function() {
            if ("'" !== this.value) return String("'")
          }, i(v, g), v.prototype.isIncomplete = !0;
        var S = new RegExp(watchedValue_e.map((function(watchedValue_e) {
          return "(" + ("string" == typeof watchedValue_e.pattern ? watchedValue_e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : watchedValue_e
            .pattern.source) + ")"
        })).concat(".").join("|"), "g");

        function b(watchedValue_t, i) {
          var watchedValue_s, watchedValue_n = [];
          watchedValue_e: for (; watchedValue_s = S.exec(watchedValue_t);) {
            for (var r = watchedValue_e.length; r--;)
              if (watchedValue_s[r + 1]) {
                if (watchedValue_e[r].ctor) {
                  var watchedValue_a = new watchedValue_e[r].ctor(watchedValue_s[r + 1]);
                  watchedValue_a._offset = watchedValue_s.index, watchedValue_n.push(watchedValue_a)
                }
                continue watchedValue_e
              } var l = new f(watchedValue_s[0]);
            l._offset = watchedValue_s.index, watchedValue_n.push(l)
          }
          if (i && i.recover) {
            var c;
            for (r = watchedValue_n.length; r--;) {
              var h = watchedValue_n[r];
              if (h instanceof g || h instanceof m) {
                if (void 0 !== c) {
                  var d = new m(""),
                    u = watchedValue_n.splice(r, c - r + 1, d);
                  d.value = u.map((function(watchedValue_e) {
                    return watchedValue_e.value
                  })).join("")
                }
                c = r
              } else h instanceof o || (c = void 0)
            }
          }
          return watchedValue_n
        }

        function w(watchedValue_e) {
          for (var watchedValue_t = [], i = 0; i < watchedValue_e.length; i++) watchedValue_e[i] instanceof o || watchedValue_t.push(watchedValue_e[i]);
          return watchedValue_t
        }

        function C(watchedValue_e) {
          watchedValue_e = w(watchedValue_e);
          for (var watchedValue_t, i = [], watchedValue_s = [], o = 0; o < watchedValue_e.length; o++) {
            var l = watchedValue_e[o];
            if (l instanceof watchedValue_a) watchedValue_s.length && watchedValue_s[watchedValue_s.length - 1].minPrecedence > l.precedence && (watchedValue_s[watchedValue_s.length - 1]
              .minPrecedence = l.precedence);
            else if (l instanceof watchedValue_n) watchedValue_s.push(watchedValue_t = {
              minPrecedence: 1 / 0,
              openBraceIndex: o
            });
            else if (l instanceof r) {
              var c = watchedValue_e[(watchedValue_t = watchedValue_s.pop()).openBraceIndex - 1],
                h = watchedValue_e[o + 1];
              h instanceof watchedValue_a && !(h.precedence <= watchedValue_t.minPrecedence) || !(!(c instanceof watchedValue_a) || c.precedence < watchedValue_t
                .minPrecedence || c.precedence === watchedValue_t.minPrecedence && c.commutative) || (i.unshift(watchedValue_t.openBraceIndex),
                i.push(o), watchedValue_s.length && watchedValue_s[watchedValue_s.length - 1].minPrecedence > watchedValue_t.minPrecedence && (watchedValue_s[watchedValue_s.length - 1]
                  .minPrecedence = watchedValue_t.minPrecedence))
            }
          }
          for (o = i.length; o--;) watchedValue_e.splice(i[o], 1);
          return watchedValue_e
        }

        function T(watchedValue_e) {
          if ("string" != typeof watchedValue_e) throw new TypeError("expression must be watchedValue_a string");
          return (watchedValue_e = b(watchedValue_e)).filter((function(watchedValue_e) {
            return watchedValue_e instanceof m
          })).map((function(watchedValue_e) {
            return watchedValue_e.exchange()
          })).filter((function(watchedValue_e) {
            return watchedValue_e
          }))
        }

        function P(watchedValue_e) {
          return 1 !== (watchedValue_e = T(watchedValue_e)).length ? null : watchedValue_e[0]
        }

        function x(watchedValue_e, watchedValue_t) {
          return (watchedValue_e = T(watchedValue_e)).some((function(watchedValue_e) {
            return watchedValue_t.includes((watchedValue_e || "").toUpperCase())
          }))
        }

        function M(watchedValue_e) {
          return watchedValue_e.join("")
        }
        return {
          tokenize: b,
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
              for (var watchedValue_t, i = 0, watchedValue_s = 1, l = 2, c = 3, h = i, u = 0, _ = 0; _ < watchedValue_e.length; _++) {
                var p = watchedValue_e[_];
                if (!(p instanceof o)) switch (h) {
                  case i:
                    if (!(p instanceof g && 1 == +p.value)) return !1;
                    h = watchedValue_s;
                    break;
                  case watchedValue_s:
                    if (!(h === watchedValue_s && p instanceof d)) return !1;
                    h = l, watchedValue_t = _ + 1;
                    break;
                  case l:
                    if (p instanceof watchedValue_n) h = c, u = 1;
                    else if (p instanceof watchedValue_a) return !1;
                    break;
                  case c:
                    p instanceof watchedValue_n ? u++ : p instanceof r && --u <= 0 && (h = l)
                }
              }
              return watchedValue_e.slice(watchedValue_t)
            }(watchedValue_e);
            return C(watchedValue_t || [new g("1"), new d, new watchedValue_n].concat(watchedValue_e).concat(new r))
          },
          hasBatsSymbols: function(watchedValue_e) {
            return x(watchedValue_e, ["BATS"])
          },
          hasEodSymbols: function(watchedValue_e) {
            return (watchedValue_e = P(watchedValue_e)) && -1 !== watchedValue_e.toUpperCase().indexOf("_EOD")
          },
          hasChxjpySymbols: function(watchedValue_e) {
            return x(watchedValue_e, ["CHXJPY"])
          },
          hasFreeDelaySymbols: function(watchedValue_e) {
            return x(watchedValue_e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(watchedValue_e) {
              return watchedValue_e.exchange.toUpperCase() + "_DLY"
            })))
          },
          getExchange: P,
          getExchanges: T,
          isExchange: function(watchedValue_e, watchedValue_t) {
            return !!(watchedValue_e = P(watchedValue_e)) && watchedValue_e.substring(0, watchedValue_t.length) === watchedValue_t
          },
          SymbolToken: m,
          IncompleteSymbolToken: y,
          NumberToken: g,
          BinaryOperatorToken: watchedValue_a,
          OpenBraceToken: watchedValue_n,
          CloseBraceToken: r,
          ticker: function(watchedValue_e) {
            return new m(watchedValue_e).ticker()
          },
          shortName: function(watchedValue_e) {
            if ("string" != typeof watchedValue_e) throw new TypeError("expression must be watchedValue_a string");
            var watchedValue_t = C(w(b(watchedValue_e)));
            return watchedValue_t.forEach((function(watchedValue_e) {
              watchedValue_e instanceof m && watchedValue_e.exchange(null)
            })), M(watchedValue_t)
          },
          normalize: function(watchedValue_e) {
            if ("string" != typeof watchedValue_e) throw new TypeError("expression must be watchedValue_a string");
            return M(C(w(b(watchedValue_e))))
          }
        }
      }();
    watchedValue_e.exports = i