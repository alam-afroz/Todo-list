import {
  myProjects,
  removeProjectFromProject,
  updateMyProjects,
} from "../modules/projectManager.js";
import { myTasks } from "../modules/taskManager.js";

import { retrieveProjects, storeProject } from "../services/storage.js";

function addingTaskToProject() {
  myTasks.forEach((task) => {
    const label = document.createElement("label");
    label.htmlFor = `${task.title}`;
    label.textContent = `${task.title}`;
    const addThisTask = document.createElement("input");
    addThisTask.type = "checkbox";
    addThisTask.id = `${task.title}`;
    addThisTask.name = `${task.title}`;
    let taskID = task.id;

    document.getElementById("form_to_add_task_to_project").appendChild(label);
    document
      .getElementById("form_to_add_task_to_project")
      .appendChild(addThisTask);
  });
  document.getElementById("add_task_to_project").showModal();
}

function openProject() {
  //
}

function showProjects() {
  myProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project_card");
    console.log(project);
    projectCard.dataset.id = project.id;
    let projectID = projectCard.dataset.id;
    document.getElementById("project_list").appendChild(projectCard);
    const projectCardName = document.createElement("p");
    projectCardName.classList.add("project_card_name");
    projectCardName.textContent = `${project.name}`;
    projectCard.appendChild(projectCardName);

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.classList.add("delete_project_btn");
    deleteProjectBtn.textContent = "\u{1F5D1}";
    projectCard.appendChild(deleteProjectBtn);

    deleteProjectBtn.addEventListener("click", () => {
      removeProjectFromProject(projectID);
      projectCard.remove();
      console.log(myProjects);
      storeProject();
    });

    const addTaskToProjectBtn = document.createElement("button");
    addTaskToProjectBtn.classList.add("add_task_to_project_btn");
    addTaskToProjectBtn.textContent = "Add Tasks";
    projectCard.appendChild(addTaskToProjectBtn);

    addTaskToProjectBtn.addEventListener("click", () => {
      addingTaskToProject();
    });

    const openProjectBtn = document.createElement("button");
    openProjectBtn.classList.add("open_project_btn");
    openProjectBtn.textContent = "Open Project";
    projectCard.appendChild(openProjectBtn);
  });
}

export { showProjects };
