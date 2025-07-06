import{r as v,P as Ce,D as b,b as J,O as k,R as lt,Z as H,c as Ae}from"./app-6c82f11e.js";import{b as _e,c as U,g as De,C as st,u as ct,d as pt,a as ft,e as dt,E as vt,l as mt,m as yt}from"./iconbase.esm-c62f15b0.js";function ht(t){if(Array.isArray(t))return t}function bt(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var u,a,E,g,d=[],m=!0,T=!1;try{if(E=(r=r.call(t)).next,n===0){if(Object(r)!==r)return;m=!1}else for(;!(m=(u=E.call(r)).done)&&(d.push(u.value),d.length!==n);m=!0);}catch(x){T=!0,a=x}finally{try{if(!m&&r.return!=null&&(g=r.return(),Object(g)!==g))return}finally{if(T)throw a}}return d}}function Pe(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,u=new Array(n);r<n;r++)u[r]=t[r];return u}function gt(t,n){if(t){if(typeof t=="string")return Pe(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Pe(t,n)}}function Et(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wt(t,n){return ht(t)||bt(t,n)||gt(t,n)||Et()}var Q={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(n){return k.getMergedProps(n,Q.defaultProps)},getOtherProps:function(n){return k.getDiffProps(n,Q.defaultProps)}},Me=v.memo(function(t){var n=Q.getProps(t),r=v.useContext(Ce),u=v.useState(n.visible&&b.isClient()),a=wt(u,2),E=a[0],g=a[1];_e(function(){b.isClient()&&!E&&(g(!0),n.onMounted&&n.onMounted())}),U(function(){n.onMounted&&n.onMounted()},[E]),De(function(){n.onUnmounted&&n.onUnmounted()});var d=n.element||n.children;if(d&&E){var m=n.appendTo||r&&r.appendTo||J.appendTo;return k.isFunction(m)&&(m=m()),m||(m=document.body),m==="self"?d:lt.createPortal(d,m)}return null});Me.displayName="Portal";function B(){return B=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},B.apply(this,arguments)}function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},R(t)}function St(t,n){if(R(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var u=r.call(t,n||"default");if(R(u)!=="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Ot(t){var n=St(t,"string");return R(n)==="symbol"?n:String(n)}function Ie(t,n,r){return n=Ot(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function ee(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,u=new Array(n);r<n;r++)u[r]=t[r];return u}function Tt(t){if(Array.isArray(t))return ee(t)}function xt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function je(t,n){if(t){if(typeof t=="string")return ee(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(t,n)}}function Pt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rt(t){return Tt(t)||xt(t)||je(t)||Pt()}function Ct(t){if(Array.isArray(t))return t}function At(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var u,a,E,g,d=[],m=!0,T=!1;try{if(E=(r=r.call(t)).next,n===0){if(Object(r)!==r)return;m=!1}else for(;!(m=(u=E.call(r)).done)&&(d.push(u.value),d.length!==n);m=!0);}catch(x){T=!0,a=x}finally{try{if(!m&&r.return!=null&&(g=r.return(),Object(g)!==g))return}finally{if(T)throw a}}return d}}function _t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(t,n){return Ct(t)||At(t,n)||je(t,n)||_t()}var Dt={root:function(n){var r=n.positionState,u=n.classNameState;return Ae("p-tooltip p-component",Ie({},"p-tooltip-".concat(r),!0),u)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Mt={arrow:function(n){var r=n.context;return{top:r.bottom?"0":r.right||r.left||!r.right&&!r.left&&!r.top&&!r.bottom?"50%":null,bottom:r.top?"0":null,left:r.right||!r.right&&!r.left&&!r.top&&!r.bottom?"0":r.top||r.bottom?"50%":null,right:r.left?"0":null}}},It=`
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
`,W=st.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:Dt,styles:It,inlineStyles:Mt}});function Re(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);n&&(u=u.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,u)}return r}function jt(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Re(Object(r),!0).forEach(function(u){Ie(t,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach(function(u){Object.defineProperty(t,u,Object.getOwnPropertyDescriptor(r,u))})}return t}var Lt=v.memo(v.forwardRef(function(t,n){var r=ct(),u=v.useContext(Ce),a=W.getProps(t,u),E=v.useState(!1),g=P(E,2),d=g[0],m=g[1],T=v.useState(a.position||"right"),x=P(T,2),O=x[0],Z=x[1],Le=v.useState(""),te=P(Le,2),re=te[0],ne=te[1],Ne=v.useState(!1),oe=P(Ne,2),$e=oe[0],ae=oe[1],ie=d&&a.closeOnEscape,He=pt("tooltip",ie),ue={props:a,state:{visible:d,position:O,className:re},context:{right:O==="right",left:O==="left",top:O==="top",bottom:O==="bottom"}},C=W.setMetaData(ue),F=C.ptm,Y=C.cx,We=C.sx,Ue=C.isUnstyled;ft(W.css.styles,Ue,{name:"tooltip"}),dt({callback:function(){w()},when:ie,priority:[vt.TOOLTIP,He]});var p=v.useRef(null),A=v.useRef(null),f=v.useRef(null),_=v.useRef(null),D=v.useRef(!0),le=v.useRef({}),se=v.useRef(null),ke=mt({listener:function(e){!b.isTouchDevice()&&w(e)}}),ce=P(ke,2),Be=ce[0],Ze=ce[1],Fe=yt({target:f.current,listener:function(e){w(e)},when:d}),pe=P(Fe,2),Ye=pe[0],Ke=pe[1],Xe=function(e){return!(a.content||y(e,"tooltip"))},Ge=function(e){return!(a.content||y(e,"tooltip")||a.children)},K=function(e){return y(e,"mousetrack")||a.mouseTrack},fe=function(e){return y(e,"disabled")==="true"||ve(e,"disabled")||a.disabled},de=function(e){return y(e,"showondisabled")||a.showOnDisabled},M=function(){return y(f.current,"autohide")||a.autoHide},y=function(e,o){return ve(e,"data-pr-".concat(o))?e.getAttribute("data-pr-".concat(o)):null},ve=function(e,o){return e&&e.hasAttribute(o)},me=function(e){var o=[y(e,"showevent")||a.showEvent],c=[y(e,"hideevent")||a.hideEvent];if(K(e))o=["mousemove"],c=["mouseleave"];else{var l=y(e,"event")||a.event;l==="focus"&&(o=["focus"],c=["blur"]),l==="both"&&(o=["focus","mouseenter"],c=$e?["blur"]:["mouseleave","blur"])}return{showEvents:o,hideEvents:c}},ye=function(e){return y(e,"position")||O},ze=function(e){var o=y(e,"mousetracktop")||a.mouseTrackTop,c=y(e,"mousetrackleft")||a.mouseTrackLeft;return{top:o,left:c}},he=function(e,o){if(A.current){var c=y(e,"tooltip")||a.content;c?(A.current.innerHTML="",A.current.appendChild(document.createTextNode(c)),o()):a.children&&o()}},be=function(e){he(f.current,function(){var o=se.current,c=o.pageX,l=o.pageY;a.autoZIndex&&!H.get(p.current)&&H.set("tooltip",p.current,u&&u.autoZIndex||J.autoZIndex,a.baseZIndex||u&&u.zIndex.tooltip||J.zIndex.tooltip),p.current.style.left="",p.current.style.top="",M()&&(p.current.style.pointerEvents="none");var s=K(f.current)||e==="mouse";(s&&!_.current||s)&&(_.current={width:b.getOuterWidth(p.current),height:b.getOuterHeight(p.current)}),ge(f.current,{x:c,y:l},e)})},I=function(e){e.type&&e.type==="focus"&&ae(!0),f.current=e.currentTarget;var o=fe(f.current),c=Ge(de(f.current)&&o?f.current.firstChild:f.current);if(!(c||o))if(se.current=e,d)j("updateDelay",be);else{var l=L(a.onBeforeShow,{originalEvent:e,target:f.current});l&&j("showDelay",function(){m(!0),L(a.onShow,{originalEvent:e,target:f.current})})}},w=function(e){if(e&&e.type==="blur"&&ae(!1),Ee(),d){var o=L(a.onBeforeHide,{originalEvent:e,target:f.current});o&&j("hideDelay",function(){!M()&&D.current===!1||(H.clear(p.current),b.removeClass(p.current,"p-tooltip-active"),m(!1),L(a.onHide,{originalEvent:e,target:f.current}))})}},ge=function(e,o,c){var l=0,s=0,h=c||O;if((K(e)||h=="mouse")&&o){var S={width:b.getOuterWidth(p.current),height:b.getOuterHeight(p.current)};l=o.x,s=o.y;var Oe=ze(e),N=Oe.top,$=Oe.left;switch(h){case"left":l=l-(S.width+$),s=s-(S.height/2-N);break;case"right":case"mouse":l=l+$,s=s-(S.height/2-N);break;case"top":l=l-(S.width/2-$),s=s-(S.height+N);break;case"bottom":l=l-(S.width/2-$),s=s+N;break}l<=0||_.current.width>S.width?(p.current.style.left="0px",p.current.style.right=window.innerWidth-S.width-l+"px"):(p.current.style.right="",p.current.style.left=l+"px"),p.current.style.top=s+"px",b.addClass(p.current,"p-tooltip-active")}else{var z=b.findCollisionPosition(h),ot=y(e,"my")||a.my||z.my,at=y(e,"at")||a.at||z.at;p.current.style.padding="0px",b.flipfitCollision(p.current,e,ot,at,function(V){var Te=V.at,q=Te.x,it=Te.y,ut=V.my.x,xe=a.at?q!=="center"&&q!==ut?q:it:V.at["".concat(z.axis)];p.current.style.padding="",Z(xe),Ve(xe),b.addClass(p.current,"p-tooltip-active")})}},Ve=function(e){if(p.current){var o=getComputedStyle(p.current);e==="left"?p.current.style.left=parseFloat(o.left)-parseFloat(o.paddingLeft)*2+"px":e==="top"&&(p.current.style.top=parseFloat(o.top)-parseFloat(o.paddingTop)*2+"px")}},qe=function(){M()||(D.current=!1)},Je=function(e){M()||(D.current=!0,w(e))},Qe=function(e){if(e){var o=me(e),c=o.showEvents,l=o.hideEvents,s=we(e);c.forEach(function(h){return s==null?void 0:s.addEventListener(h,I)}),l.forEach(function(h){return s==null?void 0:s.addEventListener(h,w)})}},et=function(e){if(e){var o=me(e),c=o.showEvents,l=o.hideEvents,s=we(e);c.forEach(function(h){return s==null?void 0:s.removeEventListener(h,I)}),l.forEach(function(h){return s==null?void 0:s.removeEventListener(h,w)})}},j=function(e,o){Ee();var c=y(f.current,e.toLowerCase())||a[e];c?le.current["".concat(e)]=setTimeout(function(){return o()},c):o()},L=function(e){if(e){for(var o=arguments.length,c=new Array(o>1?o-1:0),l=1;l<o;l++)c[l-1]=arguments[l];var s=e.apply(void 0,c);return s===void 0&&(s=!0),s}return!0},Ee=function(){Object.values(le.current).forEach(function(e){return clearTimeout(e)})},we=function(e){if(e){if(de(e)){if(!e.hasWrapper){var o=document.createElement("div"),c=e.nodeName==="INPUT";return c?b.addMultipleClasses(o,"p-tooltip-target-wrapper p-inputwrapper"):b.addClass(o,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(o,e),o.appendChild(e),e.hasWrapper=!0,o}return e.parentElement}else if(e.hasWrapper){var l;(l=e.parentElement).replaceWith.apply(l,Rt(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},tt=function(e){G(e),X(e)},X=function(e){Se(e||a.target,Qe)},G=function(e){Se(e||a.target,et)},Se=function(e,o){if(e=k.getRefElement(e),e)if(b.isElement(e))o(e);else{var c=function(s){var h=b.find(document,s);h.forEach(function(S){o(S)})};e instanceof Array?e.forEach(function(l){c(l)}):c(e)}};_e(function(){d&&f.current&&fe(f.current)&&w()}),U(function(){return X(),function(){G()}},[I,w,a.target]),U(function(){if(d){var i=ye(f.current),e=y(f.current,"classname");Z(i),ne(e),be(i),Be(),Ye()}else Z(a.position||"right"),ne(""),f.current=null,_.current=null,D.current=!0;return function(){Ze(),Ke()}},[d]),U(function(){var i=ye(f.current);d&&i!=="mouse"&&j("updateDelay",function(){he(f.current,function(){ge(f.current)})})},[a.content]),De(function(){w(),H.clear(p.current)}),v.useImperativeHandle(n,function(){return{props:a,updateTargetEvents:tt,loadTargetEvents:X,unloadTargetEvents:G,show:I,hide:w,getElement:function(){return p.current},getTarget:function(){return f.current}}});var rt=function(){var e=Xe(f.current),o=r({id:a.id,className:Ae(a.className,Y("root",{positionState:O,classNameState:re})),style:a.style,role:"tooltip","aria-hidden":d,onMouseEnter:function(h){return qe()},onMouseLeave:function(h){return Je(h)}},W.getOtherProps(a),F("root")),c=r({className:Y("arrow"),style:We("arrow",jt({},ue))},F("arrow")),l=r({className:Y("text")},F("text"));return v.createElement("div",B({ref:p},o),v.createElement("div",c),v.createElement("div",B({ref:A},l),e&&a.children))};if(d){var nt=rt();return v.createElement(Me,{element:nt,appendTo:a.appendTo,visible:!0})}return null}));Lt.displayName="Tooltip";export{Me as P,Lt as T};
//# sourceMappingURL=tooltip.esm-0f28f899.js.map
