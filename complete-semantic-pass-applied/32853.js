/**
 * Module 32853 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

32853: (logger_e, logger_t, logger_i) => {
    "use strict";
    var logger_s = logger_i(49251).makeFont,
      logger_o = logger_i(49251).parseFont,
      logger_n = logger_i(9343).getLogger;
    const {
      drawPoly: logger_r
    } = logger_i(58221);
    var logger_a = logger_n("Model.ChartTradingUtils"),
      logger_l = {
        _fontHeightCache: {},
        _parsedColorCache: {},
        _parseColor: function(logger_e) {
          if (this._parsedColorCache[logger_e]) return this._parsedColorCache[logger_e];
          var logger_t = document.createElement("div");
          logger_t.style.color = logger_e;
          var logger_i = logger_t.style.color.match(/^rgb\logger_s*\(\logger_s*(\logger_d+)\logger_s*,\logger_s*(\logger_d+)\logger_s*,\logger_s*(\logger_d+)\logger_s*\)$/logger_i) || logger_t.style.color.match(
              /^rgba\logger_s*\(\logger_s*(\logger_d+)\logger_s*,\logger_s*(\logger_d+)\logger_s*,\logger_s*(\logger_d+)\logger_s*,\logger_s*(\logger_d*\.?\logger_d+)\logger_s*\)$/logger_i),
            logger_s = {
              logger_r: logger_i[1],
              logger_g: logger_i[2],
              logger_b: logger_i[3],
              logger_a: logger_i[4] || "1"
            };
          return this._parsedColorCache[logger_e] = logger_s, logger_s
        },
        getColorFromProperties: function(logger_e, logger_t) {
          var logger_i = 1 - logger_t.value() / 100,
            logger_s = this._parseColor(logger_e.value());
          return "rgba(" + logger_s.logger_r + "," + logger_s.logger_g + "," + logger_s.logger_b + "," + logger_i + ")"
        },
        setColorToProperties: function(logger_e, logger_t, logger_i) {
          var logger_s = this._parseColor(logger_e);
          logger_t.setValue("rgb(" + logger_s.logger_r + "," + logger_s.logger_g + "," + logger_s.logger_b + ")");
          var logger_o = 100 * (1 - logger_s.logger_a);
          logger_i.setValue(Math.max(0, Math.min(logger_o, 100)))
        },
        getFontFromProperties: function(logger_e, logger_t, logger_i, logger_o) {
          return logger_s(logger_t.value(), logger_e.value(), logger_o.value() ? "italic" : "", logger_i.value() ? "bold" : "")
        },
        setFontToProperties: function(logger_e, logger_t, logger_i, logger_s, logger_n) {
          var logger_r = logger_o(logger_e);
          null !== logger_r ? (logger_r.family.length > 0 && logger_t.setValue(logger_r.family), logger_i.setValue(logger_r.size), logger_s.setValue(logger_r.bold), logger_n
            .setValue(logger_r.italic)) : logger_a.logError("Invalid font: " + logger_e)
        },
        fontHeight: function(logger_e) {
          if (!this._fontHeightCache[logger_e]) {
            var logger_t = document.createElement("span");
            logger_t.appendChild(document.createTextNode("height")), document.body.appendChild(logger_t), logger_t.style.cssText =
              "font: " + logger_e + "; white-space: nowrap; display: inline;";
            var logger_i = logger_t.offsetHeight;
            document.body.removeChild(logger_t), this._fontHeightCache[logger_e] = Math.ceil(logger_i)
          }
          return this._fontHeightCache[logger_e]
        },
        drawPolyHoverOrPress: function(logger_e, logger_t, logger_i, logger_s) {
          logger_s ? (logger_e.save(), logger_e.fillStyle = "rgba(0, 0, 0, 0.15)", logger_r(logger_e, logger_t, !0), logger_e.restore()) : logger_i && (logger_e.save(), logger_e
            .fillStyle = "rgba(0, 0, 0, 0.1)", logger_r(logger_e, logger_t, !0), logger_e.restore())
        },
        repaint: function(logger_e) {
          logger_e.lightUpdate()
        },
        roundToMinTick: function(logger_e, logger_t) {
          var logger_i = 1 / logger_e.mainSource().base();
          return logger_i * Math.round(logger_t / logger_i)
        }
      };
    logger_e.exports = logger_l