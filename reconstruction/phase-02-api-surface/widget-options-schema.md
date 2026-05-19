# Widget Constructor Options

## Overview

The TradingView widget constructor accepts a single options object that configures the chart instance. This document describes all available options with their types, defaults, and validation rules.

## Required Options

| Option | Type | Description | Validation |
|--------|------|-------------|-----------|
| container | string or HTMLElement | DOM element ID or HTMLElement where the chart will be rendered | Must be valid DOM element; error if not found |
| datafeed | IBasicDataFeed object | Object implementing the datafeed interface to supply chart with data | Must be a valid object with required methods (onReady, resolveSymbol, getBars, etc.) |
| interval | ResolutionString | Default interval/timeframe for the chart (e.g., "1D", "1H", "5") | Must be one of supported_resolutions from datafeed |

## Optional Options - Core Configuration

| Option | Type | Default | Description | Example |
|--------|------|---------|-------------|---------|
| symbol | string | undefined | Default symbol to display on chart | "AAPL" |
| library_path | string | undefined | Path to charting_library static folder | "../../charting_library/" |
| locale | LanguageCode | "en" | Language code for UI localization (en, es, fr, de, it, zh, ja, ko, pt, ru, etc.) | "en" |
| timezone | string or "exchange" | "exchange" | Timezone for timestamp display (e.g., "America/New_York", "Europe/London") | "America/New_York" |
| theme | string | "light" | Chart theme ("light" or "dark") | "light" |
| debug | boolean | false | Enable detailed datafeed API logs in console | true |
| autosize | boolean | false | Auto-resize chart to fill container and on resize | true |
| fullscreen | boolean | false | Make chart fullscreen | true |

## Optional Options - Dimensions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| width | number | 100% of container | Width in pixels (integer value) |
| height | number | 600 | Height in pixels (integer value) |

## Optional Options - Features & UI Control

| Option | Type | Default | Description | Example Values |
|--------|------|---------|-------------|-----------------|
| disabled_features | array | [] | Features to disable by default | ["header_widget", "left_toolbar", "study_templates"] |
| enabled_features | array | [] | Features to enable by default | ["move_logo_to_main_pane"] |
| toolbar_bg | string | default color | Background color of toolbars | "#f4f7f9" |
| header_widget_buttons_mode | string | "adaptive" | Header button display mode | "fullsize", "compact", "adaptive" |

## Optional Options - Studies & Indicators

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| study_count_limit | number | 5 | Maximum number of studies allowed (minimum 2) |
| studies_overrides | object | {} | Default styles/inputs for indicators |
| studies_access | AccessList | undefined | Control which studies are visible/grayed |
| custom_indicators_getter | function | undefined | Function returning Promise with custom indicators |

## Optional Options - Drawing Tools

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| drawings_access | AccessList | undefined | Control which drawing tools are visible/grayed |

## Optional Options - Data & Saving

| Option | Type | Default | Description | Example |
|--------|------|---------|-------------|---------|
| saved_data | object | undefined | Pre-loaded chart layout/state | { chartProperties: {...} } |
| saved_data_meta_info | object | undefined | Metadata about saved chart data | { name: "My Chart" } |
| charts_storage_url | string | undefined | Backend URL for chart save/load REST API | "http://storage.yourserver.com" |
| charts_storage_api_version | string | "1.0" | API version (1.0 or 1.1; 1.1 supports study templates) | "1.1" |
| client_id | string | undefined | Client identifier for charts storage | "yourserver.com" |
| user_id | string | undefined | User identifier for charts storage | "public_user_id" |
| load_last_chart | boolean | false | Auto-load last saved chart for user | true |
| auto_save_delay | number | 5 | Delay in seconds to batch auto-save calls | 10 |
| save_load_adapter | object | undefined | Custom save/load handler object with setValue/removeValue methods | custom adapter |
| settings_adapter | object | undefined | Custom settings storage with initialSettings/setValue/removeValue | custom adapter |

## Optional Options - Customization

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| custom_css_url | string | undefined | URL to custom CSS file |
| custom_font_family | string | undefined | Font family name (must match CSS format) |
| custom_formatters | object | undefined | Custom formatters for price, date, time |
| custom_translate_function | function | undefined | Custom translation function for UI strings |
| custom_chart_description_function | function | undefined | Custom ARIA description function |
| custom_timezones | array | undefined | Array of custom timezone definitions |
| custom_themes | object | undefined | Custom theme colors for light/dark themes |
| context_menu | object | undefined | Context menu configuration |
| loading_screen | object | { backgroundColor: default } | Loading spinner customization |

