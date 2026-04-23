/**
 * Module 94322 - Auto-beautified from TradingView webpack bundle
 *
 * @module 94322
 * @date 2026-04-23
 * @size 1864 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 7024, 11946, 22613, 75579, 78176, 78861
 *
 * Exports:
 *   - magnetEnabled (internal: g)
 *   - magnetMode (internal: f)
 *   - magnetSnapsToIndicators (internal: y)
 *   - setIsMagnetEnabled (internal: v)
 *   - setMagnetMode (internal: S)
 *   - setMagnetSnapsToIndicators (internal: b)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

94322: (e, t, i) => {
    "use strict";
    i.d(t, {
      magnetEnabled: () => g,
      magnetMode: () => f,
      magnetSnapsToIndicators: () => y,
      setIsMagnetEnabled: () => v,
      setMagnetMode: () => S,
      setMagnetSnapsToIndicators: () => b
    });
    var s = i(78176),
      o = i(22613),
      n = i(7024),
      r = i(78861),
      a = i(11946),
      l = i(75579);
    const c = new o.WatchedValue(!1),
      h = new o.WatchedValue(n.MagnetMode.WeakMagnet),
      d = new o.WatchedValue(!1),
      u = (0, l.modifierPressed)(),
      _ = (0, l.shiftPressed)();

    function p() {
      const e = u.value();
      if (_.value() && (r.isToolEditingNow.value() || r.isToolCreatingNow.value())) return void c.setValue(!1);
      let t, i;
      if (r.activePointSelectionMode.value() === r.SelectPointMode.Replay) t = i = !1;
      else {
        const s = r.tool.value(),
          o = r.isStudyEditingNow.value() || r.activePointSelectionMode.value() === r.SelectPointMode.Study;
        t = e && ((0, a.isLineToolName)(s) || r.isToolEditingNow.value() || (0, r.toolIsMeasure)(s) || o), i = (0, r.properties)().childs().magnet.value()
      }
      h.setValue(!i && t ? n.MagnetMode.StrongMagnet : (0, r.properties)().childs().magnetMode.value()), c.setValue(t ? !i : i)
    }

    function m() {
      d.setValue((0, r.properties)().childs().magnetSnapsToIndicators.value())
    }

    function g() {
      return c
    }

    function f() {
      return h
    }

    function y() {
      return d
    }

    function v(e) {
      (0, s.allowSavingDefaults)(!0), (0, r.properties)().childs().magnet.setValue(e), (0, s.allowSavingDefaults)(!1)
    }

    function S(e) {
      (0, s.allowSavingDefaults)(!0), (0, r.properties)().childs().magnetMode.setValue(e), (0, r.properties)().childs().magnet.setValue(!0), (0, s.allowSavingDefaults)(!1)
    }

    function b(e) {
      (0, s.allowSavingDefaults)(!0), (0, r.properties)().childs().magnetSnapsToIndicators.setValue(e), (0, s.allowSavingDefaults)(!1)
    }(0, r.runOnDrawingStateReady)((() => {
      (0, r.properties)().childs().magnet.subscribe(null, p), (0, r.properties)().childs().magnetMode.subscribe(null, p), (0, r.properties)().childs().magnetSnapsToIndicators.subscribe(null, m), u.subscribe(p), _.subscribe(p), r.tool.subscribe(p), r.isToolEditingNow.subscribe(p), p(), m()
    }))
