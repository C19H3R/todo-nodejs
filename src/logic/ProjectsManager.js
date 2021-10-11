import CreateProject from "./CreateProject";
import CreateTodo from "./CreateTodo";

let projects=[];
let currentProject=null;

const AddProject=(name,description="")=>{
    const newProject=CreateProject(name,description,[]);
    projects.push(newProject);
}
const setCurrentProjectWithId=(id)=>{
    current=projects[id];
}
const deleteProjectWithId=(id)=>{
    projects.filter(idx=>idx!=id);
}
const getProjects=()=>{
    return projects;
}

const CurrentProject=()=>{
    return CurrentProject;
}