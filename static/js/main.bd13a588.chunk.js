(this.webpackJsonpmallu=this.webpackJsonpmallu||[]).push([[0],{15:function(e,a,t){e.exports=t(50)},20:function(e,a,t){},21:function(e,a,t){},44:function(e,a){},45:function(e,a){},46:function(e,a){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),i=(t(20),t(2)),o=(t(21),function(e){return r.a.createElement("div",{className:"headerAppContainer"},r.a.createElement("div",null,"MALLU"),r.a.createElement("div",null,["Aa","Aaaa","E","U","Ea","Eaa","O","Ka","Kha","Ga","Gha","Inga","Cha","Chha","Ja","Jha","Inha","Ta","Tta","Da","Dda","Nha","Tha","Thha","Dha","Dhha","Na","Pa","Ffa","Ba","Bha","Ma","Ya","Ra","Rha","La","Lha","Zha","Va","Sha","Shha","Sa","Ha","Inh","In","Irr","Ill","Ilh"][e.alphabet]),r.a.createElement("div",{onClick:function(){e.clear()}},r.a.createElement("img",{src:"/mallu/images/duster.svg",className:"icon icon-duster",alt:"clean"})),r.a.createElement("div",{style:{opacity:"".concat(null==e.alphabet?0:1)}},e.loading?r.a.createElement("img",{src:"/mallu/images/spinner.png",className:"icon icon-spinner",alt:"alphabet"}):r.a.createElement("img",{src:"/mallu"+"/characters/character (".concat(e.alphabet+1,").svg"),className:"icon",alt:"alphabet"})))}),s=t(13),u=t.n(s),h=t(14),m=(t(47),function(e){var a=e.height,t=e.width,c=e.alphabetIs,l=e.alphabet,i=e.clear,o=e.loading,s=e.setLoading,m=Object(n.useRef)(null);Object(n.useEffect)((function(){m.current=new h.fabric.Canvas("c"),m.current.freeDrawingBrush.width=8,m.current.backgroundColor="white",m.current.isDrawingMode=!0,m.current.freeDrawingBrush.color="#000000",m.current.renderAll(),m.current.on("mouse:up",d)}),[]),Object(n.useEffect)((function(){m.current.clear(),m.current.backgroundColor="white",m.current.renderAll()}),[i]);var d=function(e){u.a.post("https://cr-mal.herokuapp.com//predict",{canvas:m.current.toDataURL("image/png")}).then((function(e){c(Number(e.data.alphabet)),s(!1)})),m.current.renderAll(),s(!0)};return r.a.createElement("div",{className:"canvasAppContainer"},r.a.createElement("div",null,r.a.createElement("canvas",{height:a,width:t,id:"c"})),r.a.createElement("div",{className:"canvas-container canvasImage"},o?r.a.createElement("img",{src:"/mallu/images/spinner.png",className:"icon-spinner",alt:"alphabet"}):r.a.createElement("img",{src:"/mallu"+"/characters/character (".concat(l+1,").svg"),alt:"alphabet"})))});m.defaultProps={width:300,height:300};var d=m,p=(t(48),function(){return r.a.createElement("div",{className:"footerContainer"},"Only Single Character \u0d09,\u0d0e not ",r.a.createElement("s",null,"\u0d39\u0d46,\u0d15\u0d46"),r.a.createElement("br",null),"First Conversion may be slow due to free hosting Sry :)")}),g=(t(49),function(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),s=Object(i.a)(l,2),u=s[0],h=s[1],m=Object(n.useState)(!1),g=Object(i.a)(m,2),f=g[0],b=g[1];return r.a.createElement("div",{className:"appContainer"},r.a.createElement(o,{alphabet:t,loading:u,clear:function(){b(!f)}}),r.a.createElement(d,{alphabetIs:function(e){c(e)},alphabet:t,loading:u,setLoading:h,clear:f}),r.a.createElement(p,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bd13a588.chunk.js.map