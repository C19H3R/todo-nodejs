import {
  getTodoStatusWithID,
  markTodoDoneWithID,
} from "../../../logic/ProjectsManager.js";
import ReloadPage from "../../../utility/ReloadPage.js";

const CurrentProjectInfoMenu = ({ title, description, markisDone, isDone }) => {
  const infoDiv = document.createElement("div");
  infoDiv.id = "project-view-menu-info-viewer";

  const todoTitle = document.createElement("h3");
  todoTitle.textContent = title;
  const todoDesc = document.createElement("p");
  todoDesc.textContent = description;

  const buttonDiv = document.createElement("div");
  const todoDoneBtn = document.createElement("button");
  // todoDoneBtn.textContent=getTodoStatusWithID(idx)?"UnDone":"Done";
  todoDoneBtn.textContent = !isDone ? "Done" : "UnCheck";

  todoDoneBtn.id = !isDone ? "todo-done-btn" : "todo-undone-btn";
  todoDoneBtn.addEventListener("click", () => {
    markisDone();
    ReloadPage();
  });
  buttonDiv.appendChild(todoDoneBtn);

  infoDiv.appendChild(todoTitle);
  infoDiv.appendChild(todoDesc);
  infoDiv.appendChild(buttonDiv);

  return infoDiv;
};

export default CurrentProjectInfoMenu;
