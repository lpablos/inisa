import{r as s,P as fe,D as B,O as de,c as ee,j as l}from"./app-dd05d154.js";import{L as ve}from"./layout-14e68f7d.js";import{F as me}from"./fieldset.esm-74d0e1be.js";import{I as j}from"./inputtext.esm-0282332f.js";import{B as pe}from"./button.esm-ceaa1394.js";import{C as he,c as ge,b as X}from"./ripple.esm-f46f8654.js";import"./index.esm-0900a10d.js";import"./inputswitch.esm-48d13ac7.js";import"./tooltip.esm-4fb46b8c.js";import"./index.esm-871fef04.js";function Z(){return Z=Object.assign?Object.assign.bind():function(y){for(var g=1;g<arguments.length;g++){var h=arguments[g];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(y[r]=h[r])}return y},Z.apply(this,arguments)}var xe={root:function(g){var h=g.props,r=g.context;return ee("p-inputmask",{"p-filled":h.filled,"p-invalid":h.invalid,"p-variant-filled":h.variant?h.variant==="filled":r&&r.inputStyle==="filled"})}},H=he.extend({defaultProps:{__TYPE:"InputMask",autoClear:!0,autoFocus:!1,className:null,disabled:!1,id:null,mask:null,maxLength:null,invalid:!1,variant:null,name:null,onBlur:null,onChange:null,onComplete:null,onFocus:null,placeholder:null,readOnly:!1,required:!1,size:null,slotChar:"_",style:null,tabIndex:null,tooltip:null,tooltipOptions:null,type:"text",unmask:!1,value:null,children:void 0},css:{classes:xe}}),G=s.memo(s.forwardRef(function(y,g){var h=s.useContext(fe),r=H.getProps(y,h),u=s.useRef(null),b=s.useRef(null),F=s.useRef(0),d=s.useRef([]),v=s.useRef([]),m=s.useRef(0),S=s.useRef(null),D=s.useRef(!1),E=s.useRef(null),K=s.useRef(null),C=s.useRef(null),R=s.useRef(null),O=s.useRef(null),A=s.useRef(!1),M={props:r},L=H.setMetaData(M),U=L.cx,p=function(e,n){var t,a,c,f=u.current;return!f||!f.offsetParent||f!==document.activeElement?null:(typeof e=="number"?(a=e,c=typeof n=="number"?n:a,f.setSelectionRange?f.setSelectionRange(a,c):f.createTextRange&&(t=f.createTextRange(),t.collapse(!0),t.moveEnd("character",c),t.moveStart("character",a),t.select())):f.setSelectionRange?(a=f.selectionStart,c=f.selectionEnd):document.selection&&document.selection.createRange&&(t=document.selection.createRange(),a=0-t.duplicate().moveStart("character",-1e5),c=a+t.text.length),{begin:a,end:c})},i=function(){for(var e=b.current;e<=F.current;e++)if(d.current[e]&&v.current[e]===x(e))return!1;return!0},x=s.useCallback(function(o){return o<r.slotChar.length?r.slotChar.charAt(o):r.slotChar.charAt(0)},[r.slotChar]),w=function(){return r.unmask?V():u.current&&u.current.value},I=function(e){for(;++e<m.current&&!d.current[e];);return e},re=function(e){for(;--e>=0&&!d.current[e];);return e},Y=function(e,n){var t,a;if(!(e<0)){for(t=e,a=I(n);t<m.current;t++)if(d.current[t]){if(a<m.current&&d.current[t].test(v.current[a]))v.current[t]=v.current[a],v.current[a]=x(a);else break;a=I(a)}P(),p(Math.max(b.current,e))}},te=function(e){var n,t,a,c;for(n=e,t=x(e);n<m.current;n++)if(d.current[n])if(a=I(n),c=v.current[n],v.current[n]=t,a<m.current&&d.current[a].test(c))t=c;else break},ne=function(e){var n=u.current.value,t=p();if(t){if(S.current.length&&S.current.length>n.length){for(k(!0);t.begin>0&&!d.current[t.begin-1];)t.begin--;if(t.begin===0)for(;t.begin<b.current&&!d.current[t.begin];)t.begin++;p(t.begin,t.begin)}else{for(k(!0);t.begin<m.current&&!d.current[t.begin];)t.begin++;p(t.begin,t.begin)}r.onComplete&&i()&&r.onComplete({originalEvent:e,value:w()}),N(e)}},_=function(e){if(D.current=!1,k(),N(e),z(),r.onBlur&&r.onBlur(e),u.current.value!==E.current){var n=document.createEvent("HTMLEvents");n.initEvent("change",!0,!1),u.current.dispatchEvent(n)}},ae=function(e){if(!r.readOnly){var n=e.which||e.keyCode,t,a,c;if(S.current=u.current.value,n===8||n===46||B.isIOS()&&n===127){if(t=p(),!t)return;a=t.begin,c=t.end,c-a===0&&(a=n!==46?re(a):c=I(a-1),c=n===46?I(c):c),T(a,c),Y(a,c-1),N(e),e.preventDefault()}else n===13?(_(e),N(e)):n===27&&(u.current.value=E.current,p(0,k()),N(e),e.preventDefault())}},le=function(e){if(!r.readOnly){var n=p();if(n){var t=e.which||e.keyCode,a,c,f,W;if(!(e.ctrlKey||e.altKey||e.metaKey||t<32)){if(t&&t!==13){if(n.end-n.begin!==0&&(T(n.begin,n.end),Y(n.begin,n.end-1)),a=I(n.begin-1),a<m.current&&(c=String.fromCharCode(t),d.current[a].test(c))){if(te(a),v.current[a]=c,P(),f=I(a),B.isAndroid()){var ie=function(){p(f)};setTimeout(ie,0)}else p(f);n.begin<=F.current&&(W=i())}e.preventDefault()}N(e),r.onComplete&&W&&r.onComplete({originalEvent:e,value:w()})}}}},T=function(e,n){var t;for(t=e;t<n&&t<m.current;t++)d.current[t]&&(v.current[t]=x(t))},P=function(){u.current&&(u.current.value=v.current.join(""))},k=function(e){K.current=!0;var n=u.current&&u.current.value,t=-1,a,c,f;for(a=0,f=0;a<m.current;a++)if(d.current[a]){for(v.current[a]=x(a);f++<n.length;)if(c=n.charAt(f-1),d.current[a].test(c)){v.current[a]=c,t=a;break}if(f>n.length){T(a+1,m.current);break}}else v.current[a]===n.charAt(f)&&f++,a<C.current&&(t=a);return e?P():t+1<C.current?r.autoClear||v.current.join("")===R.current?(u.current&&u.current.value&&(u.current.value=""),T(0,m.current)):P():(P(),u.current&&(u.current.value=u.current.value.substring(0,t+1))),C.current?a:b.current},ue=function(e){if(!r.readOnly){D.current=!0,clearTimeout(O.current);var n;u.current?E.current=u.current.value:E.current="",n=k()||0,O.current=setTimeout(function(){u.current===document.activeElement&&(P(),n===r.mask.replace("?","").length?p(0,n):p(n),z())},100),r.onFocus&&r.onFocus(e)}},se=function(e){A.current?ne(e):$(e)},$=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!r.readOnly){if(!n){var t=k(!0);p(t)}N(e),r.onComplete&&i()&&r.onComplete({originalEvent:e,value:w()})}},V=s.useCallback(function(){for(var o=[],e=0;e<v.current.length;e++){var n=v.current[e];d.current[e]&&n!==x(e)&&o.push(n)}return o.join("")},[x]),N=function(e){if(r.onChange){var n=r.unmask?V():e&&e.target.value;r.onChange({originalEvent:e,value:R.current!==n?n:"",stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},target:{name:r.name,id:r.id,value:R.current!==n?n:""}})}},z=function(){u.current&&u.current.value&&u.current.value.length>0?B.addClass(u.current,"p-filled"):B.removeClass(u.current,"p-filled")},q=function(e){var n;return u.current&&(r.value==null?u.current.value="":(u.current.value=r.value,n=k(e),setTimeout(function(){if(u.current)return P(),k(e)},10)),E.current=u.current.value),z(),n},J=s.useCallback(function(){return r.unmask?r.value!==V():R.current!==u.current.value&&u.current.value!==r.value},[r.unmask,r.value,V]),Q=function(){if(r.mask){d.current=[],C.current=r.mask.length,m.current=r.mask.length,b.current=null;var e={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};A.current=B.isChrome()&&B.isAndroid();for(var n=r.mask.split(""),t=0;t<n.length;t++){var a=n[t];a==="?"?(m.current--,C.current=t):e[a]?(d.current.push(new RegExp(e[a])),b.current===null&&(b.current=d.current.length-1),t<C.current&&(F.current=d.current.length-1)):d.current.push(null)}v.current=[];for(var c=0;c<n.length;c++){var f=n[c];f!=="?"&&(e[f]?v.current.push(x(c)):v.current.push(f))}R.current=v.current.join("")}};s.useImperativeHandle(g,function(){return{props:r,focus:function(){return B.focus(u.current)},getElement:function(){return u.current}}}),s.useEffect(function(){de.combinedRefs(u,g)},[u,g]),ge(function(){Q(),q()}),X(function(){Q(),p(q(!0)),r.unmask&&N()},[r.mask]),X(function(){J()&&q()},[J]);var ce=H.getOtherProps(r),oe=ee(r.className,U("root",{context:h}));return s.createElement(j,Z({ref:u,autoFocus:r.autoFocus,id:r.id,type:r.type,name:r.name,style:r.style,className:oe,value:r.value},ce,{placeholder:r.placeholder,size:r.size,maxLength:r.maxLength,tabIndex:r.tabIndex,disabled:r.disabled,invalid:r.invalid,readOnly:r.readOnly,onFocus:ue,onBlur:_,onKeyDown:ae,onKeyPress:le,onInput:se,onPaste:function(e){return $(e,!0)},required:r.required,tooltip:r.tooltip,tooltipOptions:r.tooltipOptions,pt:r.pt,unstyled:r.unstyled,__parentMetadata:{parent:M}}))}));G.displayName="InputMask";const Fe=()=>{const[y,g]=s.useState(),[h,r]=s.useState(),[u,b]=s.useState(),[F,d]=s.useState(),[v,m]=s.useState(),[S,D]=s.useState(),[E,K]=s.useState(),[C,R]=s.useState(),[O,A]=s.useState(),[M,L]=s.useState(),U=async()=>{try{const i=await axios.get(route("catalogos.informacion.empresa.detalle")),{status:x,data:w}=i;x===200&&p(w)}catch(i){console.error("Error al obtener cotizaciones:",i)}},p=i=>{};return s.useEffect(()=>{U()},[]),l.jsx(ve,{children:l.jsxs("div",{className:"card col-12",children:[l.jsx("div",{className:"grid m-1",children:l.jsx("div",{className:"col-10 text-center",children:l.jsx("h3",{children:"Detalle Empresa"})})}),l.jsx("div",{className:"col-12",children:l.jsx("div",{className:"card",children:l.jsxs(me,{legend:"Header",children:[l.jsxs("div",{className:"flex flex-wrap gap-3 p-fluid mt-2",children:[l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"nombre",className:"font-bold block mb-2",children:"Nombre"}),l.jsx(j,{inputId:"nombre",value:y,onChange:i=>g(i.target.value)})]}),l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"descripcion",className:"font-bold block mb-2",children:"Descripcion"}),l.jsx(j,{inputId:"descripcion",value:h,onChange:i=>r(i.target.value)})]})]}),l.jsx("div",{className:"flex flex-wrap gap-3 p-fluid mt-2",children:l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"direccion",className:"font-bold block mb-2",children:"Dirección"}),l.jsx(j,{inputId:"direccion",value:u,onChange:i=>b(i.target.value)})]})}),l.jsxs("div",{className:"flex flex-wrap gap-3 p-fluid mt-2",children:[l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"colonia",className:"font-bold block mb-2",children:"Colonia"}),l.jsx(j,{inputId:"colonia",value:F,onChange:i=>d(i.target.value)})]}),l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"cp",className:"font-bold block mb-2",children:"CP"}),l.jsx(j,{inputId:"cp",value:v,onChange:i=>m(i.target.value)})]}),l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"correo",className:"font-bold block mb-2",children:"Correo"}),l.jsx(j,{inputId:"correo",value:S,onChange:i=>D(i.target.value)})]})]}),l.jsxs("div",{className:"flex flex-wrap gap-3 p-fluid mt-2",children:[l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"telefonoA",className:"font-bold block mb-2",children:"Telefono 1"}),l.jsx(G,{id:"phone",mask:"(999) 999-9999",placeholder:"(99)-999999",value:E,onChange:i=>K(i.target.value)})]}),l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"cp",className:"font-bold block mb-2",children:"Telefono 2"}),l.jsx(G,{id:"phone",mask:"(999) 999-9999",placeholder:"(99)-999999",value:C,onChange:i=>R(i.target.value)})]}),l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"emergenciaA",className:"font-bold block mb-2",children:"Telefono Emergencia 1"}),l.jsx(j,{inputId:"emergenciaA",value:O,onChange:i=>A(i.target.value)})]}),l.jsxs("div",{className:"flex-auto",children:[l.jsx("label",{htmlFor:"emergenciaB",className:"font-bold block mb-2",children:"Telefono Emergencia 2"}),l.jsx(j,{inputId:"emergenciaB",value:M,onChange:i=>L(i.target.value)})]})]}),l.jsx("div",{className:"flex gap-3 m-4",children:l.jsx(pe,{severity:"success",label:"Guardar",className:"ml-auto"})})]})})})]})})};export{Fe as default};
