(this["webpackJsonpcardano-explorer"]=this["webpackJsonpcardano-explorer"]||[]).push([[0],{16:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(16),n.p+"static/media/logo.b2e5a01e.svg"),u=n(11),i=n(3),l=n(8),d=n.n(l),j=n(10),b=n(4);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var h=Object(b.b)("counter/fetchCount",function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),f=x.actions,m=f.increment,O=f.decrement,v=f.incrementByAmount,_=function(e){return e.counter.value},g=x.reducer,k=n(2),N=n.n(k),A=n(1);function C(){var e=Object(i.c)(_),t=Object(i.b)(),n=Object(r.useState)("2"),a=Object(u.a)(n,2),c=a[0],o=a[1],s=Number(c)||0;return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:N.a.row,children:[Object(A.jsx)("button",{className:N.a.button,"aria-label":"Decrement value",onClick:function(){return t(O())},children:"-"}),Object(A.jsx)("span",{className:N.a.value,children:e}),Object(A.jsx)("button",{className:N.a.button,"aria-label":"Increment value",onClick:function(){return t(m())},children:"+"})]}),Object(A.jsxs)("div",{className:N.a.row,children:[Object(A.jsx)("input",{className:N.a.textbox,"aria-label":"Set increment amount",value:c,onChange:function(e){return o(e.target.value)}}),Object(A.jsx)("button",{className:N.a.button,onClick:function(){return t(v(s))},children:"Add Amount"}),Object(A.jsx)("button",{className:N.a.asyncButton,onClick:function(){return t(h(s))},children:"Add Async"}),Object(A.jsx)("button",{className:N.a.button,onClick:function(){return t((e=s,function(t,n){_(n())%2===1&&t(v(e))}));var e},children:"Add If Odd"})]})]})}n(25);var w=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(A.jsx)(C,{}),Object(A.jsxs)("p",{children:["Edit ",Object(A.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(A.jsxs)("span",{children:[Object(A.jsx)("span",{children:"Learn "}),Object(A.jsx)("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"}),Object(A.jsx)("span",{children:", "}),Object(A.jsx)("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),Object(A.jsx)("span",{children:", "}),Object(A.jsx)("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux Toolkit"}),",",Object(A.jsx)("span",{children:" and "}),Object(A.jsx)("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"React Redux"})]})]})})},y=Object(b.a)({reducer:{counter:g}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(i.a,{store:y,children:Object(A.jsx)(w,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.fc61c605.chunk.js.map