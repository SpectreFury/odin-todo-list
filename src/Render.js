import DUMMY_LIST from "./dummylist";

const Render = (function () {
  const gridLeft = document.querySelector(".grid-left");
  const todos = document.querySelector(".todos");
  const currentTitle = document.querySelector(".current-title");
  const currentDescription = document.querySelector(".current-description");

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

    currentTitle.textContent = project.title;
    currentDescription.textContent = project.description;

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

    if (project.isActive) {
      project.todos.forEach((todo) => {
        renderTodo(todo);
      });
    }
  }

  function addProjectAndRender(project) {
    DUMMY_LIST.push(project);

    renderProject(project);
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

  function addTodoAndRender(todo) {
    DUMMY_LIST.forEach((project) => {
      if (project.isActive) {
        project.todos.push(todo);
      }
    });

    renderTodo(todo);
  }

  function switchProject(div, project) {
    if (project.isActive) {
      return;
    }

    removeActive();

    project.isActive = true;
    div.classList.add("active");

    changeTitleAndDescription(project);

    cleanTodos();
    project.todos.forEach((todo) => {
      renderTodo(todo);
    });
  }

  function removeProject(div, project) {
    const { id } = project;

    DUMMY_LIST.forEach((project, i) => {
      if (project.id === id) {
        DUMMY_LIST.splice(i, 1);
      }
    });

    const prevDiv = div.previousElementSibling;
    console.log(DUMMY_LIST);

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

  function changeTitleAndDescription(project) {
    currentTitle.textContent = project.title;
    currentDescription.textContent = project.description;
  }

  function cleanTodos() {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
      todo.remove();
    });
  }

  return {
    initialRender,
    renderProject,
    addTodoAndRender,
    addProjectAndRender,
    removeActive,
    cleanTodos,
    switchProject,
  };
})();

export default Render;
