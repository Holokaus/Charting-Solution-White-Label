/**
 * Module 39612 - Auto-beautified from TradingView webpack bundle
 *
 * @module 39612
 * @date 2026-04-23
 * @size 265 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 49483
 *
 * Exports:
 *   - lastMouseOrTouchEventInfo (internal: o)
 *   - setLastMouseOrTouchEventInfo (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  lastMouseOrTouchEventInfo: () => o,
  setLastMouseOrTouchEventInfo: () => n
});
let s = (0, i(49483).supportTouch)() ? {
  isTouch: !0,
  stylus: !1
} : {
  isTouch: !1
};

function o() {
  return s
}

function n(e) {
  s = e.isTouch ? {
    isTouch: !0,
    stylus: e.stylus
  } : {
    isTouch: !1
  }
