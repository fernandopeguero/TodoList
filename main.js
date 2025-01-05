(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(601),r=t.n(o),a=t(314),c=t.n(a)()(r());c.push([n.id,"html {\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n  \n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  \n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n\n\n:root {\n\n  /* Color palette */\n  --color-darker: #100c25;\n  --color-dark: #1B1833;\n  --color-purple: #441752;\n  --color-apple: #AB4459;\n  --color-orange: #F29F58; \n  --color-white: #FFFDEC;\n\n  /* Priority Color */\n  --color-priority-low: #494CA2;\n  --color-priority-normal: #6F975C;\n  --color-priority-high: #D2D462;\n  --color-priority-critical: #FF6361;\n  \n  \n\n  /* padding */\n  --pd-small: 8px;\n  --pd-medium: 16px;\n  --pd-large: 24px;\n  --pd-extra-large: 26px;\n}\n\n\nbody {\n    background-color: var(--color-darker);\n    color: var(--color-white);\n    height: 100vh;\n    display: flex;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.sidebar {\n  padding: 16px;\n  background-color: var(--color-dark);\n  height: 100%;\n  max-width: 450px;\n  min-width: 250px;\n\n  .profile_container {\n    display: flex;\n    align-items: center ;\n    gap: 36px;\n\n    div {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n\n    }\n\n    img {\n      height: auto;\n      width: 30px;\n      border-radius: 50%;\n    }\n    img:hover {\n      cursor: pointer;\n    }\n\n    .notifications_container {\n      margin-left: auto;\n\n    }\n  }\n\n  ul {\n\n    /* line-height: 2.125; */\n    margin-top: var(--pd-large);\n    margin-bottom: var(--pd-large);\n   \n\n    li {\n      cursor: pointer;\n      font-weight: 600;\n      display: flex;\n      align-items: center;\n      padding: var(--pd-small);\n      border-radius: var(--pd-small);\n\n      \n      img {\n\n        margin-right: var(--pd-small);\n      }\n    }\n\n    li:hover {\n      background-color: var(--color-darker);\n    }\n  }\n\n\n  .project_toolbar {\n\n    display: flex;\n    justify-content: space-between;\n\n    img {\n      cursor: pointer;\n      \n    }\n  }\n  \n}\n\n\n\n.content_section {\n\n  padding:var(--pd-large);\n  width: 100%;\n\n  h1 {\n    font-weight: bolder;\n    text-transform: uppercase;\n    letter-spacing: 1.7px;\n  }\n\n  .todos_container {\n    margin: 0 auto;\n    max-width: 800px;\n  }\n\n\n\n  .todo {\n    background-color: var(--color-priority-low);\n    margin: var(--pd-small) 0;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--pd-small) var(--pd-extra-large);\n    border-radius: var(--pd-small);\n  \n\n    p {\n      flex:1 ;\n      padding-left: var(--pd-medium);\n      width: 100%;\n      font-weight: bolder;\n    }\n\n    img {\n      cursor: pointer;\n    }\n  }\n\n  .completed {\n    text-decoration: line-through;\n    background-color: #123524;\n    \n  }\n\n  .todo_section, .completed_todo {\n    h2 {\n      margin-bottom: var(--pd-medium);\n    }\n\n    background-color: var(--color-dark);\n    padding: var(--pd-medium);\n    border-radius: var(--pd-small);\n    margin: var(--pd-large) 0;\n    transition: 0.3s;\n\n  }\n\n}\n\n.task_modal_container, .modal_container {\n\n  visibility: hidden;\n  position: absolute;;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba( 10,  10, 10, .8);  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .modal_card {\n    width: 250px;\n    background-color: var(--color-white);\n    color: var(--color-darker);\n    padding: var(--pd-medium);\n    border-radius: var(--pd-small);\n\n    button {\n      margin-top: var(--pd-small);\n      background-color: var(--color-apple);\n      color: var(--color-white);\n      font-weight: bold;\n      border-radius: var(--pd-small);\n      \n    }\n\n    button:hover {\n      transition: 0.3s;\n      cursor: pointer;\n      background-color: var(--color-purple);\n      border: solid 2px var(--color-orange);\n    }\n\n    button:active {\n      transition: 0.3s;\n      background-color: var(--color-orange);\n    }\n\n  }\n\n    h3 {\n      font-weight: bold;\n      padding-bottom: var(--pd-small);\n    }\n\n}\n\n\n.modal_container {\n\n\n    input, button {\n      border: solid 2px var(--color-darker);\n      width: 100%;\n      height: 36px;\n      border-radius: var(--pd-small);\n\n    }\n\n    input {\n      \n      padding-left: var(--pd-small);\n    }\n\n  \n}\n\n.task_modal_container {\n\n  .modal_card {\n   width: 400px;\n   padding: var(--pd-medium);\n   display: flex;\n   flex-direction: column;\n   gap: var(--pd-medium);\n\n  }\n\n  input, select, button {\n    width: 100%;\n    height: 36px;\n    padding-left: var(--pd-small);\n    text-transform: uppercase;\n    font-weight: bold;\n  }\n\n  option {\n    font-weight: bold;\n    \n  }\n\n}\n\nsvg {\n\n  fill: white;\n}",""]);const i=c},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var d=n[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),c=t.n(a),i=t(659),d=t.n(i),s=t(56),l=t.n(s),u=t(540),p=t.n(u),m=t(113),f=t.n(m),g=t(208),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=p(),r()(g.A,v),g.A&&g.A.locals&&g.A.locals;const h=t.p+"257df24c891ef30517525f6f1d37f4b0.svg",b=t.p+"18333f6b9f55527885ecf9005ad9148d.svg",y=t.p+"a2e0e1e3f9576f1d219ff98bf00e2322.svg",x=t.p+"b2bbbc0238a1adce03bff5dc4a744f4d.svg",E=t.p+"adf20224280de9bd8df7de9e48c920ee.svg",k=t.p+"e7bfc15058214cd3cb50f45d112dc456.svg",w=t.p+"1f4bf245335bb39de55bbcfc11a96251.svg",C=t.p+"ff65b44478950da00dd78779e65b4cc3.svg",_=t.p+"0d4143223ae04fe49b996f31accb5105.svg",L=t.p+"975220ee919e7c47e8146536d40d9357.svg",T=t.p+"97640f8790dac55e63581e0ed88f328f.svg",S=t.p+"2ad5eba6f9376ca0e0416041ef99b559.svg";(function(){const n=document.querySelector("body");let e="inbox";const t=function(){const n=function(){const n={inbox:"inbox",today:"today",upcoming:"upcoming"},e={low:"#3E7B27",normal:"#FFD65A",high:"#F26B0F",critical:"#FA4032"};let t=[{name:"Finish App",section:"inbox",completed:!1,priority:e.low,date:new Date("2024-06-26")},{name:"Write Documentation",section:"today",completed:!1,priority:e.low,date:new Date("2024-06-27")},{name:"Grocery Shopping",section:"upcoming",priority:e.low,completed:!1,date:new Date("2024-06-28")},{name:"Prepare Presentation",section:"today",priority:e.high,completed:!1,date:new Date("2024-06-30")},{name:"Call Mom",section:"inbox",priority:e.critical,completed:!1,date:new Date("2024-07-01")}];return{removeTask:function(n){t=t.filter((e=>e!=n))},addToTasksList:function(n){t.push(n)},getTasks:function(){return t},getSections:function(){return Object.values(n).map((n=>n))},getPrioritylevels:function(){return e},addSection:function(e){n[e]=e},addTask:function(n){t.push(n)}}}();return{filterTasks:function(e="inbox"){return n.getTasks().filter((n=>n.section===e))},completeTask:function(n){n.completed=!n.completed},deleteTask:function(e){n.removeTask(e)},getSections:n.getSections,getPrioritylevels:n.getPrioritylevels,addSection:n.addSection,addTask:n.addTask}}(),o=t.getPrioritylevels();let r=t.filterTasks(e);function a(n,e,t=!1){const r=document.createElement("option");return r.value=e,r.text=n,t&&(r.style.backgroundColor=o[n]),r}function c(){const e=document.createElement("aside");e.classList.add("sidebar");const r=function(n={name:"fernando"}){const e=document.createElement("article");e.classList.add("profile_container");const t=document.createElement("div"),o=document.createElement("img");o.classList.add("profile_img"),o.src=k,o.height=30,o.width=30;const r=document.createElement("p");r.textContent=n.name;const a=document.createElement("img");a.src=b,p(t,o,r,a);const c=document.createElement("div");c.classList.add("notifications_container");const i=document.createElement("img");i.src=x,i.classList.add("bell");const d=document.createElement("img");return d.classList.add("dash"),d.src=E,p(c,i,d),p(e,t,c),e}();return p(e,r,function(){const e=document.createElement("ul");e.classList.add("options");const r=u(w,"Add task",(()=>{!function(){const e=document.querySelector(".task_modal_container");null!=e&&e.remove(),n.appendChild(function(){const n=document.createElement("section");n.classList.add("task_modal_container"),n.addEventListener("click",(function(n){this.remove()}));const e=document.createElement("form");e.classList.add("modal_card"),e.addEventListener("click",(function(n){n.stopPropagation()}));const r=document.createElement("h3");r.textContent="Create Task";const c=document.createElement("input");c.type="text",c.name="name",c.id="name",c.minLength=4,c.maxLength=36,c.placeholder="Name",c.required=!0;const d=document.createElement("select"),l=t.getSections().map((n=>a(n,n)));p(d,...l);const u=document.createElement("select");u.style.backgroundColor=o.low,u.addEventListener("change",(function(n){console.log(n.target.value),u.style.backgroundColor=o[n.target.value]}));const m=[];for(const[n,e]of Object.entries(t.getPrioritylevels()))m.push(a(n,n,!0));p(u,...m);const f=document.createElement("input");f.type="date";const g=document.createElement("button");return g.type="button",g.textContent="Add Task",g.addEventListener("click",(function(){const n=document.querySelector(".task_modal_container");c.value.length>3&&""!=c.value&&(t.addTask({name:c.value,section:d.value,completed:!1,priority:l.value,date:f.value}),s(d.value),i()),n.remove()})),p(e,r,c,d,u,f,g),p(n,e),n}())}(),document.querySelector(".task_modal_container").style.visibility="visible"}));return p(e,r,u(_,"Search",(()=>{console.log("Searching for todos ")})),u(C,"Inbox",(()=>{d("inbox")})),u(L,"Today",(()=>{d("today")})),u(T,"Upcoming",(()=>{d("upcoming")}))),e}(),function(){const n=document.createElement("div"),e=function(){const n=document.createElement("div");n.classList.add("project_toolbar");const e=document.createElement("h3");e.textContent="My Projects";const t=document.createElement("div"),o=document.createElement("img");o.src=w,o.addEventListener("click",(function(){document.querySelector(".modal_container").style.visibility="visible"}));const r=document.createElement("img");return r.src=y,r.addEventListener("click",(function(){r.src===y?r.src=b:r.src=y})),p(t,o,r),p(n,e,t),n}(),t=document.createElement("ul");return t.classList.add("project_list"),p(n,e,t),n}()),e}function i(){const n=document.querySelector(".content_section");n.textContent="";const o=document.createElement("h1");o.textContent=e;const a=document.createElement("section");a.classList.add("todos_container");const c=document.createElement("section");c.classList.add("todo_section");const i=document.createElement("h2");i.textContent="Task",c.appendChild(i);const d=document.createElement("section");d.classList.add("completed_todo");const s=document.createElement("h2");s.textContent="Completed",d.appendChild(s);for(const n of r){const e=l(n,t.deleteTask);n.completed?d.appendChild(e):c.appendChild(e)}return p(a,c,d),p(n,o,a),n}function d(n){e=n,s(e),i()}function s(n){r=t.filterTasks(n)}function l(n,o){const a=document.createElement("li");a.classList.add("todo"),n.completed||(a.style.backgroundColor=n.priority);const c=document.createElement("input");c.type="checkbox",c.checked=n.completed,c.addEventListener("click",(function(e){t.completeTask(n),i()}));const d=document.createElement("p");d.textContent=n.name,n.completed&&a.classList.add("completed");const s=document.createElement("img");return s.src=h,s.addEventListener("click",(()=>{o(n,e),r=t.filterTasks(e),i()})),p(a,c,d,s),a}function u(n="",e,t){const o=document.createElement("li");o.name=e;const r=document.createElement("span");r.textContent=e;const a=document.createElement("img");return a.src=n,o.addEventListener("click",t),p(o,a,r),o}function p(n,...e){e.forEach((e=>n.appendChild(e)))}return{displayCurrentTodo:function(n){const e=[];for(const t of n)e.push(l(t));return todos},createApp:function(){n.innerHTML="";const e=document.createElement("section");e.classList.add("content_section"),p(n,c(),e,function(){const n=document.createElement("section");n.classList.add("modal_container");const e=document.createElement("div");e.classList.add("modal_card");const o=document.createElement("h3");o.textContent="Project Name";const r=document.createElement("input");r.type="text",r.name="project",r.id="project";const a=document.createElement("button");return a.classList.add("add_button_modal"),a.type="button",a.textContent="Add Project",a.addEventListener("click",(function(e){const o=r.value,a=r.value.trim(),c=document.querySelector(".project_list");if(a.length>3){const e=u(S,a,(()=>{d(o)}));t.addSection(a),c.appendChild(e),s(a),n.style.visibility="hidden",i()}})),p(e,o,r,a),p(n,e),n}()),i()}}})().createApp()})();