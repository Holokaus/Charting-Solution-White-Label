export class AlertSystem {
  constructor() {
    this._alerts = [];
    this._idCounter = 0;
  }

  addPriceAlert(symbol, condition, price, message = '') {
    const alert = {
      id: ++this._idCounter,
      type: 'price',
      symbol,
      condition,
      price,
      message,
      triggered: false,
      createdAt: Date.now()
    };
    this._alerts.push(alert);
    return alert.id;
  }

  addStudyAlert(studyName, condition, value, message = '') {
    const alert = {
      id: ++this._idCounter,
      type: 'study',
      studyName,
      condition,
      value,
      message,
      triggered: false,
      createdAt: Date.now()
    };
    this._alerts.push(alert);
    return alert.id;
  }

  addDrawingAlert(toolName, condition, message = '') {
    const alert = {
      id: ++this._idCounter,
      type: 'drawing',
      toolName,
      condition,
      message,
      triggered: false,
      createdAt: Date.now()
    };
    this._alerts.push(alert);
    return alert.id;
  }

  removeAlert(id) {
    const idx = this._alerts.findIndex(a => a.id === id);
    if (idx !== -1) {
      this._alerts.splice(idx, 1);
      return true;
    }
    return false;
  }

  getAlerts() {
    return [...this._alerts];
  }

  checkPrice(currentPrice, symbol) {
    const fired = [];
    for (const alert of this._alerts) {
      if (alert.triggered || alert.type !== 'price' || alert.symbol !== symbol) continue;
      let hit = false;
      if (alert.condition === 'crosses_above' && currentPrice > alert.price) hit = true;
      if (alert.condition === 'crosses_below' && currentPrice < alert.price) hit = true;
      if (hit) {
        alert.triggered = true;
        fired.push(alert);
      }
    }
    return fired;
  }

  checkStudy(value, studyName) {
    const fired = [];
    for (const alert of this._alerts) {
      if (alert.triggered || alert.type !== 'study' || alert.studyName !== studyName) continue;
      let hit = false;
      if (alert.condition === 'overbought' && value > alert.value) hit = true;
      if (alert.condition === 'oversold' && value < alert.value) hit = true;
      if (hit) {
        alert.triggered = true;
        fired.push(alert);
      }
    }
    return fired;
  }

  resetAlert(id) {
    const alert = this._alerts.find(a => a.id === id);
    if (alert) { alert.triggered = false; return true; }
    return false;
  }
}
