class Task {
  constructor(title, description, dueDate, priority, subtask, completed) {
    this.id = crypto.randomUUID();
    this.title = title;
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
