# TradingView Charting Library - API Documentation

Generated: 2026-05-03T13:54:35.321Z

## Overview

This documentation covers 466 modules from the TradingView charting library.
28 modules have been semantically identified.

## Core Modules (31)

### Module 1765 - settingsAdapter

**Exports:** default, getBool, getFloat, getInt, getJSON, getValue, keys, keysMask, loaded, loadedModel, onSync, remove, setJSON, setSettingsAdapter, setValue, sync

**Functions:** b, w, C, T, P, x, M, I, A, L ... and 2 more

**Dependencies (6}):**
- Module 49483 (module_49483)
- Module 32925 (module_32925)
- Module 21097 (module_21097)
- Module 11417 (module_11417)
- Module 48096 (delegate)
- Module 37103 (module_37103)

**Stats:** 6131 bytes, 202 lines

---

### Module 2072 - watchedValue

**Exports:** WatchedValue

**Classes:**
- `n`
- `r` extends n
- `s`
- `o`

**Functions:** o

**Dependencies (1}):**
- Module 9343 (logger)

**Stats:** 6566 bytes, 216 lines

---

### Module 2115 - series

**Exports:** Series

**Classes:**
- `Y` extends q
- `ne`
- `he`
- `ue`
- `Me` extends Ce
- `Qe` extends Je
- `nt`
- `ut`
- `ft`
- `Pt`
- `Lt` extends It
- `Qt` extends It
- `ni`

**Functions:** M, I, V, R, le, ce, De, We, ze, Ke ... and 8 more

**Dependencies (117}):**
- Module 50279 (module_50279)
- Module 50151 (module_50151)
- Module 9343 (logger)
- Module 51768 (module_51768)
- Module 76422 (module_76422)
- Module 88723 (module_88723)
- Module 67135 (priceDataSource)
- Module 86572 (module_86572)
- Module 52746 (seriesData)
- Module 72187 (module_72187)
- ... and 107 more

**Stats:** 157763 bytes, 3654 lines

---

### Module 3615 - dialogManager

**Exports:** showConfirm, showRename, showWarning

**Functions:** s, o, n

**Stats:** 1560 bytes, 34 lines

---

### Module 9343 - logger

**Exports:** LOGLEVEL, getLogHistory, getLogLevel, getLogger, getRawLogHistory, isHighRateEnabled, loggingOff, loggingOn, serializeLogHistoryEntry, setHighRateStatus, setLogLevel

**Functions:** _, p, m, g, f, y, S, b, n

**Stats:** 3440 bytes, 127 lines

---

### Module 9753 - constants

**Exports:** HEADER_TOOLBAR_HEIGHT_COLLAPSED, HEADER_TOOLBAR_HEIGHT_EXPANDED

**Dependencies (1}):**
- Module 41183 (module_41183)

**Stats:** 359 bytes, 15 lines

---

### Module 10307 - bitmapCoordinatesPane

**Exports:** BitmapCoordinatesPaneRenderer

**Classes:**
- `o`

**Dependencies (1}):**
- Module 27714 (canvasRendering)

**Stats:** 666 bytes, 23 lines

---

### Module 11946 - lineToolUtils

**Exports:** isLineDrawnWithPressedButton, isLineToolDrawWithoutPoints, isLineToolFinishRequiredWhenCreatedByApi, isLineToolName, isMtpPredictorToolName, isStudyLineToolName, isTextToolName

**Functions:** n, r, a, l, c, h, d

**Stats:** 3869 bytes, 82 lines

---

### Module 17776 - seriesBarFunction

**Exports:** barFunctionByStyle

**Functions:** o

**Dependencies (1}):**
- Module 52746 (seriesData)

**Stats:** 652 bytes, 30 lines

---

### Module 29803 - linkingManager

**Exports:** linking

**Classes:**
- `g`

**Dependencies (11}):**
- Module 90484 (module_90484)
- Module 50151 (module_50151)
- Module 9343 (logger)
- Module 22613 (module_22613)
- Module 37103 (module_37103)
- Module 46082 (timeInterval)
- Module 95059 (module_95059)
- Module 48943 (module_48943)
- Module 8811 (module_8811)
- Module 54370 (module_54370)
- ... and 1 more

