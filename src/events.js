import Project from "./Project";
import Todo from "./Todo";

import DUMMY_PROJECTS from "./dummyprojects";

const modalProject = document.querySelector(".modal-project");
const modalTodo = document.querySelector(".modal-todo");
const btnNew = document.querySelector(".btn-new");
const btnAdd = document.querySelector(".btn-add");
const btnCross = document.querySelectorAll(".btn-cross");
const btnSubmit = document.querySelectorAll(".btn-submit");
const form = document.querySelectorAll("form");

function defaultProjects() {
  const defaultProject = new Project(
    "Essentials",
    "A place to store all the essential stuff I gotta get done."
  );

  DUMMY_PROJECTS.push(defaultProject);
  appendProject(defaultProject);
}

function drawCurrent(div) {
  const currentTitle = document.querySelector(".current-title");
  const currentDescription = document.querySelector(".current-description");

  if (!div) {
    currentTitle.textContent = "";
    currentDescription.textContent = "";
    return;
  }

  const projects = document.querySelectorAll(".project");

  DUMMY_PROJECTS.forEach((project) => {
    if (+div.id === project.id) {
      if (currentTitle.textContent === div.children[0].textContent) {
        return;
      }

      projects.forEach((project) => {
        project.classList.remove("active");
      });

      div.classList.add("active");

      currentTitle.textContent = project.title;
      currentDescription.textContent = project.description;

      clearTodos();

      project.todos.forEach((todo) => {
        const ul = document.querySelector(".todos");
        const li = document.createElement("li");
        const title = document.createElement("p");
        const date = document.createElement("h5");
        const editButton = document.createElement("i");
        const deleteButton = document.createElement("i");

        li.classList.add("todo");

        editButton.className = "fa-solid fa-pen todo-edit";
        deleteButton.className = "fa-solid fa-trash todo-delete";

        title.textContent = todo.title;
        date.textContent = todo.date;

        li.append(title, date, editButton, deleteButton);
        ul.append(li);
      });
    }
  });
}

function eventListeners() {
  btnNew.addEventListener("click", () => {
    modalTodo.classList.remove("hide");
  });

  btnAdd.addEventListener("click", () => {
    modalProject.classList.remove("hide");
  });

  btnCross.forEach((btn) => {
    btn.addEventListener("click", () => {
      hideModal();
    });
  });

  btnSubmit.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-project")) {
        createProject();
      } else {
        createTodo();
      }
    });
  });

  window.document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.classList.add("hide");
    }
  });

  form.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
}

function createProject() {
  const inputTitle = document.querySelector(".input-title");
  const inputDescription = document.querySelector(".input-description");

  const title = inputTitle.value;
  const description = inputDescription.value;

  if (!title || !description) {
    return;
  }

  DUMMY_PROJECTS.forEach((project) => {
    project.isActive = false;
    removeActive();
  });

  const newProject = new Project(title, description);
  DUMMY_PROJECTS.push(newProject);

  appendProject(newProject);
  hideModal();
}

function appendProject(project) {
  const gridLeft = document.querySelector(".grid-left");
  const todos = document.querySelectorAll(".todo");

  const currentTitle = document.querySelector(".current-title");
  const currentDescription = document.querySelector(".current-description");

  const div = document.createElement("div");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const i = document.createElement("i");

  div.classList.add("project");
  if (project.isActive) {
    div.classList.add("active");
  }

  div.id = project.id;

  div.addEventListener("click", (e) => {
    if (e.target.tagName === "DIV" || e.target.tagName === "P") {
      drawCurrent(div);
    }
  });

  p.classList.add("project-title");
  a.classList.add("btn-trash");
  i.classList.add("fa-solid");
  i.classList.add("fa-trash-can");

  a.addEventListener("click", () => {
    if (!div.classList.contains("active")) {
      return;
    }

    removeProject(div);
  });

  p.textContent = project.title;

  currentTitle.textContent = project.title;
  currentDescription.textContent = project.description;

  todos.forEach((todo) => {
    todo.remove();
  });

  a.append(i);
  div.append(p, a);

  gridLeft.append(div);
}

function createTodo() {
  const title = document.querySelector(".todo-title");
  const date = document.querySelector(".todo-date");

  if (!title || !date) {
    return;
  }

  const newTodo = new Todo(title.value, date.value);

  DUMMY_PROJECTS.forEach((project) => {
    if (project.isActive) {
      project.todos.push(newTodo);
      appendTodo(newTodo);
    }
  });
}

function appendTodo(todo) {
  const ul = document.querySelector(".todos");
  const li = document.createElement("li");
  const title = document.createElement("p");
  const date = document.createElement("h5");
  const editButton = document.createElement("i");
  const deleteButton = document.createElement("i");

  li.classList.add("todo");
  li.id = todo.id;

  editButton.className = "fa-solid fa-pen todo-edit";
  deleteButton.className = "fa-solid fa-trash todo-delete";

  title.textContent = todo.title;
  date.textContent = todo.date;

  li.append(title, date, editButton, deleteButton);
  ul.append(li);
  hideModal();
}

function hideModal() {
  modalProject.classList.add("hide");
  modalTodo.classList.add("hide");
}

function removeProject(div) {
  DUMMY_PROJECTS.forEach((project, i) => {
    if (+div.id === project.id) {
      DUMMY_PROJECTS.splice(i, 1);

      const todos = document.querySelectorAll(".todo");

      todos.forEach((todo) => {
        todo.remove();
      });

      const prevElement = div.previousElementSibling;

      drawCurrent(prevElement);

      div.remove();
    }
  });
}

function removeActive(project) {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    if (project.classList.contains("active")) {
      project.classList.remove("active");
    }
  });
}

function clearTodos() {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    todo.remove();
  });
}

export { eventListeners, defaultProjects };
