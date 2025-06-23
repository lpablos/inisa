import{r as c,P as St,D as _,U as ht,Z as ye,b as re,O as g,c as w,d as kt,I as be}from"./app-5820f2fc.js";import{C as Et,u as wt,n as Pt,a as Kt,f as Nt,j as _t,b as Ct,c as G}from"./iconbase.esm-a7b8798a.js";import{A as Rt}from"./index.esm-c672f095.js";import{A as At}from"./index.esm-6b60753d.js";import{B as Lt}from"./index.esm-969efac0.js";import{R as tn}from"./ripple.esm-ee4508bf.js";function xe(){return xe=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(o[s]=r[s])}return o},xe.apply(this,arguments)}function ie(o){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ie(o)}function Dt(o,i){if(ie(o)!=="object"||o===null)return o;var r=o[Symbol.toPrimitive];if(r!==void 0){var s=r.call(o,i||"default");if(ie(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(o)}function Ot(o){var i=Dt(o,"string");return ie(i)==="symbol"?i:String(i)}function on(o,i,r){return i=Ot(i),i in o?Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[i]=r,o}function an(o){throw new TypeError('"'+o+'" is read-only')}function Mt(o){if(Array.isArray(o))return o}function Ft(o,i){var r=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var s,u,T,$,S=[],j=!0,ue=!1;try{if(T=(r=r.call(o)).next,i===0){if(Object(r)!==r)return;j=!1}else for(;!(j=(s=T.call(r)).done)&&(S.push(s.value),S.length!==i);j=!0);}catch(oe){ue=!0,u=oe}finally{try{if(!j&&r.return!=null&&($=r.return(),Object($)!==$))return}finally{if(ue)throw u}}return S}}function rn(o,i){(i==null||i>o.length)&&(i=o.length);for(var r=0,s=new Array(i);r<i;r++)s[r]=o[r];return s}function zt(o,i){if(o){if(typeof o=="string")return rn(o,i);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return rn(o,i)}}function Tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(o,i){return Mt(o)||Ft(o,i)||zt(o,i)||Tt()}var $t={root:function(i){var r=i.props,s=i.mobileActiveState;return w("p-megamenu p-component",{"p-megamenu-horizontal":r.orientation==="horizontal","p-megamenu-vertical":r.orientation==="vertical","p-megamenu-mobile-active":s})},content:"p-menuitem-content",separator:"p-menuitem-separator",submenuIcon:"p-submenu-icon",action:function(i){var r=i.item;return w("p-menuitem-link",{"p-disabled":r.disabled})},submenuItem:function(i){var r=i.focused,s=i.disabled,u=i.active;return w("p-menuitem",{"p-menuitem-active":u,"p-focus":r,"p-disabled":s})},submenuHeader:function(i){var r=i.disabled;return w("p-megamenu-submenu-header p-submenu-header",{"p-disabled":r})},submenu:"p-submenu-list p-megamenu-submenu",panel:"p-megamenu-panel",grid:"p-megamenu-grid",icon:"p-menuitem-icon",label:"p-menuitem-text",column:function(i){var r=i.category,s=r.items?r.items.length:0,u;switch(s){case 2:u="p-megamenu-col-6";break;case 3:u="p-megamenu-col-4";break;case 4:u="p-megamenu-col-3";break;case 6:u="p-megamenu-col-2";break;default:u="p-megamenu-col-12";break}return u},menuButton:"p-megamenu-button",menuitem:function(i){var r=i.category,s=i.activeItemState,u=i.focused,T=i.disabled;return w("p-menuitem",{"p-menuitem-active p-highlight":s&&s.item===r,"p-focus":u,"p-disabled":T})},menubar:"p-megamenu-root-list",menu:"p-megamenu-root-list",start:"p-megamenu-start",end:"p-megamenu-end"},jt=`
@layer primereact {
    .p-megamenu {
        display: flex;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-megamenu-root-list > .p-menuitem {
        position: relative;
    }

    .p-megamenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-megamenu .p-menuitem-text {
        line-height: 1;
    }

    .p-megamenu-panel {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
    }

    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Horizontal */
    .p-megamenu-horizontal {
        align-items: center;
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-megamenu-horizontal .p-megamenu-custom,
    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    /* Vertical */
    .p-megamenu-vertical {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link  > .p-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: 0.5rem;
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`,Ie=Et.extend({defaultProps:{__TYPE:"MegaMenu",id:null,model:null,style:null,className:null,orientation:"horizontal",breakpoint:void 0,scrollHeight:"400px",start:null,submenuIcon:null,onFocus:null,onBlur:null,tabIndex:0,menuIcon:null,end:null,children:void 0},css:{classes:$t,styles:jt}});function un(o,i){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),r.push.apply(r,s)}return r}function q(o){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?un(Object(r),!0).forEach(function(s){on(o,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):un(Object(r)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(r,s))})}return o}var Bt=c.memo(c.forwardRef(function(o,i){var r=wt(),s=c.useContext(St),u=Ie.getProps(o,s),T=c.useState(u.id),$=E(T,2),S=$[0],j=$[1],ue=c.useState(null),oe=E(ue,2),m=oe[0],F=oe[1],ln=c.useState(null),De=E(ln,2),cn=De[0],Oe=De[1],sn=c.useState({index:-1,key:"",parentKey:""}),Me=E(sn,2),f=Me[0],I=Me[1],mn=c.useState(null),Fe=E(mn,2),le=Fe[0],dn=Fe[1],fn=c.useState(!1),ze=E(fn,2),pn=ze[0],ce=ze[1],vn=c.useState(null),Te=E(vn,2),se=Te[0],gn=Te[1],yn=c.useState([]),$e=E(yn,2),h=$e[0],bn=$e[1],In=c.useState(null),je=E(In,2),B=je[0],xn=je[1],Sn=c.useState(!1),Be=E(Sn,2),R=Be[0],W=Be[1],hn=c.useState(!1),Ve=E(hn,2),He=Ve[0],Se=Ve[1],z=c.useRef(""),me=c.useRef(null),A=c.useRef(null),L=c.useRef(null),Y=c.useRef(null),de=c.useRef(null),fe=u.orientation==="horizontal",Q=u.orientation==="vertical",he=Pt("screen and (max-width: ".concat(u.breakpoint,")"),!!u.breakpoint),ke=Ie.setMetaData({props:u,state:{id:S,activeItem:m&&m.item,attributeSelector:B,mobileActive:R}}),x=ke.ptm,y=ke.cx,kn=ke.isUnstyled;Kt(Ie.css.styles,kn,{name:"megamenu"});var D=function(e,t,n){return x(t,{context:{active:ve(e),focused:Ce(e),disabled:X(e),item:e,index:n}})},En=Nt({type:"click",listener:function(e){On(e)&&H()}}),Ue=E(En,2),wn=Ue[0],Pn=Ue[1],Kn=_t({type:"resize",listener:function(){H()}}),Je=E(Kn,2),Nn=Je[0],_n=Je[1],Xe=function(){wn(),Nn()},Ee=function(){Pn(),_n()},Cn=function(e){var t=e.originalEvent,n=e.processedItem,l=n.item;if(l.disabled){t.preventDefault();return}l.url||t.preventDefault(),l.command&&l.command({originalEvent:t,item:l});var d=M(n),p=Pe(n);if(p){var v=n.index,b=n.key,k=n.parentKey;F(null),I({index:v,key:b,parentKey:k})}else if(d)V(e);else{var K=m?m.index:-1,N=m?m.key:"";H(t),I({index:K,key:N,parentKey:""}),W(!1)}},V=function(e){var t=e.processedItem,n=e.isFocus;if(!g.isEmpty(t)){var l=t.index,d=t.key,p=t.parentKey,v=t.items,b=g.isNotEmpty(v);b&&F(t),I({index:l,key:d,parentKey:p}),b&&ce(!0),n&&_.focus(L.current)}},Rn=function(e){!R&&pn&&V(e)},An=function(e){var t=e.originalEvent,n=e.processedItem,l=n.item;if(l.disabled){t.preventDefault();return}l.command&&l.command({originalEvent:t,item:u.item}),l.url||(t.preventDefault(),t.stopPropagation());var d=M(n),p=g.isEmpty(n.parent),v=Pe(n);if(v){var b=n.index,k=n.key,K=n.parentKey;F(null),I({index:b,key:k,parentKey:K}),ce(!p)}else if(d)V(e);else{var N=p?n:m;H(),P(t,N?N.index:-1),W(!1),_.focus(L.current)}},Ln=function(){I({index:ee(),level:0,parentKey:""})},H=function(e){R&&(W(!1),setTimeout(function(){_.focus(de.current)},0)),F(null),e&&(I({index:-1,key:"",parentKey:""}),_.focus(L.current)),ce(!1)},Dn=function(e){e.preventDefault(),R?(W(!1),ye.clear(L.current),H()):(W(!0),ye.set("menu",L.current,s&&s.autoZIndex||re.autoZIndex,s&&s.zIndex.menu||re.zIndex.menu),setTimeout(function(){Ln()},1))},On=function(e){return A.current&&!(A.current.isSameNode(e.target)||A.current.contains(e.target)||de.current&&de.current.contains(e.target))};c.useImperativeHandle(i,function(){return{props:u,getElement:function(){return A.current}}}),Ct(function(){var a=ht();!S&&j(a),u.breakpoint&&!B&&xn(a)}),G(function(){return B&&A.current&&(A.current.setAttribute(B,""),ot()),function(){lt()}},[B,u.breakpoint]),G(function(){R?Xe():Ee()},[R]),G(function(){if(He){var a=f.index!==-1?qe(f.index):ee();P(a),Se(!1)}},[He]),G(function(){var a=_.findSingle(A.current,".p-menuitem-active > .p-megamenu-panel");return m?(Xe(),he||ye.set("menu",a,s&&s.autoZIndex||re.autoZIndex,s&&s.zIndex.menu||re.zIndex.menu)):Ee(),he&&a&&a.previousElementSibling.scrollIntoView({block:"nearest",inline:"nearest"}),function(){Ee(),ye.clear(a)}},[m,he]),G(function(){var a=g.isNotEmpty(f.key)?"".concat(S,"_").concat(f.key):null;dn(a)},[f]),c.useEffect(function(){var a=u.model||[],e=Ae(a,0,null,"");gn(e)},[u.model]),G(function(){var a=g.isNotEmpty(m)?m:null,e=a&&a.key===f.parentKey?a.items.reduce(function(t,n){return n.forEach(function(l){l.items.forEach(function(d){t.push(d)})}),t},[]):se;bn(e)},[f,m,se]);var Mn=function(e){if(Oe(!0),f.index===-1){var t=ee(),n=O(t);I({index:t,key:n.key,parentKey:n.parentKey})}u.onFocus&&u.onFocus(e)},Fn=function(e){Oe(!1),I({index:-1,key:"",parentKey:""}),z.current="",ce(!1),u.onBlur&&u.onBlur(e)},zn=function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":Tn(e);break;case"ArrowUp":$n(e);break;case"ArrowLeft":jn(e);break;case"ArrowRight":Bn(e);break;case"Home":Vn(e);break;case"End":Hn(e);break;case"Space":Un(e);break;case"Enter":case"NumpadEnter":Ze(e);break;case"Escape":Jn(e);break;case"Tab":Xn(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&g.isPrintableCharacter(e.key)&&qn(e,e.key);break}},Tn=function(e){if(e.preventDefault(),fe){var t=f;if(g.isNotEmpty(m)&&m.key===f.key)m.key,an("_focusedItemInfo"),I(t);else{var n=O(f.index),l=M(n);l&&(V({originalEvent:e,processedItem:n}),n.key,n.parentKey,an("_focusedItemInfo"),I(t),z.current="")}setTimeout(function(){return Se(!0)},0)}else{var d=f.index!==-1?qe(f.index):ee();P(d)}},$n=function(e){var t=O(f.index),n=M(t);if(e.altKey&&fe)f.index!==-1&&!n&&g.isNotEmpty(m)&&(f.index===0?(I({index:m.index,key:m.key,parentKey:m.parentKey}),F(null)):P(Ke()));else{var l=f.index!==-1?We(f.index):Qe();P(l)}e.preventDefault()},jn=function(e){var t=O(f.index),n=M(t);if(n){if(fe){var l=f.index!==-1?We(f.index):Qe();P(l)}}else{Q&&g.isNotEmpty(m)&&t.columnIndex===0&&(I({index:m.index,key:m.key,parentKey:m.parentKey}),F(null));var d=t.columnIndex-1,p=h.findIndex(function(v){return v.columnIndex===d});p!==-1&&P(p)}e.preventDefault()},Bn=function(e){e.preventDefault();var t=O(f.index),n=M(t);if(n){if(Q)if(g.isNotEmpty(m)&&m.key===t.key)I({index:-1,key:"",parentKey:m.key});else{var l=O(f.index),d=M(l);d&&(V({originalEvent:e,processedItem:l}),I({index:-1,key:l.key,parentKey:l.parentKey}),z.current="")}setTimeout(function(){return Se(!0)},0)}else{var p=t.columnIndex+1,v=h.findIndex(function(b){return b.columnIndex===p});v!==-1&&P(v)}},Vn=function(e){P(Ke()),e.preventDefault()},Hn=function(e){P(Ge()),e.preventDefault()},Ze=function(e){if(f.index!==-1){var t=_.findSingle(L.current,'li[id="'.concat(le,'"]')),n=t&&_.findSingle(t,'a[data-pc-section="action"]');n?n.click():t&&t.click()}e.preventDefault()},Un=function(e){Ze(e)},Jn=function(e){g.isNotEmpty(m)&&(I({index:m.index,key:m.key}),F(null)),e.preventDefault()},Xn=function(e){if(f.index!==-1){var t=O(f.index),n=M(t);!n&&V({originalEvent:e,processedItem:t})}H()},we=function(e){var t=Gn(e);return U(e)&&t&&t.toLocaleLowerCase().startsWith(z.current.toLocaleLowerCase())},U=function(e){return!!e&&!X(e.item)&&!Yn(e.item)},Zn=function(e){return U(e)&&Pe(e)},Pe=function(e){return g.isNotEmpty(m)?m.key===e.key:!1},Ke=function(){return h.findIndex(function(e){return U(e)})},Ge=function(){return g.findLastIndex(h,function(e){return U(e)})},qe=function(e){var t=e<h.length-1?h.slice(e+1).findIndex(function(n){return U(n)}):-1;return t>-1?t+e+1:e},We=function(e){var t=e>0?g.findLastIndex(h.slice(0,e),function(n){return U(n)}):-1;return t>-1?t:e},Ye=function(){return h&&h.findIndex(function(e){return Zn(e)})},ee=function(){var e=Ye();return e<0?Ke():e},Qe=function(){var e=Ye();return e<0?Ge():e},O=function(e){return g.isNotEmpty(h)?h[e]:null},Gn=function(e){return e&&e.item?pe(e):void 0},qn=function(e,t){z.current=(z.current||"")+t;var n=-1,l=!1;return f.index!==-1?(n=h.slice(f.index).findIndex(function(d){return we(d)}),n=n===-1?h.slice(0,f.index).findIndex(function(d){return we(d)}):n+f.index):n=h.findIndex(function(d){return we(d)}),n!==-1&&(l=!0),n===-1&&f.index===-1&&(n=ee()),n!==-1&&P(n),me&&clearTimeout(me),me.current=setTimeout(function(){z.current="",me.current=null},500),l},P=function(e){var t=O(e),n=g.isNotEmpty(t)?t.key:"";I(q(q({},f),{},{index:e,key:n})),Wn()},Wn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(S,"_").concat(e):le,n=_.findSingle(L.current,'li[id="'.concat(t,'"]'));n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},Ne=function(e){return"".concat(S,"_").concat(e.key)},J=function(e,t,n){return e&&e.item?g.getItemValue(e.item[t],n):void 0},pe=function(e){return J(e,"label")},ve=function(e){return g.isNotEmpty(m)?m.key===e.key:!1},_e=function(e){return J(e,"visible")!==!1},X=function(e){return J(e,"disabled")},Ce=function(e){return le===Ne(e)},Re=function(e){return g.isNotEmpty(e.items)},Yn=function(e){return J(e,"separator")},M=function(e){return e&&g.isNotEmpty(e.items)},en=function(){return u.model.filter(function(e){return _e(e)&&!J(e,"separator")}).length},nn=function(e){return e-u.model.slice(0,e).filter(function(t){return _e(t)&&J(t,"separator")}).length+1},Ae=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",d=arguments.length>4?arguments[4]:void 0;return e?(Array.isArray(e)||(e=[e]),e.map(function(p,v){var b="".concat(l!==""?l+"_":"").concat(d!==void 0?d+"_":"").concat(v),k={item:p,index:v,level:t,key:b,parent:n,parentKey:l,columnIndex:d!==void 0?d:n&&n.columnIndex!==void 0?n.columnIndex:v};return k.items=t===0&&p.items&&p.items.length>0?p.items.map(function(K,N){return Ae(K,t+1,k,b,N)}):Ae(p.items,t+1,k,b),k})):[]},Qn=function(e){var t=S+"_separator__"+e,n=r({id:t,key:t,className:y("separator"),role:"separator"},x("separator"));return c.createElement("li",n)},et=function(e){if(e.items){var t=r({className:y("submenuIcon")},x("submenuIcon")),n=Q?u.submenuIcon||c.createElement(At,t):u.submenuIcon||c.createElement(Rt,t),l=be.getJSXIcon(n,q({},t),{props:u});return l}return null},nt=function(e,t){var n=e.item;if(n.visible===!1)return null;if(n.separator)return Qn(t);var l=Ne(e),d=w("p-menuitem-link",{"p-disabled":n.disabled}),p=r({className:w(n.icon,y("icon"))},x("icon")),v=r({className:y("label")},x("label")),b=w(n.icon,"p-menuitem-icon"),k=be.getJSXIcon(n.icon,q({},p),{props:u}),K=n.label&&c.createElement("span",v,n.label),N=r({href:n.url||"#",className:y("action",{item:n}),target:n.target,tabIndex:"-1","aria-hidden":!0},D(e,"action",t)),ne=Ce(e),Z=X(e),te=Re(e),ae=ve(e),Le=r({key:l,id:l,"aria-label":pe(e),"aria-disabled":Z,"aria-haspopup":te?"menu":void 0,"aria-level":"2","aria-expanded":te?ae:void 0,"aria-setsize":en(),"aria-posinset":nn(t),"data-p-highlight":ae,"data-p-disabled":Z,"data-p-focused":ne,className:w(n.className,y("submenuItem",{focused:ne,disabled:Z,active:ae})),style:n.style,role:"menuitem"},D(e,"submenuItem",t)),ge=r({onClick:function(xt){return Cn({originalEvent:xt,processedItem:e})},className:y("content")},D(e,"content",t)),C=c.createElement("a",N,k,K,c.createElement(tn,null));if(n.template){var It={className:d,labelClassName:"p-menuitem-text",iconClassName:b,element:C,props:u};C=g.getJSXElement(n.template,n,It)}return c.createElement("li",Le,c.createElement("div",ge,C))},tt=function(e,t){if(!_e(e))return null;var n=e.items.map(nt),l=e.id||S+"_sub_"+t,d=pe(e),p=X(e),v=r({id:l,key:l,className:w(e.className,y("submenuHeader",{disabled:p})),style:e.style,role:"presentation","data-p-disabled":p},x("submenuHeader"));return c.createElement(c.Fragment,{key:l},c.createElement("li",v,d),n)},at=function(e){return e.map(tt)},rt=function(e,t,n){var l=e.item,d=l.label+"_column_"+n,p=at(t),v=r({key:d,className:y("column",{category:l})},x("column")),b=m&&m.item===l?"block":"none",k=r({role:"menu",tabIndex:u.disabled?null:u.tabIndex||"0",className:y("submenu"),style:{display:b}},x("submenu"));return c.createElement("div",v,c.createElement("ul",k,p))},it=function(e){return e.items?e.items.map(function(t,n){return rt(e,t,n)}):null},ut=function(e){var t=e.item;if(t.items){var n=it(e),l=r({className:y("panel")},x("panel")),d=r({className:y("grid")},x("grid"));return c.createElement("div",l,c.createElement("div",d,n))}return null},ot=function(){if(!Y.current){Y.current=_.createInlineStyle(s&&s.nonce||re.nonce,s&&s.styleContainer);var e="".concat(B),t=`
                    @media screen and (max-width: `.concat(u.breakpoint,`) {
                        .p-megamenu[`).concat(e,`] > .p-megamenu-root-list .p-menuitem-active .p-megamenu-panel {
                            position: relative;
                            left: 0;
                            box-shadow: none;
                            border-radius: 0;
                            background: inherit;
                        }

                        .p-megamenu[`).concat(e,`] {
                            width: 100%;
                            position: relative;
                            padding: 0.5rem;
                        }

                        .p-megamenu[`).concat(e,`] .p-megamenu-grid {
                            flex-wrap: wrap;
                        }

                        .p-megamenu[`).concat(e,`] .p-megamenu-button {
                            display: flex;
                        }

                        .p-megamenu[`).concat(e,`] .p-megamenu-root-list {
                            display: none;
                        }

                        .p-megamenu[`).concat(e,`] div[class*="p-megamenu-col-"] {
                            width: 100%;
                        }

                        .p-megamenu[`).concat(e,`].p-megamenu-mobile-active .p-megamenu-root-list {
                            left: 0;
                            top: 100%;
                            z-index: 1;
                            width: 100%;
                            display: flex;
                            padding: 0.5rem 0;
                            position: absolute;
                            flex-direction: column;
                        }

                        .p-megamenu[`).concat(e,`] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                            margin-left: auto;
                        }

                        .p-megamenu[`).concat(e,`] .p-submenu-list .p-menuitem-content .p-menuitem-link {
                            padding-left: 2.25rem;
                        }

                        `).concat(fe?`
                                    .p-megamenu[`.concat(e,`] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-180deg);
                                    }
                            `):"",`

                        `).concat(Q?`
                                    .p-megamenu[`.concat(e,`] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(90deg);
                                    }

                                    .p-megamenu[`).concat(e,`] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-90deg);
                                    }
                            `):"",`
                    }
                `);Y.current.innerHTML=t}},lt=function(){Y.current=_.removeInlineStyle(Y.current)},ct=function(e,t){var n=e.item,l=r({className:y("icon")},D(e,"icon",t)),d=be.getJSXIcon(n.icon,q({},l),{props:u}),p=r({className:y("label")},D(e,"label",t)),v=n.label&&c.createElement("span",p,n.label),b=et(n),k=ut(e),K=r({href:n.url||"#",className:y("action",{item:n}),target:n.target,onFocus:function(C){return C.stopPropagation()},tabIndex:"-1","aria-hidden":!0},D(e,"action",t)),N=n.template?g.getJSXElement(n.template,n,K):c.createElement("a",K,d,v,b,c.createElement(tn,null)),ne=Ne(e),Z=Ce(e),te=X(e),ae=r(on({key:ne,id:ne,className:w(n.className,y("menuitem",{category:n,activeItemState:m,focused:Z,disabled:te})),"aria-label":pe(n),"aria-level":"1","aria-setsize":en(),"aria-posinset":nn(t),"aria-expanded":Re(e)?ve(e):void 0,"aria-haspopup":Re(e)?"menu":void 0,"aria-disabled":X(e),"data-p-highlight":ve(n),"data-p-disabled":te,"data-p-focused":Z,style:n.style,role:"menuitem"},"data-p-disabled",n.disabled||!1),D(e,"menuitem",t)),Le=r({onClick:function(C){return An({originalEvent:C,processedItem:e})},onMouseEnter:function(C){return Rn({originalEvent:C,processedItem:e})},className:y("content")},D(e,"content",t));return c.createElement("li",ae,c.createElement("div",Le,N),k)},st=function(){var e=r({ref:L,tabIndex:u.disabled?null:u.tabIndex||"0",className:y("menu"),onFocus:Mn,onBlur:Fn,onKeyDown:zn,"aria-label":u.ariaLabel,"aria-labelledby":u.ariaLabelledBy,"aria-orientation":Q?"vertical":"horizontal","aria-activedescendant":cn?le:null,id:S+"_list",role:"menubar"},x("menu"));return se?c.createElement("ul",e,se.map(function(t,n){return ct(t,n)})):null},mt=function(){var e=r({className:y("start")},x("start"));if(u.start){var t=g.getJSXElement(u.start,u);return c.createElement("div",e,t)}return null},dt=function(){var e=r({className:y("end")},x("end"));if(u.end){var t=g.getJSXElement(u.end,u);return c.createElement("div",e,t)}return null},ft=function(){if(u.model&&u.model.length<1)return null;var e=r({className:y("menuButton"),href:"#",role:"button","aria-haspopup":!!(u.model&&u.model.length>0),"aria-expanded":R,"aria-controls":S,"aria-label":kt("navigation"),tabIndex:0,onClick:function(v){return Dn(v)}},x("menuButton")),t=r(x("menuButtonIcon")),n=u.menuIcon||c.createElement(Lt,t),l=be.getJSXIcon(n,q({},t),{props:u}),d=c.createElement("a",xe({ref:de},e),l);return d},pt=r({className:w(u.className,y("root",{mobileActiveState:R})),id:S,style:u.style},Ie.getOtherProps(u),x("root")),vt=st(),gt=mt(),yt=dt(),bt=ft();return c.createElement("div",xe({id:u.id,ref:A},pt),gt,bt,vt,yt)}));Bt.displayName="MegaMenu";export{Bt as M};
//# sourceMappingURL=megamenu.esm-0240e609.js.map
