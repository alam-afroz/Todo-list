class Project {
  constructor(name, projectTask) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.projectTask = projectTask;
  }
  addTaskToProject(task) {
    task.forEach((todo) => {
      this.projectTask.push(todo);
    });
  }

  deleteTaskFromProject(giveTask) {
    const indexOfTask = this.projectTask.findIndex(
      (task) => task.title === giveTask,
    );
    this.projectTask.splice(indexOfTask, 1);
  }
}

export { Project };
