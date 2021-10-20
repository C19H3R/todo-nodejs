
const CurrentProjectNewTodoForm=()=>{
    const mainDiv=document.createElement("div");
    mainDiv.id="project-view-menu-info-editor"
        const formHeading=document.createElement("h3")
        formHeading.textContent="Create Todo"
        const formDiv=document.createElement("div")
        formDiv.id="todo-editor-form"
          const titleLabel=document.createElement("label")
          titleLabel.textContent="Title"
          const titleInpt=document.createElement("input")
          const descLabel=document.createElement("label")
          descLabel.textContent="Title"
          const descInpt=document.createElement("textarea")

          formDiv.appendChild(titleLabel)
          formDiv.appendChild(titleInpt)
          formDiv.appendChild(descLabel)
          formDiv.appendChild(descInpt)

          const radioDiv=document.createElement("div")
          radioDiv.id="todo-editor-form-priority-radio"

            const createOption=(Type="")=>{
              const optionLable=document.createElement("label")
                const radioInput=document.createElement("input")
                radioInput.name="priority"
                radioInput.value=Type
                radioInput.type="radio"
              const textNode=document.createTextNode(Type)
              optionLable.appendChild(radioInput)
              optionLable.appendChild(textNode);
              return optionLable;
            }

            const low=createOption("Low")
            const medium=createOption("Med")
            const High=createOption("High")

            radioDiv.appendChild(low)
            radioDiv.appendChild(medium)
            radioDiv.appendChild(High)

          formDiv.appendChild(radioDiv)

        const submitButton=document.createElement("button")
        submitButton.textContent="Create"
        submitButton.id="todo-edit-btn"

        mainDiv.appendChild(formHeading)
        mainDiv.appendChild(formDiv)
        mainDiv.appendChild(submitButton)

        return mainDiv;

          
        
}

export default CurrentProjectNewTodoForm;