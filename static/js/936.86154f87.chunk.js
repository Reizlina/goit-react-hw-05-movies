"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{9315:function(t,n,r){r.d(n,{JS:function(){return i},MD:function(){return p},gW:function(){return f},k1:function(){return o},v3:function(){return v}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),s=r.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c4c535d4c92d9e8cd45d9f8a1dc15d0d",language:"en-US"}}),i=function(){var t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(n,"/credits"),{params:{page:1}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},3896:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(6731),a=r(470),u=r(184),c=function(t){var n=t.title,r=t.id,c=(0,a.TH)();return(0,u.jsx)("li",{children:(0,u.jsx)(e.rU,{to:"/movies/".concat(r),state:{from:c},children:n})})},s="FilmList_list__C2ysn",i=function(t){var n=t.movies.map((function(t){var n=t.title,r=t.id;return(0,u.jsx)(c,{title:n,id:r},r)}));return(0,u.jsx)("ul",{className:s,children:n})}},4936:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e=r(5861),a=r(885),u=r(7757),c=r.n(u),s=r(2791),i=r(9315),o="Home_title__L087v",f=r(3896),p=r(9645),v=r(184);function d(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1],d=(0,s.useState)(!1),l=(0,a.Z)(d,2),h=l[0],m=l[1],x=(0,s.useState)(null),w=(0,a.Z)(x,2),g=w[0],_=w[1];(0,s.useEffect)((function(){k()}),[]);var k=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,(0,i.JS)();case 4:n=t.sent,u(n.results),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),_(t.t0);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(){return t.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{className:o,children:"Trending today"}),(0,v.jsx)(f.Z,{movies:r}),h&&(0,v.jsx)(p.Z,{}),g&&(0,v.jsx)("h2",{children:"Oops, something went wrong..."})]})}}}]);
//# sourceMappingURL=936.86154f87.chunk.js.map