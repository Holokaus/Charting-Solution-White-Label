import { describe, it, expect, vi } from 'vitest';
import { CommandHistory } from '../src/history/CommandHistory.js';

describe('CommandHistory', () => {
  it('executes a command', () => {
    const history = new CommandHistory();
    const cmd = { execute: vi.fn(), undo: vi.fn() };
    history.execute(cmd);
    expect(cmd.execute).toHaveBeenCalled();
  });

  it('undoes a command', () => {
    const history = new CommandHistory();
    const cmd = { execute: vi.fn(), undo: vi.fn() };
    history.execute(cmd);
    expect(history.undo()).toBe(true);
    expect(cmd.undo).toHaveBeenCalled();
  });

  it('redoes a command', () => {
    const history = new CommandHistory();
    const cmd = { execute: vi.fn(), undo: vi.fn() };
    history.execute(cmd);
    history.undo();
    expect(history.redo()).toBe(true);
    expect(cmd.execute).toHaveBeenCalledTimes(2);
  });

  it('canUndo returns false when empty', () => {
    const history = new CommandHistory();
    expect(history.canUndo()).toBe(false);
  });

  it('canRedo returns false when empty', () => {
    const history = new CommandHistory();
    expect(history.canRedo()).toBe(false);
  });

  it('clear resets both stacks', () => {
    const history = new CommandHistory();
    const cmd = { execute: vi.fn(), undo: vi.fn() };
    history.execute(cmd);
    history.undo();
    history.clear();
    expect(history.canUndo()).toBe(false);
    expect(history.canRedo()).toBe(false);
  });

  it('marks and checks saved state', () => {
    const history = new CommandHistory();
    expect(history.isSaved()).toBe(true);
    const cmd = { execute: vi.fn(), undo: vi.fn() };
    history.execute(cmd);
    expect(history.isSaved()).toBe(false);
    history.markSaved();
    expect(history.isSaved()).toBe(true);
  });
});
