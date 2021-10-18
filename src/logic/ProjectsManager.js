import CreateProject from "./CreateProject.js";
import CreateTodo from "./CreateTodo.js";

let projects=[];
let currentProject=null;

const AddProject=(n,d="")=>{
    const newProject=CreateProject(n,d,[]);
    projects.push(newProject);
}
const setCurrentProjectWithId=id=>current=projects[id];

const deleteProjectWithId=id=>projects.filter(idx=>idx!=id);

const getProjects=()=>projects;


const updateCurrentProjectInfo=(t,d)=>currentProject.updateProjectDetails(t,d);

const CurrentProjectAddTodo=(t,d,date)=>{
    const newTodo=CreateTodo(t,d,date,(new Date()).getTime());
    currentProject.addTodo(newTodo);
}
const CurrentProjectRemoveTodo=id=>currentProject.removeTodo(id);

const CurrentProjectGetTodo=id=>currentProject.getTodoByID;

export{
    AddProject,setCurrentProjectWithId,deleteProjectWithId,getProjects,updateCurrentProjectInfo,
    CurrentProjectAddTodo,
    CurrentProjectRemoveTodo,CurrentProjectGetTodo
}