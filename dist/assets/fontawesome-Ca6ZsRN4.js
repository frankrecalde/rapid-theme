function ta(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,e)}return t}function c(n){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?ta(Object(t),!0).forEach(function(e){y(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ta(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function kn(n){"@babel/helpers - typeof";return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},kn(n)}function tt(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function ea(n,a){for(var t=0;t<a.length;t++){var e=a[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function et(n,a,t){return a&&ea(n.prototype,a),t&&ea(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function y(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function Un(n,a){return it(n)||st(n,a)||Oa(n,a)||lt()}function on(n){return rt(n)||ot(n)||Oa(n)||ft()}function rt(n){if(Array.isArray(n))return _n(n)}function it(n){if(Array.isArray(n))return n}function ot(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function st(n,a){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var e=[],r=!0,o=!1,i,s;try{for(t=t.call(n);!(r=(i=t.next()).done)&&(e.push(i.value),!(a&&e.length===a));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&t.return!=null&&t.return()}finally{if(o)throw s}}return e}}function Oa(n,a){if(n){if(typeof n=="string")return _n(n,a);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _n(n,a)}}function _n(n,a){(a==null||a>n.length)&&(a=n.length);for(var t=0,e=new Array(a);t<a;t++)e[t]=n[t];return e}function ft(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ra=function(){},Vn={},Na={},Ia=null,Ta={mark:ra,measure:ra};try{typeof window<"u"&&(Vn=window),typeof document<"u"&&(Na=document),typeof MutationObserver<"u"&&(Ia=MutationObserver),typeof performance<"u"&&(Ta=performance)}catch{}var ct=Vn.navigator||{},ia=ct.userAgent,oa=ia===void 0?"":ia,F=Vn,b=Na,sa=Ia,ln=Ta;F.document;var L=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",_a=~oa.indexOf("MSIE")||~oa.indexOf("Trident/"),cn,un,mn,vn,dn,T="___FONT_AWESOME___",Mn=16,Ma="fa",La="svg-inline--fa",V="data-fa-i2svg",Ln="data-fa-pseudo-element",ut="data-fa-pseudo-element-pending",Wn="data-prefix",Xn="data-icon",fa="fontawesome-i2svg",mt="async",vt=["HTML","HEAD","STYLE","SCRIPT"],za=function(){try{return!0}catch{return!1}}(),p="classic",h="sharp",Gn=[p,h];function sn(n){return new Proxy(n,{get:function(t,e){return e in t?t[e]:t[p]}})}var nn=sn((cn={},y(cn,p,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(cn,h,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),cn)),an=sn((un={},y(un,p,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(un,h,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),un)),tn=sn((mn={},y(mn,p,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(mn,h,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),mn)),dt=sn((vn={},y(vn,p,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(vn,h,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),vn)),gt=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ra="fa-layers-text",pt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bt=sn((dn={},y(dn,p,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(dn,h,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),dn)),Fa=[1,2,3,4,5,6,7,8,9,10],ht=Fa.concat([11,12,13,14,15,16,17,18,19,20]),yt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(an[p]).map(en.add.bind(en));Object.keys(an[h]).map(en.add.bind(en));var kt=[].concat(Gn,on(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(Fa.map(function(n){return"".concat(n,"x")})).concat(ht.map(function(n){return"w-".concat(n)})),J=F.FontAwesomeConfig||{};function wt(n){var a=b.querySelector("script["+n+"]");if(a)return a.getAttribute(n)}function xt(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(b&&typeof b.querySelector=="function"){var At=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];At.forEach(function(n){var a=Un(n,2),t=a[0],e=a[1],r=xt(wt(t));r!=null&&(J[e]=r)})}var Da={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ma,replacementClass:La,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);var q=c(c({},Da),J);q.autoReplaceSvg||(q.observeMutations=!1);var m={};Object.keys(Da).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(t){q[n]=t,Z.forEach(function(e){return e(m)})},get:function(){return q[n]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){q.cssPrefix=a,Z.forEach(function(t){return t(m)})},get:function(){return q.cssPrefix}});F.FontAwesomeConfig=m;var Z=[];function St(n){return Z.push(n),function(){Z.splice(Z.indexOf(n),1)}}var R=Mn,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Et(n){if(!(!n||!L)){var a=b.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=n;for(var t=b.head.childNodes,e=null,r=t.length-1;r>-1;r--){var o=t[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=o)}return b.head.insertBefore(a,e),n}}var Ct="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var n=12,a="";n-- >0;)a+=Ct[Math.random()*62|0];return a}function K(n){for(var a=[],t=(n||[]).length>>>0;t--;)a[t]=n[t];return a}function Bn(n){return n.classList?K(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(a){return a})}function ja(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pt(n){return Object.keys(n||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(ja(n[t]),'" ')},"").trim()}function An(n){return Object.keys(n||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(n[t].trim(),";")},"")}function qn(n){return n.size!==I.size||n.x!==I.x||n.y!==I.y||n.rotate!==I.rotate||n.flipX||n.flipY}function Ot(n){var a=n.transform,t=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Nt(n){var a=n.transform,t=n.width,e=t===void 0?Mn:t,r=n.height,o=r===void 0?Mn:r,i=n.startCentered,s=i===void 0?!1:i,f="";return s&&_a?f+="translate(".concat(a.x/R-e/2,"em, ").concat(a.y/R-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):f+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),f+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var It=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ya(){var n=Ma,a=La,t=m.cssPrefix,e=m.replacementClass,r=It;if(t!==n||e!==a){var o=new RegExp("\\.".concat(n,"\\-"),"g"),i=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");r=r.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(e))}return r}var la=!1;function On(){m.autoAddCss&&!la&&(Et(Ya()),la=!0)}var Tt={mixout:function(){return{dom:{css:Ya,insertCss:On}}},hooks:function(){return{beforeDOMElementCreation:function(){On()},beforeI2svg:function(){On()}}}},_=F||{};_[T]||(_[T]={});_[T].styles||(_[T].styles={});_[T].hooks||(_[T].hooks={});_[T].shims||(_[T].shims=[]);var P=_[T],$a=[],_t=function n(){b.removeEventListener("DOMContentLoaded",n),wn=1,$a.map(function(a){return a()})},wn=!1;L&&(wn=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),wn||b.addEventListener("DOMContentLoaded",_t));function Mt(n){L&&(wn?setTimeout(n,0):$a.push(n))}function fn(n){var a=n.tag,t=n.attributes,e=t===void 0?{}:t,r=n.children,o=r===void 0?[]:r;return typeof n=="string"?ja(n):"<".concat(a," ").concat(Pt(e),">").concat(o.map(fn).join(""),"</").concat(a,">")}function ca(n,a,t){if(n&&n[a]&&n[a][t])return{prefix:a,iconName:t,icon:n[a][t]}}var Lt=function(a,t){return function(e,r,o,i){return a.call(t,e,r,o,i)}},Nn=function(a,t,e,r){var o=Object.keys(a),i=o.length,s=r!==void 0?Lt(t,r):t,f,u,l;for(e===void 0?(f=1,l=a[o[0]]):(f=0,l=e);f<i;f++)u=o[f],l=s(l,a[u],u,a);return l};function zt(n){for(var a=[],t=0,e=n.length;t<e;){var r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<e){var o=n.charCodeAt(t++);(o&64512)==56320?a.push(((r&1023)<<10)+(o&1023)+65536):(a.push(r),t--)}else a.push(r)}return a}function zn(n){var a=zt(n);return a.length===1?a[0].toString(16):null}function Rt(n,a){var t=n.length,e=n.charCodeAt(a),r;return e>=55296&&e<=56319&&t>a+1&&(r=n.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function ua(n){return Object.keys(n).reduce(function(a,t){var e=n[t],r=!!e.icon;return r?a[e.iconName]=e.icon:a[t]=e,a},{})}function Rn(n,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=t.skipHooks,r=e===void 0?!1:e,o=ua(a);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(n,ua(a)):P.styles[n]=c(c({},P.styles[n]||{}),o),n==="fas"&&Rn("fa",a)}var gn,pn,bn,X=P.styles,Ft=P.shims,Dt=(gn={},y(gn,p,Object.values(tn[p])),y(gn,h,Object.values(tn[h])),gn),Kn=null,Ha={},Ua={},Va={},Wa={},Xa={},jt=(pn={},y(pn,p,Object.keys(nn[p])),y(pn,h,Object.keys(nn[h])),pn);function Yt(n){return~kt.indexOf(n)}function $t(n,a){var t=a.split("-"),e=t[0],r=t.slice(1).join("-");return e===n&&r!==""&&!Yt(r)?r:null}var Ga=function(){var a=function(o){return Nn(X,function(i,s,f){return i[f]=Nn(s,o,{}),i},{})};Ha=a(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),Ua=a(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),Xa=a(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var t="far"in X||m.autoFetchSvg,e=Nn(Ft,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Va=e.names,Wa=e.unicodes,Kn=Sn(m.styleDefault,{family:m.familyDefault})};St(function(n){Kn=Sn(n.styleDefault,{family:m.familyDefault})});Ga();function Qn(n,a){return(Ha[n]||{})[a]}function Ht(n,a){return(Ua[n]||{})[a]}function U(n,a){return(Xa[n]||{})[a]}function Ba(n){return Va[n]||{prefix:null,iconName:null}}function Ut(n){var a=Wa[n],t=Qn("fas",n);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function D(){return Kn}var Jn=function(){return{prefix:null,iconName:null,rest:[]}};function Sn(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,e=t===void 0?p:t,r=nn[e][n],o=an[e][n]||an[e][r],i=n in P.styles?n:null;return o||i||null}var ma=(bn={},y(bn,p,Object.keys(tn[p])),y(bn,h,Object.keys(tn[h])),bn);function En(n){var a,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,r=e===void 0?!1:e,o=(a={},y(a,p,"".concat(m.cssPrefix,"-").concat(p)),y(a,h,"".concat(m.cssPrefix,"-").concat(h)),a),i=null,s=p;(n.includes(o[p])||n.some(function(u){return ma[p].includes(u)}))&&(s=p),(n.includes(o[h])||n.some(function(u){return ma[h].includes(u)}))&&(s=h);var f=n.reduce(function(u,l){var v=$t(m.cssPrefix,l);if(X[l]?(l=Dt[s].includes(l)?dt[s][l]:l,i=l,u.prefix=l):jt[s].indexOf(l)>-1?(i=l,u.prefix=Sn(l,{family:s})):v?u.iconName=v:l!==m.replacementClass&&l!==o[p]&&l!==o[h]&&u.rest.push(l),!r&&u.prefix&&u.iconName){var d=i==="fa"?Ba(u.iconName):{},g=U(u.prefix,u.iconName);d.prefix&&(i=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!X.far&&X.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},Jn());return(n.includes("fa-brands")||n.includes("fab"))&&(f.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===h&&(X.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=U(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=D()||"fas"),f}var Vt=function(){function n(){tt(this,n),this.definitions={}}return et(n,[{key:"add",value:function(){for(var t=this,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){t.definitions[s]=c(c({},t.definitions[s]||{}),i[s]),Rn(s,i[s]);var f=tn[p][s];f&&Rn(f,i[s]),Ga()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,u=i.icon,l=u[2];t[s]||(t[s]={}),l.length>0&&l.forEach(function(v){typeof v=="string"&&(t[s][v]=u)}),t[s][f]=u}),t}}]),n}(),va=[],G={},B={},Wt=Object.keys(B);function Xt(n,a){var t=a.mixoutsTo;return va=n,G={},Object.keys(B).forEach(function(e){Wt.indexOf(e)===-1&&delete B[e]}),va.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(t[i]=r[i]),kn(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=r[i][s]})}),e.hooks){var o=e.hooks();Object.keys(o).forEach(function(i){G[i]||(G[i]=[]),G[i].push(o[i])})}e.provides&&e.provides(B)}),t}function Fn(n,a){for(var t=arguments.length,e=new Array(t>2?t-2:0),r=2;r<t;r++)e[r-2]=arguments[r];var o=G[n]||[];return o.forEach(function(i){a=i.apply(null,[a].concat(e))}),a}function W(n){for(var a=arguments.length,t=new Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];var r=G[n]||[];r.forEach(function(o){o.apply(null,t)})}function M(){var n=arguments[0],a=Array.prototype.slice.call(arguments,1);return B[n]?B[n].apply(null,a):void 0}function Dn(n){n.prefix==="fa"&&(n.prefix="fas");var a=n.iconName,t=n.prefix||D();if(a)return a=U(t,a)||a,ca(qa.definitions,t,a)||ca(P.styles,t,a)}var qa=new Vt,Gt=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,W("noAuto")},Bt={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(W("beforeI2svg",a),M("pseudoElements2svg",a),M("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Mt(function(){Kt({autoReplaceSvgRoot:t}),W("watch",a)})}},qt={icon:function(a){if(a===null)return null;if(kn(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:U(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=Sn(a[0]);return{prefix:e,iconName:U(e,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(gt))){var r=En(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||D(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var o=D();return{prefix:o,iconName:U(o,a)||a}}}},S={noAuto:Gt,config:m,dom:Bt,parse:qt,library:qa,findIconDefinition:Dn,toHtml:fn},Kt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,e=t===void 0?b:t;(Object.keys(P.styles).length>0||m.autoFetchSvg)&&L&&m.autoReplaceSvg&&S.dom.i2svg({node:e})};function Cn(n,a){return Object.defineProperty(n,"abstract",{get:a}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return fn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(L){var e=b.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function Qt(n){var a=n.children,t=n.main,e=n.mask,r=n.attributes,o=n.styles,i=n.transform;if(qn(i)&&t.found&&!e.found){var s=t.width,f=t.height,u={x:s/f/2,y:.5};r.style=An(c(c({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Jt(n){var a=n.prefix,t=n.iconName,e=n.children,r=n.attributes,o=n.symbol,i=o===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:e}]}]}function Zn(n){var a=n.icons,t=a.main,e=a.mask,r=n.prefix,o=n.iconName,i=n.transform,s=n.symbol,f=n.title,u=n.maskId,l=n.titleId,v=n.extra,d=n.watchable,g=d===void 0?!1:d,w=e.found?e:t,E=w.width,C=w.height,O=r==="fak",k=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(z){return v.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(v.classes).join(" "),x={children:[],attributes:c(c({},v.attributes),{},{"data-prefix":r,"data-icon":o,class:k,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(C)})},N=O&&!~v.classes.indexOf("fa-fw")?{width:"".concat(E/C*16*.0625,"em")}:{};g&&(x.attributes[V]=""),f&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||rn())},children:[f]}),delete x.attributes.title);var A=c(c({},x),{},{prefix:r,iconName:o,main:t,mask:e,maskId:u,transform:i,symbol:s,styles:c(c({},N),v.styles)}),Y=e.found&&t.found?M("generateAbstractMask",A)||{children:[],attributes:{}}:M("generateAbstractIcon",A)||{children:[],attributes:{}},$=Y.children,Pn=Y.attributes;return A.children=$,A.attributes=Pn,s?Jt(A):Qt(A)}function da(n){var a=n.content,t=n.width,e=n.height,r=n.transform,o=n.title,i=n.extra,s=n.watchable,f=s===void 0?!1:s,u=c(c(c({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(u[V]="");var l=c({},i.styles);qn(r)&&(l.transform=Nt({transform:r,startCentered:!0,width:t,height:e}),l["-webkit-transform"]=l.transform);var v=An(l);v.length>0&&(u.style=v);var d=[];return d.push({tag:"span",attributes:u,children:[a]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Zt(n){var a=n.content,t=n.title,e=n.extra,r=c(c(c({},e.attributes),t?{title:t}:{}),{},{class:e.classes.join(" ")}),o=An(e.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),t&&i.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),i}var In=P.styles;function jn(n){var a=n[0],t=n[1],e=n.slice(4),r=Un(e,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:a,height:t,icon:i}}var ne={found:!1,width:512,height:512};function ae(n,a){!za&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(a,'" is missing.'))}function Yn(n,a){var t=a;return a==="fa"&&m.styleDefault!==null&&(a=D()),new Promise(function(e,r){if(M("missingIconAbstract"),t==="fa"){var o=Ba(n)||{};n=o.iconName||n,a=o.prefix||a}if(n&&a&&In[a]&&In[a][n]){var i=In[a][n];return e(jn(i))}ae(n,a),e(c(c({},ne),{},{icon:m.showMissingIcons&&n?M("missingIconAbstract")||{}:{}}))})}var ga=function(){},$n=m.measurePerformance&&ln&&ln.mark&&ln.measure?ln:{mark:ga,measure:ga},Q='FA "6.5.2"',te=function(a){return $n.mark("".concat(Q," ").concat(a," begins")),function(){return Ka(a)}},Ka=function(a){$n.mark("".concat(Q," ").concat(a," ends")),$n.measure("".concat(Q," ").concat(a),"".concat(Q," ").concat(a," begins"),"".concat(Q," ").concat(a," ends"))},na={begin:te,end:Ka},hn=function(){};function pa(n){var a=n.getAttribute?n.getAttribute(V):null;return typeof a=="string"}function ee(n){var a=n.getAttribute?n.getAttribute(Wn):null,t=n.getAttribute?n.getAttribute(Xn):null;return a&&t}function re(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function ie(){if(m.autoReplaceSvg===!0)return yn.replace;var n=yn[m.autoReplaceSvg];return n||yn.replace}function oe(n){return b.createElementNS("http://www.w3.org/2000/svg",n)}function se(n){return b.createElement(n)}function Qa(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,e=t===void 0?n.tag==="svg"?oe:se:t;if(typeof n=="string")return b.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(i){r.setAttribute(i,n.attributes[i])});var o=n.children||[];return o.forEach(function(i){r.appendChild(Qa(i,{ceFn:e}))}),r}function fe(n){var a=" ".concat(n.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var yn={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(r){t.parentNode.insertBefore(Qa(r),t)}),t.getAttribute(V)===null&&m.keepOriginalSource){var e=b.createComment(fe(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(a){var t=a[0],e=a[1];if(~Bn(t).indexOf(m.replacementClass))return yn.replace(a);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var o=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var i=e.map(function(s){return fn(s)}).join(`
`);t.setAttribute(V,""),t.innerHTML=i}};function ba(n){n()}function Ja(n,a){var t=typeof a=="function"?a:hn;if(n.length===0)t();else{var e=ba;m.mutateApproach===mt&&(e=F.requestAnimationFrame||ba),e(function(){var r=ie(),o=na.begin("mutate");n.map(r),o(),t()})}}var aa=!1;function Za(){aa=!0}function Hn(){aa=!1}var xn=null;function ha(n){if(sa&&m.observeMutations){var a=n.treeCallback,t=a===void 0?hn:a,e=n.nodeCallback,r=e===void 0?hn:e,o=n.pseudoElementsCallback,i=o===void 0?hn:o,s=n.observeMutationsRoot,f=s===void 0?b:s;xn=new sa(function(u){if(!aa){var l=D();K(u).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!pa(v.addedNodes[0])&&(m.searchPseudoElements&&i(v.target),t(v.target)),v.type==="attributes"&&v.target.parentNode&&m.searchPseudoElements&&i(v.target.parentNode),v.type==="attributes"&&pa(v.target)&&~yt.indexOf(v.attributeName))if(v.attributeName==="class"&&ee(v.target)){var d=En(Bn(v.target)),g=d.prefix,w=d.iconName;v.target.setAttribute(Wn,g||l),w&&v.target.setAttribute(Xn,w)}else re(v.target)&&r(v.target)})}}),L&&xn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function le(){xn&&xn.disconnect()}function ce(n){var a=n.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(e,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(e[i]=s.join(":").trim()),e},{})),t}function ue(n){var a=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=En(Bn(n));return r.prefix||(r.prefix=D()),a&&t&&(r.prefix=a,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=Ht(r.prefix,n.innerText)||Qn(r.prefix,zn(n.innerText))),!r.iconName&&m.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function me(n){var a=K(n.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),t=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return m.autoA11y&&(t?a["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||rn()):(a["aria-hidden"]="true",a.focusable="false")),a}function ve(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ya(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=ue(n),e=t.iconName,r=t.prefix,o=t.rest,i=me(n),s=Fn("parseNodeAttributes",{},n),f=a.styleParser?ce(n):[];return c({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var de=P.styles;function nt(n){var a=m.autoReplaceSvg==="nest"?ya(n,{styleParser:!1}):ya(n);return~a.extra.classes.indexOf(Ra)?M("generateLayersText",n,a):M("generateSvgReplacementMutation",n,a)}var j=new Set;Gn.map(function(n){j.add("fa-".concat(n))});Object.keys(nn[p]).map(j.add.bind(j));Object.keys(nn[h]).map(j.add.bind(j));j=on(j);function ka(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var t=b.documentElement.classList,e=function(v){return t.add("".concat(fa,"-").concat(v))},r=function(v){return t.remove("".concat(fa,"-").concat(v))},o=m.autoFetchSvg?j:Gn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(de));o.includes("fa")||o.push("fa");var i=[".".concat(Ra,":not([").concat(V,"])")].concat(o.map(function(l){return".".concat(l,":not([").concat(V,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=K(n.querySelectorAll(i))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=na.begin("onTree"),u=s.reduce(function(l,v){try{var d=nt(v);d&&l.push(d)}catch(g){za||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,v){Promise.all(u).then(function(d){Ja(d,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),f(),l()})}).catch(function(d){f(),v(d)})})}function ge(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nt(n).then(function(t){t&&Ja([t],a)})}function pe(n){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:Dn(a||{}),r=t.mask;return r&&(r=(r||{}).icon?r:Dn(r||{})),n(e,c(c({},t),{},{mask:r}))}}var be=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.transform,r=e===void 0?I:e,o=t.symbol,i=o===void 0?!1:o,s=t.mask,f=s===void 0?null:s,u=t.maskId,l=u===void 0?null:u,v=t.title,d=v===void 0?null:v,g=t.titleId,w=g===void 0?null:g,E=t.classes,C=E===void 0?[]:E,O=t.attributes,k=O===void 0?{}:O,x=t.styles,N=x===void 0?{}:x;if(a){var A=a.prefix,Y=a.iconName,$=a.icon;return Cn(c({type:"icon"},a),function(){return W("beforeDOMElementCreation",{iconDefinition:a,params:t}),m.autoA11y&&(d?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(w||rn()):(k["aria-hidden"]="true",k.focusable="false")),Zn({icons:{main:jn($),mask:f?jn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:Y,transform:c(c({},I),r),symbol:i,title:d,maskId:l,titleId:w,extra:{attributes:k,styles:N,classes:C}})})}},he={mixout:function(){return{icon:pe(be)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=ka,t.nodeCallback=ge,t}}},provides:function(a){a.i2svg=function(t){var e=t.node,r=e===void 0?b:e,o=t.callback,i=o===void 0?function(){}:o;return ka(r,i)},a.generateSvgReplacementMutation=function(t,e){var r=e.iconName,o=e.title,i=e.titleId,s=e.prefix,f=e.transform,u=e.symbol,l=e.mask,v=e.maskId,d=e.extra;return new Promise(function(g,w){Promise.all([Yn(r,s),l.iconName?Yn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var C=Un(E,2),O=C[0],k=C[1];g([t,Zn({icons:{main:O,mask:k},prefix:s,iconName:r,transform:f,symbol:u,maskId:v,title:o,titleId:i,extra:d,watchable:!0})])}).catch(w)})},a.generateAbstractIcon=function(t){var e=t.children,r=t.attributes,o=t.main,i=t.transform,s=t.styles,f=An(s);f.length>0&&(r.style=f);var u;return qn(i)&&(u=M("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),e.push(u||o.icon),{children:e,attributes:r}}}},ye={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,o=r===void 0?[]:r;return Cn({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:t,params:e});var i=[];return t(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(on(o)).join(" ")},children:i}]})}}}},ke={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,o=r===void 0?null:r,i=e.classes,s=i===void 0?[]:i,f=e.attributes,u=f===void 0?{}:f,l=e.styles,v=l===void 0?{}:l;return Cn({type:"counter",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:e}),Zt({content:t.toString(),title:o,extra:{attributes:u,styles:v,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},we={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,o=r===void 0?I:r,i=e.title,s=i===void 0?null:i,f=e.classes,u=f===void 0?[]:f,l=e.attributes,v=l===void 0?{}:l,d=e.styles,g=d===void 0?{}:d;return Cn({type:"text",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:e}),da({content:t,transform:c(c({},I),o),title:s,extra:{attributes:v,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(on(u))}})})}}},provides:function(a){a.generateLayersText=function(t,e){var r=e.title,o=e.transform,i=e.extra,s=null,f=null;if(_a){var u=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/u,f=l.height/u}return m.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,da({content:t.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},xe=new RegExp('"',"ug"),wa=[1105920,1112319];function Ae(n){var a=n.replace(xe,""),t=Rt(a,0),e=t>=wa[0]&&t<=wa[1],r=a.length===2?a[0]===a[1]:!1;return{value:zn(r?a[0]:a),isSecondary:e||r}}function xa(n,a){var t="".concat(ut).concat(a.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(t)!==null)return e();var o=K(n.children),i=o.filter(function($){return $.getAttribute(Ln)===a})[0],s=F.getComputedStyle(n,a),f=s.getPropertyValue("font-family").match(pt),u=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!f)return n.removeChild(i),e();if(f&&l!=="none"&&l!==""){var v=s.getPropertyValue("content"),d=~["Sharp"].indexOf(f[2])?h:p,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?an[d][f[2].toLowerCase()]:bt[d][u],w=Ae(v),E=w.value,C=w.isSecondary,O=f[0].startsWith("FontAwesome"),k=Qn(g,E),x=k;if(O){var N=Ut(E);N.iconName&&N.prefix&&(k=N.iconName,g=N.prefix)}if(k&&!C&&(!i||i.getAttribute(Wn)!==g||i.getAttribute(Xn)!==x)){n.setAttribute(t,x),i&&n.removeChild(i);var A=ve(),Y=A.extra;Y.attributes[Ln]=a,Yn(k,g).then(function($){var Pn=Zn(c(c({},A),{},{icons:{main:$,mask:Jn()},prefix:g,iconName:x,extra:Y,watchable:!0})),z=b.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?n.insertBefore(z,n.firstChild):n.appendChild(z),z.outerHTML=Pn.map(function(at){return fn(at)}).join(`
`),n.removeAttribute(t),e()}).catch(r)}else e()}else e()})}function Se(n){return Promise.all([xa(n,"::before"),xa(n,"::after")])}function Ee(n){return n.parentNode!==document.head&&!~vt.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Ln)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Aa(n){if(L)return new Promise(function(a,t){var e=K(n.querySelectorAll("*")).filter(Ee).map(Se),r=na.begin("searchPseudoElements");Za(),Promise.all(e).then(function(){r(),Hn(),a()}).catch(function(){r(),Hn(),t()})})}var Ce={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Aa,t}}},provides:function(a){a.pseudoElements2svg=function(t){var e=t.node,r=e===void 0?b:e;m.searchPseudoElements&&Aa(r)}}},Sa=!1,Pe={mixout:function(){return{dom:{unwatch:function(){Za(),Sa=!0}}}},hooks:function(){return{bootstrap:function(){ha(Fn("mutationObserverCallbacks",{}))},noAuto:function(){le()},watch:function(t){var e=t.observeMutationsRoot;Sa?Hn():ha(Fn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Ea=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return e.flipX=!0,e;if(i&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(i){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},t)},Oe={mixout:function(){return{parse:{transform:function(t){return Ea(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-transform");return r&&(t.transform=Ea(r)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var e=t.main,r=t.transform,o=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(f," ").concat(u," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},g={outer:s,inner:v,path:d};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c(c({},e.icon.attributes),g.path)}]}]}}}},Tn={x:0,y:0,width:"100%",height:"100%"};function Ca(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||a)&&(n.attributes.fill="black"),n}function Ne(n){return n.tag==="g"?n.children:[n]}var Ie={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-mask"),o=r?En(r.split(" ").map(function(i){return i.trim()})):Jn();return o.prefix||(o.prefix=D()),t.mask=o,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var e=t.children,r=t.attributes,o=t.main,i=t.mask,s=t.maskId,f=t.transform,u=o.width,l=o.icon,v=i.width,d=i.icon,g=Ot({transform:f,containerWidth:v,iconWidth:u}),w={tag:"rect",attributes:c(c({},Tn),{},{fill:"white"})},E=l.children?{children:l.children.map(Ca)}:{},C={tag:"g",attributes:c({},g.inner),children:[Ca(c({tag:l.tag,attributes:c(c({},l.attributes),g.path)},E))]},O={tag:"g",attributes:c({},g.outer),children:[C]},k="mask-".concat(s||rn()),x="clip-".concat(s||rn()),N={tag:"mask",attributes:c(c({},Tn),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,O]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Ne(d)},N]};return e.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(k,")")},Tn)}),{children:e,attributes:r}}}},Te={provides:function(a){var t=!1;F.matchMedia&&(t=F.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=c(c({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:c(c({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},_e={hooks:function(){return{parseNodeAttributes:function(t,e){var r=e.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return t.symbol=o,t}}}},Me=[Tt,he,ye,ke,we,Ce,Pe,Oe,Ie,Te,_e];Xt(Me,{mixoutsTo:S});S.noAuto;var Pa=S.config,Le=S.library,ze=S.dom;S.parse;S.findIconDefinition;S.toHtml;S.icon;S.layer;S.text;S.counter;var Re={prefix:"fas",iconName:"circle-notch",icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]},Fe={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},De={prefix:"fas",iconName:"square-rss",icon:[448,512,["rss-square"],"f143","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 136c0-13.3 10.7-24 24-24c137 0 248 111 248 248c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-110.5-89.5-200-200-200c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24c83.9 0 152 68.1 152 152c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4-46.6-104-104-104c-13.3 0-24-10.7-24-24zm0 120a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},je={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Ye={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},$e={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},He={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},Ue={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},Ve={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},We={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Xe={prefix:"fasr",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336H192v48h24 80 24V336H296h-8V248 224H264 216 192v48h24 24v64H216zm72-144V128H224v64h64z"]},Ge={prefix:"fass",iconName:"arrow-up-right",icon:[384,512,[],"e09f","M320 96h32v32V352v32H288V352 205.3L86.6 406.6 64 429.3 18.7 384l22.6-22.6L242.7 160H96 64V96H96 320z"]},Be={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]};class qe{constructor(){this.configure(),Drupal.behaviors.fa={attach:a=>{a.querySelector("i")&&ze.i2svg({node:a})}},Drupal.behaviors.fa.attach(document)}configure(){Pa.searchPseudoElements=!0,Pa.familyDefault="sharp",Le.add($e,Fe,We,Ve,Re,Ye,De,Be,Ge,je,Ue,Xe,He)}}export{qe as default};
