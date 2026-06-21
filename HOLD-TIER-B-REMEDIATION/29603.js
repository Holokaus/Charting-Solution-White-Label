/**
 * Module 29603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29603: (lineToolManager_e, lineToolManager_t, lineToolManager_i) => {
    "use strict";
    lineToolManager_i.lineToolManager_d(lineToolManager_t, {
      ExcludeLineToolsFromGroupUndoCommand: () => lineToolManager_h
    });
    var assertionUtils = lineToolManager_i(50151),
      lineToolManager_o = (lineToolManager_i(40167), lineToolManager_i(11542)),
      lineToolManager_n = lineToolManager_i(95804),
      lineToolManager_r = lineToolManager_i(87465),
      lineToolManager_a = lineToolManager_i(72270),
      lineToolManager_l = lineToolManager_i(13896);
    const lineToolManager_c = new lineToolManager_n.TranslatedString("exclude line tools from group {group}", lineToolManager_o.lineToolManager_t(null, void 0, lineToolManager_i(99395)));
    class lineToolManager_h extends lineToolManager_a.UndoCommand {
      constructor(lineToolManager_e, lineToolManager_t, lineToolManager_i) {
        super(lineToolManager_c.format({
            group: lineToolManager_t.name().value()
          }), void 0, !lineToolManager_l.lineToolsDoNotAffectChartInvalidation), this._model = lineToolManager_e, this._groupId = lineToolManager_t.id, this
          ._groupName = lineToolManager_t.name().value(), this._lineToolsIds = lineToolManager_i.map((lineToolManager_e => lineToolManager_e.id()))
      }
      redo() {
        const lineToolManager_e = (0, assertionUtils.ensureNotNull)(this._model.lineToolsGroupModel().groupForId(this._groupId)),
          lineToolManager_t = this._lineToolsIds.map((lineToolManager_e => this._model.dataSourceForId(lineToolManager_e))).filter(lineToolManager_r.notNull);
        lineToolManager_e.excludeLineTools(lineToolManager_t), 0 === lineToolManager_e.lineTools().length && this._model.lineToolsGroupModel().removeGroup(lineToolManager_e)
      }
      undo() {
        const lineToolManager_e = this._lineToolsIds.map((lineToolManager_e => this._model.dataSourceForId(lineToolManager_e))),
          lineToolManager_t = this._model.lineToolsGroupModel().groupForId(this._groupId);
        null !== lineToolManager_t ? lineToolManager_t.addLineTools(lineToolManager_e) : this._model.lineToolsGroupModel().createGroup(lineToolManager_e, this._groupName, this
          ._groupId)
      }
    }