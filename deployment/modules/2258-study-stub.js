/**
 * @module 2258 - Study Stub
 * @description Defines the StudyStub class, a lightweight placeholder for studies
 * that are being loaded or have minimal functionality. Used as a base class for
 * deferred study instantiation and status management.
 */

import { default as isEqual } from '../50279';
import { isObject } from '../30551';
import { ensureDefined } from '../50151';
import { WatchedValue } from '../52499';
import '../48943';
import '../51304';
import { StudyStatusView } from '../80671';
import { PriceDataSource } from '../67135';
import { PriceFormatter } from '../67563';
import { Delegate } from '../48096';
import { Property } from '../43337';
import { StudyStatusProviderBase } from '../35990';
import { TitleDisplayTarget } from '../36313';
import { StudyStatusType } from '../86252';
import { isStudyState } from '../29447';
import { isStudyDescriptor } from '../72972';

/**
 * Status text provider for StudyStub
 * 
 * @private
 */
class StudyStubStatusTextProvider extends StudyStatusProviderBase {
  /**
   * Get the status text for display
   * 
   * @returns {string} Formatted status text
   */
  text() {
    return this._source.isActualInterval()
      ? `${this._source.title(TitleDisplayTarget.StatusLine)} ${this.sourceStatusText()}`
      : this._source.title(TitleDisplayTarget.StatusLine);
  }
}

/**
 * Empty values provider for stub studies
 * 
 * @private
 */
class EmptyValuesProvider {
  getItems() {
    return [];
  }

  getValues(source) {
    return [];
  }
}

// Shared delegate for interval change notifications
const intervalChangeDelegate = new Delegate();

/**
 * StudyStub Class
 * 
 * A lightweight placeholder implementation of a study that provides minimal
 * functionality while the full study is being loaded or when the study
 * represents a simple data source without complex rendering.
 * 
 * @extends PriceDataSource
 * 
 * @property {number} _priceStep - Price step increment (default: 0.01)
 * @property {Object|null} _origState - Original state descriptor
 * @property {Object|null} _descriptor - Current study descriptor
 * @property {Object} _status - Current status object
 * @property {Delegate} _statusChanged - Status change event delegate
 * @property {Delegate} _descriptorChanged - Descriptor change event delegate
 * @property {PriceFormatter} _formatter - Price formatter instance
 * @property {WatchedValue} _showPineVersionInStatusLine - Flag for showing Pine version
 * @property {Object|null} _pineSourceCodeModel - Pine source code model (null for stubs)
 * @property {string} _title - Display title
 * @property {boolean} _alwaysShowInLegend - Always show in legend flag
 * @property {boolean} _isOverlay - Is overlay study flag
 * @property {Object} _studyMetaInfo - Study metadata
 * @property {Property} _properties - Study properties
 * @property {StudyStatusView} _statusView - Status view component
 */
export class StudyStub extends PriceDataSource {
  /**
   * Create a StudyStub instance
   * 
   * @param {Object} model - Chart model reference
   * @param {Object|Function} descriptorOrState - Study descriptor or state function
   * @param {string} title - Display title for the study
   * @param {boolean} [isOverlay] - Whether this is an overlay study
   * @param {Object} [studyMetaInfo] - Optional study metadata
   */
  constructor(model, descriptorOrState, title, isOverlay, studyMetaInfo = null) {
    super(model);
    
    // Initialize properties
    this._priceStep = 0.01;
    this._origState = null;
    this._descriptor = null;
    this._status = { type: StudyStatusType.Undefined };
    this._statusChanged = new Delegate();
    this._descriptorChanged = new Delegate();
    this._formatter = new PriceFormatter({ priceScale: 100 });
    this._showPineVersionInStatusLine = new WatchedValue(false).spawn();
    this._pineSourceCodeModel = null;
    
    // Set descriptor or original state
    if (isStudyDescriptor(descriptorOrState)) {
      this._descriptor = descriptorOrState;
    } else {
      this._origState = descriptorOrState;
    }
    
    // Store basic info
    this._title = title;
    this._alwaysShowInLegend = isOverlay !== undefined;
    this._isOverlay = isOverlay;
    this._studyMetaInfo = studyMetaInfo;
    
    // Initialize property and view objects
    this._properties = new Property({ visible: true });
    this._statusView = new StudyStatusView(this);
  }

