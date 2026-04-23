/**
 * Module 68028 - Auto-beautified from TradingView webpack bundle
 *
 * @module 68028
 * @date 2026-04-23
 * @size 1024 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613
 *
 * Exports:
 *   - CustomStatusModel (internal: c)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

68028: (e, t, i) => {
    "use strict";
    i.d(t, {
      CustomStatusModel: () => c
    });
    var s = i(22613);
    const o = "#9598a1",
      n = !1,
      r = null,
      a = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"></svg>';
    class l {
      constructor(e) {
        this._visible = new s.WatchedValue(n), this._tooltip = new s.WatchedValue(r), this._icon = new s.WatchedValue(a), this._color = new s.WatchedValue(o), this._tooltipContent = new s.WatchedValue(null), this._symbol = e
      }
      symbol() {
        return this._symbol
      }
      tooltip() {
        return this._tooltip
      }
      icon() {
        return this._icon
      }
      color() {
        return this._color
      }
      visible() {
        return this._visible
      }
      tooltipContent() {
        return this._tooltipContent
      }
    }
    class c {
      constructor() {
        this._symbolCustomStatuses = new Map
      }
      getSymbolCustomStatus(e) {
        if (this._symbolCustomStatuses.has(e)) return this._symbolCustomStatuses.get(e);
        const t = new l(e);
        return this._symbolCustomStatuses.set(e, t), t
      }
      hideAll() {
        for (const e of this._symbolCustomStatuses.values()) e.visible().setValue(!1)
      }
      static getInstance() {
        return null === this._instance && (this._instance = new c), this._instance
      }
    }
    c._instance = null
