import {
  CurrentProjectRemoveTodo,
  getCurrentProjectTodos,
  getTodoInfoWithID,
  setCurrentProjectMode,
  setCurrentProjectWithId,
  setCurrentTodoWithID,
} from "../../../logic/ProjectsManager.js";
import { EDIT, NEW_TODO, VIEW } from "../../../utility/CurrentProjectMode.js";
import { HIGH, LOW, MED } from "../../../utility/priorityOptions.js";
import ReloadPage from "../../../utility/ReloadPage.js";

const CurrentProjectTodoDiv = () => {
  const mainDiv = document.createElement("div");
  mainDiv.id = "project-view-todos";

  function getTodoBar(
    { title, dueDate, dateAdded, isDone, markisDone, priority },
    idx
  ) {
    const todoBar = document.createElement("div");
    todoBar.classList.add("todo-div");
    switch (priority) {
      case LOW:
        todoBar.classList.add("todo-div-low-priority");
        break;
      case MED:
        todoBar.classList.add("todo-div-med-priority");
        break;
      case HIGH:
        todoBar.classList.add("todo-div-high-priority");
        break;

      default:
        break;
    }
    const leftPart = document.createElement("div");
    const checkbox = document.createElement("img");

    if (isDone) checkbox.src = "../assets/check_circle_black_24dp.svg";
    else checkbox.src = "../assets/radio_button_unchecked_black_24dp.svg";

    checkbox.classList.add("todo-check-uncheck");
    checkbox.addEventListener("click", () => {
      markisDone();
      ReloadPage();
    });
    const todoTitle = document.createElement("span");
    todoTitle.addEventListener("click", () => {
      setCurrentProjectMode(VIEW, idx);
      ReloadPage();
    });
    todoTitle.classList.add("todo-text");
    todoTitle.textContent = title;
    leftPart.appendChild(checkbox);
    leftPart.appendChild(todoTitle);

    const rightPart = document.createElement("div");
    const dateSpan = document.createElement("span");
    dateSpan.textContent = dueDate;
    const editButton = document.createElement("img");
    editButton.src = "../assets/edit_black_24dp.svg";
    editButton.addEventListener("click", () => {
      setCurrentProjectMode(EDIT, idx);
      ReloadPage();
    });
    editButton.classList.add("edit-todo");
    const deletButton = document.createElement("img");
    deletButton.src = "../assets/delete_forever_black_24dp.svg";
    deletButton.classList.add("delete-todo");
    deletButton.addEventListener("click", () => {
      CurrentProjectRemoveTodo(idx);
      console.log("to remove" + idx);
      ReloadPage();
    });
    rightPart.appendChild(dateSpan);
    rightPart.appendChild(editButton);
    rightPart.appendChild(deletButton);

    todoBar.appendChild(leftPart);
    todoBar.appendChild(rightPart);

    return todoBar;
  }
  const currentTodos = getCurrentProjectTodos();

  currentTodos.forEach((element, idx) => {
    const currTodo = getTodoBar(getTodoInfoWithID(idx), idx);
    mainDiv.appendChild(currTodo);
  });

  const addNewTodoButton = document.createElement("div");
  addNewTodoButton.addEventListener("click", () => {
    setCurrentProjectMode(NEW_TODO);
    ReloadPage();
  });
  addNewTodoButton.id = "add-new-todo";
  addNewTodoButton.innerHTML = `<img src="../assets/add_black_24dp.svg" />`;
  mainDiv.appendChild(addNewTodoButton);
  return mainDiv;
};

export default CurrentProjectTodoDiv;
