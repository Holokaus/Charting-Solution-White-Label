/**
 * ============================================================================
 * TRADINGVIEW MODULE 45 - UNDO COMMANDS
 * ============================================================================
 *
 * Purpose: Undo command system for chart operations
 *
 * Size: 8.5 KB
 *
 * Classes:
 *   - UndoCommand: Base undo command class
 *   - CompositeUndoCommand: Composite undo command
 *   - PropertySetterUndoCommand: Property setter undo command
 *   - WatchedValueUndoCommand: Watched value undo command
 *
 * Features:
 *   - Undo/redo functionality
 *   - Command composition and nesting
 *   - Property change tracking
 *   - Watched value integration
 *   - Stack-based command management
 *
 * Dependencies:
 *   - 72270: Undo command utilities
 *   - 48096: Delegate utilities
 *   - 95804: Translation utilities
 *
 * Exports:
 *   - UndoCommand: Base undo command class
 *   - CompositeUndoCommand: Composite undo command class
 *   - PropertySetterUndoCommand: Property setter undo command class
 *   - WatchedValueUndoCommand: Watched value undo command class
 *
 * @module 45
 * @category Chart System
 * @subpackage Undo Commands
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  
  moduleRequire.undoCommands_d(moduleConfig, {
    UndoCommand: () => UndoCommand,
    CompositeUndoCommand: () => CompositeUndoCommand,
    PropertySetterUndoCommand: () => PropertySetterUndoCommand,
    WatchedValueUndoCommand: () => WatchedValueUndoCommand
  });

  const UndoCommandUtils = moduleRequire(72270),
    DelegateUtils = moduleRequire(48096),
    TranslationUtils = moduleRequire(95804);

  /**
   * Base undo command class
   */
  class UndoCommand {
    constructor(title, affectsState = true) {
      this._title = title;
      this._affectsState = affectsState;
    }

    /**
     * Get command title
     * @returns {string} Command title
     */
    getTitle() {
      return this._title;
    }

    /**
     * Check if command affects state
     * @returns {boolean} True if affects state
     */
    affectsState() {
      return this._affectsState;
    }

    /**
     * Execute redo operation
     * @param {Object} context - Execution context
     */
    redo(context) {
      // Abstract method to be implemented by subclasses
      throw new Error('redo method must be implemented by subclass');
    }

    /**
     * Execute undo operation
     * @param {Object} context - Execution context
     */
    undo(context) {
      // Abstract method to be implemented by subclasses
      throw new Error('undo method must be implemented by subclass');
    }
  }

  /**
   * Composite undo command class
   */
  class CompositeUndoCommand extends UndoCommand {
    constructor(title, affectsState = true) {
      super(title, affectsState);
      this._subcommands = [];
    }

    /**
     * Add subcommand to composite
     * @param {UndoCommand} command - Subcommand to add
     */
    addCommand(command) {
      if (!(command instanceof UndoCommand)) {
        throw new TypeError('Subcommand must be an instance of UndoCommand');
      }
      this._subcommands.push(command);
    }

    /**
     * Check if composite is empty
     * @returns {boolean} True if no subcommands
     */
    isEmpty() {
      return this._subcommands.length === 0;
    }

    /**
     * Execute redo for all subcommands
     * @param {Object} context - Execution context
     */
    redo(context) {
      for (let i = 0; i < this._subcommands.length; i++) {
        this._subcommands[i].redo(context);
      }
    }

    /**
     * Execute undo for all subcommands in reverse order
     * @param {Object} context - Execution context
     */
    undo(context) {
      for (let i = this._subcommands.length - 1; i >= 0; i--) {
        this._subcommands[i].undo(context);
      }
    }

    /**
     * Get all subcommands
     * @returns {Array} Array of subcommands
     */
    commands() {
      return this._subcommands;
    }

    /**
     * Check if any subcommand affects state
     * @returns {boolean} True if any subcommand affects state
     */
    affectsState() {
      return this._subcommands.some(command => command.affectsState());
    }
  }

  /**
   * Property setter undo command class
   */
  class PropertySetterUndoCommand extends UndoCommand {
    constructor(setter, oldValue, newValue, title, affectsState = true) {
      super(title, undefined, affectsState);
      this._setter = setter;
      this._oldValue = oldValue;
      this._newValue = newValue;
    }

    /**
     * Execute redo by setting new value
     * @param {Object} context - Execution context
     */
    redo(context) {
      this._setter(this._newValue);
    }

    /**
     * Execute undo by setting old value
     * @param {Object} context - Execution context
     */
    undo(context) {
      this._setter(this._oldValue);
    }
  }

  /**
   * Watched value undo command class
   */
  class WatchedValueUndoCommand extends PropertySetterUndoCommand {
    constructor(watchedValue, newValue, title, affectsState = true) {
      super(
        value => watchedValue.setValue(value),
        watchedValue.value(),
        newValue,
        title,
        affectsState
      );
      this._watchedValue = watchedValue;
    }
  }

  // Export all classes
  moduleExports.UndoCommand = UndoCommand;
  moduleExports.CompositeUndoCommand = CompositeUndoCommand;
  moduleExports.PropertySetterUndoCommand = PropertySetterUndoCommand;
  moduleExports.WatchedValueUndoCommand = WatchedValueUndoCommand;
}
