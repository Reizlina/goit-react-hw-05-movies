"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[425],{9315:function(e,t,r){r.d(t,{JS:function(){return i},MD:function(){return p},gW:function(){return f},k1:function(){return o},v3:function(){return l}});var n=r(5861),a=r(7757),u=r.n(a),c=r(4569),s=r.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c4c535d4c92d9e8cd45d9f8a1dc15d0d",language:"en-US"}}),i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/credits"),{params:{page:1}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3896:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(6731),a=r(470),u=r(184),c=function(e){var t=e.title,r=e.id,c=(0,a.TH)();return(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"/movies/".concat(r),state:{from:c},children:t})})},s="FilmList_list__C2ysn",i=function(e){var t=e.movies.map((function(e){var t=e.title,r=e.id;return(0,u.jsx)(c,{title:t,id:r},r)}));return(0,u.jsx)("ul",{className:s,children:t})}},5425:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(5861),a=r(885),u=r(7757),c=r.n(u),s=r(2791),i=r(6731),o=r(470),f=r(9315),p="SearchFilms_form__rBkIs",l="SearchFilms_wrap__MdY0E",v="SearchFilms_input__7+G3i",d="SearchFilms_btn__y2iKL",h=r(3896),m=r(9645),x=r(184);function _(){var e,t=(0,s.useState)([]),r=(0,a.Z)(t,2),u=r[0],_=r[1],g=(0,s.useState)(!1),w=(0,a.Z)(g,2),j=w[0],k=w[1],b=(0,s.useState)(null),Z=(0,a.Z)(b,2),y=Z[0],S=Z[1],F=(0,i.lr)(),L=(0,a.Z)(F,2),N=L[0],C=L[1],U=null!==(e=N.get("find"))&&void 0!==e?e:"";(0,s.useEffect)((function(){U&&q(U)}),[U]);var q=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,(0,f.gW)(t.toLowerCase());case 4:r=e.sent,_(r.results),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),S(e.t0);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{children:[(0,x.jsx)("form",{className:p,onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value;C(""!==t?{find:t}:{});var r=e.currentTarget;U="",r.reset()},children:(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("input",{className:v,placeholder:"Let's find it!",type:"text",name:"search",autoFocus:!0,required:!0}),(0,x.jsx)("button",{className:d,children:"Search"})]})}),u.length>0&&(0,x.jsx)(h.Z,{movies:u}),j&&(0,x.jsx)(m.Z,{}),y&&(0,x.jsx)("h2",{children:"Oops, something went wrong..."}),(0,x.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=425.57a6b34b.chunk.js.map