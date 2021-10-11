import { compareAsc } from "date-fns";


const CreateProject=(title,description,todos=[])=>{
    let projectTitle=title;
    let projectTodos=todos;
    let projectDescription=description;

    const addTodo=(todo)=>projectTodos.push(todo);
    const removeTodo=(toRemove)=>projectTodos.filter(i=>i!=toRemove);
    
    //Priority Sort
    const HIGH="high";
    const MEDIUM="medum";
    const LOW="low";
    const _getPriorityIdx=(priority)=>{
        switch (priority) {
            case HIGH:
                return 1;
            case MEDIUM:
                return 0;
            case LOW:
                return -1;
        }
    }
    const _comparePriority=(a,b)=>{
        if(_getPriorityIdx(a)>_getPriorityIdx(b)){
            return 1;
        }
        if(_getPriorityIdx(a)<_getPriorityIdx(b)){
            return -1;
        }
        return 0;
    }
    const sortByPriority=()=>{
        projectTodos.sort(_comparePriority);
        return projectTodos;
    }

    //DueDate Sort
    const _compareDueDates=(a,b)=>{
        return compareAsc(a.dueDate,b.dueDate)
    }
    const sortByDueDate=()=>{
        projectTodos.sort(_compareDueDates);
        return projectTodos;
    }

    //DateAdded Sort
    const _compareDateAdded=(a,b)=>{
        return compareAsc(a.dateAdded,b.dateAdded)
    }
    const sortByDateAdded=()=>{
        projectTodos.sort(_compareDateAdded);
        return projectTodos;
    }

    const updateProjectDetails=(title,description=projectDescription)=>{
        projectDescription=description;
        projectTitle=title;
    }

    return {
        get title(){return projectTitle;},
        get description(){return projectDescription},
        set title(val){projectTitle=val},
        get todos(){projectTodos},
        addTodo,
        removeTodo,
        updateProjectDetails,
        sortByPriority,
        sortByDueDate,
        sortByDateAdded
    }   
}

export default CreateProject;