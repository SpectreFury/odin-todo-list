import Project from "./Project";
import Todo from "./Todo";

import Render from "./Render";

function EventListeners() {
  const btnAdd = document.querySelector(".btn-add");
  const btnNew = document.querySelector(".btn-new");
  const modalProject = document.querySelector(".modal-project");
  const modalTodo = document.querySelector(".modal-todo");
  const btnCross = document.querySelectorAll(".btn-cross");
  const btnSubmit = document.querySelectorAll(".btn-submit");
  const forms = document.querySelectorAll("form");
  const todoTitle = document.querySelector(".todo-title");
  const todoDate = document.querySelector(".todo-date");
  const projectTitle = document.querySelector(".input-title");
  const projectDescription = document.querySelector(".input-description");

  // Event Listeners
  btnAdd.addEventListener("click", showModal);
  btnNew.addEventListener("click", showModal);

  btnCross.forEach((btn) => {
    btn.addEventListener("click", hideModal);
  });

  window.document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      hideModal(e);
    }
  });

  forms.forEach((form) => {
    form.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  btnSubmit.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-todo")) {
        const title = todoTitle.value;
        const date = todoDate.value;

        if (!title || !date) {
          return;
        }

        const newTodo = new Todo(title, date);
        Render.addTodoAndRender(newTodo);

        hideModal(e);
      } else {
        const title = projectTitle.value;
        const description = projectDescription.value;

        if (!title || !description) {
          return;
        }

        Render.removeActive();
        Render.cleanTodos();

        const newProject = new Project(title, description);
        Render.addProjectAndRender(newProject);

        hideModal(e);
      }
    });
  });

  function showModal(e) {
    if (e.target.tagName.toLowerCase() === "i") {
      modalTodo.classList.remove("hide");
    } else {
      modalProject.classList.remove("hide");
    }
  }

  function hideModal(e) {
    e.preventDefault();

    modalProject.classList.add("hide");
    modalTodo.classList.add("hide");
  }
}

export default EventListeners;
