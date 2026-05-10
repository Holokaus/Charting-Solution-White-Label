/**
 * ============================================================================
 * TRADINGVIEW MODULE 27593 - STUDY MIGRATION
 * ============================================================================
 *
 * Purpose: Study migration utilities and factory functions
 *
 * Size: 9.7 KB
 *
 * Classes:
 *   - StudyMigrationFactory: Study migration factory
 *   - StudyMigration: Study migration implementation
 *
 * Features:
 *   - Migration rule management
 *   - Input migration processing
 *   - Version-based migrations
 *   - Migration factory pattern
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 12217: Collection utilities
 *   - 48096: Delegate class
 *   - 99481: Study utilities
 *   - 60661: Study utilities
 *   - 58554: Study utilities
 *   - 69866: Study utilities
 *   - 82130: Study utilities
 *   - 39488: Study utilities
 *
 * Exports:
 *   - StudyMigrationFactory: Study migration factory class
 *
 * @module 27593
 * @category Technical Indicators
 * @subcategory Study Migration
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    StudyMigrationFactory: () => StudyMigrationFactory
  });

  const assertionUtils = moduleRequire(50151),
    collectionUtils = moduleRequire(12217),
    Delegate = moduleRequire(48096),
    studyUtils = moduleRequire(99481),
    studyUtils2 = moduleRequire(60661),
    studyUtils3 = moduleRequire(58554),
    studyUtils4 = moduleRequire(69866),
    studyUtils5 = moduleRequire(82130),
    studyUtils6 = moduleRequire(39488);

  /**
   * Study migration factory class
   */
  class StudyMigrationFactory {
    /**
     * @param {string} studyId - Study identifier
     */
    constructor(studyId) {
      this._studyId = studyId;
      this._migrations = new Map();
    }

    /**
     * Add migration rule
     * @param {string} versionFrom - From version
     * @param {string} versionTo - To version
     * @param {Array} rules - Migration rules
     */
    addMigration(versionFrom, versionTo, rules) {
      const migration = new StudyMigration(versionFrom, versionTo, rules);
      this._migrations.set(`${versionFrom}-${versionTo}`, migration);
    }

    /**
     * Update inputs through migrations
     * @param {string} versionFrom - From version
     * @param {string} versionTo - To version
     * @param {Object} inputs - Input object
     * @returns {Object} Updated inputs
     */
    updateInputs(versionFrom, versionTo, inputs) {
      const migrationKey = `${versionFrom}-${versionTo}`;
      const migration = this._migrations.get(migrationKey);
      
      if (migration) {
        return migration.process(inputs);
      }
      
      return inputs;
    }

    /**
     * Get migration for version range
     * @param {string} versionFrom - From version
     * @param {string} versionTo - To version
     * @returns {StudyMigration|null} Migration object or null
     */
    getMigration(versionFrom, versionTo) {
      const migrationKey = `${versionFrom}-${versionTo}`;
      return this._migrations.get(migrationKey) || null;
    }
  }

  /**
   * Study migration implementation
   */
  class StudyMigration {
    /**
     * @param {string} versionFrom - From version
     * @param {string} versionTo - To version
     * @param {Array} rules - Migration rules
     */
    constructor(versionFrom, versionTo, rules) {
      this._versionFrom = versionFrom;
      this._versionTo = versionTo;
      this._rules = rules;
    }

    /**
     * Process migration rules
     * @param {Object} inputs - Input object
     * @returns {Object} Processed inputs
     */
    process(inputs) {
      let processedInputs = { ...inputs };
      
      for (const rule of this._rules) {
        processedInputs = this._applyRule(rule, processedInputs);
      }
      
      return processedInputs;
    }

    /**
     * Apply single migration rule
     * @param {Object} rule - Migration rule
     * @param {Object} inputs - Input object
     * @returns {Object} Updated inputs
     */
    _applyRule(rule, inputs) {
      switch (rule.type) {
        case 'rename_input':
          return this._renameInput(rule, inputs);
        case 'remove_input':
          return this._removeInput(rule, inputs);
        case 'add_input':
          return this._addInput(rule, inputs);
        case 'modify_input':
          return this._modifyInput(rule, inputs);
        default:
          return inputs;
      }
    }

    /**
     * Rename input
     * @param {Object} rule - Migration rule
     * @param {Object} inputs - Input object
     * @returns {Object} Updated inputs
     */
    _renameInput(rule, inputs) {
      const { oldId, newId } = rule;
      
      if (inputs[oldId]) {
        inputs[newId] = inputs[oldId];
        delete inputs[oldId];
      }
      
      return inputs;
    }

    /**
     * Remove input
     * @param {Object} rule - Migration rule
     * @param {Object} inputs - Input object
     * @returns {Object} Updated inputs
     */
    _removeInput(rule, inputs) {
      const { inputId } = rule;
      
      if (inputs[inputId]) {
        delete inputs[inputId];
      }
      
      return inputs;
    }

    /**
     * Add input
     * @param {Object} rule - Migration rule
     * @param {Object} inputs - Input object
     * @returns {Object} Updated inputs
     */
    _addInput(rule, inputs) {
      const { inputId, inputConfig } = rule;
      
      inputs[inputId] = inputConfig;
      
      return inputs;
    }

    /**
     * Modify input
     * @param {Object} rule - Migration rule
     * @param {Object} inputs - Input object
     * @returns {Object} Updated inputs
     */
    _modifyInput(rule, inputs) {
      const { inputId, properties } = rule;
      
      if (inputs[inputId]) {
        inputs[inputId] = { ...inputs[inputId], ...properties };
      }
      
      return inputs;
    }
  }

  // Export the StudyMigrationFactory class
  moduleExports.StudyMigrationFactory = StudyMigrationFactory;
}
