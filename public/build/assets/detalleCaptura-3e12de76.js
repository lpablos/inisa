import{r,j as i}from"./app-a53c6d67.js";import{L as d}from"./layout-27d76211.js";import u from"./DetalleCotizacionTabla-2a671727.js";import h from"./DialogDetalleCotizacion-1d94dc9a.js";import{B as e}from"./button.esm-3069fb79.js";import v from"./BusquedaConceptos-abe6f594.js";import j from"./ExcelPersonalizador-0de0b3a5.js";import f from"./VistaPreviaCotizacion-8b9d1875.js";import"./ripple.esm-30788c76.js";import"./index.esm-f432c0c3.js";import"./inputswitch.esm-0feba996.js";import"./tooltip.esm-1533f36e.js";import"./confirmdialog.esm-5f6058a4.js";import"./dialog.esm-2dcf3964.js";import"./overlayservice.esm-dbb0b4ec.js";import"./toast.esm-f97787cf.js";import"./index.esm-765e4459.js";import"./purify.es-851ec8c9.js";import"./progressspinner.esm-0c33138d.js";import"./FormItemDetalle-5a083559.js";import"./inputnumber.esm-f9f44864.js";import"./index.esm-94aabc8e.js";import"./inputtext.esm-073ef6be.js";import"./divider.esm-71feb2c6.js";import"./dropdown.esm-a3b7d4d7.js";import"./editor.esm-7036d5ce.js";import"./badge.esm-2cb2b51c.js";import"./TableConceptosGral-0e2897c7.js";import"./datatable.esm-57f9a344.js";import"./index.esm-5ca4f75a.js";import"./index.esm-e8c63afb.js";import"./index.esm-db8265bd.js";import"./index.esm-332f4df9.js";import"./column.esm-ed9a5ea1.js";const $=({cotizacion:o,detalle:t})=>{var m;const[c,a]=r.useState(!1),[l,p]=r.useState(!1),[n,s]=r.useState(!1),x=()=>{s(!0)};return i.jsx(d,{children:i.jsx("div",{className:"grid",children:i.jsxs("div",{className:"card col-12",children:[i.jsxs("div",{className:"grid m-1",children:[i.jsx("div",{className:"col-10 text-center",children:i.jsx("h3",{children:"Detalle de la cotización"})}),i.jsx("div",{className:"col-2 text-right",children:i.jsx(e,{icon:"pi pi-history",rounded:!0,severity:"help","aria-label":"Regresar Cotizaciones",tooltip:"Regresar Cotizaciones",tooltipOptions:{position:"left"},onClick:()=>window.location.href=route("cotizacion.show.index")})}),i.jsxs("div",{className:"col-9 text-center",children:[i.jsxs("p",{children:["COMPAÑIA:",(m=t==null?void 0:t.cliente)==null?void 0:m.nombre]}),i.jsxs("p",{children:["Título: ",t==null?void 0:t.titulo]})]}),i.jsxs("div",{className:"col-3 text-right",children:[i.jsx(h,{cotizacion:o,detalleItem:t,modo:"Registrar",recargarListado:x}),i.jsx(v,{cotizacion:o,setReloadList:s}),i.jsx(e,{severity:"success",size:"small",icon:"pi pi-file-excel",tooltip:"Vista Previa Excel",tooltipOptions:{position:"bottom",showDelay:200,hideDelay:300},className:"p-button-rounded p-button-info p-button-sm mr-1",onClick:()=>p(!0)}),i.jsx(e,{severity:"success",size:"small",icon:"pi pi-file-pdf",tooltip:"Vista Previa PDF",tooltipOptions:{position:"bottom",showDelay:200,hideDelay:300},className:"p-button-rounded p-button-info p-button-sm mr-1",onClick:()=>a(!0)})]})]}),i.jsx(u,{cotizacion:o,detalle:t,reloadList:n,onRecargaCompleta:()=>s(!1)}),i.jsx(f,{identyCotizacion:o,vistraPreviaPDF:c,setVistraPreviaPDF:a}),i.jsx(j,{identyCotizacion:o,vistaPreviaExcel:l,setVistaPreviaExcel:p})]})})})};export{$ as default};
