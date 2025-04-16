(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{6552:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin_pages/ajouterArticle",function(){return r(6527)}])},6527:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var l=r(4848),n=r(6540),a=r(7836);function s(){let[e,t]=(0,n.useState)({titre:"",annee:"",theme:"",resume:"",author_name:""}),[r,s]=(0,n.useState)(""),[o,i]=(0,n.useState)(null),u=r=>{let{name:l,value:n}=r.target;t({...e,[l]:n})},c=async r=>{r.preventDefault();try{let r=await fetch("".concat(a.env.NEXT_PUBLIC_API_URL,"/ajouter_article.php"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),l=await r.json();l.success?(s("Article and Author added successfully!"),t({titre:"",annee:"",theme:"",resume:"",author_name:""})):console.error("Error:",l.error)}catch(e){console.error("Error submitting form:",e)}},d=async()=>{if(!o){alert("Please select a file to upload");return}let e=new FormData;e.append("file",o);try{let t=await fetch("".concat(a.env.NEXT_PUBLIC_API_URL,"/upload_excel.php"),{method:"POST",body:e}),r=await t.json();r.success?s("Articles added from the Excel file!"):alert(r.error||"Error uploading the file")}catch(e){console.error("Error uploading the file:",e)}};return(0,l.jsx)("div",{className:"pt-5 w-full ml-40",children:(0,l.jsxs)("div",{className:"container mx-auto p-8 border bg-white rounded-2xl shadow-lg shadow-indigo-400/50",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold text-center mb-6",children:"Add New Article"}),r&&(0,l.jsx)("div",{className:"text-green-600 text-center mb-4",children:r}),(0,l.jsxs)("div",{className:"flex space-x-8",children:[(0,l.jsx)("div",{className:"w-1/2",children:(0,l.jsxs)("form",{onSubmit:c,className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-gray-700 font-medium mb-1",children:"Titre"}),(0,l.jsx)("input",{type:"text",name:"titre",value:e.titre,onChange:u,required:!0,className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-gray-700 font-medium mb-1",children:"Annee"}),(0,l.jsx)("input",{type:"number",name:"annee",value:e.annee,onChange:u,required:!0,className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-gray-700 font-medium mb-1",children:"Theme"}),(0,l.jsx)("input",{type:"number",name:"theme",value:e.theme,onChange:u,required:!0,className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-gray-700 font-medium mb-1",children:"R\xe9sum\xe9"}),(0,l.jsx)("textarea",{name:"resume",value:e.resume,onChange:u,required:!0,className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-gray-700 font-medium mb-1",children:"Author Name"}),(0,l.jsx)("input",{type:"text",name:"author_name",value:e.author_name,onChange:u,required:!0,className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),(0,l.jsx)("button",{"aria-label":"Submit",type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200",children:"Submit"})]})}),(0,l.jsxs)("div",{className:"w-1/2",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold text-center mb-4",children:"Upload Excel File"}),(0,l.jsx)("input",{type:"file",accept:".xlsx,.xls",onChange:e=>{i(e.target.files[0])},className:"mb-4 w-full"}),(0,l.jsx)("button",{"aria-label":"Upload File",onClick:d,className:"w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200",children:"Upload File"})]})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6552)),_N_E=e.O()}]);