/**
 * Module 86228 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

86228: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      RectangleRenderer: () => _
    });
    var lineToolManager_s, lineToolManager_o = lineToolManager_i(50151),
      lineToolManager_n = lineToolManager_i(10555),
      lineToolManager_r = lineToolManager_i(6453),
      lineToolManager_a = lineToolManager_i(2624),
      lineToolManager_l = lineToolManager_i(52859),
      lineToolManager_c = lineToolManager_i(2383),
      lineToolManager_h = lineToolManager_i(18330),
      lineToolManager_d = lineToolManager_i(58221),
      lineToolManager_u = lineToolManager_i(10307);
    ! function(lineToolManager_e) {
      lineToolManager_e[lineToolManager_e.HitTestTolerance = 3] = "HitTestTolerance"
    }(lineToolManager_s || (lineToolManager_s = {}));
    class _ extends lineToolManager_u.BitmapCoordinatesPaneRenderer {
      constructor(lineToolManager_e) {
        super(), this._data = null, this._forceOverrideTransparency = Boolean(lineToolManager_e)
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      hitTest(lineToolManager_e, lineToolManager_t) {
        if (null === this._data || this._data.points.length < 2 || this._data.disableInteractions) return null;
        const lineToolManager_i = lineToolManager_t.mediaSize.width,
          lineToolManager_s = (0, lineToolManager_n.box)(...this._data.points),
          lineToolManager_o = lineToolManager_s.min,
          lineToolManager_r = lineToolManager_s.max,
          lineToolManager_l = new lineToolManager_n.Point(lineToolManager_r.lineToolManager_x, lineToolManager_o.lineToolManager_y),
          lineToolManager_h = new lineToolManager_n.Point(lineToolManager_o.lineToolManager_x, lineToolManager_r.lineToolManager_y),
          lineToolManager_d = this._extendAndHitTestLineSegment(lineToolManager_e, lineToolManager_o, lineToolManager_l, lineToolManager_i);
        if (null !== lineToolManager_d) return lineToolManager_d;
        const lineToolManager_u = this._extendAndHitTestLineSegment(lineToolManager_e, lineToolManager_h, lineToolManager_r, lineToolManager_i);
        if (null !== lineToolManager_u) return lineToolManager_u;
        let _ = (0, lineToolManager_a.distanceToSegment)(lineToolManager_l, lineToolManager_r, lineToolManager_e);
        if (_.distance <= 3) return new lineToolManager_c.HitTestResult(lineToolManager_c.HitTarget.MovePoint);
        if (_ = (0, lineToolManager_a.distanceToSegment)(lineToolManager_o, lineToolManager_h, lineToolManager_e), _.distance <= 3) return new lineToolManager_c.HitTestResult(lineToolManager_c.HitTarget
          .MovePoint);
        if (this._data.middleLine) {
          const lineToolManager_t = lineToolManager_s.min.add(lineToolManager_s.max).scaled(.5),
            lineToolManager_o = this._extendAndHitTestLineSegment(lineToolManager_e, new lineToolManager_n.Point(lineToolManager_s.min.lineToolManager_x, lineToolManager_t.lineToolManager_y), new lineToolManager_n.Point(lineToolManager_s.max.lineToolManager_x, lineToolManager_t.lineToolManager_y), lineToolManager_i);
          if (null !== lineToolManager_o) return lineToolManager_o
        }
        return this._data.fillBackground ? this._hitTestBackground(lineToolManager_e, lineToolManager_o, lineToolManager_r, lineToolManager_i) : null
      }
      getColor() {
        const lineToolManager_e = (0, lineToolManager_o.ensure)(this._data);
        return void 0 === lineToolManager_e.transparency ? lineToolManager_e.backcolor : (0, lineToolManager_l.generateColor)(lineToolManager_e.backcolor, lineToolManager_e.transparency, this
          ._forceOverrideTransparency)
      }
      visibleRectSegment(lineToolManager_e) {
        const lineToolManager_t = this._data;
        if (null === lineToolManager_t) return null;
        const lineToolManager_i = (0, lineToolManager_n.box)(...lineToolManager_t.points),
          lineToolManager_s = lineToolManager_i.min,
          lineToolManager_o = lineToolManager_i.max,
          lineToolManager_r = lineToolManager_e.width,
          lineToolManager_a = lineToolManager_e.height,
          lineToolManager_l = lineToolManager_t.extendLeft ? 0 : Math.max(lineToolManager_s.lineToolManager_x, 0),
          lineToolManager_c = lineToolManager_t.extendRight ? lineToolManager_r : Math.min(lineToolManager_o.lineToolManager_x, lineToolManager_r);
        if (lineToolManager_l > lineToolManager_c || lineToolManager_c <= 0 || lineToolManager_l >= lineToolManager_r) return null;
        const lineToolManager_h = Math.max(lineToolManager_s.lineToolManager_y, 0),
          lineToolManager_d = Math.min(lineToolManager_o.lineToolManager_y, lineToolManager_a);
        return lineToolManager_h > lineToolManager_d || lineToolManager_d <= 0 || lineToolManager_h > lineToolManager_a ? null : [new lineToolManager_n.Point(lineToolManager_l, lineToolManager_h), new lineToolManager_n.Point(lineToolManager_c, lineToolManager_d)]
      }
      _drawImpl(lineToolManager_e) {
        if (null === this._data || this._data.points.length < 2 || this._data.linewidth <= 0 && !this._data
          .fillBackground) return;
        const {
          horizontalPixelRatio: lineToolManager_t,
          verticalPixelRatio: lineToolManager_i,
          bitmapSize: lineToolManager_s
        } = lineToolManager_e, {
          extendLeft: lineToolManager_o,
          extendRight: lineToolManager_r,
          linewidth: lineToolManager_a,
          middleLine: lineToolManager_l
        } = this._data, lineToolManager_c = (0, lineToolManager_n.box)(...this._data.points), lineToolManager_u = this._data.linewidth ? Math.max(1, Math.floor(this
            ._data.linewidth * lineToolManager_t)) : 0, _ = this._data.fillBackground ? this.getColor() : void 0, lineToolManager_p = Math.max(1,
            Math.floor(lineToolManager_t)), lineToolManager_m = lineToolManager_o ? -lineToolManager_a : Math.round(lineToolManager_c.min.lineToolManager_x * lineToolManager_t), lineToolManager_g = lineToolManager_r ? lineToolManager_s.width + lineToolManager_a : Math.round(lineToolManager_c.max.lineToolManager_x * lineToolManager_t), lineToolManager_f =
          Math.round(lineToolManager_c.min.lineToolManager_y * lineToolManager_i), lineToolManager_y = Math.round(lineToolManager_c.max.lineToolManager_y * lineToolManager_i);
        (0, lineToolManager_d.fillRectWithBorder)(lineToolManager_e, lineToolManager_m, lineToolManager_f, lineToolManager_g, lineToolManager_y, lineToolManager_p, void 0 === _ ? void 0 : {
          color: _
        }, 0 === lineToolManager_u ? void 0 : {
          color: this._data.color,
          lineStyle: this._data.linestyle ?? lineToolManager_h.LineStyle.Solid,
          borderWidth: lineToolManager_u,
          borderMode: "center",
          rightToLeftStroke: lineToolManager_o && !lineToolManager_r
        }, lineToolManager_l ? {
          ...lineToolManager_l,
          lineWidth: Math.max(1, Math.floor(lineToolManager_l.lineWidth * lineToolManager_i))
        } : void 0)
      }
      _extendAndHitTestLineSegment(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        const lineToolManager_o = this._extendAndClipLineSegment(lineToolManager_t, lineToolManager_i, lineToolManager_s);
        if (null !== lineToolManager_o) {
          if ((0, lineToolManager_a.distanceToSegment)(lineToolManager_o[0], lineToolManager_o[1], lineToolManager_e).distance <= 3) return new lineToolManager_c.HitTestResult(lineToolManager_c.HitTarget
            .MovePoint)
        }
        return null
      }
      _extendAndClipLineSegment(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        const lineToolManager_s = (0, lineToolManager_o.ensureNotNull)(this._data);
        if ((0, lineToolManager_n.equalPoints)(lineToolManager_e, lineToolManager_t) && !lineToolManager_s.extendLeft && !lineToolManager_s.extendRight) return null;
        const lineToolManager_r = Math.min(lineToolManager_e.lineToolManager_x, lineToolManager_t.lineToolManager_x),
          lineToolManager_a = Math.max(lineToolManager_e.lineToolManager_x, lineToolManager_t.lineToolManager_x),
          lineToolManager_l = lineToolManager_s.extendLeft ? 0 : Math.max(lineToolManager_r, 0),
          lineToolManager_c = lineToolManager_s.extendRight ? lineToolManager_i : Math.min(lineToolManager_a, lineToolManager_i);
        return lineToolManager_l > lineToolManager_c || lineToolManager_c <= 0 || lineToolManager_l >= lineToolManager_i ? null : [new lineToolManager_n.Point(lineToolManager_l, lineToolManager_e.lineToolManager_y), new lineToolManager_n.Point(lineToolManager_c, lineToolManager_t.lineToolManager_y)]
      }
      _hitTestBackground(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s) {
        const lineToolManager_o = this._extendAndClipLineSegment(lineToolManager_t, lineToolManager_i, lineToolManager_s);
        return null !== lineToolManager_o && (0, lineToolManager_r.pointInBox)(lineToolManager_e, (0, lineToolManager_n.box)(lineToolManager_o[0], lineToolManager_o[1])) ? new lineToolManager_c.HitTestResult(this._data
          ?.backgroundHitTarget ?? lineToolManager_c.HitTarget.MovePointBackground) : null
      }
    }