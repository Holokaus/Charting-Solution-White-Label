/**
 * Module 4753 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4753: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      TextRenderer: () => lineToolManager_k,
      calculateLabelPosition: () => lineToolManager_m,
      fontSize: () => M,
      getTextAlignInBox: () => L,
      getTextBoundaries: () => lineToolManager_g,
      lineSpacing: () => lineToolManager_x,
      needTextExclusionPath: () => lineToolManager_f,
      wordWrap: () => S
    });
    var lineToolManager_s = lineToolManager_i(10555),
      lineToolManager_o = lineToolManager_i(50151),
      lineToolManager_n = lineToolManager_i(6453),
      lineToolManager_r = lineToolManager_i(24640),
      lineToolManager_a = lineToolManager_i(50605),
      lineToolManager_l = lineToolManager_i(2383),
      lineToolManager_c = lineToolManager_i(58221),
      lineToolManager_h = lineToolManager_i(73041),
      lineToolManager_d = lineToolManager_i(87465),
      lineToolManager_u = lineToolManager_i(33350),
      _ = lineToolManager_i(12217),
      lineToolManager_p = lineToolManager_i(57658);

    function lineToolManager_m(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_o, lineToolManager_n) {
      const lineToolManager_r = .5 * (lineToolManager_t.lineToolManager_x + lineToolManager_i.lineToolManager_x);
      let lineToolManager_a = lineToolManager_i.lineToolManager_y;
      return lineToolManager_t.lineToolManager_y > lineToolManager_i.lineToolManager_y ? (lineToolManager_a -= lineToolManager_e.height / 2 + lineToolManager_o.lineToolManager_y, lineToolManager_a = Math.max(lineToolManager_e.height / 2, lineToolManager_a)) : (lineToolManager_a += lineToolManager_e.height / 2 + lineToolManager_o.lineToolManager_y, lineToolManager_a = Math
        .min(lineToolManager_n - lineToolManager_e.height / 2, lineToolManager_a)), new lineToolManager_s.Point(lineToolManager_r, lineToolManager_a)
    }

    function lineToolManager_g(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
      if (lineToolManager_e.isOutOfScreen(lineToolManager_t, lineToolManager_i)) return null;
      const lineToolManager_s = lineToolManager_e.getPolygonPoints();
      return 0 === lineToolManager_s.length ? null : lineToolManager_s
    }

    function lineToolManager_f(lineToolManager_e) {
      const lineToolManager_t = lineToolManager_e.getLinesInfo().lines;
      if (lineToolManager_t.length % 2 == 0) return !1;
      if ("" === lineToolManager_t[Math.floor(lineToolManager_t.length / 2)].text.trim()) return !1;
      return !0
    }

    function lineToolManager_y(lineToolManager_e) {
      const lineToolManager_t = [];
      do {
        const lineToolManager_i = lineToolManager_e.match(/\lineToolManager_s+/);
        if (!lineToolManager_i || void 0 === lineToolManager_i.index || -1 === lineToolManager_i.index) {
          lineToolManager_t.push({
            word: lineToolManager_e,
            spaces: ""
          });
          break
        }
        lineToolManager_t.push({
          word: lineToolManager_e.slice(0, lineToolManager_i.index),
          spaces: lineToolManager_i[0]
        }), lineToolManager_e = lineToolManager_e.slice(lineToolManager_i.index + lineToolManager_i[0].length)
      } while (lineToolManager_e.length);
      return lineToolManager_t
    }

    function lineToolManager_v(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
      const lineToolManager_o = [],
        lineToolManager_n = [];
      for (let lineToolManager_t = 0; lineToolManager_t < lineToolManager_e.length; ++lineToolManager_t) lineToolManager_n.push(lineToolManager_t);
      for (; lineToolManager_e.length;) {
        const lineToolManager_r = Math.max(1, (0, _.upperbound)(lineToolManager_n, lineToolManager_s, ((lineToolManager_s, lineToolManager_o) => (0, lineToolManager_u.measureText)(lineToolManager_e.slice(0, lineToolManager_o + 1), lineToolManager_t, lineToolManager_i).width > lineToolManager_s),
          0, lineToolManager_e.length));
        lineToolManager_o.push(lineToolManager_e.slice(0, lineToolManager_r)), lineToolManager_e = lineToolManager_e.slice(lineToolManager_r)
      }
      return lineToolManager_o
    }

    function S(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s = !0, lineToolManager_o) {
      lineToolManager_o = (0, lineToolManager_d.isString)(lineToolManager_o) ? parseInt(lineToolManager_o) : lineToolManager_o;
      const lineToolManager_n = (lineToolManager_e += "").split(/\lineToolManager_r\lineToolManager_n|\lineToolManager_r|\lineToolManager_n|$/).map((lineToolManager_e => ({
        text: lineToolManager_e,
        hidden: !1,
        wrappedLinePart: !1,
        wrappedLineEnd: !1
      })));
      if (!(0, lineToolManager_d.isNumber)(lineToolManager_o) || !isFinite(lineToolManager_o) || lineToolManager_o <= 0) return lineToolManager_n;
      if ((0, lineToolManager_u.measureText)("lineToolManager_x", lineToolManager_t, lineToolManager_i).width > lineToolManager_o) return lineToolManager_n;
      const lineToolManager_r = [];
      for (let lineToolManager_e = 0; lineToolManager_e < lineToolManager_n.length; lineToolManager_e++) {
        const lineToolManager_a = lineToolManager_n[lineToolManager_e];
        if ((0, lineToolManager_u.measureText)(lineToolManager_a.text, lineToolManager_t, lineToolManager_i).width <= lineToolManager_o) {
          lineToolManager_r.push(lineToolManager_a);
          continue
        }
        const lineToolManager_l = lineToolManager_y(lineToolManager_a.text),
          lineToolManager_c = !0;
        let lineToolManager_h = "",
          lineToolManager_d = 0;
        for (; lineToolManager_d < lineToolManager_l.length;) {
          const lineToolManager_e = lineToolManager_l[lineToolManager_d];
          let lineToolManager_n = `${lineToolManager_h}${lineToolManager_e.word}`,
            lineToolManager_a = (0, lineToolManager_u.measureText)(lineToolManager_n, lineToolManager_t, lineToolManager_i).width;
          if (lineToolManager_a > lineToolManager_o) {
            if ("" !== lineToolManager_h) lineToolManager_r.push({
              text: lineToolManager_h,
              hidden: !1,
              wrappedLinePart: lineToolManager_c,
              wrappedLineEnd: !1
            }), lineToolManager_h = "";
            else if (1 === lineToolManager_n.length) lineToolManager_r.push({
              text: lineToolManager_n,
              hidden: !1,
              wrappedLinePart: lineToolManager_c,
              wrappedLineEnd: !0
            }), lineToolManager_e.word = "";
            else {
              const lineToolManager_s = lineToolManager_v(lineToolManager_n, lineToolManager_t, lineToolManager_i, lineToolManager_o);
              for (let lineToolManager_e = 0; lineToolManager_e < lineToolManager_s.length - 1; lineToolManager_e += 1) lineToolManager_r.push({
                text: lineToolManager_s[lineToolManager_e],
                hidden: !1,
                wrappedLinePart: lineToolManager_c,
                wrappedLineEnd: !1
              });
              lineToolManager_e.word = lineToolManager_s[lineToolManager_s.length - 1]
            }
            continue
          }
          let _ = lineToolManager_n.length;
          if (lineToolManager_n = `${lineToolManager_h}${lineToolManager_e.word}${lineToolManager_e.spaces}`, lineToolManager_a = (0, lineToolManager_u.measureText)(lineToolManager_n, lineToolManager_t, lineToolManager_i).width, lineToolManager_a < lineToolManager_o) {
            lineToolManager_h = lineToolManager_n, lineToolManager_d += 1;
            continue
          }
          const lineToolManager_p = lineToolManager_v(lineToolManager_n, lineToolManager_t, lineToolManager_i, lineToolManager_o);
          for (let lineToolManager_e = 0; lineToolManager_e < lineToolManager_p.length; lineToolManager_e += 1) {
            const lineToolManager_t = lineToolManager_p[lineToolManager_e];
            _ -= lineToolManager_t.length;
            const lineToolManager_i = {
              text: lineToolManager_t,
              hidden: lineToolManager_e > 0,
              wrappedLinePart: lineToolManager_c,
              wrappedLineEnd: lineToolManager_d === lineToolManager_l.length - 1 && lineToolManager_e === lineToolManager_p.length - 1
            };
            lineToolManager_i.hidden && lineToolManager_s || lineToolManager_r.push(lineToolManager_i)
          }
          lineToolManager_h = "", lineToolManager_d += 1
        }
        "" !== lineToolManager_h && lineToolManager_r.push({
          text: lineToolManager_h,
          wrappedLinePart: lineToolManager_c,
          hidden: !1,
          wrappedLineEnd: !0
        })
      }
      return lineToolManager_r
    }

    function lineToolManager_b(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
      if (0 === lineToolManager_i) return lineToolManager_e.clone();
      const lineToolManager_o = (lineToolManager_e.lineToolManager_x - lineToolManager_t.lineToolManager_x) * Math.cos(lineToolManager_i) - (lineToolManager_e.lineToolManager_y - lineToolManager_t.lineToolManager_y) * Math.sin(lineToolManager_i) + lineToolManager_t.lineToolManager_x,
        lineToolManager_n = (lineToolManager_e.lineToolManager_x - lineToolManager_t.lineToolManager_x) * Math.sin(lineToolManager_i) + (lineToolManager_e.lineToolManager_y - lineToolManager_t.lineToolManager_y) * Math.cos(lineToolManager_i) + lineToolManager_t.lineToolManager_y;
      return (0, lineToolManager_s.point)(lineToolManager_o, lineToolManager_n)
    }

    function lineToolManager_w(lineToolManager_e) {
      return void 0 !== lineToolManager_e.boxPaddingVert ? lineToolManager_e.boxPaddingVert * A(lineToolManager_e) : void 0 !== lineToolManager_e.boxPadding ? lineToolManager_e.boxPadding * A(lineToolManager_e) : M(
        lineToolManager_e) / 3
    }

    function C(lineToolManager_e) {
      return void 0 !== lineToolManager_e.boxPaddingHorz ? lineToolManager_e.boxPaddingHorz * A(lineToolManager_e) : void 0 !== lineToolManager_e.boxPadding ? lineToolManager_e.boxPadding * A(lineToolManager_e) : M(
        lineToolManager_e) / 3
    }

    function T(lineToolManager_e) {
      return void 0 !== lineToolManager_e.boxPaddingLeft ? lineToolManager_e.boxPaddingLeft * A(lineToolManager_e) : C(lineToolManager_e)
    }

    function P(lineToolManager_e) {
      return void 0 !== lineToolManager_e.boxPaddingRight ? lineToolManager_e.boxPaddingRight * A(lineToolManager_e) : C(lineToolManager_e)
    }

    function lineToolManager_x(lineToolManager_e) {
      let lineToolManager_t = lineToolManager_e.lineSpacing;
      return void 0 === lineToolManager_t && lineToolManager_e.lineHeight && (lineToolManager_t = (lineToolManager_e.lineHeight - 1) * I(lineToolManager_e)), (lineToolManager_t ?? 0) * A(lineToolManager_e)
    }

    function M(lineToolManager_e) {
      return Math.ceil(I(lineToolManager_e) * A(lineToolManager_e))
    }

    function I(lineToolManager_e) {
      return lineToolManager_e.fontsize || lineToolManager_e.fontSize || 30
    }

    function A(lineToolManager_e) {
      const lineToolManager_t = Math.min(1, Math.max(.2, lineToolManager_e.scale || 1));
      if (1 === lineToolManager_t) return lineToolManager_t;
      const lineToolManager_i = I(lineToolManager_e);
      return Math.ceil(lineToolManager_t * lineToolManager_i) / lineToolManager_i
    }

    function L(lineToolManager_e) {
      const {
        horzAlign: lineToolManager_t,
        extendLeft: lineToolManager_i = !1,
        extendRight: lineToolManager_o = !1,
        width: lineToolManager_n,
        leftPoint: lineToolManager_r,
        rightPoint: lineToolManager_l
      } = lineToolManager_e, lineToolManager_c = (lineToolManager_r.lineToolManager_x <= lineToolManager_n || lineToolManager_i) && (lineToolManager_l.lineToolManager_x >= 0 || lineToolManager_o);
      let lineToolManager_h, lineToolManager_d, lineToolManager_u = lineToolManager_t;
      switch (lineToolManager_u) {
        case lineToolManager_a.HorizontalAlign.Left:
          lineToolManager_d = lineToolManager_r.lineToolManager_y, lineToolManager_i ? lineToolManager_h = lineToolManager_c ? 0 : lineToolManager_l.lineToolManager_x : (lineToolManager_h = lineToolManager_r.lineToolManager_x, lineToolManager_u = lineToolManager_a.HorizontalAlign.Right);
          break;
        case lineToolManager_a.HorizontalAlign.Right:
          lineToolManager_d = lineToolManager_l.lineToolManager_y, lineToolManager_o ? lineToolManager_h = lineToolManager_c ? lineToolManager_n : lineToolManager_r.lineToolManager_x : (lineToolManager_h = lineToolManager_l.lineToolManager_x, lineToolManager_u = lineToolManager_a.HorizontalAlign.Left);
          break;
        default:
          lineToolManager_h = ((lineToolManager_i && lineToolManager_c ? 0 : lineToolManager_r.lineToolManager_x) + (lineToolManager_o && lineToolManager_c ? lineToolManager_n : lineToolManager_l.lineToolManager_x)) / 2, lineToolManager_d = (lineToolManager_r.lineToolManager_y + lineToolManager_l.lineToolManager_y) / 2;
          break
      }
      return [(0, lineToolManager_s.point)(lineToolManager_h, lineToolManager_d), lineToolManager_u]
    }
    class lineToolManager_k {
      constructor(lineToolManager_e, lineToolManager_t) {
        this._data = null, this._textWidthCache = new lineToolManager_p.TextWidthCache, this._internalData = null, this._boxSize =
          null, this._box = null, this._polygonPoints = null, this._linesInfo = null, this._fontInfo = null, this
          ._centerTextRotationPoint = null, this._rotationPoint = null, this._hitTest = lineToolManager_t || new lineToolManager_l.HitTestResult(lineToolManager_l
            .HitTarget.MovePoint, {
              areaName: lineToolManager_l.AreaName.Text
            }), void 0 !== lineToolManager_e && this.setData(lineToolManager_e)
      }
      setHitTest(lineToolManager_e) {
        this._hitTest = lineToolManager_e
      }
      data() {
        return this._data
      }
      updateData(lineToolManager_e) {
        this.setData({
          ...(0, lineToolManager_o.ensureNotNull)(this._data),
          ...lineToolManager_e
        })
      }
      setData(lineToolManager_e) {
        null !== lineToolManager_e ? ((0, lineToolManager_o.assert)(!lineToolManager_e.decorator || void 0 === lineToolManager_e.wordWrapWidth,
            "Decorator is not supported with wordWrapWidth"),
          void 0 === lineToolManager_e.text && (lineToolManager_e.text = ""), lineToolManager_e.horzTextAlign || (lineToolManager_e.horzTextAlign = lineToolManager_e.horzAlign), ! function(lineToolManager_e, lineToolManager_t) {
            if (null === lineToolManager_e || null === lineToolManager_t) return null === lineToolManager_e == (null === lineToolManager_t);
            if (void 0 === lineToolManager_e.points != (void 0 === lineToolManager_t.points)) return !1;
            if (void 0 !== lineToolManager_e.points && void 0 !== lineToolManager_t.points) {
              if (lineToolManager_e.points.length !== lineToolManager_t.points.length) return !1;
              for (let lineToolManager_o = 0; lineToolManager_o < lineToolManager_e.points.length; ++lineToolManager_o)
                if (lineToolManager_i = lineToolManager_e.points[lineToolManager_o], lineToolManager_s = lineToolManager_t.points[lineToolManager_o], lineToolManager_i.lineToolManager_x !== lineToolManager_s.lineToolManager_x || lineToolManager_i.lineToolManager_y !== lineToolManager_s.lineToolManager_y) return !1
            }
            var lineToolManager_i, lineToolManager_s;
            return lineToolManager_e.text === lineToolManager_t.text && lineToolManager_e.decorator === lineToolManager_t.decorator && lineToolManager_e.vertAlign === lineToolManager_t.vertAlign && lineToolManager_e
              .horzAlign === lineToolManager_t.horzAlign && lineToolManager_e.horzTextAlign === lineToolManager_t.horzTextAlign && lineToolManager_e.font === lineToolManager_t.font && lineToolManager_e
              .offsetX === lineToolManager_t.offsetX && lineToolManager_e.offsetY === lineToolManager_t.offsetY && lineToolManager_e.bold === lineToolManager_t.bold && lineToolManager_e.italic === lineToolManager_t.italic && lineToolManager_e
              .fontsize === lineToolManager_t.fontsize && lineToolManager_e.fontSize === lineToolManager_t.fontSize && lineToolManager_e.backgroundRoundRect === lineToolManager_t
              .backgroundRoundRect && lineToolManager_e.forceTextAlign === lineToolManager_t.forceTextAlign && lineToolManager_e.wordWrapWidth === lineToolManager_t
              .wordWrapWidth && lineToolManager_e.forceCalculateMaxLineWidth === lineToolManager_t.forceCalculateMaxLineWidth && lineToolManager_e.lineHeight === lineToolManager_t
              .lineHeight && lineToolManager_e.lineSpacing === lineToolManager_t.lineSpacing && lineToolManager_e.scale === lineToolManager_t.scale && lineToolManager_e.boxPadding === lineToolManager_t
              .boxPadding && lineToolManager_e.boxPaddingVert === lineToolManager_t.boxPaddingVert && lineToolManager_e.boxPaddingLeft === lineToolManager_t.boxPaddingLeft && lineToolManager_e
              .boxPaddingRight === lineToolManager_t.boxPaddingRight && lineToolManager_e.boxPaddingHorz === lineToolManager_t.boxPaddingHorz && lineToolManager_e.angle === lineToolManager_t
              .angle && lineToolManager_e.maxHeight === lineToolManager_t.maxHeight && lineToolManager_e.outlineBorder?.width === lineToolManager_t.outlineBorder?.width && lineToolManager_e
              .outlineBorder?.color === lineToolManager_t.outlineBorder?.color
          }(this._data, lineToolManager_e) ? (this._data = lineToolManager_e, this._internalData = null, this._boxSize = null, this._polygonPoints =
            null, this._centerTextRotationPoint = null, this._rotationPoint = null, this._linesInfo = null, this
            ._fontInfo = null, this._box = null) : this._data = lineToolManager_e) : this._data = null
      }
      hitTest(lineToolManager_e) {
        return null === this._data || void 0 === this._data.points || 0 === this._data.points.length ? null : (0, lineToolManager_n
          .pointInPolygon)(lineToolManager_e, this.getPolygonPoints()) ? this._hitTest : null
      }
      doesIntersectWithBox(lineToolManager_e) {
        return null !== this._data && void 0 !== this._data.points && 0 !== this._data.points.length && (0, lineToolManager_n
          .pointInBox)(this._data.points[0], lineToolManager_e)
      }
      measure() {
        if (null === this._data) return {
          boxWidth: 0,
          boxHeight: 0,
          width: 0,
          height: 0
        };
        const lineToolManager_e = this._getBoxSize();
        return {
          boxWidth: lineToolManager_e.boxWidth,
          boxHeight: lineToolManager_e.boxHeight,
          width: lineToolManager_e.textBoxWidth,
          height: lineToolManager_e.textBoxHeight
        }
      }
      rect() {
        if (null === this._data) return {
          lineToolManager_x: 0,
          lineToolManager_y: 0,
          width: 0,
          height: 0
        };
        const {
          boxLeft: lineToolManager_e,
          boxTop: lineToolManager_t,
          boxWidth: lineToolManager_i,
          boxHeight: lineToolManager_s
        } = this._getBox();
        return {
          lineToolManager_x: lineToolManager_e,
          lineToolManager_y: lineToolManager_t,
          width: lineToolManager_i,
          height: lineToolManager_s
        }
      }
      isOutOfScreen(lineToolManager_e, lineToolManager_t) {
        if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return !0;
        const {
          boxLeft: lineToolManager_i,
          boxWidth: lineToolManager_o
        } = this._getBox();
        if (lineToolManager_i + lineToolManager_o < 0 || lineToolManager_i > lineToolManager_e) {
          const lineToolManager_i = (0, lineToolManager_s.box)((0, lineToolManager_s.point)(0, 0), (0, lineToolManager_s.point)(lineToolManager_e, lineToolManager_t));
          return this.getPolygonPoints().every((lineToolManager_e => !(0, lineToolManager_n.pointInBox)(lineToolManager_e, lineToolManager_i)))
        }
        return !1
      }
      setPoints(lineToolManager_e, lineToolManager_t) {
        (0, lineToolManager_o.ensureNotNull)(this._data).points = lineToolManager_e, this._hitTest = lineToolManager_t || new lineToolManager_l.HitTestResult(lineToolManager_l.HitTarget.MovePoint)
      }
      setPoint(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        const lineToolManager_s = (0, lineToolManager_o.ensureNotNull)(this._data);
        this.setData({
          ...lineToolManager_s,
          points: [lineToolManager_e],
          offsetX: lineToolManager_t ?? lineToolManager_s.offsetX,
          offsetY: lineToolManager_i ?? lineToolManager_s.offsetY
        })
      }
      point() {
        return this._data?.points?.[0] ?? null
      }
      fontStyle(lineToolManager_e) {
        return null === this._data ? "" : this._getFontInfo().fontStyle
      }
      lineHeight() {
        return null === this._data ? 0 : M(this._data)
      }
      lineSpacing() {
        return null === this._data ? 0 : lineToolManager_x(this._data)
      }
      draw(lineToolManager_e, lineToolManager_t) {
        if (null === this._data || void 0 === this._data.points || 0 === this._data.points.length) return;
        const {
          mediaSize: lineToolManager_i,
          horizontalPixelRatio: lineToolManager_n,
          verticalPixelRatio: lineToolManager_r
        } = lineToolManager_t;
        if (this.isOutOfScreen(lineToolManager_i.width, lineToolManager_i.height)) return;
        const lineToolManager_a = this._getInternalData(),
          lineToolManager_l = (0, lineToolManager_o.ensureNotNull)(this.rotation()),
          lineToolManager_h = (0, lineToolManager_s.point)(lineToolManager_l.lineToolManager_x * lineToolManager_n, lineToolManager_l.lineToolManager_y * lineToolManager_r);
        lineToolManager_e.save(), 0 !== lineToolManager_l.angle && (lineToolManager_e.translate(lineToolManager_h.lineToolManager_x, lineToolManager_h.lineToolManager_y), lineToolManager_e.rotate(lineToolManager_l.angle), lineToolManager_e.translate(-lineToolManager_h.lineToolManager_x, -lineToolManager_h.lineToolManager_y));
        const lineToolManager_d = this._getFontInfo().fontSize;
        lineToolManager_e.textBaseline = lineToolManager_a.textBaseLine, lineToolManager_e.textAlign = lineToolManager_a.textAlign, lineToolManager_e.font = this.fontStyle();
        const {
          scaledLeft: _,
          scaledRight: lineToolManager_p,
          scaledTop: lineToolManager_m,
          scaledBottom: lineToolManager_g
        } = function(lineToolManager_e, lineToolManager_t) {
          const {
            horizontalPixelRatio: lineToolManager_i,
            verticalPixelRatio: lineToolManager_s
          } = lineToolManager_t, lineToolManager_o = Math.round(lineToolManager_e.boxLeft * lineToolManager_i), lineToolManager_n = Math.round(lineToolManager_e.boxTop * lineToolManager_s);
          return {
            scaledLeft: lineToolManager_o,
            scaledRight: lineToolManager_o + Math.round(lineToolManager_e.boxWidth * lineToolManager_i),
            scaledTop: lineToolManager_n,
            scaledBottom: lineToolManager_n + Math.round(lineToolManager_e.boxHeight * lineToolManager_s)
          }
        }(lineToolManager_a, lineToolManager_t), lineToolManager_f = this._data.borderWidth || Math.max(lineToolManager_d / 12, 1), lineToolManager_y = Math.round(lineToolManager_f * lineToolManager_n), lineToolManager_v = lineToolManager_y / 2;
        if (this._data.backgroundColor || this._data.borderColor) {
          let lineToolManager_t = !1;
          if (this._data.boxShadow) {
            lineToolManager_e.save();
            const {
              shadowColor: lineToolManager_i,
              shadowBlur: lineToolManager_s,
              shadowOffsetX: lineToolManager_o = 0,
              shadowOffsetY: lineToolManager_a = 0
            } = this._data.boxShadow;
            lineToolManager_e.shadowColor = lineToolManager_i, lineToolManager_e.shadowBlur = lineToolManager_s * lineToolManager_n, lineToolManager_e.shadowOffsetX = lineToolManager_o * lineToolManager_n, lineToolManager_e.shadowOffsetY = lineToolManager_a * lineToolManager_r, lineToolManager_t = !0
          }
          if (this._data.backgroundRoundRect) {
            const {
              borderColor: lineToolManager_i,
              backgroundColor: lineToolManager_s,
              backgroundRoundRect: lineToolManager_o
            } = this._data;
            lineToolManager_s && ((0, lineToolManager_c.drawRoundRect)(lineToolManager_e, _, lineToolManager_m, lineToolManager_p - _, lineToolManager_g - lineToolManager_m, lineToolManager_o * lineToolManager_n), lineToolManager_e.closePath(), lineToolManager_e.fillStyle = lineToolManager_s, lineToolManager_e.fill(), lineToolManager_t && (
              lineToolManager_e.restore(), lineToolManager_t = !1)), lineToolManager_i && ((0, lineToolManager_c.drawRoundRect)(lineToolManager_e, _ - lineToolManager_v, lineToolManager_m - lineToolManager_v, lineToolManager_p - _ + lineToolManager_y, lineToolManager_g - lineToolManager_m + lineToolManager_y, lineToolManager_o * lineToolManager_n + lineToolManager_y), lineToolManager_e
              .closePath(), lineToolManager_e.strokeStyle = lineToolManager_i, lineToolManager_e.lineWidth = lineToolManager_y, lineToolManager_e.stroke(), lineToolManager_t && lineToolManager_e.restore())
          } else {
            const {
              borderColor: lineToolManager_i,
              backgroundColor: lineToolManager_s
            } = this._data;
            lineToolManager_s && (lineToolManager_e.fillStyle = lineToolManager_s, lineToolManager_e.fillRect(_, lineToolManager_m, lineToolManager_p - _, lineToolManager_g - lineToolManager_m), lineToolManager_t && (lineToolManager_e.restore(), lineToolManager_t = !1)), lineToolManager_i && (lineToolManager_e.strokeStyle =
              lineToolManager_i, lineToolManager_e.lineWidth = lineToolManager_y, lineToolManager_e.beginPath(), lineToolManager_e.moveTo(_ - lineToolManager_v, lineToolManager_m - lineToolManager_v), lineToolManager_e.lineTo(_ - lineToolManager_v, lineToolManager_g + lineToolManager_v), lineToolManager_e.lineTo(lineToolManager_p + lineToolManager_v, lineToolManager_g +
                lineToolManager_v), lineToolManager_e.lineTo(lineToolManager_p + lineToolManager_v, lineToolManager_m - lineToolManager_v), lineToolManager_e.lineTo(_ - lineToolManager_v, lineToolManager_m - lineToolManager_v), lineToolManager_e.closePath(), lineToolManager_e.stroke(), lineToolManager_t && lineToolManager_e.restore())
          }
        }
        this._drawSelectionIfNeeded(lineToolManager_e, lineToolManager_t), lineToolManager_e.fillStyle = this._data.color;
        const S = (_ + Math.round(lineToolManager_a.textHorizStart * lineToolManager_n)) / lineToolManager_n,
          lineToolManager_b = .05 * lineToolManager_d;
        let lineToolManager_w = (lineToolManager_m + Math.round((lineToolManager_a.textVertStart + lineToolManager_b) * lineToolManager_r)) / lineToolManager_r;
        const C = lineToolManager_x(this._data),
          T = this.getLinesInfo();
        for (const lineToolManager_t of T.lines)(0, lineToolManager_u.drawScaled)(lineToolManager_e, lineToolManager_n, lineToolManager_r, (() => lineToolManager_e.fillText(lineToolManager_t.text, S, lineToolManager_w))), lineToolManager_w += lineToolManager_d + C;
        if (this._data.decorator?.draw(lineToolManager_e, lineToolManager_t, this._data, lineToolManager_a), this._data.outlineBorder) {
          const {
            outlineBorder: {
              width: lineToolManager_t,
              color: lineToolManager_i
            }
          } = this._data, lineToolManager_s = Math.round(lineToolManager_t * lineToolManager_n), lineToolManager_o = this._data.borderColor ? lineToolManager_y : 0, lineToolManager_r = {
            lineToolManager_x: _ - lineToolManager_o,
            lineToolManager_y: lineToolManager_m - lineToolManager_o,
            lineToolManager_w: lineToolManager_p - _ + 2 * lineToolManager_o,
            lineToolManager_h: lineToolManager_g - lineToolManager_m + 2 * lineToolManager_o
          }, lineToolManager_a = new Path2D;
          lineToolManager_a.rect(lineToolManager_r.lineToolManager_x - lineToolManager_s, lineToolManager_r.lineToolManager_y - lineToolManager_s, lineToolManager_r.lineToolManager_w + 2 * lineToolManager_s, lineToolManager_r.lineToolManager_h + 2 * lineToolManager_s), lineToolManager_a.rect(lineToolManager_r.lineToolManager_x, lineToolManager_r.lineToolManager_y, lineToolManager_r.lineToolManager_w, lineToolManager_r.lineToolManager_h), lineToolManager_e.fillStyle = lineToolManager_i, lineToolManager_e.fill(lineToolManager_a,
            "evenodd")
        }
        lineToolManager_e.restore()
      }
      getPolygonPoints() {
        if (null !== this._polygonPoints) return this._polygonPoints;
        if (null === this._data) return [];
        const lineToolManager_e = this._data.angle || 0,
          {
            boxLeft: lineToolManager_t,
            boxTop: lineToolManager_i,
            boxWidth: lineToolManager_o,
            boxHeight: lineToolManager_n
          } = this._getBox(),
          lineToolManager_r = this._getRotationPoint();
        return this._polygonPoints = [lineToolManager_b((0, lineToolManager_s.point)(lineToolManager_t, lineToolManager_i), lineToolManager_r, lineToolManager_e), lineToolManager_b((0, lineToolManager_s.point)(lineToolManager_t + lineToolManager_o, lineToolManager_i), lineToolManager_r, lineToolManager_e), lineToolManager_b((0, lineToolManager_s.point)(lineToolManager_t +
          lineToolManager_o, lineToolManager_i + lineToolManager_n), lineToolManager_r, lineToolManager_e), lineToolManager_b((0, lineToolManager_s.point)(lineToolManager_t, lineToolManager_i + lineToolManager_n), lineToolManager_r, lineToolManager_e)], this._polygonPoints
      }
      centerTextRotation() {
        if (null === this._centerTextRotationPoint && null !== this._data) {
          const lineToolManager_e = this._data.angle ?? 0,
            lineToolManager_t = this._getRotationPoint(),
            {
              textLeft: lineToolManager_i,
              textTop: lineToolManager_o,
              textRight: lineToolManager_n,
              textBottom: lineToolManager_r
            } = this._getInternalData(),
            lineToolManager_a = lineToolManager_b((0, lineToolManager_s.point)((lineToolManager_i + lineToolManager_n) / 2, (lineToolManager_o + lineToolManager_r) / 2), lineToolManager_t, lineToolManager_e);
          this._centerTextRotationPoint = {
            lineToolManager_x: lineToolManager_a.lineToolManager_x,
            lineToolManager_y: lineToolManager_a.lineToolManager_y,
            angle: lineToolManager_e
          }
        }
        return this._centerTextRotationPoint
      }
      rotation() {
        if (null === this._rotationPoint && null !== this._data) {
          const lineToolManager_e = this._data.angle ?? 0,
            lineToolManager_t = this._getRotationPoint();
          this._rotationPoint = {
            lineToolManager_x: lineToolManager_t.lineToolManager_x,
            lineToolManager_y: lineToolManager_t.lineToolManager_y,
            angle: lineToolManager_e
          }
        }
        return this._rotationPoint
      }
      getLinesInfo() {
        if (null === this._linesInfo) {
          const lineToolManager_e = (0, lineToolManager_o.ensureNotNull)(this._data),
            lineToolManager_t = S(lineToolManager_e.text, this.fontStyle(), this._textWidthCache, !1, lineToolManager_e.wordWrapWidth);
          let lineToolManager_i = lineToolManager_t.filter((lineToolManager_e => !lineToolManager_e.hidden));
          if (void 0 !== lineToolManager_e.maxHeight) {
            const lineToolManager_t = function(lineToolManager_e) {
              const lineToolManager_t = (0, lineToolManager_o.ensureDefined)(lineToolManager_e.maxHeight),
                lineToolManager_i = M(lineToolManager_e),
                lineToolManager_s = lineToolManager_x(lineToolManager_e);
              return Math.floor((lineToolManager_t + lineToolManager_s) / (lineToolManager_i + lineToolManager_s))
            }(lineToolManager_e);
            lineToolManager_i.length > lineToolManager_t && (lineToolManager_i = lineToolManager_i.slice(0, lineToolManager_t))
          }
          this._linesInfo = {
            linesMaxWidth: this._getLinesMaxWidth(lineToolManager_i),
            linesIncludingHidden: lineToolManager_t,
            lines: lineToolManager_i
          }
        }
        return this._linesInfo
      }
      positionToCoordinate(lineToolManager_e) {
        const lineToolManager_t = (0, lineToolManager_o.ensureNotNull)(this._data),
          lineToolManager_i = this._getInternalData(),
          lineToolManager_s = this.getLinesInfo(),
          {
            lineToolManager_x: lineToolManager_n,
            lineToolManager_y: lineToolManager_r,
            lineNumber: lineToolManager_a
          } = (0, lineToolManager_h.getSymbolCoordinatesInfo)({
            symbolPosition: lineToolManager_e,
            textWidth: lineToolManager_i.textRight - lineToolManager_i.textLeft,
            textByLines: lineToolManager_s.linesIncludingHidden,
            lineHeight: M(lineToolManager_t),
            font: this.fontStyle(),
            textAlign: lineToolManager_i.textAlign,
            lineSpacing: this.lineSpacing()
          });
        return {
          lineToolManager_x: lineToolManager_n + lineToolManager_i.textLeft,
          lineToolManager_y: lineToolManager_r + lineToolManager_i.textTop,
          lineNumber: lineToolManager_a
        }
      }
      _getInternalData() {
        if (null !== this._internalData) return this._internalData;
        const lineToolManager_e = (0, lineToolManager_o.ensureNotNull)(this._data),
          {
            boxLeft: lineToolManager_t,
            boxTop: lineToolManager_i,
            boxWidth: lineToolManager_s,
            boxHeight: lineToolManager_n,
            textBoxWidth: lineToolManager_l,
            textBoxHeight: lineToolManager_c
          } = this._getBox(),
          lineToolManager_h = T(lineToolManager_e),
          lineToolManager_d = P(lineToolManager_e),
          lineToolManager_u = lineToolManager_w(lineToolManager_e),
          _ = lineToolManager_e.decorator?.geometry(lineToolManager_e),
          lineToolManager_p = _?.width ?? 0,
          lineToolManager_m = 0 === lineToolManager_e.text.length ? 0 : _?.decoratorAndTextMargin ?? 0,
          lineToolManager_g = _?.ignoreRtl,
          lineToolManager_f = lineToolManager_p + lineToolManager_m;
        let lineToolManager_y;
        const lineToolManager_v = lineToolManager_i + lineToolManager_u + M(lineToolManager_e) / 2;
        let S;
        const lineToolManager_b = (0, lineToolManager_r.isRtl)(),
          C = lineToolManager_b && !lineToolManager_g,
          lineToolManager_x = C ? lineToolManager_t + lineToolManager_s - lineToolManager_d - lineToolManager_p : lineToolManager_t + lineToolManager_h;
        switch ((0, lineToolManager_o.ensureDefined)(lineToolManager_e.horzTextAlign)) {
          case lineToolManager_a.HorizontalAlign.Left:
            S = "start", lineToolManager_y = lineToolManager_x + lineToolManager_f, lineToolManager_b && (lineToolManager_e.forceTextAlign ? S = "left" : (lineToolManager_y = C ? lineToolManager_x - lineToolManager_m : lineToolManager_t + lineToolManager_s - lineToolManager_d, S = "right"));
            break;
          case lineToolManager_a.HorizontalAlign.Center:
            S = "center";
            const lineToolManager_i = lineToolManager_s - lineToolManager_h - lineToolManager_d - lineToolManager_f;
            lineToolManager_y = C ? lineToolManager_x - lineToolManager_m - lineToolManager_i / 2 : lineToolManager_x + lineToolManager_f + lineToolManager_i / 2;
            break;
          case lineToolManager_a.HorizontalAlign.Right:
            S = "end", lineToolManager_y = C ? lineToolManager_x - lineToolManager_m : lineToolManager_t + lineToolManager_s - lineToolManager_d, lineToolManager_b && lineToolManager_e.forceTextAlign && (S = "right")
        }
        return this._internalData = {
          boxLeft: lineToolManager_t,
          boxTop: lineToolManager_i,
          boxWidth: lineToolManager_s,
          boxHeight: lineToolManager_n,
          textBoxWidth: lineToolManager_l,
          textBoxHeight: lineToolManager_c,
          textLeft: lineToolManager_t + lineToolManager_h + (C ? 0 : lineToolManager_f),
          textRight: lineToolManager_t + lineToolManager_s - lineToolManager_d - (C ? lineToolManager_f : 0),
          textTop: lineToolManager_i + lineToolManager_u,
          textBottom: lineToolManager_i + lineToolManager_n - lineToolManager_u,
          textHorizStart: lineToolManager_y - lineToolManager_t,
          textVertStart: lineToolManager_v - lineToolManager_i,
          textAlign: S,
          textBaseLine: "middle",
          decoratorLeft: lineToolManager_x,
          decoratorWidth: lineToolManager_p
        }, this._internalData
      }
      _getFontInfo() {
        if (null === this._fontInfo) {
          const lineToolManager_e = (0, lineToolManager_o.ensureNotNull)(this._data),
            lineToolManager_t = M(lineToolManager_e),
            lineToolManager_i = `${lineToolManager_e.bold?"bold ":""}${lineToolManager_e.italic?"italic ":""}${lineToolManager_t}px ${lineToolManager_e.font}`;
          this._fontInfo = {
            fontStyle: lineToolManager_i,
            fontSize: lineToolManager_t
          }
        }
        return this._fontInfo
      }
      _drawSelectionIfNeeded(lineToolManager_e, lineToolManager_t) {
        const lineToolManager_i = (0, lineToolManager_o.ensureNotNull)(this._data),
          lineToolManager_s = M((0, lineToolManager_o.ensureNotNull)(this._data));
        if (lineToolManager_i.selectionHighlight) {
          const lineToolManager_o = this.positionToCoordinate(lineToolManager_i.selectionHighlight.start),
            lineToolManager_n = this.positionToCoordinate(lineToolManager_i.selectionHighlight.end),
            lineToolManager_r = this._getInternalData();
          (0, lineToolManager_h.drawSelection)(lineToolManager_e, lineToolManager_t, {
            lines: this.getLinesInfo().linesIncludingHidden,
            selectionStart: lineToolManager_o,
            selectionEnd: lineToolManager_n,
            left: lineToolManager_r.textLeft,
            right: lineToolManager_r.textRight,
            color: lineToolManager_i.selectionHighlight.color,
            font: this.fontStyle(),
            lineHeight: lineToolManager_s,
            lineSpacing: this.lineSpacing()
          })
        }
      }
      _getLinesMaxWidth(lineToolManager_e) {
        const lineToolManager_t = this.fontStyle();
        if (null !== this._data && this._data.wordWrapWidth && !this._data.forceCalculateMaxLineWidth) return this
          ._data.wordWrapWidth * A(this._data);
        let lineToolManager_i = 0;
        for (const lineToolManager_s of lineToolManager_e) lineToolManager_i = Math.max(lineToolManager_i, (0, lineToolManager_u.measureText)(lineToolManager_s.text, lineToolManager_t, this._textWidthCache).width);
        return lineToolManager_i
      }
      _getBoxSize() {
        if (null === this._boxSize) {
          const lineToolManager_e = this.getLinesInfo(),
            lineToolManager_t = (0, lineToolManager_o.ensureNotNull)(this._data),
            lineToolManager_i = function(lineToolManager_e, lineToolManager_t) {
              const lineToolManager_i = lineToolManager_e.decorator?.geometry(lineToolManager_e),
                lineToolManager_s = Math.round(lineToolManager_t + T(lineToolManager_e) + P(lineToolManager_e) + (lineToolManager_i?.width ?? 0) + (0 === lineToolManager_e.text.length ? 0 : lineToolManager_i
                  ?.decoratorAndTextMargin ?? 0));
              return lineToolManager_s % 2 ? lineToolManager_s + 1 : lineToolManager_s
            }(lineToolManager_t, lineToolManager_e.linesMaxWidth),
            lineToolManager_s = function(lineToolManager_e, lineToolManager_t) {
              return M(lineToolManager_e) * lineToolManager_t + lineToolManager_x(lineToolManager_e) * (lineToolManager_t - 1) + 2 * lineToolManager_w(lineToolManager_e)
            }(lineToolManager_t, lineToolManager_e.lines.length);
          this._boxSize = {
            textBoxWidth: lineToolManager_i,
            textBoxHeight: lineToolManager_s,
            boxWidth: lineToolManager_t.boxWidth ?? lineToolManager_i,
            boxHeight: lineToolManager_t.boxHeight ?? lineToolManager_s
          }
        }
        return this._boxSize
      }
      _getBox() {
        if (this._box) return this._box;
        const lineToolManager_e = (0, lineToolManager_o.ensureNotNull)(this._data),
          [lineToolManager_t] = (0, lineToolManager_o.ensureDefined)(lineToolManager_e.points),
          {
            boxWidth: lineToolManager_i,
            boxHeight: lineToolManager_s,
            textBoxWidth: lineToolManager_n,
            textBoxHeight: lineToolManager_r
          } = this._getBoxSize();
        let {
          lineToolManager_y: lineToolManager_l,
          lineToolManager_x: lineToolManager_c
        } = lineToolManager_t;
        switch (lineToolManager_e.vertAlign) {
          case lineToolManager_a.VerticalAlign.Bottom:
            lineToolManager_l -= lineToolManager_s + lineToolManager_e.offsetY;
            break;
          case lineToolManager_a.VerticalAlign.Middle:
            lineToolManager_l -= lineToolManager_s / 2;
            break;
          case lineToolManager_a.VerticalAlign.Top:
            lineToolManager_l += lineToolManager_e.offsetY
        }
        switch (lineToolManager_e.horzAlign) {
          case lineToolManager_a.HorizontalAlign.Left:
            lineToolManager_c += lineToolManager_e.offsetX;
            break;
          case lineToolManager_a.HorizontalAlign.Center:
            lineToolManager_c -= lineToolManager_i / 2;
            break;
          case lineToolManager_a.HorizontalAlign.Right:
            lineToolManager_c -= lineToolManager_i + lineToolManager_e.offsetX
        }
        return this._box = {
          boxLeft: lineToolManager_c,
          boxTop: lineToolManager_l,
          boxWidth: lineToolManager_i,
          boxHeight: lineToolManager_s,
          textBoxWidth: lineToolManager_n,
          textBoxHeight: lineToolManager_r
        }
      }
      _getRotationPoint() {
        const {
          boxLeft: lineToolManager_e,
          boxTop: lineToolManager_t,
          boxWidth: lineToolManager_i,
          boxHeight: lineToolManager_n
        } = this._getBox(), {
          horzAlign: lineToolManager_r,
          vertAlign: lineToolManager_l
        } = (0, lineToolManager_o.ensureNotNull)(this._data);
        let lineToolManager_c, lineToolManager_h;
        switch (lineToolManager_r) {
          case lineToolManager_a.HorizontalAlign.Center:
            lineToolManager_c = lineToolManager_e + lineToolManager_i / 2;
            break;
          case lineToolManager_a.HorizontalAlign.Left:
            lineToolManager_c = lineToolManager_e;
            break;
          case lineToolManager_a.HorizontalAlign.Right:
            lineToolManager_c = lineToolManager_e + lineToolManager_i
        }
        switch (lineToolManager_l) {
          case lineToolManager_a.VerticalAlign.Middle:
            lineToolManager_h = lineToolManager_t + lineToolManager_n / 2;
            break;
          case lineToolManager_a.VerticalAlign.Top:
            lineToolManager_h = lineToolManager_t;
            break;
          case lineToolManager_a.VerticalAlign.Bottom:
            lineToolManager_h = lineToolManager_t + lineToolManager_n
        }
        return (0, lineToolManager_s.point)(lineToolManager_c, lineToolManager_h)
      }
    }