function EventListeners() {
  const btnAdd = document.querySelector(".btn-add");
  const btnNew = document.querySelector(".btn-new");
  const modalProject = document.querySelector(".modal-project");
  const modalTodo = document.querySelector(".modal-todo");
  const btnCross = document.querySelector(".btn-cross");

  // Event Listeners
  btnAdd.addEventListener("click", showModal);
  btnNew.addEventListener("click", showModal);
  btnCross.addEventListener("click", hideModal);

  window.document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      hideModal(e);
    }
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
