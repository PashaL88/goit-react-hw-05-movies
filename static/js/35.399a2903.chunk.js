"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[35],{7166:function(r,n,t){t.d(n,{Z:function(){return i}});var e=t(501),a=t(6871),u=t(184),c=function(r){var n=r.items,t=(0,a.TH)(),c=n.map((function(r){var n=r.id,a=r.title,c=r.original_name;return(0,u.jsx)("li",{children:(0,u.jsx)(e.rU,{state:{from:t},to:"/movies/".concat(n),children:a||c})},n)}));return(0,u.jsx)(u.Fragment,{children:Boolean(n.length)&&(0,u.jsx)("ul",{children:c})})},i=c;c.defaultProps={items:[]}},6846:function(r,n,t){t.d(n,{HI:function(){return f},Hg:function(){return s},IQ:function(){return p},Jh:function(){return d},Pg:function(){return o}});var e=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"472eb9c3f2ac1bf77bbb6771cd09c0a8"}}),s=function(){var r=(0,e.Z)(u().mark((function r(){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/trending/all/day");case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(n));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("search/movie/",{params:{query:n}});case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(n,"/credits"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=(0,e.Z)(u().mark((function r(n){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(n,"/reviews"));case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},2035:function(r,n,t){t.r(n),t.d(n,{default:function(){return d}});var e=t(1413),a=t(5861),u=t(885),c=t(7757),i=t.n(c),s=t(7166),o=t(2791),f=t(6846),p=t(184),d=function(){var r=(0,o.useState)({items:[],loading:!1,error:null}),n=(0,u.Z)(r,2),t=n[0],c=n[1];(0,o.useEffect)((function(){var r=function(){var r=(0,a.Z)(i().mark((function r(){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{loading:!0})})),r.prev=1,r.next=4,(0,f.Hg)();case 4:n=r.sent,c((function(r){return(0,e.Z)((0,e.Z)({},r),{},{loading:!1,items:n.results})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c((function(n){return(0,e.Z)((0,e.Z)({},n),{},{loading:!1,error:r.t0.message})}));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[]);var d=t.items,v=t.loading,l=t.error;return(0,p.jsxs)("div",{children:[(0,p.jsx)("h3",{children:"Trending today"}),v&&(0,p.jsx)("p",{children:"Loading..."}),l&&(0,p.jsx)("p",{children:l}),(0,p.jsx)(s.Z,{items:d})]})}}}]);
//# sourceMappingURL=35.399a2903.chunk.js.map