(self.webpackChunkwork_space=self.webpackChunkwork_space||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],i[u[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},8855:function(e,t,n){"use strict";n(1283);var r=n(7294),o=n(5444),a=n(6802);t.Z=function(e){var t=e.article,n=(0,a.d)(t.heroImage);return r.createElement("div",{className:"card"},r.createElement(o.rU,{to:"/blog/"+t.slug,"aria-label":"記事を見る"},r.createElement(a.G,{className:"card-image",alt:"",image:n})),r.createElement("div",{className:"card-content"},r.createElement("div",{className:"media"},r.createElement("div",{className:"media-content"},r.createElement("h2",{className:"title is-4"},r.createElement(o.rU,{to:"/blog/"+t.slug},t.title)),r.createElement("h3",{className:"subtitle is-6"},t.publishDate))),r.createElement("div",{className:"content"},r.createElement("div",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),r.createElement("div",{className:"tags my-2"},t.tags&&t.tags.map((function(e){return r.createElement("p",{className:"tag is-info is-light",key:e},e)}))))))}},4695:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,o,a,i,c=n(7294),s=n(5697),u=n.n(s),l=n(4839),f=n.n(l),p=n(2993),d=n.n(p),m=n(6494),h=n.n(m),v="bodyAttributes",y="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",w="href",_="http-equiv",O="innerHTML",x="itemprop",A="name",C="property",S="rel",j="src",N="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",M="encodeSpecialCharacters",L="onChangeClientState",R="titleTemplate",U=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),z=[g.NOSCRIPT,g.SCRIPT,g.STYLE],F="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,g.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},V=function(e){return J(e,L)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===S&&"canonical"===e[n].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==O&&c!==T&&c!==x||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(g.BODY,r),se(g.HTML,o),ce(f,p);var d={baseTag:ue(g.BASE,n),linkTags:ue(g.LINK,a),metaTags:ue(g.META,i),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(g.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(F):n.getAttribute(F)!==i.join(",")&&n.setAttribute(F,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,o=fe(n,r),[c.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(v,n,r),htmlAttributes:pe(y,o,r),link:pe(g.LINK,a,r),meta:pe(g.META,i,r),noscript:pe(g.NOSCRIPT,c,r),script:pe(g.SCRIPT,s,r),style:pe(g.STYLE,u,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:G([w,N],e),bodyAttributes:Z(v,e),defer:J(e,I),encode:J(e,M),htmlAttributes:Z(y,e),linkTags:X(g.LINK,[S,w],e),metaTags:X(g.META,[A,E,_,C,x],e),noscriptTags:X(g.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:X(g.SCRIPT,[j,O],e),styleTags:X(g.STYLE,[T],e),title:W(e),titleAttributes:Z(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return H(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return D({},o,((t={})[r.type]=i,t.titleAttributes=D({},a),t));case g.BODY:return D({},o,{bodyAttributes:D({},a)});case g.HTML:return D({},o,{htmlAttributes:D({},a)})}return D({},o,((n={})[r.type]=D({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ve=n(5444),ye=function(e){var t=e.title,n=e.description,r=e.slug,o=e.image,a=e.lang,i=(e.meta,(0,ve.K2)("60266497")),s={type:o?"summary_large_image":"summary",title:t||i.site.siteMetadata.title,description:n||i.site.siteMetadata.description,image:o||""+i.site.siteMetadata.siteUrl+i.site.siteMetadata.image,url:""+i.site.siteMetadata.siteUrl+r};return c.createElement(he,{htmlAttributes:{lang:a},title:s.title,description:s.description,meta:[{name:"description",content:s.description},{name:"image",content:s.image},{name:"thumbnail",content:s.image},{property:"og:url",content:s.url},{property:"og:type",content:"website"},{property:"og:title",content:s.title},{property:"og:description",content:s.description},{property:"og:image",content:s.image},{name:"twitter:card",content:s.type},{name:"twitter:creator",content:i.site.siteMetadata.twitterUsername},{name:"twitter:title",content:s.title},{name:"twitter:description",content:s.description},{property:"twitter:image",content:s.image}]})};ye.defaultProps={lang:"ja",meta:[],title:"わーくすぺーす",description:"天体撮影、キャンプ、ソフト開発 etc… いろんなことをゆる～くやっていきます。",slug:"",image:null};var be=ye},5928:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),o=function(e){var t=e.children;return r.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)},a=n(5444),i=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return r.createElement("nav",{className:"navbar is-black is-fixed-top",role:"navigation","aria-label":"main navigation"},r.createElement("div",{className:"navbar-brand"},r.createElement("a",{onClick:function(){n(!t)},role:"button",className:"navbar-burger burger "+(t?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"globalMenu"},r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}),r.createElement("span",{"aria-hidden":"true"}))),r.createElement("div",{id:"globalMenu",className:"navbar-menu "+(t?"is-active":"")},r.createElement("div",{className:"navbar-start"},r.createElement(a.rU,{className:"navbar-item",to:"/"},"Home"),r.createElement(a.rU,{className:"navbar-item",to:"/blog/"},"記事一覧"),r.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.createElement("span",{className:"navbar-link"},"タグ一覧"),r.createElement("div",{className:"navbar-dropdown"},r.createElement(a.rU,{className:"navbar-item",to:"/astrograph/"},"天体撮影"),r.createElement(a.rU,{className:"navbar-item",to:"/camp/"},"キャンプ"),r.createElement(a.rU,{className:"navbar-item",to:"/software/"},"ソフト開発"),r.createElement("hr",{className:"navbar-divider"}),r.createElement(a.rU,{className:"navbar-item",to:"/others/"},"その他")))),r.createElement("div",{className:"navbar-end"},r.createElement("div",{className:"navbar-item"},r.createElement("div",{className:"field is-grouped"},r.createElement("p",{className:"control"},r.createElement(a.rU,{className:"button social-icon is-twitter",target:"_blank",to:"https://twitter.com/Mazic_tell_Arts",rel:"noreferrer"},r.createElement("span",{className:"icon is-medium"},r.createElement("i",{className:"fab fa-twitter fa-lg"})))),r.createElement("p",{className:"control"},r.createElement(a.rU,{className:"button social-icon is-github",target:"_blank",to:"https://github.com/takashi-154",rel:"noreferrer"},r.createElement("span",{className:"icon is-medium"},r.createElement("i",{className:"fab fa-github fa-lg"})))),r.createElement("p",{className:"control"},r.createElement(a.rU,{className:"button social-icon is-facebook",target:"_blank",to:"https://www.facebook.com/profile.php?id=100069240847936",rel:"noreferrer"},r.createElement("span",{className:"icon is-medium"},r.createElement("i",{className:"fab fa-facebook fa-lg"})))),r.createElement("p",{className:"control"},r.createElement(a.rU,{className:"button social-icon is-instagram",target:"_blank",to:"https://www.instagram.com/mazic_arts/",rel:"noreferrer"},r.createElement("span",{className:"icon is-medium"},r.createElement("i",{className:"fab fa-instagram fa-lg"})))))))))},c=function(){return r.createElement("footer",{className:"footer"},r.createElement("div",{className:"content has-text-centered"},r.createElement("p",null,r.createElement("strong",null,"Work-space")," by ",r.createElement("a",{href:"https://jgthms.com"},"takashi-154"),". The source code is licensed ",r.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed ",r.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),".")))},s=function(e){e.location;var t=e.children;(0,r.useEffect)((function(){!function(e,t){var n="embedly-platform",r="script";if(!t.getElementById(n)){e.embedly=e.embedly||function(){(e.embedly.q=e.embedly.q||[]).push(arguments)};var o=t.createElement(r);o.id=n,o.async=1,o.src=("https:"===document.location.protocol?"https":"http")+"://cdn.embedly.com/widgets/platform.js";var a=t.getElementsByTagName(r)[0];a.parentNode.insertBefore(o,a)}}(window,document)}));return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/work-space/",r.createElement(o,null,r.createElement(i,null),t,r.createElement(c,null))}},685:function(e,t,n){var r=n(1789),o=n(401),a=n(7667),i=n(1327),c=n(1866);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,e.exports=s},8407:function(e,t,n){var r=n(7040),o=n(4125),a=n(2117),i=n(7518),c=n(4705);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,e.exports=s},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3369:function(e,t,n){var r=n(4785),o=n(1285),a=n(6e3),i=n(9916),c=n(5265);function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=r,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,e.exports=s},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},8470:function(e,t,n){var r=n(7813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},7786:function(e,t,n){var r=n(1811),o=n(327);e.exports=function(e,t){for(var n=0,a=(t=r(t,e)).length;null!=e&&n<a;)e=e[o(t[n++])];return n&&n==a?e:void 0}},4239:function(e,t,n){var r=n(2705),o=n(2932),a=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},8458:function(e,t,n){var r=n(3560),o=n(5346),a=n(3218),i=n(346),c=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,l=s.toString,f=u.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?p:c).test(i(e))}},531:function(e,t,n){var r=n(2705),o=n(9932),a=n(1469),i=n(3448),c=r?r.prototype:void 0,s=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return s?s.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},1811:function(e,t,n){var r=n(1469),o=n(5403),a=n(8690),i=n(9833);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},5050:function(e,t,n){var r=n(7019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},852:function(e,t,n){var r=n(8458),o=n(7801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},2932:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(s){}var o=i.call(e);return r&&(t?e[c]=n:delete e[c]),o}},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},1789:function(e,t,n){var r=n(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},1327:function(e,t,n){var r=n(4536),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},1866:function(e,t,n){var r=n(4536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},5403:function(e,t,n){var r=n(1469),o=n(3448),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},7019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:function(e,t,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},7040:function(e){e.exports=function(){this.__data__=[],this.size=0}},4125:function(e,t,n){var r=n(8470),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},2117:function(e,t,n){var r=n(8470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},7518:function(e,t,n){var r=n(8470);e.exports=function(e){return r(this.__data__,e)>-1}},4705:function(e,t,n){var r=n(8470);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},4785:function(e,t,n){var r=n(685),o=n(8407),a=n(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},1285:function(e,t,n){var r=n(5050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},6e3:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).get(e)}},9916:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).has(e)}},5265:function(e,t,n){var r=n(5050);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},4523:function(e,t,n){var r=n(8306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},4536:function(e,t,n){var r=n(852)(Object,"create");e.exports=r},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},8690:function(e,t,n){var r=n(4523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},327:function(e,t,n){var r=n(3448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(n){}try{return e+""}catch(n){}}return""}},7813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},7361:function(e,t,n){var r=n(7786);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},1469:function(e){var t=Array.isArray;e.exports=t},3560:function(e,t,n){var r=n(4239),o=n(3218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},8306:function(e,t,n){var r=n(3369);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}}}]);
//# sourceMappingURL=commons-c4b9142d6605703dbbb7.js.map