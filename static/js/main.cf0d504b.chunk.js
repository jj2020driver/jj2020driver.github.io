(this["webpackJsonpgithub-users-search"]=this["webpackJsonpgithub-users-search"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(16),i=c.n(r),u=c(10),l=c(14),o=c(4),j=c(3),d=s.a.createContext();function h(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),s=c[0],r=c[1],i=Object(a.useState)(!1),u=Object(j.a)(i,2),h=u[0],b=u[1],O=Object(a.useState)(""),f=Object(j.a)(O,2),g=f[0],m=f[1],p=Object(a.useState)([]),v=Object(j.a)(p,2),x=v[0],_=v[1],N=Object(a.useState)([]),S=Object(j.a)(N,2),y=S[0],R=S[1],I=Object(a.useState)(1),P=Object(j.a)(I,2),k=P[0],w=P[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history"));e&&R(e)}),[]),Object(n.jsx)(d.Provider,Object(l.a)(Object(l.a)({},e),{},{value:{searchProduced:s,setSearchProduced:r,searchResultsIsLoading:h,setSearchResultsIsLoading:b,inputValue:g,setInputValue:m,searchResults:x,setSearchResults:_,history:y,addToHistory:function(e){var t=e.trim();R((function(e){var c=[];return e.includes(t)?c=[t].concat(Object(o.a)(e.filter((function(e){return e!==t})))):(c=[t].concat(Object(o.a)(e))).length>5&&(c.length=5),localStorage.setItem("history",JSON.stringify(c)),c}))},requestPage:k,setRequestPage:w},children:e.children}))}c(26),c(27);var b=c.p+"static/media/logo.925c625b.svg";var O=function(){return Object(n.jsx)("header",{className:"page-header",children:Object(n.jsx)("div",{className:"pwr",children:Object(n.jsxs)("div",{className:"pct",children:[Object(n.jsxs)("div",{className:"logo",children:[Object(n.jsx)("img",{src:b,className:"logo__image",alt:"logo"}),Object(n.jsxs)("div",{className:"logo__name",children:[Object(n.jsx)("div",{className:"logo__name__title",children:"REQUESTUM"}),Object(n.jsx)("div",{className:"logo__name__subtitle",children:"web development company"})]})]}),Object(n.jsx)("h1",{className:"app-name",children:"Github users search app"})]})})})},f=c(17),g=c(11),m=c.n(g),p=c(18);function v(){return(v=Object(p.a)(m.a.mark((function e(t,c,n){var a,s,r,i,u,l,j;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];if(1===t.length)return t;for(var a=t[0],r=function(e){var c=new Set(a.map((function(e){return e.id})));a=[].concat(Object(o.a)(a),Object(o.a)(t[e].filter((function(e){return!c.has(e.id)}))))},i=1;i<t.length;i++)r(i);return a.length||(u=!1),s(n,a)},s=function(e,t){if(t.length){var c=new Set(e.map((function(e){return e.id})));return[].concat(Object(o.a)(e),Object(o.a)(t.filter((function(e){return!c.has(e.id)}))))}return e},a=function(e){return e.then((function(e){return{value:e,status:"fulfilled"}}),(function(e){return{error:e,status:"rejected"}}))},i=[],u=!0,l=["https://api.github.com/search/repositories?q=".concat(t,"&page=").concat(c),"https://api.github.com/users/".concat(t,"/repos?page=").concat(c),"https://api.github.com/orgs/".concat(t,"/repos?page=").concat(c)],j=[],l.forEach((function(e){j.push(a(fetch(e,{headers:{authorization:"token e3b8cd4b4bb65209cfd5bb32a7f86107dba7b139"}})))})),e.next=10,Promise.all(j).then((function(e){return Promise.all(e.map((function(e){return e.value.ok?e.value.json():[]})))})).then((function(e){i=r(e[0].items,e[1],e[2])}));case 10:return e.abrupt("return",{resultData:i,hasMore:u});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.addEventListener("unhandledrejection",(function(e){return console.log(e.reason)}));var x=function(e,t,c){return v.apply(this,arguments)};var _=function(){var e=Object(a.useContext)(d),t=e.setSearchProduced,c=(e.searchResultsIsLoading,e.setSearchResultsIsLoading),s=e.inputValue,r=e.setInputValue,i=(e.searchResults,e.setSearchResults),u=(e.history,e.addToHistory);function l(){s.trim().length>=3&&(u(s),t(!0),c(!0),i([]),x(s,1,[]).then((function(e){var t=e.resultData;c(!1),i(t)})))}return Object(a.useEffect)((function(){l()}),[s]),Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),l()},children:Object(n.jsx)(f.DebounceInput,{placeholder:"Search Github for...",className:"input",minLength:3,debounceTimeout:800,value:s,onChange:function(e){var t=e.target.value;r(t)}})})};var N=function(){var e=Object(a.useContext)(d),t=(e.setSearchResults,e.setInputValue),c=Object(a.useState)(""),s=Object(j.a)(c,2),r=s[0],i=s[1],u=Object(a.useState)(null),l=Object(j.a)(u,2),o=l[0],h=l[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history"));i(e)}),[]),Object(a.useEffect)((function(){r&&r.length&&h(Object(n.jsxs)("div",{className:"history",children:[Object(n.jsx)("h4",{className:"title",children:"Search history:"}),Object(n.jsx)("ul",{children:r.map((function(e,c){return Object(n.jsx)("li",{children:Object(n.jsx)("span",{onClick:function(){t(e)},children:e})},c)}))})]}))}),[r]),o};var S=function(){return Object(n.jsxs)("aside",{className:"sidebar",children:[Object(n.jsx)(_,{}),Object(n.jsx)(N,{})]})},y=c(19);function R(e){var t=e.html_url,c=e.full_name,a=e.language,s=e.description;return Object(n.jsxs)("div",{className:"grid-block",children:[Object(n.jsx)("h3",{className:"grid-block__title",children:Object(n.jsx)("a",{href:t,target:"_blank",children:c})}),a&&Object(n.jsxs)("div",{className:"grid-block__info",children:["Language: ",Object(n.jsx)("span",{className:"grid-block__info__value",children:a})]}),s&&Object(n.jsxs)("div",{className:"grid-block__info",children:["Description: ",Object(n.jsx)("span",{className:"grid-block__info__value",children:s})]})]})}R.defaultProps={full_name:""};var I=R;var P=function(){var e=Object(a.useContext)(d),t=e.searchProduced,c=e.searchResultsIsLoading,s=e.inputValue,r=e.searchResults,i=e.setSearchResults,u=e.requestPage,l=e.setRequestPage,o=Object(a.useState)(!0),h=Object(j.a)(o,2),b=h[0],O=h[1],f=[];return r&&(f=r.map((function(e){return Object(n.jsx)(I,{html_url:e.html_url,full_name:e.full_name,language:e.language,description:e.description},e.id)}))),Object(n.jsx)(n.Fragment,{children:c?Object(n.jsx)("div",{className:"preloader",children:Object(n.jsxs)("div",{className:"preloader-dots",children:[Object(n.jsx)("span",{className:"preloader-dots__dot"}),Object(n.jsx)("span",{className:"preloader-dots__dot"}),Object(n.jsx)("span",{className:"preloader-dots__dot"})]})}):f.length?Object(n.jsx)("div",{className:"grid",children:Object(n.jsx)(y.a,{dataLength:f.length,next:function(){x(s,u+1,r).then((function(e){var t=e.resultData,c=e.hasMore;i(t),l((function(e){return e+1})),O(c)}))},hasMore:b,loader:Object(n.jsx)("div",{className:"loading-status",children:"Loading more..."}),endMessage:Object(n.jsx)("div",{className:"loading-status",children:Object(n.jsx)("b",{children:"That's all!"})}),children:f})}):t&&Object(n.jsx)("div",{className:"search-empty",children:"Nothing found for this query"})})};var k=function(){return Object(n.jsx)("div",{className:"main",children:Object(n.jsx)(P,{})})};var w=function(){return Object(n.jsx)("section",{className:"section-search",children:Object(n.jsx)("div",{className:"pwr",children:Object(n.jsxs)("div",{className:"pct",children:[Object(n.jsx)(S,{}),Object(n.jsx)(k,{})]})})})};var L=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(w,{})]})};var C=function(){return Object(n.jsx)("div",{id:"app",children:Object(n.jsx)(L,{})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(h,{children:Object(n.jsx)(u.a,{children:Object(n.jsx)(C,{})})}),document.getElementById("root")),E()}},[[38,1,2]]]);
//# sourceMappingURL=main.cf0d504b.chunk.js.map