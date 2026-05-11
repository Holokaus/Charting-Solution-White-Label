28477:(e,t,i)=>{"use strict";i.d(t,{AbstractBarColorer:()=>s});class s{constructor(){this._backColorers=[]}barStyle(e,t,i){const s={};for(const o of this._backColorers)o.applyBarStyle(e,t,s,i);return this.applyBarStyle(e,t,s,i),s}pushBackBarColorer(e){this._backColorers.unshift(e)}firstColoredBar(e){return null}}
}
