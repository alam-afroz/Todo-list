import { myTasks } from "../modules/taskManager.js";

import { myProjects } from "../modules/projectManager.js";

function storeTasks() {
  localStorage.setItem("myTaskArray", JSON.stringify(myTasks));
}

function storeProject() {
  localStorage.setItem("myProjectArray", JSON.stringify(myProjects));
}

function retrieveTasks() {
  const rawMyTaskArray = localStorage.getItem("myTaskArray");
  const activeTasks = JSON.parse(rawMyTaskArray);
  return activeTasks;
}

function retrieveProjects() {
  const rawMyProjectArray = localStorage.getItem("myProjectArray");

  const activeProjects = JSON.parse(rawMyProjectArray);
  return activeProjects;
}
export { retrieveProjects, retrieveTasks, storeProject, storeTasks };
