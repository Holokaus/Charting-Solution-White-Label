/**
 * Module 39697 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

39697: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      CircleRenderer: () => lineToolManager_r
    });
    var lineToolManager_s = lineToolManager_i(6453),
      lineToolManager_o = lineToolManager_i(2383),
      lineToolManager_n = lineToolManager_i(4539);
    class lineToolManager_r {
      constructor(lineToolManager_e) {
        this._data = lineToolManager_e ?? null
      }
      setData(lineToolManager_e) {
        this._data = lineToolManager_e
      }
      draw(lineToolManager_e, lineToolManager_t) {
        if (null === this._data) return;
        const {
          center: lineToolManager_i,
          radius: lineToolManager_s,
          lineWidth: lineToolManager_o,
          color: lineToolManager_n,
          backColor: lineToolManager_r
        } = this._data;
        lineToolManager_e.save();
        const {
          horizontalPixelRatio: lineToolManager_a,
          verticalPixelRatio: lineToolManager_l
        } = lineToolManager_t, lineToolManager_c = Math.max(1, Math.floor(lineToolManager_a)), lineToolManager_h = lineToolManager_c % 2 / 2, lineToolManager_d = Math.round(lineToolManager_i.lineToolManager_x * lineToolManager_a) + lineToolManager_h, lineToolManager_u = Math.round(lineToolManager_i.lineToolManager_y * lineToolManager_l) +
          lineToolManager_h, _ = Math.round(lineToolManager_d + lineToolManager_s * lineToolManager_a), lineToolManager_p = Math.max(1, Math.floor(lineToolManager_o * lineToolManager_a)), lineToolManager_m = _ - lineToolManager_d - lineToolManager_p;
        lineToolManager_m > 0 && (lineToolManager_e.fillStyle = lineToolManager_r, lineToolManager_e.beginPath(), lineToolManager_e.moveTo(lineToolManager_d + lineToolManager_m, lineToolManager_u), lineToolManager_e.arc(lineToolManager_d, lineToolManager_u, lineToolManager_m, 0, 2 * Math.PI, !1), lineToolManager_e.fill());
        const lineToolManager_g = Math.max(lineToolManager_c / 2, _ - lineToolManager_d - lineToolManager_p / 2);
        lineToolManager_e.strokeStyle = lineToolManager_n, lineToolManager_e.lineWidth = lineToolManager_p, lineToolManager_e.beginPath(), lineToolManager_e.moveTo(lineToolManager_d + lineToolManager_g, lineToolManager_u), lineToolManager_e.arc(lineToolManager_d, lineToolManager_u, lineToolManager_g, 0, 2 * Math.PI, !1), lineToolManager_e
          .stroke(), lineToolManager_e.restore()
      }
      hitTest(lineToolManager_e) {
        if (null === this._data || this._data.disableInteractions) return null;
        const {
          center: lineToolManager_t,
          radius: lineToolManager_i,
          backgroundHitTarget: lineToolManager_r
        } = this._data, lineToolManager_a = (0, lineToolManager_n.interactionTolerance)().curve;
        if (!(0, lineToolManager_s.pointInCircle)(lineToolManager_e, lineToolManager_t, lineToolManager_i + lineToolManager_a)) return null;
        const lineToolManager_l = lineToolManager_i > lineToolManager_a && (0, lineToolManager_s.pointInCircle)(lineToolManager_e, lineToolManager_t, lineToolManager_i - lineToolManager_a) ? lineToolManager_r ?? lineToolManager_o.HitTarget.MovePointBackground : lineToolManager_o.HitTarget
          .MovePoint;
        return new lineToolManager_o.HitTestResult(lineToolManager_l)
      }
    }