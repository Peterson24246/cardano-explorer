(this["webpackJsonpcardano-explorer"]=this["webpackJsonpcardano-explorer"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(3),o=t.n(a),i=(t(15),t(10)),u=(t(16),t(1));var s=function e(){var n=Object(r.useState)(""),t=Object(i.a)(n,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){fetch("https://cardano-explorer-backend.herokuapp.com/api/blocks/latest").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Latest Block"}),Object(u.jsx)("p",{children:c})]})},d=t(2),l=t(5),f=t.n(l),h=t(7);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var j=Object(d.b)("counter/fetchCount",function(){var e=Object(h.a)(f.a.mark((function e(n){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),m=Object(d.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.status="loading"})).addCase(j.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),b=m.actions,v=(b.increment,b.decrement,b.incrementByAmount,m.reducer),O=Object(d.a)({reducer:{counter:v}}),x=t(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x.a,{store:O,children:Object(u.jsx)(s,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.eccc1190.chunk.js.map