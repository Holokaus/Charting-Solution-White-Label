declare module 'charting-solution-reconstructed' {
  // =========== Core Types ===========
  export interface Bar {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume?: number;
  }

  export interface StudyInputDef {
    name: string;
    type: 'integer' | 'float' | 'select' | 'text' | 'bool';
    min?: number;
    max?: number;
    default?: string | number | boolean;
    options?: string[];
  }

  export interface StudyOutputDef {
    name: string;
  }

  // =========== Enums ===========
  export const enum ChartStyle {
    CANDLES = 0,
    HOLLOW_CANDLES = 1,
    HEIKIN_ASHI = 2,
    BARS = 3,
    LINE = 4,
    AREA = 5,
    RENKO = 6,
    PNF = 7,
    KAGI = 8,
    LINE_BREAK = 9,
  }

  export const enum PriceScaleMode {
    NORMAL = 0,
    LOG = 1,
    PERCENTAGE = 2,
    INDEXED_TO_100 = 3,
  }

  export const enum CrosshairMode {
    NONE = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    BOTH = 3,
  }

  // =========== Widget ===========
  export interface WidgetOptions {
    container: string | HTMLElement;
    symbol?: string;
    interval?: string;
    datafeed?: IDatafeed;
    theme?: 'light' | 'dark' | 'custom';
    studyRegistry?: StudyRegistry;
    toolRegistry?: ToolRegistry;
    width?: number;
    height?: number;
    library_path?: string;
    autosize?: boolean;
    timezone?: string;
    debug?: boolean;
    locale?: string;
    disabled_features?: string[];
    enabled_features?: string[];
    overrides?: Record<string, unknown>;
    studies_overrides?: Record<string, unknown>;
    custom_css_url?: string;
    loading_screen?: { backgroundColor?: string; foregroundColor?: string };
    symbol_watermark?: string;
  }

  export class Widget {
    constructor(options: WidgetOptions);
    chart(index?: number): Chart | null;
    setSymbol(symbol: string, interval?: string): void;
    setInterval(interval: string): void;
    remove(): void;
    changeTheme(theme: 'light' | 'dark' | 'custom'): void;
    addStudy(studyName: string, inputs?: Record<string, unknown>): BuiltinStudy | null;
    onChartReady(callback: () => void): void;
    onSymbolChanged(callback: () => void): void;
    onIntervalChanged(callback: () => void): void;
    readonly state: string;
  }

  // =========== Chart ===========
  export class Chart {
    constructor(container: HTMLElement, symbol: string, interval: string, datafeed: IDatafeed | null);
    setSymbol(symbol: string): void;
    getSymbol(): string;
    setInterval(interval: string): void;
    getInterval(): string;
    setChartStyle(style: ChartStyle): void;
    addStudy(study: BuiltinStudy): void;
    setData(bars: Bar[]): void;
    addBar(bar: Bar): void;
    destroy(): void;
    readonly state: string;
  }

  // =========== Price Scale ===========
  export class PriceScale {
    constructor(height: number, mode?: PriceScaleMode);
    setMode(mode: PriceScaleMode): void;
    getMode(): PriceScaleMode;
    autoScale(bars: Bar[]): void;
    priceToY(price: number): number | null;
    yToPrice(y: number): number | null;
  }

  export const PriceScaleMode: {
    NORMAL: 0;
    LOG: 1;
    PERCENTAGE: 2;
    INDEXED_TO_100: 3;
  };

  // =========== Time Scale ===========
  export class TimeScale {
    constructor(width: number, barSpacing?: number);
    timeToX(time: number): number | null;
    xToTime(x: number): number | null;
    zoom(factor: number, centerX: number): void;
    formatLabel(time: number): string;
  }

  // =========== Crosshair ===========
  export class Crosshair {
    move(x: number, y: number): void;
    hide(): void;
    render(ctx: CanvasRenderingContext2D, viewport: Viewport, priceScale: PriceScale, timeScale: TimeScale, options?: Record<string, unknown>): void;
  }

  // =========== Viewport ===========
  export class Viewport {
    constructor(width: number, height: number);
    timeToX(time: number): number | null;
    xToTime(x: number): number | null;
    priceToY(price: number, priceScale: PriceScale): number;
    getVisibleBars<T extends { time: number }>(data: T[]): T[];
    fit(bars: Bar[]): void;
    zoom(factor: number, cx: number): void;
    readonly width: number;
    readonly height: number;
    readonly barSpacing: number;
  }

  // =========== Chart Style Constants ===========
  export const ChartStyle: {
    CANDLES: 0;
    HOLLOW_CANDLES: 1;
    HEIKIN_ASHI: 2;
    BARS: 3;
    LINE: 4;
    AREA: 5;
    RENKO: 6;
    PNF: 7;
    KAGI: 8;
    LINE_BREAK: 9;
  };

  export const CrosshairMode: {
    NONE: 0;
    VERTICAL: 1;
    HORIZONTAL: 2;
    BOTH: 3;
  };

  // =========== Studies ===========
  export interface StudyDefinition {
    inputs: StudyInputDef[];
    outputs: string[];
  }

  export class BuiltinStudy implements StudyDefinition {
    static inputs: StudyInputDef[];
    static outputs: string[];
    constructor(inputs?: Record<string, unknown>);
    calculate(bars: Bar[]): Record<string, number | null>[];
  }

  export class StudyRegistry {
    register(name: string, studyClass: typeof BuiltinStudy): void;
    create(name: string, inputs?: Record<string, unknown>): BuiltinStudy;
    getNames(): string[];
    getInputs(name: string): StudyInputDef[] | null;
    getOutputs(name: string): string[] | null;
  }

  export const studyRegistry: StudyRegistry;

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

  // =========== Drawing Tools ===========
  export interface ToolPoint {
    time: number;
    price: number;
  }

  export interface ToolStyle {
    color?: string;
    width?: number;
    [key: string]: unknown;
  }

  export abstract class BaseDrawingTool {
    name: string;
    icon: string;
    cursor: string;
    maxPoints: number;
    points: ToolPoint[];
    style: ToolStyle;
    render(ctx: CanvasRenderingContext2D, viewport: Viewport, priceScale: PriceScale, timeScale: TimeScale, options?: Record<string, unknown>): void;
    hitTest(mouseX: number, mouseY: number, viewport: Viewport, priceScale: PriceScale, timeScale: TimeScale, threshold?: number): boolean;
  }

  export class ToolRegistry {
    register(name: string, toolClass: typeof BaseDrawingTool): void;
    create(name: string, options?: { points?: ToolPoint[]; style?: ToolStyle }): BaseDrawingTool;
    getNames(): string[];
    getClass(name: string): typeof BaseDrawingTool | null;
  }

  export const toolRegistry: ToolRegistry;

  // =========== Datafeeds ===========
  export interface SymbolInfo {
    name: string;
    ticker?: string;
    exchange?: string;
    type?: string;
    session?: string;
    pricescale?: number;
    minmov?: number;
    description?: string;
    timezone?: string;
    has_intraday?: boolean;
    has_seconds?: boolean;
    has_daily?: boolean;
    has_weekly_and_monthly?: boolean;
    supported_resolutions?: string[];
  }

  export interface DatafeedConfig {
    supports_search?: boolean;
    supports_group_request?: boolean;
    supported_resolutions?: string[];
  }

  export interface IDatafeed {
    onReady(callback: (config: DatafeedConfig) => void): void;
    resolveSymbol(
      symbolName: string,
      onResolve: (symbolInfo: SymbolInfo) => void,
      onError: (error: string) => void
    ): void;
    getBars(
      symbolInfo: SymbolInfo,
      resolution: string,
      from: number,
      to: number,
      onHistoryCallback: (bars: Bar[], meta: { noData?: boolean; nextTime?: number }) => void,
      onError: (error: string) => void,
      firstDataRequest?: boolean
    ): void;
    subscribeBars(
      symbolInfo: SymbolInfo,
      resolution: string,
      onRealtimeCallback: (bar: Bar) => void,
      subscriberUID: string,
      onResetCacheNeededCallback?: () => void
    ): () => void;
    unsubscribeBars(subscriberUID: string): void;
    searchSymbols(
      userInput: string,
      exchange: string,
      symbolType: string,
      onResult: (items: SymbolInfo[]) => void,
      onError: (error: string) => void
    ): void;
  }

  export class RESTDatafeed implements IDatafeed {
    constructor(baseURL?: string, options?: Record<string, unknown>);
    onReady(callback: (config: DatafeedConfig) => void): void;
    resolveSymbol(symbolName: string, onResolve: (info: SymbolInfo) => void, onError: (err: string) => void): void;
    getBars(symbolInfo: SymbolInfo, resolution: string, from: number, to: number, onHistoryCallback: (bars: Bar[], meta: { noData?: boolean; nextTime?: number }) => void, onError: (err: string) => void, firstDataRequest?: boolean): void;
    subscribeBars(symbolInfo: SymbolInfo, resolution: string, onRealtimeCallback: (bar: Bar) => void, subscriberUID: string, onResetCacheNeededCallback?: () => void): () => void;
    unsubscribeBars(subscriberUID: string): void;
    searchSymbols(userInput: string, exchange: string, symbolType: string, onResult: (items: SymbolInfo[]) => void, onError: (err: string) => void): void;
  }

  export class BinanceDatafeed extends RESTDatafeed {
    constructor(options?: Record<string, unknown>);
    generateBars(symbol: string, interval: string, count?: number): Bar[];
  }

  export class WebSocketDatafeed implements IDatafeed {
    constructor(url: string, options?: Record<string, unknown>);
    onReady(callback: (config: DatafeedConfig) => void): void;
    resolveSymbol(symbolName: string, onResolve: (info: SymbolInfo) => void, onError: (err: string) => void): void;
    getBars(symbolInfo: SymbolInfo, resolution: string, from: number, to: number, onHistoryCallback: (bars: Bar[], meta: { noData?: boolean; nextTime?: number }) => void, onError: (err: string) => void, firstDataRequest?: boolean): void;
    subscribeBars(symbolInfo: SymbolInfo, resolution: string, onRealtimeCallback: (bar: Bar) => void, subscriberUID: string, onResetCacheNeededCallback?: () => void): () => void;
    unsubscribeBars(subscriberUID: string): void;
    searchSymbols(userInput: string, exchange: string, symbolType: string, onResult: (items: SymbolInfo[]) => void, onError: (err: string) => void): void;
  }

  // =========== Alerts ===========
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
    addAlert(alert: Omit<Alert, 'id'>): string;
    removeAlert(id: string): boolean;
    getAlerts(): Alert[];
    checkAlerts(chart: Chart): Alert[];
    clear(): void;
  }

  // =========== Keyboard Shortcuts ===========
  export class KeyboardShortcuts {
    constructor(widget: Widget);
    register(keyCombo: string, action: () => void): void;
    on(action: string, handler: () => void): void;
    destroy(): void;
    setEnabled(enabled: boolean): void;
  }

  // =========== Command History ===========
  export interface Command {
    execute(): unknown;
    undo(): unknown;
  }

  export class CommandHistory {
    constructor(maxSize?: number);
    execute(command: Command): unknown;
    undo(): Command | null;
    redo(): Command | null;
    clear(): void;
    getUndoCount(): number;
    getRedoCount(): number;
  }

  // =========== Screenshot ===========
  export class Screenshot {
    constructor(canvas: HTMLCanvasElement | null);
    toDataURL(type?: string, quality?: number): string | null;
    download(filename?: string, type?: string, quality?: number): void;
  }

  export class ScreenshotExport {
    static exportPNG(canvas: HTMLCanvasElement, filename?: string): void;
    static exportJPG(canvas: HTMLCanvasElement, quality?: number, filename?: string): void;
    static toDataURL(canvas: HTMLCanvasElement, type?: string, quality?: number): string;
  }

  // =========== Compare Symbol ===========
  export class CompareSymbol {
    constructor(chart: Chart | null, symbol: string, datafeed: IDatafeed | null);
    bars: Bar[];
    color: string;
    load(resolution: string, from: number, to: number): Promise<void>;
    calculate(mainBars: Bar[]): { time: number; value: number }[];
    setVisible(visible: boolean): void;
    render(ctx: CanvasRenderingContext2D, viewport: Viewport, priceScale: PriceScale, timeScale: TimeScale, options?: Record<string, unknown>): void;
  }

  // =========== Session Breaks ===========
  export interface SessionBreak {
    start: number;
    end: number;
    isWeekend: boolean;
  }

  export class SessionBreaks {
    constructor(options?: { color?: string; weekendColor?: string; gapThreshold?: number });
    detect(bars: Bar[]): SessionBreak[];
    render(ctx: CanvasRenderingContext2D, viewport: Viewport, priceScale: PriceScale, timeScale: TimeScale, options?: Record<string, unknown>): void;
    setBars(bars: Bar[]): void;
  }

  // =========== Pine Script ===========
  export interface PineAST {
    type: string;
    body?: PineAST[];
    [key: string]: unknown;
  }

  export class PineSyntaxError extends Error {
    constructor(message: string, line: number, col: number);
    line: number;
    col: number;
  }

  export class Parser {
    parse(source: string): PineAST;
  }

  export class Transpiler {
    transpile(ast: PineAST): string;
  }

  export class Runtime {
    sma(values: number[], length: number): number[];
    ema(values: number[], length: number): number[];
    wma(values: number[], length: number): number[];
    rsi(values: number[], length: number): number[];
    macd(values: number[], fast: number, slow: number, signal: number): { macd: number; signal: number; histogram: number }[];
    stoch(high: number[], low: number[], close: number[], kPeriod: number, kSmooth: number, dPeriod: number): { k: number; d: number }[];
    highest(values: number[], length: number): number[];
    lowest(values: number[], length: number): number[];
    crossover(a: number, b: number): boolean;
    crossunder(a: number, b: number): boolean;
    na(value: unknown): boolean;
    nz(value: unknown, fallback?: number): number;
    cum(value: number): number;
    change(values: number[], length?: number): number[];
    rising(values: number[], length: number): boolean[];
    falling(values: number[], length: number): boolean[];
    valuewhen(condition: boolean[], source: number[], occurrence?: number): number;
  }

  export class CustomStudy extends BuiltinStudy {
    constructor(inputs?: Record<string, unknown>);
    setInput(name: string, value: unknown): void;
  }

  // =========== Performance ===========
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
    constructor(canvasRenderer: { render(): boolean }, webglRenderer: WebGLRenderer);
    setMode(mode: 'auto' | 'canvas' | 'webgl'): void;
    getLOD(): number;
    updateMetrics(dataPointCount: number, visibleRange: number): void;
    render(): boolean;
    destroy(): void;
  }

  export class VirtualScroll {
    constructor(options?: VirtualScrollOptions);
    scrollTo(position: number): void;
    getVisibleRange(): { start: number; end: number };
    getVisibleItems<T>(data: T[]): T[];
    setTotalItems(n: number): void;
    setViewportHeight(h: number): void;
    destroy(): void;
  }

  export interface VirtualScrollOptions {
    totalItems?: number;
    itemHeight?: number;
    overscan?: number;
    viewportHeight?: number;
  }

  // =========== Resolutions ===========
  export enum Resolution {
    S1 = '1S', S5 = '5S', S10 = '10S', S30 = '30S',
    M1 = '1', M5 = '5', M15 = '15', M30 = '30',
    H1 = '60', H2 = '120', H4 = '240', H12 = '720',
    D1 = '1D', W1 = '1W', MN1 = '1M'
  }

  // =========== Version ===========
  export const version: string;
}
