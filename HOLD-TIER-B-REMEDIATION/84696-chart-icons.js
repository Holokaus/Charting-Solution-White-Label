/**
 * ============================================================================
 * TRADINGVIEW MODULE 84696 - CHART ICONS ENUMERATION
 * ============================================================================
 *
 * Purpose: Icon enumeration for chart UI elements and actions
 *
 * Size: 2.2 KB
 *
 * Icon Categories:
 *   - Chart operations: Reset, Remove, Hide, Show, Move, Clone, etc.
 *   - Settings and configuration: Settings, Options, etc.
 *   - Trading actions: Buy, Sell, Add Order, etc.
 *   - Alert management: Add, Edit, Restart, Stop, etc.
 *   - Watchlist and notes: Add Symbol, Create New, Add Text, etc.
 *   - Object management: Create Group, Rename Item, etc.
 *
 * Dependencies:
 *   - Multiple icon modules for UI components
 *
 * Exports:
 *   - icons: Map of icon names to icon components
 *
 * @module 84696
 * @category UI System
 * @subcategory Icons
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    icons: () => icons
  });

  // Icon component imports
  const ChartShowDataWindowIcon = moduleRequire(53573),
    ChartResetIcon = moduleRequire(34369),
    ChartRemoveSelectedObjectIcon = moduleRequire(39267),
    SettingsIcon = moduleRequire(93544),
    ChartHideIcon = moduleRequire(84959),
    ChartSymbolInfoIcon = moduleRequire(11890),
    ChartFinancialsIcon = moduleRequire(16911),
    ChartTechnicalsIcon = moduleRequire(5845),
    ChartDetailsMetricsIcon = moduleRequire(29453),
    ChartSeasonalsIcon = moduleRequire(94839),
    ChartAnalysisIcon = moduleRequire(5845),
    ChartStockBondsIcon = moduleRequire(93379),
    ChartForecastIcon = moduleRequire(25191),
    ChartOptionsIcon = moduleRequire(1457),
    ChartEconomyIndicatorsIcon = moduleRequire(93379),
    AlertAddIcon = moduleRequire(54190),
    AlertEditIcon = moduleRequire(6862),
    AlertRestartIcon = moduleRequire(6178),
    AlertStopIcon = moduleRequire(6376),
    AlertFiresDownloadIcon = moduleRequire(7777),
    ClearAllIcon = moduleRequire(2227),
    ChartVisualOrderIcon = moduleRequire(3179),
    ChartShowObjectIcon = moduleRequire(6193),
    ChartPriceScaleIcon = moduleRequire(2306),
    ChartMoveIcon = moduleRequire(3359),
    ChartApplyIndicatorIcon = moduleRequire(3425),
    ChartUnlockObjectIcon = moduleRequire(8260),
    ChartLockObjectIcon = moduleRequire(1979),
    ChartAnchorLineToolIcon = moduleRequire(7780),
    ChartInsertRowTableIcon = moduleRequire(7827),
    ChartInsertColumnTableIcon = moduleRequire(8220),
    ChartRemoveRowTableIcon = moduleRequire(9590),
    ChartRemoveColumnTableIcon = moduleRequire(1667),
    ChartCloneIcon = moduleRequire(9836),
    ChartAddHorzLineIcon = moduleRequire(3290),
    WatchlistAddSymbolIcon = moduleRequire(6376),
    WatchlistCreateNewIcon = moduleRequire(1890),
    TextNoteAddIcon = moduleRequire(6193),
    TradingSellIcon = moduleRequire(6376),
    TradingBuyIcon = moduleRequire(1890),
    TradingAddOrderIcon = moduleRequire(6376),
    ObjectsTreeCreateGroupIcon = moduleRequire(1890),
    ObjectsTreeRenameItemIcon = moduleRequire(6376),
    IndicatorAddToFavoritesIcon = moduleRequire(1890);

  // Icon name enumeration
  !function(IconNames) {
    IconNames.ChartShowDataWindow = "Chart.ShowDataWindow";
    IconNames.ChartReset = "Chart.Reset";
    IconNames.ChartRemoveSelectedObject = "Chart.RemoveSelectedObject";
    IconNames.Settings = "Settings";
    IconNames.ChartHide = "Chart.Hide";
    IconNames.ChartSymbolInfo = "Chart.SymbolInfo";
    IconNames.ChartFinancials = "Chart.Financials";
    IconNames.ChartTechnicals = "Chart.Technicals";
    IconNames.ChartDetailsMetrics = "Chart.DetailsMetrics";
    IconNames.ChartSeasonals = "Chart.Seasonals";
    IconNames.ChartAnalysis = "Chart.Analysis";
    IconNames.ChartStockBonds = "Chart.StockBonds";
    IconNames.ChartForecast = "Chart.Forecast";
    IconNames.ChartOptions = "Chart.Options";
    IconNames.ChartEconomyIndicators = "Chart.EconomyIndicators";
    IconNames.AlertAdd = "Alert.Add";
    IconNames.AlertEdit = "Alert.Edit";
    IconNames.AlertRestart = "Alert.Restart";
    IconNames.AlertStop = "Alert.Stop";
    IconNames.AlertFiresDownload = "Alert.FiresDownload";
    IconNames.ClearAll = "Alert.Clear";
    IconNames.ChartVisualOrder = "Chart.VisualOrder";
    IconNames.ChartShowObject = "Chart.ShowObject";
    IconNames.ChartPriceScale = "Chart.PriceScale";
    IconNames.ChartMove = "Chart.Move";
    IconNames.ChartApplyIndicator = "Chart.ApplyIndicator";
    IconNames.ChartUnlockObject = "Chart.UnlockObject";
    IconNames.ChartLockObject = "Chart.LockObject";
    IconNames.ChartAnchorLineTool = "Chart.AnchorLineTool";
    IconNames.ChartInsertRowTable = "Chart.InsertRowTable";
    IconNames.ChartInsertColumnTable = "Chart.InsertColumnTable";
    IconNames.ChartRemoveRowTable = "Chart.RemoveRowTable";
    IconNames.ChartRemoveColumnTable = "Chart.RemoveColumnTable";
    IconNames.ChartClone = "Chart.Clone";
    IconNames.ChartAddHorzLine = "Chart.AddHorzLine";
    IconNames.WatchlistAddSymbol = "Watchlist.AddSymbol";
    IconNames.WatchlistCreateNew = "Watchlist.CreateNew";
    IconNames.TextNoteAdd = "TextNote.Add";
    IconNames.TradingSell = "Trading.Sell";
    IconNames.TradingBuy = "Trading.Buy";
    IconNames.TradingAddOrder = "Trading.AddOrder";
    IconNames.ObjectsTreeCreateGroup = "ObjectsTree.CreateGroup";
    IconNames.ObjectsTreeRenameItem = "ObjectsTree.RenameItem";
    IconNames.IndicatorAddToFavorites = "Indicator.AddToFavorites";
  }(IconNames || (IconNames = {}));

  // Icon mapping
  const icons = new Map([
    ["Chart.Reset", ChartResetIcon],
    ["Chart.RemoveSelectedObject", ChartRemoveSelectedObjectIcon],
    ["Settings", SettingsIcon],
    ["Chart.Hide", ChartHideIcon],
    ["Chart.SymbolInfo", ChartSymbolInfoIcon],
    ["Chart.VisualOrder", ChartVisualOrderIcon],
    ["Chart.ShowObject", ChartShowObjectIcon],
    ["Chart.PriceScale", ChartPriceScaleIcon],
    ["Chart.Move", ChartMoveIcon],
    ["Chart.ApplyIndicator", ChartApplyIndicatorIcon],
    ["Chart.UnlockObject", ChartUnlockObjectIcon],
    ["Chart.LockObject", ChartLockObjectIcon],
    ["Chart.AnchorLineTool", ChartAnchorLineToolIcon],
    ["Chart.InsertRowTable", ChartInsertRowTableIcon],
    ["Chart.InsertColumnTable", ChartInsertColumnTableIcon],
    ["Chart.RemoveRowTable", ChartRemoveRowTableIcon],
    ["Chart.RemoveColumnTable", ChartRemoveColumnTableIcon],
    ["Chart.Clone", ChartCloneIcon],
    ["Chart.AddHorzLine", ChartAddHorzLineIcon],
    ["Indicator.AddToFavorites", IndicatorAddToFavoritesIcon]
  ]);
}
