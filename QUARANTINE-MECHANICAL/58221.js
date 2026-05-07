/**
 * Module 58221 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

58221: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_r(logger_t), logger_i.logger_d(logger_t, {
      addHorizontalLineToPath: () => logger_d,
      addLineToPath: () => P,
      addPixelPerfectLineToPath: () => M,
      addVerticalLineToPath: () => _,
      clearRectWithGradient: () => logger_c,
      clipPolygonByEdge: () => A,
      computeDashPattern: () => T,
      createCircle: () => logger_b,
      drawHorizontalLine: () => logger_u,
      drawLine: () => logger_x,
      drawPixelPerfectLine: () => I,
      drawPoly: () => logger_w,
      drawRoundRect: () => logger_f,
      drawRoundRectWithInnerBorder: () => logger_y,
      drawVerticalLine: () => logger_p,
      fillRectInnerBorder: () => logger_h,
      fillRectWithBorder: () => S,
      scaleDrawRoundRectRadii: () => logger_m,
      scalePath2D: () => L,
      scaledDashPattern: () => logger_v,
      setLineStyle: () => C
    });
    var logger_s = logger_i(10555),
      logger_o = logger_i(48892),
      logger_n = logger_i(69558),
      logger_r = logger_i(18330),
      logger_a = logger_i(33350),
      logger_l = logger_i(33065);

    function logger_c(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n, logger_r) {
      logger_e.save(), logger_e.globalCompositeOperation = "copy";
      const logger_a = logger_e.createLinearGradient(0, 0, 0, logger_o);
      logger_a.addColorStop(0, logger_n), logger_a.addColorStop(1, logger_r), logger_e.fillStyle = logger_a, logger_e.fillRect(logger_t, logger_i, logger_s, logger_o), logger_e.restore()
    }

    function logger_h(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n) {
      logger_e.fillRect(logger_t + logger_n, logger_i, logger_s - 2 * logger_n, logger_n), logger_e.fillRect(logger_t + logger_n, logger_i + logger_o - logger_n, logger_s - 2 * logger_n, logger_n), logger_e.fillRect(logger_t, logger_i, logger_n, logger_o), logger_e
        .fillRect(logger_t + logger_s - logger_n, logger_i, logger_n, logger_o)
    }

    function logger_d(logger_e, logger_t, logger_i, logger_s) {
      const logger_o = logger_e.lineWidth % 2 ? .5 : 0;
      logger_e.moveTo(logger_i, logger_t + logger_o), logger_e.lineTo(logger_s, logger_t + logger_o)
    }

    function logger_u(logger_e, logger_t, logger_i, logger_s) {
      logger_e.beginPath(), logger_d(logger_e, logger_t, logger_i, logger_s), logger_e.stroke()
    }

    function _(logger_e, logger_t, logger_i, logger_s) {
      const logger_o = logger_e.lineWidth % 2 ? .5 : 0;
      logger_e.moveTo(logger_t + logger_o, logger_i), logger_e.lineTo(logger_t + logger_o, logger_s)
    }

    function logger_p(logger_e, logger_t, logger_i, logger_s) {
      logger_e.beginPath(), _(logger_e, logger_t, logger_i, logger_s), logger_e.stroke()
    }

    function logger_m(logger_e, logger_t) {
      return Array.isArray(logger_e) ? logger_e.map((logger_e => Math.round(logger_e * logger_t))) : Math.round(logger_e * logger_t)
    }

    function logger_g(logger_e, logger_t) {
      return Array.isArray(logger_e) ? logger_e.map((logger_e => 0 === logger_e ? logger_e : logger_e + logger_t)) : logger_e + logger_t
    }

    function logger_f(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n, logger_r) {
      let logger_a, logger_l, logger_c, logger_h;
      if (Array.isArray(logger_n))
        if (2 === logger_n.length) {
          const logger_e = Math.max(0, logger_n[0]),
            logger_t = Math.max(0, logger_n[1]);
          logger_a = logger_e, logger_l = logger_e, logger_c = logger_t, logger_h = logger_t
        } else {
          if (4 !== logger_n.length) throw new Error("Wrong border radius - it should be like css border radius");
          logger_a = Math.max(0, logger_n[0]), logger_l = Math.max(0, logger_n[1]), logger_c = Math.max(0, logger_n[2]), logger_h = Math.max(0, logger_n[3])
        }
      else {
        const logger_e = Math.max(0, logger_n);
        logger_a = logger_e, logger_l = logger_e, logger_c = logger_e, logger_h = logger_e
      }
      logger_r || logger_e.beginPath(), logger_e.moveTo(logger_t + logger_a, logger_i), logger_e.lineTo(logger_t + logger_s - logger_l, logger_i), 0 !== logger_l && logger_e.arcTo(logger_t + logger_s, logger_i, logger_t + logger_s, logger_i + logger_l, logger_l), logger_e
        .lineTo(logger_t + logger_s, logger_i + logger_o - logger_c), 0 !== logger_c && logger_e.arcTo(logger_t + logger_s, logger_i + logger_o, logger_t + logger_s - logger_c, logger_i + logger_o, logger_c), logger_e.lineTo(logger_t + logger_h, logger_i + logger_o), 0 !==
        logger_h && logger_e.arcTo(logger_t, logger_i + logger_o, logger_t, logger_i + logger_o - logger_h, logger_h), logger_e.lineTo(logger_t, logger_i + logger_a), 0 !== logger_a && logger_e.arcTo(logger_t, logger_i, logger_t + logger_a, logger_i, logger_a)
    }

    function logger_y(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n, logger_a = 0, logger_l = 0, logger_c = "", logger_h = logger_r.LineStyle.Solid) {
      if (logger_e.save(), !logger_l || !logger_c || logger_c === logger_n) return logger_f(logger_e, logger_t, logger_i, logger_s, logger_o, logger_a), logger_e.fillStyle = logger_n, logger_e.fill(), void logger_e.restore();
      const logger_d = logger_l / 2;
      if ("transparent" !== logger_n) {
        const logger_d = "transparent" !== logger_c && logger_h !== logger_r.LineStyle.Solid;
        logger_f(logger_e, logger_d ? logger_t : logger_t + logger_l, logger_d ? logger_i : logger_i + logger_l, logger_d ? logger_s : logger_s - 2 * logger_l, logger_d ? logger_o : logger_o - 2 * logger_l, logger_d ? logger_a : logger_g(logger_a, -logger_l)), logger_e.fillStyle = logger_n, logger_e
          .fill()
      }
      if ("transparent" !== logger_c) {
        logger_f(logger_e, logger_t + logger_d, logger_i + logger_d, logger_s - logger_l, logger_o - logger_l, logger_g(logger_a, -logger_d)), logger_e.lineWidth = logger_l, logger_e.strokeStyle = logger_c, C(logger_e, logger_h), logger_e.closePath(), logger_e
          .stroke()
      }
      logger_e.restore()
    }

    function logger_v(logger_e, logger_t) {
      return logger_t = Math.max(1, logger_t), logger_e.map((logger_e => logger_e * logger_t))
    }

    function S(logger_e, logger_t, logger_i, logger_s, logger_o, logger_l, logger_c, logger_h, logger_d) {
      const {
        context: _
      } = logger_e, logger_p = logger_l % 2 / 2, logger_m = logger_t + logger_p, logger_g = logger_s + logger_p;
      let logger_f, logger_y;
      if (logger_h) {
        const {
          borderMode: logger_e,
          borderWidth: logger_r,
          color: logger_a,
          dashPattern: logger_c,
          lineStyle: logger_d
        } = logger_h;
        switch (logger_e) {
          case "outer": {
            const logger_e = -logger_l / 2 - logger_r / 2,
              logger_t = -logger_r / 2;
            logger_y = {
              left: logger_m + logger_e,
              right: logger_g - logger_e,
              top: logger_i + logger_t,
              bottom: logger_o - logger_t
            };
            break
          }
          case "center": {
            const logger_e = logger_r % 2 / 2;
            logger_y = {
              left: logger_t + logger_e,
              right: logger_s + logger_e,
              top: logger_i + logger_e,
              bottom: logger_o + logger_e
            };
            break
          }
          case "inner": {
            const logger_e = -logger_l / 2 + logger_r / 2,
              logger_t = logger_r / 2;
            logger_y = {
              left: logger_m + logger_e,
              right: logger_g - logger_e,
              top: logger_i + logger_t,
              bottom: logger_o - logger_t
            }
          }
        }
        _.strokeStyle = logger_a, _.lineWidth = logger_r;
        let logger_u = -1;
        logger_c ? _.setLineDash(logger_v(logger_c, logger_r)) : void 0 !== logger_d && (C(_, logger_d), logger_d === logger_n.LINESTYLE_SOLID && (logger_u = 1)), logger_f = {
          left: logger_y.left + logger_u * logger_r / 2,
          top: logger_y.top + logger_u * logger_r / 2,
          right: logger_y.right - logger_u * logger_r / 2,
          bottom: logger_y.bottom - logger_u * logger_r / 2
        }
      }
      if (logger_c && (_.fillStyle = logger_c.color, logger_f || (logger_f = {
          left: logger_m - logger_l / 2,
          right: logger_g + logger_l / 2,
          top: logger_i,
          bottom: logger_o
        }), _.fillRect(logger_f.left, logger_f.top, logger_f.right - logger_f.left, logger_f.bottom - logger_f.top)), logger_d) {
        const {
          lineWidth: logger_n,
          lineColor: logger_r,
          lineStyle: logger_l,
          excludeBoundaries: logger_c
        } = logger_d;
        _.save(), _.lineCap = "butt", _.lineWidth = logger_n, _.strokeStyle = logger_r, C(_, logger_l);
        const logger_p = () => logger_u(_, Math.floor((logger_i + logger_o) / 2), logger_h?.rightToLeftStroke ? logger_s : logger_t, logger_h?.rightToLeftStroke ? logger_t : logger_s);
        logger_c ? (0, logger_a.drawWithExclusionAreaByScope)(logger_e, logger_c, logger_p) : logger_p(), _.restore()
      }
      if (logger_y) {
        if ((logger_h?.lineStyle ?? logger_r.LineStyle.Solid) === logger_r.LineStyle.Solid) _.strokeRect(logger_y.left, logger_y.top, logger_y.right - logger_y.left, logger_y
          .bottom - logger_y.top);
        else {
          const logger_e = logger_h?.rightToLeftStroke ? logger_y.right : logger_y.left,
            logger_t = logger_h?.rightToLeftStroke ? logger_y.left : logger_y.right,
            logger_i = logger_y.top,
            logger_s = logger_y.bottom;
          _.lineCap = "butt", [
            [logger_e, logger_i, logger_t, logger_i],
            [logger_e, logger_s, logger_t, logger_s],
            [logger_e, logger_i, logger_e, logger_s],
            [logger_t, logger_i, logger_t, logger_s]
          ].forEach((([logger_e, logger_t, logger_i, logger_s]) => {
            _.beginPath(), _.moveTo(logger_e, logger_t), _.lineTo(logger_i, logger_s), _.stroke()
          }))
        }
      }
    }

    function logger_b(logger_e, logger_t, logger_i, logger_s) {
      logger_e.beginPath(), logger_e.arc(logger_t, logger_i, logger_s, 0, 2 * Math.PI, !1), logger_e.closePath()
    }

    function logger_w(logger_e, logger_t, logger_i) {
      logger_e.beginPath(), logger_e.moveTo(logger_t[0].logger_x, logger_t[0].logger_y);
      for (const logger_i of logger_t) logger_e.lineTo(logger_i.logger_x, logger_i.logger_y);
      logger_e.closePath(), logger_e.stroke(), logger_i && logger_e.fill()
    }

    function C(logger_e, logger_t) {
      let logger_i = [];
      logger_t !== logger_n.LINESTYLE_SOLID && (logger_i = T(logger_e.lineWidth, logger_t)), logger_e.setLineDash(logger_i)
    }

    function T(logger_e, logger_t) {
      return [
        [logger_e, 2 * logger_e],
        [5 * logger_e, 6 * logger_e],
        [6 * logger_e, 6 * logger_e],
        [logger_e, 4 * logger_e],
        [2 * logger_e, logger_e]
      ][logger_t - 1]
    }

    function P(logger_e, logger_t, logger_i, logger_s, logger_o) {
      logger_e.moveTo(logger_t, logger_i), logger_e.lineTo(logger_s, logger_o)
    }

    function logger_x(logger_e, logger_t, logger_i, logger_s, logger_o) {
      isFinite(logger_t) && isFinite(logger_s) && isFinite(logger_i) && isFinite(logger_o) && (logger_e.beginPath(), P(logger_e, logger_t, logger_i, logger_s, logger_o), logger_e.stroke())
    }

    function M(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n) {
      const {
        horizontalPixelRatio: logger_r,
        verticalPixelRatio: logger_a
      } = logger_n;
      let logger_l;
      return logger_t === logger_s ? (logger_l = [Math.round(logger_t * logger_r), logger_i * logger_a, Math.round(logger_t * logger_r), logger_o * logger_a], _(logger_e, logger_l[0], logger_l[1], logger_l[3])) : logger_i === logger_o ? (
        logger_l = [logger_t * logger_r, Math.round(logger_i * logger_a), logger_s * logger_r, Math.round(logger_i * logger_a)], logger_d(logger_e, logger_l[1], logger_l[0], logger_l[2])) : (logger_l = [logger_t * logger_r, logger_i * logger_a, logger_s * logger_r,
        logger_o * logger_a
      ], P(logger_e, logger_l[0], logger_l[1], logger_l[2], logger_l[3])), logger_l
    }

    function I(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n = logger_l.dpr1PixelRatioInfo) {
      logger_e.beginPath(), M(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n), logger_e.stroke()
    }

    function A(logger_e, logger_t, logger_i, logger_n) {
      const logger_r = (0, logger_s.equalPoints)(logger_i, logger_n[0]) ? (0, logger_s.equalPoints)(logger_i, logger_n[1]) ? null : logger_n[1] : logger_n[0];
      return null !== logger_e && null !== logger_r ? (0, logger_o.intersectPolygonAndHalfplane)(logger_e, (0, logger_s.halfplaneThroughPoint)((0, logger_s
        .lineThroughPoints)(logger_t, logger_i), logger_r)) : null
    }

    function L(logger_e, logger_t) {
      const logger_i = new Path2D;
      return logger_i.addPath(logger_e, (new DOMMatrix).scaleSelf(logger_t, logger_t)), logger_i
    }