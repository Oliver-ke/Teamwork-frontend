(this["webpackJsonpteamwork-frontend"]=this["webpackJsonpteamwork-frontend"]||[]).push([[0],{174:function(e,t,r){e.exports=r.p+"static/media/team.bcdbf0b8.svg"},190:function(e,t,r){e.exports=r(322)},320:function(e,t,r){},322:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(31),c=r.n(o),l=r(55),u=r(109),i=r(38),s=r(336),p=r(21),m=r(180),f=r(45),b=r(333),d=r(335),O=r(332),h=r(323),E=r(56),y=r.n(E),g=r(81),v=r(158),j=r.n(v);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach((function(t){Object(p.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(){var e=Object(g.a)(y.a.mark((function e(t,r){var n,a,o,c,l,u=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:null,o={method:r,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:n?JSON.stringify(n):""},e.prev=3,e.next=6,fetch(t,o);case 6:return c=e.sent,e.next=9,c.json();case 9:return l=e.sent,e.abrupt("return",P({},l,{statusCode:c.status}));case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t,r){return e.apply(this,arguments)}}();function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var k=function(e){var t=e.loginUser,r=e.clearAuthError,o=e.auth,c=e.history,l=Object(n.useState)({email:"",password:""}),u=Object(m.a)(l,2),i=u[0],s=u[1];Object(n.useEffect)((function(){o.isAuthenticated&&c.push("/dashboard")}),[o.isAuthenticated,c]);var E=function(e){var t=e.target,r=t.value,n=t.name;return s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach((function(t){Object(p.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},i,Object(p.a)({},n,r)))},y=o.loading,g=o.error;return a.a.createElement("div",{className:"login-container"},a.a.createElement("h1",null,a.a.createElement(f.a,{name:"user circle outline",size:"big"})," ",a.a.createElement("br",null)," Login"),a.a.createElement(b.a,{error:!!g,loading:y,onSubmit:function(){return i.email&&i.password?t(i):"error"}},a.a.createElement(d.a,{onDismiss:r,error:!0,header:"Authentication Error",content:"Incorrect email or password"}),a.a.createElement(b.a.Field,null,a.a.createElement("label",null,"Email"),a.a.createElement(O.a,{size:"large",iconPosition:"left",placeholder:"Email"},a.a.createElement(f.a,{name:"at"}),a.a.createElement("input",{name:"email",value:i.email,onChange:E,type:"email"}))),a.a.createElement(b.a.Field,null,a.a.createElement("label",null,"Password"),a.a.createElement(O.a,{size:"large",iconPosition:"left",placeholder:"password"},a.a.createElement(f.a,{name:"key"}),a.a.createElement("input",{name:"password",value:i.password,onChange:E,type:"password"}))),a.a.createElement(h.a,{fluid:!0,size:"large",type:"submit"},"Login")))};k.defaultProps={history:{}};var D=Object(l.b)((function(e){return{auth:e.auth}}),{loginUser:function(e){return function(){var t=Object(g.a)(y.a.mark((function t(r){var n,a,o,c,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u="/auth/signin",n="".concat("https://teammi.herokuapp.com/api/v1").concat(u),r({type:"AUTH_LOADING"}),t.next=4,R(n,"POST",e);case 4:if(200===(a=t.sent).statusCode){t.next=7;break}return t.abrupt("return",r({type:"AUTH_ERROR",payload:a}));case 7:return o=a.data,c=o.token,localStorage.setItem("jwtToken",c),l=j()(c),t.abrupt("return",r({type:"SET_CURRENT_USER",payload:{user:l,token:c}}));case 12:case"end":return t.stop()}var u}),t)})));return function(e){return t.apply(this,arguments)}}()},clearAuthError:function(){return function(e){e({type:"CLEAR_AUTH_ERROR"})}}})(k),S=r(179),T=r(174),U=r.n(T),_=function(){return a.a.createElement("div",{className:"aside"},a.a.createElement("h1",{className:"logo"},"<","Team",a.a.createElement("span",null,"Work","/>")),a.a.createElement(S.a,{size:"large",src:U.a,centered:!0}))},C=function(e){var t=e.history;return a.a.createElement(s.a,{verticalAlign:"middle"},a.a.createElement(s.a.Row,null,a.a.createElement(s.a.Column,{only:"large screen",computer:8},a.a.createElement(_,null)),a.a.createElement(s.a.Column,{stretched:!0,mobile:16,computer:8},a.a.createElement(D,{history:t}))))},x=r(175),N=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,r=e.auth,n=Object(x.a)(e,["component","auth"]);return a.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===r.isAuthenticated?a.a.createElement(t,e):a.a.createElement(i.a,{to:"/"})}}))})),H=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Hello Welcome to Dashboard"))},z=r(36),L=r(177),I=r(178);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(r,!0).forEach((function(t){Object(p.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B={isAuthenticated:!1,user:{},token:"",error:null,loading:!1},F=Object(z.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return W({},e,{isAuthenticated:!!t.payload,user:t.payload.user,token:t.payload.token,loading:!1});case"AUTH_LOADING":return W({},e,{loading:!0});case"AUTH_ERROR":return W({},e,{error:t.payload,loading:!1});case"CLEAR_AUTH_ERROR":return W({},e,{error:null});default:return e}}}),G=[I.a],M=Object(z.createStore)(F,{},Object(L.composeWithDevTools)(z.applyMiddleware.apply(void 0,G))),q=(r(320),function(){return a.a.createElement(l.a,{store:M},a.a.createElement(u.a,null,a.a.createElement(i.d,null,a.a.createElement(N,{exact:!0,path:"/dashboard",component:H})),a.a.createElement(i.b,{exact:!0,path:"/",component:C})))});r(321);c.a.render(a.a.createElement(q,null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.cfffc49d.chunk.js.map