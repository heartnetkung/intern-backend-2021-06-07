(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{23:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var r,a,c,i,o,u,d,s,l,f,p,b=n(1),h=n.n(b),j=n(15),v=n.n(j),x=(n(23),n(7)),O=n(2),m=n.n(O),w=n(5),g=n(6),y="http://206.189.89.204/app/",k={"Content-Type":"application/json"},C=function(t){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},D=("Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBiZGEwNjAyZDQxZGEyNzMyYjcyMjM5IiwiaWF0IjoxNjIzMDQwMDk2LCJleHAiOjE2MjU2MzIwOTZ9.EQy5exWUptudZ7t2-T_1yvQALLv1h85U5yvSkPO8-c8"),function(){var t=Object(w.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="".concat(y,"no_auth/todos/"),t.next=4,fetch(e,Object(x.a)({method:"GET"},k));case 4:return n=t.sent,t.abrupt("return",n.json());case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()),S=function(){var t=Object(w.a)(m.a.mark((function t(e){var n,r,a,c,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.reqBody,r=e.token,a=r?C(r):k,t.prev=2,c="".concat(y,"no_auth/todos/"),t.next=6,fetch(c,{method:"POST",headers:Object(x.a)({},a),body:JSON.stringify(n)});case 6:if(!(i=t.sent).ok){t.next=9;break}return t.abrupt("return",i.json());case 9:t.next=14;break;case 11:throw t.prev=11,t.t0=t.catch(2),new Error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(w.a)(m.a.mark((function t(e){var n,r,a,c,i,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,r=e.reqBody,a=e.token,c=a?C(a):k,t.prev=2,i="".concat(y,"no_auth/todos/").concat(n),t.next=6,fetch(i,{method:"PUT",headers:Object(x.a)({},c),body:JSON.stringify(r)});case 6:return o=t.sent,t.abrupt("return",o.json());case 10:throw t.prev=10,t.t0=t.catch(2),new Error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(w.a)(m.a.mark((function t(e){var n,r,a,c,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,r=e.token,a=r?C(r):k,t.prev=2,c="".concat(y,"no_auth/todos/").concat(n),t.next=6,fetch(c,{method:"DELETE",headers:Object(x.a)({},a)});case 6:return i=t.sent,t.abrupt("return",i.json());case 10:throw t.prev=10,t.t0=t.catch(2),new Error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}(),T=n(13),I=function(t){var e=t.oldData,n=t.newData;return n?Array.isArray(e)&&e.length?[].concat(Object(T.a)(e),[{id:n._id,value:n.title}]):[{id:n._id,value:n.title}]:[]},N=function(t){var e=t.oldData,n=t.newData;if(!n)return[];if(!Array.isArray(e)||!e.length)return[{id:n._id,value:n.title}];var r=e.findIndex((function(t){return t.id===n._id}));if(r<0)return e;var a=Object(T.a)(e);return a[r]={id:n._id,value:n.title},a},P=function(t){var e=t.data,n=t.id;return e&&n&&Array.isArray(e)&&e.length?e.filter((function(t){return t.id!==n})):[]},U=n(3),M=n(4),_=M.b.div(r||(r=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  padding: 3rem 2rem;\n"]))),B=M.b.div(a||(a=Object(U.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  max-width: 700px;\n"]))),J=M.b.div(c||(c=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  margin: 2rem 0;\n  flex-wrap: nowrap;\n"]))),L=M.b.div(i||(i=Object(U.a)(["\n  display: flex;\n  padding: 1rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  background-color: ",";\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n"])),(function(t){return t.color})),z=M.b.div(o||(o=Object(U.a)([""]))),F=M.b.div(u||(u=Object(U.a)(["\n  margin: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),Z=M.b.input(d||(d=Object(U.a)(["\n  width: 100%;\n  padding: 0.75rem 1rem;\n  outline: none;\n  border: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin-right: 1rem;\n"]))),V=M.b.h1(s||(s=Object(U.a)([""]))),q=M.b.h2(l||(l=Object(U.a)([""]))),G=M.b.h3(f||(f=Object(U.a)([""]))),Q=n(0),R=function(t){var e=t.variant,n=t.children;return"h3"===e?Object(Q.jsx)(G,{children:n}):"h2"===e?Object(Q.jsx)(q,{children:n}):Object(Q.jsx)(V,{children:n})},W=M.b.form(p||(p=Object(U.a)(["\n  display: flex;\n  ",";\n"])),(function(t){return t.fluid&&"width: 100%"})),X=function(t){var e=t.formId,n=t.fluid,r=t.children,a=t.onSubmit;return Object(Q.jsx)(W,{id:e,fluid:n,onSubmit:function(t){t.preventDefault();var e=Object.values(t.target),n={};e.forEach((function(t){"input"===t.localName&&(n[t.name]=t.value)})),a(n)},children:r})};X.defaultProps={formId:null,children:null,fluid:!1,onSubmit:function(){}};var Y,H=X,$=M.b.input(Y||(Y=Object(U.a)(["\n  width: 280px;\n  padding: 0.75rem 1rem;\n  outline: none;\n  border-radius: 4px 0 0 4px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  @media (min-width: 767px) {\n    width: 500px;\n  }\n"]))),K=h.a.forwardRef((function(t,e){var n=t.name,r=t.value,a=t.placeholder,c=t.onChange;return Object(Q.jsx)($,{ref:e,autoComplete:"off",name:n,placeholder:a,value:r,onChange:function(t){return c(t.target.value)}})}));K.defaultProps={value:"",placeholder:"",onChange:function(){}};var tt,et=K,nt=M.b.button(tt||(tt=Object(U.a)(["\n  padding: 0.75rem 1rem;\n  background-color: ",";\n  border: 1px solid ",";\n  color: white;\n  font-weight: bold;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  min-width: 80px;\n  cursor: pointer;\n  ",";\n  ",";\n"])),(function(t){return t.bgColor}),(function(t){return t.bgColor}),(function(t){return"info"===t.variant&&"\n    border-radius: 0;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  "}),(function(t){return"successUpdate"===t.variant&&"\n    border-radius: 4px;\n  "})),rt=function(t){var e=t.type,n=t.variant,r=t.children,a=t.onClick,c=function(t){switch(t){case"info":return"#94d0cc";case"danger":return"#f55c47";default:return"#1eae98"}}(n);return Object(Q.jsx)(nt,{type:e,bgColor:c,variant:n,onClick:a,children:r})};rt.defaultProps={variant:"success",type:"button",children:null,onClick:function(){}};var at=rt,ct=function(t){var e=t.onSubmit,n=Object(b.useState)(""),r=Object(g.a)(n,2),a=r[0],c=r[1];return Object(Q.jsx)(H,{onSubmit:function(t){e((null===t||void 0===t?void 0:t.todo)||""),c("")},children:Object(Q.jsxs)(J,{children:[Object(Q.jsx)(et,{name:"todo",placeholder:"Enter some plan",value:a,onChange:function(t){return c(t)}}),Object(Q.jsx)(at,{type:"submit",children:"Add"})]})})};ct.defaultProps={onSubmit:function(){}};var it,ot,ut=h.a.forwardRef((function(t,e){var n=t.onSubmit,r=t.defaultValue,a=Object(b.useState)(r),c=Object(g.a)(a,2),i=c[0],o=c[1];return Object(Q.jsx)(H,{onSubmit:function(t){n(t["edit-todo"]||""),o("")},fluid:!0,children:Object(Q.jsx)(Z,{ref:e,name:"edit-todo",placeholder:"Enter some plan",value:i,onChange:function(t){return o(t.target.value)}})})}));ut.defaultProps={onSubmit:function(){},defaultValue:""};var dt=M.b.p(it||(it=Object(U.a)([""]))),st=M.b.span(ot||(ot=Object(U.a)([""]))),lt=function(t){var e=t.children;return"string"===typeof e?Object(Q.jsx)(dt,{children:e}):Object(Q.jsx)(st,{children:e})},ft=function(t){var e=t.editMode,n=t.children,r=t.onClickDelete,a=t.onClickEdit,c=t.onClickUpdate,i=Object(b.useRef)();return Object(Q.jsxs)(L,{children:[!e&&Object(Q.jsx)(lt,{children:n}),e&&Object(Q.jsx)(ut,{ref:i,defaultValue:n,onSubmit:function(){return c(i.current.value)}}),Object(Q.jsxs)(z,{children:[!e&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(at,{variant:"info",onClick:a,children:"Edit"}),Object(Q.jsx)(at,{variant:"danger",onClick:r,children:"Delete"})]}),e&&Object(Q.jsx)(at,{variant:"successUpdate",onClick:function(){return c(i.current.value)},children:"Update"})]})]})};ft.defaultProps={editMode:!1,children:null};var pt=ft,bt=function(t){var e=t.data,n=t.editList,r=t.onClickDelete,a=t.onClickEdit,c=t.onClickUpdate;return Array.isArray(e)&&e.length?Object(Q.jsx)(F,{children:e.map((function(t){return Object(Q.jsx)(pt,{editMode:n[t.id],onClickDelete:function(){return r(t.id)},onClickEdit:function(){return a(t.id)},onClickUpdate:function(e){return c(t.id,e)},children:t.value},t.id)}))}):Object(Q.jsx)(R,{variant:"h3",children:"You don't plan for today"})};bt.defaultProps={data:null,editList:{}};var ht,jt=bt,vt=function(){var t=function(){var t=Object(b.useState)([]),e=Object(g.a)(t,2),n=e[0],r=e[1];Object(b.useEffect)((function(){!function(){var t=Object(w.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]);var a=function(t){return/^[a-zA-Z \u0e01-\u0e5b 0-9]+$/.test(t)},c=function(){var t=Object(w.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D();case 3:return e=t.sent,t.abrupt("return",(n=null===e||void 0===e?void 0:e.data,Array.isArray(n)&&n.length?n.map((function(t){return{id:t._id,value:t.title}})):[]));case 7:t.prev=7,t.t0=t.catch(0),alert("failed get todo list: "+t.t0);case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return{todoState:n,addTodoNoAuth:function(){var t=Object(w.a)(m.a.mark((function t(e){var n,r,c,i,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.item,r=e.currentData,a(n)){t.next=4;break}return alert("input invalid"),t.abrupt("return");case 4:return t.prev=4,c={title:n},t.next=8,S({reqBody:c});case 8:return i=t.sent,o=I({oldData:r,newData:i.data}),t.abrupt("return",o);case 13:t.prev=13,t.t0=t.catch(4),alert("failed add todo: "+t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}(),updateTodoNoAuth:function(){var t=Object(w.a)(m.a.mark((function t(e){var n,r,c,i,o,u;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.id,r=e.item,c=e.currentData,a(r)){t.next=4;break}return alert("input invalid"),t.abrupt("return");case 4:return t.prev=4,i={title:r},t.next=8,E({id:n,reqBody:i});case 8:return o=t.sent,u=N({oldData:c,newData:o.data}),t.abrupt("return",u);case 13:t.prev=13,t.t0=t.catch(4),alert("failed update todo: "+t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}(),deleteTodoNoAuth:function(){var t=Object(w.a)(m.a.mark((function t(e){var n,r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,r=e.currentData,t.prev=1,t.next=4,A({id:n});case 4:return a=P({data:r,id:n}),t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(1),alert("failed delete todo: "+t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}}(),e=t.todoState,n=t.addTodoNoAuth,r=t.updateTodoNoAuth,a=t.deleteTodoNoAuth,c=Object(b.useState)({}),i=Object(g.a)(c,2),o=i[0],u=i[1],d=Object(b.useState)(e),s=Object(g.a)(d,2),l=s[0],f=s[1];Object(b.useEffect)((function(){e&&f(e)}),[e]);var p=function(){var t=Object(w.a)(m.a.mark((function t(e){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n({item:e,currentData:l});case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return");case 5:f(r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(w.a)(m.a.mark((function t(e,n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({id:e,item:n,currentData:l});case 2:if(a=t.sent){t.next=5;break}return t.abrupt("return");case 5:if(f(a),o[e]){t.next=8;break}return t.abrupt("return");case 8:v(e);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(w.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({id:e,currentData:l});case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:f(n),v(e);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){var e=Object(x.a)({},o);delete e[t],u(e)};return Object(Q.jsx)(_,{children:Object(Q.jsxs)(B,{children:[Object(Q.jsx)(R,{children:"What's the Plan for Today?"}),Object(Q.jsx)(ct,{onSubmit:p}),Object(Q.jsx)(jt,{data:l,editList:o,onClickDelete:j,onClickEdit:function(t){if(!o[t]){var e=Object(x.a)({},o);e[t]=!0,u(e)}},onClickUpdate:h})]})})},xt=Object(M.a)(ht||(ht=Object(U.a)(["\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n    height: 100vh;\n    width: 100%;\n  }\n"])));var Ot=function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(xt,{}),Object(Q.jsx)(vt,{})]})},mt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))};v.a.render(Object(Q.jsx)(h.a.StrictMode,{children:Object(Q.jsx)(Ot,{})}),document.getElementById("root")),mt()}},[[28,1,2]]]);
//# sourceMappingURL=main.b6fee42d.chunk.js.map