import { getCurrentSortMode } from "../../../logic/ProjectsManager.js";
import { DATE_ADDED, PRIOTITY } from "../../../utility/SortingOptions.js";
import CurrentProjectInfoMenu from "../primitive/CurrentProjectInfoMenu.js";
import CurrentProjectSortingMenu from "../primitive/CurrentProjectSortingMenu.js";

const CurrentProjectPageSideMenu=()=>{
    const menuDiv=document.createElement("div")
    menuDiv.id="project-view-menu"
    menuDiv.appendChild(CurrentProjectSortingMenu(getCurrentSortMode()))
    menuDiv.appendChild(CurrentProjectInfoMenu("test","test"));

    return menuDiv;
}

export default CurrentProjectPageSideMenu;