  /**
   * Clean up resources
   */
  destroy() {
    this._pineSourceCodeModel?.destroy();
    this._showPineVersionInStatusLine.destroy();
    super.destroy();
  }

  /**
   * Get bar colorer function (not implemented for stubs)
   * 
   * @returns {null} Always null
   */
  barColorer() {
    return null;
  }

  /**
   * Get study properties
   * 
   * @returns {Property} Properties object
   */
  properties() {
    return this._properties;
  }

  /**
   * Get status view component
   * 
   * @returns {StudyStatusView} Status view
   */
  statusView() {
    return this._statusView;
  }

  /**
   * Get legend view (not implemented for stubs)
   * 
   * @returns {null} Always null
   */
  legendView() {
    return null;
  }

  /**
   * Get the original state
   * 
   * @param {*} e - Parameter (unused)
   * @returns {Object|null} Original state
   */
  state(e) {
    return this._origState;
  }

  /**
   * Get the current descriptor
   * 
   * @returns {Object|null} Descriptor object or null
   */
  getDescriptor() {
    if (this._descriptor === null) {
      return null;
    }
    
    return {
      descriptor: this._descriptor,
      title: this._title,
      isOverlay: this._isOverlay,
      id: this.id(),
      status: this._status
    };
  }

  /**
   * Update the study descriptor
   * 
   * @param {Object} newDescriptor - New descriptor to set
   * @fires StudyStub#descriptorChanged
   */
  updateDescriptor(newDescriptor) {
    if (!isEqual(this._descriptor, newDescriptor)) {
      this._descriptor = newDescriptor;
      this._descriptorChanged.fire();
    }
  }

  /**
   * Subscribe to descriptor changes
   * 
   * @returns {Delegate} Delegate for subscription
   */
  onDescriptorChanged() {
    return this._descriptorChanged;
  }

  /**
   * Get study metadata
   * 
   * @returns {Object} Study metadata
   */
  metaInfo() {
    return this._studyMetaInfo;
  }

  /**
   * Set study metadata
   * 
   * @param {Object} metaInfo - New metadata
   */
  setMetaInfo(metaInfo) {
    this._studyMetaInfo = metaInfo;
  }

  /**
   * Set the study status
   * 
   * @param {Object} status - Status object with type and optional error details
   * @fires StudyStub#statusChanged
   */
  setStatus(status) {
    const wasDisplayedInLegend = this.isDisplayedInLegend();
    
    this._status = status;
    this._statusChanged.fire();
    
    // Invalidate legend layout if display status changed
    if (this.isDisplayedInLegend() !== wasDisplayedInLegend) {
      const pane = this._model.paneForSource(this);
      if (pane) {
        const paneIndex = this._model.panes().indexOf(pane);
        const invalidationMask = InvalidationMask.invalidateLegendWidgetLayout(paneIndex);
        this.model().invalidate(invalidationMask);
      }
    }
  }

  /**
   * Get the price formatter
   * 
   * @returns {PriceFormatter} Formatter instance
   */
  formatter() {
    return this._formatter;
  }

  /**
   * Get the study name
   * 
   * @returns {string} Study title
   */
  name() {
    return this._title;
  }

  /**
   * Get the full title
   * 
   * @returns {string} Complete title string
   */
  title() {
    return this.titleInParts().join(' ');
  }

  /**
   * Get title parts array
   * 
   * @returns {Array<string>} Array of title components
   */
  titleInParts() {
    const parts = [this._title];
    
    if (this._showPineVersionInStatusLine.value()) {
      parts.push(ensureDefined(this._studyMetaInfo?.pine).version);
    }
    
    return parts;
  }

  /**
   * Get inputs in parts (not implemented for stubs)
   * 
   * @returns {null} Always null
   */
  inputsInParts() {
    return null;
  }

  /**
   * Check if the study has failed
   * 
   * @returns {boolean} True if status is Error
   */
  isFailed() {
    return this._status.type === StudyStatusType.Error;
  }

  /**
   * Check if the study is loading
   * 
   * @returns {boolean} True if status is Loading
   */
  isLoading() {
    return this._status.type === StudyStatusType.Loading;
  }

