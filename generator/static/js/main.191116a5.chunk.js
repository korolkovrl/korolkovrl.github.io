(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),s=n.n(r),i=(n(12),n(4)),h=n(5),l=n(7),d=n(6),o=(n(13),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={loadedCharacter:!1,imageUrl:null,name:null,species:null,gender:null},e}return Object(h.a)(n,[{key:"getNewCharacter",value:function(){var e=this,t=Math.round(671*Math.random()),n="https://rickandmortyapi.com/api/character/".concat(t);fetch(n).then((function(e){return e.json()})).then((function(t){e.setState({imageUrl:t.image,name:t.name,species:t.species,gender:t.gender,loadedCharacter:!0})}))}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[this.state.loadedCharacter&&Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("p",{children:Object(o.jsx)("img",{src:this.state.imageUrl,alt:this.state.name,className:"img"})}),Object(o.jsx)("h1",{children:this.state.name}),Object(o.jsx)("p",{children:this.state.species}),Object(o.jsx)("p",{children:this.state.gender})]}),Object(o.jsx)("button",{type:"button",onClick:function(){return e.getNewCharacter()},className:"btn",children:"Randomize Character"})]})})}}]),n}(c.a.Component);var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(j,{})})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.191116a5.chunk.js.map