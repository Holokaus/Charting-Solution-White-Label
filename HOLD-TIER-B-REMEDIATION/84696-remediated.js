/**
 * Module 84696 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 * @exports Clean semantic exports with proper variable names
 */

84696: (exports, module, require) => {
    "use strict";
    require.seriesBarFunction_d(module, {
      icons: () => seriesBarFunction_w
    });
    var modes, isValid = require(53573),
      value = require(34369),
      config = require(39267),
      seriesBarFunction_a = require(93544),
      seriesBarFunction_l = require(84959),
      seriesBarFunction_c = require(34487),
      handler = require(11890),
      seriesBarFunction_d = require(16911),
      seriesBarFunction_u = require(25191),
      _ = require(54190),
      seriesBarFunction_p = require(6862),
      seriesBarFunction_m = require(97874),
      seriesBarFunction_g = require(2872),
      seriesBarFunction_f = require(29453),
      seriesBarFunction_y = require(94839),
      seriesBarFunction_v = require(5845),
      S = require(1457),
      seriesBarFunction_b = require(93379);
    ! function(exports) {
      exports.ChartShowDataWindow = "Chart.ShowDataWindow", exports.ChartReset = "Chart.Reset", exports.ChartRemoveSelectedObject =
        "Chart.RemoveSelectedObject", exports.Settings = "Settings", exports.ChartHide = "Chart.Hide", exports.ChartSymbolInfo =
        "Chart.SymbolInfo", exports.ChartFinancials = "Chart.Financials", exports.ChartTechnicals = "Chart.Technicals", exports
        .ChartDetailsMetrics = "Chart.DetailsMetrics", exports.ChartSeasonals = "Chart.Seasonals", exports.ChartAnalysis =
        "Chart.Analysis", exports.ChartStockBonds = "Chart.StockBonds", exports.ChartForecast = "Chart.Forecast", exports.ChartOptions =
        "Chart.Options", exports.ChartEconomyIdicators = "Chart.EconomyIndicators", exports.AlertAdd = "Alert.Add", exports.AlertEdit =
        "Alert.Edit", exports.AlertRestart = "Alert.Restart", exports.AlertStop = "Alert.Stop", exports.AlertFiresDownload =
        "Alert.FiresDownload", exports.ClearAll = "Alert.Clear", exports.ChartVisualOrder = "Chart.VisualOrder", exports.ChartShowObject =
        "Chart.ShowObject", exports.ChartPriceScale = "Chart.PriceScale", exports.ChartMove = "Chart.Move", exports.ChartApplyIndicator =
        "Chart.ApplyIndicator", exports.ChartUnlockObject = "Chart.UnlockObject", exports.ChartLockObject = "Chart.LockObject", exports
        .ChartAnchorLineTool = "Chart.AnchorLineTool", exports.ChartInsertRowTable = "Chart.InsertRowTable", exports
        .ChartInsertColumnTable = "Chart.InsertColumnTable", exports.ChartRemoveRowTable = "Chart.RemoveRowTable", exports
        .ChartRemoveColumnTable = "Chart.RemoveColumnTable", exports.ChartClone = "Chart.Clone", exports.ChartAddHorzLine =
        "Chart.AddHorzLine", exports.WatchlistAddSymbol = "Watchlist.AddSymbol", exports.WatchlistCreateNew = "Watchlist.CreateNew",
        exports.TextNoteAdd = "TextNote.Add", exports.TradingSell = "Trading.Sell", exports.TradingBuy = "Trading.Buy", exports
        .TradingAddOrder = "Trading.AddOrder", exports.ObjectsTreeCreateGroup = "ObjectsTree.CreateGroup", exports
        .ObjectsTreeRenameItem = "ObjectsTree.RenameItem", exports.IndicatorAddToFavorites = "Indicator.AddToFavorites"
    }(modes || (modes = {}));
    const seriesBarFunction_w = new Map([
      ["Chart.Reset", config],
      ["Chart.RemoveSelectedObject", seriesBarFunction_a],
      ["Settings", value],
      ["Chart.Hide", seriesBarFunction_l],
      ["Chart.SymbolInfo", seriesBarFunction_c],
      ["Chart.VisualOrder", handler],
      ["Chart.ShowObject", seriesBarFunction_d],
      ["Chart.PriceScale", seriesBarFunction_u],
      ["Chart.Move", _],
      ["Chart.ApplyIndicator", seriesBarFunction_p],
      ["Chart.UnlockObject", seriesBarFunction_m],
      ["Chart.LockObject", seriesBarFunction_g],
      ["Chart.AnchorLineTool", seriesBarFunction_f],
      ["Chart.InsertRowTable", seriesBarFunction_y],
      ["Chart.InsertColumnTable", seriesBarFunction_v],
      ["Chart.RemoveRowTable", seriesBarFunction_a],
      ["Chart.RemoveColumnTable", seriesBarFunction_a],
      ["Chart.Clone", S],
      ["Chart.AddHorzLine", seriesBarFunction_b],
      ["Indicator.AddToFavorites", isValid]
    ])