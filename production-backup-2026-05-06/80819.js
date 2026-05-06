/**
 * Module 80819 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

80819: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      TrendLineRenderer: () => _,
      drawArrow: () => lineToolManager_u
    });
    var lineToolManager_s = lineToolManager_i(50151),
      lineToolManager_o = lineToolManager_i(2624),
      lineToolManager_n = lineToolManager_i(25672),
      lineToolManager_r = lineToolManager_i(2383),
      lineToolManager_a = lineToolManager_i(58221),
      lineToolManager_l = lineToolManager_i(4539),
      lineToolManager_c = lineToolManager_i(33350),
      lineToolManager_h = lineToolManager_i(69558);

    function lineToolManager_d(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o) {
      lineToolManager_t.save(), lineToolManager_t.fillStyle = "#000000", lineToolManager_t.beginPath(), lineToolManager_t.arc(lineToolManager_e.lineToolManager_x * lineToolManager_o, lineToolManager_e.lineToolManager_y * lineToolManager_o, lineToolManager_i * lineToolManager_o, 0, 2 * Math.PI, !1), lineToolManager_t.fill(), lineToolManager_s
        .strokeWidth && (lineToolManager_t.lineWidth = lineToolManager_s.strokeWidth, lineToolManager_t.stroke()), lineToolManager_t.restore()
    }

    function lineToolManager_u(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_s, lineToolManager_o, lineToolManager_n = !1) {
      if (lineToolManager_t.subtract(lineToolManager_e).length() < 1) return;
      const lineToolManager_r = (0, lineToolManager_l.getArrowPoints)(lineToolManager_e, lineToolManager_t, lineToolManager_s, lineToolManager_n, !0).slice(0, 2);
      let lineToolManager_a = null;
      const {
        horizontalPixelRatio: lineToolManager_c,
        verticalPixelRatio: lineToolManager_h
      } = lineToolManager_o;
      for (let lineToolManager_e = 0; lineToolManager_e < lineToolManager_r.length; ++lineToolManager_e) {
        const lineToolManager_t = lineToolManager_r[lineToolManager_e][0],
          lineToolManager_s = lineToolManager_r[lineToolManager_e][1];
        (null === lineToolManager_a || lineToolManager_a.subtract(lineToolManager_t).length() > 1) && lineToolManager_i.moveTo(lineToolManager_t.lineToolManager_x * lineToolManager_c, lineToolManager_t.lineToolManager_y * lineToolManager_h), lineToolManager_i.lineTo(lineToolManager_s.lineToolManager_x * lineToolManager_c, lineToolManager_s.lineToolManager_y * lineToolManager_h), lineToolManager_a = lineToolManager_s
      }
    }
    class _ {
      constructor() {
        this._data = null, this._hittest = new lineToolManager_r.HitTestResult(lineToolManager_r.HitTarget.MovePoint)
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      setHitTest(lineToolManager_e) {
        this._hittest = lineToolManager_e
      }
      draw(lineToolManager_e, lineToolManager_t) {
        const lineToolManager_i = this._data;
        if (null === lineToolManager_i) return;
        if ("points" in lineToolManager_i && lineToolManager_i.points.length < 2) return;
        const {
          horizontalPixelRatio: lineToolManager_s
        } = lineToolManager_t;
        if (void 0 !== lineToolManager_i.excludeBoundaries) {
          lineToolManager_e.save();
          for (const lineToolManager_s of lineToolManager_i.excludeBoundaries)(0, lineToolManager_c.addExclusionArea)(lineToolManager_e, lineToolManager_t, lineToolManager_s)
        }
        const {
          linestyle: lineToolManager_o,
          lineCap: lineToolManager_n = (lineToolManager_o === lineToolManager_h.LINESTYLE_SOLID ? "round" : "butt")
        } = lineToolManager_i;
        lineToolManager_e.lineCap = lineToolManager_n, lineToolManager_e.lineJoin = "round", lineToolManager_e.strokeStyle = lineToolManager_i.color, lineToolManager_e.lineWidth = Math.max(1, Math.floor(lineToolManager_i
          .linewidth * lineToolManager_s)), (0, lineToolManager_a.setLineStyle)(lineToolManager_e, lineToolManager_o);
        const lineToolManager_r = lineToolManager_i.points[0],
          lineToolManager_l = lineToolManager_i.points[1];
        let lineToolManager_d = [];
        lineToolManager_e.beginPath(), lineToolManager_i.overlayLineEndings ? lineToolManager_d = [lineToolManager_r.clone(), lineToolManager_l.clone()] : this._drawEnds(lineToolManager_e, [lineToolManager_r, lineToolManager_l], lineToolManager_i.linewidth, lineToolManager_t);
        const lineToolManager_u = this._extendAndClipLineSegment(lineToolManager_r, lineToolManager_l, lineToolManager_t);
        null !== lineToolManager_u && lineToolManager_i.linewidth > 0 && (0, lineToolManager_a.addPixelPerfectLineToPath)(lineToolManager_e, lineToolManager_u[0].lineToolManager_x, lineToolManager_u[0].lineToolManager_y, lineToolManager_u[1].lineToolManager_x, lineToolManager_u[1].lineToolManager_y, lineToolManager_t), lineToolManager_i
          .overlayLineEndings && this._drawEnds(lineToolManager_e, lineToolManager_d, lineToolManager_i.linewidth, lineToolManager_t), lineToolManager_e.stroke(), void 0 !== lineToolManager_i.excludeBoundaries && lineToolManager_e
          .restore()
      }
      hitTest(lineToolManager_e, lineToolManager_t) {
        const lineToolManager_i = this._data;
        if (null === lineToolManager_i) return null;
        if ("points" in lineToolManager_i && lineToolManager_i.points.length < 2) return null;
        const lineToolManager_s = (lineToolManager_i.hitTestTolerance ?? (0, lineToolManager_l.interactionTolerance)().line) + lineToolManager_i.linewidth / 2,
          lineToolManager_n = lineToolManager_i.points[0],
          lineToolManager_r = lineToolManager_i.points[1],
          lineToolManager_a = this._extendAndClipLineSegment(lineToolManager_n, lineToolManager_r, lineToolManager_t);
        if (null !== lineToolManager_a) {
          if ((0, lineToolManager_o.distanceToSegment)(lineToolManager_a[0], lineToolManager_a[1], lineToolManager_e).distance <= lineToolManager_s) return this._hittest
        }
        return null
      }
      _extendAndClipLineSegment(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        const lineToolManager_o = (0, lineToolManager_s.ensureNotNull)(this._data);
        return (0, lineToolManager_l.extendAndClipLineSegment)(lineToolManager_e, lineToolManager_t, lineToolManager_i.mediaSize.width, lineToolManager_i.mediaSize.height, lineToolManager_o.extendleft, lineToolManager_o
          .extendright)
      }
      _drawEnds(lineToolManager_e, lineToolManager_t, lineToolManager_i, lineToolManager_o) {
        const lineToolManager_r = lineToolManager_t[0],
          lineToolManager_a = lineToolManager_t[1],
          lineToolManager_l = (0, lineToolManager_s.ensureNotNull)(this._data);
        switch (lineToolManager_l.leftend) {
          case lineToolManager_n.LineEnd.Arrow:
            lineToolManager_u(lineToolManager_a, lineToolManager_r, lineToolManager_e, lineToolManager_i, lineToolManager_o);
            break;
          case lineToolManager_n.LineEnd.Circle:
            lineToolManager_d(lineToolManager_r, lineToolManager_e, lineToolManager_i, (0, lineToolManager_s.ensureDefined)(lineToolManager_l.endstyle), lineToolManager_o.horizontalPixelRatio)
        }
        switch (lineToolManager_l.rightend) {
          case lineToolManager_n.LineEnd.Arrow:
            lineToolManager_u(lineToolManager_r, lineToolManager_a, lineToolManager_e, lineToolManager_i, lineToolManager_o);
            break;
          case lineToolManager_n.LineEnd.Circle:
            lineToolManager_d(lineToolManager_a, lineToolManager_e, lineToolManager_i, (0, lineToolManager_s.ensureDefined)(lineToolManager_l.endstyle), lineToolManager_o.horizontalPixelRatio)
        }
      }
    }