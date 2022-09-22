import DUMMY_LIST from "./dummylist";
import Todo from "./Todo";

class Project {
  constructor(title, description) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.todos = [];
    this.isActive = Project.setActive();
  }

  static setActive() {
    DUMMY_LIST.forEach((project) => {
      project.isActive = false;
    });

    return true;
  }
}

export default Project;
