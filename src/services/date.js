import { format, parseISO, isBefore, startOfToday } from "date-fns";

import { myTasks } from "../modules/taskManager.js";
import { se } from "date-fns/locale";

function changeDateFormat(date) {
  if (date === "") return "No Due date";
  else {
    const newDate = format(parseISO(date), "dd-MM-yy, eee");

    return newDate;
  }
}

export { changeDateFormat };
