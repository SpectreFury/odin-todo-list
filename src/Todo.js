class Todo {
  constructor(title, date) {
    this.id = Date.now().toString();
    this.title = title;
    this.date = date;
  }
}

export default Todo;
