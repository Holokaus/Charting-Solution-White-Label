import { describe, it, expect } from 'vitest';
import { AlertSystem } from '../src/alerts/AlertSystem.js';

describe('AlertSystem', () => {
  it('creates and fires price alerts', () => {
    const alerts = new AlertSystem();
    alerts.addPriceAlert('AAPL', 'crosses_above', 150);
    const fired = alerts.checkPrice(155, 'AAPL');
    expect(fired.length).toBe(1);
    expect(fired[0].condition).toBe('crosses_above');
  });

  it('does not fire if condition not met', () => {
    const alerts = new AlertSystem();
    alerts.addPriceAlert('AAPL', 'crosses_above', 150);
    const fired = alerts.checkPrice(140, 'AAPL');
    expect(fired.length).toBe(0);
  });

  it('does not fire triggered alerts twice', () => {
    const alerts = new AlertSystem();
    alerts.addPriceAlert('AAPL', 'crosses_above', 150);
    expect(alerts.checkPrice(155, 'AAPL').length).toBe(1);
    expect(alerts.checkPrice(160, 'AAPL').length).toBe(0);
  });

  it('fires crosses_below alert', () => {
    const alerts = new AlertSystem();
    alerts.addPriceAlert('AAPL', 'crosses_below', 150);
    const fired = alerts.checkPrice(145, 'AAPL');
    expect(fired.length).toBe(1);
  });

  it('resets alert and allows retrigger', () => {
    const alerts = new AlertSystem();
    const id = alerts.addPriceAlert('AAPL', 'crosses_above', 150);
    alerts.checkPrice(155, 'AAPL');
    alerts.resetAlert(id);
    expect(alerts.checkPrice(160, 'AAPL').length).toBe(1);
  });

  it('creates and fires study alerts', () => {
    const alerts = new AlertSystem();
    alerts.addStudyAlert('RSI', 'overbought', 70);
    const fired = alerts.checkStudy(75, 'RSI');
    expect(fired.length).toBe(1);
  });

  it('fires oversold study alert', () => {
    const alerts = new AlertSystem();
    alerts.addStudyAlert('RSI', 'oversold', 30);
    const fired = alerts.checkStudy(25, 'RSI');
    expect(fired.length).toBe(1);
  });

  it('removes alert', () => {
    const alerts = new AlertSystem();
    const id = alerts.addPriceAlert('AAPL', 'crosses_above', 150);
    expect(alerts.removeAlert(id)).toBe(true);
    expect(alerts.getAlerts().length).toBe(0);
  });

  it('creates drawing alert', () => {
    const alerts = new AlertSystem();
    const id = alerts.addDrawingAlert('TrendLine', 'touched');
    expect(id).toBeGreaterThan(0);
  });
});
