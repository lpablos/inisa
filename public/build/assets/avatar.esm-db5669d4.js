import{r as o,P as T,D as $,c as A,O as h,I as z}from"./app-6c82f11e.js";import{C as U,u as k,a as H}from"./iconbase.esm-c62f15b0.js";function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function M(e,t){if(p(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(p(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function B(e){var t=M(e,"string");return p(t)==="symbol"?t:String(t)}function q(e,t,r){return t=B(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}function J(e){if(Array.isArray(e))return e}function K(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,i,c,s=[],l=!0,m=!1;try{if(i=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(v){m=!0,a=v}finally{try{if(!l&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(m)throw a}}return s}}function E(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function X(e,t){if(e){if(typeof e=="string")return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e,t){return J(e)||K(e,t)||X(e,t)||L()}var W={root:function(t){var r=t.props,n=t.state;return A("p-avatar p-component",{"p-avatar-image":h.isNotEmpty(r.image)&&!n.imageFailed,"p-avatar-circle":r.shape==="circle","p-avatar-lg":r.size==="large","p-avatar-xl":r.size==="xlarge","p-avatar-clickable":!!r.onClick})},label:"p-avatar-text",icon:"p-avatar-icon"},Y=`
@layer primereact {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
    
    .p-avatar.p-avatar-image {
        background-color: transparent;
    }
    
    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }
    
    .p-avatar.p-avatar-circle img {
        border-radius: 50%;
    }
    
    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }
    
    .p-avatar img {
        width: 100%;
        height: 100%;
    }
    
    .p-avatar-clickable {
        cursor: pointer;
    }
}
`,y=U.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:W,styles:Y}});function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(n){q(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Q=o.forwardRef(function(e,t){var r=k(),n=o.useContext(T),a=y.getProps(e,n),i=o.useRef(null),c=o.useState(!1),s=P(c,2),l=s[0],m=s[1],v=o.useState(!1),S=P(v,2),w=S[0],_=S[1],b=y.setMetaData({props:a,state:{imageFailed:l,nested:w}}),f=b.ptm,d=b.cx,I=b.isUnstyled;H(y.css.styles,I,{name:"avatar"});var x=function(){if(h.isNotEmpty(a.image)&&!l){var u=r({src:a.image,onError:N},f("image"));return o.createElement("img",O({alt:a.imageAlt},u))}else if(a.label){var D=r({className:d("label")},f("label"));return o.createElement("span",D,a.label)}else if(a.icon){var F=r({className:d("icon")},f("icon"));return z.getJSXIcon(a.icon,G({},F),{props:a})}return null},N=function(u){a.imageFallback==="default"?a.onImageError||(m(!0),u.target.src=null):u.target.src=a.imageFallback,a.onImageError&&a.onImageError(u)};o.useEffect(function(){var g=$.isAttributeEquals(i.current.parentElement,"data-pc-name","avatargroup");_(g)},[]),o.useImperativeHandle(t,function(){return{props:a,getElement:function(){return i.current}}});var R=r({ref:i,style:a.style,className:A(a.className,d("root",{imageFailed:l}))},y.getOtherProps(a),f("root")),C=a.template?h.getJSXElement(a.template,a):x();return o.createElement("div",R,C,a.children)});Q.displayName="Avatar";export{Q as A};
//# sourceMappingURL=avatar.esm-db5669d4.js.map
