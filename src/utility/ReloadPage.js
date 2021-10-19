import CurrentProjectPage from "../dom/components/derived/CurrentProjectPage.js";
import ProjectPage from "../dom/components/derived/ProjectPage.js";
import Page from "../dom/layout/Page.js";
import { isCurrentProjectSet } from "../logic/ProjectsManager.js";


const ReloadPage=()=>{
    while (document.body.firstChild) {
      document.body.removeChild(document.body.lastChild);
    }
    if(isCurrentProjectSet()){
    document.body.appendChild(Page(CurrentProjectPage()));
    }else{
      document.body.appendChild(Page(ProjectPage()));
    }
    
}

export default ReloadPage;