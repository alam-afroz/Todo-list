import { changeDateFormat } from "../services/date.js";

import {
  myTasks,
  removeTaskFromTask,
  updateMyTasks,
} from "../modules/taskManager.js";

import { retrieveTasks, storeTasks } from "../services/storage.js";

import { startOfDay, isBefore } from "date-fns";

function taskCompleteStatus(
  taskCardDescription,
  taskCardDueDate,
  taskCardPriority,
  taskCardSubTask,
  taskCardTitle,
  taskCard,
  taskCompleteBox,
  done,
) {
  storeTasks();
  if (taskCompleteBox.checked === true) {
    taskCardDescription.style.opacity = "20%";
    taskCardDueDate.style.opacity = "40%";
    taskCardPriority.style.opacity = "40%";
    taskCardSubTask.style.opacity = "20%";
    taskCardTitle.style.opacity = "40%";
    taskCard.style.backgroundColor = "rgba(237, 242, 244, 0.67)";
    taskCard.style.borderLeft = "4px solid rgba(217, 4, 39, 0.45)";
    done.textContent = "Well done! You've Completed the Task";
  }
  if (taskCompleteBox.checked != true) {
    taskCardDescription.style.opacity = "100%";
    taskCardDueDate.style.opacity = "100%";
    taskCardPriority.style.opacity = "100%";
    taskCardSubTask.style.opacity = "100%";
    taskCardTitle.style.opacity = "100%";
    taskCard.style.backgroundColor = "#edf2f4ff";
    done.textContent = "";
  }
  console.log(myTasks);
}

function removeTask(taskID, taskCard) {
  removeTaskFromTask(taskID);
  storeTasks();
  taskCard.remove();
}

function showTasks() {
  myTasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task_card");

    taskCard.dataset.id = task.id;
    let taskID = taskCard.dataset.id;

    document.getElementById("content").appendChild(taskCard);

    const taskCardTitle = document.createElement("p");
    taskCardTitle.classList.add("task_card_title");
    taskCardTitle.textContent = `${task.title}`;
    taskCard.appendChild(taskCardTitle);
    const taskCardDescription = document.createElement("p");
    taskCardDescription.classList.add("task_card_description");
    taskCardDescription.textContent = task.description;
    taskCard.appendChild(taskCardDescription);

    const taskCardPriority = document.createElement("p");
    taskCardPriority.classList.add("task_card_priority");
    taskCardPriority.textContent = task.priority;
    taskCard.appendChild(taskCardPriority);
    if (task.priority === "High-Priority") {
      taskCardPriority.style.backgroundColor = "rgba(69, 251, 105, 0.54)";
    }
    if (task.priority === "Moderate-Priority") {
      taskCardPriority.style.backgroundColor = "rgba(69, 196, 251, 0.59)";
      taskCardPriority.style.width = "110px";
      taskCardPriority.style.fontSize = "13px";
    }
    if (task.priority === "Low-Priority") {
      taskCardPriority.style.backgroundColor = "rgba(196, 197, 197, 0.7)";
    }

    const taskCardDueDate = document.createElement("p");
    taskCardDueDate.classList.add("task_card_due_date");
    taskCardDueDate.textContent = `${changeDateFormat(task.dueDate)}`;
    taskCard.appendChild(taskCardDueDate);

    const taskCardSubTask = document.createElement("p");
    taskCardSubTask.classList.add("task_card_subtask");
    taskCardSubTask.textContent = `Sub-Tasks : ${task.subtask}`;
    taskCard.appendChild(taskCardSubTask);

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("delete_task_btn");
    deleteTaskBtn.textContent = "\u{1F5D1}";
    taskCard.appendChild(deleteTaskBtn);

    const taskCompleteBox = document.createElement("input");
    taskCompleteBox.classList.add("task_completed_box");
    taskCompleteBox.type = "checkbox";
    taskCard.appendChild(taskCompleteBox);

    const done = document.createElement("p");
    done.classList.add("done");
    taskCard.append(done);
    let index = myTasks.findIndex((item) => item.id === taskID);
    if (myTasks[index].completed === true) {
      taskCompleteBox.checked = true;

      taskCompleteStatus(
        taskCardDescription,
        taskCardDueDate,
        taskCardPriority,
        taskCardSubTask,
        taskCardTitle,
        taskCard,
        taskCompleteBox,
        done,
      );
    }

    taskCompleteBox.addEventListener("change", () => {
      task.taskCompleted();
      taskCompleteBox.checked = task.completed;

      taskCompleteStatus(
        taskCardDescription,
        taskCardDueDate,
        taskCardPriority,
        taskCardSubTask,
        taskCardTitle,
        taskCard,
        taskCompleteBox,
        done,
      );
    });
    deleteTaskBtn.addEventListener("click", () => {
      removeTask(taskID, taskCard);
      console.log(myTasks);
    });
  });
}

export { showTasks };
