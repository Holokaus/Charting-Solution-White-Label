import { StateMachine } from '../src/StateMachine.js';

let sm;
const events = [];

const emitter = {
  emit(event) {
    events.push(event);
  }
};

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

function reset() {
  events.length = 0;
}

// Initial state
sm = new StateMachine(emitter);
assert(sm.state === 'uninitialized', 'initial state is UNINITIALIZED');
assert(sm.is('uninitialized'), 'is() returns true for current state');
assert(!sm.is('loading'), 'is() returns false for other state');

// Valid transition: UNINITIALIZED → LOADING
reset();
sm.transition('loading');
assert(sm.state === 'loading', 'transition to LOADING works');
assert(events.includes('state:leave:uninitialized'), 'emits state:leave:uninitialized');
assert(events.includes('state:enter:loading'), 'emits state:enter:loading');

// Valid transition: LOADING → READY
reset();
sm.transition('ready');
assert(sm.state === 'ready', 'transition to READY works');

// Valid transition: READY → ACTIVE
reset();
sm.transition('active');
assert(sm.state === 'active', 'transition to ACTIVE works');

// Valid transition: ACTIVE → DESTROYED
reset();
sm.transition('destroyed');
assert(sm.state === 'destroyed', 'transition to DESTROYED works');
assert(sm.is('destroyed'), 'is(destroyed) returns true');

// Invalid: DESTROYED → any
sm = new StateMachine(emitter);
sm.transition('loading');
sm.transition('ready');
sm.transition('active');
sm.transition('destroyed');
let threw = false;
try {
  sm.transition('active');
} catch (e) {
  threw = true;
}
assert(threw, 'DESTROYED → ACTIVE throws');
assert(sm.state === 'destroyed', 'state remains destroyed after invalid transition');

// destroy() emergency cleanup
sm = new StateMachine(emitter);
sm.destroy();
assert(sm.state === 'destroyed', 'destroy() transitions to DESTROYED');
assert(!sm.canTransition('loading'), 'canTransition returns false for destroyed');

// canTransition()
sm = new StateMachine(emitter);
assert(sm.canTransition('loading'), 'canTransition(loading) from UNINITIALIZED');
assert(!sm.canTransition('ready'), 'canTransition(ready) from UNINITIALIZED is false');
assert(!sm.canTransition('active'), 'canTransition(active) from UNINITIALIZED is false');

console.log('StateMachine tests complete');
