(()=>{"use strict";const e=[{title:"Urgent",description:"I just add the stuff that's important over here.",todos:[{title:"Finish the Odin Project",date:"18/9/2022",isCrossed:!1},{title:"Prepare for the Midterm Examinations",date:"23/9/2022",isCrossed:!1}],isActive:!0}],t=document.querySelector(".modal-project"),c=document.querySelector(".modal-todo"),n=document.querySelector(".btn-new"),o=document.querySelector(".btn-add"),d=document.querySelectorAll(".btn-cross"),r=document.querySelectorAll(".btn-submit"),s=document.querySelectorAll(".btn-trash"),a=document.querySelectorAll("form");function i(){t.classList.add("hide"),c.classList.add("hide")}function l(e){e.preventDefault(),"I"===e.target.tagName?e.target.parentElement.parentElement.remove():e.target.parentElement.remove()}e.forEach((e=>{const t=document.querySelector(".grid-left"),c=document.querySelectorAll(".todo"),n=document.querySelector(".current-title"),o=document.querySelector(".current-description"),d=document.createElement("div"),r=document.createElement("p"),s=document.createElement("a"),a=document.createElement("i");d.classList.add("project"),r.classList.add("project-title"),s.classList.add("btn-trash"),a.classList.add("fa-solid"),a.classList.add("fa-trash-can"),r.textContent=e.title,n.textContent=e.title,o.textContent=e.description,e.isActive&&d.classList.add("active"),c.forEach((e=>{e.remove()})),s.append(a),d.append(r,s),s.addEventListener("click",(e=>{l(e)})),t.append(d);const i=document.querySelector(".todos");e.todos.forEach((e=>{const t=document.createElement("li"),c=document.createElement("p"),n=document.createElement("h5"),o=document.createElement("i"),d=document.createElement("i");t.classList.add("todo"),o.className="fa-solid fa-pen todo-edit",d.className="fa-solid fa-trash todo-delete",c.textContent=e.title,n.textContent=e.date,t.append(c,n,o,d),i.append(t)}))})),n.addEventListener("click",(()=>{c.classList.remove("hide")})),o.addEventListener("click",(()=>{t.classList.remove("hide")})),d.forEach((e=>{e.addEventListener("click",(()=>{i()}))})),r.forEach((t=>{t.addEventListener("click",(t=>{t.target.classList.contains("btn-project")&&function(){const t=document.querySelector(".input-title"),c=document.querySelector(".input-description"),n=t.value,o=c.value;if(!n||!o)return;const d=new class{constructor(e,t){this.title=e,this.description=t,this.todos=[],this.isActive=!0}}(n,o);e.push(d),function(t){e.push(t),console.log(e);const c=document.querySelector(".grid-left"),n=document.querySelectorAll(".todo"),o=document.querySelector(".current-title"),d=document.querySelector(".current-description"),r=document.createElement("div"),s=document.createElement("p"),a=document.createElement("a"),i=document.createElement("i");r.classList.add("project"),s.classList.add("project-title"),a.classList.add("btn-trash"),i.classList.add("fa-solid"),i.classList.add("fa-trash-can"),a.addEventListener("click",(e=>{l(e)})),s.textContent=t.title,o.textContent=t.title,d.textContent=t.description,n.forEach((e=>{e.remove()})),a.append(i),r.append(s,a),c.append(r)}(d),i()}()}))})),window.document.addEventListener("click",(e=>{e.target.classList.contains("modal")&&e.target.classList.add("hide")})),a.forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault()}))})),s.forEach((e=>{e.addEventListener("click",(e=>{l(e)}))}))})();