import { createTask, myTasks } from "../modules/taskManager.js";
import { changeDateFormat } from "../services/date.js";

import { createProject } from "../modules/projectManager.js";

import { showTasks } from "./domTask.js";

import { showProjects } from "./domProject.js";

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

function createTaskFromForm() {
  const form = document.getElementById("form_task");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userTask = new FormData(form);
    const userTaskObject = Object.fromEntries(userTask);
    const subTaskArray = userTask.getAll("subtask");
    createTask(
      userTaskObject.task_title,
      userTaskObject.task_description,
      userTaskObject.task_due_date,
      userTaskObject.priority,
      subTaskArray,
    );

    document.getElementById("dialog_task").close();
    document.getElementById("content").replaceChildren();
    showTasks();

    form.reset();
  });
}

function closeTaskForm() {
  document.querySelector(".task_form_close").addEventListener("click", () => {
    document.getElementById("form_task").reset();
    document.querySelector("#dialog_task").close();
  });
}

function appendSubTask() {
  let subTaskIncrement = 0;
  document.querySelector(".add_subtask").addEventListener("click", (e) => {
    e.preventDefault();
    subTaskIncrement++;
    const subTaskLabel = document.createElement("label");
    subTaskLabel.htmlFor = `subtask${subTaskIncrement}`;
    const subTaskInput = document.createElement("input");

    subTaskInput.type = "text";
    subTaskInput.id = `subtask${subTaskIncrement}`;
    subTaskInput.name = "subtask";
    document.querySelector(".subtask").appendChild(subTaskLabel);
    document.querySelector(".subtask").appendChild(subTaskInput);
  });
}

function createProjectFromForm() {
  const form = document.getElementById("form_project");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userProject = new FormData(form);
    const userProjectObject = Object.fromEntries(userProject);

    createProject(userProjectObject.project_name);

    document.getElementById("dialog_project").close();
    document.getElementById("project_list").replaceChildren();
    showProjects();

    form.reset();
  });
}

function closeProjectForm() {
  document
    .querySelector(".project_form_close")
    .addEventListener("click", () => {
      document.getElementById("form_project").reset();
      document.querySelector("#dialog_project").close();
    });
}

export {
  showProjectForm,
  showTaskForm,
  createTaskFromForm,
  closeTaskForm,
  createProjectFromForm,
  closeProjectForm,
  appendSubTask,
};
