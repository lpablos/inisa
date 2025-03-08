import{j as e,r as c,G as w}from"./app-827613ca.js";import{B as u}from"./button.esm-0df79c86.js";import{I as j}from"./InputError-18b3a426.js";import{I as b}from"./InputLabel-995bcd52.js";import{D as N}from"./dialog.esm-57c7087f.js";import{I as D}from"./inputtext.esm-cc21ba52.js";import"./ripple.esm-dbab71b1.js";import"./tooltip.esm-146c7467.js";import"./index.esm-52556c40.js";function d({className:r="",disabled:s,children:t,...o}){return e.jsx(u,{...o,className:`bg-red-600 border border-transparent rounded-md font-medium text-white capitalize tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:t})}function v({type:r="button",className:s="",disabled:t,children:o,...a}){return e.jsx(u,{...a,type:r,className:`bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+s,disabled:t,children:o})}function P({className:r=""}){const[s,t]=c.useState(!1),o=c.useRef(),{data:a,setData:m,delete:p,processing:f,reset:i,errors:x}=w({password:""}),g=()=>{t(!0)},y=n=>{n.preventDefault(),p(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>o.current.focus(),onFinish:()=>i()})},l=()=>{t(!1),i()},h=e.jsx("h2",{className:"text-lg font-medium text-gray-900 pl-4 pt-2 mb-0",children:"Are you sure you want to delete your account?"});return e.jsxs("section",{className:`space-y-6 ${r}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(d,{onClick:g,className:"mt-2",children:"Delete Account"}),e.jsx(N,{className:"px-6",header:h,visible:s,style:{width:"50vw"},onHide:()=>t(!1),children:e.jsxs("form",{onSubmit:y,className:"px-4",children:[e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),e.jsxs("div",{className:"mt-4",children:[e.jsx(b,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(D,{id:"password",type:"password",name:"password",ref:o,value:a.password,onChange:n=>m("password",n.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(j,{message:x.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(v,{onClick:l,children:"Cancel"}),e.jsx(d,{className:"ml-3",disabled:f,children:"Delete Account"})]})]})})]})}export{P as default};
