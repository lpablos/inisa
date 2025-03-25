import{r as t,j as e,a as T}from"./app-fec1f9ef.js";import{B as S}from"./button.esm-51328d7b.js";import{D as G}from"./dialog.esm-a65c7f4e.js";import M from"./TableConceptosGral-e60eb78b.js";import{I as N}from"./inputtext.esm-406ddf7e.js";import{P as $}from"./progressspinner.esm-52c670a3.js";import{D as y}from"./dropdown.esm-75bb9a6d.js";import"./ripple.esm-aa678d2b.js";import"./tooltip.esm-6b27fd4f.js";import"./index.esm-e4f82beb.js";import"./column.esm-899b1aad.js";import"./inputnumber.esm-788907ab.js";import"./index.esm-212e446d.js";import"./index.esm-0c330de1.js";import"./index.esm-cac10fb5.js";import"./index.esm-da5aa072.js";import"./overlayservice.esm-50b87a58.js";import"./index.esm-54f6b121.js";import"./index.esm-0e6a25a9.js";import"./confirmdialog.esm-0e6d0038.js";import"./toast.esm-75b1e22d.js";import"./purify.es-851ec8c9.js";const de=({cotizacion:m,setReloadList:w})=>{const[a,l]=t.useState(!1),[r,u]=t.useState(""),[d,p]=t.useState(!1),[f,h]=t.useState([]),[E,D]=t.useState(0),[x,g]=t.useState(""),[j,k]=t.useState(null),[F,H]=t.useState([{name:"Ninguno",value:0},{name:"Captura Tomo",value:1},{name:"Listar Tomos",value:2}]),[L,A]=t.useState([]),[n,B]=t.useState(0),[b,q]=t.useState(""),[v,I]=t.useState(null),P=o=>{const s=o.target.value;u(s),s.length<10?g("El concepto debe tener al menos 15 caracteres."):g("")},R=async()=>{p(!0),setTimeout(()=>{p(!1)},2e3);try{const o=await T.post(`${route("buscador.general.concepto")}`,{concepto:r});if(o.status===200){const{data:s,mensaje:C,registros:i}=o.data;h(s),D(i)}}catch(o){console.log("Este dato ",o),alert("Error")}},z=async()=>{await T.get(`${route("cotizacion.list.tomos",{identy:j})}`).then(o=>{const{data:s,status:C}=o;if(C==200){const i=s.map(c=>({id:c.id,name:c.PDA+" - "+c.descripcion}));A(i)}})},V=o=>{alert("Validacion"),console.log("Evento recibido del hijo:",o)};return t.useEffect(()=>{a&&z()},[a]),t.useEffect(()=>{k(m)},[m]),e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"mr-1",icon:"pi pi-search",rounded:!0,"aria-label":"Search",tooltip:"Busqueda Conceptos",tooltipOptions:{position:"left"},onClick:()=>l(!0)}),e.jsxs(G,{header:"Busqueda de Conceptos",visible:a,maximizable:!0,style:{width:"80vw"},onHide:()=>{a&&l(!1)},children:[e.jsxs("div",{class:"formgrid grid",children:[e.jsxs("div",{class:"field col-3",children:[e.jsx("label",{htmlFor:"defineTomo",className:"font-bold block mb-2",children:"Definición de Tomo"}),e.jsx(y,{value:n,onChange:o=>B(o.value),options:F,optionLabel:"name",editable:!0,placeholder:"Selecione un tomo",className:"w-full md:w-14rem"})]}),e.jsxs("div",{class:"field col-9",children:[n==1&&e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"mile",className:"font-bold block mb-2",children:"Captura un Tomo"}),e.jsx(N,{value:b,onChange:o=>q(o.target.value),className:"w-full"})]}),n==2&&e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"selectTomo",className:"font-bold block mb-2",children:"Selecciona un Tomo"}),e.jsx(y,{value:v,onChange:o=>I(o.value),options:L,optionLabel:"name",editable:!0,placeholder:"Seleccione",className:"w-full"})]})]})]}),e.jsx("div",{className:"flex justify-content-center m-4",children:e.jsxs("div",{className:"p-inputgroup flex-1",children:[e.jsx(N,{placeholder:"Captura el concepto a buscar",className:"p-inputtext-lg",value:r,onChange:o=>P(o)}),e.jsx(S,{icon:"pi pi-search",onClick:()=>R(),disabled:r.length<10})]})}),x&&e.jsx("div",{className:"flex justify-content-center m-4",children:e.jsx("div",{className:"p-inputgroup flex-1",children:e.jsx("small",{style:{color:"red"},children:x})})}),d&&e.jsx("div",{className:"flex justify-content-center m-4",children:e.jsx($,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s"})}),d==!1&&f.length>0&&e.jsx(M,{listadoConceptos:f,totalesAsc:E,seleccionTomo:v,perteneceTomo:n,capturaTomo:b,identyCotizacion:j,setReloadList:w,setRegistros:h,validacionConcepto:V,setVisibleModal:l,setConceptoInput:u})]})]})};export{de as default};
