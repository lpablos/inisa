import{r as c,j as e}from"./app-fec1f9ef.js";import{I as s}from"./inputtext.esm-406ddf7e.js";import{B as m}from"./button.esm-51328d7b.js";import{u as f}from"./index.esm-ed74fcbd.js";import"./ripple.esm-aa678d2b.js";import"./tooltip.esm-6b27fd4f.js";const v=({showTabla:d,dataDetalle:l,actualizarCliente:x,limpiarFormulario:n,modoForm:o,nuevoCliente:b})=>{const{register:a,handleSubmit:h,formState:{errors:i},reset:t}=f({defaultValues:{id:"",nombre:"",abreviacion:"",direccion:"",telefono:"",ext:""}});c.useEffect(()=>{if(l){const{data:r}=l;t(r)}else setData({})},[l]),c.useState(()=>{n&&setTimeout(()=>{t({id:"",nombre:"",abreviacion:"",direccion:"",telefono:"",ext:""})},800)},[n]);const u=r=>{o=="Actualizar"&&x(r),o=="Guardar"&&b(r)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex gap-3 mb-4",children:e.jsx(m,{label:"Mostrar Tabla",className:"ml-auto",onClick:()=>d()})}),e.jsx("form",{onSubmit:h(u),children:e.jsxs("div",{className:"card flex flex-wrap gap-4 p-fluid",children:[e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"nombre",children:"Nombre"}),e.jsx(s,{id:"nombre","aria-describedby":"nombre-help",...a("nombre",{required:"Valor requerido",minLength:{value:3,message:"Minimo 4 Caracteres"}}),invalid:!!i.nombre}),i.nombre&&e.jsx("small",{id:"nombre-help",className:"text-red-500",children:i.nombre.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"abreviacion",children:"Abreviación"}),e.jsx(s,{id:"abreviacion","aria-describedby":"abreviacion-help",...a("abreviacion",{minLength:{value:1,message:"Minimo 4 Caracteres"}}),invalid:!!i.abreviacion}),i.abreviacion&&e.jsx("small",{id:"abreviacion-help",className:"text-red-500",children:i.abreviacion.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"telefono",children:"Teléfono"}),e.jsx(s,{id:"telefono","aria-describedby":"telefono-help",...a("telefono",{minLength:{value:8,message:"Minimo 8 Caracteres"}}),invalid:!!i.telefono}),i.telefono&&e.jsx("small",{id:"telefono-help",className:"text-red-500",children:i.telefono.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"ext",children:"Extensión(s)"}),e.jsx(s,{id:"ext","aria-describedby":"ext-help",...a("ext",{minLength:{value:1,message:"Minimo 4 Caracteres"}}),invalid:!!i.ext}),i.ext&&e.jsx("small",{id:"ext-help",className:"text-red-500",children:i.ext.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"direccion",children:"Dirección(s)"}),e.jsx(s,{id:"direccion","aria-describedby":"direccion-help",...a("direccion",{minLength:{value:3,message:"Minimo 3 Caracteres"}}),invalid:!!i.ext}),i.direccionext&&e.jsx("small",{id:"direccion-help",className:"text-red-500",children:i.direccion.message})]}),e.jsx("div",{className:"mt-4 flex justify-end w-full",children:e.jsx(m,{type:"submit",severity:"success",label:"Guardar",className:"ml-auto"})})]})})]})},F=v;export{F as default};
