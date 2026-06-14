class Project {
  constructor(name, projectTask = []) {
    this.name = name;
    this.projectTask = projectTask;
  }
  addTaskToProject(task) {
    this.projectTask.push(task);
  }
  showProject() {
    console.log("Project name", this.name, "TASKS : ", this.projectTask);
  }
  deleteTaskFromProject(giveTask) {
    const indexOfTask = this.projectTask.findIndex(
      (task) => task.title === giveTask,
    );
    this.projectTask.splice(indexOfTask, 1);
  }
}

export { Project };
