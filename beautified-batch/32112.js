/**
 * Module 32112 - Auto-beautified from TradingView webpack bundle
 *
 * @module 32112
 * @date 2026-04-23
 * @size 1122 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: None detected
 *
 * Exports:
 *   - SelectionApi (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";

function s(e, t) {
  const i = e.dataSourceForId(t);
  if (null === i) throw new Error(`Chart has no study or shape with id "${t}"`);
  return i
}
i.d(t, {
  SelectionApi: () => o
});
class o {
  constructor(e) {
    this._model = e
  }
  add(e) {
    Array.isArray(e) ? this._model.selectionMacro((t => {
      e.map(s.bind(null, this._model)).forEach((e => t.addSourceToSelection(e)))
    })) : this.add([e])
  }
  canBeAddedToSelection(e) {
    const t = s(this._model, e);
    return this._model.selection().canBeAddedToSelection(t)
  }
  set(e) {
    Array.isArray(e) ? this._model.selectionMacro((t => {
      t.clearSelection(),
        e.map(s.bind(null, this._model)).forEach((e => t.addSourceToSelection(e)))
    })) : this.set([e])
  }
  remove(e) {
    Array.isArray(e) ? this._model.selectionMacro((t => {
      e.map(s.bind(null, this._model)).forEach((e => t.removeSourceFromSelection(e)))
    })) : this.remove([e])
  }
  contains(e) {
    const t = s(this._model, e);
    return this._model.selection().isSelected(t)
  }
  allSources() {
    return this._model.selection().dataSources().map((e => e.id()))
  }
  isEmpty() {
    return this._model.selection().isEmpty()
  }
  clear() {
    this._model.selectionMacro((e => {
      e.clearSelection()
    }))
  }
  onChanged() {
    return this._model.onSelectedSourceChanged()
  }
