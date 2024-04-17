var P={exports:{}};(function(C){(function(t){C.exports?t(window.jQuery):t(jQuery)})(function(t){var f="DynamicContentMenu",l="dynamicContentMenu",O=l,H="active",T=l+"_hide",p=l+"__header",d="."+p,v=l+"__subheader",r="."+v,y=l+"__item",c="."+y,g=l+"__extend-page",q="."+g,a=function(e,s){this.options=s,this.$element=t(e),this._create(e)};a.DEFAULTS={context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"material",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},a.prototype._create=function(e){var s=this;s.extendPageScroll=!0,s.items=[],s._generateHtmlMenu(),s._addCSSTheme(),s._addCSSClasses(),s.webkit=function(){for(var n in window)if(n&&n.toLowerCase().indexOf("webkit")!==-1)return!0;return!1}(),s._setEventHandlers(),t(window).on("load",function(n){s._setActiveElement(!0),t("html, body").promise().done(function(){setTimeout(function(){s.extendPageScroll=!1},0)})})},a.prototype._generateHtmlMenu=function(){var e=this,s,n,i=e.options.ignoreSelector;if(this.options.selectors.indexOf(",")!==-1?s=t(this.options.context).find(this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(","))):s=t(this.options.context).find(this.options.selectors.replace(/ /g,"")),!s.length){e.$element.addClass(T);return}e.$element.addClass(O),s.each(function(o){t(this).is(i)||(n=t("<ul/>",{id:p+o,class:p}).append(e._nestElements(t(this),o)),e.$element.append(n),t(this).nextUntil(this.nodeName.toLowerCase()).each(function(){t(this).find(e.options.selectors).length===0?t(this).filter(e.options.selectors).each(function(){t(this).is(i)||e._appendSubheaders.call(this,e,n)}):t(this).find(e.options.selectors).each(function(){t(this).is(i)||e._appendSubheaders.call(this,e,n)})}))})},a.prototype._setActiveElement=function(e){var s=this,n=window.location.hash.substring(1),i=s.$element.find('li[data-unique="'+n+'"]');return n.length?(s.$element.find("."+s.focusClass).removeClass(s.focusClass),i.addClass(s.focusClass),s.options.showAndHide&&i.click()):(s.$element.find("."+s.focusClass).removeClass(s.focusClass),!n.length&&e&&s.options.highlightDefault&&s.$element.find(c).first().addClass(s.focusClass)),s},a.prototype._nestElements=function(e,s){var n,i,o;return n=t.grep(this.items,function(h){return h===e.text()}),n.length?this.items.push(e.text()+s):this.items.push(e.text()),o=this._generateHashValue(n,e,s),i=t("<li/>",{class:y,"data-unique":o}).append(t("<a/>",{text:e.text()})),e.before(t("<div/>",{name:o,"data-unique":o})),i},a.prototype._generateHashValue=function(e,s,n){var i="",o=this.options.hashGenerator;if(o==="pretty"){for(i=s.text().toLowerCase().replace(/\s/g,"-");i.indexOf("--")>-1;)i=i.replace(/--/g,"-");for(;i.indexOf(":-")>-1;)i=i.replace(/:-/g,"-")}else typeof o=="function"?i=o(s.text(),s):i=s.text().replace(/\s/g,"");return e.length&&(i+=""+n),i},a.prototype._appendSubheaders=function(e,s){var n=t(this).index(e.options.selectors),i=t(e.options.selectors).eq(n-1),o=+t(this).prop("tagName").charAt(1),h=+i.prop("tagName").charAt(1);o<h?e.$element.find(r+"[data-tag="+o+"]").last().append(e._nestElements(t(this),n)):o===h?s.find(c).last().after(e._nestElements(t(this),n)):s.find(c).last().after(t("<ul/>",{class:v,"data-tag":o})).next(r).append(e._nestElements(t(this),n))},a.prototype._setEventHandlers=function(){var e=this;this.$element.on("click."+f,"li",function(s){if(e.options.history&&(window.location.hash=t(this).attr("data-unique")),e.$element.find("."+e.focusClass).removeClass(e.focusClass),t(this).addClass(e.focusClass),e.options.showAndHide){var n=t('li[data-unique="'+t(this).attr("data-unique")+'"]');e._triggerShow(n)}e._scrollTo(t(this))}),this.$element.find("li").on({"mouseenter.DynamicContentMenu":function(){t(this).addClass(e.hoverClass),t(this).css("cursor","pointer")},"mouseleave.DynamicContentMenu":function(){e.options.theme!=="bootstrap"&&t(this).removeClass(e.hoverClass)}}),(e.options.extendPage||e.options.highlightOnScroll||e.options.scrollHistory||e.options.showAndHideOnScroll)&&t(window).on("scroll.DynamicContentMenu",function(){t("html, body").promise().done(function(){var s=t(window).scrollTop(),n=t(window).height(),i=t(document).height(),o=t("body")[0].scrollHeight,h,m,x,S;if(e.options.extendPage&&(e.webkit&&s>=o-n-e.options.extendPageOffset||!e.webkit&&n+s>i-e.options.extendPageOffset)&&!t(q).length){if(m=t('div[data-unique="'+t(c).last().attr("data-unique")+'"]'),!m.length)return;x=m.offset().top,t(e.options.context).append(t("<div />",{class:g,height:Math.abs(x-s)+"px","data-unique":g})),e.extendPageScroll&&(S=e.$element.find("li.active"),e._scrollTo(t('div[data-unique="'+S.attr("data-unique")+'"]')))}setTimeout(function(){var w=null,_=null,b=t(e.options.context).find("div[data-unique]"),u;b.each(function(N){var E=Math.abs((t(this).next().length?t(this).next():t(this)).offset().top-s-e.options.highlightOffset);if(w==null||E<w)w=E,_=N;else return!1}),u=t(b[_]).attr("data-unique"),h=t('li[data-unique="'+u+'"]'),e.options.highlightOnScroll&&h.length&&(e.$element.find("."+e.focusClass).removeClass(e.focusClass),h.addClass(e.focusClass)),e.options.scrollHistory&&window.location.hash!=="#"+u&&window.location.replace("#"+u),e.options.showAndHideOnScroll&&e.options.showAndHide&&e._triggerShow(h,!0)},0)})})},a.prototype.show=function(e,s){var n=this;if(!e.is(":visible"))switch(!e.find(r).length&&!e.parent().is(d)&&!e.parent().is(":visible")?e=e.parents(r).add(e):!e.children(r).length&&!e.parent().is(d)&&(e=e.closest(r)),n.options.showEffect){case"none":e.show();break;case"show":e.show(n.options.showEffectSpeed);break;case"slideDown":e.slideDown(n.options.showEffectSpeed);break;case"fadeIn":e.fadeIn(n.options.showEffectSpeed);break;default:e.show();break}return e.parent().is(d)?n.hide(t(r).not(e)):n.hide(t(r).not(e.closest(d).find(r).not(e.siblings()))),n},a.prototype.hide=function(e){var s=this;switch(s.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(s.options.hideEffectSpeed);break;case"slideUp":e.slideUp(s.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(s.options.hideEffectSpeed);break;default:e.hide();break}return s},a.prototype._triggerShow=function(e,s){var n=this;return e.parent().is(d)||e.next().is(r)?n.show(e.next(r),s):e.parent().is(r)&&n.show(e.parent(),s),n},a.prototype._addCSSTheme=function(){return this.options.theme==="material"&&this.$element.addClass("scod-theme-material"),this},a.prototype._addCSSClasses=function(){return this.$element.find(d+","+r).addClass("scod-flex-container"),this.focusClass=H,this},a.prototype.setOption=function(){t.Widget.prototype._setOption.apply(this,arguments)},a.prototype.setOptions=function(){t.Widget.prototype._setOptions.apply(this,arguments)},a.prototype._scrollTo=function(e){var s=this,n=s.options.smoothScroll||0,i=s.options.scrollTo,o=t('div[data-unique="'+e.attr("data-unique")+'"]');return o.length&&t("html, body").promise().done(function(){t("html, body").animate({scrollTop:o.offset().top-(t.isFunction(i)?i.call():i)+"px"},{duration:n})}),s};function A(e,s){return this.each(function(){var n=t(this),i=n.data(f),o=t.extend({},a.DEFAULTS,n.data(),typeof e=="object"&&e);i||n.data(f,i=new a(this,o)),typeof e=="string"?((!t.isFunction(i[e])||e.charAt(0)==="_")&&t.error("no such method '"+e+"' for "+l+" plugin instance"),i[e](Array.prototype.slice.call(arguments,1))):i||t.error("Plugin must be initialised before using method: "+e)})}var k=t.fn[l];t.fn[l]=A,t.fn[l].Constructor=a,t.fn[l].noConflict=function(){return t.fn[l]=k,this}})})(P);class D{constructor(){(function(t){t("#toc").dynamicContentMenu({selectors:"h2",ignoreSelector:".visually-hidden",theme:"bootstrap",smoothScroll:"slow",hideEffect:"none",extendPage:!1})})(jQuery)}}export{D as default};
