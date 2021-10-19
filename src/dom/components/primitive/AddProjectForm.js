import { AddProject,getProjects } from "../../../logic/ProjectsManager.js";
import ReloadPage from "../../../utility/ReloadPage.js";
import Page from "../../layout/Page.js";
import ProjectPage from "../derived/ProjectPage.js";



const AddProjectForm=()=>{
    let ProjTitle="";
    let ProjDesc="";

    const HandleSubmit=()=>{
        if(ProjTitle!=""&&ProjDesc!=""){
            AddProject(ProjTitle,ProjDesc);
        //ReloadPage
        ReloadPage();
        }
        
    }



    const FormDiv=document.createElement("div");
    FormDiv.classList.add("new-proj-form-card");
        const FromHeading=document.createElement("div")
        FromHeading.innerHTML=`<h2>Add New Project</h2>`;

        const ProjectForm=document.createElement("div")
        ProjectForm.id="new-proj-form";

            //Title
            const TitleInputLabel=document.createElement("label");
            TitleInputLabel.classList.add("project-label");
            TitleInputLabel.textContent="Title";
            TitleInputLabel.setAttribute("for","project-title-input");

            const TitleInput=document.createElement("input");
            TitleInput.id="project-title-input";
            TitleInput.addEventListener("change",(e)=>ProjTitle=e.target.value);

            //Description
            const DescInputLabel=document.createElement("label");
            DescInputLabel.classList.add("project-label");
            DescInputLabel.textContent="Description";
            DescInputLabel.setAttribute("for","project-description-input");

            const DescInput=document.createElement("textarea");
            DescInput.id="project-description-input";
            DescInput.addEventListener("change",(e)=>ProjDesc=e.target.value);

        
        ProjectForm.appendChild(TitleInputLabel);
        ProjectForm.appendChild(TitleInput);
        ProjectForm.appendChild(DescInputLabel);
        ProjectForm.appendChild(DescInput);

        const ButtonDiv = document.createElement("div");
        ButtonDiv.id="create-project-btn-div";
            const ButtonEle=document.createElement("button");
            ButtonEle.id="create-new-project-btn";
            ButtonEle.textContent="Ceate";
            ButtonEle.addEventListener("click",HandleSubmit);
        ButtonDiv.appendChild(ButtonEle);

    const closeBtnDiv=document.createElement("div");
    closeBtnDiv.innerHTML=`<img src="../assets/add_black_24dp.svg">`;
    closeBtnDiv.id="new-proj-form-card-close-btn";
    closeBtnDiv.addEventListener("click",ReloadPage)
    FormDiv.appendChild(closeBtnDiv);
    FormDiv.appendChild(FromHeading);
    FormDiv.appendChild(ProjectForm);
    FormDiv.appendChild(ButtonDiv);
    return FormDiv;
}

export default AddProjectForm;