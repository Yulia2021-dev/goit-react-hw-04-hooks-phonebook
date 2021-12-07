(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(6),s=n.n(c),i=n(7),l=n(3),o=n(17),u=n(0),m=function(e){var t=e.handleNameInput,n=e.handleNumberInput,a=e.addContact,r=e.name,c=e.number;return Object(u.jsxs)("form",{onSubmit:a,children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(u.jsx)("input",{className:"form-control",id:"name",type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:t})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"number",className:"form-label",children:"Number"}),Object(u.jsx)("input",{className:"form-control",id:"number",type:"tel",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n})]}),Object(u.jsx)("input",{type:"submit",value:"Add contact",className:"btn btn-primary"})]})};var b=function(e){var t=e.contact,n=e.removeContact;return Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsxs)("p",{children:[t.name," : ",t.number]}),Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return n(t.id)},children:"Delete"})]})},d=function(e){var t=e.contacts,n=e.removeContact;return Object(u.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e){return Object(u.jsx)(b,{contact:e,removeContact:n},e.id)}))})},j=function(e){var t=e.filter,n=e.handleFilterName;return Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"filter",className:"form-label",children:"Find contacts by name"}),Object(u.jsx)("input",{className:"form-control",id:"filter",type:"text",name:"filter-name",value:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n})]})},h=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"h2",children:t}),n]})};n(13),n(14);var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),b=s[0],f=s[1],O=Object(a.useState)(""),p=Object(l.a)(O,2),v=p[0],x=p[1],N=Object(a.useState)(""),g=Object(l.a)(N,2),C=g[0],y=g[1],k=n.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h,{title:"Phonebook",children:Object(u.jsx)(m,{name:b,number:v,handleNameInput:function(e){return f(e.target.value)},handleNumberInput:function(e){return x(e.target.value)},addContact:function(e){e.preventDefault();var t={id:Object(o.a)(),name:b,number:v};n.some((function(e){return n=e.name,a=t.name,"string"===typeof n&&"string"===typeof a?0===n.localeCompare(a,void 0,{sensitivity:"accent"}):n===a;var n,a}))?alert("".concat(t.name," is already in contacts")):(f(""),x(""),r([].concat(Object(i.a)(n),[t])))}})}),Object(u.jsxs)(h,{title:"Contacts",children:[Object(u.jsx)(j,{filter:C,handleFilterName:function(e){return y(e.target.value)}}),Object(u.jsx)(d,{contacts:k,removeContact:function(e){alert("\u0412\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0441 ID: "+e),r(n.filter((function(t){return t.id!==e})))}})]})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5b6b716e.chunk.js.map