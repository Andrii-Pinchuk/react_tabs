(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(4),i=n(5),l=n(8),r=n(7),b=n(1),d=n.n(b),o=n(6),j=n.n(o),u=n(0),h=function(e){var t,n=e.tabs,a=e.selectedTabId,c=e.selectTab;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"nav nav-tabs",children:n.map((function(e){return Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{href:e.id,className:j()("nav-link",{active:e.id===a}),onClick:function(t){t.preventDefault(),c(e)},children:e.title})},e.id)}))}),Object(u.jsx)("p",{className:"mt-2",children:null===(t=n.find((function(e){return e.id===a})))||void 0===t?void 0:t.content})]})},m=(n(14),n(15),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),v=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:m[0]},e.onTabSelected=function(t){e.setState({selectedTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.selectedTab;return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"App w-100 mt-4",children:[Object(u.jsx)("h1",{children:"Selected tab is ".concat(e.title)}),Object(u.jsx)(h,{tabs:m,selectedTabId:e.id,selectTab:this.onTabSelected})]})})}}]),n}(d.a.Component),f=v;c.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c068c33d.chunk.js.map