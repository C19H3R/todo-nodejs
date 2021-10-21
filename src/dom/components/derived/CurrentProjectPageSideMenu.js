import {
  getCurrentProjectMode,
  getCurrentSortMode,
  getCurrentTodoInfo,
} from "../../../logic/ProjectsManager.js";
import { EDIT, NEW_TODO, VIEW } from "../../../utility/CurrentProjectMode.js";
import { DATE_ADDED, PRIOTITY } from "../../../utility/SortingOptions.js";
import CurrentProjectInfoMenu from "../primitive/CurrentProjectInfoMenu.js";
import CurrentProjectNewTodoForm from "../primitive/CurrentProjectNewTodoForm.js";
import CurrentProjectSortingMenu from "../primitive/CurrentProjectSortingMenu.js";

const CurrentProjectPageSideMenu = () => {
  const menuDiv = document.createElement("div");
  menuDiv.id = "project-view-menu";
  menuDiv.appendChild(CurrentProjectSortingMenu(getCurrentSortMode()));
  if (getCurrentProjectMode() == VIEW) {
    menuDiv.appendChild(CurrentProjectInfoMenu(getCurrentTodoInfo()));
  } else menuDiv.appendChild(CurrentProjectNewTodoForm());

  return menuDiv;
};

export default CurrentProjectPageSideMenu;
