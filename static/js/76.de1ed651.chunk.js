"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{9315:function(t,n,r){r.d(n,{JS:function(){return i},MD:function(){return f},gW:function(){return p},k1:function(){return o},v3:function(){return h}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c4c535d4c92d9e8cd45d9f8a1dc15d0d",language:"en-US"}}),i=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("trending/movie/day");case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("search/movie",{params:{query:n}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(n,"/credits"),{params:{page:1}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("movie/".concat(n,"/reviews"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},8076:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(5861),a=r(885),c=r(7757),u=r.n(c),s=r(2791),i=r(470),o=r(9315),p="Cast_list__GlWio",f="Cast_text__P2vgu",h=r(9645),d=r(184),v=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],v=(0,s.useState)(!1),l=(0,a.Z)(v,2),m=l[0],g=l[1],w=(0,s.useState)(null),x=(0,a.Z)(w,2),_=x[0],k=x[1],b=(0,i.UO)().id;(0,s.useEffect)((function(){j()}),[]);var j=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(!0),t.prev=1,t.next=4,(0,o.MD)(b);case 4:n=t.sent,c(n.cast.slice(0,20)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),k(t.t0);case 12:return t.prev=12,g(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(){return t.apply(this,arguments)}}(),y=r.map((function(t){var n=t.character,r=t.cast_id,e=t.name,a=t.profile_path;return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{alt:e,src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg",width:"100"}),(0,d.jsx)("p",{children:e}),(0,d.jsxs)("p",{children:["Character: ",n]})]},r)}));return(0,d.jsxs)(d.Fragment,{children:[m&&(0,d.jsx)(h.Z,{}),_&&(0,d.jsx)("h2",{children:"Oops, something went wrong..."}),r.length?(0,d.jsx)("ul",{className:p,children:y}):(0,d.jsx)("p",{className:f,children:"We don't have any actors for this movie"})]})}}}]);
//# sourceMappingURL=76.de1ed651.chunk.js.map