import { myTasks } from "../modules/taskManager.js";

import { myProjects } from "../modules/projectManager.js";

function storeTasks() {
  localStorage.setItem("myTaskArray", JSON.stringify(myTasks));
}

function storeProject() {
  localStorage.setItem("myProjectArray", JSON.stringify(myProjects));
}

const rawMyTaskArray = localStorage.getItem("myTaskArray");

const rawMyProjectArray = localStorage.getItem("myProjectArray");

const activeTasks = JSON.parse(rawMyTaskArray);
const activeProjects = JSON.parse(rawMyProjectArray);

export { activeTasks, activeProjects, storeProject, storeTasks };
