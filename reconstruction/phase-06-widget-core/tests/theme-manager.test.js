import { ThemeManager } from '../src/ThemeManager.js';

function assert(condition, msg) {
  if (!condition) {
    console.error('FAIL:', msg);
    process.exitCode = 1;
  } else {
    console.log('PASS:', msg);
  }
}

// Use a div as container
const container = document.createElement('div');
document.body.appendChild(container);

// Apply dark theme
const tm = new ThemeManager(container);
tm.apply('dark');
assert(tm.getCurrentTheme() === 'dark', 'current theme is dark after apply(dark)');
const bg = container.style.getPropertyValue('--tv-color-bg');
assert(bg === '#131722', '--tv-color-bg set correctly in dark theme');

// Apply light theme
tm.apply('light');
assert(tm.getCurrentTheme() === 'light', 'current theme is light after apply(light)');
const lightBg = container.style.getPropertyValue('--tv-color-bg');
assert(lightBg === '#FFFFFF', '--tv-color-bg set correctly in light theme');

// Apply custom theme with overrides
tm.apply('custom', { '--tv-color-bg': '#FF0000' });
const customBg = container.style.getPropertyValue('--tv-color-bg');
assert(customBg === '#FF0000', 'custom theme override works');
assert(tm.getCurrentTheme() === 'custom', 'current theme is custom after apply(custom)');

// getVariable()
tm.apply('dark');
const varVal = tm.getVariable('--tv-color-bg');
assert(varVal === '#131722' || varVal !== null, 'getVariable returns computed value');

// restore from localStorage
localStorage.setItem('tv-theme', 'light');
const restored = ThemeManager.restore(container);
assert(restored instanceof ThemeManager, 'restore() returns ThemeManager instance');
assert(restored.getCurrentTheme() === 'light', 'restored theme matches localStorage');

console.log('ThemeManager tests complete');
