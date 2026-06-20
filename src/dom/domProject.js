import {
  myProjects,
  removeProjectFromProject,
  addTaskToProject,
  updateMyProjects,
} from "../modules/projectManager.js";
import { myTasks } from "../modules/taskManager.js";

import { showTasks } from "./domTask.js";

import { retrieveProjects, storeProject } from "../services/storage.js";

function g(projectID) {
  document
    .getElementById("form_to_add_task_to_project")
    .addEventListener("submit", (e) => {
      let taskList = [];
      e.preventDefault();

      const data = new FormData(e.target);

      const dataObject = Object.fromEntries(data);
      console.log(dataObject);
      Object.values(dataObject).forEach((value) => taskList.push(value));

      let m = myTasks.filter((task) => taskList.includes(task.id));

      let projectForTheTask = myProjects.find(
        (project) => project.id === projectID,
      );

      addTaskToProject(projectForTheTask, m);

      document.getElementById("form_to_add_task_to_project").reset();
      document.getElementById("add_task_to_project").close();

      console.log(taskList);
    });
}

function addingTaskToProject() {
  myTasks.forEach((task) => {
    const label = document.createElement("label");
    label.htmlFor = `${task.title}`;
    label.textContent = `${task.title}`;
    const addThisTask = document.createElement("input");
    addThisTask.type = "checkbox";
    addThisTask.id = `${task.title}`;
    addThisTask.name = `${task.title}`;
    addThisTask.value = `${task.id}`;

    document.querySelector(".fieldset_content").appendChild(label);
    document.querySelector(".fieldset_content").appendChild(addThisTask);
  });

  document.getElementById("add_task_to_project").showModal();
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
    g(projectID);

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
      document.querySelector(".fieldset_content").replaceChildren();
      addingTaskToProject();
    });

    const openProjectBtn = document.createElement("button");
    openProjectBtn.classList.add("open_project_btn");
    openProjectBtn.textContent = "Open Project";
    projectCard.appendChild(openProjectBtn);
    openProjectBtn.addEventListener("click", () => {
      document.getElementById("content").replaceChildren();
      document.getElementById("content").dataset.state = "project";

      let projectToOpen = myProjects.find(
        (project) => project.id === projectID,
      );
      console.log(projectToOpen);
      const projectTitle = document.createElement("p");
      projectTitle.classList.add("project_title");
      projectTitle.textContent = `${projectToOpen.name}`;
      document.getElementById("content").appendChild(projectTitle);
      const taskInProject = document.createElement("div");
      taskInProject.id = "task_in_project";
      document.getElementById("content").appendChild(taskInProject);

      projectToOpen.projectTask.forEach((projectTask) => {
        const projectTaskCard = document.createElement("div");
        projectTaskCard.classList.add("project_task_card");

        taskInProject.appendChild(projectTaskCard);

        const projectTaskName = document.createElement("p");
        projectTaskName.classList.add("project_task_name");
        projectTaskName.textContent = `${projectTask.title}`;
        projectTaskCard.appendChild(projectTaskName);
      });

      const showTask = document.createElement("button");
      showTask.id = "show_task";
      showTask.textContent = "View Tasks";
      document.getElementById("content").appendChild(showTask);

      showTask.addEventListener("click", () => {
        showTasks();
      });
    });
  });
}

export { showProjects, addingTaskToProject };
