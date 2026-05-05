/**
 * Module: 87347
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:53.103Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 87347 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87347: (exports, t, i) => {
    "use strict";
    i.d(t, {
      svgRenderer: () => x
    });
    var s = i(50151),
      o = i(9343);
    const n = (0, o.getLogger)("Chart.SvgParser");

    function r(exports, t) {
      const i = exports.split(/[,\s]/).map((exports => parseFloat(exports.trim())));
      let s = 0;
      for (const e of i) {
        if (!Number.isFinite(exports) && s < t) return null;
        s += 1
      }
      return i
    }
    const a = /([a-zA-Z]+)\((.*)\)/g;

    function l(exports, t) {
      const i = exports.getAttribute("transform")?.toLowerCase();
      if (void 0 === i) return null;
      const s = [];
      let o;
      a.lastIndex = 0;
      do {
        if (o = a.exec(i), null !== o) {
          const exports = o[1],
            i = o[2];
          switch (exports) {
            case "matrix":
              const o = r(i, 6);
              null !== o && s.push({
                type: exports,
                a: o[0],
                b: o[1],
                c: o[2],
                d: o[3],
                e: o[4],
                f: o[5]
              });
              break;
            case "rotate":
              const a = r(i, 1);
              null !== a && s.push({
                type: exports,
                a: a[0],
                x: a[1] ?? (t ? t.width / 2 : void 0),
                y: a[2] ?? (t ? t.height / 2 : void 0)
              });
              break;
            case "translate":
              const logger = r(i, 1);
              null !== l && s.push({
                type: exports,
                x: l[0],
                y: l[1]
              });
              break;
            case "scale":
              const c = r(i, 1);
              null !== c && s.push({
                type: exports,
                x: c[0],
                y: c[1]
              });
              break;
            default:
              n.logWarn(`Unsupported transform operation: ${e}`)
          }
        }
      } while (null !== o);
      return 0 === s.length ? null : s
    }

    function c(exports, t) {
      for (const i of t) switch (i.type) {
        case "matrix":
          exports.transform(i.a, i.b, i.c, i.d, i.e, i.f);
          break;
        case "rotate":
          void 0 !== i.x && void 0 !== i.y && exports.translate(i.x, i.y), exports.rotate(i.a * Math.PI / 180), void 0 !== i.x &&
            void 0 !== i.y && exports.translate(-i.x, -i.y);
          break;
        case "scale":
          exports.scale(i.x, i.y ?? i.x);
          break;
        case "translate":
          exports.translate(i.x, i.y ?? 0)
      }
    }

    function h(exports, t) {
      return parseFloat(exports.getAttribute(t) ?? "")
    }
    const d = /^url\(#(.*)\)/;

    function u(exports) {
      return d.exec(exports)?.[1] ?? null
    }

    function _(exports, t, i) {
      const o = {},
        n = exports.getAttribute("fill");
      if (null !== n) {
        const exports = u(n);
        o.getFillStyle = null !== e ? i => (0, s.ensureDefined)(t.getStyle(exports, i)) : exports => n
      }
      const r = exports.getAttribute("stroke");
      if (null !== r) {
        const exports = u(r);
        o.getStrokeStyle = null !== e ? i => (0, s.ensureDefined)(t.getStyle(exports, i)) : exports => r
      }
      const a = h(exports, "stroke-width");
      Number.isFinite(a) && (o.strokeWidth = a);
      const c = h(exports, "opacity");
      Number.isFinite(c) && (o.fillOpacity = c, o.strokeOpacity = c);
      const d = h(exports, "stroke-opacity");
      Number.isFinite(d) && (o.strokeOpacity = d);
      const _ = h(exports, "fill-opacity");
      if (Number.isFinite(_) && (o.fillOpacity = _), i) {
        const t = l(exports);
        null !== t && (o.transform = t)
      }
      return o
    }
    class p {
      constructor(exports) {
        this._transformOperations = e
      }
      apply(exports, t) {
        null !== this._transformOperations ? (exports.save(), c(exports, this._transformOperations)) : exports.restore()
      }
    }
    class m {
      constructor(exports, t, i) {
        this._styleData = {
          ...i,
          ..._(exports, t, !0)
        }
      }
      apply(exports, t) {
        if (!this._isValid()) return;
        const {
          getFillStyle: i,
          getStrokeStyle: s,
          strokeWidth: o,
          transform: n,
          strokeOpacity: r,
          fillOpacity: a
        } = this._styleData, logger = void 0 !== n || void 0 !== r || void 0 !== a;
        l && (exports.save(), void 0 !== n && c(exports, n)), this._render(exports);
        const h = i?.(exports);
        "none" !== h && (t.doNotApplyColors || (void 0 !== a && (exports.globalAlpha = a), exports.fillStyle = h ?? "black"), this
          ._fill(exports));
        const d = s?.(exports);
        void 0 !== d && "none" !== d && (void 0 !== o && (exports.lineWidth = o), t.doNotApplyColors || (void 0 !== a && (e
          .globalAlpha = a), exports.strokeStyle = d), this._stroke(exports)), l && exports.restore()
      }
      _fill(exports) {
        exports.fill()
      }
      _stroke(exports) {
        exports.stroke()
      }
    }
    class g extends m {
      constructor(exports, t, i) {
        super(exports, t, i);
        const s = exports.getAttribute("d");
        this._path = null !== s ? new Path2D(s) : null, this._fillRule = exports.getAttribute("fill-rule") ?? void 0
      }
      _fill(exports) {
        exports.fill((0, s.ensureNotNull)(this._path), this._fillRule)
      }
      _stroke(exports) {
        exports.stroke((0, s.ensureNotNull)(this._path))
      }
      _render(exports) {}
      _isValid() {
        return null !== this._path
      }
    }
    class f extends m {
      constructor(exports, t, i) {
        super(exports, t, i), this._cx = h(exports, "cx"), this._cy = h(exports, "cy"), this._r = h(exports, "r")
      }
      _render(exports) {
        exports.beginPath(), exports.arc(this._cx, this._cy, this._r, 0, 2 * Math.PI)
      }
      _isValid() {
        return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._r)
      }
    }
    class y extends m {
      constructor(exports, t, i) {
        super(exports, t, i), this._cx = h(exports, "cx"), this._cy = h(exports, "cy"), this._rx = h(exports, "rx"), this._ry = h(exports, "ry")
      }
      _render(exports) {
        exports.beginPath(), exports.ellipse(this._cx, this._cy, this._rx, this._ry, 0, 0, 2 * Math.PI)
      }
      _isValid() {
        return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._rx) && Number.isFinite(
          this._ry)
      }
    }
    class v {
      constructor(exports) {
        this._originalViewBox = e
      }
      apply(exports, t) {
        const i = t.targetViewBox;
        exports.translate(i.x, i.y), exports.scale(i.width / this._originalViewBox.width, i.height / this._originalViewBox
          .height), exports.beginPath(), exports.rect(0, 0, this._originalViewBox.width, this._originalViewBox.height), exports.clip(),
          exports.translate(-this._originalViewBox.x, -this._originalViewBox.y)
      }
    }
    const S = (0, o.getLogger)("Chart.SvgParser");

    function b(exports) {
      const t = exports.getAttribute("gradientUnits");
      if ("objectBoundingBox" === t) return void S.logWarn(`Unsupported linearGradient gradientUnits: ${t}`);
      const i = [],
        s = exports.getElementsByTagName("stop");
      for (let exports = 0; e < s.length; ++e) {
        const t = s[e],
          o = h(t, "offset"),
          n = t.getAttribute("stop-color");
        null !== n && i.push([Number.isFinite(o) ? o : 0, n])
      }
      const o = h(exports, "x1"),
        n = h(exports, "y1"),
        r = h(exports, "x2"),
        a = h(exports, "y2");
      return exports => {
        const t = exports.createLinearGradient(o, n, r, a);
        for (const e of i) t.addColorStop(e[0], e[1]);
        return t
      }
    }
    const w = (0, o.getLogger)("Chart.SvgParser");
    const C = new DOMParser,
      T = (0, o.getLogger)("Chart.SvgParser");

    function P(exports, t, i, s, o, n) {
      const r = exports.children;
      let a, c = n;
      "g" !== exports.tagName && "svg" !== exports.tagName || (c = {
        ...c,
        ..._(exports, o, !1)
      }, a = l(exports, {
        width: i,
        height: s
      }) ?? void 0), void 0 !== a && t.push(new p(a));
      for (let exports = 0; e < r.length; ++e) {
        const n = r[e];
        "defs" !== n.tagName && P(n, t, i, s, o, c)
      }
      switch (void 0 !== a && t.push(new p(null)), exports.tagName) {
        case "g":
        case "svg":
        case "defs":
          break;
        case "path":
          t.push(new g(exports, o, n));
          break;
        case "circle":
          t.push(new f(exports, o, n));
          break;
        case "ellipse":
          t.push(new y(exports, o, n));
          break;
        default:
          T.logWarn(`Unsupported tag name: ${exports.tagName}`)
      }
    }

    function x(exports) {
      const t = C.parseFromString(exports, "application/xml"),
        i = [],
        o = t.getElementsByTagName("svg")[0],
        n = (0, s.ensureNotNull)(o.getAttribute("viewBox")).split(" ").map(parseFloat),
        r = n[2],
        a = n[3],
        logger = {
          x: n[0],
          y: n[1],
          width: r,
          height: a
        };
      i.push(new v(logger));
      let c = {
        getStyle: () => {}
      };
      const h = o.getElementsByTagName("defs");
      return h.length > 0 && (c = function(exports) {
        const t = {},
          i = exports.children;
        for (let exports = 0; e < i.length; ++e) {
          const s = i[e],
            o = s.getAttribute("id");
          o && ("linearGradient" === s.tagName ? t[o] = b(s) : w.logWarn(`Unsupported defs tag: ${s.tagName}`))
        }
        const s = new WeakMap;
        return {
          getStyle: (exports, i) => {
            const o = t[e];
            if (!o) return;
            let n = s.get(i);
            void 0 === n && (n = new Map, s.set(i, n));
            const r = n.get(exports);
            if (void 0 !== r) return r;
            const a = o(i);
            return n.set(exports, a), a
          }
        }
      }(h[0])), P(o, i, r, a, c), {
        viewBox: () => logger,
        render: (exports, t) => {
          exports.save();
          for (const s of i) s.apply(exports, t);
          exports.restore()
        }
      }
    }