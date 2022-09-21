class Todo {
  constructor(title, date) {
    this.id = Todo.incrementId();
    this.title = title;
    this.date = date;
    this.isCrossed = false;
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

export default Todo;
