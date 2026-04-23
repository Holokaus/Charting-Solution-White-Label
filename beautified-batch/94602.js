/**
 * Module 94602 - Auto-beautified from TradingView webpack bundle
 *
 * @module 94602
 * @date 2026-04-23
 * @size 916 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - CompositeRenderer (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  CompositeRenderer: () => s
});
class s {
  constructor() {
    this._renderers = [], this._globalAlpha = 1
  }
  setGlobalAlpha(e) {
    this._globalAlpha = e
  }
  append(e) {
    e && this._renderers.push(e)
  }
  insert(e, t) {
    this._renderers.splice(t, 0, e)
  }
  clear() {
    this._renderers.length = 0
  }
  isEmpty() {
    return 0 === this._renderers.length
  }
  draw(e, t) {
    for (let i = 0; i < this._renderers.length; i++) e.save(), e.globalAlpha = this._globalAlpha, this._renderers[i].draw(e, t), e.restore()
  }
  drawBackground(e, t) {
    e.save(), e.globalAlpha = this._globalAlpha;
    for (let i = 0; i < this._renderers.length; i++) {
      const s = this._renderers[i];
      s.drawBackground && s.drawBackground(e, t)
    }
    e.restore()
  }
  hitTest(e, t) {
    let i = null;
    for (let s = this._renderers.length - 1; s >= 0; s--) {
      const o = this._renderers[s].hitTest(e, t);
      null !== o && (null === i || o.target() > i.target()) && (i = o)
    }
    return i
  }
  doesIntersectWithBox(e, t) {
    return this._renderers.some((i => !!i.doesIntersectWithBox && i.doesIntersectWithBox(e, t)))
  }
