import{j as t,r as e,a as D}from"./app-827613ca.js";import{D as a}from"./DashboardInfoCard-703df147.js";import{L as U}from"./layout-8154201a.js";import w from"./DialogoCat-1b923606.js";import{T as z}from"./toast.esm-fe7981d5.js";import{P as I}from"./progressspinner.esm-c5b83609.js";import"./button.esm-0df79c86.js";import"./ripple.esm-dbab71b1.js";import"./tooltip.esm-146c7467.js";import"./index.esm-52556c40.js";import"./inputswitch.esm-ce8270e5.js";import"./dialog.esm-57c7087f.js";import"./TablasCatalogos-0050bde1.js";import"./column.esm-b20e1b3d.js";import"./inputnumber.esm-90bc6df8.js";import"./index.esm-36d8a129.js";import"./inputtext.esm-cc21ba52.js";import"./index.esm-71e4f6b0.js";import"./dropdown.esm-d4661825.js";import"./overlayservice.esm-34ff3081.js";import"./index.esm-f3d54434.js";import"./index.esm-c234c44d.js";import"./index.esm-3a412f89.js";import"./index.esm-2facf168.js";import"./FormularioProvedor-32d578e1.js";import"./index.esm-aa29f3a7.js";import"./FormularioDepartamento-8d5d32d5.js";import"./FormularioClientes-c3e036e7.js";import"./FormularioUnidadMedida-e530580c.js";import"./FormularioUsuario-0ca0632e.js";import"./floatlabel.esm-f86d6089.js";import"./FormularioEmpresa-235e7f76.js";import"./ConfirmarEliminacion-74350853.js";import"./avatar.esm-f2a5e05f.js";import"./FormularioMoneda-0ad008aa.js";import"./FormularioStatus-c63dceff.js";function L({title:u,value:r,icon:l="",iconColor:i="",descriptionValue:c="",descriptionText:o="",clickOpt:x,valueTitle:p="",link:d="/"}){const m=`pi pi-${l} text-${i}-500 text-xl`,C=`flex align-items-center justify-content-center bg-${i}-100 border-round`;return t.jsx("div",{className:"col-12 lg:col-6 xl:col-3",children:t.jsxs("div",{className:"card mb-0",children:[t.jsxs("div",{className:"flex justify-content-between mb-3",children:[t.jsxs("div",{children:[t.jsx("span",{className:"block text-500 font-medium mb-3",children:u}),t.jsx("div",{className:"text-900 font-medium text-xl",children:r})]}),t.jsx("div",{className:C,style:{width:"2.5rem",height:"2.5rem"},children:t.jsx("i",{className:m})})]}),t.jsx("span",{className:"text-green-500 font-medium",children:c}),t.jsxs("span",{className:"text-500",children:[" ",o]}),t.jsx("div",{className:"mt-3 flex flex-column align-items-center",children:t.jsx("a",{href:d,rel:"noopener noreferrer",className:"p-button",children:p})})]})})}const Nt=u=>{const r=e.useRef(null),[l,i]=e.useState(!1),[c,o]=e.useState(null),[x,p]=e.useState(0),[d,m]=e.useState(0),[C,g]=e.useState(0),[f,j]=e.useState(0),[v,T]=e.useState(0),[$,h]=e.useState(0),[S,N]=e.useState(0),[B,k]=e.useState(0),[E,y]=e.useState(0),[F,O]=e.useState(0),[b,M]=e.useState(0),P=async()=>{i(!0);try{setTimeout(async()=>{const n=await D.get(route("catalogo.resumen.catalogos.asc"));console.log("Este es el detalle",n);const{data:s,status:R}=n;R===200&&(p(s.CatCliente),m(s.CatDepartamento),g(s.CatEmpresa),j(s.CatEstatu),T(s.CatMoneda),h(s.CatPrioridad),N(s.CatProvedor),k(s.CatTipoServicio),y(s.CatUnidadMedida),O(s.Cotizacion),M(s.User)),i(!1)},800)}catch(n){i(!1),console.error(n),r.current.show({severity:"error",summary:"Error",detail:"No se logro obtener el resumen de estadisticos",life:3e3})}};return e.useEffect(()=>{P()},[]),t.jsxs(U,{children:[l&&t.jsx("div",{className:"flex justify-content-center",children:t.jsx(I,{})}),l===!1&&t.jsxs("div",{className:"grid",children:[t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Provedores",valueTitle:"provedores",value:S+" Registros",icon:"tags",iconColor:"purple",clickOpt:o}),t.jsx(a,{title:"Departamentos",valueTitle:"departamentos",value:d+" Registros",icon:"tags",iconColor:"purple",clickOpt:o}),t.jsx(L,{title:"Clientes",valueTitle:"clientes",value:x+" Registros",icon:"tags",iconColor:"purple",clickOpt:o,link:route("catalogo.clientes.asociados.index")}),t.jsx(a,{title:"Unidades de medida",valueTitle:"unidadesMedidas",value:E+" Registros",icon:"tags",iconColor:"purple",clickOpt:o}),t.jsx(a,{title:"Tipos de Monedas",valueTitle:"tiposMonedas",value:v+" Registros",icon:"tags",iconColor:"purple",clickOpt:o}),t.jsx(a,{title:"Tipos de Status",valueTitle:"tiposStatus",value:f+" Registros",icon:"tags",iconColor:"purple",clickOpt:o}),t.jsx(a,{title:"Usuarios",valueTitle:"usuarios",value:b+" Registros",icon:"tags",iconColor:"purple",clickOpt:o}),t.jsx(a,{title:"Datos de la empresa",valueTitle:"datosEmpresa",icon:"tags",iconColor:"purple",clickOpt:o})]}),t.jsx(w,{tpOperacion:c,setOperacion:o})]}),t.jsx("div",{className:"flex justify-content-center",children:t.jsx(z,{ref:r})})]})};export{Nt as default};
