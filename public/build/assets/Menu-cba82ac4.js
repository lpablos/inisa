import{r as s,P as St,D as N,U as kt,Z as ge,b as re,O as b,c as w,d as Et,I as ye,j as wt}from"./app-954e5f69.js";import{C as Pt,u as Ct,n as Kt,a as Nt,j as Rt,h as At,c as _t,b as Z,R as tn}from"./ripple.esm-80139cd0.js";import{A as Dt}from"./index.esm-08b88e95.js";import{A as Lt}from"./index.esm-efa2cd0d.js";import{B as Mt}from"./index.esm-0f0b731f.js";function he(){return he=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(o[c]=r[c])}return o},he.apply(this,arguments)}function ie(o){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ie(o)}function Ot(o,i){if(ie(o)!=="object"||o===null)return o;var r=o[Symbol.toPrimitive];if(r!==void 0){var c=r.call(o,i||"default");if(ie(c)!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(o)}function Tt(o){var i=Ot(o,"string");return ie(i)==="symbol"?i:String(i)}function un(o,i,r){return i=Tt(i),i in o?Object.defineProperty(o,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[i]=r,o}function an(o){throw new TypeError('"'+o+'" is read-only')}function Ft(o){if(Array.isArray(o))return o}function Bt(o,i){var r=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var c,u,B,j,x=[],z=!0,oe=!1;try{if(B=(r=r.call(o)).next,i===0){if(Object(r)!==r)return;z=!1}else for(;!(z=(c=B.call(r)).done)&&(x.push(c.value),x.length!==i);z=!0);}catch(ue){oe=!0,u=ue}finally{try{if(!z&&r.return!=null&&(j=r.return(),Object(j)!==j))return}finally{if(oe)throw u}}return x}}function rn(o,i){(i==null||i>o.length)&&(i=o.length);for(var r=0,c=new Array(i);r<i;r++)c[r]=o[r];return c}function jt(o,i){if(o){if(typeof o=="string")return rn(o,i);var r=Object.prototype.toString.call(o).slice(8,-1);if(r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set")return Array.from(o);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return rn(o,i)}}function zt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(o,i){return Ft(o)||Bt(o,i)||jt(o,i)||zt()}var $t={root:function(i){var r=i.props,c=i.mobileActiveState;return w("p-megamenu p-component",{"p-megamenu-horizontal":r.orientation==="horizontal","p-megamenu-vertical":r.orientation==="vertical","p-megamenu-mobile-active":c})},content:"p-menuitem-content",separator:"p-menuitem-separator",submenuIcon:"p-submenu-icon",action:function(i){var r=i.item;return w("p-menuitem-link",{"p-disabled":r.disabled})},submenuItem:function(i){var r=i.focused,c=i.disabled,u=i.active;return w("p-menuitem",{"p-menuitem-active":u,"p-focus":r,"p-disabled":c})},submenuHeader:function(i){var r=i.disabled;return w("p-megamenu-submenu-header p-submenu-header",{"p-disabled":r})},submenu:"p-submenu-list p-megamenu-submenu",panel:"p-megamenu-panel",grid:"p-megamenu-grid",icon:"p-menuitem-icon",label:"p-menuitem-text",column:function(i){var r=i.category,c=r.items?r.items.length:0,u;switch(c){case 2:u="p-megamenu-col-6";break;case 3:u="p-megamenu-col-4";break;case 4:u="p-megamenu-col-3";break;case 6:u="p-megamenu-col-2";break;default:u="p-megamenu-col-12";break}return u},menuButton:"p-megamenu-button",menuitem:function(i){var r=i.category,c=i.activeItemState,u=i.focused,B=i.disabled;return w("p-menuitem",{"p-menuitem-active p-highlight":c&&c.item===r,"p-focus":u,"p-disabled":B})},menubar:"p-megamenu-root-list",menu:"p-megamenu-root-list",start:"p-megamenu-start",end:"p-megamenu-end"},Vt=`
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
`,Ie=Pt.extend({defaultProps:{__TYPE:"MegaMenu",id:null,model:null,style:null,className:null,orientation:"horizontal",breakpoint:void 0,scrollHeight:"400px",start:null,submenuIcon:null,onFocus:null,onBlur:null,tabIndex:0,menuIcon:null,end:null,children:void 0},css:{classes:$t,styles:Vt}});function on(o,i){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);i&&(c=c.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),r.push.apply(r,c)}return r}function W(o){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?on(Object(r),!0).forEach(function(c){un(o,c,r[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):on(Object(r)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(r,c))})}return o}var ln=s.memo(s.forwardRef(function(o,i){var r=Ct(),c=s.useContext(St),u=Ie.getProps(o,c),B=s.useState(u.id),j=E(B,2),x=j[0],z=j[1],oe=s.useState(null),ue=E(oe,2),m=ue[0],T=ue[1],sn=s.useState(null),Le=E(sn,2),cn=Le[0],Me=Le[1],mn=s.useState({index:-1,key:"",parentKey:""}),Oe=E(mn,2),f=Oe[0],I=Oe[1],dn=s.useState(null),Te=E(dn,2),le=Te[0],fn=Te[1],pn=s.useState(!1),Fe=E(pn,2),vn=Fe[0],se=Fe[1],bn=s.useState(null),Be=E(bn,2),ce=Be[0],gn=Be[1],yn=s.useState([]),je=E(yn,2),S=je[0],In=je[1],hn=s.useState(null),ze=E(hn,2),$=ze[0],xn=ze[1],Sn=s.useState(!1),$e=E(Sn,2),A=$e[0],q=$e[1],kn=s.useState(!1),Ve=E(kn,2),He=Ve[0],xe=Ve[1],F=s.useRef(""),me=s.useRef(null),_=s.useRef(null),D=s.useRef(null),Y=s.useRef(null),de=s.useRef(null),fe=u.orientation==="horizontal",Q=u.orientation==="vertical",Se=Kt("screen and (max-width: ".concat(u.breakpoint,")"),!!u.breakpoint),ke=Ie.setMetaData({props:u,state:{id:x,activeItem:m&&m.item,attributeSelector:$,mobileActive:A}}),h=ke.ptm,g=ke.cx,En=ke.isUnstyled;Nt(Ie.css.styles,En,{name:"megamenu"});var L=function(e,t,n){return h(t,{context:{active:ve(e),focused:Re(e),disabled:X(e),item:e,index:n}})},wn=Rt({type:"click",listener:function(e){On(e)&&H()}}),Ue=E(wn,2),Pn=Ue[0],Cn=Ue[1],Kn=At({type:"resize",listener:function(){H()}}),Je=E(Kn,2),Nn=Je[0],Rn=Je[1],Xe=function(){Pn(),Nn()},Ee=function(){Cn(),Rn()},An=function(e){var t=e.originalEvent,n=e.processedItem,l=n.item;if(l.disabled){t.preventDefault();return}l.url||t.preventDefault(),l.command&&l.command({originalEvent:t,item:l});var d=O(n),p=Pe(n);if(p){var v=n.index,y=n.key,k=n.parentKey;T(null),I({index:v,key:y,parentKey:k})}else if(d)V(e);else{var C=m?m.index:-1,K=m?m.key:"";H(t),I({index:C,key:K,parentKey:""}),q(!1)}},V=function(e){var t=e.processedItem,n=e.isFocus;if(!b.isEmpty(t)){var l=t.index,d=t.key,p=t.parentKey,v=t.items,y=b.isNotEmpty(v);y&&T(t),I({index:l,key:d,parentKey:p}),y&&se(!0),n&&N.focus(D.current)}},_n=function(e){!A&&vn&&V(e)},Dn=function(e){var t=e.originalEvent,n=e.processedItem,l=n.item;if(l.disabled){t.preventDefault();return}l.command&&l.command({originalEvent:t,item:u.item}),l.url||(t.preventDefault(),t.stopPropagation());var d=O(n),p=b.isEmpty(n.parent),v=Pe(n);if(v){var y=n.index,k=n.key,C=n.parentKey;T(null),I({index:y,key:k,parentKey:C}),se(!p)}else if(d)V(e);else{var K=p?n:m;H(),P(t,K?K.index:-1),q(!1),N.focus(D.current)}},Ln=function(){I({index:ee(),level:0,parentKey:""})},H=function(e){A&&(q(!1),setTimeout(function(){N.focus(de.current)},0)),T(null),e&&(I({index:-1,key:"",parentKey:""}),N.focus(D.current)),se(!1)},Mn=function(e){e.preventDefault(),A?(q(!1),ge.clear(D.current),H()):(q(!0),ge.set("menu",D.current,c&&c.autoZIndex||re.autoZIndex,c&&c.zIndex.menu||re.zIndex.menu),setTimeout(function(){Ln()},1))},On=function(e){return _.current&&!(_.current.isSameNode(e.target)||_.current.contains(e.target)||de.current&&de.current.contains(e.target))};s.useImperativeHandle(i,function(){return{props:u,getElement:function(){return _.current}}}),_t(function(){var a=kt();!x&&z(a),u.breakpoint&&!$&&xn(a)}),Z(function(){return $&&_.current&&(_.current.setAttribute($,""),lt()),function(){st()}},[$,u.breakpoint]),Z(function(){A?Xe():Ee()},[A]),Z(function(){if(He){var a=f.index!==-1?We(f.index):ee();P(a),xe(!1)}},[He]),Z(function(){var a=N.findSingle(_.current,".p-menuitem-active > .p-megamenu-panel");return m?(Xe(),Se||ge.set("menu",a,c&&c.autoZIndex||re.autoZIndex,c&&c.zIndex.menu||re.zIndex.menu)):Ee(),Se&&a&&a.previousElementSibling.scrollIntoView({block:"nearest",inline:"nearest"}),function(){Ee(),ge.clear(a)}},[m,Se]),Z(function(){var a=b.isNotEmpty(f.key)?"".concat(x,"_").concat(f.key):null;fn(a)},[f]),s.useEffect(function(){var a=u.model||[],e=_e(a,0,null,"");gn(e)},[u.model]),Z(function(){var a=b.isNotEmpty(m)?m:null,e=a&&a.key===f.parentKey?a.items.reduce(function(t,n){return n.forEach(function(l){l.items.forEach(function(d){t.push(d)})}),t},[]):ce;In(e)},[f,m,ce]);var Tn=function(e){if(Me(!0),f.index===-1){var t=ee(),n=M(t);I({index:t,key:n.key,parentKey:n.parentKey})}u.onFocus&&u.onFocus(e)},Fn=function(e){Me(!1),I({index:-1,key:"",parentKey:""}),F.current="",se(!1),u.onBlur&&u.onBlur(e)},Bn=function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":jn(e);break;case"ArrowUp":zn(e);break;case"ArrowLeft":$n(e);break;case"ArrowRight":Vn(e);break;case"Home":Hn(e);break;case"End":Un(e);break;case"Space":Jn(e);break;case"Enter":case"NumpadEnter":Ge(e);break;case"Escape":Xn(e);break;case"Tab":Gn(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&b.isPrintableCharacter(e.key)&&qn(e,e.key);break}},jn=function(e){if(e.preventDefault(),fe){var t=f;if(b.isNotEmpty(m)&&m.key===f.key)m.key,an("_focusedItemInfo"),I(t);else{var n=M(f.index),l=O(n);l&&(V({originalEvent:e,processedItem:n}),n.key,n.parentKey,an("_focusedItemInfo"),I(t),F.current="")}setTimeout(function(){return xe(!0)},0)}else{var d=f.index!==-1?We(f.index):ee();P(d)}},zn=function(e){var t=M(f.index),n=O(t);if(e.altKey&&fe)f.index!==-1&&!n&&b.isNotEmpty(m)&&(f.index===0?(I({index:m.index,key:m.key,parentKey:m.parentKey}),T(null)):P(Ce()));else{var l=f.index!==-1?qe(f.index):Qe();P(l)}e.preventDefault()},$n=function(e){var t=M(f.index),n=O(t);if(n){if(fe){var l=f.index!==-1?qe(f.index):Qe();P(l)}}else{Q&&b.isNotEmpty(m)&&t.columnIndex===0&&(I({index:m.index,key:m.key,parentKey:m.parentKey}),T(null));var d=t.columnIndex-1,p=S.findIndex(function(v){return v.columnIndex===d});p!==-1&&P(p)}e.preventDefault()},Vn=function(e){e.preventDefault();var t=M(f.index),n=O(t);if(n){if(Q)if(b.isNotEmpty(m)&&m.key===t.key)I({index:-1,key:"",parentKey:m.key});else{var l=M(f.index),d=O(l);d&&(V({originalEvent:e,processedItem:l}),I({index:-1,key:l.key,parentKey:l.parentKey}),F.current="")}setTimeout(function(){return xe(!0)},0)}else{var p=t.columnIndex+1,v=S.findIndex(function(y){return y.columnIndex===p});v!==-1&&P(v)}},Hn=function(e){P(Ce()),e.preventDefault()},Un=function(e){P(Ze()),e.preventDefault()},Ge=function(e){if(f.index!==-1){var t=N.findSingle(D.current,'li[id="'.concat(le,'"]')),n=t&&N.findSingle(t,'a[data-pc-section="action"]');n?n.click():t&&t.click()}e.preventDefault()},Jn=function(e){Ge(e)},Xn=function(e){b.isNotEmpty(m)&&(I({index:m.index,key:m.key}),T(null)),e.preventDefault()},Gn=function(e){if(f.index!==-1){var t=M(f.index),n=O(t);!n&&V({originalEvent:e,processedItem:t})}H()},we=function(e){var t=Wn(e);return U(e)&&t&&t.toLocaleLowerCase().startsWith(F.current.toLocaleLowerCase())},U=function(e){return!!e&&!X(e.item)&&!Qn(e.item)},Zn=function(e){return U(e)&&Pe(e)},Pe=function(e){return b.isNotEmpty(m)?m.key===e.key:!1},Ce=function(){return S.findIndex(function(e){return U(e)})},Ze=function(){return b.findLastIndex(S,function(e){return U(e)})},We=function(e){var t=e<S.length-1?S.slice(e+1).findIndex(function(n){return U(n)}):-1;return t>-1?t+e+1:e},qe=function(e){var t=e>0?b.findLastIndex(S.slice(0,e),function(n){return U(n)}):-1;return t>-1?t:e},Ye=function(){return S&&S.findIndex(function(e){return Zn(e)})},ee=function(){var e=Ye();return e<0?Ce():e},Qe=function(){var e=Ye();return e<0?Ze():e},M=function(e){return b.isNotEmpty(S)?S[e]:null},Wn=function(e){return e&&e.item?pe(e):void 0},qn=function(e,t){F.current=(F.current||"")+t;var n=-1,l=!1;return f.index!==-1?(n=S.slice(f.index).findIndex(function(d){return we(d)}),n=n===-1?S.slice(0,f.index).findIndex(function(d){return we(d)}):n+f.index):n=S.findIndex(function(d){return we(d)}),n!==-1&&(l=!0),n===-1&&f.index===-1&&(n=ee()),n!==-1&&P(n),me&&clearTimeout(me),me.current=setTimeout(function(){F.current="",me.current=null},500),l},P=function(e){var t=M(e),n=b.isNotEmpty(t)?t.key:"";I(W(W({},f),{},{index:e,key:n})),Yn()},Yn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(x,"_").concat(e):le,n=N.findSingle(D.current,'li[id="'.concat(t,'"]'));n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},Ke=function(e){return"".concat(x,"_").concat(e.key)},J=function(e,t,n){return e&&e.item?b.getItemValue(e.item[t],n):void 0},pe=function(e){return J(e,"label")},ve=function(e){return b.isNotEmpty(m)?m.key===e.key:!1},Ne=function(e){return J(e,"visible")!==!1},X=function(e){return J(e,"disabled")},Re=function(e){return le===Ke(e)},Ae=function(e){return b.isNotEmpty(e.items)},Qn=function(e){return J(e,"separator")},O=function(e){return e&&b.isNotEmpty(e.items)},en=function(){return u.model.filter(function(e){return Ne(e)&&!J(e,"separator")}).length},nn=function(e){return e-u.model.slice(0,e).filter(function(t){return Ne(t)&&J(t,"separator")}).length+1},_e=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",d=arguments.length>4?arguments[4]:void 0;return e?(Array.isArray(e)||(e=[e]),e.map(function(p,v){var y="".concat(l!==""?l+"_":"").concat(d!==void 0?d+"_":"").concat(v),k={item:p,index:v,level:t,key:y,parent:n,parentKey:l,columnIndex:d!==void 0?d:n&&n.columnIndex!==void 0?n.columnIndex:v};return k.items=t===0&&p.items&&p.items.length>0?p.items.map(function(C,K){return _e(C,t+1,k,y,K)}):_e(p.items,t+1,k,y),k})):[]},et=function(e){var t=x+"_separator__"+e,n=r({id:t,key:t,className:g("separator"),role:"separator"},h("separator"));return s.createElement("li",n)},nt=function(e){if(e.items){var t=r({className:g("submenuIcon")},h("submenuIcon")),n=Q?u.submenuIcon||s.createElement(Lt,t):u.submenuIcon||s.createElement(Dt,t),l=ye.getJSXIcon(n,W({},t),{props:u});return l}return null},tt=function(e,t){var n=e.item;if(n.visible===!1)return null;if(n.separator)return et(t);var l=Ke(e),d=w("p-menuitem-link",{"p-disabled":n.disabled}),p=r({className:w(n.icon,g("icon"))},h("icon")),v=r({className:g("label")},h("label")),y=w(n.icon,"p-menuitem-icon"),k=ye.getJSXIcon(n.icon,W({},p),{props:u}),C=n.label&&s.createElement("span",v,n.label),K=r({href:n.url||"#",className:g("action",{item:n}),target:n.target,tabIndex:"-1","aria-hidden":!0},L(e,"action",t)),ne=Re(e),G=X(e),te=Ae(e),ae=ve(e),De=r({key:l,id:l,"aria-label":pe(e),"aria-disabled":G,"aria-haspopup":te?"menu":void 0,"aria-level":"2","aria-expanded":te?ae:void 0,"aria-setsize":en(),"aria-posinset":nn(t),"data-p-highlight":ae,"data-p-disabled":G,"data-p-focused":ne,className:w(n.className,g("submenuItem",{focused:ne,disabled:G,active:ae})),style:n.style,role:"menuitem"},L(e,"submenuItem",t)),be=r({onClick:function(xt){return An({originalEvent:xt,processedItem:e})},className:g("content")},L(e,"content",t)),R=s.createElement("a",K,k,C,s.createElement(tn,null));if(n.template){var ht={className:d,labelClassName:"p-menuitem-text",iconClassName:y,element:R,props:u};R=b.getJSXElement(n.template,n,ht)}return s.createElement("li",De,s.createElement("div",be,R))},at=function(e,t){if(!Ne(e))return null;var n=e.items.map(tt),l=e.id||x+"_sub_"+t,d=pe(e),p=X(e),v=r({id:l,key:l,className:w(e.className,g("submenuHeader",{disabled:p})),style:e.style,role:"presentation","data-p-disabled":p},h("submenuHeader"));return s.createElement(s.Fragment,{key:l},s.createElement("li",v,d),n)},rt=function(e){return e.map(at)},it=function(e,t,n){var l=e.item,d=l.label+"_column_"+n,p=rt(t),v=r({key:d,className:g("column",{category:l})},h("column")),y=m&&m.item===l?"block":"none",k=r({role:"menu",tabIndex:u.disabled?null:u.tabIndex||"0",className:g("submenu"),style:{display:y}},h("submenu"));return s.createElement("div",v,s.createElement("ul",k,p))},ot=function(e){return e.items?e.items.map(function(t,n){return it(e,t,n)}):null},ut=function(e){var t=e.item;if(t.items){var n=ot(e),l=r({className:g("panel")},h("panel")),d=r({className:g("grid")},h("grid"));return s.createElement("div",l,s.createElement("div",d,n))}return null},lt=function(){if(!Y.current){Y.current=N.createInlineStyle(c&&c.nonce||re.nonce,c&&c.styleContainer);var e="".concat($),t=`
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
                `);Y.current.innerHTML=t}},st=function(){Y.current=N.removeInlineStyle(Y.current)},ct=function(e,t){var n=e.item,l=r({className:g("icon")},L(e,"icon",t)),d=ye.getJSXIcon(n.icon,W({},l),{props:u}),p=r({className:g("label")},L(e,"label",t)),v=n.label&&s.createElement("span",p,n.label),y=nt(n),k=ut(e),C=r({href:n.url||"#",className:g("action",{item:n}),target:n.target,onFocus:function(R){return R.stopPropagation()},tabIndex:"-1","aria-hidden":!0},L(e,"action",t)),K=n.template?b.getJSXElement(n.template,n,C):s.createElement("a",C,d,v,y,s.createElement(tn,null)),ne=Ke(e),G=Re(e),te=X(e),ae=r(un({key:ne,id:ne,className:w(n.className,g("menuitem",{category:n,activeItemState:m,focused:G,disabled:te})),"aria-label":pe(n),"aria-level":"1","aria-setsize":en(),"aria-posinset":nn(t),"aria-expanded":Ae(e)?ve(e):void 0,"aria-haspopup":Ae(e)?"menu":void 0,"aria-disabled":X(e),"data-p-highlight":ve(n),"data-p-disabled":te,"data-p-focused":G,style:n.style,role:"menuitem"},"data-p-disabled",n.disabled||!1),L(e,"menuitem",t)),De=r({onClick:function(R){return Dn({originalEvent:R,processedItem:e})},onMouseEnter:function(R){return _n({originalEvent:R,processedItem:e})},className:g("content")},L(e,"content",t));return s.createElement("li",ae,s.createElement("div",De,K),k)},mt=function(){var e=r({ref:D,tabIndex:u.disabled?null:u.tabIndex||"0",className:g("menu"),onFocus:Tn,onBlur:Fn,onKeyDown:Bn,"aria-label":u.ariaLabel,"aria-labelledby":u.ariaLabelledBy,"aria-orientation":Q?"vertical":"horizontal","aria-activedescendant":cn?le:null,id:x+"_list",role:"menubar"},h("menu"));return ce?s.createElement("ul",e,ce.map(function(t,n){return ct(t,n)})):null},dt=function(){var e=r({className:g("start")},h("start"));if(u.start){var t=b.getJSXElement(u.start,u);return s.createElement("div",e,t)}return null},ft=function(){var e=r({className:g("end")},h("end"));if(u.end){var t=b.getJSXElement(u.end,u);return s.createElement("div",e,t)}return null},pt=function(){if(u.model&&u.model.length<1)return null;var e=r({className:g("menuButton"),href:"#",role:"button","aria-haspopup":!!(u.model&&u.model.length>0),"aria-expanded":A,"aria-controls":x,"aria-label":Et("navigation"),tabIndex:0,onClick:function(v){return Mn(v)}},h("menuButton")),t=r(h("menuButtonIcon")),n=u.menuIcon||s.createElement(Mt,t),l=ye.getJSXIcon(n,W({},t),{props:u}),d=s.createElement("a",he({ref:de},e),l);return d},vt=r({className:w(u.className,g("root",{mobileActiveState:A})),id:x,style:u.style},Ie.getOtherProps(u),h("root")),bt=mt(),gt=dt(),yt=ft(),It=pt();return s.createElement("div",he({id:u.id,ref:_},vt),gt,It,bt,yt)}));ln.displayName="MegaMenu";const Wt=()=>{const o=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theather",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}];return wt.jsx(ln,{model:o,breakpoint:"960px"})};export{Wt as default};
