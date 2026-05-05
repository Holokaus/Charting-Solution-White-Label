/**
 * Module 4699 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4699: (e, t, i) => {
    "use strict";
    i.d(t, {
      applyColor: () => c
    });
    var s = i(83873),
      o = i(16659),
      n = i(93201);
    const r = new WeakMap;
    var a, l;

    function c(e, t, i = 0, a = 3) {
      const {
        context: l,
        bitmapSize: c,
        mediaSize: h
      } = e;
      let d;
      if ((0, s.default)(t)) d = t;
      else if (t.type === n.ColorType.Solid) d = t.color;
      else {
        let e = r.get(l);
        void 0 === e && (e = new o.CircularCacheBuffer(1e3), r.set(l, e));
        const s = 0 === i ? h.height : c.height,
          n = `${t.startColor}_${t.endColor}_${s}`;
        let a = e.get(n);
        void 0 === a && (a = l.createLinearGradient(0, 0, 0, s), a.addColorStop(0, t.startColor), a.addColorStop(1, t
          .endColor), e.set(n, a)), d = a
      }
      1 & a && (l.strokeStyle = d), 2 & a && (l.fillStyle = d)
    }! function(e) {
      e[e.Stroke = 1] = "Stroke", e[e.Fill = 2] = "Fill", e[e.Both = 3] = "Both"
    }(a || (a = {})),
    function(e) {
      e[e.Media = 0] = "Media", e[e.Bitmap = 1] = "Bitmap"
    }(l || (l = {}))