/**
 * Module 59149 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

59149: e => {
    "use strict";
    var t = [{
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
      i = function() {
        var e = [{
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

        function i(e, t) {
          var i = function() {};
          return i.prototype = t.prototype, e.prototype = new i, e
        }

        function s() {}

        function o(e) {
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
        s.prototype.toString = function() {
            return this.value
          }, i(o, s), i(n, s), n.prototype.value = "(", i(r, s), r.prototype.value = ")", i(a, s), i(l, a), l.prototype
          .value = "+", l.prototype.precedence = 0, l.prototype.commutative = !0, i(c, a), c.prototype.value = "-", c
          .prototype.precedence = 0, c.prototype.commutative = !1, i(h, a), h.prototype.value = "*", h.prototype
          .precedence = 1, h.prototype.commutative = !0, i(d, a), d.prototype.value = "/", d.prototype.precedence = 1, d
          .prototype.commutative = !1, i(u, a), u.prototype.value = "^", u.prototype.precedence = 2, u.prototype
          .commutative = !1;
        var _ = /^'?(?:([A-Z0-9_]+):)?(.*?)'?$/i,
          p = /[+\-/*]/;

        function m(e) {
          this.value = e
        }

        function g(e) {
          this.value = e
        }

        function f(e) {
          this.value = e
        }

        function y() {
          m.apply(this, arguments)
        }

        function v() {
          g.apply(this, arguments)
        }
        i(m, s), m.prototype.toString = function() {
            if (this.hasOwnProperty("_ticker")) {
              var e = p.test(this._ticker) ? "'" : "";
              return e + (this._exchange ? this._exchange + ":" : "") + this._ticker + e
            }
            return this.value
          }, m.prototype.parse = function() {
            var e = _.exec(this.value);
            e[1] && (this._exchange = e[1]), this._ticker = e[2]
          }, m.prototype.parseAsFutures = function() {
            this.hasOwnProperty("_ticker") || this.parse();
            for (var e = function(e) {
                return t.some((function(t) {
                  return t.t === e
                }))
              }, i = 2; i >= 1; --i) {
              var s = this._ticker.slice(0, i);
              if (e(s)) {
                this._root = s, this._contract = this._ticker.slice(i);
                break
              }
            }
          }, m.prototype.exchange = function(e) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._exchange;
            null == e ? delete this._exchange : this._exchange = e + ""
          }, m.prototype.ticker = function(e) {
            if (this.hasOwnProperty("_ticker") || this.parse(), !(arguments.length > 0)) return this._ticker;
            null == e ? delete this._ticker : this._ticker = e + "", delete this._root, delete this._contract
          }, m.prototype.root = function(e) {
            if (this.hasOwnProperty("_root") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == e ? delete this._root : (this._root = e + "", this._root && (this._ticker = this._root + (this
              ._contract || "")))
          }, m.prototype.contract = function(e) {
            if (this.hasOwnProperty("_contract") || this.parseAsFutures(), !(arguments.length > 0)) return this._root;
            null == e ? delete this._contract : (this._contract = e + "", this._root && (this._ticker = this._root +
              this._contract))
          }, i(g, s), g.prototype.toString = function() {
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
        var S = new RegExp(e.map((function(e) {
          return "(" + ("string" == typeof e.pattern ? e.pattern.replace(/[\^$()[\]{}*+?|\\]/g, "\\$&") : e
            .pattern.source) + ")"
        })).concat(".").join("|"), "g");

        function b(t, i) {
          var s, n = [];
          e: for (; s = S.exec(t);) {
            for (var r = e.length; r--;)
              if (s[r + 1]) {
                if (e[r].ctor) {
                  var a = new e[r].ctor(s[r + 1]);
                  a._offset = s.index, n.push(a)
                }
                continue e
              } var l = new f(s[0]);
            l._offset = s.index, n.push(l)
          }
          if (i && i.recover) {
            var c;
            for (r = n.length; r--;) {
              var h = n[r];
              if (h instanceof g || h instanceof m) {
                if (void 0 !== c) {
                  var d = new m(""),
                    u = n.splice(r, c - r + 1, d);
                  d.value = u.map((function(e) {
                    return e.value
                  })).join("")
                }
                c = r
              } else h instanceof o || (c = void 0)
            }
          }
          return n
        }

        function w(e) {
          for (var t = [], i = 0; i < e.length; i++) e[i] instanceof o || t.push(e[i]);
          return t
        }

        function C(e) {
          e = w(e);
          for (var t, i = [], s = [], o = 0; o < e.length; o++) {
            var l = e[o];
            if (l instanceof a) s.length && s[s.length - 1].minPrecedence > l.precedence && (s[s.length - 1]
              .minPrecedence = l.precedence);
            else if (l instanceof n) s.push(t = {
              minPrecedence: 1 / 0,
              openBraceIndex: o
            });
            else if (l instanceof r) {
              var c = e[(t = s.pop()).openBraceIndex - 1],
                h = e[o + 1];
              h instanceof a && !(h.precedence <= t.minPrecedence) || !(!(c instanceof a) || c.precedence < t
                .minPrecedence || c.precedence === t.minPrecedence && c.commutative) || (i.unshift(t.openBraceIndex),
                i.push(o), s.length && s[s.length - 1].minPrecedence > t.minPrecedence && (s[s.length - 1]
                  .minPrecedence = t.minPrecedence))
            }
          }
          for (o = i.length; o--;) e.splice(i[o], 1);
          return e
        }

        function T(e) {
          if ("string" != typeof e) throw new TypeError("expression must be a string");
          return (e = b(e)).filter((function(e) {
            return e instanceof m
          })).map((function(e) {
            return e.exchange()
          })).filter((function(e) {
            return e
          }))
        }

        function P(e) {
          return 1 !== (e = T(e)).length ? null : e[0]
        }

        function x(e, t) {
          return (e = T(e)).some((function(e) {
            return t.includes((e || "").toUpperCase())
          }))
        }

        function M(e) {
          return e.join("")
        }
        return {
          tokenize: b,
          validate: function(e) {
            return {
              currentState: "var"
            }
          },
          factorOutBraces: C,
          normalizeTokens: function(e) {
            for (var t = 0; t < e.length; t++) e[t].parse && e[t].parse();
            return e
          },
          flip: function(e) {
            var t = function(e) {
              for (var t, i = 0, s = 1, l = 2, c = 3, h = i, u = 0, _ = 0; _ < e.length; _++) {
                var p = e[_];
                if (!(p instanceof o)) switch (h) {
                  case i:
                    if (!(p instanceof g && 1 == +p.value)) return !1;
                    h = s;
                    break;
                  case s:
                    if (!(h === s && p instanceof d)) return !1;
                    h = l, t = _ + 1;
                    break;
                  case l:
                    if (p instanceof n) h = c, u = 1;
                    else if (p instanceof a) return !1;
                    break;
                  case c:
                    p instanceof n ? u++ : p instanceof r && --u <= 0 && (h = l)
                }
              }
              return e.slice(t)
            }(e);
            return C(t || [new g("1"), new d, new n].concat(e).concat(new r))
          },
          hasBatsSymbols: function(e) {
            return x(e, ["BATS"])
          },
          hasEodSymbols: function(e) {
            return (e = P(e)) && -1 !== e.toUpperCase().indexOf("_EOD")
          },
          hasChxjpySymbols: function(e) {
            return x(e, ["CHXJPY"])
          },
          hasFreeDelaySymbols: function(e) {
            return x(e, pro.getProductsByType(pro.PRODUCT_TYPES.exchange).map((function(e) {
              return e.exchange.toUpperCase() + "_DLY"
            })))
          },
          getExchange: P,
          getExchanges: T,
          isExchange: function(e, t) {
            return !!(e = P(e)) && e.substring(0, t.length) === t
          },
          SymbolToken: m,
          IncompleteSymbolToken: y,
          NumberToken: g,
          BinaryOperatorToken: a,
          OpenBraceToken: n,
          CloseBraceToken: r,
          ticker: function(e) {
            return new m(e).ticker()
          },
          shortName: function(e) {
            if ("string" != typeof e) throw new TypeError("expression must be a string");
            var t = C(w(b(e)));
            return t.forEach((function(e) {
              e instanceof m && e.exchange(null)
            })), M(t)
          },
          normalize: function(e) {
            if ("string" != typeof e) throw new TypeError("expression must be a string");
            return M(C(w(b(e))))
          }
        }
      }();
    e.exports = i