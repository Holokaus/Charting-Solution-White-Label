declare module 'charting-solution-reconstructed' {
  // Core types
  export interface Bar {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    time: number;
  }

  export interface StudyInput {
    name: string;
    type: 'integer' | 'float' | 'select' | 'text' | 'bool';
    min?: number;
    max?: number;
    default?: any;
    options?: string[];
  }

  export interface StudyOutput {
    name: string;
  }

  export interface StudyDefinition {
    inputs: StudyInput[];
    outputs: string[];
  }

  // Chart
  export class Chart {
    constructor(container: HTMLElement, options?: any);
    setSymbol(symbol: string): void;
    getSymbol(): string;
    setInterval(interval: string): void;
    getInterval(): string;
    addStudy(study: any, options?: any): void;
    removeStudy(id: string): void;
    destroy(): void;
    state: string;
  }

  // Widget
  export class Widget {
    constructor(options: any);
    chart(): Chart | null;
    setSymbol(symbol: string): void;
    setInterval(interval: string): void;
    remove(): void;
  }

  // Price Scale
  export class PriceScale {
    constructor(options?: any);
    setMode(mode: number): void;
    getMode(): number;
    autoScale(): void;
  }

  export const PriceScaleMode: {
    Normal: 0;
    Logarithmic: 1;
    Percentage: 2;
    IndexedTo100: 3;
  };

  // Chart Style
  export const ChartStyle: {
    Candles: 0;
    HollowCandles: 1;
    HeikinAshi: 2;
    Bars: 3;
    Line: 4;
    Area: 5;
    Renko: 6;
    PnF: 7;
    Kagi: 8;
    LineBreak: 9;
  };

  // Crosshair Mode
  export const CrosshairMode: {
    None: 0;
    Vertical: 1;
    Horizontal: 2;
    Both: 3;
  };

  // Studies
  export class StudyRegistry {
    register(name: string, study: any): void;
    get(name: string): typeof BuiltinStudy | undefined;
    getNames(): string[];
  }

  export const studyRegistry: StudyRegistry;

  export class BuiltinStudy {
    static inputs: StudyInput[];
    static outputs: string[];
    constructor(inputs?: Record<string, any>);
    calculate(bars: Bar[]): any[];
  }

  export class MovingAverage extends BuiltinStudy {}
  export class RSI extends BuiltinStudy {}
  export class MACD extends BuiltinStudy {}
  export class BollingerBands extends BuiltinStudy {}
  export class Volume extends BuiltinStudy {}
  export class Stochastic extends BuiltinStudy {}
  export class CCI extends BuiltinStudy {}
  export class ATR extends BuiltinStudy {}
  export class OBV extends BuiltinStudy {}
  export class VWAP extends BuiltinStudy {}
  export class PivotPoints extends BuiltinStudy {}
  export class ParabolicSAR extends BuiltinStudy {}
  export class Ichimoku extends BuiltinStudy {}
  export class ADX extends BuiltinStudy {}
  export class Momentum extends BuiltinStudy {}
  export class WilliamsR extends BuiltinStudy {}
  export class UltimateOscillator extends BuiltinStudy {}
  export class MFI extends BuiltinStudy {}
  export class ChaikinOsc extends BuiltinStudy {}
  export class KeltnerChannels extends BuiltinStudy {}
  export class DonchianChannels extends BuiltinStudy {}
  export class SuperTrend extends BuiltinStudy {}
  export class ZigZag extends BuiltinStudy {}
  export class LinearRegression extends BuiltinStudy {}
  export class Correlation extends BuiltinStudy {}

  // Drawing Tools
  export class ToolRegistry {
    register(tool: any): void;
    get(name: string): any;
    getAll(): any[];
  }

  export const toolRegistry: ToolRegistry;

  // Datafeeds
  export interface IDatafeed {
    onReady(callback: (info: any) => void): void;
    resolveSymbol(symbolName: string, callback: (info: any) => void, errorCallback: (err: any) => void): void;
    getBars(symbolInfo: any, interval: string, callback: (bars: Bar[]) => void, errorCallback: (err: any) => void): void;
    subscribeBars(symbolInfo: any, interval: string, callback: (bar: Bar) => void): void;
    unsubscribeBars(): void;
  }

  export class RESTDatafeed implements IDatafeed {
    constructor(options?: any);
  }

  export class BinanceDatafeed extends RESTDatafeed {
    constructor(options?: any);
  }

  export class WebSocketDatafeed implements IDatafeed {
    constructor(url: string, options?: any);
  }

  // Alerts
  export interface Alert {
    id: string;
    type: 'price' | 'study' | 'drawing';
    condition: string;
    value: number;
    message?: string;
    onTrigger?: (alert: Alert) => void;
  }

  export class AlertSystem {
    constructor();
    addAlert(alert: Alert): string;
    removeAlert(id: string): boolean;
    getAlerts(): Alert[];
    checkAlerts(chart: any): void;
    clear(): void;
  }

  // Keyboard Shortcuts
  export class KeyboardShortcuts {
    constructor(chart: any, options?: Record<string, string>);
    register(shortcut: string, handler: () => void): void;
    unregister(shortcut: string): void;
    destroy(): void;
  }

  // Command History
  export class CommandHistory {
    constructor(maxSize?: number);
    execute(command: any): any;
    undo(): any;
    redo(): any;
    clear(): void;
    getUndoCount(): number;
    getRedoCount(): number;
  }

  // Screenshot
  export class Screenshot {
    static capture(element: HTMLElement | HTMLCanvasElement): string | null;
  }

  // Compare Symbol
  export class CompareSymbol {
    calculate(bars: Bar[], baseBars: Bar[]): any[];
  }

  // Session Breaks
  export class SessionBreaks {
    detect(bars: Bar[], sessionStartHour?: number): any[];
  }

  // Pine Script
  export class Parser {
    parse(source: string): any;
  }

  export class Transpiler {
    transpile(ast: any): string;
  }

  export class Runtime {
    sma(values: number[], length: number): number[];
    ema(values: number[], length: number): number[];
    rsi(values: number[], length: number): number[];
    macd(values: number[], fast: number, slow: number, signal: number): any[];
    stoch(high: number[], low: number[], close: number[], kPeriod: number, kSmooth: number, dPeriod: number): any[];
    highest(values: number[], length: number): number[];
    lowest(values: number[], length: number): number[];
    crossover(a: number, b: number): boolean;
    crossunder(a: number, b: number): boolean;
    na(value: any): boolean;
    nz(value: any, fallback?: number): any;
  }

  export class CustomStudy extends BuiltinStudy {
    constructor(inputs?: Record<string, any>);
    setInput(name: string, value: any): void;
  }

  // Performance
  export class WebGLRenderer {
    constructor(canvas: HTMLCanvasElement);
    init(): void;
    isSupported(): boolean;
    clear(r: number, g: number, b: number, a?: number): void;
    drawLine(vertices: number[], color: [number, number, number, number]): void;
    drawRect(vertices: number[], color: [number, number, number, number], fill?: boolean): void;
    resize(width: number, height: number): void;
    destroy(): void;
  }

  export class LODRenderer {
    constructor(canvasRenderer: any, webglRenderer: WebGLRenderer);
    setMode(mode: 'auto' | 'canvas' | 'webgl'): void;
    simplify(data: any[], threshold?: number): any[];
    destroy(): void;
  }

  export class VirtualScroll {
    constructor(options?: { totalItems?: number; itemHeight?: number; overscan?: number; viewportHeight?: number });
    scrollTo(position: number): void;
    getVisibleRange(): { start: number; end: number };
    getVisibleItems(data: any[]): any[];
    setTotalItems(n: number): void;
    setViewportHeight(h: number): void;
    destroy(): void;
  }

  // Enums
  export enum Resolution {
    S1 = '1S', S5 = '5S', S10 = '10S', S30 = '30S',
    M1 = '1', M5 = '5', M15 = '15', M30 = '30',
    H1 = '60', H2 = '120', H4 = '240', H12 = '720',
    D1 = '1D', W1 = '1W', MN1 = '1M'
  }

  export const version: string;
}
