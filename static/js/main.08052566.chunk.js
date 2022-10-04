(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(2),l=c(1),i=(c(13),c(14),c(4)),d=c.n(i),r=(c(15),c(0)),o=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})};function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u,b=function(e){var t=e.userId,c=Object(l.useState)(),s=Object(n.a)(c,2),a=s[0],i=s[1];return Object(l.useEffect)((function(){(function(e){return j("/users/".concat(e))})(t).then((function(e){i(e)}))}),[]),Object(r.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})},h=function(e){var t=e.todo,c=e.setUserId,s=Object(l.useState)(!1),a=Object(n.a)(s,2),i=a[0],j=a[1];return setTimeout((function(){j(!0)}),300),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),i?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(0)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:d()("has-text-success",{"has-text-danger":!t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(r.jsx)(b,{userId:t.userId})]})]})]}):Object(r.jsx)(o,{})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(u||(u={}));var m=c(8);var O=function(e){var t=e.todos,c=Object(l.useState)(0),s=Object(n.a)(c,2),a=s[0],i=s[1],o=Object(l.useState)(""),j=Object(n.a)(o,2),b=j[0],O=j[1],x=Object(l.useState)(u.All),f=Object(n.a)(x,2),v=f[0],p=f[1],N=function(e,t){var c=Object(m.a)(e);switch(t){case u.Active:return c.filter((function(e){return!1===e.completed}));case u.Completed:return c.filter((function(e){return!0===e.completed}));default:return c}}(t,v),y=N.filter((function(e){var t=b.toLowerCase();return e.title.includes(t)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:v,onChange:function(e){return function(e){"all"===e.target.value?p(u.All):"active"===e.target.value?p(u.Active):p(u.Completed)}(e)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:b,onChange:function(e){return O(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:b.length?Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return O("")}}):null})]})]}),Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:y.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsxs)("td",{className:"has-text-right is-vcentered",children:[Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return i(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far","fa-eye",{"fa-eye-slash":a===e.id})})})}),a===e.id&&Object(r.jsx)(h,{todo:e,setUserId:i})]})]},e.id)}))})]})]})},x=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(l.useEffect)((function(){j("/todos").then((function(e){return s(e)}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:c.length>0?Object(r.jsx)(O,{todos:c}):Object(r.jsx)(o,{})})]})})})})};a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.08052566.chunk.js.map