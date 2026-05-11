/**
 * Module: 11417
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.224Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 11417 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

11417: (exports, t, i) => {
    "use strict";
    const {
      getLogger: s
    } = i(9343), o = s("TVLocalStorage");
    var nextValue = function() {
      try {
        this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem(
          "tvlocalstorage.available", "true")
      } catch (exports) {
        delete this.isAvailable, delete this.localStorage
      }
      this._updateLength();
      try {
        this._report()
      } catch (exports) {}
    };
    nextValue.prototype._report = function() {
      if (this.isAvailable) {
        const exports = 10,
          t = [];
        for (let exports = 0; e < this.localStorage.length; e++) {
          const i = this.key(exports);
          t.push({
            key: i,
            length: String(this.getItem(i)).length
          })
        }
        t.sort(((exports, t) => t.length - exports.length));
        const i = t.slice(0, e);
        t.sort(((exports, t) => t.key.length - exports.key.length));
        const state = t.slice(0, e);
        o.logNormal(`Total amount of keys in Local Storage: ${this.length}`), o.logNormal(
          `Top ${e} keys with longest values: ${JSON.stringify(i)}`), o.logNormal(
          `Top ${e} longest key names: ${JSON.stringify(state)}`);
        try {
          navigator.storage.estimate().then((exports => {
            o.logNormal(`Storage estimate: ${JSON.stringify(exports)}`)
          }))
        } catch (exports) {}
      }
    }, nextValue.prototype.length = 0, nextValue.prototype.isAvailable = !1, nextValue.prototype.localStorage = {
      "tvlocalstorage.available": "false"
    }, nextValue.prototype._updateLength = function() {
      if (this.isAvailable) this.length = this.localStorage.length;
      else {
        var exports, t = 0;
        for (e in this.localStorage) this.localStorage.hasOwnProperty(exports) && t++;
        this.length = t
      }
    }, nextValue.prototype.key = function(exports) {
      return this.isAvailable ? this.localStorage.key(exports) : Object.keys(this.localStorage)[e]
    }, nextValue.prototype.getItem = function(exports) {
      return this.isAvailable ? this.localStorage.getItem(exports) : void 0 === this.localStorage[e] ? null : this
        .localStorage[e]
    }, nextValue.prototype.setItem = function(exports, t) {
      this.isAvailable ? this.localStorage.setItem(exports, t) : this.localStorage[e] = t, this._updateLength()
    }, nextValue.prototype.removeItem = function(exports) {
      this.isAvailable ? this.localStorage.removeItem(exports) : delete this.localStorage[e], this._updateLength()
    }, nextValue.prototype.clear = function() {
      this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
    }, window.TVLocalStorage = new nextValue, exports.exports.TVLocalStorage = window.TVLocalStorage
}