  /**
   * Check if the study should be displayed in the legend
   * 
   * @returns {boolean} True if always shown or failed
   */
  isDisplayedInLegend() {
    return this._alwaysShowInLegend || this.isFailed();
  }

  /**
   * Mark the study as failed
   * 
   * @param {Error} error - Error object
   * @param {string} title - Error title
   */
  setFailed(error, title) {
    this.setStatus({
      type: StudyStatusType.Error,
      errorDescription: { error, title }
    });
    this._model.updateSource(this);
  }

  /**
   * Check if symbol is invalid (not applicable for stubs)
   * 
   * @returns {boolean} Always false
   */
  isSymbolInvalid() {
    return false;
  }

  /**
   * Check if the interval is actual/current
   * 
   * @returns {boolean} Always true
   */
  isActualInterval() {
    return true;
  }

  /**
   * Subscribe to interval change events
   * 
   * @returns {Delegate} Delegate for subscription
   */
  onIsActualIntervalChange() {
    return intervalChangeDelegate;
  }

  /**
   * Start the study (no-op for stubs)
   */
  start() {}

  /**
   * Get the current status
   * 
   * @returns {Object} Status object
   */
  status() {
    return this._status;
  }

  /**
   * Subscribe to status changes
   * 
   * @returns {Delegate} Delegate for subscription
   */
  onStatusChanged() {
    return this._statusChanged;
  }

  /**
   * Get first value (not implemented for stubs)
   * 
   * @returns {null} Always null
   */
  firstValue() {
    return null;
  }

  /**
   * Get currency (inherited from main series)
   * 
   * @returns {null} Currency from main series
   */
  currency() {
    return null;
  }

  /**
   * Get session ID (inherited from main series)
   * 
   * @returns {*} Session ID
   */
  sessionId() {
    return this._model.mainSeries().sessionId();
  }

  /**
   * Subscribe to session ID changes
   * 
   * @returns {Delegate} Session ID change delegate
   */
  sessionIdChanged() {
    return this._model.mainSeries().sessionIdChanged();
  }

  /**
   * Get unit (not applicable for stubs)
   * 
   * @returns {null} Always null
   */
  unit() {
    return null;
  }

  /**
   * Get the symbol source (main series)
   * 
   * @returns {Object} Main series
   */
  symbolSource() {
    return this._model.mainSeries();
  }

  /**
   * Get symbol source watched value
   * 
   * @returns {WatchedValue} Symbol source WV
   */
  symbolSourceWV() {
    return this._model.mainSeries().symbolSourceWV();
  }

  /**
   * Get bars provider (main series)
   * 
   * @returns {Object} Main series
   */
  barsProvider() {
    return this._model.mainSeries();
  }

  /**
   * Get values provider (empty for stubs)
   * 
   * @returns {EmptyValuesProvider} Empty provider
   */
  valuesProvider() {
    return new EmptyValuesProvider();
  }

  /**
   * Get legend values provider (empty for stubs)
   * 
   * @returns {EmptyValuesProvider} Empty provider
   */
  legendValuesProvider() {
    return new EmptyValuesProvider();
  }

  /**
   * Get status provider
   * 
   * @param {*} e - Parameter (unused)
   * @returns {StudyStubStatusTextProvider} Status provider
   */
  statusProvider(e) {
    return new StudyStubStatusTextProvider(this);
  }

  /**
   * Check if removed by study templates
   * 
   * @returns {boolean} True if has original state and is a study state
   */
  isRemovedByStudyTemplates() {
    return this._origState !== null && isStudyState(this._origState);
  }

  /**
   * Get Pine source code model (not available for stubs)
   * 
   * @returns {Promise<null>} Resolves to null
   */
  pineSourceCodeModel() {
    return Promise.resolve(null);
  }

  /**
   * Get context menu statistic name
   * 
   * @returns {string} Menu stat name
   */
  contextMenuStatName() {
    return 'StudyStubContextMenu';
  }
}

/**
 * Check if an object is a StudyStub descriptor
 * 
 * @param {*} obj - Object to check
 * @returns {boolean} True if object has descriptor property and it's a study descriptor
 */
export function isStudyStubDescriptor(obj) {
  return isObject(obj) && 
         'descriptor' in obj && 
         isStudyDescriptor(obj.descriptor);
}

// Default exports
export default {
  StudyStub,
  isStudyStubDescriptor
};
