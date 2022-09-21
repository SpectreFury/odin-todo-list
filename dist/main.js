(()=>{"use strict";class t{constructor(e,c){this.id=t.incrementId(),this.title=e,this.description=c,this.todos=[],this.isActive=!0}static incrementId(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}}const e=t;class c{constructor(t,e){this.id=c.incrementId(),this.title=t,this.date=e,this.isCrossed=!1}static incrementId(){return this.latestId?this.latestId++:this.latestId=1,this.latestId}}const n=c,o=[],s=document.querySelector(".modal-project"),d=document.querySelector(".modal-todo"),a=document.querySelector(".btn-new"),r=document.querySelector(".btn-add"),i=document.querySelectorAll(".btn-cross"),l=document.querySelectorAll(".btn-submit"),u=document.querySelectorAll(".btn-trash"),m=document.querySelectorAll("form");function h(t){const e=document.querySelector(".grid-left"),c=document.querySelectorAll(".todo"),n=document.querySelector(".current-title"),s=document.querySelector(".current-description"),d=document.createElement("div"),a=document.createElement("p"),r=document.createElement("a"),i=document.createElement("i");d.classList.add("project"),t.isActive&&d.classList.add("active"),d.id=t.id,d.addEventListener("click",(t=>{"DIV"!==t.target.tagName&&"P"!==t.target.tagName||function(t){const e=document.querySelector(".current-title"),c=document.querySelector(".current-description"),n=document.querySelectorAll(".project");o.forEach((o=>{if(t.children[0].textContent===o.title){if(e.textContent===t.children[0].textContent)return;n.forEach((t=>{t.classList.remove("active")})),t.classList.add("active"),e.textContent=o.title,c.textContent=o.description,document.querySelectorAll(".todo").forEach((t=>{t.remove()})),console.log(o.todos),o.todos.forEach((t=>{const e=document.querySelector(".todos"),c=document.createElement("li"),n=document.createElement("p"),o=document.createElement("h5"),s=document.createElement("i"),d=document.createElement("i");c.classList.add("todo"),s.className="fa-solid fa-pen todo-edit",d.className="fa-solid fa-trash todo-delete",n.textContent=t.title,o.textContent=t.date,c.append(n,o,s,d),e.append(c)}))}}))}(d)})),a.classList.add("project-title"),r.classList.add("btn-trash"),i.classList.add("fa-solid"),i.classList.add("fa-trash-can"),r.addEventListener("click",(t=>{f(t)})),a.textContent=t.title,n.textContent=t.title,s.textContent=t.description,c.forEach((t=>{t.remove()})),r.append(i),d.append(a,r),e.append(d)}function p(){s.classList.add("hide"),d.classList.add("hide")}function f(t){t.preventDefault(),"I"===t.target.tagName?t.target.parentElement.parentElement.remove():t.target.parentElement.remove()}!function(){const t=new e("Essentials","A place to store all the essential stuff I gotta get done.");o.push(t),h(t)}(),a.addEventListener("click",(()=>{d.classList.remove("hide")})),r.addEventListener("click",(()=>{s.classList.remove("hide")})),i.forEach((t=>{t.addEventListener("click",(()=>{p()}))})),l.forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.contains("btn-project")?function(){const t=document.querySelector(".input-title"),c=document.querySelector(".input-description"),n=t.value,s=c.value;if(!n||!s)return;o.forEach((t=>{t.isActive=!1,document.querySelectorAll(".project").forEach((t=>{t.classList.contains("active")&&t.classList.remove("active")}))}));const d=new e(n,s);o.push(d),h(d),p()}():function(){const t=document.querySelector(".todo-title"),e=document.querySelector(".todo-date");if(!t||!e)return;const c=new n(t.value,e.value);o.forEach((t=>{t.isActive&&(t.todos.push(c),function(t){const e=document.querySelector(".todos"),c=document.createElement("li"),n=document.createElement("p"),o=document.createElement("h5"),s=document.createElement("i"),d=document.createElement("i");c.classList.add("todo"),c.id=t.id,s.className="fa-solid fa-pen todo-edit",d.className="fa-solid fa-trash todo-delete",n.textContent=t.title,o.textContent=t.date,c.append(n,o,s,d),e.append(c),p()}(c))}))}()}))})),window.document.addEventListener("click",(t=>{t.target.classList.contains("modal")&&t.target.classList.add("hide")})),m.forEach((t=>{t.addEventListener("submit",(t=>{t.preventDefault()}))})),u.forEach((t=>{t.addEventListener("click",(t=>{f(t)}))}))})();