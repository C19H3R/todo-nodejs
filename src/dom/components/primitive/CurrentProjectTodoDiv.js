import { getCurrentProjectTodos } from "../../../logic/ProjectsManager.js";


const CurrentProjectTodoDiv = ()=>{
    const mainDiv=document.createElement("div")
    mainDiv.id="project-view-todos"


    function getTodoBar(title,date) {
        const todoBar = document.createElement("div");
        todoBar.classList.add("todo-div");

        const leftPart = document.createElement("div");
        const checkbox = document.createElement("img");
        checkbox.src = "../assets/radio_button_unchecked_black_24dp.svg";
        checkbox.classList.add("todo-check-uncheck");
        const todoTitle = document.createElement("span");
        todoTitle.classList.add("todo-text");
        todoTitle.textContent = title;
        leftPart.appendChild(checkbox);
        leftPart.appendChild(todoTitle);

        const rightPart = document.createElement("div");
        const dateSpan = document.createElement("span");
        dateSpan.textContent = date;
        const editButton = document.createElement("img");
        editButton.src = "../assets/edit_black_24dp.svg";
        editButton.classList.add("edit-todo");
        const deletButton = document.createElement("img");
        deletButton.src = "../assets/delete_forever_black_24dp.svg";
        deletButton.classList.add("delete-todo");
        rightPart.appendChild(dateSpan);
        rightPart.appendChild(editButton);
        rightPart.appendChild(deletButton);

        todoBar.appendChild(leftPart)
        todoBar.appendChild(rightPart)

        return todoBar;
    }

    const addNewTodoButton =document.createElement("div")
    addNewTodoButton.id="add-new-todo"
    addNewTodoButton.innerHTML=`<img src="../assets/add_black_24dp.svg" />`;
    mainDiv.appendChild(addNewTodoButton);
    return mainDiv;
    
}

export default CurrentProjectTodoDiv;