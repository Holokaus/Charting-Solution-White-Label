/**
 * Module 10980 - Image Upload & Validation Utilities
 * 
 * Provides utilities for image file validation, conversion, and upload handling.
 * Includes file size checking, base64 encoding, and storage adapter integration.
 * 
 * @module 10980-image-upload-utils
 */

"use strict";

// Import i18n module for translations
const i18nModule = require('./11542');
const translationManager = i18nModule;

// Regex pattern to extract mime type and base64 data from data URIs
const DATA_URI_PATTERN = /data:(.+?);base64,(.+)/;

// Maximum image file size in bytes (2MB)
let maxImageSizeBytes = 2e6;

/**
 * Image Storage Adapter - Interface for custom storage backends
 * @interface ImageStorageAdapter
 * @property {Function} getMaxImageSizeInBytes - Returns max allowed size
 */
let imageStorageAdapter = null;

/**
 * Set a custom image storage adapter
 * @param {ImageStorageAdapter} adapter - Custom storage adapter implementation
 */
function setImageStorageAdapter(adapter) {
    if (adapter) {
        maxImageSizeBytes = adapter.getMaxImageSizeInBytes();
        imageStorageAdapter = adapter;
    }
}

/**
 * Generate a data URI link from an image file
 * Converts file to base64 data URL format
 * 
 * @param {File} imageFile - The image file to convert
 * @returns {Promise<string>} Resolves with data URI string
 */
async function generateLink(imageFile) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        
        fileReader.addEventListener("load", () => {
            resolve(fileReader.result);
        });
        fileReader.addEventListener("error", reject);
        fileReader.addEventListener("abort", reject);
        
        fileReader.readAsDataURL(imageFile);
    });
}

/**
 * Helper function to get size of base64-encoded image
 * Decodes data URI and calculates actual blob size
 * 
 * @param {string} dataUri - The data URI string
 * @returns {number} Size in bytes, or Infinity if invalid
 * @private
 */
function getBase64ImageSize(dataUri) {
    const match = dataUri.match(DATA_URI_PATTERN);
    if (!match) {
        return Infinity;  // Invalid format = oversized
    }
    
    const [fullMatch, mimeType, base64Data] = match;
    const binaryString = atob(base64Data);
    const byteArray = new Array(binaryString.length);
    
    for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
    }
    
    const uint8Array = new Uint8Array(byteArray);
    const blob = new Blob([uint8Array], { type: mimeType });
    
    return blob.size;
}

/**
 * Check if an image file is within size limits
 * 
 * @param {File} imageFile - The image file to check
 * @returns {Promise<boolean>} True if file size is acceptable
 */
async function checkImageSize(imageFile) {
    return imageFile.size <= maxImageSizeBytes;
}

/**
 * Check if an image (in data URI form) is oversized
 * 
 * @param {HTMLImageElement} imageElement - Image element with src attribute
 * @returns {boolean} True if image exceeds maximum size
 */
function imageIsOversized(imageElement) {
    const dataUriSize = getBase64ImageSize(imageElement.src);
    return dataUriSize > maxImageSizeBytes;
}

/**
 * Upload an image file after validation
 * Checks file size and throws error if exceeded
 * 
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<string>} Data URI of the uploaded image
 * @throws {Error} If image exceeds maximum allowed size
 */
async function uploadImage(imageFile) {
    const isValidSize = await checkImageSize(imageFile);
    
    if (!isValidSize) {
        const maxSizeLabel = getMaxImageSizeLabel();
        const errorMessage = translationManager.t(null, {
            replace: {
                value: maxSizeLabel
            }
        }, require('./93738'));
        
        throw new Error(errorMessage);
    }
    
    return generateLink(imageFile);
}

/**
 * Get the maximum image size in bytes
 * 
 * @returns {number} Maximum size in bytes
 */
function getMaxImageSizeInBytes() {
    return maxImageSizeBytes;
}

/**
 * Get human-readable maximum image size label (e.g., "2.00MB")
 * Formats the byte size with appropriate unit
 * 
 * @returns {string} Formatted size string (e.g., "2.00MB", "500.00KB")
 */
function getMaxImageSizeLabel() {
    // Calculate the unit scale (0=Bytes, 1=KB, 2=MB, 3=GB, etc.)
    const unitScale = Math.floor(Math.log(maxImageSizeBytes) / Math.log(1e3));
    const units = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    
    // Convert to scaled unit and format to 2 decimal places
    const scaledSize = (maxImageSizeBytes / Math.pow(1e3, unitScale)).toFixed(2);
    const unitName = units[unitScale] || "B";
    
    return `${scaledSize}${unitName}`;
}

/**
 * Export all public functions
 */
module.exports = {
    checkImageSize: () => checkImageSize,
    generateLink: () => generateLink,
    getMaxImageSizeInBytes: () => getMaxImageSizeInBytes,
    getMaxImageSizeLabel: () => getMaxImageSizeLabel,
    imageIsOversized: () => imageIsOversized,
    setImageStorageAdapter: () => setImageStorageAdapter,
    uploadImage: () => uploadImage
};
