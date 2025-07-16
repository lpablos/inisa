import{j as t,r as l,c as w,x as Z,L as X,X as _e,P as J,D as M,O as _,Z as W,b as G,d as Te,I as Fe,m as Ve}from"./app-19db06cb.js";import{C as me,u as be,a as ge,b as ie,d as $e,e as He,E as Ue,f as te,c as Q,g as fe}from"./iconbase.esm-8ede90bc.js";import{R as ne}from"./ripple.esm-586a3f44.js";import{a as Ke,C as oe}from"./csstransition.esm-dcf34adf.js";import{B as ce}from"./button.esm-8dbecc90.js";import{I as ze}from"./inputswitch.esm-77deffb1.js";import{T as Ze,P as Ge}from"./tooltip.esm-01d8262e.js";import{T as Xe}from"./index.esm-a014419b.js";const Je=()=>t.jsxs("div",{className:"layout-footer",children:[t.jsx("span",{children:"Servicios Electricos Mecanicos y Civiles"})," -",t.jsx("span",{className:"font-medium ml-2",children:"INISA"})," ",t.jsx("span",{children:"-2025"})]}),he=l.createContext({}),qe=({children:i})=>{const[n,e]=l.useState(""),r={activeMenu:n,setActiveMenu:e};return t.jsx(he.Provider,{value:r,children:i})},ve=i=>{const n=route(route().current()),e="",{activeMenu:r,setActiveMenu:a}=l.useContext(he),s=i.item,u=i.parentKey?i.parentKey+"-"+i.index:String(i.index),m=s.to&&n===s.to,b=r===u||r.startsWith(u+"-"),j=h=>{s.to&&s.to===h&&a(u)};l.useEffect(()=>{j(n)},[n,e]);const S=h=>{if(s.disabled){h.preventDefault();return}s.command&&s.command({originalEvent:h,item:s}),s.items?a(b?i.parentKey:u):a(u)},C=s.items&&s.visible!==!1&&t.jsx(Ke,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:i.root?!0:b,children:t.jsx("ul",{children:s.items.map((h,c)=>t.jsx(ve,{item:h,index:c,className:h.badgeClass,parentKey:u},h.label))})},s.label);return t.jsxs("li",{className:w({"layout-root-menuitem":i.root,"active-menuitem":b}),children:[i.root&&s.visible!==!1&&t.jsx("div",{className:"layout-menuitem-root-text",children:s.label}),(!s.to||s.items)&&s.visible!==!1?t.jsxs("a",{href:s.url,onClick:h=>S(h),className:w(s.class,"p-ripple"),target:s.target,tabIndex:0,children:[t.jsx("i",{className:w("layout-menuitem-icon",s.icon)}),t.jsx("span",{className:"layout-menuitem-text",children:s.label}),s.items&&t.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),t.jsx(ne,{})]}):null,s.to&&!s.items&&s.visible!==!1?t.jsxs(Z,{href:s.to,replace:s.replaceUrl,target:s.target,onClick:h=>S(h),className:w(s.class,"p-ripple",{"active-route":m}),tabIndex:0,children:[t.jsx("i",{className:w("layout-menuitem-icon",s.icon)}),t.jsx("span",{className:"layout-menuitem-text",children:s.label}),s.items&&t.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),t.jsx(ne,{})]}):null,C]})},Ye=()=>{var r;l.useContext(X);const{auth:i}=_e().props,n=((r=i==null?void 0:i.user)==null?void 0:r.rol)||"",e=[{label:"Menú",items:[{label:"Panel",icon:"pi pi-fw pi-home",to:route("dashboard")},{label:"Cotizaciones",icon:"pi pi-fw pi-folder-open",to:route("cotizacion.show.index")},{label:"Catalogos",icon:"pi pi-fw pi-tags",to:route("catalogo.gral.index")},{label:"Historico",icon:"pi pi-fw pi-eye-slash",visible:n==="AdministradorSis"||n==="Direccion"||n==="Aux Dirección",to:route("logs.historico.index")},{label:"Actividades",icon:"pi pi-fw pi-tags",to:route("activiades.index")}]}];return t.jsx(qe,{children:t.jsx("ul",{className:"layout-menu",children:e.map((a,s)=>a!=null&&a.seperator?t.jsx("li",{className:"menu-separator"}):t.jsx(ve,{item:a,root:!0,index:s},a.label))})})},We=()=>t.jsx(Ye,{}),ye=l.forwardRef((i,n)=>{const{layoutConfig:e,layoutState:r,onMenuToggle:a,showProfileSidebar:s}=l.useContext(X),u=l.useRef(null),m=l.useRef(null),b=l.useRef(null);return l.useImperativeHandle(n,()=>({menubutton:u.current,topbarmenu:m.current,topbarmenubutton:b.current})),t.jsxs("div",{className:"layout-topbar",children:[t.jsxs(Z,{href:"/",className:"layout-topbar-logo",children:[t.jsx("img",{src:"/images/logo.jpeg",width:"15%",height:"100%",alt:"logo"}),"Bienvenido"]}),t.jsx("button",{ref:u,type:"button",className:"p-link layout-menu-button layout-topbar-button",onClick:a,children:t.jsx("i",{className:"pi pi-bars"})}),t.jsx("button",{ref:b,type:"button",className:"p-link layout-topbar-menu-button layout-topbar-button",onClick:s,children:t.jsx("i",{className:"pi pi-user"})}),t.jsxs("div",{ref:m,className:w("layout-topbar-menu",{"layout-topbar-menu-mobile-active":r.profileSidebarVisible}),children:[t.jsxs(Z,{href:route("profile.edit"),className:"p-link layout-topbar-button",children:[t.jsx("i",{className:"pi pi-user"}),t.jsx("span",{children:"Profile"})]}),t.jsxs(Z,{href:route("logout"),method:"post",as:"button",className:"p-link layout-topbar-button",children:[t.jsx("i",{className:"pi pi-lock"}),t.jsx("span",{children:"Logout"})]})]})]})});ye.displayName="AppTopbar";function $(){return $=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},$.apply(this,arguments)}function H(i){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},H(i)}function Qe(i,n){if(H(i)!=="object"||i===null)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var r=e.call(i,n||"default");if(H(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function et(i){var n=Qe(i,"string");return H(n)==="symbol"?n:String(n)}function tt(i,n,e){return n=et(n),n in i?Object.defineProperty(i,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[n]=e,i}var nt={root:function(n){var e=n.props,r=n.context;return w("p-radiobutton p-component",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?e.variant==="filled":r&&r.inputStyle==="filled"})},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},K=me.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:nt}});function ue(i,n){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),e.push.apply(e,r)}return e}function it(i){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ue(Object(e),!0).forEach(function(r){tt(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):ue(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}var V=l.memo(l.forwardRef(function(i,n){var e=be(),r=l.useContext(J),a=K.getProps(i,r),s=l.useRef(null),u=l.useRef(a.inputRef),m=K.setMetaData({props:a}),b=m.ptm,j=m.cx,S=m.isUnstyled;ge(K.css.styles,S,{name:"radiobutton"});var C=function(p){h(p)},h=function(p){if(!(a.disabled||a.readonly)&&a.onChange){var g=a.checked,P=p.target instanceof HTMLDivElement,O=p.target===u.current,R=O&&p.target.checked!==g,I=P&&(M.hasClass(s.current,"p-radiobutton-checked")===g?!g:!1),T=!g,q={originalEvent:p,value:a.value,checked:T,stopPropagation:function(){p==null||p.stopPropagation()},preventDefault:function(){p==null||p.preventDefault()},target:{type:"radio",name:a.name,id:a.id,value:a.value,checked:T}};if(R||I){var F;if(a==null||(F=a.onChange)===null||F===void 0||F.call(a,q),p.defaultPrevented)return;I&&(u.current.checked=T)}M.focus(u.current)}},c=function(p){var g;a==null||(g=a.onFocus)===null||g===void 0||g.call(a,p)},N=function(p){var g;a==null||(g=a.onBlur)===null||g===void 0||g.call(a,p)};l.useImperativeHandle(n,function(){return{props:a,select:C,focus:function(){return M.focus(u.current)},getElement:function(){return s.current},getInput:function(){return u.current}}}),l.useEffect(function(){u.current&&(u.current.checked=a.checked)},[a.checked]),l.useEffect(function(){_.combinedRefs(u,a.inputRef)},[u,a.inputRef]),ie(function(){a.autoFocus&&M.focus(u.current,a.autoFocus)});var E=_.isNotEmpty(a.tooltip),A=K.getOtherProps(a),o=e({id:a.id,className:w(a.className,j("root",{context:r})),style:a.style,"data-p-checked":a.checked},A,b("root"));delete o.input,delete o.box,delete o.icon;var v=function(){var p=_.reduceKeys(A,M.ARIA_PROPS),g=e(it({id:a.inputId,type:"radio",name:a.name,defaultChecked:a.checked,onFocus:c,onBlur:N,onChange:h,disabled:a.disabled,readOnly:a.readonly,required:a.required,tabIndex:a.tabIndex,className:j("input")},p),i.input,b("input"));return l.createElement("input",$({ref:u},g))},k=function(){var p=e({className:j("box")},i.box,b("box")),g=e({className:j("icon")},i.icon,b("icon"));return l.createElement("div",p,l.createElement("div",g))};return l.createElement(l.Fragment,null,l.createElement("div",$({ref:s},o),v(),k()),E&&l.createElement(Ze,$({target:s,content:a.tooltip,pt:b("tooltip")},a.tooltipOptions)))}));V.displayName="RadioButton";function B(){return B=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},B.apply(this,arguments)}function U(i){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},U(i)}function at(i,n){if(U(i)!=="object"||i===null)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var r=e.call(i,n||"default");if(U(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(i)}function rt(i){var n=at(i,"string");return U(n)==="symbol"?n:String(n)}function st(i,n,e){return n=rt(n),n in i?Object.defineProperty(i,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[n]=e,i}function lt(i){if(Array.isArray(i))return i}function ot(i,n){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var r,a,s,u,m=[],b=!0,j=!1;try{if(s=(e=e.call(i)).next,n===0){if(Object(e)!==e)return;b=!1}else for(;!(b=(r=s.call(e)).done)&&(m.push(r.value),m.length!==n);b=!0);}catch(S){j=!0,a=S}finally{try{if(!b&&e.return!=null&&(u=e.return(),Object(u)!==u))return}finally{if(j)throw a}}return m}}function de(i,n){(n==null||n>i.length)&&(n=i.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=i[e];return r}function ct(i,n){if(i){if(typeof i=="string")return de(i,n);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return de(i,n)}}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(i,n){return lt(i)||ot(i,n)||ct(i,n)||ut()}var dt={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(n){var e=n.props,r=n.maskVisibleState,a=["left","right","top","bottom"],s=a.find(function(u){return u===e.position});return w("p-sidebar-mask",s&&!e.fullScreen?"p-sidebar-".concat(s):"",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":r,"p-sidebar-full":e.fullScreen},e.maskClassName)},header:function(n){var e=n.props;return w("p-sidebar-header",{"p-sidebar-custom-header":e.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(n){n.props;var e=n.context;return w("p-sidebar p-component",{"p-input-filled":e&&e.inputStyle==="filled"||G.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||G.ripple===!1})},transition:"p-sidebar"},pt=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,mt={mask:function(n){var e=n.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:e.position==="left"?"flex-start":e.position==="right"?"flex-end":"center",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"}}},z=me.extend({defaultProps:{__TYPE:"Sidebar",appendTo:null,ariaCloseLabel:null,baseZIndex:0,blockScroll:!1,children:void 0,className:null,closeIcon:null,closeOnEscape:!0,content:null,dismissable:!0,fullScreen:!1,header:null,icons:null,id:null,maskClassName:null,maskStyle:null,modal:!0,onHide:null,onShow:null,position:"left",showCloseIcon:!0,style:null,transitionOptions:null,visible:!1},css:{classes:dt,styles:pt,inlineStyles:mt}});function pe(i,n){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),e.push.apply(e,r)}return e}function bt(i){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?pe(Object(e),!0).forEach(function(r){st(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):pe(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}var xe=l.forwardRef(function(i,n){var e=be(),r=l.useContext(J),a=z.getProps(i,r),s=l.useState(!1),u=ee(s,2),m=u[0],b=u[1],j=l.useState(!1),S=ee(j,2),C=S[0],h=S[1],c=z.setMetaData({props:a,state:{containerVisible:m}}),N=c.ptm,E=c.cx,A=c.sx,o=c.isUnstyled;ge(z.css.styles,o,{name:"sidebar"});var v=l.useRef(null),k=l.useRef(null),y=l.useRef(null),p=C&&a.closeOnEscape,g=$e("sidebar",p);He({callback:function(f){D(f)},when:p&&g,priority:[Ue.SIDEBAR,g]});var P=te({type:"click",listener:function(f){f.button===0&&T(f)&&D(f)}}),O=ee(P,2),R=O[0],I=O[1],T=function(f){return v&&v.current&&!v.current.contains(f.target)},q=function(){var f=document.activeElement,L=f&&v&&v.current.contains(f);!L&&a.showCloseIcon&&y.current&&y.current.focus()},F=function(f){a.dismissable&&a.modal&&k.current===f.target&&D(f)},D=function(f){a.onHide(),f.preventDefault()},ke=function(){a.onShow&&a.onShow(),q(),Ce()},je=function(){a.modal&&!o()&&M.addClass(k.current,"p-component-overlay-leave")},Se=function(){W.clear(k.current),b(!1),ae()},Ce=function(){a.dismissable&&!a.modal&&R(),a.blockScroll&&M.blockBodyScroll()},ae=function(){I(),a.blockScroll&&M.unblockBodyScroll()};l.useImperativeHandle(n,function(){return{props:a,getElement:function(){return v.current},getMask:function(){return k.current},getCloseIcon:function(){return y.current}}}),ie(function(){a.visible&&b(!0)}),Q(function(){a.visible&&!m&&b(!0),a.visible!==C&&m&&h(a.visible)},[a.visible]),Q(function(){m&&(W.set("modal",k.current,r&&r.autoZIndex||G.autoZIndex,a.baseZIndex||r&&r.zIndex.modal||G.zIndex.modal),h(!0))},[m]),Q(function(){C&&(I(),a.dismissable&&!a.modal&&R())},[a.dismissable,a.modal,C]),fe(function(){ae(),k.current&&W.clear(k.current)});var Ne=function(){var f=e({type:"button",ref:y,className:E("closeButton"),onClick:function(Be){return D(Be)},"aria-label":a.ariaCloseLabel||Te("close")},N("closeButton")),L=e({className:E("closeIcon")},N("closeIcon")),Y=a.closeIcon||l.createElement(Xe,L),Le=Fe.getJSXIcon(Y,bt({},L),{props:a});return a.showCloseIcon?l.createElement("button",f,Le,l.createElement(ne,null)):null},Ee=function(){return a.header?_.getJSXElement(a.header,a):null},we=function(){return a.icons?_.getJSXElement(a.icons,a):null},re=e({ref:k,style:A("mask"),className:E("mask",{maskVisibleState:m}),onMouseDown:function(f){return F(f)}},N("mask")),se=e({id:a.id,className:w(a.className,E("root",{context:r})),style:a.style,role:"complementary"},z.getOtherProps(a),N("root")),Oe=e({className:E("header")},N("header")),Pe=e({className:E("content")},N("content")),Ae=e({className:E("icons")},N("icons")),Ie={enter:a.fullScreen?150:300,exit:a.fullScreen?150:300},le=e({classNames:E("transition"),in:C,timeout:Ie,options:a.transitionOptions,unmountOnExit:!0,onEntered:ke,onExiting:je,onExited:Se},N("transition")),Me=function(){var f={closeIconRef:y,hide:D};return l.createElement("div",re,l.createElement(oe,B({nodeRef:v},le),l.createElement("div",B({ref:v},se),_.getJSXElement(i.content,f))))},Re=function(){var f=Ne(),L=we(),Y=Ee();return l.createElement("div",re,l.createElement(oe,B({nodeRef:v},le),l.createElement("div",B({ref:v},se),l.createElement("div",Oe,Y,l.createElement("div",Ae,L,f)),l.createElement("div",Pe,a.children))))},De=function(){var f=i!=null&&i.content?Me():Re();return l.createElement(Ge,{element:f,appendTo:a.appendTo,visible:!0})};return m&&De()});xe.displayName="Sidebar";function d({onClick:i,img:n,imgAlt:e}){return t.jsx("div",{className:"col-3",children:t.jsx("button",{className:"p-link w-2rem h-2rem",onClick:i,children:t.jsx("img",{src:n,className:"w-2rem h-2rem",alt:e})})})}const gt=i=>{const[n]=l.useState([12,13,14,15,16]),{layoutConfig:e,setLayoutConfig:r,layoutState:a,setLayoutState:s}=l.useContext(X),{setRipple:u,changeTheme:m}=l.useContext(J),b=()=>{s(o=>({...o,configSidebarVisible:!0}))},j=()=>{s(o=>({...o,configSidebarVisible:!1}))},S=o=>{r(v=>({...v,inputStyle:o.value}))},C=o=>{u(o.value),r(v=>({...v,ripple:o.value}))},h=o=>{r(v=>({...v,menuMode:o.value}))},c=(o,v)=>{m==null||m(e.theme,o,"theme-css",()=>{r(k=>({...k,theme:o,colorScheme:v}))})},N=()=>{r(o=>({...o,scale:o.scale-1}))},E=()=>{r(o=>({...o,scale:o.scale+1}))},A=()=>{document.documentElement.style.fontSize=e.scale+"px"};return l.useEffect(()=>{A()},[e.scale]),t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"layout-config-button config-link",type:"button",onClick:b,children:t.jsx("i",{className:"pi pi-cog"})}),t.jsxs(xe,{visible:a.configSidebarVisible,onHide:j,position:"right",className:"layout-config-sidebar w-20rem",children:[!i.simple&&t.jsxs(t.Fragment,{children:[t.jsx("h5",{children:"Scale"}),t.jsxs("div",{className:"flex align-items-center",children:[t.jsx(ce,{icon:"pi pi-minus",type:"button",onClick:N,rounded:!0,text:!0,className:"w-2rem h-2rem mr-2",disabled:e.scale===n[0]}),t.jsx("div",{className:"flex gap-2 align-items-center",children:n.map(o=>t.jsx("i",{className:w("pi pi-circle-fill",{"text-primary-500":o===e.scale,"text-300":o!==e.scale})},o))}),t.jsx(ce,{icon:"pi pi-plus",type:"button",onClick:E,rounded:!0,text:!0,className:"w-2rem h-2rem ml-2",disabled:e.scale===n[n.length-1]})]}),t.jsx("h5",{children:"Menu Type"}),t.jsxs("div",{className:"flex",children:[t.jsxs("div",{className:"field-radiobutton flex-1",children:[t.jsx(V,{name:"menuMode",value:"static",checked:e.menuMode==="static",onChange:o=>h(o),inputId:"mode1"}),t.jsx("label",{htmlFor:"mode1",children:"Static"})]}),t.jsxs("div",{className:"field-radiobutton flex-1",children:[t.jsx(V,{name:"menuMode",value:"overlay",checked:e.menuMode==="overlay",onChange:o=>h(o),inputId:"mode2"}),t.jsx("label",{htmlFor:"mode2",children:"Overlay"})]})]}),t.jsx("h5",{children:"Input Style"}),t.jsxs("div",{className:"flex",children:[t.jsxs("div",{className:"field-radiobutton flex-1",children:[t.jsx(V,{name:"inputStyle",value:"outlined",checked:e.inputStyle==="outlined",onChange:o=>S(o),inputId:"outlined_input"}),t.jsx("label",{htmlFor:"outlined_input",children:"Outlined"})]}),t.jsxs("div",{className:"field-radiobutton flex-1",children:[t.jsx(V,{name:"inputStyle",value:"filled",checked:e.inputStyle==="filled",onChange:o=>S(o),inputId:"filled_input"}),t.jsx("label",{htmlFor:"filled_input",children:"Filled"})]})]}),t.jsx("h5",{children:"Ripple Effect"}),t.jsx(ze,{checked:e.ripple,onChange:o=>C(o)})]}),t.jsx("h5",{children:"Bootstrap"}),t.jsxs("div",{className:"grid",children:[t.jsx(d,{img:"/images/layout/themes/bootstrap4-light-blue.svg",imgAlt:"Bootstrap Light Blue",onClick:()=>c("bootstrap4-light-blue","light")}),t.jsx(d,{img:"/images/layout/themes/bootstrap4-light-purple.svg",imgAlt:"Bootstrap Light Purple",onClick:()=>c("bootstrap4-light-purple","light")}),t.jsx(d,{img:"/images/layout/themes/bootstrap4-dark-blue.svg",imgAlt:"Bootstrap Dark Blue",onClick:()=>c("bootstrap4-dark-blue","dark")}),t.jsx(d,{img:"/images/layout/themes/bootstrap4-dark-purple.svg",imgAlt:"Bootstrap Dark Purple",onClick:()=>c("bootstrap4-dark-purple","dark")})]}),t.jsx("h5",{children:"Material Design"}),t.jsxs("div",{className:"grid",children:[t.jsx(d,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>c("md-light-indigo","light")}),t.jsx(d,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light DeepPurple",onClick:()=>c("md-light-deeppurple","light")}),t.jsx(d,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>c("md-dark-indigo","dark")}),t.jsx(d,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark DeepPurple",onClick:()=>c("md-dark-deeppurple","dark")})]}),t.jsx("h5",{children:"Material Design Compact"}),t.jsxs("div",{className:"grid",children:[t.jsx(d,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>c("mdc-light-indigo","light")}),t.jsx(d,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light Deep Purple",onClick:()=>c("mdc-light-deeppurple","light")}),t.jsx(d,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>c("mdc-dark-indigo","dark")}),t.jsx(d,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark Deep Purple",onClick:()=>c("mdc-dark-deeppurple","dark")})]}),t.jsx("h5",{children:"Tailwind"}),t.jsx("div",{className:"grid",children:t.jsx(d,{img:"/images/layout/themes/tailwind-light.png",imgAlt:"Tailwind Light",onClick:()=>c("tailwind-light","light")})}),t.jsx("h5",{children:"Fluent UI"}),t.jsx("div",{className:"grid",children:t.jsx(d,{img:"/images/layout/themes/fluent-light.png",imgAlt:"Fluent Light",onClick:()=>c("fluent-light","light")})}),t.jsx("h5",{children:"PrimeOne Design - 2022"}),t.jsxs("div",{className:"grid",children:[t.jsx(d,{img:"/images/layout/themes/lara-light-indigo.png",imgAlt:"Lara Light Indigo",onClick:()=>c("lara-light-indigo","light")}),t.jsx(d,{img:"/images/layout/themes/lara-light-blue.png",imgAlt:"Lara Light Blue",onClick:()=>c("lara-light-blue","light")}),t.jsx(d,{img:"/images/layout/themes/lara-light-purple.png",imgAlt:"Lara Light Purple",onClick:()=>c("lara-light-purple","light")}),t.jsx(d,{img:"/images/layout/themes/lara-light-teal.png",imgAlt:"Lara Light Teal",onClick:()=>c("lara-light-teal","light")}),t.jsx(d,{img:"/images/layout/themes/lara-dark-indigo.png",imgAlt:"Lara Dark Indigo",onClick:()=>c("lara-dark-indigo","dark")}),t.jsx(d,{img:"/images/layout/themes/lara-dark-blue.png",imgAlt:"Lara Dark Blue",onClick:()=>c("lara-dark-blue","dark")}),t.jsx(d,{img:"/images/layout/themes/lara-dark-purple.png",imgAlt:"Lara Dark Purple",onClick:()=>c("lara-dark-purple","dark")}),t.jsx(d,{img:"/images/layout/themes/lara-dark-teal.png",imgAlt:"Lara Dark Teal",onClick:()=>c("lara-dark-teal","dark")})]}),t.jsx("h5",{children:"PrimeOne Design - 2021"}),t.jsxs("div",{className:"grid",children:[t.jsx(d,{img:"/images/layout/themes/saga-blue.png",imgAlt:"Saga Blue",onClick:()=>c("saga-blue","light")}),t.jsx(d,{img:"/images/layout/themes/saga-green.png",imgAlt:"Saga Green",onClick:()=>c("saga-green","light")}),t.jsx(d,{img:"/images/layout/themes/saga-orange.png",imgAlt:"Saga Orange",onClick:()=>c("saga-orange","dark")}),t.jsx(d,{img:"/images/layout/themes/saga-purple.png",imgAlt:"Saga Purple",onClick:()=>c("saga-purple","light")}),t.jsx(d,{img:"/images/layout/themes/vela-blue.png",imgAlt:"Vela Blue",onClick:()=>c("vela-blue","dark")}),t.jsx(d,{img:"/images/layout/themes/vela-green.png",imgAlt:"Vela Green",onClick:()=>c("vela-green","dark")}),t.jsx(d,{img:"/images/layout/themes/vela-orange.png",imgAlt:"Vela Orange",onClick:()=>c("vela-orange","dark")}),t.jsx(d,{img:"/images/layout/themes/vela-purple.png",imgAlt:"Vela Purple",onClick:()=>c("vela-purple","dark")}),t.jsx(d,{img:"/images/layout/themes/arya-blue.png",imgAlt:"Arya Blue",onClick:()=>c("arya-blue","dark")}),t.jsx(d,{img:"/images/layout/themes/arya-green.png",imgAlt:"Arya Green",onClick:()=>c("arya-green","dark")}),t.jsx(d,{img:"/images/layout/themes/arya-orange.png",imgAlt:"Arya Orange",onClick:()=>c("arya-orange","dark")}),t.jsx(d,{img:"/images/layout/themes/arya-purple.png",imgAlt:"Arya Purple",onClick:()=>c("arya-purple","dark")})]})]})]})},ft=({children:i})=>{const{layoutConfig:n,layoutState:e,setLayoutState:r}=l.useContext(X),{setRipple:a}=l.useContext(J),s=l.useRef(null),u=l.useRef(null),[m,b]=te({type:"click",listener:o=>{var k,y,p,g,P,O;!((k=u.current)!=null&&k.isSameNode(o.target)||(y=u.current)!=null&&y.contains(o.target)||(g=(p=s.current)==null?void 0:p.menubutton)!=null&&g.isSameNode(o.target)||(O=(P=s.current)==null?void 0:P.menubutton)!=null&&O.contains(o.target))&&h()}}),j=route().current();l.useEffect(()=>{h(),c()},[j]);const[S,C]=te({type:"click",listener:o=>{var k,y,p,g,P,O,R,I;!((y=(k=s.current)==null?void 0:k.topbarmenu)!=null&&y.isSameNode(o.target)||(g=(p=s.current)==null?void 0:p.topbarmenu)!=null&&g.contains(o.target)||(O=(P=s.current)==null?void 0:P.topbarmenubutton)!=null&&O.isSameNode(o.target)||(I=(R=s.current)==null?void 0:R.topbarmenubutton)!=null&&I.contains(o.target))&&c()}}),h=()=>{r(o=>({...o,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),b(),E()},c=()=>{r(o=>({...o,profileSidebarVisible:!1})),C()},N=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},E=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};ie(()=>{a(n.ripple)}),l.useEffect(()=>{(e.overlayMenuActive||e.staticMenuMobileActive)&&m(),e.staticMenuMobileActive&&N()},[e.overlayMenuActive,e.staticMenuMobileActive]),l.useEffect(()=>{e.profileSidebarVisible&&S()},[e.profileSidebarVisible]),fe(()=>{b(),C()});const A=w("layout-wrapper",{"layout-overlay":n.menuMode==="overlay","layout-static":n.menuMode==="static","layout-static-inactive":e.staticMenuDesktopInactive&&n.menuMode==="static","layout-overlay-active":e.overlayMenuActive,"layout-mobile-active":e.staticMenuMobileActive,"p-input-filled":n.inputStyle==="filled","p-ripple-disabled":!n.ripple});return t.jsx(Ve.Fragment,{children:t.jsxs("div",{className:A,children:[t.jsx(ye,{ref:s}),t.jsx("div",{ref:u,className:"layout-sidebar",children:t.jsx(We,{})}),t.jsxs("div",{className:"layout-main-container",children:[t.jsx("div",{className:"layout-main",children:i}),t.jsx(Je,{})]}),t.jsx(gt,{}),t.jsx("div",{className:"layout-mask"})]})})},Et=ft;export{Et as L};
//# sourceMappingURL=layout-d3ec478c.js.map
