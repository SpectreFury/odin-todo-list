import Project from "./Project";
import Todo from "./Todo";
import DUMMY_PROJECTS from "./dummyprojects";

const modalProject = document.querySelector(".modal-project");
const modalTodo = document.querySelector(".modal-todo");
const btnNew = document.querySelector(".btn-new");
const btnAdd = document.querySelector(".btn-add");
const btnCross = document.querySelectorAll(".btn-cross");
const btnSubmit = document.querySelectorAll(".btn-submit");
const btnTrash = document.querySelectorAll(".btn-trash");
const form = document.querySelectorAll("form");

function drawProjects() {
  DUMMY_PROJECTS.forEach((project) => {
    const gridLeft = document.querySelector(".grid-left");
    const todos = document.querySelectorAll(".todo");

    const currentTitle = document.querySelector(".current-title");
    const currentDescription = document.querySelector(".current-description");

    const div = document.createElement("div");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const i = document.createElement("i");

    div.classList.add("project");
    p.classList.add("project-title");
    a.classList.add("btn-trash");
    i.classList.add("fa-solid");
    i.classList.add("fa-trash-can");

    p.textContent = project.title;

    currentTitle.textContent = project.title;
    currentDescription.textContent = project.description;

    if (project.isActive) {
      div.classList.add("active");
    }

    todos.forEach((todo) => {
      todo.remove();
    });

    a.append(i);
    div.append(p, a);

    a.addEventListener("click", (e) => {
      removeProject(e);
    });

    gridLeft.append(div);

    // Todos
    const ul = document.querySelector(".todos");

    project.todos.forEach((todo) => {
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

  btnTrash.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      removeProject(e);
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

  const newProject = new Project(title, description);
  DUMMY_PROJECTS.push(newProject);

  appendProject(newProject);
  hideModal();
}

function appendProject(project) {
  DUMMY_PROJECTS.push(project);
  console.log(DUMMY_PROJECTS);

  const gridLeft = document.querySelector(".grid-left");
  const todos = document.querySelectorAll(".todo");

  const currentTitle = document.querySelector(".current-title");
  const currentDescription = document.querySelector(".current-description");

  const div = document.createElement("div");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const i = document.createElement("i");

  div.classList.add("project");
  p.classList.add("project-title");
  a.classList.add("btn-trash");
  i.classList.add("fa-solid");
  i.classList.add("fa-trash-can");

  a.addEventListener("click", (e) => {
    removeProject(e);
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
    }
  });
}

function hideModal() {
  modalProject.classList.add("hide");
  modalTodo.classList.add("hide");
}

function removeProject(e) {
  e.preventDefault();

  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
  } else {
    e.target.parentElement.remove();
  }
}

export { eventListeners, drawProjects };
