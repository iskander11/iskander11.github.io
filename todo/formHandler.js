import { addTask } from "./list.js";
import { STATUS } from "./list.js";
import { list } from "./list.js";
import { render } from "./render.js";
import { changeStatus } from "./list.js";
import { removeTask } from "./list.js";
import { sortList } from "./list.js";

const formHandler = (event) => {
  event.preventDefault();
  const target = event.target;
  const inputName = target.children[0].name;
  const inputValue = target.children[0].value.trim();
  if (!inputValue) {
    alert("Поле не должно быть пустым");
    return null;
  }
  sortList("id");
  const listId = list.length > 0 ? list[list.length - 1].id + 1 : 1;
  addTask({
    name: inputValue,
    priority: inputName,
    status: STATUS.IN_PROGRESS,
    id: listId,
  });

  render();
  formsUpdate();
};

export const formsUpdate = () => {
  const addTaskForms = document.querySelectorAll(".todo-main-elements-input");

  for (let form of addTaskForms) {
    form.addEventListener("submit", formHandler);
  }
};

export const checkBoxHandle = (event) => {
  const checkboxButton = event.target;
  checkboxButton.classList.toggle("checked-button");
  event.target.parentElement.classList.toggle("checked");
  const checkBoxId = +event.target.parentElement.dataset.id;
  changeStatus(checkBoxId);
  sortList("status");
  render();
  formsUpdate();
};

export const removeHandler = (event) => {
  const deleteButton = event.target;
  const taskId = +deleteButton.parentElement.dataset.id;
  removeTask(taskId);
  render();
  formsUpdate();
};
