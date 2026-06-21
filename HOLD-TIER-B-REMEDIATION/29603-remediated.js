/**
 * Module 29603 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

29603: (exports, module, require) => {
    "use strict";
    require.register(module, {
      ExcludeLineToolsFromGroupUndoCommand: () => handler
    });
    var assertionUtils = require(50151),
      isLineTool = (require(40167), require(11542)),
      name = require(95804),
      config = require(87465),
      lineToolManager_a = require(72270),
      lineToolManager_l = require(13896);
    const lineToolManager_c = new name.TranslatedString("exclude line tools from group {group}", isLineTool.module(null, void 0, require(99395)));
    class handler extends lineToolManager_a.UndoCommand {
      constructor(exports, module, require) {
        super(lineToolManager_c.format({
            group: module.name().value()
          }), void 0, !lineToolManager_l.lineToolsDoNotAffectChartInvalidation), this._model = exports, this._groupId = module.id, this
          ._groupName = module.name().value(), this._lineToolsIds = require.map((exportstring => exports.id()))
      }
      redo() {
        const exports = (0, assertionUtils.ensureNotNull)(this._model.lineToolsGroupModel().groupForId(this._groupId)),
          module = this._lineToolsIds.map((exportstring => this._model.dataSourceForId(exports))).filter(config.notNull);
        exports.excludeLineTools(module), 0 === exports.lineTools().length && this._model.lineToolsGroupModel().removeGroup(exports)
      }
      undo() {
        const exports = this._lineToolsIds.map((exportstring => this._model.dataSourceForId(exports))),
          module = this._model.lineToolsGroupModel().groupForId(this._groupId);
        null !== module ? module.addLineTools(exports) : this._model.lineToolsGroupModel().createGroup(exports, this._groupName, this
          ._groupId)
      }
    }