import { MessageBridge, MESSAGE_TYPES } from '../src/MessageBridge.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

// MESSAGE_TYPES constants
assert(MESSAGE_TYPES.WIDGET_INIT === 'widget:init', 'MESSAGE_TYPES.WIDGET_INIT');
assert(MESSAGE_TYPES.WIDGET_READY === 'widget:ready', 'MESSAGE_TYPES.WIDGET_READY');
assert(MESSAGE_TYPES.CHART_SET_SYMBOL === 'chart:setSymbol', 'MESSAGE_TYPES.CHART_SET_SYMBOL');
assert(MESSAGE_TYPES.CHART_UPDATE === 'chart:update', 'MESSAGE_TYPES.CHART_UPDATE');
assert(MESSAGE_TYPES.CHART_RESIZE === 'chart:resize', 'MESSAGE_TYPES.CHART_RESIZE');
assert(MESSAGE_TYPES.DRAWING_ADD === 'drawing:add', 'MESSAGE_TYPES.DRAWING_ADD');
assert(MESSAGE_TYPES.DRAWING_REMOVE === 'drawing:remove', 'MESSAGE_TYPES.DRAWING_REMOVE');
assert(MESSAGE_TYPES.STUDY_ADD === 'study:add', 'MESSAGE_TYPES.STUDY_ADD');
assert(MESSAGE_TYPES.STUDY_REMOVE === 'study:remove', 'MESSAGE_TYPES.STUDY_REMOVE');
assert(MESSAGE_TYPES.THEME_CHANGE === 'theme:change', 'MESSAGE_TYPES.THEME_CHANGE');
assert(MESSAGE_TYPES.LAYOUT_SAVE === 'layout:save', 'MESSAGE_TYPES.LAYOUT_SAVE');
assert(MESSAGE_TYPES.LAYOUT_LOAD === 'layout:load', 'MESSAGE_TYPES.LAYOUT_LOAD');

// Mock window for testing
let postedMessages = [];
const fakeWindow = {
  postMessage(msg, origin) {
    postedMessages.push({ msg, origin });
  }
};

// on() handler registration
const bridge = new MessageBridge(fakeWindow, '*');
let handledType = null;
let handledPayload = null;
bridge.on('test:event', (payload) => {
  handledType = 'test:event';
  handledPayload = payload;
});

// Simulate incoming message
window.dispatchEvent(new MessageEvent('message', {
  data: { type: 'test:event', payload: { value: 42 }, id: null }
}));
assert(handledType === 'test:event', 'on() handler fires for registered type');
assert(handledPayload.value === 42, 'handler receives payload');

// off() removes handler
bridge.off('test:event');
handledType = null;
window.dispatchEvent(new MessageEvent('message', {
  data: { type: 'test:event', payload: { value: 99 }, id: null }
}));
assert(handledType === null, 'off() removes handler');

// send() posts message
postedMessages = [];
bridge.send('chart:setSymbol', { symbol: 'AAPL', interval: '1D' });
assert(postedMessages.length === 1, 'send() posts one message');
assert(postedMessages[0].msg.type === 'chart:setSymbol', 'postMessage contains correct type');
assert(postedMessages[0].msg.payload.symbol === 'AAPL', 'postMessage contains correct payload');
assert(postedMessages[0].msg.id, 'postMessage has UUID id');
assert(postedMessages[0].msg.timestamp, 'postMessage has timestamp');

// destroy() cleans up
bridge.destroy();
postedMessages = [];
let destroyedRejected = false;
bridge.send('test:after-destroy', {}).catch(() => { destroyedRejected = true; });
// After destroy, listeners removed — no more processing

console.log('MessageBridge tests complete');
