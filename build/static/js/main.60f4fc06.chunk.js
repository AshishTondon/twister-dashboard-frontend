(this["webpackJsonptwister-dashboard-frontend"]=this["webpackJsonptwister-dashboard-frontend"]||[]).push([[0],{115:function(e,t,s){"use strict";s.r(t);var a,r=s(0),c=s(1),n=s.n(c),i=s(51),l=s.n(i),d=(s(60),s(2)),o=s(3),j=(s(61),s(14)),m=s(10),b=s.n(m),u=s(21),p=s(16),h=s(52),x=s.n(h),O=s(26),g=s.n(O),f=s(53),v=s.n(f),N=function(e){var t=e.header,s=void 0===t?{}:t;return x.a.create({timeout:6e4,httpAgent:new g.a.Agent({keepAlive:!0}),httpsAgent:new v.a.Agent({keepAlive:!0}),maxRedirects:10,headers:s,maxContentLength:5e7,baseURL:"localhost"===window.location.hostname?"http://localhost:3030":"https://twister-dashboard-backend.herokuapp.com"})};!function(e){e[e.NORIGHT=0]="NORIGHT",e[e.ADMIN=1]="ADMIN",e[e.USER=2]="USER"}(a||(a={}));var y=Object(c.createContext)({}),A=function(e){var t={isLogin:!1,token:"",email:"",displayName:"",defaultURL:Z},s={righttype:a.NORIGHT},n=localStorage.getItem("user"),i=Object(c.useState)(void 0!==n&&null!=n?JSON.parse(n):t),l=Object(p.a)(i,2),d=l[0],o=l[1],j=localStorage.getItem("userrights"),m=Object(c.useState)(void 0!==j&&null!==j?JSON.parse(j):s),h=Object(p.a)(m,2),x=h[0],O=h[1],g=function(){var e=Object(u.a)(b.a.mark((function e(t){var s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=N({header:{Authorization:"Bearer ".concat(t)}}),e.prev=1,e.next=4,s.post($,{});case 4:return a=e.sent,e.abrupt("return",200===a.status);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.hasOwnProperty("user")&&localStorage.hasOwnProperty("userrights")){e.next=7;break}localStorage.removeItem("user"),localStorage.removeItem("userrights"),o(t),O(s),e.next=15;break;case 7:if(!(d.hasOwnProperty("token")&&d.token.length>0&&x.hasOwnProperty("righttype"))){e.next=15;break}return e.next=10,g(d.token);case 10:if(e.sent){e.next=15;break}localStorage.removeItem("user"),localStorage.removeItem("userrights"),o(t),O(s);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),Object(r.jsx)(y.Provider,{value:d,children:e.children})},w=function(e){var t=e.route,s=Object(j.a)(e,["route"]);return Object(r.jsx)(y.Consumer,{children:function(e){var a=e.isLogin,c=e.defaultURL;return Object(r.jsx)(o.b,Object(d.a)(Object(d.a)({},s),{},{render:function(e){return a?Object(r.jsx)(o.a,{to:{pathname:c,state:{from:e.location}}}):Object(r.jsx)(t.component,Object(d.a)(Object(d.a)({},e),{},{routes:t.routes}))}}))}})},I=function(e){var t=e.route,s=Object(j.a)(e,["route"]);return Object(r.jsx)(y.Consumer,{children:function(e){return Object(r.jsx)(o.b,Object(d.a)(Object(d.a)({},s),{},{render:function(s){return e.isLogin?Object(r.jsx)(t.component,Object(d.a)(Object(d.a)({},s),{},{routes:t.routes,state:e})):Object(r.jsx)(o.a,{to:{pathname:e.defaultURL,state:{from:s.location}}})}}))}})},S=function(e){return e.isAuth?Object(r.jsx)(I,{route:e}):Object(r.jsx)(w,{route:e})},k=s(13),C=function(e){var t=e.children,s=Object(j.a)(e,["children"]);return V?Object(r.jsx)(k.b,Object(d.a)(Object(d.a)({},s),{},{children:t})):Object(r.jsx)(k.a,Object(d.a)(Object(d.a)({},s),{},{children:t}))},L=function(e){var t=e.routes;return Object(r.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(r.jsx)("link",{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",rel:"stylesheet"}),Object(r.jsx)("script",{src:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"}),Object(r.jsx)("script",{src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"}),Object(r.jsx)(C,{children:Object(r.jsx)(o.d,{children:t.map((function(e,t){return Object(r.jsx)(S,Object(d.a)({},e),t)}))})})]})},R=function(){return Object(r.jsx)("div",{children:"Admin Frame"})},E=function(e){var t=e.href,s=e.children,a=Object(j.a)(e,["href","children"]);return Object(r.jsx)("a",Object(d.a)(Object(d.a)({},a),{},{href:V?"#"+t:t,children:s}))},B=function(e){var t=e.username;return Object(r.jsxs)("nav",{className:"navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row",children:[Object(r.jsxs)("div",{className:"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center",children:[Object(r.jsx)("a",{className:"navbar-brand brand-logo",href:"index.html",children:Object(r.jsx)("img",{src:"/assets/images/twister-logo.png",alt:"Twister"})}),Object(r.jsx)("a",{className:"navbar-brand brand-logo-mini",href:"index.html",children:Object(r.jsx)("img",{src:"/assets/images/logo-mini.svg",alt:"Twister"})})]}),Object(r.jsxs)("div",{className:"navbar-menu-wrapper d-flex align-items-stretch",children:[Object(r.jsx)("button",{className:"navbar-toggler navbar-toggler align-self-center",type:"button","data-toggle":"minimize",onClick:function(){document.body.classList.contains("sidebar-toggle-display")||document.body.classList.contains("sidebar-absolute")?document.body.classList.toggle("sidebar-hidden"):document.body.classList.toggle("sidebar-icon-only")},children:Object(r.jsx)("span",{className:"mdi mdi-menu"})}),Object(r.jsx)("ul",{className:"navbar-nav navbar-nav-right",children:Object(r.jsxs)("li",{className:"nav-item nav-profile dropdown",children:[Object(r.jsxs)("a",{className:"nav-link dropdown-toggle",id:"profileDropdown",href:"/#","data-toggle":"dropdown","aria-expanded":"false",children:[Object(r.jsxs)("div",{className:"nav-profile-img",children:[Object(r.jsx)("img",{src:"/assets/images/faces/face1.png",alt:"Avtar"}),Object(r.jsx)("span",{className:"availability-status online"})]}),Object(r.jsx)("div",{className:"nav-profile-text",children:Object(r.jsx)("p",{className:"mb-1 text-black",children:t})})]}),Object(r.jsx)("div",{className:"dropdown-menu navbar-dropdown","aria-labelledby":"profileDropdown",children:Object(r.jsxs)(E,{className:"dropdown-item",href:q,children:[Object(r.jsx)("i",{className:"mdi mdi-logout mr-2 text-primary"})," Signout"]})})]})}),Object(r.jsx)("button",{className:"navbar-toggler navbar-toggler-right d-lg-none align-self-center",type:"button","data-toggle":"offcanvas",children:Object(r.jsx)("span",{className:"mdi mdi-menu"})})]})]})},J=function e(t){var s=t.route,a=t.index;if(s.hasOwnProperty("routes")){var c=s.hasOwnProperty("icon")?"mdi ".concat(s.icon," menu-icon"):"mdi mdi-crosshairs-gps menu-icon";return Object(r.jsxs)("li",{className:"nav-item",children:[Object(r.jsxs)("a",{className:"nav-link","data-toggle":"collapse",href:"#"+s.displayName,"aria-expanded":"false","aria-controls":"ui-basic",children:[Object(r.jsx)("span",{className:"menu-title",children:s.displayName}),Object(r.jsx)("i",{className:"menu-arrow"}),Object(r.jsx)("i",{className:c})]}),Object(r.jsx)("div",{className:"collapse",id:s.displayName,children:Object(r.jsx)("ul",{className:"nav flex-column sub-menu",children:s.routes.map((function(t,s){return t.isDisplay?Object(r.jsx)(e,{route:t,index:s}):""}))})})]},a)}var n=s.hasOwnProperty("icon")?"mdi ".concat(s.icon," menu-icon"):"mdi mdi-home menu-icon";return Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)(E,{className:"nav-link",href:s.path,children:[Object(r.jsx)("span",{className:"menu-title",children:s.displayName}),Object(r.jsx)("i",{className:n})]})},a)},D=function(e){var t=e.routes;return Object(r.jsx)("nav",{className:"sidebar sidebar-offcanvas",id:"sidebar",children:Object(r.jsx)("ul",{className:"nav",children:t.map((function(e,t){return e.isDisplay?Object(r.jsx)(J,{route:e,index:t}):""}))})})},U=function(e){var t=e.routes,s=e.state;return Object(r.jsxs)("div",{className:"container-scroller",children:[Object(r.jsx)(B,{username:s.displayName}),Object(r.jsxs)("div",{className:"container-fluid page-body-wrapper",children:[Object(r.jsx)(D,{routes:t}),Object(r.jsx)("div",{className:"main-panel",children:Object(r.jsx)("div",{className:"content-wrapper",children:Object(r.jsx)(C,{children:Object(r.jsx)(o.d,{children:t.map((function(e,t){return Object(r.jsx)(S,Object(d.a)({},e),t)}))})})})})]})]})},Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAABoCAIAAAB0eyv3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAATISURBVHhe7ZzrtaMwDAZvXRSUelJNmqGYLARCsGTLhs2DjzPzaw/YkkADMQl3/+4AgiAuSIK4IAnigiSIC5IgLkiCuCAJ4oIkiAuSIC5IgrggCeKCJIgLkiAuSIK4IAnigiSIC5IgLkiCuCAJ4oIkiAuSIC5IgrggCeKCJIgLkiAuSIK4IAnigiSIC5IgLkiCuCAJ4m6lv166vyfd5dbP2+GrIO42+uvL2onuiro/4BDiehs28U11bpc56QLi/oRDiOtt2MblNgf6PIh7EBB3G/7D4W3Jb6u187h65oKIYKmwlU89nLmT8MXLUZAjP5y5Vp76UxlxN4G4RwFxN4G4RwFxN3EWcfv00eav9Ghjn4AKcpjU68SNEe59fxtWw10aZ+Byud76VXGNT6blYx/zDInmcQ/GNGkWQ3K6lmN4VDxvfOfy/ROcRty2sc6SvHc22ipYsGvBXkUZlryu8BKZShPRsnSDvvPghDTr4xh8zcHp/j2nWSq4wTklM3e33LAolt3na2q6hS7TXK4SttANE/1ZSyd31+wFgLg7ca0Jz6Qb7ZXM9ToTM4xkd9r5mz/59y0VGmdN+GPMnQlH5tQchxM9nLlett2jfFAbKIkTi5speX2/G9e9082t4aryQxbcoY4L0iXPkMQeaNupMAQF/J4TievaaYcX7lK1YWn/YnHN3ErBCe3ixiVMVMa4ZBOvB7L+djv0s9mpxK2YW/C2ZqbxJzYilj7EHW1pbqXAJ6aU+CBHamf3WJxK3NCbXK9momE2Z7zfJ3l8LzXvDXFTC0LWCnxixtXqLGQ7LOcSN2h+squ7pE/RhWEDLmVlgKtgZvpidR6UJag9ofjBUSEJ15rsuJxL3KAh634PcdL2vwIbLXxGm8GNcCUklP1tdQlxH5xM3KJXSbvHLuXNrXpbTLCm9gNE9kcpxN3E2cQtiJVsnZqUCjBts5Mz7czHzzDaa+pf40K7oy24tE9cU2ZrsuNyOnFdY8dJSaQ5iok+ds4mzHXTjqnV1JcEthPd0TaK23RSLK3Jjsv5xHWdHXqy3rQEMeGHj2+TL9tMO6jRm8yPAmZmq0s7C0hpTXZcTiiuN/ey3vBqURp//MF+/udEvpf/4Y2pa6e4b7nlIu4n2Suum7dm3SGrQEKhlbG4Y8Ti+4CxuO1CurK3q4u4n2SvuJG53rMCpVyhuK+d9oXYzBcN1hVfzPJS8bBQXl8MmbL9+7f9OGl8M2LMa3Mh7ifZLW7ZXBuhaG4xVaO4VTIJgstoIFErHuqx2RD3k+wXt2hQ9c4zU85kZ6QjW4XKxy9V88CUHo51IO43cWe3XdyCQb49+f4HiewEO7Ty28NA9DcxgY6Z2qt/ALFQvWAR952Yr5C664azm/z3BxP5+d60yCy7WM2PnV67Tb6+ff612Twi4OGjnRpcSeN4k2xg2PDIaJe+My1HcWgOLS5ACcQFSRAXJEFckARxQRLEBUkQFyRBXJAEcUESxAVJEBckQVyQBHFBEsQFSRAXJEFckARxQRLEBUkQFyRBXJAEcUESxAVJEBckQVyQBHFBEsQFSRAXJEFckARxQRLEBUkQFyRBXJAEcUESxAVJEBckQVyQBHFBEsQFSRAXJEFckARxQRLEBUkQFwS53/8BxWREdPOsRc0AAAAASUVORK5CYII=",M=function(e){var t={isLogin:e.isLogin,token:e.data.user.token,email:e.data.user.email,displayName:e.data.user.displayName,defaultURL:1===e.data.user.sessionrest?se:ee},s={};switch(e.data.user.sessionrest){case 1:s={righttype:a.USER};break;case 2:s={righttype:a.ADMIN};break;default:s={righttype:a.NORIGHT}}return localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("userrights",JSON.stringify(s)),t},F=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(p.a)(n,2),l=i[0],d=i[1],o=Object(c.useState)(""),j=Object(p.a)(o,2),m=j[0],h=j[1],x=function(){var e=Object(u.a)(b.a.mark((function e(t){var a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:s,password:l},r=N({}),e.next=5,r.post(_,a);case 5:if(200!==(c=e.sent).status||200!==c.data.status){e.next=12;break}return e.next=9,M(c.data);case 9:window.location.reload(!1),e.next=13;break;case 12:h("Email and Password does not match!!");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){switch(e.target.name){case"email":a(e.target.value);break;case"password":d(e.target.value)}};return Object(r.jsxs)("div",{id:"formContent",children:[Object(r.jsx)("div",{className:"fadeIn first mblogo",children:Object(r.jsx)("img",{src:Q,id:"icon",alt:"User Icon"})}),Object(r.jsx)("div",{className:"login-alert",children:m}),Object(r.jsxs)("form",{method:"post",onSubmit:x,children:[Object(r.jsx)("input",{type:"text",id:"email",onChange:O,className:"fadeIn second",name:"email",placeholder:"email"}),Object(r.jsx)("input",{type:"password",id:"password",onChange:O,className:"fadeIn third",name:"password",placeholder:"password"}),Object(r.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Log In"})]}),Object(r.jsxs)("div",{id:"formFooter",children:[Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsx)(E,{className:"underlineHover",href:W,children:"Forgot Password?"})}),Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsx)(E,{className:"underlineHover",href:Y,children:"Register"})})]})]})},P=function(){return Object(r.jsxs)("div",{id:"formContent",children:[Object(r.jsx)("div",{className:"fadeIn first mblogo",children:Object(r.jsx)("img",{src:Q,id:"icon",alt:"User Icon"})}),Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",id:"email",className:"fadeIn second",name:"email",placeholder:"email"}),Object(r.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Send Email"})]}),Object(r.jsx)("div",{id:"formFooter",children:Object(r.jsx)(E,{className:"underlineHover",href:Z,children:"Login"})})]})},T=function(){return Object(r.jsxs)("div",{id:"formContent",children:[Object(r.jsx)("div",{className:"fadeIn first mblogo",children:Object(r.jsx)("img",{src:Q,id:"icon",alt:"User Icon"})}),Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",id:"username",className:"fadeIn second",name:"username",placeholder:"Username"}),Object(r.jsx)("input",{type:"text",id:"email",className:"fadeIn second",name:"email",placeholder:"Email"}),Object(r.jsx)("input",{type:"password",id:"password",className:"fadeIn second",name:"password",placeholder:"Password"}),Object(r.jsx)("input",{type:"password",id:"confirmpassword",className:"fadeIn second",name:"confirmpassword",placeholder:"Confirm Password"}),Object(r.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Register"})]}),Object(r.jsx)("div",{id:"formFooter",children:Object(r.jsx)(E,{className:"underlineHover",href:Z,children:"Login"})})]})},X=function(e){e.state;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"col-lg-12 grid-margin stretch-card",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h4",{className:"card-title",children:"Striped Table"}),Object(r.jsxs)("p",{className:"card-description",children:[" Add class ",Object(r.jsx)("code",{children:".table-striped"})]}),Object(r.jsxs)("table",{className:"table table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:" User "}),Object(r.jsx)("th",{children:" First name "}),Object(r.jsx)("th",{children:" Progress "}),Object(r.jsx)("th",{children:" Amount "}),Object(r.jsx)("th",{children:" Deadline "})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-1.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Herman Beck "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"25%"}})})}),Object(r.jsx)("td",{children:" $ 77.99 "}),Object(r.jsx)("td",{children:" May 15, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-2.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Messsy Adam "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:"75%"}})})}),Object(r.jsx)("td",{children:" $245.30 "}),Object(r.jsx)("td",{children:" July 1, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-3.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" John Richards "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-warning",role:"progressbar",style:{width:"90%"}})})}),Object(r.jsx)("td",{children:" $138.00 "}),Object(r.jsx)("td",{children:" Apr 12, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-4.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Peter Meggik "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-primary",role:"progressbar",style:{width:"50%"}})})}),Object(r.jsx)("td",{children:" $ 77.99 "}),Object(r.jsx)("td",{children:" May 15, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-1.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Edward "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:"35%"}})})}),Object(r.jsx)("td",{children:" $ 160.25 "}),Object(r.jsx)("td",{children:" May 03, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-2.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" John Doe "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"65%"}})})}),Object(r.jsx)("td",{children:" $ 123.21 "}),Object(r.jsx)("td",{children:" April 05, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-3.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Henry Tom "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-warning",role:"progressbar",style:{width:"20%"}})})}),Object(r.jsx)("td",{children:" $ 150.00 "}),Object(r.jsx)("td",{children:" June 16, 2015 "})]})]})]})]})})})})},H=s(29),G=s.n(H),K=function(){return Object(c.useEffect)((function(){localStorage.removeItem("user"),localStorage.removeItem("userrights"),window.location.reload(!1)})),Object(r.jsx)("div",{children:"logout"})},V=!0,z="/auth",Z="/auth/login",W="/auth/forgot",Y="/auth/register",q="/logout",$="/api/monitoring/sessioncheck",_="/api/monitoring/validateuser",ee="/admin",te="/user",se="/user/home",ae="/user/report",re="/user/report/piechart",ce=[{path:z,component:L,isAuth:!1,routes:[{path:Z,component:F,isAuth:!1},{path:W,component:P,isAuth:!1},{path:Y,component:T,isAuth:!1},{path:q,component:K,isAuth:!0}]},{path:ee,component:R,isAuth:!0},{path:te,component:U,isAuth:!0,routes:[{path:se,component:X,isAuth:!0,isDisplay:!0,displayName:"Dashboard"},{path:"/user/program",component:function(){var e=[{column:"name",displayname:"Name",display:!0},{column:"job",displayname:"Job",display:!0},{column:"department",displayname:"Depertment",display:!0},{column:"team",displayname:"Team Strenth",display:!0},{column:"empId",display:!1},{button:!0,displayname:"Button1",display:!0,column:function(e){return Object(r.jsxs)("button",{type:"button",onClick:function(t){return s=e.empId,void console.log("empId",s);var s},children:["Test",e.empId]})}}],t=[{name:"Ashish",job:"SoftWare Engineer",department:"MB",team:3,empId:1},{name:"Nishant",job:"Business",department:"Data2C",team:4,empId:2},{name:"Mukesh",job:"Banker",department:"Data2C",team:5,empId:3},{name:"Shashi",job:"Home Maker",department:"Data2C",team:7,empId:3},{name:"Kanika",job:"Business",department:"Data2C",team:9,empId:5}];return Object(r.jsxs)("div",{className:"col-lg-12 grid-margin stretch-card",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)(G.a,{headers:e,data:t,filter:!0,pagination:!0,pageSize:2,defaultstyle:!1})})})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)(G.a,{headers:e,data:t,tableClass:"table table-striped",filter:!0,pagination:!1,pageSize:3,defaultstyle:!1})})})})]})},isAuth:!0,isDisplay:!0,displayName:"Programs",icon:"mdi-file-document"},{path:ae,component:X,isAuth:!0,isDisplay:!0,displayName:"Reports",icon:"mdi-format-list-bulleted",routes:[{path:"/user/report/summery",component:X,isAuth:!0,isDisplay:!0,displayName:"Summery",icon:"mdi-format-list-bulleted"},{path:"/user/report/grid",component:X,isAuth:!0,isDisplay:!0,displayName:"Grid View"},{path:"/user/report/graph",component:X,isAuth:!0,isDisplay:!0,displayName:"Graph View",icon:"mdi-chart-bar"},{path:re,component:X,isAuth:!0,isDisplay:!0,displayName:"Piechart",icon:"mdi-chart-pie"},{path:re,component:X,isAuth:!0,isDisplay:!1,displayName:"Do Not Display",icon:"mdi-chart-pie"}]},{path:"/user/form",component:X,isAuth:!0,isDisplay:!0,displayName:"FORM",icon:"mdi-format-align-justify"}]},{path:q,component:K,isAuth:!0}],ne=function(){return Object(r.jsx)(C,{children:Object(r.jsxs)(o.d,{children:[ce.map((function(e,t){return Object(r.jsx)(S,Object(d.a)({},e),t)})),";",Object(r.jsx)(y.Consumer,{children:function(e){var t=e.defaultURL;return Object(r.jsx)(o.a,{exact:!0,path:"/",to:t})}})]})})};var ie=function(){return Object(r.jsx)(A,{children:Object(r.jsx)(ne,{})})},le=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,116)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),r(e),c(e),n(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(ie,{})}),document.getElementById("root")),le()},60:function(e,t,s){},61:function(e,t,s){},83:function(e,t){},85:function(e,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.60f4fc06.chunk.js.map