/**
 * Module 32853 - Auto-beautified from TradingView webpack bundle
 *
 * @module 32853
 * @date 2026-04-23
 * @size 1859 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 9343, 49251, 58221
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

32853: (e, t, i) => {
    "use strict";
    var s = i(49251).makeFont,
      o = i(49251).parseFont,
      n = i(9343).getLogger;
    const {
      drawPoly: r
    } = i(58221);
    var a = n("Model.ChartTradingUtils"),
      l = {
        _fontHeightCache: {},
        _parsedColorCache: {},
        _parseColor: function(e) {
          if (this._parsedColorCache[e]) return this._parsedColorCache[e];
          var t = document.createElement("div");
          t.style.color = e;
          var i = t.style.color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i) || t.style.color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/i),
            s = {
              r: i[1],
              g: i[2],
              b: i[3],
              a: i[4] || "1"
            };
          return this._parsedColorCache[e] = s, s
        },
        getColorFromProperties: function(e, t) {
          var i = 1 - t.value() / 100,
            s = this._parseColor(e.value());
          return "rgba(" + s.r + "," + s.g + "," + s.b + "," + i + ")"
        },
        setColorToProperties: function(e, t, i) {
          var s = this._parseColor(e);
          t.setValue("rgb(" + s.r + "," + s.g + "," + s.b + ")");
          var o = 100 * (1 - s.a);
          i.setValue(Math.max(0, Math.min(o, 100)))
        },
        getFontFromProperties: function(e, t, i, o) {
          return s(t.value(), e.value(), o.value() ? "italic" : "", i.value() ? "bold" : "")
        },
        setFontToProperties: function(e, t, i, s, n) {
          var r = o(e);
          null !== r ? (r.family.length > 0 && t.setValue(r.family), i.setValue(r.size), s.setValue(r.bold), n.setValue(r.italic)) : a.logError("Invalid font: " + e)
        },
        fontHeight: function(e) {
          if (!this._fontHeightCache[e]) {
            var t = document.createElement("span");
            t.appendChild(document.createTextNode("height")), document.body.appendChild(t), t.style.cssText = "font: " + e + "; white-space: nowrap; display: inline;";
            var i = t.offsetHeight;
            document.body.removeChild(t), this._fontHeightCache[e] = Math.ceil(i)
          }
          return this._fontHeightCache[e]
        },
        drawPolyHoverOrPress: function(e, t, i, s) {
          s ? (e.save(), e.fillStyle = "rgba(0, 0, 0, 0.15)", r(e, t, !0), e.restore()) : i && (e.save(), e.fillStyle = "rgba(0, 0, 0, 0.1)", r(e, t, !0), e.restore())
        },
        repaint: function(e) {
          e.lightUpdate()
        },
        roundToMinTick: function(e, t) {
          var i = 1 / e.mainSource().base();
          return i * Math.round(t / i)
        }
      };
    e.exports = l
