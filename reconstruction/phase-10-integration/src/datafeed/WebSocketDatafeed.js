import { IDatafeed } from './IDatafeed.js';

export class WebSocketDatafeed extends IDatafeed {
  constructor(wsURL, reconnectInterval = 5000) {
    super();
    this.wsURL = wsURL;
    this.reconnectInterval = reconnectInterval;
    this.ws = null;
    this.subscribers = new Map();
    this.messageQueue = [];
    this.isConnected = false;
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsURL);

      this.ws.onopen = () => {
        this.isConnected = true;
        this._flushQueue();
        resolve();
      };

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        this._handleMessage(data);
      };

      this.ws.onclose = () => {
        this.isConnected = false;
        setTimeout(() => this.connect(), this.reconnectInterval);
      };

      this.ws.onerror = (error) => {
        reject(error);
      };
    });
  }

  _send(message) {
    if (this.isConnected) {
      this.ws.send(JSON.stringify(message));
    } else {
      this.messageQueue.push(message);
    }
  }

  _flushQueue() {
    while (this.messageQueue.length > 0) {
      const msg = this.messageQueue.shift();
      this.ws.send(JSON.stringify(msg));
    }
  }

  _handleMessage(data) {
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.isConnected = false;
  }
}
