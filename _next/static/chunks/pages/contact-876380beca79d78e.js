(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return v}});var n=r(3636),o=r(5697),a=r.n(o),s=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function b(e){var t;return(t=e,(t-=0)==t)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var y=["style"],m=!1;try{m=!0}catch(d){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var v=s.forwardRef(function(e,t){var r,o,a,s,i,c,p,b,y,d,x,j,k,w,_,P,I,N,S,T=e.icon,A=e.mask,E=e.symbol,C=e.className,D=e.title,R=e.titleId,z=e.maskId,W=h(T),H=O("classes",[].concat(u((o=e.beat,a=e.fade,s=e.beatFade,i=e.bounce,c=e.shake,p=e.flash,b=e.spin,y=e.spinPulse,d=e.spinReverse,x=e.pulse,j=e.fixedWidth,k=e.inverse,w=e.border,_=e.listItem,P=e.flip,I=e.size,N=e.rotation,S=e.pull,Object.keys((f(r={"fa-beat":o,"fa-fade":a,"fa-beat-fade":s,"fa-bounce":i,"fa-shake":c,"fa-flash":p,"fa-spin":b,"fa-spin-reverse":d,"fa-spin-pulse":y,"fa-pulse":x,"fa-fw":j,"fa-inverse":k,"fa-border":w,"fa-li":_,"fa-flip":!0===P,"fa-flip-horizontal":"horizontal"===P||"both"===P,"fa-flip-vertical":"vertical"===P||"both"===P},"fa-".concat(I),null!=I),f(r,"fa-rotate-".concat(N),null!=N&&0!==N),f(r,"fa-pull-".concat(S),null!=S),f(r,"fa-swap-opacity",e.swapOpacity),r)).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),u(C.split(" ")))),F=O("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),L=O("mask",h(A)),U=(0,n.qv)(W,l(l(l(l({},H),F),L),{},{symbol:E,title:D,titleId:R,maskId:z}));if(!U)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",W),null;var G=U.abstract,Q={ref:t};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(Q[t]=e[t])}),g(G[0],Q)});v.displayName="FontAwesomeIcon",v.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),a=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=b(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o).charAt(0).toUpperCase()+r.slice(1)]=a:e[o]=a,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e},{attrs:{}}),s=n.style,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,y);return a.attrs.style=l(l({},a.attrs.style),void 0===s?{}:s),t.apply(void 0,[r.tag,l(l({},a.attrs),i)].concat(u(o)))}).bind(null,s.createElement)},382:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(7814),o=r(3024),a=r(5656),s=r(5893);function i(){return(0,s.jsx)("div",{className:"has-text-centered",children:(0,s.jsxs)("section",{className:"section home-header",children:[(0,s.jsx)("h1",{className:"title mt-6",dangerouslySetInnerHTML:{__html:a.Do}}),(0,s.jsxs)("div",{className:"is-size-2",children:[(0,s.jsx)("a",{href:a.eH.k.p,className:"mr-3",children:(0,s.jsx)(n.G,{icon:o.D9H})}),(0,s.jsx)("a",{href:a.eH._.p,children:(0,s.jsx)(n.G,{icon:o.mGT})})]})]})})}},8367:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(382)}])},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,s){if(s!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5656:function(e){"use strict";e.exports=JSON.parse('{"Do":"guim<span style=\'display: none\'>410a1499-4468-4112-b775-2d2ddafbf345</span>arca (at) gm<span style=\'display: none\'>4fbfb48b-f2a7-4b6d-9fca-56d325141c4c</span>ail (dot) com","eH":{"k":{"p":"https://es.linkedin.com/in/guillem-martinez-canovas"},"_":{"p":"https://stackoverflow.com/users/2436306/gmc"}}}')}},function(e){e.O(0,[948,774,888,179],function(){return e(e.s=8367)}),_N_E=e.O()}]);