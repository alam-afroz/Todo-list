import { Project } from "./project.js";

import { myTasks, createTask } from "./taskManager.js";

import { storeProject } from "../services/storage.js";

let myProjects = [];

const createProject = (name) => {
  const newProject = new Project(name);

  myProjects.push(newProject);

  storeProject();
};

function addTaskToProject(n, title) {
  const projectName = myProjects[n];
  let task = myTasks.find((todo) => todo.title === title);

  projectName.addTaskToProject(task);
}

function removeTaskFromProject(n, title) {
  const projectName = myProjects[n];
  let task = myTasks.find((todo) => todo.title === title);

  projectName.deleteTaskFromProject(task);
}

export { myProjects, createProject, addTaskToProject, removeTaskFromProject };
