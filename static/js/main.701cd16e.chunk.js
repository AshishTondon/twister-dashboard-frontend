(this["webpackJsonptwister-dashboard-frontend"]=this["webpackJsonptwister-dashboard-frontend"]||[]).push([[0],{103:function(e,t,s){"use strict";s.r(t);var a,r=s(0),c=s(1),n=s.n(c),i=s(50),o=s.n(i),l=(s(59),s(4)),d=s(13),j=s(2),b=(s(60),s(28)),m=s(10),u=s.n(m),p=s(20),h=s(15),O=s(51),x=s.n(O),g=s(25),f=s.n(g),v=s(52),N=s.n(v),y=function(e){var t=e.header,s=void 0===t?{}:t;return x.a.create({timeout:6e4,httpAgent:new f.a.Agent({keepAlive:!0}),httpsAgent:new N.a.Agent({keepAlive:!0}),maxRedirects:10,headers:s,maxContentLength:5e7,baseURL:"https://twister-dashboard-backend.herokuapp.com"})};!function(e){e[e.NORIGHT=0]="NORIGHT",e[e.ADMIN=1]="ADMIN",e[e.USER=2]="USER"}(a||(a={}));var A=Object(c.createContext)({}),w=function(e){var t={isLogin:!1,token:"",email:"",displayName:"",defaultURL:H},s={righttype:a.NORIGHT},n=localStorage.getItem("user"),i=Object(c.useState)(void 0!==n&&null!=n?JSON.parse(n):t),o=Object(h.a)(i,2),l=o[0],d=o[1],j=localStorage.getItem("userrights"),b=Object(c.useState)(void 0!==j&&null!==j?JSON.parse(j):s),m=Object(h.a)(b,2),O=m[0],x=m[1],g=function(){var e=Object(p.a)(u.a.mark((function e(t){var s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=y({header:{Authorization:"Bearer ".concat(t)}}),e.prev=1,e.next=4,s.post("/api/monitoring/sessioncheck",{});case 4:return a=e.sent,e.abrupt("return",200===a.status);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.hasOwnProperty("user")&&localStorage.hasOwnProperty("userrights")){e.next=7;break}localStorage.removeItem("user"),localStorage.removeItem("userrights"),d(t),x(s),e.next=15;break;case 7:if(!(l.hasOwnProperty("token")&&l.token.length>0&&O.hasOwnProperty("righttype"))){e.next=15;break}return e.next=10,g(l.token);case 10:if(e.sent){e.next=15;break}localStorage.removeItem("user"),localStorage.removeItem("userrights"),d(t),x(s);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),Object(r.jsx)(A.Provider,{value:l,children:e.children})},L=function(e){var t=e.route,s=Object(b.a)(e,["route"]);return Object(r.jsx)(A.Consumer,{children:function(e){var a=e.isLogin,c=e.defaultURL;return Object(r.jsx)(j.b,Object(l.a)(Object(l.a)({},s),{},{render:function(e){return a?Object(r.jsx)(j.a,{to:{pathname:c,state:{from:e.location}}}):Object(r.jsx)(t.component,Object(l.a)(Object(l.a)({},e),{},{routes:t.routes}))}}))}})},I=function(e){var t=e.route,s=Object(b.a)(e,["route"]);return Object(r.jsx)(A.Consumer,{children:function(e){return Object(r.jsx)(j.b,Object(l.a)(Object(l.a)({},s),{},{render:function(s){return e.isLogin?Object(r.jsx)(t.component,Object(l.a)(Object(l.a)({},s),{},{routes:t.routes,state:e})):Object(r.jsx)(j.a,{to:{pathname:e.defaultURL,state:{from:s.location}}})}}))}})},E=function(e){return e.isAuth?Object(r.jsx)(I,{route:e}):Object(r.jsx)(L,{route:e})},C=function(e){var t=e.routes;return Object(r.jsxs)("div",{className:"wrapper fadeInDown",children:[Object(r.jsx)("link",{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",rel:"stylesheet"}),Object(r.jsx)("script",{src:"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"}),Object(r.jsx)("script",{src:"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"}),Object(r.jsx)(d.a,{basename:F,children:Object(r.jsx)(j.d,{children:t.map((function(e,t){return Object(r.jsx)(E,Object(l.a)({},e),t)}))})})]})},k=function(e){var t=e.username;return Object(r.jsxs)("nav",{className:"navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row",children:[Object(r.jsxs)("div",{className:"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center",children:[Object(r.jsx)("a",{className:"navbar-brand brand-logo",href:"index.html",children:Object(r.jsx)("img",{src:"/assets/images/logo.svg",alt:"Twister"})}),Object(r.jsx)("a",{className:"navbar-brand brand-logo-mini",href:"index.html",children:Object(r.jsx)("img",{src:"/assets/images/logo-mini.svg",alt:"Twister"})})]}),Object(r.jsxs)("div",{className:"navbar-menu-wrapper d-flex align-items-stretch",children:[Object(r.jsx)("button",{className:"navbar-toggler navbar-toggler align-self-center",type:"button","data-toggle":"minimize",onClick:function(){document.body.classList.contains("sidebar-toggle-display")||document.body.classList.contains("sidebar-absolute")?document.body.classList.toggle("sidebar-hidden"):document.body.classList.toggle("sidebar-icon-only")},children:Object(r.jsx)("span",{className:"mdi mdi-menu"})}),Object(r.jsx)("ul",{className:"navbar-nav navbar-nav-right",children:Object(r.jsxs)("li",{className:"nav-item nav-profile dropdown",children:[Object(r.jsxs)("a",{className:"nav-link dropdown-toggle",id:"profileDropdown",href:"/#","data-toggle":"dropdown","aria-expanded":"false",children:[Object(r.jsxs)("div",{className:"nav-profile-img",children:[Object(r.jsx)("img",{src:"/assets/images/faces/face1.png",alt:"Avtar"}),Object(r.jsx)("span",{className:"availability-status online"})]}),Object(r.jsx)("div",{className:"nav-profile-text",children:Object(r.jsx)("p",{className:"mb-1 text-black",children:t})})]}),Object(r.jsx)("div",{className:"dropdown-menu navbar-dropdown","aria-labelledby":"profileDropdown",children:Object(r.jsxs)("a",{className:"dropdown-item",href:X,children:[Object(r.jsx)("i",{className:"mdi mdi-logout mr-2 text-primary"})," Signout"]})})]})}),Object(r.jsx)("button",{className:"navbar-toggler navbar-toggler-right d-lg-none align-self-center",type:"button","data-toggle":"offcanvas",children:Object(r.jsx)("span",{className:"mdi mdi-menu"})})]})]})},S=function e(t){var s=t.route,a=t.index;if(s.hasOwnProperty("routes")){var c=s.hasOwnProperty("icon")?"mdi ".concat(s.icon," menu-icon"):"mdi mdi-crosshairs-gps menu-icon";return Object(r.jsxs)("li",{className:"nav-item",children:[Object(r.jsxs)("a",{className:"nav-link","data-toggle":"collapse",href:"#"+s.displayName,"aria-expanded":"false","aria-controls":"ui-basic",children:[Object(r.jsx)("span",{className:"menu-title",children:s.displayName}),Object(r.jsx)("i",{className:"menu-arrow"}),Object(r.jsx)("i",{className:c})]}),Object(r.jsx)("div",{className:"collapse",id:s.displayName,children:Object(r.jsx)("ul",{className:"nav flex-column sub-menu",children:s.routes.map((function(t,s){return t.isDisplay?Object(r.jsx)(e,{route:t,index:s}):""}))})})]},a)}var n=s.hasOwnProperty("icon")?"mdi ".concat(s.icon," menu-icon"):"mdi mdi-home menu-icon";return Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsxs)("a",{className:"nav-link",href:s.path,children:[Object(r.jsx)("span",{className:"menu-title",children:s.displayName}),Object(r.jsx)("i",{className:n})]})},a)},P=function(e){var t=e.routes;return Object(r.jsx)("nav",{className:"sidebar sidebar-offcanvas",id:"sidebar",children:Object(r.jsxs)("ul",{className:"nav",children:[t.map((function(e,t){return e.isDisplay?Object(r.jsx)(S,{route:e,index:t}):""})),";"]})})},M=function(e){var t=e.routes,s=e.state;return Object(r.jsxs)("div",{className:"container-scroller",children:[Object(r.jsx)(k,{username:s.displayName}),Object(r.jsxs)("div",{className:"container-fluid page-body-wrapper",children:[Object(r.jsx)(P,{routes:t}),Object(r.jsx)("div",{className:"main-panel",children:Object(r.jsx)("div",{className:"content-wrapper",children:Object(r.jsx)(d.a,{basename:F,children:Object(r.jsx)(j.d,{children:t.map((function(e,t){return Object(r.jsx)(E,Object(l.a)({},e),t)}))})})})})]})]})},B="data:image/png;base64,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",J=function(e){var t={isLogin:e.isLogin,token:e.data.user.token,email:e.data.user.email,displayName:e.data.user.displayName,defaultURL:1===e.data.user.sessionrest?V:q},s={};switch(e.data.user.sessionrest){case 1:s={righttype:a.USER};break;case 2:s={righttype:a.ADMIN};break;default:s={righttype:a.NORIGHT}}return localStorage.setItem("user",JSON.stringify(t)),localStorage.setItem("userrights",JSON.stringify(s)),t},R=function(){var e=Object(c.useState)(""),t=Object(h.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(h.a)(n,2),o=i[0],l=i[1],d=Object(c.useState)(""),j=Object(h.a)(d,2),b=j[0],m=j[1],O=function(){var e=Object(p.a)(u.a.mark((function e(t){var a,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={email:s,password:o},r=y({}),e.next=5,r.post("/api/monitoring/validateuser",a);case 5:if(200!==(c=e.sent).status||200!==c.data.status){e.next=12;break}return e.next=9,J(c.data);case 9:window.location.reload(!1),e.next=13;break;case 12:m("Email and Password does not match!!");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){switch(e.target.name){case"email":a(e.target.value);break;case"password":l(e.target.value)}};return Object(r.jsxs)("div",{id:"formContent",children:[Object(r.jsx)("div",{className:"fadeIn first mblogo",children:Object(r.jsx)("img",{src:B,id:"icon",alt:"User Icon"})}),Object(r.jsx)("div",{className:"login-alert",children:b}),Object(r.jsxs)("form",{method:"post",onSubmit:O,children:[Object(r.jsx)("input",{type:"text",id:"email",onChange:x,className:"fadeIn second",name:"email",placeholder:"email"}),Object(r.jsx)("input",{type:"password",id:"password",onChange:x,className:"fadeIn third",name:"password",placeholder:"password"}),Object(r.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Log In"})]}),Object(r.jsx)("div",{id:"formFooter",children:Object(r.jsx)("a",{className:"underlineHover",href:T,children:"Forgot Password?"})})]})},D=function(e){e.state;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"col-lg-12 grid-margin stretch-card",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h4",{className:"card-title",children:"Striped Table"}),Object(r.jsxs)("p",{className:"card-description",children:[" Add class ",Object(r.jsx)("code",{children:".table-striped"})]}),Object(r.jsxs)("table",{className:"table table-striped",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:" User "}),Object(r.jsx)("th",{children:" First name "}),Object(r.jsx)("th",{children:" Progress "}),Object(r.jsx)("th",{children:" Amount "}),Object(r.jsx)("th",{children:" Deadline "})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-1.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Herman Beck "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-success",role:"progressbar",style:{width:"25%"}})})}),Object(r.jsx)("td",{children:" $ 77.99 "}),Object(r.jsx)("td",{children:" May 15, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-2.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Messsy Adam "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:"75%"}})})}),Object(r.jsx)("td",{children:" $245.30 "}),Object(r.jsx)("td",{children:" July 1, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-3.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" John Richards "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-warning",role:"progressbar",style:{width:"90%"}})})}),Object(r.jsx)("td",{children:" $138.00 "}),Object(r.jsx)("td",{children:" Apr 12, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-4.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Peter Meggik "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-primary",role:"progressbar",style:{width:"50%"}})})}),Object(r.jsx)("td",{children:" $ 77.99 "}),Object(r.jsx)("td",{children:" May 15, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-1.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Edward "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-danger",role:"progressbar",style:{width:"35%"}})})}),Object(r.jsx)("td",{children:" $ 160.25 "}),Object(r.jsx)("td",{children:" May 03, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-2.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" John Doe "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"65%"}})})}),Object(r.jsx)("td",{children:" $ 123.21 "}),Object(r.jsx)("td",{children:" April 05, 2015 "})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"py-1",children:Object(r.jsx)("img",{src:"assets/images/faces-clipart/pic-3.png",alt:"Avtar"})}),Object(r.jsx)("td",{children:" Henry Tom "}),Object(r.jsx)("td",{children:Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"progress-bar bg-warning",role:"progressbar",style:{width:"20%"}})})}),Object(r.jsx)("td",{children:" $ 150.00 "}),Object(r.jsx)("td",{children:" June 16, 2015 "})]})]})]})]})})})})},U=function(){return Object(c.useEffect)((function(){localStorage.removeItem("user"),localStorage.removeItem("userrights"),window.location.reload(!1)})),Object(r.jsx)("div",{children:"logout"})},F="/twister-dashboard-frontend",G="/auth",H="/auth/login",T="/auth/forgot",X="/logout",q="/admin",Y="/user",V="/user/home",Q="/user/report",W="/user/report/piechart",Z=[{path:G,component:C,isAuth:!1,routes:[{path:H,component:R,isAuth:!1},{path:T,component:function(){return Object(r.jsxs)("div",{id:"formContent",children:[Object(r.jsx)("div",{className:"fadeIn first mblogo",children:Object(r.jsx)("img",{src:B,id:"icon",alt:"User Icon"})}),Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",id:"email",className:"fadeIn second",name:"email",placeholder:"email"}),Object(r.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Send Email"})]})]})},isAuth:!1},{path:"/auth/register",component:function(){return Object(r.jsxs)("div",{id:"formContent",children:[Object(r.jsx)("div",{className:"fadeIn first mblogo",children:Object(r.jsx)("img",{src:B,id:"icon",alt:"User Icon"})}),Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",id:"username",className:"fadeIn second",name:"username",placeholder:"Username"}),Object(r.jsx)("input",{type:"text",id:"email",className:"fadeIn second",name:"email",placeholder:"Email"}),Object(r.jsx)("input",{type:"password",id:"password",className:"fadeIn second",name:"password",placeholder:"Password"}),Object(r.jsx)("input",{type:"password",id:"confirmpassword",className:"fadeIn second",name:"confirmpassword",placeholder:"Confirm Password"}),Object(r.jsx)("input",{type:"submit",className:"fadeIn fourth",value:"Register"})]})]})},isAuth:!1},{path:X,component:U,isAuth:!0}]},{path:q,component:function(){return Object(r.jsx)("div",{children:"Admin Frame"})},isAuth:!0},{path:Y,component:M,isAuth:!0,routes:[{path:V,component:D,isAuth:!0,isDisplay:!0,displayName:"Dashboard"},{path:"/user/program",component:D,isAuth:!0,isDisplay:!0,displayName:"Programs",icon:"mdi-file-document"},{path:Q,component:D,isAuth:!0,isDisplay:!0,displayName:"Reports",icon:"mdi-format-list-bulleted",routes:[{path:"/user/report/summery",component:D,isAuth:!0,isDisplay:!0,displayName:"Summery",icon:"mdi-format-list-bulleted"},{path:"/user/report/grid",component:D,isAuth:!0,isDisplay:!0,displayName:"Grid View"},{path:"/user/report/graph",component:D,isAuth:!0,isDisplay:!0,displayName:"Graph View",icon:"mdi-chart-bar"},{path:W,component:D,isAuth:!0,isDisplay:!0,displayName:"Piechart",icon:"mdi-chart-pie"},{path:W,component:D,isAuth:!0,isDisplay:!1,displayName:"Do Not Display",icon:"mdi-chart-pie"}]},{path:"/user/form",component:D,isAuth:!0,isDisplay:!0,displayName:"FORM",icon:"mdi-format-align-justify"}]},{path:X,component:U,isAuth:!0}],z=function(){return Object(r.jsx)(d.a,{basename:F,children:Object(r.jsxs)(j.d,{children:[Z.map((function(e,t){return Object(r.jsx)(E,Object(l.a)({},e),t)})),";",Object(r.jsx)(A.Consumer,{children:function(e){var t=e.defaultURL;return Object(r.jsx)(j.a,{exact:!0,path:"/",to:t})}})]})})};var K=function(){return Object(r.jsx)(w,{children:Object(r.jsx)(z,{})})},$=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,104)).then((function(t){var s=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),r(e),c(e),n(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root")),$()},59:function(e,t,s){},60:function(e,t,s){},82:function(e,t){},84:function(e,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.701cd16e.chunk.js.map