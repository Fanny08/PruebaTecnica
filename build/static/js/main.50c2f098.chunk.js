(this.webpackJsonpprueba=this.webpackJsonpprueba||[]).push([[0],{28:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(20),i=t.n(s),r=(t(28),t(21)),l=t(3),j=t(5),o=function(e){return e&&"object"===typeof e&&!Array.isArray(e)},d={recursive:function(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];if(!t.length)return e;var c=t.shift();if(o(e)&&o(c))for(var s in c)o(c[s])?(e[s]?e[s]=Object.assign({},e[s]):Object.assign(e,Object(j.a)({},s,{})),d.recursive(e[s],c[s])):Object.assign(e,Object(j.a)({},s,c[s]))}},u=t(0),b={filter:{page:1,name:""},data:[],numberPages:1,loading:!1},f=Object(n.createContext)([b,function(){}]),O=function(e){var a=Object(n.useState)(b),t=Object(l.a)(a,2),c=t[0],s=t[1];return Object(u.jsx)(f.Provider,{value:[c,function(e){s((function(a){var t=Object(r.a)({},a);return d.recursive(t,e),t}))}],children:e.children})},m=f,h=function(e){return Object(u.jsx)("div",{className:"Fluid container-fluid",children:e.children})},x=(t(30),function(e){var a=Object(n.useState)(),t=Object(l.a)(a,2),c=t[0],s=t[1],i=Object(n.useState)(),r=Object(l.a)(i,2),j=r[0],o=r[1],d=Object(n.useContext)(m),b=Object(l.a)(d,2),f=(b[0],b[1]);return Object(u.jsx)("div",{className:"Search col-12",children:Object(u.jsx)("input",{type:"text",value:c,placeholder:"\xbfQu\xe9 personaje quieres buscar?...",onChange:function(e){var a=e.target.value;s(a),clearTimeout(j),o(setTimeout((function(){f({filter:{page:1,name:a}})}),500))}})})}),p=(t(31),function(e){return Object(u.jsx)("div",{className:"navbar fixed-top Header",children:Object(u.jsx)("div",{className:"col-12 col-md-6",children:Object(u.jsx)(x,{})})})}),v=(t(32),function(e){return Object(u.jsx)("div",{className:"Character col-6 col-md-3",children:Object(u.jsxs)("div",{className:"content ".concat(e.data.status),children:[Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("img",{className:"img-fluid",src:e.data.image})}),Object(u.jsxs)("div",{className:"body",children:[Object(u.jsx)("div",{className:"name",children:Object(u.jsx)("span",{className:"data",children:e.data.name})}),Object(u.jsxs)("div",{className:"species",children:[Object(u.jsx)("span",{className:"info",children:"Especie"}),Object(u.jsx)("span",{className:"data",children:e.data.species})]}),Object(u.jsxs)("div",{className:"gender",children:[Object(u.jsx)("span",{className:"info",children:"Genero"}),Object(u.jsx)("span",{className:"data",children:e.data.gender})]}),Object(u.jsxs)("div",{className:"type",children:[Object(u.jsx)("span",{className:"info",children:"Tipo"}),Object(u.jsx)("span",{className:"data",children:e.data.type})]}),Object(u.jsxs)("div",{className:"location",children:[Object(u.jsx)("span",{className:"info",children:"Ubicacion"}),Object(u.jsx)("span",{className:"data",children:e.data.location.name})]}),Object(u.jsxs)("div",{className:"status",children:[Object(u.jsx)("span",{className:"info",children:"Status"}),Object(u.jsx)("span",{className:"data",children:e.data.status})]})]})]})})}),g=(t(33),function(){return Object(u.jsx)("div",{className:"Spinner",children:Object(u.jsx)("i",{className:"fas fa-atom fa-spin fa-5x"})})}),N=t(4),y=t.n(N),C=t(10),k=t(22),P=t.n(k),S=function(){var e=Object(C.a)(y.a.mark((function e(a){var t,n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://rickandmortyapi.com/api/character/?",n=new URLSearchParams(null===a||void 0===a?void 0:a.filter).toString(),t+=n,e.next=5,P.a.request({url:t,method:"GET"});case 5:return c=e.sent,e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(C.a)(y.a.mark((function e(a){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(a);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),F=t(23),T=(t(53),function(){var e=Object(n.useContext)(m),a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(u.jsx)("nav",{className:"Paginator","aria-label":"Page navigation",children:Object(u.jsxs)("ul",{className:"pagination pagination-sm align-items-center",children:[Object(u.jsx)("li",{className:"page-item",children:Object(u.jsxs)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:function(){var e=t.filter.page-1;e>=1&&c({filter:{page:e}})},children:[Object(u.jsx)("span",{"aria-hidden":"true",children:"\xab"}),Object(u.jsx)("span",{className:"sr-only",children:"Anterior"})]})}),Object(F.a)(Array(t.numberPages)).map((function(e,a){return a++,Object(u.jsx)("li",{className:"page-item ".concat(t.filter.page===a?"active":"inactive"),children:Object(u.jsx)("a",{className:"page-link",href:"#",onClick:function(){c({filter:{page:a}})},children:a})},a)})),Object(u.jsx)("li",{className:"page-item",children:Object(u.jsxs)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:function(){var e=t.filter.page+1;e<=t.numberPages&&c({filter:{page:e}})},children:[Object(u.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),Object(u.jsx)("span",{className:"sr-only",children:"Siguiente"})]})})]})})}),A=(t(54),function(){var e=Object(n.useContext)(m),a=Object(l.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){s()}),[]),Object(n.useEffect)((function(){s()}),[t.filter.page,t.filter.name]);var s=function(){c({loading:!0}),w({filter:t.filter}).then((function(e){c({data:e.results,numberPages:e.info.pages})})).catch((function(e){console.log(e)})).finally((function(){c({loading:!1})}))};return Object(u.jsx)(h,{children:Object(u.jsxs)("div",{className:"row justify-content-md-center",children:[Object(u.jsx)(p,{}),t.loading?Object(u.jsx)(g,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"Inicio col-12 d-flex justify-content-center",children:Object(u.jsx)(T,{})}),Object(u.jsx)("div",{className:"col-12 col-md-8",children:Object(u.jsx)("div",{className:"row",children:t.data.map((function(e,a){return Object(u.jsx)(v,{data:e},a)}))})}),Object(u.jsx)("div",{className:"mt-3 col-12 d-flex justify-content-center",children:Object(u.jsx)(T,{})})]})]})})}),E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,56)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(A,{})})}),document.getElementById("root")),E()}},[[55,1,2]]]);
//# sourceMappingURL=main.50c2f098.chunk.js.map