**Stats:** 24295 bytes, 447 lines

---

### Module 34840 - chartDataManager

**Exports:** favorStandardStudyTemplate, favorStudyTemplate, getChartContent, getCharts, getChartsCount, getCustomAdapter, getDrawingTemplates, getStandardStudyTemplateById, getStorageURL, getStudyTemplateById, getStudyTemplatesList, initialize, invalidateStudyTemplatesList, isThemeExist, loadDrawingTemplate, loadLayout, loadTheme, loadThemes, openLayoutLink, removeChart, removeDrawingTemplate, removeStudyTemplate, removeTheme, renameStudyTemplate, replaceStudyTemplate, saveChart, saveDrawingTemplate, saveStudyTemplate, saveTheme, setCustomAdapter, updateUser

**Functions:** p, m, g, f, y, v, S, b, w, C ... and 23 more

**Dependencies (3}):**
- Module 9343 (logger)
- Module 39058 (module_39058)
- Module 1765 (settingsAdapter)

**Stats:** 10500 bytes, 351 lines

---

### Module 37150 - mainInitialization

**Classes:**
- `q`
- `K` extends q
- `Y` extends q
- `Z`
- `he`
- `pe`
- `De`
- `Ne`
- `Oe`
- `Fe`
- `nt`
- `lt` extends at
- `Dt`
- `Ht`
- `Zt`
- `ti`
- `oi` extends Zt
- `pi` extends Zt
- `fi` extends ti
- `Ii` extends xi
- `Li` extends Ii
- `Ri`
- `Oi`
- `Wi` extends Oi
- `Hi` extends Ii
- `Ki`
- `Yi`
- `Zi`
- `es` extends Zi
- `ks`
- `Rs`
- `oo`
- `_o`
- `mo`
- `vo`
- `Do`
- `Vo`
- `Fo`
- `Uo`
- `yn`
- `bn`
- `rr`
- `ar`
- `pr`
- `Ir`
- `Yr` extends zr
- `ea` extends zr
- `sa` extends ia
- `oa` extends sa
- `na` extends sa
- `ra` extends sa
- `aa` extends ia
- `la` extends aa
- `ca` extends aa
- `ha` extends aa
- `_a` extends zr
- `Pa` extends Ta
- `xa` extends Ta
- `Ma` extends Ta
- `Ia` extends Ma
- `Aa` extends Ta
- `La` extends Aa
- `Ea` extends Aa
- `Ba` extends Ma
- `Ra` extends Aa
- `Na` extends Ma
- `Xa`
- `ul`
- `Cl` extends ia
- `Tl` extends Cl
- `Pl` extends Cl
- `Il` extends xl
- `Ul`
- `jl`
- `Gl`
- `Xl`
- `Lc`
- `Uc`
- `Jc`
- `ah`
- `lh`
- `mh`
- `vh`
- `kh`
- `Bh`
- `Oh`
- `Hh`
- `hd`
- `ud`
- `vd`
- `wd`
- `xd`
- `Fd`
- `Wd`
- `zd`
- `Zd`
- `Xd`
- `tu`
- `ou` extends su
- `nu` extends su
- `pu`
- `fu`
- `Du`
- `Nu`
- `Xu`
- `Ju`
- `w_`
- `C_`
- `P_`
- `z_`
- `ep` extends Q_
- `ip` extends ep
- `ap` extends xl
- `lp` extends lt
- `fp`
- `Sm`
- `Cm`
- `Tm` extends Cm
- `Mm`
- `Im` extends Mm
- `dg` extends Error
- `ug`
- `Lg` extends Error
- `kg`
- `jg`
- `Jg`
- `Pf`
- `Af`
- `Ef`
- `Df`
- `Rf`
- `Uf`
- `Gf`
- `qf`
- `Xf`
- `iy`
- `ay`
- `ly`
- `_y`
- `yy`
- `Sy`
- `Cy` extends Sy
- `nv`
- `rv` extends nv
- `av` extends nv
- `hv`
- `uv`
- `_v`
- `vv`
- `Sv`
- `Tv`
- `xv`
- `Lv`
- `Ev`
- `Bv`
- `Nv`
- `Ov`
- `Gv`
- `Kv`
- `Yv`
- `Zv`
- `Jv`
- `Qv`
- `eS` extends Qv
- `tS`
- `sS`
- `oS`
- `nS`
- `rS`
- `aS`
- `cS`
- `dS`
- `pS`
- `SS`
- `AS`
- `DS`
- `VS`
- `WS`

