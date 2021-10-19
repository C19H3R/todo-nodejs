import { getTodoStatusWithID,markTodoDoneWithID } from "../../../logic/ProjectsManager.js";

const CurrentProjectInfoMenu=(title,description)=>{
    const infoDiv=document.createElement("div")
    infoDiv.id="project-view-menu-info-viewer";

        const todoTitle = document.createElement("h3")
        todoTitle.textContent=title;
        const todoDesc=document.createElement("p")
        todoDesc.textContent=description;

        const buttonDiv=document.createElement("div")
            const todoDoneBtn=document.createElement("button")
            // todoDoneBtn.textContent=getTodoStatusWithID(idx)?"UnDone":"Done";
            todoDoneBtn.textContent="Done";
            todoDoneBtn.id="todo-done-btn"
            todoDoneBtn.addEventListener("click",()=>{
                // markTodoDoneWithID(idx);
            })
        buttonDiv.appendChild(todoDoneBtn);

    infoDiv.appendChild(todoTitle)
    infoDiv.appendChild(todoDesc)
    infoDiv.appendChild(buttonDiv)

    return infoDiv;
}

export default CurrentProjectInfoMenu;