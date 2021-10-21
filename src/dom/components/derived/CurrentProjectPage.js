import {
  getCurrentProjectInfo,
  setCurrentProjectMode,
  unsetCurrentProject,
} from "../../../logic/ProjectsManager.js";
import { NEW_TODO } from "../../../utility/CurrentProjectMode.js";
import ReloadPage from "../../../utility/ReloadPage.js";
import CurrentProjectHeader from "../primitive/CurrentProjectHeader.js";
import CurrentProjectTodoDiv from "../primitive/CurrentProjectTodoDiv.js";
import CurrentProjectPageSideMenu from "./CurrentProjectPageSideMenu.js";

const CurrentProjectPage = () => {
  const currentProjDiv = document.createElement("div");
  currentProjDiv.id = "project-view";

  const backButton = document.createElement("div");
  backButton.id = "go-to-home-page";
  const btnImage = document.createElement("img");
  btnImage.src = "../assets/arrow_back_black_24dp.svg";
  backButton.appendChild(btnImage);
  btnImage.addEventListener("click", () => {
    unsetCurrentProject();
    setCurrentProjectMode(NEW_TODO);
    ReloadPage();
  });

  currentProjDiv.appendChild(backButton);
  const headerDiv = CurrentProjectHeader(...getCurrentProjectInfo());

  const projectViewMainDiv = document.createElement("div");
  projectViewMainDiv.id = "project-view-main";
  projectViewMainDiv.appendChild(CurrentProjectPageSideMenu());
  projectViewMainDiv.appendChild(CurrentProjectTodoDiv());

  currentProjDiv.appendChild(headerDiv);
  currentProjDiv.appendChild(projectViewMainDiv);
  return currentProjDiv;
};

export default CurrentProjectPage;
