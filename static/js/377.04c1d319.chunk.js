"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[377],{6377:function(r,n,t){t.r(n),t.d(n,{default:function(){return h}});var e=t(1413),a=t(5861),u=t(885),c=t(7757),i=t.n(c),s=t(2791),o=t(6871),f=t(6846),p=t(184),h=function(){var r=(0,s.useState)({items:[],loading:!1,error:null}),n=(0,u.Z)(r,2),t=n[0],c=n[1],h=(0,o.UO)().id;(0,s.useEffect)((function(){var r=function(){var r=(0,a.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{loading:!0})})),r.prev=1,r.next=4,(0,f.Jh)(h);case 4:n=r.sent,console.log(n.results),c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{loading:!1,items:n.results})})),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),c((function(n){return(0,e.Z)((0,e.Z)({},n),{},{loading:!1,error:r.t0.message})}));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}();r()}),[h]);var v=t.items,d=t.loading,l=t.error,g=v.map((function(r){var n=r.id,t=r.author,e=r.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",t]}),(0,p.jsx)("p",{children:e})]},n)}));return(0,p.jsxs)(p.Fragment,{children:[d&&(0,p.jsx)("p",{children:"Loading..."}),l&&(0,p.jsx)("p",{children:l}),v.length&&(0,p.jsx)("ul",{children:g}),!v.length&&(0,p.jsx)("p",{children:"We don't have any review for this movie."})]})}},6846:function(r,n,t){t.d(n,{HI:function(){return f},Hg:function(){return s},IQ:function(){return p},Jh:function(){return h},Pg:function(){return o}});var e=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"472eb9c3f2ac1bf77bbb6771cd09c0a8"}}),s=function(){var r=(0,e.Z)(u().mark((function r(){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/trending/all/day");case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(n));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("search/movie/",{params:{query:n}});case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(n,"/credits"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),h=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(n,"/reviews"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=377.04c1d319.chunk.js.map