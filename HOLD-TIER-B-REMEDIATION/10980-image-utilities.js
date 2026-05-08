/**
 * ============================================================================
 * TRADINGVIEW MODULE 10980 - IMAGE UTILITIES
 * ============================================================================
 *
 * Purpose: Image processing and validation utilities
 *
 * Size: 2.4 KB
 *
 * Functions:
 *   - checkImageSize: Check image size
 *   - generateLink: Generate image link
 *   - getMaxImageSizeInBytes: Get max image size
 *   - getMaxImageSizeLabel: Get max size label
 *   - imageIsOversized: Check if image is oversized
 *   - setImageStorageAdapter: Set image storage adapter
 *   - uploadImage: Upload image
 *
 * Features:
 *   - Image size validation
 *   - Base64 image processing
 *   - Storage adapter management
 *   - Image upload functionality
 *   - Size limit enforcement
 *
 * Dependencies:
 *   - 11542: Image utilities
 *
 * Exports:
 *   - checkImageSize: Image size check function
 *   - generateLink: Link generation function
 *   - getMaxImageSizeInBytes: Max size getter function
 *   - getMaxImageSizeLabel: Max size label function
 *   - imageIsOversized: Image size check function
 *   - setImageStorageAdapter: Storage adapter setter function
 *   - uploadImage: Image upload function
 *
 * @module 10980
 * @category Image Processing
 * @subpackage Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.watchedValue_d(moduleConfig, {
    checkImageSize: () => checkImageSize,
    generateLink: () => generateLink,
    getMaxImageSizeInBytes: () => getMaxImageSizeInBytes,
    getMaxImageSizeLabel: () => getMaxImageSizeLabel,
    imageIsOversized: () => imageIsOversized,
    setImageStorageAdapter: () => setImageStorageAdapter,
    uploadImage: () => uploadImage
  });

  const ImageUtils = moduleRequire(11542);
  const base64Pattern = /data:(.+?);base64,(.+)/;
  let maxImageSizeInBytes = 2e6;

  /**
   * Set image storage adapter
   * @param {Object} adapter - Storage adapter
   */
  function setImageStorageAdapter(adapter) {
    maxImageSizeInBytes = adapter.getMaxImageSizeInBytes();
  }

  /**
   * Generate link from image
   * @param {Object} image - Image object
   * @returns {Promise} Promise resolving to link
   */
  async function generateLink(image) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result));
      reader.addEventListener("error", reject);
      reader.addEventListener("abort", reject);
      reader.readAsDataURL(image);
    });
  }

  /**
   * Check if image is oversized
   * @param {Object} image - Image object
   * @returns {boolean} True if oversized
   */
  function imageIsOversized(image) {
    return function(image) {
      const match = image.src.match(base64Pattern);
      if (match === null) {
        return 1 / 0;
      }
      
      const [mimeType, base64Data] = match;
      const decodedString = atob(base64Data);
      const byteArray = new Array(decodedString.length);
      
      for (let i = 0; i < decodedString.length; i++) {
        byteArray[i] = decodedString.charCodeAt(i);
      }
      
      const uint8Array = new Uint8Array(byteArray);
      return new Blob([uint8Array], { type: mimeType }).size;
    }(image.src) > maxImageSizeInBytes;
  }

  /**
   * Check image size
   * @param {Object} image - Image object
   * @returns {Promise} Promise resolving to size check
   */
  async function checkImageSize(image) {
    return image.size <= maxImageSizeInBytes;
  }

  /**
   * Upload image
   * @param {Object} image - Image object
   * @returns {Promise} Promise resolving to upload result
   */
  async function uploadImage(image) {
    if (!await checkImageSize(image)) {
      throw new Error(ImageUtils.watchedValue_t(null, {
        replace: {
          maxSize: maxImageSizeInBytes
        }
      }));
    }
    
    // Implementation would go here for actual upload
    return Promise.resolve(image);
  }

  /**
   * Get max image size in bytes
   * @returns {number} Max size in bytes
   */
  function getMaxImageSizeInBytes() {
    return maxImageSizeInBytes;
  }

  /**
   * Get max image size label
   * @returns {string} Size label
   */
  function getMaxImageSizeLabel() {
    return `${(maxImageSizeInBytes / 1024 / 1024).toFixed(1)} MB`;
  }
}
