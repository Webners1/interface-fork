(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9074],{26702:function(e,t,l){"use strict";l.d(t,{Z:function(){return L}});var r=l(59499),n=l(55929),a=l(83567),s=l(85874),o=l(89046),i=l(41664),c=l.n(i),d=l(67294),u=l(79521),h=l(14744),v=l(56785),f=l(16339),m=l(95382),g=l(85893);const p=()=>{const{i18n:e}=(0,h.mV)(),{searchQuery:t}=(0,f.C)(m.AE);return(0,g.jsx)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:(0,g.jsx)(v.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:t?"".concat(e._(e._("Search results for"))," '").concat(t,"'"):e._(e._("Top Pools"))})})};var w=l(731);const x=e=>{(e=>{const{searchQuery:t}=(0,f.C)(w.AE);(0,d.useMemo)((()=>e("pair",{searchQuery:t})),[t,e])})(e)};var j=l(19485),b=l(31518),y=l(41626),P=l(44554),k=l(62483),N=l(25675),R=l.n(N),_=l(8100);const E=(e,t,l)=>e.filter((e=>{var t,r,n,a,s,o,i,c,d,u,h,v;let{original:f}=e;const m=null===f||void 0===f||null===(t=f.pair)||void 0===t||null===(r=t.token0)||void 0===r||null===(n=r.symbol)||void 0===n||null===(a=n.concat(null===f||void 0===f||null===(i=f.pair)||void 0===i||null===(c=i.token0)||void 0===c?void 0:c.name))||void 0===a||null===(s=a.concat(null===f||void 0===f||null===(d=f.pair)||void 0===d||null===(u=d.token1)||void 0===u?void 0:u.symbol))||void 0===s||null===(o=s.concat(null===f||void 0===f||null===(h=f.pair)||void 0===h||null===(v=h.token1)||void 0===v?void 0:v.name))||void 0===o?void 0:o.toLowerCase();return!l.searchQuery.length||m.includes(l.searchQuery.toLowerCase())}));function O(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function C(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?O(Object(l),!0).forEach((function(t){(0,r.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):O(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var L=e=>{let{chainId:t}=e;const{config:l}=(e=>{const t=(0,k.e_)(),{data:l}=(0,_.ZP)(e?"/api/analytics/pairs/".concat(e):null,(e=>fetch(e).then((e=>e.json())))),r=(0,d.useMemo)((()=>[{Header:"Name",accessor:"pair",maxWidth:150,Cell:l=>{const r=(0,j.getAddress)(l.value.token0.id),n=(0,d.useMemo)((()=>r in t?t[r]:new b.WU(e,(0,j.getAddress)(l.value.token0.id),Number(l.value.token0.decimals),l.value.token0.symbol,l.value.token0.name)),[l,r]),a=(0,j.getAddress)(l.value.token1.id),s=(0,d.useMemo)((()=>a in t?t[a]:new b.WU(e,a,Number(l.value.token1.decimals),l.value.token1.symbol,l.value.token1.name)),[l,a]);return(0,g.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,g.jsx)(y.B,{currencies:[n,s],size:40,dense:!0}),(0,g.jsxs)("div",{id:"pool-".concat(l.value.token0.symbol,"/").concat(l.value.token1.symbol),className:"overflow-hidden font-bold text-high-emphesis overflow-ellipsis whitespace-nowrap",children:[l.value.token0.symbol,"/",l.value.token1.symbol]}),(0,g.jsx)("div",{className:"w-3.5",children:(0,g.jsx)(R(),{src:"https://app.sushi.com/images/rss.svg",alt:"rss icon",layout:"fixed",width:"14",height:"14"})})]})},filter:E},{Header:"TVL",accessor:"liquidity",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1,2),align:"right"},{Header:"Volume 1d",accessor:"volume1d",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1,2),align:"right"},{Header:"Fees 1d",accessor:"fees1d",minWidth:150,Cell:e=>(0,P.uf)(e.value,!0,!1,2),align:"right"},{Header:"APY",accessor:"apy",minWidth:150,Cell:e=>(0,g.jsxs)(g.Fragment,{children:[e.value," ","-"!==e.value&&(e.row.original.utilisation1dChange>0?(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,g.jsx)("path",{fillRule:"evenodd",d:"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",clipRule:"evenodd"})}):(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ml-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,g.jsx)("path",{fillRule:"evenodd",d:"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z",clipRule:"evenodd"})}))]})}]),[t,e]);return(0,d.useMemo)((()=>({config:{columns:r,data:null!==l&&void 0!==l?l:[],initialState:{sortBy:[{id:"liquidity",desc:!0},{id:"apy",desc:!0}]},autoResetFilters:!1,autoResetPage:!1}})),[r,l])})(t),{getTableProps:r,getTableBodyProps:i,headerGroups:h,rows:v,page:f,gotoPage:m,canPreviousPage:w,canNextPage:N,prepareRow:O,setFilter:L,toggleSortBy:Z,state:{pageIndex:B,pageSize:M}}=(0,u.useTable)(l,u.useFlexLayout,u.useFilters,u.useSortBy,u.useFlexLayout,u.usePagination);return x(L),(0,g.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,g.jsx)(p,{}),(0,g.jsx)("div",{className:o._O,children:(0,g.jsxs)("table",C(C({},r()),{},{className:o.RR,children:[(0,g.jsx)("thead",{children:h.map(((e,t)=>(0,d.createElement)("tr",C(C({},e.getHeaderGroupProps()),{},{key:t}),e.headers.map(((t,l)=>(0,d.createElement)("th",C(C({},t.getHeaderProps(t.getSortByToggleProps())),{},{key:l,className:(0,o.G0)(l,e.headers.length)}),t.render("Header"),(0,g.jsx)("span",{className:"inline-block ml-1 align-middle",children:t.isSorted?t.isSortedDesc?(0,g.jsx)(n.Z,{width:12}):(0,g.jsx)(a.Z,{width:12}):""})))))))}),(0,g.jsx)("tbody",C(C({},i()),{},{children:f.map(((e,l)=>(O(e),(0,g.jsx)(c(),{href:{pathname:"/analytics/pools/".concat(e.original.pair.id),query:{chainId:t}},passHref:!0,children:(0,d.createElement)("tr",C(C({},e.getRowProps()),{},{key:l,className:o.vu}),e.cells.map(((t,l)=>(0,g.jsx)("td",C(C({},t.getCellProps()),{},{className:(0,o.zm)(l,e.cells.length),children:t.render("Cell")}),l))))},l))))}))]}))}),(0,g.jsx)(s.a,{pageIndex:B,pageSize:M,totalItems:v.length,gotoPage:m,canPreviousPage:w,canNextPage:N,loading:!v.length})]})}},31683:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSP:function(){return m},default:function(){return g}});var r=l(14744),n=l(56785),a=l(69743),s=l(16339),o=l(95382),i=l(85893);var c=()=>{const{i18n:e}=(0,r.mV)(),t=(0,s.T)();return(0,i.jsx)("div",{className:"flex items-center flex-grow w-full gap-4 sm:w-auto",children:(0,i.jsxs)("div",{className:"flex items-center flex-grow w-full gap-2 px-3 py-2 bg-opacity-50 border rounded border-dark-800 bg-dark-900 sm:w-auto",children:[(0,i.jsx)(a.Z,{strokeWidth:3,width:20,height:20}),(0,i.jsx)("input",{className:"w-full bg-transparent text-high-emphesis placeholder:text-low-emphesis",placeholder:e._(e._("Search by token or pool")),onChange:e=>t((0,o.jr)(e.target.value))})]})})},d=l(26702),u=l(22680),h=l(11163),v=l(2962),f=l(8100),m=!0;function g(e){let{fallback:t}=e;return(0,i.jsx)(f.J$,{value:{fallback:t},children:(0,i.jsx)(p,{})})}function p(){const{i18n:e}=(0,r.mV)(),t=(0,h.useRouter)(),l=Number(t.query.chainId);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.PB,{title:"Pool Anlytics"}),(0,i.jsx)(u.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,i.jsxs)("div",{children:[(0,i.jsx)(n.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("Pool Analytics."))}),(0,i.jsx)(n.Z,{variant:"sm",weight:400,children:e._(e._("Click on the column name to sort pairs by its TVL, volume, fees or APY."))})]})}),(0,i.jsx)(u.A9,{children:(0,i.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,i.jsx)(c,{}),(0,i.jsx)(d.Z,{chainId:l})]})})]})}},95382:function(e,t,l){"use strict";l.d(t,{AE:function(){return r.AE},jr:function(){return r.jr}});var r=l(731)},41235:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/pools",function(){return l(31683)}])},55929:function(e,t,l){"use strict";var r=l(67294);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=n},83567:function(e,t,l){"use strict";var r=l(67294);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=n},13342:function(e,t,l){"use strict";var r=l(67294);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.Z=n},94323:function(e,t,l){"use strict";var r=l(67294);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}))}));t.Z=n},51183:function(e,t,l){"use strict";var r=l(67294);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}))}));t.Z=n},69743:function(e,t,l){"use strict";var r=l(67294);const n=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}));t.Z=n}},function(e){e.O(0,[8882,6541,8769,9774,2888,179],(function(){return t=41235,e(e.s=t);var t}));var t=e.O();_N_E=t}]);