**Functions:** C, V, R, W, U, se, Ie, Le, Ue, je ... and 173 more

**Dependencies (596}):**
- Module 81251 (settings)
- Module 20057 (module_20057)
- Module 50151 (module_50151)
- Module 52959 (features)
- Module 11542 (context)
- Module 18092 (module_18092)
- Module 32517 (module_32517)
- Module 5992 (module_5992)
- Module 87457 (module_87457)
- Module 34907 (module_34907)
- ... and 586 more

**Stats:** 1634854 bytes, 37350 lines

---

### Module 38881 - chunkLoaderModule

**Exports:** ChunkLoader

**Classes:**
- `o`

**Dependencies (1}):**
- Module 95406 (module_95406)

**Stats:** 706 bytes, 25 lines

---

### Module 46082 - timeInterval

**Exports:** Interval, ResolutionKind, SpecialResolutionKind, isHour

**Dependencies (1}):**
- Module 10892 (module_10892)

**Stats:** 361 bytes, 15 lines

---

### Module 48096 - delegate

**Exports:** Delegate

**Classes:**
- `n`

**Functions:** o

**Dependencies (1}):**
- Module 9343 (logger)

**Stats:** 1530 bytes, 60 lines

---

### Module 52746 - seriesData

**Exports:** SeriesData, barFunction, barFunctions, seriesPlotFunctionMap

**Classes:**
- `p`

**Functions:** d, u, _

**Dependencies (3}):**
- Module 50151 (module_50151)
- Module 72187 (module_72187)
- Module 55803 (module_55803)

**Stats:** 4471 bytes, 140 lines

---

### Module 52959 - features

**Exports:** getChartingLibraryGlobalContext, getChartingLibraryOwner

**Functions:** s, o

**Stats:** 389 bytes, 21 lines

---

### Module 55308 - drawingToolbarState

**Exports:** isDrawingToolbarVisible

**Dependencies (3}):**
- Module 1765 (settingsAdapter)
- Module 37103 (module_37103)
- Module 22613 (module_22613)

**Stats:** 450 bytes, 17 lines

---

### Module 60973 - chartConfig

**Functions:** Oe, Ee, c, h, d, De, Be, Ve, Re

**Dependencies (22}):**
- Module 87465 (module_87465)
- Module 86572 (module_86572)
- Module 52859 (module_52859)
- Module 24317 (module_24317)
- Module 22489 (module_22489)
- Module 49156 (module_49156)
- Module 82095 (module_82095)
- Module 36947 (module_36947)
- Module 45580 (module_45580)
- Module 4359 (module_4359)
- ... and 12 more

**Stats:** 68755 bytes, 2154 lines

---

### Module 67135 - priceDataSource

**Exports:** PriceDataSource, isPriceDataSource

**Functions:** l

**Dependencies (5}):**
- Module 50151 (module_50151)
- Module 2072 (watchedValue)
- Module 72207 (dataSource)
- Module 48096 (delegate)
- Module 22455 (module_22455)

**Stats:** 3772 bytes, 144 lines

---

### Module 71846 - chartSaver

**Exports:** getTranslatedSymbolDescription

**Functions:** s

**Dependencies (3}):**
- Module 12362 (module_12362)
- Module 49947 (module_49947)
- Module 11542 (context)

**Stats:** 1361 bytes, 52 lines

---

### Module 72207 - dataSource

**Exports:** DataSource, getTranslatedStringForSource, toInputDisplayFlags

**Classes:**
- `d`

**Functions:** c, h