## Optional Options - Overrides

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| overrides | object | {} | Default chart property overrides (style, colors, etc.) |
| settings_overrides | object | {} | Overrides for saved settings (takes precedence over overrides) |

## Optional Options - Symbols & Compare

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| compare_symbols | array | [] | Custom compare symbols for comparison view |
| symbol_search_request_delay | number | 300 | Delay in ms for symbol search requests |
| symbol_search_complete | function | undefined | Override symbol search result behavior |
| additional_symbol_info_fields | array | [] | Custom fields to show in Symbol Info dialog |

## Optional Options - Time & Display

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| time_frames | array | default | Visible time frame buttons (50y, 3y, 1y, 6m, 3m, etc.) |
| timeframe | string or object | undefined | Default visible time range ("3M", "1D" or { from: timestamp, to: timestamp }) |
| time_scale | object | { min_bar_spacing: default } | Time scale configuration |
| numeric_formatting | object | { decimal_sign: "." } | Formatting options for numbers |

## Optional Options - Storage

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| snapshot_url | string | undefined | Server endpoint for snapshot uploads |
| image_storage_adapter | object | undefined | Custom image storage for image drawing tool |

## Optional Options - Favorites

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| favorites | object | undefined | Default favorite chart types, studies, drawings, resolutions |

---

## Widget Instance Return Type

The constructor returns an `IChartingLibraryWidget` object with the following public interface:

### Key Methods Available on Widget Instance

- `save(callback?: (state) => void)` - Saves current chart state
- `load(state, options)` - Loads chart layout
- `setSymbol(symbol, interval, onChartReady)` - Changes symbol
- `setTimeFrame(timeframe)` - Changes visible time range
- `subscribe(event, callback)` - Subscribe to widget events
- `unsubscribe(event, callback)` - Unsubscribe from events
- `remove()` - Destroys the widget
- `getLanguage()` - Returns current UI language
- `getTheme()` - Returns current theme
- `changeTheme(theme, disableUndo)` - Changes theme
- `getSavedCharts(callback)` - Gets list of saved charts
- `loadChartFromServer(id)` - Loads chart from server
- `saveChartToServer(showSaveDialog, onSuccess, onFail)` - Saves chart to server
- `getStudiesList()` - Returns array of available studies (107 built-in studies)
- `getIntervals()` - Returns array of supported intervals
- `chart(index?)` - Returns IChartWidgetApi for chart manipulation
- `and 80+ additional methods for full chart control...`

---

## Validation Rules & Error Handling

### Container Validation
- **Empty object**: Error - "Container element not found"
- **Invalid string**: Error - "Container element not found"  
- **Valid HTMLElement**: Accepts the element reference

### Datafeed Validation
- **Missing**: Error - "Datafeed is not defined"
- **Wrong interface**: Error - "Datafeed must implement IBasicDataFeed"
- **Must have methods**: onReady(), resolveSymbol(), getBars(), etc.

### Interval Validation
- **Missing**: Error - "Interval is required"
- **Not in supported list**: Chart loads but may show error loading data

### Symbol Validation
- **Invalid**: Datafeed resolution will fail with custom error message
- **Missing**: Uses default from datafeed or shows no data

---

## Minimum Valid Configuration

```javascript
const widget = new TradingView.widget({
  container: "tv_chart_container",
  datafeed: mockDatafeed,
  interval: "1D",
  locale: "en"
});
```

## Complete Production Configuration Example

```javascript
const widget = new TradingView.widget({
  // Required
  container: document.getElementById("tv_chart_container"),
  datafeed: new UDFCompatibleDatafeed("https://demo_feed.tradingview.com"),
  interval: "1D",
  
  // Core
  symbol: "AAPL",
  library_path: "charting_library/",
  locale: "en",
  timezone: "America/New_York",
  theme: "light",
  
  // UI
  autosize: true,
  fullscreen: false,
  disabled_features: ["study_templates", "header_symbol_search"],
  enabled_features: ["move_logo_to_main_pane"],
  
  // Storage
  charts_storage_url: "http://storage.example.com",
  client_id: "example.com",
  user_id: "user_123",
  load_last_chart: true,
  
  // Customization
  custom_css_url: "css/style.css",
  overrides: {
    "mainSeriesProperties.style": 1  // Line chart by default
  }
});
```

---

## Notes

- All measurements in pixels unless otherwise specified
- Color values must be valid CSS color strings (hex, rgb, rgba)
- Array options default to empty array if not provided
- String options follow TypeScript definitions for type safety
- The widget will emit errors to console if invalid options cause issues
- Some options require specific featuresets to be enabled via enabled_features

