const CreateProject=(title,todos=[])=>{
    let projectTitle=title;
    let projectTodos=todos;

    const addTodo=(todo)=>projectTodos.push(todo);
    const removeTodo=(toRemove)=>projectTodos.filter(i=>i!=toRemove);
    
    //sort based on priority
    //sort based on due date
    //based on Date Added
    

    return {
        get title(){return projectTitle;},
        set title(val){projectTitle=val},

    }
    
    
}