import DUMMY_LIST from "./dummylist";

const Render = (function () {
  const gridLeft = document.querySelector(".grid-left");
  const todos = document.querySelector(".todos");

  function initialRender() {
    DUMMY_LIST.forEach((project) => {
      renderProject(project);
    });
  }

  function renderProject(project) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const i = document.createElement("i");

    div.classList.add("project");

    if (project.isActive) {
      div.classList.add("active");
    }

    p.classList.add("project-title");
    a.classList.add("btn-trash");
    i.className = "fa-solid fa-trash-can";

    div.id = project.id;
    p.textContent = project.title;

    // Event Listeners
    div.addEventListener("click", (e) => {
      if (
        e.target.tagName.toLowerCase() === "div" ||
        e.target.tagName.toLowerCase() === "p"
      ) {
        switchProject(div, project);
      }
    });

    a.addEventListener("click", (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "i"
      ) {
        removeProject(div, project);
      }
    });

    a.append(i);
    div.append(p, a);

    gridLeft.append(div);

    project.todos.forEach((todo) => {
      renderTodo(todo);
    });
  }

  function renderTodo(todo) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const h5 = document.createElement("h5");
    const editBtn = document.createElement("i");
    const deleteBtn = document.createElement("i");

    li.classList.add("todo");

    editBtn.className = "fa-solid fa-pen todo-edit";
    deleteBtn.className = "fa-solid fa-trash todo-delete";

    li.id = todo.id;

    p.textContent = todo.title;
    h5.textContent = todo.date;

    li.append(p, h5, editBtn, deleteBtn);

    todos.append(li);
  }

  function switchProject(div, project) {
    if (project.isActive) {
      return;
    }

    removeActive();

    project.isActive = true;
    div.classList.add("active");
  }

  function removeProject(div, project) {
    const { id } = project;

    DUMMY_LIST.forEach((project, i) => {
      if (project.id === id) {
        DUMMY_LIST.splice(i, 1);
      }
    });

    div.remove();
  }

  function removeActive() {
    const projects = document.querySelectorAll(".project");

    DUMMY_LIST.forEach((project) => {
      project.isActive = false;
    });

    projects.forEach((project) => {
      project.classList.remove("active");
    });
  }

  return { initialRender, renderProject };
})();

export default Render;
