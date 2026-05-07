/**
 * Module 34840 - Chart Storage HTTP Adapter
 *
 * HTTP adapter for chart storage operations including save/load charts,
 * study templates, drawing templates, layouts, and themes.
 * Supports both custom adapters and direct HTTP API calls.
 *
 * @module 34840-chart-storage-http
 * @see NETWORK_LAYER_ANALYSIS_COMPLETE.md for architecture details
 */

"use strict";

// Module dependencies
const loggerModule = require("./9343-logger");
const errorUtils = require("./39058-error-utils");
const settingsAdapter = require("./1765-settings-adapter");

// Initialize logger
const logger = loggerModule.getLogger("Chart.SaveloadAdapter.Library");

// Default response object
const defaultResponse = { error: "" };

// Configuration variables
let clientId, userId, baseUrl, chartIdentifier, customAdapter = null;
let cachedStudyTemplates = null;

/**
 * Builds the storage URL for a given endpoint
 * @param {string} endpoint - The API endpoint
 * @returns {string} The complete URL
 */
function buildStorageUrl(endpoint) {
  return `${baseUrl}/${encodeURIComponent(chartIdentifier)}/${endpoint}?client=${encodeURIComponent(clientId)}&user=${encodeURIComponent(userId)}`
}

/**
 * Sets the custom adapter for storage operations
 * @param {Object} adapter - The custom adapter instance
 */
function setCustomAdapter(adapter) {
  customAdapter = adapter
}

/**
 * Gets the current custom adapter
 * @returns {Object|null} The custom adapter or null
 */
function getCustomAdapter() {
  return customAdapter
}

/**
 * Initializes the storage adapter with configuration
 * @param {string} client - Client identifier
 * @param {string} user - User identifier
 * @param {string} url - Base API URL
 * @param {string} chart - Chart identifier
 */
function initializeStorage(client, user, url, chart) {
  clientId = client;
  userId = user;
  baseUrl = url;
  chartIdentifier = chart
}

/**
 * Updates the user identifier
 * @param {string} user - New user identifier
 */
function updateUser(user) {
  userId = user
}

/**
 * Gets the count of charts (not implemented)
 * @throws {Error} Always throws not implemented error
 */
function getChartsCount() {
  throw new Error("Not implemented")
}
/**
 * Fetches all charts for the current user
 * @returns {Promise<Array>} Array of chart metadata
 */
