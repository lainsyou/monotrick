(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dd6fc7db"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("span",[t._v("同じ縦横サイズの画像が前提です。")]),n("br"),n("span",[t._v("見える画像の透過部分に、見えない画像を表示します。")]),n("br"),n("span",[t._v("見える画像の透過部分がない場合は、見えない画像は表示されません。")]),n("br"),n("span",[t._v("見える画像：")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.opneFile(1)}}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-upload")])],1),n("br"),n("span",[t._v("見えない画像：")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.opneFile(2)}}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-upload")])],1),n("br"),n("span",[t._v("ダウンロード")]),n("br"),n("span",{staticStyle:{"padding-left":"10px"}},[t._v("クレースケール：")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.create(!0,!1)}}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-auto-fix")])],1),n("br"),n("span",{staticStyle:{"padding-left":"10px"}},[t._v("不透明部分の色を残す：")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.create(!1,!1)}}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-auto-fix")])],1),n("br"),n("span",{staticStyle:{"padding-left":"10px"}},[t._v("クレースケール（排他）：")]),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.create(!0,!0)}}},[n("v-icon",{attrs:{"x-large":""}},[t._v("mdi-auto-fix")])],1),n("div",{staticStyle:{"background-color":"gray"},attrs:{id:"background"}},[n("v-btn",{on:{click:function(e){return t.setBackground("white")}}},[t._v("白背景 ")]),n("v-btn",{on:{click:function(e){return t.setBackground("black")}}},[t._v("黒背景 ")]),n("v-btn",{on:{click:t.download}},[t._v("ダウンロード")]),n("span",{staticStyle:{color:"gray","font-weight":"bold"}},[t._v("見えるときのサンプル")]),n("br"),n("canvas",{attrs:{id:"canvas",width:"100%",height:"100%"}})],1)],1)],1)},o=[],i=(n("d3b7"),n("ac1f"),n("3ca3"),n("466d"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0"),n("2b3d"),n("b85c")),c=n("d4ec"),s=n("bee2"),l=n("262e"),u=n("2caf"),d=n("9ab4"),f=n("1b40"),h=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.target=0,t.width=0,t.height=0,t}return Object(s["a"])(n,[{key:"setBackground",value:function(t){var e=document.getElementById("background");e.style.backgroundColor=t}},{key:"opneFile",value:function(t){this.target=t;var e=document.createElement("input");e.type="file",e.multiple=!0,e.addEventListener("change",this.addFile,!1),e.click()}},{key:"addFile",value:function(t){var e,n=t.target,a=n.files,r=Object(i["a"])(a);try{for(r.s();!(e=r.n()).done;){var o=e.value;console.log(o),o.type.match("image.*")&&this.addImageFile(o)}}catch(c){r.e(c)}finally{r.f()}}},{key:"addImageFile",value:function(t){var e=this,n=document.createElement("canvas"),a=n.getContext("2d");if(a){var r=new FileReader;r.onload=function(){var t=r.result;if(t){var o=new Image;o.src=t,o.onload=function(){e.width=o.width,e.height=o.height,n.width=o.width,n.height=o.height,a.clearRect(0,0,n.width,n.height),a.drawImage(o,0,0,n.width,n.height);var t=a.getImageData(0,0,n.width,n.height);1===e.target?e.data1=t:e.data2=t}}else alert("FileReader failed.")},r.readAsDataURL(t)}else alert("CanvasRenderingContext2D unsupported.")}},{key:"create",value:function(t,e){var n=document.getElementById("canvas"),a=n.getContext("2d");if(a){n.width=this.width,n.height=this.height;for(var r=this.data1.data,o=this.data2.data,i=a.getImageData(0,0,n.width,n.height),c=i.data,s=0,l=c.length;s<l;s+=4)if(e)if(0==r[s+3])if(0==o[s+3])c[s+0]=255,c[s+1]=255,c[s+2]=255,c[s+3]=0;else{var u=.3*o[s]+.59*o[s+1]+.11*o[s+2];c[s+0]=255,c[s+1]=255,c[s+2]=255,c[s+3]=u}else{var d=.3*r[s]+.59*r[s+1]+.11*r[s+2];c[s+0]=0,c[s+1]=0,c[s+2]=0,c[s+3]=255-d}else if(0==r[s+3])if(0==o[s+3])c[s+0]=255,c[s+1]=255,c[s+2]=255,c[s+3]=255;else{var f=.3*o[s]+.59*o[s+1]+.11*o[s+2];c[s+0]=255,c[s+1]=255,c[s+2]=255,c[s+3]=f}else{var h=.3*r[s]+.59*r[s+1]+.11*r[s+2];c[s+0]=t?h:r[s+0],c[s+1]=t?h:r[s+1],c[s+2]=t?h:r[s+2],c[s+3]=t?255:r[s+3]}a.clearRect(0,0,n.width,n.height),a.putImageData(i,0,0)}else alert("CanvasRenderingContext2D unsupported.")}},{key:"download",value:function(){for(var t=document.getElementById("canvas"),e=t.toDataURL("image/png"),n=atob(e.replace(/^.*,/,"")),a=new Uint8Array(n.length),r=0;r<n.length;r++)a[r]=n.charCodeAt(r);var o=new Blob([a.buffer],{type:"image/png"}),i=document.createElement("a");i.href=window.URL.createObjectURL(o),i.download="monotrick.png",i.target="_blank",i.click()}}]),n}(f["b"]);h=Object(d["a"])([Object(f["a"])({components:{}})],h);var v=h,p=v,g=n("2877"),m=n("6544"),b=n.n(m),y=n("7496"),w=n("8336"),_=n("132d"),x=n("f6c4"),k=Object(g["a"])(p,r,o,!1,null,null,null),j=k.exports;b()(k,{VApp:y["a"],VBtn:w["a"],VIcon:_["a"],VMain:x["a"]});var C=n("9483");Object(C["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var O=n("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},F=[],I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),a("br"),t._v("please join our online "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),a("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return a("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},S=[],V=a["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),A=V,R=n("62ad"),L=n("a523"),B=n("adda"),D=n("0fd9"),P=Object(g["a"])(A,I,S,!1,null,null,null),M=P.exports;b()(P,{VCol:R["a"],VContainer:L["a"],VImg:B["a"],VRow:D["a"]});var T={name:"Home",components:{HelloWorld:M}},W=T,q=Object(g["a"])(W,E,F,!1,null,null,null),H=q.exports;a["a"].use(O["a"]);var N=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],U=new O["a"]({mode:"history",base:"",routes:N}),$=U,J=n("2f62");a["a"].use(J["a"]);var Q=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Y=n("f309");a["a"].use(Y["a"]);var z=new Y["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:$,store:Q,vuetify:z,render:function(t){return t(j)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d5c68f45.js.map