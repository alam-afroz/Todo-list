class Task {
  constructor(title, description, dueDate, priority, subtask, completed, id) {
    this.title = title;
    this.id = id || crypto.randomUUID();
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.subtask = subtask;
    this.completed = completed;
  }
  taskCompleted() {
    this.completed = !this.completed;
  }
}

export { Task };
