import { Project } from "./project.js";

import { myTasks, createTask } from "./taskManager.js";

import { storeProject, retrieveProjects } from "../services/storage.js";

let myProjects = retrieveProjects();

function createProject(name, taskList) {
  const newProject = new Project(name, taskList);

  myProjects.push(newProject);

  storeProject();
}

function addTaskToProject(project, task) {
  const projectName = project;
  // let task = myTasks.find((todo) => todo.id === taskID);

  projectName.addTaskToProject(task);
  storeProject();
}

function removeTaskFromProject(n, title) {
  const projectName = myProjects[n];
  let task = myTasks.find((todo) => todo.title === title);

  projectName.deleteTaskFromProject(task);
}
function removeProjectFromProject(projectID) {
  const indexOfProject = myProjects.findIndex(
    (project) => project.id === projectID,
  );
  myProjects.splice(indexOfProject, 1);
}

// createProject("Projector");

function updateMyProjects() {
  // myProjects = retrieveProjects();
  console.log(myProjects);
}

export {
  myProjects,
  createProject,
  addTaskToProject,
  removeTaskFromProject,
  updateMyProjects,
  removeProjectFromProject,
};
