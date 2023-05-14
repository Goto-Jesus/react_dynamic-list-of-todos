(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a,s=c(5),n=c.n(s),l=c(2),o=c(1),r=(c(10),c(11),c(3)),i=c.n(r),d=c(0),j=Object(o.memo)((function(e){var t=e.todo,c=e.onSelect,a=e.isSelected,s=t.id,n=t.title,l=t.completed;return Object(d.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":a}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:s}),Object(d.jsx)("td",{className:"is-vcentered",children:l&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:i()({"has-text-danger":!l,"has-text-success":l}),children:n})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:i()("far",{"fa-eye":!a,"fa-eye-slash":a})})})})})]})})),u=Object(o.memo)((function(e){var t=e.todos,c=e.onSelect,a=e.userId;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=a===t;return Object(d.jsx)(j,{todo:e,onSelect:c,isSelected:s},t)}))})]})}));!function(e){e.all="all",e.completed="completed",e.active="active"}(a||(a={}));var b=Object(o.memo)((function(e){var t=e.query,c=e.onChangeOption,s=e.onChangeQuery,n=e.onChangeApplyQuery;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case"all":c(a.all);break;case"active":c(a.active);break;case"completed":c(a.completed)}},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){s(e.target.value),n(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})}));function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var m=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},O=Object(o.memo)((function(e){var t=e.todo,c=e.onClose,a=Object(o.useState)(null),s=Object(l.a)(a,2),n=s[0],r=s[1];return Object(o.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then(r).catch((function(e){throw new Error(e.statusSelect)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),null===n?Object(d.jsx)(m,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(),r(null)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})})),x=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)(!0),r=Object(l.a)(n,2),i=r[0],j=r[1],x=Object(o.useState)(null),f=Object(l.a)(x,2),v=f[0],p=f[1],N=Object(o.useState)(""),y=Object(l.a)(N,2),g=y[0],C=y[1],k=Object(o.useState)(""),S=Object(l.a)(k,2),w=S[0],E=S[1],T=Object(o.useState)(a.all),A=Object(l.a)(T,2),I=A[0],_=A[1];console.log(I,w);var L=Object(o.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];c=setTimeout.apply(void 0,[e,t].concat(s))}}(E,1e3),[]),Q=Object(o.useCallback)((function(e){return p(e)}),[]),B=Object(o.useCallback)((function(){return p(null)}),[]),q=Object(o.useCallback)((function(e){return C(e)}),[]),F=Object(o.useCallback)((function(e){return _(e)}),[]);Object(o.useEffect)((function(){h("/todos").then(s).finally((function(){return j(!1)})).catch((function(e){throw new Error("".concat(e," Error"))}))}),[]);var J=Object(o.useMemo)((function(){return c.filter((function(e){var t=e.title;return function(e,t){var c=e.toLowerCase().trim();return t.toLowerCase().includes(c)}(w,t)}))}),[w,c]);return I!==a.all&&(J=J.filter((function(e){var t=e.completed;switch(I){case a.completed:return t;case a.active:return!t;default:return!0}}))),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(b,{query:g,onChangeQuery:q,onChangeOption:F,onChangeApplyQuery:L})}),Object(d.jsx)("div",{className:"block",children:i?Object(d.jsx)(m,{}):Object(d.jsx)(d.Fragment,{children:J.length?Object(d.jsx)(u,{todos:J,userId:(null===v||void 0===v?void 0:v.id)||null,onSelect:Q}):Object(d.jsx)("h1",{children:"Todos not found..."})})})]})})}),v&&Object(d.jsx)(O,{todo:v,onClose:B})]})};n.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2a7ecec6.chunk.js.map