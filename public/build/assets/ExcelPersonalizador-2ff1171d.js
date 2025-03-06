import{h as Ht,i as _t,r as B,j as T}from"./app-827613ca.js";import{B as zt}from"./button.esm-0df79c86.js";import{D as Jt}from"./dialog.esm-57c7087f.js";import{P as Wt}from"./progressspinner.esm-c5b83609.js";import{I as ce}from"./inputswitch.esm-ce8270e5.js";import{T as Xt}from"./toast.esm-fe7981d5.js";import"./ripple.esm-dbab71b1.js";import"./tooltip.esm-146c7467.js";import"./index.esm-52556c40.js";import"./index.esm-f3d54434.js";var Pt={},Te={exports:{}},Ot=function(e,a){return function(){for(var i=new Array(arguments.length),u=0;u<i.length;u++)i[u]=arguments[u];return e.apply(a,i)}},Kt=Ot,$=Object.prototype.toString;function je(t){return $.call(t)==="[object Array]"}function Oe(t){return typeof t>"u"}function Gt(t){return t!==null&&!Oe(t)&&t.constructor!==null&&!Oe(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Qt(t){return $.call(t)==="[object ArrayBuffer]"}function Yt(t){return typeof FormData<"u"&&t instanceof FormData}function Zt(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function er(t){return typeof t=="string"}function tr(t){return typeof t=="number"}function Rt(t){return t!==null&&typeof t=="object"}function re(t){if($.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function rr(t){return $.call(t)==="[object Date]"}function nr(t){return $.call(t)==="[object File]"}function ir(t){return $.call(t)==="[object Blob]"}function Tt(t){return $.call(t)==="[object Function]"}function ar(t){return Rt(t)&&Tt(t.pipe)}function or(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}function sr(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function ur(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Ae(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),je(t))for(var a=0,o=t.length;a<o;a++)e.call(null,t[a],a,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function Re(){var t={};function e(i,u){re(t[u])&&re(i)?t[u]=Re(t[u],i):re(i)?t[u]=Re({},i):je(i)?t[u]=i.slice():t[u]=i}for(var a=0,o=arguments.length;a<o;a++)Ae(arguments[a],e);return t}function cr(t,e,a){return Ae(e,function(i,u){a&&typeof i=="function"?t[u]=Kt(i,a):t[u]=i}),t}function lr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var N={isArray:je,isArrayBuffer:Qt,isBuffer:Gt,isFormData:Yt,isArrayBufferView:Zt,isString:er,isNumber:tr,isObject:Rt,isPlainObject:re,isUndefined:Oe,isDate:rr,isFile:nr,isBlob:ir,isFunction:Tt,isStream:ar,isURLSearchParams:or,isStandardBrowserEnv:ur,forEach:Ae,merge:Re,extend:cr,trim:sr,stripBOM:lr},_=N;function rt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var jt=function(e,a,o){if(!a)return e;var i;if(o)i=o(a);else if(_.isURLSearchParams(a))i=a.toString();else{var u=[];_.forEach(a,function(w,d){w===null||typeof w>"u"||(_.isArray(w)?d=d+"[]":w=[w],_.forEach(w,function(C){_.isDate(C)?C=C.toISOString():_.isObject(C)&&(C=JSON.stringify(C)),u.push(rt(d)+"="+rt(C))}))}),i=u.join("&")}if(i){var f=e.indexOf("#");f!==-1&&(e=e.slice(0,f)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},dr=N;function ie(){this.handlers=[]}ie.prototype.use=function(e,a,o){return this.handlers.push({fulfilled:e,rejected:a,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1};ie.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};ie.prototype.forEach=function(e){dr.forEach(this.handlers,function(o){o!==null&&e(o)})};var fr=ie,hr=N,pr=function(e,a){hr.forEach(e,function(i,u){u!==a&&u.toUpperCase()===a.toUpperCase()&&(e[a]=i,delete e[u])})},At=function(e,a,o,i,u){return e.config=a,o&&(e.code=o),e.request=i,e.response=u,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},le,nt;function kt(){if(nt)return le;nt=1;var t=At;return le=function(a,o,i,u,f){var p=new Error(a);return t(p,o,i,u,f)},le}var de,it;function mr(){if(it)return de;it=1;var t=kt();return de=function(a,o,i){var u=i.config.validateStatus;!i.status||!u||u(i.status)?a(i):o(t("Request failed with status code "+i.status,i.config,null,i.request,i))},de}var fe,at;function vr(){if(at)return fe;at=1;var t=N;return fe=t.isStandardBrowserEnv()?function(){return{write:function(o,i,u,f,p,w){var d=[];d.push(o+"="+encodeURIComponent(i)),t.isNumber(u)&&d.push("expires="+new Date(u).toGMTString()),t.isString(f)&&d.push("path="+f),t.isString(p)&&d.push("domain="+p),w===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(o){var i=document.cookie.match(new RegExp("(^|;\\s*)("+o+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(o){this.write(o,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),fe}var he,ot;function gr(){return ot||(ot=1,he=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),he}var pe,st;function yr(){return st||(st=1,pe=function(e,a){return a?e.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):e}),pe}var me,ut;function wr(){if(ut)return me;ut=1;var t=gr(),e=yr();return me=function(o,i){return o&&!t(i)?e(o,i):i},me}var ve,ct;function br(){if(ct)return ve;ct=1;var t=N,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return ve=function(o){var i={},u,f,p;return o&&t.forEach(o.split(`
`),function(d){if(p=d.indexOf(":"),u=t.trim(d.substr(0,p)).toLowerCase(),f=t.trim(d.substr(p+1)),u){if(i[u]&&e.indexOf(u)>=0)return;u==="set-cookie"?i[u]=(i[u]?i[u]:[]).concat([f]):i[u]=i[u]?i[u]+", "+f:f}}),i},ve}var ge,lt;function Sr(){if(lt)return ge;lt=1;var t=N;return ge=t.isStandardBrowserEnv()?function(){var a=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a"),i;function u(f){var p=f;return a&&(o.setAttribute("href",p),p=o.href),o.setAttribute("href",p),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:o.pathname.charAt(0)==="/"?o.pathname:"/"+o.pathname}}return i=u(window.location.href),function(p){var w=t.isString(p)?u(p):p;return w.protocol===i.protocol&&w.host===i.host}}():function(){return function(){return!0}}(),ge}var ye,dt;function ft(){if(dt)return ye;dt=1;var t=N,e=mr(),a=vr(),o=jt,i=wr(),u=br(),f=Sr(),p=kt();return ye=function(d){return new Promise(function(C,g){var v=d.data,k=d.headers,R=d.responseType;t.isFormData(v)&&delete k["Content-Type"];var m=new XMLHttpRequest;if(d.auth){var D=d.auth.username||"",q=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"";k.Authorization="Basic "+btoa(D+":"+q)}var K=i(d.baseURL,d.url);m.open(d.method.toUpperCase(),o(K,d.params,d.paramsSerializer),!0),m.timeout=d.timeout;function G(){if(m){var l="getAllResponseHeaders"in m?u(m.getAllResponseHeaders()):null,s=!R||R==="text"||R==="json"?m.responseText:m.response,r={data:s,status:m.status,statusText:m.statusText,headers:l,config:d,request:m};e(C,g,r),m=null}}if("onloadend"in m?m.onloadend=G:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(G)},m.onabort=function(){m&&(g(p("Request aborted",d,"ECONNABORTED",m)),m=null)},m.onerror=function(){g(p("Network Error",d,null,m)),m=null},m.ontimeout=function(){var s="timeout of "+d.timeout+"ms exceeded";d.timeoutErrorMessage&&(s=d.timeoutErrorMessage),g(p(s,d,d.transitional&&d.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",m)),m=null},t.isStandardBrowserEnv()){var Q=(d.withCredentials||f(K))&&d.xsrfCookieName?a.read(d.xsrfCookieName):void 0;Q&&(k[d.xsrfHeaderName]=Q)}"setRequestHeader"in m&&t.forEach(k,function(s,r){typeof v>"u"&&r.toLowerCase()==="content-type"?delete k[r]:m.setRequestHeader(r,s)}),t.isUndefined(d.withCredentials)||(m.withCredentials=!!d.withCredentials),R&&R!=="json"&&(m.responseType=d.responseType),typeof d.onDownloadProgress=="function"&&m.addEventListener("progress",d.onDownloadProgress),typeof d.onUploadProgress=="function"&&m.upload&&m.upload.addEventListener("progress",d.onUploadProgress),d.cancelToken&&d.cancelToken.promise.then(function(s){m&&(m.abort(),g(s),m=null)}),v||(v=null),m.send(v)})},ye}var j=N,ht=pr,Er=At,xr={"Content-Type":"application/x-www-form-urlencoded"};function pt(t,e){!j.isUndefined(t)&&j.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Cr(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ft()),t}function Pr(t,e,a){if(j.isString(t))try{return(e||JSON.parse)(t),j.trim(t)}catch(o){if(o.name!=="SyntaxError")throw o}return(a||JSON.stringify)(t)}var ae={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Cr(),transformRequest:[function(e,a){return ht(a,"Accept"),ht(a,"Content-Type"),j.isFormData(e)||j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)?e:j.isArrayBufferView(e)?e.buffer:j.isURLSearchParams(e)?(pt(a,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):j.isObject(e)||a&&a["Content-Type"]==="application/json"?(pt(a,"application/json"),Pr(e)):e}],transformResponse:[function(e){var a=this.transitional,o=a&&a.silentJSONParsing,i=a&&a.forcedJSONParsing,u=!o&&this.responseType==="json";if(u||i&&j.isString(e)&&e.length)try{return JSON.parse(e)}catch(f){if(u)throw f.name==="SyntaxError"?Er(f,this,"E_JSON_PARSE"):f}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ae.headers={common:{Accept:"application/json, text/plain, */*"}};j.forEach(["delete","get","head"],function(e){ae.headers[e]={}});j.forEach(["post","put","patch"],function(e){ae.headers[e]=j.merge(xr)});var ke=ae,Or=N,Rr=ke,Tr=function(e,a,o){var i=this||Rr;return Or.forEach(o,function(f){e=f.call(i,e,a)}),e},we,mt;function Lt(){return mt||(mt=1,we=function(e){return!!(e&&e.__CANCEL__)}),we}var vt=N,be=Tr,jr=Lt(),Ar=ke;function Se(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var kr=function(e){Se(e),e.headers=e.headers||{},e.data=be.call(e,e.data,e.headers,e.transformRequest),e.headers=vt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),vt.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var a=e.adapter||Ar.adapter;return a(e).then(function(i){return Se(e),i.data=be.call(e,i.data,i.headers,e.transformResponse),i},function(i){return jr(i)||(Se(e),i&&i.response&&(i.response.data=be.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},A=N,Nt=function(e,a){a=a||{};var o={},i=["url","method","data"],u=["headers","auth","proxy","params"],f=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],p=["validateStatus"];function w(g,v){return A.isPlainObject(g)&&A.isPlainObject(v)?A.merge(g,v):A.isPlainObject(v)?A.merge({},v):A.isArray(v)?v.slice():v}function d(g){A.isUndefined(a[g])?A.isUndefined(e[g])||(o[g]=w(void 0,e[g])):o[g]=w(e[g],a[g])}A.forEach(i,function(v){A.isUndefined(a[v])||(o[v]=w(void 0,a[v]))}),A.forEach(u,d),A.forEach(f,function(v){A.isUndefined(a[v])?A.isUndefined(e[v])||(o[v]=w(void 0,e[v])):o[v]=w(void 0,a[v])}),A.forEach(p,function(v){v in a?o[v]=w(e[v],a[v]):v in e&&(o[v]=w(void 0,e[v]))});var I=i.concat(u).concat(f).concat(p),C=Object.keys(e).concat(Object.keys(a)).filter(function(v){return I.indexOf(v)===-1});return A.forEach(C,d),o};const Lr="axios",Nr="0.21.4",Ir="Promise based HTTP client for the browser and node.js",qr="index.js",Ur={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Dr={type:"git",url:"https://github.com/axios/axios.git"},Br=["xhr","http","ajax","promise","node"],Fr="Matt Zabriskie",Vr="MIT",Mr={url:"https://github.com/axios/axios/issues"},$r="https://axios-http.com",Hr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},_r={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},zr="dist/axios.min.js",Jr="dist/axios.min.js",Wr="./index.d.ts",Xr={"follow-redirects":"^1.14.0"},Kr=[{path:"./dist/axios.min.js",threshold:"5kB"}],Gr={name:Lr,version:Nr,description:Ir,main:qr,scripts:Ur,repository:Dr,keywords:Br,author:Fr,license:Vr,bugs:Mr,homepage:$r,devDependencies:Hr,browser:_r,jsdelivr:zr,unpkg:Jr,typings:Wr,dependencies:Xr,bundlesize:Kr};var It=Gr,Le={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Le[t]=function(o){return typeof o===t||"a"+(e<1?"n ":" ")+t}});var gt={},Qr=It.version.split(".");function qt(t,e){for(var a=e?e.split("."):Qr,o=t.split("."),i=0;i<3;i++){if(a[i]>o[i])return!0;if(a[i]<o[i])return!1}return!1}Le.transitional=function(e,a,o){var i=a&&qt(a);function u(f,p){return"[Axios v"+It.version+"] Transitional option '"+f+"'"+p+(o?". "+o:"")}return function(f,p,w){if(e===!1)throw new Error(u(p," has been removed in "+a));return i&&!gt[p]&&(gt[p]=!0,console.warn(u(p," has been deprecated since v"+a+" and will be removed in the near future"))),e?e(f,p,w):!0}};function Yr(t,e,a){if(typeof t!="object")throw new TypeError("options must be an object");for(var o=Object.keys(t),i=o.length;i-- >0;){var u=o[i],f=e[u];if(f){var p=t[u],w=p===void 0||f(p,u,t);if(w!==!0)throw new TypeError("option "+u+" must be "+w);continue}if(a!==!0)throw Error("Unknown option "+u)}}var Zr={isOlderVersion:qt,assertOptions:Yr,validators:Le},Ut=N,en=jt,yt=fr,wt=kr,oe=Nt,Dt=Zr,z=Dt.validators;function X(t){this.defaults=t,this.interceptors={request:new yt,response:new yt}}X.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=oe(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var a=e.transitional;a!==void 0&&Dt.assertOptions(a,{silentJSONParsing:z.transitional(z.boolean,"1.0.0"),forcedJSONParsing:z.transitional(z.boolean,"1.0.0"),clarifyTimeoutError:z.transitional(z.boolean,"1.0.0")},!1);var o=[],i=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(e)===!1||(i=i&&g.synchronous,o.unshift(g.fulfilled,g.rejected))});var u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});var f;if(!i){var p=[wt,void 0];for(Array.prototype.unshift.apply(p,o),p=p.concat(u),f=Promise.resolve(e);p.length;)f=f.then(p.shift(),p.shift());return f}for(var w=e;o.length;){var d=o.shift(),I=o.shift();try{w=d(w)}catch(C){I(C);break}}try{f=wt(w)}catch(C){return Promise.reject(C)}for(;u.length;)f=f.then(u.shift(),u.shift());return f};X.prototype.getUri=function(e){return e=oe(this.defaults,e),en(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Ut.forEach(["delete","get","head","options"],function(e){X.prototype[e]=function(a,o){return this.request(oe(o||{},{method:e,url:a,data:(o||{}).data}))}});Ut.forEach(["post","put","patch"],function(e){X.prototype[e]=function(a,o,i){return this.request(oe(i||{},{method:e,url:a,data:o}))}});var tn=X,Ee,bt;function Bt(){if(bt)return Ee;bt=1;function t(e){this.message=e}return t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,Ee=t,Ee}var xe,St;function rn(){if(St)return xe;St=1;var t=Bt();function e(a){if(typeof a!="function")throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(f){o=f});var i=this;a(function(f){i.reason||(i.reason=new t(f),o(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var o,i=new e(function(f){o=f});return{token:i,cancel:o}},xe=e,xe}var Ce,Et;function nn(){return Et||(Et=1,Ce=function(e){return function(o){return e.apply(null,o)}}),Ce}var Pe,xt;function an(){return xt||(xt=1,Pe=function(e){return typeof e=="object"&&e.isAxiosError===!0}),Pe}var Ct=N,on=Ot,ne=tn,sn=Nt,un=ke;function Ft(t){var e=new ne(t),a=on(ne.prototype.request,e);return Ct.extend(a,ne.prototype,e),Ct.extend(a,e),a}var U=Ft(un);U.Axios=ne;U.create=function(e){return Ft(sn(U.defaults,e))};U.Cancel=Bt();U.CancelToken=rn();U.isCancel=Lt();U.all=function(e){return Promise.all(e)};U.spread=nn();U.isAxiosError=an();Te.exports=U;Te.exports.default=U;var cn=Te.exports,ln=cn;(function(t){function e(l){return l&&typeof l=="object"&&"default"in l?l.default:l}var a=e(ln),o=_t,i=e(Ht);function u(){return(u=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(l[n]=r[n])}return l}).apply(this,arguments)}var f,p={modal:null,listener:null,show:function(l){var s=this;typeof l=="object"&&(l="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(l));var r=document.createElement("html");r.innerHTML=l,r.querySelectorAll("a").forEach(function(c){return c.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return s.hide()});var n=document.createElement("iframe");if(n.style.backgroundColor="white",n.style.borderRadius="5px",n.style.width="100%",n.style.height="100%",this.modal.appendChild(n),document.body.prepend(this.modal),document.body.style.overflow="hidden",!n.contentWindow)throw new Error("iframe not yet ready.");n.contentWindow.document.open(),n.contentWindow.document.write(r.outerHTML),n.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(l){l.keyCode===27&&this.hide()}};function w(l,s){var r;return function(){var n=arguments,c=this;clearTimeout(r),r=setTimeout(function(){return l.apply(c,[].slice.call(n))},s)}}function d(l,s,r){for(var n in s===void 0&&(s=new FormData),r===void 0&&(r=null),l=l||{})Object.prototype.hasOwnProperty.call(l,n)&&C(s,I(r,n),l[n]);return s}function I(l,s){return l?l+"["+s+"]":s}function C(l,s,r){return Array.isArray(r)?Array.from(r.keys()).forEach(function(n){return C(l,I(s,n.toString()),r[n])}):r instanceof Date?l.append(s,r.toISOString()):r instanceof File?l.append(s,r,r.name):r instanceof Blob?l.append(s,r):typeof r=="boolean"?l.append(s,r?"1":"0"):typeof r=="string"?l.append(s,r):typeof r=="number"?l.append(s,""+r):r==null?l.append(s,""):void d(r,l,s)}function g(l){return new URL(l.toString(),window.location.toString())}function v(l,s,r,n){n===void 0&&(n="brackets");var c=/^https?:\/\//.test(s.toString()),h=c||s.toString().startsWith("/"),E=!h&&!s.toString().startsWith("#")&&!s.toString().startsWith("?"),P=s.toString().includes("?")||l===t.Method.GET&&Object.keys(r).length,S=s.toString().includes("#"),y=new URL(s.toString(),"http://localhost");return l===t.Method.GET&&Object.keys(r).length&&(y.search=o.stringify(i(o.parse(y.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:n}),r={}),[[c?y.protocol+"//"+y.host:"",h?y.pathname:"",E?y.pathname.substring(1):"",P?y.search:"",S?y.hash:""].join(""),r]}function k(l){return(l=new URL(l.href)).hash="",l}function R(l,s){return document.dispatchEvent(new CustomEvent("inertia:"+l,s))}(f=t.Method||(t.Method={})).GET="get",f.POST="post",f.PUT="put",f.PATCH="patch",f.DELETE="delete";var m=function(l){return R("finish",{detail:{visit:l}})},D=function(l){return R("navigate",{detail:{page:l}})},q=typeof window>"u",K=function(){function l(){this.visitId=null}var s=l.prototype;return s.init=function(r){var n=r.resolveComponent,c=r.swapComponent;this.page=r.initialPage,this.resolveComponent=n,this.swapComponent=c,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},s.handleInitialPageVisit=function(r){this.page.url+=window.location.hash,this.setPage(r,{preserveState:!0}).then(function(){return D(r)})},s.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",w(this.handleScrollEvent.bind(this),100),!0)},s.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},s.handleScrollEvent=function(r){typeof r.target.hasAttribute=="function"&&r.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},s.saveScrollPositions=function(){this.replaceState(u({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(r){return{top:r.scrollTop,left:r.scrollLeft}})}))},s.resetScrollPositions=function(){var r;window.scrollTo(0,0),this.scrollRegions().forEach(function(n){typeof n.scrollTo=="function"?n.scrollTo(0,0):(n.scrollTop=0,n.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&((r=document.getElementById(window.location.hash.slice(1)))==null||r.scrollIntoView())},s.restoreScrollPositions=function(){var r=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(n,c){var h=r.page.scrollRegions[c];h&&(typeof n.scrollTo=="function"?n.scrollTo(h.left,h.top):(n.scrollTop=h.top,n.scrollLeft=h.left))})},s.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&window.performance.getEntriesByType("navigation")[0].type==="back_forward"},s.handleBackForwardVisit=function(r){var n=this;window.history.state.version=r.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){n.restoreScrollPositions(),D(r)})},s.locationVisit=function(r,n){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:n})),window.location.href=r.href,k(window.location).href===k(r).href&&window.location.reload()}catch{return!1}},s.isLocationVisit=function(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}},s.handleLocationVisit=function(r){var n,c,h,E,P=this,S=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),r.url+=window.location.hash,r.rememberedState=(n=(c=window.history.state)==null?void 0:c.rememberedState)!=null?n:{},r.scrollRegions=(h=(E=window.history.state)==null?void 0:E.scrollRegions)!=null?h:[],this.setPage(r,{preserveScroll:S.preserveScroll,preserveState:!0}).then(function(){S.preserveScroll&&P.restoreScrollPositions(),D(r)})},s.isLocationVisitResponse=function(r){return r&&r.status===409&&r.headers["x-inertia-location"]},s.isInertiaResponse=function(r){return r==null?void 0:r.headers["x-inertia"]},s.createVisitId=function(){return this.visitId={},this.visitId},s.cancelVisit=function(r,n){var c=n.cancelled,h=c!==void 0&&c,E=n.interrupted,P=E!==void 0&&E;!r||r.completed||r.cancelled||r.interrupted||(r.cancelToken.cancel(),r.onCancel(),r.completed=!1,r.cancelled=h,r.interrupted=P,m(r),r.onFinish(r))},s.finishVisit=function(r){r.cancelled||r.interrupted||(r.completed=!0,r.cancelled=!1,r.interrupted=!1,m(r),r.onFinish(r))},s.resolvePreserveOption=function(r,n){return typeof r=="function"?r(n):r==="errors"?Object.keys(n.props.errors||{}).length>0:r},s.visit=function(r,n){var c=this,h=n===void 0?{}:n,E=h.method,P=E===void 0?t.Method.GET:E,S=h.data,y=S===void 0?{}:S,L=h.replace,F=L!==void 0&&L,J=h.preserveScroll,V=J!==void 0&&J,Y=h.preserveState,Z=Y!==void 0&&Y,Ne=h.only,ee=Ne===void 0?[]:Ne,Ie=h.headers,qe=Ie===void 0?{}:Ie,Ue=h.errorBag,M=Ue===void 0?"":Ue,De=h.forceFormData,Be=De!==void 0&&De,Fe=h.onCancelToken,Ve=Fe===void 0?function(){}:Fe,Me=h.onBefore,$e=Me===void 0?function(){}:Me,He=h.onStart,_e=He===void 0?function(){}:He,ze=h.onProgress,Je=ze===void 0?function(){}:ze,We=h.onFinish,Vt=We===void 0?function(){}:We,Xe=h.onCancel,Mt=Xe===void 0?function(){}:Xe,Ke=h.onSuccess,Ge=Ke===void 0?function(){}:Ke,Qe=h.onError,Ye=Qe===void 0?function(){}:Qe,Ze=h.queryStringArrayFormat,se=Ze===void 0?"brackets":Ze,H=typeof r=="string"?g(r):r;if(!function b(x){return x instanceof File||x instanceof Blob||x instanceof FileList&&x.length>0||x instanceof FormData&&Array.from(x.values()).some(function(O){return b(O)})||typeof x=="object"&&x!==null&&Object.values(x).some(function(O){return b(O)})}(y)&&!Be||y instanceof FormData||(y=d(y)),!(y instanceof FormData)){var et=v(P,H,y,se),$t=et[1];H=g(et[0]),y=$t}var W={url:H,method:P,data:y,replace:F,preserveScroll:V,preserveState:Z,only:ee,headers:qe,errorBag:M,forceFormData:Be,queryStringArrayFormat:se,cancelled:!1,completed:!1,interrupted:!1};if($e(W)!==!1&&function(b){return R("before",{cancelable:!0,detail:{visit:b}})}(W)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var tt=this.createVisitId();this.activeVisit=u({},W,{onCancelToken:Ve,onBefore:$e,onStart:_e,onProgress:Je,onFinish:Vt,onCancel:Mt,onSuccess:Ge,onError:Ye,queryStringArrayFormat:se,cancelToken:a.CancelToken.source()}),Ve({cancel:function(){c.activeVisit&&c.cancelVisit(c.activeVisit,{cancelled:!0})}}),function(b){R("start",{detail:{visit:b}})}(W),_e(W),a({method:P,url:k(H).href,data:P===t.Method.GET?{}:y,params:P===t.Method.GET?y:{},cancelToken:this.activeVisit.cancelToken.token,headers:u({},qe,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},ee.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":ee.join(",")}:{},M&&M.length?{"X-Inertia-Error-Bag":M}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(b){y instanceof FormData&&(b.percentage=Math.round(b.loaded/b.total*100),function(x){R("progress",{detail:{progress:x}})}(b),Je(b))}}).then(function(b){var x;if(!c.isInertiaResponse(b))return Promise.reject({response:b});var O=b.data;ee.length&&O.component===c.page.component&&(O.props=u({},c.page.props,O.props)),V=c.resolvePreserveOption(V,O),(Z=c.resolvePreserveOption(Z,O))&&(x=window.history.state)!=null&&x.rememberedState&&O.component===c.page.component&&(O.rememberedState=window.history.state.rememberedState);var ue=H,te=g(O.url);return ue.hash&&!te.hash&&k(ue).href===te.href&&(te.hash=ue.hash,O.url=te.href),c.setPage(O,{visitId:tt,replace:F,preserveScroll:V,preserveState:Z})}).then(function(){var b=c.page.props.errors||{};if(Object.keys(b).length>0){var x=M?b[M]?b[M]:{}:b;return function(O){R("error",{detail:{errors:O}})}(x),Ye(x)}return R("success",{detail:{page:c.page}}),Ge(c.page)}).catch(function(b){if(c.isInertiaResponse(b.response))return c.setPage(b.response.data,{visitId:tt});if(c.isLocationVisitResponse(b.response)){var x=g(b.response.headers["x-inertia-location"]),O=H;O.hash&&!x.hash&&k(O).href===x.href&&(x.hash=O.hash),c.locationVisit(x,V===!0)}else{if(!b.response)return Promise.reject(b);R("invalid",{cancelable:!0,detail:{response:b.response}})&&p.show(b.response.data)}}).then(function(){c.activeVisit&&c.finishVisit(c.activeVisit)}).catch(function(b){if(!a.isCancel(b)){var x=R("exception",{cancelable:!0,detail:{exception:b}});if(c.activeVisit&&c.finishVisit(c.activeVisit),x)return Promise.reject(b)}})}},s.setPage=function(r,n){var c=this,h=n===void 0?{}:n,E=h.visitId,P=E===void 0?this.createVisitId():E,S=h.replace,y=S!==void 0&&S,L=h.preserveScroll,F=L!==void 0&&L,J=h.preserveState,V=J!==void 0&&J;return Promise.resolve(this.resolveComponent(r.component)).then(function(Y){P===c.visitId&&(r.scrollRegions=r.scrollRegions||[],r.rememberedState=r.rememberedState||{},(y=y||g(r.url).href===window.location.href)?c.replaceState(r):c.pushState(r),c.swapComponent({component:Y,page:r,preserveState:V}).then(function(){F||c.resetScrollPositions(),y||D(r)}))})},s.pushState=function(r){this.page=r,window.history.pushState(r,"",r.url)},s.replaceState=function(r){this.page=r,window.history.replaceState(r,"",r.url)},s.handlePopstateEvent=function(r){var n=this;if(r.state!==null){var c=r.state,h=this.createVisitId();Promise.resolve(this.resolveComponent(c.component)).then(function(P){h===n.visitId&&(n.page=c,n.swapComponent({component:P,page:c,preserveState:!1}).then(function(){n.restoreScrollPositions(),D(c)}))})}else{var E=g(this.page.url);E.hash=window.location.hash,this.replaceState(u({},this.page,{url:E.href})),this.resetScrollPositions()}},s.get=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({},c,{method:t.Method.GET,data:n}))},s.reload=function(r){return r===void 0&&(r={}),this.visit(window.location.href,u({},r,{preserveScroll:!0,preserveState:!0}))},s.replace=function(r,n){var c;return n===void 0&&(n={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+((c=n.method)!=null?c:"get")+"() instead."),this.visit(r,u({preserveState:!0},n,{replace:!0}))},s.post=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.POST,data:n}))},s.put=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.PUT,data:n}))},s.patch=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.PATCH,data:n}))},s.delete=function(r,n){return n===void 0&&(n={}),this.visit(r,u({preserveState:!0},n,{method:t.Method.DELETE}))},s.remember=function(r,n){var c,h;n===void 0&&(n="default"),q||this.replaceState(u({},this.page,{rememberedState:u({},(c=this.page)==null?void 0:c.rememberedState,(h={},h[n]=r,h))}))},s.restore=function(r){var n,c;if(r===void 0&&(r="default"),!q)return(n=window.history.state)==null||(c=n.rememberedState)==null?void 0:c[r]},s.on=function(r,n){var c=function(h){var E=n(h);h.cancelable&&!h.defaultPrevented&&E===!1&&h.preventDefault()};return document.addEventListener("inertia:"+r,c),function(){return document.removeEventListener("inertia:"+r,c)}},l}(),G={buildDOMElement:function(l){var s=document.createElement("template");s.innerHTML=l;var r=s.content.firstChild;if(!l.startsWith("<script "))return r;var n=document.createElement("script");return n.innerHTML=r.innerHTML,r.getAttributeNames().forEach(function(c){n.setAttribute(c,r.getAttribute(c)||"")}),n},isInertiaManagedElement:function(l){return l.nodeType===Node.ELEMENT_NODE&&l.getAttribute("inertia")!==null},findMatchingElementIndex:function(l,s){var r=l.getAttribute("inertia");return r!==null?s.findIndex(function(n){return n.getAttribute("inertia")===r}):-1},update:w(function(l){var s=this,r=l.map(function(n){return s.buildDOMElement(n)});Array.from(document.head.childNodes).filter(function(n){return s.isInertiaManagedElement(n)}).forEach(function(n){var c=s.findMatchingElementIndex(n,r);if(c!==-1){var h,E=r.splice(c,1)[0];E&&!n.isEqualNode(E)&&(n==null||(h=n.parentNode)==null||h.replaceChild(E,n))}else{var P;n==null||(P=n.parentNode)==null||P.removeChild(n)}}),r.forEach(function(n){return document.head.appendChild(n)})},1)},Q=new K;t.Inertia=Q,t.createHeadManager=function(l,s,r){var n={},c=0;function h(){var P=Object.values(n).reduce(function(S,y){return S.concat(y)},[]).reduce(function(S,y){if(y.indexOf("<")===-1)return S;if(y.indexOf("<title ")===0){var L=y.match(/(<title [^>]+>)(.*?)(<\/title>)/);return S.title=L?""+L[1]+s(L[2])+L[3]:y,S}var F=y.match(/ inertia="[^"]+"/);return F?S[F[0]]=y:S[Object.keys(S).length]=y,S},{});return Object.values(P)}function E(){l?r(h()):G.update(h())}return{createProvider:function(){var P=function(){var S=c+=1;return n[S]=[],S.toString()}();return{update:function(S){return function(y,L){L===void 0&&(L=[]),y!==null&&Object.keys(n).indexOf(y)>-1&&(n[y]=L),E()}(P,S)},disconnect:function(){return function(S){S!==null&&Object.keys(n).indexOf(S)!==-1&&(delete n[S],E())}(P)}}}}},t.hrefToUrl=g,t.mergeDataIntoQueryString=v,t.shouldIntercept=function(l){var s=l.currentTarget.tagName.toLowerCase()==="a";return!(l.target&&l!=null&&l.target.isContentEditable||l.defaultPrevented||s&&l.which>1||s&&l.altKey||s&&l.ctrlKey||s&&l.metaKey||s&&l.shiftKey)},t.urlWithoutHash=k})(Pt);const Sn=({identyCotizacion:t=1,vistaPreviaExcel:e=!1,setVistaPreviaExcel:a})=>{const o=B.useRef(null),[i,u]=B.useState(!1),[f,p]=B.useState(!1),[w,d]=B.useState(!1),[I,C]=B.useState(!1),[g,v]=B.useState(null),[k,R]=B.useState(!1);B.useEffect(()=>{v(null),R(!1),m(),u(e)},[e]);const m=()=>{p(!1),d(!1),C(!1)},D=()=>{v(null),R(!0);const q=`${route("exportar.excel.cotizacion")}?id=${t}&encabezado=${f}&pie-pagina=${w}&firma=${I}`;setTimeout(()=>{o.current.show({severity:"success",summary:"Exito",detail:"Excel Descargado Correctamente"}),Pt.Inertia.visit(q,{method:"get"}),R(!1)},1e3)};return T.jsxs(Jt,{header:"Descargar Excel Cotización",visible:i,maximizable:!0,style:{width:"50vw"},onHide:()=>{i&&a(!1)},children:[T.jsxs("div",{className:"card flex flex-wrap gap-4 p-fluid",children:[T.jsxs("div",{className:"flex-auto text-center",children:[T.jsx("label",{htmlFor:"mile",className:"font-bold block mb-2",children:"Agregar encabezados"}),T.jsx(ce,{checked:f,onChange:q=>p(q.value)})," ",T.jsx("span",{children:f?"SI":"NO"})]}),T.jsxs("div",{className:"flex-auto text-center",children:[T.jsx("label",{htmlFor:"percent",className:"font-bold block mb-2",children:"Agregar Pie de Pagina"}),T.jsx(ce,{checked:w,onChange:q=>d(q.value)}),w?"SI":"NO"]}),T.jsxs("div",{className:"flex-auto text-center",children:[T.jsx("label",{htmlFor:"expiry",className:"font-bold block mb-2",children:"Agregar Firma"}),T.jsx(ce,{checked:I,onChange:q=>C(q.value)}),I?"SI":"NO"]}),T.jsx("div",{className:"flex-auto",children:T.jsx(zt,{label:"Desgar Excel",iconPos:"right",onClick:()=>D(),disabled:k})})]}),k&&T.jsx("div",{className:"flex justify-content-center",children:T.jsx(Wt,{})}),T.jsx("div",{className:" flex justify-content-center",children:T.jsx(Xt,{ref:o,position:"top-left"})})]})};export{Sn as default};
