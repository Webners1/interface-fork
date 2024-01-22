"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{62607:function(t,n,e){e.d(n,{q:function(){return s}});var i=e(59499),a=e(31518),o=e(16682),r=e(64527);class s{constructor(t){let{template:n,auctionToken:e,paymentToken:a,liquidityToken:o,auctionInfo:r,marketInfo:s,launcherInfo:u,auctionDocuments:l,pointListAddress:c,status:d}=t;(0,i.Z)(this,"template",void 0),(0,i.Z)(this,"auctionToken",void 0),(0,i.Z)(this,"paymentToken",void 0),(0,i.Z)(this,"liquidityToken",void 0),(0,i.Z)(this,"auctionInfo",void 0),(0,i.Z)(this,"marketInfo",void 0),(0,i.Z)(this,"launcherInfo",void 0),(0,i.Z)(this,"auctionDocuments",void 0),(0,i.Z)(this,"pointListAddress",void 0),(0,i.Z)(this,"auctionLauncherAddress",void 0),(0,i.Z)(this,"status",void 0),this.template=n,this.auctionToken=e,this.auctionInfo=r,this.paymentToken=a,this.marketInfo=s,this.launcherInfo=u,this.liquidityToken=o,this.auctionDocuments=l,this.pointListAddress=c,this.status=d}get isOwner(){var t;return null===(t=this.marketInfo)||void 0===t?void 0:t.isAdmin}get totalTokensCommitted(){var t;if(null!==(t=this.marketInfo)&&void 0!==t&&t.commitments)return a.ih.fromRawAmount(this.paymentToken,a.QA.BigInt(this.marketInfo.commitments))}get remainingTime(){if(this.status===r.wo.UPCOMING){const t=Date.now(),n=this.auctionInfo.startTime.mul("1000").toNumber()-t;return{days:Math.floor(n/864e5),hours:Math.floor(n%864e5/36e5),minutes:Math.floor(n%36e5/6e4),seconds:Math.floor(n%6e4/1e3)}}if(this.status===r.wo.LIVE){const t=Date.now(),n=this.auctionInfo.endTime.mul("1000").toNumber()-t;return{days:Math.floor(n/864e5),hours:Math.floor(n%864e5/36e5),minutes:Math.floor(n%36e5/6e4),seconds:Math.floor(n%6e4/1e3)}}return{days:0,hours:0,minutes:0,seconds:0}}get rate(){if(this.auctionInfo.rate)return new a.tA(this.auctionToken,this.paymentToken,a.QA.BigInt(a.QA.exponentiate(a.QA.BigInt(10),a.QA.BigInt(this.auctionToken.decimals))),a.QA.BigInt(this.auctionInfo.rate))}get totalTokens(){if(this.auctionInfo.totalTokens)return a.ih.fromRawAmount(this.auctionToken,a.QA.BigInt(this.auctionInfo.totalTokens))}get commitmentsTotal(){if(this.auctionInfo.commitmentsTotal)return a.ih.fromRawAmount(this.paymentToken,a.QA.BigInt(this.auctionInfo.commitmentsTotal))}get currentPrice(){if(this.template===r.tn.CROWDSALE)return this.rate;if(this.template===r.tn.DUTCH_AUCTION){const t=this.tokenPrice,n=this.auctionInfo.startTime.mul("1000").toNumber(),e=this.auctionInfo.endTime.mul("1000").toNumber(),i=Date.now();if(i<=n)return this.startPrice;if(this.startPrice&&this.reservePrice){const{numerator:o,denominator:r}=this.startPrice.subtract(this.startPrice.subtract(this.reservePrice).multiply(new a.iA(i-n,e-n))),s=new a.tA(this.auctionToken,this.paymentToken,r,o);if(t)return t.greaterThan(s)?t:s}}return this.template===r.tn.BATCH_AUCTION?this.tokenPrice:void 0}get reservePrice(){if(this.auctionInfo.minimumPrice)return new a.tA(this.auctionToken,this.paymentToken,a.QA.BigInt(a.QA.exponentiate(a.QA.BigInt(10),a.QA.BigInt(this.auctionToken.decimals))),a.QA.BigInt(this.auctionInfo.minimumPrice))}get tokenPrice(){if([r.tn.DUTCH_AUCTION,r.tn.BATCH_AUCTION].includes(this.template)&&this.commitmentsTotal&&this.totalTokens){const{denominator:t,numerator:n}=this.commitmentsTotal.divide(this.totalTokens);return new a.tA(this.totalTokens.currency,this.commitmentsTotal.currency,t,n)}return this.rate}get startPrice(){return this.template==r.tn.CROWDSALE?this.rate:this.auctionInfo.startPrice?new a.tA(this.auctionToken,this.paymentToken,a.QA.BigInt(a.QA.exponentiate(a.QA.BigInt(10),a.QA.BigInt(this.auctionToken.decimals))),a.QA.BigInt(this.auctionInfo.startPrice)):void 0}get minimumPrice(){if(this.auctionInfo.minimumPrice)return new a.tA(this.auctionToken,this.paymentToken,a.QA.BigInt(a.QA.exponentiate(a.QA.BigInt(10),a.QA.BigInt(this.auctionToken.decimals))),a.QA.BigInt(this.auctionInfo.minimumPrice))}get minimumCommitment(){if(this.template===r.tn.CROWDSALE&&this.totalTokens&&this.rate){const{denominator:t,numerator:n}=this.totalTokens.divide(this.rate);return a.ih.fromFractionalAmount(this.paymentToken,n,t)}if(this.template===r.tn.DUTCH_AUCTION&&this.totalTokens&&this.reservePrice){const{denominator:t,numerator:n}=this.totalTokens.multiply(this.reservePrice);return a.ih.fromFractionalAmount(this.paymentToken,n,t)}if(this.template===r.tn.BATCH_AUCTION&&this.auctionInfo.minimumCommitmentAmount)return a.ih.fromRawAmount(this.paymentToken,a.QA.BigInt(this.auctionInfo.minimumCommitmentAmount))}get minimumTargetRaised(){if(this.template===r.tn.BATCH_AUCTION)return this.minimumCommitment;if(this.minimumPrice&&this.totalTokens){const{numerator:t,denominator:n}=this.minimumPrice.asFraction.multiply(this.totalTokens);return a.ih.fromFractionalAmount(this.paymentToken,t,n)}}get maximumTargetRaised(){if(this.startPrice&&this.totalTokens){const{numerator:t,denominator:n}=this.startPrice.asFraction.multiply(this.totalTokens);return a.ih.fromFractionalAmount(this.paymentToken,t,n)}}get remainingPercentage(){if(this.template===r.tn.BATCH_AUCTION)return this.status===r.wo.LIVE?new a.gG("1","1"):o.fI;if(this.template===r.tn.DUTCH_AUCTION&&this.totalTokens&&this.currentPrice&&this.commitmentsTotal){const t=new a.gG("1","1");if(this.currentPrice.quote(this.totalTokens).greaterThan(a.xE)){const n=new a.gG(this.commitmentsTotal.quotient,this.currentPrice.quote(this.totalTokens).quotient.toString());return t.subtract(n)}return t}return this.template===r.tn.CROWDSALE&&this.maximumTargetRaised&&this.commitmentsTotal?new a.gG(this.maximumTargetRaised.subtract(this.commitmentsTotal).quotient,this.maximumTargetRaised.quotient):void 0}tokenAmount(t){if(this.currentPrice&&t.greaterThan(0))return this.template===r.tn.BATCH_AUCTION&&this.currentPrice.equalTo(a.xE)?this.totalTokens:this.currentPrice.invert().quote(t)}get tokensClaimable(){var t;if(null!==(t=this.marketInfo)&&void 0!==t&&t.tokensClaimable)return a.ih.fromRawAmount(this.auctionToken,a.QA.BigInt(this.marketInfo.tokensClaimable))}get launcherHasFunds(){return!!this.launcherInfo&&(this.launcherInfo.token1Balance.gt(0)||this.launcherInfo.token2Balance.gt(0))}get canWithdrawDeposits(){var t;return!!(this.isOwner&&null!==(t=this.launcherInfo)&&void 0!==t&&t.launched&&this.launcherHasFunds)}get canFinalize(){var t,n;if(this.launcherInfo&&!this.launcherInfo.launched&&this.auctionInfo.finalized)return!0;if(this.auctionInfo.finalized)return!1;if(this.status!==r.wo.FINISHED)return!1;if(this.isOwner)return!0;return this.auctionInfo.endTime.mul("1000").toNumber()+6048e5<Date.now()||!(null===(t=this.launcherInfo)||void 0===t||!t.liquidityTemplate)&&(null===(n=this.launcherInfo)||void 0===n?void 0:n.liquidityTemplate)>0}get canClaim(){if(!this.auctionInfo.finalized)return!1;if(!this.marketInfo)return!1;const t=a.QA.BigInt(this.marketInfo.tokensClaimable);return a.QA.greaterThan(t,a.QA.BigInt(0))}get canWithdraw(){return!!this.auctionInfo.finalized&&(!!this.marketInfo&&(!this.auctionInfo.auctionSuccessful&&a.QA.greaterThan(a.QA.BigInt(this.marketInfo.commitments),a.QA.BigInt(0))))}get liquidityAmount(){if(this.launcherInfo&&this.liquidityToken)return a.ih.fromRawAmount(this.liquidityToken,a.QA.BigInt(this.launcherInfo.liquidityAdded))}}},62071:function(t,n,e){e.d(n,{RZ:function(){return o},Ti:function(){return i},jt:function(){return a}});const i=["0xEd4A285845f19945b0EbC04a3165e3DCAf62fEeD","0x595Ff4d3Cebb8Bf652C198481A82F6A4440f551c"],a="0x077511a636ba1f10551cc7b89c13ff66a6ac9344e8a917527817a9690b15af7a",o="0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},80121:function(t,n,e){e.d(n,{ZP:function(){return w},xE:function(){return N}});var i=e(59499),a=e(9279),o=e(31518),r=e(53389),s=e(2886);const u=t=>{const n=(0,r.JE)(),e=(0,s.es)(n,"getDocuments",t.map((t=>[t])));return e&&Array.isArray(e)&&e.length===t.length?e.map((t=>{if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0].reduce(((t,n)=>(t[n.name]=n.data,t)),{})})):Array(t.length).fill(void 0)};var l=e(90981);var c=e(8198),d=e(25401),m=e(15615),h=e(64527),f=e(12614),A=e(67294);const I=new c.vU(m),T=new c.vU(m),p=t=>{const n=(0,s._Y)(t,T,"marketTemplate");return n&&Array.isArray(n)&&n.length===t.length?n.map((t=>{if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0]})):Array(t.length).fill(void 0)};var v=e(53502);const y=(t,n)=>{const e=(0,r.JE)(!1),i=(0,A.useMemo)((()=>e&&n&&n.length===t.length&&!n.some((t=>!t))?t.map(((t,i)=>n[i].toNumber()===h.tn.BATCH_AUCTION?e.interface.encodeFunctionData("getBatchAuctionInfo",[t]):n[i].toNumber()===h.tn.DUTCH_AUCTION?e.interface.encodeFunctionData("getDutchAuctionInfo",[t]):e.interface.encodeFunctionData("getCrowdsaleInfo",[t]))):[]),[t,e,n]),a=(0,s.o6)(e,i);return a&&Array.isArray(a)&&a.length===t.length?a.map((t=>{if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0]})):Array(t.length).fill(void 0)};var g=e(4840),k=e(92037),b=e(62607),C=e(62071);function B(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function M(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?B(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):B(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}const N=(t,n)=>{const{chainId:e}=(0,f.aQ)(),i=(t=>{const n=(0,r.JE)(),{result:e}=(0,s.Wk)(n,"getMarkets",void 0,{gasRequired:8e6});return(0,A.useMemo)((()=>{if(!e||!Array.isArray(e)||!(e.length>0))return[];let n=e[0].filter((t=>!C.Ti.includes(t.addr)));const i=(new Date).getTime();return t===h.wo.LIVE?n.filter((t=>i>=t.startTime.mul("1000").toNumber()&&i<t.endTime.mul("1000").toNumber()&&!t.finalized)):t===h.wo.UPCOMING?n.filter((t=>i<t.startTime.mul("1000").toNumber()&&!t.finalized)):t===h.wo.FINISHED?n.filter((t=>i>t.endTime.mul("1000").toNumber()||t.finalized)):n}),[e,t])})(t),a=(0,A.useMemo)((()=>i.map((t=>t.addr))),[i]),l=((t,n)=>{const{account:e}=(0,f.aQ)(),i=(0,r.JE)(),a=(0,s.es)(i,"getUserMarketInfo",t.map((t=>{var i;return[t,null!==(i=null!==n&&void 0!==n?n:e)&&void 0!==i?i:void 0]})));return a&&Array.isArray(a)&&a.length===t.length?a.map((t=>{if(t.result&&Array.isArray(t.result)&&t.result.length>0)return t.result[0]})):Array(t.length).fill(void 0)})(a,n),c=p(a),d=y(a,c),m=u(a),I=(0,v.Fz)(a),T=(0,k.Z)();return(0,A.useMemo)((()=>e?i.reduce(((t,i,a)=>{var r;const s=null===(r=c[a])||void 0===r?void 0:r.toNumber(),u=d[a],h=l[a],f=m[a],A=I[a],p=u?(0,g.$T)(e,u.paymentCurrencyInfo):void 0;return!n||null!==h&&void 0!==h&&h.isAdmin?(s&&u&&p&&f&&A&&T?t.push(new b.q({template:s,auctionToken:new o.WU(e,i.tokenInfo.addr,i.tokenInfo.decimals.toNumber(),i.tokenInfo.symbol,i.tokenInfo.name),paymentToken:p,liquidityToken:void 0,auctionInfo:u,marketInfo:h,launcherInfo:void 0,auctionDocuments:f,pointListAddress:A,status:(0,g.ku)(T.toNumber(),u)})):t.push(void 0),t):t}),[]).sort(((n,e)=>n&&e?t===h.wo.LIVE||t===h.wo.UPCOMING?n.auctionInfo.endTime.toNumber()<=e.auctionInfo.endTime.toNumber()?-1:1:n.auctionInfo.endTime.toNumber()<=e.auctionInfo.endTime.toNumber()?1:-1:0)):Array(Math.min(i.length,6)).fill(void 0)),[m,d,c,i,T,e,n,I,t,l])};var w=(t,n)=>{const{chainId:e}=(0,f.aQ)(),i=(0,k.Z)(),{marketTemplateId:u,pointListAddress:c,auctionLauncherAddress:m,loading:T,error:p}=(t=>{const n=(0,r.cq)(t,I),e=(0,A.useMemo)((()=>n?[n.interface.encodeFunctionData("marketTemplate",[]),n.interface.encodeFunctionData("pointList",[]),n.interface.encodeFunctionData("wallet",[])]:[]),[n]),i=(0,s.o6)(n,e);if(n&&t&&i&&Array.isArray(i)&&i.length===e.length&&i.every((t=>!t.error))){const[{result:t},{result:n},{result:e}]=i;return{marketTemplateId:null===t||void 0===t?void 0:t[0],pointListAddress:null===n||void 0===n?void 0:n[0],auctionLauncherAddress:null===e||void 0===e?void 0:e[0],loading:i.some((t=>t.loading)),error:i.some((t=>t.error))}}return{marketTemplateId:void 0,pointListAddress:void 0,auctionLauncherAddress:void 0,loading:i.some((t=>t.loading)),error:i.some((t=>t.error))}})(t),v=((t,n)=>{const{map:e}=(0,l.Z)(),{abi:i}=n&&e?e[n]:{abi:void 0},a=(0,r.cq)(t,i),{result:o}=(0,s.Wk)(a,"auctionEnded");if(o&&Array.isArray(o)&&o.length>0)return o[0]})(t,u),{launcherInfo:y,lpTokenAddress:C,token1Balance:B,token2Balance:N,liquidityTemplate:w}=(t=>{var n,e;const{chainId:i}=(0,f.aQ)(),a=(0,r.cq)(t,i?null===(n=d[i])||void 0===n||null===(e=n[o.bk[i]])||void 0===e?void 0:e.contracts.PostAuctionLauncher.abi:void 0),u=(0,A.useMemo)((()=>a&&t?[a.interface.encodeFunctionData("launcherInfo",[]),a.interface.encodeFunctionData("liquidityTemplate",[]),a.interface.encodeFunctionData("getLPTokenAddress",[]),a.interface.encodeFunctionData("getToken1Balance",[]),a.interface.encodeFunctionData("getToken2Balance",[])]:[]),[a,t]),l=(0,s.o6)(a,u);if(a&&t&&l&&Array.isArray(l)&&l.length===u.length&&l.every((t=>!t.error))){const[{result:t},{result:n},{result:e},{result:i},{result:a}]=l;return{launcherInfo:t,liquidityTemplate:null===n||void 0===n?void 0:n[0],lpTokenAddress:null===e||void 0===e?void 0:e[0],token1Balance:null===i||void 0===i?void 0:i[0],token2Balance:null===a||void 0===a?void 0:a[0]}}return{launcherInfo:void 0,lpTokenAddress:void 0}})(m),{auctionDocuments:P,marketInfo:S,auctionInfo:D,loading:E,error:O}=((t,n,e)=>{const i=(0,r.JE)(),a=(0,A.useMemo)((()=>i&&t&&n?[i.interface.encodeFunctionData("getDocuments",[t]),i.interface.encodeFunctionData("getUserMarketInfo",[t,e]),i.interface.encodeFunctionData((null===n||void 0===n?void 0:n.toNumber())===h.tn.BATCH_AUCTION?"getBatchAuctionInfo":(null===n||void 0===n?void 0:n.toNumber())===h.tn.DUTCH_AUCTION?"getDutchAuctionInfo":"getCrowdsaleInfo",[t])]:[]),[t,i,n,e]),o=(0,s.o6)(i,a);if(i&&t&&n&&o&&Array.isArray(o)&&o.length===a.length&&o.every((t=>!t.error))){const[{result:t},{result:n},{result:e}]=o;return{auctionDocuments:(u=null===t||void 0===t?void 0:t[0],null===u||void 0===u?void 0:u.reduce(((t,n)=>(t[n.name]=n.data,t)),{})),marketInfo:null===n||void 0===n?void 0:n[0],auctionInfo:null===e||void 0===e?void 0:e[0],loading:o.some((t=>t.loading)),error:o.some((t=>t.error))}}var u;return{auctionDocuments:void 0,marketInfo:void 0,auctionInfo:void 0,loading:o.some((t=>t.loading)),error:o.some((t=>t.error))}})(t,u,null!==n&&void 0!==n?n:a.d);return(0,A.useMemo)((()=>{const t=p||O;if(t)return{loading:!1,auction:void 0,error:t};if(T||E||!i||!e||!u||!D||!P)return{loading:!0,auction:void 0,error:t};const n=(0,g.$T)(e,D.paymentCurrencyInfo);return{loading:!1,auction:new b.q({template:u.toNumber(),auctionToken:new o.WU(e,D.tokenInfo.addr,D.tokenInfo.decimals.toNumber(),D.tokenInfo.symbol,D.tokenInfo.name),liquidityToken:C?new o.WU(e,C,18,"BSP","Ballswap"):void 0,paymentToken:n,auctionInfo:D,marketInfo:S,launcherInfo:y&&B&&N&&w&&m?M(M({},y),{},{address:m,liquidityTemplate:w.toNumber(),token1Balance:B,token2Balance:N}):void 0,auctionDocuments:P,pointListAddress:c,status:(0,g.ku)(i.toNumber(),D,v)}),error:t}}),[P,v,D,m,i,e,p,O,y,w,T,E,C,S,u,c,B,N])}},53502:function(t,n,e){e.d(n,{Fz:function(){return h},ge:function(){return A},n8:function(){return f}});var i=e(8198),a=e(9279),o=e(31518),r=e(25401),s=e(15615),u=e(53389),l=e(2886),c=e(12614),d=e(68411),m=e(67294);const h=t=>{const n=(0,l._Y)(t,new i.vU(s),"pointList");if(n&&Array.isArray(n)&&n.length===t.length){return n.map((t=>{var n;return String(null===t||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0])}))}return Array(t.length).fill(a.d)},f=(t,n,e)=>{var i,a;const{account:s,chainId:d}=(0,c.aQ)(),m=(0,u.cq)(t,d?null===(i=r[d])||void 0===i||null===(a=i[o.bk[d]])||void 0===a?void 0:a.contracts.PointList.abi:void 0),{result:h}=(0,l.Wk)(m,"points",n?[n]:s?[s]:void 0);if(Array.isArray(h)&&h.length>0&&e){const{denominator:t,numerator:n}=new o.iA(o.QA.BigInt(h[0]),1);return o.ih.fromFractionalAmount(e,n,t)}},A=()=>{var t,n,e,i;const{account:a,chainId:s}=(0,c.aQ)(),l=(0,d.h7)(),h=(0,u.cq)(s?null===(t=r[s])||void 0===t||null===(n=t[o.bk[s]])||void 0===n?void 0:n.contracts.ListFactory.address:void 0,s?null===(e=r[s])||void 0===e||null===(i=e[o.bk[s]])||void 0===i?void 0:i.contracts.ListFactory.abi:void 0);return{subscribe:(0,m.useCallback)(((t,n)=>{h&&h.on(t,n)}),[h]),unsubscribe:(0,m.useCallback)(((t,n)=>{h&&h.off(t,n)}),[h]),init:(0,m.useCallback)((async(t,n)=>{if(!h)throw new Error("Contract not initialized");if(!a)throw new Error("Wallet not connected");const e=await h.deployPointList(a,t,n);return l(e,{summary:"Initialize permission list"}),e}),[a,l,h])}}},90981:function(t,n,e){var i=e(14744),a=e(31518),o=e(25401),r=e(64527),s=e(12614),u=e(67294);n.Z=()=>{const{i18n:t}=(0,i.mV)(),{chainId:n}=(0,s.aQ)(),e=(0,u.useCallback)((n=>({[r.tn.NOT_SET]:t._(t._("Not set")),[r.tn.CROWDSALE]:t._(t._("Crowdsale")),[r.tn.DUTCH_AUCTION]:t._(t._("Dutch Auction")),[r.tn.BATCH_AUCTION]:t._(t._("Batch Auction")),[r.tn.HYPERBOLIC_AUCTION]:t._(t._("Hyperbolic Auction"))}[n])),[t]);return{map:(0,u.useMemo)((()=>{var t,e,i,s,u,l,c,d,m,h,f,A,I,T,p,v;if(n)return{[null===(t=o[n])||void 0===t||null===(e=t[a.bk[n]])||void 0===e?void 0:e.contracts.Crowdsale.address]:r.tn.CROWDSALE,[null===(i=o[n])||void 0===i||null===(s=i[a.bk[n]])||void 0===s?void 0:s.contracts.DutchAuction.address]:r.tn.DUTCH_AUCTION,[null===(u=o[n])||void 0===u||null===(l=u[a.bk[n]])||void 0===l?void 0:l.contracts.BatchAuction.address]:r.tn.BATCH_AUCTION,[null===(c=o[n])||void 0===c||null===(d=c[a.bk[n]])||void 0===d?void 0:d.contracts.HyperbolicAuction.address]:r.tn.HYPERBOLIC_AUCTION,[r.tn.CROWDSALE]:null===(m=o[n])||void 0===m||null===(h=m[a.bk[n]])||void 0===h?void 0:h.contracts.Crowdsale,[r.tn.DUTCH_AUCTION]:null===(f=o[n])||void 0===f||null===(A=f[a.bk[n]])||void 0===A?void 0:A.contracts.DutchAuction,[r.tn.BATCH_AUCTION]:null===(I=o[n])||void 0===I||null===(T=I[a.bk[n]])||void 0===T?void 0:T.contracts.BatchAuction,[r.tn.HYPERBOLIC_AUCTION]:null===(p=o[n])||void 0===p||null===(v=p[a.bk[n]])||void 0===v?void 0:v.contracts.HyperbolicAuction}}),[n]),templateIdToLabel:e}}},4840:function(t,n,e){e.d(n,{$T:function(){return f},RF:function(){return s},av:function(){return u},ku:function(){return A},kx:function(){return m},m2:function(){return l},od:function(){return c},pD:function(){return h},rI:function(){return d}});var i=e(31518),a=e(25401),o=e(62071),r=e(64527);const s=t=>({1:t._(t._("LIVE")),2:t._(t._("UPCOMING")),3:t._(t._("FINISHED"))}),u=t=>({1:t._(t._("Crowdsale")),2:t._(t._("Dutch Auction")),3:t._(t._("Batch Auction"))}),l=t=>({1:t._(t._("Fixed price with fixed amount")),2:t._(t._("Price discovery that linearly declines from ceiling to floor price")),3:t._(t._("Valuation discovery with a minimum threshold and uncapped raise"))}),c=t=>({1:t._(t._("Fixed price, doesn't change over time")),2:t._(t._("This is the current price per token. It is calculated from the total commitments divided by the number of tokens on sale")),3:t._(t._("The estimated final price per token. It is calculated on a pro rata basis of the final total commitment"))}),d=(t,n)=>{var e,o,r,s,u,l;return{1:null===(e=a[t])||void 0===e||null===(o=e[i.bk[t]])||void 0===o?void 0:o.contracts.Crowdsale.abi,2:null===(r=a[t])||void 0===r||null===(s=r[i.bk[t]])||void 0===s?void 0:s.contracts.DutchAuction.abi,3:null===(u=a[t])||void 0===u||null===(l=u[i.bk[t]])||void 0===l?void 0:l.contracts.BatchAuction.abi}[n]},m={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua And Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia And Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IM:"Isle Of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States Of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts And Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre And Miquelon",VC:"Saint Vincent And Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome And Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad And Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks And Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis And Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};function h(t){return m.hasOwnProperty(t)?m[t]:t}const f=(t,n)=>n.addr===o.RZ?i.B5[t]:new i.WU(t,n.addr,n.decimals.toNumber(),n.symbol,n.name),A=(t,n,e)=>{const i=n.startTime.toNumber(),a=n.endTime.toNumber();return"undefined"!==typeof e&&e?r.wo.FINISHED:t>=i&&t<=a&&!n.finalized?r.wo.LIVE:t<i&&!n.finalized?r.wo.UPCOMING:r.wo.FINISHED}},92037:function(t,n,e){e.d(n,{Z:function(){return o}});var i=e(2886),a=e(54907);function o(){var t,n;const e=(0,a.h$)();return null===(t=(0,i.Wk)(e,"getCurrentBlockTimestamp"))||void 0===t||null===(n=t.result)||void 0===n?void 0:n[0]}},15615:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_beneficiary","type":"address"},{"internalType":"bool","name":"readAndAgreedToMarketParticipationAgreement","type":"bool"}],"name":"commitEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"readAndAgreedToMarketParticipationAgreement","type":"bool"}],"name":"commitTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"beneficiary","type":"address"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setAuctionWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketTemplate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pointList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')}}]);