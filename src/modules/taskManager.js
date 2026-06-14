import { Task } from "./task.js";

import { retrieveTasks, storeTasks } from "../services/storage.js";

let myTasks = [];

const createTask = (title, description, dueDate, priority, subtask) => {
  const newTask = new Task(title, description, dueDate, priority, subtask);

  myTasks.push(newTask);
  storeTasks();
};

function removeTaskFromTask(taskTitle) {
  const indexOfTask = myTasks.findIndex((task) => task.title === taskTitle);
  myTasks.splice(indexOfTask, 1);
}

function updateMyTasks() {
  myTasks = retrieveTasks();
}

createTask("Gym", "gym", "2026-06-10", "high", ["subtask1", "subtask2"]);
createTask("Walk", "gym", "2026-06-11", "high", ["subtask1", "subtask2"]);
createTask("Walk", "gym", "2026-06-11", "high", ["subtask1", "subtask2"]);
createTask("Walk", "gym", "2026-06-11", "high", ["subtask1", "subtask2"]);
createTask("Walk", "gym", "2026-06-11", "high", ["subtask1", "subtask2"]);
createTask("Walk", "gym", "2026-06-11", "high", ["subtask1", "subtask2"]);
createTask("learn", "gym", "2026-06-12", "high", ["subtask1", "subtask2"]);

export { myTasks, createTask, removeTaskFromTask, updateMyTasks };
