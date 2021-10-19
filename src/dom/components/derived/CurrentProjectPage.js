import { getCurrentProjectInfo } from "../../../logic/ProjectsManager.js";
import CurrentProjectHeader from "../primitive/CurrentProjectHeader.js";
import CurrentProjectTodoDiv from "../primitive/CurrentProjectTodoDiv.js";
import CurrentProjectPageSideMenu from "./CurrentProjectPageSideMenu.js";

const CurrentProjectPage=()=>{

    const currentProjDiv=document.createElement("div")
    currentProjDiv.id="project-view";

    const headerDiv=CurrentProjectHeader(...getCurrentProjectInfo())

    const projectViewMainDiv=document.createElement("div")
    projectViewMainDiv.id="project-view-main"
    projectViewMainDiv.appendChild(CurrentProjectPageSideMenu());
    projectViewMainDiv.appendChild(CurrentProjectTodoDiv())

    currentProjDiv.appendChild(headerDiv);
    currentProjDiv.appendChild(projectViewMainDiv);
    return currentProjDiv;
}

export default CurrentProjectPage;