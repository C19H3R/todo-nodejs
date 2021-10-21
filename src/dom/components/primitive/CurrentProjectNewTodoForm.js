import {
  CurrentProjectAddTodo,
  getCurrentProjectMode,
  getCurrentTodoInfo,
  updateCurrentTodo,
} from "../../../logic/ProjectsManager.js";
import { EDIT, VIEW } from "../../../utility/CurrentProjectMode.js";
import { HIGH, LOW, MED } from "../../../utility/priorityOptions.js";
import ReloadPage from "../../../utility/ReloadPage.js";

const CurrentProjectNewTodoForm = () => {
  const currentMode = getCurrentProjectMode();
  let newTodoTitle = "";
  let newTodoDescription = "";
  let newTodoPriority = LOW;
  let newTodoDueDate = new Date().getTime();
  let isEditMode = currentMode == EDIT;
  if (isEditMode) {
    const { title, description, dueDateISO, priority } = getCurrentTodoInfo();
    newTodoTitle = title;
    newTodoDescription = description;
    newTodoPriority = priority;
    newTodoDueDate = dueDateISO;
  }

  const handleSubmit = () => {
    if (!newTodoTitle.trim().length) {
      ReloadPage();
      return;
    }
    if (isEditMode) {
      updateCurrentTodo(
        newTodoTitle,
        newTodoDescription,
        newTodoDueDate,
        newTodoPriority
      );
    } else {
      CurrentProjectAddTodo(
        newTodoTitle,
        newTodoDescription,
        newTodoDueDate,
        newTodoPriority
      );
    }

    ReloadPage();
  };

  const mainDiv = document.createElement("div");
  mainDiv.id = "project-view-menu-info-editor";
  const formHeading = document.createElement("h3");
  formHeading.textContent = !isEditMode ? "Create Todo" : "Update Todo";
  const formDiv = document.createElement("div");
  formDiv.id = "todo-editor-form";
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  const titleInpt = document.createElement("input");
  titleInpt.addEventListener("change", (e) => (newTodoTitle = e.target.value));
  const descLabel = document.createElement("label");
  descLabel.textContent = "Description";
  const descInpt = document.createElement("textarea");
  descInpt.addEventListener(
    "change",
    (e) => (newTodoDescription = e.target.value)
  );
  // <label>DueDate</label>
  // <input type="date" />
  const dateLabel = document.createElement("label");
  dateLabel.textContent = "Due Date";
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.addEventListener("change", (e) => {
    console.log(new Date(e.target.value).getTime());
    newTodoDueDate = new Date(e.target.value).getTime();
  });

  formDiv.appendChild(titleLabel);
  formDiv.appendChild(titleInpt);
  formDiv.appendChild(descLabel);
  formDiv.appendChild(descInpt);
  formDiv.appendChild(dateLabel);
  formDiv.appendChild(dateInput);
  const radioDiv = document.createElement("div");
  radioDiv.id = "todo-editor-form-priority-radio";

  const createOption = (Type = "") => {
    const optionLable = document.createElement("label");
    const radioInput = document.createElement("input");
    radioInput.name = "priority";
    radioInput.value = Type;
    radioInput.type = "radio";
    if (Type == newTodoPriority) {
      radioInput.checked = true;
    }
    radioInput.addEventListener("change", () => {
      if (radioInput.checked) {
        newTodoPriority = Type;
      }
    });
    const textNode = document.createTextNode(Type);
    optionLable.appendChild(radioInput);
    optionLable.appendChild(textNode);
    return optionLable;
  };

  const low = createOption(LOW);
  const medium = createOption(MED);
  const High = createOption(HIGH);

  radioDiv.appendChild(low);
  radioDiv.appendChild(medium);
  radioDiv.appendChild(High);

  formDiv.appendChild(radioDiv);

  if (isEditMode) {
    titleInpt.value = newTodoTitle;
    descInpt.value = newTodoDescription;
    dateInput.value = newTodoDueDate;
  }

  const submitButton = document.createElement("button");
  submitButton.textContent = !isEditMode ? "Create" : "Update";
  submitButton.id = "todo-edit-btn";
  submitButton.addEventListener("click", handleSubmit);

  mainDiv.appendChild(formHeading);
  mainDiv.appendChild(formDiv);
  mainDiv.appendChild(submitButton);

  return mainDiv;
};

export default CurrentProjectNewTodoForm;
