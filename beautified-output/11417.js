/**
 * Module 11417 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

11417: (e, t, i) => {
    "use strict";
    const {
      getLogger: s
    } = i(9343), o = s("TVLocalStorage");
    var n = function() {
      try {
        this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem(
          "tvlocalstorage.available", "true")
      } catch (e) {
        delete this.isAvailable, delete this.localStorage
      }
      this._updateLength();
      try {
        this._report()
      } catch (e) {}
    };
    n.prototype._report = function() {
      if (this.isAvailable) {
        const e = 10,
          t = [];
        for (let e = 0; e < this.localStorage.length; e++) {
          const i = this.key(e);
          t.push({
            key: i,
            length: String(this.getItem(i)).length
          })
        }
        t.sort(((e, t) => t.length - e.length));
        const i = t.slice(0, e);
        t.sort(((e, t) => t.key.length - e.key.length));
        const s = t.slice(0, e);
        o.logNormal(`Total amount of keys in Local Storage: ${this.length}`), o.logNormal(
          `Top ${e} keys with longest values: ${JSON.stringify(i)}`), o.logNormal(
          `Top ${e} longest key names: ${JSON.stringify(s)}`);
        try {
          navigator.storage.estimate().then((e => {
            o.logNormal(`Storage estimate: ${JSON.stringify(e)}`)
          }))
        } catch (e) {}
      }
    }, n.prototype.length = 0, n.prototype.isAvailable = !1, n.prototype.localStorage = {
      "tvlocalstorage.available": "false"
    }, n.prototype._updateLength = function() {
      if (this.isAvailable) this.length = this.localStorage.length;
      else {
        var e, t = 0;
        for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && t++;
        this.length = t
      }
    }, n.prototype.key = function(e) {
      return this.isAvailable ? this.localStorage.key(e) : Object.keys(this.localStorage)[e]
    }, n.prototype.getItem = function(e) {
      return this.isAvailable ? this.localStorage.getItem(e) : void 0 === this.localStorage[e] ? null : this
        .localStorage[e]
    }, n.prototype.setItem = function(e, t) {
      this.isAvailable ? this.localStorage.setItem(e, t) : this.localStorage[e] = t, this._updateLength()
    }, n.prototype.removeItem = function(e) {
      this.isAvailable ? this.localStorage.removeItem(e) : delete this.localStorage[e], this._updateLength()
    }, n.prototype.clear = function() {
      this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength()
    }, window.TVLocalStorage = new n, e.exports.TVLocalStorage = window.TVLocalStorage