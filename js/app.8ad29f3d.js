(function(e){function t(t){for(var o,r,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0dd7f4":"a671f366","chunk-565d1fbe":"e1c5bfc7","chunk-5bc9c738":"5759d678","chunk-5d4bc078":"84d4d7db","chunk-c78aa7e0":"48a76595","chunk-eb0feb28":"76a1ca9b"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-565d1fbe":1,"chunk-5bc9c738":1,"chunk-5d4bc078":1,"chunk-c78aa7e0":1,"chunk-eb0feb28":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2d0dd7f4":"31d6cfe0","chunk-565d1fbe":"5d67716d","chunk-5bc9c738":"0bccb46d","chunk-5d4bc078":"8c0381dd","chunk-c78aa7e0":"3d9d6f89","chunk-eb0feb28":"5d67716d"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"26b4":function(e,t,n){"use strict";n("808a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Footer",{directives:[{name:"show",rawName:"v-show",value:e.isFootShow,expression:"isFootShow"}]})],1)},a=[],c=n("5530"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("ul",[n("router-link",{attrs:{tag:"li",to:"/home"}},[n("a",{staticClass:"current",attrs:{href:"javascript:;"}},[n("span",{staticClass:"iconfont"},[e._v("")]),n("span",[e._v("电影")])])]),n("router-link",{attrs:{tag:"li",to:"/movie"}},[n("a",{attrs:{href:"javascript:;"}},[n("span",{staticClass:"iconfont"},[e._v("")]),n("span",[e._v("影院")])])]),n("router-link",{attrs:{tag:"li",to:"/mine"}},[n("a",{attrs:{href:"javascript:;"}},[n("span",{staticClass:"iconfont"},[e._v("")]),n("span",[e._v("我的")])])])],1)])},i=[],s={},l=s,f=(n("a020"),n("2877")),d=Object(f["a"])(l,u,i,!1,null,"1f665689",null),h=d.exports,p=n("2f62"),b={components:{Footer:h},computed:Object(c["a"])({},Object(p["b"])(["isFootShow"]))},m=b,v=(n("7c55"),Object(f["a"])(m,r,a,!1,null,null,null)),g=v.exports,k=n("8c4f"),w=(n("d3b7"),n("3ca3"),n("ddb0"),{path:"/home/listing",component:function(){return n.e("chunk-c78aa7e0").then(n.bind(null,"e019"))}}),y={path:"/home/list",component:function(){return n.e("chunk-5d4bc078").then(n.bind(null,"8043"))}},_={path:"/home",children:[w,y],redirect:"/home/listing",component:function(){return n.e("chunk-565d1fbe").then(n.bind(null,"7abe"))}},j={path:"/movie",component:function(){return n.e("chunk-5bc9c738").then(n.bind(null,"5b98"))}},S={path:"/mine",component:function(){return n.e("chunk-eb0feb28").then(n.bind(null,"b5b1"))}},O={path:"/detail/:id",component:function(){return n.e("chunk-2d0dd7f4").then(n.bind(null,"8248"))}};o["default"].use(k["a"]);var C=[_,j,S,O,{path:"",redirect:"/home"}],x=new k["a"]({mode:"hash",base:"",routes:C}),E=x,F=n("bc3a"),T=n.n(F);o["default"].use(p["a"]);var P=new p["a"].Store({state:{isFootShow:!0,comlist:[]},mutations:{hideFoot:function(e,t){e.isFootShow=t},showFoot:function(){state.isFootShow=data},setComList:function(e,t){e.comlist=t,console.log(e.comlist)}},actions:{getComList:function(e){T.a.get("/ajax/comingList?ci=10&token=&limit=10").then((function(t){e.commit("setComList",t.data.coming)}))}},modules:{}}),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrapper",staticClass:"wrapper"},[e._t("default")],2)},A=[],N=n("f40f"),$={name:"Scroll",mounted:function(){var e=this,t=new N["a"](this.$refs.wrapper,{tap:!0,probeType:1});t.on("scroll",(function(t){e.handleToScroll(t)})),t.on("touchEnd",(function(t){e.handleTouch(t)}))},props:{handleToScroll:{type:Function,default:function(){}},handleTouch:{type:Function,default:function(){}}}},M=$,B=(n("26b4"),Object(f["a"])(M,L,A,!1,null,null,null)),q=B.exports,D=n("76a0"),J=n.n(D);n("aa35");o["default"].config.productionTip=!1,o["default"].prototype.axios=T.a,o["default"].component("Scroll",q),o["default"].use(J.a),new o["default"]({router:E,store:P,render:function(e){return e(g)}}).$mount("#app")},6197:function(e,t,n){},"7c55":function(e,t,n){"use strict";n("cba8")},"808a":function(e,t,n){},a020:function(e,t,n){"use strict";n("6197")},cba8:function(e,t,n){}});
//# sourceMappingURL=app.8ad29f3d.js.map