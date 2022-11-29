import { drawError } from "../VIEW/notification/notification.js";
export const errorHandle = (error) => {
  if (error.message === "Failed to fetch") {
    drawError("Connection failed");
  } else {
    drawError(error.message);
  }
};
