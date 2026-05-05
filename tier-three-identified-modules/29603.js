/**
 * Module: 29603
 * Semantic: mainInitialization
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.469Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 29603 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

29603: (exports, module, i) => {
    "use strict";
    require.d(module, {
      ExcludeLineToolsFromGroupUndoCommand: () => h
    });
    var assertionUtils = i(50151),
      object = (i(40167), i(11542)),
      nextValue = i(95804),
      result = i(87465),
      array = i(72270),
      logger = i(13896);
    const config = new nextValue.TranslatedString("exclude line tools from group {group}", object.t(null, void 0, i(99395)));
    class h extends array.UndoCommand {
      constructor(exports, module, i) {
        super(config.format({
            group: module.name().value()
          }), void 0, !logger.lineToolsDoNotAffectChartInvalidation), this._model = exports, this._groupId = module.id, this
          ._groupName = module.name().value(), this._lineToolsIds = require.map((exports => exports.id()))
      }
      redo() {
        const exports = (0, assertionUtils.ensureNotNull)(this._model.lineToolsGroupModel().groupForId(this._groupId)),
          module = this._lineToolsIds.map((exports => this._model.dataSourceForId(exports))).filter(result.notNull);
        exports.excludeLineTools(module), 0 === exports.lineTools().length && this._model.lineToolsGroupModel().removeGroup(exports)
      }
      undo() {
        const exports = this._lineToolsIds.map((exports => this._model.dataSourceForId(exports))),
          module = this._model.lineToolsGroupModel().groupForId(this._groupId);
        null !== t ? module.addLineTools(exports) : this._model.lineToolsGroupModel().createGroup(exports, this._groupName, this
          ._groupId)
      }
    }