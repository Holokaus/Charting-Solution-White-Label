49251:(e,t,i)=>{"use strict";function s(e,t,i,s){return`${s?s+" ":""}${i?i+" ":""}${e}px ${t}`}i.d(t,{makeFont:()=>s,parseFont:()=>n});const o=/(bold )?(italic )?(\d+)(px|pt) (.*)$/;function n(e){const t=o.exec(e);return null===t?null:{family:t[5],size:parseInt(t[3])*("pt"===t[4]?.75:1),bold:Boolean(t[1]),italic:Boolean(t[2])}}
}
