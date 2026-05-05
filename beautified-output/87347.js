/**
 * Module 87347 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

87347: (e, t, i) => {
    "use strict";
    i.d(t, {
      svgRenderer: () => x
    });
    var s = i(50151),
      o = i(9343);
    const n = (0, o.getLogger)("Chart.SvgParser");

    function r(e, t) {
      const i = e.split(/[,\s]/).map((e => parseFloat(e.trim())));
      let s = 0;
      for (const e of i) {
        if (!Number.isFinite(e) && s < t) return null;
        s += 1
      }
      return i
    }
    const a = /([a-zA-Z]+)\((.*)\)/g;

    function l(e, t) {
      const i = e.getAttribute("transform")?.toLowerCase();
      if (void 0 === i) return null;
      const s = [];
      let o;
      a.lastIndex = 0;
      do {
        if (o = a.exec(i), null !== o) {
          const e = o[1],
            i = o[2];
          switch (e) {
            case "matrix":
              const o = r(i, 6);
              null !== o && s.push({
                type: e,
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
                type: e,
                a: a[0],
                x: a[1] ?? (t ? t.width / 2 : void 0),
                y: a[2] ?? (t ? t.height / 2 : void 0)
              });
              break;
            case "translate":
              const l = r(i, 1);
              null !== l && s.push({
                type: e,
                x: l[0],
                y: l[1]
              });
              break;
            case "scale":
              const c = r(i, 1);
              null !== c && s.push({
                type: e,
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

    function c(e, t) {
      for (const i of t) switch (i.type) {
        case "matrix":
          e.transform(i.a, i.b, i.c, i.d, i.e, i.f);
          break;
        case "rotate":
          void 0 !== i.x && void 0 !== i.y && e.translate(i.x, i.y), e.rotate(i.a * Math.PI / 180), void 0 !== i.x &&
            void 0 !== i.y && e.translate(-i.x, -i.y);
          break;
        case "scale":
          e.scale(i.x, i.y ?? i.x);
          break;
        case "translate":
          e.translate(i.x, i.y ?? 0)
      }
    }

    function h(e, t) {
      return parseFloat(e.getAttribute(t) ?? "")
    }
    const d = /^url\(#(.*)\)/;

    function u(e) {
      return d.exec(e)?.[1] ?? null
    }

    function _(e, t, i) {
      const o = {},
        n = e.getAttribute("fill");
      if (null !== n) {
        const e = u(n);
        o.getFillStyle = null !== e ? i => (0, s.ensureDefined)(t.getStyle(e, i)) : e => n
      }
      const r = e.getAttribute("stroke");
      if (null !== r) {
        const e = u(r);
        o.getStrokeStyle = null !== e ? i => (0, s.ensureDefined)(t.getStyle(e, i)) : e => r
      }
      const a = h(e, "stroke-width");
      Number.isFinite(a) && (o.strokeWidth = a);
      const c = h(e, "opacity");
      Number.isFinite(c) && (o.fillOpacity = c, o.strokeOpacity = c);
      const d = h(e, "stroke-opacity");
      Number.isFinite(d) && (o.strokeOpacity = d);
      const _ = h(e, "fill-opacity");
      if (Number.isFinite(_) && (o.fillOpacity = _), i) {
        const t = l(e);
        null !== t && (o.transform = t)
      }
      return o
    }
    class p {
      constructor(e) {
        this._transformOperations = e
      }
      apply(e, t) {
        null !== this._transformOperations ? (e.save(), c(e, this._transformOperations)) : e.restore()
      }
    }
    class m {
      constructor(e, t, i) {
        this._styleData = {
          ...i,
          ..._(e, t, !0)
        }
      }
      apply(e, t) {
        if (!this._isValid()) return;
        const {
          getFillStyle: i,
          getStrokeStyle: s,
          strokeWidth: o,
          transform: n,
          strokeOpacity: r,
          fillOpacity: a
        } = this._styleData, l = void 0 !== n || void 0 !== r || void 0 !== a;
        l && (e.save(), void 0 !== n && c(e, n)), this._render(e);
        const h = i?.(e);
        "none" !== h && (t.doNotApplyColors || (void 0 !== a && (e.globalAlpha = a), e.fillStyle = h ?? "black"), this
          ._fill(e));
        const d = s?.(e);
        void 0 !== d && "none" !== d && (void 0 !== o && (e.lineWidth = o), t.doNotApplyColors || (void 0 !== a && (e
          .globalAlpha = a), e.strokeStyle = d), this._stroke(e)), l && e.restore()
      }
      _fill(e) {
        e.fill()
      }
      _stroke(e) {
        e.stroke()
      }
    }
    class g extends m {
      constructor(e, t, i) {
        super(e, t, i);
        const s = e.getAttribute("d");
        this._path = null !== s ? new Path2D(s) : null, this._fillRule = e.getAttribute("fill-rule") ?? void 0
      }
      _fill(e) {
        e.fill((0, s.ensureNotNull)(this._path), this._fillRule)
      }
      _stroke(e) {
        e.stroke((0, s.ensureNotNull)(this._path))
      }
      _render(e) {}
      _isValid() {
        return null !== this._path
      }
    }
    class f extends m {
      constructor(e, t, i) {
        super(e, t, i), this._cx = h(e, "cx"), this._cy = h(e, "cy"), this._r = h(e, "r")
      }
      _render(e) {
        e.beginPath(), e.arc(this._cx, this._cy, this._r, 0, 2 * Math.PI)
      }
      _isValid() {
        return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._r)
      }
    }
    class y extends m {
      constructor(e, t, i) {
        super(e, t, i), this._cx = h(e, "cx"), this._cy = h(e, "cy"), this._rx = h(e, "rx"), this._ry = h(e, "ry")
      }
      _render(e) {
        e.beginPath(), e.ellipse(this._cx, this._cy, this._rx, this._ry, 0, 0, 2 * Math.PI)
      }
      _isValid() {
        return Number.isFinite(this._cx) && Number.isFinite(this._cy) && Number.isFinite(this._rx) && Number.isFinite(
          this._ry)
      }
    }
    class v {
      constructor(e) {
        this._originalViewBox = e
      }
      apply(e, t) {
        const i = t.targetViewBox;
        e.translate(i.x, i.y), e.scale(i.width / this._originalViewBox.width, i.height / this._originalViewBox
          .height), e.beginPath(), e.rect(0, 0, this._originalViewBox.width, this._originalViewBox.height), e.clip(),
          e.translate(-this._originalViewBox.x, -this._originalViewBox.y)
      }
    }
    const S = (0, o.getLogger)("Chart.SvgParser");

    function b(e) {
      const t = e.getAttribute("gradientUnits");
      if ("objectBoundingBox" === t) return void S.logWarn(`Unsupported linearGradient gradientUnits: ${t}`);
      const i = [],
        s = e.getElementsByTagName("stop");
      for (let e = 0; e < s.length; ++e) {
        const t = s[e],
          o = h(t, "offset"),
          n = t.getAttribute("stop-color");
        null !== n && i.push([Number.isFinite(o) ? o : 0, n])
      }
      const o = h(e, "x1"),
        n = h(e, "y1"),
        r = h(e, "x2"),
        a = h(e, "y2");
      return e => {
        const t = e.createLinearGradient(o, n, r, a);
        for (const e of i) t.addColorStop(e[0], e[1]);
        return t
      }
    }
    const w = (0, o.getLogger)("Chart.SvgParser");
    const C = new DOMParser,
      T = (0, o.getLogger)("Chart.SvgParser");

    function P(e, t, i, s, o, n) {
      const r = e.children;
      let a, c = n;
      "g" !== e.tagName && "svg" !== e.tagName || (c = {
        ...c,
        ..._(e, o, !1)
      }, a = l(e, {
        width: i,
        height: s
      }) ?? void 0), void 0 !== a && t.push(new p(a));
      for (let e = 0; e < r.length; ++e) {
        const n = r[e];
        "defs" !== n.tagName && P(n, t, i, s, o, c)
      }
      switch (void 0 !== a && t.push(new p(null)), e.tagName) {
        case "g":
        case "svg":
        case "defs":
          break;
        case "path":
          t.push(new g(e, o, n));
          break;
        case "circle":
          t.push(new f(e, o, n));
          break;
        case "ellipse":
          t.push(new y(e, o, n));
          break;
        default:
          T.logWarn(`Unsupported tag name: ${e.tagName}`)
      }
    }

    function x(e) {
      const t = C.parseFromString(e, "application/xml"),
        i = [],
        o = t.getElementsByTagName("svg")[0],
        n = (0, s.ensureNotNull)(o.getAttribute("viewBox")).split(" ").map(parseFloat),
        r = n[2],
        a = n[3],
        l = {
          x: n[0],
          y: n[1],
          width: r,
          height: a
        };
      i.push(new v(l));
      let c = {
        getStyle: () => {}
      };
      const h = o.getElementsByTagName("defs");
      return h.length > 0 && (c = function(e) {
        const t = {},
          i = e.children;
        for (let e = 0; e < i.length; ++e) {
          const s = i[e],
            o = s.getAttribute("id");
          o && ("linearGradient" === s.tagName ? t[o] = b(s) : w.logWarn(`Unsupported defs tag: ${s.tagName}`))
        }
        const s = new WeakMap;
        return {
          getStyle: (e, i) => {
            const o = t[e];
            if (!o) return;
            let n = s.get(i);
            void 0 === n && (n = new Map, s.set(i, n));
            const r = n.get(e);
            if (void 0 !== r) return r;
            const a = o(i);
            return n.set(e, a), a
          }
        }
      }(h[0])), P(o, i, r, a, c), {
        viewBox: () => l,
        render: (e, t) => {
          e.save();
          for (const s of i) s.apply(e, t);
          e.restore()
        }
      }
    }