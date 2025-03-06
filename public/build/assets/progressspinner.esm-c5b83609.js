import{r as e,P as y,c as k}from"./app-827613ca.js";import{C as h,u as v,a as P}from"./ripple.esm-dbab71b1.js";var x={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},S=`
@layer primereact {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    
    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    
    .p-progress-spinner-svg {
        animation: p-progress-spinner-rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    
    .p-progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: #d62d20;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
`,b={spinner:function(o){var r=o.props;return{animationDuration:r.animationDuration}}},t=h.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:x,styles:S,inlineStyles:b}}),E=e.memo(e.forwardRef(function(p,o){var r=v(),c=e.useContext(y),n=t.getProps(p,c),l=e.useRef(null),s=t.setMetaData({props:n}),a=s.ptm,i=s.cx,m=s.sx,d=s.isUnstyled;P(t.css.styles,d,{name:"progressspinner"}),e.useImperativeHandle(o,function(){return{props:n,getElement:function(){return l.current}}});var g=r({id:n.id,ref:l,style:n.style,className:k(n.className,i("root")),role:"progressbar","aria-busy":!0},t.getOtherProps(n),a("root")),f=r({className:i("spinner"),viewBox:"25 25 50 50",style:m("spinner")},a("spinner")),u=r({className:i("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,strokeWidth:n.strokeWidth,strokeMiterlimit:"10"},a("circle"));return e.createElement("div",g,e.createElement("svg",f,e.createElement("circle",u)))}));E.displayName="ProgressSpinner";export{E as P};
