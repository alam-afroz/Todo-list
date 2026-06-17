import { Task } from "./task.js";

import { retrieveTasks, storeTasks } from "../services/storage.js";

let myTasks = retrieveTasks();

const createTask = (title, description, dueDate, priority, subtask) => {
  const newTask = new Task(title, description, dueDate, priority, subtask);

  myTasks.push(newTask);
  storeTasks();
};

function removeTaskFromTask(taskID) {
  const indexOfTaskToRemove = myTasks.findIndex((task) => task.id === taskID);
  myTasks.splice(taskID, 1);
}

function updateMyTasks() {
  myTasks = retrieveTasks();
}

// createTask(
//   "Gym",
//   "gym ghgh ghghghg ghgskjffdfdfl afjndjfdmfnsdfnd kdfdsflkdfkdsfskdjfkf ksfksdfkdfsfsjfksf   jjjjjjjjjjjjjjjjj",
//   "2026-06-10",
//   "High-Priority",
//   ["subtask1", "subtask2"],
// );
// createTask("Walk", "gym", "2026-06-11", "High-Priority", [
//   "subtask1",
//   "subtask2",
// ]);
// createTask("Walk", "gym", "2026-06-11", "Moderate-Priority", [
//   "subtask1",
//   "subtask2",
// ]);
// createTask("Walk", "gym", "2026-06-11", "Low-Priority", [
//   "subtask1",
//   "subtask2",
// ]);

export { myTasks, createTask, removeTaskFromTask, updateMyTasks };
