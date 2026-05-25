export class WidgetOptionsValidator {
  static SUPPORTED_INTERVALS = ['1S', '1', '5', '15', '30', '60', '120', '240', '1D', '2D', '3D', '1W', '1M'];

  static SCHEMA = {
    container: { type: 'string|HTMLElement', required: true },
    symbol: { type: 'string', required: true },
    interval: { type: 'string', required: true, enum: WidgetOptionsValidator.SUPPORTED_INTERVALS },
    datafeed: { type: 'object', required: true },
    library_path: { type: 'string', required: true },
    width: { type: 'number', default: 800 },
    height: { type: 'number', default: 500 },
    locale: { type: 'string', default: 'en' },
    debug: { type: 'boolean', default: false },
    fullscreen: { type: 'boolean', default: false },
    autosize: { type: 'boolean', default: false },
    symbol_search_request_delay: { type: 'number', default: 300 },
    loading_screen: { type: 'object', default: null },
    disabled_features: { type: 'array', default: [] },
    enabled_features: { type: 'array', default: [] },
    overrides: { type: 'object', default: {} },
    studies_overrides: { type: 'object', default: {} },
    theme: { type: 'string', default: 'dark', enum: ['dark', 'light'] },
    custom_css_url: { type: 'string', default: null },
    custom_font_family: { type: 'string', default: null },
    auto_save_delay: { type: 'number', default: 5000 },
    toolbar_bg: { type: 'string', default: null },
    drawings_access: { type: 'object', default: null },
    time_frames: { type: 'array', default: null },
    charts_storage_url: { type: 'string', default: null },
    charts_storage_api_version: { type: 'string', default: '1.1' },
    client_id: { type: 'string', default: null },
    user_id: { type: 'string', default: null },
    favorites: { type: 'object', default: null },
    save_chart_visible: { type: 'object', default: null },
    load_chart_visible: { type: 'object', default: null },
    study_count_limit: { type: 'number', default: 50 },
    symbol_visible: { type: 'object', default: null },
    broker_config: { type: 'object', default: null },
    broker_factory: { type: 'function', default: null },
    widgetbar: { type: 'object', default: null },
    rss_news_feed: { type: 'object', default: null },
    news_provider: { type: 'object', default: null },
    snapshot_url: { type: 'string', default: null },
    indicators_file_name: { type: 'string', default: null },
    saved_data: { type: 'object', default: null },
    locale_override: { type: 'object', default: null },
    allow_symbol_change: { type: 'boolean', default: true },
    interval_visible: { type: 'boolean', default: true },
    time_visible: { type: 'boolean', default: true },
    date_visible: { type: 'boolean', default: true },
    timeframe_visible: { type: 'boolean', default: true },
    draw_on_all_charts: { type: 'boolean', default: false },
    studies_dialog_indicator_name: { type: 'string', default: null },
    show_chart_bottom_toolbar: { type: 'boolean', default: true },
    hide_side_toolbar: { type: 'boolean', default: false },
    chart_style_visible: { type: 'boolean', default: true },
    calendar_visible: { type: 'boolean', default: true },
    timezone_visible: { type: 'boolean', default: true },
    session_visible: { type: 'boolean', default: true },
    compare_symbols_visible: { type: 'boolean', default: true },
    show_drawing_toolbar: { type: 'boolean', default: true },
    show_left_toolbar: { type: 'boolean', default: true },
    show_right_toolbar: { type: 'boolean', default: true },
  };

  validate(options) {
    const errors = [];

    for (const [key, rule] of Object.entries(this.constructor.SCHEMA)) {
      const value = options[key];

      if (value === undefined || value === null) {
        if (rule.required) {
          errors.push(`Missing required option: "${key}"`);
        }
        continue;
      }

      if (rule.enum && !rule.enum.includes(value)) {
        errors.push(`Invalid value for "${key}": got "${value}", expected one of [${rule.enum.join(', ')}]`);
      }

      if (rule.type === 'string' && typeof value !== 'string') {
        errors.push(`"${key}" must be a string`);
      } else if (rule.type === 'number' && typeof value !== 'number') {
        errors.push(`"${key}" must be a number`);
      } else if (rule.type === 'boolean' && typeof value !== 'boolean') {
        errors.push(`"${key}" must be a boolean`);
      } else if (rule.type === 'object' && (typeof value !== 'object' || value === null || Array.isArray(value))) {
        errors.push(`"${key}" must be a plain object`);
      } else if (rule.type === 'function' && typeof value !== 'function') {
        errors.push(`"${key}" must be a function`);
      } else if (rule.type === 'array' && !Array.isArray(value)) {
        errors.push(`"${key}" must be an array`);
      }
    }

    return errors.length === 0
      ? { valid: true, errors: [] }
      : { valid: false, errors };
  }

  applyDefaults(options) {
    const result = { ...options };
    for (const [key, rule] of Object.entries(this.constructor.SCHEMA)) {
      if ((result[key] === undefined || result[key] === null) && rule.default !== undefined) {
        result[key] = rule.default;
      }
    }
    return result;
  }
}
