(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},56:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(29),r=n.n(a),i=(n(35),n(9)),j=n(3),o=(n(36),n(11)),l=n.n(o),h=n(13),b=n(12),d=n(14),u=n.n(d),p=(n(56),n(1)),O=function(e){var t=e.title,n=e.description,s=e.url,c=e.urlToImage;return Object(p.jsx)("div",{className:"news_item",children:Object(p.jsxs)("div",{className:"news_sub",children:[Object(p.jsx)("img",{className:"news_img",align:"right",src:c,alt:c}),Object(p.jsx)("h3",{children:Object(p.jsx)("a",{className:"news_a",href:s,target:"_blank",rel:"noreferrer",children:t})}),Object(p.jsx)("p",{children:n})]})})},x=n(15),m=n.n(x);function f(){return Object(p.jsx)("div",{className:"spinner",children:Object(p.jsx)(m.a,{type:"Puff",color:"#645244",height:100,width:100,timeout:3e3})})}var v=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://raw.githubusercontent.com/yanghuijin1214/news_json/main/topheadline.json");case 2:t=e.sent,c(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("section",{id:"header",children:[Object(p.jsx)("span",{id:"header_bef"}),Object(p.jsx)("h1",{className:"header_txt",children:"Top 20"}),Object(p.jsx)("span",{id:"header_aft"})]}),Object(p.jsx)("div",{className:"news_list",children:0!==n.length?n.map((function(e){var t=e.title,n=e.description,s=e.url,c=e.urlToImage;return Object(p.jsx)(O,{title:t,description:n,url:s,urlToImage:c})})):Object(p.jsx)(f,{})})]})};function g(){return Object(p.jsx)("div",{className:"spinner",children:Object(p.jsx)(m.a,{type:"Puff",color:"#645244",height:100,width:100,timeout:3e3})})}var w=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(b.a)(a,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){j(window.location.href.split("/").pop()),function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://raw.githubusercontent.com/yanghuijin1214/news_json/main/"+window.location.href.split("/").pop()+".json");case 2:t=e.sent,c(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("section",{id:"header",children:[Object(p.jsx)("span",{id:"header_bef"}),Object(p.jsx)("h1",{className:"header_txt",children:i}),Object(p.jsx)("span",{id:"header_aft"})]}),Object(p.jsx)("div",{className:"news_list",children:0!==n.length?n.map((function(e){var t=e.title,n=e.description,s=e.url,c=e.urlToImage;return Object(p.jsx)(O,{title:t,description:n,url:s,urlToImage:c})})):Object(p.jsx)(g,{})})]})};var N=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("h1",{className:"main_txt",children:"Korea Comprehensive News"})}),Object(p.jsxs)(i.a,{children:[Object(p.jsxs)("div",{className:"link_wrapper",children:[Object(p.jsx)(i.b,{className:"link",to:"/",children:"Top 20"}),Object(p.jsx)(i.b,{className:"link",to:"/business",children:"business"}),Object(p.jsx)(i.b,{className:"link",to:"/entertainment",children:"entertainment"}),Object(p.jsx)(i.b,{className:"link",to:"/health",children:"health"}),Object(p.jsx)(i.b,{className:"link",to:"/science",children:"science"}),Object(p.jsx)(i.b,{className:"link",to:"/sports",children:"sports"}),Object(p.jsx)(i.b,{className:"link",to:"technology",children:"technology"})]}),Object(p.jsx)(j.a,{path:"/",exact:!0,component:v}),Object(p.jsx)(j.a,{path:"/business",component:w}),Object(p.jsx)(j.a,{path:"/entertainment",component:w}),Object(p.jsx)(j.a,{path:"/health",component:w}),Object(p.jsx)(j.a,{path:"/science",component:w}),Object(p.jsx)(j.a,{path:"/sports",component:w}),Object(p.jsx)(j.a,{path:"/technology",component:w})]}),Object(p.jsxs)("div",{className:"bottom",children:[Object(p.jsx)("p",{className:"bottom_txt",children:"Copyright \xa9 2021 All rights reserved."}),Object(p.jsxs)("p",{children:["Yang Huijin ",Object(p.jsx)("br",{}),"Email: yangjinee@naver.com "]})]})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.ac86b2bd.chunk.js.map