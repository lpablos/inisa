import{r as t,j as e}from"./app-fec1f9ef.js";import{I as s}from"./inputtext.esm-406ddf7e.js";import{B as m}from"./button.esm-51328d7b.js";import{u as f}from"./index.esm-ed74fcbd.js";import"./ripple.esm-aa678d2b.js";import"./tooltip.esm-6b27fd4f.js";const j=({showTabla:d,dataDetalle:l,actualizarProvedor:x,limpiarFormulario:o,modoForm:n,nuevoProvedor:b})=>{const{register:i,handleSubmit:h,formState:{errors:a},reset:c}=f({defaultValues:{id:"",nombre:"",abreviacion:"",direccion:"",telefono:"",colonia:""}});t.useEffect(()=>{if(l){const{data:r}=l;c(r)}else setData({})},[l]),t.useState(()=>{o&&setTimeout(()=>{c({id:"",nombre:"",abreviacion:"",direccion:"",telefono:"",colonia:""})},800)},[o]);const u=r=>{n=="Actualizar"&&x(r),n=="Guardar"&&b(r)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex gap-3 mb-4",children:e.jsx(m,{label:"Mostrar Tabla",className:"ml-auto",onClick:()=>d()})}),e.jsx("form",{onSubmit:h(u),children:e.jsxs("div",{className:"card flex flex-wrap gap-4 p-fluid",children:[e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"nombre",children:"Nombre"}),e.jsx(s,{id:"nombre","aria-describedby":"username-help",...i("nombre",{required:"Valor requerido",minLength:{value:4,message:"Minimo 4 Caracteres"}}),invalid:!!a.nombre}),a.nombre&&e.jsx("small",{id:"username-help",className:"text-red-500",children:a.nombre.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"abreviacion",children:"Abreviación"}),e.jsx(s,{id:"abreviacion","aria-describedby":"abreviacion-help",...i("abreviacion",{minLength:{value:2,message:"Mínimo 2 Caracteres"}})}),a.abreviacion&&e.jsx("small",{id:"abreviacion-help",className:"text-red-500",children:a.abreviacion.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"telefono",children:"Teléfono"}),e.jsx(s,{id:"telefono","aria-describedby":"telefono-help",...i("telefono",{minLength:{value:8,message:"Mínimo 8 Caracteres"}})}),a.telefono&&e.jsx("small",{id:"telefono-help",className:"text-red-500",children:a.telefono.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"colonia",children:"Colonia"}),e.jsx(s,{id:"colonia","aria-describedby":"colonia-help",...i("colonia",{minLength:{value:2,message:"Mínimo 2 Caracteres"}})}),a.colonia&&e.jsx("small",{id:"colonia-help",className:"text-red-500",children:a.colonia.message})]}),e.jsxs("div",{className:"flex-auto",children:[e.jsx("label",{htmlFor:"direccion",children:"Dirección"}),e.jsx(s,{id:"direccion","aria-describedby":"direccion-help",...i("direccion",{minLength:{value:2,message:"Mínimo 2 Caracteres"}})}),a.direccion&&e.jsx("small",{id:"direccion-help",className:"text-red-500",children:a.direccion.message})]}),e.jsx("div",{className:"mt-4 flex justify-end w-full",children:e.jsx(m,{type:"submit",severity:"success",label:"Guardar",className:"ml-auto"})})]})})]})},C=j;export{C as default};
