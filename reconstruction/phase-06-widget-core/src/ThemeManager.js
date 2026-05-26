const STORAGE_KEY = 'tv-theme';

const THEME_VARS = [
  '--tv-color-bg',
  '--tv-color-pane-bg',
  '--tv-color-toolbar-bg',
  '--tv-color-text',
  '--tv-color-text-secondary',
  '--tv-color-border',
  '--tv-color-grid',
  '--tv-color-crosshair',
  '--tv-color-up',
  '--tv-color-down',
  '--tv-color-wick',
  '--tv-color-volume'
];

const THEMES = {
  light: {
    '--tv-color-bg': '#FFFFFF',
    '--tv-color-pane-bg': '#F5F5F5',
    '--tv-color-toolbar-bg': '#FAFAFA',
    '--tv-color-text': '#212121',
    '--tv-color-text-secondary': '#757575',
    '--tv-color-border': '#E0E0E0',
    '--tv-color-grid': '#F0F0F0',
    '--tv-color-crosshair': '#212121',
    '--tv-color-up': '#26A69A',
    '--tv-color-down': '#EF5350',
    '--tv-color-wick': '#212121',
    '--tv-color-volume': '#26A69A80'
  },
  dark: {
    '--tv-color-bg': '#131722',
    '--tv-color-pane-bg': '#1E222D',
    '--tv-color-toolbar-bg': '#1E222D',
    '--tv-color-text': '#D1D4DC',
    '--tv-color-text-secondary': '#787B86',
    '--tv-color-border': '#2A2E39',
    '--tv-color-grid': '#2A2E39',
    '--tv-color-crosshair': '#D1D4DC',
    '--tv-color-up': '#089981',
    '--tv-color-down': '#F23645',
    '--tv-color-wick': '#D1D4DC',
    '--tv-color-volume': '#08998180'
  },
  custom: {
    '--tv-color-bg': '#131722',
    '--tv-color-pane-bg': '#1E222D',
    '--tv-color-toolbar-bg': '#1E222D',
    '--tv-color-text': '#D1D4DC',
    '--tv-color-text-secondary': '#787B86',
    '--tv-color-border': '#2A2E39',
    '--tv-color-grid': '#2A2E39',
    '--tv-color-crosshair': '#D1D4DC',
    '--tv-color-up': '#089981',
    '--tv-color-down': '#F23645',
    '--tv-color-wick': '#D1D4DC',
    '--tv-color-volume': '#08998180'
  }
};

export class ThemeManager {
  constructor(container) {
    this._container = container;
    this._currentTheme = 'dark';
  }

  apply(themeName, customVars = {}) {
    const theme = THEMES[themeName] || THEMES.dark;
    const vars = { ...(themeName === 'custom' ? {} : theme), ...customVars };
    for (const [key, value] of Object.entries(vars)) {
      if (THEME_VARS.includes(key)) {
        this._container.style.setProperty(key, value);
      }
    }
    this._currentTheme = themeName;
    try {
      localStorage.setItem(STORAGE_KEY, themeName);
    } catch (e) {
      // localStorage unavailable
    }
  }

  getCurrentTheme() {
    return this._currentTheme;
  }

  getVariable(name) {
    return getComputedStyle(this._container).getPropertyValue(name).trim() || null;
  }

  static restore(container) {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const mgr = new ThemeManager(container);
        mgr.apply(saved);
        return mgr;
      }
    } catch (e) {
      // localStorage unavailable
    }
    return new ThemeManager(container);
  }
}
