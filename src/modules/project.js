class Project {
  constructor(name, projectTask) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.projectTask = [...projectTask];
  }
  addTaskToProject(task) {
    // task.forEach((todo) => {

    this.projectTask.push(...task);
    // });
  }

  deleteTaskFromProject(giveTask) {
    const indexOfTask = this.projectTask.findIndex(
      (task) => task.title === giveTask,
    );
    this.projectTask.splice(indexOfTask, 1);
  }
}

export { Project };
