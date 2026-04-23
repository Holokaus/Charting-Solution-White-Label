/**
 * Module 3343 - Keyboard Modifiers and Event Utilities
 * 
 * This module provides utilities for handling keyboard modifiers (Ctrl, Alt, Shift, Meta)
 * and keyboard events in a cross-platform manner (Windows/Mac/Linux).
 * 
 * Features:
 * - Modifier key detection and hashing
 * - Human-readable modifier strings
 * - Platform-specific keyboard shortcuts (Mac vs Windows)
 * - Key code to string conversion
 * 
 * @module 3343
 * @category Input/Keyboard
 */

import { isMac, isIOS } from './75774-platform-detection.js';

/**
 * Modifier bit flags
 * Each modifier has a unique bit position for bitwise operations
 * 
 * @enum {number}
 * @public
 */
export const Modifiers = {
  /** No modifiers pressed */
  None: 0,
  /** Alt key (Option on Mac) */
  Alt: 512,
  /** Shift key */
  Shift: 1024,
  /** Control key (Cmd on Mac) */
  Mod: isMac || isIOS ? 2048 : 256,
  /** Control key */
  Control: 256,
  /** Meta key (Command on Mac, Windows key on Windows) */
  Meta: 2048
};

/**
 * Checks if the current platform uses Mac-style keyboard
 * @returns {boolean} True if Mac or iOS
 */
export const isMacKeyboard = isMac || isIOS;

/**
 * Extracts modifier flags from a keyboard event
 * 
 * @param {KeyboardEvent} event - The keyboard event
 * @returns {number} Bitwise combination of modifier flags
 * 
 * @example
 * const modifiers = modifiersFromEvent(keyboardEvent);
 * if (modifiers & Modifiers.Shift) {
 *   console.log('Shift is pressed');
 * }
 */
export function modifiersFromEvent(event) {
  let modifiers = 0;
  
  if (event.shiftKey) {
    modifiers += Modifiers.Shift;
  }
  if (event.altKey) {
    modifiers += Modifiers.Alt;
  }
  if (event.ctrlKey) {
    modifiers += Modifiers.Control;
  }
  if (event.metaKey) {
    modifiers += Modifiers.Meta;
  }
  
  return modifiers;
}

/**
 * Creates a hash from a keyboard event including modifiers and key code
 * 
 * @param {KeyboardEvent} event - The keyboard event
 * @returns {number} Unique hash combining modifiers and key code
 */
export function hashFromEvent(event) {
  return modifiersFromEvent(event) | event.keyCode;
}

/**
 * Converts modifier flags to human-readable string
 * 
 * Platform-aware: Shows Mac symbols (⌘, ⌥, ⇧) on Mac, 
 * Windows names (Ctrl, Alt, Shift) on other platforms.
 * 
 * @param {number} modifiers - Bitwise modifier flags
 * @param {boolean} [withSpaces=true] - Include spaces between modifier names
 * @returns {string} Human-readable modifier string
 * 
 * @example
 * // On Mac: "⌘⇧"
 * // On Windows: "Ctrl + Shift"
 * humanReadableModifiers(Modifiers.Mod | Modifiers.Shift);
 */
export function humanReadableModifiers(modifiers, withSpaces = true) {
  let result = '';
  
  if (modifiers & Modifiers.Control) {
    result += formatModifier(isMac ? '^' : 'Ctrl', withSpaces);
  }
  if (modifiers & Modifiers.Alt) {
    result += formatModifier(isMac ? '⌥' : 'Alt', withSpaces);
  }
  if (modifiers & Modifiers.Shift) {
    result += formatModifier(isMac ? '⇧' : 'Shift', withSpaces);
  }
  if (modifiers & Modifiers.Meta) {
    result += formatModifier(isMac ? '⌘' : 'Win', withSpaces);
  }
  
  return result;
}

/**
 * Converts a keyboard event to human-readable shortcut string
 * 
 * @param {KeyboardEvent} event - The keyboard event
 * @returns {string} Human-readable shortcut (e.g., "Ctrl+S", "⌘C")
 * 
 * @example
 * // Returns: "Ctrl + S" or "⌘ S"
 * humanReadableHash(keyboardEvent);
 */
export function humanReadableHash(event) {
  let result = humanReadableModifiers(event);
  const keyCode = 255 & event.keyCode;
  
  // Special key mappings
  const specialKeys = isMacKeyboard ? MAC_SPECIAL_KEYS : WIN_SPECIAL_KEYS;
  
  if (keyCode in specialKeys) {
    result += specialKeys[keyCode];
  } else {
    // Convert to character
    result += String.fromCharCode(keyCode);
  }
  
  return result;
}

/**
 * Maps special key codes to readable names (Mac version)
 * @private
 */
const MAC_SPECIAL_KEYS = {
  9: '⇥',      // Tab
  13: '↵',     // Enter
  27: 'Esc',   // Escape
  8: '⌫',      // Backspace
  32: 'Space',
  35: 'End',
  36: 'Home',
  37: '←',     // Left arrow
  38: '↑',     // Up arrow
  39: '→',     // Right arrow
  40: '↓',     // Down arrow
  45: 'Ins',   // Insert
  46: 'Del',   // Delete
  188: ',',
  191: '/'
};

/**
 * Maps special key codes to readable names (Windows version)
 * @private
 */
const WIN_SPECIAL_KEYS = {
  9: 'Tab',
  13: 'Enter',
  27: 'Esc',
  8: 'Backspace',
  32: 'Space',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  45: 'Ins',
  46: 'Del',
  188: ',',
  191: '/'
};

// Add F1-F16 function keys to both mappings
for (let i = 1; i <= 16; i++) {
  const keyCode = i + 111;
  MAC_SPECIAL_KEYS[keyCode] = `F${i}`;
  WIN_SPECIAL_KEYS[keyCode] = `F${i}`;
}

/**
 * Formats a modifier name with appropriate spacing
 * @private
 * @param {string} name - Modifier name
 * @param {boolean} withSpaces - Whether to include spaces
 * @returns {string} Formatted modifier string
 */
function formatModifier(name, withSpaces) {
  if (withSpaces) {
    return isMacKeyboard ? `${name} ` : `${name} + `;
  }
  return name;
}

/**
 * Default exports
 */
export default {
  Modifiers,
  isMacKeyboard,
  modifiersFromEvent,
  hashFromEvent,
  humanReadableModifiers,
  humanReadableHash
};
