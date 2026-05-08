/**
 * ============================================================================
 * TRADINGVIEW MODULE 10980 - IMAGE UPLOAD UTILITIES
 * ============================================================================
 *
 * Purpose: Image upload utilities with size validation and data URL generation
 *
 * Size: 2.4 KB
 *
 * Functions:
 *   - checkImageSize: Check if image size is within limits
 *   - generateLink: Generate data URL from image file
 *   - getMaxImageSizeInBytes: Get maximum allowed image size
 *   - getMaxImageSizeLabel: Get human-readable size label
 *   - imageIsOversized: Check if image exceeds size limit
 *   - setImageStorageAdapter: Set image storage adapter
 *   - uploadImage: Upload image with size validation
 *
 * Features:
 *   - Image size validation (default: 2MB)
 *   - Base64 data URL generation
 *   - Human-readable size formatting
 *   - Error handling for oversized images
 *
 * Dependencies:
 *   - 11542: i18n translations
 *
 * @module 10980
 * @category Image Processing
 * @subpackage Upload Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    checkImageSize: () => checkImageSize,
    generateLink: () => generateLink,
    getMaxImageSizeInBytes: () => getMaxImageSizeInBytes,
    getMaxImageSizeLabel: () => getMaxImageSizeLabel,
    imageIsOversized: () => imageIsOversized,
    setImageStorageAdapter: () => setImageStorageAdapter,
    uploadImage: () => uploadImage
  });

  const i18n = moduleRequire(11542);
  const DATA_URL_PATTERN = /data:(.+?);base64,(.+)/;
  let maxImageSize = 2e6; // 2MB default

  /**
   * Set image storage adapter for size limits
   * @param {Object} adapter - Storage adapter with getMaxImageSizeInBytes method
   */
  function setImageStorageAdapter(adapter) {
    maxImageSize = adapter.getMaxImageSizeInBytes();
  }

  /**
   * Generate data URL from image file
   * @param {File} imageFile - Image file to convert
   * @returns {Promise<string>} Promise resolving to data URL
   */
  async function generateLink(imageFile) {
    return new Promise(((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", (() => resolve(reader.result)));
      reader.addEventListener("error", reject);
      reader.addEventListener("abort", reject);
      reader.readAsDataURL(imageFile);
    }));
  }

  /**
   * Check if image is oversized
   * @param {File} imageFile - Image file to check
   * @returns {boolean} True if image exceeds size limit
   */
  function imageIsOversized(imageFile) {
    return function(imageFile) {
      const match = imageFile.src.match(DATA_URL_PATTERN);
      if (null === match) return 1 / 0;
      
      const [, mimeType, base64Data] = match;
      const binaryData = atob(base64Data);
      const byteArray = new Array(binaryData.length);
      
      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }
      
      const uint8Array = new Uint8Array(byteArray);
      return new Blob([uint8Array], {
        type: mimeType
      }).size;
    }(imageFile) > maxImageSize;
  }

  /**
   * Check if image size is within limits
   * @param {File} imageFile - Image file to check
   * @returns {boolean} True if size is acceptable
   */
  async function checkImageSize(imageFile) {
    return imageFile.size <= maxImageSize;
  }

  /**
   * Upload image with size validation
   * @param {File} imageFile - Image file to upload
   * @returns {Promise<string>} Promise resolving to data URL
   */
  async function uploadImage(imageFile) {
    if (!await checkImageSize(imageFile)) {
      throw new Error(i18n.watchedValue_t(null, {
        replace: {
          value: getMaxImageSizeLabel()
        }
      }, moduleRequire(93738)));
    }
    return generateLink(imageFile);
  }

  /**
   * Get maximum allowed image size in bytes
   * @returns {number} Maximum size in bytes
   */
  function getMaxImageSizeInBytes() {
    return maxImageSize;
  }

  /**
   * Get human-readable size label
   * @returns {string} Formatted size string (e.g., "2.00 MB")
   */
  function getMaxImageSizeLabel() {
    const exponent = Math.floor(Math.log(maxImageSize) / Math.log(1e3));
    const size = (maxImageSize / Math.pow(1e3, exponent)).toFixed(2);
    const unit = ["Bytes", "KB", "MB", "GB", "TB", "PB"][exponent];
    return `${size} ${unit}`;
  }
}
