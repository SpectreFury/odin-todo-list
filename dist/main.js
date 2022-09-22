(()=>{"use strict";const e=[];class t{constructor(e,o){this.id=Date.now().toString(),this.title=e,this.description=o,this.todos=[],this.isActive=t.setActive()}static setActive(){return e.forEach((e=>{e.isActive=!1})),!0}}const o=t,n=function(){const t=document.querySelector(".grid-left"),o=document.querySelector(".todos"),n=document.querySelector(".current-title"),c=document.querySelector(".current-description");function i(o){const i=document.createElement("div"),s=document.createElement("p"),l=document.createElement("a"),u=document.createElement("i");n.textContent=o.title,c.textContent=o.description,i.classList.add("project"),o.isActive&&i.classList.add("active"),s.classList.add("project-title"),l.classList.add("btn-trash"),u.className="fa-solid fa-trash-can",i.id=o.id,s.textContent=o.title,i.addEventListener("click",(e=>{"div"!==e.target.tagName.toLowerCase()&&"p"!==e.target.tagName.toLowerCase()||r(i,o)})),l.addEventListener("click",(t=>{"a"!==t.target.tagName.toLowerCase()&&"i"!==t.target.tagName.toLowerCase()||function(t,o){const{id:i}=o;let d;e.forEach(((t,o)=>{t.id===i&&(e.splice(o,1),d=e[o-1])}));const s=t.previousElementSibling;d&&s||(n.textContent="",c.textContent="",a(),t.remove()),r(s,d),t.remove()}(i,o)})),l.append(u),i.append(s,l),t.append(i),o.isActive&&o.todos.forEach((e=>{d(e)}))}function d(e){const t=document.createElement("li"),n=document.createElement("p"),c=document.createElement("h5"),i=document.createElement("i"),d=document.createElement("i");t.classList.add("todo"),i.className="fa-solid fa-pen todo-edit",d.className="fa-solid fa-trash todo-delete",t.id=e.id,n.textContent=e.title,c.textContent=e.date,t.append(n,c,i,d),o.append(t)}function r(e,t){t.isActive||(s(),t.isActive=!0,e.classList.add("active"),function(e){n.textContent=e.title,c.textContent=e.description}(t),a(),t.todos.forEach((e=>{d(e)})))}function s(){const t=document.querySelectorAll(".project");e.forEach((e=>{e.isActive=!1})),t.forEach((e=>{e.classList.remove("active")}))}function a(){document.querySelectorAll(".todo").forEach((e=>{e.remove()}))}return{initialRender:function(){e.forEach((e=>{i(e)}))},renderProject:i,addTodoAndRender:function(t){0!==e.length&&(e.forEach((e=>{e.isActive&&e.todos.push(t)})),d(t))},addProjectAndRender:function(t){e.push(t),i(t)},removeActive:s,cleanTodos:a,switchProject:r}}();n.initialRender(),function(){const e=document.querySelector(".btn-add"),t=document.querySelector(".btn-new"),c=document.querySelector(".modal-project"),i=document.querySelector(".modal-todo"),d=document.querySelectorAll(".btn-cross"),r=document.querySelectorAll(".btn-submit"),s=document.querySelectorAll("form"),a=document.querySelector(".todo-title"),l=document.querySelector(".todo-date"),u=document.querySelector(".input-title"),m=document.querySelector(".input-description");function v(e){"i"===e.target.tagName.toLowerCase()?i.classList.remove("hide"):c.classList.remove("hide")}function f(e){e.preventDefault(),c.classList.add("hide"),i.classList.add("hide")}e.addEventListener("click",v),t.addEventListener("click",v),d.forEach((e=>{e.addEventListener("click",f)})),window.document.addEventListener("click",(e=>{e.target.classList.contains("modal")&&f(e)})),s.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault()}))})),r.forEach((e=>{e.addEventListener("click",(e=>{if(e.target.classList.contains("btn-todo")){const t=a.value,o=l.value;if(!t||!o)return;const c=new class{constructor(e,t){this.id=Date.now().toString(),this.title=e,this.date=t}}(t,o);n.addTodoAndRender(c),f(e)}else{const t=u.value,c=m.value;if(!t||!c)return;n.removeActive(),n.cleanTodos();const i=new o(t,c);n.addProjectAndRender(i),f(e)}}))}))}()})();