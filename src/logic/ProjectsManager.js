import { VIEW } from "../utility/CurrentProjectMode.js";
import { DATE_ADDED, DUE_DATE, PRIOTITY } from "../utility/SortingOptions.js";
import CreateProject from "./CreateProject.js";
import CreateTodo from "./CreateTodo.js";

let projects=[];
let currentProject=null;
let currentTodo=null;
let currentProjectMode=null;

const AddProject=(n,d="")=>{
    const newProject=CreateProject(n,d,[]);
    projects.push(newProject);
}
const setCurrentProjectWithId=id=>currentProject=projects[id];

const deleteProjectWithId=id=>projects.filter(idx=>idx!=id);

const getProjects=()=>projects;


const updateCurrentProjectInfo=(t,d)=>currentProject.updateProjectDetails(t,d);

const CurrentProjectAddTodo=(t,d,date)=>{
    const newTodo=CreateTodo(t,d,date,(new Date()).getTime());
    currentProject.addTodo(newTodo);
}
const CurrentProjectRemoveTodo=id=>currentProject.removeTodo(id);

const CurrentProjectGetTodo=id=>currentProject.getTodoByID(id);

const getCurrentProjectInfo=()=>{
return[currentProject.title,currentProject.description]
}
const isCurrentProjectSet=()=>{
    if(currentProject==null||currentProject==undefined){
        return false;
    }
    return true;
}
const getCurrentSortMode=()=>{
    console.log(currentProject);
    return currentProject.sortOrder;
}
const sortCurrentProject=(mode)=>{
    switch (mode) {
        case PRIOTITY:
            currentProject.sortByPriority()
            break;
        case DUE_DATE:
            currentProject.sortByDueDate();
            break;
        case DATE_ADDED:
            currentProject.sortByDateAdded();
            break;
        default:
            break;
    }
    
}
const setCurrentTodoWithID=(id)=>{
    currentTodo=currentProject.getTodoByID(id);
}

const markCurrentTodo=()=>{
    currentTodo.isDone=!currentTodo.isDone;
}
const getCurrentTodoStatus=(id)=>{
    return currentTodo.isDone;
}

const getCurrentProjectMode=()=>{
    return currentProjectMode;
}
const setCurrentProjectMode=(mode)=>{
    currentProjectMode=mode;
}

const getCurrentProjectTodos=()=>{
    return currentProject.todos;
}

export{
    
    AddProject,setCurrentProjectWithId,deleteProjectWithId,getProjects,updateCurrentProjectInfo,
    CurrentProjectAddTodo,
    CurrentProjectRemoveTodo,CurrentProjectGetTodo,getCurrentProjectInfo
    ,isCurrentProjectSet,setCurrentTodoWithID,markCurrentTodo,getCurrentTodoStatus,getCurrentSortMode,sortCurrentProject,getCurrentProjectTodos
}