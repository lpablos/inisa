import{r as d,P as jt,U as St,Z as Fe,O,c as C,d as ye,D as g,I as Xe,j as r}from"./app-827613ca.js";import{B as u}from"./button.esm-0df79c86.js";import{C as wt,u as Ye,e as ln,a as Et,f as cn,E as dn,c as kt,d as Pt,b as ve,n as pn,i as mn,g as fn,R as vn}from"./ripple.esm-dbab71b1.js";import{O as Ot,C as bn}from"./overlayservice.esm-34ff3081.js";import{a as yn}from"./index.esm-52556c40.js";import{T as xn,P as gn}from"./tooltip.esm-146c7467.js";import{A as hn}from"./index.esm-71e4f6b0.js";import{L as In}from"./layout-8154201a.js";import"./inputswitch.esm-ce8270e5.js";function xe(){return xe=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},xe.apply(this,arguments)}function Ne(t){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ne(t)}function jn(t,i){if(Ne(t)!=="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var o=a.call(t,i||"default");if(Ne(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function Sn(t){var i=jn(t,"string");return Ne(i)==="symbol"?i:String(i)}function G(t,i,a){return i=Sn(i),i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,t}function wn(t){if(Array.isArray(t))return t}function En(t,i){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var o,n,I,R,y=[],_=!0,B=!1;try{if(I=(a=a.call(t)).next,i===0){if(Object(a)!==a)return;_=!1}else for(;!(_=(o=I.call(a)).done)&&(y.push(o.value),y.length!==i);_=!0);}catch(D){B=!0,n=D}finally{try{if(!_&&a.return!=null&&(R=a.return(),Object(R)!==R))return}finally{if(B)throw n}}return y}}function yt(t,i){(i==null||i>t.length)&&(i=t.length);for(var a=0,o=new Array(i);a<i;a++)o[a]=t[a];return o}function kn(t,i){if(t){if(typeof t=="string")return yt(t,i);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return yt(t,i)}}function Pn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(t,i){return wn(t)||En(t,i)||kn(t,i)||Pn()}var On={root:function(i){var a=i.props,o=i.context;return C("p-tieredmenu p-component",{"p-tieredmenu-overlay":a.popup,"p-input-filled":o&&o.inputStyle==="filled"||ye.inputStyle==="filled","p-ripple-disabled":o&&o.ripple===!1||ye.ripple===!1})},separator:"p-menuitem-separator",icon:function(i){var a=i._icon;return C("p-menuitem-icon",a)},content:"p-menuitem-content",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",action:"p-menuitem-link",menuitem:function(i){var a=i.itemClassName,o=i.active,n=i.focused,I=i.disabled;return C("p-menuitem",{"p-menuitem-active p-highlight":o,"p-focus":n,"p-disabled":I},a)},menu:"p-tieredmenu-root-list",submenu:"p-submenu-list",transition:"p-connected-overlay"},Nn={submenu:function(i){var a=i.subProps;return{display:!a.root&&a.parentActive?"block":"none"}}},Rn=`
@layer primereact {
    .p-tieredmenu-overlay {
        position: absolute;
    }

    .p-tieredmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-tieredmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-tieredmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-tieredmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-tieredmenu .p-menuitem {
        position: relative;
    }

    .p-tieredmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-tieredmenu .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-tieredmenu .p-menuitem-active > .p-submenu-list-flipped {
        left: -100%;
    }
}
`,$e=wt.extend({defaultProps:{__TYPE:"TieredMenu",__parentMetadata:null,id:null,model:null,popup:!1,style:null,className:null,autoZIndex:!0,baseZIndex:0,breakpoint:void 0,scrollHeight:"400px",appendTo:null,transitionOptions:null,onShow:null,onFocus:null,onBlur:null,onHide:null,submenuIcon:null,children:void 0},css:{classes:On,styles:Rn,inlineStyles:Nn}});function xt(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,o)}return a}function gt(t){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?xt(Object(a),!0).forEach(function(o){G(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):xt(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}var qe=d.memo(d.forwardRef(function(t,i){var a=d.useRef(null),o=Ye(),n=t.ptm,I=t.cx,R=t.sx,y=function(s,b){return n(b,{hostName:t.hostName,context:{active:w(s)}})},_=function(){if(a.current){var s=a.current.parentElement,b=g.getOffset(s),x=g.getViewport(),L=a.current.offsetParent?a.current.offsetWidth:g.getHiddenElementOuterWidth(a.current),te=g.getOuterWidth(s.children[0]),H=parseInt(b.top,10)+a.current.offsetHeight-g.getWindowScrollTop();H>x.height?a.current.style.top=x.height-H+"px":a.current.style.top="0px",parseInt(b.left,10)+te+L>x.width-g.calculateScrollbarWidth()&&g.addClass(a.current,"p-submenu-list-flipped")}},B=function(s,b){var x=b.item;if(K(b)){s.preventDefault();return}x.command&&x.command({originalEvent:s,item:x}),t.onItemClick&&t.onItemClick({originalEvent:s,processedItem:b}),x.url||(s.preventDefault(),s.stopPropagation())},D=function(s){return"".concat(t.menuId,"_").concat(s.key)},h=function(s,b,x){return s&&s.item?O.getItemValue(s.item[b],x):void 0},w=function(s){return t.activeItemPath.some(function(b){return b.key===s.key})},$=function(s){return h(s,"visible")!==!1},K=function(s){return h(s,"disabled")},S=function(s){return t.focusedItemId===D(s)},M=function(s){return O.isNotEmpty(s.items)},Q=function(s,b){t.onItemMouseEnter&&t.onItemMouseEnter({originalEvent:s,processedItem:b})},U=function(){return t.model.filter(function(s){return $(s)&&!h(s,"separator")}).length},ee=function(s){return s-t.model.slice(0,s).filter(function(b){return $(b)&&h(b,"separator")}).length+1};ve(function(){!t.root&&t.parentActive&&!t.isMobileMode&&_()},[t.parentActive]),d.useImperativeHandle(i,function(){return{getElement:function(){return a.current}}});var T=function(s){var b="separator_"+s,x=o({key:b,className:I("separator"),role:"separator"},n("separator",{hostName:t.hostName}));return d.createElement("li",x)},V=function(s,b){return M(s)?d.createElement(qe,{id:t.id+"_"+b,menuProps:t.menuProps,model:s.items,menuId:t.menuId,ariaLabelledby:D(s),focusedItemId:t.focusedItemId,activeItemPath:t.activeItemPath,level:t.level+1,onItemClick:t.onItemClick,popup:t.popup,onItemMouseEnter:t.onItemMouseEnter,parentActive:w(s),isMobileMode:t.isMobileMode,submenuIcon:t.submenuIcon,ptm:t.ptm,cx:I,sx:R}):null},ie=function(s,b){if($(s)===!1)return null;var x=s.item,L=h(s,"style"),te=h(s,"className"),H=h(s,"icon"),X=h(s,"target"),ue=h(s,"url"),se=D(s),E=S(s),f=w(s),Y=K(s),ne=M(s),Re=C("p-menuitem-link"),Ce=C("p-menuitem-icon",H),he=o({className:C(x.icon,"p-menuitem-icon","icon")},y(s,"icon")),ze=Xe.getJSXIcon(H,gt({},he),{props:t.menuProps}),De=o({className:I("label")},y(s,"label")),F=x.label&&d.createElement("span",De,x.label),Ue="p-submenu-icon",_e=o({className:I("submenuIcon")},y(s,"submenuIcon")),le=ne&&Xe.getJSXIcon(t.submenuIcon||d.createElement(hn,_e),gt({},_e),{props:t.menuProps}),Ie=V(s,b),je=o({href:ue||"#","aria-hidden":!0,tabIndex:"-1",onFocus:function(z){return z.stopPropagation()},className:I("action"),target:X},y(s,"action")),Se=d.createElement("a",je,ze,F,le,d.createElement(vn,null));if(x.template){var Ve={className:Re,labelClassName:"p-menuitem-text",iconClassName:Ce,submenuIconClassName:Ue,element:Se,props:t,active:f,disabled:Y};Se=O.getJSXElement(x.template,x,Ve)}var k=o({onClick:function(z){return B(z,s)},onMouseEnter:function(z){return Q(z,s)},className:I("content")},y(s,"content")),we=o({key:se,id:se,"aria-label":x.label,"aria-disabled":Y,"aria-expanded":ne?f:void 0,"aria-haspopup":ne&&!ue?"menu":void 0,"aria-setsize":U(),"aria-posinset":ee(b),"data-p-highlight":f,"data-p-disabled":Y,"data-p-visited":E,className:I("menuitem",{itemClassName:te,active:f,focused:E,disabled:Y}),style:L,onMouseEnter:function(z){return Q(z,x)},role:"menuitem"},y(s,"menuitem"));return d.createElement("li",we,d.createElement("div",k,Se),Ie)},J=function(s,b){return s.visible===!1?null:h(s,"separator")?T(b):ie(s,b)},ge=function(){return t.model?t.model.map(J):null},oe=ge(),W=t.root?"menu":"submenu",m=o({ref:a,id:t.id,tabIndex:t.tabIndex,onFocus:t.onFocus,onBlur:t.onBlur,onKeyDown:t.onKeyDown,className:I(W,{subProps:t}),style:R(W,{subProps:t}),role:t.root?"menubar":"menu","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-orientation":t.ariaOrientation,"aria-activedescendant":t.focusedItemId},n(W,{hostName:t.hostName}));return d.createElement("ul",m,oe)}));qe.displayName="TieredMenuSub";function ht(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,o)}return a}function fe(t){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?ht(Object(a),!0).forEach(function(o){G(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ht(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}var Nt=d.memo(d.forwardRef(function(t,i){var a=Ye(),o=d.useContext(jt),n=$e.getProps(t,o),I=d.useState(n.id),R=N(I,2),y=R[0],_=R[1],B=d.useState(!n.popup),D=N(B,2),h=D[0],w=D[1],$=d.useState([]),K=N($,2),S=K[0],M=K[1],Q=d.useState(!1),U=N(Q,2),ee=U[0],T=U[1],V=d.useState(null),ie=N(V,2),J=ie[0],ge=ie[1],oe=d.useState({index:-1,level:0,parentKey:""}),W=N(oe,2),m=W[0],v=W[1],s=d.useState(!1),b=N(s,2),x=b[0],L=b[1],te=d.useState([]),H=N(te,2),X=H[0],ue=H[1],se=d.useState([]),E=N(se,2),f=E[0],Y=E[1],ne=d.useState(!1),Re=N(ne,2),Ce=Re[0],he=Re[1],ze=d.useState(null),De=N(ze,2),F=De[0],Ue=De[1],_e=fe(fe({props:n},n.__parentMetadata),{},{state:{id:y,visible:h,attributeSelector:F}}),le=$e.setMetaData(_e),Ie=le.ptm,je=le.cx,Se=le.sx,Ve=le.isUnstyled;Et($e.css.styles,Ve,{name:"tieredmenu"});var k=d.useRef(null),we=d.useRef(null),P=d.useRef(null),z=d.useRef(null),Ee=d.useRef(null),re=d.useRef(null),Ke=d.useRef(null),Qe=pn("screen and (max-width: ".concat(n.breakpoint,")"),!!n.breakpoint),Rt=mn({type:"click",listener:function(e){var l=k.current&&!k.current.contains(e.target),p=n.popup?!(P.current&&(P.current===e.target||P.current.contains(e.target))):!0;l&&p&&Z(e,!n.popup)}}),et=N(Rt,2),tt=et[0],nt=et[1],Ct=fn({listener:function(){!Qe&&Z(event,!0)}}),rt=N(Ct,2),at=rt[0],it=rt[1],Dt=function(e){n.popup&&Ot.emit("overlay-click",{originalEvent:e,target:P.current})},_t=function(e){n.popup&&(h?Z(e):ot(e))},ot=function(e){n.popup&&(P.current=e.currentTarget,w(!0),n.onShow&&n.onShow(e),z.current=e.relatedTarget||null),v({index:de(),level:0,parentKey:""})},Z=function(e,l){n.popup&&(w(!1),n.onHide&&n.onHide(e));var p=Pe();M([]),v({index:-1,level:0,parentKey:""}),l&&g.focus(z.current||P.current||p),L(!1)},Kt=function(e){T(!0),v(m.index!==-1?m:{index:de(),level:0,parentKey:""}),n.onFocus&&n.onFocus(e)},Mt=function(e){T(!1),v({index:-1,level:0,parentKey:""}),re.current="",L(!1),n.onBlur&&n.onBlur(e)},Tt=function(e){var l=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":Bt(e);break;case"ArrowUp":$t(e);break;case"ArrowLeft":Ht(e);break;case"ArrowRight":Ft(e);break;case"Home":zt(e);break;case"End":Ut(e);break;case"Space":Vt(e);break;case"Enter":case"NumpadEnter":ut(e);break;case"Escape":n.popup&&g.focus(P.current),Wt(e);break;case"Tab":Zt(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!l&&O.isPrintableCharacter(e.key)&&en(e.key);break}},ke=function(e){var l=e.processedItem,p=e.isFocus;if(!O.isEmpty(l)){var j=l.index,A=l.key,me=l.level,q=l.parentKey,ae=l.items,Oe=O.isNotEmpty(ae),Te=S.filter(function(Le){return Le.parentKey!==q&&Le.parentKey!==A});Oe&&Te.push(l),v({index:j,level:me,parentKey:q}),M(Te),Oe&&L(!0),p&&g.focus(Pe())}},Lt=function(e){var l=e.originalEvent,p=e.processedItem;if(!(Ze(p)||n.isMobileMode)){var j=Me(p),A=O.isEmpty(p.parent),me=st(p),q=Pe();if(me){var ae=p.index,Oe=p.key,Te=p.level,Le=p.parentKey;M(S.filter(function(Be){return Oe!==Be.key&&Oe.startsWith(Be.key)})),v({index:ae,level:Te,parentKey:Le}),j||L(!A),setTimeout(function(){g.focus(q),j&&L(!0)},0)}else if(j)g.focus(q),ke(e);else{var Ae=A?p:S.find(function(Be){return Be.parentKey===""}),sn=Ae?Ae.index:-1;Z(l,!0),v({index:sn,parentKey:Ae?Ae.parentKey:""})}}},At=function(e){var l=e.originalEvent,p=e.processedItem;if(Ze(p)||n.isMobileMode){l.preventDefault();return}x&&!n.popup&&ke(e)},Bt=function(e){var l=m.index!==-1?dt(m.index):de();pe(l),e.preventDefault()},$t=function(e){if(e.altKey){if(n.popup&&g.focus(P.current),m.index!==-1){var l=f[m.index],p=Me(l);!p&&ke({originalEvent:e,processedItem:l})}n.popup&&Z(e,!0),e.preventDefault()}else{var j=m.index!==-1?qt(m.index):Qt();pe(j),e.preventDefault()}},Ht=function(e){var l=f[m.index],p=S.find(function(A){return A.key===l.parentKey}),j=O.isEmpty(l.parent);j||(v({index:-1,parentKey:p?p.parentKey:""}),re.current="",setTimeout(function(){return he(!0)},0)),M(S.filter(function(A){return A.parentKey!==m.parentKey})),e.preventDefault()},Ft=function(e){var l=f[m.index],p=Me(l);p&&(ke({originalEvent:e,processedItem:l}),v({index:-1,parentKey:l.key}),re.current="",setTimeout(function(){return he(!0)},0)),e.preventDefault()},zt=function(e){pe(lt()),e.preventDefault()},Ut=function(e){pe(ct()),e.preventDefault()},ut=function(e){if(m.index!==-1){var l=g.findSingle(Pe(),'li[id="'.concat("".concat(J),'"]')),p=l&&g.findSingle(l,'[data-pc-section="action"]');n.popup&&g.focus(P.current),p?p.click():l&&l.click()}e.preventDefault()},Vt=function(e){ut(e)},Wt=function(e){Z(e,!0),!n.popup&&v(fe(fe({},m),{},{index:de()})),e.preventDefault()},Zt=function(e){if(m.index!==-1){var l=f[m.index],p=Me(l);!p&&ke({originalEvent:e,processedItem:l})}Z(e)},Pe=function(){return we.current.getElement()||null},We=function(e,l){return e?O.getItemValue(e[l]):void 0},Gt=function(e){return We(e,"label")},Ze=function(e){return We(e,"disabled")},Jt=function(e){return We(e,"separator")},Xt=function(e){return e?Gt(e.item):void 0},Me=function(e){return e&&O.isNotEmpty(e.items)},Ge=function(e){return ce(e)&&Xt(e).toLocaleLowerCase().startsWith(re.current.toLocaleLowerCase())},ce=function(e){return!!e&&!Ze(e.item)&&!Jt(e.item)},Yt=function(e){return ce(e)&&st(e)},st=function(e){return S.some(function(l){return l.key===e.key})},lt=function(){return f.findIndex(function(e){return ce(e)})},ct=function(){return O.findLastIndex(f,function(e){return ce(e)})},dt=function(e){var l=e<f.length-1?f.slice(e+1).findIndex(function(p){return ce(p)}):-1;return l>-1?l+e+1:e},qt=function(e){var l=e>0?O.findLastIndex(f.slice(0,e),function(p){return ce(p)}):-1;return l>-1?l:e},pt=function(){return f.findIndex(function(e){return Yt(e)})},de=function(){var e=pt();return e<0?lt():e},Qt=function(){var e=pt();return e<0?ct():e},en=function(e){re.current=(re.current||"")+e;var l=-1,p=!1;return m.index!==-1?(l=f.slice(m.index).findIndex(function(j){return Ge(j)}),l=l===-1?f.slice(0,m.index).findIndex(function(j){return Ge(j)}):l+m.index):l=f.findIndex(function(j){return Ge(j)}),l!==-1&&(p=!0),l===-1&&m.index===-1&&(l=de()),l!==-1&&pe(l),Ke.current&&clearTimeout(Ke),Ke.current=setTimeout(function(){re.current="",Ke.current=null},500),p},pe=function(e){m.index!==e&&(v(fe(fe({},m),{},{index:e})),mt())},mt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,l=e!==-1?"".concat(y,"_").concat(e):J,p=g.findSingle(Pe(),'li[id="'.concat(l,'"]'));p&&p.scrollIntoView&&p.scrollIntoView({block:"nearest",inline:"start"})},Je=d.useCallback(function(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",j=[];return c&&c.forEach(function(A,me){var q=(p!==""?p+"_":"")+me,ae={item:A,index:me,level:e,key:q,parent:l,parentKey:p};ae.items=Je(A.items,e+1,ae,q),j.push(ae)}),j},[]),ft=function(){if(!Ee.current){Ee.current=g.createInlineStyle(o&&o.nonce||ye.nonce,o&&o.styleContainer);var e="".concat(F),l=`
@media screen and (max-width: `.concat(n.breakpoint,`) {
    .p-tieredmenu[`).concat(e,`] > ul {
        max-height: `).concat(n.scrollHeight,`;
        overflow: `).concat(n.scrollHeight?"auto":"",`;
    }

    .p-tieredmenu[`).concat(e,`] .p-submenu-list {
        position: relative;
    }

    .p-tieredmenu[`).concat(e,`] .p-menuitem-active > .p-submenu-list {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-tieredmenu[`).concat(e,`] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-tieredmenu[`).concat(e,`] .p-submenu-icon:before {
        content: "\\e930";
    }

    `).concat(n.popup?"":".p-tieredmenu[".concat(e,"] { width: 100%; }"),`
}
`);Ee.current.innerHTML=l}},vt=function(){Ee.current=g.removeInlineStyle(Ee.current)},tn=function(){var e=g.getOuterWidth(P.current)>g.getOuterWidth(k.current);g.alignOverlay(k.current,P.current,n.appendTo,e)},nn=function(){n.autoZIndex&&Fe.set("menu",k.current,o&&o.autoZIndex||ye.autoZIndex,n.baseZIndex||o&&o.zIndex.menu||ye.zIndex.menu),g.addStyles(k.current,{position:"absolute",top:"0",left:"0"}),tn(),g.focus(we.current.getElement()),mt(),F&&n.breakpoint&&(k.current.setAttribute(F,""),ft())},rn=function(){tt(),at()},an=function(){P.current=null,nt(),it()},on=function(){Fe.clear(k.current),vt()};kt(function(){var c=St();!y&&_(c),n.breakpoint&&!F&&Ue(c)}),d.useEffect(function(){var c=n.model||[],e=Je(c);ue(e)},[n.model,Je]),ve(function(){var c=S.find(function(l){return l.key===m.parentKey}),e=c?c.items:X;Y(e)},[S,m,X]),ve(function(){var c=m.index!==-1?"".concat(y).concat(O.isNotEmpty(m.parentKey)?"_"+m.parentKey:"","_").concat(m.index):null;ge(c)},[m]),ve(function(){n.popup||(O.isNotEmpty(S)?(tt(),at()):(nt(),it()))},[S]),ve(function(){if(Ce){var c=m.index!==-1?dt(m.index):de();pe(c),M(S.filter(function(e){return e.parentKey!==m.parentKey})),he(!1)}},[Ce]),ve(function(){return F&&k.current&&(k.current.setAttribute(F,""),ft()),function(){vt()}},[F,n.breakpoint]),Pt(function(){Fe.clear(k.current)}),d.useImperativeHandle(i,function(){return{props:n,toggle:_t,show:ot,hide:Z,getElement:function(){return k.current}}});var un=function(){var e=a({ref:k,id:n.id,className:C(n.className,je("root")),style:n.style,onClick:Dt},$e.getOtherProps(n),Ie("root")),l=a({classNames:je("transition"),in:h,timeout:{enter:120,exit:100},options:n.transitionOptions,unmountOnExit:!0,onEnter:nn,onEntered:rn,onExit:an,onExited:on},Ie("transition"));return d.createElement(yn,xe({nodeRef:k},l),d.createElement("div",e,d.createElement(qe,{id:y+"_list",ref:we,hostName:"TieredMenu",menuProps:n,tabIndex:0,model:X,ariaLabel:n.ariaLabel,ariaLabelledBy:n.ariaLabelledBy,ariaOrientation:"vertical",ariaActiveDescendant:ee?J:void 0,menuId:y,level:0,focusedItemId:J,activeItemPath:S,onFocus:Kt,onBlur:Mt,onKeyDown:Tt,onItemClick:Lt,onItemMouseEnter:At,root:!0,popup:n.popup,onHide:Z,isMobileMode:Qe,submenuIcon:n.submenuIcon,ptm:Ie,cx:je,sx:Se})))},bt=un();return n.popup?d.createElement(gn,{element:bt,appendTo:n.appendTo}):bt}));Nt.displayName="TieredMenu";var Cn={icon:"p-button-icon p-c",root:function(i){var a=i.props,o=i.size;return C("p-splitbutton p-component",G(G(G(G(G(G({"p-disabled":a.disabled,"p-button-loading-label-only":a.loading&&!a.icon&&a.label},"p-button-".concat(a.severity),a.severity),"p-button-raised",a.raised),"p-button-rounded",a.rounded),"p-button-text",a.text),"p-button-outlined",a.outlined),"p-button-".concat(o),o))},button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton",menu:function(i){var a=i.props;return C("p-menu p-menu-overlay p-component",a.menuClassName)},menuList:"p-menu-list p-reset",separator:"p-menu-separator",menuIcon:"p-menuitem-icon",menuLabel:"p-menuitem-text",anchor:function(i){var a=i._className,o=i.disabled;return C("p-menuitem-link",a,{"p-disabled":o})},menuItem:"p-menuitem",transition:"p-connected-overlay"},Dn=`
@layer primereact {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton  {
        display: flex;
    }
}
`,He=wt.extend({defaultProps:{__TYPE:"SplitButton",id:null,label:null,icon:null,autoZIndex:!0,baseZIndex:0,loading:!1,loadingIcon:null,model:null,disabled:null,style:null,className:null,buttonClassName:null,menuStyle:null,menuClassName:null,menuButtonClassName:null,buttonProps:null,menuButtonProps:null,tabIndex:null,severity:null,rounded:!1,raised:!1,outlined:!1,text:!1,size:null,appendTo:null,tooltip:null,tooltipOptions:null,buttonTemplate:null,transitionOptions:null,dropdownIcon:null,onClick:null,onShow:null,onHide:null,children:void 0},css:{classes:Cn,styles:Dn}});function It(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);i&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,o)}return a}function _n(t){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?It(Object(a),!0).forEach(function(o){G(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):It(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}var be=d.memo(d.forwardRef(function(t,i){var a=Ye(),o=d.useContext(jt),n=He.getProps(t,o),I=d.useState(n.id),R=N(I,2),y=R[0],_=R[1],B=d.useState(!1),D=N(B,2),h=D[0],w=D[1],$=d.useRef(null),K=d.useRef(null),S=d.useRef(null),M=d.useRef(null),Q=ln("split-button-tooltip",h),U={props:n,state:{id:y,overlayVisible:h}},ee=He.setMetaData(U),T=ee.ptm,V=ee.cx,ie=ee.isUnstyled;Et(He.css.styles,ie,{name:"splitbutton"}),cn({callback:function(){m()},when:h&&Q,priority:[dn.SPLIT_BUTTON,Q]});var J=function(f){Ot.emit("overlay-click",{originalEvent:f,target:$.current})},ge=function(f){(f.code==="ArrowDown"||f.code==="ArrowUp")&&(oe(f),f.preventDefault())},oe=function(f){h?m(f):W(f)},W=function(f){w(!0),K.current&&K.current.show(f)},m=function(f){w(!1),K.current&&K.current.hide(f)},v=function(){n.onShow&&n.onShow()},s=function(){w(!1),n.onHide&&n.onHide()},b=function(){g.alignOverlay(M.current,S.current.parentElement,n.appendTo||o&&o.appendTo||ye.appendTo)};if(kt(function(){y||_(St()),b()}),Pt(function(){Fe.clear(M.current)}),d.useImperativeHandle(i,function(){return{props:n,show:W,hide:m,getElement:function(){return $.current}}}),n.visible===!1)return null;var x=O.isNotEmpty(n.tooltip),L={large:"lg",small:"sm"},te=L[n.size],H=n.buttonTemplate?O.getJSXElement(n.buttonTemplate,n):null,X=y+"_overlay",ue=function(){var f=a({className:V("icon")},T("icon")),Y=n.dropdownIcon||d.createElement(bn,f),ne=Xe.getJSXIcon(Y,_n({},f),{props:n});return ne},se=a({ref:$,id:y,className:C(n.className,V("root",{size:te})),style:n.style},He.getOtherProps(n),T("root"));return d.createElement(d.Fragment,null,d.createElement("div",se,d.createElement(u,xe({ref:S,type:"button",className:C(n.buttonClassName,V("button")),icon:n.icon,loading:n.loading,loadingIcon:n.loadingIcon,severity:n.severity,label:n.label,"aria-label":n.label,raised:n.raised,onClick:n.onClick,disabled:n.disabled,tabIndex:n.tabIndex,size:n.size,outlined:n.outlined,text:n.text},n.buttonProps,{pt:T("button"),__parentMetadata:{parent:U},unstyled:n.unstyled}),H),d.createElement(u,xe({type:"button",className:C(n.menuButtonClassName,V("menuButton")),icon:ue,onClick:oe,disabled:n.disabled,"aria-expanded":h,"aria-haspopup":"true","aria-controls":X},n.menuButtonProps,{size:n.size,severity:n.severity,outlined:n.outlined,text:n.text,raised:n.raised,pt:T("menuButton"),__parentMetadata:{parent:U},onKeyDown:ge,unstyled:n.unstyled})),d.createElement(Nt,{ref:K,popup:!0,unstyled:n.unstyled,model:n.model,appendTo:n.appendTo,id:X,style:n.menuStyle,autoZIndex:n.autoZIndex,baseZIndex:n.baseZIndex,className:C(n.menuClassName,V("menu")),onClick:J,onShow:v,onHide:s,pt:T("menu"),__parentMetadata:{parent:U}})),x&&d.createElement(xn,xe({target:$,content:n.tooltip,pt:T("tooltip")},n.tooltipOptions)))}));be.displayName="SplitButton";const zn=()=>{const[t,i]=d.useState(!1),[a,o]=d.useState(!1),[n,I]=d.useState(!1),[R,y]=d.useState(!1),_=()=>{i(!0),setTimeout(()=>{i(!1)},2e3)},B=()=>{o(!0),setTimeout(()=>{o(!1)},2e3)},D=()=>{I(!0),setTimeout(()=>{I(!1)},2e3)},h=()=>{y(!0),setTimeout(()=>{y(!1)},2e3)},w=[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Home",icon:"pi pi-home"}];return r.jsx(In,{children:r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"col-12 md:col-6",children:[r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Default"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{label:"Submit"}),r.jsx(u,{label:"Disabled",disabled:!0}),r.jsx(u,{label:"Link",link:!0})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Severities"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{label:"Primary"}),r.jsx(u,{label:"Secondary",severity:"secondary"}),r.jsx(u,{label:"Success",severity:"success"}),r.jsx(u,{label:"Info",severity:"info"}),r.jsx(u,{label:"Warning",severity:"warning"}),r.jsx(u,{label:"Help",severity:"help"}),r.jsx(u,{label:"Danger",severity:"danger"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Text"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{label:"Primary",text:!0}),r.jsx(u,{label:"Secondary",severity:"secondary",text:!0}),r.jsx(u,{label:"Success",severity:"success",text:!0}),r.jsx(u,{label:"Info",severity:"info",text:!0}),r.jsx(u,{label:"Warning",severity:"warning",text:!0}),r.jsx(u,{label:"Help",severity:"help",text:!0}),r.jsx(u,{label:"Danger",severity:"danger",text:!0}),r.jsx(u,{label:"Plain",className:"p-button-plain",text:!0})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Outlined"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{label:"Primary",outlined:!0}),r.jsx(u,{label:"Secondary",severity:"secondary",outlined:!0}),r.jsx(u,{label:"Success",severity:"success",outlined:!0}),r.jsx(u,{label:"Info",severity:"info",outlined:!0}),r.jsx(u,{label:"Warning",severity:"warning",outlined:!0}),r.jsx(u,{label:"Help",severity:"help",outlined:!0}),r.jsx(u,{label:"Danger",severity:"danger",outlined:!0})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Button Group"}),r.jsxs("span",{className:"p-buttonset flex",children:[r.jsx(u,{label:"Save",icon:"pi pi-check"}),r.jsx(u,{label:"Delete",icon:"pi pi-trash"}),r.jsx(u,{label:"Cancel",icon:"pi pi-times"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"SplitButton"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(be,{label:"Save",icon:"pi pi-check",model:w,severity:"secondary"}),r.jsx(be,{label:"Save",icon:"pi pi-check",model:w,severity:"success"}),r.jsx(be,{label:"Save",icon:"pi pi-check",model:w,severity:"info"}),r.jsx(be,{label:"Save",icon:"pi pi-check",model:w,severity:"warning"}),r.jsx(be,{label:"Save",icon:"pi pi-check",model:w,severity:"danger"})]})]})]}),r.jsxs("div",{className:"col-12 md:col-6",children:[r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Icons"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{icon:"pi pi-star-fill"}),r.jsx(u,{label:"Bookmark",icon:"pi pi-bookmark"}),r.jsx(u,{label:"Bookmark",icon:"pi pi-bookmark",iconPos:"right"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Raised"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{label:"Primary",raised:!0}),r.jsx(u,{label:"Secondary",raised:!0,severity:"secondary"}),r.jsx(u,{label:"Success",raised:!0,severity:"success"}),r.jsx(u,{label:"Info",raised:!0,severity:"info"}),r.jsx(u,{label:"Warning",raised:!0,severity:"warning"}),r.jsx(u,{label:"Help",raised:!0,severity:"help"}),r.jsx(u,{label:"Danger",raised:!0,severity:"danger"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Rounded"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{label:"Primary",rounded:!0}),r.jsx(u,{label:"Secondary",rounded:!0,severity:"secondary"}),r.jsx(u,{label:"Success",rounded:!0,severity:"success"}),r.jsx(u,{label:"Info",rounded:!0,severity:"info"}),r.jsx(u,{label:"Warning",rounded:!0,severity:"warning"}),r.jsx(u,{label:"Help",rounded:!0,severity:"help"}),r.jsx(u,{label:"Danger",rounded:!0,severity:"danger"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Rounded Icons"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{icon:"pi pi-check",rounded:!0}),r.jsx(u,{icon:"pi pi-bookmark",rounded:!0,severity:"secondary"}),r.jsx(u,{icon:"pi pi-search",rounded:!0,severity:"success"}),r.jsx(u,{icon:"pi pi-user",rounded:!0,severity:"info"}),r.jsx(u,{icon:"pi pi-bell",rounded:!0,severity:"warning"}),r.jsx(u,{icon:"pi pi-heart",rounded:!0,severity:"help"}),r.jsx(u,{icon:"pi pi-times",rounded:!0,severity:"danger"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Rounded Text"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{icon:"pi pi-check",rounded:!0,text:!0}),r.jsx(u,{icon:"pi pi-bookmark",rounded:!0,text:!0,severity:"secondary"}),r.jsx(u,{icon:"pi pi-search",rounded:!0,text:!0,severity:"success"}),r.jsx(u,{icon:"pi pi-user",rounded:!0,text:!0,severity:"info"}),r.jsx(u,{icon:"pi pi-bell",rounded:!0,text:!0,severity:"warning"}),r.jsx(u,{icon:"pi pi-heart",rounded:!0,text:!0,severity:"help"}),r.jsx(u,{icon:"pi pi-times",rounded:!0,text:!0,severity:"danger"}),r.jsx(u,{icon:"pi pi-filter",rounded:!0,text:!0,className:"p-button-plain"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Rounded Outlined"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{icon:"pi pi-check",rounded:!0,outlined:!0}),r.jsx(u,{icon:"pi pi-bookmark",rounded:!0,outlined:!0,severity:"secondary"}),r.jsx(u,{icon:"pi pi-search",rounded:!0,outlined:!0,severity:"success"}),r.jsx(u,{icon:"pi pi-user",rounded:!0,outlined:!0,severity:"info"}),r.jsx(u,{icon:"pi pi-bell",rounded:!0,outlined:!0,severity:"warning"}),r.jsx(u,{icon:"pi pi-heart",rounded:!0,outlined:!0,severity:"help"}),r.jsx(u,{icon:"pi pi-times",rounded:!0,outlined:!0,severity:"danger"})]})]}),r.jsxs("div",{className:"card",children:[r.jsx("h5",{children:"Loading"}),r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(u,{label:"Search",icon:"pi pi-search",loading:t,onClick:_}),r.jsx(u,{label:"Search",icon:"pi pi-search",iconPos:"right",loading:a,onClick:B}),r.jsx(u,{icon:"pi pi-search",loading:n,onClick:D}),r.jsx(u,{label:"Search",loading:R,onClick:h})]})]})]})]})})};export{zn as default};
