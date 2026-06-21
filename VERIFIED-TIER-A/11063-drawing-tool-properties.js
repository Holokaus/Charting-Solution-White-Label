/**
 * Module 11063: Drawing Tool Properties Panel
 * 
 * Manages the properties panel for drawing tools on the chart.
 * Handles visibility toggles, style configurations, and input parameters
 * for various annotation tools like trend lines, fibonacci retracements, etc.
 * 
 * @module 11063
 * @namespace DrawingToolProperties
 */

/**
 * Default configuration for line-based drawing tools.
 * @typedef {Object} LineToolConfig
 * @property {string} color - Hex color code.
 * @property {number} linewidth - Width of the line in pixels.
 * @property {string} linestyle - Style: 'solid', 'dotted', 'dashed'.
 * @property {boolean} extendLeft - Extend line to the left.
 * @property {boolean} extendRight - Extend line to the right.
 */

const defaultLineConfig = {
    color: '#2962FF',
    linewidth: 2,
    linestyle: 'solid',
    extendLeft: false,
    extendRight: false
};

/**
 * Configuration for text-based annotations.
 * @typedef {Object} TextToolConfig
 * @property {string} text - The display text.
 * @property {number} fontsize - Font size in pixels.
 * @property {string} fontfamily - Font family name.
 * @property {string} color - Text color.
 * @property {string} backgroundColor - Background fill color (transparent if none).
 * @property {boolean} bold - Bold text flag.
 * @property {boolean} italic - Italic text flag.
 */

const defaultTextConfig = {
    text: 'Text',
    fontsize: 12,
    fontfamily: 'Arial',
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    bold: false,
    italic: false
};

/**
 * Creates a property panel definition for a specific tool type.
 * 
 * @param {string} toolType - Type of tool ('line', 'text', 'fibonacci', 'brush').
 * @returns {Object} Property panel schema.
 */
export function createPropertyPanel(toolType) {
    const baseSchema = {
        id: `properties_${toolType}`,
        title: `${capitalizeFirst(toolType)} Properties`,
        sections: []
    };

    switch (toolType) {
        case 'line':
            baseSchema.sections.push({
                id: 'style',
                title: 'Style',
                inputs: [
                    { id: 'color', type: 'color', label: 'Color', default: defaultLineConfig.color },
                    { id: 'linewidth', type: 'integer', label: 'Width', min: 1, max: 10, default: defaultLineConfig.linewidth },
                    { id: 'linestyle', type: 'select', label: 'Style', options: ['solid', 'dotted', 'dashed'], default: defaultLineConfig.linestyle },
                    { id: 'extendLeft', type: 'checkbox', label: 'Extend Left', default: defaultLineConfig.extendLeft },
                    { id: 'extendRight', type: 'checkbox', label: 'Extend Right', default: defaultLineConfig.extendRight }
                ]
            });
            break;

        case 'text':
            baseSchema.sections.push({
                id: 'text',
                title: 'Text',
                inputs: [
                    { id: 'text', type: 'text', label: 'Content', default: defaultTextConfig.text },
                    { id: 'fontsize', type: 'integer', label: 'Size', min: 8, max: 72, default: defaultTextConfig.fontsize },
                    { id: 'color', type: 'color', label: 'Color', default: defaultTextConfig.color },
                    { id: 'bold', type: 'checkbox', label: 'Bold', default: defaultTextConfig.bold },
                    { id: 'italic', type: 'checkbox', label: 'Italic', default: defaultTextConfig.italic }
                ]
            });
            break;

        case 'fibonacci':
            baseSchema.sections.push({
                id: 'levels',
                title: 'Levels',
                inputs: [
                    { id: 'showLevels', type: 'checkbox', label: 'Show Levels', default: true },
                    { id: 'levelColors', type: 'color_array', label: 'Level Colors' },
                    { id: 'reverse', type: 'checkbox', label: 'Reverse Levels', default: false }
                ]
            });
            break;
            
        default:
            console.warn(`Unknown tool type: ${toolType}`);
    }

    return baseSchema;
}

/**
 * Updates the properties of an existing drawing tool instance.
 * 
 * @param {Object} toolInstance - The drawing tool object.
 * @param {string} propertyPath - Dot notation path (e.g., 'style.color').
 * @param {*} value - New value to set.
 */
export function updateToolProperty(toolInstance, propertyPath, value) {
    if (!toolInstance || !propertyPath) return;

    const parts = propertyPath.split('.');
    let current = toolInstance.properties();

    for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]]) {
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }

    const lastProp = parts[parts.length - 1];
    
    // Validate value before setting
    if (isValidPropertyValue(lastProp, value)) {
        current[lastProp].setValue(value);
    } else {
        console.error(`Invalid value for property ${propertyPath}: ${value}`);
    }
}

/**
 * Validates a property value based on its type.
 * @private
 */
function isValidPropertyValue(propName, value) {
    if (propName === 'color') {
        return /^#([0-9A-F]{3}){1,2}$/i.test(value);
    }
    if (propName === 'linewidth') {
        return typeof value === 'number' && value > 0;
    }
    if (propName === 'linestyle') {
        return ['solid', 'dotted', 'dashed'].includes(value);
    }
    return true;
}

/**
 * Resets all properties of a tool to their defaults.
 * 
 * @param {Object} toolInstance - The drawing tool object.
 * @param {string} toolType - Type of tool to determine defaults.
 */
export function resetToolProperties(toolInstance, toolType) {
    if (!toolInstance) return;

    let defaults = {};
    if (toolType === 'line') defaults = defaultLineConfig;
    else if (toolType === 'text') defaults = defaultTextConfig;

    for (const key in defaults) {
        if (toolInstance.properties()[key]) {
            toolInstance.properties()[key].setValue(defaults[key]);
        }
    }
}

/**
 * Serializes tool properties to a JSON string for storage.
 * 
 * @param {Object} toolInstance - The drawing tool.
 * @returns {string} JSON string.
 */
export function serializeToolProperties(toolInstance) {
    if (!toolInstance) return '{}';
    
    const props = toolInstance.properties();
    const serialized = {};

    for (const key in props) {
        if (props[key] && typeof props[key].value === 'function') {
            serialized[key] = props[key].value();
        } else {
            serialized[key] = props[key];
        }
    }

    return JSON.stringify(serialized);
}

/**
 * Deserializes a JSON string and applies properties to a tool.
 * 
 * @param {Object} toolInstance - The drawing tool.
 * @param {string} jsonString - JSON string from serializeToolProperties.
 */
export function deserializeToolProperties(toolInstance, jsonString) {
    if (!toolInstance || !jsonString) return;

    try {
        const data = JSON.parse(jsonString);
        for (const key in data) {
            if (toolInstance.properties()[key]) {
                toolInstance.properties()[key].setValue(data[key]);
            }
        }
    } catch (e) {
        console.error('Failed to deserialize tool properties:', e);
    }
}

// Helper
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default {
    createPropertyPanel,
    updateToolProperty,
    resetToolProperties,
    serializeToolProperties,
    deserializeToolProperties,
    defaultLineConfig,
    defaultTextConfig
};
