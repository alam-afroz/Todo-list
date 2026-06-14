import { changeDateFormat } from "../services/date.js";

import { myTasks } from "../modules/taskManager.js";

function showTasks() {
  let i;
  for (i = 0; i < myTasks.length; i++) {
    const taskCard = document.createElement("div");
    taskCard.id = "task_card";
    document.getElementById("content").appendChild(taskCard);

    const taskCardTitle = document.createElement("p");
    taskCardTitle.id = "task_card_title";
    taskCardTitle.textContent = `${myTasks[i].title}`;
    taskCard.appendChild(taskCardTitle);
    const taskCardDescription = document.createElement("p");
    taskCardDescription.id = "task_card_description";
    taskCardDescription.textContent = myTasks[i].description;
    taskCard.appendChild(taskCardDescription);

    const taskCardPriority = document.createElement("p");
    taskCardPriority.id = "task_card_priority";
    taskCardPriority.textContent = myTasks[i].priority;
    taskCard.appendChild(taskCardPriority);

    const taskCardDueDate = document.createElement("p");
    taskCardDueDate.id = "task_card_due_date";
    taskCardDueDate.textContent = changeDateFormat(myTasks[i].dueDate);
    taskCard.appendChild(taskCardDueDate);
  }
}

export { showTasks };
