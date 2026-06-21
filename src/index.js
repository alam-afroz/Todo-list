import {
  myProjects,
  addTaskToProject,
  createProject,
  removeTaskFromProject,
  updateMyProjects,
  removeProjectFromProject,
} from "./modules/projectManager.js";

import {
  showProjectForm,
  showTaskForm,
  createTaskFromForm,
  closeTaskForm,
  appendSubTask,
  closeProjectForm,
  createProjectFromForm,
} from "./dom/form.js";

import {
  createTask,
  myTasks,
  removeTaskFromTask,
  updateMyTasks,
} from "./modules/taskManager.js";

import { changeDateFormat } from "./services/date.js";

import "./styles/main.css";

import "./styles/project.css";

import "./styles/task.css";

import { showTasks } from "./dom/domTask.js";

import { retrieveProjects, retrieveTasks } from "./services/storage.js";

import {
  showProjects,
  addingTaskToProject,
  storeTaskToProject,
} from "./dom/domProject.js";

import { Project } from "./modules/project.js";

// updateMyProjects();

retrieveProjects();

showProjects();
// updateMyTasks();
retrieveTasks();
createTaskFromForm();
showTasks();
closeTaskForm();
appendSubTask();
closeProjectForm();
createProjectFromForm();
