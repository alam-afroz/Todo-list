import {
  myProjects,
  addTaskToProject,
  createProject,
  removeTaskFromProject,
} from "./modules/projectManager.js";

import {
  createTask,
  myTasks,
  removeTaskFromTask,
} from "./modules/taskManager.js";

import { changeDateFormat, checkDueDateStillLeft } from "./services/data.js";

import { activeTasks, activeProjects } from "./services/storage.js";

createTask("Gym", "gym", "2026-06-10", "high", ["subtask1", "subtask2"]);
createTask("Walk", "gym", "2026-06-11", "high", ["subtask1", "subtask2"]);
createTask("learn", "gym", "2026-06-12", "high", ["subtask1", "subtask2"]);

createProject("Project1");
createProject("Project2");
createProject("Project3");

console.log(myTasks);
checkDueDateStillLeft();
console.log(checkDueDateStillLeft());

console.log(myProjects);
console.log(activeProjects);
console.log(activeTasks);
