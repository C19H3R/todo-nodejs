import { EDIT, NEW_TODO, VIEW } from "../utility/CurrentProjectMode.js";
import { LOW } from "../utility/priorityOptions.js";
import { DATE_ADDED, DUE_DATE, PRIOTITY } from "../utility/SortingOptions.js";
import CreateProject from "./CreateProject.js";
import CreateTodo from "./CreateTodo.js";
import { getAllData, setAllData } from "./localStorageManager.js";

let projects = getAllData();

let currentProject = null;
let currentTodo = null;
let currentProjectMode = null;

const AddProject = (n, d = "") => {
  const newProject = CreateProject(n, d, []);
  projects.push(newProject);
  setAllData(projects);
};
const setCurrentProjectWithId = (id) => (currentProject = projects[id]);
const unsetCurrentProject = () => (currentProject = null);

const deleteProjectWithId = (id) => projects.filter((idx) => idx != id);

const getProjects = () => projects;

const updateCurrentProjectInfo = (t, d) =>
  currentProject.updateProjectDetails(t, d);

const CurrentProjectAddTodo = (t, d, date, priority = LOW) => {
  const newTodo = CreateTodo(t, d, date, new Date().getTime(), false, priority);
  currentProject.addTodo(newTodo);
  sortCurrentProject(getCurrentSortMode());
  setAllData(projects);
};
const CurrentProjectRemoveTodo = (id) => {
  if (id == currentTodo) {
    currentTodo = null;
    currentProjectMode = NEW_TODO;
  }
  currentProject.removeTodo(id);
  setAllData(projects);
};

const CurrentProjectGetTodo = (id) => currentProject.getTodoByID(id);

const getCurrentProjectInfo = () => {
  return [currentProject.title, currentProject.description];
};
const isCurrentProjectSet = () => {
  if (currentProject == null || currentProject == undefined) {
    return false;
  }
  return true;
};
const getCurrentSortMode = () => {
  //   console.log(currentProject);
  return currentProject.sortOrder;
};
const sortCurrentProject = (mode) => {
  switch (mode) {
    case PRIOTITY:
      currentProject.sortByPriority();
      break;
    case DUE_DATE:
      currentProject.sortByDueDate();
      break;
    case DATE_ADDED:
      currentProject.sortByDateAdded();
      break;
    default:
      break;
  }
};

const markCurrentTodo = () => {
  currentTodo.isDone = !currentTodo.isDone;
};
const getCurrentTodoStatus = (id) => {
  return currentTodo.isDone;
};

const getCurrentProjectMode = () => {
  return currentProjectMode;
};
const setCurrentProjectMode = (mode, idx) => {
  if (mode == VIEW || mode == EDIT) {
    currentTodo = idx;
  }
  currentProjectMode = mode;
};
const deleteAllProjects = () => {
  currentProject = null;
  projects = [];
};
const getCurrentProjectTodos = () => {
  console.log(currentProject.todos);
  return currentProject.todos;
};
const getCurrentTodoInfo = () => {
  return getTodoInfoWithID(currentTodo);
};
const updateSavedData = () => {
  setAllData(projects);
};
const updateCurrentTodo = (t, d, date, priority) => {
  const currTodo = currentProject.getTodoByID(currentTodo);

  currTodo.updateAll(t, d, date, priority);
  setAllData(projects);
};
const getTodoInfoWithID = (id) => {
  const currTodo = currentProject.getTodoByID(id);
  const title = currTodo.title;
  const description = currTodo.description;
  const dateAdded = currTodo.dateAdded;
  const isDone = currTodo.isDone;
  const priority = currTodo.priority;
  const dueDate = currTodo.dueDate;
  const dueDateISO = currTodo.dueDateISO;
  const updateTodo = currTodo.updateAll;
  const markisDone = () => {
    currTodo.isDone = !isDone;
  };
  return {
    title,
    description,
    dueDate,
    dueDateISO,
    dateAdded,
    isDone,
    priority,
    markisDone,
    id,
    updateTodo,
  };
};

export {
  getTodoInfoWithID,
  AddProject,
  setCurrentProjectWithId,
  deleteProjectWithId,
  getProjects,
  updateCurrentProjectInfo,
  CurrentProjectAddTodo,
  getCurrentProjectMode,
  setCurrentProjectMode,
  getCurrentTodoInfo,
  CurrentProjectRemoveTodo,
  CurrentProjectGetTodo,
  getCurrentProjectInfo,
  isCurrentProjectSet,
  markCurrentTodo,
  getCurrentTodoStatus,
  getCurrentSortMode,
  sortCurrentProject,
  getCurrentProjectTodos,
  unsetCurrentProject,
  updateCurrentTodo,
  deleteAllProjects,
  updateSavedData,
};
