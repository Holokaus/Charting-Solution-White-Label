/**
 * Module 93463 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

93463: (bitmapCoordinatesPane_e, bitmapCoordinatesPane_t, bitmapCoordinatesPane_i) => {
    "use strict";
    bitmapCoordinatesPane_i.bitmapCoordinatesPane_d(bitmapCoordinatesPane_t, {
      PaneRendererArea: () => bitmapCoordinatesPane_l
    });
    var bitmapCoordinatesPane_s = bitmapCoordinatesPane_i(10555),
      bitmapCoordinatesPane_o = bitmapCoordinatesPane_i(79268),
      bitmapCoordinatesPane_n = bitmapCoordinatesPane_i(4539),
      bitmapCoordinatesPane_r = bitmapCoordinatesPane_i(58221),
      bitmapCoordinatesPane_a = bitmapCoordinatesPane_i(4699);
    class bitmapCoordinatesPane_l extends bitmapCoordinatesPane_o.PaneRendererLine {
      constructor(bitmapCoordinatesPane_e) {
        bitmapCoordinatesPane_e.forceLineColor = !1, super(bitmapCoordinatesPane_e)
      }
      _drawImpl(bitmapCoordinatesPane_e) {
        const bitmapCoordinatesPane_t = this._data;
        if (0 === bitmapCoordinatesPane_t.items.length) return;
        let bitmapCoordinatesPane_i = this._data.visibleItemsRange?.startItemIndex ?? 0,
          bitmapCoordinatesPane_l = (this._data.visibleItemsRange?.endItemIndex ?? this._data.items.length) - 1;
        for (; bitmapCoordinatesPane_i < bitmapCoordinatesPane_l && !(0, bitmapCoordinatesPane_n.coordinateIsValid)(bitmapCoordinatesPane_t.items[bitmapCoordinatesPane_i].bitmapCoordinatesPane_y);) bitmapCoordinatesPane_i++;
        for (; bitmapCoordinatesPane_l >= 0 && !(0, bitmapCoordinatesPane_n.coordinateIsValid)(bitmapCoordinatesPane_t.items[bitmapCoordinatesPane_l].bitmapCoordinatesPane_y);) bitmapCoordinatesPane_l--;
        if (bitmapCoordinatesPane_i > bitmapCoordinatesPane_l) return;
        const {
          context: bitmapCoordinatesPane_c,
          horizontalPixelRatio: bitmapCoordinatesPane_h,
          verticalPixelRatio: bitmapCoordinatesPane_d
        } = bitmapCoordinatesPane_e;
        bitmapCoordinatesPane_c.save(), bitmapCoordinatesPane_c.scale(bitmapCoordinatesPane_h, bitmapCoordinatesPane_d), bitmapCoordinatesPane_c.lineCap = "round", (0, bitmapCoordinatesPane_a.applyColor)(bitmapCoordinatesPane_e, bitmapCoordinatesPane_t.lineColor, 0, 1), bitmapCoordinatesPane_c.lineWidth = bitmapCoordinatesPane_t
          .lineWidth, (0, bitmapCoordinatesPane_r.setLineStyle)(bitmapCoordinatesPane_c, bitmapCoordinatesPane_t.lineStyle), bitmapCoordinatesPane_c.lineWidth = 1;
        const bitmapCoordinatesPane_u = new Map,
          _ = new bitmapCoordinatesPane_o.PaneRendererLineItemsIterator(this._data.items, bitmapCoordinatesPane_i, bitmapCoordinatesPane_l + 1, this._data.skipHoles);
        for (; _.next();) {
          const bitmapCoordinatesPane_e = _.currentValue();
          let bitmapCoordinatesPane_i;
          bitmapCoordinatesPane_i = (0, bitmapCoordinatesPane_o.isValidPoint)(bitmapCoordinatesPane_e) && bitmapCoordinatesPane_e.style ? bitmapCoordinatesPane_e.style.color : bitmapCoordinatesPane_t.lineColor;
          const bitmapCoordinatesPane_s = _.nextValue();
          if ((0, bitmapCoordinatesPane_o.isValidPoint)(bitmapCoordinatesPane_s) && bitmapCoordinatesPane_s?.style) {
            const bitmapCoordinatesPane_t = bitmapCoordinatesPane_s.style.color;
            if (bitmapCoordinatesPane_i !== bitmapCoordinatesPane_t) {
              const bitmapCoordinatesPane_i = bitmapCoordinatesPane_u.get(bitmapCoordinatesPane_t) ?? [];
              bitmapCoordinatesPane_i.push(bitmapCoordinatesPane_e), bitmapCoordinatesPane_u.set(bitmapCoordinatesPane_t, bitmapCoordinatesPane_i)
            }
          }
          const bitmapCoordinatesPane_n = bitmapCoordinatesPane_u.get(bitmapCoordinatesPane_i) ?? [];
          bitmapCoordinatesPane_n.push(bitmapCoordinatesPane_e), bitmapCoordinatesPane_u.set(bitmapCoordinatesPane_i, bitmapCoordinatesPane_n)
        }
        for (const [bitmapCoordinatesPane_i, bitmapCoordinatesPane_n] of bitmapCoordinatesPane_u) {
          bitmapCoordinatesPane_c.beginPath();
          let bitmapCoordinatesPane_r = 0;
          for (let bitmapCoordinatesPane_e = 0; bitmapCoordinatesPane_e < bitmapCoordinatesPane_n.length; bitmapCoordinatesPane_e++) {
            const bitmapCoordinatesPane_a = bitmapCoordinatesPane_n[bitmapCoordinatesPane_e];
            if (!(0, bitmapCoordinatesPane_o.isValidPoint)(bitmapCoordinatesPane_a)) continue;
            if (!bitmapCoordinatesPane_a.style || bitmapCoordinatesPane_a.style?.color === bitmapCoordinatesPane_i) continue;
            const bitmapCoordinatesPane_l = (0, bitmapCoordinatesPane_s.point)(Math.round(bitmapCoordinatesPane_n[bitmapCoordinatesPane_r].center), bitmapCoordinatesPane_t.bottom);
            bitmapCoordinatesPane_c.moveTo(bitmapCoordinatesPane_l.bitmapCoordinatesPane_x, bitmapCoordinatesPane_l.bitmapCoordinatesPane_y), this._walkLine(bitmapCoordinatesPane_c, bitmapCoordinatesPane_n.slice(bitmapCoordinatesPane_r, bitmapCoordinatesPane_e), !0, bitmapCoordinatesPane_t.bottom, !0, !1, bitmapCoordinatesPane_l), bitmapCoordinatesPane_r = bitmapCoordinatesPane_e
          } {
            const bitmapCoordinatesPane_o = (0, bitmapCoordinatesPane_s.point)(Math.round(bitmapCoordinatesPane_n[bitmapCoordinatesPane_r].center), bitmapCoordinatesPane_t.bottom);
            if (bitmapCoordinatesPane_c.moveTo(bitmapCoordinatesPane_o.bitmapCoordinatesPane_x, bitmapCoordinatesPane_o.bitmapCoordinatesPane_y), this._walkLine(bitmapCoordinatesPane_c, bitmapCoordinatesPane_n.slice(bitmapCoordinatesPane_r, bitmapCoordinatesPane_n.length), !0, bitmapCoordinatesPane_t.bottom, !0, !1, bitmapCoordinatesPane_o), bitmapCoordinatesPane_c.closePath(),
              bitmapCoordinatesPane_t.isSeries) {
              const bitmapCoordinatesPane_e = bitmapCoordinatesPane_c.createLinearGradient(0, 0, 0, bitmapCoordinatesPane_t.bottom);
              bitmapCoordinatesPane_e.addColorStop(0, bitmapCoordinatesPane_t.color1), bitmapCoordinatesPane_e.addColorStop(1, bitmapCoordinatesPane_t.color2), bitmapCoordinatesPane_c.fillStyle = bitmapCoordinatesPane_e, bitmapCoordinatesPane_t.simpleMode = !0
            } else(0, bitmapCoordinatesPane_a.applyColor)(bitmapCoordinatesPane_e, bitmapCoordinatesPane_i, 0, 2);
            bitmapCoordinatesPane_c.fill()
          }
        }
        bitmapCoordinatesPane_c.lineWidth = bitmapCoordinatesPane_t.lineWidth, bitmapCoordinatesPane_c.restore(), super._drawImpl(bitmapCoordinatesPane_e)
      }
    }