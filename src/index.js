import {
  myProjects,
  addTaskToProject,
  createProject,
  removeTaskFromProject,
  updateMyProjects,
  removeProjectFromProject,
} from "./modules/projectManager.js";

import { showProjectForm, showTaskForm } from "./dom/form.js";

import {
  createTask,
  myTasks,
  removeTaskFromTask,
  updateMyTasks,
} from "./modules/taskManager.js";

import { changeDateFormat, checkDueDateStillLeft } from "./services/date.js";

import "./styles/main.css";

import "./styles/task.css";

import { showTasks } from "./dom/domTask.js";

const form = document.getElementById("form_task");

form.addEventListener("submit", () => {
  event.preventDefault();
  const userTask = new FormData(form);
  const userTaskObject = Object.fromEntries(userTask);

  createTask(
    userTaskObject.task_title,
    userTaskObject.description,
    userTaskObject.task_due_date,
    userTaskObject.priority,
    userTaskObject.subTask,
  );
  console.log(myTasks);
  form.reset();
  document.getElementById("dialog_task").close();
});
showTasks();