**Dependencies (6}):**
- Module 95804 (module_95804)
- Module 36313 (module_36313)
- Module 4226 (module_4226)
- Module 48096 (delegate)
- Module 22613 (module_22613)
- Module 69422 (module_69422)

**Stats:** 6428 bytes, 265 lines

---

### Module 72877 - cssClasses

**Stats:** 629 bytes, 19 lines

---

### Module 78861 - lineToolManager

**Exports:** DrawingSyncMode, SelectPointMode, activePointSelectionMode, alignTo45Degrees, barTimesUnderCursor, beenSetLineToolLastPoint, cancelLineTool, cancelledLineTool, changeLineStyle, changeLineTool, changedLineStyle, changedLineTool, continueLineTool, continuedLineTool, copiedLineTool, copyLineTool, createLineTool, createdLineTool, crosshairLock, cursorTool, drawOnAllCharts, drawOnAllChartsMode, emojiTool, finishChangingLineTool, finishLineTool, finishMovingLineTool, finishedChangingLineTool, finishedLineTool, finishedMovingLineTool, hideAllDrawings, hideAllIndicators, hideMarksOnBars, iconTool, init, isDirectionalMovementActive, isStudyEditingNow, isToolCreatingNow, isToolEditingNow, isToolMovingNow, lockDrawings, moveLineTool, movedLineTool, properties, removeLineTool, removedLineTool, resetToCursor, restoreLineTool, restoreLineToolState, restoredLineTool, restoredLineToolState, runOnDrawingStateReady, setLineToolLastPoint, startChangingLineTool, startMovingLineTool, startedChangingLineTool, startedMovingLineTool, stickerTool, tool, toolIsCursor, toolIsDemonstration, toolIsEraser, toolIsMeasure

**Functions:** m, g, f, y, v, te, be, we, Ce, Te ... and 6 more

**Dependencies (9}):**
- Module 50151 (module_50151)
- Module 41072 (module_41072)
- Module 78176 (module_78176)
- Module 22613 (module_22613)
- Module 62773 (module_62773)
- Module 48096 (delegate)
- Module 1765 (settingsAdapter)
- Module 76422 (module_76422)
- Module 51768 (module_51768)

**Stats:** 6328 bytes, 232 lines

---

### Module 81593 - backendService

**Exports:** backend

**Dependencies (1}):**
- Module 34840 (chartDataManager)

**Stats:** 247 bytes, 12 lines

---

### Module 84617 - chartManager

**Exports:** CHART_FONT_FAMILY, setChartFontFamily

**Functions:** o

**Stats:** 392 bytes, 18 lines

---

### Module 89947 - deleteLockedLineTools

**Exports:** deleteLockedLineToolsProperty

**Functions:** l

**Dependencies (3}):**
- Module 1765 (settingsAdapter)
- Module 41072 (module_41072)
- Module 5734 (module_5734)

**Stats:** 822 bytes, 25 lines

---

### Module 92848 - clipboardData

**Exports:** clipboardDataForSources, isLineToolClipboardData

**Functions:** a, l

**Dependencies (4}):**
- Module 50151 (module_50151)
- Module 36313 (module_36313)
- Module 2088 (module_2088)
- Module 26610 (module_26610)

**Stats:** 1303 bytes, 50 lines

---

## Statistics

- **Total Modules:** 466
- **Identified Modules:** 28
- **Total Exports:** 1352
- **Total Classes:** 385
- **Total Functions:** 1233
- **Total Unique Dependencies:** 1138

## Top Exports by Module

