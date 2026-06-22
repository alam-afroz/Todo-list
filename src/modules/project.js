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

  deleteTaskFromProject(removableTask) {
    const indexOfTask = this.projectTask.findIndex(
      (task) => task.id === removableTask.id,
    );
    this.projectTask.splice(indexOfTask, 1);
  }
}

export { Project };
