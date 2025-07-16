import{c as v,r as a,P as I,O as g,I as C}from"./app-19db06cb.js";import{C as M,u as _,a as N}from"./iconbase.esm-8ede90bc.js";import{C as D}from"./index.esm-2b3c0470.js";import{a as R,E as T,I as U}from"./toast.esm-0ed1f3f5.js";function f(){return f=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f.apply(this,arguments)}function c(t){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(t)}function B(t,e){if(c(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(c(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function J(t){var e=B(t,"string");return c(e)==="symbol"?e:String(e)}function d(t,e,n){return e=J(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=M.extend({defaultProps:{__TYPE:"Message",id:null,className:null,style:null,text:null,icon:null,severity:"info",content:null,children:void 0},css:{classes:{root:function(e){var n=e.props.severity;return v("p-inline-message p-component",d({},"p-inline-message-".concat(n),n))},icon:"p-inline-message-icon",text:"p-inline-message-text"},styles:`
        @layer primereact {
            .p-inline-message {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                vertical-align: top;
            }

            .p-inline-message-icon {
                flex-shrink: 0;
            }
            
            .p-inline-message-icon-only .p-inline-message-text {
                visibility: hidden;
                width: 0;
            }
            
            .p-fluid .p-inline-message {
                display: flex;
            }        
        }
        `}});function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?b(Object(n),!0).forEach(function(r){d(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var k=a.memo(a.forwardRef(function(t,e){var n=_(),r=a.useContext(I),s=l.getProps(t,r),y=a.useRef(null),m=l.setMetaData({props:s}),p=m.ptm,u=m.cx,P=m.isUnstyled;N(l.css.styles,P,{name:"message"});var O=function(){if(s.content)return g.getJSXElement(s.content,s);var h=g.getJSXElement(s.text,s),i=n({className:u("icon")},p("icon")),o=s.icon;if(!o)switch(s.severity){case"info":o=a.createElement(U,i);break;case"warn":o=a.createElement(T,i);break;case"error":o=a.createElement(R,i);break;case"success":o=a.createElement(D,i);break}var w=C.getJSXIcon(o,X({},i),{props:s}),S=n({className:u("text")},p("text"));return a.createElement(a.Fragment,null,w,a.createElement("span",S,h))};a.useImperativeHandle(e,function(){return{props:s,getElement:function(){return y.current}}});var x=O(),E=n({className:v(s.className,u("root")),style:s.style,role:"alert","aria-live":"polite","aria-atomic":"true"},l.getOtherProps(s),p("root"));return a.createElement("div",f({id:s.id,ref:y},E),x)}));k.displayName="Message";export{k as M};
//# sourceMappingURL=message.esm-58f5e4cd.js.map
