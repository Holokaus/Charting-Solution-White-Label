# Entry Points

## Overview

Entry points are modules that are loaded immediately when the page loads (as part of the initial bundle or library chunk) versus modules that are loaded on-demand when specific features are triggered.

The charting library uses webpack code-splitting to lazy-load most of its functionality. Only a small core of ~437 modules are loaded immediately; the rest (~2546) are loaded on-demand via chunk files.

## Initial Load Entry Points

The following modules are part of the initial library chunk and are loaded immediately:

| Module ID | Dependencies | Depended By | On-Demand? |
|-----------|-------------|-------------|------------|
| 0 | 0 | 1 | No (initial)
| 1 | 0 | 1 | No (initial)
| 2 | 0 | 2 | No (initial)
| 3 | 1 | 2 | No (initial)
| 4 | 0 | 1 | No (initial)
| 5 | 0 | 1 | No (initial)
| 6 | 4 | 1 | No (initial)
| 7 | 4 | 1 | No (initial)
| 8 | 4 | 1 | No (initial)
| 9 | 4 | 1 | No (initial)
| 10 | 4 | 1 | No (initial)
| 11 | 4 | 1 | No (initial)
| 12 | 4 | 0 | No (initial)
| 32 | 0 | 0 | Yes
| 45 | 12 | 1 | No (initial)
| 100 | 0 | 0 | No (initial)
| 125 | 0 | 0 | Yes
| 173 | 24 | 2 | Yes
| 264 | 0 | 1 | Yes
| 294 | 0 | 1 | Yes
| 333 | 0 | 1 | Yes
| 343 | 0 | 2 | Yes
| 348 | 0 | 2 | Yes
| 371 | 0 | 1 | Yes
| 390 | 0 | 2 | Yes
| 413 | 0 | 1 | Yes
| 429 | 0 | 2 | Yes
| 451 | 0 | 1 | Yes
| 494 | 0 | 1 | Yes
| 501 | 0 | 1 | Yes

## Entry Point Candidates (No Dependents)

Modules with `dependentCount === 0` are potential entry points - they are `__webpack_require__`'d directly, not as a dependency of another module:

| Module ID | Dependencies | Likely Feature |
|-----------|-------------|----------------|
| 12 | 4 | Core initialization (library.*.js) |
| 32 | 0 | Core initialization (library.*.js) |
| 100 | 0 | Core initialization (library.*.js) |
| 125 | 0 | Core initialization (library.*.js) |
| 540 | 0 | Core initialization (library.*.js) |
| 573 | 2 | Drawing tools (line-tool-cypher-pattern.*.js) |
| 618 | 1 | Chart widget (chart-widget-gui.*.js) |
| 646 | 8 | Drawing tools (line-tool-gann-fan.*.js) |
| 857 | 1 | Core initialization (library.*.js) |
| 898 | 2 | Core initialization (library.*.js) |
| 1006 | 3 | Drawing tools (line-tool-callout.*.js) |
| 1086 | 7 | Drawing tools (line-tool-trend-based-fib-extension.*.js) |
| 1140 | 0 | Core initialization (library.*.js) |
| 1162 | 9 | Core initialization (library.*.js) |
| 1232 | 1 | Drawing tools (line-tool-regression-trend.*.js) |
| 1336 | 23 | Core initialization (library.*.js) |
| 1405 | 0 | Core initialization (library.*.js) |
| 1486 | 22 | Core initialization (library.*.js) |
| 1524 | 0 | Screenshot hint (chart-screenshot-hint.*.js) |
| 2059 | 6 | Core initialization (library.*.js) |

## Chunk → Feature Mapping

