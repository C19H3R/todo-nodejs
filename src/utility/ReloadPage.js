import ProjectPage from "../dom/components/derived/ProjectPage.js";
import Page from "../dom/layout/Page.js";


const ReloadPage=()=>{
    while (document.body.firstChild) {
        document.body.removeChild(document.body.lastChild);
      }
    document.body.appendChild(Page(ProjectPage()));
}

export default ReloadPage;