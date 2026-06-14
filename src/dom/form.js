import { createTask, myTasks } from "../modules/taskManager.js";
import { changeDateFormat } from "../services/date.js";

function showTaskForm() {
  document.getElementById("dialog_task").showModal();
}

function showProjectForm() {
  document.getElementById("dialog_project").showModal();
}

document.getElementById("add_task_btn").addEventListener("click", () => {
  showTaskForm();
});

document.getElementById("add_project_btn").addEventListener("click", () => {
  showProjectForm();
});

export { showProjectForm, showTaskForm };