| Chunk File | Chunk ID | Module Count | Feature |
|-----------|----------|-------------|---------|
| zh_TW.91.cfe4af4f43df761935ee.js | 91 | 0 | locale (zh_TW)
| chart-screenshot-hint.20aec3fd3e04096eae8a.js | 92 | 11 | screenshot_hint
| get-error-card.9bac6b5005b2fe097cf3.js | 139 | 10 | error_card
| line-tool-table.bfad5173227ff4b17ee9.js | 319 | 9 | drawing_tools_table
| line-tool-schiff-pitchfork2.a9eb3484dc231697e64a.js | 341 | 4 | drawing_tools_schiff_pitchfork2
| demonstration-highlighter.7ab37b19fbd43b62435c.js | 360 | 6 | drawing_tools_demonstration_highlighter
| line-tool-price-note.0beb21ac39ce88afd40a.js | 380 | 10 | drawing_tools_price_note
| study-pane-views.ab403205125f170be9e2.js | 507 | 6 | study_pane_views
| line-tool-arrow-mark.f0be320dc06ad56040bf.js | 569 | 1 | drawing_tools_arrow_mark
| line-tool-horizontal-ray.7ff8a41f54edcb4ad73d.js | 574 | 2 | drawing_tools_horizontal_ray
| study-property-pages-with-definitions.c82ef5c409f191cc7c5d.js | 607 | 7 | study_property_pages
| tablecontext-menu.bcf3249fc32562e96280.js | 620 | 2 | table_context_menu
| 624.3b396e1376ddaa5e6358.js | 624 | 24 | core_features
| line-tool-callout.0c88ce61641b39b90734.js | 688 | 3 | drawing_tools_callout
| add-compare-dialog.3cab117ede5b1696d880.js | 731 | 11 | compare_dialog
| 769.cfef16111d0547178795.js | 769 | 20 | chart_bars_patterns
| line-tool-fib-speed-resistance-fan.d3f7742cd1f166c581ca.js | 906 | 8 | drawing_tools_fib_speed_resistance_fan
| 917.41b6aa03c55ba682d104.js | 917 | 15 | core_features
| line-tool-extended.e847213b4f2f0347eec1.js | 925 | 3 | drawing_tools_extended
| zh_TW.938.5f20502c9172fdac1c7f.js | 938 | 0 | locale (zh_TW)
| line-tool-path.654ee1abe8bd1c5165c5.js | 961 | 1 | drawing_tools_path
| 986.af29b1f88812e58c9f6c.js | 986 | 5 | chart_features
| zh_TW.9520.56af53115bbb024475fe.js | 1095 | 0 | locale (zh_TW)
| line-tool-cypher-pattern.96f4b196b30af8149b1c.js | 1155 | 2 | drawing_tools_cypher_pattern
| line-tool-balloon.1e3ca2deba9ec68bfb74.js | 1277 | 4 | drawing_tools_balloon
| line-tool-vertical-line.3b73ca25e6d4f290597f.js | 1282 | 3 | drawing_tools_vertical_line
| library.15664647653f41254b4d.js | 1297 | 437 | core_library
| zh_TW.1308.bf60d54f92e58a11cef1.js | 1308 | 0 | locale (zh_TW)
| line-tool-pitch-fan.916eb4d87cdda49b9337.js | 1313 | 5 | drawing_tools_pitch_fan
| line-tool-position.2506e7de45c96e5a349c.js | 1314 | 2 | drawing_tools_position

## Named Chunks from Runtime

The runtime file contains a mapping of module IDs to human-readable chunk names:

