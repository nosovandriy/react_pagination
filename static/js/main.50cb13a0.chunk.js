(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c=a(20),n=a.n(c),i=a(7),s=a(4),l=a(0);a(25);function r(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var o=a(18),j=a.n(o),d=a(2),g=a(5),h=function(e){var t=e.pagesQuantity,a=e.itemsOnCurrentPage,c=e.handleChangePage,n=e.handlePrevPage,l=e.handleNextPage,o=Object(d.h)(),h=r(1,t),u=Object(i.c)(),b=Object(s.a)(u,1)[0].get("activePage")||"1";return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("ul",{className:"pagination",children:[Object(g.jsx)("li",{className:j()("page-item",{disabled:1===+b}),children:Object(g.jsx)(i.b,{"data-cy":"prevLink",className:"page-link",to:b,"aria-disabled":1===+b?"true":"false",onClick:function(){return n(+b)},children:"\xab"})}),h.map((function(e){return Object(g.jsx)("li",{className:j()("page-item",{active:+b===e}),children:Object(g.jsx)(i.b,{"data-cy":"pageLink",className:"page-link",to:{pathname:"/",search:o.search},onClick:function(){return c("".concat(e))},children:e})},e)})),Object(g.jsx)("li",{className:j()("page-item",{disabled:t===+b}),children:Object(g.jsx)(i.b,{"data-cy":"nextLink",className:"page-link",to:b,"aria-disabled":t===+b?"true":"false",onClick:function(){return l(+b)},children:"\xbb"})})]}),Object(g.jsx)("ul",{children:a.map((function(e){return Object(g.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},u=r(1,42).map((function(e){return"Item ".concat(e)})),b=function(){var e=Object(i.c)(),t=Object(s.a)(e,2),a=t[0],c=t[1],n=a.get("itemsPerPage")||"5",o=a.get("activePage")||"1",j=Object(l.useState)(u),d=Object(s.a)(j,1)[0],b=Math.ceil(d.length/+n),m=+o*+n-+n+1,p=+o*+n>d.length?d.length:+o*+n,O=r(m,p);return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:"Items with Pagination"}),Object(g.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(o," (items ").concat(m," - ").concat(p," of ").concat(d.length,")")}),Object(g.jsxs)("div",{className:"form-group row",children:[Object(g.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(g.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:n,onChange:function(e){a.set("itemsPerPage",e.target.value),a.set("activePage","1"),c(a)},children:[Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"5",children:"5"}),Object(g.jsx)("option",{value:"10",children:"10"}),Object(g.jsx)("option",{value:"20",children:"20"})]})}),Object(g.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(g.jsx)(h,{pagesQuantity:b,itemsOnCurrentPage:O,handleChangePage:function(e){e===o||(a.set("activePage",e),c(a))},handlePrevPage:function(e){1===e||(a.set("activePage","".concat(e-1)),c(a))},handleNextPage:function(e){e===b||(a.set("activePage","".concat(e+1)),c(a))}})]})},m=function(){return Object(g.jsx)(i.a,{children:Object(g.jsx)(b,{})})};n.a.render(Object(g.jsx)(m,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.50cb13a0.chunk.js.map