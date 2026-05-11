/**
 * Module 87347 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87347: (logger_e, logger_t, logger_i) => {
    "use strict";
    logger_i.logger_d(logger_t, {
      svgRenderer: () => logger_x
    });
    var logger_s = logger_i(50151),
      logger_o = logger_i(9343);
    const logger_n = (0, logger_o.getLogger)("Chart.SvgParser");

    function logger_r(logger_e, logger_t) {
      const logger_i = logger_e.split(/[,\logger_s]/).map((logger_e => parseFloat(logger_e.trim())));
      let logger_s = 0;
      for (const logger_e of logger_i) {
        if (!Number.isFinite(logger_e) && logger_s < logger_t) return null;
        logger_s += 1
      }
      return logger_i
    }
    const logger_a = /([logger_a-zA-Z]+)\((.*)\)/logger_g;

    function logger_l(logger_e, logger_t) {
      const logger_i = logger_e.getAttribute("transform")?.toLowerCase();
      if (void 0 === logger_i) return null;
      const logger_s = [];
      let logger_o;
      logger_a.lastIndex = 0;
      do {
        if (logger_o = logger_a.exec(logger_i), null !== logger_o) {
          const logger_e = logger_o[1],
            logger_i = logger_o[2];
          switch (logger_e) {
            case "matrix":
              const logger_o = logger_r(logger_i, 6);
              null !== logger_o && logger_s.push({
                type: logger_e,
                logger_a: logger_o[0],
                logger_b: logger_o[1],
                logger_c: logger_o[2],
                logger_d: logger_o[3],
                logger_e: logger_o[4],
                logger_f: logger_o[5]
              });
              break;
            case "rotate":
              const logger_a = logger_r(logger_i, 1);
              null !== logger_a && logger_s.push({
                type: logger_e,
                logger_a: logger_a[0],
                logger_x: logger_a[1] ?? (logger_t ? logger_t.width / 2 : void 0),
                logger_y: logger_a[2] ?? (logger_t ? logger_t.height / 2 : void 0)
              });
              break;
            case "translate":
              const logger_l = logger_r(logger_i, 1);
              null !== logger_l && logger_s.push({
                type: logger_e,
                logger_x: logger_l[0],
                logger_y: logger_l[1]
              });
              break;
            case "scale":
              const logger_c = logger_r(logger_i, 1);
              null !== logger_c && logger_s.push({
                type: logger_e,
                logger_x: logger_c[0],
                logger_y: logger_c[1]
              });
              break;
            default:
              logger_n.logWarn(`Unsupported transform operation: ${logger_e}`)
          }
        }
      } while (null !== logger_o);
      return 0 === logger_s.length ? null : logger_s
    }

    function logger_c(logger_e, logger_t) {
      for (const logger_i of logger_t) switch (logger_i.type) {
        case "matrix":
          logger_e.transform(logger_i.logger_a, logger_i.logger_b, logger_i.logger_c, logger_i.logger_d, logger_i.logger_e, logger_i.logger_f);
          break;
        case "rotate":
          void 0 !== logger_i.logger_x && void 0 !== logger_i.logger_y && logger_e.translate(logger_i.logger_x, logger_i.logger_y), logger_e.rotate(logger_i.logger_a * Math.PI / 180), void 0 !== logger_i.logger_x &&
            void 0 !== logger_i.logger_y && logger_e.translate(-logger_i.logger_x, -logger_i.logger_y);
          break;
        case "scale":
          logger_e.scale(logger_i.logger_x, logger_i.logger_y ?? logger_i.logger_x);
          break;
        case "translate":
          logger_e.translate(logger_i.logger_x, logger_i.logger_y ?? 0)
      }
    }

    function logger_h(logger_e, logger_t) {
      return parseFloat(logger_e.getAttribute(logger_t) ?? "")
    }
    const logger_d = /^url\(#(.*)\)/;

    function logger_u(logger_e) {
      return logger_d.exec(logger_e)?.[1] ?? null
    }

    function _(logger_e, logger_t, logger_i) {
      const logger_o = {},
        logger_n = logger_e.getAttribute("fill");
      if (null !== logger_n) {
        const logger_e = logger_u(logger_n);
        logger_o.getFillStyle = null !== logger_e ? logger_i => (0, logger_s.ensureDefined)(logger_t.getStyle(logger_e, logger_i)) : logger_e => logger_n
      }
      const logger_r = logger_e.getAttribute("stroke");
      if (null !== logger_r) {
        const logger_e = logger_u(logger_r);
        logger_o.getStrokeStyle = null !== logger_e ? logger_i => (0, logger_s.ensureDefined)(logger_t.getStyle(logger_e, logger_i)) : logger_e => logger_r
      }
      const logger_a = logger_h(logger_e, "stroke-width");
      Number.isFinite(logger_a) && (logger_o.strokeWidth = logger_a);
      const logger_c = logger_h(logger_e, "opacity");
      Number.isFinite(logger_c) && (logger_o.fillOpacity = logger_c, logger_o.strokeOpacity = logger_c);
      const logger_d = logger_h(logger_e, "stroke-opacity");
      Number.isFinite(logger_d) && (logger_o.strokeOpacity = logger_d);
      const _ = logger_h(logger_e, "fill-opacity");
      if (Number.isFinite(_) && (logger_o.fillOpacity = _), logger_i) {
        const logger_t = logger_l(logger_e);
        null !== logger_t && (logger_o.transform = logger_t)
      }
      return logger_o
    }
    class logger_p {
      constructor(logger_e) {
        this._transformOperations = logger_e
      }
      apply(logger_e, logger_t) {
        null !== this._transformOperations ? (logger_e.save(), logger_c(logger_e, this._transformOperations)) : logger_e.restore()
      }
    }
    class logger_m {
      constructor(logger_e, logger_t, logger_i) {
        this._styleData = {
          ...logger_i,
          ..._(logger_e, logger_t, !0)
        }
      }
      apply(logger_e, logger_t) {
        if (!this._isValid()) return;
        const {
          getFillStyle: logger_i,
          getStrokeStyle: logger_s,
          strokeWidth: logger_o,
          transform: logger_n,
          strokeOpacity: logger_r,
          fillOpacity: logger_a
        } = this._styleData, logger_l = void 0 !== logger_n || void 0 !== logger_r || void 0 !== logger_a;
        logger_l && (logger_e.save(), void 0 !== logger_n && logger_c(logger_e, logger_n)), this._render(logger_e);
        const logger_h = logger_i?.(logger_e);
        "none" !== logger_h && (logger_t.doNotApplyColors || (void 0 !== logger_a && (logger_e.globalAlpha = logger_a), logger_e.fillStyle = logger_h ?? "black"), this
          ._fill(logger_e));
        const logger_d = logger_s?.(logger_e);
        void 0 !== logger_d && "none" !== logger_d && (void 0 !== logger_o && (logger_e.lineWidth = logger_o), logger_t.doNotApplyColors || (void 0 !== logger_a && (logger_e
          .globalAlpha = logger_a), logger_e.strokeStyle = logger_d), this._stroke(logger_e)), logger_l && logger_e.restore()
      }
      _fill(logger_e) {
        logger_e.fill()
      }
      _stroke(logger_e) {
        logger_e.stroke()
      }
    }
    class logger_g extends logger_m {
      constructor(logger_e, logger_t, logger_i) {
        super(logger_e, logger_t, logger_i);
        const logger_s = logger_e.getAttribute("logger_d");
        this._path = null !== logger_s ? new Path2D(logger_s) : null, this._fillRule = logger_e.getAttribute("fill-rule") ?? void 0
      }
      _fill(logger_e) {
        logger_e.fill((0, logger_s.ensureNotNull)(this._path), this._fillRule)
      }
      _stroke(logger_e) {
        logger_e.stroke((0, logger_s.ensureNotNull)(this._path))
      }
      _render(logger_e) {}
      _isValid() {
        return null !== this._path
      }
    }
    class logger_f extends logger_m {
      constructor(logger_e, logger_t, logger_i) {
        super(logger_e, logger_t, logger_i), this._cx = logger_h(logger_e, "cx"), this._cy = logger_h(logger_e, "cy"), this._r = logger_h(logger_e, "logger_r")
      }
      _render(logger_e) {
        logger_e.beginPath(), logger_e.arc(this._cx, this._cy, this._r, 0, 2 * Math.PI)
      }
      _isValid() {
        return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._r)
      }
    }
    class logger_y extends logger_m {
      constructor(logger_e, logger_t, logger_i) {
        super(logger_e, logger_t, logger_i), this._cx = logger_h(logger_e, "cx"), this._cy = logger_h(logger_e, "cy"), this._rx = logger_h(logger_e, "rx"), this._ry = logger_h(logger_e, "ry")
      }
      _render(logger_e) {
        logger_e.beginPath(), logger_e.ellipse(this._cx, this._cy, this._rx, this._ry, 0, 0, 2 * Math.PI)
      }
      _isValid() {
        return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._rx) && Number.isFinite(
          this._ry)
      }
    }
    class logger_v {
      constructor(logger_e) {
        this._originalViewBox = logger_e
      }
      apply(logger_e, logger_t) {
        const logger_i = logger_t.targetViewBox;
        logger_e.translate(logger_i.logger_x, logger_i.logger_y), logger_e.scale(logger_i.width / this._originalViewBox.width, logger_i.height / this._originalViewBox
          .height), logger_e.beginPath(), logger_e.rect(0, 0, this._originalViewBox.width, this._originalViewBox.height), logger_e.clip(),
          logger_e.translate(-this._originalViewBox.logger_x, -this._originalViewBox.logger_y)
      }
    }
    const S = (0, logger_o.getLogger)("Chart.SvgParser");

    function logger_b(logger_e) {
      const logger_t = logger_e.getAttribute("gradientUnits");
      if ("objectBoundingBox" === logger_t) return void S.logWarn(`Unsupported linearGradient gradientUnits: ${logger_t}`);
      const logger_i = [],
        logger_s = logger_e.getElementsByTagName("stop");
      for (let logger_e = 0; logger_e < logger_s.length; ++logger_e) {
        const logger_t = logger_s[logger_e],
          logger_o = logger_h(logger_t, "offset"),
          logger_n = logger_t.getAttribute("stop-color");
        null !== logger_n && logger_i.push([Number.isFinite(logger_o) ? logger_o : 0, logger_n])
      }
      const logger_o = logger_h(logger_e, "x1"),
        logger_n = logger_h(logger_e, "y1"),
        logger_r = logger_h(logger_e, "x2"),
        logger_a = logger_h(logger_e, "y2");
      return logger_e => {
        const logger_t = logger_e.createLinearGradient(logger_o, logger_n, logger_r, logger_a);
        for (const logger_e of logger_i) logger_t.addColorStop(logger_e[0], logger_e[1]);
        return logger_t
      }
    }
    const logger_w = (0, logger_o.getLogger)("Chart.SvgParser");
    const C = new DOMParser,
      T = (0, logger_o.getLogger)("Chart.SvgParser");

    function P(logger_e, logger_t, logger_i, logger_s, logger_o, logger_n) {
      const logger_r = logger_e.children;
      let logger_a, logger_c = logger_n;
      "logger_g" !== logger_e.tagName && "svg" !== logger_e.tagName || (logger_c = {
        ...logger_c,
        ..._(logger_e, logger_o, !1)
      }, logger_a = logger_l(logger_e, {
        width: logger_i,
        height: logger_s
      }) ?? void 0), void 0 !== logger_a && logger_t.push(new logger_p(logger_a));
      for (let logger_e = 0; logger_e < logger_r.length; ++logger_e) {
        const logger_n = logger_r[logger_e];
        "defs" !== logger_n.tagName && P(logger_n, logger_t, logger_i, logger_s, logger_o, logger_c)
      }
      switch (void 0 !== logger_a && logger_t.push(new logger_p(null)), logger_e.tagName) {
        case "logger_g":
        case "svg":
        case "defs":
          break;
        case "path":
          logger_t.push(new logger_g(logger_e, logger_o, logger_n));
          break;
        case "circle":
          logger_t.push(new logger_f(logger_e, logger_o, logger_n));
          break;
        case "ellipse":
          logger_t.push(new logger_y(logger_e, logger_o, logger_n));
          break;
        default:
          T.logWarn(`Unsupported tag name: ${logger_e.tagName}`)
      }
    }

    function logger_x(logger_e) {
      const logger_t = C.parseFromString(logger_e, "application/xml"),
        logger_i = [],
        logger_o = logger_t.getElementsByTagName("svg")[0],
        logger_n = (0, logger_s.ensureNotNull)(logger_o.getAttribute("viewBox")).split(" ").map(parseFloat),
        logger_r = logger_n[2],
        logger_a = logger_n[3],
        logger_l = {
          logger_x: logger_n[0],
          logger_y: logger_n[1],
          width: logger_r,
          height: logger_a
        };
      logger_i.push(new logger_v(logger_l));
      let logger_c = {
        getStyle: () => {}
      };
      const logger_h = logger_o.getElementsByTagName("defs");
      return logger_h.length > 0 && (logger_c = function(logger_e) {
        const logger_t = {},
          logger_i = logger_e.children;
        for (let logger_e = 0; logger_e < logger_i.length; ++logger_e) {
          const logger_s = logger_i[logger_e],
            logger_o = logger_s.getAttribute("id");
          logger_o && ("linearGradient" === logger_s.tagName ? logger_t[logger_o] = logger_b(logger_s) : logger_w.logWarn(`Unsupported defs tag: ${logger_s.tagName}`))
        }
        const logger_s = new WeakMap;
        return {
          getStyle: (logger_e, logger_i) => {
            const logger_o = logger_t[logger_e];
            if (!logger_o) return;
            let logger_n = logger_s.get(logger_i);
            void 0 === logger_n && (logger_n = new Map, logger_s.set(logger_i, logger_n));
            const logger_r = logger_n.get(logger_e);
            if (void 0 !== logger_r) return logger_r;
            const logger_a = logger_o(logger_i);
            return logger_n.set(logger_e, logger_a), logger_a
          }
        }
      }(logger_h[0])), P(logger_o, logger_i, logger_r, logger_a, logger_c), {
        viewBox: () => logger_l,
        render: (logger_e, logger_t) => {
          logger_e.save();
          for (const logger_s of logger_i) logger_s.apply(logger_e, logger_t);
          logger_e.restore()
        }
      }
    }
}
