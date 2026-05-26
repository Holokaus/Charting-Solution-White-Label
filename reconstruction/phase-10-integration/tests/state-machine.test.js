import { describe, it, expect } from 'vitest';
import { StateMachine } from '../src/widget/StateMachine.js';

describe('StateMachine', () => {
  const mockEmitter = { 
    _handlers: {}, 
    emit(event, data) { (this._handlers[event] || []).forEach(h => h(data)); }, 
    on(event, handler) { (this._handlers[event] = this._handlers[event] || []).push(handler); } 
  };

  it('starts in UNINITIALIZED', () => {
    const sm = new StateMachine(mockEmitter);
    expect(sm.state).toBe('uninitialized');
  });

  it('transitions UNINITIALIZED → LOADING', () => {
    const sm = new StateMachine(mockEmitter);
    sm.transition('loading');
    expect(sm.state).toBe('loading');
  });

  it('transitions LOADING → READY', () => {
    const sm = new StateMachine(mockEmitter);
    sm.transition('loading');
    sm.transition('ready');
    expect(sm.state).toBe('ready');
  });

  it('transitions READY → ACTIVE', () => {
    const sm = new StateMachine(mockEmitter);
    sm.transition('loading');
    sm.transition('ready');
    sm.transition('active');
    expect(sm.state).toBe('active');
  });

  it('transitions ACTIVE → DESTROYED', () => {
    const sm = new StateMachine(mockEmitter);
    sm.transition('loading');
    sm.transition('ready');
    sm.transition('active');
    sm.destroy();
    expect(sm.state).toBe('destroyed');
  });

  it('prevents invalid UNINITIALIZED → ACTIVE', () => {
    const sm = new StateMachine(mockEmitter);
    expect(() => sm.transition('active')).toThrow();
  });

  it('prevents transition from DESTROYED', () => {
    const sm = new StateMachine(mockEmitter);
    sm.transition('loading');
    sm.transition('ready');
    sm.transition('active');
    sm.destroy();
    expect(() => sm.transition('loading')).toThrow();
  });

  it('emits state:enter event', () => {
    let entered = null;
    mockEmitter._handlers = {};
    mockEmitter.on('state:enter:loading', () => { entered = 'loading'; });
    const sm = new StateMachine(mockEmitter);
    sm.transition('loading');
    expect(entered).toBe('loading');
  });
});
