export class CommandHistory {
  constructor(maxSteps = 50) {
    this._undoStack = [];
    this._redoStack = [];
    this._maxSteps = maxSteps;
    this._savedAt = 0;
  }

  execute(command) {
    command.execute();
    this._undoStack.push(command);
    this._redoStack = [];
    if (this._undoStack.length > this._maxSteps) {
      this._undoStack.shift();
    }
  }

  undo() {
    if (this._undoStack.length === 0) return false;
    const command = this._undoStack.pop();
    command.undo();
    this._redoStack.push(command);
    return true;
  }

  redo() {
    if (this._redoStack.length === 0) return false;
    const command = this._redoStack.pop();
    command.execute();
    this._undoStack.push(command);
    return true;
  }

  canUndo() {
    return this._undoStack.length > 0;
  }

  canRedo() {
    return this._redoStack.length > 0;
  }

  clear() {
    this._undoStack = [];
    this._redoStack = [];
  }

  markSaved() {
    this._savedAt = this._undoStack.length;
  }

  isSaved() {
    return this._undoStack.length === this._savedAt;
  }
}
