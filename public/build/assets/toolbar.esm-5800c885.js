import{r as t,P,O as s,c as E}from"./app-5820f2fc.js";import{C as N,u as T,a as h}from"./iconbase.esm-a7b8798a.js";var o=N.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0},css:{classes:{root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},styles:`
        @layer primereact {
            .p-toolbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            
            .p-toolbar-group-start,
            .p-toolbar-group-center,
            .p-toolbar-group-end {
                display: flex;
                align-items: center;
            }
            
            .p-toolbar-group-left,
            .p-toolbar-group-right {
                display: flex;
                align-items: center;
            }
        }
        `}}),w=t.memo(t.forwardRef(function(c,m){var r=T(),i=t.useContext(P),e=o.getProps(c,i),p=t.useRef(null),u=s.getJSXElement(e.left||e.start,e),d=s.getJSXElement(e.center,e),g=s.getJSXElement(e.right||e.end,e),l=o.setMetaData({props:e}),a=l.ptm,n=l.cx,b=l.isUnstyled;h(o.css.styles,b,{name:"toolbar"}),t.useImperativeHandle(m,function(){return{props:e,getElement:function(){return p.current}}});var f=r({className:n("start")},a("start")),v=r({className:n("center")},a("center")),y=r({className:n("end")},a("end")),x=r({id:e.id,ref:p,style:e.style,className:E(e.className,n("root")),role:"toolbar"},o.getOtherProps(e),a("root"));return t.createElement("div",x,t.createElement("div",f,u),t.createElement("div",v,d),t.createElement("div",y,g))}));w.displayName="Toolbar";export{w as T};
//# sourceMappingURL=toolbar.esm-5800c885.js.map
