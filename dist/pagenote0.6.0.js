!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,function(){return i={},o.m=n=[function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getParams=function(t){var e=((t||window.location.href).match(/\?(.*)/)||[])[1],n={},i=[];return e&&e.split("&").forEach(function(t){var e=t.split("=");e[0]&&(i.push(e[0]),n[e[0]]=e[1])}),{paramObj:n,paramKeys:i}},e.encryptData=function(t){return btoa(encodeURI(JSON.stringify(t)))},e.decryptedData=function(t){return JSON.parse(decodeURI(atob(t)))},e.throttle=function(n){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300,o=!0;return function(){var t=this,e=arguments;o&&(o=!1,setTimeout(function(){n.apply(t,e),o=!0},i))}},e.debounce=function(n){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:300,o=null;return function(){var t=this,e=arguments;clearTimeout(o),o=setTimeout(function(){n.apply(t,e)},i)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getViewPosition=e.getWebIcon=e.highlightKeyword=e.getScroll=e.gotoPosition=void 0;var m=n(0);window;function h(t,e,n,i,o){var r=t.splitText(e),a=r.splitText(n-e),l=document.createElement("light");return l.dataset.highlight=o,l.style.backgroundColor=i,l.textContent=r.textContent,r.parentNode.replaceChild(l,r),a}var d=document.documentElement||document.body;function f(){return{x:window.pageXOffset||d.scrollLeft||d.scrollLeft,y:window.pageYOffset||d.scrollTop||d.scrollTop}}function y(l,c,s,u,d){l.nodes.every(function(t,n){var e=l.nodes[n+1];if(void 0===e||e.start>c){if(!u(t.node))return!1;var i=c-t.start,o=(s>t.end?t.end:s)-t.start,r=l.value.substr(0,t.start),a=l.value.substr(o+t.start);if(t.node=h(t.node,i,o,l.color,l.id),l.value=r+a,l.nodes.forEach(function(t,e){n<=e&&(0<l.nodes[e].start&&e!==n&&(l.nodes[e].start-=o),l.nodes[e].end-=o)}),s-=o,d(t.node.previousSibling,t.start),!(s>t.end))return!1;c=t.end}return!0})}e.gotoPosition=function(t,l,c,s){if(c>document.documentElement.clientHeight/2&&t&&t.scrollIntoView)return t.scrollIntoView({block:"center",behavior:"smooth"}),void("function"==typeof s&&setTimeout(function(){return s()},100));var u=setInterval(function(){var t,e,n=f(),i=n.x,o=n.y;t=i+(l-i)/6,e=o+(c-o)/6,d.scrollLeft=t,d.scrollTop=e,window.scrollTo(t,e);var r=f(),a=r.x;o===r.y&&i===a&&(clearInterval(u),"function"==typeof s&&s())},30);return u},e.getScroll=f,e.highlightKeyword=function(t,i,e,n,o,r){var a=3<arguments.length&&void 0!==n?n:"",l=4<arguments.length&&void 0!==o?o:[],c=r;if(t&&i)if(e){t.dataset.highlightbk="y";var s=0,u=[i],d=function(t){var e=[],n={acceptNode:function(t){return 3===t.nodeType?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}},i=document.createNodeIterator(t,NodeFilter.SHOW_TEXT,n,!1),o=void 0,r="";for(;o=i.nextNode();)e.push({node:o,start:r.length,end:(r+=o.textContent).length});return{nodes:e,value:r}}(t);d.id=(0,m.encryptData)(i),d.color=a;var h=0,f=function t(e){var n=new RegExp(i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/[\s]+/gim,"[\\s]+"),"gmi");!function(t,n,e,i,o,r){var a=0===e?0:e+1,l=void 0;for(;null!==(l=n.exec(t.value))&&""!==l[a];){var c=l.index;if(0!==a)for(var s=1;s<a;s++)c+=l[s].length;var u=c+l[a].length;y(t,c,u,function(t){return i(l[a],t)},function(t,e){n.lastIndex=e,o(t)})}r()}(d,n,0,function(t,e){var n=l.some(function(t){return t.contains(e)}),i=e.parentNode||document.body;return h=i.dataset.highlight?h+1:h,!n&&!i.dataset.highlight},function(t){s++},function(){u[u.length-1]===e||t(u[u.indexOf(e)+1])})};0===u.length||(f(u[0]),0===s&&setTimeout(function(){f(u[0])},2e3),"function"==typeof c&&c({totalMatches:s||h}))}else{for(var p=t.querySelectorAll("light[data-highlight='"+(0,m.encryptData)(i)+"']"),g=0;g<p.length;g++){var v=p[g];v.outerHTML=v.innerHTML}0===t.querySelectorAll("light[data-highlight]").length&&delete t.dataset.highlightbk}else c({totalMatches:0})},e.getWebIcon=function(){var t=document.querySelector("link[rel~=icon]");return t?t.href:window.location.origin+"/favicon.ico"},e.getViewPosition=function(t){var e=t.getBoundingClientRect();return{top:e.top,left:e.left}}},function(t,e,n){"use strict";var i=r(n(3)),o=r(n(5));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=new i.default(t,e);return 0===document.querySelectorAll("div[data-pagenote]").length&&(0,o.default)(n,e.colors),n}t.exports=a,window.PageNote=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i,T=n(1),x=n(0),o=n(4);var E=new((i=o)&&i.__esModule?i:{default:i}).default;function r(t){var v=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.id=t||"pagenote-container",this.options=Object.assign({initType:"read",dura:150,saveInURL:!1,saveInLocal:!0,maxMarkNumber:50,blacklist:[]},e),this.recordedSteps=[],this.snapshot="",this.runindex=null,this.runningSetting=Object.assign({},{initType:this.options.initType,dura:this.options.dura}),this.target={},this.url=window.location.href,this.data="",this.blackNodes=[],this.lastaction=this.CONSTANT.DIS_LIGHT;var n=void 0,p=void 0,g=void 0,h=this.target,i=[],m=null,y=this.CONSTANT,w=this.options,b=window.location,f="ontouchstart"in window,S=this.blackNodes,N=["x","y","id","text","tip","bg","time","isActive"];function s(){var t=document.getSelection(),e=t.anchorNode?t.getRangeAt(0).commonAncestorContainer.parentNode:null;if(e){var n=!0,i=!1,o=void 0;try{for(var r,a=S[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){if(r.value.contains(e))return}}catch(t){i=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}var l=t.toString().trim();if(this.status!==y.WAITING||l!==h.text)if(l){var c=t.getRangeAt(0).getClientRects(),s=c[c.length-1];if(!s)return;var u=f?s.x+s.width/2:Math.min(s.x+s.width+12,window.innerWidth-150),d=window.scrollY+s.y+(f?s.height:s.height/2);this.target=h={x:parseInt(u),y:parseInt(d),text:l,tip:l,time:(new Date).getTime(),id:E.getUniqueId(e).wid,isActive:!0,bg:""},this.status=this.status===y.REPLAYING||this.status===y.PLAYANDWAIT?y.PLAYANDWAIT:y.WAITING}else this.target=h={},this.status=y.PAUSE}}var u=!1;this.init=function(e){var t=this,n=arguments,i=1<arguments.length&&void 0!==arguments[1]&&arguments[1];!(e=void 0===e?(0,x.getParams)().paramObj[y.ID]:e)&&this.options.saveInLocal&&(e=localStorage.getItem(this.id));var o=[],r={};try{if(e){var a=(0,x.decryptedData)(e);o=a.steps||[],r=a.setting||{}}}catch(t){console.error("解析step异常",t,e)}switch(this.recordedSteps.splice(0,this.recordedSteps.length),o.forEach(function(n){var i={};N.forEach(function(t,e){i[t]=n[e]}),t.recordedSteps.push(i)}),this.runningSetting=Object.assign(this.runningSetting,r),setTimeout(function(){var t=document.querySelector("div[data-pagenote]");t&&S.push(t),w.blacklist.forEach(function(t){var e=E.getTarget(t);e&&S.push(e)})},0),[].forEach.call(document.querySelectorAll("light[data-highlight]"),function(t){t.outerHTML=t.innerHTML}),this.runningSetting.initType){case"light":this.replay(0,!1,!0,!0);break;case"default":this.replay(0,!1,function(t){return t.isActive},!0)}if(!u){(function(){var e=this,n=null;f?(document.addEventListener("touchstart",function(t){n=t}),document.onselectionchange=function(t){n.target&&"record"!==n.target.id&&s.call(e)}):document.addEventListener("mouseup",function(t){s.call(e)})}).call(this),u=!0,window.addEventListener("hashchange",function(){t.status=y.HASHCHANGED}),window.addEventListener("popstate",function(){t.status=y.URLCHANGED});var l=window.history.pushState;window.history.pushState=function(){l.apply(t,n),t.status=y.URLCHANGED};var c=window.history.replaceState;window.history.replaceState=function(){c.apply(t,n),t.status=y.URLCHANGED}}this.status=y.READY,i&&this.makelink()},this.addListener=function(t){"function"==typeof t&&i.push(t)},this.record=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];t=Object.assign(h,t);var n=w.maxMarkNumber;return this.recordedSteps.length>=n?(alert("标记失败！最大标记数量为 "+n),!1):!(!e&&this.status!=y.WAITING)&&(this.status=y.RECORDING,this.recordedSteps.push(t),this.recordedSteps=this.recordedSteps.sort(function(t,e){return t.y-e.y}),this.makelink()?(window.getSelection().removeAllRanges(),(0,T.highlightKeyword)(E.getTarget(t.id),t.text,!0,t.bg,this.blackNodes),t.isActive=!0,this.status=y.RECORDED,!0):(alert("保存失败"),this.recordedSteps.splice(-1,1),console.error("记录失败"),this.status=y.RECORDFAIL,!1))},this.remove=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:-1;if(t<0){for(;0<this.recordedSteps.length;)this.replay(0,!1,!1),this.recordedSteps.splice(0,1);this.status=y.PAUSE,this.status=y.REMOVEDALL}else this.replay(t,!1,!1),this.recordedSteps.splice(t,1),this.status=y.REMOVED;this.makelink()},this.replay=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],n=this,i=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],o=3<arguments.length&&void 0!==arguments[3]&&arguments[3],r=this.runningSetting.dura,a=this.recordedSteps[t];if(!a)return this.runindex=m,void(this.status=y.DONE);var l="function"==typeof i?i(a):i,c=a.x,s=a.y,u=a.id,d=a.text;clearInterval(g),clearTimeout(p),g=p=m,this.runindex=t,this.status=y.REPLAYING,this.lastaction=l?y.LIGHT:y.DIS_LIGHT,a.isActive=l;var h=u?E.getTarget(u):m,f=this;!function t(e){!(h=u?E.getTarget(u):m)&&0<e?setTimeout(function(){t(e-1)},1e3):(0,T.highlightKeyword)(h,d,l,a.bg,f.blackNodes,function(t){a.warn=t.totalMatches?"":"未找到匹配内容"})}(3),e?g=(0,T.gotoPosition)(h,c-window.innerWidth/2,s-window.innerHeight/3,function(){n.runindex=m,o?p=setTimeout(function(){return n.replay(t+1,e,i,o)},r):(n.status=y.DONE,clearTimeout(p))}):o?p=setTimeout(function(){return n.replay(t+1,e,i,o)},r):(this.runindex=m,this.status=y.DONE),this.makelink()},this.makelink=function(){try{var i=[];v.recordedSteps.forEach(function(t){var e=Object.assign({},t);e.isActive="off"===v.runningSetting.initType?void 0:e.isActive;var n=[];N.forEach(function(t){n.push(e[t])}),i.push(n)});var t=(0,x.getParams)(),o=t.paramObj,e=t.paramKeys;e.includes(y.ID)||e.push(y.ID);var n={},r=0;Object.keys(w).forEach(function(t){v.runningSetting[t]!==w[t]&&(n[t]=v.runningSetting[t],r++)});for(var a=document.querySelector("title"),l=document.getElementsByTagName("img"),c=[],s=0;s<l.length;s++){var u=l[s],d=u.width,h=u.height,f=u.src;f&&100<d&&100<h&&d/h<2&&h/d<2&&c.push(f)}var p={steps:i,setting:{},url:window.location.href,lastModified:(new Date).getTime(),icon:(0,T.getWebIcon)(),title:a?a.innerText:"",images:c,snapshot:v.snapshot};r?p.setting=n:delete p.setting,o[y.ID]=i.length?(0,x.encryptData)(p):"",v.data=o[y.ID],v.options.saveInLocal&&localStorage.setItem(v.id,v.data);var g="";return e.forEach(function(t,e){if(!(t===y.ID&&0===i.length)){var n=void 0===o[t]?"":"="+(o[t]||"");g=g+t+n+"&"}}),g=g?"?"+g:"",v.url=b.protocol+"//"+b.host+b.pathname+g+b.hash,v.options.saveInURL&&history.pushState("",y.ID,v.url),v.status=y.SYNCED,v.url}catch(t){return v.status=y.SYNCED_ERROR,console.error(t),!1}},Object.defineProperty(this,"status",{get:function(){return n},set:function(t){n=t,i.forEach(function(t){t(n)})}})}r.prototype.decodeData=function(t){return(0,x.decryptedData)(t)},r.prototype.CONSTANT={ID:"pagenote",WAITING:0,READY:1,RECORDING:2,PAUSE:3,RECORDED:4,REMOVED:-4,REMOVEDALL:-5,RECORDFAIL:5,FINNISHED:6,REPLAYING:7,PLAYANDWAIT:8,DONE:9,SYNCED:10,SYNCED_ERROR:-10,URLCHANGED:11,HASHCHANGED:12,LIGHT:100,DIS_LIGHT:-100},r.prototype.version="0.3.0"},function(t,e,n){var i=n(9);t.exports=i.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(d,h){h=h||["rgba(114,208,255,0.88)","#ffbea9","#c8a6ff","#6fe2d5","rgba(255,222,93,0.84)","rgba(251, 181, 214, 0.84)","rgba(0,0,0,0.5)"];function i(){d.replay(0,!1,d.lastaction===d.CONSTANT.DIS_LIGHT,!0)}function t(t){var e=t.state,n=t.actions;return(0,m.h)("div",{id:"pagenote-menu"},(0,m.h)("div",{style:"text-align:center",className:y.default.menuContainer},(0,m.h)("a",{href:"javascript:;",className:y.default.close,onclick:n.toggleMenu}),(0,m.h)("p",{style:"text-align:left"},(0,m.h)("div",null,"点亮方式：",(0,m.h)("label",null,(0,m.h)("input",{type:"radio",name:"init-type",checked:"default"===d.runningSetting.initType,onclick:function(){d.runningSetting.initType="default",n.refershState(),d.makelink()}}),"默认上次"),(0,m.h)("label",null,(0,m.h)("input",{type:"radio",name:"init-type",checked:"read"===d.runningSetting.initType,onclick:function(){d.runningSetting.initType="read",n.refershState(),d.makelink()}}),"阅读模式")),(0,m.h)("div",null,"点亮速度：",(0,m.h)("label",null,(0,m.h)("input",{type:"radio",name:"duration",checked:50==d.runningSetting.dura,onclick:function(){d.runningSetting.dura=50,n.refershState(),d.makelink()}}),"快"),(0,m.h)("label",null,(0,m.h)("input",{type:"radio",name:"duration",checked:150==d.runningSetting.dura,onclick:function(){d.runningSetting.dura=150,n.refershState(),d.makelink()}}),"适中"),(0,m.h)("label",null,(0,m.h)("input",{type:"radio",name:"duration",checked:500==d.runningSetting.dura,onclick:function(){d.runningSetting.dura=500,n.refershState(),d.makelink()}}),"慢")),(0,m.h)("div",{style:""},"侧边栏位置：",(0,m.h)("button",{onclick:function(){return n.toggleSideBar("left")}},"左边"),(0,m.h)("button",{onclick:function(){return n.toggleSideBar("right")}},"右边"))),(0,m.h)("p",{style:"text-align:center"},(0,m.h)("button",{className:y.default.menuButton,onclick:function(){window.confirm("确认删除所有标记？")&&(d.remove(-1),n.toggleMenu())}},"删除所有标记"),(0,m.h)("button",{className:y.default.menuButton,style:"margin-left:4px",onclick:i},(d.lastaction===d.CONSTANT.DIS_LIGHT?"点亮":"隐藏")+"所有标记")),"\b",(0,m.h)("input",{style:"opacity:0;height:0",value:e.url,readOnly:!0,id:"pagenote-url"})))}var e={status:"",steps:d.recordedSteps,targetInfo:d.target,runindex:null,url:d.url,ballPos:{},showBall:!1,showMenu:!1,barStatus:localStorage.getItem("bar-status")||"right",colors:[]},n=d.CONSTANT,r={refershState:function(){return function(t){return{status:d.status,steps:d.recordedSteps,targetInfo:d.target,runindex:d.runindex,url:d.url,colors:Array.from(new Set(d.recordedSteps.map(function(t){return t.bg})))}}},setBallPos:function(e){return function(t){return{ballPos:e}}},toggleShowBall:function(e){return function(t){return{showBall:e}}},toggleMenu:function(){return function(t){return{showMenu:!t.showMenu}}},toggleSideBar:function(n){return function(t){var e="";if("string"==typeof n)e=n;else switch(t.barStatus){case"right":e="right-hide";break;case"right-hide":e="right";break;case"left":e="left-hide";break;case"left-hide":e="left"}return localStorage.setItem("bar-status",e),{barStatus:e}}}},o=0,a=0;function f(t,e){var n=document.documentElement.clientHeight-40-16,i=t/document.documentElement.scrollHeight*n+40+16;return e-a==1&&o&&Math.abs(i-o)<24&&(i=o+8),i=Math.min(t,i,n),a=e,o=i}function c(t){var e=t.step,n=t.running,i=void 0!==n&&n,o=t.index;return(0,m.h)("div",{title:"点击",className:y.default.stepSign+" "+(i?y.default.running:"")+" "+(e.isActive?y.default.isActive:""),style:{top:f(e.y,o)+"px","--color":e.bg||h[0]},onclick:function(){d.replay(o,!0,!e.isActive)}},e.text)}function s(t){var i=t.step,e=t.index,o=t.actions,n=i.bg||h[0];return(0,m.h)("div",{className:""+y.default.stepTag,"data-pagenotei":e,"data-pagenotes":i.isActive?"active":"",style:{position:"absolute",top:i.y+"px",left:i.x+"px",textAlign:"left","--bg-color":n}},(0,m.h)("div",{title:"点击激活/长按拖拽移动",class:y.default.point+"  draggable "+(i.isActive?y.default.active:y.default.common),"data-index":e,"data-active":i.isActive?1:0,"data-moving":"0",onclick:function(t){"1"!==t.target.dataset.moving&&(d.replay(e,!i.isActive,!i.isActive),o.refershState())}},i.warn&&(0,m.h)("b",{style:"position:absolute;top:-2px;left:5px;font-size:12px;font-weight:bold;color: #de1c1c;"},"!")),(0,m.h)("div",{className:y.default.box+" "+(i.isActive?y.default.show:"")},(0,m.h)("div",{className:""+y.default.handlebar},i.warn||"点击下方可修改",(0,m.h)("span",{className:y.default.deleteicon,onclick:function(){d.remove(e)},title:"删除"},(0,m.h)("svg",{viewBox:"0 0 1024 1024",width:"20",height:"20"},(0,m.h)("path",{d:"M223.595 318.284l24.023 480.742c0 54.377 44.99 98.457 100.485 98.457h331.964c55.495 0 100.49-44.08 100.49-98.457l23.109-480.742h-580.07zm608.154-34.103c.1-20.274.159-21.623.159-22.981 0-52.871-31.299-81.888-73.295-81.888l-116.893.123c0-27.751-27.105-50.246-54.855-50.246H441.35c-27.745 0-55.727 22.495-55.727 50.246l-117.013-.123c-46.388 0-73.296 35.36-73.296 81.888 0 1.363.055 2.707.159 22.981h636.282-.006zM614.17 444.615c0-15.327 12.422-27.75 27.745-27.75 15.327 0 27.75 12.423 27.75 27.75v317.883c0 15.328-12.423 27.751-27.75 27.751-15.323 0-27.745-12.423-27.745-27.75V444.614zm-128.31 0c0-15.327 12.427-27.75 27.75-27.75 15.328 0 27.75 12.423 27.75 27.75v317.883c0 15.328-12.422 27.751-27.75 27.751-15.322 0-27.75-12.423-27.75-27.75V444.614zm-128.222 0c0-15.327 12.423-27.75 27.751-27.75 15.322 0 27.75 12.423 27.75 27.75v317.883c0 15.328-12.427 27.751-27.75 27.751-15.328 0-27.75-12.423-27.75-27.75V444.614zm0 0",fill:"#fff"})))),(0,m.h)("div",{className:""+y.default.editcontent,onfocus:function(t){d.replay(e,!1),setTimeout(function(){t.target.focus()},100)},contentEditable:"true",onpaste:function(n){(0,S.clipBoard)(n,function(t){n.target.blur();var e=document.createElement("img");e.src=t,i.tip=i.tip+e.outerHTML,i.modify=void 0,d.makelink(),o.refershState(),n.target.focus()})},innerHTML:i.tip||"输入笔记",oninput:function(t){var e=t.target.innerHTML;i.modify=e},onblur:function(){var t=void 0!==i.modify?i.modify:i.tip,e=i.tip;i.tip=t;var n=d.makelink();n||alert("error"),i.tip=n?t:e,o.refershState()}})))}var l=document.createElement("div");l.id=d.id,l.dataset.pagenote=l.id,document.body.append(l),(0,m.app)(e,r,function(a,l){return(0,m.h)("div",{id:"pagenote",oncreate:function(){d.addListener(l.refershState),setTimeout(function(){l.refershState()},0)}},(0,m.h)("div",{style:{position:"absolute",zIndex:999999,left:a.targetInfo.x+"px",top:a.targetInfo.y+"px",transition:".5s",userSelect:"none",textAlign:"left"}},(a.status===n.WAITING||a.status===n.PLAYANDWAIT)&&(0,m.h)("div",{className:y.default.recordContain},h.map(function(t,e){var n=2*Math.PI/360*38*(e-h.length+1),i=0===e?0:Number.parseFloat(20*Math.sin(n)).toFixed(3),o=0===e?0:Number.parseFloat(20*Math.cos(n)).toFixed(3),r="translate("+i+"px,"+o+"px)";return(0,m.h)("div",{className:y.default.recordButton,"data-color":t,style:{"--color":t,transform:r,top:o/-1+"px",left:i/-1+"px"},onclick:function(t){!function(t,e,n){t.stopPropagation();var i=(0,w.getViewPosition)(t.currentTarget),o=i.top,r=i.left,a=f(o+(0,w.getScroll)().y),l=-1<n.barStatus.indexOf("left")?"50":document.documentElement.clientWidth-50,c=(a/l-o/r)/(l-r),s=a/l-c*l;e.toggleShowBall(!0);var u=t.target.dataset.color||h[0];window.requestAnimationFrame(function t(){r<=l?(o=c*(r+=l-r<=10?1:30)*r+s*r,e.setBallPos({left:r,top:o,color:u}),window.requestAnimationFrame(t)):(e.toggleShowBall(!1),d.record({bg:u}))})}(t,l,a)}},0===e&&(0,m.h)("svg",{t:"1584087258159",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15434",width:"26",height:"26"},(0,m.h)("path",{d:"M768 128h-32V96c0-19.2-12.8-32-32-32s-32 12.8-32 32v32H544V96c0-19.2-12.8-32-32-32s-32 12.8-32 32v32H352V96c0-19.2-12.8-32-32-32s-32 12.8-32 32v32h-32c-35.2 0-64 32-64 70.4v694.4c0 35.2 28.8 67.2 64 67.2h512c35.2 0 64-32 64-70.4V198.4c0-38.4-28.8-70.4-64-70.4z m-96 640H352c-19.2 0-32-12.8-32-32s12.8-32 32-32h320c19.2 0 32 12.8 32 32s-12.8 32-32 32z m0-192H352c-19.2 0-32-12.8-32-32s12.8-32 32-32h320c19.2 0 32 12.8 32 32s-12.8 32-32 32z m0-192H352c-19.2 0-32-12.8-32-32s12.8-32 32-32h320c19.2 0 32 12.8 32 32s-12.8 32-32 32z","p-id":"15435",fill:"#ffffff"})))}))),(0,m.h)("div",{className:y.default.recordBall+" "+(a.showBall?y.default.recording:""),style:{top:a.ballPos.top+"px",left:a.ballPos.left+"px",background:a.ballPos.color}}),a.steps.map(function(t,e){return(0,m.h)(s,{key:e+t.id,step:t,index:e,actions:l})}),a.steps.length&&(0,m.h)("aside",{className:""+y.default.sideBar,"data-status":a.barStatus},a.showMenu&&(0,m.h)(t,{actions:l,state:a}),(0,m.h)("section",{style:"position:relative"},(0,m.h)("div",{style:"top:"+Math.max(f(a.steps[0].y)-40,0)+"px",className:y.default.icons},(0,m.h)("div",{className:y.default.switch,onclick:l.toggleSideBar},(0,m.h)("svg",{t:"1588341775253",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6484",width:"18",height:"18"},(0,m.h)("path",{d:"M540.928 512l395.818667 395.818667a43.093333 43.093333 0 0 1-60.885334 60.885333l-426.282666-426.24a43.093333 43.093333 0 0 1 0-60.928l426.24-426.24a43.093333 43.093333 0 0 1 60.928 60.885333L540.928 512z m-362.325333 0l395.818666 395.818667a43.093333 43.093333 0 0 1-60.885333 60.885333l-426.24-426.24a43.093333 43.093333 0 0 1 0-60.928l426.24-426.24a43.093333 43.093333 0 1 1 60.885333 60.885333L178.602667 512z","p-id":"6485",fill:"#515151"}))),(0,m.h)("a",{href:"javascript:;",className:y.default.esLight+" "+(d.highlightAll?"":y.default.lightAll),onclick:i},(0,m.h)("svg",{viewBox:"0 0 1000 1000",version:"1.1",width:"20",height:"20"},(0,m.h)("path",{d:"M634.9 770.3l-4.4 28H393.6l-4.4-28h245.7zM512 931c-30.4 0-55.9-21.6-62-50.2h124c-6.1 28.6-31.6 50.2-62 50.2z m103.5-79.3h-207c-3.4 0-6.4-2.2-7.4-5.5l-2.9-18.9H626l-3 18.9c-1 3.3-4 5.5-7.5 5.5zM384.7 741.3l-8.1-51.9-0.1-0.6c-7.4-30.4-22.6-58.6-43.8-81.7-42.5-46.2-65.9-106.1-65.9-168.7 0-135.1 109.9-245.1 245-245.3h0.3c134 0 244 108.9 245.3 242.9 0.6 62.7-22.5 122.6-65 168.6-21.5 23.2-36.8 51.7-44.3 82.4l-0.1 0.6-8.4 53.6H384.7z",fill:"#FFFFFF","p-id":"10480"}),(0,m.h)("g",{id:y.default.light},(0,m.h)("path",{d:"M357 741.1l-8-51.9-0.1-0.6c-7.4-30.4-22.4-58.6-43.5-81.7-42.2-46.2-65.4-106.1-65.4-168.7 0-135.1 109-245.1 243.1-245.3h0.3c133 0 242.1 108.9 243.3 242.9 0.6 62.7-22.3 122.6-64.5 168.6-21.3 23.2-36.5 51.7-43.9 82.4l-0.1 0.6-8.3 53.6H357z","p-id":"10481"})),(0,m.h)("path",{d:"M605.8 770.8l-4.3 28H370.4l-4.3-28h239.7zM587 852.2H384.9c-3.3 0-6.3-2.2-7.2-5.5l-2.9-18.9h222.3l-2.9 18.9c-1 3.3-3.9 5.5-7.2 5.5z",fill:"#E87A66","p-id":"10482"}),(0,m.h)("path",{d:"M484.9 931c-29 0-53.4-21.6-59.2-50.2H544c-5.8 28.6-30.1 50.2-59.1 50.2z",fill:"#65D5EF","p-id":"10483"}),(0,m.h)("path",{d:"M512 164.1h-0.3c-73.2 0.1-142 28.6-193.7 80.4-51.7 51.8-80.2 120.6-80.2 193.9 0 35.2 6.6 69.7 19.7 102.6 12.7 31.8 30.8 60.7 53.8 85.7 17.8 19.3 30.5 42.9 36.8 68.4l24.5 157 0.1 0.6c4 16.5 18.7 28 35.7 28h12c6.4 44.7 45 79.2 91.5 79.2s85.1-34.5 91.5-79.2h12c17 0 31.7-11.5 35.7-28l0.1-0.6 5.6-35.7c0.2-0.9 0.4-1.8 0.4-2.7l18.9-120.4c6.4-25.7 19.3-49.6 37.3-69.1 47.5-51.5 73.3-118.5 72.7-188.6-0.7-72.6-29.6-140.9-81.5-192.2-51.6-51.1-120.1-79.3-192.6-79.3z m122.9 606.2l-4.4 28H393.6l-4.4-28h245.7zM512 931c-30.4 0-55.9-21.6-62-50.2h124c-6.1 28.6-31.6 50.2-62 50.2z m103.5-79.3h-207c-3.4 0-6.4-2.2-7.4-5.5l-2.9-18.9H626l-3 18.9c-1 3.3-4 5.5-7.5 5.5z m76.8-247c-21.5 23.2-36.8 51.7-44.3 82.4l-0.1 0.6-8.4 53.6h-113V570.8c0-8-6.5-14.5-14.5-14.5s-14.5 6.5-14.5 14.5v170.5H384.7l-8.1-51.9-0.1-0.6c-7.4-30.4-22.6-58.6-43.8-81.7-42.5-46.2-65.9-106.1-65.9-168.7 0-135.1 109.9-245.1 245-245.3h0.3c134 0 244 108.9 245.3 242.9 0.4 62.8-22.6 122.6-65.1 168.7z",fill:"#274359","p-id":"10484"}),(0,m.h)("g",{id:y.default.sunshine},(0,m.h)("path",{d:"M512 467c-8 0-14.5 6.5-14.5 14.5v29.7c0 8 6.5 14.5 14.5 14.5s14.5-6.5 14.5-14.5v-29.7c0-8-6.5-14.5-14.5-14.5zM511.4 146.9c8 0 14.5-6.5 14.5-14.5V78.5c0-8-6.5-14.5-14.5-14.5s-14.5 6.5-14.5 14.5v53.8c0 8.1 6.5 14.6 14.5 14.6zM281.4 234.1c2.8 2.8 6.5 4.3 10.3 4.3 3.7 0 7.4-1.4 10.3-4.3 5.7-5.7 5.7-14.9 0-20.5l-38.1-38.1c-5.7-5.7-14.9-5.7-20.5 0-5.7 5.7-5.7 14.9 0 20.5l38 38.1zM201 429.4h-53.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5H201c8 0 14.5-6.5 14.5-14.5 0.1-8-6.4-14.5-14.5-14.5zM282.3 653.4l-38.1 38.1c-5.7 5.7-5.7 14.9 0 20.5 2.8 2.8 6.5 4.3 10.3 4.3 3.7 0 7.4-1.4 10.3-4.3l38.1-38.1c5.7-5.7 5.7-14.9 0-20.5-5.8-5.7-14.9-5.7-20.6 0zM742.6 652.5c-5.7-5.7-14.9-5.7-20.5 0-5.7 5.7-5.7 14.9 0 20.5l38.1 38.1c2.8 2.8 6.5 4.3 10.3 4.3s7.4-1.4 10.3-4.3c5.7-5.7 5.7-14.9 0-20.5l-38.2-38.1zM876.8 428.2H823c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h53.8c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5zM731.4 237.5c3.7 0 7.4-1.4 10.3-4.3l38.1-38.1c5.7-5.7 5.7-14.9 0-20.5-5.7-5.7-14.9-5.7-20.5 0l-38.1 38.1c-5.7 5.7-5.7 14.9 0 20.5 2.8 2.9 6.5 4.3 10.2 4.3z",fill:"#274359","p-id":"10485"})))),(0,m.h)("a",{href:"javascript:;",onclick:l.toggleMenu},(0,m.h)("svg",{t:"1584782208424",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6119",width:"20",height:"20"},(0,m.h)("path",{d:"M844.8 883.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c0 19.2-19.2 38.4-38.4 38.4z m0-403.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c0 19.2-19.2 38.4-38.4 38.4zM435.2 883.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c6.4 19.2-12.8 38.4-38.4 38.4z m0-403.2h-256c-19.2 0-38.4-19.2-38.4-38.4v-256c0-19.2 19.2-38.4 38.4-38.4h256c19.2 0 38.4 19.2 38.4 38.4v256c6.4 19.2-12.8 38.4-38.4 38.4z","p-id":"6120",fill:"#8a8a8a"})))),a.steps.map(function(t,e){return(0,m.h)(c,{key:e+"-"+t.y,step:t,running:e===a.runindex,index:e})}))))},l);var u=void 0,p=void 0,g=void 0;function v(){if(!("read"!==d.runningSetting.initType)){var i=(0,w.getScroll)(),o=document.documentElement.clientHeight;d.recordedSteps.forEach(function(t,e){var n=t.y>i.y&&t.y<i.y+o;d.replay(e,!1,n,!1)}),r.refershState()}}document.addEventListener("mousedown",function(t){var e=t.target;setTimeout(function(){e.classList.contains("draggable")&&1==e.dataset.active&&(u=e.dataset.index,g=e)},200)}),document.addEventListener("mouseup",function(t){setTimeout(function(){document.body.style.userSelect="unset",u=-1},200)}),document.addEventListener("mousemove",(0,b.throttle)(function(t){if(0<=u){document.body.style.userSelect="none";var e=d.recordedSteps[u];e.x=t.pageX,e.y=Math.max(t.pageY,10),d.makelink(),r.refershState(),g.dataset.moving="1",clearTimeout(p),p=setTimeout(function(){g.dataset.moving="0"},300)}},25)),setTimeout(function(){v()},1e3),document.addEventListener("scroll",(0,b.throttle)(function(t){v()},200))};var i,m=n(6),o=n(7),y=(i=o)&&i.__esModule?i:{default:i},w=n(1),b=n(0),S=n(8)},function(t,e,n){"use strict";function i(t,e){for(var n=[],i=[],o=arguments.length;2<o--;)n.push(arguments[o]);for(;n.length;){var r=n.pop();if(r&&r.pop)for(o=r.length;o--;)n.push(r[o]);else null!=r&&!0!==r&&!1!==r&&i.push(r)}return"function"==typeof t?t(e||{},i):{nodeName:t,attributes:e||{},children:i,key:e&&e.key}}function o(t,e,n,i){var o,r=[].map,a=i&&i.children[0]||null,l=a&&function e(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:r.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:e(t)})}}(a),c=[],m=!0,s=f(t),u=function t(i,o,r){for(var e in r)"function"==typeof r[e]?function(t,n){r[t]=function(t){var e=n(t);return"function"==typeof e&&(e=e(g(i,s),r)),e&&e!==(o=g(i,s))&&!e.then&&h(s=p(i,f(o,e),s)),e}}(e,r[e]):t(i.concat(e),o[e]=f(o[e]),r[e]=f(r[e]));return r}([],s,f(e));return h(),u;function y(t){return"function"==typeof t?y(t(s,u)):null!=t?t:""}function d(){o=!o;var t=y(n);for(i&&!o&&(a=function t(e,n,i,o,r){if(o!==i)if(null==i||i.nodeName!==o.nodeName){var a=S(o,r);e.insertBefore(a,n),null!=i&&T(e,n,i),n=a}else if(null==i.nodeName)n.nodeValue=o;else{N(n,i.attributes,o.attributes,r=r||"svg"===o.nodeName);for(var l={},c={},s=[],u=i.children,d=o.children,h=0;h<u.length;h++){s[h]=n.childNodes[h];var f=w(u[h]);null!=f&&(l[f]=[s[h],u[h]])}for(var h=0,p=0;p<d.length;){var f=w(u[h]),g=w(d[p]=y(d[p]));if(c[f])h++;else if(null==g||g!==w(u[h+1]))if(null==g||m)null==f&&(t(n,s[h],u[h],d[p],r),p++),h++;else{var v=l[g]||[];f===g?(t(n,v[0],v[1],d[p],r),h++):v[0]?t(n,n.insertBefore(v[0],s[h]),v[1],d[p],r):t(n,s[h],null,d[p],r),c[g]=d[p],p++}else null==f&&T(n,s[h],u[h]),h++}for(;h<u.length;)null==w(u[h])&&T(n,s[h],u[h]),h++;for(var h in l)c[h]||T(n,l[h][0],l[h][1])}return n}(i,a,l,l=t)),m=!1;c.length;)c.pop()()}function h(){o||(o=!0,setTimeout(d))}function f(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n}function p(t,e,n){var i={};return t.length?(i[t[0]]=1<t.length?p(t.slice(1),e,n[t[0]]):e,f(n,i)):e}function g(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function w(t){return t?t.key:null}function v(t){return t.currentTarget.events[t.type](t)}function b(t,e,n,i,o){if("key"!==e)if("style"===e)if("string"==typeof n)t.style.cssText=n;else for(var r in"string"==typeof i&&(i=t.style.cssText=""),f(i,n)){var a=null==n||null==n[r]?"":n[r];"-"===r[0]?t.style.setProperty(r,a):t.style[r]=a}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?i=i||t.events[e]:t.events={},(t.events[e]=n)?i||t.addEventListener(e,v):t.removeEventListener(e,v)):e in t&&"list"!==e&&"type"!==e&&"draggable"!==e&&"spellcheck"!==e&&"translate"!==e&&!o?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),null!=n&&!1!==n||t.removeAttribute(e)}function S(t,e){var n="string"==typeof t||"number"==typeof t?document.createTextNode(t):(e=e||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName),i=t.attributes;if(i){i.oncreate&&c.push(function(){i.oncreate(n)});for(var o=0;o<t.children.length;o++)n.appendChild(S(t.children[o]=y(t.children[o]),e));for(var r in i)b(n,r,i[r],null,e)}return n}function N(t,e,n,i){for(var o in f(e,n))n[o]!==("value"===o||"checked"===o?t[o]:e[o])&&b(t,o,n[o],e[o],i);var r=m?n.oncreate:n.onupdate;r&&c.push(function(){r(t,e)})}function T(t,e,n){function i(){t.removeChild(function t(e,n){var i=n.attributes;if(i){for(var o=0;o<n.children.length;o++)t(e.childNodes[o],n.children[o]);i.ondestroy&&i.ondestroy(e)}return e}(e,n))}var o=n.attributes&&n.attributes.onremove;o?o(e,i):i()}}n.r(e),n.d(e,"h",function(){return i}),n.d(e,"app",function(){return o})},function(t,e,n){t.exports={sideBar:"w4F",switch:"_2hp",icons:"_3Ov",toggleButton:"_2L-",easy:"_2YJ",stepSign:"_3ls",running:"_23u",isActive:"T7x",stepTag:"_2j5",stapTag:"_2eV",point:"zzj","light-point":"oao",common:"_1g7",active:"QVz",box:"_3Dr",show:"_1HQ",handlebar:"_3Wg",editcontent:"_3qI",writing:"hal",deleteicon:"RWs",menuContainer:"_1Cv",close:"_2PK",recordBall:"_3P0",recording:"_1k7",recordContain:"_2l9",recordButton:"_2Oj",menuButton:"_1UW",esLight:"_1QK",light:"zWp",sunshine:"_27C",lightAll:"onb",arrowLeft:"_1oa",icon:"_46T",leftAlign:"_1EN",rightAlign:"_2fw",eye:"_1Y7","point-notifi":"_1KI"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function l(t,e){var n=t.getAsFile(),i=new FileReader;i.onload=function(t){e(t.target.result)},i.readAsDataURL(n)}e.imgReader=l,e.clipBoard=function(t,e){var n,i,o,r=t.clipboardData,a=0;if(r){if(!(n=r.items))return;for(i=n[0],o=r.types||[];a<o.length;a++)if("Files"===o[a]){i=n[a];break}i&&"file"===i.kind&&i.type.match(/^image\//i)&&l(i,function(t){e(t)})}}},function(t,e,n){"use strict";function N(t){var e=t.getBoundingClientRect(),n=document.body,i=document.documentElement,o=window.pageYOffset||i.scrollTop||n.scrollTop,r=window.pageXOffset||i.scrollLeft||n.scrollLeft,a=i.clientTop||n.clientTop||0,l=i.clientLeft||n.clientLeft||0,c=e.top+o-a,s=e.left+r-l;return{top:Math.round(c),left:Math.round(s)}}n.r(e);function i(){}var o,T=window.document,x=o=function(t){this.options=Object.assign({},{draw:!0,simpleId:!0},t),this.lastClick=document.body;var e=this;document.addEventListener("mousedown",function(t){e.lastClick=t.target,e.focusedElement!==e.lastClick&&o.prototype.clean()})},E=x.prototype;E.getUniqueId=function(t,e){if(!((t=t||this.lastClick)instanceof HTMLElement))return console.error("input is not a HTML element"),{};var n={wid:"",type:"",top:N(t).top,left:N(t).left,viewLeft:t.getBoundingClientRect().left,viewTop:t.getBoundingClientRect().top,text:t.innerText},i=t.id,o=t.name,r=t.tagName.toLowerCase(),a=t.type?t.type.toLowerCase():"",l="",c=t.classList||[];if(c.forEach(function(t){l+="."+t}),"body"!==r&&"html"!==r||(n.wid=r,n.type=r),i&&T.getElementById(i)===t){var s=new RegExp("^[a-zA-Z]+");!e&&this.options.simpleId?n.wid=i:s.test(i)&&(n.wid=r+"#"+i),n.type="document.getElementById()"}if(!n.wid&&o&&T.getElementsByName(o)[0]===t&&(n.wid=o,n.type="document.getElementsByName()"),!n.wid&&l&&T.querySelector(r+l)===t){n.wid=r+l,n.type="document.querySelector()";var u=c.length;if(2<u){for(var d=1,h=[];Math.pow(2,d)<u;)h.push(Math.pow(2,d)),d++;h.push(u);for(var f=0;f<h.length;f++)h[f]}}if("radio"===a){var p=r+"[value='"+t.value+"']";o&&(p+="[name='"+o+"']"),T.querySelector(p)===t&&(n.wid=p,n.type="document.querySelector()")}if(n.wid||(p=r,p=l?p+l:p,p=o?p+"[name='"+o+"']":p,E.getTarget(p)===t&&(n.wid=p,n.type="document.querySelector()")),!n.wid){p=r,p=l?p+l:p;var g=T.querySelectorAll(p);if(g&&0<g.length){for(var v=null,m=0;m<g.length;m++)if(t===g[m]){v=m+1;break}v&&(p=p+":nth-child("+v+")",T.querySelector(p)===t&&(n.wid=p,n.type="document.querySelector()"))}}if(!n.wid){if(!t.parentNode)return;var y=x.prototype.getUniqueId(t.parentNode,!0),w=y?y.wid:"";if(!w)return{wid:"",type:"NO_LOCATION"};var b=r;if(l&&(b+=l),p=w+">"+b,1<T.querySelectorAll(p).length){v=p=null;for(var S=0;S<t.parentNode.children.length;S++)if(t.parentNode.children[S]===t){v=S+1;break}if(1<=v)p=w+">"+b+":nth-child("+v+")",T.querySelector(p)!=t&&(p=null)}n.wid=p,n.type="document.querySelector()"}return this.focusedElement=E.getTarget(n.wid),!e&&this.options.draw&&this.__proto__.draw(n),n},E.getTarget=function(t){return T.getElementById(t)||T.getElementsByName(t)[0]||T.querySelector(t)},E.clean=i,E.draw=i,window.whatsElement=x;e.default=x}],o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=2);function o(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,i});