- **Module 78861** (lineToolManager): 62 exports - DrawingSyncMode, SelectPointMode, activePointSelectionMode, alignTo45Degrees, barTimesUnderCursor, beenSetLineToolLastPoint, cancelLineTool, cancelledLineTool, changeLineStyle, changeLineTool, changedLineStyle, changedLineTool, continueLineTool, continuedLineTool, copiedLineTool, copyLineTool, createLineTool, createdLineTool, crosshairLock, cursorTool, drawOnAllCharts, drawOnAllChartsMode, emojiTool, finishChangingLineTool, finishLineTool, finishMovingLineTool, finishedChangingLineTool, finishedLineTool, finishedMovingLineTool, hideAllDrawings, hideAllIndicators, hideMarksOnBars, iconTool, init, isDirectionalMovementActive, isStudyEditingNow, isToolCreatingNow, isToolEditingNow, isToolMovingNow, lockDrawings, moveLineTool, movedLineTool, properties, removeLineTool, removedLineTool, resetToCursor, restoreLineTool, restoreLineToolState, restoredLineTool, restoredLineToolState, runOnDrawingStateReady, setLineToolLastPoint, startChangingLineTool, startMovingLineTool, startedChangingLineTool, startedMovingLineTool, stickerTool, tool, toolIsCursor, toolIsDemonstration, toolIsEraser, toolIsMeasure
- **Module 37236** (module_37236): 55 exports - DAY_OF_MONTH, DAY_OF_WEEK, DECEMBER, FIRST_DAY_OF_WEEK, FRIDAY, HOUR_OF_DAY, JANUARY, JULY, LAST_DAY_OF_WEEK, MARCH, MAY, MINUTE, MONDAY, MONTH, NOVEMBER, SATURDAY, SECOND, SEPTEMBER, SUNDAY, THURSDAY, TUESDAY, WEDNESDAY, WEEK_OF_YEAR, YEAR, add_date, add_days_considering_dst, add_minutes, add_years_considering_dst, cal_to_utc, clone, days_per_year, get_cal, get_cal_from_unix_timestamp_ms, get_cal_utc, get_day_of_month, get_day_of_week, get_day_of_year, get_hours, get_minutes, get_minutes_from_midnight, get_minutes_with_hours, get_month, get_part, get_timezone, get_year, is_leap_year, minutesPerDay, minutesPerWeek, setCustomTimezones, set_hms, set_seconds, time_seconds, time_seconds_diff, utc_to_cal, utc_to_cal_ts
- **Module 95059** (module_95059): 51 exports - actualSymbol, chartStyleStudyId, createSeriesFormatter, displayedSymbolExchange, displayedSymbolName, extractLineToolSymbolFromSymbolInfo, getChartStyleByResolution, getDefaultStyle, getLastUsedSingleValueBasedStyle, getLastUsedStyle, getSeriesDisplayErrorWV, getSeriesPriceFormattingState, getSourceForEconomySymbol, getSymbolDelaySeconds, getSymbolListedExchange, getSymbolTradedExchange, getTranslatedChartStyleName, hasVolume, isCloseBasedSymbol, isConvertedToOtherCurrency, isConvertedToOtherUnit, isEconomicSymbol, isHLCBasedStyle, isMeasureUnitSymbol, isPriceSourceStyle, isRangeBasedStyle, isRangeStyle, isRegularSessionId, isSingleValueBasedStyle, isSpreadSymbolWithManyLegs, isStyleSupportedForReplay, isTimeBasedStyle, isValidStyle, measureUnitId, preparePriceAxisProperties, proSymbol, setLastUsedStyle, styleChangeRequiresRestart, symbolBaseCurrency, symbolCurrency, symbolCurrencyConvertible, symbolHasElectronicSession, symbolHasPreOrPostMarket, symbolHasSeveralSessions, symbolOriginalCurrency, symbolOriginalUnit, symbolTitle, symbolTitleSeparator, symbolToSaveInState, symbolUnit, symbolUnitConvertibleGroupsIfExist
- **Module 82095** (module_82095): 42 exports - ChartStyle, OldLineStyleTypes, SERIES_STATUS_TEXT, STATUS_CALCULATION_ERROR, STATUS_DELAYED, STATUS_DELAYED_STREAMING, STATUS_EOD, STATUS_ERROR, STATUS_INVALID_SYMBOL, STATUS_LOADING, STATUS_NO_BARS, STATUS_OFFLINE, STATUS_PULSE, STATUS_READY, STATUS_REPLAY, STATUS_RESOLVING, STATUS_SNAPSHOT, STATUS_UNSUPPORTED_RESOLUTION, STYLE_AREA, STYLE_BARS, STYLE_BASELINE, STYLE_CANDLES, STYLE_COLUMNS, STYLE_HEIKEN_ASHI, STYLE_HILO, STYLE_HLC_AREA, STYLE_HLC_BARS, STYLE_HOLLOW_CANDLES, STYLE_KAGI, STYLE_LINE, STYLE_LINE_WITH_MARKERS, STYLE_PB, STYLE_PNF, STYLE_RANGE, STYLE_RENKO, STYLE_SHORT_NAMES, STYLE_STEPLINE, SYMBOL_STRING_DATA, Status, chartStylesWithAttachedStudies, seriesLoadingStatuses, seriesReadyStatuses
- **Module 4359** (module_4359): 37 exports - InternalStudyPlotType, LineStudyPlotStyle, OhlcStudyPlotStyle, PlotSymbolSize, STUDYPLOTDISPLAYTARGET, StudyPlotDisplayTarget, StudyPlotType, doesLinePlotStyleSupportLineStyle, isAlertConditionPlot, isArrowsPlot, isBarColorerPlot, isBgColorerPlot, isCandleBorderColorerPlot, isCandleWickColorerPlot, isCharsPlot, isColorerPlot, isDataOffsetPlot, isDataPlot, isDownColorerPlot, isLinePlot, isNonVisualPlot, isOhlcClosePlot, isOhlcColorerPlot, isOhlcHighPlot, isOhlcLowPlot, isOhlcOpenPlot, isOhlcPlot, isOhlcPlotStyleBars, isOhlcPlotStyleCandles, isPaletteColorerPlot, isPlotSupportDisplay, isPlotTitleDefined, isPlotWithTechnicalValues, isRgbaColorerPlot, isShapesPlot, isTextColorerPlot, isUpColorerPlot
- **Module 34840** (chartDataManager): 31 exports - favorStandardStudyTemplate, favorStudyTemplate, getChartContent, getCharts, getChartsCount, getCustomAdapter, getDrawingTemplates, getStandardStudyTemplateById, getStorageURL, getStudyTemplateById, getStudyTemplatesList, initialize, invalidateStudyTemplatesList, isThemeExist, loadDrawingTemplate, loadLayout, loadTheme, loadThemes, openLayoutLink, removeChart, removeDrawingTemplate, removeStudyTemplate, removeTheme, renameStudyTemplate, replaceStudyTemplate, saveChart, saveDrawingTemplate, saveStudyTemplate, saveTheme, setCustomAdapter, updateUser
- **Module 58221** (module_58221): 21 exports - addHorizontalLineToPath, addLineToPath, addPixelPerfectLineToPath, addVerticalLineToPath, clearRectWithGradient, clipPolygonByEdge, computeDashPattern, createCircle, drawHorizontalLine, drawLine, drawPixelPerfectLine, drawPoly, drawRoundRect, drawRoundRectWithInnerBorder, drawVerticalLine, fillRectInnerBorder, fillRectWithBorder, scaleDrawRoundRectRadii, scalePath2D, scaledDashPattern, setLineStyle
- **Module 87465** (module_87465): 20 exports - clone, declareClassAsPureInterface, deepEquals, inherit, isAbsent, isArray, isExistent, isFunction, isHashObject, isInteger, isNaN, isNumber, isObject, isPromise, isSameType, isString, merge, notNull, notUndefined, requireFullInterfaceImplementation
- **Module 22489** (module_22489): 19 exports - DEFAULT_THEME, getCurrentTheme, getStdTheme, getStdThemeNames, getStdThemedValue, getTheme, getThemeNames, getThemedColor, isStdThemeName, isStdThemedDefaultValue, isThemeExist, removeTheme, restoreTheme, saveTheme, savedThemeName, syncTheme, themeListChanged, themes, translateStdThemeName
- **Module 12217** (module_12217): 17 exports - compareTwoCollectionsByIds, indexOf, intersect, join, lowerbound, lowerboundExt, lowerbound_int, mapEntriesGenerator, moveAfter, moveBefore, moveToHead, nestedMapGenerator, removeItemFromArray, subtract, sum, upperbound, upperbound_int

