/**
 * Module 99955 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

99955: (seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i) => {
    "use strict";
    seriesBarFunction_i.seriesBarFunction_d(seriesBarFunction_t, {
      extrapolateBarsFrontByCount: () => seriesBarFunction_n,
      extrapolateBarsFrontToTime: () => seriesBarFunction_o
    });
    var seriesBarFunction_s = seriesBarFunction_i(51829);

    function seriesBarFunction_o(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s, seriesBarFunction_n = !1) {
      if (seriesBarFunction_t > seriesBarFunction_i) {
        const seriesBarFunction_r = seriesBarFunction_o(seriesBarFunction_e, seriesBarFunction_i, seriesBarFunction_t, seriesBarFunction_s, seriesBarFunction_n);
        return seriesBarFunction_r.count = -seriesBarFunction_r.count, seriesBarFunction_r
      }
      return seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t, 1, ((seriesBarFunction_e, seriesBarFunction_t) => seriesBarFunction_t > seriesBarFunction_i || 0 !== seriesBarFunction_s && seriesBarFunction_e > seriesBarFunction_s), seriesBarFunction_n)
    }

    function seriesBarFunction_n(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_s = !1) {
      const seriesBarFunction_o = seriesBarFunction_i < 0 ? -1 : 1;
      return seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_o, ((seriesBarFunction_e, seriesBarFunction_t) => seriesBarFunction_e >= seriesBarFunction_i * seriesBarFunction_o), seriesBarFunction_s)
    }

    function seriesBarFunction_r(seriesBarFunction_e, seriesBarFunction_t, seriesBarFunction_i, seriesBarFunction_o, seriesBarFunction_n) {
      let seriesBarFunction_r = 0,
        seriesBarFunction_a = seriesBarFunction_t;
      seriesBarFunction_e.moveTo(seriesBarFunction_a);
      let seriesBarFunction_l = 0,
        seriesBarFunction_c = Number.MAX_VALUE,
        seriesBarFunction_h = !1,
        seriesBarFunction_d = seriesBarFunction_t;
      const seriesBarFunction_u = [];
      for (; !seriesBarFunction_o(seriesBarFunction_r, seriesBarFunction_a);) {
        if (seriesBarFunction_l > 15) throw new Error("Internal error 0x10 while extrapolating.");
        const seriesBarFunction_o = seriesBarFunction_e.indexOfBar(seriesBarFunction_a);
        if (seriesBarFunction_o === seriesBarFunction_s.SessionStage.PRE_SESSION && 1 === seriesBarFunction_i) seriesBarFunction_a = seriesBarFunction_e.startOfBar(0), seriesBarFunction_e.moveTo(seriesBarFunction_a);
        else if (seriesBarFunction_o === seriesBarFunction_s.SessionStage.PRE_SESSION && -1 === seriesBarFunction_i) seriesBarFunction_a = seriesBarFunction_e.startOfBar(seriesBarFunction_s.SessionStage.PRE_SESSION), seriesBarFunction_e.moveTo(
        seriesBarFunction_a);
        else if (seriesBarFunction_o === seriesBarFunction_s.SessionStage.POST_SESSION && 1 === seriesBarFunction_i) seriesBarFunction_a = seriesBarFunction_e.startOfBar(seriesBarFunction_s.SessionStage.POST_SESSION),
          seriesBarFunction_e.moveTo(seriesBarFunction_a);
        else {
          if (seriesBarFunction_o === seriesBarFunction_s.SessionStage.POST_SESSION && -1 === seriesBarFunction_i) throw new Error(
          "Internal error 0x12 while extrapolating.");
          {
            const _ = seriesBarFunction_e.startOfBar(seriesBarFunction_o);
            if (_ > seriesBarFunction_t && seriesBarFunction_i > 0 || seriesBarFunction_t > _ && seriesBarFunction_i < 0) {
              if (seriesBarFunction_h && seriesBarFunction_c === _) throw new Error("Internal error 0x11 while extrapolating.");
              seriesBarFunction_h = !0, seriesBarFunction_c = _, seriesBarFunction_l = 0, seriesBarFunction_r++, seriesBarFunction_d = _, seriesBarFunction_n && seriesBarFunction_u.push(seriesBarFunction_d)
            }
            if (0 === seriesBarFunction_o && -1 === seriesBarFunction_i) seriesBarFunction_a = _ - 1;
            else {
              seriesBarFunction_a = seriesBarFunction_e.startOfBar(seriesBarFunction_o + seriesBarFunction_i);
              const seriesBarFunction_t = seriesBarFunction_e.startOfBar(seriesBarFunction_s.SessionStage.POST_SESSION);
              seriesBarFunction_a > seriesBarFunction_t && (seriesBarFunction_e.moveTo(seriesBarFunction_t), seriesBarFunction_a = seriesBarFunction_e.startOfBar(0))
            }
          }
        }
        seriesBarFunction_l++
      }
      return {
        time: seriesBarFunction_d,
        times: seriesBarFunction_u,
        count: seriesBarFunction_r
      }
    }