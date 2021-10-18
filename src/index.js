import ProjectPage from "./dom/components/derived/ProjectPage.js";
import Page from "./dom/layout/Page.js";
import { getProjects } from "./logic/ProjectsManager.js";
document.body.appendChild(Page(ProjectPage()));

