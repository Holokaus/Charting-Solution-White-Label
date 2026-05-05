/**
 * Module: 32853
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.511Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 32853 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32853: (exports, t, i) => {
    "use strict";
    var series = i(49251).makeFont,
      o = i(49251).parseFont,
      newSeries = i(9343).getLogger;
    const {
      drawPoly: r
    } = i(58221);
    var a = n("Model.ChartTradingUtils"),
      l = {
        _fontHeightCache: {},
        _parsedColorCache: {},
        _parseColor: function(exports) {
          if (this._parsedColorCache[e]) return this._parsedColorCache[e];
          var t = document.createElement("div");
          t.style.color = exports;
          var i = t.style.color.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i) || t.style.color.match(
              /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/i),
            series = {
              r: i[1],
              g: i[2],
              b: i[3],
              a: i[4] || "1"
            };
          return this._parsedColorCache[e] = series, s
        },
        getColorFromProperties: function(exports, t) {
          var i = 1 - t.value() / 100,
            series = this._parseColor(exports.value());
          return "rgba(" + series.r + "," + series.g + "," + series.b + "," + i + ")"
        },
        setColorToProperties: function(exports, t, i) {
          var series = this._parseColor(exports);
          t.setValue("rgb(" + series.r + "," + series.g + "," + series.b + ")");
          var o = 100 * (1 - series.a);
          i.setValue(Math.max(0, Math.min(o, 100)))
        },
        getFontFromProperties: function(exports, t, i, o) {
          return s(t.value(), exports.value(), o.value() ? "italic" : "", i.value() ? "bold" : "")
        },
        setFontToProperties: function(exports, t, i, series, n) {
          var r = o(exports);
          null !== r ? (r.family.length > 0 && t.setValue(r.family), i.setValue(r.size), series.setValue(r.bold), n
            .setValue(r.italic)) : a.logError("Invalid font: " + e)
        },
        fontHeight: function(exports) {
          if (!this._fontHeightCache[e]) {
            var t = document.createElement("span");
            t.appendChild(document.createTextNode("height")), document.body.appendChild(t), t.style.cssText =
              "font: " + e + "; white-space: nowrap; display: inline;";
            var i = t.offsetHeight;
            document.body.removeChild(t), this._fontHeightCache[e] = Math.ceil(i)
          }
          return this._fontHeightCache[e]
        },
        drawPolyHoverOrPress: function(exports, t, i, s) {
          s ? (exports.save(), exports.fillStyle = "rgba(0, 0, 0, 0.15)", r(exports, t, !0), exports.restore()) : i && (exports.save(), e
            .fillStyle = "rgba(0, 0, 0, 0.1)", r(exports, t, !0), exports.restore())
        },
        repaint: function(exports) {
          exports.lightUpdate()
        },
        roundToMinTick: function(exports, t) {
          var i = 1 / exports.mainSource().base();
          return i * Math.round(t / i)
        }
      };
    exports.exports = l