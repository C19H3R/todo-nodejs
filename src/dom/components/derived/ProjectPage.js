import { getProjects } from "../../../logic/ProjectsManager.js";
import AddProjectCard from "../primitive/AddProjectCard.js";
import AddProjectForm from "../primitive/AddProjectForm.js";
import ProjectCard from "../primitive/ProjectCard.js";



const ProjectPage = ()=>{
    const ProjectsArr=getProjects();
    
    const projectFlexBox = document.createElement("div")
    projectFlexBox.classList.add("projects-flexbox");


    ProjectsArr.forEach((proj)=>{
        projectFlexBox.appendChild(ProjectCard(proj.title,proj.description))
    })
    const AddProjCard=AddProjectCard();
    AddProjCard.addEventListener("click",()=>{
        const tmp=document.querySelector("main");
        console.log(tmp);
        // tmp.appendChild()
        tmp.appendChild(AddProjectForm())
    })
    projectFlexBox.appendChild(AddProjCard);

    return projectFlexBox;

}

export default ProjectPage