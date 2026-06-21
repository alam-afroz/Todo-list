import { myTasks } from "../modules/taskManager.js";

import { Task } from "../modules/task.js";

import { myProjects } from "../modules/projectManager.js";

import { updateMyTasks } from "../modules/taskManager.js";
import { Project } from "../modules/project.js";

function storeTasks() {
  localStorage.setItem("myTaskArray", JSON.stringify(myTasks));
}

function storeProject() {
  localStorage.setItem("myProjectArray", JSON.stringify(myProjects));
}

function retrieveTasks() {
  const rawMyTaskArray = JSON.parse(localStorage.getItem("myTaskArray"));
  const activeTasks = rawMyTaskArray.map((task) => {
    return new Task(
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      task.subtask,
      task.completed,
      task.id,
    );
  });
  return activeTasks;
}

function retrieveProjects() {
  const rawMyProjectArray = JSON.parse(localStorage.getItem("myProjectArray"));
  const activeProjects = rawMyProjectArray.map((project) => {
    return new Project(project.name, project.projectTask);
  });
  return activeProjects;
}

export { retrieveProjects, retrieveTasks, storeProject, storeTasks };
