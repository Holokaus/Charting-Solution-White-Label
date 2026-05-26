export class StateMachine {
  static STATES = Object.freeze({
    UNINITIALIZED: 'uninitialized',
    LOADING: 'loading',
    READY: 'ready',
    ACTIVE: 'active',
    DESTROYED: 'destroyed'
  });

  constructor(eventEmitter) {
    this._emitter = eventEmitter;
    this._state = StateMachine.STATES.UNINITIALIZED;
    this._transitions = {
      [StateMachine.STATES.UNINITIALIZED]: [StateMachine.STATES.LOADING],
      [StateMachine.STATES.LOADING]: [StateMachine.STATES.READY, StateMachine.STATES.DESTROYED],
      [StateMachine.STATES.READY]: [StateMachine.STATES.ACTIVE, StateMachine.STATES.DESTROYED],
      [StateMachine.STATES.ACTIVE]: [StateMachine.STATES.DESTROYED],
      [StateMachine.STATES.DESTROYED]: []
    };
  }

  transition(to) {
    const from = this._state;
    const valid = this._transitions[from];
    if (!valid || !valid.includes(to)) {
      throw new Error(`Invalid transition: ${from} → ${to}`);
    }
    this._emit('leave', from);
    this._state = to;
    this._emit('enter', to);
    return this._state;
  }

  destroy() {
    if (this._state !== StateMachine.STATES.DESTROYED) {
      this.transition(StateMachine.STATES.DESTROYED);
    }
    return this._state;
  }

  get state() {
    return this._state;
  }

  is(state) {
    return this._state === state;
  }

  canTransition(to) {
    const valid = this._transitions[this._state];
    return valid && valid.includes(to);
  }

  _emit(dir, state) {
    if (this._emitter && typeof this._emitter.emit === 'function') {
      this._emitter.emit(`state:${dir}:${state}`);
    }
  }
}
