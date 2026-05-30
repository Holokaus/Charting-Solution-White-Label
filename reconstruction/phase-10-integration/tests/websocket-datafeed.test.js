import { describe, it, expect, vi } from 'vitest';
import { WebSocketDatafeed } from '../src/datafeed/WebSocketDatafeed.js';

global.WebSocket = vi.fn(() => ({
  send: vi.fn(),
  close: vi.fn(),
  onopen: null,
  onmessage: null,
  onclose: null,
  onerror: null
}));

describe('WebSocketDatafeed', () => {
  it('connects to WebSocket', async () => {
    const df = new WebSocketDatafeed('wss://test.com');
    const connectPromise = df.connect();
    df.ws.onopen();
    await connectPromise;
    expect(df.isConnected).toBe(true);
  });

  it('queues messages before connection', () => {
    const df = new WebSocketDatafeed('wss://test.com');
    df._send({ type: 'subscribe' });
    expect(df.messageQueue.length).toBe(1);
  });

  it('flushes queue on connect', () => {
    const df = new WebSocketDatafeed('wss://test.com');
    df._send({ type: 'subscribe' });
    df.ws = { send: vi.fn() };
    df.isConnected = true;
    df._flushQueue();
    expect(df.ws.send).toHaveBeenCalled();
  });
});
