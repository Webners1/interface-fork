"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9695],{94492:function(e,r,t){t.d(r,{Z:function(){return y}});var n,a=t(64343),s=t(24635),o=t(14744),i=t(71862),l=t(45486),c=t(46430),d=t(36778),u=t(54962),p=t(573),x=t(58771),h=t(16682),m=t(44554),f=t(16339),g=t(37643),N=t(627),b=t(67294),v=t(56785),j=t(85893);!function(e){e.InvalidInput="InvalidInput"}(n||(n={}));var _=e=>{let{placeholderSlippage:r,trident:t=!1}=e;const{i18n:a}=(0,o.mV)(),s=(0,f.T)(),{error:l,percent:c,input:d}=(0,f.C)(g.Tz),p=c.equalTo(g.Ru),[_,w]=(0,N.A6)(),{0:O,1:E}=(0,b.useState)(""),{0:y,1:I}=(0,b.useState)(!1);return(0,j.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,j.jsxs)("div",{className:"grid gap-2",children:[(0,j.jsxs)("div",{className:"flex items-center",children:[(0,j.jsx)(v.Z,{variant:"xs",weight:700,className:"text-high-emphesis",children:a._(a._("Slippage tolerance"))}),(0,j.jsx)(u.Z,{text:a._(a._("Your transaction will revert if the price changes unfavorably by more than this percentage."))})]}),(0,j.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,j.jsx)("div",{className:(0,m.AK)(l===g.Hd.INVALID_INPUT?"border-red/60":l===g.Hd.TOO_LOW||l===g.Hd.TOO_HIGH?"border-yellow/60":p?"border-dark-800":"border-blue","border-2 h-[36px] flex items-center px-2 rounded-[5px] bg-dark-1000/40"),tabIndex:-1,children:(0,j.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[l===g.Hd.TOO_LOW||l===g.Hd.TOO_HIGH?(0,j.jsx)(x.Z,{className:"text-yellow",width:24}):null,(0,j.jsx)("input",{id:"text-slippage",className:(0,m.AK)(l===g.Hd.INVALID_INPUT?"text-red":"","bg-transparent placeholder-low-emphesis min-w-0 w-full font-bold"),placeholder:null===r||void 0===r?void 0:r.toFixed(2),value:d,onChange:e=>s((0,g.l_)(e.target.value)),onBlur:()=>l===g.Hd.INVALID_INPUT?s((0,g.l_)(g.QK)):s((0,g.w5)()),color:l===g.Hd.INVALID_INPUT?"red":"",autoComplete:"off"}),"%"]})}),(0,j.jsx)("div",{children:(0,j.jsx)(i.ZP,{size:"sm",color:p?"blue":"gray",variant:"outlined",onClick:()=>s((0,g.l_)(g.QK)),children:a._(a._("Auto"))})})]}),l?(0,j.jsx)(v.Z,{className:(0,m.AK)(l===g.Hd.INVALID_INPUT?"text-red":"text-yellow","font-medium flex items-center space-x-2"),variant:"xs",weight:700,children:(0,j.jsx)("div",{children:l===g.Hd.INVALID_INPUT?a._(a._("Enter a valid slippage percentage")):l===g.Hd.TOO_HIGH?a._(a._("Your transaction may be frontrun")):a._(a._("Your transaction may fail"))})}):null]}),!t&&(0,j.jsxs)("div",{className:"grid gap-2",children:[(0,j.jsxs)("div",{className:"flex items-center",children:[(0,j.jsx)(v.Z,{variant:"xs",weight:700,className:"text-high-emphesis",children:a._(a._("Transaction deadline"))}),(0,j.jsx)(u.Z,{text:a._(a._("Your transaction will revert if it is pending for more than this long."))})]}),(0,j.jsxs)("div",{className:"flex items-center gap-2",children:[(0,j.jsx)("input",{className:(0,m.AK)(y?"text-red":"","font-bold h-[36px] placeholder-low-emphesis bg-dark-1000/40 border-2 border-dark-800 rounded-[5px] px-2  max-w-[100px] focus:border-blue"),placeholder:(h.PY/60).toString(),value:O.length>0?O:_===h.PY?"":(_/60).toString(),onChange:e=>function(e){if(E(e),I(!1),0===e.length)w(h.PY);else try{const r=Math.floor(60*Number.parseFloat(e));!Number.isInteger(r)||r<60||r>=Number.MAX_SAFE_INTEGER?I(n.InvalidInput):w(r)}catch(r){console.error(r),I(n.InvalidInput)}}(e.target.value),onBlur:()=>{E(""),I(!1)},color:y?"red":""}),(0,j.jsx)(v.Z,{variant:"sm",weight:700,className:"text-secondary",children:a._(a._("minutes"))})]})]})]})},w=t(7582),O=t(12614),E=t(90849);var y=e=>{let{placeholderSlippage:r,className:t,trident:n=!1}=e;const{i18n:x}=(0,o.mV)(),{chainId:h}=(0,O.aQ)(),f=(0,E.nU)(),[g,y]=(0,N.DG)(),[I,k]=(0,N.RO)(),{0:D,1:A}=(0,b.useState)(!1),[P,Z]=(0,N.Cp)();(0,w.Z)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Z,{placement:"bottom-end",content:(0,j.jsxs)("div",{className:"flex flex-col gap-3 p-3 w-80",style:{background:"#0c1d31",borderRadius:"5px",boxShadow:"0px 0px 20px 5px #1f4a7d",border:"2px solid #1f4a7d"},children:[(0,j.jsxs)("div",{className:"flex flex-col gap-4 p-3 border rounded border-dark-800/60",children:[(0,j.jsx)(v.Z,{variant:"xs",weight:700,className:"text-secondary",children:x._(x._("Transaction Settings"))}),(0,j.jsx)(_,{placeholderSlippage:r,trident:n})]}),(0,j.jsxs)("div",{className:"flex flex-col gap-3 p-3 border rounded border-dark-800/60",children:[(0,j.jsx)(v.Z,{variant:"xs",weight:700,className:"text-secondary",children:x._(x._("Interface Settings"))}),(0,j.jsxs)("div",{className:"flex items-center justify-between",children:[(0,j.jsxs)("div",{className:"flex items-center",children:[(0,j.jsx)(v.Z,{variant:"xs",className:"text-high-emphesis",weight:700,children:x._(x._("Toggle Wizard Mode"))}),(0,j.jsx)(u.Z,{text:x._(x._("Wizard Mode is for experienced investors only! Use at your own risk."))})]}),(0,j.jsx)(p.Z,{size:"sm",id:"toggle-expert-mode-button",checked:g,onChange:g?()=>{y(),A(!1)}:()=>{f(),A(!0)},checkedIcon:(0,j.jsx)(a.Z,{className:"text-white"}),uncheckedIcon:(0,j.jsx)(l.Z,{}),color:"gradient"})]}),!n&&(0,j.jsxs)("div",{className:"flex items-center justify-between",children:[(0,j.jsxs)("div",{className:"flex items-center",children:[(0,j.jsx)(v.Z,{variant:"xs",className:"text-high-emphesis",weight:700,children:x._(x._("Disable multihops"))}),(0,j.jsx)(u.Z,{text:x._(x._("Restricts swaps to direct pairs only."))})]}),(0,j.jsx)(p.Z,{size:"sm",id:"toggle-disable-multihop-button",checked:I,onChange:()=>k(!I),checkedIcon:(0,j.jsx)(a.Z,{className:"text-dark-700"}),uncheckedIcon:(0,j.jsx)(l.Z,{}),color:"gradient"})]})]})]}),children:(0,j.jsx)("div",{className:(0,m.AK)(t,"flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"),children:(0,j.jsx)(s.Z,{className:"w-[26px] h-[26px] transform rotate-90 hover:text-blue-400"})})}),(0,j.jsx)(c.Z.Controlled,{isOpen:D,onDismiss:()=>A(!1),maxWidth:"md",children:(0,j.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,j.jsx)(c.Z.Header,{header:x._(x._("Confirm")),onClose:()=>A(!1)}),(0,j.jsxs)(c.Z.BorderedContent,{className:"flex flex-col gap-3 !border-yellow/40",children:[(0,j.jsx)(v.Z,{variant:"xs",weight:700,className:"text-white",children:x._(x._("Only use this mode if you know what you are doing."))}),(0,j.jsx)(v.Z,{variant:"sm",weight:700,className:"text-red",children:x._(x._("Enabling wizard mode disables the confirmation prompt for transactions and permits high slippage\ntrades, which can often lead to unfavorable exchange rates and potential loss of funds."))})]}),(0,j.jsx)(i.ZP,{id:"confirm-expert-mode",color:"blue",variant:"filled",onClick:()=>{y(),A(!1)},children:x._(x._("Enable Wizard Mode"))})]})})]})}},95203:function(e,r,t){var n=t(59499),a=t(4730),s=t(56727),o=t(71862),i=t(67294),l=t(44554),c=t(85893);const d=["children","size","className","variant"];function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const x={filled:{group:"border border-dark-800 rounded p-0.5 bg-dark-900",option:{checked:e=>e?"border-transparent border-gradient-r-blue-pink-dark-900":"border-transparent",default:"py-1 rounded-lg border"}},outlined:{group:"gap-2",option:{checked:e=>e?"border-dark-700 bg-gradient-to-r from-blue to-pink":"border-dark-700",default:"py-3 rounded border"}}},h=e=>{let{children:r,size:t,className:n="",variant:o="filled"}=e,u=(0,a.Z)(e,d);return(0,c.jsx)(s.Ee,p(p({},u),{},{className:(0,l.AK)(n,"flex bg-dark-1000/40 rounded-full",x[o].group),children:i.Children.map(r,(e=>(0,i.isValidElement)(e)?(0,i.cloneElement)(e,{variant:o,size:t,style:{width:"calc(100% / ".concat(i.Children.toArray(r).length,")")}}):e))}))};h.Button=e=>{let{value:r,children:t,size:n,style:a,className:l}=e;return(0,c.jsx)(s.Ee.Option,{value:r,as:i.Fragment,children:e=>{let{checked:s}=e;return(0,c.jsx)(o.ZP,{style:a,size:n,id:"radio-option-".concat(r),variant:s?"filled":"empty",color:s?"blue":"gray",className:l,type:"button",children:t})}})},r.Z=h},42388:function(e,r,t){t.d(r,{kG:function(){return g}});var n=t(16441),a=t(9279),s=t(57218),o=t(31518),i=t(74703),l=t(12614),c=t(53344),d=t(90849),u=t(36847),p=t(15393),x=t(68411),h=t(67294),m=t(25617),f=t(54907);let g,N;!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.FAILED=3]="FAILED",e[e.APPROVED=4]="APPROVED"}(g||(g={})),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.REJECTED=1]="REJECTED",e[e.FAILED=2]="FAILED",e[e.NOT_READY=3]="NOT_READY"}(N||(N={})),r.ZP=function(){const{account:e,library:r,chainId:t}=(0,l.aQ)(),b=(0,m.I0)(),{0:v,1:j}=(0,h.useState)(!1),{0:_,1:w}=(0,h.useState)(void 0);(0,h.useEffect)((()=>{w(void 0)}),[e,t]);const O=t?o.MO[t]:void 0,E=(0,d.Fw)(),y=(0,p.B2)(O,e||a.d),I=(0,x.h7)(),k=(0,h.useMemo)((()=>O?!y&&E?g.PENDING:y?g.APPROVED:g.NOT_APPROVED:g.UNKNOWN),[O,y,E]),D=(0,f.rO)(),A=(0,h.useCallback)((async()=>{if(k!==g.NOT_APPROVED)return console.error("approve was called unnecessarily"),{outcome:N.NOT_READY};if(!O)return console.error("no token"),{outcome:N.NOT_READY};if(!D)return console.error("no bentobox contract"),{outcome:N.NOT_READY};if(!e)return console.error("no account"),{outcome:N.NOT_READY};if(!r)return console.error("no library"),{outcome:N.NOT_READY};try{const a=await(0,i.D)(D,O,e,r,!0,t),{v:s,r:o,s:l}=(0,n.splitSignature)(a);return{outcome:N.SUCCESS,permit:{account:e,masterContract:O,v:s,r:o,s:l}}}catch(a){return{outcome:a.code===c.PM?N.REJECTED:N.FAILED}}}),[k,e,r,t,D,O]);return[k,v,_,async function(){if(v){const r=await(null===D||void 0===D?void 0:D.setMasterContractApproval(e,O,!0,0,s.R,s.R));b((0,u.ZD)("Approve Kashi")),await r.wait(),b((0,u.ZD)(""))}else{const e=await A();e.outcome===N.SUCCESS?w(e.permit):e.outcome===N.FAILED&&j(!0)}},async function(n,a){const s=new i.Z(n,e,r,t);let o;k===g.NOT_APPROVED&&_?(s.approve(_),o="Approve Kashi and "+await a(s)):o=await a(s);const l=await s.cook();l.success&&(I(l.tx,{summary:o}),w(void 0),await l.tx.wait())}]}},7582:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(10915);function a(){return!(0,n.Z)()}},24635:function(e,r,t){var n=t(67294);const a=n.forwardRef((function(e,r){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:r},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))}));r.Z=a}}]);