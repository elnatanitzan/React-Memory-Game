(this["webpackJsonpmemory-game-hooks"]=this["webpackJsonpmemory-game-hooks"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(5),r=t.n(a),o=t(4),d=t(2),i=(t(10),t(0));function j(e){var c=e.card,t=e.handleSelect,n=e.disabled,s=e.flipped;return Object(i.jsx)("div",{className:!0===c.matched?"card open":"card",children:Object(i.jsxs)("div",{className:s?"flipped":"",children:[Object(i.jsx)("img",{className:"front",src:c.src,alt:"front of card id: ".concat(c.id)}),Object(i.jsx)("img",{className:"back",src:"././photos/card.jpg",alt:"cover",onClick:function(){n||t(c)}})]})})}t(12);var l=[{src:"././photos/1.png",matched:!1},{src:"././photos/2.png",matched:!1},{src:"././photos/3.png",matched:!1},{src:"././photos/4.png",matched:!1},{src:"././photos/5.png",matched:!1},{src:"././photos/6.png",matched:!1}];var h=function(){var e=Object(n.useState)([]),c=Object(d.a)(e,2),t=c[0],s=c[1],a=Object(n.useState)(0),r=Object(d.a)(a,2),h=r[0],u=r[1],b=Object(n.useState)(null),m=Object(d.a)(b,2),p=m[0],O=m[1],f=Object(n.useState)(null),x=Object(d.a)(f,2),g=x[0],v=x[1],N=Object(n.useState)(!1),S=Object(d.a)(N,2),k=S[0],w=S[1],y=function(){var e=[].concat(l,l).sort((function(){return Math.random()-.5})).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{id:Math.random()})}));O(null),v(null),s(e),u(0)},M=function(e){console.log(e),p?v(e):O(e)};Object(n.useEffect)((function(){p&&g&&(w(!0),p.src===g.src?(p.matched=!0,g.matched=!0,s(t),E()):setTimeout((function(){return E()}),1e3))}),[p,g,t]);var E=function(){O(null),v(null),u((function(e){return e+1})),w(!1)};return Object(n.useEffect)((function(){y()}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{children:[Object(i.jsx)("h2",{children:"Memory Game"}),Object(i.jsx)("h4",{children:"React using Hooks"})]}),Object(i.jsx)("div",{className:"main",children:Object(i.jsx)("div",{className:"cards",children:t.map((function(e){return Object(i.jsx)(j,{card:e,handleSelect:M,disabled:k,flipped:e===p||e===g||e.matched},e.id)}))})}),Object(i.jsxs)("footer",{children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("p",{children:"Steps: "}),Object(i.jsx)("p",{className:"steps",children:h})]}),Object(i.jsx)("div",{className:"new-game",children:Object(i.jsx)("button",{onClick:y,children:"New Game"})})]})]})};t(13);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.52e54d77.chunk.js.map