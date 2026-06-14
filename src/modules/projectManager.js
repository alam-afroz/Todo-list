import { Project } from "./project.js";

import { myTasks, createTask } from "./taskManager.js";

import { storeProject, retrieveProjects } from "../services/storage.js";

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
function removeProjectFromProject(title) {
  const indexOfProject = myProjects.findIndex(
    (project) => project.title === title,
  );
  myProjects.splice(indexOfProject, 1);
}

function updateMyProjects() {
  myProjects = retrieveProjects();
  console.log(myProjects);
}

createProject("Project One");

export {
  myProjects,
  createProject,
  addTaskToProject,
  removeTaskFromProject,
  updateMyProjects,
  removeProjectFromProject,
};
