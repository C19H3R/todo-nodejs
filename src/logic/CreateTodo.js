import { format } from 'date-fns'

const CreateTodo=(title,description,duedate,isDone=false,priority="low",dateAdded="")=>{
    let todoTitle=title;
    let todoDescription=description;
    let todoDueDate=duedate;
    let todoIsDone=isDone;
    let todoPriority=priority;
    let todoDateAdded=dateAdded;

    if(todoDateAdded==""){
        todoDateAdded=new Date();
    }
    let todoDateAddedString=format(todoDateAdded,"P");

    let todoDueDateString=format(todoDueDate,"P");
    const calculateDaysLeftInString=()=>todoDueDate=format(todoDueDate,"P");

    const updateAll=(title,description,dueDate,isDone,priority)=>{
        todoTitle=title;
        todoDescription=description;
        todoDueDate=dueDate;
        todoIsDone=isDone;
        todoPriority=priority;
    };

    return {
        get title(){return todoTitle;},
        get description(){return todoDescription;},
        get dateAdded(){return todoDateAddedString},
        get dueDate(){calculateDaysLeftInString();return todoDueDateString;},
        get priority(){return todoPriority;},
        get isDone(){return todoIsDone;},
        set isDone(val){todoIsDone=val;},
        updateAll
    }
}


export default CreateTodo;