/**
 * Module 4753 - Auto-beautified from TradingView webpack bundle
 *
 * @module 4753
 * @date 2026-04-23
 * @size 14936 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2383, 6453, 10555, 12217, 24640, 33350, 50151, 50605, 57658, 58221, 73041, 87465
 *
 * Exports:
 *   - TextRenderer (internal: k)
 *   - calculateLabelPosition (internal: m)
 *   - fontSize (internal: M)
 *   - getTextAlignInBox (internal: L)
 *   - getTextBoundaries (internal: g)
 *   - lineSpacing (internal: x)
 *   - needTextExclusionPath (internal: f)
 *   - wordWrap (internal: S)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  TextRenderer: () => k,
  calculateLabelPosition: () => m,
  fontSize: () => M,
  getTextAlignInBox: () => L,
  getTextBoundaries: () => g,
  lineSpacing: () => x,
  needTextExclusionPath: () => f,
  wordWrap: () => S
});
var s = i(10555),
  o = i(50151),
  n = i(6453),
  r = i(24640),
  a = i(50605),
  l = i(2383),
  c = i(58221),
  h = i(73041),
  d = i(87465),
  u = i(33350),
  _ = i(12217),
  p = i(57658);

function m(e, t, i, o, n) {
  const r = .5 * (t.x + i.x);
  let a = i.y;
  return t.y > i.y ? (a -= e.height / 2 + o.y, a = Math.max(e.height / 2, a)) : (a += e.height / 2 + o.y, a = Math.min(n - e.height / 2, a)), new s.Point(r, a)
}

function g(e, t, i) {
  if (e.isOutOfScreen(t, i)) return null;
  const s = e.getPolygonPoints();
  return 0 === s.length ? null : s
}

function f(e) {
  const t = e.getLinesInfo().lines;
  if (t.length % 2 == 0) return !1;
  if ("" === t[Math.floor(t.length / 2)].text.trim()) return !1;
  return !0
}

function y(e) {
  const t = [];
  do {
    const i = e.match(/\s+/);
    if (!i || void 0 === i.index || -1 === i.index) {
      t.push({
        word: e,
        spaces: ""
      });
      break
    }
    t.push({
      word: e.slice(0, i.index),
      spaces: i[0]
    }), e = e.slice(i.index + i[0].length)
  } while (e.length);
  return t
}

function v(e, t, i, s) {
  const o = [],
    n = [];
  for (let t = 0; t < e.length; ++t) n.push(t);
  for (; e.length;) {
    const r = Math.max(1, (0, _.upperbound)(n, s, ((s, o) => (0, u.measureText)(e.slice(0, o + 1), t, i).width > s), 0, e.length));
    o.push(e.slice(0, r)), e = e.slice(r)
  }
  return o
}

function S(e, t, i, s = !0, o) {
  o = (0, d.isString)(o) ? parseInt(o) : o;
  const n = (e += "").split(/\r\n|\r|\n|$/).map((e => ({
    text: e,
    hidden: !1,
    wrappedLinePart: !1,
    wrappedLineEnd: !1
  })));
  if (!(0, d.isNumber)(o) || !isFinite(o) || o <= 0) return n;
  if ((0, u.measureText)("x", t, i).width > o) return n;
  const r = [];
  for (let e = 0; e < n.length; e++) {
    const a = n[e];
    if ((0, u.measureText)(a.text, t, i).width <= o) {
      r.push(a);
      continue
    }
    const l = y(a.text),
      c = !0;
    let h = "",
      d = 0;
    for (; d < l.length;) {
      const e = l[d];
      let n = `${h}${e.word}`,
        a = (0, u.measureText)(n, t, i).width;
      if (a > o) {
        if ("" !== h) r.push({
          text: h,
          hidden: !1,
          wrappedLinePart: c,
          wrappedLineEnd: !1
        }), h = "";
        else if (1 === n.length) r.push({
          text: n,
          hidden: !1,
          wrappedLinePart: c,
          wrappedLineEnd: !0
        }), e.word = "";
        else {
          const s = v(n, t, i, o);
          for (let e = 0; e < s.length - 1; e += 1) r.push({
            text: s[e],
            hidden: !1,
            wrappedLinePart: c,
            wrappedLineEnd: !1
          });
          e.word = s[s.length - 1]
        }
        continue
      }
      let _ = n.length;
      if (n = `${h}${e.word}${e.spaces}`, a = (0, u.measureText)(n, t, i).width, a < o) {
        h = n, d += 1;
        continue
      }
      const p = v(n, t, i, o);
      for (let e = 0; e < p.length; e += 1) {
        const t = p[e];
        _ -= t.length;
        const i = {
          text: t,
          hidden: e > 0,
          wrappedLinePart: c,
          wrappedLineEnd: d === l.length - 1 && e === p.length - 1
        };
        i.hidden && s || r.push(i)
      }
      h = "", d += 1
    }
    "" !== h && r.push({
      text: h,
      wrappedLinePart: c,
      hidden: !1,
      wrappedLineEnd: !0
    })
  }
  return r
}

function b(e, t, i) {
  if (0 === i) return e.clone();
  const o = (e.x - t.x) * Math.cos(i) - (e.y - t.y) * Math.sin(i) + t.x,
    n = (e.x - t.x) * Math.sin(i) + (e.y - t.y) * Math.cos(i) + t.y;
  return (0, s.point)(o, n)
}

function w(e) {
  return void 0 !== e.boxPaddingVert ? e.boxPaddingVert * A(e) : void 0 !== e.boxPadding ? e.boxPadding * A(e) : M(e) / 3
}

function C(e) {
  return void 0 !== e.boxPaddingHorz ? e.boxPaddingHorz * A(e) : void 0 !== e.boxPadding ? e.boxPadding * A(e) : M(e) / 3
}

function T(e) {
  return void 0 !== e.boxPaddingLeft ? e.boxPaddingLeft * A(e) : C(e)
}

function P(e) {
  return void 0 !== e.boxPaddingRight ? e.boxPaddingRight * A(e) : C(e)
}

function x(e) {
  let t = e.lineSpacing;
  return void 0 === t && e.lineHeight && (t = (e.lineHeight - 1) * I(e)), (t ?? 0) * A(e)
}

function M(e) {
  return Math.ceil(I(e) * A(e))
}

function I(e) {
  return e.fontsize || e.fontSize || 30
}

function A(e) {
  const t = Math.min(1, Math.max(.2, e.scale || 1));
  if (1 === t) return t;
  const i = I(e);
  return Math.ceil(t * i) / i
}

function L(e) {
  const {
    horzAlign: t,
    extendLeft: i = !1,
    extendRight: o = !1,
    width: n,
    leftPoint: r,
    rightPoint: l
  } = e, c = (r.x <= n || i) && (l.x >= 0 || o);
  let h, d, u = t;
  switch (u) {
    case a.HorizontalAlign.Left:
      d = r.y, i ? h = c ? 0 : l.x : (h = r.x, u = a.HorizontalAlign.Right);
      break;
    case a.HorizontalAlign.Right:
      d = l.y, o ? h = c ? n : r.x : (h = l.x, u = a.HorizontalAlign.Left);
      break;
    default:
      h = ((i && c ? 0 : r.x) + (o && c ? n : l.x)) / 2, d = (r.y + l.y) / 2;
      break
  }
  return [(0, s.point)(h, d), u]
}
class k {
  constructor(e, t) {
    this._data = null, this._textWidthCache = new p.TextWidthCache, this._internalData = null, this._boxSize = null, this._box = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null, this._centerTextRotationPoint = null, this._rotationPoint = null, this._hitTest = t || new l.HitTestResult(l.HitTarget.MovePoint, {
      areaName: l.AreaName.Text
    }), void 0 !== e && this.setData(e)
  }
  setHitTest(e) {
    this._hitTest = e
  }
  data() {
    return this._data
  }
  updateData(e) {
    this.setData({
      ...(0, o.ensureNotNull)(this._data),
      ...e
    })
  }
  setData(e) {
    null !== e ? ((0, o.assert)(!e.decorator || void 0 === e.wordWrapWidth, "Decorator is not supported with wordWrapWidth"),
      void 0 === e.text && (e.text = ""), e.horzTextAlign || (e.horzTextAlign = e.horzAlign), ! function(e, t) {
        if (null === e || null === t) return null === e == (null === t);
        if (void 0 === e.points != (void 0 === t.points)) return !1;
        if (void 0 !== e.points && void 0 !== t.points) {
          if (e.points.length !== t.points.length) return !1;
          for (let o = 0; o < e.points.length; ++o)
            if (i = e.points[o], s = t.points[o], i.x !== s.x || i.y !== s.y) return !1
        }
        var i, s;
        return e.text === t.text && e.decorator === t.decorator && e.vertAlign === t.vertAlign && e.horzAlign === t.horzAlign && e.horzTextAlign === t.horzTextAlign && e.font === t.font && e.offsetX === t.offsetX && e.offsetY === t.offsetY && e.bold === t.bold && e.italic === t.italic && e.fontsize === t.fontsize && e.fontSize === t.fontSize && e.backgroundRoundRect === t.backgroundRoundRect && e.forceTextAlign === t.forceTextAlign && e.wordWrapWidth === t.wordWrapWidth && e.forceCalculateMaxLineWidth === t.forceCalculateMaxLineWidth && e.lineHeight === t.lineHeight && e.lineSpacing === t.lineSpacing && e.scale === t.scale && e.boxPadding === t.boxPadding && e.boxPaddingVert === t.boxPaddingVert && e.boxPaddingLeft === t.boxPaddingLeft && e.boxPaddingRight === t.boxPaddingRight && e.boxPaddingHorz === t.boxPaddingHorz && e.angle === t.angle && e.maxHeight === t.maxHeight && e.outlineBorder?.width === t.outlineBorder?.width && e.outlineBorder?.color === t.outlineBorder?.color
      }(this._data, e) ? (this._data = e, this._internalData = null, this._boxSize = null, this._polygonPoints = null, this._centerTextRotationPoint = null, this._rotationPoint = null, this._linesInfo = null, this._fontInfo = null, this._box = null) : this._data = e) : this._data = null
  }
  hitTest(e) {
    return null === this._data || void 0 === this._data.points || 0 === this._data.points.length ? null : (0, n.pointInPolygon)(e, this.getPolygonPoints()) ? this._hitTest : null
  }
  doesIntersectWithBox(e) {
    return null !== this._data && void 0 !== this._data.points && 0 !== this._data.points.length && (0, n.pointInBox)(this._data.points[0], e)
  }
  measure() {
    if (null === this._data) return {
      boxWidth: 0,
      boxHeight: 0,
      width: 0,
      height: 0
    };
    const e = this._getBoxSize();
    return {
      boxWidth: e.boxWidth,
      boxHeight: e.boxHeight,
      width: e.textBoxWidth,
      height: e.textBoxHeight
    }
  }
  rect() {
    if (null === this._data) return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    const {
      boxLeft: e,
      boxTop: t,
      boxWidth: i,
      boxHeight: s
    } = this._getBox();
    return {
      x: e,
      y: t,
      width: i,
      height: s
    }
  }
  isOutOfScreen(e, t) {
    if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return !0;
    const {
      boxLeft: i,
      boxWidth: o
    } = this._getBox();
    if (i + o < 0 || i > e) {
      const i = (0, s.box)((0, s.point)(0, 0), (0, s.point)(e, t));
      return this.getPolygonPoints().every((e => !(0, n.pointInBox)(e, i)))
    }
    return !1
  }
  setPoints(e, t) {
    (0, o.ensureNotNull)(this._data).points = e, this._hitTest = t || new l.HitTestResult(l.HitTarget.MovePoint)
  }
  setPoint(e, t, i) {
    const s = (0, o.ensureNotNull)(this._data);
    this.setData({
      ...s,
      points: [e],
      offsetX: t ?? s.offsetX,
      offsetY: i ?? s.offsetY
    })
  }
  point() {
    return this._data?.points?.[0] ?? null
  }
  fontStyle(e) {
    return null === this._data ? "" : this._getFontInfo().fontStyle
  }
  lineHeight() {
    return null === this._data ? 0 : M(this._data)
  }
  lineSpacing() {
    return null === this._data ? 0 : x(this._data)
  }
  draw(e, t) {
    if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return;
    const {
      mediaSize: i,
      horizontalPixelRatio: n,
      verticalPixelRatio: r
    } = t;
    if (this.isOutOfScreen(i.width, i.height)) return;
    const a = this._getInternalData(),
      l = (0, o.ensureNotNull)(this.rotation()),
      h = (0, s.point)(l.x * n, l.y * r);
    e.save(), 0 !== l.angle && (e.translate(h.x, h.y), e.rotate(l.angle), e.translate(-h.x, -h.y));
    const d = this._getFontInfo().fontSize;
    e.textBaseline = a.textBaseLine, e.textAlign = a.textAlign, e.font = this.fontStyle();
    const {
      scaledLeft: _,
      scaledRight: p,
      scaledTop: m,
      scaledBottom: g
    } = function(e, t) {
      const {
        horizontalPixelRatio: i,
        verticalPixelRatio: s
      } = t, o = Math.round(e.boxLeft * i), n = Math.round(e.boxTop * s);
      return {
        scaledLeft: o,
        scaledRight: o + Math.round(e.boxWidth * i),
        scaledTop: n,
        scaledBottom: n + Math.round(e.boxHeight * s)
      }
    }(a, t), f = this._data.borderWidth || Math.max(d / 12, 1), y = Math.round(f * n), v = y / 2;
    if (this._data.backgroundColor || this._data.borderColor) {
      let t = !1;
      if (this._data.boxShadow) {
        e.save();
        const {
          shadowColor: i,
          shadowBlur: s,
          shadowOffsetX: o = 0,
          shadowOffsetY: a = 0
        } = this._data.boxShadow;
        e.shadowColor = i, e.shadowBlur = s * n, e.shadowOffsetX = o * n, e.shadowOffsetY = a * r, t = !0
      }
      if (this._data.backgroundRoundRect) {
        const {
          borderColor: i,
          backgroundColor: s,
          backgroundRoundRect: o
        } = this._data;
        s && ((0, c.drawRoundRect)(e, _, m, p - _, g - m, o * n), e.closePath(), e.fillStyle = s, e.fill(), t && (e.restore(), t = !1)), i && ((0, c.drawRoundRect)(e, _ - v, m - v, p - _ + y, g - m + y, o * n + y), e.closePath(), e.strokeStyle = i, e.lineWidth = y, e.stroke(), t && e.restore())
      } else {
        const {
          borderColor: i,
          backgroundColor: s
        } = this._data;
        s && (e.fillStyle = s, e.fillRect(_, m, p - _, g - m), t && (e.restore(), t = !1)), i && (e.strokeStyle = i, e.lineWidth = y, e.beginPath(), e.moveTo(_ - v, m - v), e.lineTo(_ - v, g + v), e.lineTo(p + v, g + v), e.lineTo(p + v, m - v), e.lineTo(_ - v, m - v), e.closePath(), e.stroke(), t && e.restore())
      }
    }
    this._drawSelectionIfNeeded(e, t), e.fillStyle = this._data.color;
    const S = (_ + Math.round(a.textHorizStart * n)) / n,
      b = .05 * d;
    let w = (m + Math.round((a.textVertStart + b) * r)) / r;
    const C = x(this._data),
      T = this.getLinesInfo();
    for (const t of T.lines)(0, u.drawScaled)(e, n, r, (() => e.fillText(t.text, S, w))), w += d + C;
    if (this._data.decorator?.draw(e, t, this._data, a), this._data.outlineBorder) {
      const {
        outlineBorder: {
          width: t,
          color: i
        }
      } = this._data, s = Math.round(t * n), o = this._data.borderColor ? y : 0, r = {
        x: _ - o,
        y: m - o,
        w: p - _ + 2 * o,
        h: g - m + 2 * o
      }, a = new Path2D;
      a.rect(r.x - s, r.y - s, r.w + 2 * s, r.h + 2 * s), a.rect(r.x, r.y, r.w, r.h), e.fillStyle = i, e.fill(a, "evenodd")
    }
    e.restore()
  }
  getPolygonPoints() {
    if (null !== this._polygonPoints) return this._polygonPoints;
    if (null === this._data) return [];
    const e = this._data.angle || 0,
      {
        boxLeft: t,
        boxTop: i,
        boxWidth: o,
        boxHeight: n
      } = this._getBox(),
      r = this._getRotationPoint();
    return this._polygonPoints = [b((0, s.point)(t, i), r, e), b((0, s.point)(t + o, i), r, e), b((0, s.point)(t + o, i + n), r, e), b((0, s.point)(t, i + n), r, e)], this._polygonPoints
  }
  centerTextRotation() {
    if (null === this._centerTextRotationPoint && null !== this._data) {
      const e = this._data.angle ?? 0,
        t = this._getRotationPoint(),
        {
          textLeft: i,
          textTop: o,
          textRight: n,
          textBottom: r
        } = this._getInternalData(),
        a = b((0, s.point)((i + n) / 2, (o + r) / 2), t, e);
      this._centerTextRotationPoint = {
        x: a.x,
        y: a.y,
        angle: e
      }
    }
    return this._centerTextRotationPoint
  }
  rotation() {
    if (null === this._rotationPoint && null !== this._data) {
      const e = this._data.angle ?? 0,
        t = this._getRotationPoint();
      this._rotationPoint = {
        x: t.x,
        y: t.y,
        angle: e
      }
    }
    return this._rotationPoint
  }
  getLinesInfo() {
    if (null === this._linesInfo) {
      const e = (0, o.ensureNotNull)(this._data),
        t = S(e.text, this.fontStyle(), this._textWidthCache, !1, e.wordWrapWidth);
      let i = t.filter((e => !e.hidden));
      if (void 0 !== e.maxHeight) {
        const t = function(e) {
          const t = (0, o.ensureDefined)(e.maxHeight),
            i = M(e),
            s = x(e);
          return Math.floor((t + s) / (i + s))
        }(e);
        i.length > t && (i = i.slice(0, t))
      }
      this._linesInfo = {
        linesMaxWidth: this._getLinesMaxWidth(i),
        linesIncludingHidden: t,
        lines: i
      }
    }
    return this._linesInfo
  }
  positionToCoordinate(e) {
    const t = (0, o.ensureNotNull)(this._data),
      i = this._getInternalData(),
      s = this.getLinesInfo(),
      {
        x: n,
        y: r,
        lineNumber: a
      } = (0, h.getSymbolCoordinatesInfo)({
        symbolPosition: e,
        textWidth: i.textRight - i.textLeft,
        textByLines: s.linesIncludingHidden,
        lineHeight: M(t),
        font: this.fontStyle(),
        textAlign: i.textAlign,
        lineSpacing: this.lineSpacing()
      });
    return {
      x: n + i.textLeft,
      y: r + i.textTop,
      lineNumber: a
    }
  }
  _getInternalData() {
    if (null !== this._internalData) return this._internalData;
    const e = (0, o.ensureNotNull)(this._data),
      {
        boxLeft: t,
        boxTop: i,
        boxWidth: s,
        boxHeight: n,
        textBoxWidth: l,
        textBoxHeight: c
      } = this._getBox(),
      h = T(e),
      d = P(e),
      u = w(e),
      _ = e.decorator?.geometry(e),
      p = _?.width ?? 0,
      m = 0 === e.text.length ? 0 : _?.decoratorAndTextMargin ?? 0,
      g = _?.ignoreRtl,
      f = p + m;
    let y;
    const v = i + u + M(e) / 2;
    let S;
    const b = (0, r.isRtl)(),
      C = b && !g,
      x = C ? t + s - d - p : t + h;
    switch ((0, o.ensureDefined)(e.horzTextAlign)) {
      case a.HorizontalAlign.Left:
        S = "start", y = x + f, b && (e.forceTextAlign ? S = "left" : (y = C ? x - m : t + s - d, S = "right"));
        break;
      case a.HorizontalAlign.Center:
        S = "center";
        const i = s - h - d - f;
        y = C ? x - m - i / 2 : x + f + i / 2;
        break;
      case a.HorizontalAlign.Right:
        S = "end", y = C ? x - m : t + s - d, b && e.forceTextAlign && (S = "right")
    }
    return this._internalData = {
      boxLeft: t,
      boxTop: i,
      boxWidth: s,
      boxHeight: n,
      textBoxWidth: l,
      textBoxHeight: c,
      textLeft: t + h + (C ? 0 : f),
      textRight: t + s - d - (C ? f : 0),
      textTop: i + u,
      textBottom: i + n - u,
      textHorizStart: y - t,
      textVertStart: v - i,
      textAlign: S,
      textBaseLine: "middle",
      decoratorLeft: x,
      decoratorWidth: p
    }, this._internalData
  }
  _getFontInfo() {
    if (null === this._fontInfo) {
      const e = (0, o.ensureNotNull)(this._data),
        t = M(e),
        i = `${e.bold?"bold ":""}${e.italic?"italic ":""}${t}px ${e.font}`;
      this._fontInfo = {
        fontStyle: i,
        fontSize: t
      }
    }
    return this._fontInfo
  }
  _drawSelectionIfNeeded(e, t) {
    const i = (0, o.ensureNotNull)(this._data),
      s = M((0, o.ensureNotNull)(this._data));
    if (i.selectionHighlight) {
      const o = this.positionToCoordinate(i.selectionHighlight.start),
        n = this.positionToCoordinate(i.selectionHighlight.end),
        r = this._getInternalData();
      (0, h.drawSelection)(e, t, {
        lines: this.getLinesInfo().linesIncludingHidden,
        selectionStart: o,
        selectionEnd: n,
        left: r.textLeft,
        right: r.textRight,
        color: i.selectionHighlight.color,
        font: this.fontStyle(),
        lineHeight: s,
        lineSpacing: this.lineSpacing()
      })
    }
  }
  _getLinesMaxWidth(e) {
    const t = this.fontStyle();
    if (null !== this._data && this._data.wordWrapWidth && !this._data.forceCalculateMaxLineWidth) return this._data.wordWrapWidth * A(this._data);
    let i = 0;
    for (const s of e) i = Math.max(i, (0, u.measureText)(s.text, t, this._textWidthCache).width);
    return i
  }
  _getBoxSize() {
    if (null === this._boxSize) {
      const e = this.getLinesInfo(),
        t = (0, o.ensureNotNull)(this._data),
        i = function(e, t) {
          const i = e.decorator?.geometry(e),
            s = Math.round(t + T(e) + P(e) + (i?.width ?? 0) + (0 === e.text.length ? 0 : i?.decoratorAndTextMargin ?? 0));
          return s % 2 ? s + 1 : s
        }(t, e.linesMaxWidth),
        s = function(e, t) {
          return M(e) * t + x(e) * (t - 1) + 2 * w(e)
        }(t, e.lines.length);
      this._boxSize = {
        textBoxWidth: i,
        textBoxHeight: s,
        boxWidth: t.boxWidth ?? i,
        boxHeight: t.boxHeight ?? s
      }
    }
    return this._boxSize
  }
  _getBox() {
    if (this._box) return this._box;
    const e = (0, o.ensureNotNull)(this._data),
      [t] = (0, o.ensureDefined)(e.points),
      {
        boxWidth: i,
        boxHeight: s,
        textBoxWidth: n,
        textBoxHeight: r
      } = this._getBoxSize();
    let {
      y: l,
      x: c
    } = t;
    switch (e.vertAlign) {
      case a.VerticalAlign.Bottom:
        l -= s + e.offsetY;
        break;
      case a.VerticalAlign.Middle:
        l -= s / 2;
        break;
      case a.VerticalAlign.Top:
        l += e.offsetY
    }
    switch (e.horzAlign) {
      case a.HorizontalAlign.Left:
        c += e.offsetX;
        break;
      case a.HorizontalAlign.Center:
        c -= i / 2;
        break;
      case a.HorizontalAlign.Right:
        c -= i + e.offsetX
    }
    return this._box = {
      boxLeft: c,
      boxTop: l,
      boxWidth: i,
      boxHeight: s,
      textBoxWidth: n,
      textBoxHeight: r
    }
  }
  _getRotationPoint() {
    const {
      boxLeft: e,
      boxTop: t,
      boxWidth: i,
      boxHeight: n
    } = this._getBox(), {
      horzAlign: r,
      vertAlign: l
    } = (0, o.ensureNotNull)(this._data);
    let c, h;
    switch (r) {
      case a.HorizontalAlign.Center:
        c = e + i / 2;
        break;
      case a.HorizontalAlign.Left:
        c = e;
        break;
      case a.HorizontalAlign.Right:
        c = e + i
    }
    switch (l) {
      case a.VerticalAlign.Middle:
        h = t + n / 2;
        break;
      case a.VerticalAlign.Top:
        h = t;
        break;
      case a.VerticalAlign.Bottom:
        h = t + n
    }
    return (0, s.point)(c, h)
  }
