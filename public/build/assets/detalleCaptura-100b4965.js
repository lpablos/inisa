import{r,j as i}from"./app-827613ca.js";import{L as d}from"./layout-8154201a.js";import u from"./DetalleCotizacionTabla-9aef7e01.js";import h from"./DialogDetalleCotizacion-60119ef0.js";import{B as e}from"./button.esm-0df79c86.js";import v from"./BusquedaConceptos-d5d85163.js";import j from"./ExcelPersonalizador-2ff1171d.js";import f from"./VistaPreviaCotizacion-b68919e2.js";import"./ripple.esm-dbab71b1.js";import"./index.esm-52556c40.js";import"./inputswitch.esm-ce8270e5.js";import"./tooltip.esm-146c7467.js";import"./confirmdialog.esm-fe19c1d8.js";import"./dialog.esm-57c7087f.js";import"./overlayservice.esm-34ff3081.js";import"./toast.esm-fe7981d5.js";import"./index.esm-f3d54434.js";import"./purify.es-851ec8c9.js";import"./progressspinner.esm-c5b83609.js";import"./FormItemDetalle-714d39e9.js";import"./inputnumber.esm-90bc6df8.js";import"./index.esm-36d8a129.js";import"./inputtext.esm-cc21ba52.js";import"./divider.esm-c9c78139.js";import"./dropdown.esm-d4661825.js";import"./editor.esm-f215848e.js";import"./badge.esm-25e8e34e.js";import"./TableConceptosGral-b89540c3.js";import"./column.esm-b20e1b3d.js";import"./index.esm-71e4f6b0.js";import"./index.esm-c234c44d.js";import"./index.esm-3a412f89.js";import"./index.esm-2facf168.js";const _=({cotizacion:o,detalle:t})=>{var m;const[c,a]=r.useState(!1),[l,p]=r.useState(!1),[n,s]=r.useState(!1),x=()=>{s(!0)};return i.jsx(d,{children:i.jsx("div",{className:"grid",children:i.jsxs("div",{className:"card col-12",children:[i.jsxs("div",{className:"grid m-1",children:[i.jsx("div",{className:"col-10 text-center",children:i.jsx("h3",{children:"Detalle de la cotización"})}),i.jsx("div",{className:"col-2 text-right",children:i.jsx(e,{icon:"pi pi-history",rounded:!0,severity:"help","aria-label":"Regresar Cotizaciones",tooltip:"Regresar Cotizaciones",tooltipOptions:{position:"left"},onClick:()=>window.location.href=route("cotizacion.show.index")})}),i.jsxs("div",{className:"col-9 text-center",children:[i.jsxs("p",{children:["COMPAÑIA:",(m=t==null?void 0:t.cliente)==null?void 0:m.nombre]}),i.jsxs("p",{children:["Título: ",t==null?void 0:t.titulo]})]}),i.jsxs("div",{className:"col-3 text-right",children:[i.jsx(h,{cotizacion:o,detalleItem:t,modo:"Registrar",recargarListado:x}),i.jsx(v,{cotizacion:o,setReloadList:s}),i.jsx(e,{severity:"success",size:"small",icon:"pi pi-file-excel",tooltip:"Vista Previa Excel",tooltipOptions:{position:"bottom",showDelay:200,hideDelay:300},className:"p-button-rounded p-button-info p-button-sm mr-1",onClick:()=>p(!0)}),i.jsx(e,{severity:"success",size:"small",icon:"pi pi-file-pdf",tooltip:"Vista Previa PDF",tooltipOptions:{position:"bottom",showDelay:200,hideDelay:300},className:"p-button-rounded p-button-info p-button-sm mr-1",onClick:()=>a(!0)})]})]}),i.jsx(u,{cotizacion:o,detalle:t,reloadList:n,onRecargaCompleta:()=>s(!1)}),i.jsx(f,{identyCotizacion:o,vistraPreviaPDF:c,setVistraPreviaPDF:a}),i.jsx(j,{identyCotizacion:o,vistaPreviaExcel:l,setVistaPreviaExcel:p})]})})})};export{_ as default};
