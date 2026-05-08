/**
 * ============================================================================
 * TRADINGVIEW MODULE 29603 - EXCLUDE LINE TOOLS UNDO COMMAND
 * ============================================================================
 *
 * Purpose: Exclude line tools from group undo command
 *
 * Size: 1.5 KB
 *
 * Class: ExcludeLineToolsFromGroupUndoCommand
 *   - Undo command for excluding line tools from groups
 *   - Manages line tool group operations
 *   - Handles undo/redo functionality
 *   - Supports group validation
 *
 * Features:
 *   - Line tool group management
 *   - Undo/redo command implementation
 *   - Group exclusion operations
 *   - Line tool ID mapping
 *   - Chart invalidation handling
 *   - Translation support
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 40167: Line tool utilities
 *   - 11542: Translation utilities
 *   - 95804: Line tool utilities
 *   - 87465: Line tool utilities
 *   - 72270: Line tool utilities
 *   - 13896: Line tool utilities
 *
 * Exports:
 *   - ExcludeLineToolsFromGroupUndoCommand: Exclude line tools undo command class
 *
 * @module 29603
 * @category Line Tools
 * @subpackage Undo Commands
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.lineToolManager_d(moduleConfig, {
    ExcludeLineToolsFromGroupUndoCommand: () => ExcludeLineToolsFromGroupUndoCommand
  });

  const assertionUtils = moduleRequire(50151),
    lineToolUtils = moduleRequire(40167),
    translationUtils = moduleRequire(11542),
    lineToolUtils2 = moduleRequire(95804),
    lineToolUtils3 = moduleRequire(87465),
    lineToolUtils4 = moduleRequire(72270),
    lineToolUtils5 = moduleRequire(13896);

  /**
   * Exclude line tools from group undo command class
   */
  class ExcludeLineToolsFromGroupUndoCommand extends lineToolUtils4.UndoCommand {
    constructor(model, groupId, groupName, lineToolsDoNotAffectChartInvalidation = true) {
      super(
        translationUtils.format({
          group: groupName
        }, "exclude line tools from group {group}"),
        0,
        lineToolsDoNotAffectChartInvalidation
      );
      
      this._model = model;
      this._groupId = groupId;
      this._groupName = groupName;
      this._lineToolsIds = lineToolUtils.map(tool => tool.id());
    }

    /**
     * Redo operation
     */
    redo() {
      const groupModel = assertionUtils.ensureNotNull(
        this._model.lineToolsGroupModel().groupForId(this._groupId)
      );
      
      const currentLineTools = this._lineToolsIds
        .map(id => this._model.dataSourceForId(id))
        .filter(lineToolUtils2.notNull);
      
      groupModel.excludeLineTools(currentLineTools, 0);
      
      if (currentLineTools.length === 0) {
        this._model.lineToolsGroupModel().removeGroup(groupModel);
      }
    }

    /**
     * Undo operation
     */
    undo() {
      const currentLineTools = this._lineToolsIds
        .map(id => this._model.dataSourceForId(id))
        .filter(lineToolUtils2.notNull);
      
      const groupModel = this._model.lineToolsGroupModel().groupForId(this._groupId);
      
      if (groupModel !== null) {
        groupModel.addLineTools(currentLineTools);
      } else {
        this._model.lineToolsGroupModel().createGroup(
          this._groupId,
          this._groupName,
          this._groupId
        );
      }
    }
  }

  // Export the ExcludeLineToolsFromGroupUndoCommand class
  moduleExports.ExcludeLineToolsFromGroupUndoCommand = ExcludeLineToolsFromGroupUndoCommand;
}
