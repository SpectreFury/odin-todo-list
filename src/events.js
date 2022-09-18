function eventListeners() {
  const btnNew = document.querySelector(".btn-new");
  const btnAdd = document.querySelector(".btn-add");
  const btnCross = document.querySelectorAll(".btn-cross");
  const btnSubmit = document.querySelectorAll(".btn-submit");
  const modalProject = document.querySelector(".modal-project");
  const modalTodo = document.querySelector(".modal-todo");
  const form = document.querySelectorAll("form");

  btnNew.addEventListener("click", () => {
    modalTodo.classList.remove("hide");
  });

  btnAdd.addEventListener("click", () => {
    modalProject.classList.remove("hide");
  });

  btnCross.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalProject.classList.add("hide");
      modalTodo.classList.add("hide");
    });
  });

  btnSubmit.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-project")) {
        const gridLeft = document.querySelector(".grid-left");

        const inputTitle = document.querySelector(".input-title");
        const inputDescription = document.querySelector(".input-description");

        const div = document.createElement("div");
        div.classList.add("project");

        const p = document.createElement("p");
        p.classList.add("project-title");

        const a = document.createElement("a");
        a.classList.add("btn-trash");

        const i = document.createElement("i");
        i.classList.add("fa-solid");
        i.classList.add("fa-trash-can");

        a.append(i);
        div.append(p, a);

        gridLeft.append(div);

        modalProject.classList.add("hide");
        modalTodo.classList.add("hide");
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

export default eventListeners;
