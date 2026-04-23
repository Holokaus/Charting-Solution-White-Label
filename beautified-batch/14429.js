/**
 * Module 14429 - Auto-beautified from TradingView webpack bundle
 *
 * @module 14429
 * @date 2026-04-23
 * @size 285 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 41706, 84696
 *
 * Exports:
 *   - ActionWithStandardIcon (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  ActionWithStandardIcon: () => n
});
var s = i(41706),
  o = i(84696);
class n extends s.Action {
    constructor(e) {
      const {
        options: t,
        customActionOptions: i
      } = e;
      t.iconId && (t.icon = t.icon ?? o.icons.get(t.iconId)), i && i.iconId && (i.icon = i.icon ?? o.icons.get(i.iconId)), super(e)
    }
