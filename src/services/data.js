import { format, parseISO, isBefore, startOfToday } from "date-fns";

import { myTasks } from "../modules/taskManager.js";
import { se } from "date-fns/locale";

function changeDateFormat() {
  myTasks.forEach((element) => {
    const userPickedDate = element.dueDate;

    const newDate = format(parseISO(element.dueDate), "dd-MM-yy, eee");
    return newDate;
  });
}

export { changeDateFormat, checkDueDateStillLeft };

function checkDueDateStillLeft() {
  let userPickedDate;
  myTasks.forEach((element) => {
    userPickedDate = element.dueDate;
    const today = startOfToday();
  });
  if (isBefore(parseISO(userPickedDate), startOfToday())) return false;
  else true;
}
