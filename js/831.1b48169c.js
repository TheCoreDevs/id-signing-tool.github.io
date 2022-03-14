(self["webpackChunkid_whitelist_site"]=self["webpackChunkid_whitelist_site"]||[]).push([[831],{3675:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>J});t(5363),t(7768),t(2100);var a=t(3673),n=t(2323),s=t(1959),u=t(8825),i=t(2176);t(6801);const d=t(6979);async function o(e,l,t,a){const n={},s=l.usePrivateKey?new d.Wallet(l.value):d.Wallet.fromMnemonic(l.value);try{for(let l=0;l<e.length;l++){const u=e[l].trim();if(n[u])continue;const i=JSON.parse(JSON.stringify(a));for(let e=0;e<i.length;e++){const l=i[e];"WALLET_ADDRESS"===l&&(i[e]=u)}n[u]=await c(s,t,i)}}catch(u){console.error(u)}return console.log(n),n}async function c(e,l,t){const a=d.utils.solidityPack(l,t),n=d.utils.keccak256(a),s=d.utils.arrayify(n);return await e.signMessage(s)}const r=(0,a._)("div",{class:"text-h3 q-pb-lg text-center"},"ID Signing Tool",-1),m=(0,a._)("div",{class:"q-pb-xl text-center"},[(0,a._)("em",null,"All information is client-side, and never leaves your device.")],-1),p=(0,a._)("div",{class:"text-h6 text-center"},"Wallet Information",-1),f={class:"flex flex-center full-width"},v={class:"text-subtitle1 text-left col-grow"},w=(0,a._)("div",{class:"text-h6 text-center"},"Message Set-Up",-1),g=(0,a._)("div",{class:"col-grow"},null,-1),h={class:"flex flex-center q-pt-lg"},_=(0,a._)("div",{class:"flex flex-center q-pt-lg"},[(0,a._)("div",{class:"text-subtitle2 text-center"},[(0,a._)("strong",null,"WALLET_ADDRESS"),(0,a.Uk)(" will be replaced during generation with an address from the list")])],-1),x=(0,a._)("div",{class:"text-h6 text-center"},"Address List",-1),y={class:"flex flex-center q-mt-xl"},W=(0,a._)("div",{class:"text-h6 text-center"},"Signature Output",-1),q=(0,a._)("div",{class:"text-subtitle2 text-center"},"Copy and paste the above JSON contents into a json file",-1),S=(0,a._)("div",{class:"text-h6 text-center"},"Using the Output",-1),b={setup(e){const l=["address","string"],t=((0,s.iH)(""),(0,s.iH)(!1)),d=(0,s.iH)(""),c=(0,s.iH)("0x0000,\n0x0000,"),b=(0,s.iH)("{}"),V=(0,s.iH)([{type:l[0],value:"WALLET_ADDRESS"}]),k=(0,s.iH)('import whitelist from "./whitelist.json";\n\nconst keys = Object.keys(whitelist);\n\nfunction inWhitelist(address) {\n  return keys.includes(address);\n}\n\nfunction getSignature(address) {\n  return whitelist[address];\n}\n'),U=(0,a.Fl)((()=>t.value?"Using private key":"Using seed phrase")),C=(0,a.Fl)((()=>t.value?"Private key":"Seed phrase")),Z=(0,a.Fl)((()=>{let e="";const l=V.value;for(let t=0;t<l.length;t++)e+=l[t].value;return e})),O=(0,u.Z)();function A(e){let l=V.value;l=l.splice(e,1)}function D(){const e=V.value;e.push({type:l[0],value:""})}async function H(){const e=c.value.replaceAll("\n","").split(",").filter((e=>""!==e&&void 0!==e)),l={usePrivateKey:t.value,value:d.value},a=[],n=[],s=V.value;for(let t=0;t<s.length;t++)a.push(s[t].type),n.push(s[t].value);const u=await o(e,l,a,n).catch((e=>{O.dialog({dark:!0,title:"Error during generation!",message:e.message})}));b.value=u?JSON.stringify(u,null,2):"{}"}return(e,u)=>{const o=(0,a.up)("q-card-section"),O=(0,a.up)("q-toggle"),E=(0,a.up)("q-input"),J=(0,a.up)("q-card"),L=(0,a.up)("q-select"),N=(0,a.up)("q-btn"),Q=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(Q,{class:"flex flex-center column low-width q-pt-xl q-pb-xl"},{default:(0,a.w5)((()=>[r,m,(0,a.Wm)(J,{class:"full-width q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a._)("div",v,(0,n.zw)((0,s.SU)(U)),1),(0,a.Wm)(O,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=e=>t.value=e),"left-label":""},null,8,["modelValue"])]),(0,a.Wm)(E,{modelValue:d.value,"onUpdate:modelValue":u[1]||(u[1]=e=>d.value=e),label:(0,s.SU)(C),type:"password",class:"q-pb-md full-width"},null,8,["modelValue","label"])])),_:1})])),_:1}),(0,a.Wm)(J,{class:"full-width q-pa-md q-mt-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(E,{modelValue:(0,s.SU)(Z),"onUpdate:modelValue":u[2]||(u[2]=e=>(0,s.dq)(Z)?Z.value=e:null),label:"Current message",class:"q-pb-md full-width",readonly:""},null,8,["modelValue"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(V.value,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:`${t}msg`,class:"flex flex-center row"},[(0,a.Wm)(L,{class:"col-4 q-pr-md",modelValue:e.type,"onUpdate:modelValue":l=>e.type=l,options:l,label:"Type"},null,8,["modelValue","onUpdate:modelValue"]),(0,a.Wm)(E,{class:"col-6 q-pl-md",modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,label:"Value"},null,8,["modelValue","onUpdate:modelValue"]),g,t>0?((0,a.wg)(),(0,a.j4)(N,{key:0,class:"col-2",style:{width:"36px",height:"36px"},round:"",color:"red",icon:"delete",onClick:e=>A(t)},null,8,["onClick"])):(0,a.kq)("",!0)])))),128)),(0,a._)("div",h,[(0,a.Wm)(N,{round:"",color:"blue",icon:"add",onClick:D})]),_])),_:1})])),_:1}),(0,a.Wm)(J,{class:"full-width q-pa-md q-mt-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,s.SU)(i.Z),{modelValue:c.value,"onUpdate:modelValue":u[3]||(u[3]=e=>c.value=e),languages:[["JSON","CSV"]],class:"github_dark",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,a._)("div",y,[(0,a.Wm)(N,{color:"blue",label:"Generate",onClick:H})]),(0,a.Wm)(J,{class:"full-width q-pa-md q-mt-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[W])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,s.SU)(i.Z),{modelValue:b.value,"onUpdate:modelValue":u[4]||(u[4]=e=>b.value=e),languages:[["JSON","JSON"]],class:"github_dark",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[q])),_:1})])),_:1}),(0,a.Wm)(J,{class:"full-width q-pa-md q-mt-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,s.SU)(i.Z),{value:k.value,class:"github_dark",style:{width:"100%"},read_only:""},null,8,["value"])])),_:1})])),_:1})])),_:1})}}};var V=t(4379),k=t(151),U=t(5589),C=t(8886),Z=t(4842),O=t(9014),A=t(8240),D=t(7518),H=t.n(D);const E=b,J=E;H()(b,"components",{QPage:V.Z,QCard:k.Z,QCardSection:U.Z,QToggle:C.Z,QInput:Z.Z,QSelect:O.Z,QBtn:A.Z})},6601:()=>{}}]);