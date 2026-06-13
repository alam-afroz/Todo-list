import { Task } from "./task.js";

import { storeTasks } from "../services/storage.js";

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

export { myTasks, createTask, removeTaskFromTask };
