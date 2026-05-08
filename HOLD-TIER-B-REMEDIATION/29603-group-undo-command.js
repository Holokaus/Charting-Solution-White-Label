/**
 * ============================================================================
 * TRADINGVIEW MODULE 29603 - GROUP UNDO COMMAND
 * ============================================================================
 *
 * Purpose: Group undo command for line tools
 *
 * Size: 2.4 KB
 *
 * Class: GroupUndoCommand
 *   - Extends UndoCommand for group operations
 *   - Handles line tool group undo/redo
 *   - Manages group ID and name
 *   - Provides command formatting
 *
 * Features:
 *   - Group undo/redo functionality
 *   - Command formatting and validation
 *   - Group model integration
 *   - Line tool exclusion handling
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 40167: Line tool utilities
 *   - 11542: Line tool utilities
 *   - 95804: Line tool utilities
 *   - 99395: Line tool utilities
 *
 * Exports:
 *   - GroupUndoCommand: Group undo command class
 *
 * @module 29603
 * @category Line Tools
 * @subpackage Command System
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    ExcludeLineToolsFromGroupUndoCommand: () => GroupUndoCommand
  });

  const assertionUtils = moduleRequire(50151),
    lineToolUtils = moduleRequire(40167),
    lineToolUtils2 = moduleRequire(11542),
    lineToolUtils3 = moduleRequire(95804),
    lineToolUtils4 = moduleRequire(99395);

  /**
   * Group undo command implementation
   */
  class GroupUndoCommand extends lineToolUtils2.UndoCommand {
    /**
     * @param {Object} model - Chart model
     * @param {Object} group - Line tool group
     */
    constructor(model, group) {
      super(model, group.id, group.name);
      this._groupId = group.id;
    }

    /**
     * Execute undo operation
     * @returns {boolean} True if successful
     */
    undo() {
      const group = (0, assertionUtils.ensureNotNull)(this._model.lineToolsGroupModel().groupForId(this._groupId));
      
      if (!group) {
        return false;
      }
      
      const lineToolIds = this._lineToolsIds.map(id => id);
      const lineTools = lineToolIds.map(id => this._model.dataSourceForId(id));
      
      const lineToolsToRemove = lineTools.filter(lineTool => 
        !group.lineTools.includes(lineTool.id)
      );
      
      if (lineToolsToRemove.length > 0) {
        group.removeLineTools(lineToolsToRemove);
        return true;
      }
      
      return false;
    }

    /**
     * Execute redo operation
     * @returns {boolean} True if successful
     */
    redo() {
      const group = (0, assertionUtils.ensureNotNull)(this._model.lineToolsGroupModel().groupForId(this._groupId));
      
      if (!group) {
        return false;
      }
      
      const lineToolIds = this._lineToolsIds.map(id => id);
      const lineTools = lineToolIds.map(id => this._model.dataSourceForId(id));
      
      const lineToolsToAdd = lineTools.filter(lineTool => 
        !group.lineTools.includes(lineTool.id)
      );
      
      if (lineToolsToAdd.length > 0) {
        group.addLineTools(lineToolsToAdd);
        return true;
      }
      
      return false;
    }

    /**
     * Get command title
     * @returns {string} Command title
     */
    title() {
      const group = (0, assertionUtils.ensureNotNull)(this._model.lineToolsGroupModel().groupForId(this._groupId));
      
      if (!group) {
        return "";
      }
      
      return (0, lineToolUtils4.TranslatedString)("exclude line tools from group {group}", group.name);
    }

    /**
     * Get command type
     * @returns {string} Command type
     */
    type() {
      return "GroupUndoCommand";
    }
  }

  // Export the GroupUndoCommand class
  moduleExports.GroupUndoCommand = GroupUndoCommand;
}
