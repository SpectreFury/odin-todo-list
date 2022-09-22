import Todo from "./Todo";

class Project {
  constructor(title, description) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.todos = [];
  }
}

export default Project;