async function fetchAllCharts() {
  const transformChartData = (chartData) => chartData.map((chart) => ({
    id: chart.id,
    name: chart.name,
    image_url: String(chart.id),
    modified_iso: chart.timestamp,
    short_symbol: chart.symbol,
    interval: chart.resolution
  }));

  if (customAdapter) {
    return customAdapter.getAllCharts().then(transformChartData);
  }

  try {
    const response = await fetch(buildStorageUrl("charts"), {
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Getting chart content response was not OK. Status: ${response.status}.`);
    }
    const data = await response.json();
    if (data.status !== "ok") {
      throw new Error("Get chart content request failed: " + data.message);
    }
    return transformChartData(data.data);
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Removes a chart by ID
 * @param {string} chartId - The chart identifier to remove
 */
async function removeChart(chartId) {
  if (customAdapter) {
    return customAdapter.removeChart(chartId);
  }
  try {
    const response = await fetch(buildStorageUrl("charts") + "&chart=" + encodeURIComponent(chartId), {
      method: "DELETE",
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Remove chart response was not OK. Status: ${response.status}.`);
    }
    const data = await response.json();
    if (data.status !== "ok") {
      throw new Error("Remove drawing template request failed: " + data.message);
    }
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Saves a chart with the given parameters
 * @param {string} name - Chart name
 * @param {string} symbol - Trading symbol
 * @param {string} resolution - Chart resolution
 * @param {Object} content - Chart content data
 * @param {Object} options - Save options including id
 * @returns {Promise<Object>} Save result
 */
async function saveChart(name, symbol, resolution, content, options) {
  const chartId = options.id;
  const chartData = {
    name: name,
    content: JSON.stringify(content),
    symbol: symbol,
    resolution: resolution
  };

  try {
    if (customAdapter) {
      return {
        result: await customAdapter.saveChart({
          ...chartData,
          id: chartId,
          timestamp: Math.round(Date.now() / 1000)
        })
      };
    }

    const formData = new FormData();
    for (const key in chartData) {
      formData.append(key, chartData[key]);
    }

    let url = buildStorageUrl("charts");
    if (chartId != null) {
      url += "&chart=" + encodeURIComponent(chartId);
    }

    const response = await fetch(url, {
      credentials: "same-origin",
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Saving chart content response was not OK. Status: ${response.status}.`);
    }

    const result = await response.json();
    if (result.status !== "ok") {
      throw new Error("Saving chart content request failed: " + result.message);
    }

    return {
      result: (result.id !== null && result.id !== undefined ? result.id : chartId).toString(),
      response: response
    };
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Gets chart content by ID
 * @param {Object} chartInfo - Chart information object
 * @param {string} chartInfo.id - Chart identifier
 * @returns {Promise<Object>} Chart content
 */
async function getChartContent(chartInfo) {
  const parseContent = (content) => {
    const parsed = JSON.parse(content);
    parsed.uid = chartInfo.id;
    return parsed;
  };

  if (customAdapter) {
    return customAdapter.getChartContent(chartInfo.id).then((content) => parseContent(content));
  }

  try {
    const response = await fetch(buildStorageUrl("charts") + "&chart=" + encodeURIComponent(chartInfo.id), {
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Getting chart content response was not OK. Status: ${response.status}.`);
    }
    const data = await response.json();
    if (data.status !== "ok") {
      throw new Error("Get chart content request failed: " + data.message);
    }
    return parseContent(data.data.content);
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Loads a layout by chart info
 * @param {Object} chartInfo - Chart information
 * @returns {Promise<Object>} Layout data
 */
async function loadLayout(chartInfo) {
  try {
    return {
      chartWidgetCollectionState: await getChartContent(chartInfo),
      description: chartInfo.name,
      id: chartInfo.id,
      lastModified: chartInfo.modified_iso,
      name: chartInfo.name,
      uid: chartInfo.url,
      username: "",
      isPrivate: true
    };
  } catch (error) {
    logger.logWarn("Error loading chart");
    throw error;
  }
}

/**
 * Opens a layout link (not implemented)
 * @throws {Error} Always throws not implemented error
 */
function openLayoutLink() {
  throw new Error("Opening layout link is not supported")
}
/**
 * Removes a study template
 * @param {string} templateName - Name of the template to remove
 */
async function removeStudyTemplate(templateName) {
  try {
    const updatedTemplates = getQuickTemplates().filter((name) => name !== templateName);
    if (customAdapter) {
      setQuickTemplates(updatedTemplates);
      return customAdapter.removeStudyTemplate({ name: templateName });
    }
    const response = await fetch(buildStorageUrl("study_templates") + "&template=" + encodeURIComponent(templateName), {
      method: "DELETE",
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Remove study template response was not OK. Status: ${response.status}.`);
    }
    const data = await response.json();
    if (data.status !== "ok") {
      throw new Error("Remove study template request failed: " + data.message);
    }
    setQuickTemplates(updatedTemplates);
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Gets a study template by name
 * @param {string} templateName - Template name
 * @returns {Promise<Object>} Template content
 */
async function getStudyTemplateById(templateName) {
  try {
    if (customAdapter) {
      return {
        content: await customAdapter.getStudyTemplateContent({ name: templateName })
      };
    }
    const response = await fetch(buildStorageUrl("study_templates") + "&template=" + encodeURIComponent(templateName), {
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Get study template response was not OK. Status: ${response.status}.`);
    }
    const data = await response.json();
    if (data.status !== "ok") {
      throw new Error("Get study template request failed: " + data.message);
    }
    return data.data;
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Saves a study template
 * @param {Object} template - Template data with name and content
 * @returns {Promise<Object>} Save result
 */
async function saveStudyTemplate(template) {
  try {
    if (customAdapter) {
      return customAdapter.saveStudyTemplate(template)
        .then(() => ({ error: "" }))
        .catch((error) => ({
          error: error !== null && error !== undefined ? errorUtils.errorToString(error) : "error"
        }));
    }
    const formData = new FormData();
    formData.append("name", template.name);
    formData.append("content", template.content);
    const response = await fetch(buildStorageUrl("study_templates"), {
      method: "POST",
      body: formData,
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Save study template response was not OK. Status: ${response.status}.`);
    }
    const data = await response.json();
    return {
      error: data.status === "ok" ? "" : data.status
    };
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Gets the list of all study templates
 * @returns {Promise<Array>} List of templates
 */
async function getStudyTemplatesList() {
  try {
    if (cachedStudyTemplates) {
      return cachedStudyTemplates;
    }
    cachedStudyTemplates = [];
    const transformTemplates = (templates) => {
      cachedStudyTemplates = templates.map((template) => {
        const favoriteIndex = getQuickTemplates().indexOf(template.name);
        return {
          id: template.name,
          is_default: false,
          is_fundamental: false,
          name: template.name,
          favorite_date: favoriteIndex !== -1 ? favoriteIndex : null
        };
      });
      return cachedStudyTemplates;
    };
    if (customAdapter) {
      return customAdapter.getAllStudyTemplates().then(transformTemplates);
    }
    const response = await fetch(buildStorageUrl("study_templates"), {
      method: "GET",
      credentials: "same-origin"
    });
    if (!response.ok) {
      throw new Error(`Study templates list response was not OK. Status: ${response.status}.`);
    }
    const data = await response.json();
    if (data.status !== "ok") {
      throw new Error("Study templates list request failed: " + data.message);
    }
    return transformTemplates(data.data);
  } catch (error) {
    logger.logWarn(errorUtils.errorToString(error));
    throw error;
  }
}

/**
 * Invalidates the cached study templates list
 */
function invalidateStudyTemplatesList() {
  cachedStudyTemplates = null;
}

/**
 * Favorites a study template
 * @param {string} templateName - Template name
 * @param {boolean} isFavorite - Whether to favorite or unfavorite
 * @param {Function} callback - Optional callback function
 */
function favorStudyTemplate(templateName, isFavorite, callback) {
  const quickTemplates = getQuickTemplates();
  setQuickTemplates(isFavorite ? [...quickTemplates, templateName] : quickTemplates.filter((name) => name !== templateName));
  if (callback) {
    callback(null);
  }
}

/**
 * Favorites a standard study template
 * @param {string} templateName - Template name
 * @param {boolean} isFavorite - Whether to favorite
 * @param {Function} callback - Optional callback
 */
function favorStandardStudyTemplate(templateName, isFavorite, callback) {
  favorStudyTemplate(templateName, isFavorite, callback);
}

/**
 * Gets a standard study template by ID (not implemented)
 * @throws {Error} Always throws not implemented
 */
async function getStandardStudyTemplateById() {
  throw new Error("Not implemented");
}

/**
 * Renames a study template (not implemented)
 * @throws {Error} Always throws not implemented
 */
function renameStudyTemplate() {
  throw new Error("Not implemented");
}

/**
 * Replaces a study template (not implemented)
 * @throws {Error} Always throws not implemented
 */
function replaceStudyTemplate() {
  throw new Error("Not implemented");
}

/**
 * Gets drawing templates (not implemented)
 * @throws {Error} Always throws not implemented
 */
async function getDrawingTemplates() {
  throw new Error("Not implemented");
}

/**
 * Loads a drawing template (not implemented)
 * @throws {Error} Always throws not implemented
 */
async function loadDrawingTemplate() {
  throw new Error("Not implemented");
}

/**
 * Removes a drawing template (not implemented)
 * @throws {Error} Always throws not implemented
 */
async function removeDrawingTemplate() {
  throw new Error("Not implemented");
}

/**
 * Saves a drawing template (not implemented)
 * @throws {Error} Always throws not implemented
 */
async function saveDrawingTemplate() {
  throw new Error("Not implemented");
}

/**
 * Loads a theme by name
 * @param {string} themeName - Theme name
 * @returns {Promise<Object>} Theme content
 */
function loadTheme(themeName) {
  if (customAdapter !== null) {
    return customAdapter.getChartTemplateContent(themeName);
  }
  throw new Error("Not implemented");
}

/**
 * Loads all themes
 * @returns {Promise<Array>} List of themes
 */
function loadThemes() {
  return customAdapter !== null ? customAdapter.getAllChartTemplates() : Promise.resolve([]);
}

/**
 * Saves a theme
 * @param {string} themeName - Theme name
 * @param {Object} themeData - Theme data
 * @returns {Promise<Object>} Save result
 */
async function saveTheme(themeName, themeData) {
  if (customAdapter !== null) {
    try {
      await customAdapter.saveChartTemplate(themeName, themeData);
      return defaultResponse;
    } catch (error) {
      console.error(error);
      return {
        error: error instanceof Error ? error.message : error.toString()
      };
    }
  }
  throw new Error("Not implemented");
}

/**
 * Removes a theme
 * @param {string} themeName - Theme name to remove
 * @returns {Promise<Object>} Remove result
 */
async function removeTheme(themeName) {
  if (customAdapter !== null) {
    try {
      await customAdapter.removeChartTemplate(themeName);
      return defaultResponse;
    } catch (error) {
      console.error(error);
      return {
        error: error instanceof Error ? error.message : error.toString()
      };
    }
  }
  throw new Error("Not implemented");
}

/**
 * Checks if a theme exists
 * @param {string} themeName - Theme name to check
 * @returns {Promise<boolean>} Whether theme exists
 */
function isThemeExist(themeName) {
  return loadTheme(themeName).then((theme) => Boolean(theme.content));
}

/**
 * Gets quick templates from settings
 * @returns {Array} List of quick template names
 */
function getQuickTemplates() {
  return settingsAdapter.getJSON("StudyTemplates.quicks", []);
}

/**
 * Sets quick templates in settings
 * @param {Array} templates - List of template names
 */
function setQuickTemplates(templates) {
  settingsAdapter.setJSON("StudyTemplates.quicks", templates);
}

// Export all functions
module.exports = {
  initializeStorage,
  updateUser,
  setCustomAdapter,
  getCustomAdapter,
  fetchAllCharts,
  getChartsCount,
  getChartContent,
  saveChart,
  removeChart,
  loadLayout,
  openLayoutLink,
  getStudyTemplatesList,
  invalidateStudyTemplatesList,
  getStudyTemplateById,
  saveStudyTemplate,
  removeStudyTemplate,
  favorStudyTemplate,
  favorStandardStudyTemplate,
  getStandardStudyTemplateById,
  renameStudyTemplate,
  replaceStudyTemplate,
  getDrawingTemplates,
  loadDrawingTemplate,
  removeDrawingTemplate,
  saveDrawingTemplate,
  loadTheme,
  loadThemes,
  saveTheme,
  removeTheme,
  isThemeExist,
  buildStorageUrl
};