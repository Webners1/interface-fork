(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8025],{64958:function(e,t,n){"use strict";var r=n(59499),o=n(4730),a=n(41664),s=n.n(a),i=n(11163),c=n(67294),u=n(85893);const d=["children","exact","activeClassName"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=e=>{let{children:t,exact:n=!1,activeClassName:r="text-high-emphesis"}=e,a=(0,o.Z)(e,d);const{asPath:l,pathname:b,route:h,query:p,basePath:g}=(0,i.useRouter)(),v=c.Children.only(t),m=v.props.className||"",w=(n?(a.as||a.href.pathname||a.href)===l:l.startsWith(a.as||a.href.pathname||a.href))?"".concat(m," ").concat(r).trim():m;return(0,u.jsx)(s(),f(f({href:a.href},a),{},{children:c.cloneElement(v,{className:w||null})}))}},53389:function(e,t,n){"use strict";n.d(t,{UK:function(){return r.UK},qL:function(){return r.qL},x7:function(){return O},rO:function(){return y.rO},HW:function(){return y.HW},mX:function(){return y.mX},cq:function(){return y.cq},MQ:function(){return y.MQ},TK:function(){return k.Z},JY:function(){return y.JY},wq:function(){return y.wq},ou:function(){return y.ou},JE:function(){return y.JE},Fe:function(){return y.Fe},Ti:function(){return y.Ti},cX:function(){return A.Z},i7:function(){return y.i7},bL:function(){return y.bL},sL:function(){return y.sL},oF:function(){return x.ZP},lz:function(){return y.lz}});var r=n(27262),o=n(19485),a=n(9279),s=n(31518),i=n(2593);const c=e=>{let{bentobox:t,tokenAddress:n,amount:r,account:i,chainId:c,share:u}=e;const d=(0,o.getAddress)(n);return{data:t.interface.encodeFunctionData("withdraw",[d===s.df[c]?a.d:d,i,i,r,u?u.toString():0])}},u=e=>{let{bentobox:t,tokenAddress:n,rebalance:r}=e;return{data:t.interface.encodeFunctionData("harvest",[n,r,0])}},d=e=>{let{bentobox:t,actions:n=[],revertOnFail:r}=e;const o=n.filter(Boolean);if(0===o.length)throw new Error("No valid actions");return 1===o.length?o[0]:o.length>1?t.interface.encodeFunctionData("batch",[o,r]):void 0};var l=n(59499),f=n(69807),b=n(46440),h=n(44554),p=n(12614),g=n(68411),v=n(67294);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=e=>{const{account:t,chainId:n,library:r}=(0,p.aQ)(),l=(0,g.h7)(),m=(0,y.rO)(!0),O=(0,v.useCallback)((async(e,o,a)=>{if(n&&t&&m&&r)try{const s=await r.getSigner().sendTransaction({from:t,to:m.address,data:d({bentobox:m,actions:[c({bentobox:m,tokenAddress:e,account:t,amount:o,chainId:n}).data,u({bentobox:m,tokenAddress:e,rebalance:!0}).data,c({bentobox:m,tokenAddress:e,account:t,amount:a.sub(o),chainId:n}).data],revertOnFail:!1})});if(null!==s&&void 0!==s&&s.hash)return l(s,{summary:"Withdraw from Bentobox"})}catch(s){return console.error("Bentobox withdraw error:",s),s}}),[t,l,m,n,r]),k=(0,v.useCallback)((async(c,u,b,h)=>{if(!b||!n||!t||!m||!r)return;const p=[];let g="";try{const v=await m.balanceOf(c.wrapped.address,"0x000000000000000000000000000000000000dead"),w=(s.QA.equal(s.QA.BigInt(0),u.base)&&s.QA.equal(s.QA.BigInt(0),u.elastic)?b:i.O$.from((0,f.T)(u,s.QA.BigInt(b)).toString())).sub(v.isZero()?1e3:0);h&&e&&(p.push((e=>{let{bentobox:t,account:n,masterContract:r,permit:o}=e;const{v:a,r:s,s:i}=o;return{data:t.interface.encodeFunctionData("setMasterContractApproval",[n,r,!0,a,s,i])}})({bentobox:m,masterContract:e,permit:h,account:t}).data),g+="Approve Master Contract and");const{data:O,value:y}=(e=>{let{bentobox:t,tokenAddress:n,share:r,amount:c,account:u,chainId:d}=e;const l=(0,o.getAddress)(n);return l===s.df[d]?{data:t.interface.encodeFunctionData("deposit",[a.d,u,u,0,r]),value:c}:{data:t.interface.encodeFunctionData("deposit",[l,u,u,0,r]),value:i.O$.from(0)}})({bentobox:m,tokenAddress:c.wrapped.address,account:t,amount:b,share:w,chainId:n});p.push(O),g+="Deposit to Bentobox",v.isZero()&&p.push((e=>{let{bentobox:t,tokenAddress:n,fromAddress:r,toAddress:o,share:a}=e;return{data:t.interface.encodeFunctionData("transfer",[n,r,o,a])}})({bentobox:m,fromAddress:t,tokenAddress:c.wrapped.address,toAddress:"0x000000000000000000000000000000000000dead",share:i.O$.from(1)}).data);const k=await r.getSigner().sendTransaction({from:t,to:m.address,data:d({bentobox:m,actions:p,revertOnFail:!0}),value:y});return null!==k&&void 0!==k&&k.hash&&(l(k,{summary:g}),await k.wait()),k}catch(v){return console.error("Bentobox deposit error:",v),v}}),[t,l,m,n,r,e]),A=(0,v.useCallback)((async(e,o,a)=>{if(!o||!n||!t||!m||!r)return;const s=(0,h.uN)(e,b.RB,r),i=await s.balanceOf(null===m||void 0===m?void 0:m.address);if(o.gt(i))return O(e,i,o);try{const s=await r.getSigner().sendTransaction(w({from:t,to:m.address},c({bentobox:m,tokenAddress:e,account:t,amount:o,chainId:n,share:a})));if(null!==s&&void 0!==s&&s.hash)return l(s,{summary:"Withdraw from Bentobox"})}catch(u){return console.error("Bentobox withdraw error:",u),u}}),[t,l,m,n,r,O]),x=(0,v.useCallback)((async function(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!n&&m&&r&&t)try{const n=await r.getSigner().sendTransaction(w({from:t,to:m.address},u({bentobox:m,tokenAddress:e,rebalance:o})));if(null!==n&&void 0!==n&&n.hash)return l(n,{summary:o?"Harvest & Rebalance":"Harvest"})}catch(a){return console.error("bentobox harvest error:",a),a}}),[t,l,m,n,r]);return{deposit:k,withdraw:A,harvest:x,withdrawWithHarvest:O}},y=(n(89638),n(37601),n(54907));n(89735),n(1082);var k=n(76294),A=n(80113),x=n(90573)},61647:function(e,t,n){"use strict";n.d(t,{C:function(){return c}});var r=n(31518),o=n(2886),a=n(67294),s=n(54907);const i=e=>{const t=(0,a.useMemo)((()=>e.map((e=>[null===e||void 0===e?void 0:e.wrapped.address]))),[e]),n=(0,s.rO)(),i=(0,o.es)(n,"totals",t),c=(0,a.useMemo)((()=>i.some((e=>e.loading))),[i]);return(0,a.useMemo)((()=>({rebases:e.reduce(((e,t,n)=>{const o=i[n];return t&&(null!==o&&void 0!==o&&o.result?e[t.wrapped.address]={token:t.wrapped,base:r.QA.BigInt(o.result.base.toString()),elastic:r.QA.BigInt(o.result.elastic.toString())}:e[t.wrapped.address]=void 0),e}),{}),loading:c})),[c,i,e])},c=e=>{const t=(0,a.useMemo)((()=>[e]),[e]),{rebases:n,loading:r}=i(t);return(0,a.useMemo)((()=>e&&!r?{rebase:n[null===e||void 0===e?void 0:e.wrapped.address],loading:r}:{rebase:void 0,loading:r}),[r,n,e])};t.Z=i},92037:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2886),o=n(54907);function a(){var e,t;const n=(0,o.h$)();return null===(e=(0,r.Wk)(n,"getCurrentBlockTimestamp"))||void 0===e||null===(t=e.result)||void 0===t?void 0:t[0]}},76294:function(e,t,n){"use strict";var r=n(74221),o=n(67294);r.Z.IFuseOptions;t.Z=function(e){let{data:t,options:n}=e;const{0:a,1:s}=(0,o.useState)(""),i=(0,o.useCallback)((()=>s("")),[]);return(0,o.useMemo)((()=>{const e=function(e){let{fuse:t,data:n,term:r}=e;const o=t.search(r);return r?o.map((e=>e.item)):n}({fuse:new r.Z(t||[],n),data:t,term:a});return{result:e,search:s,term:a,reset:i}}),[t,n,i,a])}},67993:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(2886),o=n(12614),a=n(67294),s=n(54907);function i(){var e,t;const{account:n}=(0,o.aQ)(),i=(0,s.c5)(),c=(0,a.useMemo)((()=>[null!==n&&void 0!==n?n:void 0]),[n]),u=(0,r.Wk)(i,"isArgentWallet",c,r.DB);return null!==(e=null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t[0])&&void 0!==e&&e}},80113:function(e,t,n){"use strict";var r=n(2593),o=n(31518),a=n(67294);function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";try{return t.replace("[",n).replace("]","").split(n).reduce(((e,t)=>e[t]),e)}catch(r){return}}t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const{0:n,1:i}=(0,a.useState)(t),c=(0,a.useMemo)((()=>{if(e&&e.length>0){const t=[...e];return null!==n&&t.sort(((e,t)=>{const a=s(e,n.key),i=s(t,n.key);if("number"===typeof a&&"number"===typeof i){if(a===1/0)return"ascending"===n.direction?-1:1;if(i===1/0)return"ascending"===n.direction?1:-1;if(a<i)return"ascending"===n.direction?-1:1;if(a>i)return"ascending"===n.direction?1:-1}if(a instanceof r.O$&&i instanceof r.O$){if(a.lt(i))return"ascending"===n.direction?-1:1;if(a.gt(i))return"ascending"===n.direction?1:-1}if(a instanceof o.QA&&i instanceof o.QA){if(o.QA.lessThan(a,i))return"ascending"===n.direction?-1:1;if(o.QA.greaterThan(a,i))return"ascending"===n.direction?1:-1}if(a instanceof o.ih&&i instanceof o.ih){if(a.lessThan(i))return"ascending"===n.direction?-1:1;if(a.greaterThan(i))return"ascending"===n.direction?1:-1}return a?i?0:-1:1})),t}return[]}),[e,n]),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ascending";n&&n.key===e&&"ascending"===n.direction?t="descending":n&&n.key===e&&"descending"===n.direction&&(t="ascending"),i({key:e,direction:t})};return{items:c,requestSort:u,sortConfig:n}}},66367:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(16339),o=n(67294),a=n(92037);function s(){const e=(0,r.C)((e=>e.user.userDeadline)),t=(0,a.Z)();return(0,o.useMemo)((()=>{if(t&&e)return t.add(e)}),[t,e])}},87238:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legacy/swap",function(){return n(37901)}])}},function(e){e.O(0,[3482,8306,8529,1436,1641,129,9294,1286,6541,9658,2392,3935,4311,7825,7901,9774,2888,179],(function(){return t=87238,e(e.s=t);var t}));var t=e.O();_N_E=t}]);