class Project {
  constructor(title, description) {
    this.id = Project.incrementId();
    this.title = title;
    this.description = description;
    this.todos = [];
    this.isActive = true;
  }

  static incrementId() {
    if (!this.latestId) {
      this.latestId = 1;
    } else {
      this.latestId++;
    }

    return this.latestId;
  }
}

export default Project;
