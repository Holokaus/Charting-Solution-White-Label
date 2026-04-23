/**
 * Module 29603 - Auto-beautified from TradingView webpack bundle
 *
 * @module 29603
 * @date 2026-04-23
 * @size 1020 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 11542, 13896, 40167, 50151, 72270, 87465, 95804, 99395
 *
 * Exports:
 *   - ExcludeLineToolsFromGroupUndoCommand (internal: h)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  ExcludeLineToolsFromGroupUndoCommand: () => h
});
var s = i(50151),
  o = (i(40167), i(11542)),
  n = i(95804),
  r = i(87465),
  a = i(72270),
  l = i(13896);
const c = new n.TranslatedString("exclude line tools from group {group}", o.t(null, void 0, i(99395)));
class h extends a.UndoCommand {
    constructor(e, t, i) {
      super(c.format({
        group: t.name().value()
      }), void 0, !l.lineToolsDoNotAffectChartInvalidation), this._model = e, this._groupId = t.id, this._groupName = t.name().value(), this._lineToolsIds = i.map((e => e.id()))
    }
    redo() {
      const e = (0, s.ensureNotNull)(this._model.lineToolsGroupModel().groupForId(this._groupId)),
        t = this._lineToolsIds.map((e => this._model.dataSourceForId(e))).filter(r.notNull);
      e.excludeLineTools(t), 0 === e.lineTools().length && this._model.lineToolsGroupModel().removeGroup(e)
    }
    undo() {
      const e = this._lineToolsIds.map((e => this._model.dataSourceForId(e))),
        t = this._model.lineToolsGroupModel().groupForId(this._groupId);
      null !== t ? t.addLineTools(e) : this._model.lineToolsGroupModel().createGroup(e, this._groupName, this._groupId)
    }
