import {
  addTaskToProject,
  myProjects,
  removeProjectFromProject,
  updateMyProjects,
  removeTaskFromProject,
} from "../modules/projectManager.js";

import { myTasks } from "../modules/taskManager.js";

import {
  retrieveProjects,
  retrieveTasks,
  storeProject,
  storeTasks,
} from "../services/storage.js";

import { showTasks, taskCompleteStatus, removeTask } from "./domTask.js";

function a(p, t) {
  addTaskToProject(p, t);
}

let currentProjectID = null;

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
    console.log(task.id);
    // storeTasks();
    document.querySelector(".fieldset_content").appendChild(label);
    document.querySelector(".fieldset_content").appendChild(addThisTask);
  });
  document.getElementById("add_task_to_project").showModal();
}

function showProjects() {
  myProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project_card");
    // console.log(project);
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
      // console.log(myProjects);
      storeProject();
    });

    const addTaskToProjectBtn = document.createElement("button");
    addTaskToProjectBtn.classList.add("add_task_to_project_btn");
    addTaskToProjectBtn.dataset.id = project.id;
    addTaskToProjectBtn.textContent = "Add Tasks";
    projectCard.appendChild(addTaskToProjectBtn);

    addTaskToProjectBtn.addEventListener("click", () => {
      document.querySelector(".fieldset_content").replaceChildren();
      addingTaskToProject();
      currentProjectID = addTaskToProjectBtn.dataset.id;
      // storeTaskToProject(projectID);
    });

    const openProjectBtn = document.createElement("button");
    openProjectBtn.classList.add("open_project_btn");
    openProjectBtn.textContent = "Open Project";
    projectCard.appendChild(openProjectBtn);
    openProjectBtn.addEventListener("click", () => {
      // document.getElementById("content").replaceChildren();
      // document.getElementById("content").dataset.state = "project";

      let projectToOpen = myProjects.find(
        (project) => project.id === projectID,
      );
      openProject(projectToOpen);
      // const projectTitle = document.createElement("p");
      // projectTitle.classList.add("project_title");
      // projectTitle.textContent = `${projectToOpen.name}`;
      // document.getElementById("content").appendChild(projectTitle);
      // const taskInProject = document.createElement("div");
      // taskInProject.id = "task_in_project";
      // document.getElementById("content").appendChild(taskInProject);

      // projectToOpen.projectTask.forEach((projectTask) => {
      //   const projectTaskCard = document.createElement("div");
      //   projectTaskCard.classList.add("project_task_card");

      //   taskInProject.appendChild(projectTaskCard);

      //   const projectTaskName = document.createElement("p");
      //   projectTaskName.classList.add("project_task_name");
      //   projectTaskName.textContent = `${projectTask.title}`;
      //   projectTaskCard.appendChild(projectTaskName);
      // });
    });
  });
  storeProject();
  // console.log(myProjects);
}

let taskList = [];

document
  .getElementById("form_to_add_task_to_project")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    let projectToAddTask = myProjects.find(
      (project) => project.id === currentProjectID,
    );
    console.log("project to add task to : ", projectToAddTask);
    taskList.length = 0;

    const data = new FormData(e.target);
    const dataObject = Object.fromEntries(data);
    console.log("User selected tasks in object from : ", dataObject);
    Object.values(dataObject).forEach((value) => taskList.push(value));
    // storeTasks();
    let newTaskList = myTasks.filter((task) => {
      return taskList.includes(task.id);
    });
    console.log("Task which will be added to task :", newTaskList);
    newTaskList.forEach((task) => {
      if (projectToAddTask.projectTask.some((item) => item.id === task.id)) {
        console.log(
          `${task.title} is already present in ${projectToAddTask.name}`,
        );
      } else {
        projectToAddTask.addTaskToProject(newTaskList);
      }
    });
    console.log('extracting id"s from form object :', taskList);
    storeProject();
    console.log("Current project array : ", myProjects);
    openProject(projectToAddTask);
    document.getElementById("add_task_to_project").close();
    document.getElementById("form_to_add_task_to_project").reset();
    currentProjectID = null;
  });

function openProject(projectToOpen) {
  document.getElementById("content").replaceChildren();
  document.getElementById("content").dataset.state = "project";

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

    const removeTaskFromProjectBtn = document.createElement("button");
    removeTaskFromProjectBtn.classList.add("remove_task_from_project_btn");
    removeTaskFromProjectBtn.textContent = "Remove task";
    projectTaskCard.appendChild(removeTaskFromProjectBtn);
    console.log(projectToOpen, projectTask);
    removeTaskFromProjectBtn.addEventListener("click", () => {
      projectToOpen.deleteTaskFromProject(projectTask);
      projectTaskCard.remove();
      storeProject();
      openProject(projectToOpen);
    });
    // const taskCompleteBox = document.createElement("input");
    // taskCompleteBox.classList.add("task_completed_box");
    // taskCompleteBox.type = "checkbox";
    // taskCard.appendChild(taskCompleteBox);
  });
}
export { showProjects, addingTaskToProject };
