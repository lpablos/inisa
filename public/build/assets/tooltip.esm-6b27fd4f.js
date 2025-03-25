import{r as f,P as Ie,D as b,b as J,O as B,R as st,Z as H,c as Ae}from"./app-fec1f9ef.js";import{I as ct,c as _e,b as U,g as je,C as pt,u as ft,d as dt,a as vt,e as mt,E as yt,h as ht,i as bt}from"./ripple.esm-aa678d2b.js";function Q(){return Q=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Q.apply(this,arguments)}var gt=f.memo(f.forwardRef(function(t,r){var n=ct.getPTI(t);return f.createElement("svg",Q({ref:r,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),f.createElement("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"}))}));gt.displayName="SpinnerIcon";function wt(t){if(Array.isArray(t))return t}function Et(t,r){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,a,w,g,v=[],m=!0,C=!1;try{if(w=(n=n.call(t)).next,r===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(i=w.call(n)).done)&&(v.push(i.value),v.length!==r);m=!0);}catch(T){C=!0,a=T}finally{try{if(!m&&n.return!=null&&(g=n.return(),Object(g)!==g))return}finally{if(C)throw a}}return v}}function Pe(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,i=new Array(r);n<r;n++)i[n]=t[n];return i}function St(t,r){if(t){if(typeof t=="string")return Pe(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pe(t,r)}}function Ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(t,r){return wt(t)||Et(t,r)||St(t,r)||Ot()}var ee={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(r){return B.getMergedProps(r,ee.defaultProps)},getOtherProps:function(r){return B.getDiffProps(r,ee.defaultProps)}},Me=f.memo(function(t){var r=ee.getProps(t),n=f.useContext(Ie),i=f.useState(r.visible&&b.isClient()),a=Ct(i,2),w=a[0],g=a[1];_e(function(){b.isClient()&&!w&&(g(!0),r.onMounted&&r.onMounted())}),U(function(){r.onMounted&&r.onMounted()},[w]),je(function(){r.onUnmounted&&r.onUnmounted()});var v=r.element||r.children;if(v&&w){var m=r.appendTo||n&&n.appendTo||J.appendTo;return B.isFunction(m)&&(m=m()),m||(m=document.body),m==="self"?v:st.createPortal(v,m)}return null});Me.displayName="Portal";function k(){return k=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},k.apply(this,arguments)}function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},P(t)}function Tt(t,r){if(P(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,r||"default");if(P(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function xt(t){var r=Tt(t,"string");return P(r)==="symbol"?r:String(r)}function De(t,r,n){return r=xt(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function te(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,i=new Array(r);n<r;n++)i[n]=t[n];return i}function Pt(t){if(Array.isArray(t))return te(t)}function Rt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Le(t,r){if(t){if(typeof t=="string")return te(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(t,r)}}function It(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(t){return Pt(t)||Rt(t)||Le(t)||It()}function _t(t){if(Array.isArray(t))return t}function jt(t,r){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,a,w,g,v=[],m=!0,C=!1;try{if(w=(n=n.call(t)).next,r===0){if(Object(n)!==n)return;m=!1}else for(;!(m=(i=w.call(n)).done)&&(v.push(i.value),v.length!==r);m=!0);}catch(T){C=!0,a=T}finally{try{if(!m&&n.return!=null&&(g=n.return(),Object(g)!==g))return}finally{if(C)throw a}}return v}}function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(t,r){return _t(t)||jt(t,r)||Le(t,r)||Mt()}var Dt={root:function(r){var n=r.positionState,i=r.classNameState;return Ae("p-tooltip p-component",De({},"p-tooltip-".concat(n),!0),i)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Lt={arrow:function(r){var n=r.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},Nt=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,W=pt.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:Dt,styles:Nt,inlineStyles:Lt}});function Re(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function $t(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Re(Object(n),!0).forEach(function(i){De(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}var Ht=f.memo(f.forwardRef(function(t,r){var n=ft(),i=f.useContext(Ie),a=W.getProps(t,i),w=f.useState(!1),g=x(w,2),v=g[0],m=g[1],C=f.useState(a.position||"right"),T=x(C,2),O=T[0],Z=T[1],Ne=f.useState(""),ne=x(Ne,2),re=ne[0],oe=ne[1],$e=f.useState(!1),ae=x($e,2),He=ae[0],ie=ae[1],le=v&&a.closeOnEscape,We=dt("tooltip",le),ue={props:a,state:{visible:v,position:O,className:re},context:{right:O==="right",left:O==="left",top:O==="top",bottom:O==="bottom"}},R=W.setMetaData(ue),F=R.ptm,Y=R.cx,Ue=R.sx,Be=R.isUnstyled;vt(W.css.styles,Be,{name:"tooltip"}),mt({callback:function(){E()},when:le,priority:[yt.TOOLTIP,We]});var p=f.useRef(null),I=f.useRef(null),d=f.useRef(null),A=f.useRef(null),_=f.useRef(!0),se=f.useRef({}),ce=f.useRef(null),ke=ht({listener:function(e){!b.isTouchDevice()&&E(e)}}),pe=x(ke,2),Ze=pe[0],Fe=pe[1],Ye=bt({target:d.current,listener:function(e){E(e)},when:v}),fe=x(Ye,2),Ke=fe[0],Xe=fe[1],Ge=function(e){return!(a.content||y(e,"tooltip"))},ze=function(e){return!(a.content||y(e,"tooltip")||a.children)},K=function(e){return y(e,"mousetrack")||a.mouseTrack},de=function(e){return y(e,"disabled")==="true"||me(e,"disabled")||a.disabled},ve=function(e){return y(e,"showondisabled")||a.showOnDisabled},j=function(){return y(d.current,"autohide")||a.autoHide},y=function(e,o){return me(e,"data-pr-".concat(o))?e.getAttribute("data-pr-".concat(o)):null},me=function(e,o){return e&&e.hasAttribute(o)},ye=function(e){var o=[y(e,"showevent")||a.showEvent],c=[y(e,"hideevent")||a.hideEvent];if(K(e))o=["mousemove"],c=["mouseleave"];else{var u=y(e,"event")||a.event;u==="focus"&&(o=["focus"],c=["blur"]),u==="both"&&(o=["focus","mouseenter"],c=He?["blur"]:["mouseleave","blur"])}return{showEvents:o,hideEvents:c}},he=function(e){return y(e,"position")||O},Ve=function(e){var o=y(e,"mousetracktop")||a.mouseTrackTop,c=y(e,"mousetrackleft")||a.mouseTrackLeft;return{top:o,left:c}},be=function(e,o){if(I.current){var c=y(e,"tooltip")||a.content;c?(I.current.innerHTML="",I.current.appendChild(document.createTextNode(c)),o()):a.children&&o()}},ge=function(e){be(d.current,function(){var o=ce.current,c=o.pageX,u=o.pageY;a.autoZIndex&&!H.get(p.current)&&H.set("tooltip",p.current,i&&i.autoZIndex||J.autoZIndex,a.baseZIndex||i&&i.zIndex.tooltip||J.zIndex.tooltip),p.current.style.left="",p.current.style.top="",j()&&(p.current.style.pointerEvents="none");var s=K(d.current)||e==="mouse";(s&&!A.current||s)&&(A.current={width:b.getOuterWidth(p.current),height:b.getOuterHeight(p.current)}),we(d.current,{x:c,y:u},e)})},M=function(e){e.type&&e.type==="focus"&&ie(!0),d.current=e.currentTarget;var o=de(d.current),c=ze(ve(d.current)&&o?d.current.firstChild:d.current);if(!(c||o))if(ce.current=e,v)D("updateDelay",ge);else{var u=L(a.onBeforeShow,{originalEvent:e,target:d.current});u&&D("showDelay",function(){m(!0),L(a.onShow,{originalEvent:e,target:d.current})})}},E=function(e){if(e&&e.type==="blur"&&ie(!1),Ee(),v){var o=L(a.onBeforeHide,{originalEvent:e,target:d.current});o&&D("hideDelay",function(){!j()&&_.current===!1||(H.clear(p.current),b.removeClass(p.current,"p-tooltip-active"),m(!1),L(a.onHide,{originalEvent:e,target:d.current}))})}},we=function(e,o,c){var u=0,s=0,h=c||O;if((K(e)||h=="mouse")&&o){var S={width:b.getOuterWidth(p.current),height:b.getOuterHeight(p.current)};u=o.x,s=o.y;var Ce=Ve(e),N=Ce.top,$=Ce.left;switch(h){case"left":u=u-(S.width+$),s=s-(S.height/2-N);break;case"right":case"mouse":u=u+$,s=s-(S.height/2-N);break;case"top":u=u-(S.width/2-$),s=s-(S.height+N);break;case"bottom":u=u-(S.width/2-$),s=s+N;break}u<=0||A.current.width>S.width?(p.current.style.left="0px",p.current.style.right=window.innerWidth-S.width-u+"px"):(p.current.style.right="",p.current.style.left=u+"px"),p.current.style.top=s+"px",b.addClass(p.current,"p-tooltip-active")}else{var z=b.findCollisionPosition(h),at=y(e,"my")||a.my||z.my,it=y(e,"at")||a.at||z.at;p.current.style.padding="0px",b.flipfitCollision(p.current,e,at,it,function(V){var Te=V.at,q=Te.x,lt=Te.y,ut=V.my.x,xe=a.at?q!=="center"&&q!==ut?q:lt:V.at["".concat(z.axis)];p.current.style.padding="",Z(xe),qe(xe),b.addClass(p.current,"p-tooltip-active")})}},qe=function(e){if(p.current){var o=getComputedStyle(p.current);e==="left"?p.current.style.left=parseFloat(o.left)-parseFloat(o.paddingLeft)*2+"px":e==="top"&&(p.current.style.top=parseFloat(o.top)-parseFloat(o.paddingTop)*2+"px")}},Je=function(){j()||(_.current=!1)},Qe=function(e){j()||(_.current=!0,E(e))},et=function(e){if(e){var o=ye(e),c=o.showEvents,u=o.hideEvents,s=Se(e);c.forEach(function(h){return s==null?void 0:s.addEventListener(h,M)}),u.forEach(function(h){return s==null?void 0:s.addEventListener(h,E)})}},tt=function(e){if(e){var o=ye(e),c=o.showEvents,u=o.hideEvents,s=Se(e);c.forEach(function(h){return s==null?void 0:s.removeEventListener(h,M)}),u.forEach(function(h){return s==null?void 0:s.removeEventListener(h,E)})}},D=function(e,o){Ee();var c=y(d.current,e.toLowerCase())||a[e];c?se.current["".concat(e)]=setTimeout(function(){return o()},c):o()},L=function(e){if(e){for(var o=arguments.length,c=new Array(o>1?o-1:0),u=1;u<o;u++)c[u-1]=arguments[u];var s=e.apply(void 0,c);return s===void 0&&(s=!0),s}return!0},Ee=function(){Object.values(se.current).forEach(function(e){return clearTimeout(e)})},Se=function(e){if(e){if(ve(e)){if(!e.hasWrapper){var o=document.createElement("div"),c=e.nodeName==="INPUT";return c?b.addMultipleClasses(o,"p-tooltip-target-wrapper p-inputwrapper"):b.addClass(o,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(o,e),o.appendChild(e),e.hasWrapper=!0,o}return e.parentElement}else if(e.hasWrapper){var u;(u=e.parentElement).replaceWith.apply(u,At(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},nt=function(e){G(e),X(e)},X=function(e){Oe(e||a.target,et)},G=function(e){Oe(e||a.target,tt)},Oe=function(e,o){if(e=B.getRefElement(e),e)if(b.isElement(e))o(e);else{var c=function(s){var h=b.find(document,s);h.forEach(function(S){o(S)})};e instanceof Array?e.forEach(function(u){c(u)}):c(e)}};_e(function(){v&&d.current&&de(d.current)&&E()}),U(function(){return X(),function(){G()}},[M,E,a.target]),U(function(){if(v){var l=he(d.current),e=y(d.current,"classname");Z(l),oe(e),ge(l),Ze(),Ke()}else Z(a.position||"right"),oe(""),d.current=null,A.current=null,_.current=!0;return function(){Fe(),Xe()}},[v]),U(function(){var l=he(d.current);v&&l!=="mouse"&&D("updateDelay",function(){be(d.current,function(){we(d.current)})})},[a.content]),je(function(){E(),H.clear(p.current)}),f.useImperativeHandle(r,function(){return{props:a,updateTargetEvents:nt,loadTargetEvents:X,unloadTargetEvents:G,show:M,hide:E,getElement:function(){return p.current},getTarget:function(){return d.current}}});var rt=function(){var e=Ge(d.current),o=n({id:a.id,className:Ae(a.className,Y("root",{positionState:O,classNameState:re})),style:a.style,role:"tooltip","aria-hidden":v,onMouseEnter:function(h){return Je()},onMouseLeave:function(h){return Qe(h)}},W.getOtherProps(a),F("root")),c=n({className:Y("arrow"),style:Ue("arrow",$t({},ue))},F("arrow")),u=n({className:Y("text")},F("text"));return f.createElement("div",k({ref:p},o),f.createElement("div",c),f.createElement("div",k({ref:I},u),e&&a.children))};if(v){var ot=rt();return f.createElement(Me,{element:ot,appendTo:a.appendTo,visible:!0})}return null}));Ht.displayName="Tooltip";export{Me as P,gt as S,Ht as T};
