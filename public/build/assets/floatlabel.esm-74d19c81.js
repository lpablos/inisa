import{r as e,P as u,O as m,c as d}from"./app-5cafe52a.js";import{C as h,u as x,a as y}from"./ripple.esm-820e5f58.js";var v={root:"p-float-label"},g=`
@layer primereact {
    .p-float-label {
        display: block;
        position: relative;
    }
    
    .p-float-label label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        margin-top: -.5rem;
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
    }
    
    .p-float-label:has(textarea) label {
        top: 1rem;
    }
    
    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label,
    .p-float-label:has(input:-webkit-autofill) label,
    .p-float-label:has(textarea:focus) label,
    .p-float-label:has(textarea.p-filled) label,
    .p-float-label:has(.p-inputwrapper-focus) label,
    .p-float-label:has(.p-inputwrapper-filled) label {
        top: -.75rem;
        font-size: 12px;
    }
    
    .p-float-label .p-placeholder,
    .p-float-label input::placeholder,
    .p-float-label .p-inputtext::placeholder {
        opacity: 0;
        transition-property: all;
        transition-timing-function: ease;
    }
    
    .p-float-label .p-focus .p-placeholder,
    .p-float-label input:focus::placeholder,
    .p-float-label .p-inputtext:focus::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
    }
}`,a=h.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:v,styles:g}}),P=e.memo(e.forwardRef(function(s,l){var p=x(),r=e.useContext(u),t=a.getProps(s,r),n=e.useRef(l),o=a.setMetaData({props:t}),i=o.ptm,f=o.cx,c=o.isUnstyled;y(a.css.styles,c,{name:"floatlabel"}),e.useEffect(function(){m.combinedRefs(n,l)},[n,l]);var b=p({ref:n,className:d(f("root"))},a.getOtherProps(t),i("root"));return e.createElement("span",b,t.children)}));P.displayName="FloatLabel";export{P as F};
