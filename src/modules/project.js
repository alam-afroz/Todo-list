class Project {
  constructor(name, projectTask) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.projectTask = projectTask;
  }
  addTaskToProject(task) {
    this.projectTask.push(task);
  }

  deleteTaskFromProject(giveTask) {
    const indexOfTask = this.projectTask.findIndex(
      (task) => task.title === giveTask,
    );
    this.projectTask.splice(indexOfTask, 1);
  }
}

export { Project };
