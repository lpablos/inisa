import{r as i,P as h,c as v}from"./app-5820f2fc.js";import{C as b,u as x,a as z}from"./iconbase.esm-a7b8798a.js";var P={root:function(t){var e=t.props,r=t.horizontal,n=t.vertical;return v("p-divider p-component p-divider-".concat(e.layout," p-divider-").concat(e.type),{"p-divider-left":r&&(!e.align||e.align==="left"),"p-divider-right":r&&e.align==="right","p-divider-center":r&&e.align==="center"||n&&(!e.align||e.align==="center"),"p-divider-top":n&&e.align==="top","p-divider-bottom":n&&e.align==="bottom"},e.className)},content:"p-divider-content"},D=`
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`,N={root:function(t){var e=t.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},l=b.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:P,styles:D,inlineStyles:N}}),E=i.forwardRef(function(a,t){var e=x(),r=i.useContext(h),n=l.getProps(a,r),o=l.setMetaData({props:n}),d=o.ptm,s=o.cx,c=o.sx,f=o.isUnstyled;z(l.css.styles,f,{name:"divider"});var p=i.useRef(null),u=n.layout==="horizontal",m=n.layout==="vertical";i.useImperativeHandle(t,function(){return{props:n,getElement:function(){return p.current}}});var y=e({ref:p,style:c("root"),className:v(n.className,s("root",{horizontal:u,vertical:m})),"aria-orientation":n.layout,role:"separator"},l.getOtherProps(n),d("root")),g=e({className:s("content")},d("content"));return i.createElement("div",y,i.createElement("div",g,n.children))});E.displayName="Divider";export{E as D};
//# sourceMappingURL=divider.esm-5ccc7119.js.map