| Module ID | Chunk Name |
|-----------|-----------|
| 4 | 975cc7b264b6bd3c596d
| 92 | 20aec3fd3e04096eae8a
| 139 | 9bac6b5005b2fe097cf3
| 159 | 3e4f89ce6749c1e5f8df
| 319 | bfad5173227ff4b17ee9
| 341 | a9eb3484dc231697e64a
| 360 | 7ab37b19fbd43b62435c
| 380 | 0beb21ac39ce88afd40a
| 445 | 8577632fdab29ee53ddf
| 507 | ab403205125f170be9e2
| 509 | 7e5e9ba6624b240fc4c7
| 569 | f0be320dc06ad56040bf
| 574 | 7ff8a41f54edcb4ad73d
| 607 | c82ef5c409f191cc7c5d
| 620 | bcf3249fc32562e96280
| 624 | 3b396e1376ddaa5e6358
| 628 | b8ffba49e1636aade6c4
| 683 | 9ce134321e5f7ed1c4ad
| 688 | 0c88ce61641b39b90734
| 731 | 3cab117ede5b1696d880
| 769 | cfef16111d0547178795
| 844 | 4db113a94ddabe52ea7c
| 846 | 783c8fdad80b7ee894e8
| 861 | d3c8a2d509847638ea25
| 903 | e764dd9f961674c26dbd
| 906 | d3f7742cd1f166c581ca
| 917 | 41b6aa03c55ba682d104
| 925 | e847213b4f2f0347eec1
| 961 | 654ee1abe8bd1c5165c5
| 986 | af29b1f88812e58c9f6c
| 1065 | d8e66f4c4d6c2e5e9e51
| 1155 | 6b6008c2c60cff13d7f4
| 1166 | fa77c9e386a131cac9da
| 1171 | 146c7925be9f43c9c767
| 1277 | 1e3ca2deba9ec68bfb74
| 1282 | 3b73ca25e6d4f290597f
| 1313 | 916eb4d87cdda49b9337
| 1314 | 2506e7de45c96e5a349c
| 1450 | 8f1c6b9900df1caf5e97
| 1455 | 68694affc8c3e0026b38

## API Feature → Entry Module Mapping

| API Feature | Related Methods | Entry Module IDs | Source Chunk |
|------------|----------------|-----------------|--------------|
| chart_properties | chart, save, load, layout, setLayout | 11985, 53288, 55456, 59142, 87795 | library.*.js |
| change_symbol | setSymbol, symbolInterval, symbolSync | 5808, 24044, 57554, 59142, 82321, 97754 | library.*.js |
| change_interval | setTimeFrame, getIntervals, intervalSync | 16499, 59142, 97754 | library.*.js |
| change_theme | changeTheme, getTheme | 97754 | library.*.js |
| change_chart_type | chartType, setChartType | 23484, 41028, 49107, 50516, 51284, 57554, 59142 | library.*.js |
| add_indicator | createStudy, getStudiesList, getStudyInputs | 14472, 17773, 52973, 62093, 73914, 94073, 97754 | study-*.js |
| drawing_tools | selectLineTool, selectedLineTool, hideAllDrawingTools, lockAllDrawingTools | 1232, 9431, 9587, 12148, 14472, 14638, 17721, 18348, 18441, 21730, 22523, 23283, 23970, 28121, 31558, 37130, 39022, 40226, 40283, 41160, 43470, 43684, 44341, 44504, 46350, 48984, 49684, 50991, 52982, 54707, 55157, 56348, 57296, 60594, 62414, 63117, 63136, 66807, 67046, 67725, 70214, 71514, 77325, 77657, 79327, 79530, 81817, 81951, 91445, 92417, 94407, 94512, 95121, 95400, 97754, 98653 | line-tool-*.js |
| screenshot | takeScreenshot, takeClientScreenshot | 6969, 43010, 67090 | library.*.js |
| undo_redo | undo, redo, clearUndoHistory, undoRedoState | 55517 | library.*.js |
| symbol_search | searchSymbols, symbolSearchComplete | 22233, 24674, 89324 | symbol-search-dialog.*.js |
| save_load | showLoadChartDialog, showSaveAsChartDialog, getSavedCharts, loadChartFromServer, saveChartToServer | 33384, 38672, 57351 | library.*.js |
| timeframes | getTimeframes, setTimeframe | 44138, 48473, 48758 | library.*.js |
| compare_symbol | searchSymbols, symbolInterval, symbolSync | 14143 | library.*.js |

## Notes

- Entry point identification is approximate. The library uses dynamic code splitting, so most modules are loaded on-demand.
- The initial chunk (`library.*.js`) contains the core framework modules loaded on page load.
- Named chunks in the runtime provide hints about which features map to which chunks.
