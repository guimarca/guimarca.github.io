(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return h}});var n=r(8947),o=r(5697),i=r.n(o),a=r(7294);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function b(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=y(t.slice(0,n)),i=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[o]=i,e}),{})}var m=!1;try{m=!0}catch(g){}function d(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function h(e){var t=e.forwardedRef,r=u(e,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,s=r.className,l=r.title,y=r.titleId,b=d(o),g=O("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,i=e.inverse,a=e.border,s=e.listItem,l=e.flip,f=e.size,u=e.rotation,p=e.pull,y=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":s,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(f),"undefined"!==typeof f&&null!==f),c(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),c(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map((function(e){return y[e]?e:null})).filter((function(e){return e}))}(r)),p(s.split(" ")))),j=O("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),x=O("mask",d(i)),w=(0,n.qv)(b,f({},g,{},j,{},x,{symbol:a,title:l,titleId:y}));if(!w)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var _=w.abstract,k={ref:t};return Object.keys(r).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),v(_[0],k)}h.displayName="FontAwesomeIcon",h.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),i=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=b(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[y(t)]=n}return e}),{attrs:{}}),a=n.style,s=void 0===a?{}:a,c=u(n,["style"]);return i.attrs.style=f({},i.attrs.style,{},s),t.apply(void 0,[r.tag,f({},i.attrs,{},c)].concat(p(o)))}.bind(null,a.createElement)},4086:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7814),o=r(1417),i=r(3024),a=r(5893);function s(){return(0,a.jsx)("div",{className:"has-text-centered",children:(0,a.jsxs)("section",{className:"section home-header",children:[(0,a.jsx)("h1",{className:"title mt-6",dangerouslySetInnerHTML:{__html:i.Do}}),(0,a.jsxs)("div",{className:"is-size-2",children:[(0,a.jsx)("a",{href:i.eH.k.p,className:"mr-3",children:(0,a.jsx)(n.G,{icon:o.D9H})}),(0,a.jsx)("a",{href:i.eH._.p,children:(0,a.jsx)(n.G,{icon:o.mGT})})]})]})})}},8809:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(4086)}])},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3024:function(e){"use strict";e.exports=JSON.parse('{"Do":"guim<span style=\'display: none\'>5238fd2e-8ff6-4bf1-8fb5-0b1da25f502f</span>arca (at) gm<span style=\'display: none\'>f9db0400-3a55-4ce4-a455-31a344c10ba3</span>ail (dot) com","eH":{"k":{"p":"https://es.linkedin.com/in/guillem-mart%C3%ADnez-c%C3%A0novas-00ba6164"},"_":{"p":"https://stackoverflow.com/users/2436306/gmc"}}}')}},function(e){e.O(0,[112,774,888,179],(function(){return t=8809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);