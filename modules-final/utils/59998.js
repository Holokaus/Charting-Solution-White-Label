59998:(e,t,i)=>{"use strict";i.d(t,{WatchedObject:()=>r});var s=i(87465),o=i(2072);function n(e,t){return(0,s.deepEquals)(e,t)[0]}class r extends o.WatchedValue{constructor(e,t=n){super(e),this._comparator=t}setValue(e,t){!t&&this._comparator(this.value(),e)||super.setValue(e,t)}}
}
