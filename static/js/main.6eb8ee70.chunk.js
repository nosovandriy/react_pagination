(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c=a(20),n=a.n(c),r=a(7),i=a(2),s=a(4),l=a(0);a(25);function j(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var o=a(18),b=a.n(o);function d(e,t){var a=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(s.a)(e,2),c=t[0],n=t[1];a.set(c,n)})),a.toString()}var p=a(3),g=function(e){var t=e.pagesQuantity,a=e.itemsOnCurrentPage,c=Object(r.c)(),n=Object(s.a)(c,1)[0],i=n.get("page")||"1",l=j(1,t);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("ul",{className:"pagination",children:[Object(p.jsx)("li",{className:b()("page-item",{disabled:1===+i}),children:Object(p.jsx)(r.b,{"data-cy":"prevLink",className:"page-link",to:{search:d(n,{page:"".concat(+i-1)})},"aria-disabled":1===+i?"true":"false",children:"\xab"})}),l.map((function(e){return Object(p.jsx)("li",{className:b()("page-item",{active:+i===e}),children:Object(p.jsx)(r.b,{"data-cy":"pageLink",className:"page-link",to:{search:d(n,{page:"".concat(e)})},children:e})},e)})),Object(p.jsx)("li",{className:b()("page-item",{disabled:t===+i}),children:Object(p.jsx)(r.b,{"data-cy":"nextLink",className:"page-link",to:{search:d(n,{page:"".concat(+i+1)})},"aria-disabled":t===+i?"true":"false",children:"\xbb"})})]}),Object(p.jsx)("ul",{children:a.map((function(e){return Object(p.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},h=j(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(r.c)(),t=Object(s.a)(e,2),a=t[0],c=t[1],n=a.get("page")||"1",i=Number(a.get("perPage")||"5"),o=Object(l.useState)(h),b=Object(s.a)(o,1)[0],d=Math.ceil(b.length/i),u=+n*i-i+1,O=+n*i>b.length?b.length:+n*i,m=j(u,O);return Object(l.useEffect)((function(){c({perPage:"5",page:n})}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Items with Pagination"}),Object(p.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(n," (items ").concat(u," - ").concat(O," of ").concat(b.length,")")}),Object(p.jsxs)("div",{className:"form-group row",children:[Object(p.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(p.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:i,onChange:function(e){c({perPage:e.target.value,page:"1"})},children:[Object(p.jsx)("option",{value:"3",children:"3"}),Object(p.jsx)("option",{value:"5",children:"5"}),Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"20",children:"20"})]})}),Object(p.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(p.jsx)(g,{pagesQuantity:d,itemsOnCurrentPage:m})]})};n.a.render(Object(p.jsx)(r.a,{children:Object(p.jsx)(i.c,{children:Object(p.jsxs)(i.a,{path:"/",children:[Object(p.jsx)(i.a,{index:!0,element:Object(p.jsx)(u,{})}),Object(p.jsx)(i.a,{path:"/react_pagination/",element:Object(p.jsx)(u,{})})]})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6eb8ee70.chunk.js.map