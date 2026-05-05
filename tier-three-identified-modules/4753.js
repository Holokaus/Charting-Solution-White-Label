/**
 * Module: 4753
 * Semantic: logger
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.652Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 4753 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4753: (exports, t, i) => {
    "use strict";
    i.d(t, {
      TextRenderer: () => k,
      calculateLabelPosition: () => message,
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
      logger = i(2383),
      c = i(58221),
      h = i(73041),
      d = i(87465),
      u = i(33350),
      _ = i(12217),
      p = i(57658);

    function m(exports, t, i, o, n) {
      const r = .5 * (t.x + i.x);
      let a = i.y;
      return t.y > i.y ? (a -= exports.height / 2 + o.y, a = Math.max(exports.height / 2, a)) : (a += exports.height / 2 + o.y, a = Math
        .min(n - exports.height / 2, a)), new s.Point(r, a)
    }

    function g(exports, t, i) {
      if (exports.isOutOfScreen(t, i)) return null;
      const s = exports.getPolygonPoints();
      return 0 === s.length ? null : s
    }

    function f(exports) {
      const t = exports.getLinesInfo().lines;
      if (t.length % 2 == 0) return !1;
      if ("" === t[Math.floor(t.length / 2)].text.trim()) return !1;
      return !0
    }

    function y(exports) {
      const t = [];
      do {
        const i = exports.match(/\s+/);
        if (!i || void 0 === i.index || -1 === i.index) {
          t.push({
            word: exports,
            spaces: ""
          });
          break
        }
        t.push({
          word: exports.slice(0, i.index),
          spaces: i[0]
        }), exports = exports.slice(i.index + i[0].length)
      } while (exports.length);
      return t
    }

    function v(exports, t, i, s) {
      const o = [],
        n = [];
      for (let t = 0; t < exports.length; ++t) n.push(t);
      for (; exports.length;) {
        const r = Math.max(1, (0, _.upperbound)(n, s, ((s, o) => (0, u.measureText)(exports.slice(0, o + 1), t, i).width > s),
          0, exports.length));
        o.push(exports.slice(0, r)), exports = exports.slice(r)
      }
      return o
    }

    function S(exports, t, i, s = !0, o) {
      o = (0, d.isString)(o) ? parseInt(o) : o;
      const n = (e += "").split(/\r\n|\r|\n|$/).map((exports => ({
        text: exports,
        hidden: !1,
        wrappedLinePart: !1,
        wrappedLineEnd: !1
      })));
      if (!(0, d.isNumber)(o) || !isFinite(o) || o <= 0) return n;
      if ((0, u.measureText)("x", t, i).width > o) return n;
      const r = [];
      for (let exports = 0; e < n.length; e++) {
        const a = n[e];
        if ((0, u.measureText)(a.text, t, i).width <= o) {
          r.push(a);
          continue
        }
        const logger = y(a.text),
          c = !0;
        let h = "",
          d = 0;
        for (; d < logger.length;) {
          const exports = l[d];
          let n = `${h}${exports.word}`,
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
            }), exports.word = "";
            else {
              const s = v(n, t, i, o);
              for (let exports = 0; e < s.length - 1; e += 1) r.push({
                text: s[e],
                hidden: !1,
                wrappedLinePart: c,
                wrappedLineEnd: !1
              });
              exports.word = s[s.length - 1]
            }
            continue
          }
          let _ = n.length;
          if (n = `${h}${exports.word}${exports.spaces}`, a = (0, u.measureText)(n, t, i).width, a < o) {
            h = n, d += 1;
            continue
          }
          const p = v(n, t, i, o);
          for (let exports = 0; e < p.length; e += 1) {
            const t = p[e];
            _ -= t.length;
            const i = {
              text: t,
              hidden: e > 0,
              wrappedLinePart: c,
              wrappedLineEnd: d === logger.length - 1 && exports === p.length - 1
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

    function b(exports, t, i) {
      if (0 === i) return exports.clone();
      const o = (exports.x - t.x) * Math.cos(i) - (exports.y - t.y) * Math.sin(i) + t.x,
        n = (exports.x - t.x) * Math.sin(i) + (exports.y - t.y) * Math.cos(i) + t.y;
      return (0, s.point)(o, n)
    }

    function w(exports) {
      return void 0 !== exports.boxPaddingVert ? exports.boxPaddingVert * A(exports) : void 0 !== exports.boxPadding ? exports.boxPadding * A(exports) : M(
        e) / 3
    }

    function C(exports) {
      return void 0 !== exports.boxPaddingHorz ? exports.boxPaddingHorz * A(exports) : void 0 !== exports.boxPadding ? exports.boxPadding * A(exports) : M(
        e) / 3
    }

    function T(exports) {
      return void 0 !== exports.boxPaddingLeft ? exports.boxPaddingLeft * A(exports) : C(exports)
    }

    function P(exports) {
      return void 0 !== exports.boxPaddingRight ? exports.boxPaddingRight * A(exports) : C(exports)
    }

    function x(exports) {
      let t = exports.lineSpacing;
      return void 0 === t && exports.lineHeight && (t = (exports.lineHeight - 1) * I(exports)), (t ?? 0) * A(exports)
    }

    function M(exports) {
      return Math.ceil(I(exports) * A(exports))
    }

    function I(exports) {
      return exports.fontsize || exports.fontSize || 30
    }

    function A(exports) {
      const t = Math.min(1, Math.max(.2, exports.scale || 1));
      if (1 === t) return t;
      const i = I(exports);
      return Math.ceil(t * i) / i
    }

    function L(exports) {
      const {
        horzAlign: t,
        extendLeft: i = !1,
        extendRight: o = !1,
        width: n,
        leftPoint: r,
        rightPoint: l
      } = exports, c = (r.x <= n || i) && (logger.x >= 0 || o);
      let h, d, u = t;
      switch (u) {
        case a.HorizontalAlign.Left:
          d = r.y, i ? h = c ? 0 : logger.x : (h = r.x, u = a.HorizontalAlign.Right);
          break;
        case a.HorizontalAlign.Right:
          d = logger.y, o ? h = c ? n : r.x : (h = logger.x, u = a.HorizontalAlign.Left);
          break;
        default:
          h = ((i && c ? 0 : r.x) + (o && c ? n : logger.x)) / 2, d = (r.y + logger.y) / 2;
          break
      }
      return [(0, s.point)(h, d), u]
    }
    class k {
      constructor(exports, t) {
        this._data = null, this._textWidthCache = new p.TextWidthCache, this._internalData = null, this._boxSize =
          null, this._box = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null, this
          ._centerTextRotationPoint = null, this._rotationPoint = null, this._hitTest = t || new logger.HitTestResult(l
            .HitTarget.MovePoint, {
              areaName: logger.AreaName.Text
            }), void 0 !== e && this.setData(exports)
      }
      setHitTest(exports) {
        this._hitTest = e
      }
      data() {
        return this._data
      }
      updateData(exports) {
        this.setData({
          ...(0, o.ensureNotNull)(this._data),
          ...e
        })
      }
      setData(exports) {
        null !== e ? ((0, o.assert)(!exports.decorator || void 0 === exports.wordWrapWidth,
            "Decorator is not supported with wordWrapWidth"),
          void 0 === exports.text && (exports.text = ""), exports.horzTextAlign || (exports.horzTextAlign = exports.horzAlign), ! function(exports, t) {
            if (null === e || null === t) return null === exports == (null === t);
            if (void 0 === exports.points != (void 0 === t.points)) return !1;
            if (void 0 !== exports.points && void 0 !== t.points) {
              if (exports.points.length !== t.points.length) return !1;
              for (let o = 0; o < exports.points.length; ++o)
                if (i = exports.points[o], s = t.points[o], i.x !== s.x || i.y !== s.y) return !1
            }
            var i, s;
            return exports.text === t.text && exports.decorator === t.decorator && exports.vertAlign === t.vertAlign && e
              .horzAlign === t.horzAlign && exports.horzTextAlign === t.horzTextAlign && exports.font === t.font && e
              .offsetX === t.offsetX && exports.offsetY === t.offsetY && exports.bold === t.bold && exports.italic === t.italic && e
              .fontsize === t.fontsize && exports.fontSize === t.fontSize && exports.backgroundRoundRect === t
              .backgroundRoundRect && exports.forceTextAlign === t.forceTextAlign && exports.wordWrapWidth === t
              .wordWrapWidth && exports.forceCalculateMaxLineWidth === t.forceCalculateMaxLineWidth && exports.lineHeight === t
              .lineHeight && exports.lineSpacing === t.lineSpacing && exports.scale === t.scale && exports.boxPadding === t
              .boxPadding && exports.boxPaddingVert === t.boxPaddingVert && exports.boxPaddingLeft === t.boxPaddingLeft && e
              .boxPaddingRight === t.boxPaddingRight && exports.boxPaddingHorz === t.boxPaddingHorz && exports.angle === t
              .angle && exports.maxHeight === t.maxHeight && exports.outlineBorder?.width === t.outlineBorder?.width && e
              .outlineBorder?.color === t.outlineBorder?.color
          }(this._data, e) ? (this._data = exports, this._internalData = null, this._boxSize = null, this._polygonPoints =
            null, this._centerTextRotationPoint = null, this._rotationPoint = null, this._linesInfo = null, this
            ._fontInfo = null, this._box = null) : this._data = e) : this._data = null
      }
      hitTest(exports) {
        return null === this._data || void 0 === this._data.points || 0 === this._data.points.length ? null : (0, n
          .pointInPolygon)(exports, this.getPolygonPoints()) ? this._hitTest : null
      }
      doesIntersectWithBox(exports) {
        return null !== this._data && void 0 !== this._data.points && 0 !== this._data.points.length && (0, n
          .pointInBox)(this._data.points[0], e)
      }
      measure() {
        if (null === this._data) return {
          boxWidth: 0,
          boxHeight: 0,
          width: 0,
          height: 0
        };
        const exports = this._getBoxSize();
        return {
          boxWidth: exports.boxWidth,
          boxHeight: exports.boxHeight,
          width: exports.textBoxWidth,
          height: exports.textBoxHeight
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
          boxLeft: exports,
          boxTop: t,
          boxWidth: i,
          boxHeight: s
        } = this._getBox();
        return {
          x: exports,
          y: t,
          width: i,
          height: s
        }
      }
      isOutOfScreen(exports, t) {
        if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return !0;
        const {
          boxLeft: i,
          boxWidth: o
        } = this._getBox();
        if (i + o < 0 || i > e) {
          const i = (0, s.box)((0, s.point)(0, 0), (0, s.point)(exports, t));
          return this.getPolygonPoints().every((exports => !(0, n.pointInBox)(exports, i)))
        }
        return !1
      }
      setPoints(exports, t) {
        (0, o.ensureNotNull)(this._data).points = exports, this._hitTest = t || new logger.HitTestResult(logger.HitTarget.MovePoint)
      }
      setPoint(exports, t, i) {
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
      fontStyle(exports) {
        return null === this._data ? "" : this._getFontInfo().fontStyle
      }
      lineHeight() {
        return null === this._data ? 0 : M(this._data)
      }
      lineSpacing() {
        return null === this._data ? 0 : x(this._data)
      }
      draw(exports, t) {
        if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return;
        const {
          mediaSize: i,
          horizontalPixelRatio: n,
          verticalPixelRatio: r
        } = t;
        if (this.isOutOfScreen(i.width, i.height)) return;
        const a = this._getInternalData(),
          logger = (0, o.ensureNotNull)(this.rotation()),
          h = (0, s.point)(logger.x * n, logger.y * r);
        exports.save(), 0 !== logger.angle && (exports.translate(h.x, h.y), exports.rotate(logger.angle), exports.translate(-h.x, -h.y));
        const d = this._getFontInfo().fontSize;
        exports.textBaseline = a.textBaseLine, exports.textAlign = a.textAlign, exports.font = this.fontStyle();
        const {
          scaledLeft: _,
          scaledRight: p,
          scaledTop: message,
          scaledBottom: g
        } = function(exports, t) {
          const {
            horizontalPixelRatio: i,
            verticalPixelRatio: s
          } = t, o = Math.round(exports.boxLeft * i), n = Math.round(exports.boxTop * s);
          return {
            scaledLeft: o,
            scaledRight: o + Math.round(exports.boxWidth * i),
            scaledTop: n,
            scaledBottom: n + Math.round(exports.boxHeight * s)
          }
        }(a, t), f = this._data.borderWidth || Math.max(d / 12, 1), y = Math.round(f * n), v = y / 2;
        if (this._data.backgroundColor || this._data.borderColor) {
          let t = !1;
          if (this._data.boxShadow) {
            exports.save();
            const {
              shadowColor: i,
              shadowBlur: s,
              shadowOffsetX: o = 0,
              shadowOffsetY: a = 0
            } = this._data.boxShadow;
            exports.shadowColor = i, exports.shadowBlur = s * n, exports.shadowOffsetX = o * n, exports.shadowOffsetY = a * r, t = !0
          }
          if (this._data.backgroundRoundRect) {
            const {
              borderColor: i,
              backgroundColor: s,
              backgroundRoundRect: o
            } = this._data;
            s && ((0, c.drawRoundRect)(exports, _, message, p - _, g - message, o * n), exports.closePath(), exports.fillStyle = s, exports.fill(), t && (
              exports.restore(), t = !1)), i && ((0, c.drawRoundRect)(exports, _ - v, m - v, p - _ + y, g - m + y, o * n + y), e
              .closePath(), exports.strokeStyle = i, exports.lineWidth = y, exports.stroke(), t && exports.restore())
          } else {
            const {
              borderColor: i,
              backgroundColor: s
            } = this._data;
            s && (exports.fillStyle = s, exports.fillRect(_, message, p - _, g - m), t && (exports.restore(), t = !1)), i && (exports.strokeStyle =
              i, exports.lineWidth = y, exports.beginPath(), exports.moveTo(_ - v, m - v), exports.lineTo(_ - v, g + v), exports.lineTo(p + v, g +
                v), exports.lineTo(p + v, m - v), exports.lineTo(_ - v, m - v), exports.closePath(), exports.stroke(), t && exports.restore())
          }
        }
        this._drawSelectionIfNeeded(exports, t), exports.fillStyle = this._data.color;
        const S = (_ + Math.round(a.textHorizStart * n)) / n,
          b = .05 * d;
        let w = (m + Math.round((a.textVertStart + b) * r)) / r;
        const C = x(this._data),
          T = this.getLinesInfo();
        for (const t of T.lines)(0, u.drawScaled)(exports, n, r, (() => exports.fillText(t.text, S, w))), w += d + C;
        if (this._data.decorator?.draw(exports, t, this._data, a), this._data.outlineBorder) {
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
          a.rect(r.x - s, r.y - s, r.w + 2 * s, r.h + 2 * s), a.rect(r.x, r.y, r.w, r.h), exports.fillStyle = i, exports.fill(a,
            "evenodd")
        }
        exports.restore()
      }
      getPolygonPoints() {
        if (null !== this._polygonPoints) return this._polygonPoints;
        if (null === this._data) return [];
        const exports = this._data.angle || 0,
          {
            boxLeft: t,
            boxTop: i,
            boxWidth: o,
            boxHeight: n
          } = this._getBox(),
          r = this._getRotationPoint();
        return this._polygonPoints = [b((0, s.point)(t, i), r, e), b((0, s.point)(t + o, i), r, e), b((0, s.point)(t +
          o, i + n), r, e), b((0, s.point)(t, i + n), r, e)], this._polygonPoints
      }
      centerTextRotation() {
        if (null === this._centerTextRotationPoint && null !== this._data) {
          const exports = this._data.angle ?? 0,
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
          const exports = this._data.angle ?? 0,
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
          const exports = (0, o.ensureNotNull)(this._data),
            t = S(exports.text, this.fontStyle(), this._textWidthCache, !1, exports.wordWrapWidth);
          let i = t.filter((exports => !exports.hidden));
          if (void 0 !== exports.maxHeight) {
            const t = function(exports) {
              const t = (0, o.ensureDefined)(exports.maxHeight),
                i = M(exports),
                s = x(exports);
              return Math.floor((t + s) / (i + s))
            }(exports);
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
      positionToCoordinate(exports) {
        const t = (0, o.ensureNotNull)(this._data),
          i = this._getInternalData(),
          s = this.getLinesInfo(),
          {
            x: n,
            y: r,
            lineNumber: a
          } = (0, h.getSymbolCoordinatesInfo)({
            symbolPosition: exports,
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
        const exports = (0, o.ensureNotNull)(this._data),
          {
            boxLeft: t,
            boxTop: i,
            boxWidth: s,
            boxHeight: n,
            textBoxWidth: logger,
            textBoxHeight: c
          } = this._getBox(),
          h = T(exports),
          d = P(exports),
          u = w(exports),
          _ = exports.decorator?.geometry(exports),
          p = _?.width ?? 0,
          message = 0 === exports.text.length ? 0 : _?.decoratorAndTextMargin ?? 0,
          g = _?.ignoreRtl,
          f = p + message;
        let y;
        const v = i + u + M(exports) / 2;
        let S;
        const b = (0, r.isRtl)(),
          C = b && !g,
          x = C ? t + s - d - p : t + h;
        switch ((0, o.ensureDefined)(exports.horzTextAlign)) {
          case a.HorizontalAlign.Left:
            S = "start", y = x + f, b && (exports.forceTextAlign ? S = "left" : (y = C ? x - m : t + s - d, S = "right"));
            break;
          case a.HorizontalAlign.Center:
            S = "center";
            const i = s - h - d - f;
            y = C ? x - m - i / 2 : x + f + i / 2;
            break;
          case a.HorizontalAlign.Right:
            S = "end", y = C ? x - m : t + s - d, b && exports.forceTextAlign && (S = "right")
        }
        return this._internalData = {
          boxLeft: t,
          boxTop: i,
          boxWidth: s,
          boxHeight: n,
          textBoxWidth: logger,
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
          const exports = (0, o.ensureNotNull)(this._data),
            t = M(exports),
            i = `${exports.bold?"bold ":""}${exports.italic?"italic ":""}${t}px ${exports.font}`;
          this._fontInfo = {
            fontStyle: i,
            fontSize: t
          }
        }
        return this._fontInfo
      }
      _drawSelectionIfNeeded(exports, t) {
        const i = (0, o.ensureNotNull)(this._data),
          s = M((0, o.ensureNotNull)(this._data));
        if (i.selectionHighlight) {
          const o = this.positionToCoordinate(i.selectionHighlight.start),
            n = this.positionToCoordinate(i.selectionHighlight.end),
            r = this._getInternalData();
          (0, h.drawSelection)(exports, t, {
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
      _getLinesMaxWidth(exports) {
        const t = this.fontStyle();
        if (null !== this._data && this._data.wordWrapWidth && !this._data.forceCalculateMaxLineWidth) return this
          ._data.wordWrapWidth * A(this._data);
        let i = 0;
        for (const s of e) i = Math.max(i, (0, u.measureText)(s.text, t, this._textWidthCache).width);
        return i
      }
      _getBoxSize() {
        if (null === this._boxSize) {
          const exports = this.getLinesInfo(),
            t = (0, o.ensureNotNull)(this._data),
            i = function(exports, t) {
              const i = exports.decorator?.geometry(exports),
                s = Math.round(t + T(exports) + P(exports) + (i?.width ?? 0) + (0 === exports.text.length ? 0 : i
                  ?.decoratorAndTextMargin ?? 0));
              return s % 2 ? s + 1 : s
            }(t, exports.linesMaxWidth),
            s = function(exports, t) {
              return M(exports) * t + x(exports) * (t - 1) + 2 * w(exports)
            }(t, exports.lines.length);
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
        const exports = (0, o.ensureNotNull)(this._data),
          [t] = (0, o.ensureDefined)(exports.points),
          {
            boxWidth: i,
            boxHeight: s,
            textBoxWidth: n,
            textBoxHeight: r
          } = this._getBoxSize();
        let {
          y: logger,
          x: c
        } = t;
        switch (exports.vertAlign) {
          case a.VerticalAlign.Bottom:
            l -= s + exports.offsetY;
            break;
          case a.VerticalAlign.Middle:
            l -= s / 2;
            break;
          case a.VerticalAlign.Top:
            l += exports.offsetY
        }
        switch (exports.horzAlign) {
          case a.HorizontalAlign.Left:
            c += exports.offsetX;
            break;
          case a.HorizontalAlign.Center:
            c -= i / 2;
            break;
          case a.HorizontalAlign.Right:
            c -= i + exports.offsetX
        }
        return this._box = {
          boxLeft: c,
          boxTop: logger,
          boxWidth: i,
          boxHeight: s,
          textBoxWidth: n,
          textBoxHeight: r
        }
      }
      _getRotationPoint() {
        const {
          boxLeft: exports,
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
            c = exports;
            break;
          case a.HorizontalAlign.Right:
            c = e + i
        }
        switch (logger) {
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
    }