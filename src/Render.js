import DUMMY_LIST from "./dummylist";
import Todo from "./Todo";

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

    save();
    renderProject(project);
  }

  function save() {
    localStorage.setItem("PROJECT_LIST", JSON.stringify(DUMMY_LIST));
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

    editBtn.addEventListener("click", () => {
      const inputTitle = document.createElement("input");
      const inputDate = document.createElement("input");

      inputTitle.classList.add("input-edit");
      inputDate.classList.add("input-edit");

      window.document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const title = inputTitle.value;
          const date = inputDate.value;

          if (!title || !date) {
            return;
          }

          p.textContent = title;
          h5.textContent = date;

          inputTitle.remove();
          inputDate.remove();

          li.append(p, h5, editBtn, deleteBtn);

          const newTodo = new Todo(title, date);

          DUMMY_LIST.forEach((project) => {
            if (project.isActive) {
              project.todos.forEach((todo) => {
                if (todo.id === li.id) {
                  todo.title = title;
                  todo.date = date;
                }
              });
            }
          });
          save();
        }
      });

      p.remove();
      h5.remove();
      editBtn.remove();
      deleteBtn.remove();

      inputTitle.value = p.textContent;
      inputDate.value = h5.textContent;

      li.append(inputTitle, inputDate);
    });

    deleteBtn.addEventListener("click", () => {
      removeTodo(li, todo);
    });

    li.append(p, h5, editBtn, deleteBtn);

    todos.append(li);
  }

  function addTodoAndRender(todo) {
    if (DUMMY_LIST.length === 0) {
      return;
    }

    DUMMY_LIST.forEach((project) => {
      if (project.isActive) {
        project.todos.push(todo);
      }
    });

    save();
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
    let prevProject;

    DUMMY_LIST.forEach((project, i) => {
      if (project.id === id) {
        DUMMY_LIST.splice(i, 1);
        prevProject = DUMMY_LIST[i - 1];
      }
    });
    save();

    const prevDiv = div.previousElementSibling;

    if (!prevProject || !prevDiv) {
      currentTitle.textContent = "";
      currentDescription.textContent = "";

      cleanTodos();

      div.remove();
    }

    switchProject(prevDiv, prevProject);

    div.remove();
  }

  function removeTodo(li, todo) {
    const { id } = todo;

    DUMMY_LIST.forEach((project) => {
      project.todos.forEach((todo, i) => {
        if (todo.id === id) {
          project.todos.splice(i, 1);
        }
      });
    });
    save();

    li.remove();
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
